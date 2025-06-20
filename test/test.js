// test/test.js
const request = require('supertest');
const server = require('../app'); // app.js එකෙන් server එක import කරනවා
const assert = require('assert');

describe('GET /', function() {
  it('responds with Hello, DevOps Professor!', function(done) {
    request(server)
      .get('/')
      .expect(200) // status code එක 200 ද කියලා බලනවා
      .end(function(err, res) {
        if (err) return done(err);
        // response body එකේ text එක හරියටම තියෙනවද කියලා බලනවා
        assert.strictEqual(res.text, 'Hello, DevOps Professor! This is my first CI-powered Node.js App!');
        done();
      });
  });
  // අපි app.js එකේ server එක import කරපු නිසා, test ඉවර වුණාම ඒක close කරන්න ඕන.
  after(function(done) {
      server.close(done);
  });
});