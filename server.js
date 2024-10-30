const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');
const config = require('./app/config.js');
const library = require('./library.js');
const lib = new library();
const colors = require('colors')

// for req.body
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

// PUG for view
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

// static: js, css, img
app.use( express.static(path.join(__dirname, 'public')) )

// var in views
app.use((req,res,next) => {
	res.locals.title1 = config.title1;
	res.locals.title2 = config.title2;
	next();
});

const session = require('express-session');
app.use(session({
	secret: config.appKey, resave:false, saveUninitialized:false,
	cookie: {maxAge: 3600000}
}));

app.use((req,res,next) => {
	res.locals.session = req.session;
	if(res.locals.session && res.locals.session.user){
		console.log(`cookie`, res.locals.session.user);
	}
	next();
});

// router
require('./app/router.js')(app)

// ready to work
let time;
app.listen(config.port, () => {
	console.log(`${lib.today()}`.blue,`${lib.now()}: `.yellow, `Work on`.cyan, `http://localhost:${config.port}`.underline.cyan)
})
