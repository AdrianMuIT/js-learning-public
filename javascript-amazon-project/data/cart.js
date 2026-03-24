export const cart = [];

export function addToCart(productId) {
  const qunatitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantityFromSelect = Number(qunatitySelector.value);
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantityFromSelect;
  } else {
    cart.push({
      productId: productId,
      quantity: quantityFromSelect
    });
  }
};



