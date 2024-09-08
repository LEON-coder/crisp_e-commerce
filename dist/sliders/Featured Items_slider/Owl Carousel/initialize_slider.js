
$(document).ready(function(){
  $(".slider-one").owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  $(".slider-two").owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
  $(".slider-three").owlCarousel({
    items: 7,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smooth: true
  });
});
