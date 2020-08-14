// Connect to mongo
require('./database/mongo');

const express = require('express');
const plugins = require('./plugins');
const personnelRoute = require('../backend/routes/personnel');

const app = express();

// SETUP plugins
plugins(app);

// SETUP personnel endpoints
app.use('/personnel', personnelRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
	console.log('Connected to port ' + port)
})



// 404 Error
app.use((req, res, next) => {
	res.sendStatus(404).send('Not found');
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})