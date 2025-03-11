// function calculator(a, b, operator) {
//     let multiply = (a, b) => a * b;
//     let add = (a, b) => a + b;
//     let subtract = (a, b) => a - b;
//     let divide = (a, b) => a / b;

//     switch (operator) {
//         case 'multiply':
//             console.log(multiply(a, b));
//             break;
//         case 'add':
//             console.log(add(a, b));
//             break;
//         case 'subtract':
//             console.log(subtract(a, b));
//             break;
//         case 'divide':
//             console.log(divide(a, b));
//             break;
//     }
// }

function solve(a, b, operator) {
    let actions = {
        multiply: (a, b) => a * b,
        add: (a, b) => a +b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,

    }

    line = actions[operator]
    console.log(line(a, b))

}