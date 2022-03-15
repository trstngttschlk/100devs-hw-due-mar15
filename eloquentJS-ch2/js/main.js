// Looping a Triangle
// let string ="";

// for (i=1;i<8;i++){
//     string+="#"
//     console.log(string)
// }

// FizzBuzz

// for (i=1;i<=100;i++){
//     if (i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     } else if (i%5==0) {
//         console.log("Buzz")
//     } else if (i%3==0) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }
// }

// Chess Board
let board = "";
let size = 8;

for (y=1;y<=size;y++){
    for (x=1;x<=size;x++){
        if ((x+y)%2==0){
            board += " ";
        } else {
            board += "#"
        }
    }
    board+="\n"
}

console.log(board)