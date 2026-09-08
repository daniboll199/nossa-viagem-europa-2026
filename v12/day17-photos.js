(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='17 OUT');
  const grid=day?.querySelector('.day4-grid'); if(!grid)return;
  const photos=[
   {match:'09:15 · Lungolago di Salò',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Sal%C3%B2%20Lungolago.jpg?width=1400',alt:'Lungolago di Salò no Lago di Garda',cap:'Lungolago di Salò'},
   {match:'10:00 · Centro histórico',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Sal%C3%B2-Panorama.JPG?width=1400',alt:'Panorama de Salò no Lago di Garda',cap:'Salò · centro histórico'},
   {match:'11:30 · Última caminhada',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20Garda%20Salo%20001.JPG?width=1400',alt:'Vista de Salò e do Lago di Garda',cap:'Passeggiata di Salò'},
   {match:'16:30–17:00 · Terminal',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Venice%20Marco%20Polo%20Airport%20terminal.jpg?width=1400',alt:'Terminal do Aeroporto Marco Polo de Veneza',cap:'Aeroporto Marco Polo · Veneza'}
  ];
  grid.querySelectorAll('.day17-place-photo').forEach(el=>el.remove());
  const used=new Set();
  [...grid.querySelectorAll(':scope > section')].forEach(sec=>{
   const txt=sec.textContent||'';
   const p=photos.find(x=>txt.includes(x.match)&&!used.has(x.src));
   if(!p)return; used.add(p.src);
   const fig=document.createElement('figure'); fig.className='place-photo day17-place-photo';
   fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${p.cap}</figcaption>`;
   sec.appendChild(fig);
  });
  if(!document.getElementById('day17-photo-style')){
   const s=document.createElement('style'); s.id='day17-photo-style'; s.textContent=`.day17-place-photo{margin:14px 0 0;border-radius:14px;overflow:hidden;position:relative;background:#e9ece9;box-shadow:0 6px 18px rgba(0,0,0,.08)}.day17-place-photo img{width:100%;height:220px;display:block;object-fit:cover}.day17-place-photo figcaption{position:absolute;left:10px;bottom:10px;background:rgba(15,29,24,.82);color:#fff;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}@media(max-width:620px){.day17-place-photo img{height:210px}}`; document.head.appendChild(s);
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1100));else setTimeout(run,1100);
})();