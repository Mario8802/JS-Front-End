function countOccurrencesAlt(text, word) {
    let words = text.toLowerCase().split(/\b/);
    return words.filter(w => w === word.toLowerCase()).length;
}
