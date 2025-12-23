const express = require('express');
const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'products-service'
  });
});

app.listen(PORT, () => {
  console.log('products-service running on port', PORT);
});