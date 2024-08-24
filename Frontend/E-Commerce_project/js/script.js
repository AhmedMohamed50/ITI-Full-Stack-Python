
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
        document.body.style.overflow = "hidden"
    }
})