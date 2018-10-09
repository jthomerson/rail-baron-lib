'use strict';

var expect = require('expect.js'),
    isOdd = require('../../src/services/is-odd');

describe('is-odd', function() {

   it('returns null for null or undefined', function() {
      expect(isOdd(null)).to.be(null);
      expect(isOdd(undefined)).to.be(null);
   });

   it('returns true for odd numbers', function() {
      expect(isOdd(1)).to.be(true);
      expect(isOdd(3)).to.be(true);
      expect(isOdd(5)).to.be(true);
      // really, it doesn't need to support these:
      expect(isOdd(7)).to.be(true);
      expect(isOdd(9)).to.be(true);
      expect(isOdd(11)).to.be(true);
   });

   it('returns false for even numbers', function() {
      expect(isOdd(2)).to.be(false);
      expect(isOdd(4)).to.be(false);
      expect(isOdd(6)).to.be(false);
      // really, it doesn't need to support these:
      expect(isOdd(8)).to.be(false);
      expect(isOdd(10)).to.be(false);
      expect(isOdd(812)).to.be(false);
   });

   it('works with strings 1-6', function() {
      expect(isOdd('1')).to.be(true);
      expect(isOdd('2')).to.be(false);
      expect(isOdd('3')).to.be(true);
      expect(isOdd('4')).to.be(false);
      expect(isOdd('5')).to.be(true);
      expect(isOdd('6')).to.be(false);
   });

   it('throws an error for strings out of range', function() {
      expect(isOdd.bind(null, '0')).to.throwError();
      expect(isOdd.bind(null, '7')).to.throwError();
   });

});
