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

module.exports = {findSingersByName, findAllSingers};