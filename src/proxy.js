'use strict';

import primordials from './primordials.js';
const {
  Proxy,
  ProxyRevocable,
  SafeWeakMap,
} = primordials;
const ALL_PROXIES = new SafeWeakMap();

// Wrap Proxy's to remember their details.
class Prxy {
  constructor(target, handler) {
    const p = new Proxy(target, handler);
    ALL_PROXIES.set(p, [target, handler]);
    // eslint-disable-next-line no-constructor-return
    return p;
  }
  static getProxyDetails(obj, getFullProxy = true) {
    const deets = ALL_PROXIES.get(obj);
    if (!deets) {
      return undefined;
    }
    if (getFullProxy) {
      return deets;
    }
    return deets[0];
  }
  static revocable(target, handler) {
    const p = ProxyRevocable(target, handler);
    ALL_PROXIES.set(p.proxy, [target, handler]);
    const revoke = p.revoke;
    p.revoke = () => {
      ALL_PROXIES.set(p.proxy, [null, null]);
      revoke();
    };
    return p;
  }
}

export default {
  getProxyDetails: Prxy.getProxyDetails.bind(Prxy),
  Proxy: Prxy,
};
