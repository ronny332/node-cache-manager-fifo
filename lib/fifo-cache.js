'use strict';

var Cache = function (options) {
  this._keys = {};
  this._store = new Array(+options.max || 500);

  this.reset();
};

Cache.prototype.del = function (key) {
  if (this._keys.hasOwnProperty(key)) {
    delete(this._keys[key]);
    return true;
  }
  return false;
};

Cache.prototype.get = function (key) {
  return this._keys.hasOwnProperty(key) ? this._keys[key][1] : null;
};

Cache.prototype.keys = function () {
  return Object.keys(this._keys);
};

Cache.prototype.reset = function () {
  for (var i = 0; i < this._store.length; ++i) {
    this._store[i] = [null, null];
  }
  this._keys = {};
};

Cache.prototype.set = function (key, value) {
  this._store.unshift([key, value]);
  this._keys[key] = this._store[0];
  delete(this._keys[this._store.pop()[0]]);
};

module.exports = {
  Cache: Cache
};