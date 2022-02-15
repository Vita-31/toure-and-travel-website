//header
const header = document.getElementById('header');

if(header) {
    header.addEventListener('click', (e) => {
        const burger = e.target.closest('.burger');
        if(burger) {
            header.classList.toggle('open-menu')
        }
    })
}
//photo parallax
var scenes = document.querySelectorAll('.scene');
scenes.forEach(scene => {
    var parallaxInstance = new Parallax(scene); 
})

//swiper 
// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

