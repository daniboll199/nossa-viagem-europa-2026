document.addEventListener('DOMContentLoaded',()=>{
  const days=[...document.querySelectorAll('#roteiro article.day')];
  const day10=days.find(d=>d.querySelector('time')?.textContent.includes('10 OUT'));
  if(!day10) return;
  const content=day10.querySelector('.day-content');
  if(!content || content.querySelector('.treviso-ztl-note')) return;
  const box=document.createElement('div');
  box.className='day-summary treviso-ztl-note';
  box.innerHTML=`<b>🚗 Hospedagem em Treviso · atenção à ZTL</b>
    <p><strong>Via Maleviste, 1, 31100 Canizzano TV</strong> fica <strong>fora da ZTL de Treviso</strong>. É possível chegar e sair da hospedagem normalmente de carro, sem autorização da ZTL.</p>
    <p>⚠️ Evite entrar de carro no <strong>centro histórico de Treviso</strong>, onde há acessos da ZTL controlados por câmeras. Com carro alugado, prefira sempre rotas que contornem o centro.</p>
    <p>🏔️ Para as saídas rumo às <strong>Dolomitas</strong>, partir diretamente de Canizzano sem atravessar o centro histórico.</p>
    <a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Via%20Maleviste%201%2C%2031100%20Canizzano%20TV%2C%20Italia" target="_blank" rel="noopener">📍 Hospedagem no Maps</a>`;
  content.appendChild(box);
});
