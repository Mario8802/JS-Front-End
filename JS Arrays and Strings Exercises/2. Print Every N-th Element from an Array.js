function solve(arr, step) {
    const result = [];

    for (i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    console.log(result)
}

solve(['5',

    '20',
    
    '31',
    
    '4',
    
    '20'],
    
    2)

solve(['dsa', 'asd', 'test', 'tset'], 2)