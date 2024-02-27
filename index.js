let slideIndex = 0;
let slides;
let intervalId;
let isSlideshowRunning = false;

function showSlides() {
  slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

function startStopSlideshow() {
  if (!isSlideshowRunning) {
    intervalId = setInterval(showSlides, 2000);
    document.getElementById("startStopBtn").textContent = "Stop Slideshow";
  } else {
    clearInterval(intervalId);
    document.getElementById("startStopBtn").textContent = "Start Slideshow";
  }
  isSlideshowRunning = !isSlideshowRunning;
}

function plusSlides(n) {
  clearInterval(intervalId);
  isSlideshowRunning = false;
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("startStopBtn").addEventListener("click", startStopSlideshow);
document.getElementById("prevBtn").addEventListener("click", () => plusSlides(-1));
document.getElementById("nextBtn").addEventListener("click", () => plusSlides(1));

showSlides();
startStopSlideshow();