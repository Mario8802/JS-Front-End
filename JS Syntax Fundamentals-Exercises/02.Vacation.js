function vacationCosts(count, type, day) {
    let ticketPrice = 0;
    let totalPrice = 0;

    if (day === "Friday") {
        if (type === "Students") ticketPrice = 8.45;
        else if (type === "Business") ticketPrice = 10.90;
        else if (type === "Regular") ticketPrice = 15.00;
    } 
    else if (day === "Saturday") {
        if (type === "Students") ticketPrice = 9.80;
        else if (type === "Business") ticketPrice = 15.60;
        else if (type === "Regular") ticketPrice = 20.00;
    } 
    else if (day === "Sunday") {
        if (type === "Students") ticketPrice = 10.46;
        else if (type === "Business") ticketPrice = 16.00;
        else if (type === "Regular") ticketPrice = 22.50;
    }

    totalPrice = ticketPrice * count;

    if (type === "Students" && count >= 30) {
        totalPrice *= 0.85;
    } 
    else if (type === "Business" && count >= 100) {
        totalPrice = ticketPrice * (count - 10);
    } 
    else if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// vacationCosts(30, "Students", "Sunday");
// vacationCosts(110, "Business", "Friday");
// vacationCosts(15, "Regular", "Saturday");
// vacationCosts(5, "Students", "Friday");
