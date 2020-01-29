var express = require('express');
var singersDao = require('../dao/singersDao');
var router = express.Router();

/* GET home page. */
router.get('/getSingersByName', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    console.log(params);
    if (name) {
        singersDao.findSingersByName(name, function (singers) {
            res.json(singers);
        })
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {

    singersDao.findAllSingers(function (singers) {
        res.json(singers);
    })
});

module.exports = router;