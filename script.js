const boxes=[...document.querySelectorAll('#checklist input[type="checkbox"]')];
boxes.forEach((box,i)=>{box.checked=localStorage.getItem('europa2026-check-'+i)==='1';box.addEventListener('change',()=>localStorage.setItem('europa2026-check-'+i,box.checked?'1':'0'));});

document.addEventListener('DOMContentLoaded', () => {
  // Início da página: incluir Lago di Garda na rota.
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = 'Lisboa → Corinto → Atenas → Milos → Dolomitas → Veneza → Verona → Lago di Garda → Milão → Lisboa';

  const routeInner = document.querySelector('.route-inner');
  if (routeInner) routeInner.innerHTML = '<span>🇵🇹 Lisboa</span><b>→</b><span>🏛️ Corinto</span><b>→</b><span>🇬🇷 Atenas</span><b>→</b><span>🏝️ Milos</span><b>→</b><span>🏔️ Dolomitas</span><b>→</b><span>🚤 Veneza</span><b>→</b><span>🏟️ Verona</span><b>→</b><span>🌊 Lago di Garda</span><b>→</b><span>⛪ Milão</span><b>→</b><span>🇵🇹 Lisboa</span>';

  const stats = [...document.querySelectorAll('.stats div')];
  const destinosStat = stats.find(d => d.querySelector('span')?.textContent.trim() === 'destinos');
  if (destinosStat?.querySelector('strong')) destinosStat.querySelector('strong').textContent = '9';

  // Slideshow suave no topo com os destinos da viagem.
  const hero = document.querySelector('.hero');
  if (hero) {
    const slides = [
      {name:'Lisboa', url:'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=85'},
      {name:'Atenas', url:'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=2200&q=85'},
      {name:'Corinto', url:'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1800'},
      {name:'Milos', url:'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=2200&q=85'},
      {name:'Dolomitas', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Tre%20cime%20di%20Lavaredo%20dalla%20forcella.jpg?width=1800'},
      {name:'Veneza', url:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2200&q=85'},
      {name:'Verona', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1800'},
      {name:'Lago di Garda', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20Garda.jpg?width=1800'},
      {name:'Milão', url:'https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=1800'}
    ];

    hero.style.backgroundImage = 'none';
    hero.style.overflow = 'hidden';

    const layerA = document.createElement('div');
    const layerB = document.createElement('div');
    [layerA, layerB].forEach(layer => {
      layer.className = 'hero-slide-layer';
      layer.style.cssText = 'position:absolute;inset:0;background-size:cover;background-position:center;transition:opacity 1.4s ease;z-index:0;';
      hero.insertBefore(layer, hero.firstChild);
    });

    const shade = document.createElement('div');
    shade.style.cssText = 'position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,29,24,.9),rgba(12,29,24,.38));z-index:1;pointer-events:none;';
    hero.insertBefore(shade, hero.children[2]);
    const nav = hero.querySelector('.nav');
    const heroContent = hero.querySelector('.hero-content');
    if (nav) { nav.style.position='relative'; nav.style.zIndex='2'; }
    if (heroContent) { heroContent.style.position='relative'; heroContent.style.zIndex='2'; }

    let active = 0;
    let index = 0;
    const layers = [layerA, layerB];
    layers[0].style.opacity = '1';
    layers[1].style.opacity = '0';
    layers[0].style.backgroundImage = `url("${slides[0].url}")`;

    const caption = document.createElement('div');
    caption.className = 'hero-place-caption';
    caption.textContent = slides[0].name;
    caption.style.cssText = 'position:absolute;right:22px;bottom:20px;z-index:2;color:#fff;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:rgba(0,0,0,.28);backdrop-filter:blur(6px);padding:7px 10px;border-radius:999px;';
    hero.appendChild(caption);

    const goNext = () => {
      index = (index + 1) % slides.length;
      const nextLayer = 1 - active;
      const img = new Image();
      img.onload = () => {
        layers[nextLayer].style.backgroundImage = `url("${slides[index].url}")`;
        layers[nextLayer].style.opacity = '1';
        layers[active].style.opacity = '0';
        active = nextLayer;
        caption.textContent = slides[index].name;
      };
      img.onerror = () => { index = (index + 1) % slides.length; };
      img.src = slides[index].url;
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(goNext, 5500);
  }

  // 05/10 = Corinto + Micenas; 06/10 = Atenas.
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const articles = [...timeline.querySelectorAll(':scope > article.day')];
    const day05 = articles.find(a => a.querySelector('time')?.textContent.trim() === '05 OUT');
    const day06 = articles.find(a => a.querySelector('time')?.textContent.trim() === '06 OUT');
    if (day05 && day06) {
      day05.querySelector('time').textContent = '06 OUT';
      day06.querySelector('time').textContent = '05 OUT';
      timeline.insertBefore(day06, day05);
    }

    // Carrossel de Lisboa abaixo da programação de 04/10.
    const currentArticles = [...timeline.querySelectorAll(':scope > article.day')];
    const day04 = currentArticles.find(a => a.querySelector('time')?.textContent.trim() === '04 OUT');
    const day04Content = day04?.querySelector('.day-content');
    if (day04Content && !day04Content.querySelector('.lisbon-carousel')) {
      const carousel = document.createElement('section');
      carousel.className = 'lisbon-carousel';
      carousel.setAttribute('aria-label', 'Fotos de Lisboa e Belém');
      carousel.innerHTML = `
        <div class="carousel-head"><b>📸 Um gostinho de Lisboa</b><span>Deslize para ver →</span></div>
        <div class="carousel-track" tabindex="0">
          <figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20Jer%C3%B3nimos%20-%20Lisboa.jpg?width=1200" alt="Mosteiro dos Jerónimos em Lisboa" loading="lazy"><figcaption>Mosteiro dos Jerónimos</figcaption></figure>
          <figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Padr%C3%A3o%20dos%20Descobrimentos%20-%20Lisboa%20-%20Portugal%20%2851286489801%29.jpg?width=1200" alt="Padrão dos Descobrimentos em Lisboa" loading="lazy"><figcaption>Padrão dos Descobrimentos</figcaption></figure>
          <figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Torre%20de%20Bel%C3%A9m%20-%20Lisboa%20Portugal.jpg?width=1200" alt="Torre de Belém em Lisboa" loading="lazy"><figcaption>Torre de Belém</figcaption></figure>
          <figure><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85" alt="Vista de Lisboa" loading="lazy"><figcaption>Lisboa</figcaption></figure>
        </div>
        <div class="carousel-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;
      day04Content.appendChild(carousel);

      const style = document.createElement('style');
      style.textContent = `
        .lisbon-carousel{margin-top:22px;padding-top:18px;border-top:1px solid rgba(15,47,39,.12)}
        .carousel-head{display:flex;justify-content:space-between;align-items:end;gap:12px;margin-bottom:10px}.carousel-head b{font-size:18px}.carousel-head span{font-size:12px;opacity:.65;white-space:nowrap}
        .carousel-track{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:2px 2px 10px;-webkit-overflow-scrolling:touch}.carousel-track::-webkit-scrollbar{display:none}
        .carousel-track figure{position:relative;flex:0 0 84%;height:245px;margin:0;border-radius:16px;overflow:hidden;scroll-snap-align:center;background:#ddd}.carousel-track img{width:100%;height:100%;object-fit:cover;display:block}.carousel-track figure:after{content:'';position:absolute;inset:45% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.68));pointer-events:none}.carousel-track figcaption{position:absolute;z-index:1;left:16px;bottom:14px;color:#fff;font-weight:700;font-size:16px;text-shadow:0 1px 4px rgba(0,0,0,.35)}
        .carousel-dots{display:flex;justify-content:center;gap:6px;margin-top:2px}.carousel-dots i{display:block;width:6px;height:6px;border-radius:50%;background:rgba(15,47,39,.22)}.carousel-dots i:first-child{width:18px;border-radius:8px;background:rgba(15,47,39,.65)}
        @media(min-width:700px){.carousel-track figure{flex-basis:48%;height:280px}}
      `;
      document.head.appendChild(style);
    }

    const refreshedArticles = [...timeline.querySelectorAll(':scope > article.day')];
    const day11 = refreshedArticles.find(a => a.querySelector('time')?.textContent.trim() === '11 OUT');
    if (day11) {
      const details = day11.querySelector('details.collapsible-day');
      const summary = details?.querySelector('summary .summary-text');
      const content = details?.querySelector('.day-content');
      if (summary) summary.innerHTML = '<span>DOLOMITAS</span><h3>Carezza · Adolf Munkel · Val di Funes · Ortisei</h3><small>Toque para ver a programação completa</small>';
      if (content) content.innerHTML = `<p class="day-intro">Um dos dias mais bonitos da viagem: Lago di Carezza cedo, trilha curta e cênica pela Adolf Munkel até a Geisler Alm, cartões-postais de Val di Funes e fim de tarde com jantar em Ortisei.</p><div class="schedule"><div class="schedule-item"><b>07:15 — 🚗 Saída</b><p>Começar cedo para aproveitar Carezza com calma e deixar a maior parte do dia para Val di Funes.</p></div><div class="schedule-item hero-stop"><b>08:00–08:40 — 💎 Lago di Carezza</b><p>Mirante principal, caminhada curta e fotos com o Latemar. Sem trilha longa aqui.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Karersee%20mit%20Latemar.jpg?width=1200" alt="Lago di Carezza" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div><div class="schedule-item"><b>08:40–10:30 — 🚗 Carezza → Zans / Val di Funes</b><p>Seguir até o estacionamento de Zans, ponto de partida da trilha.</p></div><div class="schedule-item hero-stop"><b>10:40–14:00 — 🥾 Adolf Munkel + Geisler Alm</b><p><strong>Rota:</strong> Zans → #6 → #35 Adolf Munkel → #36 → Gschnagenhardt Alm → Geisler Alm → #36 → Zans.</p><p>🥾 cerca de 9 km · ⛰️ cerca de 430 m de desnível · ⏱️ aproximadamente 3h de caminhada.</p><p><strong>~12:15:</strong> parada de cerca de 30 min na Geisler Alm para fotos e almoço/lanche rápido.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Geislergruppe%20Villnoess.jpg?width=1200" alt="Odle em Val di Funes" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div><div class="schedule-item"><b>14:15–14:40 — ⛪ San Giovanni in Ranui</b><p>Parada curta para fotos da famosa igrejinha com as Odle ao fundo.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Johann%20in%20Ranui.jpg?width=1200" alt="San Giovanni in Ranui" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div><div class="schedule-item hero-stop"><b>14:50–16:00 — 🏔️ Santa Maddalena</b><p>Vilarejo, igreja e caminhada curta até o mirante clássico com os campos e as Odle ao fundo.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Magdalena%20in%20Villnoess.jpg?width=1200" alt="Santa Maddalena em Val di Funes" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div><div class="schedule-item"><b>16:00–17:00 — 🚗 Val di Funes → Ortisei</b><p>Depois das atividades de montanha, seguir para um fim de tarde tranquilo em Val Gardena.</p></div><div class="schedule-item sunset"><b>17:00–18:30 — 🏘️ Ortisei</b><p>Passeio pela Strada Rezia, centro histórico, igreja, lojinhas e cafés. Aproveitar o começo do entardecer.</p><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ortisei%20Val%20Gardena.jpg?width=1200" alt="Ortisei em Val Gardena" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div><div class="schedule-item food"><b>18:30–20:00 — 🍕 Jantar em Ortisei</b><p>Jantar no centro. Sugestão prática: pizzaria ou restaurante casual para fechar o dia sem pressa.</p></div><div class="schedule-item flight"><b>20:00 — 🚗 Ortisei → San Sigismondo</b><p>Seguir para a hospedagem e descansar.</p></div></div><div class="day-summary"><b>❤️ Resumo</b><p>Carezza → Adolf Munkel → Geisler Alm → San Giovanni → Santa Maddalena → Ortisei → jantar → San Sigismondo.</p></div><div class="bible-box"><b>⚠️ Plano B para outubro</b><p>Se houver neve, gelo ou condição ruim de trilha, manter Carezza, San Giovanni, Santa Maddalena e Ortisei e cortar apenas a Adolf Munkel.</p></div>`;
    }
  }

  const days = [...document.querySelectorAll('details.collapsible-day')];
  days.forEach(day => day.addEventListener('toggle', () => { if (day.open) days.forEach(other => { if (other !== day) other.open = false; }); }));

  const destinationPhotos = {
    'Corinto': 'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1200',
    'Dolomitas': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tre%20cime%20di%20Lavaredo%20dalla%20forcella.jpg?width=1200',
    'Verona': 'https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1200',
    'Milão': 'https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=1200'
  };
  document.querySelectorAll('.destination').forEach(card => { const title=card.querySelector('h3')?.textContent.trim(); const img=card.querySelector('img'); if(title&&img&&destinationPhotos[title]){img.src=destinationPhotos[title];img.alt=title;} });
});