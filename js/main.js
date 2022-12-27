let btnNav = document.querySelector('.btn-nav');
let smNav = document.querySelector('.sm-nav');

btnNav.addEventListener('click',()=>{
    smNav.classList.toggle('open');
    
});


// Swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });