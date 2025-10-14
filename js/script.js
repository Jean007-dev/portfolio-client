// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({behavior:'smooth'});
    });
  });
  
  // Fade-in sections
  const sections=document.querySelectorAll('section');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.1});
  sections.forEach(section=>{section.classList.add('hidden');observer.observe(section);});
  
  // Hero button click effect
  const heroBtn=document.querySelector('.hero .btn');
  heroBtn.addEventListener('click',()=>{heroBtn.style.transform='scale(0.95)';setTimeout(()=>{heroBtn.style.transform='scale(1)';},150);});
  
  // Hero parallaxe
  const heroImage=document.querySelector('.hero-image img');
  window.addEventListener('scroll',()=>{const offset=window.pageYOffset;heroImage.style.transform=`translateY(${offset*0.2}px)`;});
  
  // Swiper projets
  const swiper=new Swiper('.mySwiper',{loop:true,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination',clickable:true}});
  
  // Skills animation
  const skills=document.querySelectorAll('.skill-progress');
  const skillObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.style.width=entry.target.getAttribute('data-progress');}
    });
  },{threshold:0.5});
  skills.forEach(skill=>skillObserver.observe(skill));
  
  // Swiper témoignages
  const swiperTestimonials=new Swiper('.mySwiperTestimonials',{loop:true,autoplay:{delay:5000},pagination:{el:'.swiper-pagination',clickable:true}});
  
  // Formulaire contact simulation
  const form=document.getElementById('contact-form');
  const formMessage=document.getElementById('form-message');
  form.addEventListener('submit',function(e){e.preventDefault();formMessage.style.color="green";formMessage.textContent="Merci ! Votre message a été envoyé.";form.reset();});
  