const mongoose=require('mongoose')
require('../model')
let albumsDao=require('../dao/albumsDao');
const assert=require('assert')

describe("测试AlbumsDao",function () {
    before(function () {
        mongoose.connect('mongodb://106.13.136.196/mydb',function (err) {
        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it("测试查找所有的专辑",function (done) {
        albumsDao.findAllAlbums(function (res) {
            assert.ok(res);
            done();
        })
    })

    it("测试根据名称查找专辑",function (done) {
        let name = 'A.I. 爱';
        albumsDao.findAlbumsByName(name, function (res) {
            assert.ok(res);
            done();
        })
    })

    it("测试添加一个专辑",function (done) {
        let album = {
            cover: "/images/85bd76deb7cd3eeb0ed340c003870690.jpg",
            album_id: "123456",
            album_name: "love123",
            price: "123",
            public_time: "2020-02-11"
        }
        albumsDao.addAlbum(album, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })



    it("测试更新一个专辑",function (done) {
        let album = {
            _id: '5e3fd7a576c0d50798ab7015',
            cover: "/images/85bd76deb7cd3eeb0ed340c003870690.jpg",
            album_id: "123456",
            album_name: "love123",
            price: "123",
            public_time: "2020-02-11"
        }
        albumsDao.updateAlbum(album['_id'], album,function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试删除一个专辑",function (done) {
        let id = '5e3fc5334a827e31b03ba74e';
        albumsDao.deleteAlbum(id, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试初始化专辑数据",function (done) {

        albumsDao.initAlbumsData(function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })
})