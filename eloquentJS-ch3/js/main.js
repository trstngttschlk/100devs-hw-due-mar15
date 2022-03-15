// Minimum

// function min(x, y){
//     if (x < y) {
//         return x
//     } else {
//         return y
//     }
// }

// console.log(min(0,10))
// console.log(min(0,-10))

// // Recursion
// function isEven(n){
//     if (n==0){
//         return true
//     } else if (n==1){
//         return false
//     } else if (n > 1) {
//         return isEven(n-2)
//     } else {
//         return false
//     }
// }

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// Bean Counting
function countBs(word){
    let letterCount = 0
    for (let i = word.length; i>0;i--){
        if (word[i-1] === "B"){
            letterCount++
        }
        }
    return letterCount
}

function countChar(word, letter){
    let letterCount = 0
    for (let i = word.length; i>0;i--){
        if (word[i-1] === letter){
            letterCount++
        }
        }
    return letterCount
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"));





