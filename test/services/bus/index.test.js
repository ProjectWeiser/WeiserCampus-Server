'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('bus service', function() {
  it('registered the bus service', () => {
    assert.ok(app.service('/api/bus'));
  });
});
