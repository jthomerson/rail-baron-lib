'use strict';

var _ = require('underscore'),
    City = require('../model/City'),
    Class = require('class.extend'),
    isOdd = require('./is-odd'),
    Region = require('../model/Region'),
    rollData = require('./dice-roll-data');

module.exports = Class.extend({

   init: function() {
      this._regionalRolls = _.map(rollData.regions, function(roll) {
         return _.extend({}, roll, { region: Region[roll.result] });
      });

      this._cityRolls = _.reduce(_.omit(rollData, 'regions'), function(memo, rolls, regionKey) {
         memo[Region[regionKey].getKey()] = _.map(rolls, function(roll) {
            return _.extend({}, roll, { city: City[roll.result] });
         });
         return memo;
      }, {});
   },

   lookupRegion: function(number, isOddInput) {
      var result = _.findWhere(this._regionalRolls, { number: number, isOdd: isOdd(isOddInput) });

      return result ? result.region : null;
   },

   lookupCity: function(region, number, isOddInput) {
      var result = _.findWhere(this._cityRolls[region.getKey()], { number: number, isOdd: isOdd(isOddInput) });

      return result ? result.city : null;
   },

});
