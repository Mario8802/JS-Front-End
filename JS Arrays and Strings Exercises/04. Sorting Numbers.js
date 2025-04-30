function solve(arr) {
    let sorted = [...arr].sort((a, b) => a - b); 
    let result = [];

    while (sorted.length > 0) {
        result.push(sorted.shift()); // най-малко
        if (sorted.length > 0) {
            result.push(sorted.pop()); // най-голямо
        }
    }

    return result;
}

