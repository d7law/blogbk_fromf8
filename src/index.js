const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const { Router } = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const { type } = require('os');

const db = require('./config/db/index');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//middleware to override method(put, path, ...v.v)
app.use(methodOverride('_method'));
//middleware HTTP logger
app.use(morgan('combined'));
//Middleware dùng để gán dữ liệu vào body trong POST Method
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(SortMiddleware);

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-arrow-up-z-a',
                    desc: 'fa-solid fa-arrow-down-a-z',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href ="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`;
            },
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
