const carousels = document.querySelectorAll('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const slideCount = slides.length;

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slideCount;
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

window.addEventListener('resize', function () {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});