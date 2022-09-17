const Course = require('../models/Course');
const { multipleMoongoseToObject } = require('../../util/moongoose');
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        //Sort function
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        //promise.all([array]) dùng để controls một group promise
        Promise.all([courseQuery, Course.countDocumentsDeleted()]).then(([courses, deletedCount]) =>
            res.render('me/storedCourses', {
                courses: multipleMoongoseToObject(courses),
                deletedCount,
            }),
        );
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
