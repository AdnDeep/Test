// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Aparición de elementos al hacer scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Contadores animados en la sección de origen
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1200;
    const tick = now => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => { el.textContent = '0'; countObserver.observe(el); });

// Barra de compra fija: aparece tras pasar el hero y se oculta en la sección de compra
const stickyBuy = document.getElementById('stickyBuy');
const hero = document.querySelector('.hero');
const buySection = document.getElementById('comprar');
let pastHero = false;
let atBuy = false;
const updateSticky = () => stickyBuy.classList.toggle('show', pastHero && !atBuy);

new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting; updateSticky(); }).observe(hero);
new IntersectionObserver(([e]) => { atBuy = e.isIntersecting; updateSticky(); }, { threshold: 0.2 }).observe(buySection);

// Carrito de ejemplo
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
let items = 0;
let toastTimer;

document.querySelectorAll('.add').forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault();
  items++;
  cartCount.textContent = items;
  cartCount.hidden = false;
  toast.textContent = `${btn.dataset.name} añadido al carrito`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}));
