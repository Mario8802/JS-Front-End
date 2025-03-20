function solve(json) {
    let obj = JSON.parse(json);
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}