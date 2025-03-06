function checkDigits(num) {
    let numStr = num.toString();
    let sum = 0;
    let allSame = true;

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
        if (i > 0 && numStr[i] !== numStr[i - 1]) {
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(sum);
}
