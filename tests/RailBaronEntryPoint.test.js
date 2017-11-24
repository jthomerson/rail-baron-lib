'use strict';

var expect = require('expect.js'),
    RailBaron = require('../src/index');

describe('RailBaron library', function() {

   describe('model', function() {

      it('has regions', function() {
         expect(RailBaron.model.Region).to.be.ok();
         expect(RailBaron.model.Region.NORTHEAST).to.be.ok();
         expect(RailBaron.model.Region.NORTHEAST.getName()).to.eql('Northeast');
      });

      it('has cities', function() {
         expect(RailBaron.model.City).to.be.ok();
         expect(RailBaron.model.City.NEW_YORK).to.be.ok();
         expect(RailBaron.model.City.NEW_YORK.getName()).to.eql('New York');
         expect(RailBaron.model.City.NEW_YORK.getRegion()).to.be(RailBaron.model.Region.NORTHEAST);
      });

   });

   describe('services', function() {

      it('has a destination service', function() {
         expect(RailBaron.services.destination).to.be.ok();
         expect(RailBaron.services.destination.lookupRegion).to.be.a('function');
      });

      it('has a payout service', function() {
         expect(RailBaron.services.payout).to.be.ok();
         expect(RailBaron.services.payout.lookupPayout).to.be.a('function');
      });

   });

});
