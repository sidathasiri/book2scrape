const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => console.log(`Server is running on ${port}`));
