function calculatePrice(fruit, weight, price) {
    let price_fruit = (weight * price) / 1000

    return`I need $${price_fruit.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(calculatePrice('orange', 2500, 1.80));