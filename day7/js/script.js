// 1- create a web page that open existing small window and scroll it’s
// content to the end .
// var newWindow;
// function openNew(){
//     newWindow = window.open("../day7/small-window.html", "text win", "width=300, height=300");
//     console.log(newWindow.closed);
    
// }


// Then from console try the following:
// a- check if the small window still opened, close it.
function closeNew() {
    if(newWindow.closed == false) {
        newWindow.close();
        console.log("window closed");
    }
    else {
        console.log("window is already closed");
    }
}

// b- Try to write your name on the small window document using
// document.write (what is the problem).
// var newWindow;
// function openNew(){
//     newWindow = window.open("../day7/small-window.html", "text win", "width=300, height=300");
//     console.log(newWindow.closed);
//     if(newWindow) {
//         newWindow.document.write("my name is ahmed mohamed")
//     }
//     else {
//         console.log("window not opened")
//     }
    
// }

// c- Now don’t use document.write(Forbidden) instead use
// document.createElement to add your name inside a div and
// add that div to the small window’s body.
var newWindow;
function openNew(){
    newWindow = window.open("../day7/small-window.html", "text win", "width=300, height=300");
    console.log(newWindow.closed);
    if(newWindow) {
        myWindow.onload = function() {
            var myDiv = document.createElement("div");
            var myName = document.createTextNode("my name is Ahmed Mohamed");
            myDiv.appendChild(myName);
            console.log(myDiv); // working correctly
            newWindow.document.body.appendChild(myDiv);
        };
    }
}


// 3- Display the date with time on the document title
// (document.title) which changed every second to show time with
// date.
// Note: use .toLocalString() method of the Date Object.
setInterval(function(){
    document.title = new Date().toLocaleString();
},1000)


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