function solve(arr) {
    let wordsToTrack = arr[0].split(" ");
    let wordCounts = {};

    for (let word of wordsToTrack) {
        wordCounts[word] = 0;
    }

    for (let i = 1; i < arr.length; i++) {
        let sentenceWords = arr[i].split(" ");

        for (let word of sentenceWords) {
            if (word in wordCounts) {
                wordCounts[word]++;
            }
        }
    }

    let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
