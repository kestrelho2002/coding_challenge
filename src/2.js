const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);
  res.send(`Hello World! The number is ${randomNumber}.`);
});
app.listen(3000, () => console.log('Server started on port 3000'));
