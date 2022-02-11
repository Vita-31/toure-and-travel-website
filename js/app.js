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