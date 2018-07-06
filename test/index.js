import {} from 'dotenv/config';

import http from 'http';
import assert from 'assert';

import '../lib/index.js';

const PORT = process.env.HTTP_PORT;

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get(`http://127.0.0.1:${PORT}`, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
