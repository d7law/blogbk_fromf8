const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
const sitesController = require('../app/controllers/SitesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.delete);
router.delete('/:id/force', coursesController.forceDelete);
router.get('/:slug', coursesController.show);
router.get('/', sitesController.index);

module.exports = router;
