
function solve(text) {
    let matches = text.match(/#[a-zA-Z]+/g);

    if (!matches) return;

    for (let word of matches) {
        console.log(word.slice(1));
    }
}
console.log(solve('The #tag is not a #tag', '#tag')); // ['#tag', '#tag']