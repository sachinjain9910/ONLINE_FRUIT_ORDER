const express = require('express');
const app = express();

const cartRoutes = require('./cart.routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'cart-service' });
});

app.use('/cart', cartRoutes);

app.listen(PORT, () => {
  console.log('cart-service running on port', PORT);
});
