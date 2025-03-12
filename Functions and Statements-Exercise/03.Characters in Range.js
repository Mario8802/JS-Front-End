function solve(a, b) {
    
    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);

    if (start > end) {
        [start, end] = [end, start];
    }

    let characters = [];

    for (let i = start + 1; i < end; i++) {
        characters.push(String.fromCharCode(i));
    } 

    console.log(characters.join(' '))
}



solve('a', 'd'); 
solve('d', 'a'); 
solve('#', ':'); 
solve('C', '#'); 
