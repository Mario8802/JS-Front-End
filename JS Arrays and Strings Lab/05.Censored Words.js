function solve(text, word) {
    let censored = text;
    let replacement = '*'.repeat(word.length);

    while (censored.includes(word)) {
        censored = censored.replace(word, replacement);
    }

    console.log(censored);
}
