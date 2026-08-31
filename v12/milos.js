(()=>{
  const apply=()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    const findDay=n=>[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===n);
    const setDay=(n,summary,html)=>{const day=findDay(n),d=day?.querySelector('details'),s=d?.querySelector('.summary-text'),c=d?.querySelector('.day-content');if(s)s.innerHTML=summary;if(c)c.innerHTML=html;};
    const map=(q,label='📍 Abrir no Maps')=>`<a class="day4-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    const photo=(src,alt,cap='')=>`<figure class="milos-photo"><img src="${src}" alt="${alt}" loading="lazy">${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
    const gallery=(items)=>`<div class="milos-gallery">${items.map(x=>photo(x[0],x[1],x[2]||'')).join('')}</div>`;

    const plaka='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Plaka%20on%20Milos%20Island%2C%20Greece.jpg?width=1600';
    const kastro='https://commons.wikimedia.org/wiki/Special:FilePath/Plaka%20on%20Milos%2C%20Kastro%2C%20the%20castle%2C%20152652.jpg?width=1400';
    const sarakiniko='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Sarakiniko%20Beach%20on%20Milos%20Island%2C%20Greece.jpg?width=1600';
    const sarakiniko2='https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko%20Beach%20on%20Milos%20Island%2C%20Greece%20with%20a%20view%20of%20the%20Aegean%20Sea.jpg?width=1400';
    const kleftiko='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Kleftiko%20on%20Milos%20Island%2C%20Greece.jpg?width=1600';
    const kleftiko2='https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20caves%20at%20Kleftiko%20on%20Milos%20Island%2C%20Greece.jpg?width=1400';
    const sykia='https://commons.wikimedia.org/wiki/Special:FilePath/Sikiacavemilo.JPG?width=1400';
    const klima='https://commons.wikimedia.org/wiki/Special:FilePath/Klima%20on%20Milos%2C%20syrmata%2C%20152733.jpg?width=1400';
    const klima2='https://commons.wikimedia.org/wiki/Special:FilePath/Boats%20in%20Klima%2C%20Milos%2C%20152741.jpg?width=1400';
    const fyriplaka='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aerial_view_of_Paralia_Firiplaka_on_Milos_Island%2C_Greece.jpg/1280px-Aerial_view_of_Paralia_Firiplaka_on_Milos_Island%2C_Greece.jpg';
    const paleochori='https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Paralia%20Paleochori%20on%20Milos%20Island%2C%20Greece.jpg?width=1400';
    const firopotamos='https://commons.wikimedia.org/wiki/Special:FilePath/Cyclades%20Milos%20Firopotamos%20-%20panoramio.jpg?width=1400';
    const plathiena='https://greekcitytimes.com/wp-content/uploads/2023/07/3-33-1024x576.jpg';
    const pitarakia='https://www.barkotavernmilos.com/assets/images/pitarakia.webp';
    const ladenia='https://zoliskitchen.com/wp-content/uploads/2024/10/%CE%BB%CE%B1%CE%B4%CE%B5%CE%BD%CE%B9%CE%B1-ladenia-greek-pizza-3-690x1024.jpg';
    const octopus='https://medusamilos.gr/wp-content/uploads/2024/07/Sea-view-seafood-greek-dishes-landscape-table-chairs-cycladic-decoration-aegean-colours-blue-horizon-summer-Medusa-restaurant-Milos-island-Greece-1024x750.jpg';

    setDay('07 OUT','<span>GRÉCIA · MILOS</span><h3>Chegada + Plaka + pôr do sol no Kastro</h3><small>17:30 chegada · Plaka · Kastro · jantar</small>',`
      <div class="day4-hero milos-hero"><img src="${plaka}" alt="Vista aérea de Plaka, Milos" loading="lazy"><div class="day4-hero-copy"><span>07 OUT · MILOS</span><h3>Primeiro pôr do sol nas Cíclades</h3><p>Chegada leve, Plaka ao entardecer e a vista panorâmica do Kastro.</p></div></div>
      <div class="day4-grid">
        <section><b>✈️ 17:30 · Chegada em Milos</b><p>Retirada de bagagem e carro. Do aeroporto até Adamas são cerca de 10–15 min; até Plaka, cerca de 15–20 min.</p><small>💶 Carro pequeno: ~€35–55/dia · combustível total estimado: €25–35 por carro.</small>${map('Milos Airport Greece','📍 Aeroporto de Milos')}</section>
        <section><b>🧳 18:00–18:20 · Check-in rápido</b><p>Se a hospedagem estiver no caminho, deixar as malas e seguir. Se isso ameaçar o pôr do sol, priorizar Plaka e fazer o check-in depois.</p></section>
        <section class="day11-hike milos-sunset"><b>🏰🌅 18:35–19:20 · Kastro de Plaka ⭐⭐⭐</b><p>Subida de 15–20 min pelas vielas até o antigo castelo veneziano. A vista do alto é um dos grandes momentos da ilha.</p><small>🌅 Chegar ao mirante antes do sol baixar e ficar alguns minutos depois para a luz azul. 💶 Gratuito.</small>${map('Venetian Castle of Milos Greece','📍 Kastro de Plaka')}${gallery([[kastro,'Kastro de Plaka','Kastro'],[plaka,'Plaka vista do alto','Plaka']])}</section>
        <section class="day4-food"><b>🍽️ 19:30–21:00 · Jantar em Plaka</b><p><strong>Avli</strong> para jantar grego tranquilo (~€15–35 pp) ou <strong>Vlahos</strong> para algo simples (~€5–10 pp).</p><p>Experimente <strong>pitarakia</strong>, queijo local e, se encontrar, <strong>ladenia</strong>.</p>${gallery([[pitarakia,'Pitarakia de Milos','Pitarakia — pastelzinho de queijo'],[ladenia,'Ladenia grega','Ladenia — tomate, cebola e azeite']])}</section>
        <section class="milos-note"><b>❤️ Ritmo do dia</b><p>Depois do jantar, voltar para a hospedagem. Não vale colocar mais nada: a prioridade é começar os dois dias inteiros descansado.</p></section>
      </div>`);

    setDay('08 OUT','<span>GRÉCIA · MILOS</span><h3>Sarakiniko + Mandrakia + Kleftiko + Klima</h3><small>Dia mais icônico · barco de 4h · pôr do sol em Klima</small>',`
      <div class="day4-hero milos-hero"><img src="${sarakiniko}" alt="Sarakiniko em Milos" loading="lazy"><div class="day4-hero-copy"><span>08 OUT · MILOS</span><h3>Sarakiniko + Kleftiko</h3><p>Paisagem lunar pela manhã, barco para as cavernas e fim de tarde em Klima.</p></div></div>
      <div class="day4-grid">
        <section><b>☕ 07:15 · Café da manhã</b><p>Começar cedo e levar água, protetor, toalha e uma troca de roupa leve para o barco.</p></section>
        <section class="day11-hike"><b>🌋 07:45–09:30 · Sarakiniko ⭐⭐⭐</b><p>A melhor janela para ver as formações vulcânicas com menos gente e luz agradável. Explore as rochas, o pequeno canal de água e os mirantes.</p><small>⏱️ Plaka → Sarakiniko ~15 min · 💶 gratuito.</small>${map('Sarakiniko Beach Milos Greece','📍 Sarakiniko')}${gallery([[sarakiniko,'Vista aérea de Sarakiniko','Sarakiniko visto do alto'],[sarakiniko2,'Rochas brancas de Sarakiniko','Paisagem lunar']])}</section>
        <section><b>🎣 09:45–10:25 · Mandrakia</b><p>Parada curta no pequeno vilarejo com <strong>syrmata</strong>, as garagens coloridas dos barcos escavadas junto à água.</p><small>⏱️ Sarakiniko → Mandrakia ~10 min · 💶 gratuito.</small>${map('Mandrakia Milos Greece','📍 Mandrakia')}</section>
        <section><b>☕ 10:35–11:20 · Café + descanso</b><p>Voltar em direção a Adamas/porto, fazer um lanche leve e descansar antes do barco.</p></section>
        <section class="day11-hike"><b>⛵ 12:00–16:00 · Passeio de barco para Kleftiko ⭐⭐⭐</b><p><strong>Prioridade absoluta:</strong> passeio compartilhado de cerca de 4 horas incluindo Kleftiko, snorkeling e, se as condições permitirem, Sykia Cave.</p><small>💶 ~€100–160 pp. Normalmente inclui água, snacks e equipamento básico de snorkeling. Confirmar ponto de embarque com o operador.</small>${map('Kleftiko Milos Greece','📍 Kleftiko')}${gallery([[kleftiko,'Kleftiko visto do alto','Kleftiko'],[kleftiko2,'Cavernas de Kleftiko','Arcos e cavernas'],[sykia,'Sykia Cave em Milos','Sykia Cave']])}</section>
        <section><b>🛌 16:30–17:30 · Hotel + descanso</b><p>Banho, troca de roupa e uma hora sem programação. Essa pausa deixa o fim do dia muito mais gostoso.</p></section>
        <section class="day4-flight milos-sunset"><b>🎨🌅 17:45–19:15 · Klima ⭐⭐⭐</b><p>Casas de pescadores coladas ao mar, portas coloridas e luz dourada no fim da tarde. Um dos pores do sol mais fotogênicos de Milos.</p><small>⏱️ Plaka/Adamas → Klima ~15–20 min · 💶 gratuito.</small>${map('Klima Milos Greece','📍 Klima')}${gallery([[klima,'Syrmata de Klima','Casas de pescadores'],[klima2,'Barcos em Klima','Klima à beira-mar']])}</section>
        <section class="day4-food"><b>🍽️ 19:45 · Jantar em Adamas</b><p><strong>Volta</strong> (~€15–25 pp) para bom custo-benefício ou <strong>Petrinos</strong> (~€20–40 pp). Para o clima de ilha, peça peixe, salada grega ou polvo.</p>${gallery([[octopus,'Mesa com frutos do mar em Milos','Polvo, salada e sabores do Egeu']])}</section>
        <section class="milos-warning"><b>🌬️ Regra de ouro do barco</b><p>Se o vento estiver melhor no dia 9, troque integralmente os dias 8 e 9. Kleftiko vale mais do que manter uma data fixa.</p></section>
      </div>`);

    setDay('09 OUT','<span>GRÉCIA · MILOS</span><h3>Praias do sul + Pollonia + Plathiena</h3><small>Fyriplaka · Tsigrado · Paleochori · Pollonia · pôr do sol</small>',`
      <div class="day4-hero milos-hero"><img src="${fyriplaka}" alt="Fyriplaka em Milos" loading="lazy"><div class="day4-hero-copy"><span>09 OUT · MILOS</span><h3>O dia das praias</h3><p>Falésias coloridas, mar transparente, almoço tranquilo e um pôr do sol sossegado.</p></div></div>
      <div class="day4-grid">
        <section><b>☕ 08:00 · Café da manhã</b><p>Começar um pouco mais tarde depois do dia de barco.</p></section>
        <section class="day11-hike"><b>🏖️ 09:00–11:00 · Fyriplaka ⭐⭐⭐</b><p>Uma das praias mais bonitas e fáceis do sul: areia clara e paredões vulcânicos em tons de ocre, vermelho e branco.</p><small>⏱️ Adamas → Fyriplaka ~20–25 min · 💶 gratuito.</small>${map('Firiplaka Beach Milos Greece','📍 Fyriplaka')}${gallery([[fyriplaka,'Praia de Fyriplaka','Fyriplaka vista do alto']])}</section>
        <section><b>🧗 11:05–11:35 · Mirante de Tsigrado</b><p>São só ~5 min desde Fyriplaka. A descida usa cordas e escadas; em outubro, eu ficaria no mirante se houver vento, umidade ou qualquer desconforto.</p><small>💶 gratuito.</small>${map('Tsigrado Beach Milos Greece','📍 Tsigrado')}</section>
        <section><b>🌋 12:00–14:00 · Paleochori</b><p>Falésias multicoloridas e sinais da atividade geotérmica da ilha. Reserve 1h30–2h para praia e caminhada leve.</p><small>⏱️ Tsigrado → Paleochori ~20 min · 💶 gratuito.</small>${map('Paleochori Beach Milos Greece','📍 Paleochori')}${gallery([[paleochori,'Paleochori em Milos','Falésias vulcânicas de Paleochori']])}</section>
        <section class="day4-food"><b>🍽️ 14:00–15:45 · Deslocamento + almoço em Pollonia</b><p>Paleochori → Pollonia ~30–35 min. Almoce sem pressa na orla: <strong>Enalion</strong> (~€20–45), <strong>Yialos</strong> (~€25–50) ou <strong>Alkis</strong> (~€15–40).</p>${map('Pollonia Milos Greece','📍 Pollonia')}</section>
        <section><b>☕ 16:45–17:20 · Pollonia + café</b><p>Caminhada curta no porto e 20–30 min de descanso. Não encha esta janela: o próximo deslocamento termina no pôr do sol.</p></section>
        <section class="day4-flight milos-sunset"><b>🏖️🌅 17:45–19:10 · Plathiena ⭐⭐</b><p>Praia voltada para oeste, tranquila e excelente para fechar o último dia inteiro de Milos.</p><small>⏱️ Pollonia → Plathiena ~25–30 min · 💶 gratuito.</small>${map('Plathiena Beach Milos Greece','📍 Plathiena')}${gallery([[plathiena,'Plathiena em Milos','Plathiena — fim de tarde tranquilo']])}</section>
        <section class="day4-food"><b>🍽️ 19:30 · Jantar em Plaka</b><p><strong>Foras</strong> (~€15–25 pp) para uma refeição casual ou voltar ao <strong>Avli</strong> (~€15–35 pp).</p></section>
        <section class="milos-note"><b>🔄 Alternativa</b><p>Se o barco tiver sido transferido para hoje, faça o roteiro do dia 8. O circuito de praias pode ir para o dia 8 sem prejuízo.</p></section>
      </div>`);

    setDay('10 OUT','<span>GRÉCIA · MILOS</span><h3>Firopotamos + Trypiti + despedida</h3><small>Manhã leve · Adamas · saída às 15:00</small>',`
      <div class="day4-hero milos-hero"><img src="${firopotamos}" alt="Firopotamos em Milos" loading="lazy"><div class="day4-hero-copy"><span>10 OUT · MILOS</span><h3>Última manhã sem correria</h3><p>Um vilarejo de pescadores, uma passada por Trypiti e despedida em Adamas.</p></div></div>
      <div class="day4-grid">
        <section><b>☕ 07:45 · Café da manhã</b><p>Check-out organizado e malas prontas antes de sair.</p></section>
        <section class="day11-hike"><b>🌊 08:30–10:00 · Firopotamos ⭐⭐</b><p>Pequena baía de água clara, casinhas de pescadores e igreja junto ao mar. Uma despedida bonita sem exigir caminhada longa.</p><small>⏱️ Plaka → Firopotamos ~10 min · 💶 gratuito.</small>${map('Firopotamos Beach Milos Greece','📍 Firopotamos')}${gallery([[firopotamos,'Firopotamos em Milos','Firopotamos']])}</section>
        <section><b>🏘️ 10:15–11:00 · Trypiti</b><p>Passada curta pelo vilarejo e seus moinhos. Se quiser, veja externamente a região do Teatro Antigo e do local associado à descoberta da Vênus de Milo, sem transformar a manhã em visita longa.</p>${map('Trypiti Milos Greece','📍 Trypiti')}</section>
        <section><b>⚓ 11:15–12:10 · Adamas</b><p>Café, porto e compras de última hora. Bons produtos para procurar: mel, alcaparras, queijo local e doces.</p>${map('Adamas Milos Greece','📍 Adamas')}</section>
        <section class="day4-food"><b>🍽️ 12:10–13:00 · Almoço</b><p>Almoço simples perto do porto. <strong>Volta</strong> é a opção prática; <strong>Nostos</strong> é melhor se quiser uma despedida com frutos do mar.</p></section>
        <section><b>🧳 13:00–13:15 · Malas + carro</b><p>Buscar bagagem, abastecer se necessário e encerrar a locação sem pressa.</p></section>
        <section class="day4-flight"><b>✈️ 13:15–15:00 · Saída de Milos</b><p>Seguir para o aeroporto/terminal com margem confortável para a partida das <strong>15:00</strong>.</p>${map('Milos Airport Greece','📍 Aeroporto de Milos')}</section>
        <section class="milos-note"><b>🌅 Ranking dos pores do sol</b><p><strong>1. Kastro de Plaka</strong> — panorâmico · <strong>2. Klima</strong> — mais fotogênico · <strong>3. Plathiena</strong> — mais tranquilo.</p></section>
      </div>`);

    if(!document.getElementById('milos-rich-style')){
      const style=document.createElement('style');
      style.id='milos-rich-style';
      style.textContent=`
        .milos-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:13px}.milos-gallery .milos-photo:first-child:last-child{grid-column:1/-1}.milos-photo{margin:0;position:relative;overflow:hidden;border-radius:15px;background:#e8e3d8;min-height:170px}.milos-photo img{display:block;width:100%;height:210px;object-fit:cover}.milos-photo figcaption{position:absolute;left:10px;right:10px;bottom:9px;color:#fff;font-weight:700;font-size:12px;padding:7px 9px;border-radius:9px;background:linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.2));text-shadow:0 1px 3px rgba(0,0,0,.4)}
        .milos-note{background:linear-gradient(135deg,#f1f8f4,#e8f1ec)!important;border-color:#b7d2c3!important}.milos-warning{background:linear-gradient(135deg,#fff7e7,#fff0c9)!important;border-color:#ead18d!important}.milos-sunset{box-shadow:inset 4px 0 0 #d39a42}
        .milos-hero img{object-position:center 55%}
        @media(max-width:640px){.milos-gallery{grid-template-columns:1fr}.milos-photo img{height:205px}.milos-gallery .milos-photo:first-child:last-child{grid-column:auto}}
      `;
      document.head.appendChild(style);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(apply,180));else setTimeout(apply,180);
})();