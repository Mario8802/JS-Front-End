function solve(names) {
    let employees = {};

    for (let name of names) {
        employees[name] = name.length;

    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}