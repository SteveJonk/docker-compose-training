const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello changed back World!' });
});

app.listen(port, () => {
  console.log(
    `Example node API listening on port ${port} with env ${process.env.NODE_ENV}!`
  );
});
