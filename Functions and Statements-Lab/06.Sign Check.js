function solve(...params) {
    let asString = params.join();

    if ((asString.match(/-/g)?.length || 0) % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}