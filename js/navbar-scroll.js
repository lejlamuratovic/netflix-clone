document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
          navbar.classList.add('navbar_black');
      } else {
          navbar.classList.remove('navbar_black');
      }
    });

  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });

});
  