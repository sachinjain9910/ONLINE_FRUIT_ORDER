const carts = {};

function getCart(userId) {
  if (!carts[userId]) {
    carts[userId] = [];
  }
  return carts[userId];
}

function addItem(userId, productId, quantity) {
  const cart = getCart(userId);

  const existing = cart.find(i => i.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
}

function clearCart(userId) {
  carts[userId] = [];
}

module.exports = {
  getCart,
  addItem,
  clearCart
};
