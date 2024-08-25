
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


// Check if the user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');
const userFirstname = localStorage.getItem('userFirstname');

const loginButton = document.getElementById('login-button');
// const orderButtons = [document.getElementById('order-button'), document.getElementById('header-order-button')];
const orderButtons = document.getElementsByClassName('order-button');
console.log(orderButtons)
// Convert the HTMLCollection to an array
const orderButtonsArray = Array.from(orderButtons);

    if (isLoggedIn) {
        // Change the login button to a logout button with the user's name
        loginButton.innerHTML = `<i class="fa-solid fa-circle-user"></i> Logout (${userFirstname})`;

        // Logout functionality
        loginButton.addEventListener('click', () => {
            // Clear the user session (remove items from localStorage)
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userFirstname');

            // Redirect to the home page
            window.location.href = "index.html"; 
        });

        orderButtonsArray.forEach(button => {
            button.addEventListener('click', () => {
            window.location.href = "cart.html"; // Redirect to cart page if not logged in
            });
        });
    } else {
        // If the user is not logged in, redirect to the signup page when "Order Now" is clicked
        orderButtonsArray.forEach(button => {
            button.addEventListener('click', () => {
            window.location.href = "signup.html"; // Redirect to signup page if not logged in
            });
        });

        // Redirect to the login page when the login button is clicked
        loginButton.addEventListener('click', () => {
            window.location.href = "login.html"; // Redirect to login page
        });
}

// // //////////////////////////////////////////////////////
// const cartPageURL = "cart.html"; // Replace with your actual cart page URL

// document.querySelectorAll('.add-btn').forEach(button => {
//     button.addEventListener('click', (event) => {
//         let productElement = event.target.parentElement;

//         let product = {
//             id: productElement.dataset.id,
//             name: productElement.dataset.name,
//             price: productElement.dataset.price,
//             image: productElement.dataset.image,
//             quantity: 1
//         };

//         addToCart(product);
//         window.location.href = "cart.html"; // Redirect to cart page
//     });
// });

// const addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let productIndex = cart.findIndex(item => item.id === product.id);

//     if (productIndex === -1) {
//         cart.push(product);
//     } else {
//         cart[productIndex].quantity += 1;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
// };
