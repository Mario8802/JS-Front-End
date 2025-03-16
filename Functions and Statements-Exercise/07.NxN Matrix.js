// function solve(num) {
//     for (let i = 0; i < num; i++) {
//         let row = '';
//         for (let j = 0; j < num; j++) {
//             row += num + ' ';
//         }
//         console.log(row.trim());
//     }
// }


function solve(num) {
    let row = (num + '').repeat(num).trim();
    for (let i = 0; i < num; i++) {
        console.log(row)
    } 
}

solve(3);