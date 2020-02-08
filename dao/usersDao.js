const mongoose = require('mongoose');
const usersModel = mongoose.model('user');

function addUser(user, callback) {

    usersModel.create(user, function (err, newUser) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                user: newUser.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

function findUser(userInfo, callback) {
    usersModel.findOne({username: userInfo.username, password: userInfo.password}).exec(function (err, user) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                user: user
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

function collect(info, callback) {
    let albumId = info.albumId;
    let userId = info.userId;
    let type = info.type; // 0是收藏，1是取消收藏
    // 找到对应的记录信息
    usersModel.findOne({"_id": userId}).exec(function (err, user) {
        if (!err) {
            let collections = user.collections || [];
            if (type === 0) {
                if (collections.indexOf(albumId) <= -1) {
                    collections.push(albumId);
                } else {
                    callback({
                        code: 0,
                        msg: '收藏成功'
                    })
                    return;
                }
            } else if (type === 1) {
                if (collections.indexOf(albumId) > -1) {
                    let index = collections.indexOf(albumId);
                    collections.splice(index, 1);
                } else {
                    callback({
                        code: 0,
                        msg: '取消收藏成功'
                    })
                    return;
                }

            }
            usersModel.updateOne({"_id": userId}, {'collections': collections}, function (err, newUser) {
                if (!err) {
                    callback({
                        code: 0,
                        msg: (type === 0 ? '收藏成功' : '取消收藏成功')
                    })
                } else {
                    callback({
                        code: 1,
                        msg: '收藏失败'
                    })
                }

            })
        } else {
            callback({
                code: 1,
                msg: '获取用户失败，清检查登录状态'
            })
        }
    })
}


module.exports = {addUser, findUser, collect};