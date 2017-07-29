/* global describe, beforeEach, afterEach, it */
'use strict';

const expect = require('chai').expect;
const cookie = require('../src/nanocookie.js');

describe('nanocookie', function() {
  beforeEach(function() {
    this.jsdom = require('jsdom-global')();
  });
  afterEach(function() {
    this.jsdom();
  });
  describe('set', function() {
    it('should set cookie successfully', function() {
      cookie.set('user', 'camel');

      expect(document.cookie).to.have.string('user=camel');
    }); 
  });
  describe('get', function() {
    it('should get correct cookie key/value successfully', function() {
      var date = new Date();
      var expires; 

      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      expires = "expires="+ date.toUTCString();
      document.cookie = 'user=camel;' + expires + ';path=/';

      expect(cookie.get('user')).to.equal('camel');
    });

    it('should get empty string while cookie key is nonexist', function() {
      var user = cookie.get('user123');

      expect(user).to.equal('');
    });
  });
  describe('delete', function() {
    it('should delete cookie successfully', function() {
      var date = new Date();
      var expires; 

      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      expires = "expires="+ date.toUTCString();
      document.cookie = 'user=camel;' + expires + ';path=/';

      cookie.delete('user');

      expect(document.cookie).to.not.have.string('user=camel');
    });
  });
});