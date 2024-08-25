
// navbar toggle
const toggleBtn = document.getElementById("navbar-toggler");
const navDiv = document.querySelector(".navbar-collapse")

toggleBtn.addEventListener('click', function(){
    navDiv.classList.toggle("show-nav");
    if(toggleBtn.firstElementChild.className == "fa-solid fa-bars"){
        toggleBtn.firstElementChild.className = "fa-solid fa-xmark";
        document.body.style.overflow = "hidden"
    }
    else {
        toggleBtn.firstElementChild.className = "fa-solid fa-bars";
        document.body.style.overflow = "visible"
    }
})

// stopping animation & transition during window resizing
let resizeTimer;
window.addEventListener('resize', function(){
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// navigation in small screen
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
    link.addEventListener('click', function(){
        document.body.style.overflow = "visible";
        navDiv.classList.remove('show-nav');
        toggleBtn.firstElementChild.className = "fa-solid fa-bars";
    });
});

// review slider 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let idCount = 0;
const reviewSlide = document.querySelectorAll('.reviews-item');

showCurrentSlide(idCount);
function showCurrentSlide(id){
    hideAllSlide();
    reviewSlide.forEach(function(item, idx){
        if(id == idx){
            item.classList.add('activeSlide');
        }
    });
}

function hideAllSlide(){
    reviewSlide.forEach(function(item){
        item.classList.remove('activeSlide');
    })
}

prevBtn.addEventListener('click', function(){
    idCount--;
    if(idCount < 0){
        idCount = reviewSlide.length - 1;
    }
    showCurrentSlide(idCount);
});
nextBtn.addEventListener('click', function(){
    idCount++;
    if(idCount == reviewSlide.length){
        idCount = 0;
    }
    showCurrentSlide(idCount);
});