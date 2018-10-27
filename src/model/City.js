'use strict';

var _ = require('underscore'),
    cities = require('./cities'),
    Region = require('./Region'),
    BaseClass = require('./NamedEntity'),
    City;

module.exports = City = BaseClass.extend({

   getRegion: function() {
      return this._region;
   },

});

City.ALL = [];

_.each(cities, function(config) {
   var region = Region[config.region];

   City[config.key] = new City(config);
   City[config.key]._region = region;
   City.ALL.push(City[config.key]);
   region._registerCity(City[config.key]);
});

require('./add-finders')(City);
