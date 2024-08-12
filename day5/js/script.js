

// functions

// 1. function statement 

// function add (number1, number2) {
//     return number1 + number2;
// }

// var result = add(5,3);
// console.log(result)

// var result = add(5);
// console.log(result) // NaN

// var result = add();  // NaN
// console.log(result);

// function createGreeting(greetingPrefix) {
//     return function(name) {
//         console.log(greetingPrefix + ', ' + name);
//     };
// }

// const sayHello = createGreeting('Hello');
// const sayGoodbye = createGreeting('Goodbye');

// sayHello('Ahmed'); // Outputs: Hello, Alice
// sayHello('Mohamed'); // Outputs: Hello, Alice
// sayGoodbye('AbdelRahim'); // Outputs: Goodbye, Bob


// Question 1 using function statement
var printArray = []

// printVariables(2, 5, 7);
// let localVar = 90;
// function printVariables (value1, value2, value3 = 10) {
//     console.log(localVar);
//     var localVar = 3;
//     testingVar = 5;
//     return printArray = [value1, value2, value3];
// };

// Q1.g
// printVariables(2,5,7);

// Q1.h
// console.log(localVar);


// // Q1.f
// console.log(testingVar);
// console.log(localVar);

// // Q1.a
// console.log(printArray[0])
// console.log(printArray[1])
// console.log(printArray[2])


// // Q1.bc
// console.log(printVariables(2, 5, 7))

// // Q1.d
// console.log(printVariables(3,5))

// // Q1.e
// console.log(printVariables(2,5,8,9,10))



// Question 2 using function expression

// let localVar = 90

// let printVar = function(value1, value2, value3 = 53) {
//     console.log(localVar);
//     var localVar = 3;
//     testingVar = 5;
//     return printArray = [value1, value2, value3];
// }

// // Q1.g
// printVar(2,5,7);

// Q1.h
// console.log(localVar);


// Q2.f
// console.log(localVar);
// console.log(testingVar);

// // Q2.a
// console.log(printArray[0])
// console.log(printArray[1])
// console.log(printArray[2])

// // Q2.c
// console.log(printVar(5,8,11))

// // Q2.d
// console.log(printVar(3,5))

// // Q2.e
// console.log(printVar(5,8,9,10,13))




// Question 3 using arrow function
// arrowPrint(4,9,16);

// let localVar = 90;

// let arrowPrint = (value1, value2, value3 = 22)=> {
//     console.log(localVar)
//     localVar = 3;
//     testingVar = 5;
//     return printArray = [value1, value2, value3];
// }

// arrowPrint(4,9,16);

// // Q3.f
// console.log(testingVar);
// console.log(localVar);

// Q3.a
// console.log(printArray[0])
// console.log(printArray[1])
// console.log(printArray[2])

// // Q3.c
// console.log(arrowPrint(4,9,16))

// // Q3.d
// console.log(arrowPrint(4,9))

// // Q3.e
// console.log(arrowPrint(5,8,9,10,13))



// Question 4
function add (number1, number2 = 5) {
    if(isNaN(number1)) {
        console.log("number 1 should be a number")
        return ;
    }
    else if (isNaN(number2)) {
        console.log("number 2 should be a number")
        return ;
    }else {
        return number1 + number2;
    }
    
}

console.log("the result of 2 + 4 = " + add(2,4))

// Q4.1
console.log("add 2 to the default 5 = " + add(2))

// Q4.2
add("ahmed", 5)

add(10, "mohamed")


// Question 5
var userName = prompt("Enter your name");

if (userName === "") {
    do {
        userName = prompt("Name cannot be empty. Please enter your name:");
    } while (userName === "");
}

console.log("Welcome", userName);