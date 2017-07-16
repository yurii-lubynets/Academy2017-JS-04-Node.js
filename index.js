const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
	{
		extended: true
	}));
app.listen(3000, function () {
  	console.log('Server running on Port 3000');
});

const routes = require('./routes/routes')(app);

