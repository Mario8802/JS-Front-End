function solve(start, end) {
    let sumNums = 0;
    let numbers = [];

    for (let i = start; i <= end; i++) {
        sumNums += i;
        numbers.push(i); 
    }

    console.log(numbers.join(" "));
    console.log(`Sum: ${sumNums}`);


}