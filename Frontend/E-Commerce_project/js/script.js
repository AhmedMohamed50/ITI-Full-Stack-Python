
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
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
})