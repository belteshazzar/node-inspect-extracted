'use strict';

import types from '../../../src/internal/util/types.js';
const {
  isMap,
  isNativeError,
  isSet,
} = types;
import assert from 'node:assert';
import vm from 'node:vm';

assert(isNativeError(new Error()));

class FooError extends Error {}
assert(isNativeError(new FooError()));

class Foo {}
assert(!isNativeError(new Foo()));

const s = new Foo();
Object.setPrototypeOf(s, global.Set.prototype);
assert(!isSet(s));

const sv = vm.runInNewContext('new Set()', {});
assert(isSet(sv));

const sm = vm.runInNewContext('new Map()', {});
assert(isMap(sm));

class Map {
  has() { return false; }
  [Symbol.iterator]() {}
  size = 0;
}

assert(!isMap(new Map()));

class Set {
  has() { return false; }
  [Symbol.iterator]() {}
  size = 0;
}

assert(!isMap(new Set()));
