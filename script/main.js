let scro = document.getElementById("scro")
window.onscroll = function(){
    if (window.scrollY >= 300){
        scro.style.display="flex"
    }else{
        scro.style.display="none"

    }
};
scro.onclick = function(){
    window.scroll({
        top:0,
        left :0,
        behavior:"smooth"

    })
};


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

      // Default parameters
  slidesPerView: 1,
  spaceBetween: 5,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
  });

ScrollReveal().reveal('.man1',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
ScrollReveal().reveal('.circle',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
ScrollReveal().reveal('.Text_1',{
    delay : 0,
    origin : 'left',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
ScrollReveal().reveal('header .container .sec1 .part1 .cont',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
ScrollReveal().reveal('header .container .sec1 .part2 .cont',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});

ScrollReveal().reveal('header .container .sec2',{
    delay : 0,
    origin : 'bottom',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
ScrollReveal().reveal('.Text_3',{
    delay : 0,
    origin : 'right',
    distance : '60px',
    opacity : 0,
    duration : 3000,
    reset: true,
});
// ScrollReveal().reveal('nav',{
//     delay : 0,
//     origin : 'top',
//     distance : '60px',
//     opacity : 0,
//     duration : 3000,
//     reset: true,
// });

$(document).ready(function(){
  $(".ham_nav").click(function () {
    $(".links").toggleClass("open")
  })
});
