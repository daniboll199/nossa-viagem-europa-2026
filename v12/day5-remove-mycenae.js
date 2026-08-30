(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline');if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='05 OUT');if(!day)return;
  const summary=day.querySelector('.summary-text');
  if(summary)summary.innerHTML='<span>GRÉCIA · CORINTO</span><h3>Corinto bíblica + Peloponeso</h3><small>Canal · Antiga Corinto · Acrópole de Corinto</small>';
  const hero=day.querySelector('.day4-hero-copy p');if(hero)hero.textContent='Corinto bíblica como prioridade, com Canal e Acrocorinto, sem pressa.';
  [...day.querySelectorAll('.day4-grid > section')].forEach(sec=>{if(/Micenas|Porta dos Leões|Tesouro de Atreu/i.test(sec.textContent||''))sec.remove();});
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,950));else setTimeout(run,950);
})();