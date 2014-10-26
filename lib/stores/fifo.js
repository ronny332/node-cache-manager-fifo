'use strict';

var Cache = require('../fifo-cache').Cache;

var memory_store = function (args) {
  args = args || {};
  var self = {};
  self.name = 'fifo';

  var fifo_opts = {
    max: +args.max || 500
  };
  
  var fifo_cache = new Cache(fifo_opts);

  self.set = function (key, value, ttl, cb) {
    fifo_cache.set(key, value);
    if (cb) {
      process.nextTick(cb);
    }
  };

  self.get = function (key, cb) {
    var value = fifo_cache.get(key);
    if (cb) {
      process.nextTick(function () {
        cb(null, value);
      });
    } else {
      return value;
    }
  };

  self.del = function (key, cb) {
    fifo_cache.del(key);
    if (cb) {
      process.nextTick(cb);
    }
  };

  self.reset = function (cb) {
    fifo_cache.reset();
    if (cb) {
      process.nextTick(cb);
    }
  };

  self.keys = function (cb) {
    var keys = fifo_cache.keys();
    if (cb) {
      process.nextTick(function () {
        cb(null, keys);
      });
    } else {
      return keys;
    }
  };

  return self;
};

var methods = {
  create: function (args) {
    return memory_store(args);
  }
};

module.exports = methods;