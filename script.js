let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
    index = (index + 1) % slides.length; // Move to the next slide
}

setInterval(showSlide, 3000); // Change slide every 3 seconds
