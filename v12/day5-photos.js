(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='05 OUT');
  const schedule=day?.querySelector('.schedule'); if(!schedule)return;

  const photos=[
   {match:'Kinetta Beach',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kineta%2C_Greece_-_panoramio.jpg/1280px-Kineta%2C_Greece_-_panoramio.jpg',alt:'Litoral de Kineta na Grécia',cap:'Kinetta · primeira parada junto ao mar'},
   {match:'Antiga Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1400',alt:'Templo de Apolo na Antiga Corinto',cap:'Antiga Corinto · Templo de Apolo'},
   {match:'Gemelos Tavern',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20archaeological%20site%20of%20Ancient%20Corinth%20on%20January%2010%2C%202020.jpg?width=1400',alt:'Vista aérea do sítio arqueológico da Antiga Corinto',cap:'Antiga Corinto vista do alto · panorama junto ao Gemelos'},
   {match:'Canal de Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Corinth%20Canal%20Greece%20aerial%20view.jpg?width=1400',alt:'Vista aérea do Canal de Corinto',cap:'Canal de Corinto'},
   {match:'Cencreia',src:'https://commons.wikimedia.org/wiki/Special:FilePath/At%20the%20ancient%20port%20of%20Kechries%20on%20January%2010%2C%202020.jpg?width=1400',alt:'Ruínas do antigo porto de Cencreia junto ao mar',cap:'Cencreia · antigo porto oriental de Corinto'},
   {match:'Anafiotika',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Anafiotika%2C%20Athens%2C%20Greece.jpg?width=1400',alt:'Casas e vielas de Anafiotika em Atenas',cap:'Anafiotika · um pedacinho das ilhas em Atenas'},
   {match:'Colina de Filopapo',src:'https://images.ansharimages.com/photo/greece/athens/acropolis-from-the-philopappos-hill-athens-greece.jpg',alt:'Acrópole de Atenas vista da Colina de Filopapo ao entardecer',cap:'Pôr do sol em Filopapo · vista para a Acrópole'}
  ];

  const items=[...schedule.querySelectorAll('.schedule-item')];
  items.forEach(sec=>{
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match));
   if(!p)return;
   sec.querySelectorAll('.place-photo').forEach(el=>el.remove());
   const fig=document.createElement('figure'); fig.className='place-photo';
   fig.style.margin='12px 0 14px';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" style="display:block;width:100%;height:auto;max-height:420px;object-fit:cover;border-radius:16px"><figcaption style="margin-top:7px;font-size:.88rem;opacity:.78">${p.cap}</figcaption>`;
   const title=sec.querySelector('b');
   if(title) title.insertAdjacentElement('afterend',fig); else sec.insertBefore(fig,sec.firstChild);
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1400));else setTimeout(run,1400);
})();