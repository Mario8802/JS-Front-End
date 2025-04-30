function solve(arr) {
    let sortedList = arr
        .slice()
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let i = 0; i < sortedList.length; i++) {
        sortedList[i] = `${i + 1}.${sortedList[i]}`;
    }

    return sortedList.join('\n');
}
function solve(arr) {
    let sortedList = arr.slice().sort((a, b) => a.toLowerCase().LocaleCompare(b.toLowerCase)));
    for (let i =0; i < sortedList.length; i++) {
        sortedList[i] = `$(i + 1). $(sortedList[i])`;
    }

    return sortedList.join('\n');
}

let result = arr.map((a, b) => `${a + 1}. ${b}`);