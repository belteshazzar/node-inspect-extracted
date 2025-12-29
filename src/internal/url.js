'use strict';

import primordials from '../primordials.js';
const {
  StringPrototypeCharCodeAt,
  StringPrototypeIncludes,
  StringPrototypeReplace,
} = primordials;
import URL from '../url.js';
import constants from './constants.js';
const {
  CHAR_FORWARD_SLASH,
} = constants;
import pathMod from '../path.js';

const percentRegEx = /%/g;
const backslashRegEx = /\\/g;
const newlineRegEx = /\n/g;
const carriageReturnRegEx = /\r/g;
const tabRegEx = /\t/g;

function encodePathChars(filepath) {
  if (StringPrototypeIncludes(filepath, '%'))
    filepath = StringPrototypeReplace(filepath, percentRegEx, '%25');
  // In posix, backslash is a valid character in paths:
  if (StringPrototypeIncludes(filepath, '\\'))
    filepath = StringPrototypeReplace(filepath, backslashRegEx, '%5C');
  if (StringPrototypeIncludes(filepath, '\n'))
    filepath = StringPrototypeReplace(filepath, newlineRegEx, '%0A');
  if (StringPrototypeIncludes(filepath, '\r'))
    filepath = StringPrototypeReplace(filepath, carriageReturnRegEx, '%0D');
  if (StringPrototypeIncludes(filepath, '\t'))
    filepath = StringPrototypeReplace(filepath, tabRegEx, '%09');
  return filepath;
}

function pathToFileURL(filepath) {
  const outURL = new URL('file://');

  let resolved = pathMod.resolve(filepath);
  // path.resolve strips trailing slashes so we must add them back
  const filePathLast = StringPrototypeCharCodeAt(filepath,
                                                 filepath.length - 1);
  if ((filePathLast === CHAR_FORWARD_SLASH) &&
      resolved[resolved.length - 1] !== pathMod.sep)
    resolved += '/';
  outURL.pathname = encodePathChars(resolved);

  return outURL;
}

export default {
  pathToFileURL,
  URL,
};
