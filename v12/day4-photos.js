(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='04 OUT');
  const grid=day?.querySelector('.day4-grid'); if(!grid)return;
  const photos=[
   {match:'Pastéis de Belém',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Lisboa%2C%20Pasteis%20de%20Bel%C3%A9m.jpg?width=1200',alt:'Pastéis de Belém em Lisboa',cap:'Pastéis de Belém'},
   {match:'Mosteiro dos Jerónimos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20Jer%C3%B3nimos%20-%20Lisboa.jpg?width=1200',alt:'Mosteiro dos Jerónimos em Lisboa',cap:'Mosteiro dos Jerónimos'},
   {match:'Padrão dos Descobrimentos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Padr%C3%A3o%20dos%20Descobrimentos.jpg?width=1200',alt:'Padrão dos Descobrimentos em Belém',cap:'Padrão dos Descobrimentos'},
   {match:'Torre',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Torre%20de%20Bel%C3%A9m%20%28Lisboa%29.jpg?width=1200',alt:'Torre de Belém em Lisboa',cap:'Torre de Belém'}
  ];
  [...grid.querySelectorAll('section')].forEach(sec=>{
   sec.querySelectorAll('.place-photo,.place-photo-grid').forEach(el=>el.remove());
   const txt=sec.textContent||'';
   const matches=photos.filter(x=>txt.includes(x.match));
   if(!matches.length)return;
   const wrap=document.createElement('div');
   wrap.className=matches.length>1?'place-photo-grid':'place-photo-single';
   matches.forEach(p=>{
    const fig=document.createElement('figure'); fig.className='place-photo';
    fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${p.cap}</figcaption>`;
    wrap.appendChild(fig);
   });
   sec.appendChild(wrap);
  });
  if(!document.getElementById('place-photo-style')){
   const s=document.createElement('style');s.id='place-photo-style';s.textContent=`.place-photo-single,.place-photo-grid{margin-top:14px}.place-photo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.place-photo{margin:0;border-radius:12px;overflow:hidden;position:relative;background:#eee}.place-photo img{width:100%;height:190px;display:block;object-fit:cover}.place-photo figcaption{position:absolute;left:10px;bottom:9px;background:rgba(15,29,24,.8);color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}@media(max-width:620px){.place-photo-grid{grid-template-columns:1fr}.place-photo img{height:190px}}`;document.head.appendChild(s);
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,700));else setTimeout(run,700);
})();