'use strict';

var _ = require('underscore'),
    BaseClass = require('./NamedEntity'),
    railroads = require('./railroads'),
    Railroad;

module.exports = Railroad = BaseClass.extend({

   getPrice: function() {
      return this._price;
   },

});

Railroad.ALL = [];

_.each(railroads, function(config) {
   Railroad[config.key] = new Railroad(config);
   Railroad[config.key]._price = config.price;
   Railroad.ALL.push(Railroad[config.key]);
});
