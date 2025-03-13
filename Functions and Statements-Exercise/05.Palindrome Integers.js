// function isPalindromeChecker(array) {
//     for (let num of array) {
//         let numAsString = num.toString();
//         let isPalindrome = true;

//         for (let i = 0; i < numAsString.length / 2; i++) {
//             if (numAsString[i] != numAsString[numAsString.length - i - 1]) {
//                 isPalindrome = false;
//                 break;
//             }
//         }

//         console.log(isPalindrome);
//     }

// }


function mirrorNums(arr) {
    for (num of arr) {
        if (String(num) === String(num).split('').reverse().join('')) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}