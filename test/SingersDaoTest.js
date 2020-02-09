const mongoose=require('mongoose')
require('../model')
let singersDao=require('../dao/singersDao');
const assert=require('assert')

describe("测试SingersDao",function () {
    before(function () {
        mongoose.connect('mongodb://106.13.136.196/mydb',function (err) {
        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it("测试查找所有的歌手",function (done) {
        singersDao.findAllSingers(function (res) {
            assert.ok(true);
            done();
        })
    })

    it("测试根据名称查找歌手",function (done) {
        let name = '王力宏';
        singersDao.findSingersByName(name, function (res) {
            assert.ok(res);
            done();
        })
    })

    it("测试添加一个歌手",function (done) {
        let singer = {
            singer_id: "123456",
            singer_name: "陈奕迅"
        }
        singersDao.addSinger(singer, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })



    it("测试更新一个歌手",function (done) {
        let singer = {
            _id: '5e3fd81f8350b3365cdc4188',
            singer_id: "123456",
            singer_name: "123"
        }
        singersDao.updateSinger(singer._id, singer,function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试删除一个歌手",function (done) {
        let id = '5e3f8ef3e5e52a1bcc5da7ef';
        singersDao.deleteSinger(id, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试初始化歌手数据",function (done) {

        singersDao.initSingersData(function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })
})