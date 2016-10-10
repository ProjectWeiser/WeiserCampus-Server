'use strict';

// bus-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const bus = sequelize.define('bus', {
    data: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  return bus;
};
