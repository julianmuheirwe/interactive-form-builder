import { openBlock as d, createElementBlock as h, createElementVNode as C, normalizeClass as W, toDisplayString as _, createTextVNode as q, useCssVars as I, ref as D, onMounted as V, createCommentVNode as y, Fragment as U, renderList as j, unref as v, createVNode as O, withDirectives as J, vModelText as Q, vModelSelect as mt, vModelCheckbox as bt, pushScopeId as We, popScopeId as Je, watch as Re, withModifiers as gt } from "vue";
function Ke(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: yt } = Object.prototype, { getPrototypeOf: Ce } = Object, se = ((e) => (r) => {
  const t = yt.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (r) => se(r) === e), ae = (e) => (r) => typeof r === e, { isArray: G } = Array, Y = ae("undefined");
function vt(e) {
  return e !== null && !Y(e) && e.constructor !== null && !Y(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ge = L("ArrayBuffer");
function xt(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Ge(e.buffer), r;
}
const Ct = ae("string"), N = ae("function"), Xe = ae("number"), le = (e) => e !== null && typeof e == "object", St = (e) => e === !0 || e === !1, te = (e) => {
  if (se(e) !== "object")
    return !1;
  const r = Ce(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, _t = L("Date"), Et = L("File"), wt = L("Blob"), Ot = L("FileList"), Rt = (e) => le(e) && N(e.pipe), kt = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((r = se(e)) === "formdata" || // detect form-data instance
  r === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, At = L("URLSearchParams"), Tt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Z(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), G(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let c;
    for (n = 0; n < s; n++)
      c = i[n], r.call(null, e[c], c, e);
  }
}
function Qe(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const Ye = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ze = (e) => !Y(e) && e !== Ye;
function ge() {
  const { caseless: e } = Ze(this) && this || {}, r = {}, t = (n, o) => {
    const i = e && Qe(r, o) || o;
    te(r[i]) && te(n) ? r[i] = ge(r[i], n) : te(n) ? r[i] = ge({}, n) : G(n) ? r[i] = n.slice() : r[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Z(arguments[n], t);
  return r;
}
const qt = (e, r, t, { allOwnKeys: n } = {}) => (Z(r, (o, i) => {
  t && N(o) ? e[i] = Ke(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), Nt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ft = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, $t = (e, r, t, n) => {
  let o, i, s;
  const c = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, r)) && !c[s] && (r[s] = e[s], c[s] = !0);
    e = t !== !1 && Ce(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Bt = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, Pt = (e) => {
  if (!e)
    return null;
  if (G(e))
    return e;
  let r = e.length;
  if (!Xe(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Dt = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Ce(Uint8Array)), It = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, Lt = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, Ut = L("HTMLFormElement"), jt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), ke = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Mt = L("RegExp"), et = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  Z(t, (o, i) => {
    r(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, Ht = (e) => {
  et(e, (r, t) => {
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
}, Vt = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return G(e) ? n(e) : n(String(e).split(r)), t;
}, zt = () => {
}, Wt = (e, r) => (e = +e, Number.isFinite(e) ? e : r), fe = "abcdefghijklmnopqrstuvwxyz", Ae = "0123456789", tt = {
  DIGIT: Ae,
  ALPHA: fe,
  ALPHA_DIGIT: fe + fe.toUpperCase() + Ae
}, Jt = (e = 16, r = tt.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function Kt(e) {
  return !!(e && N(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Gt = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (le(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const i = G(n) ? [] : {};
        return Z(n, (s, c) => {
          const u = t(s, o + 1);
          !Y(u) && (i[c] = u);
        }), r[o] = void 0, i;
      }
    }
    return n;
  };
  return t(e, 0);
}, Xt = L("AsyncFunction"), Qt = (e) => e && (le(e) || N(e)) && N(e.then) && N(e.catch), l = {
  isArray: G,
  isArrayBuffer: Ge,
  isBuffer: vt,
  isFormData: kt,
  isArrayBufferView: xt,
  isString: Ct,
  isNumber: Xe,
  isBoolean: St,
  isObject: le,
  isPlainObject: te,
  isUndefined: Y,
  isDate: _t,
  isFile: Et,
  isBlob: wt,
  isRegExp: Mt,
  isFunction: N,
  isStream: Rt,
  isURLSearchParams: At,
  isTypedArray: Dt,
  isFileList: Ot,
  forEach: Z,
  merge: ge,
  extend: qt,
  trim: Tt,
  stripBOM: Nt,
  inherits: Ft,
  toFlatObject: $t,
  kindOf: se,
  kindOfTest: L,
  endsWith: Bt,
  toArray: Pt,
  forEachEntry: It,
  matchAll: Lt,
  isHTMLForm: Ut,
  hasOwnProperty: ke,
  hasOwnProp: ke,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: et,
  freezeMethods: Ht,
  toObjectSet: Vt,
  toCamelCase: jt,
  noop: zt,
  toFiniteNumber: Wt,
  findKey: Qe,
  global: Ye,
  isContextDefined: Ze,
  ALPHABET: tt,
  generateString: Jt,
  isSpecCompliantForm: Kt,
  toJSONObject: Gt,
  isAsyncFn: Xt,
  isThenable: Qt
};
function S(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
l.inherits(S, Error, {
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
const rt = S.prototype, nt = {};
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
  nt[e] = { value: e };
});
Object.defineProperties(S, nt);
Object.defineProperty(rt, "isAxiosError", { value: !0 });
S.from = (e, r, t, n, o, i) => {
  const s = Object.create(rt);
  return l.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError"), S.call(s, e.message, r, t, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Yt = null;
function ye(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function ot(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Te(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = ot(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function Zt(e) {
  return l.isArray(e) && !e.some(ye);
}
const er = l.toFlatObject(l, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function ce(e, r, t) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = l.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, F) {
    return !l.isUndefined(F[x]);
  });
  const n = t.metaTokens, o = t.visitor || f, i = t.dots, s = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(r);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function a(m) {
    if (m === null)
      return "";
    if (l.isDate(m))
      return m.toISOString();
    if (!u && l.isBlob(m))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(m) || l.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, x, F) {
    let T = m;
    if (m && !F && typeof m == "object") {
      if (l.endsWith(x, "{}"))
        x = n ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if (l.isArray(m) && Zt(m) || (l.isFileList(m) || l.endsWith(x, "[]")) && (T = l.toArray(m)))
        return x = ot(x), T.forEach(function(A, B) {
          !(l.isUndefined(A) || A === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Te([x], B, i) : s === null ? x : x + "[]",
            a(A)
          );
        }), !1;
    }
    return ye(m) ? !0 : (r.append(Te(F, x, i), a(m)), !1);
  }
  const p = [], R = Object.assign(er, {
    defaultVisitor: f,
    convertValue: a,
    isVisitable: ye
  });
  function w(m, x) {
    if (!l.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      p.push(m), l.forEach(m, function(T, E) {
        (!(l.isUndefined(T) || T === null) && o.call(
          r,
          T,
          l.isString(E) ? E.trim() : E,
          x,
          R
        )) === !0 && w(T, x ? x.concat(E) : [E]);
      }), p.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), r;
}
function qe(e) {
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
function Se(e, r) {
  this._pairs = [], e && ce(e, this, r);
}
const it = Se.prototype;
it.append = function(r, t) {
  this._pairs.push([r, t]);
};
it.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, qe);
  } : qe;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function tr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function st(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || tr, o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = l.isURLSearchParams(r) ? r.toString() : new Se(r, t).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class rr {
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
const Ne = rr, at = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, nr = typeof URLSearchParams < "u" ? URLSearchParams : Se, or = typeof FormData < "u" ? FormData : null, ir = typeof Blob < "u" ? Blob : null, sr = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ar = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), P = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nr,
    FormData: or,
    Blob: ir
  },
  isStandardBrowserEnv: sr,
  isStandardBrowserWebWorkerEnv: ar,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function lr(e, r) {
  return ce(e, new P.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, i) {
      return P.isNode && l.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function cr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function ur(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let i;
  for (n = 0; n < o; n++)
    i = t[n], r[i] = e[i];
  return r;
}
function lt(e) {
  function r(t, n, o, i) {
    let s = t[i++];
    const c = Number.isFinite(+s), u = i >= t.length;
    return s = !s && l.isArray(o) ? o.length : s, u ? (l.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !c) : ((!o[s] || !l.isObject(o[s])) && (o[s] = []), r(t, n, o[s], i) && l.isArray(o[s]) && (o[s] = ur(o[s])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const t = {};
    return l.forEachEntry(e, (n, o) => {
      r(cr(n), o, t, 0);
    }), t;
  }
  return null;
}
const dr = {
  "Content-Type": void 0
};
function hr(e, r, t) {
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
  transitional: at,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = l.isObject(r);
    if (i && l.isHTMLForm(r) && (r = new FormData(r)), l.isFormData(r))
      return o && o ? JSON.stringify(lt(r)) : r;
    if (l.isArrayBuffer(r) || l.isBuffer(r) || l.isStream(r) || l.isFile(r) || l.isBlob(r))
      return r;
    if (l.isArrayBufferView(r))
      return r.buffer;
    if (l.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return lr(r, this.formSerializer).toString();
      if ((c = l.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ce(
          c ? { "files[]": r } : r,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), hr(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || ue.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && l.isString(r) && (n && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? S.from(c, S.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: P.classes.FormData,
    Blob: P.classes.Blob
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
  ue.headers[r] = l.merge(dr);
});
const _e = ue, fr = l.toObjectSet([
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
]), pr = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!t || r[t] && fr[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, Fe = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function re(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(re) : String(e);
}
function mr(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const br = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pe(e, r, t, n, o) {
  if (l.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!l.isString(r)) {
    if (l.isString(n))
      return r.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(r);
  }
}
function gr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function yr(e, r) {
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
    function i(c, u, a) {
      const f = X(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(o, f);
      (!p || o[p] === void 0 || a === !0 || a === void 0 && o[p] !== !1) && (o[p || u] = re(c));
    }
    const s = (c, u) => l.forEach(c, (a, f) => i(a, f, u));
    return l.isPlainObject(r) || r instanceof this.constructor ? s(r, t) : l.isString(r) && (r = r.trim()) && !br(r) ? s(pr(r), t) : r != null && i(t, r, n), this;
  }
  get(r, t) {
    if (r = X(r), r) {
      const n = l.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return mr(o);
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
      return !!(n && this[n] !== void 0 && (!t || pe(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = X(s), s) {
        const c = l.findKey(n, s);
        c && (!t || pe(n, n[c], c, t)) && (delete n[c], o = !0);
      }
    }
    return l.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const i = t[n];
      (!r || pe(this, this[i], i, r, !0)) && (delete this[i], o = !0);
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
      const c = r ? gr(i) : String(i).trim();
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
    const n = (this[Fe] = this[Fe] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const c = X(s);
      n[c] || (yr(o, s), n[c] = !0);
    }
    return l.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(de.prototype);
l.freezeMethods(de);
const M = de;
function me(e, r) {
  const t = this || _e, n = r || t, o = M.from(n.headers);
  let i = n.data;
  return l.forEach(e, function(c) {
    i = c.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function ct(e) {
  return !!(e && e.__CANCEL__);
}
function ee(e, r, t) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, r, t), this.name = "CanceledError";
}
l.inherits(ee, S, {
  __CANCEL__: !0
});
function vr(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new S(
    "Request failed with status code " + t.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const xr = P.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, n, o, i, s, c) {
        const u = [];
        u.push(t + "=" + encodeURIComponent(n)), l.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), l.isString(i) && u.push("path=" + i), l.isString(s) && u.push("domain=" + s), c === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function Cr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sr(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function ut(e, r) {
  return e && !Cr(r) ? Sr(e, r) : r;
}
const _r = P.isStandardBrowserEnv ? (
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
function Er(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function wr(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return r = r !== void 0 ? r : 1e3, function(u) {
    const a = Date.now(), f = n[i];
    s || (s = a), t[o] = u, n[o] = a;
    let p = i, R = 0;
    for (; p !== o; )
      R += t[p++], p = p % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), a - s < r)
      return;
    const w = f && a - f;
    return w ? Math.round(R * 1e3 / w) : void 0;
  };
}
function $e(e, r) {
  let t = 0;
  const n = wr(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, c = i - t, u = n(c), a = i <= s;
    t = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s && a ? (s - i) / u : void 0,
      event: o
    };
    f[r ? "download" : "upload"] = !0, e(f);
  };
}
const Or = typeof XMLHttpRequest < "u", Rr = Or && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const i = M.from(e.headers).normalize(), s = e.responseType;
    let c;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    l.isFormData(o) && (P.isStandardBrowserEnv || P.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(w + ":" + m));
    }
    const f = ut(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), st(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function p() {
      if (!a)
        return;
      const w = M.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), x = {
        data: !s || s === "text" || s === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: w,
        config: e,
        request: a
      };
      vr(function(T) {
        t(T), u();
      }, function(T) {
        n(T), u();
      }, x), a = null;
    }
    if ("onloadend" in a ? a.onloadend = p : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, a.onabort = function() {
      a && (n(new S("Request aborted", S.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new S("Network Error", S.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const x = e.transitional || at;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new S(
        m,
        x.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        a
      )), a = null;
    }, P.isStandardBrowserEnv) {
      const w = (e.withCredentials || _r(f)) && e.xsrfCookieName && xr.read(e.xsrfCookieName);
      w && i.set(e.xsrfHeaderName, w);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in a && l.forEach(i.toJSON(), function(m, x) {
      a.setRequestHeader(x, m);
    }), l.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), s && s !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", $e(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", $e(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (w) => {
      a && (n(!w || w.type ? new ee(null, e, a) : w), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const R = Er(f);
    if (R && P.protocols.indexOf(R) === -1) {
      n(new S("Unsupported protocol " + R + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(o || null);
  });
}, ne = {
  http: Yt,
  xhr: Rr
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
const kr = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    for (let o = 0; o < r && (t = e[o], !(n = l.isString(t) ? ne[t.toLowerCase()] : t)); o++)
      ;
    if (!n)
      throw n === !1 ? new S(
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
function be(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ee(null, e);
}
function Be(e) {
  return be(e), e.headers = M.from(e.headers), e.data = me.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kr.getAdapter(e.adapter || _e.adapter)(e).then(function(n) {
    return be(e), n.data = me.call(
      e,
      e.transformResponse,
      n
    ), n.headers = M.from(n.headers), n;
  }, function(n) {
    return ct(n) || (be(e), n && n.response && (n.response.data = me.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = M.from(n.response.headers))), Promise.reject(n);
  });
}
const Pe = (e) => e instanceof M ? e.toJSON() : e;
function K(e, r) {
  r = r || {};
  const t = {};
  function n(a, f, p) {
    return l.isPlainObject(a) && l.isPlainObject(f) ? l.merge.call({ caseless: p }, a, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function o(a, f, p) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(a))
        return n(void 0, a, p);
    } else
      return n(a, f, p);
  }
  function i(a, f) {
    if (!l.isUndefined(f))
      return n(void 0, f);
  }
  function s(a, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(a))
        return n(void 0, a);
    } else
      return n(void 0, f);
  }
  function c(a, f, p) {
    if (p in r)
      return n(a, f);
    if (p in e)
      return n(void 0, a);
  }
  const u = {
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
    headers: (a, f) => o(Pe(a), Pe(f), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, e, r)), function(f) {
    const p = u[f] || o, R = p(e[f], r[f], f);
    l.isUndefined(R) && p !== c || (t[f] = R);
  }), t;
}
const dt = "1.4.0", Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  Ee[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const De = {};
Ee.transitional = function(r, t, n) {
  function o(i, s) {
    return "[Axios v" + dt + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, c) => {
    if (r === !1)
      throw new S(
        o(s, " has been removed" + (t ? " in " + t : "")),
        S.ERR_DEPRECATED
      );
    return t && !De[s] && (De[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, s, c) : !0;
  };
};
function Ar(e, r, t) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = r[i];
    if (s) {
      const c = e[i], u = c === void 0 || s(c, i, e);
      if (u !== !0)
        throw new S("option " + i + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const ve = {
  assertOptions: Ar,
  validators: Ee
}, z = ve.validators;
class ie {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new Ne(),
      response: new Ne()
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
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = K(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: i } = t;
    n !== void 0 && ve.assertOptions(n, {
      silentJSONParsing: z.transitional(z.boolean),
      forcedJSONParsing: z.transitional(z.boolean),
      clarifyTimeoutError: z.transitional(z.boolean)
    }, !1), o != null && (l.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : ve.assertOptions(o, {
      encode: z.function,
      serialize: z.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && l.merge(
      i.common,
      i[t.method]
    ), s && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), t.headers = M.concat(s, i);
    const c = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(t) === !1 || (u = u && x.synchronous, c.unshift(x.fulfilled, x.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(x) {
      a.push(x.fulfilled, x.rejected);
    });
    let f, p = 0, R;
    if (!u) {
      const m = [Be.bind(this), void 0];
      for (m.unshift.apply(m, c), m.push.apply(m, a), R = m.length, f = Promise.resolve(t); p < R; )
        f = f.then(m[p++], m[p++]);
      return f;
    }
    R = c.length;
    let w = t;
    for (p = 0; p < R; ) {
      const m = c[p++], x = c[p++];
      try {
        w = m(w);
      } catch (F) {
        x.call(this, F);
        break;
      }
    }
    try {
      f = Be.call(this, w);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, R = a.length; p < R; )
      f = f.then(a[p++], a[p++]);
    return f;
  }
  getUri(r) {
    r = K(this.defaults, r);
    const t = ut(r.baseURL, r.url);
    return st(t, r.params, r.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(r) {
  ie.prototype[r] = function(t, n) {
    return this.request(K(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, s, c) {
      return this.request(K(c || {}, {
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
class we {
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
      token: new we(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const Tr = we;
function qr(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Nr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const xe = {
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
Object.entries(xe).forEach(([e, r]) => {
  xe[r] = e;
});
const Fr = xe;
function ht(e) {
  const r = new oe(e), t = Ke(oe.prototype.request, r);
  return l.extend(t, oe.prototype, r, { allOwnKeys: !0 }), l.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return ht(K(e, o));
  }, t;
}
const k = ht(_e);
k.Axios = oe;
k.CanceledError = ee;
k.CancelToken = Tr;
k.isCancel = ct;
k.VERSION = dt;
k.toFormData = ce;
k.AxiosError = S;
k.Cancel = k.CanceledError;
k.all = function(r) {
  return Promise.all(r);
};
k.spread = qr;
k.isAxiosError = Nr;
k.mergeConfig = K;
k.AxiosHeaders = M;
k.formToJSON = (e) => lt(l.isHTMLForm(e) ? new FormData(e) : e);
k.HttpStatusCode = Fr;
k.default = k;
const $r = k;
const $ = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of r)
    t[n] = o;
  return t;
}, Br = {
  name: "ValidationError",
  props: {
    message: String,
    variant: String
  }
};
function Pr(e, r, t, n, o, i) {
  return d(), h("div", null, [
    C("p", {
      class: W(t.variant === "Error" ? "error" : t.variant === "Warning" ? "warning" : "")
    }, [
      C("b", {
        class: W(t.variant === "Error" ? "error-header" : t.variant === "Warning" ? "warning-header" : "")
      }, _(t.variant), 3),
      q(" " + _(t.message), 1)
    ], 2)
  ]);
}
const H = /* @__PURE__ */ $(Br, [["render", Pr], ["__scopeId", "data-v-e01a4c08"]]);
const Dr = {
  key: 0,
  style: { "padding-top": "10px", "padding-bottom": "10px" }
}, Ir = { class: "label" }, Lr = {
  key: 0,
  class: "mandatory-indicator"
}, Ur = { key: 0 }, jr = ["id", "onChange"], Mr = ["for"], Hr = { key: 1 }, Vr = ["id", "onChange"], zr = ["for"], Wr = { key: 2 }, Jr = {
  key: 3,
  class: "help"
}, Kr = {
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
    I((c) => ({
      "44f88f58": e.highlightColor,
      c3f6c242: e.themeColor,
      "02fdfc5e": e.textColor
    }));
    let n = D(!1), o = "";
    V(() => {
      t.required && (n.value = !0, o = "Select one of these options");
    });
    function i(c) {
      r("onChange", t.variable, c);
      const u = document.querySelectorAll('input[name="btn"]');
      for (const a of u)
        if (a.checked) {
          a.value;
          break;
        }
    }
    function s(c) {
      return c.replaceAll(" ", "_").toLowerCase();
    }
    return (c, u) => (d(), h("div", null, [
      t.type === "radio" ? (d(), h("div", Dr, [
        C("p", Ir, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", Lr, "*")) : y("", !0)
        ]),
        e.orientation === "vertical" ? (d(), h("span", Ur, [
          (d(!0), h(U, null, j(e.options, (a, f) => (d(), h("div", {
            class: "form-radio",
            key: f
          }, [
            C("input", {
              id: s(a),
              type: "radio",
              name: "btn",
              onChange: (p) => i(a)
            }, null, 40, jr),
            C("label", {
              class: "label-text",
              for: s(a)
            }, _(a), 9, Mr)
          ]))), 128))
        ])) : y("", !0),
        e.orientation === "horizontal" ? (d(), h("span", Hr, [
          (d(!0), h(U, null, j(e.options, (a, f) => (d(), h("span", {
            class: "form-radio",
            key: f
          }, [
            C("input", {
              id: s(a),
              type: "radio",
              name: "btn",
              onChange: (p) => i(a)
            }, null, 40, Vr),
            C("label", {
              class: "label-text",
              for: s(a)
            }, _(a), 9, zr)
          ]))), 128))
        ])) : y("", !0),
        v(n) ? (d(), h("span", Wr, [
          O(H, {
            style: { "padding-top": "5px" },
            variant: "Warning",
            message: v(o)
          }, null, 8, ["message"])
        ])) : y("", !0),
        t.help ? (d(), h("span", Jr, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, Ie = /* @__PURE__ */ $(Kr, [["__scopeId", "data-v-db942c27"]]);
const Gr = {
  key: 0,
  style: { "padding-top": "10px", "padding-bottom": "10px" }
}, Xr = { key: 0 }, Qr = { class: "label" }, Yr = {
  key: 0,
  class: "mandatory-indicator"
}, Zr = { key: 1 }, en = ["onChange"], tn = { class: "label-text" }, rn = { key: 2 }, nn = ["onChange"], on = { class: "label-text" }, sn = {
  key: 3,
  class: "help"
}, an = {
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
    I((u) => ({
      "20dfba27": e.highlightColor,
      "4f788232": e.themeColor,
      "7bac2fc4": e.textColor
    }));
    let n = [], o = D(!1), i = "";
    V(() => {
      t.required && (o.value = !0, i = "Select at least one of these options");
    });
    function s(u) {
      let a = c(u);
      a === -1 ? (n.push(u), r("onChange", t.variable, n)) : n.splice(a, 1);
    }
    function c(u) {
      for (let a = 0; a < n.length; a++)
        if (n[a] === u)
          return a;
      return -1;
    }
    return (u, a) => (d(), h("div", null, [
      t.type === "checkbox" ? (d(), h("div", Gr, [
        v(o) ? (d(), h("span", Xr, [
          O(H, {
            variant: "Warning",
            message: v(i)
          }, null, 8, ["message"])
        ])) : y("", !0),
        C("p", Qr, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", Yr, "*")) : y("", !0)
        ]),
        e.orientation === "vertical" ? (d(), h("span", Zr, [
          (d(!0), h(U, null, j(e.options, (f, p) => (d(), h("div", {
            class: "form-checkbox",
            key: p
          }, [
            C("input", {
              onChange: (R) => s(f),
              type: "checkbox"
            }, null, 40, en),
            q(),
            C("label", tn, _(f), 1)
          ]))), 128))
        ])) : y("", !0),
        e.orientation === "horizontal" ? (d(), h("span", rn, [
          (d(!0), h(U, null, j(e.options, (f, p) => (d(), h("span", {
            class: "form-checkbox",
            key: p
          }, [
            C("input", {
              onChange: (R) => s(f),
              type: "checkbox"
            }, null, 40, nn),
            q(),
            C("label", on, _(f), 1)
          ]))), 128))
        ])) : y("", !0),
        t.help ? (d(), h("span", sn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, Le = /* @__PURE__ */ $(an, [["__scopeId", "data-v-8fc115ac"]]);
const ln = { key: 0 }, cn = { class: "label" }, un = {
  key: 0,
  class: "mandatory-indicator"
}, dn = ["required"], hn = { key: 0 }, fn = {
  key: 1,
  class: "help"
}, pn = {
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
    I((u) => ({
      "9d4de14c": e.highlightColor,
      a07241ea: e.textColor,
      "157a68e5": e.themeColor
    }));
    let n = {}, o = D(!1), i = null;
    function s() {
      if (t.validations.maxLength) {
        if (n[t.variable].length > t.validations.maxLength)
          return o.value = !0, i = "This is longer than " + t.validations.maxLength + " characters", !0;
        o.value = !1, i = null;
      }
      if (t.validations.regex) {
        let u = new RegExp(t.validations.regex), a = n[t.variable];
        if (a != null && a !== "")
          if (u.test(a))
            o.value = !1, i = null;
          else
            return o.value = !0, i = "Invalid " + t.label, !0;
        else
          o.value = !1, i = null;
      }
      return !1;
    }
    V(() => {
      Reflect.set(n, t.variable, null);
    });
    function c() {
      s(), r("onChange", t.variable, n[t.variable]);
    }
    return (u, a) => (d(), h("div", null, [
      t.type === "text-lg" ? (d(), h("span", ln, [
        C("p", cn, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", un, "*")) : y("", !0)
        ]),
        J(C("textarea", {
          "onUpdate:modelValue": a[0] || (a[0] = (f) => v(n)[t.variable] = f),
          class: "input form-input",
          rows: "4",
          onInput: c,
          required: t.required
        }, null, 40, dn), [
          [Q, v(n)[t.variable]]
        ]),
        v(o) ? (d(), h("span", hn, [
          O(H, {
            variant: "Error",
            message: v(i)
          }, null, 8, ["message"])
        ])) : y("", !0),
        t.help ? (d(), h("span", fn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, Ue = /* @__PURE__ */ $(pn, [["__scopeId", "data-v-22dee218"]]);
function mn() {
  let e = D(!1), r = D("");
  function t(n, o, i) {
    if (n.maxLength && (o.length > n.maxLength ? (e.value = !0, r.value = "This is longer than " + n.maxLength + " characters") : (e.value = !1, r.value = "")), n.regex) {
      let s = new RegExp(n.regex), c = o;
      c != null && c !== "" ? s.test(c) ? (e.value = !1, r.value = null) : (e.value = !0, r.value = "Invalid " + i) : (e.value = !1, r.value = null);
    }
  }
  return { hasError: e, errorMessage: r, validate: t };
}
function bn() {
  let e = D(!1), r = D("");
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
const gn = { key: 0 }, yn = { class: "label" }, vn = {
  key: 0,
  class: "mandatory-indicator"
}, xn = ["required"], Cn = { key: 0 }, Sn = {
  key: 1,
  class: "help"
}, _n = { key: 1 }, En = { class: "label" }, wn = {
  key: 0,
  class: "mandatory-indicator"
}, On = ["required"], Rn = { key: 0 }, kn = {
  key: 1,
  class: "help"
}, An = {
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
    I((s) => ({
      "9f2fb3e4": e.highlightColor,
      "2d2967d7": e.textColor,
      "4468f999": e.themeColor
    }));
    const n = mn();
    let o = {};
    V(() => {
      Reflect.set(o, t.variable, null);
    });
    function i() {
      n.validate(t.validations, o[t.variable], t.label), r("onChange", t.variable, o[t.variable]);
    }
    return (s, c) => (d(), h("div", null, [
      t.type === "text" ? (d(), h("span", gn, [
        C("p", yn, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", vn, "*")) : y("", !0)
        ]),
        J(C("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => v(o)[t.variable] = u),
          class: W(v(n).hasError.value ? "err-input" : "input form-input"),
          type: "text",
          onInput: i,
          required: t.required
        }, null, 42, xn), [
          [Q, v(o)[t.variable]]
        ]),
        v(n).hasError.value ? (d(), h("span", Cn, [
          O(H, {
            variant: "Error",
            message: v(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : y("", !0),
        t.help ? (d(), h("span", Sn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0),
      t.type === "text-masked" ? (d(), h("span", _n, [
        C("p", En, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", wn, "*")) : y("", !0)
        ]),
        J(C("input", {
          "onUpdate:modelValue": c[1] || (c[1] = (u) => v(o)[t.variable] = u),
          class: W(v(n).hasError.value ? "err-input" : "input form-input"),
          type: "password",
          onInput: i,
          required: t.required
        }, null, 42, On), [
          [Q, v(o)[t.variable]]
        ]),
        v(n).hasError.value ? (d(), h("span", Rn, [
          O(H, {
            variant: "Error",
            message: v(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : y("", !0),
        t.help ? (d(), h("span", kn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, je = /* @__PURE__ */ $(An, [["__scopeId", "data-v-d16ef5db"]]);
const Tn = { key: 0 }, qn = { key: 0 }, Nn = { class: "label" }, Fn = {
  key: 0,
  class: "mandatory-indicator"
}, $n = ["placeholder", "required"], Bn = {
  key: 1,
  class: "help"
}, Pn = {
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
    I((c) => ({
      "6f66e990": e.highlightColor,
      aa0a09d6: e.textColor,
      fe6c63ca: e.themeColor
    }));
    let n = {}, o = !1, i = "";
    V(() => {
      Reflect.set(n, t.variable, null);
    });
    function s() {
      r("onChange", t.variable, n[t.variable]);
    }
    return (c, u) => (d(), h("div", null, [
      t.type === "date" ? (d(), h("span", Tn, [
        v(o) ? (d(), h("span", qn, [
          O(H, {
            variant: "Warning",
            message: v(i)
          }, null, 8, ["message"])
        ])) : y("", !0),
        C("p", Nn, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", Fn, "*")) : y("", !0)
        ]),
        J(C("input", {
          "onUpdate:modelValue": u[0] || (u[0] = (a) => v(n)[t.variable] = a),
          class: "input form-input",
          type: "date",
          onInput: s,
          placeholder: "Enter your " + t.label,
          required: t.required
        }, null, 40, $n), [
          [Q, v(n)[t.variable]]
        ]),
        t.help ? (d(), h("span", Bn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, Me = /* @__PURE__ */ $(Pn, [["__scopeId", "data-v-2e80b03e"]]);
const Dn = { key: 0 }, In = { key: 0 }, Ln = { class: "label" }, Un = {
  key: 0,
  class: "mandatory-indicator"
}, jn = ["value"], Mn = {
  key: 1,
  class: "help"
}, Hn = {
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
    I((c) => ({
      "8405c254": e.highlightColor,
      "6b7e120f": e.textColor,
      "5eacd33e": e.themeColor
    }));
    let n = {}, o = !1, i = "";
    V(() => {
      Reflect.set(n, t.variable, null);
    });
    function s() {
      r("onChange", t.variable, n[t.variable]);
    }
    return (c, u) => (d(), h("div", null, [
      t.type === "select" ? (d(), h("span", Dn, [
        v(o) ? (d(), h("span", In, [
          O(H, {
            variant: "Warning",
            message: v(i)
          }, null, 8, ["message"])
        ])) : y("", !0),
        C("p", Ln, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", Un, "*")) : y("", !0)
        ]),
        J(C("select", {
          "onUpdate:modelValue": u[0] || (u[0] = (a) => v(n)[t.variable] = a),
          class: "select form-select",
          onChange: s
        }, [
          (d(!0), h(U, null, j(t.options, (a, f) => (d(), h("option", {
            class: "option",
            key: f,
            value: a
          }, _(a), 9, jn))), 128))
        ], 544), [
          [mt, v(n)[t.variable]]
        ]),
        t.help ? (d(), h("span", Mn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, He = /* @__PURE__ */ $(Hn, [["__scopeId", "data-v-5b67c33f"]]);
const Vn = (e) => (We("data-v-369c0703"), e = e(), Je(), e), zn = { key: 0 }, Wn = { key: 0 }, Jn = { style: { "padding-top": "15px", "padding-bottom": "7px" } }, Kn = { class: "label" }, Gn = {
  key: 0,
  class: "mandatory-indicator"
}, Xn = /* @__PURE__ */ Vn(() => /* @__PURE__ */ C("span", { class: "slider round" }, null, -1)), Qn = {
  key: 1,
  class: "help"
}, Yn = {
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
    I((c) => ({
      "25016efc": e.highlightColor,
      "7af7e987": e.themeColor,
      "1625c229": e.textColor
    }));
    let n = {}, o = !1, i = "";
    V(() => {
      Reflect.set(n, t.variable, !1);
    });
    function s(c, u) {
      n[u] = !n[u], document.getElementById(c).checked = n[u], r("onChange", t.variable, n[t.variable]);
    }
    return (c, u) => (d(), h("div", null, [
      t.type === "switch" ? (d(), h("span", zn, [
        v(o) ? (d(), h("span", Wn, [
          O(H, {
            variant: "Warning",
            message: v(i)
          }, null, 8, ["message"])
        ])) : y("", !0),
        C("div", Jn, [
          C("span", Kn, [
            q(_(t.label) + " ", 1),
            t.required ? (d(), h("label", Gn, "*")) : y("", !0)
          ]),
          C("div", {
            class: "switch",
            onClick: u[1] || (u[1] = (a) => s("switch", t.variable))
          }, [
            J(C("input", {
              "onUpdate:modelValue": u[0] || (u[0] = (a) => v(n)[t.variable] = a),
              class: "form-switch",
              id: "switch",
              type: "checkbox"
            }, null, 512), [
              [bt, v(n)[t.variable]]
            ]),
            Xn
          ])
        ]),
        t.help ? (d(), h("span", Qn, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, Ve = /* @__PURE__ */ $(Yn, [["__scopeId", "data-v-369c0703"]]);
const Zn = { class: "instructions" }, eo = {
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
    return I((t) => ({
      d5d125a6: e.backgroundColor,
      "6bef72e4": e.textColor
    })), (t, n) => (d(), h("div", Zn, _(r.text), 1));
  }
}, to = /* @__PURE__ */ $(eo, [["__scopeId", "data-v-b0037800"]]);
const ro = { key: 0 }, no = { class: "label" }, oo = {
  key: 0,
  class: "mandatory-indicator"
}, io = ["required"], so = { key: 0 }, ao = {
  key: 1,
  class: "help"
}, lo = {
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
    I((s) => ({
      daad15b2: e.highlightColor,
      fc1165c4: e.textColor,
      ed50859c: e.themeColor
    }));
    let n = bn(), o = {};
    V(() => {
      Reflect.set(o, t.variable, null);
    });
    function i() {
      n.validate(t.validations, o[t.variable], t.label), r("onChange", t.variable, o[t.variable]);
    }
    return (s, c) => (d(), h("div", null, [
      t.type === "number" ? (d(), h("span", ro, [
        C("p", no, [
          q(_(t.label) + " ", 1),
          t.required ? (d(), h("label", oo, "*")) : y("", !0)
        ]),
        J(C("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => v(o)[t.variable] = u),
          class: W(v(n).hasError.value ? "err-input" : "input form-input"),
          type: "number",
          onInput: i,
          placeholder: "0",
          required: t.required
        }, null, 42, io), [
          [Q, v(o)[t.variable]]
        ]),
        v(n).hasError.value ? (d(), h("span", so, [
          O(H, {
            variant: "Error",
            message: v(n).errorMessage.value
          }, null, 8, ["message"])
        ])) : y("", !0),
        t.help ? (d(), h("span", ao, _(t.help), 1)) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}, ze = /* @__PURE__ */ $(lo, [["__scopeId", "data-v-134cb102"]]);
const ft = (e) => (We("data-v-8b0e7d9d"), e = e(), Je(), e), co = { class: "container" }, uo = ["onSubmit"], ho = { class: "title" }, fo = { key: 0 }, po = { style: { display: "flex" } }, mo = {
  key: 0,
  class: "inner-column"
}, bo = { key: 1 }, go = {
  key: 1,
  style: { padding: "15px 0" }
}, yo = ["href"], vo = { class: "button-holder" }, xo = /* @__PURE__ */ ft(() => /* @__PURE__ */ C("div", { class: "btn" }, null, -1)), Co = /* @__PURE__ */ ft(() => /* @__PURE__ */ C("div", { class: "btn" }, null, -1)), So = { class: "btn" }, _o = { class: "btn" }, Eo = {
  class: "button-col-width button",
  type: "submit"
}, wo = {
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
    I((E) => ({
      "31137f2e": e.textColor,
      "6b87d0c0": e.fontFamily,
      58919972: e.themeColor,
      "3c66b437": v(i),
      "34e27ed0": e.colSpacing
    }));
    const n = {};
    let o = {}, i = "100%";
    const s = D(null), c = D(null), u = D(null);
    let a = $r.create({});
    a.interceptors.request.use((E) => E), a.interceptors.response.use(
      (E) => E,
      (E) => (E.response.status === 401 && alert("Wrong input"), E.response.status === 403 && alert("Not authorized to access that page. Access Denied"), Promise.reject(E))
    ), V(() => {
      t.hasCancelButton && (i = "50%"), t.loadFrom !== null && f(), t.data !== null && (o = t.data);
    });
    function f() {
      F(t.loadFrom);
    }
    function p(E, A) {
      n[E] = A;
    }
    function R() {
      if (t.loadFrom !== null) {
        let E = s.server.url;
        T(E, n);
      } else
        r("submit", n);
    }
    function w() {
      r("cancel", "canceled");
    }
    function m(E, A) {
      n[A] = E;
    }
    function x(E, A) {
      n[A] = E;
    }
    async function F(E) {
      await a.get(E).then((A) => {
        s.value = A.data;
      }).catch((A) => {
        u.value = A;
      });
    }
    async function T(E, A) {
      await a.post(E, A).then((B) => {
        c.value = B.data;
      }).catch((B) => {
        u.value = B;
      });
    }
    return Re(() => s, () => {
      o = s;
    }), Re(() => c, () => {
      r("submitted", c);
    }), (E, A) => (d(), h("div", co, [
      s.value.value ? (d(), h("form", {
        key: 0,
        class: W(e.hasBorder ? "form" : e.hasBorderWithShadow ? "form-shadow-borderless" : "form-borderless"),
        id: "form",
        onSubmit: gt(R, ["prevent"])
      }, [
        C("h2", ho, _(v(o).title), 1),
        v(o).instructions ? (d(), h("div", fo, [
          O(to, {
            text: v(o).instructions.information,
            "background-color": v(o).instructions.backgroundColor
          }, null, 8, ["text", "background-color"])
        ])) : y("", !0),
        C("div", po, [
          (d(!0), h(U, null, j(v(o).form.columns, (B, he) => (d(), h("div", {
            key: he,
            class: "column"
          }, [
            (d(!0), h(U, null, j(B.fields, (b, pt) => (d(), h("div", { key: pt }, [
              b.type === "column" ? (d(), h("div", mo, [
                (d(!0), h(U, null, j(b.columns, (g, Oe) => (d(), h("span", {
                  key: Oe,
                  class: W(Oe === b.columns.length - 1 ? "col-end" : "col")
                }, [
                  O(je, {
                    type: g.type,
                    label: g.label,
                    variable: g.variable,
                    required: g.required,
                    help: g.help,
                    validations: g.validations,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                  O(ze, {
                    type: g.type,
                    label: g.label,
                    variable: g.variable,
                    required: g.required,
                    help: g.help,
                    validations: g.validations,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                  O(Me, {
                    type: g.type,
                    label: g.label,
                    variable: g.variable,
                    required: g.required,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Ue, {
                    type: g.type,
                    label: g.label,
                    variable: g.variable,
                    required: g.required,
                    validations: g.validations,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Ve, {
                    type: g.type,
                    label: g.label,
                    variable: g.variable,
                    required: g.required,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(He, {
                    type: g.type,
                    label: g.label,
                    options: g.options,
                    variable: g.variable,
                    required: g.required,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Ie, {
                    type: g.type,
                    onPickedItem: m,
                    label: g.label,
                    variable: g.variable,
                    options: g.options,
                    orientation: g.orientation,
                    required: g.required,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                  O(Le, {
                    type: g.type,
                    onCheckedItems: x,
                    label: g.label,
                    variable: g.variable,
                    options: g.options,
                    orientation: g.orientation,
                    required: g.required,
                    help: g.help,
                    "theme-color": e.themeColor,
                    "highlight-color": e.highlightColor,
                    "text-color": e.textColor,
                    onOnChange: p
                  }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
                ], 2))), 128))
              ])) : (d(), h("div", bo, [
                O(je, {
                  type: b.type,
                  label: b.label,
                  variable: b.variable,
                  required: b.required,
                  help: b.help,
                  validations: b.validations,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                O(ze, {
                  type: b.type,
                  label: b.label,
                  variable: b.variable,
                  required: b.required,
                  help: b.help,
                  validations: b.validations,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                O(Me, {
                  type: b.type,
                  label: b.label,
                  variable: b.variable,
                  required: b.required,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Ue, {
                  type: b.type,
                  label: b.label,
                  variable: b.variable,
                  required: b.required,
                  validations: b.validations,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                O(Ve, {
                  type: b.type,
                  label: b.label,
                  variable: b.variable,
                  required: b.required,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(He, {
                  type: b.type,
                  label: b.label,
                  options: b.options,
                  variable: b.variable,
                  required: b.required,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Ie, {
                  type: b.type,
                  onPickedItem: m,
                  label: b.label,
                  variable: b.variable,
                  options: b.options,
                  orientation: b.orientation,
                  required: b.required,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                O(Le, {
                  type: b.type,
                  onCheckedItems: x,
                  label: b.label,
                  variable: b.variable,
                  options: b.options,
                  orientation: b.orientation,
                  required: b.required,
                  help: b.help,
                  "theme-color": e.themeColor,
                  "highlight-color": e.highlightColor,
                  "text-color": e.textColor,
                  onOnChange: p
                }, null, 8, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
              ]))
            ]))), 128))
          ]))), 128))
        ]),
        v(o).informationLinks ? (d(), h("div", go, [
          (d(!0), h(U, null, j(v(o).informationLinks, (B, he) => (d(), h("p", { key: he }, [
            q(_(B.label) + " ", 1),
            C("a", {
              class: "link",
              target: "_blank",
              href: B.url
            }, "here", 8, yo)
          ]))), 128))
        ])) : y("", !0),
        C("div", vo, [
          xo,
          Co,
          C("div", So, [
            e.hasCancelButton ? (d(), h("button", {
              key: 0,
              class: "button-col-width outline-button",
              type: "button",
              onClick: w
            }, "Cancel")) : y("", !0)
          ]),
          C("div", _o, [
            C("button", Eo, _(t.submitButtonText), 1)
          ])
        ])
      ], 42, uo)) : y("", !0)
    ]));
  }
}, Oo = /* @__PURE__ */ $(wo, [["__scopeId", "data-v-8b0e7d9d"]]), ko = {
  install: (e, r) => {
    e.component("FormBuilder", Oo);
  }
};
export {
  ko as default
};
