(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='04 OUT');
  const grid=day?.querySelector('.day4-grid'); if(!grid)return;
  const photos=[
   {match:'Pastéis de Belém',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Past%C3%A9is%20de%20Bel%C3%A9m%20-%20Lisbon.jpg?width=1600',alt:'Pastéis de Belém em Lisboa',cap:'Pastéis de Belém'},
   {match:'Mosteiro dos Jerónimos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Exterior%20of%20Mosteiro%20dos%20Jer%C3%B3nimos%20from%20Pra%C3%A7a%20do%20Imp%C3%A9rio%20%284%29.JPG?width=1600',alt:'Mosteiro dos Jerónimos visto da Praça do Império em Lisboa',cap:'Mosteiro dos Jerónimos'},
   {match:'Padrão dos Descobrimentos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Padr%C3%A3o%20dos%20Descobrimentos%2C%20Lisboa.jpg?width=1600',alt:'Padrão dos Descobrimentos em Belém, Lisboa',cap:'Padrão dos Descobrimentos'},
   {match:'Torre',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Torre%20de%20Bel%C3%A9m%20-%20Lisboa%20Portugal.jpg?width=1600',alt:'Torre de Belém junto ao Tejo em Lisboa',cap:'Torre de Belém'}
  ];
  [...grid.querySelectorAll('section')].forEach(sec=>{
   sec.querySelectorAll('.place-photo,.place-photo-grid,.place-photo-single').forEach(el=>el.remove());
   const txt=sec.textContent||'';
   const matches=photos.filter(x=>txt.includes(x.match));
   if(!matches.length)return;
   const wrap=document.createElement('div');
   wrap.className=matches.length>1?'place-photo-grid':'place-photo-single';
   matches.forEach(p=>{
    const fig=document.createElement('figure'); fig.className='place-photo';
    fig.innerHTML=`<img src="${p.src}" alt="${p.alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('figure').remove()"><figcaption>${p.cap}</figcaption>`;
    wrap.appendChild(fig);
   });
   sec.appendChild(wrap);
  });
  if(!document.getElementById('place-photo-style')){
   const s=document.createElement('style');s.id='place-photo-style';s.textContent=`.place-photo-single,.place-photo-grid{margin-top:14px}.place-photo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.place-photo{margin:0;border-radius:14px;overflow:hidden;position:relative;background:#eee;box-shadow:0 8px 24px rgba(0,0,0,.10)}.place-photo img{width:100%;height:220px;display:block;object-fit:cover}.place-photo figcaption{position:absolute;left:10px;bottom:9px;background:rgba(15,29,24,.82);color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}@media(max-width:620px){.place-photo-grid{grid-template-columns:1fr}.place-photo img{height:210px}}`;document.head.appendChild(s);
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,700));else setTimeout(run,700);
})();