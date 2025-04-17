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


// You are given a group of people, the 
// type of the group, and the day of the week they 
// are going to stay. Based on that information calculate 
// how much they have to pay and print that price on the
//  console. Use the table below. In each cell is the price for a single person.

// The output should look like that: `Total price: {price}`.
//  The price should be formatted to the second decimal point.

// Friday Saturday

function solve(count, people) {
    let price = 0
    if (people == 'Students') {
        if (day == 'Friday') {
            price = count * 8.45
        } else if (day == 'Saturday') {
            price = count * 9.80
        } else if (day == 'Sunday') {
            price = count * 10.46
        }

    } else if (people == 'Business') {
        if (day == 'Friday') {
            price = count * 10.90
        } else if (day == 'Saturday') {
            price = count * 15.60
        } else if (day == 'Sunday') {
            price = count * 16
        }

    } else if (people == 'Regular') {
        if (day == 'Friday') {
            price = count * 15
        } else if (day == 'Saturday') {
            price = count * 20
        } else if (day == 'Sunday') {
            price = count * 22.50
        } 

    }

    if (people == 'Students' && count >= 30) {
        price = price * 0.85
    }
    if (people == 'Business' && count >= 100) {
        price = price - (10 * price / count)
    }
    if (people == 'Regular' && count >= 10 && count <= 20) {
        price = price * 0.95
    }
    console.log(`Total price: {price.toFixed(2)}`)
}