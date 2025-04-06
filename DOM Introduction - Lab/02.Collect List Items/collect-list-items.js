// function extractText() {
//     const ulElement = document.getElementById('items');
//     const resultElement = document.getElementById('result');

//     const textResult = ulElement
//         .textContent
//         .split('\n')
//         .map(row => row.trim())
//         .join('\n')
//         .trim();

//     resultElement.textContent = textResult;
// }

function extractText() {
    const ulElement = document.getElementById('items');
    const resultElement = document.getElementById('result');
    const textResult = ulElement.innerText
    

    resultElement.textContent = textResult;
}


let newNames = users.map(name => name[0].toUpperCase() + name.slice(1));