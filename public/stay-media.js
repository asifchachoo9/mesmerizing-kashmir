(()=>{
  const root=document.querySelector('[data-stay-media]');
  if(!root)return;
  const sets={
    hero:['/images/destinations/srinagar/hero.jpg','/images/destinations/srinagar/houseboat.jpg','/images/images/contact/hero-houseboats-srinagar.jpg'],
    luxury:['/images/images/destinations/srinagar/hero.jpg','/images/images/destinations/srinagar/houseboat.jpg','/images/images/destinations/srinagar/dal-lake-01.jpg'],
    mountain:['/images/images/destinations/gulmarg/hero.jpg','/images/images/destinations/gulmarg/gulmarg.jpg','/images/images/destinations/sonamarg/mountains.jpg'],
    valley:['/images/images/destinations/pahalgam/hero.jpg','/images/images/destinations/pahalgam/valley.jpg','/images/images/destinations/pahalgam/aru-valley.jpg'],
    budget:['/images/images/destinations/gurez/hero.jpg','/images/images/destinations/gurez/village.jpg','/images/images/destinations/doodhpathri/hero.jpg'],
    guest:['/images/images/destinations/srinagar/houseboat.jpg','/images/images/destinations/srinagar/nishat-bagh.jpg','/images/images/destinations/srinagar/mughal-garden.jpg'],
    villa:['/images/images/destinations/pahalgam/pahalgam.jpg','/images/images/destinations/pahalgam/betaab-valley.jpg','/images/images/destinations/pahalgam/aru-valley.jpg']
  };
  const make=(src,alt)=>{const img=document.createElement('img');img.src=src;img.alt=alt;img.loading='lazy';return img;};
  const hero=document.createElement('div');hero.className='stay-hero-gallery';sets.hero.forEach((s,i)=>hero.appendChild(make(s,`Kashmir stay view ${i+1}`)));root.prepend(hero);
  root.querySelectorAll('[data-stay-gallery]').forEach(g=>{const key=g.dataset.stayGallery; (sets[key]||sets.luxury).forEach((s,i)=>g.appendChild(make(s,`${key} stay gallery ${i+1}`)));});
})();