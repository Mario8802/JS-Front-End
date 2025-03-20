function solve(data) {
    let phonebook = {};

    for (let item of data) {
        let [name, phone] = item.split(' ');

        phonebook[name] = phone;
    }

    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`)
    }
}