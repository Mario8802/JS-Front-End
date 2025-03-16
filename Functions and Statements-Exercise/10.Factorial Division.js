function solve(a, b) {
    let result = 1;

    if (a > b) {
        for (let i = a; i > b; i--) {
            result *= i;
        }
    } else {
        for (let i = b; i > a; i--) {
            result /= i;
        }
    }
    console.log(result.toFixed(2));

}