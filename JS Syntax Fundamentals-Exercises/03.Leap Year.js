// function leapYear(year) {
//     if (year % 4 ==0 && year % 100 != 0 || year % 400 == 0){
//         return "yes"
//     } 

//     return "no"
    
// }


// function printingNumbers(start, end) {
//     let numbers = ''
//     let sumNums = 0
//     for (let i = start; i <= end; i++) {
//         numbers += i + ' '
//         sumNums += i
//     }
//     console.log(numbers)
//     console.log(`Sum: ${sumNums}`)
// }

// printingNumbers(5, 10) 


function solve(first, second , third) {
    return `${third} ${second} ${first}`
    
}

console.log(solve('A', 'B', 'C')) // C B A