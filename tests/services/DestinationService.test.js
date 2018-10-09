'use strict';

var expect = require('expect.js'),
    RailBaron = require('../../src/index');

describe('DestinationService', function() {
   var svc = RailBaron.services.destination,
       City = RailBaron.model.City,
       Region = RailBaron.model.Region;

   describe('lookupRegion', function() {

      it('looks up the correct region', function() {
         expect(svc.lookupRegion(2, true)).to.eql(Region.PLAINS);
         expect(svc.lookupRegion(2, 3)).to.eql(Region.PLAINS);
         expect(svc.lookupRegion(2, '3')).to.eql(Region.PLAINS);
      });

      it('returns null when an invalid roll is given', function() {
         expect(svc.lookupRegion(14, null)).to.be(null);
         expect(svc.lookupRegion(4, null)).to.be(null);
      });

   });

   describe('lookupCity', function() {

      it('looks up the correct city', function() {
         expect(svc.lookupCity(Region.NORTHEAST, 2, true)).to.eql(City.NEW_YORK);
      });

      it('returns null when an invalid roll is given', function() {
         expect(svc.lookupCity(Region.NORTHEAST, 14, null)).to.be(null);
         expect(svc.lookupCity(Region.NORTHEAST, 4, null)).to.be(null);
      });

   });

});
