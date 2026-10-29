'use strict';
const $ = id => document.getElementById(id);
const categories = {all:['All','sparkles'],alien:['Aliens & UFOs','ufo'],cemetery:['Cemeteries','headstone'],cryptid:['Cryptids','bigfoot'],historic:['Dark history','landmark'],missing:['Disappearances','help-circle'],haunted:['Haunted','ghost'],crime:['True crime','fingerprint']};
function icon(name){
 const custom = {
  bigfoot: '<g><path d="M8 11c-1.5-1-3.2-.3-3.6 1.3-.4 1.6.7 2.7.7 4.1 0 1.6-.2 3 1.2 3.5 1.5.5 2.8-.5 2.8-2 .1-1.3-.5-2.2-.2-3.5.3-1.4.6-2.9-.9-3.9Z"/><g stroke-width="1.4"><ellipse cx="3.1" cy="9" rx=".55" ry=".7"/><ellipse cx="4.3" cy="7.7" rx=".6" ry=".8"/><ellipse cx="5.8" cy="7" rx=".65" ry=".9"/><ellipse cx="7.5" cy="7.1" rx=".75" ry="1"/><ellipse cx="9.3" cy="8.2" rx=".9" ry="1.3"/></g></g><g transform="translate(24 -3) scale(-1 1)"><path d="M8 11c-1.5-1-3.2-.3-3.6 1.3-.4 1.6.7 2.7.7 4.1 0 1.6-.2 3 1.2 3.5 1.5.5 2.8-.5 2.8-2 .1-1.3-.5-2.2-.2-3.5.3-1.4.6-2.9-.9-3.9Z"/><g stroke-width="1.4"><ellipse cx="3.1" cy="9" rx=".55" ry=".7"/><ellipse cx="4.3" cy="7.7" rx=".6" ry=".8"/><ellipse cx="5.8" cy="7" rx=".65" ry=".9"/><ellipse cx="7.5" cy="7.1" rx=".75" ry="1"/><ellipse cx="9.3" cy="8.2" rx=".9" ry="1.3"/></g></g>',
  headstone: '<path d="M5 21V9a7 7 0 0 1 14 0v12"/><path d="M3 21h18M9 10h6M10 14h4"/>',
  ufo: '<path d="M7 10a5 5 0 0 1 10 0"/><ellipse cx="12" cy="12" rx="10" ry="3"/><path d="m8 18-1 3m5-3v3m4-3 1 3"/>'
 };
 if(Object.hasOwn(custom,name))return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="${name==='bigfoot'?'currentColor':'none'}" stroke="${name==='bigfoot'?'none':'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ${name==='bigfoot'?'icon-bigfoot':''}" data-icon="${name}" aria-hidden="true" focusable="false">${custom[name]}</svg>`;
 return `<i data-lucide="${name}" class="icon" aria-hidden="true"></i>`;
}
function refreshIcons(){if(typeof lucide!=='undefined')lucide.createIcons({attrs:{'aria-hidden':'true',focusable:'false'}});}
const states = {AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'District of Columbia'};
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const canonicalId = id => locationAliases[id] || id;
const catalog = new Map(trips.map(item => [item.id,item]));
const normalize = text => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
let storageAvailable = true;
function readStored(key,fallback){try {const raw=localStorage.getItem(key);return raw ? JSON.parse(raw):fallback;}catch {storageAvailable=false;return fallback;}}
function cleanCollections(value){const result=Object.create(null);if(value && typeof value==='object' && !Array.isArray(value)){for(const [name,ids] of Object.entries(value)){if(!name.trim() || name.length>80 || !Array.isArray(ids))continue;result[name]=[...new Set(ids.filter(id=>typeof id==='string').map(canonicalId).filter(id=>catalog.has(id)))];}}return result;}
let collections=cleanCollections(readStored('oddstops_collections',{'My Bucket List':[]}));
if(!Object.keys(collections).length)collections['My Bucket List']=[];
const rawVisited=readStored('oddstops_visited',[]);
let visited=new Set((Array.isArray(rawVisited)?rawVisited:[]).filter(id=>typeof id==='string').map(canonicalId).filter(id=>catalog.has(id)));
let category='all',visibleCount=12,activeList=null,activeSaveId=null,detailReturnFocus=null,toastTimer;
let activeView='explore',detailOrigin='#explore',mapCategory='all',mapInstance=null,mapLayer=null;
const relatedSeeds=new Map();
function persist(){try{localStorage.setItem('oddstops_collections',JSON.stringify(collections));localStorage.setItem('oddstops_visited',JSON.stringify([...visited]));storageAvailable=true;return true;}catch{storageAvailable=false;notify('Browser storage is unavailable. Export a backup to keep your changes.');return false;}}
function notify(message){clearTimeout(toastTimer);const openDialog=document.querySelector('dialog[open]');if(openDialog){let feedback=openDialog.querySelector('.feedback');if(!feedback){feedback=document.createElement('p');feedback.className='feedback';feedback.setAttribute('role','status');openDialog.append(feedback);}feedback.textContent=message;}else{$('toast').textContent=message;$('toast').hidden=false;toastTimer=setTimeout(()=>$('toast').hidden=true,5000);}}
function locationText(item){const region=item.region||'';return region.endsWith(', '+item.state)?region:region+', '+item.state;}
function tags(item){return [...new Set([item.category,...(item.tags||[])])].filter(tag=>categories[tag] && tag!=='all').sort((x,y)=>categories[x][0].localeCompare(categories[y][0]));}
function badges(item){return tags(item).map(tag=>`<span class="badge">${icon(categories[tag][1])}${categories[tag][0]}</span>`).join('')+(item.restricted?'<span class="badge restriction">Restricted access</span>':'');}
function media(item,eager=false){if(item.image)return `<div class="media"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" width="1200" height="${item.image_sizes?800:655}" ${item.image_sizes?`srcset="images/${item.id}-400.webp 400w, images/${item.id}-800.webp 800w, images/${item.id}.webp 1200w" sizes="(max-width: 580px) 90vw, (max-width: 900px) 45vw, 600px"`:""} loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}></div>`;const [label,symbol]=categories[item.category]||categories.historic;return `<div class="media" aria-hidden="true"><div class="art"><span class="art-symbol">${icon(symbol)}</span><span class="art-label">${label}</span></div></div>`;}
function isSaved(id){return Object.values(collections).some(ids=>ids.includes(id));}
function card(item,inCollection=false){return `<article class="card ${visited.has(item.id)?'visited':''}" data-location="${escapeHtml(item.id)}">${media(item)}<h3><a class="card-link" href="#location/${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h3><p class="place">${icon('map-pin')}${escapeHtml(locationText(item))}</p><p class="card-desc">${escapeHtml(item.desc)}</p><div class="badges">${badges(item)}</div><div class="card-actions"><button data-save="${escapeHtml(item.id)}" aria-label="Save ${escapeHtml(item.title)} to a list">${icon('bookmark')}${isSaved(item.id)?'Saved':'Save'}</button><button class="visited-button" data-visited="${escapeHtml(item.id)}" aria-pressed="${visited.has(item.id)}">${icon('check-circle')}${visited.has(item.id)?'Visited':'Mark visited'}</button>${inCollection?`<button data-remove="${escapeHtml(item.id)}">Remove</button>`:''}</div></article>`;}
function searchTrips(query='',selectedCategory='all',selectedState='all'){
 const value=normalize(query);
 return trips.filter(item=>(selectedCategory==='all'||tags(item).includes(selectedCategory))&&(selectedState==='all'||item.state===selectedState)&&(!value||normalize([item.title,item.region,item.state,states[item.state],...tags(item).map(tag=>categories[tag][0])].join(' ')).includes(value)));
}
function refineTrips(items,prefix=''){
 const story=$(prefix+'subcategory')?.value||'all',place=$(prefix+'place-type')?.value||'all',experience=$(prefix+'experience')?.value||'all';
 return items.filter(item=>(story==='all'||Object.values(item.subcategories||{}).includes(story))&&(place==='all'||item.place_type===place)&&(experience==='all'||bookingActions(item).some(action=>action.kind===experience)));
}
function renderRefinements(prefix='',parent=category){
 const items=searchTrips('',parent),select=$(prefix+'subcategory');
 const previous=select.value;const options=[...new Set(items.map(item=>item.subcategories?.[parent]).filter(Boolean))].sort();
 select.innerHTML='<option value="all">All stories</option>'+options.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');select.value=options.includes(previous)?previous:'all';select.closest('label').hidden=parent==='all';
 const places=$(prefix+'place-type');const oldPlace=places.value;const types=[...new Set(items.map(item=>item.place_type).filter(Boolean))].sort();places.innerHTML='<option value="all">All place types</option>'+types.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');places.value=types.includes(oldPlace)?oldPlace:'all';
}
function filteredTrips(){return refineTrips(searchTrips($('search').value,category,$('state').value));}
function renderGrid(){if($('subcategory')?.closest)renderRefinements();const filtered=filteredTrips();$('grid').innerHTML=filtered.slice(0,visibleCount).map(item=>card(item)).join('')||'<div class="empty"><h3>No locations found</h3><p>Try a different name, city, or state, or clear your filters.</p><button data-reset class="secondary">Clear filters</button></div>';$('results-count').textContent=`Showing ${Math.min(visibleCount,filtered.length)} of ${filtered.length} locations`;$('load-more').hidden=visibleCount>=filtered.length;refreshIcons();}
function renderFeatured(){const item=catalog.get('eureka');$('featured').innerHTML=`<article class="featured-card">${media(item,true)}<div class="featured-copy"><p class="eyebrow">Arkansas · Architecture & lore</p><h3><a class="card-link" href="#location/eureka">${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.desc)}</p><div class="badges featured-badges">${badges(item)}</div><a class="primary" href="#location/eureka">Discover Eureka Springs ${icon('arrow-up-right')}</a></div></article>`;refreshIcons();}
function renderMenu(){$('list-links').replaceChildren();for(const name of Object.keys(collections)){const button=document.createElement('button');button.innerHTML=icon('folder-heart');button.append(document.createTextNode(`${name} (${collections[name].length})`));button.addEventListener('click',()=>{setMenu(false);location.hash='list/'+encodeURIComponent(name);});$('list-links').append(button);}refreshIcons();}
function setMenu(open){$('lists-menu').hidden=!open;$('lists-toggle').setAttribute('aria-expanded',String(open));}
function renderCollection(){if(!activeList||!Object.hasOwn(collections,activeList))return;$('collection-title').textContent=activeList;$('collection-grid').innerHTML=collections[activeList].map(id=>catalog.get(id)).filter(Boolean).map(item=>card(item,true)).join('')||'<div class="empty"><h3>Your next adventure starts here</h3><p>Explore locations and save a few to this list.</p><a class="primary" href="#explore">Explore locations</a></div>';refreshIcons();}
function refreshSavedUI(){renderMenu();renderGrid();renderCollection();}
function showDialog(dialog){if(!dialog.open)dialog.showModal();}
function distanceKm(a,b){const p=mapLocations[a.id],q=mapLocations[b.id];if(!p||!q)return Infinity;const rad=x=>x*Math.PI/180;const dLat=rad(q.lat-p.lat),dLng=rad(q.lng-p.lng);const h=Math.sin(dLat/2)**2+Math.cos(rad(p.lat))*Math.cos(rad(q.lat))*Math.sin(dLng/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));}
function relatedStops(item){
 const explicit=(item.related||[]).map(id=>catalog.get(canonicalId(id))).filter(stop=>stop&&stop.id!==item.id);
 if(!relatedSeeds.has(item.id))relatedSeeds.set(item.id,Math.random());
 const seed=relatedSeeds.get(item.id);
 const pool=trips.filter(stop=>stop.id!==item.id&&!explicit.some(x=>x.id===stop.id)).map(stop=>{
  const sameCity=normalize(stop.region.split(',')[0])===normalize(item.region.split(',')[0])&&stop.state===item.state;
  const overlap=(stop.themes||[]).filter(theme=>(item.themes||[]).includes(theme)).length;
  const genre=tags(stop).filter(tag=>tags(item).includes(tag)).length;
  const sameStory=Object.values(stop.subcategories||{}).some(story=>Object.values(item.subcategories||{}).includes(story));
  const sameCategory=stop.category===item.category;
  const distance=distanceKm(item,stop);
  const nearby=distance<65;
  let hash=0;for(const ch of stop.id)hash=(hash*31+ch.charCodeAt(0))>>>0;
  return {stop,eligible:sameCity||overlap>0||genre>0,score:(sameCity?100:0)+(nearby?35:0)+overlap*25+(sameCategory?45:0)+(sameStory?20:0)+genre*8+((hash*seed)%7)};
 }).filter(x=>x.eligible).sort((x,y)=>y.score-x.score);
 return [...explicit,...pool.map(x=>x.stop)].slice(0,4);
}
function relatedMarkup(item){const stops=relatedStops(item);if(!stops.length)return '';return `<section aria-labelledby="related-title"><h3 id="related-title">Related Oddities</h3><div class="related-grid">${stops.map(stop=>{const near=distanceKm(item,stop)<65;return `<a class="related-stop" href="#location/${encodeURIComponent(stop.id)}"><strong>${escapeHtml(stop.title)}</strong><span class="fine">${escapeHtml(locationText(stop))}</span><span class="badge">${icon(near?'map-pin':'compass')}${near?'Nearby stop':'Similar story'}</span></a>`;}).join('')}</div></section>`;}
let detailMap=null;
function disposeDetailMap(){if(detailMap){detailMap.remove();detailMap=null;}}
function bookingActions(item){return item.restricted?[]:(item.actions||[]);}
function openLocation(id){
 const item=catalog.get(canonicalId(id));if(!item){notify('That location is no longer in the catalog.');return;}
 disposeDetailMap();
 if(!$('detail').open){detailReturnFocus=document.activeElement;detailOrigin=activeView==='map'?'#map':activeList?'#list/'+encodeURIComponent(activeList):'#explore';}
 $('detail-title').textContent=item.title;
 $('detail-back-explore').hidden=detailOrigin!=='#map';
 const warnings=item.know_before?.length?item.know_before:item.disclaimers||[];
 const point=mapLocations[item.id];
 const sources=[...(item.sources||[]),...(item.notorious_inmates||[]).map(person=>({label:person.name+' — historical source',url:person.url}))];
 $('detail-content').innerHTML=`${media(item)}${item.image?'<p class="image-credit">AI-generated illustration · atmospheric artwork, not a documentary photograph</p>':''}<p class="place">${icon('map-pin')}${escapeHtml(locationText(item))}</p><div class="badges">${badges(item)}<span class="badge">${escapeHtml(item.place_type||'Historic Site')}</span></div><h3>Dark History &amp; Lore</h3><p>${escapeHtml(item.history||item.desc)}</p>${item.notorious_inmates?.length?`<section><h3>Notorious Inmates</h3><ul>${item.notorious_inmates.map(person=>`<li><strong>${escapeHtml(person.name)}</strong> — ${escapeHtml(person.context)}</li>`).join('')}</ul></section>`:''}<section class="notice" aria-labelledby="access-title"><h3 id="access-title">Know Before You Visit</h3><ul>${warnings.map(w=>`<li>${escapeHtml(w)}</li>`).join('')}</ul></section>${point?'<details id="detail-map-toggle" class="detail-map"><summary>View Location Map</summary><div id="detail-mini-map" role="region" aria-label="Location map"></div></details>':''}${sources.length?`<details class="story-sources"><summary>Historical Sources</summary><ul class="source-list">${sources.map(source=>`<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a></li>`).join('')}</ul></details>`:''}${relatedMarkup(item)}`;
 $('detail-actions').replaceChildren();
 for(const action of bookingActions(item)){const link=document.createElement('a');link.className='primary';link.href=action.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=action.label;$('detail-actions').append(link);}
 if(!item.restricted){const map=document.createElement('a');map.className='secondary';map.target='_blank';map.rel='noopener noreferrer';map.innerHTML=icon('navigation')+'Get Directions';map.href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(item.title+' '+locationText(item)+' USA');$('detail-actions').append(map);}
 const save=document.createElement('button');save.className='secondary';save.innerHTML=icon('bookmark')+(isSaved(item.id)?'Manage saved lists':'Save to a list');save.addEventListener('click',()=>openSave(item.id));$('detail-actions').append(save);
 $('detail-map-toggle')?.addEventListener('toggle',event=>{if(!event.target.open)return;if(typeof L==='undefined'){$('detail-mini-map').textContent='The map could not load. Please try again later.';return;}if(!detailMap){detailMap=L.map('detail-mini-map',{scrollWheelZoom:false}).setView([point.lat,point.lng],point.precision==='area'?11:15);L.tileLayer(siteConfig.mapTileUrl,{attribution:siteConfig.mapAttribution,maxZoom:18}).addTo(detailMap);L.marker([point.lat,point.lng],{title:item.title,icon:L.divIcon({className:'map-marker',html:'<span class="map-marker-dot">'+icon(categories[item.category][1])+'</span>',iconSize:[30,30],iconAnchor:[15,15]})}).addTo(detailMap);refreshIcons();}detailMap.invalidateSize();});
 showDialog($('detail'));$('detail').scrollTop=0;$('detail-title').focus();document.title=item.title+' | Oddities';refreshIcons();
}
function openSave(id){activeSaveId=id;renderSaveOptions();$('list-name').value='';showDialog($('save-dialog'));}
function renderSaveOptions(){$('save-options').replaceChildren();for(const name of Object.keys(collections)){const saved=collections[name].includes(activeSaveId);const button=document.createElement('button');button.innerHTML=icon(saved?'check-circle':'plus');button.append(document.createTextNode(name));button.setAttribute('aria-pressed',String(saved));button.addEventListener('click',()=>{const ids=collections[name];if(saved)collections[name]=ids.filter(id=>id!==activeSaveId);else ids.push(activeSaveId);const ok=persist();renderSaveOptions();refreshSavedUI();if(ok)notify(saved?'Removed from '+name:'Saved to '+name);});$('save-options').append(button);}refreshIcons();}
const info={
 about:['About Oddities','<p>Oddities is The Odd Phoenix’s guide to dark tourism: notorious crimes, alleged hauntings, disappearances, tragic history, and cemeteries with stories that endure.</p><p>Explore with curiosity and care. Real people and communities are behind these stories. A listing does not mean a location is open to visitors.</p><p>Build personal travel lists and track visited places. Your lists stay in this browser unless you export them.</p>'],
 contact:['Contact & corrections','<p>Have a question, a correction, or a location suggestion?</p><p><a class="primary" href="https://github.com/TheOddPhoenix/oddities/issues/new" target="_blank" rel="noopener noreferrer">Contact us on GitHub ↗</a></p><p>GitHub requires an account to submit. Issues are public, so do not include private contact information, sensitive details, or information about private residents.</p>'],
 privacy:['Privacy','<p>Oddities does not ask you to create an account. Saved lists and visited locations are stored in your browser’s local storage. They are not sent to an Oddities account or synchronized across devices.</p><p>This version includes no analytics trackers or advertising scripts. The Outfit font is supplied by Google Fonts. Opening the map loads OpenStreetMap tiles, which disclose your network connection and viewed map area to the tile service; no device location is requested. GitHub Pages hosts the site and may process connection information under its own privacy practices.</p><p>Map, operator, and GitHub links take you to third-party services with their own privacy policies. Exported backups contain your list names, saved location IDs, and visited location IDs; share them only as you intend.</p><p>You can remove individual lists in Manage & back up lists. Clearing this site’s browser data removes saved lists and visited status. Export a backup first if you wish to keep them.</p><p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub privacy statement ↗</a></p>'],
 terms:['Using this guide','<p>Oddities provides general historical and travel discovery information. Listings do not grant access to private property, establish safe conditions, or guarantee an attraction is operating.</p><p>Check official sources for current opening hours, permissions, reservations, road conditions, and accessibility. Respect posted restrictions, local communities, victims, and memorials.</p><p>Local legends and paranormal reports are presented as stories, not scientific findings. Some catalog entries await source review and may contain errors. Please use Contact to share corrections and sources.</p><p>External websites operate independently. Saved lists depend on your browser storage; export backups to avoid losing them.</p>'],
 editorial:['Our approach','<p>We aim to distinguish documented history from local lore and describe sensitive places with respect.</p><p>Entries with a source review include direct sources and a review date. Other summaries are marked as awaiting a full source review. A source link is not a guarantee of current access or conditions.</p><p>Ghost, UFO, and cryptid accounts are folklore or reported experiences. We do not present supernatural interpretations as established fact.</p><p>Category artwork is decorative, not a photograph of a destination. The Eureka Springs image is retained from the original site. We avoid inventing images that appear to document real locations.</p><p>Restricted residential and sensitive sites are included for context; direct map prompts are withheld. We welcome reliable sources, factual corrections, and respectful suggestions.</p>']};
