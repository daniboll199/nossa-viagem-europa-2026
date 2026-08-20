const boxes=[...document.querySelectorAll('#checklist input[type="checkbox"]')];
boxes.forEach((box,i)=>{box.checked=localStorage.getItem('europa2026-check-'+i)==='1';box.addEventListener('change',()=>localStorage.setItem('europa2026-check-'+i,box.checked?'1':'0'));});

document.addEventListener('DOMContentLoaded', () => {
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
});