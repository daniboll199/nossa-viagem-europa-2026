(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='05 OUT');
  const grid=day?.querySelector('.day4-grid'); if(!grid)return;
  const photos=[
   {match:'Canal de Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/20190504%2061canal%20corinthe.jpg?width=1200',alt:'Canal de Corinto na Grécia',cap:'Canal de Corinto'},
   {match:'Antiga Corinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1200',alt:'Templo de Apolo na Antiga Corinto',cap:'Antiga Corinto · Templo de Apolo'},
   {match:'Acrocorinto',src:'https://commons.wikimedia.org/wiki/Special:FilePath/20190505%20017%20akrokorinthos.jpg?width=1200',alt:'Fortaleza de Acrocorinto na Grécia',cap:'Acrocorinto'},
   {match:'Micenas',src:'https://commons.wikimedia.org/wiki/Special:FilePath/MycenaeLionGate.jpg?width=1200',alt:'Porta dos Leões em Micenas',cap:'Micenas · Porta dos Leões'}
  ];
  [...grid.querySelectorAll('section')].forEach(sec=>{
   if(sec.querySelector('.place-photo'))return;
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match)); if(!p)return;
   const fig=document.createElement('figure'); fig.className='place-photo';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${p.cap}</figcaption>`;
   sec.insertBefore(fig,sec.firstChild);
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,760));else setTimeout(run,760);
})();