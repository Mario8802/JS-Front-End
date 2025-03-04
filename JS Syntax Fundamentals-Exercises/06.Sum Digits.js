function sumDigits(value) {
    let sum = 0;
    let string_value = value.toString();

    for (let char of string_value) {
        
        sum += parseInt(char)
           
    }

    console.log(sum);
}


sumDigits(232321)

