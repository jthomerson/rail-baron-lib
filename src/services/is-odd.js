'use strict';

var _ = require('underscore');

module.exports = function(input) {
   if (input === null || input === undefined) {
      return null;
   }

   if (_.isBoolean(input)) {
      return input;
   }

   if (_.isNumber(input) || (_.isString(input) && /^[1-6]$/.test(input))) {
      return (input % 2) === 1;
   }

   throw new Error('invalid is-odd type "' + (typeof input) + '": ' + input);
};