function route(){
 let hash;try{hash=decodeURIComponent(location.hash.slice(1));}catch{hash='';}
 const isLocation=hash.startsWith('location/'),isList=hash.startsWith('list/'),isMap=hash==='map',infoPage=info[hash];
 if(!isLocation&&$('detail').open){disposeDetailMap();$('detail').close();}
 if(!infoPage&&$('info-dialog').open)$('info-dialog').close();
 if(isLocation){openLocation(hash.slice(9));return;}
 if(infoPage){$('info-title').textContent=infoPage[0];$('info-content').innerHTML=infoPage[1];showDialog($('info-dialog'));refreshIcons();return;}
 $('map-view').hidden=!isMap;$('collection-view').hidden=!isList;$('explore-view').hidden=isMap||isList;
 if(isMap){activeView='map';activeList=null;renderMap();$('map-title').focus();document.title='Map | Oddities';}
 else if(isList){const name=hash.slice(5);if(Object.hasOwn(collections,name)){activeView='collection';activeList=name;renderCollection();$('collection-title').focus();document.title=name+' | Oddities';}else location.hash='explore';}
 else{activeView='explore';activeList=null;document.title='Oddities | The Odd Phoenix';if(hash==='explore')$('explore').scrollIntoView({behavior:'instant'});}
}
function closeRoutedDialog(dialog){if(dialog===$('detail'))disposeDetailMap();dialog.close();if(dialog===$('detail')||dialog===$('info-dialog')){history.replaceState(null,'',dialog===$('detail')?detailOrigin:activeView==='map'?'#map':activeList?'#list/'+encodeURIComponent(activeList):'#explore');document.title=activeView==='map'?'Map | Oddities':'Oddities | The Odd Phoenix';if(dialog===$('detail')&&detailReturnFocus?.isConnected)detailReturnFocus.focus();}}
function renderMap(){
 if(typeof L==='undefined'){$('map-canvas').innerHTML='<p class="notice">The map could not load. You can still browse every location in the list.</p>';renderMapResults();return;}
 if(!mapInstance){
  mapInstance=L.map('map-canvas',{scrollWheelZoom:false}).setView([38.5,-98],4);
  L.tileLayer(siteConfig.mapTileUrl,{attribution:siteConfig.mapAttribution,maxZoom:18}).addTo(mapInstance);
  mapLayer=L.layerGroup().addTo(mapInstance);
 }
 mapInstance.invalidateSize();renderMapResults();
}
function renderMapResults(){
 renderRefinements('map-',mapCategory);const items=refineTrips(searchTrips($('map-search').value,mapCategory,$('map-state').value),'map-');
 $('map-count').textContent=`${items.length} ${items.length===1?'location':'locations'} found`;
 $('map-results').innerHTML=items.map(item=>`<article class="map-result"><h3><a href="#location/${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h3><p class="place">${escapeHtml(locationText(item))}</p><p>${escapeHtml(item.desc)}</p><div class="badges">${badges(item)}</div><div class="map-result-actions"><button data-map-focus="${escapeHtml(item.id)}">Show marker</button><a href="#location/${encodeURIComponent(item.id)}">Read the story</a></div></article>`).join('')||'<p>No locations match. Try another name, state, or category.</p>';
 $('map-categories').querySelectorAll('[data-map-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mapCategory===mapCategory)));
 if(mapLayer){
  mapLayer.clearLayers();const groups=new Map();
  for(const item of items){const point=mapLocations[item.id];if(!point)continue;const key=point.lat+','+point.lng;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(item);}
  const bounds=[];
  for(const group of groups.values()){
   const point=mapLocations[group[0].id];bounds.push([point.lat,point.lng]);const restricted=group.every(item=>item.restricted);const kind=restricted?'restricted':point.precision==='area'?'area':'';
   const label=group.length>1?group.length:icon(categories[group[0].category][1]);
   const marker=L.marker([point.lat,point.lng],{title:group.map(item=>item.title).join(', '),alt:'Location marker',icon:L.divIcon({className:'map-marker',html:`<span class="map-marker-dot ${kind}">${label}</span>`,iconSize:[30,30],iconAnchor:[15,15]})});
   marker.bindPopup(`<div>${group.map(item=>`<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p><p>${item.restricted?'Restricted or private property. ':''}${mapLocations[item.id].precision==='area'?'Approximate area marker.':'Location reference; verify the entrance.'}</p><a href="#location/${encodeURIComponent(item.id)}">Dark History &amp; Lore →</a>`).join('<hr>')}</div>`).addTo(mapLayer);
   marker.on('popupopen',refreshIcons);for(const item of group)marker._odditiesIds=(marker._odditiesIds||[]).concat(item.id);
  }
  if(bounds.length)mapInstance.fitBounds(bounds,{padding:[30,30],maxZoom:12});
 }
 refreshIcons();
}
function renderCategoryExtras(){
 $('suggest-icons').innerHTML=Object.entries(categories).filter(([key])=>key!=='all').map(([key,[label,symbol]])=>`<a class="suggest-category" data-browse-category="${key}" href="#explore">${icon(symbol)}<span>${label}</span></a>`).join('');
 $('map-categories').innerHTML=Object.entries(categories).map(([key,[label,symbol]])=>`<button data-map-category="${key}" aria-pressed="${key==='all'}">${icon(symbol)} ${label}</button>`).join('');
 for(const option of $('state').options){if(option.value==='all')continue;$('map-state').append(option.cloneNode(true));}
 refreshIcons();
}
function renderManage(){$('manage-options').replaceChildren();for(const name of Object.keys(collections)){const row=document.createElement('form');row.className='manage-row';const label=document.createElement('label');label.textContent=`List name (${collections[name].length} saved)`;const input=document.createElement('input');input.value=name;input.maxLength=80;input.required=true;label.append(input);row.append(label);const rename=document.createElement('button');rename.type='submit';rename.textContent='Rename';row.append(rename);row.addEventListener('submit',event=>{event.preventDefault();const next=input.value.trim();if(!next||next===name)return;if(Object.hasOwn(collections,next)){notify('That list name already exists.');return;}collections[next]=collections[name];delete collections[name];if(activeList===name){activeList=next;history.replaceState(null,'','#list/'+encodeURIComponent(next));}const ok=persist();refreshSavedUI();renderManage();if(ok)notify('List renamed.');});const remove=document.createElement('button');remove.type='button';remove.className='danger';remove.textContent='Delete list';remove.addEventListener('click',()=>{if(!confirm('Delete “'+name+'” from this browser? Export a backup first if you need it.'))return;delete collections[name];if(activeList===name){activeList=null;location.hash='explore';}if(!Object.keys(collections).length)collections['My Bucket List']=[];const ok=persist();renderManage();refreshSavedUI();if(ok)notify('List deleted.');});row.append(remove);$('manage-options').append(row);}refreshIcons();}
$('categories').innerHTML=Object.entries(categories).map(([key,[label,symbol]])=>`<button data-category="${key}" aria-pressed="${key==='all'}">${icon(symbol)} ${label}</button>`).join('');
$('detail-back-explore').addEventListener('click',()=>{disposeDetailMap();$('detail').close();location.hash='explore';});
for(const code of [...new Set(trips.map(item=>item.state))].sort((a,b)=>states[a].localeCompare(states[b]))){const option=document.createElement('option');option.value=code;option.textContent=states[code];$('state').append(option);}
function resetFilters(){for(const id of ['subcategory','place-type','experience'])$(id).value='all';category='all';visibleCount=12;$('search').value='';$('state').value='all';document.querySelectorAll('[data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category==='all')));renderGrid();}
$('reset').addEventListener('click',resetFilters);
$('search').addEventListener('input',()=>{visibleCount=12;renderGrid();});$('state').addEventListener('change',()=>{visibleCount=12;renderGrid();});
$('load-more').addEventListener('click',()=>{const previous=visibleCount;visibleCount+=12;renderGrid();const next=$('grid').querySelectorAll('.card-link')[previous];next?.focus();});
$('categories').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;category=button.dataset.category;visibleCount=12;document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));renderGrid();});
$('lists-toggle').addEventListener('click',()=>setMenu($('lists-menu').hidden));
document.addEventListener('click',event=>{if(!event.target.closest('.account'))setMenu(false);const save=event.target.closest('[data-save]');if(save)openSave(save.dataset.save);const mark=event.target.closest('[data-visited]');if(mark){const id=mark.dataset.visited;if(visited.has(id))visited.delete(id);else visited.add(id);const ok=persist();refreshSavedUI();const updated=$(activeList?'collection-grid':'grid').querySelector(`[data-location="${id}"] .visited-button`);updated?.focus();if(ok)notify(visited.has(id)?'Marked as visited.':'Visited mark removed.');}const remove=event.target.closest('[data-remove]');if(remove&&activeList){collections[activeList]=collections[activeList].filter(id=>id!==remove.dataset.remove);const ok=persist();refreshSavedUI();$('collection-title').focus();if(ok)notify('Removed from '+activeList);}if(event.target.closest('[data-reset]'))resetFilters();const close=event.target.closest('[data-close]');if(close)closeRoutedDialog(close.closest('dialog'));});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('lists-menu').hidden){setMenu(false);$('lists-toggle').focus();}});
document.addEventListener('focusin',event=>{if(!event.target.closest('.account'))setMenu(false);});
for(const dialog of document.querySelectorAll('dialog')){dialog.addEventListener('cancel',event=>{event.preventDefault();closeRoutedDialog(dialog);});dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeRoutedDialog(dialog);}});}
$('new-list').addEventListener('submit',event=>{event.preventDefault();const name=$('list-name').value.trim();if(!name){notify('Enter a list name.');return;}if(Object.hasOwn(collections,name)){notify('That list already exists.');return;}collections[name]=[activeSaveId];const ok=persist();refreshSavedUI();renderSaveOptions();$('list-name').value='';if(ok)notify('Created '+name+' and saved this location.');});
$('manage-lists').addEventListener('click',()=>{setMenu(false);renderManage();showDialog($('manage-dialog'));});$('back-explore').addEventListener('click',()=>location.hash='explore');
$('export-lists').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({version:1,collections,visited:[...visited]},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='oddities-lists.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Backup exported.');});
$('import-lists').addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;try{if(file.size>1000000)throw new Error('File too large');const data=JSON.parse(await file.text());if(data.version!==1||!data.collections||Array.isArray(data.collections)||typeof data.collections!=='object'||!Array.isArray(data.visited))throw new Error('Invalid backup');const incoming=cleanCollections(data.collections);if(!Object.keys(incoming).length)throw new Error('No valid lists');for(const [name,ids] of Object.entries(incoming))collections[name]=[...new Set([...(collections[name]||[]),...ids])];for(const id of data.visited)if(typeof id==='string'&&catalog.has(canonicalId(id)))visited.add(canonicalId(id));const ok=persist();refreshSavedUI();renderManage();if(ok)notify('Backup imported.');}catch{notify('Choose a valid Oddities JSON backup under 1 MB.');}event.target.value='';});

