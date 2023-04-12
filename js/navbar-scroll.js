document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('heading');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
          heading.classList.add('heading_black');
      } else {
          heading.classList.remove('heading_black');
      }
    });

  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function() {
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  }

});
  