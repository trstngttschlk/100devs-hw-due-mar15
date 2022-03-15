// Improved Hello
// Say hello to the user
let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
  alert(sayHello(firstName,lastName))

// Number Squaring
// Square the given number x
function square1(x){
    return x**2
}

  
//   // Square the given number x
  const square2 = x => x**2
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25

  for (let i = 0; i <= 10; i++){
      console.log(square2(i))
  }

// Minimum of two numbers
function min(x,y) {
    if (x <= y){
        return x
    } else {
        return y
    }
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// Calculator
function calculate (x,y,z){
    if (y === "+"){
        return x+z
    } else if (y === "-"){
        return x-z
    } else if (y === "*"){
        return x*z
    } else if (y === "/"){
        if (z === 0) {
            return "Infinity"
        } else {
            return x/z
        }
    }
}
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of circle
let radius = prompt('please give a radius')

function circumference(radius){
    return (2*Math.PI)*radius
}
function circleArea(radius){
    return Math.PI * (radius**2)
}

console.log(circumference(radius))
console.log(circleArea(radius))