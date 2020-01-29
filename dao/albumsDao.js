const mongoose = require('mongoose');

const albumsModel = mongoose.model('albums');

function findAlbumsByName(name, callback) {
    albumsModel.find({album_name: name}).exec(function (err, albums) {
        console.log(err);
        console.log(albums);
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

module.exports = {findAlbumsByName, findAllAlbums};