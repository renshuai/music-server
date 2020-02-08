var express = require('express');
var albumsDao = require('../dao/albumsDao');
var router = express.Router();

/* GET home page. */
router.get('/getAlbumsByName', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    if (name) {
        albumsDao.findAlbumsByName(name, function (albums) {
            res.json(albums);
        })
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    albumsDao.findAllAlbums(function (albums) {
        res.json(albums);
    })
});

router.post('/add', function(req, res, next) {
    let body = req.body;
    if (body) {
        albumsDao.addAlbum(body,function (response) {
            res.json(response);
        })
    }
});
router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    albumsDao.deleteAlbum(id, function (response) {
        res.json(response);
    })
});
router.post('/update', function(req, res, next) {
    let body = req.body;
    if (body) {
        albumsDao.updateAlbum(body._id, body,function (response) {
            res.json(response);
        })
    }
});


module.exports = router;