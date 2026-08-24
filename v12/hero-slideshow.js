(()=>{
  const slides=[
    ['Lisboa','https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=88'],
    ['Corinto','https://commons.wikimedia.org/wiki/Special:FilePath/The%20Temple%20of%20Apollo%20in%20Ancient%20Corinth%20on%20June%206%2C%202018.jpg?width=2000'],
    ['Atenas','https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=2000&q=88'],
    ['Milos','https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko%20Beach%20on%20the%20island%20of%20Milos%2C%20Greece.jpg?width=2000'],
    ['Dolomitas','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg/1280px-The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg'],
    ['Veneza','https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2000&q=88'],
    ['Verona','https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=2000'],
    ['Lago di Garda','https://commons.wikimedia.org/wiki/Special:FilePath/SIR%20-%20Lake%20Garda%20and%20Sirmione%20peninsula%20seen%20from%20Scaligero%20Castle%2C%20Italy%2C%202014.jpg?width=2000'],
    ['Milão','https://commons.wikimedia.org/wiki/Special:FilePath/DuomoMilano.jpg?width=2000']
  ];
  const start=()=>{
    const hero=document.querySelector('header.hero');
    if(!hero)return;
    let i=0;
    hero.style.transition='background-image .9s ease-in-out';
    hero.style.backgroundSize='cover';
    hero.style.backgroundPosition='center';
    const show=()=>{const [,url]=slides[i];hero.style.backgroundImage=`url("${url}")`;i=(i+1)%slides.length;};
    slides.forEach(([,url])=>{const im=new Image();im.src=url;});
    show();
    if(window.__europaHeroTimer)clearInterval(window.__europaHeroTimer);
    window.__europaHeroTimer=setInterval(show,5500);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();