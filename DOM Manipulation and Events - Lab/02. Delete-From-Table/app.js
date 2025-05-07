// function deleteByEmail() {
//     const customerTableElement = document.getElementById('customers');
//     const inputElement = document.querySelector('input[type=text][name="email"]');
//     const resultElement = document.getElementById('result');

//     const searchEmail = inputElement.value;

//     const tdElements = customerTableElement.querySelectorAll('tbody td:last-child');

//     const searchElement = Array.from(tdElements).find(td => td.textContent === searchEmail);

//     if (searchElement) {
//         searchElement.parentElement.remove();
//         resultElement.textContent = 'Deleted.';
//     } else {
//         resultElement.textContent = 'Not found.';
//     }
// }   

function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const trElements = document.querySelectorAll('table#customers tbody tr');


    //Search for tr element
    const resultTrElement = Array
        .from(trElements)
        .find(trElement => trElement.children[1].textContent.includes(inputEmailElement.value))
    if (resultTrElement) {
        //Delete table row
        resultTrElement.remove();

        //SHow deleted text
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    //Clear input
    inputEmailElement.value = '';

}