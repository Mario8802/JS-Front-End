// function addItem() {
//     const itemsElement = document.getElementById('items');
//     const inputElement = document.getElementById('newItemText');

//     const itemText = inputElement.value;

//     const liElement = document.createElement('li');

//     liElement.textContent = itemText;

//     itemsElement.appendChild(liElement);

//     inputElement.value = '';
// }

function solve() {
    const inputElement = document.getElementById('newItemText');
    const itemListElements = document.getElementById('items');

    // Create new item
    const newItemElement = document.createElement('li');

    // Add text content 
    newItemElement.textContent = inputElement.value;

    //Append new element to dom
    itemListElements.appendChild(newItemElement);

}