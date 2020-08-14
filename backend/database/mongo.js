const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/dnd-storywriter';

// Connecting mongoDB Databas
mongoose.connect(db, {
  useNewUrlParser: true,
});
