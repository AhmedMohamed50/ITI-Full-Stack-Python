// function fetchData(isRejected) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             if(isRejected) {
//                 reject('Rejected');
//             }
//             else {
//                 let date = {name1: "ahmed", name2: "mohamed"};
//                 resolve(date);
//             }
//     },3000)
//     })
// }

// fetchData(false)
// .then(data => console.log(data))
// .catch(err => console.error(err))


// 1.Change the text of a button with the ID "myButton" to "Clicked!" when it is clicked.
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myButton").innerHTML = "Clicked!";
})


// 2.Display an alert with the message "Button clicked!" when a button with the id "alertButton" is clicked. Add classname to this button ”myclass”.
document.getElementById("alertButton").addEventListener("click", function(){
    alert("Button clicked!");
    this.classList.add("myclass");
    // this.className += " myclass";
    console.log(this);
})



// 3.Change the background color of a div with the ID "colorDiv" to blue when the mouse enters the div.
// Change it back to white when the mouse leaves the div
document.getElementById("colorDiv").addEventListener("mouseenter", function(){
    this.style.backgroundColor = "blue";
    console.log(this);
});
document.getElementById("colorDiv").addEventListener("mouseleave", function(){
    this.style.backgroundColor = "white";
    console.log(this);
});




// 4.Log the key pressed to the console when a key is pressed inside an input field with the ID "inputField". – hint (use keydown event)
document.getElementById("inputField").addEventListener("keydown", function(){
    console.log("key pressed")
});



// 5.Display the current value of an input field with the ID "inputField" in a div with the ID "displayDiv" when the input field's value changes. – hint (use input event)
document.getElementById("inputField").addEventListener("input", function(){
    displayDiv.innerHTML = this.value;
    console.log(this.value);
});

// Another Solution using onchange function



// 6.Prevent the default action of a link with the ID "myLink" when it is clicked, and display an alert instead.
document.getElementById("myLink").addEventListener("click", function(event){
    event.preventDefault();
    alert("Link clicked!");
});

// 7.Display the coordinates of the mouse pointer in a div with the ID "mouseDiv" when the mouse moves inside the div. – hint (use mousemove event)
document.getElementById("mouseDiv").addEventListener("mousemove", function(e){
    mouseDiv.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`
    console.log(e.clientX, e.clientY);
})


// 8.Toggle the visibility of a div with the ID "toggleDiv" when a button with the ID "toggleButton" is clicked.
document.getElementById("toggleButton").addEventListener("click", function() {
    toggleDiv.style.display = toggleDiv.style.display == "none" ? "block" : "none";
}
)



// 9.Increment a counter displayed in a span with the ID "counter" each time a button with the ID "incrementButton" is clicked.
document.getElementById("incrementButton").addEventListener("click", function(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    console.log(counter)
})