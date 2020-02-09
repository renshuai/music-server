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
    singersModel.create(singer,function (err,newSinger) {
        if(!err) {
            callback({
                code: 0,
                msg: '添加成功',
                singer: newSinger.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: '添加失败'
            })
        }
    })
}

function deleteSinger(id,callback) {
    singersModel.findByIdAndRemove(id,function (err) {
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

function updateSinger(id,singer, callback) {
    singersModel.findByIdAndUpdate(id, singer, function (err, newSinger) {
        if(!err) {
            callback({
                code: 0,
                msg: '更新成功',
                singer: newSinger.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: '更新失败'
            })
        }
    })
}

function initSingersData(callback) {
    let initData = [{singer_id: "265", singer_name: "王力宏"},{singer_id: "941206", singer_name: "Axwell Λ Ingrosso"},{singer_id: "159855", singer_name: "Trevor Guthrie"},{singer_id: "13317", singer_name: "N.E.R.D"},{singer_id: "28021", singer_name: "Kendrick Lamar (肯德里克·拉马尔)"},{singer_id: "5125", singer_name: "Lily Allen (莉莉·艾伦)"},{singer_id: "49917", singer_name: "Giggs"}];
    singersModel.deleteMany({}, function (err) {
        if (!err) {
            // 重新插入新数据
            singersModel.insertMany(initData, function (err, singers) {
                if (!err) {
                    callback({
                        code: 0,
                        singers: singers,
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


module.exports = {findSingersByName, findAllSingers, addSinger, deleteSinger, updateSinger, initSingersData};