(()=>{
  const run=()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    [...timeline.querySelectorAll(':scope > article.day')].forEach(day=>{
      const time=day.querySelector('time')?.textContent.trim()||'';
      const title=day.querySelector('.summary-text h3')?.textContent.trim()||'';
      if((time.includes('08')&&time.includes('09')) || (title==='Milos' && /08\s*[–—-]\s*09/.test(time))){day.remove();}
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,700));else setTimeout(run,700);
})();