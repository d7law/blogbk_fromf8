const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const { Router } = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const { type } = require('os');

const db = require('./config/db/index');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//
app.use(methodOverride('_method'));
// HTTP logger
app.use(morgan('combined'));
//Middleware dùng để gán dữ liệu vào body trong POST Method
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
});
