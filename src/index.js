'use strict';

let cookie = require('./nanacookie.js');

if(typeof window !== 'undefined') {
  window.nanocookie = cookie;
}

module.exports = cookie;