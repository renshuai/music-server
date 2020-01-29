var express = require('express');
var albumsDao = require('../dao/albumsDao');
var router = express.Router();

/* GET home page. */
router.get('/getAlbumsByName', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    console.log(params);
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

module.exports = router;