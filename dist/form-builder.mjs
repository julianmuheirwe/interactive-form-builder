import { openBlock as h, createElementBlock as f, createElementVNode as x, normalizeClass as z, toDisplayString as E, createTextVNode as q, useCssVars as D, ref as P, onMounted as H, createCommentVNode as v, Fragment as L, renderList as U, unref as y, createVNode as O, withDirectives as W, vModelText as Q, vModelSelect as pt, vModelCheckbox as mt, pushScopeId as ze, popScopeId as We, watch as Oe, withModifiers as bt } from "vue";
function Je(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: gt } = Object.prototype, { getPrototypeOf: xe } = Object, se = ((e) => (r) => {
  const t = gt.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (r) => se(r) === e), ae = (e) => (r) => typeof r === e, { isArray: K } = Array, Y = ae("undefined");
function yt(e) {
  return e !== null && !Y(e) && e.constructor !== null && !Y(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ke = I("ArrayBuffer");
function vt(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Ke(e.buffer), r;
}
const xt = ae("string"), N = ae("function"), Ge = ae("number"), le = (e) => e !== null && typeof e == "object", Ct = (e) => e === !0 || e === !1, te = (e) => {
  if (se(e) !== "object")
    return !1;
  const r = xe(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, St = I("Date"), _t = I("File"), Et = I("Blob"), wt = I("FileList"), Ot = (e) => le(e) && N(e.pipe), Rt = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((r = se(e)) === "formdata" || // detect form-data instance
  r === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, kt = I("URLSearchParams"), At = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Z(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), K(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let c;
    for (n = 0; n < s; n++)
      c = i[n], r.call(null, e[c], c, e);
  }
}
function Xe(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const Qe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ye = (e) => !Y(e) && e !== Qe;
function be() {
  const { caseless: e } = Ye(this) && this || {}, r = {}, t = (n, o) => {
    const i = e && Xe(r, o) || o;
    te(r[i]) && te(n) ? r[i] = be(r[i], n) : te(n) ? r[i] = be({}, n) : K(n) ? r[i] = n.slice() : r[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Z(arguments[n], t);
  return r;
}
const Tt = (e, r, t, { allOwnKeys: n } = {}) => (Z(r, (o, i) => {
  t && N(o) ? e[i] = Je(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), qt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Nt = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, Ft = (e, r, t, n) => {
  let o, i, s;
  const c = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, r)) && !c[s] && (r[s] = e[s], c[s] = !0);
    e = t !== !1 && xe(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, $t = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, Bt = (e) => {
  if (!e)
    return null;
  if (K(e))
    return e;
  let r = e.length;
  if (!Ge(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Pt = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && xe(Uint8Array)), Dt = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, It = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, Lt = I("HTMLFormElement"), Ut = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), Re = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), jt = I("RegExp"), Ze = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  Z(t, (o, i) => {
    r(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, Mt = (e) => {
  Ze(e, (r, t) => {
    if (N(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (N(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ht = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return K(e) ? n(e) : n(String(e).split(r)), t;
}, Vt = () => {
}, zt = (e, r) => (e = +e, Number.isFinite(e) ? e : r), he = "abcdefghijklmnopqrstuvwxyz", ke = "0123456789", et = {
  DIGIT: ke,
  ALPHA: he,
  ALPHA_DIGIT: he + he.toUpperCase() + ke
}, Wt = (e = 16, r = et.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function Jt(e) {
  return !!(e && N(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Kt = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (le(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const i = K(n) ? [] : {};
        return Z(n, (s, c) => {
          const d = t(s, o + 1);
          !Y(d) && (i[c] = d);
        }), r[o] = void 0, i;
      }
    }
    return n;
  };
  return t(e, 0);
}, Gt = I("AsyncFunction"), Xt = (e) => e && (le(e) || N(e)) && N(e.then) && N(e.catch), l = {
  isArray: K,
  isArrayBuffer: Ke,
  isBuffer: yt,
  isFormData: Rt,
  isArrayBufferView: vt,
  isString: xt,
  isNumber: Ge,
  isBoolean: Ct,
  isObject: le,
  isPlainObject: te,
  isUndefined: Y,
  isDate: St,
  isFile: _t,
  isBlob: Et,
  isRegExp: jt,
  isFunction: N,
  isStream: Ot,
  isURLSearchParams: kt,
  isTypedArray: Pt,
  isFileList: wt,
  forEach: Z,
  merge: be,
  extend: Tt,
  trim: At,
  stripBOM: qt,
  inherits: Nt,
  toFlatObject: Ft,
  kindOf: se,
  kindOfTest: I,
  endsWith: $t,
  toArray: Bt,
  forEachEntry: Dt,
  matchAll: It,
  isHTMLForm: Lt,
  hasOwnProperty: Re,
  hasOwnProp: Re,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ze,
  freezeMethods: Mt,
  toObjectSet: Ht,
  toCamelCase: Ut,
  noop: Vt,
  toFiniteNumber: zt,
  findKey: Xe,
  global: Qe,
  isContextDefined: Ye,
  ALPHABET: et,
  generateString: Wt,
  isSpecCompliantForm: Jt,
  toJSONObject: Kt,
  isAsyncFn: Gt,
  isThenable: Xt
};
function _(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
l.inherits(_, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const tt = _.prototype, rt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  rt[e] = { value: e };
});
Object.defineProperties(_, rt);
Object.defineProperty(tt, "isAxiosError", { value: !0 });
_.from = (e, r, t, n, o, i) => {
  const s = Object.create(tt);
  return l.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), _.call(s, e.message, r, t, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Qt = null;
function ge(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function nt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ae(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = nt(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function Yt(e) {
  return l.isArray(e) && !e.some(ge);
}
const Zt = l.toFlatObject(l, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function ce(e, r, t) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = l.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(C, F) {
    return !l.isUndefined(F[C]);
  });
  const n = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, d = (t.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(r);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function a(p) {
    if (p === null)
      return "";
    if (l.isDate(p))
      return p.toISOString();
    if (!d && l.isBlob(p))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(p) || l.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, C, F) {
    let S = p;
    if (p && !F && typeof p == "object") {
      if (l.endsWith(C, "{}"))
        C = n ? C : C.slice(0, -2), p = JSON.stringify(p);
      else if (l.isArray(p) && Yt(p) || (l.isFileList(p) || l.endsWith(C, "[]")) && (S = l.toArray(p)))
        return C = nt(C), S.forEach(function(T, G) {
          !(l.isUndefined(T) || T === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ae([C], G, i) : s === null ? C : C + "[]",
            a(T)
          );
        }), !1;
    }
    return ge(p) ? !0 : (r.append(Ae(F, C, i), a(p)), !1);
  }
  const g = [], R = Object.assign(Zt, {
    defaultVisitor: u,
    convertValue: a,
    isVisitable: ge
  });
  function w(p, C) {
    if (!l.isUndefined(p)) {
      if (g.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      g.push(p), l.forEach(p, function(S, k) {
        (!(l.isUndefined(S) || S === null) && o.call(
          r,
          S,
          l.isString(k) ? k.trim() : k,
          C,
          R
        )) === !0 && w(S, C ? C.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), r;
}
function Te(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function Ce(e, r) {
  this._pairs = [], e && ce(e, this, r);
}
const ot = Ce.prototype;
ot.append = function(r, t) {
  this._pairs.push([r, t]);
};
ot.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, Te);
  } : Te;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function er(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function it(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || er, o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = l.isURLSearchParams(r) ? r.toString() : new Ce(r, t).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class tr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    l.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const qe = tr, st = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rr = typeof URLSearchParams < "u" ? URLSearchParams : Ce, nr = typeof FormData < "u" ? FormData : null, or = typeof Blob < "u" ? Blob : null, ir = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), sr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), B = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rr,
    FormData: nr,
    Blob: or
  },
  isStandardBrowserEnv: ir,
  isStandardBrowserWebWorkerEnv: sr,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ar(e, r) {
  return ce(e, new B.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, i) {
      return B.isNode && l.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function lr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function cr(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let i;
  for (n = 0; n < o; n++)
    i = t[n], r[i] = e[i];
  return r;
}
function at(e) {
  function r(t, n, o, i) {
    let s = t[i++];
    const c = Number.isFinite(+s), d = i >= t.length;
    return s = !s && l.isArray(o) ? o.length : s, d ? (l.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !c) : ((!o[s] || !l.isObject(o[s])) && (o[s] = []), r(t, n, o[s], i) && l.isArray(o[s]) && (o[s] = cr(o[s])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const t = {};
    return l.forEachEntry(e, (n, o) => {
      r(lr(n), o, t, 0);
    }), t;
  }
  return null;
}
const ur = {
  "Content-Type": void 0
};
function dr(e, r, t) {
  if (l.isString(e))
    try {
      return (r || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const ue = {
  transitional: st,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = l.isObject(r);
    if (i && l.isHTMLForm(r) && (r = new FormData(r)), l.isFormData(r))
      return o && o ? JSON.stringify(at(r)) : r;
    if (l.isArrayBuffer(r) || l.isBuffer(r) || l.isStream(r) || l.isFile(r) || l.isBlob(r))
      return r;
    if (l.isArrayBufferView(r))
      return r.buffer;
    if (l.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ar(r, this.formSerializer).toString();
      if ((c = l.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return ce(
          c ? { "files[]": r } : r,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), dr(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || ue.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && l.isString(r) && (n && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? _.from(c, _.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: B.classes.FormData,
    Blob: B.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
l.forEach(["delete", "get", "head"], function(r) {
  ue.headers[r] = {};
});
l.forEach(["post", "put", "patch"], function(r) {
  ue.headers[r] = l.merge(ur);
});
const Se = ue, hr = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), fr = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!t || r[t] && hr[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, Ne = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function re(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(re) : String(e);
}
function pr(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const mr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fe(e, r, t, n, o) {
  if (l.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!l.isString(r)) {
    if (l.isString(n))
      return r.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(r);
  }
}
function br(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function gr(e, r) {
  const t = l.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, i, s) {
        return this[n].call(this, r, o, i, s);
      },
      configurable: !0
    });
  });
}
class de {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function i(c, d, a) {
      const u = X(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = l.findKey(o, u);
      (!g || o[g] === void 0 || a === !0 || a === void 0 && o[g] !== !1) && (o[g || d] = re(c));
    }
    const s = (c, d) => l.forEach(c, (a, u) => i(a, u, d));
    return l.isPlainObject(r) || r instanceof this.constructor ? s(r, t) : l.isString(r) && (r = r.trim()) && !mr(r) ? s(fr(r), t) : r != null && i(t, r, n), this;
  }
  get(r, t) {
    if (r = X(r), r) {
      const n = l.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return pr(o);
        if (l.isFunction(t))
          return t.call(this, o, n);
        if (l.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = X(r), r) {
      const n = l.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || fe(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = X(s), s) {
        const c = l.findKey(n, s);
        c && (!t || fe(n, n[c], c, t)) && (delete n[c], o = !0);
      }
    }
    return l.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const i = t[n];
      (!r || fe(this, this[i], i, r, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return l.forEach(this, (o, i) => {
      const s = l.findKey(n, i);
      if (s) {
        t[s] = re(o), delete t[i];
        return;
      }
      const c = r ? br(i) : String(i).trim();
      c !== i && delete t[i], t[c] = re(o), n[c] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && l.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[Ne] = this[Ne] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const c = X(s);
      n[c] || (gr(o, s), n[c] = !0);
    }
    return l.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(de.prototype);
l.freezeMethods(de);
const j = de;
function pe(e, r) {
  const t = this || Se, n = r || t, o = j.from(n.headers);
  let i = n.data;
  return l.forEach(e, function(c) {
    i = c.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function lt(e) {
  return !!(e && e.__CANCEL__);
}
function ee(e, r, t) {
  _.call(this, e ?? "canceled", _.ERR_CANCELED, r, t), this.name = "CanceledError";
}
l.inherits(ee, _, {
  __CANCEL__: !0
});
function yr(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new _(
    "Request failed with status code " + t.status,
    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const vr = B.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, n, o, i, s, c) {
        const d = [];
        d.push(t + "=" + encodeURIComponent(n)), l.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), l.isString(i) && d.push("path=" + i), l.isString(s) && d.push("domain=" + s), c === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(t) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function xr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cr(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function ct(e, r) {
  return e && !xr(r) ? Cr(e, r) : r;
}
const Sr = B.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let n;
    function o(i) {
      let s = i;
      return r && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return n = o(window.location.href), function(s) {
      const c = l.isString(s) ? o(s) : s;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function _r(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Er(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return r = r !== void 0 ? r : 1e3, function(d) {
    const a = Date.now(), u = n[i];
    s || (s = a), t[o] = d, n[o] = a;
    let g = i, R = 0;
    for (; g !== o; )
      R += t[g++], g = g % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), a - s < r)
      return;
    const w = u && a - u;
    return w ? Math.round(R * 1e3 / w) : void 0;
  };
}
function Fe(e, r) {
  let t = 0;
  const n = Er(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, c = i - t, d = n(c), a = i <= s;
    t = i;
    const u = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && s && a ? (s - i) / d : void 0,
      event: o
    };
    u[r ? "download" : "upload"] = !0, e(u);
  };
}
const wr = typeof XMLHttpRequest < "u", Or = wr && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const i = j.from(e.headers).normalize(), s = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    l.isFormData(o) && (B.isStandardBrowserEnv || B.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(w + ":" + p));
    }
    const u = ct(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), it(u, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function g() {
      if (!a)
        return;
      const w = j.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), C = {
        data: !s || s === "text" || s === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: w,
        config: e,
        request: a
      };
      yr(function(S) {
        t(S), d();
      }, function(S) {
        n(S), d();
      }, C), a = null;
    }
    if ("onloadend" in a ? a.onloadend = g : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, a.onabort = function() {
      a && (n(new _("Request aborted", _.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new _("Network Error", _.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const C = e.transitional || st;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new _(
        p,
        C.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
        e,
        a
      )), a = null;
    }, B.isStandardBrowserEnv) {
      const w = (e.withCredentials || Sr(u)) && e.xsrfCookieName && vr.read(e.xsrfCookieName);
      w && i.set(e.xsrfHeaderName, w);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in a && l.forEach(i.toJSON(), function(p, C) {
      a.setRequestHeader(C, p);
    }), l.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), s && s !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Fe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Fe(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (w) => {
      a && (n(!w || w.type ? new ee(null, e, a) : w), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const R = _r(u);
    if (R && B.protocols.indexOf(R) === -1) {
      n(new _("Unsupported protocol " + R + ":", _.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(o || null);
  });
}, ne = {
  http: Qt,
  xhr: Or
};
l.forEach(ne, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const Rr = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    for (let o = 0; o < r && (t = e[o], !(n = l.isString(t) ? ne[t.toLowerCase()] : t)); o++)
      ;
    if (!n)
      throw n === !1 ? new _(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(ne, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!l.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ne
};
function me(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ee(null, e);
}
function $e(e) {
  return me(e), e.headers = j.from(e.headers), e.data = pe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rr.getAdapter(e.adapter || Se.adapter)(e).then(function(n) {
    return me(e), n.data = pe.call(
      e,
      e.transformResponse,
      n
    ), n.headers = j.from(n.headers), n;
  }, function(n) {
    return lt(n) || (me(e), n && n.response && (n.response.data = pe.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = j.from(n.response.headers))), Promise.reject(n);
  });
}
const Be = (e) => e instanceof j ? e.toJSON() : e;
function J(e, r) {
  r = r || {};
  const t = {};
  function n(a, u, g) {
    return l.isPlainObject(a) && l.isPlainObject(u) ? l.merge.call({ caseless: g }, a, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function o(a, u, g) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(a))
        return n(void 0, a, g);
    } else
      return n(a, u, g);
  }
  function i(a, u) {
    if (!l.isUndefined(u))
      return n(void 0, u);
  }
  function s(a, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(a))
        return n(void 0, a);
    } else
      return n(void 0, u);
  }
  function c(a, u, g) {
    if (g in r)
      return n(a, u);
    if (g in e)
      return n(void 0, a);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (a, u) => o(Be(a), Be(u), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, e, r)), function(u) {
    const g = d[u] || o, R = g(e[u], r[u], u);
    l.isUndefined(R) && g !== c || (t[u] = R);
  }), t;
}
const ut = "1.4.0", _e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  _e[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Pe = {};
_e.transitional = function(r, t, n) {
  function o(i, s) {
    return "[Axios v" + ut + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, c) => {
    if (r === !1)
      throw new _(
        o(s, " has been removed" + (t ? " in " + t : "")),
        _.ERR_DEPRECATED
      );
    return t && !Pe[s] && (Pe[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, s, c) : !0;
  };
};
function kr(e, r, t) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = r[i];
    if (s) {
      const c = e[i], d = c === void 0 || s(c, i, e);
      if (d !== !0)
        throw new _("option " + i + " must be " + d, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new _("Unknown option " + i, _.ERR_BAD_OPTION);
  }
}
const ye = {
  assertOptions: kr,
  validators: _e
}, V = ye.validators;
class ie {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new qe(),
      response: new qe()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = J(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: i } = t;
    n !== void 0 && ye.assertOptions(n, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), o != null && (l.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : ye.assertOptions(o, {
      encode: V.function,
      serialize: V.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && l.merge(
      i.common,
      i[t.method]
    ), s && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), t.headers = j.concat(s, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(t) === !1 || (d = d && C.synchronous, c.unshift(C.fulfilled, C.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(C) {
      a.push(C.fulfilled, C.rejected);
    });
    let u, g = 0, R;
    if (!d) {
      const p = [$e.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, a), R = p.length, u = Promise.resolve(t); g < R; )
        u = u.then(p[g++], p[g++]);
      return u;
    }
    R = c.length;
    let w = t;
    for (g = 0; g < R; ) {
      const p = c[g++], C = c[g++];
      try {
        w = p(w);
      } catch (F) {
        C.call(this, F);
        break;
      }
    }
    try {
      u = $e.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (g = 0, R = a.length; g < R; )
      u = u.then(a[g++], a[g++]);
    return u;
  }
  getUri(r) {
    r = J(this.defaults, r);
    const t = ct(r.baseURL, r.url);
    return it(t, r.params, r.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(r) {
  ie.prototype[r] = function(t, n) {
    return this.request(J(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, s, c) {
      return this.request(J(c || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  ie.prototype[r] = t(), ie.prototype[r + "Form"] = t(!0);
});
const oe = ie;
class Ee {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((c) => {
        n.subscribe(c), i = c;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, r(function(i, s, c) {
      n.reason || (n.reason = new ee(i, s, c), t(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Ee(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const Ar = Ee;
function Tr(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function qr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const ve = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ve).forEach(([e, r]) => {
  ve[r] = e;
});
const Nr = ve;
function dt(e) {
  const r = new oe(e), t = Je(oe.prototype.request, r);
  return l.extend(t, oe.prototype, r, { allOwnKeys: !0 }), l.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return dt(J(e, o));
  }, t;
}
const A = dt(Se);
A.Axios = oe;
A.CanceledError = ee;
A.CancelToken = Ar;
A.isCancel = lt;
A.VERSION = ut;
A.toFormData = ce;
A.AxiosError = _;
A.Cancel = A.CanceledError;
A.all = function(r) {
  return Promise.all(r);
};
A.spread = Tr;
A.isAxiosError = qr;
A.mergeConfig = J;
A.AxiosHeaders = j;
A.formToJSON = (e) => at(l.isHTMLForm(e) ? new FormData(e) : e);
A.HttpStatusCode = Nr;
A.default = A;
const Fr = A;
const $ = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of r)
    t[n] = o;
  return t;
}, $r = {
  name: "ValidationError",
  props: {
    message: String,
    variant: String
  }
};
function Br(e, r, t, n, o, i) {
  return h(), f("div", null, [
    x("p", {
      class: z(t.variant === "Error" ? "error" : t.variant === "Warning" ? "warning" : "")
    }, [
      x("b", {
        class: z(t.variant === "Error" ? "error-header" : t.variant === "Warning" ? "warning-header" : "")
      }, E(t.variant), 3),
      q(" " + E(t.message), 1)
    ], 2)
  ]);
}
const M = /* @__PURE__ */ $($r, [["render", Br], ["__scopeId", "data-v-e01a4c08"]]);
const Pr = {
  key: 0,
  style: { "padding-top": "10px", "padding-bottom": "10px" }
}, Dr = { class: "label" }, Ir = {
  key: 0,
  class: "mandatory-indicator"
}, Lr = { key: 0 }, Ur = ["id", "onChange"], jr = ["for"], Mr = { key: 1 }, Hr = ["id", "onChange"], Vr = ["for"], zr = { key: 2 }, Wr = {
  key: 3,
  class: "help"
}, Jr = {
  __name: "RadioGroup",
  props: {
    type: String,
    options: Array,
    variable: String,
    label: String,
    help: String,
    orientation: {
      type: String,
      default: "vertical"
    },
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    },
    required: Boolean
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((c) => ({
      "44f88f58": e.highlightColor,
      c3f6c242: e.themeColor,
      "02fdfc5e": e.textColor
    }));
    let n = P(!1), o = "";
    H(() => {
      t.required && (n.value = !0, o = "Select one of these options");
    });
    function i(c) {
      r("onChange", t.variable, c);
      const d = document.querySelectorAll('input[name="btn"]');
      for (const a of d)
        if (a.checked) {
          a.value;
          break;
        }
    }
    function s(c) {
      return c.replaceAll(" ", "_").toLowerCase();
    }
    return (c, d) => (h(), f("div", null, [
      t.type === "radio" ? (h(), f("div", Pr, [
        x("p", Dr, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", Ir, "*")) : v("", !0)
        ]),
        e.orientation === "vertical" ? (h(), f("span", Lr, [
          (h(!0), f(L, null, U(e.options, (a, u) => (h(), f("div", {
            class: "form-radio",
            key: u
          }, [
            x("input", {
              id: s(a),
              type: "radio",
              name: "btn",
              onChange: (g) => i(a)
            }, null, 40, Ur),
            x("label", {
              class: "label-text",
              for: s(a)
            }, E(a), 9, jr)
          ]))), 128))
        ])) : v("", !0),
        e.orientation === "horizontal" ? (h(), f("span", Mr, [
          (h(!0), f(L, null, U(e.options, (a, u) => (h(), f("span", {
            class: "form-radio",
            key: u
          }, [
            x("input", {
              id: s(a),
              type: "radio",
              name: "btn",
              onChange: (g) => i(a)
            }, null, 40, Hr),
            x("label", {
              class: "label-text",
              for: s(a)
            }, E(a), 9, Vr)
          ]))), 128))
        ])) : v("", !0),
        y(n) ? (h(), f("span", zr, [
          O(M, {
            style: { "padding-top": "5px" },
            variant: "Warning",
            message: y(o)
          }, null, 8, ["message"])
        ])) : v("", !0),
        t.help ? (h(), f("span", Wr, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, De = /* @__PURE__ */ $(Jr, [["__scopeId", "data-v-db942c27"]]);
const Kr = {
  key: 0,
  style: { "padding-top": "10px", "padding-bottom": "10px" }
}, Gr = { key: 0 }, Xr = { class: "label" }, Qr = {
  key: 0,
  class: "mandatory-indicator"
}, Yr = { key: 1 }, Zr = ["onChange"], en = { class: "label-text" }, tn = { key: 2 }, rn = ["onChange"], nn = { class: "label-text" }, on = {
  key: 3,
  class: "help"
}, sn = {
  __name: "CheckboxGroup",
  props: {
    type: String,
    options: Array,
    variable: String,
    label: String,
    help: String,
    orientation: {
      type: String,
      default: "vertical"
    },
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    },
    required: Boolean
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((d) => ({
      "20dfba27": e.highlightColor,
      "4f788232": e.themeColor,
      "7bac2fc4": e.textColor
    }));
    let n = [], o = P(!1), i = "";
    H(() => {
      t.required && (o.value = !0, i = "Select at least one of these options");
    });
    function s(d) {
      let a = c(d);
      a === -1 ? (n.push(d), r("onChange", t.variable, n)) : n.splice(a, 1);
    }
    function c(d) {
      for (let a = 0; a < n.length; a++)
        if (n[a] === d)
          return a;
      return -1;
    }
    return (d, a) => (h(), f("div", null, [
      t.type === "checkbox" ? (h(), f("div", Kr, [
        y(o) ? (h(), f("span", Gr, [
          O(M, {
            variant: "Warning",
            message: y(i)
          }, null, 8, ["message"])
        ])) : v("", !0),
        x("p", Xr, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", Qr, "*")) : v("", !0)
        ]),
        e.orientation === "vertical" ? (h(), f("span", Yr, [
          (h(!0), f(L, null, U(e.options, (u, g) => (h(), f("div", {
            class: "form-checkbox",
            key: g
          }, [
            x("input", {
              onChange: (R) => s(u),
              type: "checkbox"
            }, null, 40, Zr),
            q(),
            x("label", en, E(u), 1)
          ]))), 128))
        ])) : v("", !0),
        e.orientation === "horizontal" ? (h(), f("span", tn, [
          (h(!0), f(L, null, U(e.options, (u, g) => (h(), f("span", {
            class: "form-checkbox",
            key: g
          }, [
            x("input", {
              onChange: (R) => s(u),
              type: "checkbox"
            }, null, 40, rn),
            q(),
            x("label", nn, E(u), 1)
          ]))), 128))
        ])) : v("", !0),
        t.help ? (h(), f("span", on, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, Ie = /* @__PURE__ */ $(sn, [["__scopeId", "data-v-8fc115ac"]]);
const an = { key: 0 }, ln = { class: "label" }, cn = {
  key: 0,
  class: "mandatory-indicator"
}, un = ["required"], dn = { key: 0 }, hn = {
  key: 1,
  class: "help"
}, fn = {
  __name: "FormTextArea",
  props: {
    type: String,
    label: String,
    required: Boolean,
    variable: String,
    help: String,
    validations: {
      type: Object,
      default: null
    },
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((d) => ({
      "9d4de14c": e.highlightColor,
      a07241ea: e.textColor,
      "157a68e5": e.themeColor
    }));
    let n = {}, o = P(!1), i = null;
    function s() {
      if (t.validations.maxLength) {
        if (n[t.variable].length > t.validations.maxLength)
          return o.value = !0, i = "This is longer than " + t.validations.maxLength + " characters", !0;
        o.value = !1, i = null;
      }
      if (t.validations.regex) {
        let d = new RegExp(t.validations.regex), a = n[t.variable];
        if (a != null && a !== "")
          if (d.test(a))
            o.value = !1, i = null;
          else
            return o.value = !0, i = "Invalid " + t.label, !0;
        else
          o.value = !1, i = null;
      }
      return !1;
    }
    H(() => {
      Reflect.set(n, t.variable, null);
    });
    function c() {
      s(), r("onChange", t.variable, n[t.variable]);
    }
    return (d, a) => (h(), f("div", null, [
      t.type === "text-lg" ? (h(), f("span", an, [
        x("p", ln, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", cn, "*")) : v("", !0)
        ]),
        W(x("textarea", {
          "onUpdate:modelValue": a[0] || (a[0] = (u) => y(n)[t.variable] = u),
          class: "input form-input",
          rows: "4",
          onInput: c,
          required: t.required
        }, null, 40, un), [
          [Q, y(n)[t.variable]]
        ]),
        y(o) ? (h(), f("span", dn, [
          O(M, {
            variant: "Error",
            message: y(i)
          }, null, 8, ["message"])
        ])) : v("", !0),
        t.help ? (h(), f("span", hn, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, Le = /* @__PURE__ */ $(fn, [["__scopeId", "data-v-22dee218"]]);
function pn() {
  let e = P(!1), r = P("");
  function t(n, o, i) {
    if (n.maxLength && (o.length > n.maxLength ? (e.value = !0, r.value = "This is longer than " + n.maxLength + " characters") : (e.value = !1, r.value = "")), n.regex) {
      let s = new RegExp(n.regex), c = o;
      c != null && c !== "" ? s.test(c) ? (e.value = !1, r.value = null) : (e.value = !0, r.value = "Invalid " + i) : (e.value = !1, r.value = null);
    }
  }
  return { hasError: e, errorMessage: r, validate: t };
}
function mn() {
  let e = P(!1), r = P("");
  function t(n, o, i) {
    if (o) {
      if (n.max)
        if (o > n.max) {
          e.value = !0, r.value = "It is more than the maximum " + i;
          return;
        } else
          e.value = !1, r.value = null;
      else
        e.value = !1, r.value = null;
      if (n.min)
        if (o < n.min) {
          e.value = !0, r.value = "It is less than the minimum " + i;
          return;
        } else
          e.value = !1, r.value = null;
      else
        e.value = !1, r.value = null;
    } else
      e.value = !1, r.value = null;
  }
  return { hasError: e, errorMessage: r, validate: t };
}
const bn = { key: 0 }, gn = { class: "label" }, yn = {
  key: 0,
  class: "mandatory-indicator"
}, vn = ["required"], xn = { key: 0 }, Cn = {
  key: 1,
  class: "help"
}, Sn = { key: 1 }, _n = { class: "label" }, En = {
  key: 0,
  class: "mandatory-indicator"
}, wn = ["required"], On = { key: 0 }, Rn = {
  key: 1,
  class: "help"
}, kn = {
  __name: "FormInput",
  props: {
    type: String,
    label: String,
    required: Boolean,
    variable: String,
    validations: {
      type: Object,
      default: null
    },
    help: String,
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((s) => ({
      "9f2fb3e4": e.highlightColor,
      "2d2967d7": e.textColor,
      "4468f999": e.themeColor
    }));
    const n = pn();
    let o = {};
    H(() => {
      Reflect.set(o, t.variable, null);
    });
    function i() {
      n.validate(t.validations, o[t.variable], t.label), r("onChange", t.variable, o[t.variable]);
    }
    return (s, c) => (h(), f("div", null, [
      t.type === "text" ? (h(), f("span", bn, [
        x("p", gn, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", yn, "*")) : v("", !0)
        ]),
        W(x("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => y(o)[t.variable] = d),
          class: z(y(n).hasError.value ? "err-input" : "input form-input"),
          type: "text",
          onInput: i,
          required: t.required
        }, null, 42, vn), [
          [Q, y(o)[t.variable]]
        ]),
        y(n).hasError.value ? (h(), f("span", xn, [
          O(M, {
            variant: "Error",
            message: y(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : v("", !0),
        t.help ? (h(), f("span", Cn, E(t.help), 1)) : v("", !0)
      ])) : v("", !0),
      t.type === "text-masked" ? (h(), f("span", Sn, [
        x("p", _n, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", En, "*")) : v("", !0)
        ]),
        W(x("input", {
          "onUpdate:modelValue": c[1] || (c[1] = (d) => y(o)[t.variable] = d),
          class: z(y(n).hasError.value ? "err-input" : "input form-input"),
          type: "password",
          onInput: i,
          required: t.required
        }, null, 42, wn), [
          [Q, y(o)[t.variable]]
        ]),
        y(n).hasError.value ? (h(), f("span", On, [
          O(M, {
            variant: "Error",
            message: y(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : v("", !0),
        t.help ? (h(), f("span", Rn, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, Ue = /* @__PURE__ */ $(kn, [["__scopeId", "data-v-d16ef5db"]]);
const An = { key: 0 }, Tn = { key: 0 }, qn = { class: "label" }, Nn = {
  key: 0,
  class: "mandatory-indicator"
}, Fn = ["placeholder", "required"], $n = {
  key: 1,
  class: "help"
}, Bn = {
  __name: "FormDate",
  props: {
    type: String,
    label: String,
    required: Boolean,
    variable: String,
    help: String,
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((c) => ({
      "6f66e990": e.highlightColor,
      aa0a09d6: e.textColor,
      fe6c63ca: e.themeColor
    }));
    let n = {}, o = !1, i = "";
    H(() => {
      Reflect.set(n, t.variable, null);
    });
    function s() {
      r("onChange", t.variable, n[t.variable]);
    }
    return (c, d) => (h(), f("div", null, [
      t.type === "date" ? (h(), f("span", An, [
        y(o) ? (h(), f("span", Tn, [
          O(M, {
            variant: "Warning",
            message: y(i)
          }, null, 8, ["message"])
        ])) : v("", !0),
        x("p", qn, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", Nn, "*")) : v("", !0)
        ]),
        W(x("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (a) => y(n)[t.variable] = a),
          class: "input form-input",
          type: "date",
          onInput: s,
          placeholder: "Enter your " + t.label,
          required: t.required
        }, null, 40, Fn), [
          [Q, y(n)[t.variable]]
        ]),
        t.help ? (h(), f("span", $n, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, je = /* @__PURE__ */ $(Bn, [["__scopeId", "data-v-2e80b03e"]]);
const Pn = { key: 0 }, Dn = { key: 0 }, In = { class: "label" }, Ln = {
  key: 0,
  class: "mandatory-indicator"
}, Un = ["value"], jn = {
  key: 1,
  class: "help"
}, Mn = {
  __name: "FormSelect",
  props: {
    type: String,
    label: String,
    options: Array,
    required: Boolean,
    variable: String,
    help: String,
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((c) => ({
      "8405c254": e.highlightColor,
      "6b7e120f": e.textColor,
      "5eacd33e": e.themeColor
    }));
    let n = {}, o = !1, i = "";
    H(() => {
      Reflect.set(n, t.variable, null);
    });
    function s() {
      r("onChange", t.variable, n[t.variable]);
    }
    return (c, d) => (h(), f("div", null, [
      t.type === "select" ? (h(), f("span", Pn, [
        y(o) ? (h(), f("span", Dn, [
          O(M, {
            variant: "Warning",
            message: y(i)
          }, null, 8, ["message"])
        ])) : v("", !0),
        x("p", In, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", Ln, "*")) : v("", !0)
        ]),
        W(x("select", {
          "onUpdate:modelValue": d[0] || (d[0] = (a) => y(n)[t.variable] = a),
          class: "select form-select",
          onChange: s
        }, [
          (h(!0), f(L, null, U(t.options, (a, u) => (h(), f("option", {
            class: "option",
            key: u,
            value: a
          }, E(a), 9, Un))), 128))
        ], 544), [
          [pt, y(n)[t.variable]]
        ]),
        t.help ? (h(), f("span", jn, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, Me = /* @__PURE__ */ $(Mn, [["__scopeId", "data-v-5b67c33f"]]);
const Hn = (e) => (ze("data-v-369c0703"), e = e(), We(), e), Vn = { key: 0 }, zn = { key: 0 }, Wn = { style: { "padding-top": "15px", "padding-bottom": "7px" } }, Jn = { class: "label" }, Kn = {
  key: 0,
  class: "mandatory-indicator"
}, Gn = /* @__PURE__ */ Hn(() => /* @__PURE__ */ x("span", { class: "slider round" }, null, -1)), Xn = {
  key: 1,
  class: "help"
}, Qn = {
  __name: "FormSwitch",
  props: {
    type: String,
    label: String,
    required: Boolean,
    variable: String,
    help: String,
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((c) => ({
      "25016efc": e.highlightColor,
      "7af7e987": e.themeColor,
      "1625c229": e.textColor
    }));
    let n = {}, o = !1, i = "";
    H(() => {
      Reflect.set(n, t.variable, !1);
    });
    function s(c, d) {
      n[d] = !n[d], document.getElementById(c).checked = n[d], r("onChange", t.variable, n[t.variable]);
    }
    return (c, d) => (h(), f("div", null, [
      t.type === "switch" ? (h(), f("span", Vn, [
        y(o) ? (h(), f("span", zn, [
          O(M, {
            variant: "Warning",
            message: y(i)
          }, null, 8, ["message"])
        ])) : v("", !0),
        x("div", Wn, [
          x("span", Jn, [
            q(E(t.label) + " ", 1),
            t.required ? (h(), f("label", Kn, "*")) : v("", !0)
          ]),
          x("div", {
            class: "switch",
            onClick: d[1] || (d[1] = (a) => s("switch", t.variable))
          }, [
            W(x("input", {
              "onUpdate:modelValue": d[0] || (d[0] = (a) => y(n)[t.variable] = a),
              class: "form-switch",
              id: "switch",
              type: "checkbox"
            }, null, 512), [
              [mt, y(n)[t.variable]]
            ]),
            Gn
          ])
        ]),
        t.help ? (h(), f("span", Xn, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, He = /* @__PURE__ */ $(Qn, [["__scopeId", "data-v-369c0703"]]);
const Yn = { class: "instructions" }, Zn = {
  __name: "Instructions",
  props: {
    text: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const r = e;
    return D((t) => ({
      d5d125a6: e.backgroundColor,
      "6bef72e4": e.textColor
    })), (t, n) => (h(), f("div", Yn, E(r.text), 1));
  }
}, eo = /* @__PURE__ */ $(Zn, [["__scopeId", "data-v-b0037800"]]);
const to = { key: 0 }, ro = { class: "label" }, no = {
  key: 0,
  class: "mandatory-indicator"
}, oo = ["required"], io = { key: 0 }, so = {
  key: 1,
  class: "help"
}, ao = {
  __name: "FormInputNumber",
  props: {
    type: String,
    label: String,
    required: Boolean,
    variable: String,
    validations: {
      type: Object,
      default: null
    },
    help: String,
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["onChange"],
  setup(e, { emit: r }) {
    const t = e;
    D((s) => ({
      daad15b2: e.highlightColor,
      fc1165c4: e.textColor,
      ed50859c: e.themeColor
    }));
    let n = mn(), o = {};
    H(() => {
      Reflect.set(o, t.variable, null);
    });
    function i() {
      n.validate(t.validations, o[t.variable], t.label), r("onChange", t.variable, o[t.variable]);
    }
    return (s, c) => (h(), f("div", null, [
      t.type === "number" ? (h(), f("span", to, [
        x("p", ro, [
          q(E(t.label) + " ", 1),
          t.required ? (h(), f("label", no, "*")) : v("", !0)
        ]),
        W(x("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => y(o)[t.variable] = d),
          class: z(y(n).hasError.value ? "err-input" : "input form-input"),
          type: "number",
          onInput: i,
          placeholder: "0",
          required: t.required
        }, null, 42, oo), [
          [Q, y(o)[t.variable]]
        ]),
        y(n).hasError.value ? (h(), f("span", io, [
          O(M, {
            variant: "Error",
            message: y(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : v("", !0),
        t.help ? (h(), f("span", so, E(t.help), 1)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}, Ve = /* @__PURE__ */ $(ao, [["__scopeId", "data-v-134cb102"]]);
const ht = (e) => (ze("data-v-2d1322bb"), e = e(), We(), e), lo = { class: "container" }, co = ["onSubmit"], uo = { class: "title" }, ho = { key: 0 }, fo = { style: { display: "flex" } }, po = {
  key: 0,
  class: "inner-column"
}, mo = { key: 1 }, bo = {
  key: 1,
  style: { padding: "15px 0" }
}, go = ["href"], yo = { class: "button-holder" }, vo = /* @__PURE__ */ ht(() => /* @__PURE__ */ x("div", { class: "btn" }, null, -1)), xo = /* @__PURE__ */ ht(() => /* @__PURE__ */ x("div", { class: "btn" }, null, -1)), Co = { class: "btn" }, So = { class: "btn" }, _o = {
  class: "button-col-width button",
  type: "submit"
}, Eo = {
  __name: "FormBuilder",
  props: {
    loadFrom: {
      type: String,
      default: null
    },
    data: {
      type: Object,
      default: null
    },
    hasCancelButton: {
      type: Boolean,
      default: !1
    },
    hasBorderWithShadow: {
      type: Boolean,
      default: !1
    },
    hasBorder: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Number,
      default: 1
    },
    submitButtonText: {
      type: String,
      default: "Submit"
    },
    colSpacing: {
      type: String,
      default: "5px"
    },
    fontFamily: {
      type: String,
      default: "Arial"
    },
    themeColor: {
      type: String,
      default: "#a0a0a0"
    },
    highlightColor: {
      type: String,
      default: "#d50303"
    },
    textColor: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["cancel", "submit", "submitted"],
  setup(e, { emit: r }) {
    const t = e;
    D((S) => ({
      "6c15ba28": e.textColor,
      "4e3582c6": e.fontFamily,
      "4114a124": e.themeColor,
      a1e01558: y(i),
      bb8026a6: e.colSpacing
    }));
    const n = {};
    let o = {}, i = "100%";
    const s = P(null), c = P(null), d = P(null);
    let a = Fr.create({});
    a.interceptors.request.use((S) => S), a.interceptors.response.use(
      (S) => S,
      (S) => (S.response.status === 401 && alert("Wrong input"), S.response.status === 403 && alert("Not authorized to access that page. Access Denied"), Promise.reject(S))
    ), H(() => {
      t.hasCancelButton && (i = "50%"), t.loadFrom !== null && C(t.loadFrom), t.data !== null && (o = t.data);
    });
    function u(S, k) {
      n[S] = k;
    }
    function g() {
      if (t.loadFrom !== null) {
        let S = s.server.url;
        F(S, n);
      } else
        r("submit", n);
    }
    function R() {
      r("cancel", "canceled");
    }
    function w(S, k) {
      n[k] = S;
    }
    function p(S, k) {
      n[k] = S;
    }
    async function C(S) {
      await a.get(S).then((k) => {
        s.value = k.data;
      }).catch((k) => {
        d.value = k;
      });
    }
    async function F(S, k) {
      await a.post(S, k).then((T) => {
        c.value = T.data;
      }).catch((T) => {
        d.value = T;
      });
    }
    return Oe(() => s, () => {
      o = s;
    }), Oe(() => c, () => {
      r("submitted", c);
    }), (S, k) => (h(), f("div", lo, [
      x("form", {
        class: z(e.hasBorder ? "form" : e.hasBorderWithShadow ? "form-shadow-borderless" : "form-borderless"),
        id: "form",
        onSubmit: bt(g, ["prevent"])
      }, [
        x("h2", uo, E(y(o).title), 1),
        y(o).instructions ? (h(), f("div", ho, [
          O(eo, {
            text: y(o).instructions.information,
            "background-color": y(o).instructions.backgroundColor
          }, null, 8, ["text", "background-color"])
        ])) : v("", !0),
        x("div", fo, [
          (h(!0), f(L, null, U(y(o).form.columns, (T, G) => (h(), f("div", {
            key: G,
            class: "column"
          }, [
            (h(!0), f(L, null, U(T.fields, (m, ft) => (h(), f("div", { key: ft }, [
              m.type === "column" ? (h(), f("div", po, [
                (h(!0), f(L, null, U(m.columns, (b, we) => (h(), f("span", {
                  key: we,
                  class: z(we === m.columns.length - 1 ? "col-end" : "col")
                }, [
                  O(Ue, {
                    type: b.type,
                    label: b.label,
                    variable: b.variable,
                    required: b.required,
                    help: b.help,
                    validations: b.validations,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                  O(Ve, {
                    type: b.type,
                    label: b.label,
                    variable: b.variable,
                    required: b.required,
                    help: b.help,
                    validations: b.validations,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                  O(je, {
                    type: b.type,
                    label: b.label,
                    variable: b.variable,
                    required: b.required,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Le, {
                    type: b.type,
                    label: b.label,
                    variable: b.variable,
                    required: b.required,
                    validations: b.validations,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                  O(He, {
                    type: b.type,
                    label: b.label,
                    variable: b.variable,
                    required: b.required,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Me, {
                    type: b.type,
                    label: b.label,
                    options: b.options,
                    variable: b.variable,
                    required: b.required,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(De, {
                    type: b.type,
                    onPickedItem: w,
                    label: b.label,
                    variable: b.variable,
                    options: b.options,
                    orientation: b.orientation,
                    required: b.required,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Ie, {
                    type: b.type,
                    onCheckedItems: p,
                    label: b.label,
                    variable: b.variable,
                    options: b.options,
                    orientation: b.orientation,
                    required: b.required,
                    help: b.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: u
                  }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
                ], 2))), 128))
              ])) : (h(), f("div", mo, [
                O(Ue, {
                  type: m.type,
                  label: m.label,
                  variable: m.variable,
                  required: m.required,
                  help: m.help,
                  validations: m.validations,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                O(Ve, {
                  type: m.type,
                  label: m.label,
                  variable: m.variable,
                  required: m.required,
                  help: m.help,
                  validations: m.validations,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                O(je, {
                  type: m.type,
                  label: m.label,
                  variable: m.variable,
                  required: m.required,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Le, {
                  type: m.type,
                  label: m.label,
                  variable: m.variable,
                  required: m.required,
                  validations: m.validations,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                O(He, {
                  type: m.type,
                  label: m.label,
                  variable: m.variable,
                  required: m.required,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Me, {
                  type: m.type,
                  label: m.label,
                  options: m.options,
                  variable: m.variable,
                  required: m.required,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(De, {
                  type: m.type,
                  onPickedItem: w,
                  label: m.label,
                  variable: m.variable,
                  options: m.options,
                  orientation: m.orientation,
                  required: m.required,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Ie, {
                  type: m.type,
                  onCheckedItems: p,
                  label: m.label,
                  variable: m.variable,
                  options: m.options,
                  orientation: m.orientation,
                  required: m.required,
                  help: m.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: u
                }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
              ]))
            ]))), 128))
          ]))), 128))
        ]),
        y(o).informationLinks ? (h(), f("div", bo, [
          (h(!0), f(L, null, U(y(o).informationLinks, (T, G) => (h(), f("p", { key: G }, [
            q(E(T.label) + " ", 1),
            x("a", {
              class: "link",
              target: "_blank",
              href: T.url
            }, "here", 8, go)
          ]))), 128))
        ])) : v("", !0),
        x("div", yo, [
          vo,
          xo,
          x("div", Co, [
            e.hasCancelButton ? (h(), f("button", {
              key: 0,
              class: "button-col-width outline-button",
              type: "button",
              onClick: R
            }, "Cancel")) : v("", !0)
          ]),
          x("div", So, [
            x("button", _o, E(t.submitButtonText), 1)
          ])
        ])
      ], 42, co)
    ]));
  }
}, wo = /* @__PURE__ */ $(Eo, [["__scopeId", "data-v-2d1322bb"]]), Ro = {
  install: (e, r) => {
    e.component("FormBuilder", wo);
  }
};
export {
  Ro as default
};
