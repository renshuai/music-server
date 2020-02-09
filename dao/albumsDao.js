const mongoose = require('mongoose');

const albumsModel = mongoose.model('albums');

function findAlbumsByName(name, callback) {
    albumsModel.find({album_name: name}).exec(function (err, albums) {
        if (!err) {
            callback(albums);
        }
    })
}

function findAllAlbums(callback) {
    albumsModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function addAlbum(album,callback) {
    albumsModel.create(album,function (err,newAlbum) {
        if(!err) {
            callback({
                code: 0,
                msg: '添加成功',
                album: newAlbum.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: '添加失败'
            })
        }
    })
}

function deleteAlbum(id,callback) {
    albumsModel.findByIdAndRemove(id,function (err) {
        if(!err) {
            callback({
                code: 0,
                msg: '删除成功'
            })
        } else {
            callback({
                code: 1,
                msg: '删除失败'
            })
        }
    })
}

function updateAlbum(id,album, callback) {
    albumsModel.findByIdAndUpdate(id, album, function (err, newAlbum) {
        if(!err) {
            callback({
                code: 0,
                msg: '更新成功',
                album: newAlbum.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: '更新失败'
            })
        }
    })
}

function initAlbumsData(callback) {
    let initData = [
        {
            album_id: "3751508",
            album_name: "A.I. 爱",
            public_time: "2017-12-11",
            week: 50,
            price: 89,
            cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
            singers: [
                {
                    singer_id: "265",
                    singer_name: "王力宏"
                }
            ]
        },
        {
            album_id: "3327203",
            album_name: "Dreamer (梦想家)",
            public_time: "2017-12-08",
            week: 49,
            price: 102,
            cover: "http://imgcache.qq.com/music/photo/album_300/03/300_albumpic_3327203_0.jpg",
            singers: [
                {
                    singer_id: "941206",
                    singer_name: "Axwell Λ Ingrosso"
                },
                {
                    singer_id: "159855",
                    singer_name: "Trevor Guthrie"
                }
            ]
        },
        {
            album_id: "3766915",
            album_name: "Don't Don't Do It!",
            public_time: "2017-12-13",
            week: 50,
            price: 65,
            cover: "http://imgcache.qq.com/music/photo/album_300/15/300_albumpic_3766915_0.jpg",
            singers: [
                {
                    singer_id: "13317",
                    singer_name: "N.E.R.D"
                },
                {
                    singer_id: "28021",
                    singer_name: "Kendrick Lamar (肯德里克·拉马尔)"
                }
            ]
        },
        {
            album_id: "3324740",
            album_name: "Trigger Bang",
            public_time: "2018-01-05",
            week: 1,
            price: 123,
            cover: "http://imgcache.qq.com/music/photo/album_300/40/300_albumpic_3324740_0.jpg",
            singers: [
                {
                    singer_id: "5125",
                    singer_name: "Lily Allen (莉莉·艾伦)"
                },
                {
                    singer_id: "49917",
                    singer_name: "Giggs"
                }
            ]
        }
    ];
    albumsModel.deleteMany({}, function (err) {
        if (!err) {
            // 重新插入新数据
            albumsModel.insertMany(initData, function (err, albums) {
                if (!err) {
                    callback({
                        code: 0,
                        albums: albums,
                        msg: '初始化数据成功'
                    })
                } else {
                    callback({
                        code: 1,
                        msg: '初始化数据失败'
                    })
                }
            })
        } else {
            callback({
                code: 1,
                msg: '初始化数据失败'
            })
        }
    })
}

module.exports = {findAlbumsByName, findAllAlbums, addAlbum, deleteAlbum, updateAlbum, initAlbumsData};