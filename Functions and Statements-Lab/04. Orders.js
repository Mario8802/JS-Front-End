function order(product, quantity) {
    let price = 0;

    if (product == 'coffee') {
        price = 1.50;
    }

    else if (product == 'coke') {
        price = 1.40;
    }

    else if (product == 'water') {
        price = 1.00;
    }
    
    else if (product == 'snacks') {
        price = 2.00;
    }

    return (price * quantity).toFixed(2);
}

