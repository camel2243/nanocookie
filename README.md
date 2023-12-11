# nanocookie
> nano cookie library

[![Build Status](https://travis-ci.org/camel2243/nanocookie.svg?branch=master)](https://travis-ci.org/camel2243/nanocookie)
[![npm version](https://badge.fury.io/js/nanocookie.svg)](https://badge.fury.io/js/nanocookie)
[![Coverage Status](https://coveralls.io/repos/camel2243/nanocookie/badge.svg?branch=master)](https://coveralls.io/r/camel2243/nanocookie?branch=master)

nano vanilla.js cookie set, get and delete libray

nanocookie.min.js file size smaller than 1KB

## Quick Start

### Install npm package
* install nanocookie npm package
```
npm install nanocookie --save-dev
```

### Import library

* Import in ECMAScript 6
```
import cookie from 'nanocookie';
```

* Import in ECMAScript 5
```
var cookie = require('nanocookie');
```

* Use from browser global
```
<script src="path/to/nanocookie.min.js" />
<script>
  var cookie = window.nanocookie;
  //...
</script>
```

* Get Started
```
cookie.set('user', 'camel');  // set cookie user:camel
cookie.get('user');           // get cookie 'camel'
cookie.delete('user');        // delete cookie
```

## Documnet
### set(name, value, exdays)
Parameters:</br>
* `name`: String, cookie name
* `value`: String, cookie value
* `exdays`: Integer, expires days(default is 1 day)

### get(name)
Parameters:</br>
* `name`: String, cookie name

### delete(name)
Parameters:</br>
* `name`: String, cookie name