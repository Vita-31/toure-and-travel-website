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

//slider 
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const slides = document.querySelectorAll('.slider__item');
let index = 0;

function activeSlide(activeSlideIdx) {
    console.log(activeSlideIdx)
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[activeSlideIdx].classList.add('active')
}

function nextSlide() {
    if(index === slides.length - 1) {
        index = 0
        activeSlide(index)
    } else {
        index++
        activeSlide(index)
    }
}

function prevSlide() {
    if(index === 0) {
        index = slides.length - 1;
        activeSlide(index)
    } else {
        index--
        activeSlide(index)
    }
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)