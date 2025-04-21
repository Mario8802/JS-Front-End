function solve(arr) {
    sortedList = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    let result = sortedList.map((name, index) => `${index + 1}.${name}`);
} 

console.log(solve(["John", "Bob", "Christina", "Ema"]))
console.log(solve(["John", "Bob", "Christina", "Ema"])) 