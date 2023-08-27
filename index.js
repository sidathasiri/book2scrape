const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(80, () => console.log('Server is running'));
