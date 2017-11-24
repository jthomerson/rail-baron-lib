'use strict';

var expect = require('expect.js'),
    RailBaron = require('../../src/index');

describe('PayoutService', function() {
   var svc = RailBaron.services.payout,
       City = RailBaron.model.City;

   describe('lookupPayout', function() {

      it('looks up the correct payout', function() {
         expect(svc.lookupPayout(City.SAN_ANTONIO, City.NEW_ORLEANS)).to.eql(5500);
      });

   });

   describe('_addPayout', function() {

      it('throws errors when needed', function() {
         expect(svc._addPayout.bind(svc, 'foo', 'bar', 200)).to.throwError();
         expect(svc._addPayout.bind(svc, 'SAN_ANTONIO', 'bar', 200)).to.throwError();
      });

   });

});
