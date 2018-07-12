import {} from 'dotenv/config';
import http from 'http';

import express from 'express';
import bodyparser from 'body-parser';
import request from 'request';

import { RTMClient, WebClient } from '@slack/client';

const PORT = process.env.HTTP_PORT || 3000;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientToken = process.env.CLIENT_TOKEN;

const aggregate = {
  channel: process.env.CHANNEL
};

const rtm = new RTMClient(clientToken);
const web = new WebClient(clientToken);

const app = express();

app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( {
  extended: true
}));

app.get('/', (req, res) => {
  res.send(`Slack bot says, "hello". Nothing to see here.`);
});

app.get('/oauth', (req, res) => {
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
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
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
  }
});

rtm.on('message', (message) => {
  if ( (message.subtype && message.subtype === 'bot_message') ||
       (message.channel === aggregate.channel) ||
       (!message.subtype && message.user === rtm.activeUserId) ) {
    return;
  }

  web.users.info({
    token: clientToken,
    user: message.user,
  })
  .then((res) => {
    web.chat.postMessage({
      token: clientToken,
      channel: aggregate.channel,
      as_user: true,
      username: message.user,
      attachments: [{
        author_name: res.user.real_name,
        author_icon: res.user.profile.image_24,
        text: message.text,
      }]
    }).catch(console.error);
  }).catch(console.error);

});

app.post('/aggregate', (req, res) => {
  console.log('Call for channel aggregation', req.body);
  res.send('I will aggregate messages from this channel!');
  aggregate.channel = req.body.channel_id;
});

if (!module.parent) {
  rtm.start();
  app.listen(PORT, () => {
    console.log(`Slack app listening on port ${PORT}`);
    console.log(`Slack app configured with:
      clientId: ${clientId}
      clientSecret: ${clientSecret}
      token: ${clientToken}
      channel: ${aggregate.channel}`);
  });
}

export default app;
