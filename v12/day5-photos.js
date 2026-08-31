(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='05 OUT');
  const schedule=day?.querySelector('.schedule'); if(!schedule)return;
  const photos=[
   {match:'Kinetta Beach',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kineta%2C_Greece_-_panoramio.jpg/1280px-Kineta%2C_Greece_-_panoramio.jpg',alt:'Litoral de Kineta na Grécia',cap:'Kinetta · primeira parada junto ao mar'},
   {match:'Antiga Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1400',alt:'Templo de Apolo na Antiga Corinto',cap:'Antiga Corinto · Templo de Apolo'},
   {match:'Gemelos Tavern',src:'https://unfoldinggreece.com/wp-content/uploads/2021/02/Greece.-Ancient-Corinth.-The-Doric-temple-of-Apollo-6th-century-BC-in-the-background-Acrocorinth-with-fortified-citadel-formed-on-the-top-of-rock-min.jpg',alt:'Vista do Templo de Apolo e Acrocorinto',cap:'A paisagem da Antiga Corinto que acompanha o almoço no Gemelos'},
   {match:'Canal de Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Corinth%20Canal%20Greece%20aerial%20view.jpg?width=1400',alt:'Vista aérea do Canal de Corinto',cap:'Canal de Corinto'},
   {match:'Cencreia',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Isis%20at%20the%20southwest%20side%20of%20the%20ancient%20harbour%20at%20Kenchreai%2C%20one%20of%20the%20two%20ports%20of%20the%20inland%20city-state%20of%20Corinth%2C%20Greece%20%2814082672584%29.jpg?width=1400',alt:'Ruínas do antigo porto de Cencreia junto ao Golfo Sarônico',cap:'Cencreia · ruínas do antigo porto oriental de Corinto'},
   {match:'Anafiotika',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Anafiotika%20Athens%20Greece.jpg?width=1400',alt:'Casas e vielas de Anafiotika em Atenas',cap:'Anafiotika · um pedacinho das ilhas em Atenas'},
   {match:'Colina de Filopapo',src:'https://images.ansharimages.com/photo/greece/athens/acropolis-from-the-philopappos-hill-athens-greece.jpg',alt:'Acrópole de Atenas vista da Colina de Filopapo ao entardecer',cap:'Pôr do sol em Filopapo · vista para a Acrópole'}
  ];
  [...schedule.querySelectorAll('.schedule-item')].forEach(sec=>{
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match));
   if(!p)return;
   sec.querySelectorAll('.place-photo').forEach((el,i)=>{ if(i>0) el.remove(); });
   let fig=sec.querySelector('.place-photo');
   if(!fig){ fig=document.createElement('figure'); fig.className='place-photo'; const title=sec.querySelector('b'); if(title) title.insertAdjacentElement('afterend',fig); else sec.insertBefore(fig,sec.firstChild); }
   fig.style.margin='12px 0 14px';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer" style="display:block;width:100%;height:auto;max-height:420px;object-fit:cover;border-radius:16px" onerror="this.closest('figure').remove()"><figcaption style="margin-top:7px;font-size:.88rem;opacity:.78">${p.cap}</figcaption>`;
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1100));else setTimeout(run,1100);
})();