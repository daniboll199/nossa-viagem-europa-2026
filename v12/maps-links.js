document.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{const timeline=document.querySelector('.timeline');if(!timeline)return;const day=n=>[...timeline.querySelectorAll(':scope > article.day')].find(a=>a.querySelector('time')?.textContent.trim()===n);const add=(d,needle,label,url)=>{const root=day(d)?.querySelector('.day-content');if(!root)return;const sec=[...root.querySelectorAll('section')].find(s=>s.textContent.includes(needle));if(!sec||[...sec.querySelectorAll('a')].some(a=>a.textContent.includes(label)))return;const a=document.createElement('a');a.className='day4-map';a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='📍 '+label;sec.appendChild(a);};
// 04 OUT — Lisboa
add('04 OUT','Manhã','Pastéis de Belém','https://www.google.com/maps/search/?api=1&query=Pasteis+de+Belem+Lisboa');
add('04 OUT','Manhã','Mosteiro dos Jerónimos','https://www.google.com/maps/search/?api=1&query=Mosteiro+dos+Jeronimos+Lisboa');
add('04 OUT','Tejo','Padrão dos Descobrimentos','https://www.google.com/maps/search/?api=1&query=Padrao+dos+Descobrimentos+Lisboa');
add('04 OUT','Tejo','Torre de Belém','https://www.google.com/maps/search/?api=1&query=Torre+de+Belem+Lisboa');
add('04 OUT','Almoço','O Prado','https://www.google.com/maps/search/?api=1&query=O+Prado+Belem+Lisboa');
// 05 OUT — Corinto
add('05 OUT','Kinetta Beach','Kinetta Beach','https://www.google.com/maps/search/?api=1&query=Kinetta+Beach+Greece');
add('05 OUT','Canal de Corinto','Canal de Corinto','https://www.google.com/maps/search/?api=1&query=Corinth+Canal+Greece');
add('05 OUT','Antiga Corinto','Antiga Corinto','https://www.google.com/maps/search/?api=1&query=Archaeological+Site+of+Ancient+Corinth+Greece');
add('05 OUT','Acrocorinto','Acrocorinto','https://www.google.com/maps/search/?api=1&query=Acrocorinth+Greece');
add('05 OUT','Marinos Restaurant','Marinos Restaurant','https://www.google.com/maps/search/?api=1&query=Marinos+Restaurant+Ancient+Corinth+Greece');
add('05 OUT','Micenas','Micenas','https://www.google.com/maps/search/?api=1&query=Archaeological+Site+of+Mycenae+Greece');
add('05 OUT','Tarde · Atenas','Monastiraki','https://www.google.com/maps/search/?api=1&query=Monastiraki+Square+Athens');
// 06 OUT — Atenas
add('06 OUT','Manhã · Acrópole','Acrópole','https://www.google.com/maps/search/?api=1&query=Acropolis+of+Athens+Greece');
add('06 OUT','Museu','Museu da Acrópole','https://www.google.com/maps/search/?api=1&query=Acropolis+Museum+Athens');
add('06 OUT','Taverna Saita','Taverna Saita','https://www.google.com/maps/search/?api=1&query=Taverna+Saita+Athens');
add('06 OUT','Tarde · Ágora','Ágora Antiga','https://www.google.com/maps/search/?api=1&query=Ancient+Agora+of+Athens');
add('06 OUT','Tarde · Ágora','Areópago','https://www.google.com/maps/search/?api=1&query=Areopagus+Hill+Athens');
add('06 OUT','Monastiraki','Monastiraki','https://www.google.com/maps/search/?api=1&query=Monastiraki+Square+Athens');
add('06 OUT','Couleur Locale','Couleur Locale','https://www.google.com/maps/search/?api=1&query=Couleur+Locale+Athens');
// 11 OUT — Dolomitas
add('11 OUT','Lago di Carezza','Lago di Carezza','https://www.google.com/maps/search/?api=1&query=Lago+di+Carezza+Italy');
add('11 OUT','Parkplatz Zans','Parkplatz Zans','https://www.google.com/maps/search/?api=1&query=Parkplatz+Zans+Villnoss+Italy');
add('11 OUT','Geisler Alm','Geisler Alm','https://www.google.com/maps/search/?api=1&query=Geisler+Alm+Villnoss+Italy');
add('11 OUT','San Giovanni in Ranui','San Giovanni in Ranui','https://www.google.com/maps/search/?api=1&query=San+Giovanni+in+Ranui+Italy');
add('11 OUT','Santa Maddalena','Santa Maddalena','https://www.google.com/maps/search/?api=1&query=Santa+Maddalena+Val+di+Funes+Italy');
add('11 OUT','Ortisei','Ortisei','https://www.google.com/maps/search/?api=1&query=Ortisei+Italy');
},100);});