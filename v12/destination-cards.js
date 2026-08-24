(()=>{
const run=()=>{
 const grid=document.querySelector('#destinos .destination-grid'); if(!grid)return;
 const data={
  'Lisboa':{tip:'🥐 Começo perfeito: pastel de Belém, caminhada pelo Tejo e os grandes ícones de Belém.'},
  'Atenas':{tip:'📖 Aqui Atos 17 ganha vida: Acrópole, Ágora e a leitura no Areópago.'},
  'Corinto':{img:'https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Apollo%2C%20built%20ca.%20540%20BC%2C%20Corinth%2C%20Greece%20%2814109129322%29.jpg?width=1200',tip:'📖 Um dos momentos mais especiais: caminhar pela Corinto de Atos 18 e parar diante do Bema.'},
  'Milos':{tip:'⛵ Dia de mar: enseadas, águas transparentes e paisagens vulcânicas que só aparecem de barco.'},
  'Dolomitas':{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg/1280px-The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg',tip:'🥾 Prepare a câmera: Carezza, as Odle e a trilha até Geisler Alm devem render algumas das melhores paisagens da viagem.'},
  'Veneza':{tip:'🚤 A ideia é viver Veneza devagar: canais, pontes, vielas, cicchetti e aquele prazer de se perder um pouco.'},
  'Verona':{img:'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=88',tip:'🏟️ Uma pausa elegante entre praças e ruas históricas, com a Arena como grande cartão-postal.'},
  'Milão':{img:'https://images.unsplash.com/photo-1520440229-6469a149ac59?auto=format&fit=crop&w=1200&q=88',tip:'⛪ Fechamento em grande estilo: chegar à Piazza del Duomo e ver a catedral de perto.'}
 };
 [...grid.querySelectorAll('.destination')].forEach(card=>{
   const h=card.querySelector('h3'); if(!h)return; const d=data[h.textContent.trim()]; if(!d)return;
   const img=card.querySelector('img'); if(d.img&&img){img.src=d.img;img.referrerPolicy='no-referrer';img.alt=h.textContent.trim();}
   let p=card.querySelector('.destination-preview'); if(!p){p=document.createElement('p');p.className='destination-preview';h.insertAdjacentElement('afterend',p);} p.textContent=d.tip;
 });
 if(!document.getElementById('destination-preview-style')){const s=document.createElement('style');s.id='destination-preview-style';s.textContent='.destination-preview{margin:8px 0 2px;color:#66716c;font-size:12.5px;line-height:1.45}.destination div{padding-bottom:17px}.destination img{background:#e8e4dc}@media(max-width:520px){.destination-preview{font-size:13px}}';document.head.appendChild(s);}
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();