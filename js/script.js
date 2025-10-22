document.addEventListener('DOMContentLoaded', ()=>{
  // NAV active link
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === window.location.pathname.split('/').pop() || 'index.html');
  });

  // Theme toggle
  const root=document.documentElement;
  const btn=document.getElementById('theme-toggle');
  if(localStorage.getItem('apex-theme')==='dark') root.classList.add('dark');
  btn.addEventListener('click',()=>{
    root.classList.toggle('dark');
    localStorage.setItem('apex-theme', root.classList.contains('dark')?'dark':'light');
    btn.querySelector('i').className=root.classList.contains('dark')?'fa-regular fa-sun':'fa-regular fa-moon';
  });

  // Progress bar
  const bar=document.getElementById('progress-bar');
  window.addEventListener('scroll',()=>{ bar.style.width=((window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100)+'%'; });

  // Stats counter
  document.querySelectorAll('.stat-number').forEach(el=>{
    new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !el.dataset.animated){
          let target=parseInt(el.dataset.target.replace(/\D/g,'')),start=0;
          const step=()=>{start+=Math.ceil(target/90); if(start<target){el.textContent=start; requestAnimationFrame(step);} else el.textContent=el.dataset.target;}
          step();
          el.dataset.animated='1';
        }
      });
    },{threshold:0.6}).observe(el);
  });

  // Testimonials
  const track=document.getElementById('testimonial-track');
  const slides=Array.from(track.children);
  const prevBtn=document.querySelector('.carousel-btn.prev');
  const nextBtn=document.querySelector('.carousel-btn.next');
  const dotsContainer=document.getElementById('testimonial-dots');
  let currentIndex=0;

  slides.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.classList.add('testimonial-dot');
    if(i===0) dot.classList.add('active');
    dot.addEventListener('click',()=>{currentIndex=i; updateSlide();});
    dotsContainer.appendChild(dot);
  });
  const dots=Array.from(dotsContainer.children);

  function updateSlide(){
    const width=track.parentElement.getBoundingClientRect().width;
    track.style.transform=`translateX(-${width*currentIndex}px)`;
    dots.forEach(d=>d.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  nextBtn.addEventListener('click',()=>{currentIndex=(currentIndex+1)%slides.length; updateSlide();});
  prevBtn.addEventListener('click',()=>{currentIndex=(currentIndex-1+slides.length)%slides.length; updateSlide();});
  window.addEventListener('resize', updateSlide);
  setInterval(()=>{currentIndex=(currentIndex+1)%slides.length; updateSlide();},6000);

  // Back to top
  const back=document.getElementById('back-to-top');
  window.addEventListener('scroll',()=>{ back.style.display=window.scrollY>300?'flex':'none'; });
  back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
});
