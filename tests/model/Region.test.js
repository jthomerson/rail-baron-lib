'use strict';

var expect = require('expect.js'),
    RailBaron = require('../../src/index');

describe('Region', function() {
   var Region = RailBaron.model.Region,
       City = RailBaron.model.City;

   describe('getCities', function() {

      it('returns the correct cities', function() {
         expect(Region.NORTHEAST.getCities()).to.eql([
            City.ALBANY,
            City.BALTIMORE,
            City.BOSTON,
            City.BUFFALO,
            City.NEW_YORK,
            City.PHILADELPHIA,
            City.PITTSBURGH,
            City.PORTLAND_ME,
            City.WASHINGTON,
         ]);
      });

   });

});
