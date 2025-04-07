function colorize() {
    const tableElement = document.querySelector('table tr');
    const tableRowElements = tableElement.children;

    for (let i = 0; i < tableRowElements.length; i+=2) {
        tableRowElements[i].style.backgroundColor = 'teal';
    }
}

function colorize() {
    const tableElement = document.querySelector('table tbody');
    const tableRowElements = tableElement.children;

    for (let i = 0; i < tableRowElements.length; i+=2) {
        tableRowElements[i].style.backgroundColor = 'yellow';
    }
}

function colorize() {
    const rows = document.querySelectorAll('table tr');

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}


function colorize() {
    const rowsToBeColored = document.querySelerctorAll('h1');

    for (let i = 0; i < rowsToBeColored.length; i++) {
        rowsToBeColored[i].style.backgroundColor = 'teal';
    }
}