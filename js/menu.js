document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  // Submenu no mobile
  const projetosMenuItem = document.querySelector('nav ul li:nth-child(2) > a');
  const submenu = document.querySelector('nav ul li:nth-child(2) ul.submenu');

  if (projetosMenuItem && submenu) {
    projetosMenuItem.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Evita navegação para projetos.html no clique
        submenu.classList.toggle('active');
      }
    });
  }

  // Fecha menu e submenu quando redimensiona para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
      if (submenu) submenu.classList.remove('active');
    }
  });
});
