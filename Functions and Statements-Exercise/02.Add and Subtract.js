
function getData(num1, num2, num3) {

    function sum(a, b) {
        return a + b;
    }

    function subtract(total, num3) {
        return total - num3;
    }

    const totalSum = sum(num1, num2);
    const finalSUm = subtract(totalSum, num3);
    
    return finalSUm;
}


function getData(num1, num2, num3) {

    function sum(a, b) {
        return a + b;
    }

    function subtract(total, num3) {
        return total - num3;
    }

    return subtract(sum(num1, num2), num3); 
}