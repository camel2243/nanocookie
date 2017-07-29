'use strict';

const cookie = require('./nanocookie.js');

if(typeof window !== 'undefined') {
  window.nanocookie = cookie;
}

module.exports = cookie;