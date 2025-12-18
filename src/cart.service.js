module.exports = function calculateCartTotal(cartItems) {
  const PRODUCT_PRICES = {
    APPLE: 10,
    ORANGE: 20
  };

  let total = 0;

  for (const item of cartItems) {
    const price = PRODUCT_PRICES[item.productId];
    total += price * item.quantity;
  }

  return total;
};
