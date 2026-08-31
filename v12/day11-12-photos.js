(()=>{
 const photos={
  '11 OUT':[
   {match:'Lago di Carezza',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20Carezza%20e%20Latemar.jpg?width=1200',alt:'Lago di Carezza com o Latemar',cap:'Lago di Carezza'},
   {match:'Geisler Alm',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg/1280px-The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg',alt:'Grupo Odle na Val di Funes',cap:'Odle · Geisler Alm'},
   {match:'San Giovanni',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Chiesa%20di%20San%20Giovanni%20in%20Ranui.jpg?width=1200',alt:'Igreja de San Giovanni in Ranui na Val di Funes',cap:'San Giovanni in Ranui'},
   {match:'Ortisei',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Ortisei.JPG?width=1200',alt:'Vista de Ortisei na Val Gardena',cap:'Ortisei'}
  ],
  '12 OUT':[
   {match:'Lago di Braies',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Pragser%20Wildsee.jpg?width=1200',alt:'Lago di Braies nas Dolomitas',cap:'Lago di Braies'},
   {match:'Tre Cime',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tre_cime_di_Lavaredo_dalla_forcella.jpg/1280px-Tre_cime_di_Lavaredo_dalla_forcella.jpg',alt:'Tre Cime di Lavaredo',cap:'Tre Cime di Lavaredo'},
   {match:'Lago di Misurina',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20misurina.jpg?width=1200',alt:'Lago di Misurina nas Dolomitas',cap:'Lago di Misurina'},
   {match:'Cortina',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Cortina%20d%27Ampezzo.JPG?width=1200',alt:'Cortina d’Ampezzo nas Dolomitas',cap:'Cortina d’Ampezzo'}
  ]
 };
 const addStyle=()=>{if(document.getElementById('d1112-photo-style'))return;const s=document.createElement('style');s.id='d1112-photo-style';s.textContent='.d1112-photo{margin:14px 0 0;border-radius:12px;overflow:hidden;position:relative;background:#eee}.d1112-photo img{width:100%;height:190px;display:block;object-fit:cover}.d1112-photo figcaption{position:absolute;left:10px;bottom:9px;background:rgba(15,29,24,.8);color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}';document.head.appendChild(s)};
 const norm=u=>(u||'').split('?')[0].toLowerCase();
 const run=()=>{
  const timeline=document.querySelector('.timeline');if(!timeline)return;addStyle();
  Object.entries(photos).forEach(([date,list])=>{
   const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===date);if(!day)return;
   const grid=day.querySelector('.day4-grid')||day.querySelector('.day-content');if(!grid)return;
   grid.querySelectorAll('.d1112-photo').forEach(el=>el.remove());
   const existing=new Set([...day.querySelectorAll('img')].map(i=>norm(i.src)).filter(Boolean));
   const used=new Set();
   [...grid.querySelectorAll('section')].forEach(sec=>{
    const txt=sec.textContent||'';
    const p=list.find(x=>txt.includes(x.match)&&!used.has(x.match)&&!existing.has(norm(x.src)));
    if(!p)return;
    used.add(p.match);existing.add(norm(p.src));
    const fig=document.createElement('figure');fig.className='d1112-photo';
    const img=document.createElement('img');img.src=p.src;img.alt=p.alt;img.loading='lazy';img.referrerPolicy='no-referrer';img.onerror=()=>fig.remove();
    const cap=document.createElement('figcaption');cap.textContent=p.cap;fig.append(img,cap);sec.appendChild(fig);
   });
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1100));else setTimeout(run,1100);
})();