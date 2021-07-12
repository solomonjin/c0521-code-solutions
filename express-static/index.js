const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

const staticDir = express.static(publicPath);

app.use(staticDir);

app.listen(3000, () => console.log('Listening on port 3000'));
