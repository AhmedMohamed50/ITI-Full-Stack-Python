// 2- Using document object method on the lecture’s HTML page
// a- Find all images in page by two ways (document default
// collection and document methods).
var defaultImages = document.images;
console.log(defaultImages);
var images = document.getElementsByTagName("img");
console.log(images);
var image = document.getElementsByName("img");
console.log(image);


// b- Find all options for City drop down list.
var options = document.getElementsByTagName("option");
console.log("options of city drop down are", options);

var options = document.querySelectorAll("option");
console.log("options of city drop down are", options);

var options = document.children[0].children[1].querySelector("select").children;
console.log("options of city drop down are", options);

// c- Find all rows(tds) for second table in page.
var secondTable = document.getElementsByTagName("table")[1]
console.log(secondTable)
var tableRows = document.getElementsByTagName("table")[1].getElementsByTagName("tr");
console.log(tableRows)

// d- Find all elements that contain class name fontBlue and Bgrey.
var fontBlueClass = document.getElementsByClassName("fontBlue");
console.log("fontBlue classes are", fontBlueClass);
var BgreyClass = document.getElementsByClassName("Bgrey");
console.log("Bgrey classes are", BgreyClass);
