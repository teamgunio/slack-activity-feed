import {} from 'dotenv/config';

import request from 'supertest';
import assert from 'assert';

import app from '../lib/index.js';

describe('Example Node Server', () => {
  let server;

  before(() => {
    server = app.listen();
  })
  
  after(() => {
    server.close();
  })

  it('should return 200', done => {
    request(server)
      .get('/')
      .expect(200, done)
  });
});
