(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline');if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='06 OUT');
  const grid=day?.querySelector('.day4-grid');if(!grid)return;
  const photos=[
   {match:'Manhã · Acrópole',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Parthenon%20at%20the%20Acropolis%20of%20Athens.jpg?width=1200',alt:'Partenon na Acrópole de Atenas',cap:'Acrópole · Partenon'},
   {match:'Museu da Acrópole',src:'https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20the%20Acropolis%20Museum%20from%20the%20Acropolis%20in%20Athens.jpg?width=1200',alt:'Museu da Acrópole em Atenas',cap:'Museu da Acrópole'},
   {match:'Tarde · Ágora',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Hephaestus%20from%20ancient%20agora%20Athens.jpg?width=1200',alt:'Templo de Hefesto na Ágora Antiga de Atenas',cap:'Ágora Antiga · Templo de Hefesto'},
   {match:'Areópago',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Acropolis%20of%20Athens%20from%20the%20Areopagus.jpg?width=1200',alt:'Vista da Acrópole a partir do Areópago em Atenas',cap:'Areópago · vista da Acrópole'}
  ];
  [...grid.querySelectorAll('section')].forEach(sec=>{
   sec.querySelectorAll('.day6-photo').forEach(el=>el.remove());
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match));if(!p)return;
   const fig=document.createElement('figure');fig.className='place-photo day6-photo';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${p.cap}</figcaption>`;
   sec.appendChild(fig);
  });
  if(!document.getElementById('place-photo-style')){
   const s=document.createElement('style');s.id='place-photo-style';
   s.textContent='.place-photo{margin:14px 0 0;border-radius:12px;overflow:hidden;position:relative;background:#eee}.place-photo img{width:100%;height:190px;display:block;object-fit:cover}.place-photo figcaption{position:absolute;left:10px;bottom:9px;background:rgba(15,29,24,.8);color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}';
   document.head.appendChild(s);
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,900));else setTimeout(run,900);
})();