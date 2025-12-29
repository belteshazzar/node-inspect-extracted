'use strict';

import {
  ArrayPrototypeMap,
} from './primordials.js';

class Buffer {
  hexSlice(start = 0, end) {
    return ArrayPrototypeMap(
      this.slice(start, end),
      (x) => ('00' + x.toString(16)).slice(-2))
      .join('');
  }
}

export { Buffer };