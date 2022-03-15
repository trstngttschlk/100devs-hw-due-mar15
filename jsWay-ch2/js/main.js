// Improved Hello
let firstName = prompt('What\'s your first name?')
let lastName = prompt('What\'s your last name?')

console.log(`your full name is ${firstName} ${lastName}`)

//Final Values
let a = 2;                          // a = 2
a -= 1;                             // a = 1
a++;                                // a = 2
let b = 8;                          // b = 8
b += 2;                             // b = 10
const c = a + b * b;                // c = 102
const d = a * b + b;                // d = 30
const e = a * (b + b);              // e = 40
const f = a * b / a;                // f = 10
const g = b / a * a;                // g = 2.5 apparently 10?
console.log(a, b, c, d, e, f, g);   // 2 10 102 30 40 10 2.5

// VAT Calculation
let rawPrice = prompt("Please enter the raw price")
afterVAT = rawPrice * 1.206
console.log(afterVAT.toFixed(2))

// From Celsius to Fahrenheit Degrees
let userCel = prompt("Please enter a temperature in Celsius")
fahrenheit = userCel * 9/5 + 32

console.log(fahrenheit)

// Variable swapping
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
number1 = 3
number2 = 5

console.log(number1); // Should show 3
console.log(number2); // Should show 5