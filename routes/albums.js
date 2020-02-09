var express = require('express');
var albumsDao = require('../dao/albumsDao');
var usersDao = require('../dao/usersDao');
var router = express.Router();
const fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var path = require('path')
let __rootname = path.resolve(__dirname, '..')

/* GET home page. */
router.get('/getAlbumsByName', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    let userId = params.userId;
    if (name) {
        albumsDao.findAlbumsByName(name, function (albums) {
            if (userId) {
                let copyAlbums = JSON.parse(JSON.stringify(albums));
                usersDao.findUserById(userId, function (response) {
                    if (response.code == 0) {
                        let user = response.user;
                        let collections = user.collections;
                        copyAlbums.forEach(album => {
                            if (collections && collections.indexOf(album['_id']) > -1) {
                                album.isCollected = true;
                            } else {
                                album.isCollected = false;
                            }
                        })
                        res.json(copyAlbums);
                    }

                })
            } else {
                res.json(albums);
            }

        })
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    let params = req.query;
    let userId = params.userId;
    albumsDao.findAllAlbums(function (albums) {
        if (params && userId) {
            let copyAlbums = JSON.parse(JSON.stringify(albums));
            usersDao.findUserById(userId, function (response) {
                if (response.code == 0) {
                    let user = response.user;
                    let collections = user.collections;
                    copyAlbums.forEach(album => {
                        if (collections && collections.indexOf(album['_id']) > -1) {
                            album.isCollected = true;
                        } else {
                            album.isCollected = false;
                        }
                    })
                    res.json(copyAlbums);
                }
            })
        } else {
            res.json(albums);
        }
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

router.post('/init', function(req, res, next) {
    albumsDao.initAlbumsData(function (response) {
        res.json(response);
    })
});

router.post('/uploads', upload.single('cover'),function(req, res, next) {
    // res.send('all animals1');
    let file = req.file;
    console.log(file);
    let mimeType = file.mimetype;
    let imageTypeMap = {
        'image/gif': 'gif',
        'image/bmp': 'bmp',
        'image/jpeg': 'jpg',
        'image/png': 'png'
    }
    let imageType = imageTypeMap[mimeType];
    fs.copyFile(__rootname + '/uploads/' + file.filename, __rootname + '/public/images/' + file.filename + '.' + imageType, (err) => {
        if (err) throw err;
        res.end(`/images/${file.filename}.${imageType}`);
        console.log('源文件已拷贝到目标文件');
    });
});



module.exports = router;