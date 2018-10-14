const express = require('express');
const router = express.Router();


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// *                                                            General init //
const website_title = 'Doujinge-Nexus';


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// *                                                                 Routing //
router.get('/', function(req, res, next) {
  res.render('index', { title: website_title });
});

module.exports = router;
