const Course = require('../models/Course');
const { multipleMoongoseToObject } = require('../../util/moongoose');
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/storedCourses', {
                    courses: multipleMoongoseToObject(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trashCourses', {
                    courses: multipleMoongoseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
