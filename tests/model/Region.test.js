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

   describe('getAbbreviation', function() {
      it('returns the correct abbreviation', function() {
         expect(Region.NORTHEAST.getAbbreviation()).to.be('NE');
         expect(Region.SOUTHEAST.getAbbreviation()).to.be('SE');
         expect(Region.NORTH_CENTRAL.getAbbreviation()).to.be('NC');
         expect(Region.SOUTH_CENTRAL.getAbbreviation()).to.be('SC');
         expect(Region.PLAINS.getAbbreviation()).to.be('PL');
         expect(Region.NORTHWEST.getAbbreviation()).to.be('NW');
         expect(Region.SOUTHWEST.getAbbreviation()).to.be('SW');
      });
   });

   describe('find_by_abbreviation', function() {
      it('returns the correct region', function() {
         expect(Region.find_by_abbreviation('NE')).to.be(Region.NORTHEAST);
         expect(Region.find_by_abbreviation('SE')).to.be(Region.SOUTHEAST);
         expect(Region.find_by_abbreviation('NC')).to.be(Region.NORTH_CENTRAL);
         expect(Region.find_by_abbreviation('SC')).to.be(Region.SOUTH_CENTRAL);
         expect(Region.find_by_abbreviation('PL')).to.be(Region.PLAINS);
         expect(Region.find_by_abbreviation('NW')).to.be(Region.NORTHWEST);
         expect(Region.find_by_abbreviation('SW')).to.be(Region.SOUTHWEST);
      });

      it('returns undefined for incorrect abbreviations', function() {
         expect(Region.find_by_abbreviation('foo')).to.be(undefined);
      });
   });

});
