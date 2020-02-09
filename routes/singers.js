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

router.post('/add', function(req, res, next) {
    let body = req.body;
    if (body) {
        singersDao.addSinger(body,function (response) {
            res.json(response);
        })
    }
});
router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    singersDao.deleteSinger(id, function (response) {
        res.json(response);
    })
});

router.post('/update', function(req, res, next) {
    let body = req.body;
    if (body) {
        singersDao.updateSinger(body._id, body,function (response) {
            res.json(response);
        })
    }
});

router.post('/init', function(req, res, next) {
    singersDao.initSingersData(function (response) {
        res.json(response);
    })
});

module.exports = router;