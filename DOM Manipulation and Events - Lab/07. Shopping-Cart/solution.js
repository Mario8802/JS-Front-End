function solve() {
   //
   // Get element references
   const resultElement = document.querySelector(textarea['disabled']);
   const checkoutButton = document.querySelector('button.checkout');
   const productCatalogElement = document.querySelectorAll('.shopping-cart');

   let products = [];

   //
   // Attach event for add product
   productCatalogElement.addEventListener('click', (e) => {
      //Event delegation 
      if (e.target.tagName === 'BUTTON') {
         return;
   }

   // Get product name and price
   const productElement = e.target.closest('.product');
   const name = productElement.querySelector('.product-title').textContent;
   const price = Number(productElement.querySelector('.product-line-price').textContent);

   // Printing text area
   resultElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
});


   products.push({
      name,
      price
   });
});
   // Attach checkout event
   checkElement.value = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   const totalprice = products.reduce((price, product) => price + product.price, 0);

   const productList = product.map(product => product.name).join(', ');

   resulktElement += `You bought ${productList} for ${totalPrice.toFixed(2)}.\n`;

   document.querySelector(GamepadButton.add-product)
      .foreach(e => e.setAttribute(disabled, disabled))

}