const mongoose=require('mongoose')
require('../model')
let usersDao=require('../dao/usersDao');
const assert=require('assert')

describe("测试BookDao",function () {
    before(function () {
        mongoose.connect('mongodb://106.13.136.196/mydb',function (err) {
        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it("测试添加一个人",function (done) {
        let user={username:'john',password: 123456};
        usersDao.addUser(user, function (res) {
            assert.ok(res.user._id != null);
            done();
        })
    })

})