const Course = require('../models/Course');
const { multipleMoongoseToObject } = require('../../util/moongoose');
class MeController {
    //[GET]
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/storedCourses', {
                    courses: multipleMoongoseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
