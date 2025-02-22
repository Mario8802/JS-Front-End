function ticketSale(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    let ticketPrice = 0;

    if (day === 'Weekday') {
        if (age <= 18) {
            ticketPrice = 12;
        } else if (age <= 64) {
            ticketPrice = 18;
        } else {
            ticketPrice = 12;
        }
    } else if (day === 'Weekend') {
        if (age <= 18) {
            ticketPrice = 15;
        } else if (age <= 64) {
            ticketPrice = 20;
        } else {
            ticketPrice = 15;
        }
    } else if (day === 'Holiday') {
        if (age <= 18) {
            ticketPrice = 5;
        } else if (age <= 64) {
            ticketPrice = 12;
        } else {
            ticketPrice = 10;
        }
    }
    console.log(`${ticketPrice}$`);
}
