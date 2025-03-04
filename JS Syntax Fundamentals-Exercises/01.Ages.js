function groupOfages(age) {
    if (age < 0) {
        console.log("out of bounds");
        return;
    }

    else if (age <= 2) {
        console.log("baby");
        return;
    }

    else if (age <= 13) {
        console.log("child");
        return;
    }

    else if (age <= 19) {
        console.log("teenager");
        return;
    }

    else if (age <= 65) {
        console.log("adult");
        return;
    }

    else {
        console.log("elder");
        return;
    }
}