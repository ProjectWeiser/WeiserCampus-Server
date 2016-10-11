'use strict'

const fetch = require('node-fetch');
const CronJob = require('cron').CronJob;
const utils = require('../services/bus/utils');
const moment = require('moment');

module.exports = function () {
  const app = this;
  const models = app.get('sequelize').models;

  const task = new CronJob('5 * * * * *', () => {
    const where = {
      where: {
        createdAt: {
          $lt: moment().subtract(10, 'minutes').toDate(),
        },
      }
    };

    models.bus.destroy(where)
      .then(function (response) {})
      .catch(function (err) {});
  });

  task.start();
};
