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

          <div class="schedule-item hero-stop"><b>10:40–14:00 — 🥾 Adolf Munkel + Geisler Alm</b><p><strong>⭐ A rota que eu escolheria:</strong> Zans → trilha #6 → #35 Adolf Munkel → #36 → Gschnagenhardt Alm → Geisler Alm. Assim vocês pegam o trecho mais bonito da Adolf Munkel sem transformar o passeio numa trilha longa.</p><p><strong>⚡ Volta mais rápida:</strong> Geisler Alm → seguir direto pela <strong>#36 até Zans</strong>, sem refazer toda a Adolf Munkel.</p><p>🥾 ~9 km no total · ⛰️ ~430 m de desnível · ⏱️ ~3h de caminhada, sem contar uma parada longa.</p><p><strong>~12:15 — 🛖 Geisler Alm:</strong> parada de ~30 min para fotos, almoço/lanche rápido e vista das Odle. <strong>~12:45:</strong> começar a descida pela #36. <strong>~14:00:</strong> carro.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Geisler+Alm+Villnoss" target="_blank">📍 Geisler Alm</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Geislergruppe%20Villnoess.jpg?width=1200" alt="Odle em Val di Funes" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>

          <div class="bible-box"><b>💡 Dica da trilha</b><p>Não faria o circuito completo da Adolf Munkel neste dia. O melhor equilíbrio entre visual e tempo é subir por <strong>#6 + #35</strong>, passar sob as Odle, chegar à <strong>Geisler Alm</strong> e voltar pela <strong>#36</strong>. Vocês veem o trecho “top” e economizam tempo na volta.</p></div>

          <div class="schedule-item"><b>14:15–14:40 — ⛪ San Giovanni in Ranui</b><p>Parada curta para fotos da igrejinha com as Odle. Sem trilha.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Chiesetta+di+San+Giovanni+in+Ranui" target="_blank">📍 San Giovanni in Ranui</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Johann%20in%20Ranui.jpg?width=1200" alt="San Giovanni in Ranui" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>

          <div class="schedule-item hero-stop"><b>14:50–16:00 — 🏔️ Santa Maddalena</b><p>Igreja · caminhada curta até o mirante clássico · fotos do vilarejo com as Odle. Tentaria sair até 16:00.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Santa+Maddalena+Val+di+Funes" target="_blank">📍 Santa Maddalena</a><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Santa+Maddalena+Viewpoint+Villnoss" target="_blank">📸 Mirante clássico</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Magdalena%20in%20Villnoess.jpg?width=1200" alt="Santa Maddalena em Val di Funes" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>

          <div class="schedule-item"><b>16:00 — 🚗 Val di Funes → Ortisei</b><p>Cerca de 1h de deslocamento. Aqui começa a parte tranquila do dia.</p><a class="map-btn" href="https://www.google.com/maps/dir/?api=1&origin=Santa+Maddalena,+Villnoss,+Italy&destination=Ortisei,+Italy" target="_blank">📍 Rota para Ortisei</a></div>

          <div class="schedule-item sunset"><b>~17:00–18:30 — 🇮🇹 Ortisei</b><p>Desacelerar depois da trilha: 🚶 Strada Rezia · ⛪ Igreja de Sant'Udalrico · 🏘️ centro histórico/pedestre · ☕ lojinhas e cafés · 📸 fotos.</p><p>🌅 Pôr do sol por volta de <strong>18:34</strong>.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Strada+Rezia+Ortisei" target="_blank">📍 Centro / Strada Rezia</a><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Chiesa+di+Sant+Udalrico+Ortisei" target="_blank">⛪ Sant'Udalrico</a><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ortisei%20Val%20Gardena.jpg?width=1200" alt="Ortisei em Val Gardena" style="width:100%;border-radius:14px;margin-top:10px;max-height:360px;object-fit:cover" loading="lazy"></div>

          <div class="schedule-item food"><b>18:30–20:00 — 🍕 Jantar em Ortisei</b><p><strong>⭐ 1ª opção: Mauriz Keller</strong> — bem no centro, na Strada Rezia. Restaurante/pizzaria com especialidades sul-tirolesas e pizza.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Mauriz+Keller+Ortisei" target="_blank">📍 Mauriz Keller</a><p><strong>Alternativa:</strong> Turonda — pizza, bistrot e drinks, também central.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Turonda+Ortisei" target="_blank">📍 Turonda</a><p><strong>💰 Econômica:</strong> Pizzeria Tennis — um pouco fora do miolo, mas prática para pizza.</p><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=Pizzeria+Tennis+Ortisei" target="_blank">📍 Pizzeria Tennis</a></div>

          <div class="schedule-item flight"><b>20:00 — 🚗 Ortisei → San Sigismondo</b><p>Seguir para a hospedagem, check-in e descanso.</p><a class="map-btn" href="https://www.google.com/maps/dir/?api=1&origin=Ortisei,+Italy&destination=San+Sigismondo,+South+Tyrol,+Italy" target="_blank">📍 Rota no Google Maps</a></div>
        </div>

        <div class="day-summary"><b>🗓️ Resumidinho</b><p><strong>05:30</strong> 🚗 Treviso · <strong>08:00–08:40</strong> 💎 Carezza · <strong>08:40–10:30</strong> 🚗 Val di Funes · <strong>10:40–14:00</strong> 🥾 Adolf Munkel + Geisler Alm · <strong>14:15–14:40</strong> ⛪ San Giovanni · <strong>14:50–16:00</strong> 🏔️ Santa Maddalena · <strong>16:00–17:00</strong> 🚗 Ortisei · <strong>17:00–18:30</strong> 🏘️ passeio · <strong>18:34</strong> 🌅 pôr do sol · <strong>18:30–20:00</strong> 🍕 jantar · <strong>20:00</strong> 🚗 San Sigismondo.</p></div>

        <div class="bible-box"><b>⚠️ Plano B para outubro</b><p>Se houver neve, gelo ou condição ruim na trilha, manter Carezza, San Giovanni, Santa Maddalena e Ortisei e cortar apenas a Adolf Munkel.</p></div>`;
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