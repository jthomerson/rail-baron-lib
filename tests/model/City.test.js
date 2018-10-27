'use strict';

var expect = require('expect.js'),
    RailBaron = require('../../src/index');

describe('City', function() {
   var City = RailBaron.model.City;

   describe('find_by_abbreviation', function() {
      it('returns the correct city', function() {
         expect(City.find_by_key('PORTLAND_ME')).to.be(City.PORTLAND_ME);
      });

      it('returns undefined for incorrect keys', function() {
         expect(City.find_by_key('foo')).to.be(undefined);
      });
   });

});
