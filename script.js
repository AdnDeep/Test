// Abrir y cerrar el menú en el celular
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar el menú al elegir una opción
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Si una foto no carga, se quita y queda el fondo color cacao
document.querySelectorAll('.photo img').forEach(img => {
  if (img.complete && img.naturalWidth === 0) img.remove();
  else img.addEventListener('error', () => img.remove());
});
