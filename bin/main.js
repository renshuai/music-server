const mongoose=require('mongoose')
const http=require('http')
require('../model')
let app=require('../app')
let server=http.createServer(app)

mongoose.connect("mongodb://106.13.136.196/mydb",{useNewUrlParser:true, useUnifiedTopology: true}, function (err) {
    if (!err) {
        console.log("mongodb 已连接!")
        server.listen(3001,function (err) {
            if(!err){
                console.log("express 服务器已打开 ")
            }
        })
    } else {
        console.log("mongodb 连接失败");
    }

})

server.on('close',function () {
    mongoose.disconnect()
})


