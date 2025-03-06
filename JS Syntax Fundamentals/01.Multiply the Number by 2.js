function solve (num) {
    console.log(num * 2);
}
solve(2);


function findFirstDuplicate (arr) {
    let seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }    
    return null;
}
console.log(findFirstDuplicate([22, 33, 44, 11, 12, 11, 22]))
console.log(findFirstDuplicate([-22, 133, 44, 11, 12, 13, 17]))