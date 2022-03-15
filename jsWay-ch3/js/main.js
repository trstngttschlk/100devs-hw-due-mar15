// Following day
// let nextDay = prompt("What day is it?").toLowerCase()

// switch(nextDay){
//     case "monday":
//         console.log("Tuesday");
//         break;
//     case "tuesday":
//         console.log("Wednesday");
//         break;
//     case "wednesday":
//         console.log("Thursday");
//         break;
//     case "thursday":
//         console.log("Friday");
//         break;
//     case "friday":
//         console.log("Saturday");
//         break;
//     case "saturday":
//         console.log("Sunday");
//         break;
//     case "sunday":
//         console.log("Monday");
//         break;
//     default:
//         prompt("please enter a valid day");
// }

// Number comparison
// function numComp(a,b){
//     if (a>b){
//         console.log(`${a} is bigger than ${b}`)
//     } else if (b>a){
//         console.log(`${b} is bigger than ${a}`)
//     } else {
//         console.log(`${a} and ${b} are the same number`)
//     }
// }

// numComp(20,7)
// numComp(4,57)
// numComp(2,2)

// Final Values


// Number of days in a month
// let userMonth = prompt("please pick a month between 1-12")

// switch(userMonth){
//     // Months with 31 days
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8": 
//     case "10":
//     case "12":
//         console.log("that month has 31 days");
//         break;
//     // Months with 30 days  
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log("that month has 30 days");
//         break;
//     // Months with 28 days 
//     case "2":
//         console.log("that month has 28 days");
//         break;
//     default:
//         prompt("please pick a valid month between 1-12");
// }

// Following second
let userHour = Number(prompt("please enter the hour"))
let userMinute = Number(prompt("please enter the minutes"))
let userSecond = Number(prompt("please enter the seconds"))

console.log(`Old Time = ${userHour}h${userMinute}m${userSecond}s`)

function nextSecond(){
    if (userSecond == 59){
        userMinute++;
        userSecond = 00;
        if (userMinute > 59){
            userHour++;
            userMinute = 00;
            if (userHour > 23) {
                userHour = 00;
                userMinute = 00;
                userSecond = 00;
            }
        }
    } else {
        userSecond++
    }
    console.log(`New Time = ${userHour}h${userMinute}m${userSecond}s`)
}

nextSecond()