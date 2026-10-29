/* Offline authoring tool: makes reviewable prompts; performs no API calls. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const trips=vm.runInNewContext(fs.readFileSync(path.join(root,'data.js'),'utf8')+';trips');
const manifestPath=path.join(root,'content/image-manifest.json');
const manifest=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{version:1,reference:'images/eureka.webp',entries:{}};
const style='Use the existing Eureka Springs illustration as a STYLE REFERENCE ONLY: near-black desaturated teal-gray palette, cinematic overcast dusk, weathered architectural detail or rugged natural landscape, restrained fog, fine film grain. Keep details legible at card size. Wide 3:2 composition with a crop-safe center. No text, logos, watermarks, people, bodies, staged crime evidence, ghosts, or invented supernatural events. This is an interpretive AI illustration, not documentary photography.';
const queue=[];
for(const item of trips){
 const prompt=`Create an Oddities destination-card illustration for ${item.title}, ${item.region}, ${item.state}. Story context: ${item.desc} Depict the place or its surrounding landscape, not the event itself. For recognizable architecture, consult approved visual references; otherwise use an atmospheric interpretation of the setting. ${style}`;
 const record=manifest.entries[item.id]||{status:item.image?'approved':'queued'};
 manifest.entries[item.id]={...record,locationId:item.id,title:item.title,promptVersion:1,prompt,reference:manifest.reference,imageKind:'AI-generated illustration'};
 if(record.status!=='approved')queue.push({id:item.id,prompt,reference:manifest.reference,output:`images/${item.id}.webp`,requiresReview:true});
}
fs.mkdirSync(path.join(root,'content'),{recursive:true});
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
fs.writeFileSync(path.join(root,'content/image-queue.jsonl'),queue.map(x=>JSON.stringify(x)).join('\n')+'\n');
console.log(`${queue.length} prompts queued; ${trips.length-queue.length} images approved. No images generated or published.`);
