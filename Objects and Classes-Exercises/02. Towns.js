function solve(capitals) {
    let data = [];
    for (let city of capitals) {
        let [town, latitude, longitude] = city.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
    

        let result = {
            town,
            latitude,
            longitude,
        };

        data.push(result);

        console.log(result);
    }

}