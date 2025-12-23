const express = require('express');
const router = express.Router();

const cartStore = require('./cart.store');
const calculateCartTotal  = require('./cart.service');

/**
 * Add item to cart
 */
router.post('/add', (req, res) => {
  const { userId, productId, quantity } = req.body;

  cartStore.addItem(userId, productId, quantity);

  res.json({ message: 'Item added to cart' });
});


/**
 * Get cart details
 */
router.get('/:userId', (req, res) => {
  const cart = cartStore.getCart(req.params.userId);
  const total = calculateCartTotal(cart);

  res.json({
    items: cart,
    total
  });
});

/**
 * Checkout (logic only for now)
 */
router.post('/checkout', (req, res) => {
  const { userId, paymentMethod } = req.body;

  const cart = cartStore.getCart(userId);
  const total = calculateCartTotal(cart);

  cartStore.clearCart(userId);

  res.json({
    message: 'Checkout successful',
    paymentMethod,
    total
  });
});

module.exports = router;
