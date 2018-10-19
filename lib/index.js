import {} from 'dotenv/config';
import http from 'http';

import bunyan from 'bunyan';
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

const log = bunyan.createLogger({ name: 'slack-activity-feed'})

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
  log.info('OAuth Request', req.query, req.params, req.body);
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
        log.error(error);
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

// RTM Interactions

rtm.on('ready', () => {
  const { npm_package_name, npm_package_version } = process.env;
  log.info('RTM ready');
  web.chat.postMessage({
    token: clientToken,
    channel: aggregate.channel,
    text: `${npm_package_name} @${npm_package_version} has connected.`
  }).catch(log.error);
});

rtm.on('error', e => log.error(e, 'RTM error'));
rtm.on('connected', e => log.info('RTM connected'));
rtm.on('connecting', e => log.info('RTM connecting'));
rtm.on('disconnected', e => log.info('RTM disconnected'));
rtm.on('disconnecting', e => log.info('RTM disconnecting'));
rtm.on('reconnecting', e => log.info('RTM reconnecting'));

rtm.on('message', (message) => {
  if ( (message.subtype && message.subtype === 'channel_leave') ||
       (message.subtype && message.subtype === 'message_changed') ||
       (message.channel === aggregate.channel) ||
       (!message.subtype && message.user === rtm.activeUserId) ) {
    return;
  }

  log.info(message.type, message.subtype, 'RTM Received');

  if (message.bot_id) {
    // Log messages to debug bot user messages
    log.info(message.subtype, message.bot_id, 'Bot Message');

    web.bots.info({
      token: clientToken,
      bot: message.bot_id,
    })
    .then((res) => {
      const attachments = (message.attachments) ? message.attachments.map(attachment => {
        return {
          author_name: res.bot.name,
          author_icon: res.bot.icons.image_36,
          pre_text: attachment.pre_text,
          title: attachment.title,
          text: attachment.text,
          color: attachment.color,
          fallback: attachment.fallback,
        };
      }) : [];
      web.chat.postMessage({
        token: clientToken,
        channel: aggregate.channel,
        text: message.text,
        attachments,
      }).catch(log.error);
    }).catch(log.error);
  } else {
    web.users.info({
      token: clientToken,
      user: message.user,
    })
    .then((res) => {
      web.chat.postMessage({
        token: clientToken,
        channel: aggregate.channel,
        attachments: [{
          author_name: res.user.real_name,
          author_icon: res.user.profile.image_24,
          text: message.text,
        }]
      }).catch(log.error);
    }).catch( e => {
      log.error(e);
      log.info(message);
    });
  }

});

app.post('/aggregate', (req, res) => {
  log.info('Call for channel aggregation', req.body);
  if (body.channel_id) {
    res.send(`Okay, I'll start aggregating Slack activity here for you.`);
    aggregate.channel = req.body.channel_id;
  }
});

if (!module.parent) {
  const { npm_package_name, npm_package_version } = process.env;
  log.info(`${npm_package_name} @${npm_package_version} is running with:
    clientId: ${clientId}
    clientSecret: ${clientSecret}
    channel: ${aggregate.channel}
    port: ${PORT}
    token: ${clientToken}`);

  rtm.start();
  app.listen(PORT, () => {
    log.info(`Express server listening on port ${PORT}`);
  });
}

export default app;
