const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        Course.find({}, function(err, docs){
            if(!err){
                res.json(docs);
            } else{
                res.json('fail to load data');
            }
        });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;