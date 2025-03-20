// function printCity(city) {
//     console.log('name ->', city.name);    
//     console.log('area ->', city.area);    
//     console.log('population ->', city.population);    
//     console.log('country ->', city.country);    
//     console.log('postCode ->', city.postCode);    
    
// }

function printCity(city) {
    const data = Object.entries(city);

    for (let [key, value] of data) {
        console.log(`${key} -> ${value}`);
    }
}
