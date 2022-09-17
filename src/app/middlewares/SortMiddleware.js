module.exports = function SortMiddleware(req, res, next) {
    var resLocal = (res.locals._sort = {
        enable: false,
        type: 'default',
    });

    if (req.query.hasOwnProperty('_sort')) {
        // resLocal.enable = true;
        // resLocal.name = req.query.column;
        // resLocal.type = req.query.type;

        //Cách tương tự

        Object.assign(resLocal, {
            enable: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};
