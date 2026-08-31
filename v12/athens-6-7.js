(()=>{
  const maps=(q)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const img=(src,alt,cap)=>`<figure class="athens-photo"><img src="${src}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${cap}</figcaption></figure>`;

  const run=()=>{
    const timeline=document.querySelector('.timeline');
    if(!timeline)return;
    const days=[...timeline.querySelectorAll(':scope > article.day')];
    const day06=days.find(a=>a.querySelector('time')?.textContent.trim()==='06 OUT');
    const day07=days.find(a=>a.querySelector('time')?.textContent.trim()==='07 OUT');

    if(day06){
      const marker=day06.querySelector('.marker'); if(marker) marker.textContent='🇬🇷';
      const summary=day06.querySelector('.summary-text');
      const content=day06.querySelector('.day-content');
      if(summary) summary.innerHTML='<span>GRÉCIA · ATENAS</span><h3>Acrópole · Plaka · Ágora · pôr do sol</h3><small>Toque para ver a programação completa</small>';
      if(content) content.innerHTML=`
        <p class="day-intro">Dia principal em Atenas, montado para aproveitar os grandes clássicos sem correria: Acrópole cedo, museu, Anafiotika e Plaka, almoço com descanso, Ágora Antiga, Monastiraki e pôr do sol diante da Acrópole.</p>
        <div class="schedule">
          <div class="schedule-item"><b>07:20–07:45 — 🚇 Chegada à região da Acrópole</b><p>Saia cedo para estar na entrada antes do primeiro horário. Se vier de Pireu/Betel, conte com cerca de 35–50 min de deslocamento, dependendo da conexão.</p></div>
          <div class="schedule-item hero-stop"><b>08:00–10:00 — 🏛️ Acrópole de Atenas</b><p><strong>Prioridades:</strong> Teatro de Dionísio → Odeão de Herodes Ático → Propileus → Templo de Atena Nice → Partenon → Erecteion e Cariátides.</p><p>💰 aprox. €30/pessoa · ⏱️ 2h · chegue no primeiro horário para menos filas e melhor temperatura.</p><a class="map-btn" href="${maps('Acropolis Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/The%20Parthenon%20at%20the%20Acropolis%20of%20Athens.jpg?width=1400','Partenon na Acrópole de Atenas','Acrópole · Partenon')}</div>
          <div class="schedule-item"><b>10:00–10:15 — ☕ Pausa rápida</b><p>Água, café e alguns minutos para descansar na descida pela Dionysiou Areopagitou. Caminhada de 5–10 min até o museu.</p></div>
          <div class="schedule-item hero-stop"><b>10:15–12:00 — 🏺 Museu da Acrópole</b><p>Faça uma visita seletiva: Cariátides originais → esculturas arcaicas → Galeria do Partenon → vista da Acrópole pelo último andar.</p><p>💰 aprox. €20/pessoa · ⏱️ 1h30–1h45.</p><a class="map-btn" href="${maps('Acropolis Museum Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20the%20Acropolis%20Museum%20from%20the%20Acropolis%20in%20Athens.jpg?width=1400','Museu da Acrópole em Atenas','Museu da Acrópole')}</div>
          <div class="schedule-item"><b>12:00–12:20 — 🚶 Caminhada até Plaka</b><p>Vá a pé. O trajeto é curto e já faz parte do passeio pelo centro histórico.</p></div>
          <div class="schedule-item hero-stop"><b>12:20–13:00 — 🏘️ Anafiotika</b><p>Pequeno bairro escondido sob a Acrópole, com vielas estreitas e casas brancas que lembram as ilhas Cíclades. Um dos cantinhos mais charmosos e menos óbvios do dia.</p><p>💰 grátis · ⏱️ 30–40 min.</p><a class="map-btn" href="${maps('Anafiotika Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Anafiotika%2C%20Athens%2C%20Greece.jpg?width=1400','Casas e vielas de Anafiotika em Atenas','Anafiotika · pequena “ilha” em Atenas')}</div>
          <div class="schedule-item food"><b>13:00–14:15 — 🍽️ Almoço em Plaka + descanso</b><p><strong>Sugestões:</strong> Aspro Alogo para comida grega simples ou Taverna Saita para uma refeição tradicional.</p><p>🍴 Experimente souvlaki, gyros, moussaka, saganaki ou prato do dia · 💰 cerca de €12–20/pessoa.</p><p>Este é o principal período de descanso do dia; não vale apressar o almoço.</p><a class="map-btn" href="${maps('Aspro Alogo Athens')}" target="_blank">📍 Aspro Alogo</a> <a class="map-btn" href="${maps('Taverna Saita Athens')}" target="_blank">📍 Taverna Saita</a></div>
          <div class="schedule-item"><b>14:15–14:45 — 🏘️ Plaka sem pressa</b><p>Adrianou → Tripodon → vielas próximas à Lysikratous. Aproveite para passear, fotografar e comprar alguma lembrança.</p>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Plaka%20Athens%20Greece.jpg?width=1400','Rua no bairro de Plaka em Atenas','Plaka · centro histórico')}</div>
          <div class="schedule-item"><b>14:45–15:00 — 🚶 Plaka → Ágora Antiga</b><p>Cerca de 15 min caminhando.</p></div>
          <div class="schedule-item hero-stop"><b>15:00–16:30 — 🏛️ Ágora Antiga</b><p><strong>Prioridade:</strong> Templo de Hefesto, um dos templos gregos mais bem preservados. Depois, Stoa de Átalo e Igreja dos Santos Apóstolos.</p><p>💰 aprox. €20/pessoa · ⏱️ 1h15–1h30.</p><a class="map-btn" href="${maps('Ancient Agora of Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Hephaestus%20from%20ancient%20agora%20Athens.jpg?width=1400','Templo de Hefesto na Ágora Antiga','Ágora Antiga · Templo de Hefesto')}</div>
          <div class="schedule-item"><b>16:30–17:00 — ☕ Descanso na Adrianou</b><p>Café, sorvete ou apenas 20–30 min sentado. Essa pausa ajuda a manter o fim de tarde agradável.</p></div>
          <div class="schedule-item"><b>17:00–17:45 — 🛍️ Monastiraki</b><p>Praça Monastiraki → Flea Market → Rua Adrianou → Biblioteca de Adriano por fora. Depois da Acrópole e da Ágora, não há necessidade de comprar ingresso para cada ruína menor.</p><a class="map-btn" href="${maps('Monastiraki Square Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Monastiraki%20square%20Athens.jpg?width=1400','Praça Monastiraki em Atenas','Monastiraki')}</div>
          <div class="schedule-item"><b>17:45–18:15 — 🚶 Caminhada para Philopappos</b><p>Subida leve, feita sem pressa. Alternativa mais fácil: Areópago.</p></div>
          <div class="schedule-item sunset"><b>18:15–19:10 — 🌅 Pôr do sol com a Acrópole</b><p><strong>Escolha principal:</strong> Philopappos Hill, mais tranquilo e com excelente vista da Acrópole. Alternativa: Areópago, com acesso mais fácil.</p><p>🌇 Pôr do sol por volta das 19h · 💰 grátis.</p><a class="map-btn" href="${maps('Philopappos Hill Athens')}" target="_blank">📍 Philopappos</a> <a class="map-btn" href="${maps('Areopagus Hill Athens')}" target="_blank">📍 Areópago</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis%20from%20Philopappos%20Hill.jpg?width=1400','Vista da Acrópole desde o Monte Philopappos','Philopappos · pôr do sol diante da Acrópole')}</div>
          <div class="schedule-item food"><b>19:15–20:00 — 🍹 Rooftop / descanso</b><p>Pausa para café, sobremesa ou drink com vista. Sugestão: Thissio View ou outro rooftop da região de Thissio/Monastiraki.</p><a class="map-btn" href="${maps('Thissio View Athens')}" target="_blank">📍 Abrir no Maps</a></div>
          <div class="schedule-item food"><b>20:15–21:30 — 🍽️ Jantar</b><p>Maiandros para refeição sentada ou Street Souvlaki para algo simples e econômico. 💰 aproximadamente €10–20/pessoa.</p><a class="map-btn" href="${maps('Maiandros Restaurant Athens')}" target="_blank">📍 Maiandros</a> <a class="map-btn" href="${maps('Street Souvlaki Athens')}" target="_blank">📍 Street Souvlaki</a></div>
        </div>
        <div class="athens-alt"><b>💡 Se bater cansaço</b><p>O primeiro corte seria o Museu da Acrópole. Eu manteria Acrópole, Anafiotika, Ágora e o pôr do sol.</p></div>
        <div class="day-summary"><b>❤️ Resumo</b><p>Acrópole → Museu → Anafiotika → Plaka → almoço → Ágora → descanso → Monastiraki → Philopappos → rooftop → jantar.</p></div>`;
    }

    if(day07){
      const marker=day07.querySelector('.marker'); if(marker) marker.textContent='🇬🇷';
      const summary=day07.querySelector('.summary-text');
      const content=day07.querySelector('.day-content');
      if(summary) summary.innerHTML='<span>GRÉCIA · ATENAS → MILOS</span><h3>Manhã leve em Atenas + voo para Milos</h3><small>Toque para ver a programação completa</small>';
      if(content) content.innerHTML=`
        <p class="day-intro">Uma manhã propositalmente leve antes do voo das 16:45: Atenas moderna, jardins, Estádio Panatenaico e uma última caminhada por Plaka, com margem confortável para voltar à hospedagem e seguir ao aeroporto.</p>
        <div class="schedule">
          <div class="schedule-item food"><b>08:00–08:45 — ☕ Café da manhã</b><p>Comece sem pressa. O dia anterior já terá bastante caminhada.</p></div>
          <div class="schedule-item hero-stop"><b>09:00–09:25 — 🇬🇷 Praça Syntagma</b><p>Parlamento e Túmulo do Soldado Desconhecido. Se coincidir com a troca dos Evzones, aproveite para assistir.</p><p>💰 grátis.</p><a class="map-btn" href="${maps('Syntagma Square Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Syntagma%20Square%20Athens.jpg?width=1400','Praça Syntagma em Atenas','Syntagma · Parlamento grego')}</div>
          <div class="schedule-item"><b>09:25–10:00 — 🌳 Jardim Nacional</b><p>Cerca de 5 min de Syntagma. Caminhada tranquila entre árvores e sombra, perfeita para uma manhã leve.</p><p>💰 grátis.</p><a class="map-btn" href="${maps('National Garden Athens')}" target="_blank">📍 Abrir no Maps</a></div>
          <div class="schedule-item hero-stop"><b>10:00–10:30 — 🏟️ Estádio Panatenaico</b><p>O estádio de mármore ligado aos primeiros Jogos Olímpicos modernos. Para manter a manhã enxuta, a vista externa já vale bastante.</p><p>💰 vista externa grátis.</p><a class="map-btn" href="${maps('Panathenaic Stadium Athens')}" target="_blank">📍 Abrir no Maps</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Panathenaic%20Stadium%20Athens.jpg?width=1400','Estádio Panatenaico em Atenas','Estádio Panatenaico')}</div>
          <div class="schedule-item"><b>10:30–11:00 — 🏛️ Templo de Zeus + Arco de Adriano</b><p>Caminhada de 10–15 min. Veja os dois por fora para economizar tempo; o Arco de Adriano rende uma ótima foto com a Acrópole ao fundo.</p><a class="map-btn" href="${maps('Temple of Olympian Zeus Athens')}" target="_blank">📍 Templo de Zeus</a> <a class="map-btn" href="${maps("Hadrian's Arch Athens")}" target="_blank">📍 Arco de Adriano</a>${img('https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Olympian%20Zeus%20Athens.jpg?width=1400','Templo de Zeus Olímpico em Atenas','Templo de Zeus Olímpico')}</div>
          <div class="schedule-item"><b>11:00–11:40 — 🏘️ Última caminhada por Plaka</b><p>Souvenirs, café grego ou loukoumades. Não coloque outra atração grande aqui.</p><a class="map-btn" href="${maps('Plaka Athens')}" target="_blank">📍 Abrir no Maps</a></div>
          <div class="schedule-item"><b>11:40–12:15 — 🚇 Retorno à hospedagem</b><p>Voltar, pegar as malas e organizar o grupo. <strong>12:15 é o limite ideal para encerrar turismo.</strong></p></div>
          <div class="schedule-item flight"><b>13:00 — ✈️ Saída para o Aeroporto de Atenas</b><p>Voo para Milos às <strong>16:45</strong>. Objetivo: estar no aeroporto por volta de 14:30–14:45.</p><p>🚇 Metrô para o aeroporto: aprox. €9 · 🚌 ônibus expresso: aprox. €5,50.</p><a class="map-btn" href="${maps('Athens International Airport')}" target="_blank">📍 Aeroporto de Atenas</a></div>
        </div>
        <div class="day-summary"><b>❤️ Resumo</b><p>Syntagma → Jardim Nacional → Estádio Panatenaico → Templo de Zeus → Plaka → hospedagem → aeroporto → Milos.</p></div>`;
    }

    if(!document.getElementById('athens-6-7-style')){
      const s=document.createElement('style');s.id='athens-6-7-style';
      s.textContent=`
        .athens-photo{margin:14px 0 2px;border-radius:14px;overflow:hidden;position:relative;background:#e9ece9}.athens-photo img{display:block;width:100%;height:230px;object-fit:cover}.athens-photo figcaption{position:absolute;left:10px;bottom:10px;background:rgba(10,25,21,.78);color:white;padding:7px 10px;border-radius:999px;font-size:11px;font-weight:750;backdrop-filter:blur(5px)}
        .athens-alt{margin-top:18px;padding:16px;border:1px solid rgba(15,47,39,.14);background:rgba(15,47,39,.045);border-radius:14px}.athens-alt p{margin:7px 0 0;line-height:1.55}
        @media(max-width:700px){.athens-photo img{height:190px}.schedule-item .map-btn{margin-top:7px}}
      `;
      document.head.appendChild(s);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1500));else setTimeout(run,1500);
})();