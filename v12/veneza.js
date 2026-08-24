document.addEventListener('DOMContentLoaded',()=>{
  const timeline=document.querySelector('.timeline');
  if(!timeline)return;
  const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='13 OUT');
  const details=day?.querySelector('details');
  const summary=details?.querySelector('.summary-text');
  const content=details?.querySelector('.day-content');
  if(!summary||!content)return;

  summary.innerHTML='<span>ITÁLIA · VENEZA</span><h3>Veneza clássica sem museus</h3><small>Grand Canal · Rialto · San Marco · Dorsoduro · cicchetti</small>';

  content.innerHTML=`
    <div class="day4-hero day13-venice">
      <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=88" alt="Grande Canal em Veneza" loading="lazy">
      <div class="day4-hero-copy"><span>13 OUT · VENEZA</span><h3>Veneza pelos canais e vielas</h3><p>Um dia inteiro com os grandes clássicos, bastante caminhada e comida veneziana sem perder tempo com museus.</p></div>
    </div>
    <div class="day4-grid">
      <section class="day13-start"><b>🚆 07:00 · Treviso → Veneza</b><p><strong>~07:40–08:00</strong> chegada em Venezia Santa Lucia.</p><small>Começar cedo deixa San Marco e Rialto mais agradáveis antes do pico de movimento.</small><a class="day4-map" href="https://maps.google.com/?q=Venezia+Santa+Lucia" target="_blank" rel="noopener noreferrer">📍 Santa Lucia</a></section>

      <section><b>🚤 08:05 · Grand Canal</b><p>Vaporetto pela <strong>Linha 1</strong> para já transformar o deslocamento no primeiro passeio do dia.</p><small>Sentar do lado de fora se houver lugar e aproveitar as fachadas dos palácios.</small><a class="day4-map" href="https://maps.google.com/?q=Ferrovia+Vaporetto+Venezia" target="_blank" rel="noopener noreferrer">📍 Vaporetto Ferrovia</a></section>

      <section class="day13-highlight"><b>🌉 08:35–09:30 · Rialto</b><p><strong>Ponte di Rialto</strong> · margens do Grand Canal · ruelas de San Polo · Mercado de Rialto.</p><small>⭐ Um dos melhores horários para fotos antes da região ficar muito cheia.</small><div class="day4-links"><a href="https://maps.google.com/?q=Ponte+di+Rialto" target="_blank" rel="noopener noreferrer">Ponte Rialto</a><a href="https://maps.google.com/?q=Mercato+di+Rialto" target="_blank" rel="noopener noreferrer">Mercado</a></div></section>

      <section><b>🚶 09:30–10:00 · Rialto → San Marco</b><p>Caminhar pelas <strong>Mercerie</strong>, entrando nas vielas em vez de seguir apenas a rota mais direta.</p><small>Em Veneza, parte do passeio é justamente se perder um pouco.</small></section>

      <section class="day13-highlight"><b>🏛️ 10:00–11:30 · Piazza San Marco</b><p><strong>Praça São Marcos</strong> · Basílica de São Marcos · Campanário · Torre do Relógio.</p><small>Sem museus. Se a fila estiver razoável, vale entrar na Basílica; caso contrário, aproveitar a praça e seguir.</small><div class="day4-links"><a href="https://maps.google.com/?q=Piazza+San+Marco+Venezia" target="_blank" rel="noopener noreferrer">San Marco</a><a href="https://maps.google.com/?q=Basilica+di+San+Marco+Venezia" target="_blank" rel="noopener noreferrer">Basílica</a></div></section>

      <section><b>📸 11:30–12:15 · Riva degli Schiavoni</b><p><strong>Ponte dos Suspiros por fora</strong> · Palácio Ducal por fora · caminhada pela orla.</p><small>Ótimo trecho para fotos e para sentir a Veneza aberta para a lagoa.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+dei+Sospiri+Venezia" target="_blank" rel="noopener noreferrer">📍 Ponte dos Suspiros</a></section>

      <section class="day4-food"><b>🍝 12:30–13:30 · Almoço econômico</b><p><strong>Dal Moro's Fresh Pasta To Go</strong> para uma refeição rápida e prática.</p><small>🍴 Sugestão: massa fresca com molho de frutos do mar ou ragu. Se preferirem algo bem veneziano, procurar <strong>sarde in saor</strong> ou <strong>baccalà mantecato</strong>.</small><a class="day4-map" href="https://maps.google.com/?q=Dal+Moros+Fresh+Pasta+To+Go+Venice" target="_blank" rel="noopener noreferrer">📍 Dal Moro's</a></section>

      <section><b>🌉 13:30–14:15 · Ponte dell'Accademia</b><p>Seguir a pé até a Accademia e parar na ponte para uma das vistas clássicas do Grand Canal.</p><small>Não é necessário entrar na galeria; o objetivo aqui é a caminhada e a vista.</small><a class="day4-map" href="https://maps.google.com/?q=Ponte+dell+Accademia+Venezia" target="_blank" rel="noopener noreferrer">📍 Accademia</a></section>

      <section class="day13-dorsoduro"><b>⛪ 14:15–16:00 · Dorsoduro</b><p><strong>Santa Maria della Salute</strong> · Punta della Dogana por fora · Zattere · canais mais tranquilos.</p><small>❤️ É a parte que equilibra o dia depois de San Marco: menos multidão e mais clima de bairro.</small><div class="day4-links"><a href="https://maps.google.com/?q=Santa+Maria+della+Salute+Venezia" target="_blank" rel="noopener noreferrer">Salute</a><a href="https://maps.google.com/?q=Zattere+Venezia" target="_blank" rel="noopener noreferrer">Zattere</a></div></section>

      <section class="day4-food"><b>🍷 16:00–16:45 · Cicchetti</b><p><strong>Cantine del Vino già Schiavi</strong> ou <strong>Osteria Al Squero</strong>.</p><small>🍴 Pedir 2–3 cicchetti por pessoa e um spritz ou bebida sem álcool. Experimente baccalà mantecato, polenta e opções com peixe.</small><div class="day4-links"><a href="https://maps.google.com/?q=Cantine+del+Vino+gia+Schiavi+Venice" target="_blank" rel="noopener noreferrer">Schiavi</a><a href="https://maps.google.com/?q=Osteria+Al+Squero+Venice" target="_blank" rel="noopener noreferrer">Al Squero</a></div></section>

      <section><b>🏘️ 16:45–18:00 · Veneza sem roteiro</b><p>Voltar em direção a San Polo / Santa Croce passando por <strong>Campo Santa Margherita</strong>, pequenas pontes e canais.</p><small>Reserve este bloco para andar sem pressa e parar onde acharem bonito.</small><a class="day4-map" href="https://maps.google.com/?q=Campo+Santa+Margherita+Venezia" target="_blank" rel="noopener noreferrer">📍 Campo Santa Margherita</a></section>

      <section class="day13-sunset"><b>🌅 18:00–18:45 · Última vista</b><p>Se estiverem próximos da Accademia, voltar à ponte para o entardecer; caso contrário, curtir o Grand Canal perto de Santa Lucia.</p><small>Em outubro, o pôr do sol acontece cedo: não deixaria este momento para muito tarde.</small></section>

      <section class="day4-flight day13-night"><b>🚆 19:00+ · Retorno a Treviso</b><p>Ir para <strong>Venezia Santa Lucia</strong> e pegar o trem de volta quando estiverem satisfeitos com o dia.</p><small>⭐ Não prenderia o retorno a um horário muito rígido; Veneza é ótima para aproveitar até cansar.</small><a class="day4-map" href="https://maps.google.com/?q=Venezia+Santa+Lucia" target="_blank" rel="noopener noreferrer">📍 Estação</a></section>
    </div>

    <div class="day-summary"><b>🗓️ Resumidinho</b><p>Treviso → Grand Canal → Rialto → San Marco → Ponte dos Suspiros → almoço → Accademia → Dorsoduro → cicchetti → canais sem pressa → entardecer → Treviso.</p></div>

    <div class="bible-box"><b>💡 Para aproveitar melhor</b><p>Use sapato confortável, não tente conhecer todas as ilhas neste dia e evite fazer o trajeto inteiro seguindo apenas o Google Maps: escolha a direção geral e aproveite as vielas. Se o vaporetto estiver muito cheio na ida, caminhe até Rialto e deixe o Grand Canal para o retorno.</p></div>`;

  if(!document.getElementById('day13-style')){
    const st=document.createElement('style');st.id='day13-style';st.textContent=`.day13-venice:after{background:linear-gradient(90deg,rgba(15,38,48,.9),rgba(15,38,48,.08))}.day13-highlight{background:#f8f5ed!important}.day13-dorsoduro{background:#f1f6f5!important}.day13-sunset{background:#faf2e7!important}.day13-night{background:#eef4f2!important}.day13-start{background:#f4f6f5!important}`;document.head.appendChild(st);
  }
});