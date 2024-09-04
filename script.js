// Navbar script

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('-translate-y-full');
  } else {
    // Scrolling up
    navbar.classList.remove('-translate-y-full');
  }
  
  lastScrollTop = scrollTop;
});
