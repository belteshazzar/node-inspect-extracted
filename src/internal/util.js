'use strict';

import primordials from '../primordials.js';
const {
  ArrayPrototypeJoin,
  Error,
  ErrorIsError,
  FunctionPrototypeSymbolHasInstance,
  StringPrototypeReplace,
  SymbolFor,
} = primordials;

// eslint-disable-next-line no-control-regex
const colorRegExp = /\u001b\[\d\d?m/g;

export default {
  customInspectSymbol: SymbolFor('nodejs.util.inspect.custom'),
  isError(e) {
    // An error could be an instance of Error while not being a native error
    // or could be from a different realm and not be instance of Error but still
    // be a native error.
    // Error.isError added in node 24.
    return ErrorIsError?.(e) || FunctionPrototypeSymbolHasInstance(Error, e);
  },
  join: ArrayPrototypeJoin,
  removeColors(str) {
    return StringPrototypeReplace(str, colorRegExp, '');
  },
};
