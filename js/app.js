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

function setFunc(index) {
    activeSlide(index)
    checkBtns(index)
}

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
        setFunc(index)
    } else {
        index++
        setFunc(index)
    }
}

function prevSlide() {
    if(index === 0) {
        index = slides.length - 1;
        setFunc(index)
    } else {
        index--
        setFunc(index)
    }
}

function checkBtns(index) {
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === slides.length - 1
}

document.addEventListener('load', checkBtns)
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)


//show select list
const formSelects = document.getElementById('form-select');
if(formSelects) {
    formSelects.addEventListener('click', (e) => {
        const selectBlock  = e.target.closest('.select');
        const selectBtn = e.target.closest('.select-box__btn');
        const selectItem = e.target.closest('.select-list__item');
        const selectInput = selectBlock.querySelector('.select-box__input');
       
        if(selectBtn) {
            selectBlock.classList.toggle('show-list');
        }
        
        if(selectItem) {
            const selectItemText = selectItem.textContent;
            selectInput.placeholder = selectItemText
            selectBlock.classList.remove('show-list');
        }
    }) 
}