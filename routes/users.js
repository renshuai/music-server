var express = require('express');
var router = express.Router();
var usersDao = require('../dao/usersDao');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let userInfo = req.body;
  if (userInfo) {
    usersDao.findUser(userInfo, function (response) {
      if (response.code == 0) {
        let user = response.user;
        if (user) {
          // 说明用户名和密码正确
          res.json({
            code: 0,
            msg: '用户名和密码正确',
            userId: user['_id']
          })
        } else {
          res.json({
            code: 1,
            msg: '用户名或者密码不正确'
          })
        }
      } else if (response.code == 1) {
        res.json({
          code: 1,
          msg: '服务器异常，请稍后再试'
        })
      }
    })
  }


});

router.post('/register', function(req, res, next) {
  let userInfo = req.body;
  if (userInfo) {
    usersDao.addUser(userInfo, function (response) {
      if (response.code == 0) {
        let user = response.user;
        res.json({
          code: 0,
          msg: '注册成功',
          userId: user['_id']
        })
      } else if (response.code == 1) {
        res.json({
          code: 1,
          msg: '服务器异常，请稍后再试'
        })
      }
    })
  }


});

router.post('/collect', function(req, res, next) {
  let body = req.body;
  if (body) {
    usersDao.collect(body, function (response) {
      res.json(response)
    })
  }


});

module.exports = router;
