'use strict';

var _ = require('underscore');

module.exports = function(clz) {
   function addFinder(field) {
      clz['find_by_' + field] = function(abbr) {
         return _.find(clz.ALL, function(o) {
            return o['_' + field] === abbr;
         });
      };
   }

   addFinder('key');
   addFinder('name');
   addFinder('abbreviation');
};
