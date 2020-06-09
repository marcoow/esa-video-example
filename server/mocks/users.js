'use strict';

module.exports = function(app) {
  const express = require('express');
  const moment = require('moment');
  let usersRouter = express.Router();

  usersRouter.get('/me', function(req, res) {
    let { token } = req.headers;
    if (token === 'secret token!') {
      res.send({
        'data': {
          'type': 'users',
          'id': '1',
          'attributes': {
            'name': 'Zoey'
          }
        }
      });
    } else {
      res.status(401).end();
    }
  });

  app.use('/api/users', usersRouter);
};
