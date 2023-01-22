// Solamente si el sitio ha cargado completamente
document.addEventListener("DOMContentLoaded", function(){

  // SlideShow Principal
  var swiper = new Swiper(".slideshow", {
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.slideshow .next',
      prevEl: '.slideshow .prev',
    },
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    speed: 1000,
  });

  var swiper = new Swiper('.swiper-galeria', {
      pagination: '.swiper-pagination',
      slidesPerView: '2',
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
  });

  swiper.on('slideChange', function () {
    $(".slideshow .animate__animated").hide().show();
  });

  // Sticky menu
  window.addEventListener('scroll', function() {
      var stickyTop = document.getElementById('nav').offsetTop;
      if (window.scrollY > stickyTop) {
        document.getElementById('navheader').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navheader').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      }
  });

});
