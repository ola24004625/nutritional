let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("show")); // Hide all slides
  slides[index].classList.add("show"); // Show current slide
  index = (index + 1) % slides.length; // Move to the next slide
}

setInterval(showSlide, 3000); // Change slide every 3 seconds

// Show the first slide initially
showSlide();
