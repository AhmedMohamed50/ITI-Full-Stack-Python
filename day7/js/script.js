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

    if (newWindow) {
        newWindow.onload = function() {
            var myDiv = document.createElement("div");
            var myName = document.createTextNode("my name is Ahmed Mohamed");
            myDiv.appendChild(myName);
            newWindow.document.body.appendChild(myDiv);
            console.log(myDiv); // working correctly
        }
    };
}

// 3- Display the date with time on the document title
// (document.title) which changed every second to show time with
// date.
// Note: use .toLocalString() method of the Date Object.
setInterval(function(){
    document.title = new Date().toLocaleString();
},1000)

