'use strict';

module.exports = function(app) {
  const express = require('express');
  const moment = require('moment');
  let messagesRouter = express.Router();

  messagesRouter.get('/', function(req, res) {
    res.send({
      'data': [
        {
          'type': 'messages',
          'id': '1',
          'attributes': {
            'sender': 'Tomster',
            'subject': "Hey Zoey 👋",
            'body': "How is it going? Will I see you at EmberConf next year?",
            'sent-at': moment().toJSON()
          }
        },
        {
          'type': 'messages',
          'id': '2',
          'attributes': {
            'sender': 'EmberConf',
            'subject': 'Registration Confirmation for EmberConf 2021',
            'body': 'Thanks so much for registering to join us at EmberConf! You do NOT need to print this confirmation, but photo ID may be required for entry.',
            'sent-at': moment().subtract(3, 'days').toJSON()
          }
        }
      ]
    });
  });

  app.use('/api/messages', messagesRouter);
};
