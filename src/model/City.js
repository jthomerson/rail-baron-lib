'use strict';

var _ = require('underscore'),
    cities = require('./cities'),
    BaseClass = require('./NamedEntity'),
    Region = require('./Region'),
    City;

module.exports = City = BaseClass.extend({

   init: function(name, key, region) {
      this._super(name, key);
      this._region = region;
   },

   getRegion: function() {
      return this._region;
   },

});

City.ALL = [];

_.each(cities, function(config) {
   var region = Region[config.region],
       city = new City(config.name, config.key, region);

   City[config.key] = city;
   City.ALL.push(city);
   region._registerCity(city);
});
