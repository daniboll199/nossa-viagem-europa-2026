const boxes=[...document.querySelectorAll('#checklist input[type="checkbox"]')];
boxes.forEach((box,i)=>{box.checked=localStorage.getItem('europa2026-check-'+i)==='1';box.addEventListener('change',()=>localStorage.setItem('europa2026-check-'+i,box.checked?'1':'0'));});

document.addEventListener('DOMContentLoaded', () => {
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

    const refreshedArticles = [...timeline.querySelectorAll(':scope > article.day')];
    const day11 = refreshedArticles.find(a => a.querySelector('time')?.textContent.trim() === '11 OUT');
    if (day11) {
      const details = day11.querySelector('details.collapsible-day');
      const summary = details?.querySelector('summary .summary-text');
      const content = details?.querySelector('.day-content');
      if (summary) summary.innerHTML = '<span>DOLOMITAS</span><h3>Carezza · Adolf Munkel · Val di Funes · Ortisei</h3><small>Toque para ver a programação completa</small>';
      if (content) content.innerHTML = `
        <p class="day-intro">Dia cheio, mas muito bem aproveitado: Carezza cedo, o melhor trecho da Adolf Munkel até a Geisler Alm, retorno pela rota mais rápida, cartões-postais de Val di Funes e fim de tarde em Ortisei.</p>
        <div class="schedule">
          <div class="schedule-item flight"><b>05:30 — 🚗 Saída de Treviso</b><p>Saída cedo rumo às Dolomitas.</p><a class="map-btn" href="https://www.google.com/maps/dir/?api=1&origin=Treviso,+Italy&destination=Lago+di+Carezza,+Italy" target="_blank">📍 Rota no Google Maps</a></div>
          <div class="schedule-item hero-stop"><b>08:00–08:40 — 💎 Lago di Carezza</b><p>Mirante principal · volta rápida pela área do lago · fotos com o Latemar. Não faria trilha longa aqui.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Lago+di+Carezza+Karersee" target="_blank">📍 Lago di Carezza</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Karersee%20mit%20Latemar.jpg?width=1200" alt="Lago di Carezza" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>
          <div class="schedule-item"><b>08:40 — 🚗 Saída para Val di Funes / Zans</b><p>Previsão de chegada por volta de 10:30 ao Parkplatz Zans.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Parkplatz+Zans+Villnoss" target="_blank">🅿️ Parkplatz Zans</a></div>
          <div class="schedule-item hero-stop"><b>10:40–14:00 — 🥾 Adolf Munkel + Geisler Alm</b><p><strong>⭐ A rota que eu escolheria:</strong> Zans → trilha #6 → #35 Adolf Munkel → #36 → Gschnagenhardt Alm → Geisler Alm.</p><p><strong>⚡ Volta mais rápida:</strong> Geisler Alm → seguir direto pela <strong>#36 até Zans</strong>.</p><p>🥾 ~9 km · ⛰️ ~430 m · ⏱️ ~3h.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Geisler+Alm+Villnoss" target="_blank">📍 Geisler Alm</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Geislergruppe%20Villnoess.jpg?width=1200" alt="Odle em Val di Funes" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>
          <div class="schedule-item"><b>14:15–14:40 — ⛪ San Giovanni in Ranui</b><p>Parada curta para fotos da igrejinha com as Odle.</p></div>
          <div class="schedule-item hero-stop"><b>14:50–16:00 — 🏔️ Santa Maddalena</b><p>Igreja · caminhada curta até o mirante clássico · fotos do vilarejo.</p></div>
          <div class="schedule-item"><b>16:00 — 🚗 Val di Funes → Ortisei</b><p>Cerca de 1h de deslocamento.</p></div>
          <div class="schedule-item sunset"><b>~17:00–18:30 — 🇮🇹 Ortisei</b><p>Strada Rezia · igreja · centro histórico · lojinhas e cafés.</p></div>
          <div class="schedule-item food"><b>18:30–20:00 — 🍕 Jantar em Ortisei</b><p>Jantar no centro.</p></div>
          <div class="schedule-item flight"><b>20:00 — 🚗 Ortisei → San Sigismondo</b><p>Seguir para a hospedagem.</p></div>
        </div>
        <div class="day-summary"><b>🗓️ Resumidinho</b><p>Carezza → Adolf Munkel → Geisler Alm → San Giovanni → Santa Maddalena → Ortisei → jantar → San Sigismondo.</p></div>`;
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

  // Atualiza a rota do topo e inclui Lago di Garda.
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = 'Lisboa → Corinto → Atenas → Milos → Dolomitas → Veneza → Verona → Lago di Garda → Milão → Lisboa';

  const routeInner = document.querySelector('.route-inner');
  if (routeInner) routeInner.innerHTML = '<span>🇵🇹 Lisboa</span><b>→</b><span>🏛️ Corinto</span><b>→</b><span>🇬🇷 Atenas</span><b>→</b><span>🏝️ Milos</span><b>→</b><span>🏔️ Dolomitas</span><b>→</b><span>🚤 Veneza</span><b>→</b><span>🏟️ Verona</span><b>→</b><span>🌊 Lago di Garda</span><b>→</b><span>⛪ Milão</span><b>→</b><span>🇵🇹 Lisboa</span>';

  const statDest = [...document.querySelectorAll('.stats div')].find(d => d.querySelector('span')?.textContent.trim() === 'destinos');
  if (statDest) statDest.querySelector('strong').textContent = '9';

  // Slideshow automático no topo com imagens dos lugares da viagem.
  const hero = document.querySelector('.hero');
  if (hero && !hero.dataset.slideshowReady) {
    hero.dataset.slideshowReady = '1';
    const slides = [
      ['Lisboa','https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=88'],
      ['Corinto','https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1800'],
      ['Atenas','https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=2200&q=88'],
      ['Milos','https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=2200&q=88'],
      ['Dolomitas','https://commons.wikimedia.org/wiki/Special:FilePath/Tre%20cime%20di%20Lavaredo%20dalla%20forcella.jpg?width=1800'],
      ['Veneza','https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2200&q=88'],
      ['Verona','https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1800'],
      ['Lago di Garda','https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20Garda%20-%20panoramio.jpg?width=1800'],
      ['Milão','https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=1800']
    ];

    const style = document.createElement('style');
    style.textContent = '.hero{transition:background-image 1.2s ease-in-out}.hero-place-label{position:absolute;right:22px;bottom:20px;z-index:3;background:rgba(10,24,20,.55);backdrop-filter:blur(7px);color:#fff;padding:8px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.05em}.hero{isolation:isolate}.hero:after{content:"";position:absolute;inset:0;z-index:0;background:linear-gradient(90deg,rgba(12,29,24,.88),rgba(12,29,24,.28));pointer-events:none}.hero>.nav,.hero>.hero-content{position:relative;z-index:2}@media(max-width:600px){.hero-place-label{right:14px;bottom:14px;font-size:11px}}';
    document.head.appendChild(style);

    const label = document.createElement('div');
    label.className = 'hero-place-label';
    hero.appendChild(label);
    let idx = 0;
    const show = () => {
      const [name,url] = slides[idx];
      hero.style.backgroundImage = `url("${url}")`;
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
      label.textContent = name;
      idx = (idx + 1) % slides.length;
    };
    show();
    setInterval(show, 5500);
  }
});