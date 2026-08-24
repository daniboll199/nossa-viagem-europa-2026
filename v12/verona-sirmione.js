document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='14 OUT');
    if(!day)return;
    const details=day.querySelector('details');
    const summary=details?.querySelector('.summary-text');
    const content=details?.querySelector('.day-content');
    if(summary)summary.innerHTML='<span>ITÁLIA · VERONA + SIRMIONE</span><h3>Verona + Sirmione no Lago di Garda</h3><small>Arena · Piazza delle Erbe · Adige · centro histórico · castelo · lago</small>';
    if(content)content.innerHTML=`
      <div class="day4-hero day14-garda">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1600" alt="Arena de Verona na Piazza Bra" loading="lazy">
        <div class="day4-hero-copy"><span>14 OUT · VERONA + SIRMIONE</span><h3>Romance, história e Lago di Garda</h3><p>Manhã entre as praças e pontes de Verona; à tarde, o cenário de Sirmione cercado pelas águas do Garda.</p></div>
      </div>
      <div class="day4-grid">
        <section><b>🚗 08:00 · Chegada a Verona</b><p>Estacionar fora da ZTL e seguir a pé para o centro histórico.</p><small>⭐ Prioridade: não entrar de carro no miolo histórico.</small><div class="day4-links"><a href="https://maps.google.com/?q=Parcheggio+Centro+Verona" target="_blank" rel="noopener noreferrer">🅿️ Parcheggio Centro</a><a href="https://maps.google.com/?q=Parcheggio+Porta+Palio+Verona" target="_blank" rel="noopener noreferrer">🅿️ Porta Palio</a></div></section>
        <section class="day11-hike"><b>🏟️ 08:30–09:15 · Piazza Bra + Arena</b><p>Começar pela praça mais famosa de Verona e ver a <strong>Arena di Verona</strong> por fora.</p><small>Chegar cedo rende fotos melhores e menos movimento.</small><a class="day4-map" href="https://maps.google.com/?q=Arena+di+Verona" target="_blank" rel="noopener noreferrer">📍 Arena</a></section>
        <section><b>🏘️ 09:15–10:15 · Centro histórico</b><p><strong>Via Mazzini → Piazza delle Erbe → Piazza dei Signori</strong>.</p><small>Esse é o trecho mais gostoso para caminhar sem pressa.</small><a class="day4-map" href="https://maps.google.com/?q=Piazza+delle+Erbe+Verona" target="_blank" rel="noopener noreferrer">📍 Piazza delle Erbe</a></section>
        <section><b>❤️ 10:15–10:45 · Casa di Giulietta</b><p>Passagem rápida pelo pátio e pela região da Via Cappello.</p><small>Não faria questão de pagar para entrar; o passeio pelo centro vale mais.</small><a class="day4-map" href="https://maps.google.com/?q=Casa+di+Giulietta+Verona" target="_blank" rel="noopener noreferrer">📍 Giulietta</a></section>
        <section class="day11-return"><b>🌉 10:45–11:45 · Adige + Ponte Pietra</b><p>Caminhar até a <strong>Ponte Pietra</strong> e aproveitar a vista do rio e das colinas.</p><small>Um dos cantos mais bonitos de Verona para fotos.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+Pietra+Verona" target="_blank" rel="noopener noreferrer">📍 Ponte Pietra</a></section>
        <section class="day4-food"><b>🍕 11:45–12:45 · Almoço em Verona</b><p>Almoço simples antes de seguir para o lago.</p><small>⭐ Boas escolhas: pizza, pasta fresca ou um panino; guardar espaço para gelato em Sirmione.</small><div class="day4-links"><a href="https://maps.google.com/?q=La+Tradision+Verona" target="_blank" rel="noopener noreferrer">🍽️ La Tradision</a><a href="https://maps.google.com/?q=Osteria+Sottoriva+Verona" target="_blank" rel="noopener noreferrer">🍽️ Osteria Sottoriva</a></div></section>
        <section class="day4-flight"><b>🚗 12:45–14:00 · Verona → Sirmione</b><p>Seguir para a península de Sirmione e estacionar antes da entrada do centro histórico.</p><div class="day4-links"><a href="https://maps.google.com/?q=Parcheggio+Monte+Baldo+Sirmione" target="_blank" rel="noopener noreferrer">🅿️ Monte Baldo</a><a href="https://maps.google.com/?q=Parcheggio+Piazzale+Porto+Sirmione" target="_blank" rel="noopener noreferrer">🅿️ Piazzale Porto</a></div></section>
        <section class="day11-hike"><b>🏰 14:00–15:00 · Castello Scaligero</b><p>Entrada na vila pela ponte do castelo e caminhada pelo centro antigo.</p><small>O castelo cercado pela água é a chegada perfeita a Sirmione.</small><a class="day4-map" href="https://maps.google.com/?q=Castello+Scaligero+Sirmione" target="_blank" rel="noopener noreferrer">📍 Castello Scaligero</a></section>
        <section><b>🌊 15:00–16:30 · Vielas + margem do Garda</b><p>Passear sem pressa pelas ruazinhas, pequenas praças e pela beira do lago.</p><small>❤️ Aqui o objetivo é mais sentir o lugar do que cumprir atrações.</small><a class="day4-map" href="https://maps.google.com/?q=Centro+Storico+Sirmione" target="_blank" rel="noopener noreferrer">📍 Centro de Sirmione</a></section>
        <section class="day4-food"><b>🍨 ~16:00 · Gelato</b><p>Parada para gelato no centro histórico.</p><small>Combina perfeitamente com a caminhada à beira do lago.</small></section>
        <section class="day4-flight day14-sunset"><b>🌅 16:30–18:00 · Fim de tarde no lago</b><p>Caminhar em direção à ponta da península ou escolher um ponto tranquilo à beira d'água para curtir a luz do fim do dia.</p><small>Se ainda houver disposição: seguir até a região de <strong>Jamaica Beach</strong>; caso contrário, ficar pelo centro e pelo lago.</small><a class="day4-map" href="https://maps.google.com/?q=Jamaica+Beach+Sirmione" target="_blank" rel="noopener noreferrer">📍 Jamaica Beach</a></section>
        <section class="day4-flight day14-night"><b>🍝 18:00+ · Jantar / retorno</b><p>Jantar em Sirmione ou seguir para a hospedagem e comer no caminho.</p><small>⭐ Para provar: risotto, peixe do lago, pizza ou pasta.</small></section>
      </div>`;

    if(!document.getElementById('day14-style')){
      const st=document.createElement('style');st.id='day14-style';st.textContent=`.day14-garda:after{background:linear-gradient(90deg,rgba(55,34,24,.86),rgba(32,64,72,.08))}.day14-sunset{background:#f4efe6!important}.day14-night{background:#f1f3ed!important}`;document.head.appendChild(st);
    }
  },350);
});