$('account-overview').addEventListener('click',()=>{setMenu(false);$('info-title').textContent='My Account';$('info-content').innerHTML='<p class="account-note">Your saved places and visited stops are available from the Account menu.</p><p>Online accounts and cross-device sign-in are planned. For now, your lists remain saved in this browser. You can export a backup from Manage & back up lists.</p>';showDialog($('info-dialog'));});
$('suggest-icons').addEventListener('click',event=>{const link=event.target.closest('[data-browse-category]');if(!link)return;category=link.dataset.browseCategory;visibleCount=12;document.querySelectorAll('#categories [data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===category)));renderGrid();});
$('map-categories').addEventListener('click',event=>{const button=event.target.closest('[data-map-category]');if(!button)return;mapCategory=button.dataset.mapCategory;renderMapResults();});
$('map-search').addEventListener('input',renderMapResults);$('map-state').addEventListener('change',renderMapResults);
$('map-reset').addEventListener('click',()=>{mapCategory='all';for(const id of ['map-subcategory','map-place-type','map-experience'])$(id).value='all';$('map-search').value='';$('map-state').value='all';renderMapResults();});
$('map-results').addEventListener('click',event=>{const button=event.target.closest('[data-map-focus]');if(!button||!mapLayer)return;const point=mapLocations[button.dataset.mapFocus];if(!point)return;mapInstance.setView([point.lat,point.lng],point.precision==='area'?11:15);mapLayer.eachLayer(marker=>{if(marker._odditiesIds?.includes(button.dataset.mapFocus))marker.openPopup();});$('map-canvas').scrollIntoView({behavior:'instant',block:'center'});});
function applyContact(){
 const email=siteConfig.contactEmail;
 if(!email){info.contact=['Contact & location suggestions','<p>Have a strange location or a correction to share? Write down its name, city, state, and any useful historical sources. Direct email submissions will be available here shortly.</p>'];return;}
 const href='mailto:'+email+'?subject='+encodeURIComponent('Oddities: Suggest a Stop');$('suggest-stop').href=href;
 info.contact=['Contact & location suggestions',`<p>Share a location, a correction, or a reliable historical source.</p><p><a class="primary" href="${escapeHtml(href)}">${icon('mail')} Email a suggestion</a></p><p><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p><p>Please include the location name, city and state, its story, any public-access details, and links to sources.</p>`];
}
for(const prefix of ['', 'map-'])for(const id of ['subcategory','place-type','experience'])$(prefix+id).addEventListener('change',()=>{visibleCount=12;prefix?renderMapResults():renderGrid();});
renderCategoryExtras();renderRefinements();renderRefinements('map-',mapCategory);applyContact();
window.addEventListener('hashchange',route);renderFeatured();renderMenu();renderGrid();route();if(!storageAvailable)notify('Saved data could not be loaded. Export a backup after making changes.');


refreshIcons();

