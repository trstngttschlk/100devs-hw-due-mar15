document.querySelector('#userSubmit').addEventListener('click',carouselTurns)
let turns = document.querySelector('#userInput').value;
let spins = 1;
function carouselTurns(){
    while (spins <= turns) {
        if (spins === 1) {
            console.log(`weee going around the carousel 1 time`)
            spins++
        } else {
            console.log(`weee going around the carousel ${spins} times`)
            spins++
        }   
    }
}