'use strict';

var _ = require('underscore'),
    BaseClass = require('./NamedEntity'),
    regions = require('./regions'),
    Region;

module.exports = Region = BaseClass.extend({

   init: function(name, key) {
      this._super(name, key);
      this._cities = [];
   },

   getCities: function() {
      return this._cities;
   },

   _registerCity: function(city) {
      this._cities.push(city);
   },

});

Region.ALL = [];
_.each(regions, function(region) {
   Region[region.key] = new Region(region.name, region.key);
   Region.ALL.push(Region[region.key]);
});
