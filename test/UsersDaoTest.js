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
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试查找一个人",function (done) {
        let user={username:'123',password: 123456};
        usersDao.findUser(user, function (res) {
            console.log(res);
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试收藏专辑",function (done) {
        let params = {
            albumId: '5e314d55f34197f45cfeb3ec',
            userId: '5e280f4fbdd04b18c0bd8962',
            type: 0  // 0 收藏，1取消收藏
        }
        usersDao.collect(params, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

})