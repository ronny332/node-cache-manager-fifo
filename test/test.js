'use strict';

var cache_manager = require('cache-manager'),
  fifo_cache = require('../lib/stores/fifo');

var cache = cache_manager.caching({store: fifo_cache, max: 10});

for (var i = 0; i < 1000; ++i) {
  cache.set('test' + i, i);
}

cache.del('test997');
cache.del('test999');

console.log(cache.keys());

cache.reset();

console.log(cache.keys());