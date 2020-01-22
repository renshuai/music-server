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
    usersModel.find({username: userInfo.username, password: userInfo.password}).exec(function (err, users) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                users: users
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}


module.exports = {addUser, findUser};