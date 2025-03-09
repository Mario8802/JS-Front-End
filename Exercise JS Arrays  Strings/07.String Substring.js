function findWord(word, text) {
    if (text.toLowerCase().includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}


function findWord(word, text) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');  
    if (regex.test(text)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
