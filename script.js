// Dark mode toggle + year + simple form storage
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved){ root.className = saved; }
  toggle.addEventListener('click', ()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.className);
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const messages = JSON.parse(localStorage.getItem('messages')||'[]');
    messages.push({ ...data, at: new Date().toISOString() });
    localStorage.setItem('messages', JSON.stringify(messages));
    form.reset();
    alert('Thanks! Your message has been saved locally. Replace with real backend later.');
  });
})();
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
