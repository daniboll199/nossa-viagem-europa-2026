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
  const passagens = docCards.find(a => a.querySelector('b')?.textContent.trim() === 'Passagens');
  if (passagens) {
    passagens.href = 'https://drive.google.com/drive/folders/1Qx0XDG5QpduQjeltGaTMfg4SQNPKL38Q?usp=sharing';
    passagens.target = '_blank';
    passagens.rel = 'noopener noreferrer';
  }
  const hospedagens = docCards.find(a => a.querySelector('b')?.textContent.trim() === 'Hospedagens');
  if (hospedagens) {
    hospedagens.href = 'https://drive.google.com/drive/folders/1sPBNoKf1SsritsdovZyo3x2553HUXQYu?usp=sharing';
    hospedagens.target = '_blank';
    hospedagens.rel = 'noopener noreferrer';
  }
  const milos = docCards.find(a => a.querySelector('b')?.textContent.trim() === 'Milos');
  if (milos) {
    milos.querySelector('b').textContent = 'Seguro Viagem';
    milos.querySelector('span').textContent = '🛡️';
    milos.href = 'https://drive.google.com/drive/folders/1tgxWIxFZQjK7bz7FWU1_thggNCwojwMz?usp=sharing';
    milos.target = '_blank';
    milos.rel = 'noopener noreferrer';
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