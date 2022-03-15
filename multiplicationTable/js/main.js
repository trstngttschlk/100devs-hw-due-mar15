document.querySelector('#userSubmit').addEventListener('click', multiply)

function multiply() {
    let userInput = +document.querySelector('#userInput').value;
    while (userInput < 2 || userInput > 9) {
        userInput = prompt('Please enter a number between 2 and 9')
    }
    let multiplyTable = 0;
    for (let i = multiplyTable; i <= multiplyTable + 9; i++) {
        console.log(`${userInput} x ${i} = ${userInput*i}`)
    } 
}