const mongoose = require('mongoose');

const singersModel = mongoose.model('singers');

function findSingersByName(name, callback) {
    singersModel.find({singer_name: name}).exec(function (err, singers) {
        if (!err) {
            callback(singers);
        }
    })
}

function findAllSingers(callback) {
    singersModel.find({}).exec(function (err,singers) {
        if(!err) callback(singers)
    })
}

function addSinger(singer,callback) {
    let b=  singersModel.create(singer,function (err,newSinger) {
        if(!err) callback(newSinger.toObject())
    })
}

function deleteSinger(id,callback) {
    singersModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}

function updateSinger(id,singer, callback) {
    singersModel.findByIdAndUpdate(id, singer, function (err, newSinger) {
        if(!err) callback(newSinger.toObject())
    })
}

module.exports = {findSingersByName, findAllSingers, addSinger, deleteSinger, updateSinger};