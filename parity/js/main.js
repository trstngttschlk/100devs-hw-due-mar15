document.querySelector('#userSubmit').addEventListener('click', parity)

let userValue = +document.querySelector('#userInput').value

function parity(){
    for (let i = userValue; i <= userValue + 9; i++) {
        if (i % 2 === 0){
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}