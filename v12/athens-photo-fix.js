(()=>{
  const apply=()=>{
    const fixes=[
      {alt:'Casas e vielas de Anafiotika em Atenas',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Anafiotika%20Athens%20Acropolis.jpg?width=1400'},
      {alt:'Rua no bairro de Plaka em Atenas',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Plaka.jpg?width=1400'}
    ];

    fixes.forEach(f=>{
      document.querySelectorAll(`img[alt="${f.alt}"]`).forEach(img=>{
        img.src=f.src;
        img.referrerPolicy='no-referrer';
      });
    });

    document.querySelectorAll('.athens-photo img').forEach(img=>{
      if(img.dataset.fallbackReady)return;
      img.dataset.fallbackReady='1';
      img.addEventListener('error',()=>{
        if(img.dataset.fallbackUsed)return;
        img.dataset.fallbackUsed='1';
        img.src='https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1400&q=85';
      });
    });
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(apply,1300));
  else setTimeout(apply,1300);
  setTimeout(apply,2500);
})();
