'use strict'

const fetch = require('node-fetch');
const schedule = require('node-schedule');

module.exports = function (app) {
  const task = schedule.scheduleJob('*/1 * * * *', () => {
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
        console.log(data);
        // Process data and store
        // This should trigger a socket event for
        // all clients watching the bus data type
      });
  });
  
};
