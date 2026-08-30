(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  [...timeline.querySelectorAll(':scope > article.day')].forEach(day=>{
   const time=day.querySelector('time')?.textContent.trim()||'';
   const title=day.querySelector('.summary-text h3')?.textContent.trim()||'';
   if(title==='Milão' && /15\s*[–—-]\s*16/.test(time)) day.remove();
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,800));else setTimeout(run,800);
})();