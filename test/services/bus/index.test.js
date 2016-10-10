'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('bus service', function() {
  it('registered the buses service', () => {
    assert.ok(app.service('buses'));
  });
});
