const express = require('express');

const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log('request method:', req.method);
  res.send('I\'m sending something!');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server is listening on port 3000'));
