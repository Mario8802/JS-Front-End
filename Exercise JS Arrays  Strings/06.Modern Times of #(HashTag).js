function solve(text) {
    let pattern = /^#([A-Za-z]+)$/;

    let tokens = text.split(' ');

    for (let token of tokens) {
        const match = token.match(pattern);
        if (match) {
            console.log(match[1]); 
        }
    }
}