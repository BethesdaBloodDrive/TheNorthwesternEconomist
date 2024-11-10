let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 10000); // Auto-slide every 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    setInterval(nextSlide, 5000);
}

// Set event listeners for arrow buttons
document.querySelector('.next').onclick = () => { nextSlide(); resetSlideInterval(); };
document.querySelector('.prev').onclick = () => { prevSlide(); resetSlideInterval(); };

// Initialize by showing the first slide
showSlide(currentSlideIndex);

