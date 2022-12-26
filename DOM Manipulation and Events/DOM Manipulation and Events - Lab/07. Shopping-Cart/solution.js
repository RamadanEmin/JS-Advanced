function solve() {
   const output = document.querySelector('textarea');
   const products = document.querySelector('.shopping-cart');
   const checkout = document.querySelector('.checkout');
   const cart = { items: new Set(), totalSum: 0 };
   products.addEventListener('click', onClick);
   checkout.addEventListener('click', onCheckout);
   function onClick(e) {
      if (e.target.tagName === 'BUTTON' && e.target.className === 'add-product') {
         const product = e.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
         cart.items.add(title);
         cart.totalSum += price;
      }
   }
   function onCheckout() {
      output.value += `You bought ${[...cart.items].join(', ')} for ${cart.totalSum.toFixed(2)}.`;
      products.removeEventListener('click', onClick);
      checkout.removeEventListener('click', onCheckout);
   }
}
