const siteController = require('../app/controllers/SitesController');
const express = require('express');
const router = express.Router();


router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
