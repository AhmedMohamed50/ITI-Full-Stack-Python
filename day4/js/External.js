console.log(num1);
var num1 = 3;
var num2 = 2.9;
var num3 = 0xff;

var firstName = "Ahmed";
var middleName = 'Mohamed';
var lastName = `Abdel Rahim`;

var flag = true;

console.log("This is the External JavaScript file")


firstName = firstName.substring(0,3) + 'A' + firstName.substring(4);
console.log(firstName);

console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(firstName));
console.log(typeof(middleName));
console.log(typeof(middleName));
console.log(typeof(flag));


var result = num1 + num2;
console.log(result);

result = flag + num2;
console.log(result);

result = num1 + firstName; 
console.log(result);

result = num1 * flag; 
console.log(result);

result = num1 / lastName; 
console.log(result);

result = `${firstName} ${middleName} ${lastName}`; 
console.log(result);