(()=>{
  const ensure=()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    const find=n=>[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===n);
    const base=find('07 OUT');
    if(!base)return;
    const make=(date,flag='🏝️')=>{
      const a=document.createElement('article');
      a.className='day';
      a.innerHTML=`<time>${date}</time><div class="marker">${flag}</div><details class="day-card collapsible-day"><summary><div class="summary-text"><span>GRÉCIA · MILOS</span><h3>Carregando programação...</h3><small>Toque para ver a programação completa</small></div><div class="summary-chevron">⌄</div></summary><div class="day-content"></div></details>`;
      return a;
    };
    let anchor=base;
    ['08 OUT','09 OUT','10 OUT'].forEach(d=>{
      let day=find(d);
      if(!day){day=make(d); anchor.insertAdjacentElement('afterend',day);} 
      anchor=day;
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensure);else ensure();
})();