
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
	// parses through req.body's json type.
	app.use(bodyParser.json());
	// parses through url body
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// accepts CORS request from localhost 3000
	app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

	// parses through cookies and exposes it as req.cookies
	app.use(cookieParser());
}