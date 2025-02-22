function circleArea(input) {
    if (typeof input === "number") {
        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2)); 
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

// check the type

// if its number calculate the circle area 

// if it's not print the type of the element

// console.log(circleArea(5));       // "78.54"
// console.log(circleArea(10));      // "314.16"
// console.log(circleArea(5.5));     // "We can not calculate the circle area, because we receive a number."
// console.log(circleArea("hello")); // "We can not calculate the circle area, because we receive a string."
// console.log(circleArea(true));    // "We can not calculate the circle area, because we receive a boolean."
// console.log(circleArea([]));      // "We can not calculate the circle area, because we receive a object."
// console.log(circleArea(null));    // "We can not calculate the circle area, because we receive a object."
