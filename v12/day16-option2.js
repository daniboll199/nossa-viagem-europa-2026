(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='16 OUT');
  if(!day)return;
  const content=day.querySelector('.day-content');
  const summary=day.querySelector('.summary-text');
  if(!content||content.querySelector('.day16-option2'))return;
  if(summary) summary.innerHTML='<span>ITÁLIA · MILÃO</span><h3>Milão — escolha entre 2 roteiros</h3><small>Opção 1: Milão completo · Opção 2: Milão + Bérgamo Città Alta</small>';

  const op1=document.createElement('div');
  op1.className='day16-option-label';
  op1.innerHTML='<strong>OPÇÃO 1 · MILÃO COMPLETO</strong><span>Duomo · Galleria · Brera · Castello · Navigli</span>';
  content.insertBefore(op1,content.firstChild);

  const alt=document.createElement('div');
  alt.className='day16-option2';
  alt.innerHTML=`
  <div class="day16-divider"><span>OU</span></div>
  <div class="day4-hero"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Bergamo%20Citt%C3%A0%20Alta.jpg?width=1600" alt="Bérgamo Città Alta" loading="lazy"><div class="day4-hero-copy"><span>OPÇÃO 2 · 16 OUT</span><h3>Milão + Bérgamo Città Alta</h3><p>O essencial de Milão pela manhã e uma tarde medieval em Bérgamo, terminando nas muralhas ao pôr do sol.</p></div></div>
  <div class="day4-grid">
   <section><b>🚗 06:45 · Medole → Milão</b><p>Saída cedo para ganhar a manhã. Manter o <strong>Park & Ride de Bisceglie</strong> e seguir de M1 para o centro.</p><a class="day4-map" href="https://maps.app.goo.gl/uUf68Hv4qXLkPt2K7" target="_blank" rel="noopener noreferrer">📍 Parcheggio ATM Bisceglie</a></section>
   <section class="day11-hike"><b>⛪ 09:00–10:00 · Duomo di Milano ⭐⭐⭐⭐⭐</b><p>Interior + Piazza del Duomo. Em 16/10/2026, aproveitar a iniciativa de entrada gratuita na Catedral/Museu mediante reserva antecipada; neste roteiro, priorizar a Catedral e deixar o museu de fora.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=1400" alt="Duomo di Milano" style="width:100%;border-radius:14px;margin-top:12px;max-height:340px;object-fit:cover" loading="lazy"><div class="day4-links"><a href="https://www.google.com/maps/search/?api=1&query=Duomo+di+Milano" target="_blank" rel="noopener noreferrer">📍 Duomo</a><a href="https://www.duomomilano.it/" target="_blank" rel="noopener noreferrer">🎟️ Site oficial</a></div></section>
   <section><b>✨ 10:00–10:30 · Galleria Vittorio Emanuele II</b><p>Caminhar pela galeria, ver a cúpula de vidro e sair em direção à Piazza della Scala.</p><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Galleria+Vittorio+Emanuele+II+Milano" target="_blank" rel="noopener noreferrer">📍 Galleria</a></section>
   <section><b>🎭 10:30–11:00 · Scala + centro</b><p>Passagem pela Piazza della Scala e caminhada pelas ruas centrais em direção à Via Dante.</p></section>
   <section><b>👔 11:00–12:00 · Compras</b><p>Uma hora reservada para procurar ternos e fazer compras sem comprometer a tarde em Bérgamo.</p></section>
   <section><b>🏰 12:00–12:30 · Via Dante + Castello Sforzesco</b><p>Exterior e pátios do castelo. <strong>Sem museus</strong> nesta opção.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Castello%20Sforzesco,%20Milano.jpg?width=1400" alt="Castello Sforzesco" style="width:100%;border-radius:14px;margin-top:12px;max-height:340px;object-fit:cover" loading="lazy"></section>
   <section class="day4-food"><b>🍕 12:30–13:20 · Almoço</b><p>Almoço rápido próximo a Via Dante/Castello. Pizza, panzerotto ou massa são ideais para manter o horário.</p></section>
   <section class="day4-flight"><b>🚇 13:20–14:00 · Volta a Bisceglie</b><p>Metrô até o estacionamento e saída de Milão por volta das <strong>14:00</strong>.</p></section>
   <section><b>🚗 14:00–15:30 · Milão → Bérgamo</b><p>Janela com margem para o trânsito. Objetivo: estacionar na Città Bassa sem entrar na ZTL da Città Alta.</p></section>
   <section><b>🅿️ 15:30 · Parcheggio Piazza Libertà</b><p>Estacionar na <strong>Città Bassa</strong> e seguir a pé até o funicular. Estratégia simples e sem preocupação com a ZTL da cidade alta.</p><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Parcheggio+Piazza+Liberta+Bergamo" target="_blank" rel="noopener noreferrer">📍 Abrir estacionamento</a></section>
   <section><b>🚶 15:30–15:50 · Caminhada → funicular</b><p>Cerca de 15–20 minutos até a estação inferior.</p><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Funicolare+Citta+Alta+Bergamo" target="_blank" rel="noopener noreferrer">📍 Funicolare Città Alta</a></section>
   <section class="day11-hike"><b>🚞 ~15:50 · Subida para Città Alta</b><p>O funicular histórico já faz parte da experiência. Ao chegar, começar um circuito praticamente contínuo, evitando idas e voltas.</p><small>Rota: Mercato delle Scarpe → Via Gombito → Piazza Vecchia → Piazza Duomo → Via Colleoni → muralhas → Porta San Giacomo.</small></section>
   <section><b>🏘️ 16:00–16:20 · Mercato delle Scarpe + Via Gombito</b><p>Primeiro contato com as ruelas medievais. Caminhar sem pressa e aproveitar a atmosfera da Città Alta.</p></section>
   <section class="day11-hike"><b>🏛️ 16:20–16:50 · Piazza Vecchia ⭐⭐⭐⭐⭐</b><p>Fonte Contarini, Palazzo della Ragione, Campanone e o coração histórico de Bérgamo.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Piazza%20Vecchia%20Bergamo.jpg?width=1400" alt="Piazza Vecchia em Bérgamo" style="width:100%;border-radius:14px;margin-top:12px;max-height:340px;object-fit:cover" loading="lazy"><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Piazza+Vecchia+Bergamo" target="_blank" rel="noopener noreferrer">📍 Piazza Vecchia</a></section>
   <section><b>⛪ 16:50–17:25 · Piazza Duomo</b><p><strong>Santa Maria Maggiore</strong> é a prioridade para entrar. Cappella Colleoni e Duomo ficam praticamente ao lado e podem ser vistos conforme o tempo.</p><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Basilica+Santa+Maria+Maggiore+Bergamo" target="_blank" rel="noopener noreferrer">📍 Santa Maria Maggiore</a></section>
   <section><b>🏘️ 17:25–17:55 · Via Colleoni</b><p>Lojinhas, cafés, vielas e fachadas históricas. Momento para curtir Bérgamo sem uma atração rígida.</p></section>
   <section><b>🚶 17:55–18:10 · Caminhada pelas muralhas</b><p>Começar a descida pelo lado panorâmico da Città Alta em direção à Porta San Giacomo.</p></section>
   <section class="day4-flight"><b>🌅 18:10–18:45 · Porta San Giacomo ⭐⭐⭐⭐⭐</b><p>Grande final da tarde nas <strong>Muralhas Venezianas</strong>. Chegar antes para escolher o mirante e acompanhar a luz dourada sobre a cidade baixa.</p><small>🌄 Pôr do sol previsto por volta de <strong>18:34</strong> em 16/10. Proteger este horário: não marcar nenhuma outra atração aqui.</small><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Porta%20San%20Giacomo%20Bergamo.jpg?width=1400" alt="Porta San Giacomo em Bérgamo" style="width:100%;border-radius:14px;margin-top:12px;max-height:340px;object-fit:cover" loading="lazy"><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Porta+San+Giacomo+Bergamo" target="_blank" rel="noopener noreferrer">📍 Porta San Giacomo</a></section>
   <section class="day4-food"><b>🍝 18:45–20:15 · Jantar na Città Alta</b><p>Procurar <strong>casoncelli alla bergamasca</strong>. De sobremesa, vale dividir uma <strong>polenta e osei</strong>, doce típico de Bérgamo.</p></section>
   <section class="day4-flight"><b>🚞 ~20:30 · Descida</b><p>Funicular para a Città Bassa → caminhada até o estacionamento.</p></section>
   <section class="day4-flight"><b>🚗 ~21:00 · Bérgamo → Medole</b><p>Chegada estimada em Medole por volta de <strong>22:15–22:30</strong>.</p></section>
   <section><b>🗺️ Resumo da Opção 2</b><p><strong>06:45</strong> Medole → <strong>09:00</strong> Duomo → Galleria → Scala → compras → Castello → almoço → <strong>14:00</strong> Bérgamo → funicular → Città Alta → Piazza Vecchia → Piazza Duomo → Via Colleoni → <strong>18:10</strong> muralhas → <strong>18:34</strong> pôr do sol → jantar → <strong>~21:00</strong> retorno.</p><small>🟠 Ritmo 8/10 · mais intenso que a Opção 1, mas reúne o melhor das duas cidades.</small></section>
  </div>`;
  content.appendChild(alt);

  const style=document.createElement('style');
  style.textContent=`.day16-option-label{margin:4px 0 20px;padding:15px 17px;border-radius:14px;background:#eef5f1;border:1px solid rgba(15,47,39,.12);display:flex;flex-direction:column;gap:3px}.day16-option-label strong{font-size:14px;letter-spacing:.05em;color:#0f2f27}.day16-option-label span{font-size:12px;opacity:.72}.day16-divider{display:flex;align-items:center;gap:12px;margin:30px 0 22px}.day16-divider:before,.day16-divider:after{content:'';height:1px;background:rgba(15,47,39,.16);flex:1}.day16-divider span{font-size:11px;font-weight:800;letter-spacing:.14em;color:#0f2f27;background:#f6f3ec;border:1px solid rgba(15,47,39,.12);padding:7px 12px;border-radius:999px}.day16-option2{margin-top:10px;padding-top:4px}`;
  document.head.appendChild(style);
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,900));else setTimeout(run,900);
})();