const boxes=[...document.querySelectorAll('#checklist input[type="checkbox"]')];
boxes.forEach((box,i)=>{box.checked=localStorage.getItem('europa2026-check-'+i)==='1';box.addEventListener('change',()=>localStorage.setItem('europa2026-check-'+i,box.checked?'1':'0'));});

document.addEventListener('DOMContentLoaded', () => {
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
  }

  const days = [...document.querySelectorAll('details.collapsible-day')];
  days.forEach(day => {
    day.addEventListener('toggle', () => {
      if (day.open) {
        days.forEach(other => {
          if (other !== day) other.open = false;
        });
      }
    });
  });

  // Fotos conferidas por destino para evitar imagens genéricas ou incorretas.
  const destinationPhotos = {
    'Corinto': 'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=1200',
    'Dolomitas': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tre%20cime%20di%20Lavaredo%20dalla%20forcella.jpg?width=1200',
    'Verona': 'https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1200',
    'Milão': 'https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=1200'
  };

  document.querySelectorAll('.destination').forEach(card => {
    const title = card.querySelector('h3')?.textContent.trim();
    const img = card.querySelector('img');
    if (title && img && destinationPhotos[title]) {
      img.src = destinationPhotos[title];
      img.alt = title;
    }
  });
});