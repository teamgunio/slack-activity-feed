import {} from 'dotenv/config';
import http from 'http';

import express from 'express';
import bodyparser from 'body-parser';
import request from 'request';

const PORT = process.env.HTTP_PORT || 3000;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientToken = process.env.CLIENT_TOKEN;

const aggregate = {
  channel: ''
};

const app = express();

app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( {
  extended: true
}));

app.get('/', function(req, res) {
  res.send(`Slack bot is up: ${req.url}`);
});

app.get('/oauth', function(req, res) {
  console.log('OAuth Request', req.query, req.params, req.body);
  if (!req.query.code) {
    res.status(500);
    res.send({ 'Error': `Looks like we're not getting code.` });
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
        clientToken = body.access_token;
        res.json(body);
      }
    })
  }
});

app.post('/slack/receive', (req, res) => {
  if (req.body.challenge) {
    res.status(200).send(req.body.challenge)
  } else {
    res.status(200).send('OK');
    console.log('Call to slack receive', req.body);
  }

  if (req.body.event.type == 'message' && req.body.event.channel != aggregate.channel) {
    request({
      url: 'https://slack.com/api/chat.postMessage',
      qs: {
        token: clientToken,
        channel: aggregate.channel,
        text: req.body.event.text,
        as_user: true,
        username: req.body.event.user,
      },
      method: 'GET',
    }, (error, response, body) => {
        // console.log(error, response, body);
    })
  }

});

app.post('/aggregate', function(req, res) {
  console.log('Call for channel aggregation', req.body);
  res.send('I will aggregate messages from this channel!');
  aggregate.channel = req.body.channel;
});

if (!module.parent) {
  app.listen(PORT, function () {
    console.log(`Slack app listening on port ${PORT}`);
  });
}

export default app;
