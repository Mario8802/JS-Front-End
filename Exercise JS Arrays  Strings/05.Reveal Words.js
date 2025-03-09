function solve(wordsAsString, text) {
    let words = wordsAsString.split(', ');

    let tokens = text.split(' ');

    for (let i = 0; i < tokens.length; i++) {
        for (let word of words) {
            let stars = '*'.repeat(word.length);
            if (tokens[i] == stars) {
                tokens[i] = word;
                break;
            }
        }
    }
    console.log(tokens.join(' '));
}