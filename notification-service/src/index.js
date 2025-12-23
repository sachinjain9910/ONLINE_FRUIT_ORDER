const express = require('express');
const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'notification-service'
  });
});

app.listen(PORT, () => {
  console.log('notification-service running on port', PORT);
});