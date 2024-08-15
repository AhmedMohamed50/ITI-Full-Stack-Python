
// 4- create img slider that changes the pictures every 4 seconds or when user presses button next/prev
var currentIndex = 0;
var images = document.querySelectorAll('.slides img');
var totalImages = images.length;

function showImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = (index + totalImages) % totalImages;
    images[currentIndex].classList.add('active');
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Automatic slide change every 4 seconds
var autoSlide = setInterval(nextImage, 4000);

// Stop the auto slide when the user interacts with the slider
function stopAutoSlide() {
    clearInterval(autoSlide);
}

var prevButton = document.getElementsByClassName("prev")[0];
console.log(prevButton)
prevButton.onclick = function() {
    stopAutoSlide();
    prevImage();
}

var nextButton = document.getElementsByClassName("next")[0];
console.log(nextButton)
nextButton.onclick = function() {
    stopAutoSlide();
    nextImage();
}