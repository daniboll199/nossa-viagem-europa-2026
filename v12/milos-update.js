(()=>{
  const apply=()=>{
    const timeline=document.querySelector('.timeline'); if(!timeline)return;
    const findDay=n=>[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===n);
    const setDay=(n,summary,html)=>{const day=findDay(n),d=day?.querySelector('details'),s=d?.querySelector('.summary-text'),c=d?.querySelector('.day-content');if(s)s.innerHTML=summary;if(c)c.innerHTML=html;};
    const map=(q,label='📍 Abrir no Maps')=>`<a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    const photo=(src,alt,cap='')=>`<figure class="milos-photo"><img src="${src}" alt="${alt}" loading="lazy">${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
    const gallery=items=>`<div class="milos-gallery">${items.map(x=>photo(x[0],x[1],x[2]||'')).join('')}</div>`;
    const sarakiniko='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Sarakiniko%20Beach%20on%20Milos%20Island%2C%20Greece.jpg?width=1600';
    const sarakiniko2='https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko%20Beach%20on%20Milos%20Island%2C%20Greece%20with%20a%20view%20of%20the%20Aegean%20Sea.jpg?width=1400';
    const papafragas='https://commons.wikimedia.org/wiki/Special:FilePath/Papafragas%20Beach%20Milos%20Island%20Greece.jpg?width=1400';
    const paleochori='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Paralia%20Paleochori%20on%20Milos%20Island%2C%20Greece.jpg?width=1400';
    const fyriplaka='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aerial_view_of_Paralia_Firiplaka_on_Milos_Island%2C_Greece.jpg/1280px-Aerial_view_of_Paralia_Firiplaka_on_Milos_Island%2C_Greece.jpg';
    const kleftiko='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Kleftiko%20on%20Milos%20Island%2C%20Greece.jpg?width=1600';
    const kleftiko2='https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20caves%20at%20Kleftiko%20on%20Milos%20Island%2C%20Greece.jpg?width=1400';
    const sykia='https://commons.wikimedia.org/wiki/Special:FilePath/Sikiacavemilo.JPG?width=1400';
    const klima='https://commons.wikimedia.org/wiki/Special:FilePath/Klima%20on%20Milos%2C%20syrmata%2C%20152733.jpg?width=1400';
    const klima2='https://commons.wikimedia.org/wiki/Special:FilePath/Boats%20in%20Klima%2C%20Milos%2C%20152741.jpg?width=1400';
    const octopus='https://medusamilos.gr/wp-content/uploads/2024/07/Sea-view-seafood-greek-dishes-landscape-table-chairs-cycladic-decoration-aegean-colours-blue-horizon-summer-Medusa-restaurant-Milos-island-Greece-1024x750.jpg';

    setDay('08 OUT','<span>GRÉCIA · MILOS</span><h3>Rota vulcânica do sul · Sarakiniko + Paleochori</h3><small>07:45 Sarakiniko · Papafragas · Paleochori 🌋 · Firiplaka · Tsigrado opcional</small>',`
      <div class="day4-hero milos-hero"><img src="${sarakiniko}" alt="Sarakiniko em Milos" loading="lazy"><div class="day4-hero-copy"><span>08 OUT · MILOS</span><h3>O dia das paisagens vulcânicas 🌋</h3><p>Começar cedo no norte e seguir para o sul: Sarakiniko, Papafragas, a atividade geotérmica de Paleochori e as falésias coloridas de Firiplaka.</p></div></div>
      <div class="day4-grid">
        <section><b>☕ 07:15 · Café da manhã</b><p>Começar cedo. Levar água, protetor, toalha, máscara e snorkel.</p></section>
        <section class="day11-hike"><b>🌋 07:45–09:30 · Sarakiniko ⭐⭐⭐</b><p>Aproveitar a luz da manhã na famosa paisagem branca, formada por rochas vulcânicas. Melhor horário para fotos e para evitar o calor.</p><small>⏱️ Adamas → Sarakiniko ~15 min · 💶 gratuito.</small>${map('Sarakiniko Beach Milos Greece','📍 Sarakiniko')}${gallery([[sarakiniko,'Vista aérea de Sarakiniko','Paisagem lunar de Sarakiniko'],[sarakiniko2,'Rochas brancas de Sarakiniko','Acesso ao mar']])}</section>
        <section><b>📸 09:50–10:25 · Papafragas</b><p>Parada curta para conhecer o estreito canal entre falésias e tirar fotos. Não precisa ficar muito tempo.</p><small>⏱️ Sarakiniko → Papafragas ~15 min · 💶 gratuito.</small>${map('Papafragas Beach Milos Greece','📍 Papafragas')}${gallery([[papafragas,'Papafragas em Milos','Falésias e canal']])}</section>
        <section class="day11-hike"><b>🌋 11:15–13:15 · Paleochori ⭐⭐⭐</b><p><strong>Nova prioridade do roteiro:</strong> uma das áreas geotérmicas mais interessantes de Milos. Além da praia, procure as zonas onde a areia e a água apresentam sinais do calor subterrâneo. As falésias têm tons vermelhos, amarelos e brancos.</p><small>⏱️ Papafragas → Paleochori ~25–30 min · 💶 gratuito. Reserve 1h30–2h.</small>${map('Paleochori Beach Milos Greece','📍 Paleochori')}${gallery([[paleochori,'Paleochori em Milos','Falésias vulcânicas e atividade geotérmica']])}</section>
        <section class="day4-food"><b>🍽️ 13:15–14:15 · Almoço em Paleochori</b><p>Almoçar na própria praia para não perder tempo com deslocamentos. Depois, aproveitar mais alguns minutos no mar.</p></section>
        <section class="day11-hike"><b>🏖️ 14:40–16:00 · Firiplaka ⭐⭐⭐</b><p>Praia do sul com falésias em tons de ocre, vermelho e branco. Aqui vale parar para banho e fotos.</p><small>⏱️ Paleochori → Firiplaka ~20–25 min · 💶 gratuito.</small>${map('Firiplaka Beach Milos Greece','📍 Firiplaka')}${gallery([[fyriplaka,'Praia de Firiplaka','Falésias coloridas de Firiplaka']])}</section>
        <section><b>🧗 16:05–16:35 · Tsigrado (opcional)</b><p>Fica praticamente ao lado de Firiplaka. A descida é íngreme, com cordas/escadas. Se houver vento ou vocês estiverem cansados, fiquem apenas no mirante.</p><small>💶 gratuito.</small>${map('Tsigrado Beach Milos Greece','📍 Tsigrado')}</section>
        <section class="milos-note milos-sunset"><b>🌅 17:00 em diante · Volta para Adamas</b><p>Retorno tranquilo, banho e noite livre. Não acrescentar outra praia: o dia já terá bastante deslocamento e quatro experiências bem diferentes.</p></section>
      </div>`);

    setDay('09 OUT','<span>GRÉCIA · MILOS</span><h3>Passeio de barco · Kleftiko + Sykia</h3><small>~4h de barco · praias inacessíveis por terra · snorkeling · tarde livre</small>',`
      <div class="day4-hero milos-hero"><img src="${kleftiko}" alt="Kleftiko em Milos" loading="lazy"><div class="day4-hero-copy"><span>09 OUT · MILOS</span><h3>O grande dia de barco 🚤</h3><p>Kleftiko, cavernas, praias acessíveis apenas pelo mar e tempo para nadar e fazer snorkeling.</p></div></div>
      <div class="day4-grid">
        <section><b>☕ 08:00 · Café da manhã</b><p>Manhã sem pressa. Levar água, protetor, toalha, roupa seca e máscara/snorkel.</p></section>
        <section class="day11-hike"><b>⛵ ~10:00–14:00 · Passeio de barco ⭐⭐⭐</b><p><strong>Prioridade absoluta:</strong> passeio compartilhado de aproximadamente 4 horas, idealmente com Kleftiko, paradas para banho/snorkel e Sykia Cave se o mar permitir.</p><small>💶 Referência do planejamento: ~€50–54 pp para uma opção econômica de ~4h. Confirmar horário e embarque com o operador.</small>${map('Kleftiko Milos Greece','📍 Kleftiko')}${gallery([[kleftiko,'Kleftiko visto do alto','Kleftiko'],[kleftiko2,'Cavernas de Kleftiko','Arcos e cavernas'],[sykia,'Sykia Cave em Milos','Sykia Cave']])}</section>
        <section><b>🏊 Durante o passeio · banho + snorkeling</b><p>Aproveitar as paradas para nadar nas águas transparentes e explorar as formações rochosas. O roteiro depende das condições do mar.</p></section>
        <section><b>🛌 14:30–16:30 · Hotel + descanso</b><p>Banho, almoço tardio e descanso. Depois de dois dias de praias, esse intervalo deixa a tarde leve.</p></section>
        <section class="day4-flight milos-sunset"><b>🎨🌅 17:00–19:00 · Klima ⭐⭐⭐</b><p>Se ainda estiverem com energia, fechar a viagem com Klima: syrmata coloridos, mar e luz dourada. Se o passeio atrasar, simplesmente voltar para Adamas.</p><small>⏱️ Adamas → Klima ~15–20 min · 💶 gratuito.</small>${map('Klima Milos Greece','📍 Klima')}${gallery([[klima,'Syrmata de Klima','Casas de pescadores'],[klima2,'Barcos em Klima','Klima à beira-mar']])}</section>
        <section class="day4-food"><b>🍽️ 19:30 · Jantar em Adamas</b><p>Última noite completa em Milos. Uma refeição simples e sem pressa.</p>${gallery([[octopus,'Mesa com frutos do mar em Milos','Sabores do Egeu']])}</section>
        <section class="milos-warning"><b>🌬️ Regra de ouro do barco</b><p>O barco depende do vento e do estado do mar. Se o dia 8 tiver condições melhores para navegar, trocar os dias 8 e 9 é a decisão certa; a rota terrestre continua flexível.</p></section>
      </div>`);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();
