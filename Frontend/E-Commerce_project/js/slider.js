document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const itemsWrapper = slider.querySelector('.slides');
        const items = slider.querySelectorAll('.products-item');
        const totalItems = items.length;
        let currentIndex = 0;

        function showImage(index) {
            // Calculate the new position based on the current index
            const offset = -index * 100; // Moves the slider left by 100% for each index
            itemsWrapper.style.transform = `translateX(${offset}%)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalItems;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showImage(currentIndex);
        }

        // Automatic slide change every 4 seconds
        let autoSlide = setInterval(nextImage, 4000);

        // Stop the auto slide when the user interacts with the slider
        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        // Handle previous button click
        const prevButton = slider.querySelector('.prev');
        prevButton.addEventListener('click', function() {
            stopAutoSlide();
            prevImage();
        });

        // Handle next button click
        const nextButton = slider.querySelector('.next');
        nextButton.addEventListener('click', function() {
            stopAutoSlide();
            nextImage();
        });

        // Initialize slider
        showImage(currentIndex);
    });
});
