document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //TODO

    // Add event listener to submit button 
    // Prevent default behaviour
    // Read input values
    // Create <option> element and set it's value and content
    // Append option to menu

    document.querySelector('[type="submit"]').addEventListener('click', addOption);

    function addOption(e) {
        e.preventDefault();

        let text = document.getElementById('newItemText').value;
        let value = document.getElementById('newItemValue').value;

        let option = document.createElement('option');
        option.textContent = text;
        option.value = value;

        document.getElementById('menu').appendChild(option);

        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}