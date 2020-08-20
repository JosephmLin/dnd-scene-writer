// Connect to mongo
require('./database/mongo');

const express = require('express');
const plugins = require('./plugins');
const npcRoute = require('./routes/npc');

const app = express();

// SETUP plugins
plugins(app);

// SETUP npc endpoints
app.use('/npc', npcRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// 404 Error
app.use((req, res, next) => {
  res.sendStatus(404).send('Not found');
  res.end();
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
