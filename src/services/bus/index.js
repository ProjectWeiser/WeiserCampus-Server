'use strict';

const service = require('feathers-sequelize');
const bus = require('./bus-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: bus(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/buses', service(options));

  // Get our initialize service to that we can bind hooks
  const busService = app.service('/buses');

  // Set up our before hooks
  busService.before(hooks.before);

  // Set up our after hooks
  busService.after(hooks.after);
};
