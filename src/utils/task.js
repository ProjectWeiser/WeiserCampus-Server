'use strict'

const fetch = require('node-fetch');
const CronJob = require('cron').CronJob;
const utils = require('../services/bus/utils');

module.exports = function () {
  const app = this;
  const bus = app.service('/api/bus');

  const task = new CronJob('*/5 * * * * *', () => {
    const opts = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Cookie': 'org_id=30',
      },
    };

    fetch('https://embed.liveviewgps.com/embedPlot.aspx', opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const result = utils.process(data);

        bus.create({ data: result })
          .then(function (response) {
            // This should trigger a socket event for
            // all clients watching the bus data type
          })
          .catch(function (err) {});
      });
  });

  task.start();
};
