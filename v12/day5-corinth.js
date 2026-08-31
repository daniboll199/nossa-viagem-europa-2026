(()=>{
 const run=()=>{
  const timeline=document.querySelector('.timeline'); if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='05 OUT');
  if(!day)return;
  const summary=day.querySelector('.summary-text');
  if(summary) summary.innerHTML='<span>GRÉCIA · CORINTO + ATENAS</span><h3>Corinto bíblica + Atenas ao entardecer</h3><small>Toque para ver a programação completa</small>';
  const content=day.querySelector('.day-content'); if(!content)return;
  content.innerHTML=`
  <p class="day-intro">Um dia nos passos de Paulo: amanhecer no mar, Corinto bíblica, almoço com vista para as ruínas, Canal e Cencreia. No fim da tarde, um passeio leve por Atenas e pôr do sol diante da Acrópole.</p>
  <div class="schedule">
   <div class="schedule-item flight"><b>05:15 — 🚗 Aeroporto de Atenas → Kinetta</b><p>Retirar o carro e seguir pela A6/A8. Cerca de 55–65 min.</p></div>
   <div class="schedule-item hero-stop"><b>06:20–07:35 — 🌊 Kinetta Beach</b><p>Caminhada tranquila, fotos e café/snack. Nascer do sol por volta de 07:24.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Kineta+Beach+Greece" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item hero-stop"><b>08:10–10:45 — 🏛️ Antiga Corinto</b><p>Visita com foco na Corinto do primeiro século: Templo de Apolo, Ágora, Bema de Gálio, Estrada de Lecaion, Fonte de Peirene e Museu Arqueológico.</p><p class="verse">📖 <strong>Atos 18:1-4</strong> — Paulo chega a Corinto, conhece Áquila e Priscila e trabalha com eles.</p><p class="verse">📖 <strong>Atos 18:9-11</strong> — Paulo recebe encorajamento e permanece 1 ano e 6 meses ensinando na cidade.</p><p class="verse">📖 <strong>Atos 18:12-17</strong> — ⭐ No Bema, recordar Paulo diante do procônsul Gálio.</p><p class="verse">📖 <strong>1 Coríntios 6:9-11; 10:14</strong> — o ambiente de Corinto e as mudanças feitas pelos cristãos.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Ancient+Corinth+Archaeological+Site+Greece" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item food"><b>10:50–12:05 — 🍽️ Gemelos Tavern ⭐</b><p>Almoço no terraço com vista para a Antiga Corinto, Templo de Apolo e Acrocorinto. Peça uma mesa no rooftop/terraço voltada para as ruínas. Sugestões: moussaka, souvlaki, salada grega e grelhados. 💰 ≈ €15–25/pessoa.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Gemelos+Tavern+Ancient+Corinth+Greece" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item hero-stop"><b>12:15–12:45 — 🌊 Canal de Corinto</b><p>Parada de cerca de 30 min para caminhar até a ponte, observar os dois lados e fotografar o impressionante corte do istmo. 💰 Grátis.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Corinth+Canal+Bridge+Greece" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item hero-stop"><b>13:00–13:45 — ⚓ Cencreia</b><p>Antigo porto oriental de Corinto e uma das paradas bíblicas mais especiais do dia.</p><p class="verse">📖 <strong>Atos 18:18</strong> — Paulo parte daqui em direção a Éfeso, acompanhado por Priscila e Áquila.</p><p class="verse">📖 <strong>Romanos 16:1-2</strong> — Febe fazia parte da congregação de Cencreia.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Ancient+Kenchreai+Greece" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item"><b>13:45–15:00 — 🚗 Retorno para Atenas</b><p>Viagem de aproximadamente 1h15, dependendo do trânsito.</p></div>
   <div class="schedule-item"><b>15:00–16:20 — 😴 Check-in + descanso</b><p>Banho, trocar de roupa e cerca de 1h de descanso para manter o dia agradável.</p></div>
   <div class="schedule-item"><b>16:45–17:25 — 🏘️ Monastiraki</b><p>Passeio leve pela praça e arredores. A partir daqui, deixe o carro e prefira caminhar/metrô.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Monastiraki+Square+Athens" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item"><b>17:25–17:55 — 🇬🇷 Plaka</b><p>Caminhada sem pressa pelas ruas históricas aos pés da Acrópole.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Plaka+Athens" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item"><b>17:55–18:20 — 🏡 Anafiotika</b><p>Pequeno bairro de vielas e casas brancas que lembra uma ilha grega. Uma parada curta e fotogênica.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Anafiotika+Athens" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item sunset"><b>18:25–19:25 — 🌅 Colina de Filopapo</b><p>Chegar antes do pôr do sol para escolher um bom ponto. Vista excelente da Acrópole e do Partenon. Ficar mais 15–20 min após o sol baixar para ver a Acrópole iluminada. 💰 Grátis.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Philopappos+Hill+Athens" target="_blank">📍 Abrir no Maps</a></div>
   <div class="schedule-item food"><b>19:40 — 🍽️ Jantar em Atenas</b><p>Descer tranquilamente para Thissio/Monastiraki e encerrar o dia sem pressa.</p></div>
  </div>
  <div class="day-summary"><b>❤️ Resumo</b><p>Kinetta → Antiga Corinto → Gemelos Tavern → Canal de Corinto → Cencreia → descanso → Monastiraki → Plaka → Anafiotika → pôr do sol em Filopapo.</p></div>`;
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,620));else setTimeout(run,620);
})();