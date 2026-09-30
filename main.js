// Nav turns solid once the hero scrolls away
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal, .construction').forEach((el) => io.observe(el));

// Rotating prompt placeholder
const input = document.querySelector('#prompt-input');
const prompts = [
  'Welcome to viral, an AI corporation.',
  'Crie um agente de IA para meu atendimento…',
  'Automatize meus relatórios semanais…',
  'Transforme meus dados em decisões…',
];
let i = 0;
setInterval(() => {
  if (document.activeElement === input || input.value) return;
  i = (i + 1) % prompts.length;
  input.placeholder = prompts[i];
}, 3200);

document.querySelector('#year').textContent = new Date().getFullYear();
