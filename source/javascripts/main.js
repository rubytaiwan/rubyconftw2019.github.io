//= require jquery
//= require jquery.easing
//= require vender/bulma-modal.js
//= require vender/in-view.min.js
//= require vender/lazysizes.min.js

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

  // Scrollspy
  var handleView = function handleView(item) {
    var linkEl = document.querySelector("#nav-" + item);
  
    var offsetHeight = 0.8 * window.innerHeight;
    inView.offset({
      bottom: offsetHeight
    });
  
    inView("." + item).on("enter", function () {
      return linkEl.classList.add('is-active');
    }).on("exit", function (el) {
      return linkEl.classList.remove('is-active');
    });
  };

  ['news', 'speakers', 'venue', 'schedule', 'parties', 'sponsors'].forEach(handleView);

  // Scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 800, 'easeInOutQuart');
    return false;
  });

  $('.navbar-menu .navbar-item').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 80)
    }, 800, 'easeInOutQuart');
    event.preventDefault();
  });

  // Toggle More News
  var hidden = $('.news__item').hasClass('is-hidden');

  $('#news-more').click(function(){
    if (hidden){
      $('.news__item.inactive').removeClass('is-hidden');
      $(this).hide();
    }
  });

  // Show Modal when loading url
  if (window.location.hash.length > 0) {
    $(document.documentElement).addClass('is-clipped');
  }
  $(window.location.hash).addClass('is-active');

  // Update URL with Modal
  $('[data-toggle="modal"]').click(function(){
     window.location.hash = $(this).attr('data-target');
  });

  // Tabs for Schedule
  $(function(){
    var _showTab = 0;
    var $tab = $(this); 
    var $defaultLi = $('.tabs li', $tab).eq(_showTab).addClass('is-active');
    
    $("#" + $defaultLi.attr("data-tab")).siblings().hide();
  
    $('.tabs li', $tab).click(function() {

      var $this = $(this),
          _target = $this.attr("data-tab");

      $this.addClass('is-active').siblings('.is-active').removeClass('is-active');

      $("#" + _target).show().siblings().hide();
    });
  });

});