// Get Elements
let currentIndex = 0;
const images = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let autoSlide = setInterval(nextImage, 3000); // Auto Slide Every 3 Sec

// Show Image Function
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

// Next Image Function
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Previous Image Function
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Manual Dot Navigation
function currentSlide(index) {
    currentIndex = index;
    showImage(currentIndex);
}

// Event Listeners
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Pause Auto Slide on Hover
document.querySelector(".slider-container").addEventListener("mouseover", () => {
    clearInterval(autoSlide);
});
document.querySelector(".slider-container").addEventListener("mouseout", () => {
    autoSlide = setInterval(nextImage, 3000);
});

// Keyboard Navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
});

// Show First Image Initially
showImage(currentIndex);
