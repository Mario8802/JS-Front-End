function addItem() {
    // Get element references
    const itemsElement = document.getElementById('items');
    const newItemTextElement = document.getElementById('newItemText');
    
    // Create new element with textContent of the input field
    const liElement = document.createElement('li');
    liElement.textContent = newItemTextElement.value;

    // Create delete button
    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    
    // deleteButton.setAttribute('href', '#');
    deleteButton.href = '#';
    
    // Attach event to delete button 
    deleteButton.addEventListener('click', (ev) => {
        ev.currentTarget.parentElement.remove();
    })

    // Add button to liElement
    liElement.append(deleteButton);

    // Attach liElement to Dom
    itemsElement.appendChild(liElement);

    // Clear input field
    newItemTextElement.value = '';

    

}