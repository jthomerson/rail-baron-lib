'use strict';

var Class = require('class.extend');

module.exports = Class.extend({

   init: function(data) {
      this._name = data.name;
      this._key = data.key;
      this._abbreviation = data.abbreviation || data.key;
   },

   getName: function() {
      return this._name;
   },

   getKey: function() {
      return this._key;
   },

   getAbbreviation: function() {
      return this._abbreviation;
   },

});
