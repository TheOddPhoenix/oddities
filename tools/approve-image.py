"""Prepare a reviewed image and attach it to its catalog entry. No generation/API calls.

python tools/approve-image.py --id location-id --input /path/to/reviewed.png --approve
Requires Pillow. Existing outputs are preserved unless --replace is explicit.
"""
import argparse,json,re
from pathlib import Path
from PIL import Image,ImageOps
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--id',required=True);parser.add_argument('--input',required=True,type=Path)
parser.add_argument('--approve',action='store_true');parser.add_argument('--replace',action='store_true')
parser.add_argument('--focus-x',type=float,default=.5);parser.add_argument('--focus-y',type=float,default=.5)
args=parser.parse_args();root=Path(__file__).resolve().parent.parent
if not args.approve:parser.error('Review the image first, then explicitly pass --approve.')
if not re.fullmatch(r'[a-z0-9-]+',args.id):parser.error('Invalid location ID.')
if not 0<=args.focus_x<=1 or not 0<=args.focus_y<=1:parser.error('Focus must be between 0 and 1.')
data=(root/'data.js').read_text(encoding='utf-8');prefix,raw=data.split('const trips = ',1)
trips=json.loads(raw.strip().removesuffix(';'));item=next((x for x in trips if x['id']==args.id),None)
if not item:parser.error('Unknown location ID.')
outputs=[root/'images'/f'{args.id}{suffix}.webp' for suffix in ('','-800','-400')]
if not args.replace and any(p.exists() for p in outputs):parser.error('An output exists; use a new version or explicitly pass --replace.')
image=ImageOps.exif_transpose(Image.open(args.input)).convert('RGB')
if min(image.size)<600:parser.error('Choose a source at least 600 pixels on its shortest side.')
for width,dest in zip((1200,800,400),outputs):
 prepared=ImageOps.fit(image,(width,round(width*2/3)),method=Image.Resampling.LANCZOS,centering=(args.focus_x,args.focus_y))
 prepared.save(dest,'WEBP',quality=80,method=6)
item.update(image=f'images/{args.id}.webp',image_kind='AI-generated illustration',image_sizes=[400,800,1200])
(root/'data.js').write_text(prefix+'const trips = '+json.dumps(trips,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
manifestPath=root/'content/image-manifest.json';manifest=json.loads(manifestPath.read_text(encoding='utf-8'))
manifest['entries'][args.id].update(status='approved',image=item['image'],focus=[args.focus_x,args.focus_y])
manifestPath.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Prepared and attached',args.id,'at 400, 800 and 1200 pixels. Review the site before publishing.')
