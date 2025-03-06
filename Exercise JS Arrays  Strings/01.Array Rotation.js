function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++){
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '))
}