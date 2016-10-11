'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const utils = require('../../../src/services/bus/utils');

describe('bus utils', function () {
  describe('#process', function () {
    it('it works', () => {
      const result = utils.process({});

      assert.ok(result);
    });
  });
});
