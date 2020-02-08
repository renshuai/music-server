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
    let b=  albumsModel.create(album,function (err,newAlbum) {
        if(!err) {
            callback({
                code: 0,
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

module.exports = {findAlbumsByName, findAllAlbums, addAlbum, deleteAlbum, updateAlbum};