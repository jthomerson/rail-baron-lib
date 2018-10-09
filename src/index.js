'use strict';

var PayoutService = require('./services/PayoutService'),
    DestinationService = require('./services/DestinationService');

module.exports = {

   model: {
      City: require('./model/City'), // eslint-disable-line global-require
      Region: require('./model/Region'), // eslint-disable-line global-require
      Railroad: require('./model/Railroad'), // eslint-disable-line global-require
   },

   services: {
      destination: new DestinationService(),
      payout: new PayoutService(),
   },

};
