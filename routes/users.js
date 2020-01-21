var express = require('express');
var router = express.Router();
var usersDao = require('../dao/usersDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let userInfo = req.body;
  if (userInfo) {
    if (username && password) {
      usersDao.findUser(userInfo, function (response) {
        if (response.code == 0) {
          let users = response.users;
          if (users.length) {
            // 说明用户名和密码正确
            res.json({
              code: 0,
              msg: '用户名和密码正确'
            })
          }

        } else if (response.code == 1) {
          res.json({
            code: 1,
            msg: '用户名或者密码不正确'
          })
        }
      })
    }
  }


});

module.exports = router;
