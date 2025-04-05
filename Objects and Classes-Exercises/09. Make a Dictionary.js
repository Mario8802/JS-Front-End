function solve(data) {
    let dictionary = {};

    for (let jsonString of data) {
        let entry = JSON.parse(jsonString);
        let term = Object.keys(entry)[0];
        let definition = entry[term];
        dictionary[term] = definition;
    }

    let entries = Object.entries(dictionary);

    entries.sort((a, b) => {
        let termA = a[0];
        let termB = b[0];
        return termA.localeCompare(termB);
    });

    for (let [term, definition] of entries) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}


// function getData() {
//     return { name: "Mario", age: 30 };
//   }
  
//   let base = { role: "Developer" };
  
//   let combined = Object.assign({}, base, getData());
  