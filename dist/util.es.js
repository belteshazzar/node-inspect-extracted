var fr = Object.defineProperty;
var ar = (e, t, n) => t in e ? fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dt = (e, t, n) => ar(e, typeof t != "symbol" ? t + "" : t, n);
const g = { __proto__: null }, {
  defineProperty: z,
  getOwnPropertyDescriptor: W,
  ownKeys: ce
} = Reflect, { apply: cr, bind: on, call: ur } = Function.prototype, q = on.bind(ur);
g.uncurryThis = q;
const Xe = on.bind(cr);
g.applyBind = Xe;
const sn = [
  // 'ArrayPrototypeConcat' is omitted, because it performs the spread
  // on its own for arrays and array-likes with a truthy
  // @@isConcatSpreadable symbol property.
  "ArrayOf",
  "ArrayPrototypePush",
  "ArrayPrototypeUnshift",
  // 'FunctionPrototypeCall' is omitted, since there's 'ReflectApply'
  // and 'FunctionPrototypeApply'.
  "MathHypot",
  "MathMax",
  "MathMin",
  "StringFromCharCode",
  "StringFromCodePoint",
  "StringPrototypeConcat",
  "TypedArrayOf"
];
function ve(e) {
  return typeof e == "symbol" ? `Symbol${e.description[7].toUpperCase()}${e.description.slice(8)}` : `${e[0].toUpperCase()}${e.slice(1)}`;
}
function et(e, t, n, { enumerable: r, get: o, set: i }) {
  z(e, `${t}Get${n}`, {
    __proto__: null,
    value: q(o),
    enumerable: r
  }), i !== void 0 && z(e, `${t}Set${n}`, {
    __proto__: null,
    value: q(i),
    enumerable: r
  });
}
function ln(e, t, n) {
  for (const r of ce(e)) {
    const o = ve(r), i = W(e, r);
    if ("get" in i)
      et(t, n, o, i);
    else {
      const s = `${n}${o}`;
      z(t, s, { __proto__: null, ...i }), sn.includes(s) && z(t, `${s}Apply`, {
        __proto__: null,
        // `src` is bound as the `this` so that the static `this` points
        // to the object it was defined on,
        // e.g.: `ArrayOfApply` gets a `this` of `Array`:
        value: Xe(i.value, e)
      });
    }
  }
}
function yr(e, t, n) {
  for (const r of ce(e)) {
    const o = ve(r), i = W(e, r);
    if ("get" in i)
      et(t, n, o, i);
    else {
      const { value: s } = i;
      typeof s == "function" && (i.value = s.bind(e));
      const l = `${n}${o}`;
      z(t, l, { __proto__: null, ...i });
    }
  }
}
function Ae(e, t, n) {
  for (const r of ce(e)) {
    const o = ve(r), i = W(e, r);
    if ("get" in i)
      et(t, n, o, i);
    else {
      const { value: s } = i;
      typeof s == "function" && (i.value = q(s));
      const l = `${n}${o}`;
      z(t, l, { __proto__: null, ...i }), sn.includes(l) && z(t, `${l}Apply`, {
        __proto__: null,
        value: Xe(s)
      });
    }
  }
}
[
  "Proxy",
  "globalThis"
].forEach((e) => {
  g[e] = globalThis[e];
});
[
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent
].forEach((e) => {
  g[e.name] = e;
});
[
  escape,
  eval,
  unescape
].forEach((e) => {
  g[e.name] = e;
});
[
  "Atomics",
  "JSON",
  "Math",
  "Proxy",
  "Reflect"
].forEach((e) => {
  ln(globalThis[e], g, e);
});
[
  "AggregateError",
  "Array",
  "ArrayBuffer",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "FinalizationRegistry",
  "Float32Array",
  "Float64Array",
  "Function",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Map",
  "Number",
  "Object",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "TypeError",
  "URIError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakRef",
  "WeakSet"
].forEach((e) => {
  const t = globalThis[e];
  t && (g[e] = t, ln(t, g, e), Ae(t.prototype, g, `${e}Prototype`));
});
[
  "Promise"
].forEach((e) => {
  const t = globalThis[e];
  g[e] = t, yr(t, g, e), Ae(t.prototype, g, `${e}Prototype`);
});
[
  { name: "TypedArray", original: Reflect.getPrototypeOf(Uint8Array) },
  { name: "ArrayIterator", original: {
    prototype: Reflect.getPrototypeOf(Array.prototype[Symbol.iterator]())
  } },
  { name: "StringIterator", original: {
    prototype: Reflect.getPrototypeOf(String.prototype[Symbol.iterator]())
  } }
].forEach(({ name: e, original: t }) => {
  g[e] = t, Ae(t, g, e), Ae(t.prototype, g, `${e}Prototype`);
});
g.IteratorPrototype = Reflect.getPrototypeOf(g.ArrayIteratorPrototype);
const {
  // Array: ArrayConstructor,
  ArrayPrototypeForEach: fn,
  // ArrayPrototypeMap,
  ArrayPrototypePushApply: ht,
  ArrayPrototypeSlice: mt,
  FinalizationRegistry: $t,
  FunctionPrototypeCall: pr,
  Map: bt,
  // ObjectDefineProperties,
  // ObjectDefineProperty,
  ObjectFreeze: se,
  ObjectSetPrototypeOf: tt,
  // Promise,
  // PromisePrototypeThen,
  // PromiseResolve,
  // ReflectApply,
  // ReflectConstruct,
  // ReflectGet,
  // ReflectSet,
  RegExp: gr,
  // RegExpPrototype,
  // RegExpPrototypeExec,
  // RegExpPrototypeGetDotAll,
  // RegExpPrototypeGetFlags,
  // RegExpPrototypeGetGlobal,
  // RegExpPrototypeGetHasIndices,
  // RegExpPrototypeGetIgnoreCase,
  // RegExpPrototypeGetMultiline,
  // RegExpPrototypeGetSource,
  // RegExpPrototypeGetSticky,
  // RegExpPrototypeGetUnicode,
  Set: Pt,
  SymbolIterator: Ve,
  // SymbolMatch,
  // SymbolMatchAll,
  // SymbolReplace,
  // SymbolSearch,
  // SymbolSpecies,
  // SymbolSplit,
  WeakMap: St,
  WeakRef: At,
  WeakSet: wt
} = g, nt = (e, t) => {
  class n {
    constructor(o) {
      this._iterator = e(o);
    }
    next() {
      return t(this._iterator);
    }
    [Ve]() {
      return this;
    }
  }
  return tt(n.prototype, null), se(n.prototype), se(n), n;
};
g.SafeArrayIterator = nt(
  g.ArrayPrototypeSymbolIterator,
  g.ArrayIteratorPrototypeNext
);
g.SafeStringIterator = nt(
  g.StringPrototypeSymbolIterator,
  g.StringIteratorPrototypeNext
);
const Et = (e, t) => {
  fn(ce(e), (n) => {
    W(t, n) || z(
      t,
      n,
      { __proto__: null, ...W(e, n) }
    );
  });
}, U = (e, t) => {
  if (Ve in e.prototype) {
    const n = new e();
    let r;
    fn(ce(e.prototype), (o) => {
      if (!W(t.prototype, o)) {
        const i = W(e.prototype, o);
        if (typeof i.value == "function" && i.value.length === 0 && Ve in (pr(i.value, n) ?? {})) {
          const s = q(i.value);
          r = r || q(s(n).next);
          const l = nt(s, r);
          i.value = function() {
            return new l(this);
          };
        }
        z(t.prototype, o, { __proto__: null, ...i });
      }
    });
  } else
    Et(e.prototype, t.prototype);
  return Et(e, t), tt(t.prototype, null), se(t.prototype), se(t), t;
};
g.makeSafe = U;
g.SafeMap = U(
  bt,
  class extends bt {
  }
);
g.SafeWeakMap = U(
  St,
  class extends St {
  }
);
g.SafeSet = U(
  Pt,
  class extends Pt {
  }
);
g.SafeWeakSet = U(
  wt,
  class extends wt {
  }
);
g.SafeFinalizationRegistry = U(
  $t,
  class extends $t {
  }
);
g.SafeWeakRef = U(
  At,
  class extends At {
  }
);
g.AsyncIteratorPrototype = // TODO(@hildjj): understand why node's primordials is wrong here.
// primordials.ReflectGetPrototypeOf(
g.ReflectGetPrototypeOf(
  async function* () {
  }
).prototype;
g.internalBinding = (e) => {
  if (e === "config")
    return {
      hasIntl: !1
    };
  throw new Error(`unknown module: "${e}"`);
};
g._stringPrototypeReplaceAll = (e, t, n) => Object.prototype.toString.call(t).toLowerCase() === "[object regexp]" ? e.replace(t, n) : e.replace(new gr(t, "g"), n);
g.SafeArrayPrototypePushApply = (e, t) => {
  let n = 65536;
  if (n < t.length) {
    let r = 0;
    do
      ht(e, mt(t, r, r = n)), n += 65536;
    while (n < t.length);
    t = mt(t, r);
  }
  return ht(e, t);
};
g.StringPrototypeReplaceAll = g.StringPrototypeReplaceAll || g._stringPrototypeReplaceAll;
tt(g, null);
se(g);
const {
  Proxy: dr,
  ProxyRevocable: hr,
  SafeWeakMap: mr
} = g, pe = new mr();
class Ne {
  constructor(t, n) {
    const r = new dr(t, n);
    return pe.set(r, [t, n]), r;
  }
  static getProxyDetails(t, n = !0) {
    const r = pe.get(t);
    if (r)
      return n ? r : r[0];
  }
  static revocable(t, n) {
    const r = hr(t, n);
    pe.set(r.proxy, [t, n]);
    const o = r.revoke;
    return r.revoke = () => {
      pe.set(r.proxy, [null, null]), o();
    }, r;
  }
}
const Ot = {
  getProxyDetails: Ne.getProxyDetails.bind(Ne),
  Proxy: Ne
}, {
  BigInt: $r,
  Error: br,
  NumberParseInt: Pr,
  ObjectEntries: Sr,
  ObjectGetOwnPropertyDescriptor: Ar,
  ObjectGetOwnPropertyDescriptors: wr,
  ObjectGetOwnPropertySymbols: Er,
  ObjectPrototypeToString: Or,
  Symbol: an
} = g, _r = 0, $e = 2, _t = an("kPending"), Rr = an("kRejected");
function Lr(e, t = $e) {
  const n = wr(e), r = [];
  for (const [o, i] of Sr(n))
    if (!/^(0|[1-9][0-9]*)$/.test(o) || Pr(o, 10) >= 2 ** 32 - 1) {
      if (t === $e && !i.enumerable)
        continue;
      r.push(o);
    }
  for (const o of Er(e)) {
    const i = Ar(e, o);
    t === $e && !i.enumerable || r.push(o);
  }
  return r;
}
const cn = {
  constants: {
    kPending: _t,
    kRejected: Rr,
    ALL_PROPERTIES: _r,
    ONLY_ENUMERABLE: $e
  },
  getOwnNonIndexProperties: Lr,
  getPromiseDetails() {
    return [_t, void 0];
  },
  getProxyDetails: Ot.getProxyDetails,
  Proxy: Ot.Proxy,
  previewEntries(e) {
    return [[], !1];
  },
  getConstructorName(e) {
    var r;
    if (!e || typeof e != "object")
      throw new br("Invalid object");
    if ((r = e.constructor) != null && r.name)
      return e.constructor.name;
    const n = Or(e).match(/^\[object ([^\]]+)\]/);
    return n ? n[1] : "Object";
  },
  getExternalValue() {
    return $r(0);
  }
}, {
  ArrayPrototypeJoin: Ir,
  Error: kr,
  ErrorIsError: Be,
  FunctionPrototypeSymbolHasInstance: jr,
  StringPrototypeReplace: Nr,
  SymbolFor: Br
} = g, Cr = /\u001b\[\d\d?m/g, Fr = {
  customInspectSymbol: Br("nodejs.util.inspect.custom"),
  isError(e) {
    return (Be == null ? void 0 : Be(e)) || jr(kr, e);
  },
  join: Ir,
  removeColors(e) {
    return Nr(e, Cr, "");
  }
};
let Ce;
function un() {
  return Ce = Ce ?? rt.codes.ERR_INTERNAL_ASSERTION;
}
function oe(e, t) {
  if (!e) {
    const n = un();
    throw new n(t);
  }
}
function Mr(e) {
  const t = un();
  throw new t(e);
}
oe.fail = Mr;
const {
  // AggregateError,
  ArrayIsArray: xr,
  // ArrayPrototypeFilter,
  ArrayPrototypeIncludes: zr,
  ArrayPrototypeIndexOf: Tr,
  ArrayPrototypeJoin: Dr,
  // ArrayPrototypeMap,
  ArrayPrototypePush: ge,
  ArrayPrototypeSlice: Wr,
  ArrayPrototypeSplice: Gr,
  // ArrayPrototypeUnshift,
  Error: yn,
  ErrorCaptureStackTrace: Ur,
  // ErrorPrototypeToString,
  JSONStringify: Hr,
  // MapPrototypeGet,
  // MathAbs,
  // MathMax,
  // Number,
  // NumberIsInteger,
  // ObjectAssign,
  // ObjectDefineProperties,
  ObjectDefineProperty: Vr,
  ObjectGetPrototypeOf: Kr,
  // ObjectGetOwnPropertyDescriptor,
  // ObjectIsExtensible,
  // ObjectKeys,
  // ObjectPrototypeHasOwnProperty,
  // RangeError,
  ReflectApply: pn,
  RegExpPrototypeExec: Zr,
  // SafeArrayIterator,
  SafeMap: qr,
  SafeWeakMap: Jr,
  String: Yr,
  StringPrototypeEndsWith: Qr,
  StringPrototypeIncludes: Xr,
  StringPrototypeIndexOf: vr,
  StringPrototypeSlice: eo,
  // StringPrototypeSplit,
  // StringPrototypeStartsWith,
  StringPrototypeToLowerCase: Rt,
  Symbol: gn,
  // SymbolFor,
  // SyntaxError,
  // TextEncoder,
  TypeError: to
  // URIError,
} = g;
gn("kIsNodeError");
const dn = new qr(), hn = {}, no = /^[A-Z][a-zA-Z0-9]*$/, ro = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
];
new Jr();
function oo(e, t) {
  class n extends e {
    constructor(...i) {
      super();
      dt(this, "code", t);
      Vr(this, "message", {
        __proto__: null,
        value: so(t, i, this),
        enumerable: !1,
        writable: !0,
        configurable: !0
      });
    }
    // This is a workaround for wpt tests that expect that the error
    // constructor has a `name` property of the base class.
    // get ['constructor']() {
    //   return Base;
    // }
    // get [kIsNodeError]() {
    //   return true;
    // }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  }
  return n;
}
function io(e) {
  function t(...n) {
    try {
      return pn(e, this, n);
    } catch (r) {
      throw yn.stackTraceLimit && Ur(r, t), r;
    }
  }
  return t.withoutStackTrace = e, t;
}
function mn(e, t, n) {
  dn.set(e, t);
  const r = (
    // def === SystemError ?
    // makeSystemErrorWithCode(sym) :
    oo(n, e)
  );
  hn[e] = r;
}
function so(e, t, n) {
  const r = dn.get(e);
  if (typeof r == "function")
    return oe(
      r.length <= t.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${t.length}) does not match the required ones (${r.length}).`
    ), pn(r, n, t);
}
let Lt, Fe;
function lo(e) {
  if (Fe === void 0)
    try {
      let t = function() {
        t();
      };
      t();
    } catch (t) {
      Fe = t.message, Lt = t.name;
    }
  return e && e.name === Lt && e.message === Fe;
}
gn("kEnhanceStackBeforeInspector");
function fo(e) {
  if (e === null)
    return "null";
  if (e === void 0)
    return "undefined";
  switch (typeof e) {
    case "bigint":
      return `type bigint (${e}n)`;
    case "number":
      return e === 0 ? 1 / e === -1 / 0 ? "type number (-0)" : "type number (0)" : e !== e ? "type number (NaN)" : e === 1 / 0 ? "type number (Infinity)" : e === -1 / 0 ? "type number (-Infinity)" : `type number (${e})`;
    case "boolean":
      return e ? "type boolean (true)" : "type boolean (false)";
    case "symbol":
      return `type symbol (${Yr(e)})`;
    case "function":
      return `function ${e.name}`;
    case "object":
      return e.constructor && "name" in e.constructor ? `an instance of ${e.constructor.name}` : Kr(e) === null ? "[Object: null prototype]" : "[object Object]";
    case "string":
      return e.length > 28 && (e = `${eo(e, 0, 25)}...`), vr(e, "'") === -1 ? `type string ('${e}')` : `type string (${Hr(e)})`;
  }
}
function Me(e, t = "and") {
  switch (e.length) {
    case 0:
      return "";
    case 1:
      return `${e[0]}`;
    case 2:
      return `${e[0]} ${t} ${e[1]}`;
    case 3:
      return `${e[0]}, ${e[1]}, ${t} ${e[2]}`;
    default:
      return `${Dr(Wr(e, 0, -1), ", ")}, ${t} ${e[e.length - 1]}`;
  }
}
const rt = {
  // AbortError,
  // aggregateTwoErrors,
  // NodeAggregateError,
  codes: hn,
  // hideInternalStackFrames,
  hideStackFrames: io,
  // inspectWithNoCustomRetry,
  // isErrorStackTraceLimitWritable,
  isStackOverflowError: lo
};
mn("ERR_INTERNAL_ASSERTION", (e) => {
  const t = `This is caused by either a bug in Node.js or incorrect usage of Node.js internals.
Please open an issue with this stack trace at https://github.com/nodejs/node/issues
`;
  return e === void 0 ? t : `${e}
${t}`;
}, yn);
mn(
  "ERR_INVALID_ARG_TYPE",
  (e, t, n) => {
    oe(typeof e == "string", "'name' must be a string"), xr(t) || (t = [t]);
    let r = "The ";
    if (Qr(e, " argument"))
      r += `${e} `;
    else {
      const l = Xr(e, ".") ? "property" : "argument";
      r += `"${e}" ${l} `;
    }
    r += "must be ";
    const o = [], i = [], s = [];
    for (const l of t)
      oe(
        typeof l == "string",
        "All expected entries have to be of type string"
      ), zr(ro, l) ? ge(o, Rt(l)) : Zr(no, l) !== null ? ge(i, l) : (oe(
        l !== "object",
        'The value "object" should be written as "Object"'
      ), ge(s, l));
    if (i.length > 0) {
      const l = Tr(o, "object");
      l !== -1 && (Gr(o, l, 1), ge(i, "Object"));
    }
    return o.length > 0 && (r += `${o.length > 1 ? "one of type" : "of type"} ${Me(o, "or")}`, (i.length > 0 || s.length > 0) && (r += " or ")), i.length > 0 && (r += `an instance of ${Me(i, "or")}`, s.length > 0 && (r += " or ")), s.length > 0 && (s.length > 1 ? r += `one of ${Me(s, "or")}` : (Rt(s[0]) !== s[0] && (r += "an "), r += `${s[0]}`)), r += `. Received ${fo(n)}`, r;
  },
  to
);
const {
  ArrayIsArray: ao,
  BigInt: co,
  Boolean: uo,
  DatePrototype: yo,
  Error: po,
  FunctionPrototype: It,
  MapPrototypeHas: go,
  Number: ho,
  ObjectDefineProperty: mo,
  ObjectGetOwnPropertyDescriptor: $o,
  ObjectGetPrototypeOf: be,
  ObjectIsFrozen: bo,
  ObjectPrototype: we,
  SetPrototypeHas: Po,
  String: So,
  Symbol: Ao,
  SymbolToStringTag: wo,
  globalThis: $n
} = g, { getConstructorName: Eo } = cn;
(function() {
  typeof $n != "object" && (mo(we, "__magic__", {
    get: function() {
      return this;
    },
    configurable: !0
  }), __magic__.globalThis = __magic__, delete we.__magic__);
})();
function j(e, ...t) {
  for (const n of t) {
    const r = $n[n];
    if (r && e instanceof r)
      return !0;
  }
  for (; e; ) {
    if (typeof e != "object")
      return !1;
    if (t.indexOf(Eo(e)) >= 0)
      return !0;
    e = be(e);
  }
  return !1;
}
function ue(e) {
  return (t) => {
    if (!j(t, e.name))
      return !1;
    try {
      e.prototype.valueOf.call(t);
    } catch {
      return !1;
    }
    return !0;
  };
}
const kt = ue(So), jt = ue(ho), Nt = ue(uo), Bt = ue(co), Oo = ue(Ao), _o = {
  isAsyncFunction(e) {
    return typeof e == "function" && It.toString.call(e).startsWith("async");
  },
  isGeneratorFunction(e) {
    return typeof e == "function" && It.toString.call(e).match(/^(async\s+)?function *\*/);
  },
  isAnyArrayBuffer(e) {
    return j(e, "ArrayBuffer", "SharedArrayBuffer");
  },
  isArrayBuffer(e) {
    return j(e, "ArrayBuffer");
  },
  isArgumentsObject(e) {
    if (e !== null && typeof e == "object" && !ao(e) && typeof e.length == "number" && e.length === (e.length | 0) && e.length >= 0) {
      const n = $o(e, "callee");
      return n && !n.enumerable;
    }
    return !1;
  },
  isBoxedPrimitive(e) {
    return jt(e) || kt(e) || Nt(e) || Bt(e) || Oo(e);
  },
  isDataView(e) {
    return j(e, "DataView");
  },
  isExternal(e) {
    return typeof e == "object" && bo(e) && be(e) == null;
  },
  isMap(e) {
    if (!j(e, "Map"))
      return !1;
    try {
      go(e);
    } catch {
      return !1;
    }
    return !0;
  },
  isMapIterator(e) {
    return we.toString.call(be(e)) === "[object Map Iterator]";
  },
  isModuleNamespaceObject(e) {
    try {
      return e && typeof e == "object" && e[wo] === "Module";
    } catch {
      return !1;
    }
  },
  isNativeError(e) {
    return e instanceof po && j(
      e,
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
      "AggregateError"
    );
  },
  isPromise(e) {
    return j(e, "Promise");
  },
  isSet(e) {
    if (!j(e, "Set"))
      return !1;
    try {
      Po(e);
    } catch {
      return !1;
    }
    return !0;
  },
  isSetIterator(e) {
    return we.toString.call(be(e)) === "[object Set Iterator]";
  },
  isWeakMap(e) {
    return j(e, "WeakMap");
  },
  isWeakSet(e) {
    return j(e, "WeakSet");
  },
  isRegExp(e) {
    return j(e, "RegExp");
  },
  isDate(e) {
    if (j(e, "Date"))
      try {
        return yo.getTime.call(e), !0;
      } catch {
      }
    return !1;
  },
  isTypedArray(e) {
    return j(
      e,
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array"
    );
  },
  isStringObject: kt,
  isNumberObject: jt,
  isBooleanObject: Nt,
  isBigIntObject: Bt
}, Ro = [
  "_http_agent",
  "_http_client",
  "_http_common",
  "_http_incoming",
  "_http_outgoing",
  "_http_server",
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_wrap",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap",
  "assert",
  "assert/strict",
  "async_hooks",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "domain",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "module",
  "Module",
  "net",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "readline/promises",
  "repl",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "trace_events",
  "tty",
  "url",
  "util",
  "util/types",
  "v8",
  "vm",
  "wasi",
  "worker_threads",
  "zlib"
], Lo = {
  exists(e) {
    return e === "internal/modules/cjs/foo" ? !1 : e.startsWith("internal/") || Ro.indexOf(e) !== -1;
  }
}, {
  ArrayIsArray: Ct
} = g, {
  hideStackFrames: Io,
  codes: {
    ERR_INVALID_ARG_TYPE: K
  }
} = rt, Ft = 0, ko = 1, bn = 2, jo = 4, No = Io(
  (e, t, n = Ft) => {
    if (n === Ft) {
      if (e === null || Ct(e))
        throw new K(t, "Object", e);
      if (typeof e != "object")
        throw new K(t, "Object", e);
    } else {
      if ((ko & n) === 0 && e === null)
        throw new K(t, "Object", e);
      if ((bn & n) === 0 && Ct(e))
        throw new K(t, "Object", e);
      const i = (jo & n) === 0, s = typeof e;
      if (s !== "object" && (i || s !== "function"))
        throw new K(t, "Object", e);
    }
  }
);
function Bo(e, t) {
  if (typeof e != "string")
    throw new K(t, "string", e);
}
const Pn = {
  kValidateObjectAllowArray: bn,
  validateObject: No,
  validateString: Bo
}, Sn = URL, An = {
  // Non-alphabetic chars.
  CHAR_DOT: 46,
  /* . */
  CHAR_FORWARD_SLASH: 47
}, {
  StringPrototypeCharCodeAt: Z,
  StringPrototypeLastIndexOf: Mt,
  StringPrototypeSlice: xe
} = g, {
  CHAR_DOT: ze,
  CHAR_FORWARD_SLASH: ie
} = An, {
  validateString: Co
} = Pn;
function xt() {
  return "/";
}
function wn(e) {
  return e === ie;
}
function En(e, t, n, r) {
  let o = "", i = 0, s = -1, l = 0, f = 0;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length)
      f = Z(e, c);
    else {
      if (r(f))
        break;
      f = ie;
    }
    if (r(f)) {
      if (!(s === c - 1 || l === 1)) if (l === 2) {
        if (o.length < 2 || i !== 2 || Z(o, o.length - 1) !== ze || Z(o, o.length - 2) !== ze) {
          if (o.length > 2) {
            const a = Mt(o, n);
            a === -1 ? (o = "", i = 0) : (o = xe(o, 0, a), i = o.length - 1 - Mt(o, n)), s = c, l = 0;
            continue;
          } else if (o.length !== 0) {
            o = "", i = 0, s = c, l = 0;
            continue;
          }
        }
        t && (o += o.length > 0 ? `${n}..` : "..", i = 2);
      } else
        o.length > 0 ? o += `${n}${xe(e, s + 1, c)}` : o = xe(e, s + 1, c), i = c - s - 1;
      s = c, l = 0;
    } else f === ze && l !== -1 ? ++l : l = -1;
  }
  return o;
}
function Fo(...e) {
  if (e.length === 0 || e.length === 1 && (e[0] === "" || e[0] === ".")) {
    const r = xt();
    if (Z(r, 0) === ie)
      return r;
  }
  let t = "", n = !1;
  for (let r = e.length - 1; r >= 0 && !n; r--) {
    const o = e[r];
    Co(o, `paths[${r}]`), o.length !== 0 && (t = `${o}/${t}`, n = Z(o, 0) === ie);
  }
  if (!n) {
    const r = xt();
    t = `${r}/${t}`, n = Z(r, 0) === ie;
  }
  return t = En(t, !n, "/", wn), n ? `/${t}` : t.length > 0 ? t : ".";
}
const zt = {
  isPosixPathSeparator: wn,
  normalizeString: En,
  resolve: Fo,
  sep: "/"
}, {
  StringPrototypeCharCodeAt: Mo,
  StringPrototypeIncludes: ee,
  StringPrototypeReplace: te
} = g, {
  CHAR_FORWARD_SLASH: xo
} = An, zo = /%/g, To = /\\/g, Do = /\n/g, Wo = /\r/g, Go = /\t/g;
function Uo(e) {
  return ee(e, "%") && (e = te(e, zo, "%25")), ee(e, "\\") && (e = te(e, To, "%5C")), ee(e, `
`) && (e = te(e, Do, "%0A")), ee(e, "\r") && (e = te(e, Wo, "%0D")), ee(e, "	") && (e = te(e, Go, "%09")), e;
}
function Ho(e) {
  const t = new Sn("file://");
  let n = zt.resolve(e);
  return Mo(
    e,
    e.length - 1
  ) === xo && n[n.length - 1] !== zt.sep && (n += "/"), t.pathname = Uo(n), t;
}
const Vo = {
  pathToFileURL: Ho,
  URL: Sn
}, {
  AggregateError: Ko,
  AggregateErrorPrototype: Zo,
  Array: X,
  ArrayBuffer: qo,
  ArrayBufferPrototype: Jo,
  ArrayIsArray: On,
  ArrayPrototype: Yo,
  ArrayPrototypeFilter: _n,
  ArrayPrototypeForEach: Qo,
  ArrayPrototypeIncludes: Tt,
  ArrayPrototypeIndexOf: Pe,
  ArrayPrototypeJoin: Rn,
  ArrayPrototypeMap: Xo,
  ArrayPrototypePop: vo,
  ArrayPrototypePush: S,
  ArrayPrototypePushApply: Ke,
  ArrayPrototypeSlice: ei,
  ArrayPrototypeSort: Ee,
  ArrayPrototypeSplice: Se,
  ArrayPrototypeUnshift: ti,
  BigIntPrototypeValueOf: ni,
  Boolean: ri,
  BooleanPrototype: oi,
  BooleanPrototypeValueOf: ii,
  DataView: si,
  DataViewPrototype: li,
  Date: fi,
  DatePrototype: ai,
  DatePrototypeGetTime: ci,
  DatePrototypeToISOString: ui,
  DatePrototypeToString: yi,
  Error: Ln,
  ErrorPrototype: pi,
  ErrorPrototypeToString: Dt,
  Function: gi,
  FunctionPrototype: di,
  FunctionPrototypeBind: D,
  FunctionPrototypeCall: In,
  FunctionPrototypeSymbolHasInstance: kn,
  FunctionPrototypeToString: hi,
  JSONStringify: Wt,
  Map: mi,
  MapPrototype: $i,
  MapPrototypeEntries: bi,
  MapPrototypeGetSize: Pi,
  MathFloor: Si,
  MathMax: H,
  MathMin: F,
  MathRound: Ai,
  MathSqrt: Gt,
  MathTrunc: wi,
  Number: jn,
  NumberIsFinite: Ei,
  NumberIsNaN: Nn,
  NumberParseFloat: Oi,
  NumberParseInt: _i,
  NumberPrototype: Ri,
  NumberPrototypeToString: Bn,
  NumberPrototypeValueOf: Li,
  Object: Cn,
  ObjectAssign: Fn,
  ObjectDefineProperty: Mn,
  ObjectGetOwnPropertyDescriptor: G,
  ObjectGetOwnPropertyNames: Ze,
  ObjectGetOwnPropertySymbols: xn,
  ObjectGetPrototypeOf: _e,
  ObjectIs: Ii,
  ObjectKeys: Re,
  ObjectPrototype: ki,
  ObjectPrototypeHasOwnProperty: M,
  ObjectPrototypePropertyIsEnumerable: zn,
  ObjectPrototypeToString: ji,
  ObjectSeal: Ni,
  ObjectSetPrototypeOf: Ut,
  Promise: Bi,
  PromisePrototype: Ci,
  RangeError: Fi,
  RangeErrorPrototype: Mi,
  ReflectApply: xi,
  ReflectOwnKeys: zi,
  RegExp: ot,
  RegExpPrototype: Ti,
  RegExpPrototypeExec: T,
  RegExpPrototypeSymbolReplace: ye,
  RegExpPrototypeSymbolSplit: Di,
  RegExpPrototypeToString: Wi,
  SafeMap: it,
  SafeSet: st,
  SafeStringIterator: Gi,
  Set: Ui,
  SetPrototype: Hi,
  SetPrototypeGetSize: Vi,
  SetPrototypeValues: Ki,
  String: v,
  StringPrototype: Zi,
  StringPrototypeCharCodeAt: le,
  StringPrototypeCodePointAt: qi,
  StringPrototypeEndsWith: Tn,
  StringPrototypeIncludes: C,
  StringPrototypeIndexOf: x,
  StringPrototypeLastIndexOf: Ji,
  StringPrototypeNormalize: Yi,
  StringPrototypePadEnd: Qi,
  StringPrototypePadStart: Te,
  StringPrototypeRepeat: J,
  StringPrototypeReplace: Xi,
  StringPrototypeReplaceAll: Dn,
  StringPrototypeSlice: h,
  StringPrototypeSplit: qe,
  StringPrototypeStartsWith: Wn,
  StringPrototypeToLowerCase: vi,
  StringPrototypeValueOf: es,
  SymbolIterator: ts,
  SymbolPrototypeToString: Gn,
  SymbolPrototypeValueOf: ns,
  SymbolToPrimitive: ne,
  SymbolToStringTag: Ht,
  TypeError: rs,
  TypeErrorPrototype: os,
  TypedArray: is,
  TypedArrayPrototype: ss,
  TypedArrayPrototypeGetLength: ls,
  TypedArrayPrototypeGetSymbolToStringTag: fs,
  Uint8Array: as,
  WeakMap: cs,
  WeakMapPrototype: us,
  WeakSet: ys,
  WeakSetPrototype: ps,
  globalThis: gs,
  internalBinding: ds,
  uncurryThis: Yl
} = g, {
  constants: {
    ALL_PROPERTIES: hs,
    ONLY_ENUMERABLE: ms,
    kPending: $s,
    kRejected: bs
  },
  getOwnNonIndexProperties: Vt,
  getPromiseDetails: Ps,
  getProxyDetails: Un,
  previewEntries: lt,
  getConstructorName: Hn,
  getExternalValue: Ss,
  // eslint-disable-next-line node-core/prefer-primordials
  Proxy: As
} = cn, {
  customInspectSymbol: Vn,
  isError: Kn,
  join: de,
  removeColors: ws
} = Fr, {
  isStackOverflowError: Es
} = rt, {
  isAsyncFunction: Os,
  isGeneratorFunction: _s,
  isAnyArrayBuffer: Rs,
  isArrayBuffer: Ls,
  isArgumentsObject: Is,
  isBoxedPrimitive: ks,
  isDataView: js,
  isExternal: Ns,
  isMap: Bs,
  isMapIterator: Cs,
  isModuleNamespaceObject: Zn,
  isNativeError: qn,
  isPromise: Fs,
  isSet: Ms,
  isSetIterator: xs,
  isWeakMap: zs,
  isWeakSet: Ts,
  isRegExp: Ds,
  isDate: Ws,
  isTypedArray: Gs,
  isStringObject: Us,
  isNumberObject: Hs,
  isBooleanObject: Vs,
  isBigIntObject: Ks
} = _o, {
  validateObject: Jn,
  validateString: Zs,
  kValidateObjectAllowArray: qs
} = Pn;
function Le(e, t) {
  if (!e)
    throw new Ln("Assertion failed");
}
let De, ft = Vo, We;
function Js(e) {
  return ft.pathToFileURL(e).href;
}
function Ys(e) {
  return typeof e.href == "string" && e instanceof ft.URL;
}
function Qs(e) {
  return We = We || xn(new ft.URL("http://user:pass@localhost:8080/?foo=bar#baz")), e.filter((t) => We[t] === -1);
}
const at = new st(
  _n(
    Ze(gs),
    (e) => T(/^[A-Z][a-zA-Z0-9]+$/, e) !== null
  )
), Yn = (e) => typeof e > "u" && e !== void 0, E = Ni({
  showHidden: !1,
  depth: 2,
  colors: !1,
  customInspect: !0,
  showProxy: !1,
  maxArrayLength: 100,
  maxStringLength: 1e4,
  breakLength: 80,
  compact: 3,
  sorted: !1,
  getters: !1,
  numericSeparator: !1
}), Y = 0, ct = 1, fe = 2, Xs = new RegExp("[\\x00-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), Qn = new RegExp("[\\x00-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g"), vs = new RegExp("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), el = new RegExp("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g"), tl = /^[a-zA-Z_][a-zA-Z_0-9]*$/, nl = /^(0|[1-9][0-9]*)$/, rl = /^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/, ol = /^(\s+[^(]*?)\s*{/, il = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g, sl = 16, Ie = 0, ll = 1, fl = 2, Oe = [
  "\\x00",
  "\\x01",
  "\\x02",
  "\\x03",
  "\\x04",
  "\\x05",
  "\\x06",
  "\\x07",
  // x07
  "\\b",
  "\\t",
  "\\n",
  "\\x0B",
  "\\f",
  "\\r",
  "\\x0E",
  "\\x0F",
  // x0F
  "\\x10",
  "\\x11",
  "\\x12",
  "\\x13",
  "\\x14",
  "\\x15",
  "\\x16",
  "\\x17",
  // x17
  "\\x18",
  "\\x19",
  "\\x1A",
  "\\x1B",
  "\\x1C",
  "\\x1D",
  "\\x1E",
  "\\x1F",
  // x1F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\'",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // x2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // x3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // x4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // x5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // x6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\x7F",
  // x7F
  "\\x80",
  "\\x81",
  "\\x82",
  "\\x83",
  "\\x84",
  "\\x85",
  "\\x86",
  "\\x87",
  // x87
  "\\x88",
  "\\x89",
  "\\x8A",
  "\\x8B",
  "\\x8C",
  "\\x8D",
  "\\x8E",
  "\\x8F",
  // x8F
  "\\x90",
  "\\x91",
  "\\x92",
  "\\x93",
  "\\x94",
  "\\x95",
  "\\x96",
  "\\x97",
  // x97
  "\\x98",
  "\\x99",
  "\\x9A",
  "\\x9B",
  "\\x9C",
  "\\x9D",
  "\\x9E",
  "\\x9F"
  // x9F
], al = new ot(
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/\\#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/\\#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
  "g"
);
let ke;
function cl(e, t) {
  const n = {
    stylize: e.stylize,
    showHidden: e.showHidden,
    depth: e.depth,
    colors: e.colors,
    customInspect: e.customInspect,
    showProxy: e.showProxy,
    maxArrayLength: e.maxArrayLength,
    maxStringLength: e.maxStringLength,
    breakLength: e.breakLength,
    compact: e.compact,
    sorted: e.sorted,
    getters: e.getters,
    numericSeparator: e.numericSeparator,
    ...e.userOptions
  };
  if (t) {
    Ut(n, null);
    for (const r of Re(n))
      (typeof n[r] == "object" || typeof n[r] == "function") && n[r] !== null && delete n[r];
    n.stylize = Ut((r, o) => {
      let i;
      try {
        i = `${e.stylize(r, o)}`;
      } catch {
      }
      return typeof i != "string" ? r : i;
    }, null);
  }
  return n;
}
function A(e, t) {
  const n = {
    budget: {},
    indentationLvl: 0,
    seen: [],
    currentDepth: 0,
    stylize: ae,
    showHidden: E.showHidden,
    depth: E.depth,
    colors: E.colors,
    customInspect: E.customInspect,
    showProxy: E.showProxy,
    maxArrayLength: E.maxArrayLength,
    maxStringLength: E.maxStringLength,
    breakLength: E.breakLength,
    compact: E.compact,
    sorted: E.sorted,
    getters: E.getters,
    numericSeparator: E.numericSeparator
  };
  if (arguments.length > 1) {
    if (arguments.length > 2 && (arguments[2] !== void 0 && (n.depth = arguments[2]), arguments.length > 3 && arguments[3] !== void 0 && (n.colors = arguments[3])), typeof t == "boolean")
      n.showHidden = t;
    else if (t) {
      const r = Re(t);
      for (let o = 0; o < r.length; ++o) {
        const i = r[o];
        M(E, i) || i === "stylize" ? n[i] = t[i] : n.userOptions === void 0 && (n.userOptions = t);
      }
    }
  }
  return n.colors && (n.stylize = vn), n.maxArrayLength === null && (n.maxArrayLength = 1 / 0), n.maxStringLength === null && (n.maxStringLength = 1 / 0), O(n, e, 0);
}
A.custom = Vn;
Mn(A, "defaultOptions", {
  __proto__: null,
  get() {
    return E;
  },
  set(e) {
    return Jn(e, "options"), Fn(E, e);
  }
});
const _ = 39, R = 49;
A.colors = {
  __proto__: null,
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  // Alias: faint
  italic: [3, 23],
  underline: [4, 24],
  blink: [5, 25],
  // Swap foreground and background colors
  inverse: [7, 27],
  // Alias: swapcolors, swapColors
  hidden: [8, 28],
  // Alias: conceal
  strikethrough: [9, 29],
  // Alias: strikeThrough, crossedout, crossedOut
  doubleunderline: [21, 24],
  // Alias: doubleUnderline
  black: [30, _],
  red: [31, _],
  green: [32, _],
  yellow: [33, _],
  blue: [34, _],
  magenta: [35, _],
  cyan: [36, _],
  white: [37, _],
  bgBlack: [40, R],
  bgRed: [41, R],
  bgGreen: [42, R],
  bgYellow: [43, R],
  bgBlue: [44, R],
  bgMagenta: [45, R],
  bgCyan: [46, R],
  bgWhite: [47, R],
  framed: [51, 54],
  overlined: [53, 55],
  gray: [90, _],
  // Alias: grey, blackBright
  redBright: [91, _],
  greenBright: [92, _],
  yellowBright: [93, _],
  blueBright: [94, _],
  magentaBright: [95, _],
  cyanBright: [96, _],
  whiteBright: [97, _],
  bgGray: [100, R],
  // Alias: bgGrey, bgBlackBright
  bgRedBright: [101, R],
  bgGreenBright: [102, R],
  bgYellowBright: [103, R],
  bgBlueBright: [104, R],
  bgMagentaBright: [105, R],
  bgCyanBright: [106, R],
  bgWhiteBright: [107, R]
};
function B(e, t) {
  Mn(A.colors, t, {
    __proto__: null,
    get() {
      return this[e];
    },
    set(n) {
      this[e] = n;
    },
    configurable: !0,
    enumerable: !1
  });
}
B("gray", "grey");
B("gray", "blackBright");
B("bgGray", "bgGrey");
B("bgGray", "bgBlackBright");
B("dim", "faint");
B("strikethrough", "crossedout");
B("strikethrough", "strikeThrough");
B("strikethrough", "crossedOut");
B("hidden", "conceal");
B("inverse", "swapColors");
B("inverse", "swapcolors");
B("doubleunderline", "doubleUnderline");
A.styles = Fn({ __proto__: null }, {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  // "name": intentionally not styling
  regexp: Je,
  module: "underline"
});
A.styles.regexp.colors = ["green", "red", "yellow", "cyan", "magenta"];
const ul = A.styles.regexp.colors.slice();
function Je(e) {
  var a;
  let t = "", n = 0, r = 0, o = !1;
  const s = (((a = Je.colors) == null ? void 0 : a.length) > 0 ? Je.colors : ul).reduce((y, u) => {
    const p = A.colors[u];
    return p && y.push([`\x1B[${p[0]}m`, `\x1B[${p[1]}m`]), y;
  }, []);
  function l(y, u, p = 1) {
    let m = "";
    for (n++; n < e.length && e[n] !== u; )
      m += e[n++];
    n < e.length ? (r -= p, f(y), c(m, 1, 1), f(u), r += p) : c(y, 1, -m.length);
  }
  const f = (y) => {
    const u = r % s.length, p = s[u] ?? s[0];
    return t += p[0] + y + p[1], u;
  };
  function c(y, u, p) {
    r += u, f(y), r -= u, n += p;
  }
  for (f("/"), r++, n = 1; n < e.length; ) {
    const y = e[n];
    if (o)
      if (y === "\\") {
        let u = "\\";
        if (n++, n < e.length) {
          u += e[n++];
          const p = u[1];
          if (p === "u" && e[n] === "{") {
            l(`${u}{`, "}", 0);
            continue;
          } else if ((p === "p" || p === "P") && e[n] === "{") {
            l(`${u}{`, "}", 0);
            continue;
          } else u[1] === "x" && (u += e.slice(n, n + 2), n += 2);
        }
        f(u);
      } else y === "]" ? (r--, f("]"), n++, o = !1) : y === "-" && e[n - 1] !== "[" && n + 1 < e.length && e[n + 1] !== "]" ? c("-", 1, 1) : (f(y), n++);
    else if (y === "[")
      f("["), r++, n++, o = !0;
    else if (y === "(") {
      if (f("("), r++, n++, n < e.length && e[n] === "?") {
        n++;
        const u = n < e.length ? e[n] : "";
        if (u === ":" || u === "=" || u === "!")
          c(`?${u}`, -1, 1);
        else {
          const p = n + 1 < e.length ? e[n + 1] : "";
          if (u === "<" && (p === "=" || p === "!"))
            c(`?<${p}`, -1, 2);
          else if (u === "<") {
            n++;
            const m = n;
            for (; n < e.length && e[n] !== ">"; )
              n++;
            const P = e.slice(m, n);
            n < e.length && e[n] === ">" ? (r--, f("?<"), c(P, 1, 0), f(">"), r++, n++) : (c("?<", -1, 0), f(P));
          } else
            f("?");
        }
      }
    } else if (y === ")")
      r--, f(")"), n++;
    else if (y === "\\") {
      let u = "\\";
      if (n++, n < e.length) {
        u += e[n++];
        const p = u[1];
        if (n < e.length) {
          if (p === "u" && e[n] === "{") {
            l(`${u}{`, "}", 0);
            continue;
          } else if (p === "x")
            u += e.slice(n, n + 2), n += 2;
          else if (p >= "0" && p <= "9")
            for (; n < e.length && e[n] >= "0" && e[n] <= "9"; )
              u += e[n++];
          else if (p === "k" && e[n] === "<") {
            l(`${u}<`, ">");
            continue;
          } else if ((p === "p" || p === "P") && e[n] === "{") {
            l(`${u}{`, "}", 0);
            continue;
          }
        }
      }
      c(u, 1, 0);
    } else if (y === "|" || y === "+" || y === "*" || y === "?" || y === "," || y === "^" || y === "$")
      c(y, 3, 1);
    else if (y === "{") {
      n++;
      let u = "";
      for (; n < e.length && e[n] >= "0" && e[n] <= "9"; )
        u += e[n++];
      if (u && (f("{"), r++, c(u, 1, 0)), n < e.length) {
        if (e[n] === ",")
          u || (f("{"), r++), f(","), n++;
        else if (!u) {
          r += 1, f("{"), r -= 1;
          continue;
        }
      }
      let p = "";
      for (; n < e.length && e[n] >= "0" && e[n] <= "9"; )
        p += e[n++];
      p && c(p, 1, 0), n < e.length && e[n] === "}" && (r--, f("}"), n++), n < e.length && e[n] === "?" && c("?", 3, 1);
    } else if (y === ".")
      c(y, 2, 1);
    else {
      if (y === "/")
        break;
      c(y, 1, 1);
    }
  }
  return c("/", -1, 1), n < e.length && f(e.slice(n)), t;
}
function Ge(e, t) {
  return t === -1 ? `"${e}"` : t === -2 ? `\`${e}\`` : `'${e}'`;
}
function Xn(e) {
  const t = le(e);
  return Oe.length > t ? Oe[t] : `\\u${Bn(t, 16)}`;
}
function Ye(e) {
  let t = Xs, n = Qn, r = 39;
  if (C(e, "'") && (C(e, '"') ? !C(e, "`") && !C(e, "${") && (r = -2) : r = -1, r !== 39 && (t = vs, n = el)), e.length < 5e3 && T(t, e) === null)
    return Ge(e, r);
  if (e.length > 100)
    return e = ye(n, e, Xn), Ge(e, r);
  let o = "", i = 0;
  for (let s = 0; s < e.length; s++) {
    const l = le(e, s);
    if (l === r || l === 92 || l < 32 || l > 126 && l < 160)
      i === s ? o += Oe[l] : o += `${h(e, i, s)}${Oe[l]}`, i = s + 1;
    else if (l >= 55296 && l <= 57343) {
      if (l <= 56319 && s + 1 < e.length) {
        const f = le(e, s + 1);
        if (f >= 56320 && f <= 57343) {
          s++;
          continue;
        }
      }
      o += `${h(e, i, s)}\\u${Bn(l, 16)}`, i = s + 1;
    }
  }
  return i !== e.length && (o += h(e, i)), Ge(o, r);
}
function vn(e, t) {
  const n = A.styles[t];
  if (n !== void 0) {
    const r = A.colors[n];
    if (r !== void 0)
      return `\x1B[${r[0]}m${e}\x1B[${r[1]}m`;
    if (typeof n == "function")
      return n(e);
  }
  return e;
}
function ae(e) {
  return e;
}
function yl() {
  return [];
}
function pl(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
const gl = new it().set(Yo, { name: "Array", constructor: X }).set(Jo, { name: "ArrayBuffer", constructor: qo }).set(di, { name: "Function", constructor: gi }).set($i, { name: "Map", constructor: mi }).set(Hi, { name: "Set", constructor: Ui }).set(ki, { name: "Object", constructor: Cn }).set(ss, { name: "TypedArray", constructor: is }).set(Ti, { name: "RegExp", constructor: ot }).set(ai, { name: "Date", constructor: fi }).set(li, { name: "DataView", constructor: si }).set(pi, { name: "Error", constructor: Ln }).set(Zo, { name: "AggregateError", constructor: Ko }).set(Mi, { name: "RangeError", constructor: Fi }).set(os, { name: "TypeError", constructor: rs }).set(oi, { name: "Boolean", constructor: ri }).set(Ri, { name: "Number", constructor: jn }).set(Zi, { name: "String", constructor: v }).set(Ci, { name: "Promise", constructor: Bi }).set(us, { name: "WeakMap", constructor: cs }).set(ps, { name: "WeakSet", constructor: ys });
function er(e, t, n, r) {
  let o;
  const i = e;
  for (; e || Yn(e); ) {
    const f = gl.get(e);
    if (f !== void 0) {
      const { name: a, constructor: y } = f;
      if (kn(y, i))
        return r !== void 0 && o !== e && Kt(
          t,
          i,
          o || i,
          n,
          r
        ), a;
    }
    const c = G(e, "constructor");
    if (c !== void 0 && typeof c.value == "function" && c.value.name !== "" && pl(i, c.value))
      return r !== void 0 && (o !== e || !at.has(c.value.name)) && Kt(
        t,
        i,
        o || i,
        n,
        r
      ), v(c.value.name);
    e = _e(e), o === void 0 && (o = e);
  }
  if (o === null)
    return null;
  const s = Hn(i);
  if (n > t.depth && t.depth !== null)
    return `${s} <Complex prototype>`;
  const l = er(
    o,
    t,
    n + 1,
    r
  );
  return l === null ? `${s} <${A(o, {
    ...t,
    customInspect: !1,
    depth: -1
  })}>` : `${s} <${l}>`;
}
function Kt(e, t, n, r, o) {
  let i = 0, s, l;
  do {
    if (i !== 0 || t === n) {
      if (n = _e(n), n === null)
        return;
      const f = G(n, "constructor");
      if (f !== void 0 && typeof f.value == "function" && at.has(f.value.name))
        return;
    }
    i === 0 ? l = new st() : Qo(s, (f) => l.add(f)), s = zi(n), S(e.seen, t);
    for (const f of s) {
      if (f === "constructor" || M(t, f) || i !== 0 && l.has(f))
        continue;
      const c = G(n, f);
      if (typeof c.value == "function")
        continue;
      const a = Q(
        e,
        n,
        r,
        f,
        Y,
        c,
        t
      );
      e.colors ? S(o, `\x1B[2m${a}\x1B[22m`) : S(o, a);
    }
    vo(e.seen);
  } while (++i !== 3);
}
function L(e, t, n, r = "") {
  if (e === null)
    return t !== "" && n !== t ? `[${n}${r}: null prototype] [${t}] ` : `[${n}${r}: null prototype] `;
  let o = `${e}${r} `;
  if (t !== "") {
    const i = e.indexOf(t);
    if (i === -1)
      o += `[${t}] `;
    else {
      const s = i + t.length;
      s !== e.length && e[s] === e[s].toLowerCase() && (o += `[${t}] `);
    }
  }
  return o;
}
function re(e, t) {
  let n;
  const r = xn(e);
  if (t)
    n = Ze(e), r.length !== 0 && Ke(n, r);
  else {
    try {
      n = Re(e);
    } catch (o) {
      Le(qn(o) && o.name === "ReferenceError" && Zn(e)), n = Ze(e);
    }
    r.length !== 0 && Ke(n, _n(r, (i) => zn(e, i)));
  }
  return n;
}
function he(e, t, n) {
  let r = "";
  return t === null && (r = Hn(e), r === n && (r = "Object")), L(t, n, r);
}
function dl(e, t, n) {
  if (n > e.depth && e.depth !== null)
    return e.stylize("Proxy [Array]", "special");
  n += 1, e.indentationLvl += 2;
  const r = [
    O(e, t[0], n),
    O(e, t[1], n)
  ];
  return e.indentationLvl -= 2, pt(
    e,
    r,
    "",
    ["Proxy [", "]"],
    fe,
    n
  );
}
function O(e, t, n, r) {
  var s, l;
  if (typeof t != "object" && typeof t != "function" && !Yn(t))
    return yt(e.stylize, t, e);
  if (t === null)
    return e.stylize("null", "null");
  const o = t, i = Un(t, !!e.showProxy);
  if (i !== void 0) {
    if (i === null || i[0] === null)
      return e.stylize("<Revoked Proxy>", "special");
    if (e.showProxy)
      return dl(e, i, n);
    t = i;
  }
  if (e.customInspect) {
    const f = t[Vn];
    if (typeof f == "function" && // Filter out the util module, its inspect function is special.
    f !== A && // Also filter out any prototype objects using the circular check.
    ((l = (s = G(t, "constructor")) == null ? void 0 : s.value) == null ? void 0 : l.prototype) !== t) {
      const c = e.depth === null ? null : e.depth - n, a = i !== void 0 || !kn(Cn, o), y = In(
        f,
        o,
        c,
        cl(e, a),
        A
      );
      if (y !== o)
        return typeof y != "string" ? O(e, y, n) : Dn(y, `
`, `
${J(" ", e.indentationLvl)}`);
    }
  }
  if (e.seen.includes(t)) {
    let f = 1;
    return e.circular === void 0 ? (e.circular = new it(), e.circular.set(t, f)) : (f = e.circular.get(t), f === void 0 && (f = e.circular.size + 1, e.circular.set(t, f))), e.stylize(`[Circular *${f}]`, "special");
  }
  return hl(e, t, n, r);
}
function hl(e, t, n, r) {
  let o, i;
  e.showHidden && (n <= e.depth || e.depth === null) && (i = []);
  const s = er(t, e, n, i);
  i !== void 0 && i.length === 0 && (i = void 0);
  let l = "";
  try {
    l = t[Ht];
  } catch {
  }
  (typeof l != "string" || l !== "" && (e.showHidden ? M : zn)(
    t,
    Ht
  )) && (l = "");
  let f = "", c = yl, a, y = !0, u = 0;
  const p = e.showHidden ? hs : ms;
  let m = Y, P;
  if (ts in t || s === null)
    if (y = !1, On(t)) {
      const d = s !== "Array" || l !== "" ? L(s, l, "Array", `(${t.length})`) : "";
      if (o = Vt(t, p), a = [`${d}[`, "]"], t.length === 0 && o.length === 0 && i === void 0)
        return `${a[0]}]`;
      m = fe, c = Nl;
    } else if (Ms(t)) {
      const d = Vi(t), b = L(s, l, "Set", `(${d})`);
      if (o = re(t, e.showHidden), c = s !== null ? D(Jt, null, t) : D(Jt, null, Ki(t)), d === 0 && o.length === 0 && i === void 0)
        return `${b}{}`;
      a = [`${b}{`, "}"];
    } else if (Bs(t)) {
      const d = Pi(t), b = L(s, l, "Map", `(${d})`);
      if (o = re(t, e.showHidden), c = s !== null ? D(Yt, null, t) : D(Yt, null, bi(t)), d === 0 && o.length === 0 && i === void 0)
        return `${b}{}`;
      a = [`${b}{`, "}"];
    } else if (Gs(t)) {
      o = Vt(t, p);
      let d = t, b = "";
      s === null && (b = fs(t), d = new g[b](t));
      const gt = ls(t);
      if (a = [`${L(s, l, b, `(${gt})`)}[`, "]"], t.length === 0 && o.length === 0 && !e.showHidden)
        return `${a[0]}]`;
      c = D(Bl, null, d, gt), m = fe, e.showHidden && (P = ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset", "buffer"], r = !0);
    } else Cs(t) ? (o = re(t, e.showHidden), a = Zt("Map", l), c = D(Xt, null, a)) : xs(t) ? (o = re(t, e.showHidden), a = Zt("Set", l), c = D(Xt, null, a)) : y = !0;
  if (y)
    if (o = re(t, e.showHidden), a = ["{", "}"], typeof t == "function") {
      if (f = bl(e, t, s, l), o.length === 0 && i === void 0)
        return e.stylize(f, "special");
    } else if (s === "Object") {
      if (Is(t) ? a[0] = "[Arguments] {" : l !== "" && (a[0] = `${L(s, l, "Object")}{`), o.length === 0 && i === void 0)
        return `${a[0]}}`;
    } else if (Ds(t)) {
      f = Wi(
        s !== null ? t : new ot(t)
      );
      const d = L(s, l, "RegExp");
      if (d !== "RegExp " && (f = `${d}${f}`), f = e.stylize(f, "regexp"), o.length === 0 && i === void 0 || n > e.depth && e.depth !== null)
        return f;
    } else if (Ws(t)) {
      f = Nn(ci(t)) ? yi(t) : ui(t);
      const d = L(s, l, "Date");
      if (d !== "Date " && (f = `${d}${f}`), o.length === 0 && i === void 0)
        return e.stylize(f, "date");
    } else if (Kn(t)) {
      if (f = Ol(t, s, l, e, o), o.length === 0 && i === void 0)
        return f;
    } else if (Rs(t)) {
      const d = Ls(t) ? "ArrayBuffer" : "SharedArrayBuffer", b = L(s, l, d);
      if (r === void 0)
        c = jl;
      else if (o.length === 0 && i === void 0)
        return b + `{ [byteLength]: ${je(e.stylize, t.byteLength, !1)} }`;
      a[0] = `${b}{`, P = ["byteLength"];
    } else if (js(t))
      a[0] = `${L(s, l, "DataView")}{`, P = ["byteLength", "byteOffset", "buffer"];
    else if (Fs(t))
      a[0] = `${L(s, l, "Promise")}{`, c = Ml;
    else if (Ts(t))
      a[0] = `${L(s, l, "WeakSet")}{`, c = e.showHidden ? Cl : Qt;
    else if (zs(t))
      a[0] = `${L(s, l, "WeakMap")}{`, c = e.showHidden ? Fl : Qt;
    else if (Zn(t))
      a[0] = `${L(s, l, "Module")}{`, c = Il.bind(null, o);
    else if (ks(t)) {
      if (f = ml(t, e, o, s, l), o.length === 0 && i === void 0)
        return f;
    } else if (Ys(t) && !(n > e.depth && e.depth !== null)) {
      if (o = Qs(o), f = t.href, o.length === 0 && i === void 0)
        return f;
    } else {
      if (o.length === 0 && i === void 0) {
        if (Ns(t)) {
          const d = Ss(t).toString(16);
          return e.stylize(`[External: ${d}]`, "special");
        }
        return `${he(t, s, l)}{}`;
      }
      a[0] = `${he(t, s, l)}{`;
    }
  if (n > e.depth && e.depth !== null) {
    let d = h(he(t, s, l), 0, -1);
    return s !== null && (d = `[${d}]`), e.stylize(d, "special");
  }
  n += 1, e.seen.push(t), e.currentDepth = n;
  let w;
  const $ = e.indentationLvl;
  try {
    if (w = c(e, t, n), P !== void 0)
      for (u = 0; u < P.length; u++) {
        let d;
        try {
          d = vt(e, t, n, P[u], r);
        } catch {
          const b = { [P[u]]: t.buffer[P[u]] };
          d = vt(e, b, n, P[u], r);
        }
        S(w, d);
      }
    for (u = 0; u < o.length; u++)
      S(
        w,
        Q(e, t, n, o[u], m)
      );
    i !== void 0 && Ke(w, i);
  } catch (d) {
    if (!Es(d)) throw d;
    const b = h(he(t, s, l), 0, -1);
    return Rl(e, d, b, $);
  }
  if (e.circular !== void 0) {
    const d = e.circular.get(t);
    if (d !== void 0) {
      const b = e.stylize(`<ref *${d}>`, "special");
      e.compact !== !0 ? f = f === "" ? b : `${b} ${f}` : a[0] = `${b} ${a[0]}`;
    }
  }
  if (e.seen.pop(), e.sorted) {
    const d = e.sorted === !0 ? void 0 : e.sorted;
    if (m === Y)
      Ee(w, d);
    else if (o.length > 1) {
      const b = Ee(ei(w, w.length - o.length), d);
      ti(b, w, w.length - o.length, o.length), xi(Se, null, b);
    }
  }
  const N = pt(
    e,
    w,
    f,
    a,
    m,
    n,
    t
  ), k = (e.budget[e.indentationLvl] || 0) + N.length;
  return e.budget[e.indentationLvl] = k, k > 2 ** 27 && (e.depth = -1), N;
}
function Zt(e, t) {
  return t !== `${e} Iterator` && (t !== "" && (t += "] ["), t += `${e} Iterator`), [`[${t}] {`, "}"];
}
function ml(e, t, n, r, o) {
  let i, s;
  Hs(e) ? (i = Li, s = "Number") : Us(e) ? (i = es, s = "String", n.splice(0, e.length)) : Vs(e) ? (i = ii, s = "Boolean") : Ks(e) ? (i = ni, s = "BigInt") : (i = ns, s = "Symbol");
  let l = `[${s}`;
  return s !== r && (r === null ? l += " (null prototype)" : l += ` (${r})`), l += `: ${yt(ae, i(e), t)}]`, o !== "" && o !== r && (l += ` [${o}]`), n.length !== 0 || t.stylize === ae ? l : t.stylize(l, vi(s));
}
function $l(e, t, n) {
  let i = `class ${M(e, "name") && e.name || "(anonymous)"}`;
  if (t !== "Function" && t !== null && (i += ` [${t}]`), n !== "" && t !== n && (i += ` [${n}]`), t !== null) {
    const s = _e(e).name;
    s && (i += ` extends ${s}`);
  } else
    i += " extends [null prototype]";
  return `[${i}]`;
}
function bl(e, t, n, r) {
  const o = hi(t);
  if (Wn(o, "class") && o[o.length - 1] === "}") {
    const l = h(o, 5, -1), f = x(l, "{");
    if (f !== -1 && (!C(h(l, 0, f), "(") || // Slow path to guarantee that it's indeed a class.
    T(ol, ye(il, l)) !== null))
      return $l(t, n, r);
  }
  let i = "Function";
  _s(t) && (i = `Generator${i}`), Os(t) && (i = `Async${i}`);
  let s = `[${i}`;
  return n === null && (s += " (null prototype)"), t.name === "" ? s += " (anonymous)" : s += `: ${typeof t.name == "string" ? t.name : O(e, t.name)}`, s += "]", n !== i && n !== null && (s += ` ${n}`), r !== "" && n !== r && (s += ` [${r}]`), s;
}
function tr(e, t) {
  for (let n = 0; n < e.length - 3; n++) {
    const r = Pe(t, e[n]);
    if (r !== -1) {
      const o = t.length - r;
      if (o > 3) {
        let i = 1;
        const s = F(e.length - n, o);
        for (; s > i && e[n + i] === t[r + i]; )
          i++;
        if (i > 3)
          return [i, n];
      }
    }
  }
  return [0, 0];
}
function Pl(e) {
  const t = [], n = new it();
  for (let o = 0; o < e.length; o++) {
    const i = n.get(e[o]);
    i === void 0 ? n.set(e[o], [o]) : i[i.length] = o;
  }
  const r = 3;
  if (e.length - n.size <= r)
    return t;
  for (let o = 0; o < e.length - r; o++) {
    const i = n.get(e[o]);
    if (i.length === 1 || i[i.length - 1] === o)
      continue;
    const s = i.indexOf(o) + 1;
    if (s === i.length)
      continue;
    let l = i[i.length - 1] - o;
    if (l < r)
      continue;
    let f;
    if (s + 1 < i.length) {
      let u = 0;
      for (let p = s; p < i.length; p++) {
        let m = i[p] - o;
        for (; m !== 0; ) {
          const P = u % m;
          u !== 0 && (f = f || new st(), f.add(u)), u = m, m = P;
        }
        if (u === 1) break;
      }
      l = u, f && (f.delete(l), f = [...f]);
    }
    let c = l, a = 0, y = 0;
    for (let u = o + l; ; u += l) {
      let p = 0;
      for (let m = 0; m < l && e[o + m] === e[u + m]; m++)
        p++;
      if (p !== l) {
        if (!(f != null && f.length))
          break;
        y !== 0 && c * a < l * y && (c = l, a = y), l = f.pop(), u = o, y = 0;
        continue;
      }
      y++;
    }
    a !== 0 && c * a >= l * y && (l = c, y = a), y * l >= 3 && (t.push(o + l, l, y), o += l * (y + 1) - 1);
  }
  return t;
}
function nr(e, t) {
  let n;
  try {
    n = t.stack;
  } catch {
  }
  if (n) {
    if (typeof n == "string")
      return n;
    e.seen.push(t), e.indentationLvl += 4;
    const r = O(e, n);
    return e.indentationLvl -= 4, e.seen.pop(), `${Dt(t)}
    ${r}`;
  }
  return Dt(t);
}
function Sl(e, t, n) {
  const r = qe(n, `
`);
  let o;
  try {
    ({ cause: o } = t);
  } catch {
  }
  if (o != null && Kn(o)) {
    const i = nr(e, o), s = x(i, `
    at`);
    if (s !== -1) {
      const l = qe(h(i, s + 1), `
`), { 0: f, 1: c } = tr(r, l);
      if (f > 0) {
        const a = f - 2, y = `    ... ${a} lines matching cause stack trace ...`;
        r.splice(c + 1, a, e.stylize(y, "undefined"));
      }
    }
  }
  if (r.length > 10) {
    const i = Pl(r);
    for (let s = i.length - 3; s >= 0; s -= 3) {
      const l = i[s], f = i[s + 1], c = i[s + 2], a = `    ... collapsed ${f * c} duplicate lines matching above ` + (c > 1 ? `${f} lines ${c} times...` : "lines ...");
      r.splice(l, f * c, e.stylize(a, "undefined"));
    }
  }
  return r;
}
function Al(e, t, n, r) {
  let o = n.length;
  if (typeof n != "string" && (e = Xi(
    e,
    `${n}`,
    `${n} [${h(L(t, r, "Error"), 0, -1)}]`
  )), t === null || Tn(n, "Error") && Wn(e, n) && (e.length === o || e[o] === ":" || e[o] === `
`)) {
    let i = "Error";
    if (t === null) {
      const l = T(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/, e) || T(/^([a-z_A-Z0-9-]*Error)$/, e);
      i = (l == null ? void 0 : l[1]) || "", o = i.length, i = i || "Error";
    }
    const s = h(L(t, r, i), 0, -1);
    n !== s && (C(s, n) ? o === 0 ? e = `${s}: ${e}` : e = `${s}${h(e, o)}` : e = `${s} [${n}]${h(e, o)}`);
  }
  return e;
}
function wl(e, t) {
  let n = "", r = 0, o = 0;
  for (; ; ) {
    const i = x(t, "node_modules", o);
    if (i === -1)
      break;
    const s = t[i - 1], l = t[i + 12];
    if (l !== "/" && l !== "\\" || s !== "/" && s !== "\\") {
      o = i + 1;
      continue;
    }
    const f = i + 13;
    n += h(t, r, f);
    let c = x(t, s, f);
    t[f] === "@" && (c = x(t, s, c + 1));
    const a = h(t, f, c);
    n += e.stylize(a, "module"), r = c, o = c;
  }
  return r !== 0 && (t = n + h(t, r)), t;
}
function qt(e, t, n) {
  let r = x(t, n), o = "", i = n.length;
  if (r !== -1) {
    h(t, r - 7, r) === "file://" && (i += 7, r -= 7);
    const s = t[r - 1] === "(" ? r - 1 : r, l = s !== r && Tn(t, ")") ? -1 : t.length, f = r + i + 1, c = h(t, s, f);
    o += h(t, 0, s), o += e.stylize(c, "undefined"), o += h(t, f, l), l === -1 && (o += e.stylize(")", "undefined"));
  } else
    o += t;
  return o;
}
function El() {
  let e;
  try {
    e = process.cwd();
  } catch {
    return;
  }
  return e;
}
function Ol(e, t, n, r, o) {
  let i, s, l;
  try {
    l = nr(r, e);
  } catch {
    return ji(e);
  }
  let f = !1;
  try {
    i = e.message;
  } catch {
    f = !0;
  }
  let c = !1;
  try {
    s = e.name;
  } catch {
    c = !0;
  }
  if (!r.showHidden && o.length !== 0) {
    const u = Pe(o, "stack");
    if (u !== -1 && Se(o, u, 1), !f) {
      const p = Pe(o, "message");
      p !== -1 && (typeof i != "string" || C(l, i)) && Se(o, p, 1);
    }
    if (!c) {
      const p = Pe(o, "name");
      p !== -1 && (typeof s != "string" || C(l, s)) && Se(o, p, 1);
    }
  }
  s = s ?? "Error", "cause" in e && (o.length === 0 || !Tt(o, "cause")) && S(o, "cause");
  try {
    const u = e.errors;
    On(u) && (o.length === 0 || !Tt(o, "errors")) && S(o, "errors");
  } catch {
  }
  l = Al(l, t, s, n);
  let a = i && x(l, i) || -1;
  a !== -1 && (a += i.length);
  const y = x(l, `
    at`, a);
  if (y === -1)
    l = `[${l}]`;
  else {
    let u = h(l, 0, y);
    const p = h(l, y + 1), m = Sl(r, e, p);
    if (r.colors) {
      const P = El();
      let w;
      for (let $ of m) {
        const N = T(rl, $);
        if (N !== null && Lo.exists(N[1]))
          u += `
${r.stylize($, "undefined")}`;
        else {
          if (u += `
`, $ = wl(r, $), P !== void 0) {
            let I = qt(r, $, P);
            I === $ && (w = w || Js(P), I = qt(r, $, w)), $ = I;
          }
          u += $;
        }
      }
    } else
      u += `
${Rn(m, `
`)}`;
    l = u;
  }
  if (r.indentationLvl !== 0) {
    const u = J(" ", r.indentationLvl);
    l = Dn(l, `
`, `
${u}`);
  }
  return l;
}
function _l(e, t, n) {
  let r = 0, o = 0, i = 0, s = t.length;
  e.maxArrayLength < t.length && s--;
  const l = 2, f = new X(s);
  for (; i < s; i++) {
    const a = ke(t[i], e.colors);
    f[i] = a, r += a + l, o < a && (o = a);
  }
  const c = o + l;
  if (c * 3 + e.indentationLvl < e.breakLength && (r / c > 5 || o <= 6)) {
    const y = Gt(c - r / t.length), u = H(c - 3 - y, 1), p = F(
      // Ideally a square should be drawn. We expect a character to be about 2.5
      // times as high as wide. This is the area formula to calculate a square
      // which contains n rectangles of size `actualMax * approxCharHeights`.
      // Divide that by `actualMax` to receive the correct number of columns.
      // The added bias increases the columns for short entries.
      Ai(
        Gt(
          2.5 * u * s
        ) / u
      ),
      // Do not exceed the breakLength.
      Si((e.breakLength - e.indentationLvl) / c),
      // Limit array grouping for small `compact` modes as the user requested
      // minimal grouping.
      e.compact * 4,
      // Limit the columns to a maximum of fifteen.
      15
    );
    if (p <= 1)
      return t;
    const m = [], P = [];
    for (let $ = 0; $ < p; $++) {
      let N = 0;
      for (let I = $; I < t.length; I += p)
        f[I] > N && (N = f[I]);
      N += l, P[$] = N;
    }
    let w = Te;
    if (n !== void 0) {
      for (let $ = 0; $ < t.length; $++)
        if (typeof n[$] != "number" && typeof n[$] != "bigint") {
          w = Qi;
          break;
        }
    }
    for (let $ = 0; $ < s; $ += p) {
      const N = F($ + p, s);
      let I = "", k = $;
      for (; k < N - 1; k++) {
        const d = P[k - $] + t[k].length - f[k];
        I += w(`${t[k]}, `, d, " ");
      }
      if (w === Te) {
        const d = P[k - $] + t[k].length - f[k] - l;
        I += Te(t[k], d, " ");
      } else
        I += t[k];
      S(m, I);
    }
    e.maxArrayLength < t.length && S(m, t[s]), t = m;
  }
  return t;
}
function Rl(e, t, n, r) {
  return e.seen.pop(), e.indentationLvl = r, e.stylize(
    `[${n}: Inspection interrupted prematurely. Maximum call stack size exceeded.]`,
    "special"
  );
}
function Qe(e) {
  let t = "", n = e.length;
  Le(n !== 0);
  const r = e[0] === "-" ? 1 : 0;
  for (; n >= r + 4; n -= 3)
    t = `_${h(e, n - 3, n)}${t}`;
  return n === e.length ? e : `${h(e, 0, n)}${t}`;
}
function Ll(e) {
  let t = "", n = 0;
  for (; n < e.length - 3; n += 3)
    t += `${h(e, n, n + 3)}_`;
  return n === 0 ? e : `${t}${h(e, n)}`;
}
const V = (e) => `... ${e} more item${e > 1 ? "s" : ""}`;
function je(e, t, n) {
  if (!n)
    return Ii(t, -0) ? e("-0", "number") : e(`${t}`, "number");
  const r = v(t);
  if (wi(t) === t)
    return !Ei(t) || C(r, "e") ? e(r, "number") : e(Qe(r), "number");
  if (Nn(t))
    return e(r, "number");
  const i = x(r, "."), s = h(r, 0, i), l = h(r, i + 1);
  return e(`${Qe(s)}.${Ll(l)}`, "number");
}
function ut(e, t, n) {
  const r = v(t);
  return e(n ? `${Qe(r)}n` : `${r}n`, "bigint");
}
function yt(e, t, n) {
  if (typeof t == "string") {
    let r = "";
    if (t.length > n.maxStringLength) {
      const o = t.length - n.maxStringLength;
      t = h(t, 0, n.maxStringLength), r = `... ${o} more character${o > 1 ? "s" : ""}`;
    }
    return n.compact !== !0 && // We do not support handling unicode characters width with
    // the readline getStringWidth function as there are
    // performance implications.
    t.length > sl && t.length > n.breakLength - n.indentationLvl - 4 ? Rn(
      Xo(
        Di(new RegExp("(?<=\\n)"), t),
        (o) => e(Ye(o), "string")
      ),
      ` +
${J(" ", n.indentationLvl + 2)}`
    ) + r : e(Ye(t), "string") + r;
  }
  return typeof t == "number" ? je(e, t, n.numericSeparator) : typeof t == "bigint" ? ut(e, t, n.numericSeparator) : typeof t == "boolean" ? e(`${t}`, "boolean") : typeof t > "u" ? e("undefined", "undefined") : e(Gn(t), "symbol");
}
function Il(e, t, n, r) {
  const o = new X(e.length);
  for (let i = 0; i < e.length; i++)
    try {
      o[i] = Q(
        t,
        n,
        r,
        e[i],
        Y
      );
    } catch (s) {
      Le(qn(s) && s.name === "ReferenceError");
      const l = { [e[i]]: "" };
      o[i] = Q(t, l, r, e[i], Y);
      const f = Ji(o[i], " ");
      o[i] = h(o[i], 0, f + 1) + t.stylize("<uninitialized>", "special");
    }
  return e.length = 0, o;
}
function kl(e, t, n, r, o, i) {
  const s = Re(t);
  let l = i;
  for (; i < s.length && o.length < r; i++) {
    const c = s[i], a = +c;
    if (a > 2 ** 32 - 2)
      break;
    if (`${l}` !== c) {
      if (T(nl, c) === null)
        break;
      const y = a - l, u = y > 1 ? "s" : "", p = `<${y} empty item${u}>`;
      if (S(o, e.stylize(p, "undefined")), l = a, o.length === r)
        break;
    }
    S(o, Q(e, t, n, c, ct)), l++;
  }
  const f = t.length - l;
  if (o.length !== r) {
    if (f > 0) {
      const c = f > 1 ? "s" : "", a = `<${f} empty item${c}>`;
      S(o, e.stylize(a, "undefined"));
    }
  } else f > 0 && S(o, V(f));
  return o;
}
function jl(e, t) {
  let n;
  try {
    n = new as(t);
  } catch {
    return [e.stylize("(detached)", "special")];
  }
  De === void 0 && (De = () => "");
  const r = De(n, 0, F(e.maxArrayLength, n.length));
  let o = "", i = 0;
  for (; i < r.length - 2; i += 2)
    o += `${r[i]}${r[i + 1]} `;
  r.length > 0 && (o += `${r[i]}${r[i + 1]}`);
  const s = n.length - e.maxArrayLength;
  return s > 0 && (o += ` ... ${s} more byte${s > 1 ? "s" : ""}`), [`${e.stylize("[Uint8Contents]", "special")}: <${o}>`];
}
function Nl(e, t, n) {
  const r = t.length, o = F(H(0, e.maxArrayLength), r), i = r - o, s = [];
  for (let l = 0; l < o; l++) {
    const f = G(t, l);
    if (f === void 0)
      return kl(e, t, n, o, s, l);
    S(s, Q(e, t, n, l, ct, f));
  }
  return i > 0 && S(s, V(i)), s;
}
function Bl(e, t, n) {
  const r = F(H(0, n.maxArrayLength), t), o = e.length - r, i = new X(r), s = e.length > 0 && typeof e[0] == "number" ? je : ut;
  for (let l = 0; l < r; ++l)
    i[l] = s(n.stylize, e[l], n.numericSeparator);
  return o > 0 && (i[r] = V(o)), i;
}
function Jt(e, t, n, r) {
  const o = e.size, i = F(H(0, t.maxArrayLength), o), s = o - i, l = [];
  t.indentationLvl += 2;
  let f = 0;
  for (const c of e) {
    if (f >= i) break;
    S(l, O(t, c, r)), f++;
  }
  return s > 0 && S(l, V(s)), t.indentationLvl -= 2, l;
}
function Yt(e, t, n, r) {
  const o = e.size, i = F(H(0, t.maxArrayLength), o), s = o - i, l = [];
  t.indentationLvl += 2;
  let f = 0;
  for (const { 0: c, 1: a } of e) {
    if (f >= i) break;
    S(
      l,
      `${O(t, c, r)} => ${O(t, a, r)}`
    ), f++;
  }
  return s > 0 && S(l, V(s)), t.indentationLvl -= 2, l;
}
function rr(e, t, n, r) {
  const o = H(e.maxArrayLength, 0), i = F(o, n.length), s = new X(i);
  e.indentationLvl += 2;
  for (let f = 0; f < i; f++)
    s[f] = O(e, n[f], t);
  e.indentationLvl -= 2, r === Ie && !e.sorted && Ee(s);
  const l = n.length - i;
  return l > 0 && S(s, V(l)), s;
}
function or(e, t, n, r) {
  const o = H(e.maxArrayLength, 0), i = n.length / 2, s = i - o, l = F(o, i), f = new X(l);
  let c = 0;
  if (e.indentationLvl += 2, r === Ie) {
    for (; c < l; c++) {
      const a = c * 2;
      f[c] = `${O(e, n[a], t)} => ${O(e, n[a + 1], t)}`;
    }
    e.sorted || Ee(f);
  } else
    for (; c < l; c++) {
      const a = c * 2, y = [
        O(e, n[a], t),
        O(e, n[a + 1], t)
      ];
      f[c] = pt(
        e,
        y,
        "",
        ["[", "]"],
        fe,
        t
      );
    }
  return e.indentationLvl -= 2, s > 0 && S(f, V(s)), f;
}
function Qt(e) {
  return [e.stylize("<items unknown>", "special")];
}
function Cl(e, t, n) {
  const r = lt(t);
  return rr(e, n, r, Ie);
}
function Fl(e, t, n) {
  const r = lt(t);
  return or(e, n, r, Ie);
}
function Xt(e, t, n, r) {
  const { 0: o, 1: i } = lt(n, !0);
  return i ? (e[0] = ye(/ Iterator] {$/, e[0], " Entries] {"), or(t, r, o, fl)) : rr(t, r, o, ll);
}
function Ml(e, t, n) {
  let r;
  const { 0: o, 1: i } = Ps(t);
  if (o === $s)
    r = [e.stylize("<pending>", "special")];
  else {
    e.indentationLvl += 2;
    const s = O(e, i, n);
    e.indentationLvl -= 2, r = [
      o === bs ? `${e.stylize("<rejected>", "special")} ${s}` : s
    ];
  }
  return r;
}
function vt(e, t, n, r, o) {
  e.indentationLvl += 2;
  const i = O(e, t[r], n, o);
  return e.indentationLvl -= 2, `${e.stylize(`[${r}]`, "string")}: ${i}`;
}
function Q(e, t, n, r, o, i, s = t) {
  let l, f, c = " ";
  if (i = i || G(t, r), i.value !== void 0) {
    const a = e.compact !== !0 || o !== Y ? 2 : 3;
    e.indentationLvl += a, f = O(e, i.value, n), a === 3 && e.breakLength < ke(f, e.colors) && (c = `
${J(" ", e.indentationLvl)}`), e.indentationLvl -= a;
  } else if (i.get !== void 0) {
    const a = i.set !== void 0 ? "Getter/Setter" : "Getter", y = e.stylize, u = "special";
    if (e.getters && (e.getters === !0 || e.getters === "get" && i.set === void 0 || e.getters === "set" && i.set !== void 0))
      try {
        const p = In(i.get, s);
        if (e.indentationLvl += 2, p === null)
          f = `${y(`[${a}:`, u)} ${y("null", "null")}${y("]", u)}`;
        else if (typeof p == "object")
          f = `${y(`[${a}]`, u)} ${O(e, p, n)}`;
        else {
          const m = yt(y, p, e);
          f = `${y(`[${a}:`, u)} ${m}${y("]", u)}`;
        }
        e.indentationLvl -= 2;
      } catch (p) {
        const m = `<Inspection threw (${p.message})>`;
        f = `${y(`[${a}:`, u)} ${m}${y("]", u)}`;
      }
    else
      f = e.stylize(`[${a}]`, u);
  } else i.set !== void 0 ? f = e.stylize("[Setter]", "special") : f = e.stylize("undefined", "undefined");
  if (o === ct)
    return f;
  if (typeof r == "symbol") {
    const a = ye(
      Qn,
      Gn(r),
      Xn
    );
    l = e.stylize(a, "symbol");
  } else T(tl, r) !== null ? l = r === "__proto__" ? "['__proto__']" : e.stylize(r, "name") : l = e.stylize(Ye(r), "string");
  return i.enumerable === !1 && (l = `[${l}]`), `${l}:${c}${f}`;
}
function en(e, t, n, r) {
  let o = t.length + n;
  if (o + t.length > e.breakLength)
    return !1;
  for (let i = 0; i < t.length; i++)
    if (e.colors ? o += ws(t[i]).length : o += t[i].length, o > e.breakLength)
      return !1;
  return r === "" || !C(r, `
`);
}
function pt(e, t, n, r, o, i, s) {
  if (e.compact !== !0) {
    if (typeof e.compact == "number" && e.compact >= 1) {
      const a = t.length;
      if (o === fe && a > 6 && (t = _l(e, t, s)), e.currentDepth - i < e.compact && a === t.length) {
        const y = t.length + e.indentationLvl + r[0].length + n.length + 10;
        if (en(e, t, y, n)) {
          const u = de(t, ", ");
          if (!C(u, `
`))
            return `${n ? `${n} ` : ""}${r[0]} ${u} ${r[1]}`;
        }
      }
    }
    const c = `
${J(" ", e.indentationLvl)}`;
    return `${n ? `${n} ` : ""}${r[0]}${c}  ${de(t, `,${c}  `)}${c}${r[1]}`;
  }
  if (en(e, t, 0, n))
    return `${r[0]}${n ? ` ${n}` : ""} ${de(t, ", ")} ` + r[1];
  const l = J(" ", e.indentationLvl), f = n === "" && r[0].length === 1 ? " " : `${n ? ` ${n}` : ""}
${l}  `;
  return `${r[0]}${f}${de(t, `,
${l}  `)} ${r[1]}`;
}
function xl(e) {
  const n = Un(e, !1);
  if (n !== void 0) {
    if (n === null)
      return !0;
    e = n;
  }
  let r = M, o = M;
  if (typeof e.toString != "function") {
    if (typeof e[ne] != "function")
      return !0;
    if (M(e, ne))
      return !1;
    r = tn;
  } else {
    if (M(e, "toString"))
      return !1;
    if (typeof e[ne] != "function")
      o = tn;
    else if (M(e, ne))
      return !1;
  }
  let i = e;
  do
    i = _e(i);
  while (!r(i, "toString") && !o(i, ne));
  const s = G(i, "constructor");
  return s !== void 0 && typeof s.value == "function" && at.has(s.value.name);
}
function tn() {
  return !1;
}
const nn = (e) => qe(e.message, `
`, 1)[0];
let Ue;
function zl(e) {
  try {
    return Wt(e);
  } catch (t) {
    if (!Ue)
      try {
        const n = {};
        n.a = n, Wt(n);
      } catch (n) {
        Ue = nn(n);
      }
    if (t.name === "TypeError" && nn(t) === Ue)
      return "[Circular]";
    throw t;
  }
}
function Tl(...e) {
  return ir(void 0, e);
}
function Dl(e, ...t) {
  return Jn(e, "inspectOptions", qs), ir(e, t);
}
function me(e, t) {
  return je(
    ae,
    e,
    (t == null ? void 0 : t.numericSeparator) ?? E.numericSeparator
  );
}
function He(e, t) {
  return ut(
    ae,
    e,
    (t == null ? void 0 : t.numericSeparator) ?? E.numericSeparator
  );
}
function ir(e, t) {
  const n = t[0];
  let r = 0, o = "", i = "";
  if (typeof n == "string") {
    if (t.length === 1)
      return n;
    let s, l = 0;
    for (let f = 0; f < n.length - 1; f++)
      if (le(n, f) === 37) {
        const c = le(n, ++f);
        if (r + 1 !== t.length) {
          switch (c) {
            case 115: {
              const a = t[++r];
              typeof a == "number" ? s = me(a, e) : typeof a == "bigint" ? s = He(a, e) : typeof a != "object" || a === null || !xl(a) ? s = v(a) : s = A(a, {
                ...e,
                compact: 3,
                colors: !1,
                depth: 0
              });
              break;
            }
            case 106:
              s = zl(t[++r]);
              break;
            case 100: {
              const a = t[++r];
              typeof a == "bigint" ? s = He(a, e) : typeof a == "symbol" ? s = "NaN" : s = me(jn(a), e);
              break;
            }
            case 79:
              s = A(t[++r], e);
              break;
            case 111:
              s = A(t[++r], {
                ...e,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const a = t[++r];
              typeof a == "bigint" ? s = He(a, e) : typeof a == "symbol" ? s = "NaN" : s = me(
                _i(a),
                e
              );
              break;
            }
            case 102: {
              const a = t[++r];
              typeof a == "symbol" ? s = "NaN" : s = me(
                Oi(a),
                e
              );
              break;
            }
            case 99:
              r += 1, s = "";
              break;
            case 37:
              o += h(n, l, f), l = f + 1;
              continue;
            default:
              continue;
          }
          l !== f - 1 && (o += h(n, l, f - 1)), o += s, l = f + 1;
        } else c === 37 && (o += h(n, l, f), l = f + 1);
      }
    l !== 0 && (r++, i = " ", l < n.length && (o += h(n, l)));
  }
  for (; r < t.length; ) {
    const s = t[r];
    o += i, o += typeof s != "string" ? A(s, e) : s, i = " ", r++;
  }
  return o;
}
function sr(e) {
  return e <= 31 || // C0 control codes
  e >= 127 && e <= 159 || // C1 control codes
  e >= 768 && e <= 879 || // Combining Diacritical Marks
  e >= 8203 && e <= 8207 || // Modifying Invisible Characters
  // Combining Diacritical Marks for Symbols
  e >= 8400 && e <= 8447 || e >= 65024 && e <= 65039 || // Variation Selectors
  e >= 65056 && e <= 65071 || // Combining Half Marks
  e >= 917760 && e <= 917999;
}
if (ds("config").hasIntl)
  Le(!1);
else {
  ke = function(n, r = !0) {
    let o = 0;
    r && (n = lr(n)), n = Yi(n, "NFC");
    for (const i of new Gi(n)) {
      const s = qi(i, 0);
      e(s) ? o += 2 : sr(s) || o++;
    }
    return o;
  };
  const e = (t) => t >= 4352 && (t <= 4447 || // Hangul Jamo
  t === 9001 || // LEFT-POINTING ANGLE BRACKET
  t === 9002 || // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  t >= 11904 && t <= 12871 && t !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  t >= 12880 && t <= 19903 || // CJK Unified Ideographs .. Yi Radicals
  t >= 19968 && t <= 42182 || // Hangul Jamo Extended-A
  t >= 43360 && t <= 43388 || // Hangul Syllables
  t >= 44032 && t <= 55203 || // CJK Compatibility Ideographs
  t >= 63744 && t <= 64255 || // Vertical Forms
  t >= 65040 && t <= 65049 || // CJK Compatibility Forms .. Small Form Variants
  t >= 65072 && t <= 65131 || // Halfwidth and Fullwidth Forms
  t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510 || // Kana Supplement
  t >= 110592 && t <= 110593 || // Enclosed Ideographic Supplement
  t >= 127488 && t <= 127569 || // Miscellaneous Symbols and Pictographs 0x1f300 - 0x1f5ff
  // Emoticons 0x1f600 - 0x1f64f
  t >= 127744 && t <= 128591 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  t >= 131072 && t <= 262141);
}
function lr(e) {
  return Zs(e, "str"), ye(al, e, "");
}
const Wl = {
  34: "&quot;",
  38: "&amp;",
  39: "&apos;",
  60: "&lt;",
  62: "&gt;",
  160: "&nbsp;"
};
function rn(e) {
  return e.replace(
    // eslint-disable-next-line no-control-regex
    /[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g,
    (t) => {
      const n = v(t.charCodeAt(0));
      return Wl[n] || "&#" + n + ";";
    }
  );
}
const Ql = {
  identicalSequenceRange: tr,
  inspect: A,
  inspectDefaultOptions: E,
  format: Tl,
  formatWithOptions: Dl,
  getStringWidth: ke,
  stripVTControlCharacters: lr,
  isZeroWidthCodePoint: sr,
  stylizeWithColor: vn,
  stylizeWithHTML(e, t) {
    const n = A.styles[t];
    return n !== void 0 ? `<span style="color:${n};">${rn(e)}</span>` : rn(e);
  },
  // eslint-disable-next-line node-core/prefer-primordials
  Proxy: As
};
export {
  Ql as default
};
