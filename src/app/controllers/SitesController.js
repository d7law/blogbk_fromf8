const Course = require('../models/Course');
const { multipleMoongoseToObject } = require('../../util/moongoose');
class SiteController {
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMoongoseToObject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;