const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auth = new Schema({
	cookieId: {
		type: String
	}
}, {
	collection: 'auth'
});

module.exports = mongoose.model('Auth', auth)