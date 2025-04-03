function solve(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let counts = {};
    
    for (let word of words) {
        if (!counts.hasOwnProperty(word)) {
            counts[word] = 0;
        }
        counts[word]++;
    }

    let result = [];

    for (let word of words) {
        if (counts[word] % 2 !== 0 && !result.includes(word)) {
            result.push(word);
        }
    }

    console.log(result.join(" "));
}

solve('Cake IS SWEET is Soft CAKE sweet Food'
)

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')