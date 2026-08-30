(()=>{
 const data={
 '06 OUT':[
  ['Acrópole','https://commons.wikimedia.org/wiki/Special:FilePath/The%20Parthenon%20in%20Athens.jpg?width=1200','Acrópole · Partenon'],
  ['Museu','https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis%20Museum%20Athens.jpg?width=1200','Museu da Acrópole'],
  ['Ágora','https://commons.wikimedia.org/wiki/Special:FilePath/Ancient%20Agora%20of%20Athens.jpg?width=1200','Ágora Antiga'],
  ['Areópago','https://commons.wikimedia.org/wiki/Special:FilePath/Areopagus%20from%20the%20Acropolis.jpg?width=1200','Areópago']
 ],
 '07 OUT':[['Plaka','https://commons.wikimedia.org/wiki/Special:FilePath/Plaka%20Milos.jpg?width=1200','Plaka · Milos'],['Kastro','https://commons.wikimedia.org/wiki/Special:FilePath/Plaka%20Milos.jpg?width=1200','Plaka e Kastro']],
 '08 OUT':[['Sarakiniko','https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko%20Beach%20on%20the%20island%20of%20Milos%2C%20Greece.jpg?width=1200','Sarakiniko'],['Klima','https://commons.wikimedia.org/wiki/Special:FilePath/Klima%20Milos.jpg?width=1200','Klima']],
 '09 OUT':[['Kleftiko','https://commons.wikimedia.org/wiki/Special:FilePath/Kleftiko%20Milos.jpg?width=1200','Kleftiko'],['Sykia','https://commons.wikimedia.org/wiki/Special:FilePath/Sykia%20Milos.jpg?width=1200','Sykia']],
 '11 OUT':[['Carezza','https://commons.wikimedia.org/wiki/Special:FilePath/Karersee.jpg?width=1200','Lago di Carezza'],['Geisler Alm','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg/1280px-The_Odle_group_in_the_Funes_valley_%28Dolomites%29.jpg','Odle · Geisler Alm'],['San Giovanni','https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Johann%20in%20Ranui.jpg?width=1200','San Giovanni in Ranui'],['Ortisei','https://commons.wikimedia.org/wiki/Special:FilePath/Ortisei.jpg?width=1200','Ortisei']],
 '12 OUT':[['Braies','https://commons.wikimedia.org/wiki/Special:FilePath/Pragser%20Wildsee.jpg?width=1200','Lago di Braies'],['Tre Cime','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tre_cime_di_Lavaredo_dalla_forcella.jpg/1280px-Tre_cime_di_Lavaredo_dalla_forcella.jpg','Tre Cime di Lavaredo'],['Misurina','https://commons.wikimedia.org/wiki/Special:FilePath/Lago%20di%20Misurina.jpg?width=1200','Lago di Misurina'],['Cortina','https://commons.wikimedia.org/wiki/Special:FilePath/Cortina%20d%27Ampezzo.jpg?width=1200','Cortina d’Ampezzo']],
 '13 OUT':[['Rialto','https://commons.wikimedia.org/wiki/Special:FilePath/Rialto%20Bridge%2C%20Venice%2C%20Italy.jpg?width=1200','Ponte di Rialto'],['San Marco','https://commons.wikimedia.org/wiki/Special:FilePath/Piazza%20San%20Marco%20Venice.jpg?width=1200','Piazza San Marco'],['Suspiros','https://commons.wikimedia.org/wiki/Special:FilePath/Bridge%20of%20Sighs%20Venice.jpg?width=1200','Ponte dos Suspiros'],['Dorsoduro','https://commons.wikimedia.org/wiki/Special:FilePath/Dorsoduro%20Venice.jpg?width=1200','Dorsoduro']],
 '14 OUT':[['Arena','https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20-%20Piazza%20Bra%20-%20Arena.jpg?width=1200','Arena di Verona'],['Giulietta','https://commons.wikimedia.org/wiki/Special:FilePath/Juliet%27s%20balcony%2C%20Verona.jpg?width=1200','Casa di Giulietta'],['Ponte Pietra','https://commons.wikimedia.org/wiki/Special:FilePath/Ponte%20Pietra%20Verona.jpg?width=1200','Ponte Pietra'],['Castello Scaligero','https://commons.wikimedia.org/wiki/Special:FilePath/Sirmione%20Castle.jpg?width=1200','Castello Scaligero · Sirmione'],['Jamaica','https://commons.wikimedia.org/wiki/Special:FilePath/Jamaica%20Beach%20Sirmione.jpg?width=1200','Jamaica Beach']],
 '15 OUT':[['Ciclopista','https://commons.wikimedia.org/wiki/Special:FilePath/Ciclopista%20del%20Garda.jpg?width=1200','Ciclopista del Garda'],['Limone','https://commons.wikimedia.org/wiki/Special:FilePath/Limone%20sul%20Garda.jpg?width=1200','Limone sul Garda'],['Riva','https://commons.wikimedia.org/wiki/Special:FilePath/Riva%20del%20Garda.jpg?width=1200','Riva del Garda'],['Malcesine','https://commons.wikimedia.org/wiki/Special:FilePath/Malcesine%20Garda.jpg?width=1200','Malcesine']],
 '16 OUT':[['Duomo','https://commons.wikimedia.org/wiki/Special:FilePath/Milan%20Cathedral%20from%20Piazza%20del%20Duomo.jpg?width=1200','Duomo di Milano'],['Galleria','https://commons.wikimedia.org/wiki/Special:FilePath/Galleria%20Vittorio%20Emanuele%20II%20Milan.jpg?width=1200','Galleria Vittorio Emanuele II'],['Castello Sforzesco','https://commons.wikimedia.org/wiki/Special:FilePath/Castello%20Sforzesco%20Milan.jpg?width=1200','Castello Sforzesco'],['Navigli','https://commons.wikimedia.org/wiki/Special:FilePath/Naviglio%20Grande%20Milano.jpg?width=1200','Navigli']],
 '17 OUT':[['Salò','https://commons.wikimedia.org/wiki/Special:FilePath/Salo%20Lake%20Garda.jpg?width=1200','Salò · Lago di Garda'],['Lungolago','https://commons.wikimedia.org/wiki/Special:FilePath/Salo%20Lake%20Garda.jpg?width=1200','Lungolago di Salò']]
 };
 const run=()=>{
  const timeline=document.querySelector('.timeline');if(!timeline)return;
  Object.entries(data).forEach(([date,photos])=>{
   const day=[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===date);if(!day)return;
   const grid=day.querySelector('.day4-grid')||day.querySelector('.day-content');if(!grid)return;
   [...grid.querySelectorAll('section')].forEach(sec=>{
    if(sec.querySelector('.place-photo'))return;
    const txt=sec.textContent||'';const p=photos.find(x=>txt.includes(x[0]));if(!p)return;
    const fig=document.createElement('figure');fig.className='place-photo';fig.innerHTML=`<img src="${p[1]}" alt="${p[2]}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${p[2]}</figcaption>`;sec.insertBefore(fig,sec.firstChild);
   });
  });
  if(!document.getElementById('place-photo-style')){const s=document.createElement('style');s.id='place-photo-style';s.textContent='.place-photo{margin:-1px -1px 14px;border-radius:14px 14px 10px 10px;overflow:hidden;position:relative;background:#eee}.place-photo img{width:100%;height:210px;display:block;object-fit:cover}.place-photo figcaption{position:absolute;left:12px;bottom:10px;background:rgba(15,29,24,.78);color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:700;backdrop-filter:blur(5px)}@media(max-width:520px){.place-photo img{height:180px}}';document.head.appendChild(s);}
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,1300));else setTimeout(run,1300);
})();