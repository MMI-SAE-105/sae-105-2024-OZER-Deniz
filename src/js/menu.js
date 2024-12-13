const menuBtn = document.querySelector('.menu-btn');
const overlayMenu = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

body.classList.remove('no-scroll')

menuBtn.addEventListener('click', () => {
    overlayMenu.classList.add('active');
    body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
    body.classList.remove('no-scroll');
});

document.addEventListener('click', (event) => {
    if (!overlayMenu.contains(event.target) && !menuBtn.contains(event.target) && overlayMenu.classList.contains('active')) {
        overlayMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});