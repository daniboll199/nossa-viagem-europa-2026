(()=>{
  const apply=()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='17 OUT');
    if(!day)return;
    const details=day.querySelector('details');
    const summary=details?.querySelector('.summary-text');
    const content=details?.querySelector('.day-content');
    if(summary)summary.innerHTML='<span>ITÁLIA · SALÒ + VOO</span><h3>Despedida do Garda + Veneza</h3><small>Salò · lungolago · almoço · aeroporto Marco Polo · voo 19:10</small>';
    if(content)content.innerHTML=`
      <div class="day4-hero day17-salo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Salo%20Lago%20di%20Garda.jpg?width=1600" alt="Salò no Lago di Garda" loading="lazy"><div class="day4-hero-copy"><span>17 OUT · SALÒ + VOO</span><h3>Uma última manhã no Lago di Garda</h3><p>Despedida tranquila do lago em Salò, almoço sem pressa e saída cedo para o aeroporto de Veneza.</p></div></div>
      <div class="day4-grid">
        <section class="day4-flight"><b>🚗 08:00 · Saída de Medole</b><p>Fazer o check-out definitivo e já colocar todas as malas no carro.</p><small>➡️ Nada de voltar à hospedagem depois.</small></section>
        <section><b>🅿️ 09:00 · Estacionamento em Salò</b><p><strong>Parcheggio Via Maria Montessori</strong> como primeira opção.</p><small>Alternativa mais perto do centro: Parcheggio Piazza Sergio Bresciani.</small><div class="day4-links"><a href="https://www.google.com/maps/search/?api=1&query=Parcheggio+Via+Maria+Montessori+Salo+Italy" target="_blank" rel="noopener noreferrer">Montessori</a><a href="https://www.google.com/maps/search/?api=1&query=Parcheggio+Piazza+Sergio+Bresciani+Salo+Italy" target="_blank" rel="noopener noreferrer">Bresciani</a></div></section>
        <section class="day11-hike"><b>🌊 09:15 · Lungolago di Salò</b><p>Caminhada pela orla com vista para a baía e as montanhas.</p><small>❤️ A ideia aqui é desacelerar e curtir o lago sem correr atrás de atrações.</small><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Lungolago+Salo+Italy" target="_blank" rel="noopener noreferrer">📍 Lungolago</a></section>
        <section><b>🏘️ 10:00 · Centro histórico</b><p>Entrar nas ruazinhas paralelas ao lago e sentir o clima mais elegante de Salò.</p><small>Uma experiência diferente de Limone e Malcesine.</small></section>
        <section class="day4-food"><b>☕ 10:45 · Café com vista</b><p><strong>Cappuccino + cornetto</strong> diante do Garda.</p><small>Essa é a verdadeira despedida do lago.</small></section>
        <section><b>🌊 11:30 · Última caminhada</b><p>Passear mais um pouco pela margem e pela <strong>Passeggiata Salò</strong>.</p><small>Não precisa fazer o golfo inteiro; basta aproveitar o trecho mais agradável.</small><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Passeggiata+Salo+Italy" target="_blank" rel="noopener noreferrer">📍 Passeggiata</a></section>
        <section><b>🚗 12:00 · Volta ao carro</b><p>Encerrar o passeio e seguir para o almoço.</p></section>
        <section class="day4-food"><b>🍝 12:15–13:15 · Almoço em Salò</b><p>Pizza, massa ou panino, sem fazer uma parada longa.</p><small>Assim vocês não precisam parar de novo na estrada.</small></section>
        <section class="day4-flight"><b>🚗 13:15 · Salò → Aeroporto de Veneza</b><p>Saída conservadora, sem acrescentar nenhuma outra cidade.</p><small>Margem para trânsito, combustível e devolução do carro.</small><a class="day4-map" href="https://www.google.com/maps/dir/?api=1&origin=Salo%2C+Italy&destination=Venice+Marco+Polo+Airport" target="_blank" rel="noopener noreferrer">📍 Rota ao aeroporto</a></section>
        <section><b>⛽ ~15:30 · Abastecer o carro</b><p>Se o contrato exigir tanque cheio, abastecer antes de entrar no aeroporto.</p></section>
        <section><b>🚗 ~16:00 · Devolução do carro</b><p>Meta de chegada à locadora com boa margem para inspeção e bagagens.</p></section>
        <section class="day4-flight day17-airport"><b>✈️ 16:30–17:00 · Terminal</b><p>Chegada tranquila ao Marco Polo antes do voo.</p><small>Com o voo às 19:10, a programação preserva uma margem confortável.</small><a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=Venice+Marco+Polo+Airport" target="_blank" rel="noopener noreferrer">📍 Marco Polo</a></section>
        <section class="day4-flight day17-flight"><b>✈️ 19:10 · Veneza → Lisboa</b><p>Fim da etapa italiana da viagem.</p></section>
        <section class="day4-flight day17-note"><b>🟢 Ritmo do dia · 4/10</b><p>Últimas 3–4 horas no Garda sem colocar o voo em risco.</p><small>Salò fecha a viagem pelo lago com um clima diferente e mais tranquilo.</small></section>
      </div>`;
    if(!document.getElementById('day17-style')){const s=document.createElement('style');s.id='day17-style';s.textContent='.day17-salo:after{background:linear-gradient(90deg,rgba(28,54,58,.88),rgba(28,54,58,.08))}.day17-airport{background:#eef5f2!important}.day17-flight{background:#eaf1ec!important}.day17-note{background:#f2f4ed!important}';document.head.appendChild(s);}
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(apply,450));else setTimeout(apply,450);
})();