document.addEventListener('DOMContentLoaded',()=>{
  const timeline=document.querySelector('.timeline');
  if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='13 OUT');
  const details=day?.querySelector('details');
  const summary=details?.querySelector('.summary-text');
  const content=details?.querySelector('.day-content');
  if(!summary||!content)return;

  summary.innerHTML='<span>ITÁLIA · VENEZA</span><h3>Veneza completa em um dia</h3><small>Rialto · San Marco · Palazzo Ducale · Castello · Dorsoduro · pôr do sol</small>';

  content.innerHTML=`
    <div class="day4-hero day13-venice">
      <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=88" alt="Grande Canal em Veneza" loading="lazy">
      <div class="day4-hero-copy"><span>13 OUT · VENEZA</span><h3>Veneza clássica, bairros tranquilos e Grande Canal</h3><p>Um dia equilibrado: os grandes ícones pela manhã, almoço sem pressa, Castello e Dorsoduro à tarde e o Grande Canal no entardecer.</p></div>
    </div>

    <div class="day13-photo-strip" aria-label="Imagens de Veneza">
      <figure><img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=82" alt="Ponte de Rialto e Grande Canal" loading="lazy"><figcaption>Rialto e Grande Canal</figcaption></figure>
      <figure><img src="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&w=900&q=82" alt="Piazza San Marco em Veneza" loading="lazy"><figcaption>San Marco</figcaption></figure>
      <figure><img src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=900&q=82" alt="Canais de Veneza" loading="lazy"><figcaption>Canais e vielas</figcaption></figure>
    </div>

    <div class="day4-grid">
      <section class="day13-start"><b>🚗 07:00 · Saída de Treviso</b><p>Ir de carro até <strong>Venezia Mestre</strong>, estacionar perto da estação e seguir de trem até <strong>Venezia Santa Lucia</strong>.</p><small>⏱️ Treviso → Mestre: ~35–45 min. Trem Mestre → Santa Lucia: ~10–12 min. É a combinação mais prática e econômica para não levar o carro até a entrada de Veneza.</small><div class="day4-links"><a href="https://maps.google.com/?q=Venezia+Mestre+FS" target="_blank" rel="noopener noreferrer">📍 Estação Mestre</a><a href="https://maps.google.com/?q=Venezia+Santa+Lucia" target="_blank" rel="noopener noreferrer">📍 Santa Lucia</a></div></section>

      <section><b>🌊 08:10–08:20 · Chegada a Santa Lucia</b><p>Primeiro contato com o <strong>Grande Canal</strong> logo na saída da estação.</p><small>Não pegar vaporetto agora. A proposta é entrar em Veneza a pé e transformar o caminho até Rialto no primeiro passeio do dia.</small></section>

      <section class="day13-highlight"><b>🚶 08:20–09:10 · Cannaregio → Rialto</b><p>Lista di Spagna · Campo San Geremia · Strada Nova · pequenas pontes e canais.</p><small>⏱️ Caminhada efetiva ~35 min; com fotos e pequenas paradas, reserve 50 min. É um trecho ótimo para ver Veneza acordando.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+di+Rialto+Venezia" target="_blank" rel="noopener noreferrer">📍 Ponte di Rialto</a></section>

      <section class="day13-highlight"><b>🌉 09:10–09:30 · Ponte di Rialto</b><p>Atravessar a ponte, observar o Grande Canal dos dois lados e caminhar alguns minutos pelo entorno.</p><small>⭐ Melhor aproveitar cedo, antes do pico de movimento.</small><div class="day4-links"><a href="https://maps.google.com/?q=Ponte+di+Rialto+Venezia" target="_blank" rel="noopener noreferrer">Rialto</a><a href="https://maps.google.com/?q=Mercato+di+Rialto+Venezia" target="_blank" rel="noopener noreferrer">Mercado</a></div></section>

      <section><b>🚶 09:30–09:45 · Rialto → San Marco</b><p>Caminhada curta pelas Mercerie e vielas do centro histórico.</p><small>⏱️ ~10–15 min. Entre nas ruas laterais quando possível: a graça está justamente nos pequenos canais.</small></section>

      <section class="day13-highlight"><b>⛪ 09:45–10:45 · Basílica de San Marco</b><p>Visita à <strong>Basílica de São Marcos</strong>. Se possível, reservar entrada para 09:45 ou 10:00.</p><small>⭐ Se quiserem acrescentar algo, priorizem Museu + Loggia dei Cavalli pela vista da Piazza San Marco. Reserve ~50–60 min.</small><div class="day4-links"><a href="https://maps.google.com/?q=Basilica+di+San+Marco+Venezia" target="_blank" rel="noopener noreferrer">📍 Basílica</a><a href="https://tickets.basilicasanmarco.it/" target="_blank" rel="noopener noreferrer">🎟️ Ingresso oficial</a></div></section>

      <section><b>🪽 10:45–11:10 · Piazza San Marco</b><p>Torre dell'Orologio · Procuratie · Campanile · Piazzetta · vista para San Giorgio Maggiore.</p><small>☕ Para economizar, não faria a parada para café na própria praça; os cafés históricos são caros.</small><a class="day4-map" href="https://maps.google.com/?q=Piazza+San+Marco+Venezia" target="_blank" rel="noopener noreferrer">📍 Piazza San Marco</a></section>

      <section class="day13-palace"><b>👑 11:15–13:00 · Palazzo Ducale</b><p>Salões do governo veneziano · apartamentos · prisões · <strong>Ponte dos Suspiros por dentro</strong>.</p><small>⏱️ 1h30–1h45 é suficiente sem tornar a visita cansativa. Não é preciso ler cada painel.</small><div class="day4-links"><a href="https://maps.google.com/?q=Palazzo+Ducale+Venezia" target="_blank" rel="noopener noreferrer">📍 Palazzo Ducale</a><a href="https://palazzoducale.visitmuve.it/" target="_blank" rel="noopener noreferrer">🎟️ Site oficial</a></div></section>

      <section><b>📸 13:00–13:20 · Ponte dos Suspiros + Riva</b><p>Ver a ponte agora por fora, a partir da <strong>Ponte della Paglia</strong>, e caminhar um pouco pela Riva degli Schiavoni.</p><small>Bom momento para fotos da lagoa e de San Giorgio Maggiore.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+della+Paglia+Venezia" target="_blank" rel="noopener noreferrer">📍 Ponte della Paglia</a></section>

      <section class="day4-food"><b>🍕 13:30–14:20 · Almoço econômico</b><p>Evitar os restaurantes grudados na Piazza San Marco. Uma boa ideia é procurar um <strong>bacaro em Castello</strong> e fazer uma refeição leve com cicchetti.</p><small>💶 ~€10–20 por pessoa. Experimente cicchetti, tramezzino, sarde in saor ou baccalà mantecato.</small><a class="day4-map" href="https://maps.google.com/?q=Bacaro+Risorto+Castello+Venezia" target="_blank" rel="noopener noreferrer">📍 Bacaro Risorto Castello</a></section>

      <section><b>🍦 14:20–14:40 · Gelato + descanso curto</b><p>Parada de 15–20 min para gelato e descanso antes da segunda metade do dia.</p><small>Esse intervalo ajuda bastante porque a manhã concentra as duas atrações mais demoradas.</small><a class="day4-map" href="https://maps.google.com/?q=Gelateria+Gallonetto+Venezia" target="_blank" rel="noopener noreferrer">📍 Gelateria Gallonetto</a></section>

      <section class="day13-secret"><b>🧭 14:40–15:20 · Castello menos turístico</b><p><strong>Campo Santa Maria Formosa → Libreria Acqua Alta → Campo Santi Giovanni e Paolo.</strong></p><small>❤️ Um trecho para ver vielas, pontes pequenas, canais tranquilos e um lado mais cotidiano de Veneza.</small><div class="day4-links"><a href="https://maps.google.com/?q=Libreria+Acqua+Alta+Venezia" target="_blank" rel="noopener noreferrer">Acqua Alta</a><a href="https://maps.google.com/?q=Campo+Santi+Giovanni+e+Paolo+Venezia" target="_blank" rel="noopener noreferrer">Santi Giovanni e Paolo</a></div></section>

      <section><b>🚶 15:20–16:00 · Travessia até Dorsoduro</b><p>Rialto → Campo San Polo → Frari → Ponte dell'Accademia.</p><small>⏱️ ~35–40 min de caminhada. Não entrar em todas as igrejas; aqui o passeio é a própria cidade.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+dell+Accademia+Venezia" target="_blank" rel="noopener noreferrer">📍 Accademia</a></section>

      <section class="day4-food day13-rest"><b>🥂 16:00–16:40 · Cicchetti no Squero</b><p><strong>Cantine del Vino già Schiavi</strong> ou <strong>Osteria Al Squero</strong>, diante do canal.</p><small>💶 ~€5–10 por pessoa para cicchetti + bebida. Do outro lado fica o <strong>Squero di San Trovaso</strong>, um dos estaleiros tradicionais de gôndolas. Faça aqui uma pausa real de ~40 min.</small><div class="day4-links"><a href="https://maps.google.com/?q=Cantine+del+Vino+gia+Schiavi+Venezia" target="_blank" rel="noopener noreferrer">Schiavi</a><a href="https://maps.google.com/?q=Squero+di+San+Trovaso+Venezia" target="_blank" rel="noopener noreferrer">Squero</a></div></section>

      <section class="day13-dorsoduro"><b>🌅 16:40–18:10 · Dorsoduro sem pressa</b><p>Squero di San Trovaso → Zattere → Punta della Dogana → Santa Maria della Salute → Accademia.</p><small>⭐ Trecho mais tranquilo do roteiro, perfeito para desacelerar antes do pôr do sol.</small><div class="day4-links"><a href="https://maps.google.com/?q=Zattere+Venezia" target="_blank" rel="noopener noreferrer">Zattere</a><a href="https://maps.google.com/?q=Santa+Maria+della+Salute+Venezia" target="_blank" rel="noopener noreferrer">Salute</a></div></section>

      <section class="day13-sunset"><b>🌇 18:10–18:35 · Pôr do sol na Accademia</b><p>Chegar à <strong>Ponte dell'Accademia</strong> cerca de 20 minutos antes do pôr do sol.</p><small>📸 Vista clássica do Grande Canal com Santa Maria della Salute. Em meados de outubro escurece cedo, então não atrasem este bloco.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+dell+Accademia+Venezia" target="_blank" rel="noopener noreferrer">📍 Ponte dell'Accademia</a></section>

      <section class="day13-vaporetto"><b>🚤 18:40–19:20 · Grande Canal de vaporetto</b><p>Pegar o vaporetto próximo à Accademia e seguir pelo <strong>Grande Canal até Ferrovia / Santa Lucia</strong>.</p><small>💶 Bilhete unitário ~€9,50. Neste roteiro não compensa comprar passe de 24 h. Se houver lugar, sentar na área externa.</small><div class="day4-links"><a href="https://maps.google.com/?q=Accademia+Vaporetto+Venezia" target="_blank" rel="noopener noreferrer">📍 Vaporetto Accademia</a><a href="https://tripplanner.veneziaunica.it/" target="_blank" rel="noopener noreferrer">🚤 Venezia Unica</a></div></section>

      <section class="day4-food"><b>🍝 19:30–20:30 · Jantar em Cannaregio</b><p>Jantar numa região menos turística, perto da rota de retorno a Santa Lucia.</p><small>🍴 Procurem bigoli in salsa, risotto di mare, fritto misto ou baccalà mantecato. 💶 ~€15–25 por pessoa numa refeição simples.</small><div class="day4-links"><a href="https://maps.google.com/?q=Osteria+Le+Guglie+Venezia" target="_blank" rel="noopener noreferrer">Le Guglie</a><a href="https://maps.google.com/?q=Trattoria+da+Mimmo+Venezia" target="_blank" rel="noopener noreferrer">Da Mimmo</a></div></section>

      <section><b>🍨 20:30–20:50 · Último gelato</b><p>Se ainda houver espaço, fechar o dia com gelato em Cannaregio e caminhar até Santa Lucia.</p><small>⏱️ Depois, ~10–15 min a pé até a estação.</small><a class="day4-map" href="https://maps.google.com/?q=Bacaro+del+Gelato+Venezia" target="_blank" rel="noopener noreferrer">📍 Bacaro del Gelato</a></section>

      <section class="day4-flight day13-night"><b>🚆 21:00–22:00 · Retorno</b><p><strong>Venezia Santa Lucia → Venezia Mestre</strong>, pegar o carro e seguir para a hospedagem.</p><small>Não precisa prender o retorno a um minuto exato. A meta é começar a sair de Veneza por volta de 21:00–21:30.</small><a class="day4-map" href="https://maps.google.com/?q=Venezia+Santa+Lucia" target="_blank" rel="noopener noreferrer">📍 Santa Lucia</a></section>
    </div>

    <div class="day13-budget">
      <b>💶 Estimativa por pessoa</b>
      <div class="day13-budget-grid"><span>Trem Mestre ↔ Veneza<br><strong>~€3–4</strong></span><span>Basílica<br><strong>~€3+</strong></span><span>Palazzo Ducale<br><strong>~€30</strong></span><span>Comidas + cafés<br><strong>~€35–63</strong></span><span>Vaporetto<br><strong>~€9,50</strong></span><span>Total estimado<br><strong>~€78–105</strong></span></div>
    </div>

    <div class="day-summary"><b>🗓️ Resumidinho</b><p>Treviso → Mestre → Santa Lucia → Cannaregio → Rialto → Basílica de San Marco → Palazzo Ducale → Castello → almoço → gelato → Veneza menos turística → Accademia → cicchetti no Squero → Zattere → Salute → pôr do sol → vaporetto pelo Grande Canal → jantar em Cannaregio → retorno.</p></div>

    <div class="bible-box"><b>💡 Plano B e ritmo do dia</b><p><strong>Se chover:</strong> mantenham Basílica e Palazzo Ducale, reduzam Castello/Zattere e aumentem o tempo em atrações cobertas. <strong>Se estiverem cansados:</strong> cortem o trecho Castello → Santi Giovanni e Paolo e sigam mais cedo para Dorsoduro. Não incluiria Murano e Burano neste dia; isso deixaria o roteiro corrido demais.</p></div>`;

  if(!document.getElementById('day13-style')){
    const st=document.createElement('style');st.id='day13-style';st.textContent=`
      .day13-venice:after{background:linear-gradient(90deg,rgba(15,38,48,.91),rgba(15,38,48,.1))}
      .day13-photo-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 18px}
      .day13-photo-strip figure{margin:0;border-radius:16px;overflow:hidden;position:relative;min-height:155px;background:#eef2f2}
      .day13-photo-strip img{width:100%;height:100%;min-height:155px;object-fit:cover;display:block}
      .day13-photo-strip figcaption{position:absolute;left:10px;bottom:9px;background:rgba(0,0,0,.58);color:#fff;padding:5px 9px;border-radius:999px;font-size:.78rem}
      .day13-highlight{background:#f8f5ed!important}.day13-palace{background:#f4f0e8!important}.day13-secret{background:#f6f3ec!important}.day13-dorsoduro{background:#f1f6f5!important}.day13-rest{background:#f5f3ed!important}.day13-sunset{background:#faf2e7!important}.day13-vaporetto{background:#edf5f7!important}.day13-night{background:#eef4f2!important}.day13-start{background:#f4f6f5!important}
      .day13-budget{margin:16px 0;padding:18px;border-radius:18px;background:#f4f6f5}
      .day13-budget>b{font-size:1.05rem}.day13-budget-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:12px}
      .day13-budget-grid span{background:#fff;border-radius:12px;padding:11px;text-align:center;font-size:.86rem;line-height:1.35}.day13-budget-grid strong{font-size:1rem}
      @media(max-width:720px){.day13-photo-strip{grid-template-columns:1fr}.day13-photo-strip figure{min-height:190px}.day13-photo-strip img{min-height:190px}.day13-budget-grid{grid-template-columns:repeat(2,1fr)}}
    `;document.head.appendChild(st);
  }
});