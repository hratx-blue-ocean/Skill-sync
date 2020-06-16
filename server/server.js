const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('Listening on port ' + port));
