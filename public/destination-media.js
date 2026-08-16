(()=>{
'use strict';
const media={
  srinagar:['/images/destinations/srinagar/hero.jpg','/images/destinations/srinagar/dal-lake-01.jpg','/images/destinations/srinagar/dal-lake-02.jpg','/images/destinations/srinagar/nishat-bagh.jpg','/images/destinations/srinagar/mughal-garden.jpg','/images/destinations/srinagar/shalimar-bagh.jpg'],
  gulmarg:['/images/destinations/gulmarg/hero.jpg','/images/destinations/gulmarg/gondola.jpg','/images/destinations/gulmarg/gulmarg.jpg','/images/destinations/gulmarg/meadow.jpg'],
  pahalgam:['/images/destinations/pahalgam/hero.jpg','/images/destinations/pahalgam/valley.jpg','/images/destinations/pahalgam/aru-valley.jpg','/images/destinations/pahalgam/betaab-valley.jpg','/images/destinations/pahalgam/pahalgam.jpg'],
  sonamarg:['/images/destinations/sonamarg/hero.jpg','/images/destinations/sonamarg/mountains.jpg','/images/destinations/sonamarg/sonamarg.jpg','/images/destinations/sonamarg/thajiwas-road.jpg'],
  gurez:['/images/destinations/gurez/hero.jpg','/images/destinations/gurez/gurez.jpg','/images/destinations/gurez/village.jpg'],
  doodhpathri:['/images/destinations/doodhpathri/hero.jpg','/images/destinations/doodhpathri/meadow.jpg'],
  yousmarg:['/images/destinations/yousmarg/hero.jpg','/images/destinations/yousmarg/nilnag-lake.jpg']
};
const styles=document.createElement('style');styles.textContent=`
.destination-media-hero{position:relative;overflow:hidden;min-height:440px;display:flex;align-items:center;background:none!important}
.destination-media-hero .dm-hero-grid{position:absolute;inset:0;display:grid;grid-template-columns:1.45fr 1fr 1fr;gap:4px;z-index:0}
.destination-media-hero .dm-hero-grid span{background-size:cover;background-position:center}
.destination-media-hero .dm-hero-grid:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.42) 55%,rgba(0,0,0,.2))}
.destination-media-hero>.container{position:relative;z-index:1}
.destination-media-gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-auto-rows:150px;gap:10px;margin:24px 0 34px}
.destination-media-gallery figure{margin:0;overflow:hidden;border-radius:12px;background:#ddd}
.destination-media-gallery figure:first-child{grid-row:span 2}
.destination-media-gallery img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.destination-media-gallery figure:hover img{transform:scale(1.035)}
@media(max-width:800px){.destination-media-hero{min-height:380px}.destination-media-hero .dm-hero-grid{grid-template-columns:1fr 1fr}.destination-media-hero .dm-hero-grid span:nth-child(3){display:none}.destination-media-gallery{grid-template-columns:1fr 1fr;grid-auto-rows:140px}.destination-media-gallery figure:first-child{grid-row:span 1;grid-column:span 2}}
`;
document.head.appendChild(styles);
function keyFromPath(){const m=location.pathname.match(/destination-(srinagar|gulmarg|pahalgam|sonamarg|gurez|doodhpathri|yousmarg)\.html$/);return m?m[1]:null}
function applyDetail(key){const imgs=media[key];if(!imgs)return;const hero=document.querySelector('.page-hero');if(hero){hero.classList.add('destination-media-hero');hero.style.backgroundImage='none';const grid=document.createElement('div');grid.className='dm-hero-grid';imgs.slice(0,3).forEach(src=>{const s=document.createElement('span');s.style.backgroundImage=`url('${src}')`;grid.appendChild(s)});hero.prepend(grid)}
const existing=document.querySelector('.content-gallery');if(existing){existing.className='destination-media-gallery';existing.innerHTML=imgs.slice(0,5).map((src,i)=>`<figure><img loading="lazy" src="${src}" alt="${document.title.split('|')[0].trim()} Kashmir travel view ${i+1}"></figure>`).join('')}}
function applyIndex(){const hero=document.querySelector('.place-hero');if(!hero)return;const imgs=[media.srinagar[0],media.gulmarg[0],media.pahalgam[0]];hero.classList.add('destination-media-hero');hero.style.backgroundImage='none';const grid=document.createElement('div');grid.className='dm-hero-grid';imgs.forEach(src=>{const s=document.createElement('span');s.style.backgroundImage=`url('${src}')`;grid.appendChild(s)});hero.prepend(grid)}
function run(){const key=keyFromPath();if(key)applyDetail(key);else if(location.pathname.endsWith('/destinations.html')||location.pathname==='/destinations')applyIndex()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();