function inputVal(){
    let userInput = +document.querySelector('#userInput').value
    while (userInput <= 50 || userInput >= 100) {
        userInput = prompt('Please enter a number > 50 or < 100')
    }
}

document.querySelector('#userSubmit').addEventListener('click', inputVal)
