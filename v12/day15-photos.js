(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='15 OUT');
  const grid=day?.querySelector('.day4-grid'); if(!grid)return;
  const photos=[
   {match:'Ciclopista del Garda ⭐⭐⭐',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Ciclopista%20del%20Garda.jpg?width=1400',alt:'Ciclopista del Garda junto ao Lago di Garda',cap:'Ciclopista del Garda'},
   {match:'Limone a pé',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Limone%20sul%20Garda.jpg?width=1400',alt:'Limone sul Garda',cap:'Limone sul Garda'},
   {match:'14:00–16:00 · Riva del Garda',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Riva%20del%20Garda%2C%20Italy.jpg?width=1400',alt:'Riva del Garda entre o lago e as montanhas',cap:'Riva del Garda'},
   {match:'Centro + Castello Scaligero',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Castello%20Scaligero%2010%20-%20Malcesine.jpg?width=1400',alt:'Castello Scaligero de Malcesine',cap:'Castello Scaligero · Malcesine'},
   {match:'Porto de Malcesine',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Malcesine%20-%20panoramio.jpg?width=1400',alt:'Malcesine às margens do Lago di Garda',cap:'Malcesine · Lago di Garda'}
  ];
  grid.querySelectorAll('.day15-place-photo').forEach(el=>el.remove());
  const used=new Set();
  [...grid.querySelectorAll(':scope > section')].forEach(sec=>{
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match)&&!used.has(x.src));
   if(!p)return; used.add(p.src);
   const fig=document.createElement('figure'); fig.className='place-photo day15-place-photo';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('figure').remove()"><figcaption>${p.cap}</figcaption>`;
   sec.appendChild(fig);
  });
  if(!document.getElementById('day15-photo-style')){
   const s=document.createElement('style'); s.id='day15-photo-style'; s.textContent=`.day15-place-photo{margin:14px 0 0;border-radius:14px;overflow:hidden;position:relative;background:#e9ece9;box-shadow:0 6px 18px rgba(0,0,0,.08)}.day15-place-photo img{width:100%;height:220px;display:block;object-fit:cover}.day15-place-photo figcaption{position:absolute;left:10px;bottom:10px;background:rgba(15,29,24,.82);color:#fff;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}@media(max-width:620px){.day15-place-photo img{height:210px}}`; document.head.appendChild(s);
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,850));else setTimeout(run,850);
})();