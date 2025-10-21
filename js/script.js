// Apex Health - polished JS
document.addEventListener('DOMContentLoaded',()=>{
  // highlight active nav
  const path = location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.Navigation-Bar a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===path) a.classList.add('active');
  });

  // button press
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('mousedown',()=>b.style.transform='scale(.96)');
    b.addEventListener('mouseup',()=>b.style.transform='');
    b.addEventListener('mouseleave',()=>b.style.transform='');
  });

  // forms
  document.querySelectorAll('form').forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      alert('✅ Thank you! Your form was submitted successfully.');
      f.reset();
    });
  });
});
