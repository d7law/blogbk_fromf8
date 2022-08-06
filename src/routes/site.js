const siteController = require('../app/controllers/SitesController');
const express = require('express');
const router = express.Router();


router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
