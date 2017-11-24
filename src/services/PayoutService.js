'use strict';

var _ = require('underscore'),
    City = require('../model/City'),
    Class = require('class.extend'),
    payoutData = require('./payout-data');

module.exports = Class.extend({

   init: function() {
      this._payouts = {};

      _.each(payoutData, function(entry) {
         var city1 = entry[0],
             city2 = entry[1],
             amount = entry[2];

         this._addPayout(city1, city2, amount);
         this._addPayout(city2, city1, amount);
      }.bind(this));
   },

   _addPayout: function(fromKey, destKey, amount) {
      var from = City[fromKey],
          dest = City[destKey];

      if (!from || !_.isFunction(from.getName)) {
         throw new Error('invalid from city: ' + fromKey);
      }
      if (!dest || !_.isFunction(dest.getName)) {
         throw new Error('invalid dest city: ' + destKey);
      }

      this._payouts[from.getKey()] = this._payouts[from.getKey()] || {};
      this._payouts[from.getKey()][dest.getKey()] = amount;
   },

   lookupPayout: function(from, to) {
      return this._payouts[from.getKey()][to.getKey()];
   },

});
