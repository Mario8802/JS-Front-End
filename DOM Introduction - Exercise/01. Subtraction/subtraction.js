function subtract() {
    // console.log("Subtraction function called");
    
    // Get the values from the input fields

    let firstNumberid = document.getElementById("firstNumber").value;
    let secondNumberid = document.getElementById("secondNumber").value;

    // Convert the values to numbers

    let result = Number(firstNumberid) - Number(secondNumberid);
    document.getElementById("result").textContent = result;
    
    return result;


}