const newsRouter = require('./news.route');
const sitesRouter = require('./site.route');
const coursesRouter = require('./courses.route');
const meRouter = require('./me.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    app.use('/', sitesRouter);
}

module.exports = route;