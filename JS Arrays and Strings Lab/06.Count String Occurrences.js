function countOccurrencesAlt(text, word) {
    let words = text.toLowerCase().split(/\b/);
    return words.filter(w => w === word.toLowerCase()).length;
}


function solve(text, word) {
    let words = text.split(/\s+/);
    let count = 0;
    for (let i = 0; i <= words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    return count;

}