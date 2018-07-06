import {} from 'dotenv/config';
import http from 'http';

import express from 'express';
import request from 'request';

const PORT = process.env.HTTP_PORT;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const app = express();

app.listen(PORT, function () {
  console.log(`Slack app listening on port ${PORT}`);
});

app.get('/', function(req, res) {
  res.send(`Slack bot is up: ${req.url}`);
});

app.get('/oauth', function(req, res) {
  console.log('OAuth Request', req.query);
  if (!req.query.code) {
    res.status(500);
    res.send({ 'Error': `Looks like we're not getting code.` });
    console.log(`Looks like we're not getting code.`);
  } else {
    request({
      url: 'https://slack.com/api/oauth.access',
      qs: {
        code: req.query.code,
        client_id: clientId,
        client_secret: clientSecret
      },
      method: 'GET',
    }, function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        res.json(body);
      }
    })
  }
});

app.post('/aggregate', function(req, res) {
  res.send('I will aggregate messages from this channel!');
});

module.exports = app;
