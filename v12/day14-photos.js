(()=>{
  const addPhotos=()=>{
    const day=[...document.querySelectorAll('.timeline > article.day')].find(a=>a.querySelector('time')?.textContent.trim()==='14 OUT');
    if(!day)return;
    const cards=[...day.querySelectorAll('.day4-grid > section')];
    const photo=(match,src,alt)=>{
      const card=cards.find(s=>s.querySelector('b')?.textContent.includes(match));
      if(!card || card.querySelector('img.day14-photo')) return;
      const img=document.createElement('img');
      img.className='day14-photo'; img.src=src; img.alt=alt; img.loading='lazy';
      img.referrerPolicy='no-referrer';
      const link=card.querySelector('.day4-map,.day4-links');
      if(link) card.insertBefore(img,link); else card.appendChild(img);
    };

    photo('Piazza Bra + Arena di Verona','https://commons.wikimedia.org/wiki/Special:FilePath/Arena%20di%20Verona%20esterno.jpg?width=1400','Arena di Verona vista da Piazza Bra');
    photo('Piazza delle Erbe','https://commons.wikimedia.org/wiki/Special:FilePath/Piazza%20delle%20Erbe%20%28Verona%29.jpg?width=1400','Piazza delle Erbe e Torre dei Lamberti em Verona');
    photo('Ponte Pietra','https://commons.wikimedia.org/wiki/Special:FilePath/Ponte%20Pietra%2C%20Verona%2C%20Italy%20-%2052950669240.jpg?width=1400','Ponte Pietra sobre o rio Adige em Verona');
    photo('Castello Scaligero','https://commons.wikimedia.org/wiki/Special:FilePath/Italy%20-%20Sirmione%20-%20Scaligero%20Castle.jpg?width=1400','Vista aérea do Castello Scaligero em Sirmione');
    photo('Grotte di Catullo','https://commons.wikimedia.org/wiki/Special:FilePath/Grotte%20di%20Catullo%20-%20Sirmione.jpg?width=1400','Ruínas romanas das Grotte di Catullo em Sirmione');
    photo('Jamaica Beach','https://commons.wikimedia.org/wiki/Special:FilePath/Sirmione%2C%20Jamaica%20Beach.jpg?width=1400','Vista aérea de Jamaica Beach em Sirmione');
    photo('Pôr do sol no Lago di Garda','https://commons.wikimedia.org/wiki/Special:FilePath/Sirmione%20Strand%20001.JPG?width=1400','Margem do Lago di Garda em Sirmione');

    const hero=day.querySelector('.day14-verona img');
    if(hero){
      hero.src='https://commons.wikimedia.org/wiki/Special:FilePath/Piazza%20Bra%20seen%20from%20the%20arenas%20%28Verona%29.jpg?width=1800';
      hero.alt='Vista de Piazza Bra a partir da Arena de Verona';
    }

    if(!document.getElementById('day14-photo-style')){
      const s=document.createElement('style'); s.id='day14-photo-style';
      s.textContent='.day14-photo{width:100%;height:260px;object-fit:cover;display:block;border-radius:14px;margin:12px 0 4px;box-shadow:0 8px 24px rgba(15,47,39,.10)}@media(max-width:640px){.day14-photo{height:220px}}';
      document.head.appendChild(s);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(addPhotos,900));else setTimeout(addPhotos,900);
})();