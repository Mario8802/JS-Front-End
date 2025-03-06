function roadRadar(speed, zone){
    let limit = 0;
    let status = '';

    if (zone === 'motorway')limit = 130;
    else if (zone ==='city')limit = 50;
    else if (zone ==='residential') limit = 20;
    else if (zone ==='interstate') limit = 90;

    let overSpeed  = speed - limit;

    if (overSpeed > 0) {
        if (overSpeed <=20) {
            status = 'speeding';
        }

        else if (overSpeed <= 40) {
            status = 'excessive speeding';
        }

        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`)
    
    
    }
    
    else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
        

} 