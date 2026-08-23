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

    const day04 = [...timeline.querySelectorAll(':scope > article.day')].find(a => a.querySelector('time')?.textContent.trim() === '04 OUT');
    if (day04) {
      const details = day04.querySelector('details.collapsible-day');
      const summaryText = details?.querySelector('summary .summary-text');
      const content = details?.querySelector('.day-content');
      if (summaryText) summaryText.innerHTML = '<span>PORTUGAL · LISBOA</span><h3>Belém antes do voo</h3><small>Pastéis · Jerónimos · Tejo · Torre de Belém</small>';
      if (content) content.innerHTML = `
        <div class="day4-hero">
          <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=88" alt="Lisboa e o Tejo" loading="lazy">
          <div class="day4-hero-copy"><span>04 OUT · LISBOA</span><h3>Um dia leve por Belém</h3><p>Clássicos de Lisboa sem correria, com retorno a Loures antes do voo para Atenas.</p></div>
        </div>
        <div class="day4-grid">
          <section><b>🌤️ Manhã</b><p><strong>08:30</strong> Loures → Belém<br><strong>09:15</strong> Pastéis de Belém<br><strong>10:00</strong> Mosteiro dos Jerónimos</p><div class="day4-links"><a href="https://maps.app.goo.gl/MrrfxBd3vt2nMQbP9" target="_blank" rel="noopener noreferrer">Pastéis</a><a href="https://maps.app.goo.gl/PPtF7pVJ6VGMYMra6" target="_blank" rel="noopener noreferrer">Jerónimos</a></div></section>
          <section><b>🌊 Tejo</b><p><strong>11:15</strong> Praça do Império<br><strong>12:00</strong> Padrão dos Descobrimentos<br><strong>12:30</strong> caminhada até a Torre</p><div class="day4-links"><a href="https://maps.app.goo.gl/q1ven7t8cXvbeZFx9" target="_blank" rel="noopener noreferrer">Padrão</a><a href="https://maps.app.goo.gl/42vwfdriCvA31zaZ6" target="_blank" rel="noopener noreferrer">Torre</a></div></section>
          <section class="day4-food"><b>🍽️ 13:30 · Almoço</b><p><strong>O Prado</strong> como primeira opção. Alternativa: Cais de Belém.</p><small>🍴 Bacalhau à Brás · polvo à lagareiro · bacalhau à lagareiro</small><div class="day4-links"><a href="https://maps.app.goo.gl/qjNNmn5J5gtXj6Wq7" target="_blank" rel="noopener noreferrer">O Prado</a><a href="https://maps.app.goo.gl/qoYARxgj7AjC4Y1k8" target="_blank" rel="noopener noreferrer">Cais de Belém</a></div></section>
          <section><b>☕ Tarde</b><p><strong>15:00</strong> passeio sem pressa<br><strong>16:00</strong> último pastel de nata<br><strong>16:30–17:00</strong> retorno a Loures</p><a class="day4-map" href="https://maps.app.goo.gl/J6kvxFEnUDyoNfmu5" target="_blank" rel="noopener noreferrer">📍 Manteigaria</a></section>
          <section class="day4-flight"><b>✈️ Noite</b><p><strong>18:30–19:00</strong> chegada ao aeroporto<br><strong>21:30</strong> voo para Atenas</p></section>
        </div>`;

      if (!document.getElementById('day4-style')) {
        const day4Style = document.createElement('style');
        day4Style.id = 'day4-style';
        day4Style.textContent = `
          .day4-hero{position:relative;overflow:hidden;border-radius:18px;margin:2px 0 16px;min-height:250px;background:#173c35}.day4-hero img{width:100%;height:250px;object-fit:cover;display:block;opacity:.86}.day4-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,38,31,.84),rgba(12,38,31,.14))}.day4-hero-copy{position:absolute;left:22px;right:22px;bottom:20px;color:#fff;z-index:2;max-width:520px}.day4-hero-copy span{font-size:.72rem;letter-spacing:.13em;font-weight:800;color:#f0d9aa}.day4-hero-copy h3{font-size:1.55rem;margin:4px 0 5px}.day4-hero-copy p{margin:0;color:rgba(255,255,255,.88)}.day4-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.day4-grid section{background:#fff;border:1px solid #e6e7e3;border-radius:15px;padding:15px}.day4-grid section b{color:#173c35}.day4-grid section p{margin:7px 0 0;line-height:1.55}.day4-grid section small{display:block;margin-top:7px;color:#6b756f}.day4-food{background:#fffaf0!important}.day4-flight{background:#eef5f2!important;grid-column:1/-1}.day4-links{display:flex;gap:7px;flex-wrap:wrap;margin-top:11px}.day4-links a,.day4-map{display:inline-flex;text-decoration:none;background:#edf3ef;color:#173c35;border-radius:999px;padding:7px 10px;font-size:.78rem;font-weight:800}.day4-map{margin-top:11px}.day4-grid a:hover{filter:brightness(.96)}
          @media(max-width:700px){.day4-hero,.day4-hero img{min-height:210px;height:210px}.day4-hero-copy{left:16px;right:16px;bottom:15px}.day4-hero-copy h3{font-size:1.3rem}.day4-hero-copy p{font-size:.9rem}.day4-grid{grid-template-columns:1fr}.day4-flight{grid-column:auto}.day4-grid section{padding:13px}}
        `;
        document.head.appendChild(day4Style);
      }
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
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = 'Lisboa → Corinto → Atenas → Milos → Dolomitas → Veneza → Verona → Lago di Garda → Milão → Lisboa';
  const routeInner = document.querySelector('.route-inner');
  if (routeInner) routeInner.innerHTML = '<span>🇵🇹 Lisboa</span><b>→</b><span>🏛️ Corinto</span><b>→</b><span>🇬🇷 Atenas</span><b>→</b><span>🏝️ Milos</span><b>→</b><span>🏔️ Dolomitas</span><b>→</b><span>🚤 Veneza</span><b>→</b><span>🏟️ Verona</span><b>→</b><span>🌊 Lago di Garda</span><b>→</b><span>⛪ Milão</span><b>→</b><span>🇵🇹 Lisboa</span>';
  const statDest = [...document.querySelectorAll('.stats div')].find(d => d.querySelector('span')?.textContent.trim() === 'destinos');
  if (statDest) statDest.querySelector('strong').textContent = '9';
  const docCards = [...document.querySelectorAll('#documentos .docs-grid a')];
  const setDocLink = (name, url) => {
    const card = docCards.find(a => a.querySelector('b')?.textContent.trim() === name);
    if (card) { card.href=url; card.target='_blank'; card.rel='noopener noreferrer'; }
    return card;
  };
  setDocLink('Passagens','https://drive.google.com/drive/folders/1Qx0XDG5QpduQjeltGaTMfg4SQNPKL38Q?usp=sharing');
  setDocLink('Hospedagens','https://drive.google.com/drive/folders/1sPBNoKf1SsritsdovZyo3x2553HUXQYu?usp=sharing');
  setDocLink('Carros','https://drive.google.com/drive/folders/14ceY2W3-kr7TkfOksSo5o85VlNy7nYfa?usp=sharing');
  const seguro = docCards.find(a => a.querySelector('b')?.textContent.trim() === 'Seguro');
  if (seguro) {
    seguro.querySelector('b').textContent = 'Contatos';
    seguro.querySelector('span').textContent = '👥';
    seguro.href = 'https://drive.google.com/drive/folders/12loBrZ8s_teONPNVljtm2lE1xxCHverK?usp=sharing';
    seguro.target = '_blank'; seguro.rel = 'noopener noreferrer';
  }
  const milos = docCards.find(a => a.querySelector('b')?.textContent.trim() === 'Milos');
  if (milos) {
    milos.querySelector('b').textContent = 'Seguro Viagem';
    milos.querySelector('span').textContent = '🛡️';
    milos.href = 'https://drive.google.com/drive/folders/1tgxWIxFZQjK7bz7FWU1_thggNCwojwMz?usp=sharing';
    milos.target = '_blank'; milos.rel = 'noopener noreferrer';
  }
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
    const label = document.createElement('div'); label.className='hero-place-label'; hero.appendChild(label);
    let idx=0; const show=()=>{const [name,url]=slides[idx];hero.style.backgroundImage=`url("${url}")`;hero.style.backgroundSize='cover';hero.style.backgroundPosition='center';label.textContent=name;idx=(idx+1)%slides.length;};
    show(); setInterval(show,5500);
  }
});