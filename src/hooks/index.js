'use strict';

const errors = require('feathers-errors');

exports.disableExternal = function (options) {
  return function (hook) {
    if (hook.params.provider) {
      throw new errors.BadRequest('Unauthorized');
    }

    return hook;
  };
};
