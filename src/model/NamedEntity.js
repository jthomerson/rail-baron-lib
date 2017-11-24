'use strict';

var Class = require('class.extend');

module.exports = Class.extend({

   init: function(name, key) {
      this._name = name;
      this._key = key;
   },

   getName: function() {
      return this._name;
   },

   getKey: function() {
      return this._key;
   },

});
