const express = require('express');
const port = 3000;
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

const indexRouter = require('./routes/index');
const userRoutes = require('./routes/users'); 

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

require('./config/database');
require('./config/passport');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'NYEresolution',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//mount routes
app.use('/', indexRouter);
app.use('/', userRoutes);


//express listen
app.listen(port, () => {
    console.log(`listening on port:${port}`);
});