function reversePrinting(num, array) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(array[i]);
    }
    return arr.reverse().join(" ");
}

console.log(reversePrinting(3, [10, 20, 30, 40, 50]));
