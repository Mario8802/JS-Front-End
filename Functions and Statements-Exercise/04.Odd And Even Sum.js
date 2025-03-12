function oddAndEvenSum(number) {
    sumEven= 0;
    sumOdd = 0;

    const digits = number.toString();

    for (let i = 0; i < digits.length; i++) {

        const digit = Number(digits[i]);
        if (digit % 2 == 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }

    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}