// function solve() {
//    const resultElement = document.querySelector('textarea');
//    const checkoutButton = document.querySelector('.checkout');
//    const productCatalogElement = document.querySelector('.shopping-cart');

//    const products = [];
//    const uniqueNames = new Set();

//    // Add to cart
//    productCatalogElement.addEventListener('click', (e) => {
//        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('add-product')) {
//            const productElement = e.target.closest('.product');
//            const name = productElement.querySelector('.product-title').textContent;
//            const price = Number(productElement.querySelector('.product-line-price').textContent);

//            resultElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

//            products.push({ name, price });
//            uniqueNames.add(name);
//        }
//    });

//    // Checkout
//    checkoutButton.addEventListener('click', () => {
//        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
//        const productList = Array.from(uniqueNames).join(', ');

//        resultElement.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.\n`;

//        // Disable all buttons
//        const allButtons = document.querySelectorAll('button');
//        allButtons.forEach(btn => btn.disabled = true);
//    });
// }


function solve() {
    const addProductButtonElements = document.querySelectorAll('button.add-product');
    const textareaElement = document.querySelector('textarea');
    const checkButtonElement = document.querySelector('button.checkout');

    for (const buttonElement of addProductButtonElements) {
        const productElement = buttonElement.parentElement.parentElement;
        // const productElement = buttonElement.closest('.product');

        buttonElement.addEventListener('click', () => {
            const title = productElement.querySelector('product-title').textContent;
            const price = Number(productElement.querySelector('.product-line-price').textContent);

            textareaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart. \n`;
        }) 
        
    }
}