//= require jquery
//= require jquery.easing

document.addEventListener('DOMContentLoaded', function() {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( function(el) {
      el.addEventListener('click', function() {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Shrinking Navbar
  if(!$('body').hasClass('no-scroll')){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#navbar").removeClass("is-shrink");
      } else {
        $("#navbar").addClass("is-shrink");
      }
    }
  }
});