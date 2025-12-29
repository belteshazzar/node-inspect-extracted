'use strict';

import util from '../src/inspect.js';
import assert from 'node:assert';

import('./fixture.mjs').then((m) => {
  assert(m);
  assert.strictEqual(util.inspect(m), '[Module: null prototype] { default: 4 }');

  const o = {
    default: 4,
    [Symbol.stringTag]: 'Module',
  };
  assert.notStrictEqual(util.inspect(o), '[Module: null prototype] { default: 4 }');
}, (e) => {
  // Node 10 doesn't have import
  assert(e.message, 'Not supported');
});
