// var newarray = array.slice().reverse();

// Question 1
// Function accept a full name string and convert each letter of
// first world to Capital and the remaining to small (Pascal Case).
//Example : 'the quick brown fox'
//Output : 'The Quick Brown Fox'

// function capitalize(fullName) {
//     var name1 = fullName.split(' ');
//     var name2 = name1.map(function(name1) {
//         return name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
// })
//     return name2.join(" ");
// }

// var name2 = capitalize("the quick brown fox")
// console.log(name2)
// var name2 = capitalize("i am ahmed")
// console.log(name2)


// ***********************************************

// Question 2
// Function that accept a sentence and return the longest word
// within the input
//Example : 'Web Development Tutorial'
//Output : 'Development'

// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = words.reduce(function(longest, current) {
//         return current.length > longest.length ? current : longest;
//         }, words[0]);
//         return longestWord;
// }
// var str = "Web Development Tutorial"
// console.log(findLongestWord(str));

// var str = "ahmed mohamed maree"
// console.log(findLongestWord(str));

// ***********************************************

// Question 3
// Write a JavaScript Function that returns a passed string with
// letters in alphabetical order
//Example : javascript
//Output : aacijprstv

// function alphabetical(str) {
//     var string = str.split('').sort().join('');
//     return string;
// }

// console.log(alphabetical("javascript"))

// Question 4
// Define an array of numbers [2,1,3,2,7,2,8,4,3,6,10,9,12]
var myArr = [2,1,3,2,7,2,8,4,3,6,10,9,12];

// •	• Sort them ascending then descending and print the result on
// console as table.
// var ascSortedNumbers = myArr.sort((a,b) => (a-b)); // sort the numbers in ascending order
// console.table(ascSortedNumbers) // give the result in table form
// console.log(ascSortedNumbers)
// var decSortedNumbers = myArr.sort((a,b) => (b-a));
// console.table(decSortedNumbers)
// console.log(decSortedNumbers)


// •	• Filter numbers larger than 5 (use ES6 arrow function )
// var filteredNumbers = myArr.filter((e) => e > 5);
// console.log(filteredNumbers); // give numbers greater than 5 in the same array

// •	• Display Max and Min Number 
//  		Note: Using Math functions (Math.max and Math.min)
// var maxNumber = Math.max(...myArr);
// console.log(maxNumber)
// var minNumber = Math.min(...myArr);
// var minNumber = Math.min.apply(null, myArr);
// console.log(minNumber)

// •	• Use Array.from function to generate a copy from this array but
// 		elements will be multiplied by 5.
// var mappedArray = myArr.map((e) => e * 5);
// console.log(mappedArray);

// •	• Remove repeated numbers from the array
// 7 ways to remove repeated numbers --> Sets in es6 which create collections of unique values
// var uniqueNumbers = [...new Set(myArr)];
// console.log(myArr);
// console.log(uniqueNumbers);

// •	• Display the array elements from pervious step as string
// 		concatenated with *.
// var str = uniqueNumbers.join('*');
// console.log(str);


// Question 5
// Write a JavaScript function to get the month name from a
// particular date and display the result on alert.
var month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

// Automatic getting of month name
// function getMonthName() {
//     var date = new Date();
//     var monthIndex = date.getMonth();
//     var monthName = month[monthIndex];
//     return monthName;
// }

// console.log(getMonthName());

// Manual getting of month name
function getMonthName2(date) {
    var dateSplit = date.split("-")
    var monthNumber = dateSplit[1];
    var monthIndex = monthNumber - 1;
    var monthName = month[monthIndex];
    return monthName
}

console.log(getMonthName2("2024-7-20"));
console.log(getMonthName2("2024-2-20"));
console.log(getMonthName2("2024-5-20"));