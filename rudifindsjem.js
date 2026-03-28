var Im = (e) => {
  throw TypeError(e);
};
var Bc = (e, t, i) => t.has(e) || Im("Cannot " + i);
var $ = (e, t, i) => (
    Bc(e, t, "read from private field"), i ? i.call(e) : t.get(e)
  ),
  Pe = (e, t, i) =>
    t.has(e)
      ? Im("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, i),
  be = (e, t, i, s) => (
    Bc(e, t, "write to private field"), s ? s.call(e, i) : t.set(e, i), i
  ),
  ht = (e, t, i) => (Bc(e, t, "access private method"), i);
var dl = (e, t, i, s) => ({
  set _(a) {
    be(e, t, a, i);
  },
  get _() {
    return $(e, t, s);
  },
});
function jb(e, t) {
  for (var i = 0; i < t.length; i++) {
    const s = t[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const a in s)
        if (a !== "default" && !(a in e)) {
          const u = Object.getOwnPropertyDescriptor(s, a);
          u &&
            Object.defineProperty(
              e,
              a,
              u.get ? u : { enumerable: !0, get: () => s[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = i(a);
    fetch(a.href, u);
  }
})();
function i0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $c = { exports: {} },
  mo = {},
  Uc = { exports: {} },
  Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function Nb() {
  if (Vm) return Te;
  Vm = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (v && M[v]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    C = {};
  function T(M, z, re) {
    (this.props = M),
      (this.context = z),
      (this.refs = C),
      (this.updater = re || x);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (M, z) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, M, z, "setState");
    }),
    (T.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    });
  function k() {}
  k.prototype = T.prototype;
  function R(M, z, re) {
    (this.props = M),
      (this.context = z),
      (this.refs = C),
      (this.updater = re || x);
  }
  var j = (R.prototype = new k());
  (j.constructor = R), E(j, T.prototype), (j.isPureReactComponent = !0);
  var D = Array.isArray,
    O = Object.prototype.hasOwnProperty,
    B = { current: null },
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(M, z, re) {
    var se,
      me = {},
      Se = null,
      fe = null;
    if (z != null)
      for (se in (z.ref !== void 0 && (fe = z.ref),
      z.key !== void 0 && (Se = "" + z.key),
      z))
        O.call(z, se) && !V.hasOwnProperty(se) && (me[se] = z[se]);
    var Ee = arguments.length - 2;
    if (Ee === 1) me.children = re;
    else if (1 < Ee) {
      for (var ke = Array(Ee), He = 0; He < Ee; He++)
        ke[He] = arguments[He + 2];
      me.children = ke;
    }
    if (M && M.defaultProps)
      for (se in ((Ee = M.defaultProps), Ee))
        me[se] === void 0 && (me[se] = Ee[se]);
    return {
      $$typeof: e,
      type: M,
      key: Se,
      ref: fe,
      props: me,
      _owner: B.current,
    };
  }
  function te(M, z) {
    return {
      $$typeof: e,
      type: M.type,
      key: z,
      ref: M.ref,
      props: M.props,
      _owner: M._owner,
    };
  }
  function Z(M) {
    return typeof M == "object" && M !== null && M.$$typeof === e;
  }
  function de(M) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (re) {
        return z[re];
      })
    );
  }
  var ne = /\/+/g;
  function ge(M, z) {
    return typeof M == "object" && M !== null && M.key != null
      ? de("" + M.key)
      : z.toString(36);
  }
  function X(M, z, re, se, me) {
    var Se = typeof M;
    (Se === "undefined" || Se === "boolean") && (M = null);
    var fe = !1;
    if (M === null) fe = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case e:
            case t:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = M),
        (me = me(fe)),
        (M = se === "" ? "." + ge(fe, 0) : se),
        D(me)
          ? ((re = ""),
            M != null && (re = M.replace(ne, "$&/") + "/"),
            X(me, z, re, "", function (He) {
              return He;
            }))
          : me != null &&
            (Z(me) &&
              (me = te(
                me,
                re +
                  (!me.key || (fe && fe.key === me.key)
                    ? ""
                    : ("" + me.key).replace(ne, "$&/") + "/") +
                  M
              )),
            z.push(me)),
        1
      );
    if (((fe = 0), (se = se === "" ? "." : se + ":"), D(M)))
      for (var Ee = 0; Ee < M.length; Ee++) {
        Se = M[Ee];
        var ke = se + ge(Se, Ee);
        fe += X(Se, z, re, ke, me);
      }
    else if (((ke = w(M)), typeof ke == "function"))
      for (M = ke.call(M), Ee = 0; !(Se = M.next()).done; )
        (Se = Se.value), (ke = se + ge(Se, Ee++)), (fe += X(Se, z, re, ke, me));
    else if (Se === "object")
      throw (
        ((z = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return fe;
  }
  function ye(M, z, re) {
    if (M == null) return M;
    var se = [],
      me = 0;
    return (
      X(M, se, "", "", function (Se) {
        return z.call(re, Se, me++);
      }),
      se
    );
  }
  function ce(M) {
    if (M._status === -1) {
      var z = M._result;
      (z = z()),
        z.then(
          function (re) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = re));
          },
          function (re) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = re));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = z));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ee = { current: null },
    F = { transition: null },
    U = {
      ReactCurrentDispatcher: ee,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: B,
    };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Te.Children = {
      map: ye,
      forEach: function (M, z, re) {
        ye(
          M,
          function () {
            z.apply(this, arguments);
          },
          re
        );
      },
      count: function (M) {
        var z = 0;
        return (
          ye(M, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (M) {
        return (
          ye(M, function (z) {
            return z;
          }) || []
        );
      },
      only: function (M) {
        if (!Z(M))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return M;
      },
    }),
    (Te.Component = T),
    (Te.Fragment = i),
    (Te.Profiler = a),
    (Te.PureComponent = R),
    (Te.StrictMode = s),
    (Te.Suspense = h),
    (Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (Te.act = G),
    (Te.cloneElement = function (M, z, re) {
      if (M == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            M +
            "."
        );
      var se = E({}, M.props),
        me = M.key,
        Se = M.ref,
        fe = M._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((Se = z.ref), (fe = B.current)),
          z.key !== void 0 && (me = "" + z.key),
          M.type && M.type.defaultProps)
        )
          var Ee = M.type.defaultProps;
        for (ke in z)
          O.call(z, ke) &&
            !V.hasOwnProperty(ke) &&
            (se[ke] = z[ke] === void 0 && Ee !== void 0 ? Ee[ke] : z[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) se.children = re;
      else if (1 < ke) {
        Ee = Array(ke);
        for (var He = 0; He < ke; He++) Ee[He] = arguments[He + 2];
        se.children = Ee;
      }
      return {
        $$typeof: e,
        type: M.type,
        key: me,
        ref: Se,
        props: se,
        _owner: fe,
      };
    }),
    (Te.createContext = function (M) {
      return (
        (M = {
          $$typeof: c,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (M.Provider = { $$typeof: u, _context: M }),
        (M.Consumer = M)
      );
    }),
    (Te.createElement = H),
    (Te.createFactory = function (M) {
      var z = H.bind(null, M);
      return (z.type = M), z;
    }),
    (Te.createRef = function () {
      return { current: null };
    }),
    (Te.forwardRef = function (M) {
      return { $$typeof: d, render: M };
    }),
    (Te.isValidElement = Z),
    (Te.lazy = function (M) {
      return { $$typeof: g, _payload: { _status: -1, _result: M }, _init: ce };
    }),
    (Te.memo = function (M, z) {
      return { $$typeof: p, type: M, compare: z === void 0 ? null : z };
    }),
    (Te.startTransition = function (M) {
      var z = F.transition;
      F.transition = {};
      try {
        M();
      } finally {
        F.transition = z;
      }
    }),
    (Te.unstable_act = G),
    (Te.useCallback = function (M, z) {
      return ee.current.useCallback(M, z);
    }),
    (Te.useContext = function (M) {
      return ee.current.useContext(M);
    }),
    (Te.useDebugValue = function () {}),
    (Te.useDeferredValue = function (M) {
      return ee.current.useDeferredValue(M);
    }),
    (Te.useEffect = function (M, z) {
      return ee.current.useEffect(M, z);
    }),
    (Te.useId = function () {
      return ee.current.useId();
    }),
    (Te.useImperativeHandle = function (M, z, re) {
      return ee.current.useImperativeHandle(M, z, re);
    }),
    (Te.useInsertionEffect = function (M, z) {
      return ee.current.useInsertionEffect(M, z);
    }),
    (Te.useLayoutEffect = function (M, z) {
      return ee.current.useLayoutEffect(M, z);
    }),
    (Te.useMemo = function (M, z) {
      return ee.current.useMemo(M, z);
    }),
    (Te.useReducer = function (M, z, re) {
      return ee.current.useReducer(M, z, re);
    }),
    (Te.useRef = function (M) {
      return ee.current.useRef(M);
    }),
    (Te.useState = function (M) {
      return ee.current.useState(M);
    }),
    (Te.useSyncExternalStore = function (M, z, re) {
      return ee.current.useSyncExternalStore(M, z, re);
    }),
    (Te.useTransition = function () {
      return ee.current.useTransition();
    }),
    (Te.version = "18.3.1"),
    Te
  );
}
var _m;
function nf() {
  return _m || ((_m = 1), (Uc.exports = Nb())), Uc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fm;
function Rb() {
  if (Fm) return mo;
  Fm = 1;
  var e = nf(),
    t = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, p) {
    var g,
      v = {},
      w = null,
      x = null;
    p !== void 0 && (w = "" + p),
      h.key !== void 0 && (w = "" + h.key),
      h.ref !== void 0 && (x = h.ref);
    for (g in h) s.call(h, g) && !u.hasOwnProperty(g) && (v[g] = h[g]);
    if (d && d.defaultProps)
      for (g in ((h = d.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return {
      $$typeof: t,
      type: d,
      key: w,
      ref: x,
      props: v,
      _owner: a.current,
    };
  }
  return (mo.Fragment = i), (mo.jsx = c), (mo.jsxs = c), mo;
}
var zm;
function Ab() {
  return zm || ((zm = 1), ($c.exports = Rb())), $c.exports;
}
var y = Ab(),
  fl = {},
  Wc = { exports: {} },
  Rt = {},
  Hc = { exports: {} },
  Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm;
function Mb() {
  return (
    Bm ||
      ((Bm = 1),
      (function (e) {
        function t(F, U) {
          var G = F.length;
          F.push(U);
          e: for (; 0 < G; ) {
            var M = (G - 1) >>> 1,
              z = F[M];
            if (0 < a(z, U)) (F[M] = U), (F[G] = z), (G = M);
            else break e;
          }
        }
        function i(F) {
          return F.length === 0 ? null : F[0];
        }
        function s(F) {
          if (F.length === 0) return null;
          var U = F[0],
            G = F.pop();
          if (G !== U) {
            F[0] = G;
            e: for (var M = 0, z = F.length, re = z >>> 1; M < re; ) {
              var se = 2 * (M + 1) - 1,
                me = F[se],
                Se = se + 1,
                fe = F[Se];
              if (0 > a(me, G))
                Se < z && 0 > a(fe, me)
                  ? ((F[M] = fe), (F[Se] = G), (M = Se))
                  : ((F[M] = me), (F[se] = G), (M = se));
              else if (Se < z && 0 > a(fe, G))
                (F[M] = fe), (F[Se] = G), (M = Se);
              else break e;
            }
          }
          return U;
        }
        function a(F, U) {
          var G = F.sortIndex - U.sortIndex;
          return G !== 0 ? G : F.id - U.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          p = [],
          g = 1,
          v = null,
          w = 3,
          x = !1,
          E = !1,
          C = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          R = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(F) {
          for (var U = i(p); U !== null; ) {
            if (U.callback === null) s(p);
            else if (U.startTime <= F)
              s(p), (U.sortIndex = U.expirationTime), t(h, U);
            else break;
            U = i(p);
          }
        }
        function D(F) {
          if (((C = !1), j(F), !E))
            if (i(h) !== null) (E = !0), ce(O);
            else {
              var U = i(p);
              U !== null && ee(D, U.startTime - F);
            }
        }
        function O(F, U) {
          (E = !1), C && ((C = !1), k(H), (H = -1)), (x = !0);
          var G = w;
          try {
            for (
              j(U), v = i(h);
              v !== null && (!(v.expirationTime > U) || (F && !de()));

            ) {
              var M = v.callback;
              if (typeof M == "function") {
                (v.callback = null), (w = v.priorityLevel);
                var z = M(v.expirationTime <= U);
                (U = e.unstable_now()),
                  typeof z == "function"
                    ? (v.callback = z)
                    : v === i(h) && s(h),
                  j(U);
              } else s(h);
              v = i(h);
            }
            if (v !== null) var re = !0;
            else {
              var se = i(p);
              se !== null && ee(D, se.startTime - U), (re = !1);
            }
            return re;
          } finally {
            (v = null), (w = G), (x = !1);
          }
        }
        var B = !1,
          V = null,
          H = -1,
          te = 5,
          Z = -1;
        function de() {
          return !(e.unstable_now() - Z < te);
        }
        function ne() {
          if (V !== null) {
            var F = e.unstable_now();
            Z = F;
            var U = !0;
            try {
              U = V(!0, F);
            } finally {
              U ? ge() : ((B = !1), (V = null));
            }
          } else B = !1;
        }
        var ge;
        if (typeof R == "function")
          ge = function () {
            R(ne);
          };
        else if (typeof MessageChannel < "u") {
          var X = new MessageChannel(),
            ye = X.port2;
          (X.port1.onmessage = ne),
            (ge = function () {
              ye.postMessage(null);
            });
        } else
          ge = function () {
            T(ne, 0);
          };
        function ce(F) {
          (V = F), B || ((B = !0), ge());
        }
        function ee(F, U) {
          H = T(function () {
            F(e.unstable_now());
          }, U);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            E || x || ((E = !0), ce(O));
          }),
          (e.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (te = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return i(h);
          }),
          (e.unstable_next = function (F) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = w;
            }
            var G = w;
            w = U;
            try {
              return F();
            } finally {
              w = G;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (F, U) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var G = w;
            w = F;
            try {
              return U();
            } finally {
              w = G;
            }
          }),
          (e.unstable_scheduleCallback = function (F, U, G) {
            var M = e.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? M + G : M))
                : (G = M),
              F)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = G + z),
              (F = {
                id: g++,
                callback: U,
                priorityLevel: F,
                startTime: G,
                expirationTime: z,
                sortIndex: -1,
              }),
              G > M
                ? ((F.sortIndex = G),
                  t(p, F),
                  i(h) === null &&
                    F === i(p) &&
                    (C ? (k(H), (H = -1)) : (C = !0), ee(D, G - M)))
                : ((F.sortIndex = z), t(h, F), E || x || ((E = !0), ce(O))),
              F
            );
          }),
          (e.unstable_shouldYield = de),
          (e.unstable_wrapCallback = function (F) {
            var U = w;
            return function () {
              var G = w;
              w = U;
              try {
                return F.apply(this, arguments);
              } finally {
                w = G;
              }
            };
          });
      })(Kc)),
    Kc
  );
}
var $m;
function Db() {
  return $m || (($m = 1), (Hc.exports = Mb())), Hc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um;
function Lb() {
  if (Um) return Rt;
  Um = 1;
  var e = nf(),
    t = Db();
  function i(n) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        o = 1;
      o < arguments.length;
      o++
    )
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    a = {};
  function u(n, r) {
    c(n, r), c(n + "Capture", r);
  }
  function c(n, r) {
    for (a[n] = r, n = 0; n < r.length; n++) s.add(r[n]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    p =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function w(n) {
    return h.call(v, n)
      ? !0
      : h.call(g, n)
      ? !1
      : p.test(n)
      ? (v[n] = !0)
      : ((g[n] = !0), !1);
  }
  function x(n, r, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : o !== null
          ? !o.acceptsBooleans
          : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function E(n, r, o, l) {
    if (r === null || typeof r > "u" || x(n, r, o, l)) return !0;
    if (l) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function C(n, r, o, l, f, m, b) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = l),
      (this.attributeNamespace = f),
      (this.mustUseProperty = o),
      (this.propertyName = n),
      (this.type = r),
      (this.sanitizeURL = m),
      (this.removeEmptyString = b);
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      T[n] = new C(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var r = n[0];
      T[r] = new C(r, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      n
    ) {
      T[n] = new C(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      T[n] = new C(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        T[n] = new C(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      T[n] = new C(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      T[n] = new C(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      T[n] = new C(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      T[n] = new C(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var k = /[\-:]([a-z])/g;
  function R(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var r = n.replace(k, R);
      T[r] = new C(r, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var r = n.replace(k, R);
        T[r] = new C(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var r = n.replace(k, R);
      T[r] = new C(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      T[n] = new C(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      T[n] = new C(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function j(n, r, o, l) {
    var f = T.hasOwnProperty(r) ? T[r] : null;
    (f !== null
      ? f.type !== 0
      : l ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      (E(r, o, f, l) && (o = null),
      l || f === null
        ? w(r) &&
          (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o))
        : f.mustUseProperty
        ? (n[f.propertyName] = o === null ? (f.type === 3 ? !1 : "") : o)
        : ((r = f.attributeName),
          (l = f.attributeNamespace),
          o === null
            ? n.removeAttribute(r)
            : ((f = f.type),
              (o = f === 3 || (f === 4 && o === !0) ? "" : "" + o),
              l ? n.setAttributeNS(l, r, o) : n.setAttribute(r, o))));
  }
  var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    O = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    te = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    de = Symbol.for("react.context"),
    ne = Symbol.for("react.forward_ref"),
    ge = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    ye = Symbol.for("react.memo"),
    ce = Symbol.for("react.lazy"),
    ee = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function U(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (F && n[F]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var G = Object.assign,
    M;
  function z(n) {
    if (M === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        M = (r && r[1]) || "";
      }
    return (
      `
` +
      M +
      n
    );
  }
  var re = !1;
  function se(n, r) {
    if (!n || re) return "";
    re = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (_) {
            var l = _;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (_) {
            l = _;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          l = _;
        }
        n();
      }
    } catch (_) {
      if (_ && l && typeof _.stack == "string") {
        for (
          var f = _.stack.split(`
`),
            m = l.stack.split(`
`),
            b = f.length - 1,
            P = m.length - 1;
          1 <= b && 0 <= P && f[b] !== m[P];

        )
          P--;
        for (; 1 <= b && 0 <= P; b--, P--)
          if (f[b] !== m[P]) {
            if (b !== 1 || P !== 1)
              do
                if ((b--, P--, 0 > P || f[b] !== m[P])) {
                  var N =
                    `
` + f[b].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", n.displayName)),
                    N
                  );
                }
              while (1 <= b && 0 <= P);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = o);
    }
    return (n = n ? n.displayName || n.name : "") ? z(n) : "";
  }
  function me(n) {
    switch (n.tag) {
      case 5:
        return z(n.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (n = se(n.type, !1)), n;
      case 11:
        return (n = se(n.type.render, !1)), n;
      case 1:
        return (n = se(n.type, !0)), n;
      default:
        return "";
    }
  }
  function Se(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case V:
        return "Fragment";
      case B:
        return "Portal";
      case te:
        return "Profiler";
      case H:
        return "StrictMode";
      case ge:
        return "Suspense";
      case X:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case de:
          return (n.displayName || "Context") + ".Consumer";
        case Z:
          return (n._context.displayName || "Context") + ".Provider";
        case ne:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case ye:
          return (
            (r = n.displayName || null), r !== null ? r : Se(n.type) || "Memo"
          );
        case ce:
          (r = n._payload), (n = n._init);
          try {
            return Se(n(r));
          } catch {}
      }
    return null;
  }
  function fe(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = r.render),
          (n = n.displayName || n.name || ""),
          r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(r);
      case 8:
        return r === H ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ee(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ke(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function He(n) {
    var r = ke(n) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      l = "" + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        m = o.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (b) {
            (l = "" + b), m.call(this, b);
          },
        }),
        Object.defineProperty(n, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (b) {
            l = "" + b;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[r];
          },
        }
      );
    }
  }
  function Ot(n) {
    n._valueTracker || (n._valueTracker = He(n));
  }
  function Bn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = "";
    return (
      n && (l = ke(n) ? (n.checked ? "true" : "false") : n.value),
      (n = l),
      n !== o ? (r.setValue(n), !0) : !1
    );
  }
  function It(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function sr(n, r) {
    var o = r.checked;
    return G({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? n._wrapperState.initialChecked,
    });
  }
  function Ri(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    (o = Ee(r.value != null ? r.value : o)),
      (n._wrapperState = {
        initialChecked: l,
        initialValue: o,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function Qr(n, r) {
    (r = r.checked), r != null && j(n, "checked", r, !1);
  }
  function qr(n, r) {
    Qr(n, r);
    var o = Ee(r.value),
      l = r.type;
    if (o != null)
      l === "number"
        ? ((o === 0 && n.value === "") || n.value != o) && (n.value = "" + o)
        : n.value !== "" + o && (n.value = "" + o);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value")
      ? wn(n, r.type, o)
      : r.hasOwnProperty("defaultValue") && wn(n, r.type, Ee(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (n.defaultChecked = !!r.defaultChecked);
  }
  function or(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = "" + n._wrapperState.initialValue),
        o || r === n.value || (n.value = r),
        (n.defaultValue = r);
    }
    (o = n.name),
      o !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      o !== "" && (n.name = o);
  }
  function wn(n, r, o) {
    (r !== "number" || It(n.ownerDocument) !== n) &&
      (o == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var ar = Array.isArray;
  function Ut(n, r, o, l) {
    if (((n = n.options), r)) {
      r = {};
      for (var f = 0; f < o.length; f++) r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        (f = r.hasOwnProperty("$" + n[o].value)),
          n[o].selected !== f && (n[o].selected = f),
          f && l && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ee(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          (n[f].selected = !0), l && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ai(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
    return G({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function bn(n, r) {
    var o = r.value;
    if (o == null) {
      if (((o = r.children), (r = r.defaultValue), o != null)) {
        if (r != null) throw Error(i(92));
        if (ar(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), (o = r);
    }
    n._wrapperState = { initialValue: Ee(o) };
  }
  function Jo(n, r) {
    var o = Ee(r.value),
      l = Ee(r.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== n.value && (n.value = o),
      r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
      l != null && (n.defaultValue = "" + l);
  }
  function Zo(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (n.value = r);
  }
  function gt(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? gt(r)
      : n === "http://www.w3.org/2000/svg" && r === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : n;
  }
  var Mi,
    ea = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, o, l, f) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, o, l, f);
            });
          }
        : n;
    })(function (n, r) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = r;
      else {
        for (
          Mi = Mi || document.createElement("div"),
            Mi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = Mi.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
      }
    });
  function Cn(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Xr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ta = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xr).forEach(function (n) {
    ta.forEach(function (r) {
      (r = r + n.charAt(0).toUpperCase() + n.substring(1)), (Xr[r] = Xr[n]);
    });
  });
  function Di(n, r, o) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : o || typeof r != "number" || r === 0 || (Xr.hasOwnProperty(n) && Xr[n])
      ? ("" + r).trim()
      : r + "px";
  }
  function $n(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0,
          f = Di(o, r[o], l);
        o === "float" && (o = "cssFloat"), l ? n.setProperty(o, f) : (n[o] = f);
      }
  }
  var na = G(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Tn(n, r) {
    if (r) {
      if (na[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(i(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(i(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(i(62));
    }
  }
  function Ms(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ds = null;
  function Li(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Oi = null,
    lr = null,
    En = null;
  function nn(n) {
    if ((n = Zs(n))) {
      if (typeof Oi != "function") throw Error(i(280));
      var r = n.stateNode;
      r && ((r = Pa(r)), Oi(n.stateNode, n.type, r));
    }
  }
  function ra(n) {
    lr ? (En ? En.push(n) : (En = [n])) : (lr = n);
  }
  function we() {
    if (lr) {
      var n = lr,
        r = En;
      if (((En = lr = null), nn(n), r)) for (n = 0; n < r.length; n++) nn(r[n]);
    }
  }
  function Re(n, r) {
    return n(r);
  }
  function Me() {}
  var yt = !1;
  function Ct(n, r, o) {
    if (yt) return n(r, o);
    yt = !0;
    try {
      return Re(n, r, o);
    } finally {
      (yt = !1), (lr !== null || En !== null) && (Me(), we());
    }
  }
  function Tt(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var l = Pa(o);
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((n = n.type),
          (l = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !l);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(i(231, r, typeof o));
    return o;
  }
  var rn = !1;
  if (d)
    try {
      var st = {};
      Object.defineProperty(st, "passive", {
        get: function () {
          rn = !0;
        },
      }),
        window.addEventListener("test", st, st),
        window.removeEventListener("test", st, st);
    } catch {
      rn = !1;
    }
  function Pn(n, r, o, l, f, m, b, P, N) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, _);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Ls = !1,
    ia = null,
    sa = !1,
    ou = null,
    Ow = {
      onError: function (n) {
        (Ls = !0), (ia = n);
      },
    };
  function Iw(n, r, o, l, f, m, b, P, N) {
    (Ls = !1), (ia = null), Pn.apply(Ow, arguments);
  }
  function Vw(n, r, o, l, f, m, b, P, N) {
    if ((Iw.apply(this, arguments), Ls)) {
      if (Ls) {
        var _ = ia;
        (Ls = !1), (ia = null);
      } else throw Error(i(198));
      sa || ((sa = !0), (ou = _));
    }
  }
  function Jr(n) {
    var r = n,
      o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do (r = n), (r.flags & 4098) !== 0 && (o = r.return), (n = r.return);
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function sh(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function oh(n) {
    if (Jr(n) !== n) throw Error(i(188));
  }
  function _w(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = Jr(n)), r === null)) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var o = n, l = r; ; ) {
      var f = o.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (((l = f.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === o) return oh(f), n;
          if (m === l) return oh(f), r;
          m = m.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== l.return) (o = f), (l = m);
      else {
        for (var b = !1, P = f.child; P; ) {
          if (P === o) {
            (b = !0), (o = f), (l = m);
            break;
          }
          if (P === l) {
            (b = !0), (l = f), (o = m);
            break;
          }
          P = P.sibling;
        }
        if (!b) {
          for (P = m.child; P; ) {
            if (P === o) {
              (b = !0), (o = m), (l = f);
              break;
            }
            if (P === l) {
              (b = !0), (l = m), (o = f);
              break;
            }
            P = P.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (o.alternate !== l) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? n : r;
  }
  function ah(n) {
    return (n = _w(n)), n !== null ? lh(n) : null;
  }
  function lh(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = lh(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var uh = t.unstable_scheduleCallback,
    ch = t.unstable_cancelCallback,
    Fw = t.unstable_shouldYield,
    zw = t.unstable_requestPaint,
    Ke = t.unstable_now,
    Bw = t.unstable_getCurrentPriorityLevel,
    au = t.unstable_ImmediatePriority,
    dh = t.unstable_UserBlockingPriority,
    oa = t.unstable_NormalPriority,
    $w = t.unstable_LowPriority,
    fh = t.unstable_IdlePriority,
    aa = null,
    kn = null;
  function Uw(n) {
    if (kn && typeof kn.onCommitFiberRoot == "function")
      try {
        kn.onCommitFiberRoot(aa, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var sn = Math.clz32 ? Math.clz32 : Kw,
    Ww = Math.log,
    Hw = Math.LN2;
  function Kw(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((Ww(n) / Hw) | 0)) | 0;
  }
  var la = 64,
    ua = 4194304;
  function Os(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ca(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var l = 0,
      f = n.suspendedLanes,
      m = n.pingedLanes,
      b = o & 268435455;
    if (b !== 0) {
      var P = b & ~f;
      P !== 0 ? (l = Os(P)) : ((m &= b), m !== 0 && (l = Os(m)));
    } else (b = o & ~f), b !== 0 ? (l = Os(b)) : m !== 0 && (l = Os(m));
    if (l === 0) return 0;
    if (
      r !== 0 &&
      r !== l &&
      (r & f) === 0 &&
      ((f = l & -l), (m = r & -r), f >= m || (f === 16 && (m & 4194240) !== 0))
    )
      return r;
    if (((l & 4) !== 0 && (l |= o & 16), (r = n.entangledLanes), r !== 0))
      for (n = n.entanglements, r &= l; 0 < r; )
        (o = 31 - sn(r)), (f = 1 << o), (l |= n[o]), (r &= ~f);
    return l;
  }
  function Gw(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yw(n, r) {
    for (
      var o = n.suspendedLanes,
        l = n.pingedLanes,
        f = n.expirationTimes,
        m = n.pendingLanes;
      0 < m;

    ) {
      var b = 31 - sn(m),
        P = 1 << b,
        N = f[b];
      N === -1
        ? ((P & o) === 0 || (P & l) !== 0) && (f[b] = Gw(P, r))
        : N <= r && (n.expiredLanes |= P),
        (m &= ~P);
    }
  }
  function lu(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function hh() {
    var n = la;
    return (la <<= 1), (la & 4194240) === 0 && (la = 64), n;
  }
  function uu(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Is(n, r, o) {
    (n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - sn(r)),
      (n[r] = o);
  }
  function Qw(n, r) {
    var o = n.pendingLanes & ~r;
    (n.pendingLanes = r),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= r),
      (n.mutableReadLanes &= r),
      (n.entangledLanes &= r),
      (r = n.entanglements);
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - sn(o),
        m = 1 << f;
      (r[f] = 0), (l[f] = -1), (n[f] = -1), (o &= ~m);
    }
  }
  function cu(n, r) {
    var o = (n.entangledLanes |= r);
    for (n = n.entanglements; o; ) {
      var l = 31 - sn(o),
        f = 1 << l;
      (f & r) | (n[l] & r) && (n[l] |= r), (o &= ~f);
    }
  }
  var Ae = 0;
  function ph(n) {
    return (
      (n &= -n),
      1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var mh,
    du,
    gh,
    yh,
    vh,
    fu = !1,
    da = [],
    ur = null,
    cr = null,
    dr = null,
    Vs = new Map(),
    _s = new Map(),
    fr = [],
    qw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function xh(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ur = null;
        break;
      case "dragenter":
      case "dragleave":
        cr = null;
        break;
      case "mouseover":
      case "mouseout":
        dr = null;
        break;
      case "pointerover":
      case "pointerout":
        Vs.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _s.delete(r.pointerId);
    }
  }
  function Fs(n, r, o, l, f, m) {
    return n === null || n.nativeEvent !== m
      ? ((n = {
          blockedOn: r,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: m,
          targetContainers: [f],
        }),
        r !== null && ((r = Zs(r)), r !== null && du(r)),
        n)
      : ((n.eventSystemFlags |= l),
        (r = n.targetContainers),
        f !== null && r.indexOf(f) === -1 && r.push(f),
        n);
  }
  function Xw(n, r, o, l, f) {
    switch (r) {
      case "focusin":
        return (ur = Fs(ur, n, r, o, l, f)), !0;
      case "dragenter":
        return (cr = Fs(cr, n, r, o, l, f)), !0;
      case "mouseover":
        return (dr = Fs(dr, n, r, o, l, f)), !0;
      case "pointerover":
        var m = f.pointerId;
        return Vs.set(m, Fs(Vs.get(m) || null, n, r, o, l, f)), !0;
      case "gotpointercapture":
        return (
          (m = f.pointerId), _s.set(m, Fs(_s.get(m) || null, n, r, o, l, f)), !0
        );
    }
    return !1;
  }
  function wh(n) {
    var r = Zr(n.target);
    if (r !== null) {
      var o = Jr(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = sh(o)), r !== null)) {
            (n.blockedOn = r),
              vh(n.priority, function () {
                gh(o);
              });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function fa(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = pu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var l = new o.constructor(o.type, o);
        (Ds = l), o.target.dispatchEvent(l), (Ds = null);
      } else return (r = Zs(o)), r !== null && du(r), (n.blockedOn = o), !1;
      r.shift();
    }
    return !0;
  }
  function bh(n, r, o) {
    fa(n) && o.delete(r);
  }
  function Jw() {
    (fu = !1),
      ur !== null && fa(ur) && (ur = null),
      cr !== null && fa(cr) && (cr = null),
      dr !== null && fa(dr) && (dr = null),
      Vs.forEach(bh),
      _s.forEach(bh);
  }
  function zs(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      fu ||
        ((fu = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Jw)));
  }
  function Bs(n) {
    function r(f) {
      return zs(f, n);
    }
    if (0 < da.length) {
      zs(da[0], n);
      for (var o = 1; o < da.length; o++) {
        var l = da[o];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (
      ur !== null && zs(ur, n),
        cr !== null && zs(cr, n),
        dr !== null && zs(dr, n),
        Vs.forEach(r),
        _s.forEach(r),
        o = 0;
      o < fr.length;
      o++
    )
      (l = fr[o]), l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < fr.length && ((o = fr[0]), o.blockedOn === null); )
      wh(o), o.blockedOn === null && fr.shift();
  }
  var Ii = D.ReactCurrentBatchConfig,
    ha = !0;
  function Zw(n, r, o, l) {
    var f = Ae,
      m = Ii.transition;
    Ii.transition = null;
    try {
      (Ae = 1), hu(n, r, o, l);
    } finally {
      (Ae = f), (Ii.transition = m);
    }
  }
  function e1(n, r, o, l) {
    var f = Ae,
      m = Ii.transition;
    Ii.transition = null;
    try {
      (Ae = 4), hu(n, r, o, l);
    } finally {
      (Ae = f), (Ii.transition = m);
    }
  }
  function hu(n, r, o, l) {
    if (ha) {
      var f = pu(n, r, o, l);
      if (f === null) Au(n, r, l, pa, o), xh(n, l);
      else if (Xw(f, n, r, o, l)) l.stopPropagation();
      else if ((xh(n, l), r & 4 && -1 < qw.indexOf(n))) {
        for (; f !== null; ) {
          var m = Zs(f);
          if (
            (m !== null && mh(m),
            (m = pu(n, r, o, l)),
            m === null && Au(n, r, l, pa, o),
            m === f)
          )
            break;
          f = m;
        }
        f !== null && l.stopPropagation();
      } else Au(n, r, l, null, o);
    }
  }
  var pa = null;
  function pu(n, r, o, l) {
    if (((pa = null), (n = Li(l)), (n = Zr(n)), n !== null))
      if (((r = Jr(n)), r === null)) n = null;
      else if (((o = r.tag), o === 13)) {
        if (((n = sh(r)), n !== null)) return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return (pa = n), null;
  }
  function Sh(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Bw()) {
          case au:
            return 1;
          case dh:
            return 4;
          case oa:
          case $w:
            return 16;
          case fh:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hr = null,
    mu = null,
    ma = null;
  function Ch() {
    if (ma) return ma;
    var n,
      r = mu,
      o = r.length,
      l,
      f = "value" in hr ? hr.value : hr.textContent,
      m = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++);
    var b = o - n;
    for (l = 1; l <= b && r[o - l] === f[m - l]; l++);
    return (ma = f.slice(n, 1 < l ? 1 - l : void 0));
  }
  function ga(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function ya() {
    return !0;
  }
  function Th() {
    return !1;
  }
  function Vt(n) {
    function r(o, l, f, m, b) {
      (this._reactName = o),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = m),
        (this.target = b),
        (this.currentTarget = null);
      for (var P in n)
        n.hasOwnProperty(P) && ((o = n[P]), (this[P] = o ? o(m) : m[P]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? ya
          : Th),
        (this.isPropagationStopped = Th),
        this
      );
    }
    return (
      G(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = ya));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = ya));
        },
        persist: function () {},
        isPersistent: ya,
      }),
      r
    );
  }
  var Vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    gu = Vt(Vi),
    $s = G({}, Vi, { view: 0, detail: 0 }),
    t1 = Vt($s),
    yu,
    vu,
    Us,
    va = G({}, $s, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wu,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Us &&
              (Us && n.type === "mousemove"
                ? ((yu = n.screenX - Us.screenX), (vu = n.screenY - Us.screenY))
                : (vu = yu = 0),
              (Us = n)),
            yu);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : vu;
      },
    }),
    Eh = Vt(va),
    n1 = G({}, va, { dataTransfer: 0 }),
    r1 = Vt(n1),
    i1 = G({}, $s, { relatedTarget: 0 }),
    xu = Vt(i1),
    s1 = G({}, Vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    o1 = Vt(s1),
    a1 = G({}, Vi, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    l1 = Vt(a1),
    u1 = G({}, Vi, { data: 0 }),
    Ph = Vt(u1),
    c1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    d1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    f1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function h1(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = f1[n])
      ? !!r[n]
      : !1;
  }
  function wu() {
    return h1;
  }
  var p1 = G({}, $s, {
      key: function (n) {
        if (n.key) {
          var r = c1[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = ga(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? d1[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wu,
      charCode: function (n) {
        return n.type === "keypress" ? ga(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? ga(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    m1 = Vt(p1),
    g1 = G({}, va, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kh = Vt(g1),
    y1 = G({}, $s, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wu,
    }),
    v1 = Vt(y1),
    x1 = G({}, Vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    w1 = Vt(x1),
    b1 = G({}, va, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    S1 = Vt(b1),
    C1 = [9, 13, 27, 32],
    bu = d && "CompositionEvent" in window,
    Ws = null;
  d && "documentMode" in document && (Ws = document.documentMode);
  var T1 = d && "TextEvent" in window && !Ws,
    jh = d && (!bu || (Ws && 8 < Ws && 11 >= Ws)),
    Nh = " ",
    Rh = !1;
  function Ah(n, r) {
    switch (n) {
      case "keyup":
        return C1.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mh(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var _i = !1;
  function E1(n, r) {
    switch (n) {
      case "compositionend":
        return Mh(r);
      case "keypress":
        return r.which !== 32 ? null : ((Rh = !0), Nh);
      case "textInput":
        return (n = r.data), n === Nh && Rh ? null : n;
      default:
        return null;
    }
  }
  function P1(n, r) {
    if (_i)
      return n === "compositionend" || (!bu && Ah(n, r))
        ? ((n = Ch()), (ma = mu = hr = null), (_i = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return jh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var k1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Dh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!k1[n.type] : r === "textarea";
  }
  function Lh(n, r, o, l) {
    ra(l),
      (r = Ca(r, "onChange")),
      0 < r.length &&
        ((o = new gu("onChange", "change", null, o, l)),
        n.push({ event: o, listeners: r }));
  }
  var Hs = null,
    Ks = null;
  function j1(n) {
    Jh(n, 0);
  }
  function xa(n) {
    var r = Ui(n);
    if (Bn(r)) return n;
  }
  function N1(n, r) {
    if (n === "change") return r;
  }
  var Oh = !1;
  if (d) {
    var Su;
    if (d) {
      var Cu = "oninput" in document;
      if (!Cu) {
        var Ih = document.createElement("div");
        Ih.setAttribute("oninput", "return;"),
          (Cu = typeof Ih.oninput == "function");
      }
      Su = Cu;
    } else Su = !1;
    Oh = Su && (!document.documentMode || 9 < document.documentMode);
  }
  function Vh() {
    Hs && (Hs.detachEvent("onpropertychange", _h), (Ks = Hs = null));
  }
  function _h(n) {
    if (n.propertyName === "value" && xa(Ks)) {
      var r = [];
      Lh(r, Ks, n, Li(n)), Ct(j1, r);
    }
  }
  function R1(n, r, o) {
    n === "focusin"
      ? (Vh(), (Hs = r), (Ks = o), Hs.attachEvent("onpropertychange", _h))
      : n === "focusout" && Vh();
  }
  function A1(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return xa(Ks);
  }
  function M1(n, r) {
    if (n === "click") return xa(r);
  }
  function D1(n, r) {
    if (n === "input" || n === "change") return xa(r);
  }
  function L1(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var on = typeof Object.is == "function" ? Object.is : L1;
  function Gs(n, r) {
    if (on(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var o = Object.keys(n),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var f = o[l];
      if (!h.call(r, f) || !on(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Fh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function zh(n, r) {
    var o = Fh(n);
    n = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = n + o.textContent.length), n <= r && l >= r))
          return { node: o, offset: r - n };
        n = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Fh(o);
    }
  }
  function Bh(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? Bh(n, r.parentNode)
        : "contains" in n
        ? n.contains(r)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function $h() {
    for (var n = window, r = It(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = It(n.document);
    }
    return r;
  }
  function Tu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function O1(n) {
    var r = $h(),
      o = n.focusedElem,
      l = n.selectionRange;
    if (
      r !== o &&
      o &&
      o.ownerDocument &&
      Bh(o.ownerDocument.documentElement, o)
    ) {
      if (l !== null && Tu(o)) {
        if (
          ((r = l.start),
          (n = l.end),
          n === void 0 && (n = r),
          "selectionStart" in o)
        )
          (o.selectionStart = r),
            (o.selectionEnd = Math.min(n, o.value.length));
        else if (
          ((n = ((r = o.ownerDocument || document) && r.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var f = o.textContent.length,
            m = Math.min(l.start, f);
          (l = l.end === void 0 ? m : Math.min(l.end, f)),
            !n.extend && m > l && ((f = l), (l = m), (m = f)),
            (f = zh(o, m));
          var b = zh(o, l);
          f &&
            b &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== f.node ||
              n.anchorOffset !== f.offset ||
              n.focusNode !== b.node ||
              n.focusOffset !== b.offset) &&
            ((r = r.createRange()),
            r.setStart(f.node, f.offset),
            n.removeAllRanges(),
            m > l
              ? (n.addRange(r), n.extend(b.node, b.offset))
              : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; (n = n.parentNode); )
        n.nodeType === 1 &&
          r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        (n = r[o]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var I1 = d && "documentMode" in document && 11 >= document.documentMode,
    Fi = null,
    Eu = null,
    Ys = null,
    Pu = !1;
  function Uh(n, r, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Pu ||
      Fi == null ||
      Fi !== It(l) ||
      ((l = Fi),
      "selectionStart" in l && Tu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ys && Gs(Ys, l)) ||
        ((Ys = l),
        (l = Ca(Eu, "onSelect")),
        0 < l.length &&
          ((r = new gu("onSelect", "select", null, r, o)),
          n.push({ event: r, listeners: l }),
          (r.target = Fi))));
  }
  function wa(n, r) {
    var o = {};
    return (
      (o[n.toLowerCase()] = r.toLowerCase()),
      (o["Webkit" + n] = "webkit" + r),
      (o["Moz" + n] = "moz" + r),
      o
    );
  }
  var zi = {
      animationend: wa("Animation", "AnimationEnd"),
      animationiteration: wa("Animation", "AnimationIteration"),
      animationstart: wa("Animation", "AnimationStart"),
      transitionend: wa("Transition", "TransitionEnd"),
    },
    ku = {},
    Wh = {};
  d &&
    ((Wh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zi.animationend.animation,
      delete zi.animationiteration.animation,
      delete zi.animationstart.animation),
    "TransitionEvent" in window || delete zi.transitionend.transition);
  function ba(n) {
    if (ku[n]) return ku[n];
    if (!zi[n]) return n;
    var r = zi[n],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in Wh) return (ku[n] = r[o]);
    return n;
  }
  var Hh = ba("animationend"),
    Kh = ba("animationiteration"),
    Gh = ba("animationstart"),
    Yh = ba("transitionend"),
    Qh = new Map(),
    qh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function pr(n, r) {
    Qh.set(n, r), u(r, [n]);
  }
  for (var ju = 0; ju < qh.length; ju++) {
    var Nu = qh[ju],
      V1 = Nu.toLowerCase(),
      _1 = Nu[0].toUpperCase() + Nu.slice(1);
    pr(V1, "on" + _1);
  }
  pr(Hh, "onAnimationEnd"),
    pr(Kh, "onAnimationIteration"),
    pr(Gh, "onAnimationStart"),
    pr("dblclick", "onDoubleClick"),
    pr("focusin", "onFocus"),
    pr("focusout", "onBlur"),
    pr(Yh, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Qs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    F1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Qs)
    );
  function Xh(n, r, o) {
    var l = n.type || "unknown-event";
    (n.currentTarget = o), Vw(l, r, void 0, n), (n.currentTarget = null);
  }
  function Jh(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var l = n[o],
        f = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var b = l.length - 1; 0 <= b; b--) {
            var P = l[b],
              N = P.instance,
              _ = P.currentTarget;
            if (((P = P.listener), N !== m && f.isPropagationStopped()))
              break e;
            Xh(f, P, _), (m = N);
          }
        else
          for (b = 0; b < l.length; b++) {
            if (
              ((P = l[b]),
              (N = P.instance),
              (_ = P.currentTarget),
              (P = P.listener),
              N !== m && f.isPropagationStopped())
            )
              break e;
            Xh(f, P, _), (m = N);
          }
      }
    }
    if (sa) throw ((n = ou), (sa = !1), (ou = null), n);
  }
  function Le(n, r) {
    var o = r[Vu];
    o === void 0 && (o = r[Vu] = new Set());
    var l = n + "__bubble";
    o.has(l) || (Zh(r, n, 2, !1), o.add(l));
  }
  function Ru(n, r, o) {
    var l = 0;
    r && (l |= 4), Zh(o, n, l, r);
  }
  var Sa = "_reactListening" + Math.random().toString(36).slice(2);
  function qs(n) {
    if (!n[Sa]) {
      (n[Sa] = !0),
        s.forEach(function (o) {
          o !== "selectionchange" && (F1.has(o) || Ru(o, !1, n), Ru(o, !0, n));
        });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Sa] || ((r[Sa] = !0), Ru("selectionchange", !1, r));
    }
  }
  function Zh(n, r, o, l) {
    switch (Sh(r)) {
      case 1:
        var f = Zw;
        break;
      case 4:
        f = e1;
        break;
      default:
        f = hu;
    }
    (o = f.bind(null, r, o, n)),
      (f = void 0),
      !rn ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? n.addEventListener(r, o, { capture: !0, passive: f })
          : n.addEventListener(r, o, !0)
        : f !== void 0
        ? n.addEventListener(r, o, { passive: f })
        : n.addEventListener(r, o, !1);
  }
  function Au(n, r, o, l, f) {
    var m = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var P = l.stateNode.containerInfo;
          if (P === f || (P.nodeType === 8 && P.parentNode === f)) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var N = b.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = b.stateNode.containerInfo),
                N === f || (N.nodeType === 8 && N.parentNode === f))
              )
                return;
              b = b.return;
            }
          for (; P !== null; ) {
            if (((b = Zr(P)), b === null)) return;
            if (((N = b.tag), N === 5 || N === 6)) {
              l = m = b;
              continue e;
            }
            P = P.parentNode;
          }
        }
        l = l.return;
      }
    Ct(function () {
      var _ = m,
        Y = Li(o),
        Q = [];
      e: {
        var K = Qh.get(n);
        if (K !== void 0) {
          var ie = gu,
            ae = n;
          switch (n) {
            case "keypress":
              if (ga(o) === 0) break e;
            case "keydown":
            case "keyup":
              ie = m1;
              break;
            case "focusin":
              (ae = "focus"), (ie = xu);
              break;
            case "focusout":
              (ae = "blur"), (ie = xu);
              break;
            case "beforeblur":
            case "afterblur":
              ie = xu;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ie = Eh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = r1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = v1;
              break;
            case Hh:
            case Kh:
            case Gh:
              ie = o1;
              break;
            case Yh:
              ie = w1;
              break;
            case "scroll":
              ie = t1;
              break;
            case "wheel":
              ie = S1;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = l1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = kh;
          }
          var le = (r & 4) !== 0,
            Ge = !le && n === "scroll",
            L = le ? (K !== null ? K + "Capture" : null) : K;
          le = [];
          for (var A = _, I; A !== null; ) {
            I = A;
            var q = I.stateNode;
            if (
              (I.tag === 5 &&
                q !== null &&
                ((I = q),
                L !== null &&
                  ((q = Tt(A, L)), q != null && le.push(Xs(A, q, I)))),
              Ge)
            )
              break;
            A = A.return;
          }
          0 < le.length &&
            ((K = new ie(K, ae, null, o, Y)),
            Q.push({ event: K, listeners: le }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((K = n === "mouseover" || n === "pointerover"),
            (ie = n === "mouseout" || n === "pointerout"),
            K &&
              o !== Ds &&
              (ae = o.relatedTarget || o.fromElement) &&
              (Zr(ae) || ae[Un]))
          )
            break e;
          if (
            (ie || K) &&
            ((K =
              Y.window === Y
                ? Y
                : (K = Y.ownerDocument)
                ? K.defaultView || K.parentWindow
                : window),
            ie
              ? ((ae = o.relatedTarget || o.toElement),
                (ie = _),
                (ae = ae ? Zr(ae) : null),
                ae !== null &&
                  ((Ge = Jr(ae)),
                  ae !== Ge || (ae.tag !== 5 && ae.tag !== 6)) &&
                  (ae = null))
              : ((ie = null), (ae = _)),
            ie !== ae)
          ) {
            if (
              ((le = Eh),
              (q = "onMouseLeave"),
              (L = "onMouseEnter"),
              (A = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((le = kh),
                (q = "onPointerLeave"),
                (L = "onPointerEnter"),
                (A = "pointer")),
              (Ge = ie == null ? K : Ui(ie)),
              (I = ae == null ? K : Ui(ae)),
              (K = new le(q, A + "leave", ie, o, Y)),
              (K.target = Ge),
              (K.relatedTarget = I),
              (q = null),
              Zr(Y) === _ &&
                ((le = new le(L, A + "enter", ae, o, Y)),
                (le.target = I),
                (le.relatedTarget = Ge),
                (q = le)),
              (Ge = q),
              ie && ae)
            )
              t: {
                for (le = ie, L = ae, A = 0, I = le; I; I = Bi(I)) A++;
                for (I = 0, q = L; q; q = Bi(q)) I++;
                for (; 0 < A - I; ) (le = Bi(le)), A--;
                for (; 0 < I - A; ) (L = Bi(L)), I--;
                for (; A--; ) {
                  if (le === L || (L !== null && le === L.alternate)) break t;
                  (le = Bi(le)), (L = Bi(L));
                }
                le = null;
              }
            else le = null;
            ie !== null && ep(Q, K, ie, le, !1),
              ae !== null && Ge !== null && ep(Q, Ge, ae, le, !0);
          }
        }
        e: {
          if (
            ((K = _ ? Ui(_) : window),
            (ie = K.nodeName && K.nodeName.toLowerCase()),
            ie === "select" || (ie === "input" && K.type === "file"))
          )
            var ue = N1;
          else if (Dh(K))
            if (Oh) ue = D1;
            else {
              ue = A1;
              var he = R1;
            }
          else
            (ie = K.nodeName) &&
              ie.toLowerCase() === "input" &&
              (K.type === "checkbox" || K.type === "radio") &&
              (ue = M1);
          if (ue && (ue = ue(n, _))) {
            Lh(Q, ue, o, Y);
            break e;
          }
          he && he(n, K, _),
            n === "focusout" &&
              (he = K._wrapperState) &&
              he.controlled &&
              K.type === "number" &&
              wn(K, "number", K.value);
        }
        switch (((he = _ ? Ui(_) : window), n)) {
          case "focusin":
            (Dh(he) || he.contentEditable === "true") &&
              ((Fi = he), (Eu = _), (Ys = null));
            break;
          case "focusout":
            Ys = Eu = Fi = null;
            break;
          case "mousedown":
            Pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Pu = !1), Uh(Q, o, Y);
            break;
          case "selectionchange":
            if (I1) break;
          case "keydown":
          case "keyup":
            Uh(Q, o, Y);
        }
        var pe;
        if (bu)
          e: {
            switch (n) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          _i
            ? Ah(n, o) && (xe = "onCompositionEnd")
            : n === "keydown" &&
              o.keyCode === 229 &&
              (xe = "onCompositionStart");
        xe &&
          (jh &&
            o.locale !== "ko" &&
            (_i || xe !== "onCompositionStart"
              ? xe === "onCompositionEnd" && _i && (pe = Ch())
              : ((hr = Y),
                (mu = "value" in hr ? hr.value : hr.textContent),
                (_i = !0))),
          (he = Ca(_, xe)),
          0 < he.length &&
            ((xe = new Ph(xe, n, null, o, Y)),
            Q.push({ event: xe, listeners: he }),
            pe
              ? (xe.data = pe)
              : ((pe = Mh(o)), pe !== null && (xe.data = pe)))),
          (pe = T1 ? E1(n, o) : P1(n, o)) &&
            ((_ = Ca(_, "onBeforeInput")),
            0 < _.length &&
              ((Y = new Ph("onBeforeInput", "beforeinput", null, o, Y)),
              Q.push({ event: Y, listeners: _ }),
              (Y.data = pe)));
      }
      Jh(Q, r);
    });
  }
  function Xs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ca(n, r) {
    for (var o = r + "Capture", l = []; n !== null; ) {
      var f = n,
        m = f.stateNode;
      f.tag === 5 &&
        m !== null &&
        ((f = m),
        (m = Tt(n, o)),
        m != null && l.unshift(Xs(n, m, f)),
        (m = Tt(n, r)),
        m != null && l.push(Xs(n, m, f))),
        (n = n.return);
    }
    return l;
  }
  function Bi(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ep(n, r, o, l, f) {
    for (var m = r._reactName, b = []; o !== null && o !== l; ) {
      var P = o,
        N = P.alternate,
        _ = P.stateNode;
      if (N !== null && N === l) break;
      P.tag === 5 &&
        _ !== null &&
        ((P = _),
        f
          ? ((N = Tt(o, m)), N != null && b.unshift(Xs(o, N, P)))
          : f || ((N = Tt(o, m)), N != null && b.push(Xs(o, N, P)))),
        (o = o.return);
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var z1 = /\r\n?/g,
    B1 = /\u0000|\uFFFD/g;
  function tp(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        z1,
        `
`
      )
      .replace(B1, "");
  }
  function Ta(n, r, o) {
    if (((r = tp(r)), tp(n) !== r && o)) throw Error(i(425));
  }
  function Ea() {}
  var Mu = null,
    Du = null;
  function Lu(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
    $1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    np = typeof Promise == "function" ? Promise : void 0,
    U1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof np < "u"
        ? function (n) {
            return np.resolve(null).then(n).catch(W1);
          }
        : Ou;
  function W1(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Iu(n, r) {
    var o = r,
      l = 0;
    do {
      var f = o.nextSibling;
      if ((n.removeChild(o), f && f.nodeType === 8))
        if (((o = f.data), o === "/$")) {
          if (l === 0) {
            n.removeChild(f), Bs(r);
            return;
          }
          l--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || l++;
      o = f;
    } while (o);
    Bs(r);
  }
  function mr(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = n.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function rp(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var $i = Math.random().toString(36).slice(2),
    jn = "__reactFiber$" + $i,
    Js = "__reactProps$" + $i,
    Un = "__reactContainer$" + $i,
    Vu = "__reactEvents$" + $i,
    H1 = "__reactListeners$" + $i,
    K1 = "__reactHandles$" + $i;
  function Zr(n) {
    var r = n[jn];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if ((r = o[Un] || o[jn])) {
        if (
          ((o = r.alternate),
          r.child !== null || (o !== null && o.child !== null))
        )
          for (n = rp(n); n !== null; ) {
            if ((o = n[jn])) return o;
            n = rp(n);
          }
        return r;
      }
      (n = o), (o = n.parentNode);
    }
    return null;
  }
  function Zs(n) {
    return (
      (n = n[jn] || n[Un]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function Ui(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(i(33));
  }
  function Pa(n) {
    return n[Js] || null;
  }
  var _u = [],
    Wi = -1;
  function gr(n) {
    return { current: n };
  }
  function Oe(n) {
    0 > Wi || ((n.current = _u[Wi]), (_u[Wi] = null), Wi--);
  }
  function De(n, r) {
    Wi++, (_u[Wi] = n.current), (n.current = r);
  }
  var yr = {},
    ut = gr(yr),
    Et = gr(!1),
    ei = yr;
  function Hi(n, r) {
    var o = n.type.contextTypes;
    if (!o) return yr;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {},
      m;
    for (m in o) f[m] = r[m];
    return (
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = r),
        (n.__reactInternalMemoizedMaskedChildContext = f)),
      f
    );
  }
  function Pt(n) {
    return (n = n.childContextTypes), n != null;
  }
  function ka() {
    Oe(Et), Oe(ut);
  }
  function ip(n, r, o) {
    if (ut.current !== yr) throw Error(i(168));
    De(ut, r), De(Et, o);
  }
  function sp(n, r, o) {
    var l = n.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function"))
      return o;
    l = l.getChildContext();
    for (var f in l) if (!(f in r)) throw Error(i(108, fe(n) || "Unknown", f));
    return G({}, o, l);
  }
  function ja(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        yr),
      (ei = ut.current),
      De(ut, n),
      De(Et, Et.current),
      !0
    );
  }
  function op(n, r, o) {
    var l = n.stateNode;
    if (!l) throw Error(i(169));
    o
      ? ((n = sp(n, r, ei)),
        (l.__reactInternalMemoizedMergedChildContext = n),
        Oe(Et),
        Oe(ut),
        De(ut, n))
      : Oe(Et),
      De(Et, o);
  }
  var Wn = null,
    Na = !1,
    Fu = !1;
  function ap(n) {
    Wn === null ? (Wn = [n]) : Wn.push(n);
  }
  function G1(n) {
    (Na = !0), ap(n);
  }
  function vr() {
    if (!Fu && Wn !== null) {
      Fu = !0;
      var n = 0,
        r = Ae;
      try {
        var o = Wn;
        for (Ae = 1; n < o.length; n++) {
          var l = o[n];
          do l = l(!0);
          while (l !== null);
        }
        (Wn = null), (Na = !1);
      } catch (f) {
        throw (Wn !== null && (Wn = Wn.slice(n + 1)), uh(au, vr), f);
      } finally {
        (Ae = r), (Fu = !1);
      }
    }
    return null;
  }
  var Ki = [],
    Gi = 0,
    Ra = null,
    Aa = 0,
    Wt = [],
    Ht = 0,
    ti = null,
    Hn = 1,
    Kn = "";
  function ni(n, r) {
    (Ki[Gi++] = Aa), (Ki[Gi++] = Ra), (Ra = n), (Aa = r);
  }
  function lp(n, r, o) {
    (Wt[Ht++] = Hn), (Wt[Ht++] = Kn), (Wt[Ht++] = ti), (ti = n);
    var l = Hn;
    n = Kn;
    var f = 32 - sn(l) - 1;
    (l &= ~(1 << f)), (o += 1);
    var m = 32 - sn(r) + f;
    if (30 < m) {
      var b = f - (f % 5);
      (m = (l & ((1 << b) - 1)).toString(32)),
        (l >>= b),
        (f -= b),
        (Hn = (1 << (32 - sn(r) + f)) | (o << f) | l),
        (Kn = m + n);
    } else (Hn = (1 << m) | (o << f) | l), (Kn = n);
  }
  function zu(n) {
    n.return !== null && (ni(n, 1), lp(n, 1, 0));
  }
  function Bu(n) {
    for (; n === Ra; )
      (Ra = Ki[--Gi]), (Ki[Gi] = null), (Aa = Ki[--Gi]), (Ki[Gi] = null);
    for (; n === ti; )
      (ti = Wt[--Ht]),
        (Wt[Ht] = null),
        (Kn = Wt[--Ht]),
        (Wt[Ht] = null),
        (Hn = Wt[--Ht]),
        (Wt[Ht] = null);
  }
  var _t = null,
    Ft = null,
    Ve = !1,
    an = null;
  function up(n, r) {
    var o = Qt(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = r),
      (o.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [o]), (n.flags |= 16)) : r.push(o);
  }
  function cp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return (
          (r =
            r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((n.stateNode = r), (_t = n), (Ft = mr(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = n.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (_t = n), (Ft = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((o = ti !== null ? { id: Hn, overflow: Kn } : null),
              (n.memoizedState = {
                dehydrated: r,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = Qt(18, null, null, 0)),
              (o.stateNode = r),
              (o.return = n),
              (n.child = o),
              (_t = n),
              (Ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $u(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Uu(n) {
    if (Ve) {
      var r = Ft;
      if (r) {
        var o = r;
        if (!cp(n, r)) {
          if ($u(n)) throw Error(i(418));
          r = mr(o.nextSibling);
          var l = _t;
          r && cp(n, r)
            ? up(l, o)
            : ((n.flags = (n.flags & -4097) | 2), (Ve = !1), (_t = n));
        }
      } else {
        if ($u(n)) throw Error(i(418));
        (n.flags = (n.flags & -4097) | 2), (Ve = !1), (_t = n);
      }
    }
  }
  function dp(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    _t = n;
  }
  function Ma(n) {
    if (n !== _t) return !1;
    if (!Ve) return dp(n), (Ve = !0), !1;
    var r;
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type),
        (r = r !== "head" && r !== "body" && !Lu(n.type, n.memoizedProps))),
      r && (r = Ft))
    ) {
      if ($u(n)) throw (fp(), Error(i(418)));
      for (; r; ) up(n, r), (r = mr(r.nextSibling));
    }
    if ((dp(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(i(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ft = mr(n.nextSibling);
                break e;
              }
              r--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || r++;
          }
          n = n.nextSibling;
        }
        Ft = null;
      }
    } else Ft = _t ? mr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function fp() {
    for (var n = Ft; n; ) n = mr(n.nextSibling);
  }
  function Yi() {
    (Ft = _t = null), (Ve = !1);
  }
  function Wu(n) {
    an === null ? (an = [n]) : an.push(n);
  }
  var Y1 = D.ReactCurrentBatchConfig;
  function eo(n, r, o) {
    if (
      ((n = o.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(i(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(i(147, n));
        var f = l,
          m = "" + n;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === m
          ? r.ref
          : ((r = function (b) {
              var P = f.refs;
              b === null ? delete P[m] : (P[m] = b);
            }),
            (r._stringRef = m),
            r);
      }
      if (typeof n != "string") throw Error(i(284));
      if (!o._owner) throw Error(i(290, n));
    }
    return n;
  }
  function Da(n, r) {
    throw (
      ((n = Object.prototype.toString.call(r)),
      Error(
        i(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : n
        )
      ))
    );
  }
  function hp(n) {
    var r = n._init;
    return r(n._payload);
  }
  function pp(n) {
    function r(L, A) {
      if (n) {
        var I = L.deletions;
        I === null ? ((L.deletions = [A]), (L.flags |= 16)) : I.push(A);
      }
    }
    function o(L, A) {
      if (!n) return null;
      for (; A !== null; ) r(L, A), (A = A.sibling);
      return null;
    }
    function l(L, A) {
      for (L = new Map(); A !== null; )
        A.key !== null ? L.set(A.key, A) : L.set(A.index, A), (A = A.sibling);
      return L;
    }
    function f(L, A) {
      return (L = Pr(L, A)), (L.index = 0), (L.sibling = null), L;
    }
    function m(L, A, I) {
      return (
        (L.index = I),
        n
          ? ((I = L.alternate),
            I !== null
              ? ((I = I.index), I < A ? ((L.flags |= 2), A) : I)
              : ((L.flags |= 2), A))
          : ((L.flags |= 1048576), A)
      );
    }
    function b(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function P(L, A, I, q) {
      return A === null || A.tag !== 6
        ? ((A = Oc(I, L.mode, q)), (A.return = L), A)
        : ((A = f(A, I)), (A.return = L), A);
    }
    function N(L, A, I, q) {
      var ue = I.type;
      return ue === V
        ? Y(L, A, I.props.children, q, I.key)
        : A !== null &&
          (A.elementType === ue ||
            (typeof ue == "object" &&
              ue !== null &&
              ue.$$typeof === ce &&
              hp(ue) === A.type))
        ? ((q = f(A, I.props)), (q.ref = eo(L, A, I)), (q.return = L), q)
        : ((q = rl(I.type, I.key, I.props, null, L.mode, q)),
          (q.ref = eo(L, A, I)),
          (q.return = L),
          q);
    }
    function _(L, A, I, q) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== I.containerInfo ||
        A.stateNode.implementation !== I.implementation
        ? ((A = Ic(I, L.mode, q)), (A.return = L), A)
        : ((A = f(A, I.children || [])), (A.return = L), A);
    }
    function Y(L, A, I, q, ue) {
      return A === null || A.tag !== 7
        ? ((A = ci(I, L.mode, q, ue)), (A.return = L), A)
        : ((A = f(A, I)), (A.return = L), A);
    }
    function Q(L, A, I) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (A = Oc("" + A, L.mode, I)), (A.return = L), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case O:
            return (
              (I = rl(A.type, A.key, A.props, null, L.mode, I)),
              (I.ref = eo(L, null, A)),
              (I.return = L),
              I
            );
          case B:
            return (A = Ic(A, L.mode, I)), (A.return = L), A;
          case ce:
            var q = A._init;
            return Q(L, q(A._payload), I);
        }
        if (ar(A) || U(A))
          return (A = ci(A, L.mode, I, null)), (A.return = L), A;
        Da(L, A);
      }
      return null;
    }
    function K(L, A, I, q) {
      var ue = A !== null ? A.key : null;
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return ue !== null ? null : P(L, A, "" + I, q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case O:
            return I.key === ue ? N(L, A, I, q) : null;
          case B:
            return I.key === ue ? _(L, A, I, q) : null;
          case ce:
            return (ue = I._init), K(L, A, ue(I._payload), q);
        }
        if (ar(I) || U(I)) return ue !== null ? null : Y(L, A, I, q, null);
        Da(L, I);
      }
      return null;
    }
    function ie(L, A, I, q, ue) {
      if ((typeof q == "string" && q !== "") || typeof q == "number")
        return (L = L.get(I) || null), P(A, L, "" + q, ue);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case O:
            return (
              (L = L.get(q.key === null ? I : q.key) || null), N(A, L, q, ue)
            );
          case B:
            return (
              (L = L.get(q.key === null ? I : q.key) || null), _(A, L, q, ue)
            );
          case ce:
            var he = q._init;
            return ie(L, A, I, he(q._payload), ue);
        }
        if (ar(q) || U(q)) return (L = L.get(I) || null), Y(A, L, q, ue, null);
        Da(A, q);
      }
      return null;
    }
    function ae(L, A, I, q) {
      for (
        var ue = null, he = null, pe = A, xe = (A = 0), rt = null;
        pe !== null && xe < I.length;
        xe++
      ) {
        pe.index > xe ? ((rt = pe), (pe = null)) : (rt = pe.sibling);
        var Ne = K(L, pe, I[xe], q);
        if (Ne === null) {
          pe === null && (pe = rt);
          break;
        }
        n && pe && Ne.alternate === null && r(L, pe),
          (A = m(Ne, A, xe)),
          he === null ? (ue = Ne) : (he.sibling = Ne),
          (he = Ne),
          (pe = rt);
      }
      if (xe === I.length) return o(L, pe), Ve && ni(L, xe), ue;
      if (pe === null) {
        for (; xe < I.length; xe++)
          (pe = Q(L, I[xe], q)),
            pe !== null &&
              ((A = m(pe, A, xe)),
              he === null ? (ue = pe) : (he.sibling = pe),
              (he = pe));
        return Ve && ni(L, xe), ue;
      }
      for (pe = l(L, pe); xe < I.length; xe++)
        (rt = ie(pe, L, xe, I[xe], q)),
          rt !== null &&
            (n &&
              rt.alternate !== null &&
              pe.delete(rt.key === null ? xe : rt.key),
            (A = m(rt, A, xe)),
            he === null ? (ue = rt) : (he.sibling = rt),
            (he = rt));
      return (
        n &&
          pe.forEach(function (kr) {
            return r(L, kr);
          }),
        Ve && ni(L, xe),
        ue
      );
    }
    function le(L, A, I, q) {
      var ue = U(I);
      if (typeof ue != "function") throw Error(i(150));
      if (((I = ue.call(I)), I == null)) throw Error(i(151));
      for (
        var he = (ue = null), pe = A, xe = (A = 0), rt = null, Ne = I.next();
        pe !== null && !Ne.done;
        xe++, Ne = I.next()
      ) {
        pe.index > xe ? ((rt = pe), (pe = null)) : (rt = pe.sibling);
        var kr = K(L, pe, Ne.value, q);
        if (kr === null) {
          pe === null && (pe = rt);
          break;
        }
        n && pe && kr.alternate === null && r(L, pe),
          (A = m(kr, A, xe)),
          he === null ? (ue = kr) : (he.sibling = kr),
          (he = kr),
          (pe = rt);
      }
      if (Ne.done) return o(L, pe), Ve && ni(L, xe), ue;
      if (pe === null) {
        for (; !Ne.done; xe++, Ne = I.next())
          (Ne = Q(L, Ne.value, q)),
            Ne !== null &&
              ((A = m(Ne, A, xe)),
              he === null ? (ue = Ne) : (he.sibling = Ne),
              (he = Ne));
        return Ve && ni(L, xe), ue;
      }
      for (pe = l(L, pe); !Ne.done; xe++, Ne = I.next())
        (Ne = ie(pe, L, xe, Ne.value, q)),
          Ne !== null &&
            (n &&
              Ne.alternate !== null &&
              pe.delete(Ne.key === null ? xe : Ne.key),
            (A = m(Ne, A, xe)),
            he === null ? (ue = Ne) : (he.sibling = Ne),
            (he = Ne));
      return (
        n &&
          pe.forEach(function (kb) {
            return r(L, kb);
          }),
        Ve && ni(L, xe),
        ue
      );
    }
    function Ge(L, A, I, q) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === V &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case O:
            e: {
              for (var ue = I.key, he = A; he !== null; ) {
                if (he.key === ue) {
                  if (((ue = I.type), ue === V)) {
                    if (he.tag === 7) {
                      o(L, he.sibling),
                        (A = f(he, I.props.children)),
                        (A.return = L),
                        (L = A);
                      break e;
                    }
                  } else if (
                    he.elementType === ue ||
                    (typeof ue == "object" &&
                      ue !== null &&
                      ue.$$typeof === ce &&
                      hp(ue) === he.type)
                  ) {
                    o(L, he.sibling),
                      (A = f(he, I.props)),
                      (A.ref = eo(L, he, I)),
                      (A.return = L),
                      (L = A);
                    break e;
                  }
                  o(L, he);
                  break;
                } else r(L, he);
                he = he.sibling;
              }
              I.type === V
                ? ((A = ci(I.props.children, L.mode, q, I.key)),
                  (A.return = L),
                  (L = A))
                : ((q = rl(I.type, I.key, I.props, null, L.mode, q)),
                  (q.ref = eo(L, A, I)),
                  (q.return = L),
                  (L = q));
            }
            return b(L);
          case B:
            e: {
              for (he = I.key; A !== null; ) {
                if (A.key === he)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === I.containerInfo &&
                    A.stateNode.implementation === I.implementation
                  ) {
                    o(L, A.sibling),
                      (A = f(A, I.children || [])),
                      (A.return = L),
                      (L = A);
                    break e;
                  } else {
                    o(L, A);
                    break;
                  }
                else r(L, A);
                A = A.sibling;
              }
              (A = Ic(I, L.mode, q)), (A.return = L), (L = A);
            }
            return b(L);
          case ce:
            return (he = I._init), Ge(L, A, he(I._payload), q);
        }
        if (ar(I)) return ae(L, A, I, q);
        if (U(I)) return le(L, A, I, q);
        Da(L, I);
      }
      return (typeof I == "string" && I !== "") || typeof I == "number"
        ? ((I = "" + I),
          A !== null && A.tag === 6
            ? (o(L, A.sibling), (A = f(A, I)), (A.return = L), (L = A))
            : (o(L, A), (A = Oc(I, L.mode, q)), (A.return = L), (L = A)),
          b(L))
        : o(L, A);
    }
    return Ge;
  }
  var Qi = pp(!0),
    mp = pp(!1),
    La = gr(null),
    Oa = null,
    qi = null,
    Hu = null;
  function Ku() {
    Hu = qi = Oa = null;
  }
  function Gu(n) {
    var r = La.current;
    Oe(La), (n._currentValue = r);
  }
  function Yu(n, r, o) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        n === o)
      )
        break;
      n = n.return;
    }
  }
  function Xi(n, r) {
    (Oa = n),
      (Hu = qi = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        ((n.lanes & r) !== 0 && (kt = !0), (n.firstContext = null));
  }
  function Kt(n) {
    var r = n._currentValue;
    if (Hu !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), qi === null)) {
        if (Oa === null) throw Error(i(308));
        (qi = n), (Oa.dependencies = { lanes: 0, firstContext: n });
      } else qi = qi.next = n;
    return r;
  }
  var ri = null;
  function Qu(n) {
    ri === null ? (ri = [n]) : ri.push(n);
  }
  function gp(n, r, o, l) {
    var f = r.interleaved;
    return (
      f === null ? ((o.next = o), Qu(r)) : ((o.next = f.next), (f.next = o)),
      (r.interleaved = o),
      Gn(n, l)
    );
  }
  function Gn(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      (n.childLanes |= r),
        (o = n.alternate),
        o !== null && (o.childLanes |= r),
        (o = n),
        (n = n.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var xr = !1;
  function qu(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yp(n, r) {
    (n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function Yn(n, r) {
    return {
      eventTime: n,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function wr(n, r, o) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (je & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
        (l.pending = r),
        Gn(n, o)
      );
    }
    return (
      (f = l.interleaved),
      f === null ? ((r.next = r), Qu(l)) : ((r.next = f.next), (f.next = r)),
      (l.interleaved = r),
      Gn(n, o)
    );
  }
  function Ia(n, r, o) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194240) !== 0))
    ) {
      var l = r.lanes;
      (l &= n.pendingLanes), (o |= l), (r.lanes = o), cu(n, o);
    }
  }
  function vp(n, r) {
    var o = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var f = null,
        m = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var b = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          m === null ? (f = m = b) : (m = m.next = b), (o = o.next);
        } while (o !== null);
        m === null ? (f = m = r) : (m = m.next = r);
      } else f = m = r;
      (o = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: m,
        shared: l.shared,
        effects: l.effects,
      }),
        (n.updateQueue = o);
      return;
    }
    (n = o.lastBaseUpdate),
      n === null ? (o.firstBaseUpdate = r) : (n.next = r),
      (o.lastBaseUpdate = r);
  }
  function Va(n, r, o, l) {
    var f = n.updateQueue;
    xr = !1;
    var m = f.firstBaseUpdate,
      b = f.lastBaseUpdate,
      P = f.shared.pending;
    if (P !== null) {
      f.shared.pending = null;
      var N = P,
        _ = N.next;
      (N.next = null), b === null ? (m = _) : (b.next = _), (b = N);
      var Y = n.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (P = Y.lastBaseUpdate),
        P !== b &&
          (P === null ? (Y.firstBaseUpdate = _) : (P.next = _),
          (Y.lastBaseUpdate = N)));
    }
    if (m !== null) {
      var Q = f.baseState;
      (b = 0), (Y = _ = N = null), (P = m);
      do {
        var K = P.lane,
          ie = P.eventTime;
        if ((l & K) === K) {
          Y !== null &&
            (Y = Y.next =
              {
                eventTime: ie,
                lane: 0,
                tag: P.tag,
                payload: P.payload,
                callback: P.callback,
                next: null,
              });
          e: {
            var ae = n,
              le = P;
            switch (((K = r), (ie = o), le.tag)) {
              case 1:
                if (((ae = le.payload), typeof ae == "function")) {
                  Q = ae.call(ie, Q, K);
                  break e;
                }
                Q = ae;
                break e;
              case 3:
                ae.flags = (ae.flags & -65537) | 128;
              case 0:
                if (
                  ((ae = le.payload),
                  (K = typeof ae == "function" ? ae.call(ie, Q, K) : ae),
                  K == null)
                )
                  break e;
                Q = G({}, Q, K);
                break e;
              case 2:
                xr = !0;
            }
          }
          P.callback !== null &&
            P.lane !== 0 &&
            ((n.flags |= 64),
            (K = f.effects),
            K === null ? (f.effects = [P]) : K.push(P));
        } else
          (ie = {
            eventTime: ie,
            lane: K,
            tag: P.tag,
            payload: P.payload,
            callback: P.callback,
            next: null,
          }),
            Y === null ? ((_ = Y = ie), (N = Q)) : (Y = Y.next = ie),
            (b |= K);
        if (((P = P.next), P === null)) {
          if (((P = f.shared.pending), P === null)) break;
          (K = P),
            (P = K.next),
            (K.next = null),
            (f.lastBaseUpdate = K),
            (f.shared.pending = null);
        }
      } while (!0);
      if (
        (Y === null && (N = Q),
        (f.baseState = N),
        (f.firstBaseUpdate = _),
        (f.lastBaseUpdate = Y),
        (r = f.shared.interleaved),
        r !== null)
      ) {
        f = r;
        do (b |= f.lane), (f = f.next);
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      (oi |= b), (n.lanes = b), (n.memoizedState = Q);
    }
  }
  function xp(n, r, o) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var l = n[r],
          f = l.callback;
        if (f !== null) {
          if (((l.callback = null), (l = o), typeof f != "function"))
            throw Error(i(191, f));
          f.call(l);
        }
      }
  }
  var to = {},
    Nn = gr(to),
    no = gr(to),
    ro = gr(to);
  function ii(n) {
    if (n === to) throw Error(i(174));
    return n;
  }
  function Xu(n, r) {
    switch ((De(ro, r), De(no, n), De(Nn, to), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sn(null, "");
        break;
      default:
        (n = n === 8 ? r.parentNode : r),
          (r = n.namespaceURI || null),
          (n = n.tagName),
          (r = Sn(r, n));
    }
    Oe(Nn), De(Nn, r);
  }
  function Ji() {
    Oe(Nn), Oe(no), Oe(ro);
  }
  function wp(n) {
    ii(ro.current);
    var r = ii(Nn.current),
      o = Sn(r, n.type);
    r !== o && (De(no, n), De(Nn, o));
  }
  function Ju(n) {
    no.current === n && (Oe(Nn), Oe(no));
  }
  var Fe = gr(0);
  function _a(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Zu = [];
  function ec() {
    for (var n = 0; n < Zu.length; n++)
      Zu[n]._workInProgressVersionPrimary = null;
    Zu.length = 0;
  }
  var Fa = D.ReactCurrentDispatcher,
    tc = D.ReactCurrentBatchConfig,
    si = 0,
    ze = null,
    Je = null,
    tt = null,
    za = !1,
    io = !1,
    so = 0,
    Q1 = 0;
  function ct() {
    throw Error(i(321));
  }
  function nc(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!on(n[o], r[o])) return !1;
    return !0;
  }
  function rc(n, r, o, l, f, m) {
    if (
      ((si = m),
      (ze = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Fa.current = n === null || n.memoizedState === null ? Z1 : eb),
      (n = o(l, f)),
      io)
    ) {
      m = 0;
      do {
        if (((io = !1), (so = 0), 25 <= m)) throw Error(i(301));
        (m += 1),
          (tt = Je = null),
          (r.updateQueue = null),
          (Fa.current = tb),
          (n = o(l, f));
      } while (io);
    }
    if (
      ((Fa.current = Ua),
      (r = Je !== null && Je.next !== null),
      (si = 0),
      (tt = Je = ze = null),
      (za = !1),
      r)
    )
      throw Error(i(300));
    return n;
  }
  function ic() {
    var n = so !== 0;
    return (so = 0), n;
  }
  function Rn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return tt === null ? (ze.memoizedState = tt = n) : (tt = tt.next = n), tt;
  }
  function Gt() {
    if (Je === null) {
      var n = ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Je.next;
    var r = tt === null ? ze.memoizedState : tt.next;
    if (r !== null) (tt = r), (Je = n);
    else {
      if (n === null) throw Error(i(310));
      (Je = n),
        (n = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        tt === null ? (ze.memoizedState = tt = n) : (tt = tt.next = n);
    }
    return tt;
  }
  function oo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function sc(n) {
    var r = Gt(),
      o = r.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var l = Je,
      f = l.baseQueue,
      m = o.pending;
    if (m !== null) {
      if (f !== null) {
        var b = f.next;
        (f.next = m.next), (m.next = b);
      }
      (l.baseQueue = f = m), (o.pending = null);
    }
    if (f !== null) {
      (m = f.next), (l = l.baseState);
      var P = (b = null),
        N = null,
        _ = m;
      do {
        var Y = _.lane;
        if ((si & Y) === Y)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (l = _.hasEagerState ? _.eagerState : n(l, _.action));
        else {
          var Q = {
            lane: Y,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          N === null ? ((P = N = Q), (b = l)) : (N = N.next = Q),
            (ze.lanes |= Y),
            (oi |= Y);
        }
        _ = _.next;
      } while (_ !== null && _ !== m);
      N === null ? (b = l) : (N.next = P),
        on(l, r.memoizedState) || (kt = !0),
        (r.memoizedState = l),
        (r.baseState = b),
        (r.baseQueue = N),
        (o.lastRenderedState = l);
    }
    if (((n = o.interleaved), n !== null)) {
      f = n;
      do (m = f.lane), (ze.lanes |= m), (oi |= m), (f = f.next);
      while (f !== n);
    } else f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function oc(n) {
    var r = Gt(),
      o = r.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var l = o.dispatch,
      f = o.pending,
      m = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var b = (f = f.next);
      do (m = n(m, b.action)), (b = b.next);
      while (b !== f);
      on(m, r.memoizedState) || (kt = !0),
        (r.memoizedState = m),
        r.baseQueue === null && (r.baseState = m),
        (o.lastRenderedState = m);
    }
    return [m, l];
  }
  function bp() {}
  function Sp(n, r) {
    var o = ze,
      l = Gt(),
      f = r(),
      m = !on(l.memoizedState, f);
    if (
      (m && ((l.memoizedState = f), (kt = !0)),
      (l = l.queue),
      ac(Ep.bind(null, o, l, n), [n]),
      l.getSnapshot !== r || m || (tt !== null && tt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ao(9, Tp.bind(null, o, l, f, r), void 0, null),
        nt === null)
      )
        throw Error(i(349));
      (si & 30) !== 0 || Cp(o, r, f);
    }
    return f;
  }
  function Cp(n, r, o) {
    (n.flags |= 16384),
      (n = { getSnapshot: r, value: o }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.stores = [n]))
        : ((o = r.stores), o === null ? (r.stores = [n]) : o.push(n));
  }
  function Tp(n, r, o, l) {
    (r.value = o), (r.getSnapshot = l), Pp(r) && kp(n);
  }
  function Ep(n, r, o) {
    return o(function () {
      Pp(r) && kp(n);
    });
  }
  function Pp(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !on(n, o);
    } catch {
      return !0;
    }
  }
  function kp(n) {
    var r = Gn(n, 1);
    r !== null && dn(r, n, 1, -1);
  }
  function jp(n) {
    var r = Rn();
    return (
      typeof n == "function" && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oo,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = J1.bind(null, ze, n)),
      [r.memoizedState, n]
    );
  }
  function ao(n, r, o, l) {
    return (
      (n = { tag: n, create: r, destroy: o, deps: l, next: null }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.lastEffect = n.next = n))
        : ((o = r.lastEffect),
          o === null
            ? (r.lastEffect = n.next = n)
            : ((l = o.next), (o.next = n), (n.next = l), (r.lastEffect = n))),
      n
    );
  }
  function Np() {
    return Gt().memoizedState;
  }
  function Ba(n, r, o, l) {
    var f = Rn();
    (ze.flags |= n),
      (f.memoizedState = ao(1 | r, o, void 0, l === void 0 ? null : l));
  }
  function $a(n, r, o, l) {
    var f = Gt();
    l = l === void 0 ? null : l;
    var m = void 0;
    if (Je !== null) {
      var b = Je.memoizedState;
      if (((m = b.destroy), l !== null && nc(l, b.deps))) {
        f.memoizedState = ao(r, o, m, l);
        return;
      }
    }
    (ze.flags |= n), (f.memoizedState = ao(1 | r, o, m, l));
  }
  function Rp(n, r) {
    return Ba(8390656, 8, n, r);
  }
  function ac(n, r) {
    return $a(2048, 8, n, r);
  }
  function Ap(n, r) {
    return $a(4, 2, n, r);
  }
  function Mp(n, r) {
    return $a(4, 4, n, r);
  }
  function Dp(n, r) {
    if (typeof r == "function")
      return (
        (n = n()),
        r(n),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function Lp(n, r, o) {
    return (
      (o = o != null ? o.concat([n]) : null), $a(4, 4, Dp.bind(null, r, n), o)
    );
  }
  function lc() {}
  function Op(n, r) {
    var o = Gt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && nc(r, l[1])
      ? l[0]
      : ((o.memoizedState = [n, r]), n);
  }
  function Ip(n, r) {
    var o = Gt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && nc(r, l[1])
      ? l[0]
      : ((n = n()), (o.memoizedState = [n, r]), n);
  }
  function Vp(n, r, o) {
    return (si & 21) === 0
      ? (n.baseState && ((n.baseState = !1), (kt = !0)), (n.memoizedState = o))
      : (on(o, r) ||
          ((o = hh()), (ze.lanes |= o), (oi |= o), (n.baseState = !0)),
        r);
  }
  function q1(n, r) {
    var o = Ae;
    (Ae = o !== 0 && 4 > o ? o : 4), n(!0);
    var l = tc.transition;
    tc.transition = {};
    try {
      n(!1), r();
    } finally {
      (Ae = o), (tc.transition = l);
    }
  }
  function _p() {
    return Gt().memoizedState;
  }
  function X1(n, r, o) {
    var l = Tr(n);
    if (
      ((o = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fp(n))
    )
      zp(r, o);
    else if (((o = gp(n, r, o, l)), o !== null)) {
      var f = xt();
      dn(o, n, l, f), Bp(o, r, l);
    }
  }
  function J1(n, r, o) {
    var l = Tr(n),
      f = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Fp(n)) zp(r, f);
    else {
      var m = n.alternate;
      if (
        n.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = r.lastRenderedReducer), m !== null)
      )
        try {
          var b = r.lastRenderedState,
            P = m(b, o);
          if (((f.hasEagerState = !0), (f.eagerState = P), on(P, b))) {
            var N = r.interleaved;
            N === null
              ? ((f.next = f), Qu(r))
              : ((f.next = N.next), (N.next = f)),
              (r.interleaved = f);
            return;
          }
        } catch {
        } finally {
        }
      (o = gp(n, r, f, l)),
        o !== null && ((f = xt()), dn(o, n, l, f), Bp(o, r, l));
    }
  }
  function Fp(n) {
    var r = n.alternate;
    return n === ze || (r !== null && r === ze);
  }
  function zp(n, r) {
    io = za = !0;
    var o = n.pending;
    o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)),
      (n.pending = r);
  }
  function Bp(n, r, o) {
    if ((o & 4194240) !== 0) {
      var l = r.lanes;
      (l &= n.pendingLanes), (o |= l), (r.lanes = o), cu(n, o);
    }
  }
  var Ua = {
      readContext: Kt,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useInsertionEffect: ct,
      useLayoutEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useMutableSource: ct,
      useSyncExternalStore: ct,
      useId: ct,
      unstable_isNewReconciler: !1,
    },
    Z1 = {
      readContext: Kt,
      useCallback: function (n, r) {
        return (Rn().memoizedState = [n, r === void 0 ? null : r]), n;
      },
      useContext: Kt,
      useEffect: Rp,
      useImperativeHandle: function (n, r, o) {
        return (
          (o = o != null ? o.concat([n]) : null),
          Ba(4194308, 4, Dp.bind(null, r, n), o)
        );
      },
      useLayoutEffect: function (n, r) {
        return Ba(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return Ba(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var o = Rn();
        return (
          (r = r === void 0 ? null : r),
          (n = n()),
          (o.memoizedState = [n, r]),
          n
        );
      },
      useReducer: function (n, r, o) {
        var l = Rn();
        return (
          (r = o !== void 0 ? o(r) : r),
          (l.memoizedState = l.baseState = r),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: r,
          }),
          (l.queue = n),
          (n = n.dispatch = X1.bind(null, ze, n)),
          [l.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = Rn();
        return (n = { current: n }), (r.memoizedState = n);
      },
      useState: jp,
      useDebugValue: lc,
      useDeferredValue: function (n) {
        return (Rn().memoizedState = n);
      },
      useTransition: function () {
        var n = jp(!1),
          r = n[0];
        return (n = q1.bind(null, n[1])), (Rn().memoizedState = n), [r, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, o) {
        var l = ze,
          f = Rn();
        if (Ve) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (((o = r()), nt === null)) throw Error(i(349));
          (si & 30) !== 0 || Cp(l, r, o);
        }
        f.memoizedState = o;
        var m = { value: o, getSnapshot: r };
        return (
          (f.queue = m),
          Rp(Ep.bind(null, l, m, n), [n]),
          (l.flags |= 2048),
          ao(9, Tp.bind(null, l, m, o, r), void 0, null),
          o
        );
      },
      useId: function () {
        var n = Rn(),
          r = nt.identifierPrefix;
        if (Ve) {
          var o = Kn,
            l = Hn;
          (o = (l & ~(1 << (32 - sn(l) - 1))).toString(32) + o),
            (r = ":" + r + "R" + o),
            (o = so++),
            0 < o && (r += "H" + o.toString(32)),
            (r += ":");
        } else (o = Q1++), (r = ":" + r + "r" + o.toString(32) + ":");
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    eb = {
      readContext: Kt,
      useCallback: Op,
      useContext: Kt,
      useEffect: ac,
      useImperativeHandle: Lp,
      useInsertionEffect: Ap,
      useLayoutEffect: Mp,
      useMemo: Ip,
      useReducer: sc,
      useRef: Np,
      useState: function () {
        return sc(oo);
      },
      useDebugValue: lc,
      useDeferredValue: function (n) {
        var r = Gt();
        return Vp(r, Je.memoizedState, n);
      },
      useTransition: function () {
        var n = sc(oo)[0],
          r = Gt().memoizedState;
        return [n, r];
      },
      useMutableSource: bp,
      useSyncExternalStore: Sp,
      useId: _p,
      unstable_isNewReconciler: !1,
    },
    tb = {
      readContext: Kt,
      useCallback: Op,
      useContext: Kt,
      useEffect: ac,
      useImperativeHandle: Lp,
      useInsertionEffect: Ap,
      useLayoutEffect: Mp,
      useMemo: Ip,
      useReducer: oc,
      useRef: Np,
      useState: function () {
        return oc(oo);
      },
      useDebugValue: lc,
      useDeferredValue: function (n) {
        var r = Gt();
        return Je === null ? (r.memoizedState = n) : Vp(r, Je.memoizedState, n);
      },
      useTransition: function () {
        var n = oc(oo)[0],
          r = Gt().memoizedState;
        return [n, r];
      },
      useMutableSource: bp,
      useSyncExternalStore: Sp,
      useId: _p,
      unstable_isNewReconciler: !1,
    };
  function ln(n, r) {
    if (n && n.defaultProps) {
      (r = G({}, r)), (n = n.defaultProps);
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function uc(n, r, o, l) {
    (r = n.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : G({}, r, o)),
      (n.memoizedState = o),
      n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Wa = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Jr(n) === n : !1;
    },
    enqueueSetState: function (n, r, o) {
      n = n._reactInternals;
      var l = xt(),
        f = Tr(n),
        m = Yn(l, f);
      (m.payload = r),
        o != null && (m.callback = o),
        (r = wr(n, m, f)),
        r !== null && (dn(r, n, f, l), Ia(r, n, f));
    },
    enqueueReplaceState: function (n, r, o) {
      n = n._reactInternals;
      var l = xt(),
        f = Tr(n),
        m = Yn(l, f);
      (m.tag = 1),
        (m.payload = r),
        o != null && (m.callback = o),
        (r = wr(n, m, f)),
        r !== null && (dn(r, n, f, l), Ia(r, n, f));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var o = xt(),
        l = Tr(n),
        f = Yn(o, l);
      (f.tag = 2),
        r != null && (f.callback = r),
        (r = wr(n, f, l)),
        r !== null && (dn(r, n, l, o), Ia(r, n, l));
    },
  };
  function $p(n, r, o, l, f, m, b) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(l, m, b)
        : r.prototype && r.prototype.isPureReactComponent
        ? !Gs(o, l) || !Gs(f, m)
        : !0
    );
  }
  function Up(n, r, o) {
    var l = !1,
      f = yr,
      m = r.contextType;
    return (
      typeof m == "object" && m !== null
        ? (m = Kt(m))
        : ((f = Pt(r) ? ei : ut.current),
          (l = r.contextTypes),
          (m = (l = l != null) ? Hi(n, f) : yr)),
      (r = new r(o, m)),
      (n.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Wa),
      (n.stateNode = r),
      (r._reactInternals = n),
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = f),
        (n.__reactInternalMemoizedMaskedChildContext = m)),
      r
    );
  }
  function Wp(n, r, o, l) {
    (n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== n && Wa.enqueueReplaceState(r, r.state, null);
  }
  function cc(n, r, o, l) {
    var f = n.stateNode;
    (f.props = o), (f.state = n.memoizedState), (f.refs = {}), qu(n);
    var m = r.contextType;
    typeof m == "object" && m !== null
      ? (f.context = Kt(m))
      : ((m = Pt(r) ? ei : ut.current), (f.context = Hi(n, m))),
      (f.state = n.memoizedState),
      (m = r.getDerivedStateFromProps),
      typeof m == "function" && (uc(n, r, m, o), (f.state = n.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function" ||
        (typeof f.UNSAFE_componentWillMount != "function" &&
          typeof f.componentWillMount != "function") ||
        ((r = f.state),
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" &&
          f.UNSAFE_componentWillMount(),
        r !== f.state && Wa.enqueueReplaceState(f, f.state, null),
        Va(n, o, f, l),
        (f.state = n.memoizedState)),
      typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Zi(n, r) {
    try {
      var o = "",
        l = r;
      do (o += me(l)), (l = l.return);
      while (l);
      var f = o;
    } catch (m) {
      f =
        `
Error generating stack: ` +
        m.message +
        `
` +
        m.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function dc(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function fc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var nb = typeof WeakMap == "function" ? WeakMap : Map;
  function Hp(n, r, o) {
    (o = Yn(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var l = r.value;
    return (
      (o.callback = function () {
        Xa || ((Xa = !0), (kc = l)), fc(n, r);
      }),
      o
    );
  }
  function Kp(n, r, o) {
    (o = Yn(-1, o)), (o.tag = 3);
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = r.value;
      (o.payload = function () {
        return l(f);
      }),
        (o.callback = function () {
          fc(n, r);
        });
    }
    var m = n.stateNode;
    return (
      m !== null &&
        typeof m.componentDidCatch == "function" &&
        (o.callback = function () {
          fc(n, r),
            typeof l != "function" &&
              (Sr === null ? (Sr = new Set([this])) : Sr.add(this));
          var b = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: b !== null ? b : "",
          });
        }),
      o
    );
  }
  function Gp(n, r, o) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new nb();
      var f = new Set();
      l.set(r, f);
    } else (f = l.get(r)), f === void 0 && ((f = new Set()), l.set(r, f));
    f.has(o) || (f.add(o), (n = gb.bind(null, n, r, o)), r.then(n, n));
  }
  function Yp(n) {
    do {
      var r;
      if (
        ((r = n.tag === 13) &&
          ((r = n.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qp(n, r, o, l, f) {
    return (n.mode & 1) === 0
      ? (n === r
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((r = Yn(-1, 1)), (r.tag = 2), wr(o, r, 1))),
            (o.lanes |= 1)),
        n)
      : ((n.flags |= 65536), (n.lanes = f), n);
  }
  var rb = D.ReactCurrentOwner,
    kt = !1;
  function vt(n, r, o, l) {
    r.child = n === null ? mp(r, null, o, l) : Qi(r, n.child, o, l);
  }
  function qp(n, r, o, l, f) {
    o = o.render;
    var m = r.ref;
    return (
      Xi(r, f),
      (l = rc(n, r, o, l, m, f)),
      (o = ic()),
      n !== null && !kt
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~f),
          Qn(n, r, f))
        : (Ve && o && zu(r), (r.flags |= 1), vt(n, r, l, f), r.child)
    );
  }
  function Xp(n, r, o, l, f) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" &&
        !Lc(m) &&
        m.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((r.tag = 15), (r.type = m), Jp(n, r, m, l, f))
        : ((n = rl(o.type, null, l, r, r.mode, f)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((m = n.child), (n.lanes & f) === 0)) {
      var b = m.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : Gs), o(b, l) && n.ref === r.ref)
      )
        return Qn(n, r, f);
    }
    return (
      (r.flags |= 1),
      (n = Pr(m, l)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function Jp(n, r, o, l, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Gs(m, l) && n.ref === r.ref)
        if (((kt = !1), (r.pendingProps = l = m), (n.lanes & f) !== 0))
          (n.flags & 131072) !== 0 && (kt = !0);
        else return (r.lanes = n.lanes), Qn(n, r, f);
    }
    return hc(n, r, o, l, f);
  }
  function Zp(n, r, o) {
    var l = r.pendingProps,
      f = l.children,
      m = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if ((r.mode & 1) === 0)
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          De(ts, zt),
          (zt |= o);
      else {
        if ((o & 1073741824) === 0)
          return (
            (n = m !== null ? m.baseLanes | o : o),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            De(ts, zt),
            (zt |= n),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = m !== null ? m.baseLanes : o),
          De(ts, zt),
          (zt |= l);
      }
    else
      m !== null ? ((l = m.baseLanes | o), (r.memoizedState = null)) : (l = o),
        De(ts, zt),
        (zt |= l);
    return vt(n, r, f, o), r.child;
  }
  function em(n, r) {
    var o = r.ref;
    ((n === null && o !== null) || (n !== null && n.ref !== o)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function hc(n, r, o, l, f) {
    var m = Pt(o) ? ei : ut.current;
    return (
      (m = Hi(r, m)),
      Xi(r, f),
      (o = rc(n, r, o, l, m, f)),
      (l = ic()),
      n !== null && !kt
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~f),
          Qn(n, r, f))
        : (Ve && l && zu(r), (r.flags |= 1), vt(n, r, o, f), r.child)
    );
  }
  function tm(n, r, o, l, f) {
    if (Pt(o)) {
      var m = !0;
      ja(r);
    } else m = !1;
    if ((Xi(r, f), r.stateNode === null))
      Ka(n, r), Up(r, o, l), cc(r, o, l, f), (l = !0);
    else if (n === null) {
      var b = r.stateNode,
        P = r.memoizedProps;
      b.props = P;
      var N = b.context,
        _ = o.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Kt(_))
        : ((_ = Pt(o) ? ei : ut.current), (_ = Hi(r, _)));
      var Y = o.getDerivedStateFromProps,
        Q =
          typeof Y == "function" ||
          typeof b.getSnapshotBeforeUpdate == "function";
      Q ||
        (typeof b.UNSAFE_componentWillReceiveProps != "function" &&
          typeof b.componentWillReceiveProps != "function") ||
        ((P !== l || N !== _) && Wp(r, b, l, _)),
        (xr = !1);
      var K = r.memoizedState;
      (b.state = K),
        Va(r, l, b, f),
        (N = r.memoizedState),
        P !== l || K !== N || Et.current || xr
          ? (typeof Y == "function" && (uc(r, o, Y, l), (N = r.memoizedState)),
            (P = xr || $p(r, o, P, l, K, N, _))
              ? (Q ||
                  (typeof b.UNSAFE_componentWillMount != "function" &&
                    typeof b.componentWillMount != "function") ||
                  (typeof b.componentWillMount == "function" &&
                    b.componentWillMount(),
                  typeof b.UNSAFE_componentWillMount == "function" &&
                    b.UNSAFE_componentWillMount()),
                typeof b.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof b.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = N)),
            (b.props = l),
            (b.state = N),
            (b.context = _),
            (l = P))
          : (typeof b.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (b = r.stateNode),
        yp(n, r),
        (P = r.memoizedProps),
        (_ = r.type === r.elementType ? P : ln(r.type, P)),
        (b.props = _),
        (Q = r.pendingProps),
        (K = b.context),
        (N = o.contextType),
        typeof N == "object" && N !== null
          ? (N = Kt(N))
          : ((N = Pt(o) ? ei : ut.current), (N = Hi(r, N)));
      var ie = o.getDerivedStateFromProps;
      (Y =
        typeof ie == "function" ||
        typeof b.getSnapshotBeforeUpdate == "function") ||
        (typeof b.UNSAFE_componentWillReceiveProps != "function" &&
          typeof b.componentWillReceiveProps != "function") ||
        ((P !== Q || K !== N) && Wp(r, b, l, N)),
        (xr = !1),
        (K = r.memoizedState),
        (b.state = K),
        Va(r, l, b, f);
      var ae = r.memoizedState;
      P !== Q || K !== ae || Et.current || xr
        ? (typeof ie == "function" && (uc(r, o, ie, l), (ae = r.memoizedState)),
          (_ = xr || $p(r, o, _, l, K, ae, N) || !1)
            ? (Y ||
                (typeof b.UNSAFE_componentWillUpdate != "function" &&
                  typeof b.componentWillUpdate != "function") ||
                (typeof b.componentWillUpdate == "function" &&
                  b.componentWillUpdate(l, ae, N),
                typeof b.UNSAFE_componentWillUpdate == "function" &&
                  b.UNSAFE_componentWillUpdate(l, ae, N)),
              typeof b.componentDidUpdate == "function" && (r.flags |= 4),
              typeof b.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof b.componentDidUpdate != "function" ||
                (P === n.memoizedProps && K === n.memoizedState) ||
                (r.flags |= 4),
              typeof b.getSnapshotBeforeUpdate != "function" ||
                (P === n.memoizedProps && K === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = ae)),
          (b.props = l),
          (b.state = ae),
          (b.context = N),
          (l = _))
        : (typeof b.componentDidUpdate != "function" ||
            (P === n.memoizedProps && K === n.memoizedState) ||
            (r.flags |= 4),
          typeof b.getSnapshotBeforeUpdate != "function" ||
            (P === n.memoizedProps && K === n.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return pc(n, r, o, l, m, f);
  }
  function pc(n, r, o, l, f, m) {
    em(n, r);
    var b = (r.flags & 128) !== 0;
    if (!l && !b) return f && op(r, o, !1), Qn(n, r, m);
    (l = r.stateNode), (rb.current = r);
    var P =
      b && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (r.flags |= 1),
      n !== null && b
        ? ((r.child = Qi(r, n.child, null, m)), (r.child = Qi(r, null, P, m)))
        : vt(n, r, P, m),
      (r.memoizedState = l.state),
      f && op(r, o, !0),
      r.child
    );
  }
  function nm(n) {
    var r = n.stateNode;
    r.pendingContext
      ? ip(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && ip(n, r.context, !1),
      Xu(n, r.containerInfo);
  }
  function rm(n, r, o, l, f) {
    return Yi(), Wu(f), (r.flags |= 256), vt(n, r, o, l), r.child;
  }
  var mc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function im(n, r, o) {
    var l = r.pendingProps,
      f = Fe.current,
      m = !1,
      b = (r.flags & 128) !== 0,
      P;
    if (
      ((P = b) ||
        (P = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0),
      P
        ? ((m = !0), (r.flags &= -129))
        : (n === null || n.memoizedState !== null) && (f |= 1),
      De(Fe, f & 1),
      n === null)
    )
      return (
        Uu(r),
        (n = r.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? ((r.mode & 1) === 0
              ? (r.lanes = 1)
              : n.data === "$!"
              ? (r.lanes = 8)
              : (r.lanes = 1073741824),
            null)
          : ((b = l.children),
            (n = l.fallback),
            m
              ? ((l = r.mode),
                (m = r.child),
                (b = { mode: "hidden", children: b }),
                (l & 1) === 0 && m !== null
                  ? ((m.childLanes = 0), (m.pendingProps = b))
                  : (m = il(b, l, 0, null)),
                (n = ci(n, l, o, null)),
                (m.return = r),
                (n.return = r),
                (m.sibling = n),
                (r.child = m),
                (r.child.memoizedState = gc(o)),
                (r.memoizedState = mc),
                n)
              : yc(r, b))
      );
    if (((f = n.memoizedState), f !== null && ((P = f.dehydrated), P !== null)))
      return ib(n, r, b, l, P, f, o);
    if (m) {
      (m = l.fallback), (b = r.mode), (f = n.child), (P = f.sibling);
      var N = { mode: "hidden", children: l.children };
      return (
        (b & 1) === 0 && r.child !== f
          ? ((l = r.child),
            (l.childLanes = 0),
            (l.pendingProps = N),
            (r.deletions = null))
          : ((l = Pr(f, N)), (l.subtreeFlags = f.subtreeFlags & 14680064)),
        P !== null ? (m = Pr(P, m)) : ((m = ci(m, b, o, null)), (m.flags |= 2)),
        (m.return = r),
        (l.return = r),
        (l.sibling = m),
        (r.child = l),
        (l = m),
        (m = r.child),
        (b = n.child.memoizedState),
        (b =
          b === null
            ? gc(o)
            : {
                baseLanes: b.baseLanes | o,
                cachePool: null,
                transitions: b.transitions,
              }),
        (m.memoizedState = b),
        (m.childLanes = n.childLanes & ~o),
        (r.memoizedState = mc),
        l
      );
    }
    return (
      (m = n.child),
      (n = m.sibling),
      (l = Pr(m, { mode: "visible", children: l.children })),
      (r.mode & 1) === 0 && (l.lanes = o),
      (l.return = r),
      (l.sibling = null),
      n !== null &&
        ((o = r.deletions),
        o === null ? ((r.deletions = [n]), (r.flags |= 16)) : o.push(n)),
      (r.child = l),
      (r.memoizedState = null),
      l
    );
  }
  function yc(n, r) {
    return (
      (r = il({ mode: "visible", children: r }, n.mode, 0, null)),
      (r.return = n),
      (n.child = r)
    );
  }
  function Ha(n, r, o, l) {
    return (
      l !== null && Wu(l),
      Qi(r, n.child, null, o),
      (n = yc(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function ib(n, r, o, l, f, m, b) {
    if (o)
      return r.flags & 256
        ? ((r.flags &= -257), (l = dc(Error(i(422)))), Ha(n, r, b, l))
        : r.memoizedState !== null
        ? ((r.child = n.child), (r.flags |= 128), null)
        : ((m = l.fallback),
          (f = r.mode),
          (l = il({ mode: "visible", children: l.children }, f, 0, null)),
          (m = ci(m, f, b, null)),
          (m.flags |= 2),
          (l.return = r),
          (m.return = r),
          (l.sibling = m),
          (r.child = l),
          (r.mode & 1) !== 0 && Qi(r, n.child, null, b),
          (r.child.memoizedState = gc(b)),
          (r.memoizedState = mc),
          m);
    if ((r.mode & 1) === 0) return Ha(n, r, b, null);
    if (f.data === "$!") {
      if (((l = f.nextSibling && f.nextSibling.dataset), l)) var P = l.dgst;
      return (
        (l = P), (m = Error(i(419))), (l = dc(m, l, void 0)), Ha(n, r, b, l)
      );
    }
    if (((P = (b & n.childLanes) !== 0), kt || P)) {
      if (((l = nt), l !== null)) {
        switch (b & -b) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        (f = (f & (l.suspendedLanes | b)) !== 0 ? 0 : f),
          f !== 0 &&
            f !== m.retryLane &&
            ((m.retryLane = f), Gn(n, f), dn(l, n, f, -1));
      }
      return Dc(), (l = dc(Error(i(421)))), Ha(n, r, b, l);
    }
    return f.data === "$?"
      ? ((r.flags |= 128),
        (r.child = n.child),
        (r = yb.bind(null, n)),
        (f._reactRetry = r),
        null)
      : ((n = m.treeContext),
        (Ft = mr(f.nextSibling)),
        (_t = r),
        (Ve = !0),
        (an = null),
        n !== null &&
          ((Wt[Ht++] = Hn),
          (Wt[Ht++] = Kn),
          (Wt[Ht++] = ti),
          (Hn = n.id),
          (Kn = n.overflow),
          (ti = r)),
        (r = yc(r, l.children)),
        (r.flags |= 4096),
        r);
  }
  function sm(n, r, o) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), Yu(n.return, r, o);
  }
  function vc(n, r, o, l, f) {
    var m = n.memoizedState;
    m === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: f,
        })
      : ((m.isBackwards = r),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = l),
        (m.tail = o),
        (m.tailMode = f));
  }
  function om(n, r, o) {
    var l = r.pendingProps,
      f = l.revealOrder,
      m = l.tail;
    if ((vt(n, r, l.children, o), (l = Fe.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && sm(n, o, r);
          else if (n.tag === 19) sm(n, o, r);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      l &= 1;
    }
    if ((De(Fe, l), (r.mode & 1) === 0)) r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = r.child, f = null; o !== null; )
            (n = o.alternate),
              n !== null && _a(n) === null && (f = o),
              (o = o.sibling);
          (o = f),
            o === null
              ? ((f = r.child), (r.child = null))
              : ((f = o.sibling), (o.sibling = null)),
            vc(r, !1, f, o, m);
          break;
        case "backwards":
          for (o = null, f = r.child, r.child = null; f !== null; ) {
            if (((n = f.alternate), n !== null && _a(n) === null)) {
              r.child = f;
              break;
            }
            (n = f.sibling), (f.sibling = o), (o = f), (f = n);
          }
          vc(r, !0, o, null, m);
          break;
        case "together":
          vc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ka(n, r) {
    (r.mode & 1) === 0 &&
      n !== null &&
      ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function Qn(n, r, o) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (oi |= r.lanes),
      (o & r.childLanes) === 0)
    )
      return null;
    if (n !== null && r.child !== n.child) throw Error(i(153));
    if (r.child !== null) {
      for (
        n = r.child, o = Pr(n, n.pendingProps), r.child = o, o.return = r;
        n.sibling !== null;

      )
        (n = n.sibling),
          (o = o.sibling = Pr(n, n.pendingProps)),
          (o.return = r);
      o.sibling = null;
    }
    return r.child;
  }
  function sb(n, r, o) {
    switch (r.tag) {
      case 3:
        nm(r), Yi();
        break;
      case 5:
        wp(r);
        break;
      case 1:
        Pt(r.type) && ja(r);
        break;
      case 4:
        Xu(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context,
          f = r.memoizedProps.value;
        De(La, l._currentValue), (l._currentValue = f);
        break;
      case 13:
        if (((l = r.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (De(Fe, Fe.current & 1), (r.flags |= 128), null)
            : (o & r.child.childLanes) !== 0
            ? im(n, r, o)
            : (De(Fe, Fe.current & 1),
              (n = Qn(n, r, o)),
              n !== null ? n.sibling : null);
        De(Fe, Fe.current & 1);
        break;
      case 19:
        if (((l = (o & r.childLanes) !== 0), (n.flags & 128) !== 0)) {
          if (l) return om(n, r, o);
          r.flags |= 128;
        }
        if (
          ((f = r.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          De(Fe, Fe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), Zp(n, r, o);
    }
    return Qn(n, r, o);
  }
  var am, xc, lm, um;
  (am = function (n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (xc = function () {}),
    (lm = function (n, r, o, l) {
      var f = n.memoizedProps;
      if (f !== l) {
        (n = r.stateNode), ii(Nn.current);
        var m = null;
        switch (o) {
          case "input":
            (f = sr(n, f)), (l = sr(n, l)), (m = []);
            break;
          case "select":
            (f = G({}, f, { value: void 0 })),
              (l = G({}, l, { value: void 0 })),
              (m = []);
            break;
          case "textarea":
            (f = Ai(n, f)), (l = Ai(n, l)), (m = []);
            break;
          default:
            typeof f.onClick != "function" &&
              typeof l.onClick == "function" &&
              (n.onclick = Ea);
        }
        Tn(o, l);
        var b;
        o = null;
        for (_ in f)
          if (!l.hasOwnProperty(_) && f.hasOwnProperty(_) && f[_] != null)
            if (_ === "style") {
              var P = f[_];
              for (b in P) P.hasOwnProperty(b) && (o || (o = {}), (o[b] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (a.hasOwnProperty(_)
                  ? m || (m = [])
                  : (m = m || []).push(_, null));
        for (_ in l) {
          var N = l[_];
          if (
            ((P = f != null ? f[_] : void 0),
            l.hasOwnProperty(_) && N !== P && (N != null || P != null))
          )
            if (_ === "style")
              if (P) {
                for (b in P)
                  !P.hasOwnProperty(b) ||
                    (N && N.hasOwnProperty(b)) ||
                    (o || (o = {}), (o[b] = ""));
                for (b in N)
                  N.hasOwnProperty(b) &&
                    P[b] !== N[b] &&
                    (o || (o = {}), (o[b] = N[b]));
              } else o || (m || (m = []), m.push(_, o)), (o = N);
            else
              _ === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (P = P ? P.__html : void 0),
                  N != null && P !== N && (m = m || []).push(_, N))
                : _ === "children"
                ? (typeof N != "string" && typeof N != "number") ||
                  (m = m || []).push(_, "" + N)
                : _ !== "suppressContentEditableWarning" &&
                  _ !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(_)
                    ? (N != null && _ === "onScroll" && Le("scroll", n),
                      m || P === N || (m = []))
                    : (m = m || []).push(_, N));
        }
        o && (m = m || []).push("style", o);
        var _ = m;
        (r.updateQueue = _) && (r.flags |= 4);
      }
    }),
    (um = function (n, r, o, l) {
      o !== l && (r.flags |= 4);
    });
  function lo(n, r) {
    if (!Ve)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null ? (n.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function dt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      o = 0,
      l = 0;
    if (r)
      for (var f = n.child; f !== null; )
        (o |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 14680064),
          (l |= f.flags & 14680064),
          (f.return = n),
          (f = f.sibling);
    else
      for (f = n.child; f !== null; )
        (o |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = n),
          (f = f.sibling);
    return (n.subtreeFlags |= l), (n.childLanes = o), r;
  }
  function ob(n, r, o) {
    var l = r.pendingProps;
    switch ((Bu(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(r), null;
      case 1:
        return Pt(r.type) && ka(), dt(r), null;
      case 3:
        return (
          (l = r.stateNode),
          Ji(),
          Oe(Et),
          Oe(ut),
          ec(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (n === null || n.child === null) &&
            (Ma(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), an !== null && (Rc(an), (an = null)))),
          xc(n, r),
          dt(r),
          null
        );
      case 5:
        Ju(r);
        var f = ii(ro.current);
        if (((o = r.type), n !== null && r.stateNode != null))
          lm(n, r, o, l, f),
            n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return dt(r), null;
          }
          if (((n = ii(Nn.current)), Ma(r))) {
            (l = r.stateNode), (o = r.type);
            var m = r.memoizedProps;
            switch (((l[jn] = r), (l[Js] = m), (n = (r.mode & 1) !== 0), o)) {
              case "dialog":
                Le("cancel", l), Le("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", l);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Qs.length; f++) Le(Qs[f], l);
                break;
              case "source":
                Le("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", l), Le("load", l);
                break;
              case "details":
                Le("toggle", l);
                break;
              case "input":
                Ri(l, m), Le("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!m.multiple }),
                  Le("invalid", l);
                break;
              case "textarea":
                bn(l, m), Le("invalid", l);
            }
            Tn(o, m), (f = null);
            for (var b in m)
              if (m.hasOwnProperty(b)) {
                var P = m[b];
                b === "children"
                  ? typeof P == "string"
                    ? l.textContent !== P &&
                      (m.suppressHydrationWarning !== !0 &&
                        Ta(l.textContent, P, n),
                      (f = ["children", P]))
                    : typeof P == "number" &&
                      l.textContent !== "" + P &&
                      (m.suppressHydrationWarning !== !0 &&
                        Ta(l.textContent, P, n),
                      (f = ["children", "" + P]))
                  : a.hasOwnProperty(b) &&
                    P != null &&
                    b === "onScroll" &&
                    Le("scroll", l);
              }
            switch (o) {
              case "input":
                Ot(l), or(l, m, !0);
                break;
              case "textarea":
                Ot(l), Zo(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (l.onclick = Ea);
            }
            (l = f), (r.updateQueue = l), l !== null && (r.flags |= 4);
          } else {
            (b = f.nodeType === 9 ? f : f.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = gt(o)),
              n === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((n = b.createElement("div")),
                    (n.innerHTML = "<script></script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof l.is == "string"
                  ? (n = b.createElement(o, { is: l.is }))
                  : ((n = b.createElement(o)),
                    o === "select" &&
                      ((b = n),
                      l.multiple
                        ? (b.multiple = !0)
                        : l.size && (b.size = l.size)))
                : (n = b.createElementNS(n, o)),
              (n[jn] = r),
              (n[Js] = l),
              am(n, r, !1, !1),
              (r.stateNode = n);
            e: {
              switch (((b = Ms(o, l)), o)) {
                case "dialog":
                  Le("cancel", n), Le("close", n), (f = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", n), (f = l);
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Qs.length; f++) Le(Qs[f], n);
                  f = l;
                  break;
                case "source":
                  Le("error", n), (f = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", n), Le("load", n), (f = l);
                  break;
                case "details":
                  Le("toggle", n), (f = l);
                  break;
                case "input":
                  Ri(n, l), (f = sr(n, l)), Le("invalid", n);
                  break;
                case "option":
                  f = l;
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!l.multiple }),
                    (f = G({}, l, { value: void 0 })),
                    Le("invalid", n);
                  break;
                case "textarea":
                  bn(n, l), (f = Ai(n, l)), Le("invalid", n);
                  break;
                default:
                  f = l;
              }
              Tn(o, f), (P = f);
              for (m in P)
                if (P.hasOwnProperty(m)) {
                  var N = P[m];
                  m === "style"
                    ? $n(n, N)
                    : m === "dangerouslySetInnerHTML"
                    ? ((N = N ? N.__html : void 0), N != null && ea(n, N))
                    : m === "children"
                    ? typeof N == "string"
                      ? (o !== "textarea" || N !== "") && Cn(n, N)
                      : typeof N == "number" && Cn(n, "" + N)
                    : m !== "suppressContentEditableWarning" &&
                      m !== "suppressHydrationWarning" &&
                      m !== "autoFocus" &&
                      (a.hasOwnProperty(m)
                        ? N != null && m === "onScroll" && Le("scroll", n)
                        : N != null && j(n, m, N, b));
                }
              switch (o) {
                case "input":
                  Ot(n), or(n, l, !1);
                  break;
                case "textarea":
                  Ot(n), Zo(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + Ee(l.value));
                  break;
                case "select":
                  (n.multiple = !!l.multiple),
                    (m = l.value),
                    m != null
                      ? Ut(n, !!l.multiple, m, !1)
                      : l.defaultValue != null &&
                        Ut(n, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Ea);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return dt(r), null;
      case 6:
        if (n && r.stateNode != null) um(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
          if (((o = ii(ro.current)), ii(Nn.current), Ma(r))) {
            if (
              ((l = r.stateNode),
              (o = r.memoizedProps),
              (l[jn] = r),
              (m = l.nodeValue !== o) && ((n = _t), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Ta(l.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ta(l.nodeValue, o, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            (l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l)),
              (l[jn] = r),
              (r.stateNode = l);
        }
        return dt(r), null;
      case 13:
        if (
          (Oe(Fe),
          (l = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Ve && Ft !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            fp(), Yi(), (r.flags |= 98560), (m = !1);
          else if (((m = Ma(r)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!m) throw Error(i(318));
              if (
                ((m = r.memoizedState),
                (m = m !== null ? m.dehydrated : null),
                !m)
              )
                throw Error(i(317));
              m[jn] = r;
            } else
              Yi(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4);
            dt(r), (m = !1);
          } else an !== null && (Rc(an), (an = null)), (m = !0);
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0
          ? ((r.lanes = o), r)
          : ((l = l !== null),
            l !== (n !== null && n.memoizedState !== null) &&
              l &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (n === null || (Fe.current & 1) !== 0
                  ? Ze === 0 && (Ze = 3)
                  : Dc())),
            r.updateQueue !== null && (r.flags |= 4),
            dt(r),
            null);
      case 4:
        return (
          Ji(),
          xc(n, r),
          n === null && qs(r.stateNode.containerInfo),
          dt(r),
          null
        );
      case 10:
        return Gu(r.type._context), dt(r), null;
      case 17:
        return Pt(r.type) && ka(), dt(r), null;
      case 19:
        if ((Oe(Fe), (m = r.memoizedState), m === null)) return dt(r), null;
        if (((l = (r.flags & 128) !== 0), (b = m.rendering), b === null))
          if (l) lo(m, !1);
          else {
            if (Ze !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((b = _a(n)), b !== null)) {
                  for (
                    r.flags |= 128,
                      lo(m, !1),
                      l = b.updateQueue,
                      l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      l = o,
                      o = r.child;
                    o !== null;

                  )
                    (m = o),
                      (n = l),
                      (m.flags &= 14680066),
                      (b = m.alternate),
                      b === null
                        ? ((m.childLanes = 0),
                          (m.lanes = n),
                          (m.child = null),
                          (m.subtreeFlags = 0),
                          (m.memoizedProps = null),
                          (m.memoizedState = null),
                          (m.updateQueue = null),
                          (m.dependencies = null),
                          (m.stateNode = null))
                        : ((m.childLanes = b.childLanes),
                          (m.lanes = b.lanes),
                          (m.child = b.child),
                          (m.subtreeFlags = 0),
                          (m.deletions = null),
                          (m.memoizedProps = b.memoizedProps),
                          (m.memoizedState = b.memoizedState),
                          (m.updateQueue = b.updateQueue),
                          (m.type = b.type),
                          (n = b.dependencies),
                          (m.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (o = o.sibling);
                  return De(Fe, (Fe.current & 1) | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null &&
              Ke() > ns &&
              ((r.flags |= 128), (l = !0), lo(m, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = _a(b)), n !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (o = n.updateQueue),
                o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                lo(m, !0),
                m.tail === null &&
                  m.tailMode === "hidden" &&
                  !b.alternate &&
                  !Ve)
              )
                return dt(r), null;
            } else
              2 * Ke() - m.renderingStartTime > ns &&
                o !== 1073741824 &&
                ((r.flags |= 128), (l = !0), lo(m, !1), (r.lanes = 4194304));
          m.isBackwards
            ? ((b.sibling = r.child), (r.child = b))
            : ((o = m.last),
              o !== null ? (o.sibling = b) : (r.child = b),
              (m.last = b));
        }
        return m.tail !== null
          ? ((r = m.tail),
            (m.rendering = r),
            (m.tail = r.sibling),
            (m.renderingStartTime = Ke()),
            (r.sibling = null),
            (o = Fe.current),
            De(Fe, l ? (o & 1) | 2 : o & 1),
            r)
          : (dt(r), null);
      case 22:
      case 23:
        return (
          Mc(),
          (l = r.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== l && (r.flags |= 8192),
          l && (r.mode & 1) !== 0
            ? (zt & 1073741824) !== 0 &&
              (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : dt(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function ab(n, r) {
    switch ((Bu(r), r.tag)) {
      case 1:
        return (
          Pt(r.type) && ka(),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Ji(),
          Oe(Et),
          Oe(ut),
          ec(),
          (n = r.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((r.flags = (n & -65537) | 128), r)
            : null
        );
      case 5:
        return Ju(r), null;
      case 13:
        if (
          (Oe(Fe), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(i(340));
          Yi();
        }
        return (
          (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return Oe(Fe), null;
      case 4:
        return Ji(), null;
      case 10:
        return Gu(r.type._context), null;
      case 22:
      case 23:
        return Mc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ga = !1,
    ft = !1,
    lb = typeof WeakSet == "function" ? WeakSet : Set,
    oe = null;
  function es(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (l) {
          $e(n, r, l);
        }
      else o.current = null;
  }
  function wc(n, r, o) {
    try {
      o();
    } catch (l) {
      $e(n, r, l);
    }
  }
  var cm = !1;
  function ub(n, r) {
    if (((Mu = ha), (n = $h()), Tu(n))) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = ((o = n.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var f = l.anchorOffset,
              m = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var b = 0,
              P = -1,
              N = -1,
              _ = 0,
              Y = 0,
              Q = n,
              K = null;
            t: for (;;) {
              for (
                var ie;
                Q !== o || (f !== 0 && Q.nodeType !== 3) || (P = b + f),
                  Q !== m || (l !== 0 && Q.nodeType !== 3) || (N = b + l),
                  Q.nodeType === 3 && (b += Q.nodeValue.length),
                  (ie = Q.firstChild) !== null;

              )
                (K = Q), (Q = ie);
              for (;;) {
                if (Q === n) break t;
                if (
                  (K === o && ++_ === f && (P = b),
                  K === m && ++Y === l && (N = b),
                  (ie = Q.nextSibling) !== null)
                )
                  break;
                (Q = K), (K = Q.parentNode);
              }
              Q = ie;
            }
            o = P === -1 || N === -1 ? null : { start: P, end: N };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      Du = { focusedElem: n, selectionRange: o }, ha = !1, oe = r;
      oe !== null;

    )
      if (
        ((r = oe), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = r), (oe = n);
      else
        for (; oe !== null; ) {
          r = oe;
          try {
            var ae = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ae !== null) {
                    var le = ae.memoizedProps,
                      Ge = ae.memoizedState,
                      L = r.stateNode,
                      A = L.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? le : ln(r.type, le),
                        Ge
                      );
                    L.__reactInternalSnapshotBeforeUpdate = A;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1
                    ? (I.textContent = "")
                    : I.nodeType === 9 &&
                      I.documentElement &&
                      I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (q) {
            $e(r, r.return, q);
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (oe = n);
            break;
          }
          oe = r.return;
        }
    return (ae = cm), (cm = !1), ae;
  }
  function uo(n, r, o) {
    var l = r.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var f = (l = l.next);
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          (f.destroy = void 0), m !== void 0 && wc(r, o, m);
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function Ya(n, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var o = (r = r.next);
      do {
        if ((o.tag & n) === n) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function bc(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : (r.current = n);
    }
  }
  function dm(n) {
    var r = n.alternate;
    r !== null && ((n.alternate = null), dm(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null &&
          (delete r[jn],
          delete r[Js],
          delete r[Vu],
          delete r[H1],
          delete r[K1])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function fm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function hm(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || fm(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Sc(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode),
        r
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(n, r)
            : o.insertBefore(n, r)
          : (o.nodeType === 8
              ? ((r = o.parentNode), r.insertBefore(n, o))
              : ((r = o), r.appendChild(n)),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = Ea));
    else if (l !== 4 && ((n = n.child), n !== null))
      for (Sc(n, r, o), n = n.sibling; n !== null; )
        Sc(n, r, o), (n = n.sibling);
  }
  function Cc(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode), r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (l !== 4 && ((n = n.child), n !== null))
      for (Cc(n, r, o), n = n.sibling; n !== null; )
        Cc(n, r, o), (n = n.sibling);
  }
  var ot = null,
    un = !1;
  function br(n, r, o) {
    for (o = o.child; o !== null; ) pm(n, r, o), (o = o.sibling);
  }
  function pm(n, r, o) {
    if (kn && typeof kn.onCommitFiberUnmount == "function")
      try {
        kn.onCommitFiberUnmount(aa, o);
      } catch {}
    switch (o.tag) {
      case 5:
        ft || es(o, r);
      case 6:
        var l = ot,
          f = un;
        (ot = null),
          br(n, r, o),
          (ot = l),
          (un = f),
          ot !== null &&
            (un
              ? ((n = ot),
                (o = o.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(o)
                  : n.removeChild(o))
              : ot.removeChild(o.stateNode));
        break;
      case 18:
        ot !== null &&
          (un
            ? ((n = ot),
              (o = o.stateNode),
              n.nodeType === 8
                ? Iu(n.parentNode, o)
                : n.nodeType === 1 && Iu(n, o),
              Bs(n))
            : Iu(ot, o.stateNode));
        break;
      case 4:
        (l = ot),
          (f = un),
          (ot = o.stateNode.containerInfo),
          (un = !0),
          br(n, r, o),
          (ot = l),
          (un = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ft &&
          ((l = o.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          f = l = l.next;
          do {
            var m = f,
              b = m.destroy;
            (m = m.tag),
              b !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && wc(o, r, b),
              (f = f.next);
          } while (f !== l);
        }
        br(n, r, o);
        break;
      case 1:
        if (
          !ft &&
          (es(o, r),
          (l = o.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = o.memoizedProps),
              (l.state = o.memoizedState),
              l.componentWillUnmount();
          } catch (P) {
            $e(o, r, P);
          }
        br(n, r, o);
        break;
      case 21:
        br(n, r, o);
        break;
      case 22:
        o.mode & 1
          ? ((ft = (l = ft) || o.memoizedState !== null), br(n, r, o), (ft = l))
          : br(n, r, o);
        break;
      default:
        br(n, r, o);
    }
  }
  function mm(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new lb()),
        r.forEach(function (l) {
          var f = vb.bind(null, n, l);
          o.has(l) || (o.add(l), l.then(f, f));
        });
    }
  }
  function cn(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var f = o[l];
        try {
          var m = n,
            b = r,
            P = b;
          e: for (; P !== null; ) {
            switch (P.tag) {
              case 5:
                (ot = P.stateNode), (un = !1);
                break e;
              case 3:
                (ot = P.stateNode.containerInfo), (un = !0);
                break e;
              case 4:
                (ot = P.stateNode.containerInfo), (un = !0);
                break e;
            }
            P = P.return;
          }
          if (ot === null) throw Error(i(160));
          pm(m, b, f), (ot = null), (un = !1);
          var N = f.alternate;
          N !== null && (N.return = null), (f.return = null);
        } catch (_) {
          $e(f, r, _);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) gm(r, n), (r = r.sibling);
  }
  function gm(n, r) {
    var o = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((cn(r, n), An(n), l & 4)) {
          try {
            uo(3, n, n.return), Ya(3, n);
          } catch (le) {
            $e(n, n.return, le);
          }
          try {
            uo(5, n, n.return);
          } catch (le) {
            $e(n, n.return, le);
          }
        }
        break;
      case 1:
        cn(r, n), An(n), l & 512 && o !== null && es(o, o.return);
        break;
      case 5:
        if (
          (cn(r, n),
          An(n),
          l & 512 && o !== null && es(o, o.return),
          n.flags & 32)
        ) {
          var f = n.stateNode;
          try {
            Cn(f, "");
          } catch (le) {
            $e(n, n.return, le);
          }
        }
        if (l & 4 && ((f = n.stateNode), f != null)) {
          var m = n.memoizedProps,
            b = o !== null ? o.memoizedProps : m,
            P = n.type,
            N = n.updateQueue;
          if (((n.updateQueue = null), N !== null))
            try {
              P === "input" && m.type === "radio" && m.name != null && Qr(f, m),
                Ms(P, b);
              var _ = Ms(P, m);
              for (b = 0; b < N.length; b += 2) {
                var Y = N[b],
                  Q = N[b + 1];
                Y === "style"
                  ? $n(f, Q)
                  : Y === "dangerouslySetInnerHTML"
                  ? ea(f, Q)
                  : Y === "children"
                  ? Cn(f, Q)
                  : j(f, Y, Q, _);
              }
              switch (P) {
                case "input":
                  qr(f, m);
                  break;
                case "textarea":
                  Jo(f, m);
                  break;
                case "select":
                  var K = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!m.multiple;
                  var ie = m.value;
                  ie != null
                    ? Ut(f, !!m.multiple, ie, !1)
                    : K !== !!m.multiple &&
                      (m.defaultValue != null
                        ? Ut(f, !!m.multiple, m.defaultValue, !0)
                        : Ut(f, !!m.multiple, m.multiple ? [] : "", !1));
              }
              f[Js] = m;
            } catch (le) {
              $e(n, n.return, le);
            }
        }
        break;
      case 6:
        if ((cn(r, n), An(n), l & 4)) {
          if (n.stateNode === null) throw Error(i(162));
          (f = n.stateNode), (m = n.memoizedProps);
          try {
            f.nodeValue = m;
          } catch (le) {
            $e(n, n.return, le);
          }
        }
        break;
      case 3:
        if (
          (cn(r, n), An(n), l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            Bs(r.containerInfo);
          } catch (le) {
            $e(n, n.return, le);
          }
        break;
      case 4:
        cn(r, n), An(n);
        break;
      case 13:
        cn(r, n),
          An(n),
          (f = n.child),
          f.flags & 8192 &&
            ((m = f.memoizedState !== null),
            (f.stateNode.isHidden = m),
            !m ||
              (f.alternate !== null && f.alternate.memoizedState !== null) ||
              (Pc = Ke())),
          l & 4 && mm(n);
        break;
      case 22:
        if (
          ((Y = o !== null && o.memoizedState !== null),
          n.mode & 1 ? ((ft = (_ = ft) || Y), cn(r, n), (ft = _)) : cn(r, n),
          An(n),
          l & 8192)
        ) {
          if (
            ((_ = n.memoizedState !== null),
            (n.stateNode.isHidden = _) && !Y && (n.mode & 1) !== 0)
          )
            for (oe = n, Y = n.child; Y !== null; ) {
              for (Q = oe = Y; oe !== null; ) {
                switch (((K = oe), (ie = K.child), K.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    uo(4, K, K.return);
                    break;
                  case 1:
                    es(K, K.return);
                    var ae = K.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      (l = K), (o = K.return);
                      try {
                        (r = l),
                          (ae.props = r.memoizedProps),
                          (ae.state = r.memoizedState),
                          ae.componentWillUnmount();
                      } catch (le) {
                        $e(l, o, le);
                      }
                    }
                    break;
                  case 5:
                    es(K, K.return);
                    break;
                  case 22:
                    if (K.memoizedState !== null) {
                      xm(Q);
                      continue;
                    }
                }
                ie !== null ? ((ie.return = K), (oe = ie)) : xm(Q);
              }
              Y = Y.sibling;
            }
          e: for (Y = null, Q = n; ; ) {
            if (Q.tag === 5) {
              if (Y === null) {
                Y = Q;
                try {
                  (f = Q.stateNode),
                    _
                      ? ((m = f.style),
                        typeof m.setProperty == "function"
                          ? m.setProperty("display", "none", "important")
                          : (m.display = "none"))
                      : ((P = Q.stateNode),
                        (N = Q.memoizedProps.style),
                        (b =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (P.style.display = Di("display", b)));
                } catch (le) {
                  $e(n, n.return, le);
                }
              }
            } else if (Q.tag === 6) {
              if (Y === null)
                try {
                  Q.stateNode.nodeValue = _ ? "" : Q.memoizedProps;
                } catch (le) {
                  $e(n, n.return, le);
                }
            } else if (
              ((Q.tag !== 22 && Q.tag !== 23) ||
                Q.memoizedState === null ||
                Q === n) &&
              Q.child !== null
            ) {
              (Q.child.return = Q), (Q = Q.child);
              continue;
            }
            if (Q === n) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === n) break e;
              Y === Q && (Y = null), (Q = Q.return);
            }
            Y === Q && (Y = null),
              (Q.sibling.return = Q.return),
              (Q = Q.sibling);
          }
        }
        break;
      case 19:
        cn(r, n), An(n), l & 4 && mm(n);
        break;
      case 21:
        break;
      default:
        cn(r, n), An(n);
    }
  }
  function An(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (fm(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(i(160));
        }
        switch (l.tag) {
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Cn(f, ""), (l.flags &= -33));
            var m = hm(n);
            Cc(n, m, f);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo,
              P = hm(n);
            Sc(n, P, b);
            break;
          default:
            throw Error(i(161));
        }
      } catch (N) {
        $e(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function cb(n, r, o) {
    (oe = n), ym(n);
  }
  function ym(n, r, o) {
    for (var l = (n.mode & 1) !== 0; oe !== null; ) {
      var f = oe,
        m = f.child;
      if (f.tag === 22 && l) {
        var b = f.memoizedState !== null || Ga;
        if (!b) {
          var P = f.alternate,
            N = (P !== null && P.memoizedState !== null) || ft;
          P = Ga;
          var _ = ft;
          if (((Ga = b), (ft = N) && !_))
            for (oe = f; oe !== null; )
              (b = oe),
                (N = b.child),
                b.tag === 22 && b.memoizedState !== null
                  ? wm(f)
                  : N !== null
                  ? ((N.return = b), (oe = N))
                  : wm(f);
          for (; m !== null; ) (oe = m), ym(m), (m = m.sibling);
          (oe = f), (Ga = P), (ft = _);
        }
        vm(n);
      } else
        (f.subtreeFlags & 8772) !== 0 && m !== null
          ? ((m.return = f), (oe = m))
          : vm(n);
    }
  }
  function vm(n) {
    for (; oe !== null; ) {
      var r = oe;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ft || Ya(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !ft)
                  if (o === null) l.componentDidMount();
                  else {
                    var f =
                      r.elementType === r.type
                        ? o.memoizedProps
                        : ln(r.type, o.memoizedProps);
                    l.componentDidUpdate(
                      f,
                      o.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var m = r.updateQueue;
                m !== null && xp(r, m, l);
                break;
              case 3:
                var b = r.updateQueue;
                if (b !== null) {
                  if (((o = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  xp(r, b, o);
                }
                break;
              case 5:
                var P = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = P;
                  var N = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && o.focus();
                      break;
                    case "img":
                      N.src && (o.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var _ = r.alternate;
                  if (_ !== null) {
                    var Y = _.memoizedState;
                    if (Y !== null) {
                      var Q = Y.dehydrated;
                      Q !== null && Bs(Q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          ft || (r.flags & 512 && bc(r));
        } catch (K) {
          $e(r, r.return, K);
        }
      }
      if (r === n) {
        oe = null;
        break;
      }
      if (((o = r.sibling), o !== null)) {
        (o.return = r.return), (oe = o);
        break;
      }
      oe = r.return;
    }
  }
  function xm(n) {
    for (; oe !== null; ) {
      var r = oe;
      if (r === n) {
        oe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        (o.return = r.return), (oe = o);
        break;
      }
      oe = r.return;
    }
  }
  function wm(n) {
    for (; oe !== null; ) {
      var r = oe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Ya(4, r);
            } catch (N) {
              $e(r, o, N);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = r.return;
              try {
                l.componentDidMount();
              } catch (N) {
                $e(r, f, N);
              }
            }
            var m = r.return;
            try {
              bc(r);
            } catch (N) {
              $e(r, m, N);
            }
            break;
          case 5:
            var b = r.return;
            try {
              bc(r);
            } catch (N) {
              $e(r, b, N);
            }
        }
      } catch (N) {
        $e(r, r.return, N);
      }
      if (r === n) {
        oe = null;
        break;
      }
      var P = r.sibling;
      if (P !== null) {
        (P.return = r.return), (oe = P);
        break;
      }
      oe = r.return;
    }
  }
  var db = Math.ceil,
    Qa = D.ReactCurrentDispatcher,
    Tc = D.ReactCurrentOwner,
    Yt = D.ReactCurrentBatchConfig,
    je = 0,
    nt = null,
    Qe = null,
    at = 0,
    zt = 0,
    ts = gr(0),
    Ze = 0,
    co = null,
    oi = 0,
    qa = 0,
    Ec = 0,
    fo = null,
    jt = null,
    Pc = 0,
    ns = 1 / 0,
    qn = null,
    Xa = !1,
    kc = null,
    Sr = null,
    Ja = !1,
    Cr = null,
    Za = 0,
    ho = 0,
    jc = null,
    el = -1,
    tl = 0;
  function xt() {
    return (je & 6) !== 0 ? Ke() : el !== -1 ? el : (el = Ke());
  }
  function Tr(n) {
    return (n.mode & 1) === 0
      ? 1
      : (je & 2) !== 0 && at !== 0
      ? at & -at
      : Y1.transition !== null
      ? (tl === 0 && (tl = hh()), tl)
      : ((n = Ae),
        n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Sh(n.type))),
        n);
  }
  function dn(n, r, o, l) {
    if (50 < ho) throw ((ho = 0), (jc = null), Error(i(185)));
    Is(n, o, l),
      ((je & 2) === 0 || n !== nt) &&
        (n === nt && ((je & 2) === 0 && (qa |= o), Ze === 4 && Er(n, at)),
        Nt(n, l),
        o === 1 &&
          je === 0 &&
          (r.mode & 1) === 0 &&
          ((ns = Ke() + 500), Na && vr()));
  }
  function Nt(n, r) {
    var o = n.callbackNode;
    Yw(n, r);
    var l = ca(n, n === nt ? at : 0);
    if (l === 0)
      o !== null && ch(o), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((r = l & -l), n.callbackPriority !== r)) {
      if ((o != null && ch(o), r === 1))
        n.tag === 0 ? G1(Sm.bind(null, n)) : ap(Sm.bind(null, n)),
          U1(function () {
            (je & 6) === 0 && vr();
          }),
          (o = null);
      else {
        switch (ph(l)) {
          case 1:
            o = au;
            break;
          case 4:
            o = dh;
            break;
          case 16:
            o = oa;
            break;
          case 536870912:
            o = fh;
            break;
          default:
            o = oa;
        }
        o = Rm(o, bm.bind(null, n));
      }
      (n.callbackPriority = r), (n.callbackNode = o);
    }
  }
  function bm(n, r) {
    if (((el = -1), (tl = 0), (je & 6) !== 0)) throw Error(i(327));
    var o = n.callbackNode;
    if (rs() && n.callbackNode !== o) return null;
    var l = ca(n, n === nt ? at : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || r) r = nl(n, l);
    else {
      r = l;
      var f = je;
      je |= 2;
      var m = Tm();
      (nt !== n || at !== r) && ((qn = null), (ns = Ke() + 500), li(n, r));
      do
        try {
          pb();
          break;
        } catch (P) {
          Cm(n, P);
        }
      while (!0);
      Ku(),
        (Qa.current = m),
        (je = f),
        Qe !== null ? (r = 0) : ((nt = null), (at = 0), (r = Ze));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((f = lu(n)), f !== 0 && ((l = f), (r = Nc(n, f)))),
        r === 1)
      )
        throw ((o = co), li(n, 0), Er(n, l), Nt(n, Ke()), o);
      if (r === 6) Er(n, l);
      else {
        if (
          ((f = n.current.alternate),
          (l & 30) === 0 &&
            !fb(f) &&
            ((r = nl(n, l)),
            r === 2 && ((m = lu(n)), m !== 0 && ((l = m), (r = Nc(n, m)))),
            r === 1))
        )
          throw ((o = co), li(n, 0), Er(n, l), Nt(n, Ke()), o);
        switch (((n.finishedWork = f), (n.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            ui(n, jt, qn);
            break;
          case 3:
            if (
              (Er(n, l),
              (l & 130023424) === l && ((r = Pc + 500 - Ke()), 10 < r))
            ) {
              if (ca(n, 0) !== 0) break;
              if (((f = n.suspendedLanes), (f & l) !== l)) {
                xt(), (n.pingedLanes |= n.suspendedLanes & f);
                break;
              }
              n.timeoutHandle = Ou(ui.bind(null, n, jt, qn), r);
              break;
            }
            ui(n, jt, qn);
            break;
          case 4:
            if ((Er(n, l), (l & 4194240) === l)) break;
            for (r = n.eventTimes, f = -1; 0 < l; ) {
              var b = 31 - sn(l);
              (m = 1 << b), (b = r[b]), b > f && (f = b), (l &= ~m);
            }
            if (
              ((l = f),
              (l = Ke() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * db(l / 1960)) - l),
              10 < l)
            ) {
              n.timeoutHandle = Ou(ui.bind(null, n, jt, qn), l);
              break;
            }
            ui(n, jt, qn);
            break;
          case 5:
            ui(n, jt, qn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Nt(n, Ke()), n.callbackNode === o ? bm.bind(null, n) : null;
  }
  function Nc(n, r) {
    var o = fo;
    return (
      n.current.memoizedState.isDehydrated && (li(n, r).flags |= 256),
      (n = nl(n, r)),
      n !== 2 && ((r = jt), (jt = o), r !== null && Rc(r)),
      n
    );
  }
  function Rc(n) {
    jt === null ? (jt = n) : jt.push.apply(jt, n);
  }
  function fb(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var l = 0; l < o.length; l++) {
            var f = o[l],
              m = f.getSnapshot;
            f = f.value;
            try {
              if (!on(m(), f)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = r.child), r.subtreeFlags & 16384 && o !== null))
        (o.return = r), (r = o);
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Er(n, r) {
    for (
      r &= ~Ec,
        r &= ~qa,
        n.suspendedLanes |= r,
        n.pingedLanes &= ~r,
        n = n.expirationTimes;
      0 < r;

    ) {
      var o = 31 - sn(r),
        l = 1 << o;
      (n[o] = -1), (r &= ~l);
    }
  }
  function Sm(n) {
    if ((je & 6) !== 0) throw Error(i(327));
    rs();
    var r = ca(n, 0);
    if ((r & 1) === 0) return Nt(n, Ke()), null;
    var o = nl(n, r);
    if (n.tag !== 0 && o === 2) {
      var l = lu(n);
      l !== 0 && ((r = l), (o = Nc(n, l)));
    }
    if (o === 1) throw ((o = co), li(n, 0), Er(n, r), Nt(n, Ke()), o);
    if (o === 6) throw Error(i(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      ui(n, jt, qn),
      Nt(n, Ke()),
      null
    );
  }
  function Ac(n, r) {
    var o = je;
    je |= 1;
    try {
      return n(r);
    } finally {
      (je = o), je === 0 && ((ns = Ke() + 500), Na && vr());
    }
  }
  function ai(n) {
    Cr !== null && Cr.tag === 0 && (je & 6) === 0 && rs();
    var r = je;
    je |= 1;
    var o = Yt.transition,
      l = Ae;
    try {
      if (((Yt.transition = null), (Ae = 1), n)) return n();
    } finally {
      (Ae = l), (Yt.transition = o), (je = r), (je & 6) === 0 && vr();
    }
  }
  function Mc() {
    (zt = ts.current), Oe(ts);
  }
  function li(n, r) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var o = n.timeoutHandle;
    if ((o !== -1 && ((n.timeoutHandle = -1), $1(o)), Qe !== null))
      for (o = Qe.return; o !== null; ) {
        var l = o;
        switch ((Bu(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && ka();
            break;
          case 3:
            Ji(), Oe(Et), Oe(ut), ec();
            break;
          case 5:
            Ju(l);
            break;
          case 4:
            Ji();
            break;
          case 13:
            Oe(Fe);
            break;
          case 19:
            Oe(Fe);
            break;
          case 10:
            Gu(l.type._context);
            break;
          case 22:
          case 23:
            Mc();
        }
        o = o.return;
      }
    if (
      ((nt = n),
      (Qe = n = Pr(n.current, null)),
      (at = zt = r),
      (Ze = 0),
      (co = null),
      (Ec = qa = oi = 0),
      (jt = fo = null),
      ri !== null)
    ) {
      for (r = 0; r < ri.length; r++)
        if (((o = ri[r]), (l = o.interleaved), l !== null)) {
          o.interleaved = null;
          var f = l.next,
            m = o.pending;
          if (m !== null) {
            var b = m.next;
            (m.next = f), (l.next = b);
          }
          o.pending = l;
        }
      ri = null;
    }
    return n;
  }
  function Cm(n, r) {
    do {
      var o = Qe;
      try {
        if ((Ku(), (Fa.current = Ua), za)) {
          for (var l = ze.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), (l = l.next);
          }
          za = !1;
        }
        if (
          ((si = 0),
          (tt = Je = ze = null),
          (io = !1),
          (so = 0),
          (Tc.current = null),
          o === null || o.return === null)
        ) {
          (Ze = 1), (co = r), (Qe = null);
          break;
        }
        e: {
          var m = n,
            b = o.return,
            P = o,
            N = r;
          if (
            ((r = at),
            (P.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var _ = N,
              Y = P,
              Q = Y.tag;
            if ((Y.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var K = Y.alternate;
              K
                ? ((Y.updateQueue = K.updateQueue),
                  (Y.memoizedState = K.memoizedState),
                  (Y.lanes = K.lanes))
                : ((Y.updateQueue = null), (Y.memoizedState = null));
            }
            var ie = Yp(b);
            if (ie !== null) {
              (ie.flags &= -257),
                Qp(ie, b, P, m, r),
                ie.mode & 1 && Gp(m, _, r),
                (r = ie),
                (N = _);
              var ae = r.updateQueue;
              if (ae === null) {
                var le = new Set();
                le.add(N), (r.updateQueue = le);
              } else ae.add(N);
              break e;
            } else {
              if ((r & 1) === 0) {
                Gp(m, _, r), Dc();
                break e;
              }
              N = Error(i(426));
            }
          } else if (Ve && P.mode & 1) {
            var Ge = Yp(b);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256),
                Qp(Ge, b, P, m, r),
                Wu(Zi(N, P));
              break e;
            }
          }
          (m = N = Zi(N, P)),
            Ze !== 4 && (Ze = 2),
            fo === null ? (fo = [m]) : fo.push(m),
            (m = b);
          do {
            switch (m.tag) {
              case 3:
                (m.flags |= 65536), (r &= -r), (m.lanes |= r);
                var L = Hp(m, N, r);
                vp(m, L);
                break e;
              case 1:
                P = N;
                var A = m.type,
                  I = m.stateNode;
                if (
                  (m.flags & 128) === 0 &&
                  (typeof A.getDerivedStateFromError == "function" ||
                    (I !== null &&
                      typeof I.componentDidCatch == "function" &&
                      (Sr === null || !Sr.has(I))))
                ) {
                  (m.flags |= 65536), (r &= -r), (m.lanes |= r);
                  var q = Kp(m, P, r);
                  vp(m, q);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Pm(o);
      } catch (ue) {
        (r = ue), Qe === o && o !== null && (Qe = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Tm() {
    var n = Qa.current;
    return (Qa.current = Ua), n === null ? Ua : n;
  }
  function Dc() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
      nt === null ||
        ((oi & 268435455) === 0 && (qa & 268435455) === 0) ||
        Er(nt, at);
  }
  function nl(n, r) {
    var o = je;
    je |= 2;
    var l = Tm();
    (nt !== n || at !== r) && ((qn = null), li(n, r));
    do
      try {
        hb();
        break;
      } catch (f) {
        Cm(n, f);
      }
    while (!0);
    if ((Ku(), (je = o), (Qa.current = l), Qe !== null)) throw Error(i(261));
    return (nt = null), (at = 0), Ze;
  }
  function hb() {
    for (; Qe !== null; ) Em(Qe);
  }
  function pb() {
    for (; Qe !== null && !Fw(); ) Em(Qe);
  }
  function Em(n) {
    var r = Nm(n.alternate, n, zt);
    (n.memoizedProps = n.pendingProps),
      r === null ? Pm(n) : (Qe = r),
      (Tc.current = null);
  }
  function Pm(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (((n = r.return), (r.flags & 32768) === 0)) {
        if (((o = ob(o, r, zt)), o !== null)) {
          Qe = o;
          return;
        }
      } else {
        if (((o = ab(o, r)), o !== null)) {
          (o.flags &= 32767), (Qe = o);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (Ze = 6), (Qe = null);
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        Qe = r;
        return;
      }
      Qe = r = n;
    } while (r !== null);
    Ze === 0 && (Ze = 5);
  }
  function ui(n, r, o) {
    var l = Ae,
      f = Yt.transition;
    try {
      (Yt.transition = null), (Ae = 1), mb(n, r, o, l);
    } finally {
      (Yt.transition = f), (Ae = l);
    }
    return null;
  }
  function mb(n, r, o, l) {
    do rs();
    while (Cr !== null);
    if ((je & 6) !== 0) throw Error(i(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), o === n.current))
      throw Error(i(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var m = o.lanes | o.childLanes;
    if (
      (Qw(n, m),
      n === nt && ((Qe = nt = null), (at = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        Ja ||
        ((Ja = !0),
        Rm(oa, function () {
          return rs(), null;
        })),
      (m = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || m)
    ) {
      (m = Yt.transition), (Yt.transition = null);
      var b = Ae;
      Ae = 1;
      var P = je;
      (je |= 4),
        (Tc.current = null),
        ub(n, o),
        gm(o, n),
        O1(Du),
        (ha = !!Mu),
        (Du = Mu = null),
        (n.current = o),
        cb(o),
        zw(),
        (je = P),
        (Ae = b),
        (Yt.transition = m);
    } else n.current = o;
    if (
      (Ja && ((Ja = !1), (Cr = n), (Za = f)),
      (m = n.pendingLanes),
      m === 0 && (Sr = null),
      Uw(o.stateNode),
      Nt(n, Ke()),
      r !== null)
    )
      for (l = n.onRecoverableError, o = 0; o < r.length; o++)
        (f = r[o]), l(f.value, { componentStack: f.stack, digest: f.digest });
    if (Xa) throw ((Xa = !1), (n = kc), (kc = null), n);
    return (
      (Za & 1) !== 0 && n.tag !== 0 && rs(),
      (m = n.pendingLanes),
      (m & 1) !== 0 ? (n === jc ? ho++ : ((ho = 0), (jc = n))) : (ho = 0),
      vr(),
      null
    );
  }
  function rs() {
    if (Cr !== null) {
      var n = ph(Za),
        r = Yt.transition,
        o = Ae;
      try {
        if (((Yt.transition = null), (Ae = 16 > n ? 16 : n), Cr === null))
          var l = !1;
        else {
          if (((n = Cr), (Cr = null), (Za = 0), (je & 6) !== 0))
            throw Error(i(331));
          var f = je;
          for (je |= 4, oe = n.current; oe !== null; ) {
            var m = oe,
              b = m.child;
            if ((oe.flags & 16) !== 0) {
              var P = m.deletions;
              if (P !== null) {
                for (var N = 0; N < P.length; N++) {
                  var _ = P[N];
                  for (oe = _; oe !== null; ) {
                    var Y = oe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        uo(8, Y, m);
                    }
                    var Q = Y.child;
                    if (Q !== null) (Q.return = Y), (oe = Q);
                    else
                      for (; oe !== null; ) {
                        Y = oe;
                        var K = Y.sibling,
                          ie = Y.return;
                        if ((dm(Y), Y === _)) {
                          oe = null;
                          break;
                        }
                        if (K !== null) {
                          (K.return = ie), (oe = K);
                          break;
                        }
                        oe = ie;
                      }
                  }
                }
                var ae = m.alternate;
                if (ae !== null) {
                  var le = ae.child;
                  if (le !== null) {
                    ae.child = null;
                    do {
                      var Ge = le.sibling;
                      (le.sibling = null), (le = Ge);
                    } while (le !== null);
                  }
                }
                oe = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && b !== null)
              (b.return = m), (oe = b);
            else
              e: for (; oe !== null; ) {
                if (((m = oe), (m.flags & 2048) !== 0))
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uo(9, m, m.return);
                  }
                var L = m.sibling;
                if (L !== null) {
                  (L.return = m.return), (oe = L);
                  break e;
                }
                oe = m.return;
              }
          }
          var A = n.current;
          for (oe = A; oe !== null; ) {
            b = oe;
            var I = b.child;
            if ((b.subtreeFlags & 2064) !== 0 && I !== null)
              (I.return = b), (oe = I);
            else
              e: for (b = A; oe !== null; ) {
                if (((P = oe), (P.flags & 2048) !== 0))
                  try {
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ya(9, P);
                    }
                  } catch (ue) {
                    $e(P, P.return, ue);
                  }
                if (P === b) {
                  oe = null;
                  break e;
                }
                var q = P.sibling;
                if (q !== null) {
                  (q.return = P.return), (oe = q);
                  break e;
                }
                oe = P.return;
              }
          }
          if (
            ((je = f),
            vr(),
            kn && typeof kn.onPostCommitFiberRoot == "function")
          )
            try {
              kn.onPostCommitFiberRoot(aa, n);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Ae = o), (Yt.transition = r);
      }
    }
    return !1;
  }
  function km(n, r, o) {
    (r = Zi(o, r)),
      (r = Hp(n, r, 1)),
      (n = wr(n, r, 1)),
      (r = xt()),
      n !== null && (Is(n, 1, r), Nt(n, r));
  }
  function $e(n, r, o) {
    if (n.tag === 3) km(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          km(r, n, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Sr === null || !Sr.has(l)))
          ) {
            (n = Zi(o, n)),
              (n = Kp(r, n, 1)),
              (r = wr(r, n, 1)),
              (n = xt()),
              r !== null && (Is(r, 1, n), Nt(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function gb(n, r, o) {
    var l = n.pingCache;
    l !== null && l.delete(r),
      (r = xt()),
      (n.pingedLanes |= n.suspendedLanes & o),
      nt === n &&
        (at & o) === o &&
        (Ze === 4 || (Ze === 3 && (at & 130023424) === at && 500 > Ke() - Pc)
          ? li(n, 0)
          : (Ec |= o)),
      Nt(n, r);
  }
  function jm(n, r) {
    r === 0 &&
      ((n.mode & 1) === 0
        ? (r = 1)
        : ((r = ua), (ua <<= 1), (ua & 130023424) === 0 && (ua = 4194304)));
    var o = xt();
    (n = Gn(n, r)), n !== null && (Is(n, r, o), Nt(n, o));
  }
  function yb(n) {
    var r = n.memoizedState,
      o = 0;
    r !== null && (o = r.retryLane), jm(n, o);
  }
  function vb(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(r), jm(n, o);
  }
  var Nm;
  Nm = function (n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Et.current) kt = !0;
      else {
        if ((n.lanes & o) === 0 && (r.flags & 128) === 0)
          return (kt = !1), sb(n, r, o);
        kt = (n.flags & 131072) !== 0;
      }
    else (kt = !1), Ve && (r.flags & 1048576) !== 0 && lp(r, Aa, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        Ka(n, r), (n = r.pendingProps);
        var f = Hi(r, ut.current);
        Xi(r, o), (f = rc(null, r, l, n, f, o));
        var m = ic();
        return (
          (r.flags |= 1),
          typeof f == "object" &&
          f !== null &&
          typeof f.render == "function" &&
          f.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Pt(l) ? ((m = !0), ja(r)) : (m = !1),
              (r.memoizedState =
                f.state !== null && f.state !== void 0 ? f.state : null),
              qu(r),
              (f.updater = Wa),
              (r.stateNode = f),
              (f._reactInternals = r),
              cc(r, l, n, o),
              (r = pc(null, r, l, !0, m, o)))
            : ((r.tag = 0), Ve && m && zu(r), vt(null, r, f, o), (r = r.child)),
          r
        );
      case 16:
        l = r.elementType;
        e: {
          switch (
            (Ka(n, r),
            (n = r.pendingProps),
            (f = l._init),
            (l = f(l._payload)),
            (r.type = l),
            (f = r.tag = wb(l)),
            (n = ln(l, n)),
            f)
          ) {
            case 0:
              r = hc(null, r, l, n, o);
              break e;
            case 1:
              r = tm(null, r, l, n, o);
              break e;
            case 11:
              r = qp(null, r, l, n, o);
              break e;
            case 14:
              r = Xp(null, r, l, ln(l.type, n), o);
              break e;
          }
          throw Error(i(306, l, ""));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (f = r.pendingProps),
          (f = r.elementType === l ? f : ln(l, f)),
          hc(n, r, l, f, o)
        );
      case 1:
        return (
          (l = r.type),
          (f = r.pendingProps),
          (f = r.elementType === l ? f : ln(l, f)),
          tm(n, r, l, f, o)
        );
      case 3:
        e: {
          if ((nm(r), n === null)) throw Error(i(387));
          (l = r.pendingProps),
            (m = r.memoizedState),
            (f = m.element),
            yp(n, r),
            Va(r, l, null, o);
          var b = r.memoizedState;
          if (((l = b.element), m.isDehydrated))
            if (
              ((m = {
                element: l,
                isDehydrated: !1,
                cache: b.cache,
                pendingSuspenseBoundaries: b.pendingSuspenseBoundaries,
                transitions: b.transitions,
              }),
              (r.updateQueue.baseState = m),
              (r.memoizedState = m),
              r.flags & 256)
            ) {
              (f = Zi(Error(i(423)), r)), (r = rm(n, r, l, o, f));
              break e;
            } else if (l !== f) {
              (f = Zi(Error(i(424)), r)), (r = rm(n, r, l, o, f));
              break e;
            } else
              for (
                Ft = mr(r.stateNode.containerInfo.firstChild),
                  _t = r,
                  Ve = !0,
                  an = null,
                  o = mp(r, null, l, o),
                  r.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Yi(), l === f)) {
              r = Qn(n, r, o);
              break e;
            }
            vt(n, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          wp(r),
          n === null && Uu(r),
          (l = r.type),
          (f = r.pendingProps),
          (m = n !== null ? n.memoizedProps : null),
          (b = f.children),
          Lu(l, f) ? (b = null) : m !== null && Lu(l, m) && (r.flags |= 32),
          em(n, r),
          vt(n, r, b, o),
          r.child
        );
      case 6:
        return n === null && Uu(r), null;
      case 13:
        return im(n, r, o);
      case 4:
        return (
          Xu(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          n === null ? (r.child = Qi(r, null, l, o)) : vt(n, r, l, o),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (f = r.pendingProps),
          (f = r.elementType === l ? f : ln(l, f)),
          qp(n, r, l, f, o)
        );
      case 7:
        return vt(n, r, r.pendingProps, o), r.child;
      case 8:
        return vt(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return vt(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (
            ((l = r.type._context),
            (f = r.pendingProps),
            (m = r.memoizedProps),
            (b = f.value),
            De(La, l._currentValue),
            (l._currentValue = b),
            m !== null)
          )
            if (on(m.value, b)) {
              if (m.children === f.children && !Et.current) {
                r = Qn(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var P = m.dependencies;
                if (P !== null) {
                  b = m.child;
                  for (var N = P.firstContext; N !== null; ) {
                    if (N.context === l) {
                      if (m.tag === 1) {
                        (N = Yn(-1, o & -o)), (N.tag = 2);
                        var _ = m.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var Y = _.pending;
                          Y === null
                            ? (N.next = N)
                            : ((N.next = Y.next), (Y.next = N)),
                            (_.pending = N);
                        }
                      }
                      (m.lanes |= o),
                        (N = m.alternate),
                        N !== null && (N.lanes |= o),
                        Yu(m.return, o, r),
                        (P.lanes |= o);
                      break;
                    }
                    N = N.next;
                  }
                } else if (m.tag === 10) b = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (((b = m.return), b === null)) throw Error(i(341));
                  (b.lanes |= o),
                    (P = b.alternate),
                    P !== null && (P.lanes |= o),
                    Yu(b, o, r),
                    (b = m.sibling);
                } else b = m.child;
                if (b !== null) b.return = m;
                else
                  for (b = m; b !== null; ) {
                    if (b === r) {
                      b = null;
                      break;
                    }
                    if (((m = b.sibling), m !== null)) {
                      (m.return = b.return), (b = m);
                      break;
                    }
                    b = b.return;
                  }
                m = b;
              }
          vt(n, r, f.children, o), (r = r.child);
        }
        return r;
      case 9:
        return (
          (f = r.type),
          (l = r.pendingProps.children),
          Xi(r, o),
          (f = Kt(f)),
          (l = l(f)),
          (r.flags |= 1),
          vt(n, r, l, o),
          r.child
        );
      case 14:
        return (
          (l = r.type),
          (f = ln(l, r.pendingProps)),
          (f = ln(l.type, f)),
          Xp(n, r, l, f, o)
        );
      case 15:
        return Jp(n, r, r.type, r.pendingProps, o);
      case 17:
        return (
          (l = r.type),
          (f = r.pendingProps),
          (f = r.elementType === l ? f : ln(l, f)),
          Ka(n, r),
          (r.tag = 1),
          Pt(l) ? ((n = !0), ja(r)) : (n = !1),
          Xi(r, o),
          Up(r, l, f),
          cc(r, l, f, o),
          pc(null, r, l, !0, n, o)
        );
      case 19:
        return om(n, r, o);
      case 22:
        return Zp(n, r, o);
    }
    throw Error(i(156, r.tag));
  };
  function Rm(n, r) {
    return uh(n, r);
  }
  function xb(n, r, o, l) {
    (this.tag = n),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Qt(n, r, o, l) {
    return new xb(n, r, o, l);
  }
  function Lc(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function wb(n) {
    if (typeof n == "function") return Lc(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === ne)) return 11;
      if (n === ye) return 14;
    }
    return 2;
  }
  function Pr(n, r) {
    var o = n.alternate;
    return (
      o === null
        ? ((o = Qt(n.tag, r, n.key, n.mode)),
          (o.elementType = n.elementType),
          (o.type = n.type),
          (o.stateNode = n.stateNode),
          (o.alternate = n),
          (n.alternate = o))
        : ((o.pendingProps = r),
          (o.type = n.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = n.flags & 14680064),
      (o.childLanes = n.childLanes),
      (o.lanes = n.lanes),
      (o.child = n.child),
      (o.memoizedProps = n.memoizedProps),
      (o.memoizedState = n.memoizedState),
      (o.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (o.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = n.sibling),
      (o.index = n.index),
      (o.ref = n.ref),
      o
    );
  }
  function rl(n, r, o, l, f, m) {
    var b = 2;
    if (((l = n), typeof n == "function")) Lc(n) && (b = 1);
    else if (typeof n == "string") b = 5;
    else
      e: switch (n) {
        case V:
          return ci(o.children, f, m, r);
        case H:
          (b = 8), (f |= 8);
          break;
        case te:
          return (
            (n = Qt(12, o, r, f | 2)), (n.elementType = te), (n.lanes = m), n
          );
        case ge:
          return (n = Qt(13, o, r, f)), (n.elementType = ge), (n.lanes = m), n;
        case X:
          return (n = Qt(19, o, r, f)), (n.elementType = X), (n.lanes = m), n;
        case ee:
          return il(o, f, m, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Z:
                b = 10;
                break e;
              case de:
                b = 9;
                break e;
              case ne:
                b = 11;
                break e;
              case ye:
                b = 14;
                break e;
              case ce:
                (b = 16), (l = null);
                break e;
            }
          throw Error(i(130, n == null ? n : typeof n, ""));
      }
    return (
      (r = Qt(b, o, r, f)), (r.elementType = n), (r.type = l), (r.lanes = m), r
    );
  }
  function ci(n, r, o, l) {
    return (n = Qt(7, n, l, r)), (n.lanes = o), n;
  }
  function il(n, r, o, l) {
    return (
      (n = Qt(22, n, l, r)),
      (n.elementType = ee),
      (n.lanes = o),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function Oc(n, r, o) {
    return (n = Qt(6, n, null, r)), (n.lanes = o), n;
  }
  function Ic(n, r, o) {
    return (
      (r = Qt(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function bb(n, r, o, l, f) {
    (this.tag = r),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = uu(0)),
      (this.expirationTimes = uu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = uu(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = f),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Vc(n, r, o, l, f, m, b, P, N) {
    return (
      (n = new bb(n, r, o, P, N)),
      r === 1 ? ((r = 1), m === !0 && (r |= 8)) : (r = 0),
      (m = Qt(3, null, null, r)),
      (n.current = m),
      (m.stateNode = n),
      (m.memoizedState = {
        element: l,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      qu(m),
      n
    );
  }
  function Sb(n, r, o) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: l == null ? null : "" + l,
      children: n,
      containerInfo: r,
      implementation: o,
    };
  }
  function Am(n) {
    if (!n) return yr;
    n = n._reactInternals;
    e: {
      if (Jr(n) !== n || n.tag !== 1) throw Error(i(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Pt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(i(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Pt(o)) return sp(n, o, r);
    }
    return r;
  }
  function Mm(n, r, o, l, f, m, b, P, N) {
    return (
      (n = Vc(o, l, !0, n, f, m, b, P, N)),
      (n.context = Am(null)),
      (o = n.current),
      (l = xt()),
      (f = Tr(o)),
      (m = Yn(l, f)),
      (m.callback = r ?? null),
      wr(o, m, f),
      (n.current.lanes = f),
      Is(n, f, l),
      Nt(n, l),
      n
    );
  }
  function sl(n, r, o, l) {
    var f = r.current,
      m = xt(),
      b = Tr(f);
    return (
      (o = Am(o)),
      r.context === null ? (r.context = o) : (r.pendingContext = o),
      (r = Yn(m, b)),
      (r.payload = { element: n }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      (n = wr(f, r, b)),
      n !== null && (dn(n, f, b, m), Ia(n, f, b)),
      b
    );
  }
  function ol(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Dm(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function _c(n, r) {
    Dm(n, r), (n = n.alternate) && Dm(n, r);
  }
  function Cb() {
    return null;
  }
  var Lm =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Fc(n) {
    this._internalRoot = n;
  }
  (al.prototype.render = Fc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      sl(n, r, null, null);
    }),
    (al.prototype.unmount = Fc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          ai(function () {
            sl(null, n, null, null);
          }),
            (r[Un] = null);
        }
      });
  function al(n) {
    this._internalRoot = n;
  }
  al.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = yh();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < fr.length && r !== 0 && r < fr[o].priority; o++);
      fr.splice(o, 0, n), o === 0 && wh(n);
    }
  };
  function zc(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function ll(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Om() {}
  function Tb(n, r, o, l, f) {
    if (f) {
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var _ = ol(b);
          m.call(_);
        };
      }
      var b = Mm(r, l, n, 0, null, !1, !1, "", Om);
      return (
        (n._reactRootContainer = b),
        (n[Un] = b.current),
        qs(n.nodeType === 8 ? n.parentNode : n),
        ai(),
        b
      );
    }
    for (; (f = n.lastChild); ) n.removeChild(f);
    if (typeof l == "function") {
      var P = l;
      l = function () {
        var _ = ol(N);
        P.call(_);
      };
    }
    var N = Vc(n, 0, !1, null, null, !1, !1, "", Om);
    return (
      (n._reactRootContainer = N),
      (n[Un] = N.current),
      qs(n.nodeType === 8 ? n.parentNode : n),
      ai(function () {
        sl(r, N, o, l);
      }),
      N
    );
  }
  function ul(n, r, o, l, f) {
    var m = o._reactRootContainer;
    if (m) {
      var b = m;
      if (typeof f == "function") {
        var P = f;
        f = function () {
          var N = ol(b);
          P.call(N);
        };
      }
      sl(r, b, n, f);
    } else b = Tb(o, r, n, f, l);
    return ol(b);
  }
  (mh = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Os(r.pendingLanes);
          o !== 0 &&
            (cu(r, o | 1),
            Nt(r, Ke()),
            (je & 6) === 0 && ((ns = Ke() + 500), vr()));
        }
        break;
      case 13:
        ai(function () {
          var l = Gn(n, 1);
          if (l !== null) {
            var f = xt();
            dn(l, n, 1, f);
          }
        }),
          _c(n, 1);
    }
  }),
    (du = function (n) {
      if (n.tag === 13) {
        var r = Gn(n, 134217728);
        if (r !== null) {
          var o = xt();
          dn(r, n, 134217728, o);
        }
        _c(n, 134217728);
      }
    }),
    (gh = function (n) {
      if (n.tag === 13) {
        var r = Tr(n),
          o = Gn(n, r);
        if (o !== null) {
          var l = xt();
          dn(o, n, r, l);
        }
        _c(n, r);
      }
    }),
    (yh = function () {
      return Ae;
    }),
    (vh = function (n, r) {
      var o = Ae;
      try {
        return (Ae = n), r();
      } finally {
        Ae = o;
      }
    }),
    (Oi = function (n, r, o) {
      switch (r) {
        case "input":
          if ((qr(n, o), (r = o.name), o.type === "radio" && r != null)) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]'
              ),
                r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== n && l.form === n.form) {
                var f = Pa(l);
                if (!f) throw Error(i(90));
                Bn(l), qr(l, f);
              }
            }
          }
          break;
        case "textarea":
          Jo(n, o);
          break;
        case "select":
          (r = o.value), r != null && Ut(n, !!o.multiple, r, !1);
      }
    }),
    (Re = Ac),
    (Me = ai);
  var Eb = { usingClientEntryPoint: !1, Events: [Zs, Ui, Pa, ra, we, Ac] },
    po = {
      findFiberByHostInstance: Zr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Pb = {
      bundleType: po.bundleType,
      version: po.version,
      rendererPackageName: po.rendererPackageName,
      rendererConfig: po.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = ah(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: po.findFiberByHostInstance || Cb,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cl.isDisabled && cl.supportsFiber)
      try {
        (aa = cl.inject(Pb)), (kn = cl);
      } catch {}
  }
  return (
    (Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eb),
    (Rt.createPortal = function (n, r) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zc(r)) throw Error(i(200));
      return Sb(n, r, null, o);
    }),
    (Rt.createRoot = function (n, r) {
      if (!zc(n)) throw Error(i(299));
      var o = !1,
        l = "",
        f = Lm;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (f = r.onRecoverableError)),
        (r = Vc(n, 1, !1, null, null, o, !1, l, f)),
        (n[Un] = r.current),
        qs(n.nodeType === 8 ? n.parentNode : n),
        new Fc(r)
      );
    }),
    (Rt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function"
          ? Error(i(188))
          : ((n = Object.keys(n).join(",")), Error(i(268, n)));
      return (n = ah(r)), (n = n === null ? null : n.stateNode), n;
    }),
    (Rt.flushSync = function (n) {
      return ai(n);
    }),
    (Rt.hydrate = function (n, r, o) {
      if (!ll(r)) throw Error(i(200));
      return ul(null, n, r, !0, o);
    }),
    (Rt.hydrateRoot = function (n, r, o) {
      if (!zc(n)) throw Error(i(405));
      var l = (o != null && o.hydratedSources) || null,
        f = !1,
        m = "",
        b = Lm;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (f = !0),
          o.identifierPrefix !== void 0 && (m = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (b = o.onRecoverableError)),
        (r = Mm(r, null, n, 1, o ?? null, f, !1, m, b)),
        (n[Un] = r.current),
        qs(n),
        l)
      )
        for (n = 0; n < l.length; n++)
          (o = l[n]),
            (f = o._getVersion),
            (f = f(o._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [o, f])
              : r.mutableSourceEagerHydrationData.push(o, f);
      return new al(r);
    }),
    (Rt.render = function (n, r, o) {
      if (!ll(r)) throw Error(i(200));
      return ul(null, n, r, !1, o);
    }),
    (Rt.unmountComponentAtNode = function (n) {
      if (!ll(n)) throw Error(i(40));
      return n._reactRootContainer
        ? (ai(function () {
            ul(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[Un] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Rt.unstable_batchedUpdates = Ac),
    (Rt.unstable_renderSubtreeIntoContainer = function (n, r, o, l) {
      if (!ll(o)) throw Error(i(200));
      if (n == null || n._reactInternals === void 0) throw Error(i(38));
      return ul(n, r, o, !1, l);
    }),
    (Rt.version = "18.3.1-next-f1338f8080-20240426"),
    Rt
  );
}
var Wm;
function s0() {
  if (Wm) return Wc.exports;
  Wm = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (Wc.exports = Lb()), Wc.exports;
}
var Hm;
function Ob() {
  if (Hm) return fl;
  Hm = 1;
  var e = s0();
  return (fl.createRoot = e.createRoot), (fl.hydrateRoot = e.hydrateRoot), fl;
}
var Ib = Ob(),
  S = nf();
const J = i0(S),
  o0 = jb({ __proto__: null, default: J }, [S]),
  Vb = 1,
  _b = 1e6;
let Gc = 0;
function Fb() {
  return (Gc = (Gc + 1) % Number.MAX_SAFE_INTEGER), Gc.toString();
}
const Yc = new Map(),
  Km = (e) => {
    if (Yc.has(e)) return;
    const t = setTimeout(() => {
      Yc.delete(e), bo({ type: "REMOVE_TOAST", toastId: e });
    }, _b);
    Yc.set(e, t);
  },
  zb = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Vb) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((i) =>
            i.id === t.toast.id ? { ...i, ...t.toast } : i
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: i } = t;
        return (
          i
            ? Km(i)
            : e.toasts.forEach((s) => {
                Km(s.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === i || i === void 0 ? { ...s, open: !1 } : s
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
    }
  },
  Cl = [];
let Tl = { toasts: [] };
function bo(e) {
  (Tl = zb(Tl, e)),
    Cl.forEach((t) => {
      t(Tl);
    });
}
function xo({ ...e }) {
  const t = Fb(),
    i = (a) => bo({ type: "UPDATE_TOAST", toast: { ...a, id: t } }),
    s = () => bo({ type: "DISMISS_TOAST", toastId: t });
  return (
    bo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (a) => {
          a || s();
        },
      },
    }),
    { id: t, dismiss: s, update: i }
  );
}
function Bb() {
  const [e, t] = S.useState(Tl);
  return (
    S.useEffect(
      () => (
        Cl.push(t),
        () => {
          const i = Cl.indexOf(t);
          i > -1 && Cl.splice(i, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: xo,
      dismiss: (i) => bo({ type: "DISMISS_TOAST", toastId: i }),
    }
  );
}
var Ul = s0();
const a0 = i0(Ul);
function et(e, t, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), i === !1 || !a.defaultPrevented))
      return t == null ? void 0 : t(a);
  };
}
function Gm(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function l0(...e) {
  return (t) => {
    let i = !1;
    const s = e.map((a) => {
      const u = Gm(a, t);
      return !i && typeof u == "function" && (i = !0), u;
    });
    if (i)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const u = s[a];
          typeof u == "function" ? u() : Gm(e[a], null);
        }
      };
  };
}
function yn(...e) {
  return S.useCallback(l0(...e), e);
}
function Wl(e, t = []) {
  let i = [];
  function s(u, c) {
    const d = S.createContext(c),
      h = i.length;
    i = [...i, c];
    const p = (v) => {
      var k;
      const { scope: w, children: x, ...E } = v,
        C = ((k = w == null ? void 0 : w[e]) == null ? void 0 : k[h]) || d,
        T = S.useMemo(() => E, Object.values(E));
      return y.jsx(C.Provider, { value: T, children: x });
    };
    p.displayName = u + "Provider";
    function g(v, w) {
      var C;
      const x = ((C = w == null ? void 0 : w[e]) == null ? void 0 : C[h]) || d,
        E = S.useContext(x);
      if (E) return E;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [p, g];
  }
  const a = () => {
    const u = i.map((c) => S.createContext(c));
    return function (d) {
      const h = (d == null ? void 0 : d[e]) || u;
      return S.useMemo(() => ({ [`__scope${e}`]: { ...d, [e]: h } }), [d, h]);
    };
  };
  return (a.scopeName = e), [s, $b(a, ...t)];
}
function $b(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const i = () => {
    const s = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (u) {
      const c = s.reduce((d, { useScope: h, scopeName: p }) => {
        const v = h(u)[`__scope${p}`];
        return { ...d, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return (i.scopeName = t.scopeName), i;
}
function Rl(e) {
  const t = Wb(e),
    i = S.forwardRef((s, a) => {
      const { children: u, ...c } = s,
        d = S.Children.toArray(u),
        h = d.find(Kb);
      if (h) {
        const p = h.props.children,
          g = d.map((v) =>
            v === h
              ? S.Children.count(p) > 1
                ? S.Children.only(null)
                : S.isValidElement(p)
                ? p.props.children
                : null
              : v
          );
        return y.jsx(t, {
          ...c,
          ref: a,
          children: S.isValidElement(p) ? S.cloneElement(p, void 0, g) : null,
        });
      }
      return y.jsx(t, { ...c, ref: a, children: u });
    });
  return (i.displayName = `${e}.Slot`), i;
}
var Ub = Rl("Slot");
function Wb(e) {
  const t = S.forwardRef((i, s) => {
    const { children: a, ...u } = i;
    if (S.isValidElement(a)) {
      const c = Yb(a),
        d = Gb(u, a.props);
      return (
        a.type !== S.Fragment && (d.ref = s ? l0(s, c) : c),
        S.cloneElement(a, d)
      );
    }
    return S.Children.count(a) > 1 ? S.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var u0 = Symbol("radix.slottable");
function Hb(e) {
  const t = ({ children: i }) => y.jsx(y.Fragment, { children: i });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = u0), t;
}
function Kb(e) {
  return (
    S.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === u0
  );
}
function Gb(e, t) {
  const i = { ...t };
  for (const s in t) {
    const a = e[s],
      u = t[s];
    /^on[A-Z]/.test(s)
      ? a && u
        ? (i[s] = (...d) => {
            const h = u(...d);
            return a(...d), h;
          })
        : a && (i[s] = a)
      : s === "style"
      ? (i[s] = { ...a, ...u })
      : s === "className" && (i[s] = [a, u].filter(Boolean).join(" "));
  }
  return { ...e, ...i };
}
function Yb(e) {
  var s, a;
  let t =
      (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : s.get,
    i = t && "isReactWarning" in t && t.isReactWarning;
  return i
    ? e.ref
    : ((t =
        (a = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : a.get),
      (i = t && "isReactWarning" in t && t.isReactWarning),
      i ? e.props.ref : e.props.ref || e.ref);
}
function Qb(e) {
  const t = e + "CollectionProvider",
    [i, s] = Wl(t),
    [a, u] = i(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (C) => {
      const { scope: T, children: k } = C,
        R = J.useRef(null),
        j = J.useRef(new Map()).current;
      return y.jsx(a, { scope: T, itemMap: j, collectionRef: R, children: k });
    };
  c.displayName = t;
  const d = e + "CollectionSlot",
    h = Rl(d),
    p = J.forwardRef((C, T) => {
      const { scope: k, children: R } = C,
        j = u(d, k),
        D = yn(T, j.collectionRef);
      return y.jsx(h, { ref: D, children: R });
    });
  p.displayName = d;
  const g = e + "CollectionItemSlot",
    v = "data-radix-collection-item",
    w = Rl(g),
    x = J.forwardRef((C, T) => {
      const { scope: k, children: R, ...j } = C,
        D = J.useRef(null),
        O = yn(T, D),
        B = u(g, k);
      return (
        J.useEffect(
          () => (
            B.itemMap.set(D, { ref: D, ...j }), () => void B.itemMap.delete(D)
          )
        ),
        y.jsx(w, { [v]: "", ref: O, children: R })
      );
    });
  x.displayName = g;
  function E(C) {
    const T = u(e + "CollectionConsumer", C);
    return J.useCallback(() => {
      const R = T.collectionRef.current;
      if (!R) return [];
      const j = Array.from(R.querySelectorAll(`[${v}]`));
      return Array.from(T.itemMap.values()).sort(
        (B, V) => j.indexOf(B.ref.current) - j.indexOf(V.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [{ Provider: c, Slot: p, ItemSlot: x }, E, s];
}
var qb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Dt = qb.reduce((e, t) => {
    const i = Rl(`Primitive.${t}`),
      s = S.forwardRef((a, u) => {
        const { asChild: c, ...d } = a,
          h = c ? i : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y.jsx(h, { ...d, ref: u })
        );
      });
    return (s.displayName = `Primitive.${t}`), { ...e, [t]: s };
  }, {});
function c0(e, t) {
  e && Ul.flushSync(() => e.dispatchEvent(t));
}
function Br(e) {
  const t = S.useRef(e);
  return (
    S.useEffect(() => {
      t.current = e;
    }),
    S.useMemo(
      () =>
        (...i) => {
          var s;
          return (s = t.current) == null ? void 0 : s.call(t, ...i);
        },
      []
    )
  );
}
function Xb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Br(e);
  S.useEffect(() => {
    const s = (a) => {
      a.key === "Escape" && i(a);
    };
    return (
      t.addEventListener("keydown", s, { capture: !0 }),
      () => t.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [i, t]);
}
var Jb = "DismissableLayer",
  gd = "dismissableLayer.update",
  Zb = "dismissableLayer.pointerDownOutside",
  eS = "dismissableLayer.focusOutside",
  Ym,
  d0 = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  rf = S.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: d,
        ...h
      } = e,
      p = S.useContext(d0),
      [g, v] = S.useState(null),
      w =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, x] = S.useState({}),
      E = yn(t, (V) => v(V)),
      C = Array.from(p.layers),
      [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      k = C.indexOf(T),
      R = g ? C.indexOf(g) : -1,
      j = p.layersWithOutsidePointerEventsDisabled.size > 0,
      D = R >= k,
      O = nS((V) => {
        const H = V.target,
          te = [...p.branches].some((Z) => Z.contains(H));
        !D ||
          te ||
          (a == null || a(V),
          c == null || c(V),
          V.defaultPrevented || d == null || d());
      }, w),
      B = rS((V) => {
        const H = V.target;
        [...p.branches].some((Z) => Z.contains(H)) ||
          (u == null || u(V),
          c == null || c(V),
          V.defaultPrevented || d == null || d());
      }, w);
    return (
      Xb((V) => {
        R === p.layers.size - 1 &&
          (s == null || s(V),
          !V.defaultPrevented && d && (V.preventDefault(), d()));
      }, w),
      S.useEffect(() => {
        if (g)
          return (
            i &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ym = w.body.style.pointerEvents),
                (w.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            Qm(),
            () => {
              i &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (w.body.style.pointerEvents = Ym);
            }
          );
      }, [g, w, i, p]),
      S.useEffect(
        () => () => {
          g &&
            (p.layers.delete(g),
            p.layersWithOutsidePointerEventsDisabled.delete(g),
            Qm());
        },
        [g, p]
      ),
      S.useEffect(() => {
        const V = () => x({});
        return (
          document.addEventListener(gd, V),
          () => document.removeEventListener(gd, V)
        );
      }, []),
      y.jsx(Dt.div, {
        ...h,
        ref: E,
        style: {
          pointerEvents: j ? (D ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: et(e.onFocusCapture, B.onFocusCapture),
        onBlurCapture: et(e.onBlurCapture, B.onBlurCapture),
        onPointerDownCapture: et(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        ),
      })
    );
  });
rf.displayName = Jb;
var tS = "DismissableLayerBranch",
  f0 = S.forwardRef((e, t) => {
    const i = S.useContext(d0),
      s = S.useRef(null),
      a = yn(t, s);
    return (
      S.useEffect(() => {
        const u = s.current;
        if (u)
          return (
            i.branches.add(u),
            () => {
              i.branches.delete(u);
            }
          );
      }, [i.branches]),
      y.jsx(Dt.div, { ...e, ref: a })
    );
  });
f0.displayName = tS;
function nS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Br(e),
    s = S.useRef(!1),
    a = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const u = (d) => {
          if (d.target && !s.current) {
            let h = function () {
              h0(Zb, i, p, { discrete: !0 });
            };
            const p = { originalEvent: d };
            d.pointerType === "touch"
              ? (t.removeEventListener("click", a.current),
                (a.current = h),
                t.addEventListener("click", a.current, { once: !0 }))
              : h();
          } else t.removeEventListener("click", a.current);
          s.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        window.clearTimeout(c),
          t.removeEventListener("pointerdown", u),
          t.removeEventListener("click", a.current);
      };
    }, [t, i]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function rS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Br(e),
    s = S.useRef(!1);
  return (
    S.useEffect(() => {
      const a = (u) => {
        u.target &&
          !s.current &&
          h0(eS, i, { originalEvent: u }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", a),
        () => t.removeEventListener("focusin", a)
      );
    }, [t, i]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function Qm() {
  const e = new CustomEvent(gd);
  document.dispatchEvent(e);
}
function h0(e, t, i, { discrete: s }) {
  const a = i.originalEvent.target,
    u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: i });
  t && a.addEventListener(e, t, { once: !0 }),
    s ? c0(a, u) : a.dispatchEvent(u);
}
var iS = rf,
  sS = f0,
  $r = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  oS = "Portal",
  p0 = S.forwardRef((e, t) => {
    var d;
    const { container: i, ...s } = e,
      [a, u] = S.useState(!1);
    $r(() => u(!0), []);
    const c =
      i ||
      (a &&
        ((d = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : d.body));
    return c ? a0.createPortal(y.jsx(Dt.div, { ...s, ref: t }), c) : null;
  });
p0.displayName = oS;
function aS(e, t) {
  return S.useReducer((i, s) => t[i][s] ?? i, e);
}
var sf = (e) => {
  const { present: t, children: i } = e,
    s = lS(t),
    a =
      typeof i == "function" ? i({ present: s.isPresent }) : S.Children.only(i),
    u = yn(s.ref, uS(a));
  return typeof i == "function" || s.isPresent
    ? S.cloneElement(a, { ref: u })
    : null;
};
sf.displayName = "Presence";
function lS(e) {
  const [t, i] = S.useState(),
    s = S.useRef(null),
    a = S.useRef(e),
    u = S.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [d, h] = aS(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const p = hl(s.current);
      u.current = d === "mounted" ? p : "none";
    }, [d]),
    $r(() => {
      const p = s.current,
        g = a.current;
      if (g !== e) {
        const w = u.current,
          x = hl(p);
        e
          ? h("MOUNT")
          : x === "none" || (p == null ? void 0 : p.display) === "none"
          ? h("UNMOUNT")
          : h(g && w !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = e);
      }
    }, [e, h]),
    $r(() => {
      if (t) {
        let p;
        const g = t.ownerDocument.defaultView ?? window,
          v = (x) => {
            const C = hl(s.current).includes(CSS.escape(x.animationName));
            if (x.target === t && C && (h("ANIMATION_END"), !a.current)) {
              const T = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (p = g.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = T);
                }));
            }
          },
          w = (x) => {
            x.target === t && (u.current = hl(s.current));
          };
        return (
          t.addEventListener("animationstart", w),
          t.addEventListener("animationcancel", v),
          t.addEventListener("animationend", v),
          () => {
            g.clearTimeout(p),
              t.removeEventListener("animationstart", w),
              t.removeEventListener("animationcancel", v),
              t.removeEventListener("animationend", v);
          }
        );
      } else h("ANIMATION_END");
    }, [t, h]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: S.useCallback((p) => {
        (s.current = p ? getComputedStyle(p) : null), i(p);
      }, []),
    }
  );
}
function hl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function uS(e) {
  var s, a;
  let t =
      (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : s.get,
    i = t && "isReactWarning" in t && t.isReactWarning;
  return i
    ? e.ref
    : ((t =
        (a = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : a.get),
      (i = t && "isReactWarning" in t && t.isReactWarning),
      i ? e.props.ref : e.props.ref || e.ref);
}
var cS = o0[" useInsertionEffect ".trim().toString()] || $r;
function dS({ prop: e, defaultProp: t, onChange: i = () => {}, caller: s }) {
  const [a, u, c] = fS({ defaultProp: t, onChange: i }),
    d = e !== void 0,
    h = d ? e : a;
  {
    const g = S.useRef(e !== void 0);
    S.useEffect(() => {
      const v = g.current;
      v !== d &&
        console.warn(
          `${s} is changing from ${v ? "controlled" : "uncontrolled"} to ${
            d ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (g.current = d);
    }, [d, s]);
  }
  const p = S.useCallback(
    (g) => {
      var v;
      if (d) {
        const w = hS(g) ? g(e) : g;
        w !== e && ((v = c.current) == null || v.call(c, w));
      } else u(g);
    },
    [d, e, u, c]
  );
  return [h, p];
}
function fS({ defaultProp: e, onChange: t }) {
  const [i, s] = S.useState(e),
    a = S.useRef(i),
    u = S.useRef(t);
  return (
    cS(() => {
      u.current = t;
    }, [t]),
    S.useEffect(() => {
      var c;
      a.current !== i &&
        ((c = u.current) == null || c.call(u, i), (a.current = i));
    }, [i, a]),
    [i, s, u]
  );
}
function hS(e) {
  return typeof e == "function";
}
var pS = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  mS = "VisuallyHidden",
  Hl = S.forwardRef((e, t) =>
    y.jsx(Dt.span, { ...e, ref: t, style: { ...pS, ...e.style } })
  );
Hl.displayName = mS;
var gS = Hl,
  of = "ToastProvider",
  [af, yS, vS] = Qb("Toast"),
  [m0] = Wl("Toast", [vS]),
  [xS, Kl] = m0(of),
  g0 = (e) => {
    const {
        __scopeToast: t,
        label: i = "Notification",
        duration: s = 5e3,
        swipeDirection: a = "right",
        swipeThreshold: u = 50,
        children: c,
      } = e,
      [d, h] = S.useState(null),
      [p, g] = S.useState(0),
      v = S.useRef(!1),
      w = S.useRef(!1);
    return (
      i.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${of}\`. Expected non-empty \`string\`.`
        ),
      y.jsx(af.Provider, {
        scope: t,
        children: y.jsx(xS, {
          scope: t,
          label: i,
          duration: s,
          swipeDirection: a,
          swipeThreshold: u,
          toastCount: p,
          viewport: d,
          onViewportChange: h,
          onToastAdd: S.useCallback(() => g((x) => x + 1), []),
          onToastRemove: S.useCallback(() => g((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: v,
          isClosePausedRef: w,
          children: c,
        }),
      })
    );
  };
g0.displayName = of;
var y0 = "ToastViewport",
  wS = ["F8"],
  yd = "toast.viewportPause",
  vd = "toast.viewportResume",
  v0 = S.forwardRef((e, t) => {
    const {
        __scopeToast: i,
        hotkey: s = wS,
        label: a = "Notifications ({hotkey})",
        ...u
      } = e,
      c = Kl(y0, i),
      d = yS(i),
      h = S.useRef(null),
      p = S.useRef(null),
      g = S.useRef(null),
      v = S.useRef(null),
      w = yn(t, v, c.onViewportChange),
      x = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = c.toastCount > 0;
    S.useEffect(() => {
      const T = (k) => {
        var j;
        s.length !== 0 &&
          s.every((D) => k[D] || k.code === D) &&
          ((j = v.current) == null || j.focus());
      };
      return (
        document.addEventListener("keydown", T),
        () => document.removeEventListener("keydown", T)
      );
    }, [s]),
      S.useEffect(() => {
        const T = h.current,
          k = v.current;
        if (E && T && k) {
          const R = () => {
              if (!c.isClosePausedRef.current) {
                const B = new CustomEvent(yd);
                k.dispatchEvent(B), (c.isClosePausedRef.current = !0);
              }
            },
            j = () => {
              if (c.isClosePausedRef.current) {
                const B = new CustomEvent(vd);
                k.dispatchEvent(B), (c.isClosePausedRef.current = !1);
              }
            },
            D = (B) => {
              !T.contains(B.relatedTarget) && j();
            },
            O = () => {
              T.contains(document.activeElement) || j();
            };
          return (
            T.addEventListener("focusin", R),
            T.addEventListener("focusout", D),
            T.addEventListener("pointermove", R),
            T.addEventListener("pointerleave", O),
            window.addEventListener("blur", R),
            window.addEventListener("focus", j),
            () => {
              T.removeEventListener("focusin", R),
                T.removeEventListener("focusout", D),
                T.removeEventListener("pointermove", R),
                T.removeEventListener("pointerleave", O),
                window.removeEventListener("blur", R),
                window.removeEventListener("focus", j);
            }
          );
        }
      }, [E, c.isClosePausedRef]);
    const C = S.useCallback(
      ({ tabbingDirection: T }) => {
        const R = d().map((j) => {
          const D = j.ref.current,
            O = [D, ...DS(D)];
          return T === "forwards" ? O : O.reverse();
        });
        return (T === "forwards" ? R.reverse() : R).flat();
      },
      [d]
    );
    return (
      S.useEffect(() => {
        const T = v.current;
        if (T) {
          const k = (R) => {
            var O, B, V;
            const j = R.altKey || R.ctrlKey || R.metaKey;
            if (R.key === "Tab" && !j) {
              const H = document.activeElement,
                te = R.shiftKey;
              if (R.target === T && te) {
                (O = p.current) == null || O.focus();
                return;
              }
              const ne = C({ tabbingDirection: te ? "backwards" : "forwards" }),
                ge = ne.findIndex((X) => X === H);
              Qc(ne.slice(ge + 1))
                ? R.preventDefault()
                : te
                ? (B = p.current) == null || B.focus()
                : (V = g.current) == null || V.focus();
            }
          };
          return (
            T.addEventListener("keydown", k),
            () => T.removeEventListener("keydown", k)
          );
        }
      }, [d, C]),
      y.jsxs(sS, {
        ref: h,
        role: "region",
        "aria-label": a.replace("{hotkey}", x),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            y.jsx(xd, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const T = C({ tabbingDirection: "forwards" });
                Qc(T);
              },
            }),
          y.jsx(af.Slot, {
            scope: i,
            children: y.jsx(Dt.ol, { tabIndex: -1, ...u, ref: w }),
          }),
          E &&
            y.jsx(xd, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const T = C({ tabbingDirection: "backwards" });
                Qc(T);
              },
            }),
        ],
      })
    );
  });
v0.displayName = y0;
var x0 = "ToastFocusProxy",
  xd = S.forwardRef((e, t) => {
    const { __scopeToast: i, onFocusFromOutsideViewport: s, ...a } = e,
      u = Kl(x0, i);
    return y.jsx(Hl, {
      tabIndex: 0,
      ...a,
      ref: t,
      style: { position: "fixed" },
      onFocus: (c) => {
        var p;
        const d = c.relatedTarget;
        !((p = u.viewport) != null && p.contains(d)) && s();
      },
    });
  });
xd.displayName = x0;
var Uo = "Toast",
  bS = "toast.swipeStart",
  SS = "toast.swipeMove",
  CS = "toast.swipeCancel",
  TS = "toast.swipeEnd",
  w0 = S.forwardRef((e, t) => {
    const { forceMount: i, open: s, defaultOpen: a, onOpenChange: u, ...c } = e,
      [d, h] = dS({ prop: s, defaultProp: a ?? !0, onChange: u, caller: Uo });
    return y.jsx(sf, {
      present: i || d,
      children: y.jsx(kS, {
        open: d,
        ...c,
        ref: t,
        onClose: () => h(!1),
        onPause: Br(e.onPause),
        onResume: Br(e.onResume),
        onSwipeStart: et(e.onSwipeStart, (p) => {
          p.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: et(e.onSwipeMove, (p) => {
          const { x: g, y: v } = p.detail.delta;
          p.currentTarget.setAttribute("data-swipe", "move"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${v}px`
            );
        }),
        onSwipeCancel: et(e.onSwipeCancel, (p) => {
          p.currentTarget.setAttribute("data-swipe", "cancel"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: et(e.onSwipeEnd, (p) => {
          const { x: g, y: v } = p.detail.delta;
          p.currentTarget.setAttribute("data-swipe", "end"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${v}px`
            ),
            h(!1);
        }),
      }),
    });
  });
w0.displayName = Uo;
var [ES, PS] = m0(Uo, { onClose() {} }),
  kS = S.forwardRef((e, t) => {
    const {
        __scopeToast: i,
        type: s = "foreground",
        duration: a,
        open: u,
        onClose: c,
        onEscapeKeyDown: d,
        onPause: h,
        onResume: p,
        onSwipeStart: g,
        onSwipeMove: v,
        onSwipeCancel: w,
        onSwipeEnd: x,
        ...E
      } = e,
      C = Kl(Uo, i),
      [T, k] = S.useState(null),
      R = yn(t, (X) => k(X)),
      j = S.useRef(null),
      D = S.useRef(null),
      O = a || C.duration,
      B = S.useRef(0),
      V = S.useRef(O),
      H = S.useRef(0),
      { onToastAdd: te, onToastRemove: Z } = C,
      de = Br(() => {
        var ye;
        (T == null ? void 0 : T.contains(document.activeElement)) &&
          ((ye = C.viewport) == null || ye.focus()),
          c();
      }),
      ne = S.useCallback(
        (X) => {
          !X ||
            X === 1 / 0 ||
            (window.clearTimeout(H.current),
            (B.current = new Date().getTime()),
            (H.current = window.setTimeout(de, X)));
        },
        [de]
      );
    S.useEffect(() => {
      const X = C.viewport;
      if (X) {
        const ye = () => {
            ne(V.current), p == null || p();
          },
          ce = () => {
            const ee = new Date().getTime() - B.current;
            (V.current = V.current - ee),
              window.clearTimeout(H.current),
              h == null || h();
          };
        return (
          X.addEventListener(yd, ce),
          X.addEventListener(vd, ye),
          () => {
            X.removeEventListener(yd, ce), X.removeEventListener(vd, ye);
          }
        );
      }
    }, [C.viewport, O, h, p, ne]),
      S.useEffect(() => {
        u && !C.isClosePausedRef.current && ne(O);
      }, [u, O, C.isClosePausedRef, ne]),
      S.useEffect(() => (te(), () => Z()), [te, Z]);
    const ge = S.useMemo(() => (T ? k0(T) : null), [T]);
    return C.viewport
      ? y.jsxs(y.Fragment, {
          children: [
            ge &&
              y.jsx(jS, {
                __scopeToast: i,
                role: "status",
                "aria-live": s === "foreground" ? "assertive" : "polite",
                children: ge,
              }),
            y.jsx(ES, {
              scope: i,
              onClose: de,
              children: Ul.createPortal(
                y.jsx(af.ItemSlot, {
                  scope: i,
                  children: y.jsx(iS, {
                    asChild: !0,
                    onEscapeKeyDown: et(d, () => {
                      C.isFocusedToastEscapeKeyDownRef.current || de(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: y.jsx(Dt.li, {
                      tabIndex: 0,
                      "data-state": u ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...E,
                      ref: R,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: et(e.onKeyDown, (X) => {
                        X.key === "Escape" &&
                          (d == null || d(X.nativeEvent),
                          X.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            de()));
                      }),
                      onPointerDown: et(e.onPointerDown, (X) => {
                        X.button === 0 &&
                          (j.current = { x: X.clientX, y: X.clientY });
                      }),
                      onPointerMove: et(e.onPointerMove, (X) => {
                        if (!j.current) return;
                        const ye = X.clientX - j.current.x,
                          ce = X.clientY - j.current.y,
                          ee = !!D.current,
                          F = ["left", "right"].includes(C.swipeDirection),
                          U = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          G = F ? U(0, ye) : 0,
                          M = F ? 0 : U(0, ce),
                          z = X.pointerType === "touch" ? 10 : 2,
                          re = { x: G, y: M },
                          se = { originalEvent: X, delta: re };
                        ee
                          ? ((D.current = re), pl(SS, v, se, { discrete: !1 }))
                          : qm(re, C.swipeDirection, z)
                          ? ((D.current = re),
                            pl(bS, g, se, { discrete: !1 }),
                            X.target.setPointerCapture(X.pointerId))
                          : (Math.abs(ye) > z || Math.abs(ce) > z) &&
                            (j.current = null);
                      }),
                      onPointerUp: et(e.onPointerUp, (X) => {
                        const ye = D.current,
                          ce = X.target;
                        if (
                          (ce.hasPointerCapture(X.pointerId) &&
                            ce.releasePointerCapture(X.pointerId),
                          (D.current = null),
                          (j.current = null),
                          ye)
                        ) {
                          const ee = X.currentTarget,
                            F = { originalEvent: X, delta: ye };
                          qm(ye, C.swipeDirection, C.swipeThreshold)
                            ? pl(TS, x, F, { discrete: !0 })
                            : pl(CS, w, F, { discrete: !0 }),
                            ee.addEventListener(
                              "click",
                              (U) => U.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  jS = (e) => {
    const { __scopeToast: t, children: i, ...s } = e,
      a = Kl(Uo, t),
      [u, c] = S.useState(!1),
      [d, h] = S.useState(!1);
    return (
      AS(() => c(!0)),
      S.useEffect(() => {
        const p = window.setTimeout(() => h(!0), 1e3);
        return () => window.clearTimeout(p);
      }, []),
      d
        ? null
        : y.jsx(p0, {
            asChild: !0,
            children: y.jsx(Hl, {
              ...s,
              children:
                u && y.jsxs(y.Fragment, { children: [a.label, " ", i] }),
            }),
          })
    );
  },
  NS = "ToastTitle",
  b0 = S.forwardRef((e, t) => {
    const { __scopeToast: i, ...s } = e;
    return y.jsx(Dt.div, { ...s, ref: t });
  });
b0.displayName = NS;
var RS = "ToastDescription",
  S0 = S.forwardRef((e, t) => {
    const { __scopeToast: i, ...s } = e;
    return y.jsx(Dt.div, { ...s, ref: t });
  });
S0.displayName = RS;
var C0 = "ToastAction",
  T0 = S.forwardRef((e, t) => {
    const { altText: i, ...s } = e;
    return i.trim()
      ? y.jsx(P0, {
          altText: i,
          asChild: !0,
          children: y.jsx(lf, { ...s, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${C0}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
T0.displayName = C0;
var E0 = "ToastClose",
  lf = S.forwardRef((e, t) => {
    const { __scopeToast: i, ...s } = e,
      a = PS(E0, i);
    return y.jsx(P0, {
      asChild: !0,
      children: y.jsx(Dt.button, {
        type: "button",
        ...s,
        ref: t,
        onClick: et(e.onClick, a.onClose),
      }),
    });
  });
lf.displayName = E0;
var P0 = S.forwardRef((e, t) => {
  const { __scopeToast: i, altText: s, ...a } = e;
  return y.jsx(Dt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": s || void 0,
    ...a,
    ref: t,
  });
});
function k0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((s) => {
      if (
        (s.nodeType === s.TEXT_NODE && s.textContent && t.push(s.textContent),
        MS(s))
      ) {
        const a = s.ariaHidden || s.hidden || s.style.display === "none",
          u = s.dataset.radixToastAnnounceExclude === "";
        if (!a)
          if (u) {
            const c = s.dataset.radixToastAnnounceAlt;
            c && t.push(c);
          } else t.push(...k0(s));
      }
    }),
    t
  );
}
function pl(e, t, i, { discrete: s }) {
  const a = i.originalEvent.currentTarget,
    u = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: i });
  t && a.addEventListener(e, t, { once: !0 }),
    s ? c0(a, u) : a.dispatchEvent(u);
}
var qm = (e, t, i = 0) => {
  const s = Math.abs(e.x),
    a = Math.abs(e.y),
    u = s > a;
  return t === "left" || t === "right" ? u && s > i : !u && a > i;
};
function AS(e = () => {}) {
  const t = Br(e);
  $r(() => {
    let i = 0,
      s = 0;
    return (
      (i = window.requestAnimationFrame(
        () => (s = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(i), window.cancelAnimationFrame(s);
      }
    );
  }, [t]);
}
function MS(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function DS(e) {
  const t = [],
    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const a = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || a
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) t.push(i.currentNode);
  return t;
}
function Qc(e) {
  const t = document.activeElement;
  return e.some((i) =>
    i === t ? !0 : (i.focus(), document.activeElement !== t)
  );
}
var LS = g0,
  j0 = v0,
  N0 = w0,
  R0 = b0,
  A0 = S0,
  M0 = T0,
  D0 = lf;
function L0(e) {
  var t,
    i,
    s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (i = L0(e[t])) && (s && (s += " "), (s += i));
    } else for (i in e) e[i] && (s && (s += " "), (s += i));
  return s;
}
function O0() {
  for (var e, t, i = 0, s = "", a = arguments.length; i < a; i++)
    (e = arguments[i]) && (t = L0(e)) && (s && (s += " "), (s += t));
  return s;
}
const Xm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Jm = O0,
  I0 = (e, t) => (i) => {
    var s;
    if ((t == null ? void 0 : t.variants) == null)
      return Jm(
        e,
        i == null ? void 0 : i.class,
        i == null ? void 0 : i.className
      );
    const { variants: a, defaultVariants: u } = t,
      c = Object.keys(a).map((p) => {
        const g = i == null ? void 0 : i[p],
          v = u == null ? void 0 : u[p];
        if (g === null) return null;
        const w = Xm(g) || Xm(v);
        return a[p][w];
      }),
      d =
        i &&
        Object.entries(i).reduce((p, g) => {
          let [v, w] = g;
          return w === void 0 || (p[v] = w), p;
        }, {}),
      h =
        t == null || (s = t.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((p, g) => {
              let { class: v, className: w, ...x } = g;
              return Object.entries(x).every((E) => {
                let [C, T] = E;
                return Array.isArray(T)
                  ? T.includes({ ...u, ...d }[C])
                  : { ...u, ...d }[C] === T;
              })
                ? [...p, v, w]
                : p;
            }, []);
    return Jm(
      e,
      c,
      h,
      i == null ? void 0 : i.class,
      i == null ? void 0 : i.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  V0 = (...e) =>
    e
      .filter((t, i, s) => !!t && t.trim() !== "" && s.indexOf(t) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var IS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VS = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      iconNode: c,
      ...d
    },
    h
  ) =>
    S.createElement(
      "svg",
      {
        ref: h,
        ...IS,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: s ? (Number(i) * 24) / Number(t) : i,
        className: V0("lucide", a),
        ...d,
      },
      [
        ...c.map(([p, g]) => S.createElement(p, g)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mt = (e, t) => {
  const i = S.forwardRef(({ className: s, ...a }, u) =>
    S.createElement(VS, {
      ref: u,
      iconNode: t,
      className: V0(`lucide-${OS(e)}`, s),
      ...a,
    })
  );
  return (i.displayName = `${e}`), i;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _0 = mt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = mt("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ml = mt("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _S = mt("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FS = mt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zS = mt("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BS = mt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $S = mt("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uf = mt("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Si = mt("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const US = mt("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F0 = mt("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WS = mt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HS = mt("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KS = mt("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z0 = mt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  cf = "-",
  GS = (e) => {
    const t = QS(e),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: s } = e;
    return {
      getClassGroupId: (c) => {
        const d = c.split(cf);
        return d[0] === "" && d.length !== 1 && d.shift(), B0(d, t) || YS(c);
      },
      getConflictingClassGroupIds: (c, d) => {
        const h = i[c] || [];
        return d && s[c] ? [...h, ...s[c]] : h;
      },
    };
  },
  B0 = (e, t) => {
    var c;
    if (e.length === 0) return t.classGroupId;
    const i = e[0],
      s = t.nextPart.get(i),
      a = s ? B0(e.slice(1), s) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    const u = e.join(cf);
    return (c = t.validators.find(({ validator: d }) => d(u))) == null
      ? void 0
      : c.classGroupId;
  },
  eg = /^\[(.+)\]$/,
  YS = (e) => {
    if (eg.test(e)) {
      const t = eg.exec(e)[1],
        i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  QS = (e) => {
    const { theme: t, prefix: i } = e,
      s = { nextPart: new Map(), validators: [] };
    return (
      XS(Object.entries(e.classGroups), i).forEach(([u, c]) => {
        wd(c, s, u, t);
      }),
      s
    );
  },
  wd = (e, t, i, s) => {
    e.forEach((a) => {
      if (typeof a == "string") {
        const u = a === "" ? t : tg(t, a);
        u.classGroupId = i;
        return;
      }
      if (typeof a == "function") {
        if (qS(a)) {
          wd(a(s), t, i, s);
          return;
        }
        t.validators.push({ validator: a, classGroupId: i });
        return;
      }
      Object.entries(a).forEach(([u, c]) => {
        wd(c, tg(t, u), i, s);
      });
    });
  },
  tg = (e, t) => {
    let i = e;
    return (
      t.split(cf).forEach((s) => {
        i.nextPart.has(s) ||
          i.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(s));
      }),
      i
    );
  },
  qS = (e) => e.isThemeGetter,
  XS = (e, t) =>
    t
      ? e.map(([i, s]) => {
          const a = s.map((u) =>
            typeof u == "string"
              ? t + u
              : typeof u == "object"
              ? Object.fromEntries(
                  Object.entries(u).map(([c, d]) => [t + c, d])
                )
              : u
          );
          return [i, a];
        })
      : e,
  JS = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      i = new Map(),
      s = new Map();
    const a = (u, c) => {
      i.set(u, c), t++, t > e && ((t = 0), (s = i), (i = new Map()));
    };
    return {
      get(u) {
        let c = i.get(u);
        if (c !== void 0) return c;
        if ((c = s.get(u)) !== void 0) return a(u, c), c;
      },
      set(u, c) {
        i.has(u) ? i.set(u, c) : a(u, c);
      },
    };
  },
  $0 = "!",
  ZS = (e) => {
    const { separator: t, experimentalParseClassName: i } = e,
      s = t.length === 1,
      a = t[0],
      u = t.length,
      c = (d) => {
        const h = [];
        let p = 0,
          g = 0,
          v;
        for (let T = 0; T < d.length; T++) {
          let k = d[T];
          if (p === 0) {
            if (k === a && (s || d.slice(T, T + u) === t)) {
              h.push(d.slice(g, T)), (g = T + u);
              continue;
            }
            if (k === "/") {
              v = T;
              continue;
            }
          }
          k === "[" ? p++ : k === "]" && p--;
        }
        const w = h.length === 0 ? d : d.substring(g),
          x = w.startsWith($0),
          E = x ? w.substring(1) : w,
          C = v && v > g ? v - g : void 0;
        return {
          modifiers: h,
          hasImportantModifier: x,
          baseClassName: E,
          maybePostfixModifierPosition: C,
        };
      };
    return i ? (d) => i({ className: d, parseClassName: c }) : c;
  },
  eC = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let i = [];
    return (
      e.forEach((s) => {
        s[0] === "[" ? (t.push(...i.sort(), s), (i = [])) : i.push(s);
      }),
      t.push(...i.sort()),
      t
    );
  },
  tC = (e) => ({ cache: JS(e.cacheSize), parseClassName: ZS(e), ...GS(e) }),
  nC = /\s+/,
  rC = (e, t) => {
    const {
        parseClassName: i,
        getClassGroupId: s,
        getConflictingClassGroupIds: a,
      } = t,
      u = [],
      c = e.trim().split(nC);
    let d = "";
    for (let h = c.length - 1; h >= 0; h -= 1) {
      const p = c[h],
        {
          modifiers: g,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        } = i(p);
      let E = !!x,
        C = s(E ? w.substring(0, x) : w);
      if (!C) {
        if (!E) {
          d = p + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((C = s(w)), !C)) {
          d = p + (d.length > 0 ? " " + d : d);
          continue;
        }
        E = !1;
      }
      const T = eC(g).join(":"),
        k = v ? T + $0 : T,
        R = k + C;
      if (u.includes(R)) continue;
      u.push(R);
      const j = a(C, E);
      for (let D = 0; D < j.length; ++D) {
        const O = j[D];
        u.push(k + O);
      }
      d = p + (d.length > 0 ? " " + d : d);
    }
    return d;
  };
function iC() {
  let e = 0,
    t,
    i,
    s = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (i = U0(t)) && (s && (s += " "), (s += i));
  return s;
}
const U0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    i = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (t = U0(e[s])) && (i && (i += " "), (i += t));
  return i;
};
function sC(e, ...t) {
  let i,
    s,
    a,
    u = c;
  function c(h) {
    const p = t.reduce((g, v) => v(g), e());
    return (i = tC(p)), (s = i.cache.get), (a = i.cache.set), (u = d), d(h);
  }
  function d(h) {
    const p = s(h);
    if (p) return p;
    const g = rC(h, i);
    return a(h, g), g;
  }
  return function () {
    return u(iC.apply(null, arguments));
  };
}
const Ie = (e) => {
    const t = (i) => i[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  W0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  oC = /^\d+\/\d+$/,
  aC = new Set(["px", "full", "screen"]),
  lC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  uC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  cC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  dC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xn = (e) => us(e) || aC.has(e) || oC.test(e),
  jr = (e) => Ts(e, "length", wC),
  us = (e) => !!e && !Number.isNaN(Number(e)),
  qc = (e) => Ts(e, "number", us),
  go = (e) => !!e && Number.isInteger(Number(e)),
  hC = (e) => e.endsWith("%") && us(e.slice(0, -1)),
  Ce = (e) => W0.test(e),
  Nr = (e) => lC.test(e),
  pC = new Set(["length", "size", "percentage"]),
  mC = (e) => Ts(e, pC, H0),
  gC = (e) => Ts(e, "position", H0),
  yC = new Set(["image", "url"]),
  vC = (e) => Ts(e, yC, SC),
  xC = (e) => Ts(e, "", bC),
  yo = () => !0,
  Ts = (e, t, i) => {
    const s = W0.exec(e);
    return s
      ? s[1]
        ? typeof t == "string"
          ? s[1] === t
          : t.has(s[1])
        : i(s[2])
      : !1;
  },
  wC = (e) => uC.test(e) && !cC.test(e),
  H0 = () => !1,
  bC = (e) => dC.test(e),
  SC = (e) => fC.test(e),
  CC = () => {
    const e = Ie("colors"),
      t = Ie("spacing"),
      i = Ie("blur"),
      s = Ie("brightness"),
      a = Ie("borderColor"),
      u = Ie("borderRadius"),
      c = Ie("borderSpacing"),
      d = Ie("borderWidth"),
      h = Ie("contrast"),
      p = Ie("grayscale"),
      g = Ie("hueRotate"),
      v = Ie("invert"),
      w = Ie("gap"),
      x = Ie("gradientColorStops"),
      E = Ie("gradientColorStopPositions"),
      C = Ie("inset"),
      T = Ie("margin"),
      k = Ie("opacity"),
      R = Ie("padding"),
      j = Ie("saturate"),
      D = Ie("scale"),
      O = Ie("sepia"),
      B = Ie("skew"),
      V = Ie("space"),
      H = Ie("translate"),
      te = () => ["auto", "contain", "none"],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      de = () => ["auto", Ce, t],
      ne = () => [Ce, t],
      ge = () => ["", Xn, jr],
      X = () => ["auto", us, Ce],
      ye = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ce = () => ["solid", "dashed", "dotted", "double", "none"],
      ee = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      U = () => ["", "0", Ce],
      G = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      M = () => [us, Ce];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [yo],
        spacing: [Xn, jr],
        blur: ["none", "", Nr, Ce],
        brightness: M(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Nr, Ce],
        borderSpacing: ne(),
        borderWidth: ge(),
        contrast: M(),
        grayscale: U(),
        hueRotate: M(),
        invert: U(),
        gap: ne(),
        gradientColorStops: [e],
        gradientColorStopPositions: [hC, jr],
        inset: de(),
        margin: de(),
        opacity: M(),
        padding: ne(),
        saturate: M(),
        scale: M(),
        sepia: U(),
        skew: M(),
        space: ne(),
        translate: ne(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Ce] }],
        container: ["container"],
        columns: [{ columns: [Nr] }],
        "break-after": [{ "break-after": G() }],
        "break-before": [{ "break-before": G() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ye(), Ce] }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: te() }],
        "overscroll-x": [{ "overscroll-x": te() }],
        "overscroll-y": [{ "overscroll-y": te() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [C] }],
        "inset-x": [{ "inset-x": [C] }],
        "inset-y": [{ "inset-y": [C] }],
        start: [{ start: [C] }],
        end: [{ end: [C] }],
        top: [{ top: [C] }],
        right: [{ right: [C] }],
        bottom: [{ bottom: [C] }],
        left: [{ left: [C] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", go, Ce] }],
        basis: [{ basis: de() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Ce] }],
        grow: [{ grow: U() }],
        shrink: [{ shrink: U() }],
        order: [{ order: ["first", "last", "none", go, Ce] }],
        "grid-cols": [{ "grid-cols": [yo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", go, Ce] }, Ce] }],
        "col-start": [{ "col-start": X() }],
        "col-end": [{ "col-end": X() }],
        "grid-rows": [{ "grid-rows": [yo] }],
        "row-start-end": [{ row: ["auto", { span: [go, Ce] }, Ce] }],
        "row-start": [{ "row-start": X() }],
        "row-end": [{ "row-end": X() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Ce] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Ce] }],
        gap: [{ gap: [w] }],
        "gap-x": [{ "gap-x": [w] }],
        "gap-y": [{ "gap-y": [w] }],
        "justify-content": [{ justify: ["normal", ...F()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...F(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...F(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [R] }],
        px: [{ px: [R] }],
        py: [{ py: [R] }],
        ps: [{ ps: [R] }],
        pe: [{ pe: [R] }],
        pt: [{ pt: [R] }],
        pr: [{ pr: [R] }],
        pb: [{ pb: [R] }],
        pl: [{ pl: [R] }],
        m: [{ m: [T] }],
        mx: [{ mx: [T] }],
        my: [{ my: [T] }],
        ms: [{ ms: [T] }],
        me: [{ me: [T] }],
        mt: [{ mt: [T] }],
        mr: [{ mr: [T] }],
        mb: [{ mb: [T] }],
        ml: [{ ml: [T] }],
        "space-x": [{ "space-x": [V] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [V] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ce, t] }],
        "min-w": [{ "min-w": [Ce, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Ce,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Nr] },
              Nr,
            ],
          },
        ],
        h: [{ h: [Ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Ce, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Ce, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Ce, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Nr, jr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              qc,
            ],
          },
        ],
        "font-family": [{ font: [yo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Ce,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", us, qc] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Xn,
              Ce,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Ce] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Ce] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [k] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [k] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ce(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Xn, jr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Xn, Ce] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ne() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Ce,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Ce] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [k] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ye(), gC] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", mC] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              vC,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [E] }],
        "gradient-via-pos": [{ via: [E] }],
        "gradient-to-pos": [{ to: [E] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [u] }],
        "rounded-s": [{ "rounded-s": [u] }],
        "rounded-e": [{ "rounded-e": [u] }],
        "rounded-t": [{ "rounded-t": [u] }],
        "rounded-r": [{ "rounded-r": [u] }],
        "rounded-b": [{ "rounded-b": [u] }],
        "rounded-l": [{ "rounded-l": [u] }],
        "rounded-ss": [{ "rounded-ss": [u] }],
        "rounded-se": [{ "rounded-se": [u] }],
        "rounded-ee": [{ "rounded-ee": [u] }],
        "rounded-es": [{ "rounded-es": [u] }],
        "rounded-tl": [{ "rounded-tl": [u] }],
        "rounded-tr": [{ "rounded-tr": [u] }],
        "rounded-br": [{ "rounded-br": [u] }],
        "rounded-bl": [{ "rounded-bl": [u] }],
        "border-w": [{ border: [d] }],
        "border-w-x": [{ "border-x": [d] }],
        "border-w-y": [{ "border-y": [d] }],
        "border-w-s": [{ "border-s": [d] }],
        "border-w-e": [{ "border-e": [d] }],
        "border-w-t": [{ "border-t": [d] }],
        "border-w-r": [{ "border-r": [d] }],
        "border-w-b": [{ "border-b": [d] }],
        "border-w-l": [{ "border-l": [d] }],
        "border-opacity": [{ "border-opacity": [k] }],
        "border-style": [{ border: [...ce(), "hidden"] }],
        "divide-x": [{ "divide-x": [d] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [d] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [k] }],
        "divide-style": [{ divide: ce() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...ce()] }],
        "outline-offset": [{ "outline-offset": [Xn, Ce] }],
        "outline-w": [{ outline: [Xn, jr] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ge() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [k] }],
        "ring-offset-w": [{ "ring-offset": [Xn, jr] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Nr, xC] }],
        "shadow-color": [{ shadow: [yo] }],
        opacity: [{ opacity: [k] }],
        "mix-blend": [
          { "mix-blend": [...ee(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ee() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [h] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Nr, Ce] }],
        grayscale: [{ grayscale: [p] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [v] }],
        saturate: [{ saturate: [j] }],
        sepia: [{ sepia: [O] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [i] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [h] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [p] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [v] }],
        "backdrop-opacity": [{ "backdrop-opacity": [k] }],
        "backdrop-saturate": [{ "backdrop-saturate": [j] }],
        "backdrop-sepia": [{ "backdrop-sepia": [O] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [c] }],
        "border-spacing-x": [{ "border-spacing-x": [c] }],
        "border-spacing-y": [{ "border-spacing-y": [c] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Ce,
            ],
          },
        ],
        duration: [{ duration: M() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Ce] }],
        delay: [{ delay: M() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Ce] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [D] }],
        "scale-x": [{ "scale-x": [D] }],
        "scale-y": [{ "scale-y": [D] }],
        rotate: [{ rotate: [go, Ce] }],
        "translate-x": [{ "translate-x": [H] }],
        "translate-y": [{ "translate-y": [H] }],
        "skew-x": [{ "skew-x": [B] }],
        "skew-y": [{ "skew-y": [B] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Ce,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Ce,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": ne() }],
        "scroll-mx": [{ "scroll-mx": ne() }],
        "scroll-my": [{ "scroll-my": ne() }],
        "scroll-ms": [{ "scroll-ms": ne() }],
        "scroll-me": [{ "scroll-me": ne() }],
        "scroll-mt": [{ "scroll-mt": ne() }],
        "scroll-mr": [{ "scroll-mr": ne() }],
        "scroll-mb": [{ "scroll-mb": ne() }],
        "scroll-ml": [{ "scroll-ml": ne() }],
        "scroll-p": [{ "scroll-p": ne() }],
        "scroll-px": [{ "scroll-px": ne() }],
        "scroll-py": [{ "scroll-py": ne() }],
        "scroll-ps": [{ "scroll-ps": ne() }],
        "scroll-pe": [{ "scroll-pe": ne() }],
        "scroll-pt": [{ "scroll-pt": ne() }],
        "scroll-pr": [{ "scroll-pr": ne() }],
        "scroll-pb": [{ "scroll-pb": ne() }],
        "scroll-pl": [{ "scroll-pl": ne() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Ce] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Xn, jr, qc] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  TC = sC(CC);
function Lt(...e) {
  return TC(O0(e));
}
const EC = LS,
  K0 = S.forwardRef(({ className: e, ...t }, i) =>
    y.jsx(j0, {
      ref: i,
      className: Lt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
K0.displayName = j0.displayName;
const PC = I0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  G0 = S.forwardRef(({ className: e, variant: t, ...i }, s) =>
    y.jsx(N0, { ref: s, className: Lt(PC({ variant: t }), e), ...i })
  );
G0.displayName = N0.displayName;
const kC = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx(M0, {
    ref: i,
    className: Lt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
kC.displayName = M0.displayName;
const Y0 = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx(D0, {
    ref: i,
    className: Lt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: y.jsx(z0, { className: "h-4 w-4" }),
  })
);
Y0.displayName = D0.displayName;
const Q0 = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx(R0, { ref: i, className: Lt("text-sm font-semibold", e), ...t })
);
Q0.displayName = R0.displayName;
const q0 = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx(A0, { ref: i, className: Lt("text-sm opacity-90", e), ...t })
);
q0.displayName = A0.displayName;
function jC() {
  const { toasts: e } = Bb();
  return y.jsxs(EC, {
    children: [
      e.map(function ({ id: t, title: i, description: s, action: a, ...u }) {
        return y.jsxs(
          G0,
          {
            ...u,
            children: [
              y.jsxs("div", {
                className: "grid gap-1",
                children: [
                  i && y.jsx(Q0, { children: i }),
                  s && y.jsx(q0, { children: s }),
                ],
              }),
              a,
              y.jsx(Y0, {}),
            ],
          },
          t
        );
      }),
      y.jsx(K0, {}),
    ],
  });
}
var ng = ["light", "dark"],
  NC = "(prefers-color-scheme: dark)",
  RC = S.createContext(void 0),
  AC = { setTheme: (e) => {}, themes: [] },
  MC = () => {
    var e;
    return (e = S.useContext(RC)) != null ? e : AC;
  };
S.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: i,
    enableSystem: s,
    enableColorScheme: a,
    defaultTheme: u,
    value: c,
    attrs: d,
    nonce: h,
  }) => {
    let p = u === "system",
      g =
        i === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${d
              .map((E) => `'${E}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${i}',s='setAttribute';`,
      v = a
        ? ng.includes(u) && u
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      w = (E, C = !1, T = !0) => {
        let k = c ? c[E] : E,
          R = C ? E + "|| ''" : `'${k}'`,
          j = "";
        return (
          a &&
            T &&
            !C &&
            ng.includes(E) &&
            (j += `d.style.colorScheme = '${E}';`),
          i === "class"
            ? C || k
              ? (j += `c.add(${R})`)
              : (j += "null")
            : k && (j += `d[s](n,${R})`),
          j
        );
      },
      x = e
        ? `!function(){${g}${w(e)}}()`
        : s
        ? `!function(){try{${g}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${NC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${w(
            "dark"
          )}}else{${w("light")}}}else if(e){${
            c ? `var x=${JSON.stringify(c)};` : ""
          }${w(c ? "x[e]" : "e", !0)}}${
            p ? "" : "else{" + w(u, !1, !1) + "}"
          }${v}}catch(e){}}()`
        : `!function(){try{${g}var e=localStorage.getItem('${t}');if(e){${
            c ? `var x=${JSON.stringify(c)};` : ""
          }${w(c ? "x[e]" : "e", !0)}}else{${w(
            u,
            !1,
            !1
          )};}${v}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: h,
      dangerouslySetInnerHTML: { __html: x },
    });
  }
);
var DC = (e) => {
    switch (e) {
      case "success":
        return IC;
      case "info":
        return _C;
      case "warning":
        return VC;
      case "error":
        return FC;
      default:
        return null;
    }
  },
  LC = Array(12).fill(0),
  OC = ({ visible: e, className: t }) =>
    J.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      J.createElement(
        "div",
        { className: "sonner-spinner" },
        LC.map((i, s) =>
          J.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${s}`,
          })
        )
      )
    ),
  IC = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  VC = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  _C = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  FC = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  zC = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    J.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    J.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  BC = () => {
    let [e, t] = J.useState(document.hidden);
    return (
      J.useEffect(() => {
        let i = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", i),
          () => window.removeEventListener("visibilitychange", i)
        );
      }, []),
      e
    );
  },
  bd = 1,
  $C = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: i, ...s } = e,
            a =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : bd++,
            u = this.toasts.find((d) => d.id === a),
            c = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
            u
              ? (this.toasts = this.toasts.map((d) =>
                  d.id === a
                    ? (this.publish({ ...d, ...e, id: a, title: i }),
                      { ...d, ...e, id: a, dismissible: c, title: i })
                    : d
                ))
              : this.addToast({ title: i, ...s, dismissible: c, id: a }),
            a
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((i) => i({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let i;
          t.loading !== void 0 &&
            (i = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let s = e instanceof Promise ? e : e(),
            a = i !== void 0,
            u,
            c = s
              .then(async (h) => {
                if (((u = ["resolve", h]), J.isValidElement(h)))
                  (a = !1), this.create({ id: i, type: "default", message: h });
                else if (WC(h) && !h.ok) {
                  a = !1;
                  let p =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${h.status}`)
                        : t.error,
                    g =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${h.status}`)
                        : t.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: p,
                    description: g,
                  });
                } else if (t.success !== void 0) {
                  a = !1;
                  let p =
                      typeof t.success == "function"
                        ? await t.success(h)
                        : t.success,
                    g =
                      typeof t.description == "function"
                        ? await t.description(h)
                        : t.description;
                  this.create({
                    id: i,
                    type: "success",
                    message: p,
                    description: g,
                  });
                }
              })
              .catch(async (h) => {
                if (((u = ["reject", h]), t.error !== void 0)) {
                  a = !1;
                  let p =
                      typeof t.error == "function" ? await t.error(h) : t.error,
                    g =
                      typeof t.description == "function"
                        ? await t.description(h)
                        : t.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: p,
                    description: g,
                  });
                }
              })
              .finally(() => {
                var h;
                a && (this.dismiss(i), (i = void 0)),
                  (h = t.finally) == null || h.call(t);
              }),
            d = () =>
              new Promise((h, p) =>
                c.then(() => (u[0] === "reject" ? p(u[1]) : h(u[1]))).catch(p)
              );
          return typeof i != "string" && typeof i != "number"
            ? { unwrap: d }
            : Object.assign(i, { unwrap: d });
        }),
        (this.custom = (e, t) => {
          let i = (t == null ? void 0 : t.id) || bd++;
          return this.create({ jsx: e(i), id: i, ...t }), i;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  At = new $C(),
  UC = (e, t) => {
    let i = (t == null ? void 0 : t.id) || bd++;
    return At.addToast({ title: e, ...t, id: i }), i;
  },
  WC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  HC = UC,
  KC = () => At.toasts,
  GC = () => At.getActiveToasts();
Object.assign(
  HC,
  {
    success: At.success,
    info: At.info,
    warning: At.warning,
    error: At.error,
    custom: At.custom,
    message: At.message,
    promise: At.promise,
    dismiss: At.dismiss,
    loading: At.loading,
  },
  { getHistory: KC, getToasts: GC }
);
function YC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    t === "top" && i.firstChild
      ? i.insertBefore(s, i.firstChild)
      : i.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = e)
      : s.appendChild(document.createTextNode(e));
}
YC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function gl(e) {
  return e.label !== void 0;
}
var QC = 3,
  qC = "32px",
  XC = "16px",
  rg = 4e3,
  JC = 356,
  ZC = 14,
  e2 = 20,
  t2 = 200;
function fn(...e) {
  return e.filter(Boolean).join(" ");
}
function n2(e) {
  let [t, i] = e.split("-"),
    s = [];
  return t && s.push(t), i && s.push(i), s;
}
var r2 = (e) => {
  var t, i, s, a, u, c, d, h, p, g, v;
  let {
      invert: w,
      toast: x,
      unstyled: E,
      interacting: C,
      setHeights: T,
      visibleToasts: k,
      heights: R,
      index: j,
      toasts: D,
      expanded: O,
      removeToast: B,
      defaultRichColors: V,
      closeButton: H,
      style: te,
      cancelButtonStyle: Z,
      actionButtonStyle: de,
      className: ne = "",
      descriptionClassName: ge = "",
      duration: X,
      position: ye,
      gap: ce,
      loadingIcon: ee,
      expandByDefault: F,
      classNames: U,
      icons: G,
      closeButtonAriaLabel: M = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [re, se] = J.useState(null),
    [me, Se] = J.useState(null),
    [fe, Ee] = J.useState(!1),
    [ke, He] = J.useState(!1),
    [Ot, Bn] = J.useState(!1),
    [It, sr] = J.useState(!1),
    [Ri, Qr] = J.useState(!1),
    [qr, or] = J.useState(0),
    [wn, ar] = J.useState(0),
    Ut = J.useRef(x.duration || X || rg),
    Ai = J.useRef(null),
    bn = J.useRef(null),
    Jo = j === 0,
    Zo = j + 1 <= k,
    gt = x.type,
    Sn = x.dismissible !== !1,
    Mi = x.className || "",
    ea = x.descriptionClassName || "",
    Cn = J.useMemo(
      () => R.findIndex((we) => we.toastId === x.id) || 0,
      [R, x.id]
    ),
    Xr = J.useMemo(() => {
      var we;
      return (we = x.closeButton) != null ? we : H;
    }, [x.closeButton, H]),
    ta = J.useMemo(() => x.duration || X || rg, [x.duration, X]),
    Di = J.useRef(0),
    $n = J.useRef(0),
    na = J.useRef(0),
    Tn = J.useRef(null),
    [Ms, Ds] = ye.split("-"),
    Li = J.useMemo(
      () => R.reduce((we, Re, Me) => (Me >= Cn ? we : we + Re.height), 0),
      [R, Cn]
    ),
    Oi = BC(),
    lr = x.invert || w,
    En = gt === "loading";
  ($n.current = J.useMemo(() => Cn * ce + Li, [Cn, Li])),
    J.useEffect(() => {
      Ut.current = ta;
    }, [ta]),
    J.useEffect(() => {
      Ee(!0);
    }, []),
    J.useEffect(() => {
      let we = bn.current;
      if (we) {
        let Re = we.getBoundingClientRect().height;
        return (
          ar(Re),
          T((Me) => [
            { toastId: x.id, height: Re, position: x.position },
            ...Me,
          ]),
          () => T((Me) => Me.filter((yt) => yt.toastId !== x.id))
        );
      }
    }, [T, x.id]),
    J.useLayoutEffect(() => {
      if (!fe) return;
      let we = bn.current,
        Re = we.style.height;
      we.style.height = "auto";
      let Me = we.getBoundingClientRect().height;
      (we.style.height = Re),
        ar(Me),
        T((yt) =>
          yt.find((Ct) => Ct.toastId === x.id)
            ? yt.map((Ct) => (Ct.toastId === x.id ? { ...Ct, height: Me } : Ct))
            : [{ toastId: x.id, height: Me, position: x.position }, ...yt]
        );
    }, [fe, x.title, x.description, T, x.id]);
  let nn = J.useCallback(() => {
    He(!0),
      or($n.current),
      T((we) => we.filter((Re) => Re.toastId !== x.id)),
      setTimeout(() => {
        B(x);
      }, t2);
  }, [x, B, T, $n]);
  J.useEffect(() => {
    if (
      (x.promise && gt === "loading") ||
      x.duration === 1 / 0 ||
      x.type === "loading"
    )
      return;
    let we;
    return (
      O || C || (z && Oi)
        ? (() => {
            if (na.current < Di.current) {
              let Re = new Date().getTime() - Di.current;
              Ut.current = Ut.current - Re;
            }
            na.current = new Date().getTime();
          })()
        : Ut.current !== 1 / 0 &&
          ((Di.current = new Date().getTime()),
          (we = setTimeout(() => {
            var Re;
            (Re = x.onAutoClose) == null || Re.call(x, x), nn();
          }, Ut.current))),
      () => clearTimeout(we)
    );
  }, [O, C, x, gt, z, Oi, nn]),
    J.useEffect(() => {
      x.delete && nn();
    }, [nn, x.delete]);
  function ra() {
    var we, Re, Me;
    return G != null && G.loading
      ? J.createElement(
          "div",
          {
            className: fn(
              U == null ? void 0 : U.loader,
              (we = x == null ? void 0 : x.classNames) == null
                ? void 0
                : we.loader,
              "sonner-loader"
            ),
            "data-visible": gt === "loading",
          },
          G.loading
        )
      : ee
      ? J.createElement(
          "div",
          {
            className: fn(
              U == null ? void 0 : U.loader,
              (Re = x == null ? void 0 : x.classNames) == null
                ? void 0
                : Re.loader,
              "sonner-loader"
            ),
            "data-visible": gt === "loading",
          },
          ee
        )
      : J.createElement(OC, {
          className: fn(
            U == null ? void 0 : U.loader,
            (Me = x == null ? void 0 : x.classNames) == null
              ? void 0
              : Me.loader
          ),
          visible: gt === "loading",
        });
  }
  return J.createElement(
    "li",
    {
      tabIndex: 0,
      ref: bn,
      className: fn(
        ne,
        Mi,
        U == null ? void 0 : U.toast,
        (t = x == null ? void 0 : x.classNames) == null ? void 0 : t.toast,
        U == null ? void 0 : U.default,
        U == null ? void 0 : U[gt],
        (i = x == null ? void 0 : x.classNames) == null ? void 0 : i[gt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (s = x.richColors) != null ? s : V,
      "data-styled": !(x.jsx || x.unstyled || E),
      "data-mounted": fe,
      "data-promise": !!x.promise,
      "data-swiped": Ri,
      "data-removed": ke,
      "data-visible": Zo,
      "data-y-position": Ms,
      "data-x-position": Ds,
      "data-index": j,
      "data-front": Jo,
      "data-swiping": Ot,
      "data-dismissible": Sn,
      "data-type": gt,
      "data-invert": lr,
      "data-swipe-out": It,
      "data-swipe-direction": me,
      "data-expanded": !!(O || (F && fe)),
      style: {
        "--index": j,
        "--toasts-before": j,
        "--z-index": D.length - j,
        "--offset": `${ke ? qr : $n.current}px`,
        "--initial-height": F ? "auto" : `${wn}px`,
        ...te,
        ...x.style,
      },
      onDragEnd: () => {
        Bn(!1), se(null), (Tn.current = null);
      },
      onPointerDown: (we) => {
        En ||
          !Sn ||
          ((Ai.current = new Date()),
          or($n.current),
          we.target.setPointerCapture(we.pointerId),
          we.target.tagName !== "BUTTON" &&
            (Bn(!0), (Tn.current = { x: we.clientX, y: we.clientY })));
      },
      onPointerUp: () => {
        var we, Re, Me, yt;
        if (It || !Sn) return;
        Tn.current = null;
        let Ct = Number(
            ((we = bn.current) == null
              ? void 0
              : we.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Tt = Number(
            ((Re = bn.current) == null
              ? void 0
              : Re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          rn =
            new Date().getTime() -
            ((Me = Ai.current) == null ? void 0 : Me.getTime()),
          st = re === "x" ? Ct : Tt,
          Pn = Math.abs(st) / rn;
        if (Math.abs(st) >= e2 || Pn > 0.11) {
          or($n.current),
            (yt = x.onDismiss) == null || yt.call(x, x),
            Se(
              re === "x" ? (Ct > 0 ? "right" : "left") : Tt > 0 ? "down" : "up"
            ),
            nn(),
            sr(!0),
            Qr(!1);
          return;
        }
        Bn(!1), se(null);
      },
      onPointerMove: (we) => {
        var Re, Me, yt, Ct;
        if (
          !Tn.current ||
          !Sn ||
          ((Re = window.getSelection()) == null
            ? void 0
            : Re.toString().length) > 0
        )
          return;
        let Tt = we.clientY - Tn.current.y,
          rn = we.clientX - Tn.current.x,
          st = (Me = e.swipeDirections) != null ? Me : n2(ye);
        !re &&
          (Math.abs(rn) > 1 || Math.abs(Tt) > 1) &&
          se(Math.abs(rn) > Math.abs(Tt) ? "x" : "y");
        let Pn = { x: 0, y: 0 };
        re === "y"
          ? (st.includes("top") || st.includes("bottom")) &&
            ((st.includes("top") && Tt < 0) ||
              (st.includes("bottom") && Tt > 0)) &&
            (Pn.y = Tt)
          : re === "x" &&
            (st.includes("left") || st.includes("right")) &&
            ((st.includes("left") && rn < 0) ||
              (st.includes("right") && rn > 0)) &&
            (Pn.x = rn),
          (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && Qr(!0),
          (yt = bn.current) == null ||
            yt.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
          (Ct = bn.current) == null ||
            Ct.style.setProperty("--swipe-amount-y", `${Pn.y}px`);
      },
    },
    Xr && !x.jsx
      ? J.createElement(
          "button",
          {
            "aria-label": M,
            "data-disabled": En,
            "data-close-button": !0,
            onClick:
              En || !Sn
                ? () => {}
                : () => {
                    var we;
                    nn(), (we = x.onDismiss) == null || we.call(x, x);
                  },
            className: fn(
              U == null ? void 0 : U.closeButton,
              (a = x == null ? void 0 : x.classNames) == null
                ? void 0
                : a.closeButton
            ),
          },
          (u = G == null ? void 0 : G.close) != null ? u : zC
        )
      : null,
    x.jsx || S.isValidElement(x.title)
      ? x.jsx
        ? x.jsx
        : typeof x.title == "function"
        ? x.title()
        : x.title
      : J.createElement(
          J.Fragment,
          null,
          gt || x.icon || x.promise
            ? J.createElement(
                "div",
                {
                  "data-icon": "",
                  className: fn(
                    U == null ? void 0 : U.icon,
                    (c = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : c.icon
                  ),
                },
                x.promise || (x.type === "loading" && !x.icon)
                  ? x.icon || ra()
                  : null,
                x.type !== "loading"
                  ? x.icon || (G == null ? void 0 : G[gt]) || DC(gt)
                  : null
              )
            : null,
          J.createElement(
            "div",
            {
              "data-content": "",
              className: fn(
                U == null ? void 0 : U.content,
                (d = x == null ? void 0 : x.classNames) == null
                  ? void 0
                  : d.content
              ),
            },
            J.createElement(
              "div",
              {
                "data-title": "",
                className: fn(
                  U == null ? void 0 : U.title,
                  (h = x == null ? void 0 : x.classNames) == null
                    ? void 0
                    : h.title
                ),
              },
              typeof x.title == "function" ? x.title() : x.title
            ),
            x.description
              ? J.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: fn(
                      ge,
                      ea,
                      U == null ? void 0 : U.description,
                      (p = x == null ? void 0 : x.classNames) == null
                        ? void 0
                        : p.description
                    ),
                  },
                  typeof x.description == "function"
                    ? x.description()
                    : x.description
                )
              : null
          ),
          S.isValidElement(x.cancel)
            ? x.cancel
            : x.cancel && gl(x.cancel)
            ? J.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: x.cancelButtonStyle || Z,
                  onClick: (we) => {
                    var Re, Me;
                    gl(x.cancel) &&
                      Sn &&
                      ((Me = (Re = x.cancel).onClick) == null ||
                        Me.call(Re, we),
                      nn());
                  },
                  className: fn(
                    U == null ? void 0 : U.cancelButton,
                    (g = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : g.cancelButton
                  ),
                },
                x.cancel.label
              )
            : null,
          S.isValidElement(x.action)
            ? x.action
            : x.action && gl(x.action)
            ? J.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: x.actionButtonStyle || de,
                  onClick: (we) => {
                    var Re, Me;
                    gl(x.action) &&
                      ((Me = (Re = x.action).onClick) == null ||
                        Me.call(Re, we),
                      !we.defaultPrevented && nn());
                  },
                  className: fn(
                    U == null ? void 0 : U.actionButton,
                    (v = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : v.actionButton
                  ),
                },
                x.action.label
              )
            : null
        )
  );
};
function ig() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function i2(e, t) {
  let i = {};
  return (
    [e, t].forEach((s, a) => {
      let u = a === 1,
        c = u ? "--mobile-offset" : "--offset",
        d = u ? XC : qC;
      function h(p) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          i[`${c}-${g}`] = typeof p == "number" ? `${p}px` : p;
        });
      }
      typeof s == "number" || typeof s == "string"
        ? h(s)
        : typeof s == "object"
        ? ["top", "right", "bottom", "left"].forEach((p) => {
            s[p] === void 0
              ? (i[`${c}-${p}`] = d)
              : (i[`${c}-${p}`] = typeof s[p] == "number" ? `${s[p]}px` : s[p]);
          })
        : h(d);
    }),
    i
  );
}
var s2 = S.forwardRef(function (e, t) {
  let {
      invert: i,
      position: s = "bottom-right",
      hotkey: a = ["altKey", "KeyT"],
      expand: u,
      closeButton: c,
      className: d,
      offset: h,
      mobileOffset: p,
      theme: g = "light",
      richColors: v,
      duration: w,
      style: x,
      visibleToasts: E = QC,
      toastOptions: C,
      dir: T = ig(),
      gap: k = ZC,
      loadingIcon: R,
      icons: j,
      containerAriaLabel: D = "Notifications",
      pauseWhenPageIsHidden: O,
    } = e,
    [B, V] = J.useState([]),
    H = J.useMemo(
      () =>
        Array.from(
          new Set(
            [s].concat(B.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [B, s]
    ),
    [te, Z] = J.useState([]),
    [de, ne] = J.useState(!1),
    [ge, X] = J.useState(!1),
    [ye, ce] = J.useState(
      g !== "system"
        ? g
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    ee = J.useRef(null),
    F = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    U = J.useRef(null),
    G = J.useRef(!1),
    M = J.useCallback((z) => {
      V((re) => {
        var se;
        return (
          ((se = re.find((me) => me.id === z.id)) != null && se.delete) ||
            At.dismiss(z.id),
          re.filter(({ id: me }) => me !== z.id)
        );
      });
    }, []);
  return (
    J.useEffect(
      () =>
        At.subscribe((z) => {
          if (z.dismiss) {
            V((re) =>
              re.map((se) => (se.id === z.id ? { ...se, delete: !0 } : se))
            );
            return;
          }
          setTimeout(() => {
            a0.flushSync(() => {
              V((re) => {
                let se = re.findIndex((me) => me.id === z.id);
                return se !== -1
                  ? [
                      ...re.slice(0, se),
                      { ...re[se], ...z },
                      ...re.slice(se + 1),
                    ]
                  : [z, ...re];
              });
            });
          });
        }),
      []
    ),
    J.useEffect(() => {
      if (g !== "system") {
        ce(g);
        return;
      }
      if (
        (g === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ce("dark")
            : ce("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: re }) => {
          ce(re ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: se }) => {
          try {
            ce(se ? "dark" : "light");
          } catch (me) {
            console.error(me);
          }
        });
      }
    }, [g]),
    J.useEffect(() => {
      B.length <= 1 && ne(!1);
    }, [B]),
    J.useEffect(() => {
      let z = (re) => {
        var se, me;
        a.every((Se) => re[Se] || re.code === Se) &&
          (ne(!0), (se = ee.current) == null || se.focus()),
          re.code === "Escape" &&
            (document.activeElement === ee.current ||
              ((me = ee.current) != null &&
                me.contains(document.activeElement))) &&
            ne(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [a]),
    J.useEffect(() => {
      if (ee.current)
        return () => {
          U.current &&
            (U.current.focus({ preventScroll: !0 }),
            (U.current = null),
            (G.current = !1));
        };
    }, [ee.current]),
    J.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${D} ${F}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      H.map((z, re) => {
        var se;
        let [me, Se] = z.split("-");
        return B.length
          ? J.createElement(
              "ol",
              {
                key: z,
                dir: T === "auto" ? ig() : T,
                tabIndex: -1,
                ref: ee,
                className: d,
                "data-sonner-toaster": !0,
                "data-theme": ye,
                "data-y-position": me,
                "data-lifted": de && B.length > 1 && !u,
                "data-x-position": Se,
                style: {
                  "--front-toast-height": `${
                    ((se = te[0]) == null ? void 0 : se.height) || 0
                  }px`,
                  "--width": `${JC}px`,
                  "--gap": `${k}px`,
                  ...x,
                  ...i2(h, p),
                },
                onBlur: (fe) => {
                  G.current &&
                    !fe.currentTarget.contains(fe.relatedTarget) &&
                    ((G.current = !1),
                    U.current &&
                      (U.current.focus({ preventScroll: !0 }),
                      (U.current = null)));
                },
                onFocus: (fe) => {
                  (fe.target instanceof HTMLElement &&
                    fe.target.dataset.dismissible === "false") ||
                    G.current ||
                    ((G.current = !0), (U.current = fe.relatedTarget));
                },
                onMouseEnter: () => ne(!0),
                onMouseMove: () => ne(!0),
                onMouseLeave: () => {
                  ge || ne(!1);
                },
                onDragEnd: () => ne(!1),
                onPointerDown: (fe) => {
                  (fe.target instanceof HTMLElement &&
                    fe.target.dataset.dismissible === "false") ||
                    X(!0);
                },
                onPointerUp: () => X(!1),
              },
              B.filter(
                (fe) => (!fe.position && re === 0) || fe.position === z
              ).map((fe, Ee) => {
                var ke, He;
                return J.createElement(r2, {
                  key: fe.id,
                  icons: j,
                  index: Ee,
                  toast: fe,
                  defaultRichColors: v,
                  duration:
                    (ke = C == null ? void 0 : C.duration) != null ? ke : w,
                  className: C == null ? void 0 : C.className,
                  descriptionClassName:
                    C == null ? void 0 : C.descriptionClassName,
                  invert: i,
                  visibleToasts: E,
                  closeButton:
                    (He = C == null ? void 0 : C.closeButton) != null ? He : c,
                  interacting: ge,
                  position: z,
                  style: C == null ? void 0 : C.style,
                  unstyled: C == null ? void 0 : C.unstyled,
                  classNames: C == null ? void 0 : C.classNames,
                  cancelButtonStyle: C == null ? void 0 : C.cancelButtonStyle,
                  actionButtonStyle: C == null ? void 0 : C.actionButtonStyle,
                  removeToast: M,
                  toasts: B.filter((Ot) => Ot.position == fe.position),
                  heights: te.filter((Ot) => Ot.position == fe.position),
                  setHeights: Z,
                  expandByDefault: u,
                  gap: k,
                  loadingIcon: R,
                  expanded: de,
                  pauseWhenPageIsHidden: O,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const o2 = ({ ...e }) => {
    const { theme: t = "system" } = MC();
    return y.jsx(s2, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  a2 = ["top", "right", "bottom", "left"],
  Ur = Math.min,
  Bt = Math.max,
  Al = Math.round,
  yl = Math.floor,
  In = (e) => ({ x: e, y: e }),
  l2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  u2 = { start: "end", end: "start" };
function Sd(e, t, i) {
  return Bt(e, Ur(t, i));
}
function er(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tr(e) {
  return e.split("-")[0];
}
function Es(e) {
  return e.split("-")[1];
}
function df(e) {
  return e === "x" ? "y" : "x";
}
function ff(e) {
  return e === "y" ? "height" : "width";
}
const c2 = new Set(["top", "bottom"]);
function On(e) {
  return c2.has(tr(e)) ? "y" : "x";
}
function hf(e) {
  return df(On(e));
}
function d2(e, t, i) {
  i === void 0 && (i = !1);
  const s = Es(e),
    a = hf(e),
    u = ff(a);
  let c =
    a === "x"
      ? s === (i ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
      ? "bottom"
      : "top";
  return t.reference[u] > t.floating[u] && (c = Ml(c)), [c, Ml(c)];
}
function f2(e) {
  const t = Ml(e);
  return [Cd(e), t, Cd(t)];
}
function Cd(e) {
  return e.replace(/start|end/g, (t) => u2[t]);
}
const sg = ["left", "right"],
  og = ["right", "left"],
  h2 = ["top", "bottom"],
  p2 = ["bottom", "top"];
function m2(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? (t ? og : sg) : t ? sg : og;
    case "left":
    case "right":
      return t ? h2 : p2;
    default:
      return [];
  }
}
function g2(e, t, i, s) {
  const a = Es(e);
  let u = m2(tr(e), i === "start", s);
  return (
    a && ((u = u.map((c) => c + "-" + a)), t && (u = u.concat(u.map(Cd)))), u
  );
}
function Ml(e) {
  return e.replace(/left|right|bottom|top/g, (t) => l2[t]);
}
function y2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function X0(e) {
  return typeof e != "number"
    ? y2(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Dl(e) {
  const { x: t, y: i, width: s, height: a } = e;
  return {
    width: s,
    height: a,
    top: i,
    left: t,
    right: t + s,
    bottom: i + a,
    x: t,
    y: i,
  };
}
function ag(e, t, i) {
  let { reference: s, floating: a } = e;
  const u = On(t),
    c = hf(t),
    d = ff(c),
    h = tr(t),
    p = u === "y",
    g = s.x + s.width / 2 - a.width / 2,
    v = s.y + s.height / 2 - a.height / 2,
    w = s[d] / 2 - a[d] / 2;
  let x;
  switch (h) {
    case "top":
      x = { x: g, y: s.y - a.height };
      break;
    case "bottom":
      x = { x: g, y: s.y + s.height };
      break;
    case "right":
      x = { x: s.x + s.width, y: v };
      break;
    case "left":
      x = { x: s.x - a.width, y: v };
      break;
    default:
      x = { x: s.x, y: s.y };
  }
  switch (Es(t)) {
    case "start":
      x[c] -= w * (i && p ? -1 : 1);
      break;
    case "end":
      x[c] += w * (i && p ? -1 : 1);
      break;
  }
  return x;
}
const v2 = async (e, t, i) => {
  const {
      placement: s = "bottom",
      strategy: a = "absolute",
      middleware: u = [],
      platform: c,
    } = i,
    d = u.filter(Boolean),
    h = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let p = await c.getElementRects({ reference: e, floating: t, strategy: a }),
    { x: g, y: v } = ag(p, s, h),
    w = s,
    x = {},
    E = 0;
  for (let C = 0; C < d.length; C++) {
    const { name: T, fn: k } = d[C],
      {
        x: R,
        y: j,
        data: D,
        reset: O,
      } = await k({
        x: g,
        y: v,
        initialPlacement: s,
        placement: w,
        strategy: a,
        middlewareData: x,
        rects: p,
        platform: c,
        elements: { reference: e, floating: t },
      });
    (g = R ?? g),
      (v = j ?? v),
      (x = { ...x, [T]: { ...x[T], ...D } }),
      O &&
        E <= 50 &&
        (E++,
        typeof O == "object" &&
          (O.placement && (w = O.placement),
          O.rects &&
            (p =
              O.rects === !0
                ? await c.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: a,
                  })
                : O.rects),
          ({ x: g, y: v } = ag(p, w, h))),
        (C = -1));
  }
  return { x: g, y: v, placement: w, strategy: a, middlewareData: x };
};
async function ko(e, t) {
  var i;
  t === void 0 && (t = {});
  const { x: s, y: a, platform: u, rects: c, elements: d, strategy: h } = e,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: v = "floating",
      altBoundary: w = !1,
      padding: x = 0,
    } = er(t, e),
    E = X0(x),
    T = d[w ? (v === "floating" ? "reference" : "floating") : v],
    k = Dl(
      await u.getClippingRect({
        element:
          (i = await (u.isElement == null ? void 0 : u.isElement(T))) == null ||
          i
            ? T
            : T.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(d.floating))),
        boundary: p,
        rootBoundary: g,
        strategy: h,
      })
    ),
    R =
      v === "floating"
        ? { x: s, y: a, width: c.floating.width, height: c.floating.height }
        : c.reference,
    j = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(d.floating)),
    D = (await (u.isElement == null ? void 0 : u.isElement(j)))
      ? (await (u.getScale == null ? void 0 : u.getScale(j))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    O = Dl(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: R,
            offsetParent: j,
            strategy: h,
          })
        : R
    );
  return {
    top: (k.top - O.top + E.top) / D.y,
    bottom: (O.bottom - k.bottom + E.bottom) / D.y,
    left: (k.left - O.left + E.left) / D.x,
    right: (O.right - k.right + E.right) / D.x,
  };
}
const x2 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: i,
          y: s,
          placement: a,
          rects: u,
          platform: c,
          elements: d,
          middlewareData: h,
        } = t,
        { element: p, padding: g = 0 } = er(e, t) || {};
      if (p == null) return {};
      const v = X0(g),
        w = { x: i, y: s },
        x = hf(a),
        E = ff(x),
        C = await c.getDimensions(p),
        T = x === "y",
        k = T ? "top" : "left",
        R = T ? "bottom" : "right",
        j = T ? "clientHeight" : "clientWidth",
        D = u.reference[E] + u.reference[x] - w[x] - u.floating[E],
        O = w[x] - u.reference[x],
        B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(p));
      let V = B ? B[j] : 0;
      (!V || !(await (c.isElement == null ? void 0 : c.isElement(B)))) &&
        (V = d.floating[j] || u.floating[E]);
      const H = D / 2 - O / 2,
        te = V / 2 - C[E] / 2 - 1,
        Z = Ur(v[k], te),
        de = Ur(v[R], te),
        ne = Z,
        ge = V - C[E] - de,
        X = V / 2 - C[E] / 2 + H,
        ye = Sd(ne, X, ge),
        ce =
          !h.arrow &&
          Es(a) != null &&
          X !== ye &&
          u.reference[E] / 2 - (X < ne ? Z : de) - C[E] / 2 < 0,
        ee = ce ? (X < ne ? X - ne : X - ge) : 0;
      return {
        [x]: w[x] + ee,
        data: {
          [x]: ye,
          centerOffset: X - ye - ee,
          ...(ce && { alignmentOffset: ee }),
        },
        reset: ce,
      };
    },
  }),
  w2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var i, s;
          const {
              placement: a,
              middlewareData: u,
              rects: c,
              initialPlacement: d,
              platform: h,
              elements: p,
            } = t,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: w,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: C = !0,
              ...T
            } = er(e, t);
          if ((i = u.arrow) != null && i.alignmentOffset) return {};
          const k = tr(a),
            R = On(d),
            j = tr(d) === d,
            D = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)),
            O = w || (j || !C ? [Ml(d)] : f2(d)),
            B = E !== "none";
          !w && B && O.push(...g2(d, C, E, D));
          const V = [d, ...O],
            H = await ko(t, T),
            te = [];
          let Z = ((s = u.flip) == null ? void 0 : s.overflows) || [];
          if ((g && te.push(H[k]), v)) {
            const X = d2(a, c, D);
            te.push(H[X[0]], H[X[1]]);
          }
          if (
            ((Z = [...Z, { placement: a, overflows: te }]),
            !te.every((X) => X <= 0))
          ) {
            var de, ne;
            const X = (((de = u.flip) == null ? void 0 : de.index) || 0) + 1,
              ye = V[X];
            if (
              ye &&
              (!(v === "alignment" ? R !== On(ye) : !1) ||
                Z.every((F) =>
                  On(F.placement) === R ? F.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: X, overflows: Z },
                reset: { placement: ye },
              };
            let ce =
              (ne = Z.filter((ee) => ee.overflows[0] <= 0).sort(
                (ee, F) => ee.overflows[1] - F.overflows[1]
              )[0]) == null
                ? void 0
                : ne.placement;
            if (!ce)
              switch (x) {
                case "bestFit": {
                  var ge;
                  const ee =
                    (ge = Z.filter((F) => {
                      if (B) {
                        const U = On(F.placement);
                        return U === R || U === "y";
                      }
                      return !0;
                    })
                      .map((F) => [
                        F.placement,
                        F.overflows
                          .filter((U) => U > 0)
                          .reduce((U, G) => U + G, 0),
                      ])
                      .sort((F, U) => F[1] - U[1])[0]) == null
                      ? void 0
                      : ge[0];
                  ee && (ce = ee);
                  break;
                }
                case "initialPlacement":
                  ce = d;
                  break;
              }
            if (a !== ce) return { reset: { placement: ce } };
          }
          return {};
        },
      }
    );
  };
function lg(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ug(e) {
  return a2.some((t) => e[t] >= 0);
}
const b2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: i } = t,
            { strategy: s = "referenceHidden", ...a } = er(e, t);
          switch (s) {
            case "referenceHidden": {
              const u = await ko(t, { ...a, elementContext: "reference" }),
                c = lg(u, i.reference);
              return {
                data: { referenceHiddenOffsets: c, referenceHidden: ug(c) },
              };
            }
            case "escaped": {
              const u = await ko(t, { ...a, altBoundary: !0 }),
                c = lg(u, i.floating);
              return { data: { escapedOffsets: c, escaped: ug(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  J0 = new Set(["left", "top"]);
async function S2(e, t) {
  const { placement: i, platform: s, elements: a } = e,
    u = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
    c = tr(i),
    d = Es(i),
    h = On(i) === "y",
    p = J0.has(c) ? -1 : 1,
    g = u && h ? -1 : 1,
    v = er(t, e);
  let {
    mainAxis: w,
    crossAxis: x,
    alignmentAxis: E,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    d && typeof E == "number" && (x = d === "end" ? E * -1 : E),
    h ? { x: x * g, y: w * p } : { x: w * p, y: x * g }
  );
}
const C2 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var i, s;
          const { x: a, y: u, placement: c, middlewareData: d } = t,
            h = await S2(t, e);
          return c === ((i = d.offset) == null ? void 0 : i.placement) &&
            (s = d.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: a + h.x, y: u + h.y, data: { ...h, placement: c } };
        },
      }
    );
  },
  T2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: i, y: s, placement: a } = t,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: d = {
                fn: (T) => {
                  let { x: k, y: R } = T;
                  return { x: k, y: R };
                },
              },
              ...h
            } = er(e, t),
            p = { x: i, y: s },
            g = await ko(t, h),
            v = On(tr(a)),
            w = df(v);
          let x = p[w],
            E = p[v];
          if (u) {
            const T = w === "y" ? "top" : "left",
              k = w === "y" ? "bottom" : "right",
              R = x + g[T],
              j = x - g[k];
            x = Sd(R, x, j);
          }
          if (c) {
            const T = v === "y" ? "top" : "left",
              k = v === "y" ? "bottom" : "right",
              R = E + g[T],
              j = E - g[k];
            E = Sd(R, E, j);
          }
          const C = d.fn({ ...t, [w]: x, [v]: E });
          return {
            ...C,
            data: { x: C.x - i, y: C.y - s, enabled: { [w]: u, [v]: c } },
          };
        },
      }
    );
  },
  E2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: i, y: s, placement: a, rects: u, middlewareData: c } = t,
            { offset: d = 0, mainAxis: h = !0, crossAxis: p = !0 } = er(e, t),
            g = { x: i, y: s },
            v = On(a),
            w = df(v);
          let x = g[w],
            E = g[v];
          const C = er(d, t),
            T =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (h) {
            const j = w === "y" ? "height" : "width",
              D = u.reference[w] - u.floating[j] + T.mainAxis,
              O = u.reference[w] + u.reference[j] - T.mainAxis;
            x < D ? (x = D) : x > O && (x = O);
          }
          if (p) {
            var k, R;
            const j = w === "y" ? "width" : "height",
              D = J0.has(tr(a)),
              O =
                u.reference[v] -
                u.floating[j] +
                ((D && ((k = c.offset) == null ? void 0 : k[v])) || 0) +
                (D ? 0 : T.crossAxis),
              B =
                u.reference[v] +
                u.reference[j] +
                (D ? 0 : ((R = c.offset) == null ? void 0 : R[v]) || 0) -
                (D ? T.crossAxis : 0);
            E < O ? (E = O) : E > B && (E = B);
          }
          return { [w]: x, [v]: E };
        },
      }
    );
  },
  P2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var i, s;
          const { placement: a, rects: u, platform: c, elements: d } = t,
            { apply: h = () => {}, ...p } = er(e, t),
            g = await ko(t, p),
            v = tr(a),
            w = Es(a),
            x = On(a) === "y",
            { width: E, height: C } = u.floating;
          let T, k;
          v === "top" || v === "bottom"
            ? ((T = v),
              (k =
                w ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((k = v), (T = w === "end" ? "top" : "bottom"));
          const R = C - g.top - g.bottom,
            j = E - g.left - g.right,
            D = Ur(C - g[T], R),
            O = Ur(E - g[k], j),
            B = !t.middlewareData.shift;
          let V = D,
            H = O;
          if (
            ((i = t.middlewareData.shift) != null && i.enabled.x && (H = j),
            (s = t.middlewareData.shift) != null && s.enabled.y && (V = R),
            B && !w)
          ) {
            const Z = Bt(g.left, 0),
              de = Bt(g.right, 0),
              ne = Bt(g.top, 0),
              ge = Bt(g.bottom, 0);
            x
              ? (H =
                  E - 2 * (Z !== 0 || de !== 0 ? Z + de : Bt(g.left, g.right)))
              : (V =
                  C -
                  2 * (ne !== 0 || ge !== 0 ? ne + ge : Bt(g.top, g.bottom)));
          }
          await h({ ...t, availableWidth: H, availableHeight: V });
          const te = await c.getDimensions(d.floating);
          return E !== te.width || C !== te.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Gl() {
  return typeof window < "u";
}
function Ps(e) {
  return Z0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function zn(e) {
  var t;
  return (t = (Z0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Z0(e) {
  return Gl() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function vn(e) {
  return Gl() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Fn(e) {
  return Gl() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function cg(e) {
  return !Gl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const k2 = new Set(["inline", "contents"]);
function Wo(e) {
  const { overflow: t, overflowX: i, overflowY: s, display: a } = xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + i) && !k2.has(a);
}
const j2 = new Set(["table", "td", "th"]);
function N2(e) {
  return j2.has(Ps(e));
}
const R2 = [":popover-open", ":modal"];
function Yl(e) {
  return R2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const A2 = ["transform", "translate", "scale", "rotate", "perspective"],
  M2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  D2 = ["paint", "layout", "strict", "content"];
function pf(e) {
  const t = mf(),
    i = vn(e) ? xn(e) : e;
  return (
    A2.some((s) => (i[s] ? i[s] !== "none" : !1)) ||
    (i.containerType ? i.containerType !== "normal" : !1) ||
    (!t && (i.backdropFilter ? i.backdropFilter !== "none" : !1)) ||
    (!t && (i.filter ? i.filter !== "none" : !1)) ||
    M2.some((s) => (i.willChange || "").includes(s)) ||
    D2.some((s) => (i.contain || "").includes(s))
  );
}
function L2(e) {
  let t = Wr(e);
  for (; Fn(t) && !ws(t); ) {
    if (pf(t)) return t;
    if (Yl(t)) return null;
    t = Wr(t);
  }
  return null;
}
function mf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const O2 = new Set(["html", "body", "#document"]);
function ws(e) {
  return O2.has(Ps(e));
}
function xn(e) {
  return $t(e).getComputedStyle(e);
}
function Ql(e) {
  return vn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Wr(e) {
  if (Ps(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (cg(e) && e.host) || zn(e);
  return cg(t) ? t.host : t;
}
function ev(e) {
  const t = Wr(e);
  return ws(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Fn(t) && Wo(t)
    ? t
    : ev(t);
}
function jo(e, t, i) {
  var s;
  t === void 0 && (t = []), i === void 0 && (i = !0);
  const a = ev(e),
    u = a === ((s = e.ownerDocument) == null ? void 0 : s.body),
    c = $t(a);
  if (u) {
    const d = Td(c);
    return t.concat(
      c,
      c.visualViewport || [],
      Wo(a) ? a : [],
      d && i ? jo(d) : []
    );
  }
  return t.concat(a, jo(a, [], i));
}
function Td(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tv(e) {
  const t = xn(e);
  let i = parseFloat(t.width) || 0,
    s = parseFloat(t.height) || 0;
  const a = Fn(e),
    u = a ? e.offsetWidth : i,
    c = a ? e.offsetHeight : s,
    d = Al(i) !== u || Al(s) !== c;
  return d && ((i = u), (s = c)), { width: i, height: s, $: d };
}
function gf(e) {
  return vn(e) ? e : e.contextElement;
}
function cs(e) {
  const t = gf(e);
  if (!Fn(t)) return In(1);
  const i = t.getBoundingClientRect(),
    { width: s, height: a, $: u } = tv(t);
  let c = (u ? Al(i.width) : i.width) / s,
    d = (u ? Al(i.height) : i.height) / a;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    { x: c, y: d }
  );
}
const I2 = In(0);
function nv(e) {
  const t = $t(e);
  return !mf() || !t.visualViewport
    ? I2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function V2(e, t, i) {
  return t === void 0 && (t = !1), !i || (t && i !== $t(e)) ? !1 : t;
}
function Ei(e, t, i, s) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const a = e.getBoundingClientRect(),
    u = gf(e);
  let c = In(1);
  t && (s ? vn(s) && (c = cs(s)) : (c = cs(e)));
  const d = V2(u, i, s) ? nv(u) : In(0);
  let h = (a.left + d.x) / c.x,
    p = (a.top + d.y) / c.y,
    g = a.width / c.x,
    v = a.height / c.y;
  if (u) {
    const w = $t(u),
      x = s && vn(s) ? $t(s) : s;
    let E = w,
      C = Td(E);
    for (; C && s && x !== E; ) {
      const T = cs(C),
        k = C.getBoundingClientRect(),
        R = xn(C),
        j = k.left + (C.clientLeft + parseFloat(R.paddingLeft)) * T.x,
        D = k.top + (C.clientTop + parseFloat(R.paddingTop)) * T.y;
      (h *= T.x),
        (p *= T.y),
        (g *= T.x),
        (v *= T.y),
        (h += j),
        (p += D),
        (E = $t(C)),
        (C = Td(E));
    }
  }
  return Dl({ width: g, height: v, x: h, y: p });
}
function ql(e, t) {
  const i = Ql(e).scrollLeft;
  return t ? t.left + i : Ei(zn(e)).left + i;
}
function rv(e, t) {
  const i = e.getBoundingClientRect(),
    s = i.left + t.scrollLeft - ql(e, i),
    a = i.top + t.scrollTop;
  return { x: s, y: a };
}
function _2(e) {
  let { elements: t, rect: i, offsetParent: s, strategy: a } = e;
  const u = a === "fixed",
    c = zn(s),
    d = t ? Yl(t.floating) : !1;
  if (s === c || (d && u)) return i;
  let h = { scrollLeft: 0, scrollTop: 0 },
    p = In(1);
  const g = In(0),
    v = Fn(s);
  if (
    (v || (!v && !u)) &&
    ((Ps(s) !== "body" || Wo(c)) && (h = Ql(s)), Fn(s))
  ) {
    const x = Ei(s);
    (p = cs(s)), (g.x = x.x + s.clientLeft), (g.y = x.y + s.clientTop);
  }
  const w = c && !v && !u ? rv(c, h) : In(0);
  return {
    width: i.width * p.x,
    height: i.height * p.y,
    x: i.x * p.x - h.scrollLeft * p.x + g.x + w.x,
    y: i.y * p.y - h.scrollTop * p.y + g.y + w.y,
  };
}
function F2(e) {
  return Array.from(e.getClientRects());
}
function z2(e) {
  const t = zn(e),
    i = Ql(e),
    s = e.ownerDocument.body,
    a = Bt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth),
    u = Bt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let c = -i.scrollLeft + ql(e);
  const d = -i.scrollTop;
  return (
    xn(s).direction === "rtl" && (c += Bt(t.clientWidth, s.clientWidth) - a),
    { width: a, height: u, x: c, y: d }
  );
}
const dg = 25;
function B2(e, t) {
  const i = $t(e),
    s = zn(e),
    a = i.visualViewport;
  let u = s.clientWidth,
    c = s.clientHeight,
    d = 0,
    h = 0;
  if (a) {
    (u = a.width), (c = a.height);
    const g = mf();
    (!g || (g && t === "fixed")) && ((d = a.offsetLeft), (h = a.offsetTop));
  }
  const p = ql(s);
  if (p <= 0) {
    const g = s.ownerDocument,
      v = g.body,
      w = getComputedStyle(v),
      x =
        (g.compatMode === "CSS1Compat" &&
          parseFloat(w.marginLeft) + parseFloat(w.marginRight)) ||
        0,
      E = Math.abs(s.clientWidth - v.clientWidth - x);
    E <= dg && (u -= E);
  } else p <= dg && (u += p);
  return { width: u, height: c, x: d, y: h };
}
const $2 = new Set(["absolute", "fixed"]);
function U2(e, t) {
  const i = Ei(e, !0, t === "fixed"),
    s = i.top + e.clientTop,
    a = i.left + e.clientLeft,
    u = Fn(e) ? cs(e) : In(1),
    c = e.clientWidth * u.x,
    d = e.clientHeight * u.y,
    h = a * u.x,
    p = s * u.y;
  return { width: c, height: d, x: h, y: p };
}
function fg(e, t, i) {
  let s;
  if (t === "viewport") s = B2(e, i);
  else if (t === "document") s = z2(zn(e));
  else if (vn(t)) s = U2(t, i);
  else {
    const a = nv(e);
    s = { x: t.x - a.x, y: t.y - a.y, width: t.width, height: t.height };
  }
  return Dl(s);
}
function iv(e, t) {
  const i = Wr(e);
  return i === t || !vn(i) || ws(i)
    ? !1
    : xn(i).position === "fixed" || iv(i, t);
}
function W2(e, t) {
  const i = t.get(e);
  if (i) return i;
  let s = jo(e, [], !1).filter((d) => vn(d) && Ps(d) !== "body"),
    a = null;
  const u = xn(e).position === "fixed";
  let c = u ? Wr(e) : e;
  for (; vn(c) && !ws(c); ) {
    const d = xn(c),
      h = pf(c);
    !h && d.position === "fixed" && (a = null),
      (
        u
          ? !h && !a
          : (!h && d.position === "static" && !!a && $2.has(a.position)) ||
            (Wo(c) && !h && iv(e, c))
      )
        ? (s = s.filter((g) => g !== c))
        : (a = d),
      (c = Wr(c));
  }
  return t.set(e, s), s;
}
function H2(e) {
  let { element: t, boundary: i, rootBoundary: s, strategy: a } = e;
  const c = [
      ...(i === "clippingAncestors"
        ? Yl(t)
          ? []
          : W2(t, this._c)
        : [].concat(i)),
      s,
    ],
    d = c[0],
    h = c.reduce((p, g) => {
      const v = fg(t, g, a);
      return (
        (p.top = Bt(v.top, p.top)),
        (p.right = Ur(v.right, p.right)),
        (p.bottom = Ur(v.bottom, p.bottom)),
        (p.left = Bt(v.left, p.left)),
        p
      );
    }, fg(t, d, a));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top,
  };
}
function K2(e) {
  const { width: t, height: i } = tv(e);
  return { width: t, height: i };
}
function G2(e, t, i) {
  const s = Fn(t),
    a = zn(t),
    u = i === "fixed",
    c = Ei(e, !0, u, t);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const h = In(0);
  function p() {
    h.x = ql(a);
  }
  if (s || (!s && !u))
    if (((Ps(t) !== "body" || Wo(a)) && (d = Ql(t)), s)) {
      const x = Ei(t, !0, u, t);
      (h.x = x.x + t.clientLeft), (h.y = x.y + t.clientTop);
    } else a && p();
  u && !s && a && p();
  const g = a && !s && !u ? rv(a, d) : In(0),
    v = c.left + d.scrollLeft - h.x - g.x,
    w = c.top + d.scrollTop - h.y - g.y;
  return { x: v, y: w, width: c.width, height: c.height };
}
function Xc(e) {
  return xn(e).position === "static";
}
function hg(e, t) {
  if (!Fn(e) || xn(e).position === "fixed") return null;
  if (t) return t(e);
  let i = e.offsetParent;
  return zn(e) === i && (i = i.ownerDocument.body), i;
}
function sv(e, t) {
  const i = $t(e);
  if (Yl(e)) return i;
  if (!Fn(e)) {
    let a = Wr(e);
    for (; a && !ws(a); ) {
      if (vn(a) && !Xc(a)) return a;
      a = Wr(a);
    }
    return i;
  }
  let s = hg(e, t);
  for (; s && N2(s) && Xc(s); ) s = hg(s, t);
  return s && ws(s) && Xc(s) && !pf(s) ? i : s || L2(e) || i;
}
const Y2 = async function (e) {
  const t = this.getOffsetParent || sv,
    i = this.getDimensions,
    s = await i(e.floating);
  return {
    reference: G2(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function Q2(e) {
  return xn(e).direction === "rtl";
}
const q2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _2,
  getDocumentElement: zn,
  getClippingRect: H2,
  getOffsetParent: sv,
  getElementRects: Y2,
  getClientRects: F2,
  getDimensions: K2,
  getScale: cs,
  isElement: vn,
  isRTL: Q2,
};
function ov(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function X2(e, t) {
  let i = null,
    s;
  const a = zn(e);
  function u() {
    var d;
    clearTimeout(s), (d = i) == null || d.disconnect(), (i = null);
  }
  function c(d, h) {
    d === void 0 && (d = !1), h === void 0 && (h = 1), u();
    const p = e.getBoundingClientRect(),
      { left: g, top: v, width: w, height: x } = p;
    if ((d || t(), !w || !x)) return;
    const E = yl(v),
      C = yl(a.clientWidth - (g + w)),
      T = yl(a.clientHeight - (v + x)),
      k = yl(g),
      j = {
        rootMargin: -E + "px " + -C + "px " + -T + "px " + -k + "px",
        threshold: Bt(0, Ur(1, h)) || 1,
      };
    let D = !0;
    function O(B) {
      const V = B[0].intersectionRatio;
      if (V !== h) {
        if (!D) return c();
        V
          ? c(!1, V)
          : (s = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      V === 1 && !ov(p, e.getBoundingClientRect()) && c(), (D = !1);
    }
    try {
      i = new IntersectionObserver(O, { ...j, root: a.ownerDocument });
    } catch {
      i = new IntersectionObserver(O, j);
    }
    i.observe(e);
  }
  return c(!0), u;
}
function J2(e, t, i, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: d = typeof IntersectionObserver == "function",
      animationFrame: h = !1,
    } = s,
    p = gf(e),
    g = a || u ? [...(p ? jo(p) : []), ...jo(t)] : [];
  g.forEach((k) => {
    a && k.addEventListener("scroll", i, { passive: !0 }),
      u && k.addEventListener("resize", i);
  });
  const v = p && d ? X2(p, i) : null;
  let w = -1,
    x = null;
  c &&
    ((x = new ResizeObserver((k) => {
      let [R] = k;
      R &&
        R.target === p &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(w),
        (w = requestAnimationFrame(() => {
          var j;
          (j = x) == null || j.observe(t);
        }))),
        i();
    })),
    p && !h && x.observe(p),
    x.observe(t));
  let E,
    C = h ? Ei(e) : null;
  h && T();
  function T() {
    const k = Ei(e);
    C && !ov(C, k) && i(), (C = k), (E = requestAnimationFrame(T));
  }
  return (
    i(),
    () => {
      var k;
      g.forEach((R) => {
        a && R.removeEventListener("scroll", i),
          u && R.removeEventListener("resize", i);
      }),
        v == null || v(),
        (k = x) == null || k.disconnect(),
        (x = null),
        h && cancelAnimationFrame(E);
    }
  );
}
const Z2 = C2,
  eT = T2,
  tT = w2,
  nT = P2,
  rT = b2,
  pg = x2,
  iT = E2,
  sT = (e, t, i) => {
    const s = new Map(),
      a = { platform: q2, ...i },
      u = { ...a.platform, _c: s };
    return v2(e, t, { ...a, platform: u });
  };
var oT = typeof document < "u",
  aT = function () {},
  El = oT ? S.useLayoutEffect : aT;
function Ll(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let i, s, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((i = e.length), i !== t.length)) return !1;
      for (s = i; s-- !== 0; ) if (!Ll(e[s], t[s])) return !1;
      return !0;
    }
    if (((a = Object.keys(e)), (i = a.length), i !== Object.keys(t).length))
      return !1;
    for (s = i; s-- !== 0; ) if (!{}.hasOwnProperty.call(t, a[s])) return !1;
    for (s = i; s-- !== 0; ) {
      const u = a[s];
      if (!(u === "_owner" && e.$$typeof) && !Ll(e[u], t[u])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function av(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mg(e, t) {
  const i = av(e);
  return Math.round(t * i) / i;
}
function Jc(e) {
  const t = S.useRef(e);
  return (
    El(() => {
      t.current = e;
    }),
    t
  );
}
function lT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: i = "absolute",
      middleware: s = [],
      platform: a,
      elements: { reference: u, floating: c } = {},
      transform: d = !0,
      whileElementsMounted: h,
      open: p,
    } = e,
    [g, v] = S.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [w, x] = S.useState(s);
  Ll(w, s) || x(s);
  const [E, C] = S.useState(null),
    [T, k] = S.useState(null),
    R = S.useCallback((F) => {
      F !== B.current && ((B.current = F), C(F));
    }, []),
    j = S.useCallback((F) => {
      F !== V.current && ((V.current = F), k(F));
    }, []),
    D = u || E,
    O = c || T,
    B = S.useRef(null),
    V = S.useRef(null),
    H = S.useRef(g),
    te = h != null,
    Z = Jc(h),
    de = Jc(a),
    ne = Jc(p),
    ge = S.useCallback(() => {
      if (!B.current || !V.current) return;
      const F = { placement: t, strategy: i, middleware: w };
      de.current && (F.platform = de.current),
        sT(B.current, V.current, F).then((U) => {
          const G = { ...U, isPositioned: ne.current !== !1 };
          X.current &&
            !Ll(H.current, G) &&
            ((H.current = G),
            Ul.flushSync(() => {
              v(G);
            }));
        });
    }, [w, t, i, de, ne]);
  El(() => {
    p === !1 &&
      H.current.isPositioned &&
      ((H.current.isPositioned = !1), v((F) => ({ ...F, isPositioned: !1 })));
  }, [p]);
  const X = S.useRef(!1);
  El(
    () => (
      (X.current = !0),
      () => {
        X.current = !1;
      }
    ),
    []
  ),
    El(() => {
      if ((D && (B.current = D), O && (V.current = O), D && O)) {
        if (Z.current) return Z.current(D, O, ge);
        ge();
      }
    }, [D, O, ge, Z, te]);
  const ye = S.useMemo(
      () => ({ reference: B, floating: V, setReference: R, setFloating: j }),
      [R, j]
    ),
    ce = S.useMemo(() => ({ reference: D, floating: O }), [D, O]),
    ee = S.useMemo(() => {
      const F = { position: i, left: 0, top: 0 };
      if (!ce.floating) return F;
      const U = mg(ce.floating, g.x),
        G = mg(ce.floating, g.y);
      return d
        ? {
            ...F,
            transform: "translate(" + U + "px, " + G + "px)",
            ...(av(ce.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: i, left: U, top: G };
    }, [i, d, ce.floating, g.x, g.y]);
  return S.useMemo(
    () => ({ ...g, update: ge, refs: ye, elements: ce, floatingStyles: ee }),
    [g, ge, ye, ce, ee]
  );
}
const uT = (e) => {
    function t(i) {
      return {}.hasOwnProperty.call(i, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(i) {
        const { element: s, padding: a } = typeof e == "function" ? e(i) : e;
        return s && t(s)
          ? s.current != null
            ? pg({ element: s.current, padding: a }).fn(i)
            : {}
          : s
          ? pg({ element: s, padding: a }).fn(i)
          : {};
      },
    };
  },
  cT = (e, t) => ({ ...Z2(e), options: [e, t] }),
  dT = (e, t) => ({ ...eT(e), options: [e, t] }),
  fT = (e, t) => ({ ...iT(e), options: [e, t] }),
  hT = (e, t) => ({ ...tT(e), options: [e, t] }),
  pT = (e, t) => ({ ...nT(e), options: [e, t] }),
  mT = (e, t) => ({ ...rT(e), options: [e, t] }),
  gT = (e, t) => ({ ...uT(e), options: [e, t] });
var yT = "Arrow",
  lv = S.forwardRef((e, t) => {
    const { children: i, width: s = 10, height: a = 5, ...u } = e;
    return y.jsx(Dt.svg, {
      ...u,
      ref: t,
      width: s,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? i : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
lv.displayName = yT;
var vT = lv;
function xT(e) {
  const [t, i] = S.useState(void 0);
  return (
    $r(() => {
      if (e) {
        i({ width: e.offsetWidth, height: e.offsetHeight });
        const s = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const u = a[0];
          let c, d;
          if ("borderBoxSize" in u) {
            const h = u.borderBoxSize,
              p = Array.isArray(h) ? h[0] : h;
            (c = p.inlineSize), (d = p.blockSize);
          } else (c = e.offsetWidth), (d = e.offsetHeight);
          i({ width: c, height: d });
        });
        return s.observe(e, { box: "border-box" }), () => s.unobserve(e);
      } else i(void 0);
    }, [e]),
    t
  );
}
var uv = "Popper",
  [cv, dv] = Wl(uv),
  [zA, fv] = cv(uv),
  hv = "PopperAnchor",
  pv = S.forwardRef((e, t) => {
    const { __scopePopper: i, virtualRef: s, ...a } = e,
      u = fv(hv, i),
      c = S.useRef(null),
      d = yn(t, c),
      h = S.useRef(null);
    return (
      S.useEffect(() => {
        const p = h.current;
        (h.current = (s == null ? void 0 : s.current) || c.current),
          p !== h.current && u.onAnchorChange(h.current);
      }),
      s ? null : y.jsx(Dt.div, { ...a, ref: d })
    );
  });
pv.displayName = hv;
var yf = "PopperContent",
  [wT, bT] = cv(yf),
  mv = S.forwardRef((e, t) => {
    var fe, Ee, ke, He, Ot, Bn;
    const {
        __scopePopper: i,
        side: s = "bottom",
        sideOffset: a = 0,
        align: u = "center",
        alignOffset: c = 0,
        arrowPadding: d = 0,
        avoidCollisions: h = !0,
        collisionBoundary: p = [],
        collisionPadding: g = 0,
        sticky: v = "partial",
        hideWhenDetached: w = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: E,
        ...C
      } = e,
      T = fv(yf, i),
      [k, R] = S.useState(null),
      j = yn(t, (It) => R(It)),
      [D, O] = S.useState(null),
      B = xT(D),
      V = (B == null ? void 0 : B.width) ?? 0,
      H = (B == null ? void 0 : B.height) ?? 0,
      te = s + (u !== "center" ? "-" + u : ""),
      Z =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      de = Array.isArray(p) ? p : [p],
      ne = de.length > 0,
      ge = { padding: Z, boundary: de.filter(CT), altBoundary: ne },
      {
        refs: X,
        floatingStyles: ye,
        placement: ce,
        isPositioned: ee,
        middlewareData: F,
      } = lT({
        strategy: "fixed",
        placement: te,
        whileElementsMounted: (...It) =>
          J2(...It, { animationFrame: x === "always" }),
        elements: { reference: T.anchor },
        middleware: [
          cT({ mainAxis: a + H, alignmentAxis: c }),
          h &&
            dT({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? fT() : void 0,
              ...ge,
            }),
          h && hT({ ...ge }),
          pT({
            ...ge,
            apply: ({
              elements: It,
              rects: sr,
              availableWidth: Ri,
              availableHeight: Qr,
            }) => {
              const { width: qr, height: or } = sr.reference,
                wn = It.floating.style;
              wn.setProperty("--radix-popper-available-width", `${Ri}px`),
                wn.setProperty("--radix-popper-available-height", `${Qr}px`),
                wn.setProperty("--radix-popper-anchor-width", `${qr}px`),
                wn.setProperty("--radix-popper-anchor-height", `${or}px`);
            },
          }),
          D && gT({ element: D, padding: d }),
          TT({ arrowWidth: V, arrowHeight: H }),
          w && mT({ strategy: "referenceHidden", ...ge }),
        ],
      }),
      [U, G] = vv(ce),
      M = Br(E);
    $r(() => {
      ee && (M == null || M());
    }, [ee, M]);
    const z = (fe = F.arrow) == null ? void 0 : fe.x,
      re = (Ee = F.arrow) == null ? void 0 : Ee.y,
      se = ((ke = F.arrow) == null ? void 0 : ke.centerOffset) !== 0,
      [me, Se] = S.useState();
    return (
      $r(() => {
        k && Se(window.getComputedStyle(k).zIndex);
      }, [k]),
      y.jsx("div", {
        ref: X.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ye,
          transform: ee ? ye.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (He = F.transformOrigin) == null ? void 0 : He.x,
            (Ot = F.transformOrigin) == null ? void 0 : Ot.y,
          ].join(" "),
          ...(((Bn = F.hide) == null ? void 0 : Bn.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: y.jsx(wT, {
          scope: i,
          placedSide: U,
          onArrowChange: O,
          arrowX: z,
          arrowY: re,
          shouldHideArrow: se,
          children: y.jsx(Dt.div, {
            "data-side": U,
            "data-align": G,
            ...C,
            ref: j,
            style: { ...C.style, animation: ee ? void 0 : "none" },
          }),
        }),
      })
    );
  });
mv.displayName = yf;
var gv = "PopperArrow",
  ST = { top: "bottom", right: "left", bottom: "top", left: "right" },
  yv = S.forwardRef(function (t, i) {
    const { __scopePopper: s, ...a } = t,
      u = bT(gv, s),
      c = ST[u.placedSide];
    return y.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: y.jsx(vT, {
        ...a,
        ref: i,
        style: { ...a.style, display: "block" },
      }),
    });
  });
yv.displayName = gv;
function CT(e) {
  return e !== null;
}
var TT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var T, k, R;
    const { placement: i, rects: s, middlewareData: a } = t,
      c = ((T = a.arrow) == null ? void 0 : T.centerOffset) !== 0,
      d = c ? 0 : e.arrowWidth,
      h = c ? 0 : e.arrowHeight,
      [p, g] = vv(i),
      v = { start: "0%", center: "50%", end: "100%" }[g],
      w = (((k = a.arrow) == null ? void 0 : k.x) ?? 0) + d / 2,
      x = (((R = a.arrow) == null ? void 0 : R.y) ?? 0) + h / 2;
    let E = "",
      C = "";
    return (
      p === "bottom"
        ? ((E = c ? v : `${w}px`), (C = `${-h}px`))
        : p === "top"
        ? ((E = c ? v : `${w}px`), (C = `${s.floating.height + h}px`))
        : p === "right"
        ? ((E = `${-h}px`), (C = c ? v : `${x}px`))
        : p === "left" &&
          ((E = `${s.floating.width + h}px`), (C = c ? v : `${x}px`)),
      { data: { x: E, y: C } }
    );
  },
});
function vv(e) {
  const [t, i = "center"] = e.split("-");
  return [t, i];
}
var ET = pv,
  PT = mv,
  kT = yv,
  [Xl] = Wl("Tooltip", [dv]),
  vf = dv(),
  xv = "TooltipProvider",
  jT = 700,
  gg = "tooltip.open",
  [NT, wv] = Xl(xv),
  bv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: i = jT,
        skipDelayDuration: s = 300,
        disableHoverableContent: a = !1,
        children: u,
      } = e,
      c = S.useRef(!0),
      d = S.useRef(!1),
      h = S.useRef(0);
    return (
      S.useEffect(() => {
        const p = h.current;
        return () => window.clearTimeout(p);
      }, []),
      y.jsx(NT, {
        scope: t,
        isOpenDelayedRef: c,
        delayDuration: i,
        onOpen: S.useCallback(() => {
          window.clearTimeout(h.current), (c.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(h.current),
            (h.current = window.setTimeout(() => (c.current = !0), s));
        }, [s]),
        isPointerInTransitRef: d,
        onPointerInTransitChange: S.useCallback((p) => {
          d.current = p;
        }, []),
        disableHoverableContent: a,
        children: u,
      })
    );
  };
bv.displayName = xv;
var Sv = "Tooltip",
  [BA, Jl] = Xl(Sv),
  Ed = "TooltipTrigger",
  RT = S.forwardRef((e, t) => {
    const { __scopeTooltip: i, ...s } = e,
      a = Jl(Ed, i),
      u = wv(Ed, i),
      c = vf(i),
      d = S.useRef(null),
      h = yn(t, d, a.onTriggerChange),
      p = S.useRef(!1),
      g = S.useRef(!1),
      v = S.useCallback(() => (p.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", v),
        [v]
      ),
      y.jsx(ET, {
        asChild: !0,
        ...c,
        children: y.jsx(Dt.button, {
          "aria-describedby": a.open ? a.contentId : void 0,
          "data-state": a.stateAttribute,
          ...s,
          ref: h,
          onPointerMove: et(e.onPointerMove, (w) => {
            w.pointerType !== "touch" &&
              !g.current &&
              !u.isPointerInTransitRef.current &&
              (a.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: et(e.onPointerLeave, () => {
            a.onTriggerLeave(), (g.current = !1);
          }),
          onPointerDown: et(e.onPointerDown, () => {
            a.open && a.onClose(),
              (p.current = !0),
              document.addEventListener("pointerup", v, { once: !0 });
          }),
          onFocus: et(e.onFocus, () => {
            p.current || a.onOpen();
          }),
          onBlur: et(e.onBlur, a.onClose),
          onClick: et(e.onClick, a.onClose),
        }),
      })
    );
  });
RT.displayName = Ed;
var AT = "TooltipPortal",
  [$A, MT] = Xl(AT, { forceMount: void 0 }),
  bs = "TooltipContent",
  Cv = S.forwardRef((e, t) => {
    const i = MT(bs, e.__scopeTooltip),
      { forceMount: s = i.forceMount, side: a = "top", ...u } = e,
      c = Jl(bs, e.__scopeTooltip);
    return y.jsx(sf, {
      present: s || c.open,
      children: c.disableHoverableContent
        ? y.jsx(Tv, { side: a, ...u, ref: t })
        : y.jsx(DT, { side: a, ...u, ref: t }),
    });
  }),
  DT = S.forwardRef((e, t) => {
    const i = Jl(bs, e.__scopeTooltip),
      s = wv(bs, e.__scopeTooltip),
      a = S.useRef(null),
      u = yn(t, a),
      [c, d] = S.useState(null),
      { trigger: h, onClose: p } = i,
      g = a.current,
      { onPointerInTransitChange: v } = s,
      w = S.useCallback(() => {
        d(null), v(!1);
      }, [v]),
      x = S.useCallback(
        (E, C) => {
          const T = E.currentTarget,
            k = { x: E.clientX, y: E.clientY },
            R = _T(k, T.getBoundingClientRect()),
            j = FT(k, R),
            D = zT(C.getBoundingClientRect()),
            O = $T([...j, ...D]);
          d(O), v(!0);
        },
        [v]
      );
    return (
      S.useEffect(() => () => w(), [w]),
      S.useEffect(() => {
        if (h && g) {
          const E = (T) => x(T, g),
            C = (T) => x(T, h);
          return (
            h.addEventListener("pointerleave", E),
            g.addEventListener("pointerleave", C),
            () => {
              h.removeEventListener("pointerleave", E),
                g.removeEventListener("pointerleave", C);
            }
          );
        }
      }, [h, g, x, w]),
      S.useEffect(() => {
        if (c) {
          const E = (C) => {
            const T = C.target,
              k = { x: C.clientX, y: C.clientY },
              R =
                (h == null ? void 0 : h.contains(T)) ||
                (g == null ? void 0 : g.contains(T)),
              j = !BT(k, c);
            R ? w() : j && (w(), p());
          };
          return (
            document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
          );
        }
      }, [h, g, c, p, w]),
      y.jsx(Tv, { ...e, ref: u })
    );
  }),
  [LT, OT] = Xl(Sv, { isInside: !1 }),
  IT = Hb("TooltipContent"),
  Tv = S.forwardRef((e, t) => {
    const {
        __scopeTooltip: i,
        children: s,
        "aria-label": a,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        ...d
      } = e,
      h = Jl(bs, i),
      p = vf(i),
      { onClose: g } = h;
    return (
      S.useEffect(
        () => (
          document.addEventListener(gg, g),
          () => document.removeEventListener(gg, g)
        ),
        [g]
      ),
      S.useEffect(() => {
        if (h.trigger) {
          const v = (w) => {
            const x = w.target;
            x != null && x.contains(h.trigger) && g();
          };
          return (
            window.addEventListener("scroll", v, { capture: !0 }),
            () => window.removeEventListener("scroll", v, { capture: !0 })
          );
        }
      }, [h.trigger, g]),
      y.jsx(rf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: g,
        children: y.jsxs(PT, {
          "data-state": h.stateAttribute,
          ...p,
          ...d,
          ref: t,
          style: {
            ...d.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            y.jsx(IT, { children: s }),
            y.jsx(LT, {
              scope: i,
              isInside: !0,
              children: y.jsx(gS, {
                id: h.contentId,
                role: "tooltip",
                children: a || s,
              }),
            }),
          ],
        }),
      })
    );
  });
Cv.displayName = bs;
var Ev = "TooltipArrow",
  VT = S.forwardRef((e, t) => {
    const { __scopeTooltip: i, ...s } = e,
      a = vf(i);
    return OT(Ev, i).isInside ? null : y.jsx(kT, { ...a, ...s, ref: t });
  });
VT.displayName = Ev;
function _T(e, t) {
  const i = Math.abs(t.top - e.y),
    s = Math.abs(t.bottom - e.y),
    a = Math.abs(t.right - e.x),
    u = Math.abs(t.left - e.x);
  switch (Math.min(i, s, a, u)) {
    case u:
      return "left";
    case a:
      return "right";
    case i:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function FT(e, t, i = 5) {
  const s = [];
  switch (t) {
    case "top":
      s.push({ x: e.x - i, y: e.y + i }, { x: e.x + i, y: e.y + i });
      break;
    case "bottom":
      s.push({ x: e.x - i, y: e.y - i }, { x: e.x + i, y: e.y - i });
      break;
    case "left":
      s.push({ x: e.x + i, y: e.y - i }, { x: e.x + i, y: e.y + i });
      break;
    case "right":
      s.push({ x: e.x - i, y: e.y - i }, { x: e.x - i, y: e.y + i });
      break;
  }
  return s;
}
function zT(e) {
  const { top: t, right: i, bottom: s, left: a } = e;
  return [
    { x: a, y: t },
    { x: i, y: t },
    { x: i, y: s },
    { x: a, y: s },
  ];
}
function BT(e, t) {
  const { x: i, y: s } = e;
  let a = !1;
  for (let u = 0, c = t.length - 1; u < t.length; c = u++) {
    const d = t[u],
      h = t[c],
      p = d.x,
      g = d.y,
      v = h.x,
      w = h.y;
    g > s != w > s && i < ((v - p) * (s - g)) / (w - g) + p && (a = !a);
  }
  return a;
}
function $T(e) {
  const t = e.slice();
  return (
    t.sort((i, s) =>
      i.x < s.x ? -1 : i.x > s.x ? 1 : i.y < s.y ? -1 : i.y > s.y ? 1 : 0
    ),
    UT(t)
  );
}
function UT(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    for (; t.length >= 2; ) {
      const u = t[t.length - 1],
        c = t[t.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const i = [];
  for (let s = e.length - 1; s >= 0; s--) {
    const a = e[s];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1],
        c = i[i.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) i.pop();
      else break;
    }
    i.push(a);
  }
  return (
    i.pop(),
    t.length === 1 && i.length === 1 && t[0].x === i[0].x && t[0].y === i[0].y
      ? t
      : t.concat(i)
  );
}
var WT = bv,
  Pv = Cv;
const HT = WT,
  KT = S.forwardRef(({ className: e, sideOffset: t = 4, ...i }, s) =>
    y.jsx(Pv, {
      ref: s,
      sideOffset: t,
      className: Lt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...i,
    })
  );
KT.displayName = Pv.displayName;
var Zl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  GT = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Mr,
  tf,
  Qy,
  YT =
    ((Qy = class {
      constructor() {
        Pe(this, Mr, GT);
        Pe(this, tf, !1);
      }
      setTimeoutProvider(e) {
        be(this, Mr, e);
      }
      setTimeout(e, t) {
        return $(this, Mr).setTimeout(e, t);
      }
      clearTimeout(e) {
        $(this, Mr).clearTimeout(e);
      }
      setInterval(e, t) {
        return $(this, Mr).setInterval(e, t);
      }
      clearInterval(e) {
        $(this, Mr).clearInterval(e);
      }
    }),
    (Mr = new WeakMap()),
    (tf = new WeakMap()),
    Qy),
  Pd = new YT();
function QT(e) {
  setTimeout(e, 0);
}
var eu = typeof window > "u" || "Deno" in globalThis;
function pn() {}
function qT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function XT(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function JT(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function kd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ZT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yg(e, t) {
  const {
    type: i = "all",
    exact: s,
    fetchStatus: a,
    predicate: u,
    queryKey: c,
    stale: d,
  } = e;
  if (c) {
    if (s) {
      if (t.queryHash !== xf(c, t.options)) return !1;
    } else if (!Ro(t.queryKey, c)) return !1;
  }
  if (i !== "all") {
    const h = t.isActive();
    if ((i === "active" && !h) || (i === "inactive" && h)) return !1;
  }
  return !(
    (typeof d == "boolean" && t.isStale() !== d) ||
    (a && a !== t.state.fetchStatus) ||
    (u && !u(t))
  );
}
function vg(e, t) {
  const { exact: i, status: s, predicate: a, mutationKey: u } = e;
  if (u) {
    if (!t.options.mutationKey) return !1;
    if (i) {
      if (No(t.options.mutationKey) !== No(u)) return !1;
    } else if (!Ro(t.options.mutationKey, u)) return !1;
  }
  return !((s && t.state.status !== s) || (a && !a(t)));
}
function xf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || No)(e);
}
function No(e) {
  return JSON.stringify(e, (t, i) =>
    jd(i)
      ? Object.keys(i)
          .sort()
          .reduce((s, a) => ((s[a] = i[a]), s), {})
      : i
  );
}
function Ro(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((i) => Ro(e[i], t[i]))
    : !1;
}
var eE = Object.prototype.hasOwnProperty;
function kv(e, t) {
  if (e === t) return e;
  const i = xg(e) && xg(t);
  if (!i && !(jd(e) && jd(t))) return t;
  const a = (i ? e : Object.keys(e)).length,
    u = i ? t : Object.keys(t),
    c = u.length,
    d = i ? new Array(c) : {};
  let h = 0;
  for (let p = 0; p < c; p++) {
    const g = i ? p : u[p],
      v = e[g],
      w = t[g];
    if (v === w) {
      (d[g] = v), (i ? p < a : eE.call(e, g)) && h++;
      continue;
    }
    if (
      v === null ||
      w === null ||
      typeof v != "object" ||
      typeof w != "object"
    ) {
      d[g] = w;
      continue;
    }
    const x = kv(v, w);
    (d[g] = x), x === v && h++;
  }
  return a === c && h === a ? e : d;
}
function xg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function jd(e) {
  if (!wg(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const i = t.prototype;
  return !(
    !wg(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function wg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tE(e) {
  return new Promise((t) => {
    Pd.setTimeout(t, e);
  });
}
function nE(e, t, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(e, t)
    : i.structuralSharing !== !1
    ? kv(e, t)
    : t;
}
function rE(e, t, i = 0) {
  const s = [...e, t];
  return i && s.length > i ? s.slice(1) : s;
}
function iE(e, t, i = 0) {
  const s = [t, ...e];
  return i && s.length > i ? s.slice(0, -1) : s;
}
var wf = Symbol();
function jv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === wf
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var gi,
  Dr,
  fs,
  qy,
  sE =
    ((qy = class extends Zl {
      constructor() {
        super();
        Pe(this, gi);
        Pe(this, Dr);
        Pe(this, fs);
        be(this, fs, (t) => {
          if (!eu && window.addEventListener) {
            const i = () => t();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, Dr) || this.setEventListener($(this, fs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = $(this, Dr)) == null || t.call(this), be(this, Dr, void 0));
      }
      setEventListener(t) {
        var i;
        be(this, fs, t),
          (i = $(this, Dr)) == null || i.call(this),
          be(
            this,
            Dr,
            t((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        $(this, gi) !== t && (be(this, gi, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((i) => {
          i(t);
        });
      }
      isFocused() {
        var t;
        return typeof $(this, gi) == "boolean"
          ? $(this, gi)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (gi = new WeakMap()),
    (Dr = new WeakMap()),
    (fs = new WeakMap()),
    qy),
  Nv = new sE();
function oE() {
  let e, t;
  const i = new Promise((a, u) => {
    (e = a), (t = u);
  });
  (i.status = "pending"), i.catch(() => {});
  function s(a) {
    Object.assign(i, a), delete i.resolve, delete i.reject;
  }
  return (
    (i.resolve = (a) => {
      s({ status: "fulfilled", value: a }), e(a);
    }),
    (i.reject = (a) => {
      s({ status: "rejected", reason: a }), t(a);
    }),
    i
  );
}
var aE = QT;
function lE() {
  let e = [],
    t = 0,
    i = (d) => {
      d();
    },
    s = (d) => {
      d();
    },
    a = aE;
  const u = (d) => {
      t
        ? e.push(d)
        : a(() => {
            i(d);
          });
    },
    c = () => {
      const d = e;
      (e = []),
        d.length &&
          a(() => {
            s(() => {
              d.forEach((h) => {
                i(h);
              });
            });
          });
    };
  return {
    batch: (d) => {
      let h;
      t++;
      try {
        h = d();
      } finally {
        t--, t || c();
      }
      return h;
    },
    batchCalls:
      (d) =>
      (...h) => {
        u(() => {
          d(...h);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      i = d;
    },
    setBatchNotifyFunction: (d) => {
      s = d;
    },
    setScheduler: (d) => {
      a = d;
    },
  };
}
var bt = lE(),
  hs,
  Lr,
  ps,
  Xy,
  uE =
    ((Xy = class extends Zl {
      constructor() {
        super();
        Pe(this, hs, !0);
        Pe(this, Lr);
        Pe(this, ps);
        be(this, ps, (t) => {
          if (!eu && window.addEventListener) {
            const i = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, Lr) || this.setEventListener($(this, ps));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = $(this, Lr)) == null || t.call(this), be(this, Lr, void 0));
      }
      setEventListener(t) {
        var i;
        be(this, ps, t),
          (i = $(this, Lr)) == null || i.call(this),
          be(this, Lr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        $(this, hs) !== t &&
          (be(this, hs, t),
          this.listeners.forEach((s) => {
            s(t);
          }));
      }
      isOnline() {
        return $(this, hs);
      }
    }),
    (hs = new WeakMap()),
    (Lr = new WeakMap()),
    (ps = new WeakMap()),
    Xy),
  Ol = new uE();
function cE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Rv(e) {
  return (e ?? "online") === "online" ? Ol.isOnline() : !0;
}
var Nd = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Av(e) {
  let t = !1,
    i = 0,
    s;
  const a = oE(),
    u = () => a.status !== "pending",
    c = (C) => {
      var T;
      if (!u()) {
        const k = new Nd(C);
        w(k), (T = e.onCancel) == null || T.call(e, k);
      }
    },
    d = () => {
      t = !0;
    },
    h = () => {
      t = !1;
    },
    p = () =>
      Nv.isFocused() &&
      (e.networkMode === "always" || Ol.isOnline()) &&
      e.canRun(),
    g = () => Rv(e.networkMode) && e.canRun(),
    v = (C) => {
      u() || (s == null || s(), a.resolve(C));
    },
    w = (C) => {
      u() || (s == null || s(), a.reject(C));
    },
    x = () =>
      new Promise((C) => {
        var T;
        (s = (k) => {
          (u() || p()) && C(k);
        }),
          (T = e.onPause) == null || T.call(e);
      }).then(() => {
        var C;
        (s = void 0), u() || (C = e.onContinue) == null || C.call(e);
      }),
    E = () => {
      if (u()) return;
      let C;
      const T = i === 0 ? e.initialPromise : void 0;
      try {
        C = T ?? e.fn();
      } catch (k) {
        C = Promise.reject(k);
      }
      Promise.resolve(C)
        .then(v)
        .catch((k) => {
          var B;
          if (u()) return;
          const R = e.retry ?? (eu ? 0 : 3),
            j = e.retryDelay ?? cE,
            D = typeof j == "function" ? j(i, k) : j,
            O =
              R === !0 ||
              (typeof R == "number" && i < R) ||
              (typeof R == "function" && R(i, k));
          if (t || !O) {
            w(k);
            return;
          }
          i++,
            (B = e.onFail) == null || B.call(e, i, k),
            tE(D)
              .then(() => (p() ? void 0 : x()))
              .then(() => {
                t ? w(k) : E();
              });
        });
    };
  return {
    promise: a,
    status: () => a.status,
    cancel: c,
    continue: () => (s == null || s(), a),
    cancelRetry: d,
    continueRetry: h,
    canStart: g,
    start: () => (g() ? E() : x().then(E), a),
  };
}
var yi,
  Jy,
  Mv =
    ((Jy = class {
      constructor() {
        Pe(this, yi);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          XT(this.gcTime) &&
            be(
              this,
              yi,
              Pd.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (eu ? 1 / 0 : 300 * 1e3));
      }
      clearGcTimeout() {
        $(this, yi) && (Pd.clearTimeout($(this, yi)), be(this, yi, void 0));
      }
    }),
    (yi = new WeakMap()),
    Jy),
  vi,
  ms,
  Zt,
  xi,
  it,
  zo,
  wi,
  mn,
  Jn,
  Zy,
  dE =
    ((Zy = class extends Mv {
      constructor(t) {
        super();
        Pe(this, mn);
        Pe(this, vi);
        Pe(this, ms);
        Pe(this, Zt);
        Pe(this, xi);
        Pe(this, it);
        Pe(this, zo);
        Pe(this, wi);
        be(this, wi, !1),
          be(this, zo, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          be(this, xi, t.client),
          be(this, Zt, $(this, xi).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          be(this, vi, bg(this.options)),
          (this.state = t.state ?? $(this, vi)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = $(this, it)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        if (
          ((this.options = { ...$(this, zo), ...t }),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const i = bg(this.options);
          i.data !== void 0 &&
            (this.setData(i.data, { updatedAt: i.dataUpdatedAt, manual: !0 }),
            be(this, vi, i));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          $(this, Zt).remove(this);
      }
      setData(t, i) {
        const s = nE(this.state.data, t, this.options);
        return (
          ht(this, mn, Jn).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
            manual: i == null ? void 0 : i.manual,
          }),
          s
        );
      }
      setState(t, i) {
        ht(this, mn, Jn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: i,
        });
      }
      cancel(t) {
        var s, a;
        const i = (s = $(this, it)) == null ? void 0 : s.promise;
        return (
          (a = $(this, it)) == null || a.cancel(t),
          i ? i.then(pn).catch(pn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState($(this, vi));
      }
      isActive() {
        return this.observers.some((t) => ZT(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === wf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => kd(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !JT(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var i;
        const t = this.observers.find((s) => s.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (i = $(this, it)) == null || i.continue();
      }
      onOnline() {
        var i;
        const t = this.observers.find((s) => s.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (i = $(this, it)) == null || i.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          $(this, Zt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((i) => i !== t)),
          this.observers.length ||
            ($(this, it) &&
              ($(this, wi)
                ? $(this, it).cancel({ revert: !0 })
                : $(this, it).cancelRetry()),
            this.scheduleGc()),
          $(this, Zt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ht(this, mn, Jn).call(this, { type: "invalidate" });
      }
      async fetch(t, i) {
        var h, p, g, v, w, x, E, C, T, k, R, j;
        if (
          this.state.fetchStatus !== "idle" &&
          ((h = $(this, it)) == null ? void 0 : h.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if ($(this, it))
            return $(this, it).continueRetry(), $(this, it).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const D = this.observers.find((O) => O.options.queryFn);
          D && this.setOptions(D.options);
        }
        const s = new AbortController(),
          a = (D) => {
            Object.defineProperty(D, "signal", {
              enumerable: !0,
              get: () => (be(this, wi, !0), s.signal),
            });
          },
          u = () => {
            const D = jv(this.options, i),
              B = (() => {
                const V = {
                  client: $(this, xi),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return a(V), V;
              })();
            return (
              be(this, wi, !1),
              this.options.persister ? this.options.persister(D, B, this) : D(B)
            );
          },
          d = (() => {
            const D = {
              fetchOptions: i,
              options: this.options,
              queryKey: this.queryKey,
              client: $(this, xi),
              state: this.state,
              fetchFn: u,
            };
            return a(D), D;
          })();
        (p = this.options.behavior) == null || p.onFetch(d, this),
          be(this, ms, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((g = d.fetchOptions) == null ? void 0 : g.meta)) &&
            ht(this, mn, Jn).call(this, {
              type: "fetch",
              meta: (v = d.fetchOptions) == null ? void 0 : v.meta,
            }),
          be(
            this,
            it,
            Av({
              initialPromise: i == null ? void 0 : i.initialPromise,
              fn: d.fetchFn,
              onCancel: (D) => {
                D instanceof Nd &&
                  D.revert &&
                  this.setState({ ...$(this, ms), fetchStatus: "idle" }),
                  s.abort();
              },
              onFail: (D, O) => {
                ht(this, mn, Jn).call(this, {
                  type: "failed",
                  failureCount: D,
                  error: O,
                });
              },
              onPause: () => {
                ht(this, mn, Jn).call(this, { type: "pause" });
              },
              onContinue: () => {
                ht(this, mn, Jn).call(this, { type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            })
          );
        try {
          const D = await $(this, it).start();
          if (D === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(D),
            (x = (w = $(this, Zt).config).onSuccess) == null ||
              x.call(w, D, this),
            (C = (E = $(this, Zt).config).onSettled) == null ||
              C.call(E, D, this.state.error, this),
            D
          );
        } catch (D) {
          if (D instanceof Nd) {
            if (D.silent) return $(this, it).promise;
            if (D.revert) {
              if (this.state.data === void 0) throw D;
              return this.state.data;
            }
          }
          throw (
            (ht(this, mn, Jn).call(this, { type: "error", error: D }),
            (k = (T = $(this, Zt).config).onError) == null ||
              k.call(T, D, this),
            (j = (R = $(this, Zt).config).onSettled) == null ||
              j.call(R, this.state.data, D, this),
            D)
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (vi = new WeakMap()),
    (ms = new WeakMap()),
    (Zt = new WeakMap()),
    (xi = new WeakMap()),
    (it = new WeakMap()),
    (zo = new WeakMap()),
    (wi = new WeakMap()),
    (mn = new WeakSet()),
    (Jn = function (t) {
      const i = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...fE(s.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const a = {
              ...s,
              data: t.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return be(this, ms, t.manual ? a : void 0), a;
          case "error":
            const u = t.error;
            return {
              ...s,
              error: u,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: u,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...t.state };
        }
      };
      (this.state = i(this.state)),
        bt.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            $(this, Zt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Zy);
function fE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Rv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function bg(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    i = t !== void 0,
    s = i
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function Sg(e) {
  return {
    onFetch: (t, i) => {
      var g, v, w, x, E;
      const s = t.options,
        a =
          (w =
            (v = (g = t.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : v.fetchMore) == null
            ? void 0
            : w.direction,
        u = ((x = t.state.data) == null ? void 0 : x.pages) || [],
        c = ((E = t.state.data) == null ? void 0 : E.pageParams) || [];
      let d = { pages: [], pageParams: [] },
        h = 0;
      const p = async () => {
        let C = !1;
        const T = (j) => {
            Object.defineProperty(j, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (C = !0)
                  : t.signal.addEventListener("abort", () => {
                      C = !0;
                    }),
                t.signal
              ),
            });
          },
          k = jv(t.options, t.fetchOptions),
          R = async (j, D, O) => {
            if (C) return Promise.reject();
            if (D == null && j.pages.length) return Promise.resolve(j);
            const V = (() => {
                const de = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: D,
                  direction: O ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return T(de), de;
              })(),
              H = await k(V),
              { maxPages: te } = t.options,
              Z = O ? iE : rE;
            return {
              pages: Z(j.pages, H, te),
              pageParams: Z(j.pageParams, D, te),
            };
          };
        if (a && u.length) {
          const j = a === "backward",
            D = j ? hE : Cg,
            O = { pages: u, pageParams: c },
            B = D(s, O);
          d = await R(O, B, j);
        } else {
          const j = e ?? u.length;
          do {
            const D = h === 0 ? c[0] ?? s.initialPageParam : Cg(s, d);
            if (h > 0 && D == null) break;
            (d = await R(d, D)), h++;
          } while (h < j);
        }
        return d;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var C, T;
            return (T = (C = t.options).persister) == null
              ? void 0
              : T.call(
                  C,
                  p,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  i
                );
          })
        : (t.fetchFn = p);
    },
  };
}
function Cg(e, { pages: t, pageParams: i }) {
  const s = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[s], t, i[s], i) : void 0;
}
function hE(e, { pages: t, pageParams: i }) {
  var s;
  return t.length > 0
    ? (s = e.getPreviousPageParam) == null
      ? void 0
      : s.call(e, t[0], t, i[0], i)
    : void 0;
}
var Bo,
  Mn,
  wt,
  bi,
  Dn,
  Rr,
  e0,
  pE =
    ((e0 = class extends Mv {
      constructor(t) {
        super();
        Pe(this, Dn);
        Pe(this, Bo);
        Pe(this, Mn);
        Pe(this, wt);
        Pe(this, bi);
        be(this, Bo, t.client),
          (this.mutationId = t.mutationId),
          be(this, wt, t.mutationCache),
          be(this, Mn, []),
          (this.state = t.state || mE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        $(this, Mn).includes(t) ||
          ($(this, Mn).push(t),
          this.clearGcTimeout(),
          $(this, wt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        be(
          this,
          Mn,
          $(this, Mn).filter((i) => i !== t)
        ),
          this.scheduleGc(),
          $(this, wt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        $(this, Mn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : $(this, wt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = $(this, bi)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var c, d, h, p, g, v, w, x, E, C, T, k, R, j, D, O, B, V, H, te;
        const i = () => {
            ht(this, Dn, Rr).call(this, { type: "continue" });
          },
          s = {
            client: $(this, Bo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        be(
          this,
          bi,
          Av({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, s)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (Z, de) => {
              ht(this, Dn, Rr).call(this, {
                type: "failed",
                failureCount: Z,
                error: de,
              });
            },
            onPause: () => {
              ht(this, Dn, Rr).call(this, { type: "pause" });
            },
            onContinue: i,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => $(this, wt).canRun(this),
          })
        );
        const a = this.state.status === "pending",
          u = !$(this, bi).canStart();
        try {
          if (a) i();
          else {
            ht(this, Dn, Rr).call(this, {
              type: "pending",
              variables: t,
              isPaused: u,
            }),
              await ((d = (c = $(this, wt).config).onMutate) == null
                ? void 0
                : d.call(c, t, this, s));
            const de = await ((p = (h = this.options).onMutate) == null
              ? void 0
              : p.call(h, t, s));
            de !== this.state.context &&
              ht(this, Dn, Rr).call(this, {
                type: "pending",
                context: de,
                variables: t,
                isPaused: u,
              });
          }
          const Z = await $(this, bi).start();
          return (
            await ((v = (g = $(this, wt).config).onSuccess) == null
              ? void 0
              : v.call(g, Z, t, this.state.context, this, s)),
            await ((x = (w = this.options).onSuccess) == null
              ? void 0
              : x.call(w, Z, t, this.state.context, s)),
            await ((C = (E = $(this, wt).config).onSettled) == null
              ? void 0
              : C.call(
                  E,
                  Z,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  s
                )),
            await ((k = (T = this.options).onSettled) == null
              ? void 0
              : k.call(T, Z, null, t, this.state.context, s)),
            ht(this, Dn, Rr).call(this, { type: "success", data: Z }),
            Z
          );
        } catch (Z) {
          try {
            throw (
              (await ((j = (R = $(this, wt).config).onError) == null
                ? void 0
                : j.call(R, Z, t, this.state.context, this, s)),
              await ((O = (D = this.options).onError) == null
                ? void 0
                : O.call(D, Z, t, this.state.context, s)),
              await ((V = (B = $(this, wt).config).onSettled) == null
                ? void 0
                : V.call(
                    B,
                    void 0,
                    Z,
                    this.state.variables,
                    this.state.context,
                    this,
                    s
                  )),
              await ((te = (H = this.options).onSettled) == null
                ? void 0
                : te.call(H, void 0, Z, t, this.state.context, s)),
              Z)
            );
          } finally {
            ht(this, Dn, Rr).call(this, { type: "error", error: Z });
          }
        } finally {
          $(this, wt).runNext(this);
        }
      }
    }),
    (Bo = new WeakMap()),
    (Mn = new WeakMap()),
    (wt = new WeakMap()),
    (bi = new WeakMap()),
    (Dn = new WeakSet()),
    (Rr = function (t) {
      const i = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: t.error,
              failureCount: s.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        bt.batch(() => {
          $(this, Mn).forEach((s) => {
            s.onMutationUpdate(t);
          }),
            $(this, wt).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    e0);
function mE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Zn,
  gn,
  $o,
  t0,
  gE =
    ((t0 = class extends Zl {
      constructor(t = {}) {
        super();
        Pe(this, Zn);
        Pe(this, gn);
        Pe(this, $o);
        (this.config = t),
          be(this, Zn, new Set()),
          be(this, gn, new Map()),
          be(this, $o, 0);
      }
      build(t, i, s) {
        const a = new pE({
          client: t,
          mutationCache: this,
          mutationId: ++dl(this, $o)._,
          options: t.defaultMutationOptions(i),
          state: s,
        });
        return this.add(a), a;
      }
      add(t) {
        $(this, Zn).add(t);
        const i = vl(t);
        if (typeof i == "string") {
          const s = $(this, gn).get(i);
          s ? s.push(t) : $(this, gn).set(i, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if ($(this, Zn).delete(t)) {
          const i = vl(t);
          if (typeof i == "string") {
            const s = $(this, gn).get(i);
            if (s)
              if (s.length > 1) {
                const a = s.indexOf(t);
                a !== -1 && s.splice(a, 1);
              } else s[0] === t && $(this, gn).delete(i);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const i = vl(t);
        if (typeof i == "string") {
          const s = $(this, gn).get(i),
            a =
              s == null ? void 0 : s.find((u) => u.state.status === "pending");
          return !a || a === t;
        } else return !0;
      }
      runNext(t) {
        var s;
        const i = vl(t);
        if (typeof i == "string") {
          const a =
            (s = $(this, gn).get(i)) == null
              ? void 0
              : s.find((u) => u !== t && u.state.isPaused);
          return (a == null ? void 0 : a.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        bt.batch(() => {
          $(this, Zn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            $(this, Zn).clear(),
            $(this, gn).clear();
        });
      }
      getAll() {
        return Array.from($(this, Zn));
      }
      find(t) {
        const i = { exact: !0, ...t };
        return this.getAll().find((s) => vg(i, s));
      }
      findAll(t = {}) {
        return this.getAll().filter((i) => vg(t, i));
      }
      notify(t) {
        bt.batch(() => {
          this.listeners.forEach((i) => {
            i(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((i) => i.state.isPaused);
        return bt.batch(() =>
          Promise.all(t.map((i) => i.continue().catch(pn)))
        );
      }
    }),
    (Zn = new WeakMap()),
    (gn = new WeakMap()),
    ($o = new WeakMap()),
    t0);
function vl(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
var Ln,
  n0,
  yE =
    ((n0 = class extends Zl {
      constructor(t = {}) {
        super();
        Pe(this, Ln);
        (this.config = t), be(this, Ln, new Map());
      }
      build(t, i, s) {
        const a = i.queryKey,
          u = i.queryHash ?? xf(a, i);
        let c = this.get(u);
        return (
          c ||
            ((c = new dE({
              client: t,
              queryKey: a,
              queryHash: u,
              options: t.defaultQueryOptions(i),
              state: s,
              defaultOptions: t.getQueryDefaults(a),
            })),
            this.add(c)),
          c
        );
      }
      add(t) {
        $(this, Ln).has(t.queryHash) ||
          ($(this, Ln).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const i = $(this, Ln).get(t.queryHash);
        i &&
          (t.destroy(),
          i === t && $(this, Ln).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        bt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return $(this, Ln).get(t);
      }
      getAll() {
        return [...$(this, Ln).values()];
      }
      find(t) {
        const i = { exact: !0, ...t };
        return this.getAll().find((s) => yg(i, s));
      }
      findAll(t = {}) {
        const i = this.getAll();
        return Object.keys(t).length > 0 ? i.filter((s) => yg(t, s)) : i;
      }
      notify(t) {
        bt.batch(() => {
          this.listeners.forEach((i) => {
            i(t);
          });
        });
      }
      onFocus() {
        bt.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        bt.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ln = new WeakMap()),
    n0),
  Ue,
  Or,
  Ir,
  gs,
  ys,
  Vr,
  vs,
  xs,
  r0,
  vE =
    ((r0 = class {
      constructor(e = {}) {
        Pe(this, Ue);
        Pe(this, Or);
        Pe(this, Ir);
        Pe(this, gs);
        Pe(this, ys);
        Pe(this, Vr);
        Pe(this, vs);
        Pe(this, xs);
        be(this, Ue, e.queryCache || new yE()),
          be(this, Or, e.mutationCache || new gE()),
          be(this, Ir, e.defaultOptions || {}),
          be(this, gs, new Map()),
          be(this, ys, new Map()),
          be(this, Vr, 0);
      }
      mount() {
        dl(this, Vr)._++,
          $(this, Vr) === 1 &&
            (be(
              this,
              vs,
              Nv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), $(this, Ue).onFocus());
              })
            ),
            be(
              this,
              xs,
              Ol.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), $(this, Ue).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        dl(this, Vr)._--,
          $(this, Vr) === 0 &&
            ((e = $(this, vs)) == null || e.call(this),
            be(this, vs, void 0),
            (t = $(this, xs)) == null || t.call(this),
            be(this, xs, void 0));
      }
      isFetching(e) {
        return $(this, Ue).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return $(this, Or).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var i;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (i = $(this, Ue).get(t.queryHash)) == null
          ? void 0
          : i.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          i = $(this, Ue).build(this, t),
          s = i.state.data;
        return s === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              i.isStaleByTime(kd(t.staleTime, i)) &&
              this.prefetchQuery(t),
            Promise.resolve(s));
      }
      getQueriesData(e) {
        return $(this, Ue)
          .findAll(e)
          .map(({ queryKey: t, state: i }) => {
            const s = i.data;
            return [t, s];
          });
      }
      setQueryData(e, t, i) {
        const s = this.defaultQueryOptions({ queryKey: e }),
          a = $(this, Ue).get(s.queryHash),
          u = a == null ? void 0 : a.state.data,
          c = qT(t, u);
        if (c !== void 0)
          return $(this, Ue)
            .build(this, s)
            .setData(c, { ...i, manual: !0 });
      }
      setQueriesData(e, t, i) {
        return bt.batch(() =>
          $(this, Ue)
            .findAll(e)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, t, i)])
        );
      }
      getQueryState(e) {
        var i;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (i = $(this, Ue).get(t.queryHash)) == null ? void 0 : i.state;
      }
      removeQueries(e) {
        const t = $(this, Ue);
        bt.batch(() => {
          t.findAll(e).forEach((i) => {
            t.remove(i);
          });
        });
      }
      resetQueries(e, t) {
        const i = $(this, Ue);
        return bt.batch(
          () => (
            i.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const i = { revert: !0, ...t },
          s = bt.batch(() =>
            $(this, Ue)
              .findAll(e)
              .map((a) => a.cancel(i))
          );
        return Promise.all(s).then(pn).catch(pn);
      }
      invalidateQueries(e, t = {}) {
        return bt.batch(
          () => (
            $(this, Ue)
              .findAll(e)
              .forEach((i) => {
                i.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const i = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          s = bt.batch(() =>
            $(this, Ue)
              .findAll(e)
              .filter((a) => !a.isDisabled() && !a.isStatic())
              .map((a) => {
                let u = a.fetch(void 0, i);
                return (
                  i.throwOnError || (u = u.catch(pn)),
                  a.state.fetchStatus === "paused" ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(s).then(pn);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const i = $(this, Ue).build(this, t);
        return i.isStaleByTime(kd(t.staleTime, i))
          ? i.fetch(t)
          : Promise.resolve(i.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pn).catch(pn);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Sg(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pn).catch(pn);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Sg(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ol.isOnline()
          ? $(this, Or).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return $(this, Ue);
      }
      getMutationCache() {
        return $(this, Or);
      }
      getDefaultOptions() {
        return $(this, Ir);
      }
      setDefaultOptions(e) {
        be(this, Ir, e);
      }
      setQueryDefaults(e, t) {
        $(this, gs).set(No(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...$(this, gs).values()],
          i = {};
        return (
          t.forEach((s) => {
            Ro(e, s.queryKey) && Object.assign(i, s.defaultOptions);
          }),
          i
        );
      }
      setMutationDefaults(e, t) {
        $(this, ys).set(No(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...$(this, ys).values()],
          i = {};
        return (
          t.forEach((s) => {
            Ro(e, s.mutationKey) && Object.assign(i, s.defaultOptions);
          }),
          i
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...$(this, Ir).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = xf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === wf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...$(this, Ir).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        $(this, Ue).clear(), $(this, Or).clear();
      }
    }),
    (Ue = new WeakMap()),
    (Or = new WeakMap()),
    (Ir = new WeakMap()),
    (gs = new WeakMap()),
    (ys = new WeakMap()),
    (Vr = new WeakMap()),
    (vs = new WeakMap()),
    (xs = new WeakMap()),
    r0),
  xE = S.createContext(void 0),
  wE = ({ client: e, children: t }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    y.jsx(xE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
var _r;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_r || (_r = {}));
const Tg = "popstate";
function bE(e) {
  e === void 0 && (e = {});
  function t(s, a) {
    let { pathname: u, search: c, hash: d } = s.location;
    return Rd(
      "",
      { pathname: u, search: c, hash: d },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function i(s, a) {
    return typeof a == "string" ? a : Il(a);
  }
  return CE(t, i, null, e);
}
function Xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Dv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function SE() {
  return Math.random().toString(36).substr(2, 8);
}
function Eg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rd(e, t, i, s) {
  return (
    i === void 0 && (i = null),
    Ao(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ks(t) : t,
      { state: i, key: (t && t.key) || s || SE() }
    )
  );
}
function Il(e) {
  let { pathname: t = "/", search: i = "", hash: s = "" } = e;
  return (
    i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (t += s.charAt(0) === "#" ? s : "#" + s),
    t
  );
}
function ks(e) {
  let t = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && ((t.hash = e.substr(i)), (e = e.substr(0, i)));
    let s = e.indexOf("?");
    s >= 0 && ((t.search = e.substr(s)), (e = e.substr(0, s))),
      e && (t.pathname = e);
  }
  return t;
}
function CE(e, t, i, s) {
  s === void 0 && (s = {});
  let { window: a = document.defaultView, v5Compat: u = !1 } = s,
    c = a.history,
    d = _r.Pop,
    h = null,
    p = g();
  p == null && ((p = 0), c.replaceState(Ao({}, c.state, { idx: p }), ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    d = _r.Pop;
    let T = g(),
      k = T == null ? null : T - p;
    (p = T), h && h({ action: d, location: C.location, delta: k });
  }
  function w(T, k) {
    d = _r.Push;
    let R = Rd(C.location, T, k);
    p = g() + 1;
    let j = Eg(R, p),
      D = C.createHref(R);
    try {
      c.pushState(j, "", D);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError") throw O;
      a.location.assign(D);
    }
    u && h && h({ action: d, location: C.location, delta: 1 });
  }
  function x(T, k) {
    d = _r.Replace;
    let R = Rd(C.location, T, k);
    p = g();
    let j = Eg(R, p),
      D = C.createHref(R);
    c.replaceState(j, "", D),
      u && h && h({ action: d, location: C.location, delta: 0 });
  }
  function E(T) {
    let k = a.location.origin !== "null" ? a.location.origin : a.location.href,
      R = typeof T == "string" ? T : Il(T);
    return (
      (R = R.replace(/ $/, "%20")),
      Xe(
        k,
        "No window.location.(origin|href) available to create URL for href: " +
          R
      ),
      new URL(R, k)
    );
  }
  let C = {
    get action() {
      return d;
    },
    get location() {
      return e(a, c);
    },
    listen(T) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Tg, v),
        (h = T),
        () => {
          a.removeEventListener(Tg, v), (h = null);
        }
      );
    },
    createHref(T) {
      return t(a, T);
    },
    createURL: E,
    encodeLocation(T) {
      let k = E(T);
      return { pathname: k.pathname, search: k.search, hash: k.hash };
    },
    push: w,
    replace: x,
    go(T) {
      return c.go(T);
    },
  };
  return C;
}
var Pg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pg || (Pg = {}));
function TE(e, t, i) {
  return i === void 0 && (i = "/"), EE(e, t, i);
}
function EE(e, t, i, s) {
  let a = typeof t == "string" ? ks(t) : t,
    u = bf(a.pathname || "/", i);
  if (u == null) return null;
  let c = Lv(e);
  PE(c);
  let d = null;
  for (let h = 0; d == null && h < c.length; ++h) {
    let p = _E(u);
    d = OE(c[h], p);
  }
  return d;
}
function Lv(e, t, i, s) {
  t === void 0 && (t = []), i === void 0 && (i = []), s === void 0 && (s = "");
  let a = (u, c, d) => {
    let h = {
      relativePath: d === void 0 ? u.path || "" : d,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    h.relativePath.startsWith("/") &&
      (Xe(
        h.relativePath.startsWith(s),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (h.relativePath = h.relativePath.slice(s.length)));
    let p = Fr([s, h.relativePath]),
      g = i.concat(h);
    u.children &&
      u.children.length > 0 &&
      (Xe(
        u.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      Lv(u.children, t, g, p)),
      !(u.path == null && !u.index) &&
        t.push({ path: p, score: DE(p, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, c) => {
      var d;
      if (u.path === "" || !((d = u.path) != null && d.includes("?"))) a(u, c);
      else for (let h of Ov(u.path)) a(u, c, h);
    }),
    t
  );
}
function Ov(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [i, ...s] = t,
    a = i.endsWith("?"),
    u = i.replace(/\?$/, "");
  if (s.length === 0) return a ? [u, ""] : [u];
  let c = Ov(s.join("/")),
    d = [];
  return (
    d.push(...c.map((h) => (h === "" ? u : [u, h].join("/")))),
    a && d.push(...c),
    d.map((h) => (e.startsWith("/") && h === "" ? "/" : h))
  );
}
function PE(e) {
  e.sort((t, i) =>
    t.score !== i.score
      ? i.score - t.score
      : LE(
          t.routesMeta.map((s) => s.childrenIndex),
          i.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const kE = /^:[\w-]+$/,
  jE = 3,
  NE = 2,
  RE = 1,
  AE = 10,
  ME = -2,
  kg = (e) => e === "*";
function DE(e, t) {
  let i = e.split("/"),
    s = i.length;
  return (
    i.some(kg) && (s += ME),
    t && (s += NE),
    i
      .filter((a) => !kg(a))
      .reduce((a, u) => a + (kE.test(u) ? jE : u === "" ? RE : AE), s)
  );
}
function LE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((s, a) => s === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function OE(e, t, i) {
  let { routesMeta: s } = e,
    a = {},
    u = "/",
    c = [];
  for (let d = 0; d < s.length; ++d) {
    let h = s[d],
      p = d === s.length - 1,
      g = u === "/" ? t : t.slice(u.length) || "/",
      v = IE(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
        g
      ),
      w = h.route;
    if (!v) return null;
    Object.assign(a, v.params),
      c.push({
        params: a,
        pathname: Fr([u, v.pathname]),
        pathnameBase: $E(Fr([u, v.pathnameBase])),
        route: w,
      }),
      v.pathnameBase !== "/" && (u = Fr([u, v.pathnameBase]));
  }
  return c;
}
function IE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, s] = VE(e.path, e.caseSensitive, e.end),
    a = t.match(i);
  if (!a) return null;
  let u = a[0],
    c = u.replace(/(.)\/+$/, "$1"),
    d = a.slice(1);
  return {
    params: s.reduce((p, g, v) => {
      let { paramName: w, isOptional: x } = g;
      if (w === "*") {
        let C = d[v] || "";
        c = u.slice(0, u.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const E = d[v];
      return (
        x && !E ? (p[w] = void 0) : (p[w] = (E || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: e,
  };
}
function VE(e, t, i) {
  t === void 0 && (t = !1),
    i === void 0 && (i = !0),
    Dv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let s = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, h) => (
            s.push({ paramName: d, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (a += "\\/*$")
      : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), s]
  );
}
function _E(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Dv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function bf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let i = t.endsWith("/") ? t.length - 1 : t.length,
    s = e.charAt(i);
  return s && s !== "/" ? null : e.slice(i) || "/";
}
function FE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: i,
    search: s = "",
    hash: a = "",
  } = typeof e == "string" ? ks(e) : e;
  return {
    pathname: i ? (i.startsWith("/") ? i : zE(i, t)) : t,
    search: UE(s),
    hash: WE(a),
  };
}
function zE(e, t) {
  let i = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? i.length > 1 && i.pop() : a !== "." && i.push(a);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Zc(e, t, i, s) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function BE(e) {
  return e.filter(
    (t, i) => i === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Iv(e, t) {
  let i = BE(e);
  return t
    ? i.map((s, a) => (a === i.length - 1 ? s.pathname : s.pathnameBase))
    : i.map((s) => s.pathnameBase);
}
function Vv(e, t, i, s) {
  s === void 0 && (s = !1);
  let a;
  typeof e == "string"
    ? (a = ks(e))
    : ((a = Ao({}, e)),
      Xe(
        !a.pathname || !a.pathname.includes("?"),
        Zc("?", "pathname", "search", a)
      ),
      Xe(
        !a.pathname || !a.pathname.includes("#"),
        Zc("#", "pathname", "hash", a)
      ),
      Xe(!a.search || !a.search.includes("#"), Zc("#", "search", "hash", a)));
  let u = e === "" || a.pathname === "",
    c = u ? "/" : a.pathname,
    d;
  if (c == null) d = i;
  else {
    let v = t.length - 1;
    if (!s && c.startsWith("..")) {
      let w = c.split("/");
      for (; w[0] === ".."; ) w.shift(), (v -= 1);
      a.pathname = w.join("/");
    }
    d = v >= 0 ? t[v] : "/";
  }
  let h = FE(a, d),
    p = c && c !== "/" && c.endsWith("/"),
    g = (u || c === ".") && i.endsWith("/");
  return !h.pathname.endsWith("/") && (p || g) && (h.pathname += "/"), h;
}
const Fr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  $E = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  UE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  WE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function HE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _v = ["post", "put", "patch", "delete"];
new Set(_v);
const KE = ["get", ..._v];
new Set(KE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Mo() {
  return (
    (Mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    Mo.apply(this, arguments)
  );
}
const Sf = S.createContext(null),
  GE = S.createContext(null),
  ki = S.createContext(null),
  tu = S.createContext(null),
  ji = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fv = S.createContext(null);
function YE(e, t) {
  let { relative: i } = t === void 0 ? {} : t;
  Ho() || Xe(!1);
  let { basename: s, navigator: a } = S.useContext(ki),
    { hash: u, pathname: c, search: d } = $v(e, { relative: i }),
    h = c;
  return (
    s !== "/" && (h = c === "/" ? s : Fr([s, c])),
    a.createHref({ pathname: h, search: d, hash: u })
  );
}
function Ho() {
  return S.useContext(tu) != null;
}
function Ko() {
  return Ho() || Xe(!1), S.useContext(tu).location;
}
function zv(e) {
  S.useContext(ki).static || S.useLayoutEffect(e);
}
function Bv() {
  let { isDataRoute: e } = S.useContext(ji);
  return e ? aP() : QE();
}
function QE() {
  Ho() || Xe(!1);
  let e = S.useContext(Sf),
    { basename: t, future: i, navigator: s } = S.useContext(ki),
    { matches: a } = S.useContext(ji),
    { pathname: u } = Ko(),
    c = JSON.stringify(Iv(a, i.v7_relativeSplatPath)),
    d = S.useRef(!1);
  return (
    zv(() => {
      d.current = !0;
    }),
    S.useCallback(
      function (p, g) {
        if ((g === void 0 && (g = {}), !d.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let v = Vv(p, JSON.parse(c), u, g.relative === "path");
        e == null &&
          t !== "/" &&
          (v.pathname = v.pathname === "/" ? t : Fr([t, v.pathname])),
          (g.replace ? s.replace : s.push)(v, g.state, g);
      },
      [t, s, c, u, e]
    )
  );
}
function $v(e, t) {
  let { relative: i } = t === void 0 ? {} : t,
    { future: s } = S.useContext(ki),
    { matches: a } = S.useContext(ji),
    { pathname: u } = Ko(),
    c = JSON.stringify(Iv(a, s.v7_relativeSplatPath));
  return S.useMemo(() => Vv(e, JSON.parse(c), u, i === "path"), [e, c, u, i]);
}
function qE(e, t) {
  return XE(e, t);
}
function XE(e, t, i, s) {
  Ho() || Xe(!1);
  let { navigator: a } = S.useContext(ki),
    { matches: u } = S.useContext(ji),
    c = u[u.length - 1],
    d = c ? c.params : {};
  c && c.pathname;
  let h = c ? c.pathnameBase : "/";
  c && c.route;
  let p = Ko(),
    g;
  if (t) {
    var v;
    let T = typeof t == "string" ? ks(t) : t;
    h === "/" || ((v = T.pathname) != null && v.startsWith(h)) || Xe(!1),
      (g = T);
  } else g = p;
  let w = g.pathname || "/",
    x = w;
  if (h !== "/") {
    let T = h.replace(/^\//, "").split("/");
    x = "/" + w.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let E = TE(e, { pathname: x }),
    C = nP(
      E &&
        E.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, d, T.params),
            pathname: Fr([
              h,
              a.encodeLocation
                ? a.encodeLocation(T.pathname).pathname
                : T.pathname,
            ]),
            pathnameBase:
              T.pathnameBase === "/"
                ? h
                : Fr([
                    h,
                    a.encodeLocation
                      ? a.encodeLocation(T.pathnameBase).pathname
                      : T.pathnameBase,
                  ]),
          })
        ),
      u,
      i,
      s
    );
  return t && C
    ? S.createElement(
        tu.Provider,
        {
          value: {
            location: Mo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: _r.Pop,
          },
        },
        C
      )
    : C;
}
function JE() {
  let e = oP(),
    t = HE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    i = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    i ? S.createElement("pre", { style: a }, i) : null,
    null
  );
}
const ZE = S.createElement(JE, null);
class eP extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, i) {
    return i.location !== t.location ||
      (i.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : i.error,
          location: i.location,
          revalidation: t.revalidation || i.revalidation,
        };
  }
  componentDidCatch(t, i) {
    console.error(
      "React Router caught the following error during render",
      t,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          ji.Provider,
          { value: this.props.routeContext },
          S.createElement(Fv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function tP(e) {
  let { routeContext: t, match: i, children: s } = e,
    a = S.useContext(Sf);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = i.route.id),
    S.createElement(ji.Provider, { value: t }, s)
  );
}
function nP(e, t, i, s) {
  var a;
  if (
    (t === void 0 && (t = []),
    i === void 0 && (i = null),
    s === void 0 && (s = null),
    e == null)
  ) {
    var u;
    if (!i) return null;
    if (i.errors) e = i.matches;
    else if (
      (u = s) != null &&
      u.v7_partialHydration &&
      t.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      e = i.matches;
    else return null;
  }
  let c = e,
    d = (a = i) == null ? void 0 : a.errors;
  if (d != null) {
    let g = c.findIndex(
      (v) => v.route.id && (d == null ? void 0 : d[v.route.id]) !== void 0
    );
    g >= 0 || Xe(!1), (c = c.slice(0, Math.min(c.length, g + 1)));
  }
  let h = !1,
    p = -1;
  if (i && s && s.v7_partialHydration)
    for (let g = 0; g < c.length; g++) {
      let v = c[g];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = g),
        v.route.id)
      ) {
        let { loaderData: w, errors: x } = i,
          E =
            v.route.loader &&
            w[v.route.id] === void 0 &&
            (!x || x[v.route.id] === void 0);
        if (v.route.lazy || E) {
          (h = !0), p >= 0 ? (c = c.slice(0, p + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((g, v, w) => {
    let x,
      E = !1,
      C = null,
      T = null;
    i &&
      ((x = d && v.route.id ? d[v.route.id] : void 0),
      (C = v.route.errorElement || ZE),
      h &&
        (p < 0 && w === 0
          ? (lP("route-fallback"), (E = !0), (T = null))
          : p === w &&
            ((E = !0), (T = v.route.hydrateFallbackElement || null))));
    let k = t.concat(c.slice(0, w + 1)),
      R = () => {
        let j;
        return (
          x
            ? (j = C)
            : E
            ? (j = T)
            : v.route.Component
            ? (j = S.createElement(v.route.Component, null))
            : v.route.element
            ? (j = v.route.element)
            : (j = g),
          S.createElement(tP, {
            match: v,
            routeContext: { outlet: g, matches: k, isDataRoute: i != null },
            children: j,
          })
        );
      };
    return i && (v.route.ErrorBoundary || v.route.errorElement || w === 0)
      ? S.createElement(eP, {
          location: i.location,
          revalidation: i.revalidation,
          component: C,
          error: x,
          children: R(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : R();
  }, null);
}
var Uv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Uv || {}),
  Wv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Wv || {});
function rP(e) {
  let t = S.useContext(Sf);
  return t || Xe(!1), t;
}
function iP(e) {
  let t = S.useContext(GE);
  return t || Xe(!1), t;
}
function sP(e) {
  let t = S.useContext(ji);
  return t || Xe(!1), t;
}
function Hv(e) {
  let t = sP(),
    i = t.matches[t.matches.length - 1];
  return i.route.id || Xe(!1), i.route.id;
}
function oP() {
  var e;
  let t = S.useContext(Fv),
    i = iP(),
    s = Hv();
  return t !== void 0 ? t : (e = i.errors) == null ? void 0 : e[s];
}
function aP() {
  let { router: e } = rP(Uv.UseNavigateStable),
    t = Hv(Wv.UseNavigateStable),
    i = S.useRef(!1);
  return (
    zv(() => {
      i.current = !0;
    }),
    S.useCallback(
      function (a, u) {
        u === void 0 && (u = {}),
          i.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, Mo({ fromRouteId: t }, u)));
      },
      [e, t]
    )
  );
}
const jg = {};
function lP(e, t, i) {
  jg[e] || (jg[e] = !0);
}
function uP(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Xt(e) {
  Xe(!1);
}
function cP(e) {
  let {
    basename: t = "/",
    children: i = null,
    location: s,
    navigationType: a = _r.Pop,
    navigator: u,
    static: c = !1,
    future: d,
  } = e;
  Ho() && Xe(!1);
  let h = t.replace(/^\/*/, "/"),
    p = S.useMemo(
      () => ({
        basename: h,
        navigator: u,
        static: c,
        future: Mo({ v7_relativeSplatPath: !1 }, d),
      }),
      [h, d, u, c]
    );
  typeof s == "string" && (s = ks(s));
  let {
      pathname: g = "/",
      search: v = "",
      hash: w = "",
      state: x = null,
      key: E = "default",
    } = s,
    C = S.useMemo(() => {
      let T = bf(g, h);
      return T == null
        ? null
        : {
            location: { pathname: T, search: v, hash: w, state: x, key: E },
            navigationType: a,
          };
    }, [h, g, v, w, x, E, a]);
  return C == null
    ? null
    : S.createElement(
        ki.Provider,
        { value: p },
        S.createElement(tu.Provider, { children: i, value: C })
      );
}
function dP(e) {
  let { children: t, location: i } = e;
  return qE(Ad(t), i);
}
new Promise(() => {});
function Ad(e, t) {
  t === void 0 && (t = []);
  let i = [];
  return (
    S.Children.forEach(e, (s, a) => {
      if (!S.isValidElement(s)) return;
      let u = [...t, a];
      if (s.type === S.Fragment) {
        i.push.apply(i, Ad(s.props.children, u));
        return;
      }
      s.type !== Xt && Xe(!1), !s.props.index || !s.props.children || Xe(!1);
      let c = {
        id: s.props.id || u.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (c.children = Ad(s.props.children, u)), i.push(c);
    }),
    i
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Md() {
  return (
    (Md = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    Md.apply(this, arguments)
  );
}
function fP(e, t) {
  if (e == null) return {};
  var i = {},
    s = Object.keys(e),
    a,
    u;
  for (u = 0; u < s.length; u++)
    (a = s[u]), !(t.indexOf(a) >= 0) && (i[a] = e[a]);
  return i;
}
function hP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function pP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hP(e);
}
function Dd(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, i) => {
            let s = e[i];
            return t.concat(Array.isArray(s) ? s.map((a) => [i, a]) : [[i, s]]);
          }, [])
    )
  );
}
function mP(e, t) {
  let i = Dd(e);
  return (
    t &&
      t.forEach((s, a) => {
        i.has(a) ||
          t.getAll(a).forEach((u) => {
            i.append(a, u);
          });
      }),
    i
  );
}
const gP = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  yP = "6";
try {
  window.__reactRouterVersion = yP;
} catch {}
const vP = "startTransition",
  Ng = o0[vP];
function xP(e) {
  let { basename: t, children: i, future: s, window: a } = e,
    u = S.useRef();
  u.current == null && (u.current = bE({ window: a, v5Compat: !0 }));
  let c = u.current,
    [d, h] = S.useState({ action: c.action, location: c.location }),
    { v7_startTransition: p } = s || {},
    g = S.useCallback(
      (v) => {
        p && Ng ? Ng(() => h(v)) : h(v);
      },
      [h, p]
    );
  return (
    S.useLayoutEffect(() => c.listen(g), [c, g]),
    S.useEffect(() => uP(s), [s]),
    S.createElement(cP, {
      basename: t,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      future: s,
    })
  );
}
const wP =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  bP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zr = S.forwardRef(function (t, i) {
    let {
        onClick: s,
        relative: a,
        reloadDocument: u,
        replace: c,
        state: d,
        target: h,
        to: p,
        preventScrollReset: g,
        viewTransition: v,
      } = t,
      w = fP(t, gP),
      { basename: x } = S.useContext(ki),
      E,
      C = !1;
    if (typeof p == "string" && bP.test(p) && ((E = p), wP))
      try {
        let j = new URL(window.location.href),
          D = p.startsWith("//") ? new URL(j.protocol + p) : new URL(p),
          O = bf(D.pathname, x);
        D.origin === j.origin && O != null
          ? (p = O + D.search + D.hash)
          : (C = !0);
      } catch {}
    let T = YE(p, { relative: a }),
      k = SP(p, {
        replace: c,
        state: d,
        target: h,
        preventScrollReset: g,
        relative: a,
        viewTransition: v,
      });
    function R(j) {
      s && s(j), j.defaultPrevented || k(j);
    }
    return S.createElement(
      "a",
      Md({}, w, { href: E || T, onClick: C || u ? s : R, ref: i, target: h })
    );
  });
var Rg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Rg || (Rg = {}));
var Ag;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ag || (Ag = {}));
function SP(e, t) {
  let {
      target: i,
      replace: s,
      state: a,
      preventScrollReset: u,
      relative: c,
      viewTransition: d,
    } = t === void 0 ? {} : t,
    h = Bv(),
    p = Ko(),
    g = $v(e, { relative: c });
  return S.useCallback(
    (v) => {
      if (pP(v, i)) {
        v.preventDefault();
        let w = s !== void 0 ? s : Il(p) === Il(g);
        h(e, {
          replace: w,
          state: a,
          preventScrollReset: u,
          relative: c,
          viewTransition: d,
        });
      }
    },
    [p, h, g, s, a, i, e, u, c, d]
  );
}
function CP(e) {
  let t = S.useRef(Dd(e)),
    i = S.useRef(!1),
    s = Ko(),
    a = S.useMemo(() => mP(s.search, i.current ? null : t.current), [s.search]),
    u = Bv(),
    c = S.useCallback(
      (d, h) => {
        const p = Dd(typeof d == "function" ? d(a) : d);
        (i.current = !0), u("?" + p, h);
      },
      [u, a]
    );
  return [a, c];
}
const Cf = S.createContext({});
function Tf(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ef = typeof window < "u",
  Kv = Ef ? S.useLayoutEffect : S.useEffect,
  nu = S.createContext(null);
function Pf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function kf(e, t) {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}
const nr = (e, t, i) => (i > t ? t : i < e ? e : i);
let jf = () => {};
const rr = {},
  Gv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Yv(e) {
  return typeof e == "object" && e !== null;
}
const Qv = (e) => /^0[^.\s]+$/u.test(e);
function Nf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const tn = (e) => e,
  TP = (e, t) => (i) => t(e(i)),
  Go = (...e) => e.reduce(TP),
  Do = (e, t, i) => {
    const s = t - e;
    return s === 0 ? 1 : (i - e) / s;
  };
class Rf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pf(this.subscriptions, t), () => kf(this.subscriptions, t);
  }
  notify(t, i, s) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1) this.subscriptions[0](t, i, s);
      else
        for (let u = 0; u < a; u++) {
          const c = this.subscriptions[u];
          c && c(t, i, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Vn = (e) => e * 1e3,
  en = (e) => e / 1e3;
function qv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Xv = (e, t, i) =>
    (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e,
  EP = 1e-7,
  PP = 12;
function kP(e, t, i, s, a) {
  let u,
    c,
    d = 0;
  do (c = t + (i - t) / 2), (u = Xv(c, s, a) - e), u > 0 ? (i = c) : (t = c);
  while (Math.abs(u) > EP && ++d < PP);
  return c;
}
function Yo(e, t, i, s) {
  if (e === t && i === s) return tn;
  const a = (u) => kP(u, 0, 1, e, i);
  return (u) => (u === 0 || u === 1 ? u : Xv(a(u), t, s));
}
const Jv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Zv = (e) => (t) => 1 - e(1 - t),
  ex = Yo(0.33, 1.53, 0.69, 0.99),
  Af = Zv(ex),
  tx = Jv(Af),
  nx = (e) =>
    (e *= 2) < 1 ? 0.5 * Af(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Mf = (e) => 1 - Math.sin(Math.acos(e)),
  rx = Zv(Mf),
  ix = Jv(Mf),
  jP = Yo(0.42, 0, 1, 1),
  NP = Yo(0, 0, 0.58, 1),
  sx = Yo(0.42, 0, 0.58, 1),
  RP = (e) => Array.isArray(e) && typeof e[0] != "number",
  ox = (e) => Array.isArray(e) && typeof e[0] == "number",
  AP = {
    linear: tn,
    easeIn: jP,
    easeInOut: sx,
    easeOut: NP,
    circIn: Mf,
    circInOut: ix,
    circOut: rx,
    backIn: Af,
    backInOut: tx,
    backOut: ex,
    anticipate: nx,
  },
  MP = (e) => typeof e == "string",
  Mg = (e) => {
    if (ox(e)) {
      jf(e.length === 4);
      const [t, i, s, a] = e;
      return Yo(t, i, s, a);
    } else if (MP(e)) return AP[e];
    return e;
  },
  xl = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function DP(e, t) {
  let i = new Set(),
    s = new Set(),
    a = !1,
    u = !1;
  const c = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(g) {
    c.has(g) && (p.schedule(g), e()), g(d);
  }
  const p = {
    schedule: (g, v = !1, w = !1) => {
      const E = w && a ? i : s;
      return v && c.add(g), E.has(g) || E.add(g), g;
    },
    cancel: (g) => {
      s.delete(g), c.delete(g);
    },
    process: (g) => {
      if (((d = g), a)) {
        u = !0;
        return;
      }
      (a = !0),
        ([i, s] = [s, i]),
        i.forEach(h),
        i.clear(),
        (a = !1),
        u && ((u = !1), p.process(g));
    },
  };
  return p;
}
const LP = 40;
function ax(e, t) {
  let i = !1,
    s = !0;
  const a = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (i = !0),
    c = xl.reduce((j, D) => ((j[D] = DP(u)), j), {}),
    {
      setup: d,
      read: h,
      resolveKeyframes: p,
      preUpdate: g,
      update: v,
      preRender: w,
      render: x,
      postRender: E,
    } = c,
    C = () => {
      const j = rr.useManualTiming ? a.timestamp : performance.now();
      (i = !1),
        rr.useManualTiming ||
          (a.delta = s ? 1e3 / 60 : Math.max(Math.min(j - a.timestamp, LP), 1)),
        (a.timestamp = j),
        (a.isProcessing = !0),
        d.process(a),
        h.process(a),
        p.process(a),
        g.process(a),
        v.process(a),
        w.process(a),
        x.process(a),
        E.process(a),
        (a.isProcessing = !1),
        i && t && ((s = !1), e(C));
    },
    T = () => {
      (i = !0), (s = !0), a.isProcessing || e(C);
    };
  return {
    schedule: xl.reduce((j, D) => {
      const O = c[D];
      return (j[D] = (B, V = !1, H = !1) => (i || T(), O.schedule(B, V, H))), j;
    }, {}),
    cancel: (j) => {
      for (let D = 0; D < xl.length; D++) c[xl[D]].cancel(j);
    },
    state: a,
    steps: c,
  };
}
const {
  schedule: _e,
  cancel: Hr,
  state: lt,
  steps: ed,
} = ax(typeof requestAnimationFrame < "u" ? requestAnimationFrame : tn, !0);
let Pl;
function OP() {
  Pl = void 0;
}
const Mt = {
    now: () => (
      Pl === void 0 &&
        Mt.set(
          lt.isProcessing || rr.useManualTiming
            ? lt.timestamp
            : performance.now()
        ),
      Pl
    ),
    set: (e) => {
      (Pl = e), queueMicrotask(OP);
    },
  },
  lx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Df = lx("--"),
  IP = lx("var(--"),
  Lf = (e) => (IP(e) ? VP.test(e.split("/*")[0].trim()) : !1),
  VP =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  js = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Lo = { ...js, transform: (e) => nr(0, 1, e) },
  wl = { ...js, default: 1 },
  So = (e) => Math.round(e * 1e5) / 1e5,
  Of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _P(e) {
  return e == null;
}
const FP =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  If = (e, t) => (i) =>
    !!(
      (typeof i == "string" && FP.test(i) && i.startsWith(e)) ||
      (t && !_P(i) && Object.prototype.hasOwnProperty.call(i, t))
    ),
  ux = (e, t, i) => (s) => {
    if (typeof s != "string") return s;
    const [a, u, c, d] = s.match(Of);
    return {
      [e]: parseFloat(a),
      [t]: parseFloat(u),
      [i]: parseFloat(c),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  zP = (e) => nr(0, 255, e),
  td = { ...js, transform: (e) => Math.round(zP(e)) },
  pi = {
    test: If("rgb", "red"),
    parse: ux("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: i, alpha: s = 1 }) =>
      "rgba(" +
      td.transform(e) +
      ", " +
      td.transform(t) +
      ", " +
      td.transform(i) +
      ", " +
      So(Lo.transform(s)) +
      ")",
  };
function BP(e) {
  let t = "",
    i = "",
    s = "",
    a = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (i = e.substring(3, 5)),
        (s = e.substring(5, 7)),
        (a = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (i = e.substring(2, 3)),
        (s = e.substring(3, 4)),
        (a = e.substring(4, 5)),
        (t += t),
        (i += i),
        (s += s),
        (a += a)),
    {
      red: parseInt(t, 16),
      green: parseInt(i, 16),
      blue: parseInt(s, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1,
    }
  );
}
const Ld = { test: If("#"), parse: BP, transform: pi.transform },
  Qo = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ar = Qo("deg"),
  _n = Qo("%"),
  ve = Qo("px"),
  $P = Qo("vh"),
  UP = Qo("vw"),
  Dg = {
    ..._n,
    parse: (e) => _n.parse(e) / 100,
    transform: (e) => _n.transform(e * 100),
  },
  is = {
    test: If("hsl", "hue"),
    parse: ux("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: i, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      _n.transform(So(t)) +
      ", " +
      _n.transform(So(i)) +
      ", " +
      So(Lo.transform(s)) +
      ")",
  },
  qe = {
    test: (e) => pi.test(e) || Ld.test(e) || is.test(e),
    parse: (e) =>
      pi.test(e) ? pi.parse(e) : is.test(e) ? is.parse(e) : Ld.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? pi.transform(e)
        : is.transform(e),
    getAnimatableNone: (e) => {
      const t = qe.parse(e);
      return (t.alpha = 0), qe.transform(t);
    },
  },
  WP =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function HP(e) {
  var t, i;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Of)) == null ? void 0 : t.length) || 0) +
      (((i = e.match(WP)) == null ? void 0 : i.length) || 0) >
      0
  );
}
const cx = "number",
  dx = "color",
  KP = "var",
  GP = "var(",
  Lg = "${}",
  YP =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Oo(e) {
  const t = e.toString(),
    i = [],
    s = { color: [], number: [], var: [] },
    a = [];
  let u = 0;
  const d = t
    .replace(
      YP,
      (h) => (
        qe.test(h)
          ? (s.color.push(u), a.push(dx), i.push(qe.parse(h)))
          : h.startsWith(GP)
          ? (s.var.push(u), a.push(KP), i.push(h))
          : (s.number.push(u), a.push(cx), i.push(parseFloat(h))),
        ++u,
        Lg
      )
    )
    .split(Lg);
  return { values: i, split: d, indexes: s, types: a };
}
function fx(e) {
  return Oo(e).values;
}
function hx(e) {
  const { split: t, types: i } = Oo(e),
    s = t.length;
  return (a) => {
    let u = "";
    for (let c = 0; c < s; c++)
      if (((u += t[c]), a[c] !== void 0)) {
        const d = i[c];
        d === cx
          ? (u += So(a[c]))
          : d === dx
          ? (u += qe.transform(a[c]))
          : (u += a[c]);
      }
    return u;
  };
}
const QP = (e) =>
  typeof e == "number" ? 0 : qe.test(e) ? qe.getAnimatableNone(e) : e;
function qP(e) {
  const t = fx(e);
  return hx(e)(t.map(QP));
}
const Kr = {
  test: HP,
  parse: fx,
  createTransformer: hx,
  getAnimatableNone: qP,
};
function nd(e, t, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? e + (t - e) * 6 * i
      : i < 1 / 2
      ? t
      : i < 2 / 3
      ? e + (t - e) * (2 / 3 - i) * 6
      : e
  );
}
function XP({ hue: e, saturation: t, lightness: i, alpha: s }) {
  (e /= 360), (t /= 100), (i /= 100);
  let a = 0,
    u = 0,
    c = 0;
  if (!t) a = u = c = i;
  else {
    const d = i < 0.5 ? i * (1 + t) : i + t - i * t,
      h = 2 * i - d;
    (a = nd(h, d, e + 1 / 3)), (u = nd(h, d, e)), (c = nd(h, d, e - 1 / 3));
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: s,
  };
}
function Vl(e, t) {
  return (i) => (i > 0 ? t : e);
}
const Be = (e, t, i) => e + (t - e) * i,
  rd = (e, t, i) => {
    const s = e * e,
      a = i * (t * t - s) + s;
    return a < 0 ? 0 : Math.sqrt(a);
  },
  JP = [Ld, pi, is],
  ZP = (e) => JP.find((t) => t.test(e));
function Og(e) {
  const t = ZP(e);
  if (!t) return !1;
  let i = t.parse(e);
  return t === is && (i = XP(i)), i;
}
const Ig = (e, t) => {
    const i = Og(e),
      s = Og(t);
    if (!i || !s) return Vl(e, t);
    const a = { ...i };
    return (u) => (
      (a.red = rd(i.red, s.red, u)),
      (a.green = rd(i.green, s.green, u)),
      (a.blue = rd(i.blue, s.blue, u)),
      (a.alpha = Be(i.alpha, s.alpha, u)),
      pi.transform(a)
    );
  },
  Od = new Set(["none", "hidden"]);
function ek(e, t) {
  return Od.has(e) ? (i) => (i <= 0 ? e : t) : (i) => (i >= 1 ? t : e);
}
function tk(e, t) {
  return (i) => Be(e, t, i);
}
function Vf(e) {
  return typeof e == "number"
    ? tk
    : typeof e == "string"
    ? Lf(e)
      ? Vl
      : qe.test(e)
      ? Ig
      : ik
    : Array.isArray(e)
    ? px
    : typeof e == "object"
    ? qe.test(e)
      ? Ig
      : nk
    : Vl;
}
function px(e, t) {
  const i = [...e],
    s = i.length,
    a = e.map((u, c) => Vf(u)(u, t[c]));
  return (u) => {
    for (let c = 0; c < s; c++) i[c] = a[c](u);
    return i;
  };
}
function nk(e, t) {
  const i = { ...e, ...t },
    s = {};
  for (const a in i)
    e[a] !== void 0 && t[a] !== void 0 && (s[a] = Vf(e[a])(e[a], t[a]));
  return (a) => {
    for (const u in s) i[u] = s[u](a);
    return i;
  };
}
function rk(e, t) {
  const i = [],
    s = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const u = t.types[a],
      c = e.indexes[u][s[u]],
      d = e.values[c] ?? 0;
    (i[a] = d), s[u]++;
  }
  return i;
}
const ik = (e, t) => {
  const i = Kr.createTransformer(t),
    s = Oo(e),
    a = Oo(t);
  return s.indexes.var.length === a.indexes.var.length &&
    s.indexes.color.length === a.indexes.color.length &&
    s.indexes.number.length >= a.indexes.number.length
    ? (Od.has(e) && !a.values.length) || (Od.has(t) && !s.values.length)
      ? ek(e, t)
      : Go(px(rk(s, a), a.values), i)
    : Vl(e, t);
};
function mx(e, t, i) {
  return typeof e == "number" && typeof t == "number" && typeof i == "number"
    ? Be(e, t, i)
    : Vf(e)(e, t);
}
const sk = (e) => {
    const t = ({ timestamp: i }) => e(i);
    return {
      start: (i = !0) => _e.update(t, i),
      stop: () => Hr(t),
      now: () => (lt.isProcessing ? lt.timestamp : Mt.now()),
    };
  },
  gx = (e, t, i = 10) => {
    let s = "";
    const a = Math.max(Math.round(t / i), 2);
    for (let u = 0; u < a; u++)
      s += Math.round(e(u / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  _l = 2e4;
function _f(e) {
  let t = 0;
  const i = 50;
  let s = e.next(t);
  for (; !s.done && t < _l; ) (t += i), (s = e.next(t));
  return t >= _l ? 1 / 0 : t;
}
function ok(e, t = 100, i) {
  const s = i({ ...e, keyframes: [0, t] }),
    a = Math.min(_f(s), _l);
  return {
    type: "keyframes",
    ease: (u) => s.next(a * u).value / t,
    duration: en(a),
  };
}
const ak = 5;
function yx(e, t, i) {
  const s = Math.max(t - ak, 0);
  return qv(i - e(s), t - s);
}
const We = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  id = 0.001;
function lk({
  duration: e = We.duration,
  bounce: t = We.bounce,
  velocity: i = We.velocity,
  mass: s = We.mass,
}) {
  let a,
    u,
    c = 1 - t;
  (c = nr(We.minDamping, We.maxDamping, c)),
    (e = nr(We.minDuration, We.maxDuration, en(e))),
    c < 1
      ? ((a = (p) => {
          const g = p * c,
            v = g * e,
            w = g - i,
            x = Id(p, c),
            E = Math.exp(-v);
          return id - (w / x) * E;
        }),
        (u = (p) => {
          const v = p * c * e,
            w = v * i + i,
            x = Math.pow(c, 2) * Math.pow(p, 2) * e,
            E = Math.exp(-v),
            C = Id(Math.pow(p, 2), c);
          return ((-a(p) + id > 0 ? -1 : 1) * ((w - x) * E)) / C;
        }))
      : ((a = (p) => {
          const g = Math.exp(-p * e),
            v = (p - i) * e + 1;
          return -id + g * v;
        }),
        (u = (p) => {
          const g = Math.exp(-p * e),
            v = (i - p) * (e * e);
          return g * v;
        }));
  const d = 5 / e,
    h = ck(a, u, d);
  if (((e = Vn(e)), isNaN(h)))
    return { stiffness: We.stiffness, damping: We.damping, duration: e };
  {
    const p = Math.pow(h, 2) * s;
    return { stiffness: p, damping: c * 2 * Math.sqrt(s * p), duration: e };
  }
}
const uk = 12;
function ck(e, t, i) {
  let s = i;
  for (let a = 1; a < uk; a++) s = s - e(s) / t(s);
  return s;
}
function Id(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const dk = ["duration", "bounce"],
  fk = ["stiffness", "damping", "mass"];
function Vg(e, t) {
  return t.some((i) => e[i] !== void 0);
}
function hk(e) {
  let t = {
    velocity: We.velocity,
    stiffness: We.stiffness,
    damping: We.damping,
    mass: We.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Vg(e, fk) && Vg(e, dk))
    if (e.visualDuration) {
      const i = e.visualDuration,
        s = (2 * Math.PI) / (i * 1.2),
        a = s * s,
        u = 2 * nr(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
      t = { ...t, mass: We.mass, stiffness: a, damping: u };
    } else {
      const i = lk(e);
      (t = { ...t, ...i, mass: We.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Fl(e = We.visualDuration, t = We.bounce) {
  const i =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: s, restDelta: a } = i;
  const u = i.keyframes[0],
    c = i.keyframes[i.keyframes.length - 1],
    d = { done: !1, value: u },
    {
      stiffness: h,
      damping: p,
      mass: g,
      duration: v,
      velocity: w,
      isResolvedFromDuration: x,
    } = hk({ ...i, velocity: -en(i.velocity || 0) }),
    E = w || 0,
    C = p / (2 * Math.sqrt(h * g)),
    T = c - u,
    k = en(Math.sqrt(h / g)),
    R = Math.abs(T) < 5;
  s || (s = R ? We.restSpeed.granular : We.restSpeed.default),
    a || (a = R ? We.restDelta.granular : We.restDelta.default);
  let j;
  if (C < 1) {
    const O = Id(k, C);
    j = (B) => {
      const V = Math.exp(-C * k * B);
      return (
        c - V * (((E + C * k * T) / O) * Math.sin(O * B) + T * Math.cos(O * B))
      );
    };
  } else if (C === 1) j = (O) => c - Math.exp(-k * O) * (T + (E + k * T) * O);
  else {
    const O = k * Math.sqrt(C * C - 1);
    j = (B) => {
      const V = Math.exp(-C * k * B),
        H = Math.min(O * B, 300);
      return (
        c - (V * ((E + C * k * T) * Math.sinh(H) + O * T * Math.cosh(H))) / O
      );
    };
  }
  const D = {
    calculatedDuration: (x && v) || null,
    next: (O) => {
      const B = j(O);
      if (x) d.done = O >= v;
      else {
        let V = O === 0 ? E : 0;
        C < 1 && (V = O === 0 ? Vn(E) : yx(j, O, B));
        const H = Math.abs(V) <= s,
          te = Math.abs(c - B) <= a;
        d.done = H && te;
      }
      return (d.value = d.done ? c : B), d;
    },
    toString: () => {
      const O = Math.min(_f(D), _l),
        B = gx((V) => D.next(O * V).value, O, 30);
      return O + "ms " + B;
    },
    toTransition: () => {},
  };
  return D;
}
Fl.applyToOptions = (e) => {
  const t = ok(e, 100, Fl);
  return (
    (e.ease = t.ease), (e.duration = Vn(t.duration)), (e.type = "keyframes"), e
  );
};
function Vd({
  keyframes: e,
  velocity: t = 0,
  power: i = 0.8,
  timeConstant: s = 325,
  bounceDamping: a = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: d,
  max: h,
  restDelta: p = 0.5,
  restSpeed: g,
}) {
  const v = e[0],
    w = { done: !1, value: v },
    x = (H) => (d !== void 0 && H < d) || (h !== void 0 && H > h),
    E = (H) =>
      d === void 0
        ? h
        : h === void 0 || Math.abs(d - H) < Math.abs(h - H)
        ? d
        : h;
  let C = i * t;
  const T = v + C,
    k = c === void 0 ? T : c(T);
  k !== T && (C = k - v);
  const R = (H) => -C * Math.exp(-H / s),
    j = (H) => k + R(H),
    D = (H) => {
      const te = R(H),
        Z = j(H);
      (w.done = Math.abs(te) <= p), (w.value = w.done ? k : Z);
    };
  let O, B;
  const V = (H) => {
    x(w.value) &&
      ((O = H),
      (B = Fl({
        keyframes: [w.value, E(w.value)],
        velocity: yx(j, H, w.value),
        damping: a,
        stiffness: u,
        restDelta: p,
        restSpeed: g,
      })));
  };
  return (
    V(0),
    {
      calculatedDuration: null,
      next: (H) => {
        let te = !1;
        return (
          !B && O === void 0 && ((te = !0), D(H), V(H)),
          O !== void 0 && H >= O ? B.next(H - O) : (!te && D(H), w)
        );
      },
    }
  );
}
function pk(e, t, i) {
  const s = [],
    a = i || rr.mix || mx,
    u = e.length - 1;
  for (let c = 0; c < u; c++) {
    let d = a(e[c], e[c + 1]);
    if (t) {
      const h = Array.isArray(t) ? t[c] || tn : t;
      d = Go(h, d);
    }
    s.push(d);
  }
  return s;
}
function mk(e, t, { clamp: i = !0, ease: s, mixer: a } = {}) {
  const u = e.length;
  if ((jf(u === t.length), u === 1)) return () => t[0];
  if (u === 2 && t[0] === t[1]) return () => t[1];
  const c = e[0] === e[1];
  e[0] > e[u - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const d = pk(t, s, a),
    h = d.length,
    p = (g) => {
      if (c && g < e[0]) return t[0];
      let v = 0;
      if (h > 1) for (; v < e.length - 2 && !(g < e[v + 1]); v++);
      const w = Do(e[v], e[v + 1], g);
      return d[v](w);
    };
  return i ? (g) => p(nr(e[0], e[u - 1], g)) : p;
}
function gk(e, t) {
  const i = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const a = Do(0, t, s);
    e.push(Be(i, 1, a));
  }
}
function yk(e) {
  const t = [0];
  return gk(t, e.length - 1), t;
}
function vk(e, t) {
  return e.map((i) => i * t);
}
function xk(e, t) {
  return e.map(() => t || sx).splice(0, e.length - 1);
}
function Co({
  duration: e = 300,
  keyframes: t,
  times: i,
  ease: s = "easeInOut",
}) {
  const a = RP(s) ? s.map(Mg) : Mg(s),
    u = { done: !1, value: t[0] },
    c = vk(i && i.length === t.length ? i : yk(t), e),
    d = mk(c, t, { ease: Array.isArray(a) ? a : xk(t, a) });
  return {
    calculatedDuration: e,
    next: (h) => ((u.value = d(h)), (u.done = h >= e), u),
  };
}
const wk = (e) => e !== null;
function Ff(e, { repeat: t, repeatType: i = "loop" }, s, a = 1) {
  const u = e.filter(wk),
    d = a < 0 || (t && i !== "loop" && t % 2 === 1) ? 0 : u.length - 1;
  return !d || s === void 0 ? u[d] : s;
}
const bk = { decay: Vd, inertia: Vd, tween: Co, keyframes: Co, spring: Fl };
function vx(e) {
  typeof e.type == "string" && (e.type = bk[e.type]);
}
class zf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, i) {
    return this.finished.then(t, i);
  }
}
const Sk = (e) => e / 100;
class Bf extends zf {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var s, a;
        const { motionValue: i } = this.options;
        i && i.updatedAt !== Mt.now() && this.tick(Mt.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (a = (s = this.options).onStop) == null || a.call(s));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    vx(t);
    const {
      type: i = Co,
      repeat: s = 0,
      repeatDelay: a = 0,
      repeatType: u,
      velocity: c = 0,
    } = t;
    let { keyframes: d } = t;
    const h = i || Co;
    h !== Co &&
      typeof d[0] != "number" &&
      ((this.mixKeyframes = Go(Sk, mx(d[0], d[1]))), (d = [0, 100]));
    const p = h({ ...t, keyframes: d });
    u === "mirror" &&
      (this.mirroredGenerator = h({
        ...t,
        keyframes: [...d].reverse(),
        velocity: -c,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = _f(p));
    const { calculatedDuration: g } = p;
    (this.calculatedDuration = g),
      (this.resolvedDuration = g + a),
      (this.totalDuration = this.resolvedDuration * (s + 1) - a),
      (this.generator = p);
  }
  updateTime(t) {
    const i = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = i);
  }
  tick(t, i = !1) {
    const {
      generator: s,
      totalDuration: a,
      mixKeyframes: u,
      mirroredGenerator: c,
      resolvedDuration: d,
      calculatedDuration: h,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p = 0,
      keyframes: g,
      repeat: v,
      repeatType: w,
      repeatDelay: x,
      type: E,
      onUpdate: C,
      finalKeyframe: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - a / this.speed, this.startTime)),
      i ? (this.currentTime = t) : this.updateTime(t);
    const k = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      R = this.playbackSpeed >= 0 ? k < 0 : k > a;
    (this.currentTime = Math.max(k, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = a);
    let j = this.currentTime,
      D = s;
    if (v) {
      const H = Math.min(this.currentTime, a) / d;
      let te = Math.floor(H),
        Z = H % 1;
      !Z && H >= 1 && (Z = 1),
        Z === 1 && te--,
        (te = Math.min(te, v + 1)),
        !!(te % 2) &&
          (w === "reverse"
            ? ((Z = 1 - Z), x && (Z -= x / d))
            : w === "mirror" && (D = c)),
        (j = nr(0, 1, Z) * d);
    }
    const O = R ? { done: !1, value: g[0] } : D.next(j);
    u && (O.value = u(O.value));
    let { done: B } = O;
    !R &&
      h !== null &&
      (B =
        this.playbackSpeed >= 0
          ? this.currentTime >= a
          : this.currentTime <= 0);
    const V =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && B));
    return (
      V && E !== Vd && (O.value = Ff(g, this.options, T, this.speed)),
      C && C(O.value),
      V && this.finish(),
      O
    );
  }
  then(t, i) {
    return this.finished.then(t, i);
  }
  get duration() {
    return en(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + en(t);
  }
  get time() {
    return en(this.currentTime);
  }
  set time(t) {
    var i;
    (t = Vn(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (i = this.driver) == null || i.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Mt.now());
    const i = this.playbackSpeed !== t;
    (this.playbackSpeed = t), i && (this.time = en(this.currentTime));
  }
  play() {
    var a, u;
    if (this.isStopped) return;
    const { driver: t = sk, startTime: i } = this.options;
    this.driver || (this.driver = t((c) => this.tick(c))),
      (u = (a = this.options).onPlay) == null || u.call(a);
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime || (this.startTime = i ?? s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Mt.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, i;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (i = (t = this.options).onComplete) == null || i.call(t);
  }
  cancel() {
    var t, i;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (i = (t = this.options).onCancel) == null || i.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var i;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (i = this.driver) == null || i.stop(),
      t.observe(this)
    );
  }
}
function Ck(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const mi = (e) => (e * 180) / Math.PI,
  _d = (e) => {
    const t = mi(Math.atan2(e[1], e[0]));
    return Fd(t);
  },
  Tk = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: _d,
    rotateZ: _d,
    skewX: (e) => mi(Math.atan(e[1])),
    skewY: (e) => mi(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Fd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  _g = _d,
  Fg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  zg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Ek = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Fg,
    scaleY: zg,
    scale: (e) => (Fg(e) + zg(e)) / 2,
    rotateX: (e) => Fd(mi(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Fd(mi(Math.atan2(-e[2], e[0]))),
    rotateZ: _g,
    rotate: _g,
    skewX: (e) => mi(Math.atan(e[4])),
    skewY: (e) => mi(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function zd(e) {
  return e.includes("scale") ? 1 : 0;
}
function Bd(e, t) {
  if (!e || e === "none") return zd(t);
  const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, a;
  if (i) (s = Ek), (a = i);
  else {
    const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = Tk), (a = d);
  }
  if (!a) return zd(t);
  const u = s[t],
    c = a[1].split(",").map(kk);
  return typeof u == "function" ? u(c) : c[u];
}
const Pk = (e, t) => {
  const { transform: i = "none" } = getComputedStyle(e);
  return Bd(i, t);
};
function kk(e) {
  return parseFloat(e.trim());
}
const Ns = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Rs = new Set(Ns),
  Bg = (e) => e === js || e === ve,
  jk = new Set(["x", "y", "z"]),
  Nk = Ns.filter((e) => !jk.has(e));
function Rk(e) {
  const t = [];
  return (
    Nk.forEach((i) => {
      const s = e.getValue(i);
      s !== void 0 &&
        (t.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ci = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(i),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(i),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Bd(t, "x"),
  y: (e, { transform: t }) => Bd(t, "y"),
};
Ci.translateX = Ci.x;
Ci.translateY = Ci.y;
const Ti = new Set();
let $d = !1,
  Ud = !1,
  Wd = !1;
function xx() {
  if (Ud) {
    const e = Array.from(Ti).filter((s) => s.needsMeasurement),
      t = new Set(e.map((s) => s.element)),
      i = new Map();
    t.forEach((s) => {
      const a = Rk(s);
      a.length && (i.set(s, a), s.render());
    }),
      e.forEach((s) => s.measureInitialState()),
      t.forEach((s) => {
        s.render();
        const a = i.get(s);
        a &&
          a.forEach(([u, c]) => {
            var d;
            (d = s.getValue(u)) == null || d.set(c);
          });
      }),
      e.forEach((s) => s.measureEndState()),
      e.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (Ud = !1), ($d = !1), Ti.forEach((e) => e.complete(Wd)), Ti.clear();
}
function wx() {
  Ti.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ud = !0);
  });
}
function Ak() {
  (Wd = !0), wx(), xx(), (Wd = !1);
}
class $f {
  constructor(t, i, s, a, u, c = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = i),
      (this.name = s),
      (this.motionValue = a),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Ti.add(this),
          $d || (($d = !0), _e.read(wx), _e.resolveKeyframes(xx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: i,
      element: s,
      motionValue: a,
    } = this;
    if (t[0] === null) {
      const u = a == null ? void 0 : a.get(),
        c = t[t.length - 1];
      if (u !== void 0) t[0] = u;
      else if (s && i) {
        const d = s.readValue(i, c);
        d != null && (t[0] = d);
      }
      t[0] === void 0 && (t[0] = c), a && u === void 0 && a.set(t[0]);
    }
    Ck(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Ti.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ti.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Mk = (e) => e.startsWith("--");
function Dk(e, t, i) {
  Mk(t) ? e.style.setProperty(t, i) : (e.style[t] = i);
}
const Lk = Nf(() => window.ScrollTimeline !== void 0),
  Ok = {};
function Ik(e, t) {
  const i = Nf(e);
  return () => Ok[t] ?? i();
}
const bx = Ik(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  wo = ([e, t, i, s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`,
  $g = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wo([0, 0.65, 0.55, 1]),
    circOut: wo([0.55, 0, 1, 0.45]),
    backIn: wo([0.31, 0.01, 0.66, -0.59]),
    backOut: wo([0.33, 1.53, 0.69, 0.99]),
  };
function Sx(e, t) {
  if (e)
    return typeof e == "function"
      ? bx()
        ? gx(e, t)
        : "ease-out"
      : ox(e)
      ? wo(e)
      : Array.isArray(e)
      ? e.map((i) => Sx(i, t) || $g.easeOut)
      : $g[e];
}
function Vk(
  e,
  t,
  i,
  {
    delay: s = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: d = "easeOut",
    times: h,
  } = {},
  p = void 0
) {
  const g = { [t]: i };
  h && (g.offset = h);
  const v = Sx(d, a);
  Array.isArray(v) && (g.easing = v);
  const w = {
    delay: s,
    duration: a,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: u + 1,
    direction: c === "reverse" ? "alternate" : "normal",
  };
  return p && (w.pseudoElement = p), e.animate(g, w);
}
function Cx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function _k({ type: e, ...t }) {
  return Cx(e) && bx()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Fk extends zf {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: i,
      name: s,
      keyframes: a,
      pseudoElement: u,
      allowFlatten: c = !1,
      finalKeyframe: d,
      onComplete: h,
    } = t;
    (this.isPseudoElement = !!u),
      (this.allowFlatten = c),
      (this.options = t),
      jf(typeof t.type != "string");
    const p = _k(t);
    (this.animation = Vk(i, s, a, p, u)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const g = Ff(a, this.options, d, this.speed);
          this.updateMotionValue ? this.updateMotionValue(g) : Dk(i, s, g),
            this.animation.cancel();
        }
        h == null || h(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, i;
    (i = (t = this.animation).finish) == null || i.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, i;
    this.isPseudoElement ||
      (i = (t = this.animation).commitStyles) == null ||
      i.call(t);
  }
  get duration() {
    var i, s;
    const t =
      ((s =
        (i = this.animation.effect) == null ? void 0 : i.getComputedTiming) ==
      null
        ? void 0
        : s.call(i).duration) || 0;
    return en(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + en(t);
  }
  get time() {
    return en(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = Vn(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Lk() ? ((this.animation.timeline = t), tn) : i(this)
    );
  }
}
const Tx = { anticipate: nx, backInOut: tx, circInOut: ix };
function zk(e) {
  return e in Tx;
}
function Bk(e) {
  typeof e.ease == "string" && zk(e.ease) && (e.ease = Tx[e.ease]);
}
const Ug = 10;
class $k extends Fk {
  constructor(t) {
    Bk(t),
      vx(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: i,
      onUpdate: s,
      onComplete: a,
      element: u,
      ...c
    } = this.options;
    if (!i) return;
    if (t !== void 0) {
      i.set(t);
      return;
    }
    const d = new Bf({ ...c, autoplay: !1 }),
      h = Vn(this.finishedTime ?? this.time);
    i.setWithVelocity(d.sample(h - Ug).value, d.sample(h).value, Ug), d.stop();
  }
}
const Wg = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Kr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Uk(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0;
}
function Wk(e, t, i, s) {
  const a = e[0];
  if (a === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const u = e[e.length - 1],
    c = Wg(a, t),
    d = Wg(u, t);
  return !c || !d ? !1 : Uk(e) || ((i === "spring" || Cx(i)) && s);
}
function Hd(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const Hk = new Set(["opacity", "clipPath", "filter", "transform"]),
  Kk = Nf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Gk(e) {
  var g;
  const {
    motionValue: t,
    name: i,
    repeatDelay: s,
    repeatType: a,
    damping: u,
    type: c,
  } = e;
  if (
    !(
      ((g = t == null ? void 0 : t.owner) == null
        ? void 0
        : g.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: h, transformTemplate: p } = t.owner.getProps();
  return (
    Kk() &&
    i &&
    Hk.has(i) &&
    (i !== "transform" || !p) &&
    !h &&
    !s &&
    a !== "mirror" &&
    u !== 0 &&
    c !== "inertia"
  );
}
const Yk = 40;
class Qk extends zf {
  constructor({
    autoplay: t = !0,
    delay: i = 0,
    type: s = "keyframes",
    repeat: a = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    keyframes: d,
    name: h,
    motionValue: p,
    element: g,
    ...v
  }) {
    var E;
    super(),
      (this.stop = () => {
        var C, T;
        this._animation &&
          (this._animation.stop(),
          (C = this.stopTimeline) == null || C.call(this)),
          (T = this.keyframeResolver) == null || T.cancel();
      }),
      (this.createdAt = Mt.now());
    const w = {
        autoplay: t,
        delay: i,
        type: s,
        repeat: a,
        repeatDelay: u,
        repeatType: c,
        name: h,
        motionValue: p,
        element: g,
        ...v,
      },
      x = (g == null ? void 0 : g.KeyframeResolver) || $f;
    (this.keyframeResolver = new x(
      d,
      (C, T, k) => this.onKeyframesResolved(C, T, w, !k),
      h,
      p,
      g
    )),
      (E = this.keyframeResolver) == null || E.scheduleResolve();
  }
  onKeyframesResolved(t, i, s, a) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: c,
      velocity: d,
      delay: h,
      isHandoff: p,
      onUpdate: g,
    } = s;
    (this.resolvedAt = Mt.now()),
      Wk(t, u, c, d) ||
        ((rr.instantAnimations || !h) && (g == null || g(Ff(t, s, i))),
        (t[0] = t[t.length - 1]),
        Hd(s),
        (s.repeat = 0));
    const w = {
        startTime: a
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Yk
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: i,
        ...s,
        keyframes: t,
      },
      x =
        !p && Gk(w)
          ? new $k({ ...w, element: w.motionValue.owner.current })
          : new Bf(w);
    x.finished.then(() => this.notifyFinished()).catch(tn),
      this.pendingTimeline &&
        ((this.stopTimeline = x.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = x);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, i) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Ak()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const qk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Xk(e) {
  const t = qk.exec(e);
  if (!t) return [,];
  const [, i, s, a] = t;
  return [`--${i ?? s}`, a];
}
function Ex(e, t, i = 1) {
  const [s, a] = Xk(e);
  if (!s) return;
  const u = window.getComputedStyle(t).getPropertyValue(s);
  if (u) {
    const c = u.trim();
    return Gv(c) ? parseFloat(c) : c;
  }
  return Lf(a) ? Ex(a, t, i + 1) : a;
}
function Uf(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Px = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ns,
  ]),
  Jk = { test: (e) => e === "auto", parse: (e) => e },
  kx = (e) => (t) => t.test(e),
  jx = [js, ve, _n, Ar, UP, $P, Jk],
  Hg = (e) => jx.find(kx(e));
function Zk(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Qv(e)
    : !0;
}
const ej = new Set(["brightness", "contrast", "saturate", "opacity"]);
function tj(e) {
  const [t, i] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [s] = i.match(Of) || [];
  if (!s) return e;
  const a = i.replace(s, "");
  let u = ej.has(t) ? 1 : 0;
  return s !== i && (u *= 100), t + "(" + u + a + ")";
}
const nj = /\b([a-z-]*)\(.*?\)/gu,
  Kd = {
    ...Kr,
    getAnimatableNone: (e) => {
      const t = e.match(nj);
      return t ? t.map(tj).join(" ") : e;
    },
  },
  Kg = { ...js, transform: Math.round },
  rj = {
    rotate: Ar,
    rotateX: Ar,
    rotateY: Ar,
    rotateZ: Ar,
    scale: wl,
    scaleX: wl,
    scaleY: wl,
    scaleZ: wl,
    skew: Ar,
    skewX: Ar,
    skewY: Ar,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: Lo,
    originX: Dg,
    originY: Dg,
    originZ: ve,
  },
  Wf = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    backgroundPositionX: ve,
    backgroundPositionY: ve,
    ...rj,
    zIndex: Kg,
    fillOpacity: Lo,
    strokeOpacity: Lo,
    numOctaves: Kg,
  },
  ij = {
    ...Wf,
    color: qe,
    backgroundColor: qe,
    outlineColor: qe,
    fill: qe,
    stroke: qe,
    borderColor: qe,
    borderTopColor: qe,
    borderRightColor: qe,
    borderBottomColor: qe,
    borderLeftColor: qe,
    filter: Kd,
    WebkitFilter: Kd,
  },
  Nx = (e) => ij[e];
function Rx(e, t) {
  let i = Nx(e);
  return (
    i !== Kd && (i = Kr), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
  );
}
const sj = new Set(["auto", "none", "0"]);
function oj(e, t, i) {
  let s = 0,
    a;
  for (; s < e.length && !a; ) {
    const u = e[s];
    typeof u == "string" && !sj.has(u) && Oo(u).values.length && (a = e[s]),
      s++;
  }
  if (a && i) for (const u of t) e[u] = Rx(i, a);
}
class aj extends $f {
  constructor(t, i, s, a, u) {
    super(t, i, s, a, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: s } = this;
    if (!i || !i.current) return;
    super.readKeyframes();
    for (let h = 0; h < t.length; h++) {
      let p = t[h];
      if (typeof p == "string" && ((p = p.trim()), Lf(p))) {
        const g = Ex(p, i.current);
        g !== void 0 && (t[h] = g),
          h === t.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !Px.has(s) || t.length !== 2)) return;
    const [a, u] = t,
      c = Hg(a),
      d = Hg(u);
    if (c !== d)
      if (Bg(c) && Bg(d))
        for (let h = 0; h < t.length; h++) {
          const p = t[h];
          typeof p == "string" && (t[h] = parseFloat(p));
        }
      else Ci[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this,
      s = [];
    for (let a = 0; a < t.length; a++) (t[a] === null || Zk(t[a])) && s.push(a);
    s.length && oj(t, s, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: s } = this;
    if (!t || !t.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ci[s](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (i[0] = this.measuredOrigin);
    const a = i[i.length - 1];
    a !== void 0 && t.getValue(s, a).jump(a, !1);
  }
  measureEndState() {
    var d;
    const { element: t, name: i, unresolvedKeyframes: s } = this;
    if (!t || !t.current) return;
    const a = t.getValue(i);
    a && a.jump(this.measuredOrigin, !1);
    const u = s.length - 1,
      c = s[u];
    (s[u] = Ci[i](t.measureViewportBox(), window.getComputedStyle(t.current))),
      c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
      (d = this.removedTransforms) != null &&
        d.length &&
        this.removedTransforms.forEach(([h, p]) => {
          t.getValue(h).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function lj(e, t, i) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let s = document;
    const a = (i == null ? void 0 : i[e]) ?? s.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e);
}
const Ax = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Mx(e) {
  return Yv(e) && "offsetHeight" in e;
}
const Gg = 30,
  uj = (e) => !isNaN(parseFloat(e));
class cj {
  constructor(t, i = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var u;
        const a = Mt.now();
        if (
          (this.updatedAt !== a && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((u = this.events.change) == null || u.notify(this.current),
            this.dependents))
        )
          for (const c of this.dependents) c.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = i.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Mt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = uj(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new Rf());
    const s = this.events[t].add(i);
    return t === "change"
      ? () => {
          s(),
            _e.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, i) {
    (this.passiveEffect = t), (this.stopPassiveEffect = i);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, i, s) {
    this.set(i),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(t, i = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      i && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Mt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Gg
    )
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, Gg);
    return qv(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((i) => {
        (this.hasAnimated = !0),
          (this.animation = t(i)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, i;
    (t = this.dependents) == null || t.clear(),
      (i = this.events.destroy) == null || i.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ss(e, t) {
  return new cj(e, t);
}
const { schedule: Hf } = ax(queueMicrotask, !1),
  hn = { x: !1, y: !1 };
function Dx() {
  return hn.x || hn.y;
}
function dj(e) {
  return e === "x" || e === "y"
    ? hn[e]
      ? null
      : ((hn[e] = !0),
        () => {
          hn[e] = !1;
        })
    : hn.x || hn.y
    ? null
    : ((hn.x = hn.y = !0),
      () => {
        hn.x = hn.y = !1;
      });
}
function Lx(e, t) {
  const i = lj(e),
    s = new AbortController(),
    a = { passive: !0, ...t, signal: s.signal };
  return [i, a, () => s.abort()];
}
function Yg(e) {
  return !(e.pointerType === "touch" || Dx());
}
function fj(e, t, i = {}) {
  const [s, a, u] = Lx(e, i),
    c = (d) => {
      if (!Yg(d)) return;
      const { target: h } = d,
        p = t(h, d);
      if (typeof p != "function" || !h) return;
      const g = (v) => {
        Yg(v) && (p(v), h.removeEventListener("pointerleave", g));
      };
      h.addEventListener("pointerleave", g, a);
    };
  return (
    s.forEach((d) => {
      d.addEventListener("pointerenter", c, a);
    }),
    u
  );
}
const Ox = (e, t) => (t ? (e === t ? !0 : Ox(e, t.parentElement)) : !1),
  Kf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  hj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function pj(e) {
  return hj.has(e.tagName) || e.tabIndex !== -1;
}
const kl = new WeakSet();
function Qg(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function sd(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const mj = (e, t) => {
  const i = e.currentTarget;
  if (!i) return;
  const s = Qg(() => {
    if (kl.has(i)) return;
    sd(i, "down");
    const a = Qg(() => {
        sd(i, "up");
      }),
      u = () => sd(i, "cancel");
    i.addEventListener("keyup", a, t), i.addEventListener("blur", u, t);
  });
  i.addEventListener("keydown", s, t),
    i.addEventListener("blur", () => i.removeEventListener("keydown", s), t);
};
function qg(e) {
  return Kf(e) && !Dx();
}
function gj(e, t, i = {}) {
  const [s, a, u] = Lx(e, i),
    c = (d) => {
      const h = d.currentTarget;
      if (!qg(d)) return;
      kl.add(h);
      const p = t(h, d),
        g = (x, E) => {
          window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", w),
            kl.has(h) && kl.delete(h),
            qg(x) && typeof p == "function" && p(x, { success: E });
        },
        v = (x) => {
          g(
            x,
            h === window ||
              h === document ||
              i.useGlobalTarget ||
              Ox(h, x.target)
          );
        },
        w = (x) => {
          g(x, !1);
        };
      window.addEventListener("pointerup", v, a),
        window.addEventListener("pointercancel", w, a);
    };
  return (
    s.forEach((d) => {
      (i.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a),
        Mx(d) &&
          (d.addEventListener("focus", (p) => mj(p, a)),
          !pj(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
    }),
    u
  );
}
function Ix(e) {
  return Yv(e) && "ownerSVGElement" in e;
}
function yj(e) {
  return Ix(e) && e.tagName === "svg";
}
const pt = (e) => !!(e && e.getVelocity),
  vj = [...jx, qe, Kr],
  xj = (e) => vj.find(kx(e)),
  Gf = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Xg(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function wj(...e) {
  return (t) => {
    let i = !1;
    const s = e.map((a) => {
      const u = Xg(a, t);
      return !i && typeof u == "function" && (i = !0), u;
    });
    if (i)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const u = s[a];
          typeof u == "function" ? u() : Xg(e[a], null);
        }
      };
  };
}
function bj(...e) {
  return S.useCallback(wj(...e), e);
}
class Sj extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const i = this.props.childRef.current;
    if (i && t.isPresent && !this.props.isPresent) {
      const s = i.offsetParent,
        a = (Mx(s) && s.offsetWidth) || 0,
        u = this.props.sizeRef.current;
      (u.height = i.offsetHeight || 0),
        (u.width = i.offsetWidth || 0),
        (u.top = i.offsetTop),
        (u.left = i.offsetLeft),
        (u.right = a - u.width - u.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Cj({ children: e, isPresent: t, anchorX: i, root: s }) {
  const a = S.useId(),
    u = S.useRef(null),
    c = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: d } = S.useContext(Gf),
    h = bj(u, e == null ? void 0 : e.ref);
  return (
    S.useInsertionEffect(() => {
      const { width: p, height: g, top: v, left: w, right: x } = c.current;
      if (t || !u.current || !p || !g) return;
      const E = i === "left" ? `left: ${w}` : `right: ${x}`;
      u.current.dataset.motionPopId = a;
      const C = document.createElement("style");
      d && (C.nonce = d);
      const T = s ?? document.head;
      return (
        T.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${E}px !important;
            top: ${v}px !important;
          }
        `),
        () => {
          T.contains(C) && T.removeChild(C);
        }
      );
    }, [t]),
    y.jsx(Sj, {
      isPresent: t,
      childRef: u,
      sizeRef: c,
      children: S.cloneElement(e, { ref: h }),
    })
  );
}
const Tj = ({
  children: e,
  initial: t,
  isPresent: i,
  onExitComplete: s,
  custom: a,
  presenceAffectsLayout: u,
  mode: c,
  anchorX: d,
  root: h,
}) => {
  const p = Tf(Ej),
    g = S.useId();
  let v = !0,
    w = S.useMemo(
      () => (
        (v = !1),
        {
          id: g,
          initial: t,
          isPresent: i,
          custom: a,
          onExitComplete: (x) => {
            p.set(x, !0);
            for (const E of p.values()) if (!E) return;
            s && s();
          },
          register: (x) => (p.set(x, !1), () => p.delete(x)),
        }
      ),
      [i, p, s]
    );
  return (
    u && v && (w = { ...w }),
    S.useMemo(() => {
      p.forEach((x, E) => p.set(E, !1));
    }, [i]),
    S.useEffect(() => {
      !i && !p.size && s && s();
    }, [i]),
    c === "popLayout" &&
      (e = y.jsx(Cj, { isPresent: i, anchorX: d, root: h, children: e })),
    y.jsx(nu.Provider, { value: w, children: e })
  );
};
function Ej() {
  return new Map();
}
function Vx(e = !0) {
  const t = S.useContext(nu);
  if (t === null) return [!0, null];
  const { isPresent: i, onExitComplete: s, register: a } = t,
    u = S.useId();
  S.useEffect(() => {
    if (e) return a(u);
  }, [e]);
  const c = S.useCallback(() => e && s && s(u), [u, s, e]);
  return !i && s ? [!1, c] : [!0];
}
const bl = (e) => e.key || "";
function Jg(e) {
  const t = [];
  return (
    S.Children.forEach(e, (i) => {
      S.isValidElement(i) && t.push(i);
    }),
    t
  );
}
const Yf = ({
    children: e,
    custom: t,
    initial: i = !0,
    onExitComplete: s,
    presenceAffectsLayout: a = !0,
    mode: u = "sync",
    propagate: c = !1,
    anchorX: d = "left",
    root: h,
  }) => {
    const [p, g] = Vx(c),
      v = S.useMemo(() => Jg(e), [e]),
      w = c && !p ? [] : v.map(bl),
      x = S.useRef(!0),
      E = S.useRef(v),
      C = Tf(() => new Map()),
      [T, k] = S.useState(v),
      [R, j] = S.useState(v);
    Kv(() => {
      (x.current = !1), (E.current = v);
      for (let B = 0; B < R.length; B++) {
        const V = bl(R[B]);
        w.includes(V) ? C.delete(V) : C.get(V) !== !0 && C.set(V, !1);
      }
    }, [R, w.length, w.join("-")]);
    const D = [];
    if (v !== T) {
      let B = [...v];
      for (let V = 0; V < R.length; V++) {
        const H = R[V],
          te = bl(H);
        w.includes(te) || (B.splice(V, 0, H), D.push(H));
      }
      return u === "wait" && D.length && (B = D), j(Jg(B)), k(v), null;
    }
    const { forceRender: O } = S.useContext(Cf);
    return y.jsx(y.Fragment, {
      children: R.map((B) => {
        const V = bl(B),
          H = c && !p ? !1 : v === R || w.includes(V),
          te = () => {
            if (C.has(V)) C.set(V, !0);
            else return;
            let Z = !0;
            C.forEach((de) => {
              de || (Z = !1);
            }),
              Z &&
                (O == null || O(),
                j(E.current),
                c && (g == null || g()),
                s && s());
          };
        return y.jsx(
          Tj,
          {
            isPresent: H,
            initial: !x.current || i ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: a,
            mode: u,
            root: h,
            onExitComplete: H ? void 0 : te,
            anchorX: d,
            children: B,
          },
          V
        );
      }),
    });
  },
  _x = S.createContext({ strict: !1 }),
  Zg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Cs = {};
for (const e in Zg) Cs[e] = { isEnabled: (t) => Zg[e].some((i) => !!t[i]) };
function Pj(e) {
  for (const t in e) Cs[t] = { ...Cs[t], ...e[t] };
}
const kj = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function zl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    kj.has(e)
  );
}
let Fx = (e) => !zl(e);
function jj(e) {
  typeof e == "function" && (Fx = (t) => (t.startsWith("on") ? !zl(t) : e(t)));
}
try {
  jj(require("@emotion/is-prop-valid").default);
} catch {}
function Nj(e, t, i) {
  const s = {};
  for (const a in e)
    (a === "values" && typeof e.values == "object") ||
      ((Fx(a) ||
        (i === !0 && zl(a)) ||
        (!t && !zl(a)) ||
        (e.draggable && a.startsWith("onDrag"))) &&
        (s[a] = e[a]));
  return s;
}
const ru = S.createContext({});
function iu(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Io(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Qf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qf = ["initial", ...Qf];
function su(e) {
  return iu(e.animate) || qf.some((t) => Io(e[t]));
}
function zx(e) {
  return !!(su(e) || e.variants);
}
function Rj(e, t) {
  if (su(e)) {
    const { initial: i, animate: s } = e;
    return {
      initial: i === !1 || Io(i) ? i : void 0,
      animate: Io(s) ? s : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Aj(e) {
  const { initial: t, animate: i } = Rj(e, S.useContext(ru));
  return S.useMemo(() => ({ initial: t, animate: i }), [ey(t), ey(i)]);
}
function ey(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Vo = {};
function Mj(e) {
  for (const t in e) (Vo[t] = e[t]), Df(t) && (Vo[t].isCSSVariable = !0);
}
function Bx(e, { layout: t, layoutId: i }) {
  return (
    Rs.has(e) ||
    e.startsWith("origin") ||
    ((t || i !== void 0) && (!!Vo[e] || e === "opacity"))
  );
}
const Dj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Lj = Ns.length;
function Oj(e, t, i) {
  let s = "",
    a = !0;
  for (let u = 0; u < Lj; u++) {
    const c = Ns[u],
      d = e[c];
    if (d === void 0) continue;
    let h = !0;
    if (
      (typeof d == "number"
        ? (h = d === (c.startsWith("scale") ? 1 : 0))
        : (h = parseFloat(d) === 0),
      !h || i)
    ) {
      const p = Ax(d, Wf[c]);
      if (!h) {
        a = !1;
        const g = Dj[c] || c;
        s += `${g}(${p}) `;
      }
      i && (t[c] = p);
    }
  }
  return (s = s.trim()), i ? (s = i(t, a ? "" : s)) : a && (s = "none"), s;
}
function Xf(e, t, i) {
  const { style: s, vars: a, transformOrigin: u } = e;
  let c = !1,
    d = !1;
  for (const h in t) {
    const p = t[h];
    if (Rs.has(h)) {
      c = !0;
      continue;
    } else if (Df(h)) {
      a[h] = p;
      continue;
    } else {
      const g = Ax(p, Wf[h]);
      h.startsWith("origin") ? ((d = !0), (u[h] = g)) : (s[h] = g);
    }
  }
  if (
    (t.transform ||
      (c || i
        ? (s.transform = Oj(t, e.transform, i))
        : s.transform && (s.transform = "none")),
    d)
  ) {
    const { originX: h = "50%", originY: p = "50%", originZ: g = 0 } = u;
    s.transformOrigin = `${h} ${p} ${g}`;
  }
}
const Jf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function $x(e, t, i) {
  for (const s in t) !pt(t[s]) && !Bx(s, i) && (e[s] = t[s]);
}
function Ij({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const i = Jf();
    return Xf(i, t, e), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function Vj(e, t) {
  const i = e.style || {},
    s = {};
  return $x(s, i, e), Object.assign(s, Ij(e, t)), s;
}
function _j(e, t) {
  const i = {},
    s = Vj(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((i.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (i.tabIndex = 0),
    (i.style = s),
    i
  );
}
const Fj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  zj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Bj(e, t, i = 1, s = 0, a = !0) {
  e.pathLength = 1;
  const u = a ? Fj : zj;
  e[u.offset] = ve.transform(-s);
  const c = ve.transform(t),
    d = ve.transform(i);
  e[u.array] = `${c} ${d}`;
}
function Ux(
  e,
  {
    attrX: t,
    attrY: i,
    attrScale: s,
    pathLength: a,
    pathSpacing: u = 1,
    pathOffset: c = 0,
    ...d
  },
  h,
  p,
  g
) {
  if ((Xf(e, d, p), h)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: v, style: w } = e;
  v.transform && ((w.transform = v.transform), delete v.transform),
    (w.transform || v.transformOrigin) &&
      ((w.transformOrigin = v.transformOrigin ?? "50% 50%"),
      delete v.transformOrigin),
    w.transform &&
      ((w.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete v.transformBox),
    t !== void 0 && (v.x = t),
    i !== void 0 && (v.y = i),
    s !== void 0 && (v.scale = s),
    a !== void 0 && Bj(v, a, u, c, !1);
}
const Wx = () => ({ ...Jf(), attrs: {} }),
  Hx = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $j(e, t, i, s) {
  const a = S.useMemo(() => {
    const u = Wx();
    return (
      Ux(u, t, Hx(s), e.transformTemplate, e.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [t]);
  if (e.style) {
    const u = {};
    $x(u, e.style, e), (a.style = { ...u, ...a.style });
  }
  return a;
}
const Uj = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Zf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Uj.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Wj(e, t, i, { latestValues: s }, a, u = !1) {
  const d = (Zf(e) ? $j : _j)(t, s, a, e),
    h = Nj(t, typeof e == "string", u),
    p = e !== S.Fragment ? { ...h, ...d, ref: i } : {},
    { children: g } = t,
    v = S.useMemo(() => (pt(g) ? g.get() : g), [g]);
  return S.createElement(e, { ...p, children: v });
}
function ty(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((i, s) => {
        (t[0][s] = i.get()), (t[1][s] = i.getVelocity());
      }),
    t
  );
}
function eh(e, t, i, s) {
  if (typeof t == "function") {
    const [a, u] = ty(s);
    t = t(i !== void 0 ? i : e.custom, a, u);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [a, u] = ty(s);
    t = t(i !== void 0 ? i : e.custom, a, u);
  }
  return t;
}
function jl(e) {
  return pt(e) ? e.get() : e;
}
function Hj({ scrapeMotionValuesFromProps: e, createRenderState: t }, i, s, a) {
  return { latestValues: Kj(i, s, a, e), renderState: t() };
}
function Kj(e, t, i, s) {
  const a = {},
    u = s(e, {});
  for (const w in u) a[w] = jl(u[w]);
  let { initial: c, animate: d } = e;
  const h = su(e),
    p = zx(e);
  t &&
    p &&
    !h &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let g = i ? i.initial === !1 : !1;
  g = g || c === !1;
  const v = g ? d : c;
  if (v && typeof v != "boolean" && !iu(v)) {
    const w = Array.isArray(v) ? v : [v];
    for (let x = 0; x < w.length; x++) {
      const E = eh(e, w[x]);
      if (E) {
        const { transitionEnd: C, transition: T, ...k } = E;
        for (const R in k) {
          let j = k[R];
          if (Array.isArray(j)) {
            const D = g ? j.length - 1 : 0;
            j = j[D];
          }
          j !== null && (a[R] = j);
        }
        for (const R in C) a[R] = C[R];
      }
    }
  }
  return a;
}
const Kx = (e) => (t, i) => {
  const s = S.useContext(ru),
    a = S.useContext(nu),
    u = () => Hj(e, t, s, a);
  return i ? u() : Tf(u);
};
function th(e, t, i) {
  var u;
  const { style: s } = e,
    a = {};
  for (const c in s)
    (pt(s[c]) ||
      (t.style && pt(t.style[c])) ||
      Bx(c, e) ||
      ((u = i == null ? void 0 : i.getValue(c)) == null
        ? void 0
        : u.liveStyle) !== void 0) &&
      (a[c] = s[c]);
  return a;
}
const Gj = Kx({ scrapeMotionValuesFromProps: th, createRenderState: Jf });
function Gx(e, t, i) {
  const s = th(e, t, i);
  for (const a in e)
    if (pt(e[a]) || pt(t[a])) {
      const u =
        Ns.indexOf(a) !== -1
          ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
          : a;
      s[u] = e[a];
    }
  return s;
}
const Yj = Kx({ scrapeMotionValuesFromProps: Gx, createRenderState: Wx }),
  Qj = Symbol.for("motionComponentSymbol");
function ss(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function qj(e, t, i) {
  return S.useCallback(
    (s) => {
      s && e.onMount && e.onMount(s),
        t && (s ? t.mount(s) : t.unmount()),
        i && (typeof i == "function" ? i(s) : ss(i) && (i.current = s));
    },
    [t]
  );
}
const nh = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Xj = "framerAppearId",
  Yx = "data-" + nh(Xj),
  Qx = S.createContext({});
function Jj(e, t, i, s, a) {
  var C, T;
  const { visualElement: u } = S.useContext(ru),
    c = S.useContext(_x),
    d = S.useContext(nu),
    h = S.useContext(Gf).reducedMotion,
    p = S.useRef(null);
  (s = s || c.renderer),
    !p.current &&
      s &&
      (p.current = s(e, {
        visualState: t,
        parent: u,
        props: i,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: h,
      }));
  const g = p.current,
    v = S.useContext(Qx);
  g &&
    !g.projection &&
    a &&
    (g.type === "html" || g.type === "svg") &&
    Zj(p.current, i, a, v);
  const w = S.useRef(!1);
  S.useInsertionEffect(() => {
    g && w.current && g.update(i, d);
  });
  const x = i[Yx],
    E = S.useRef(
      !!x &&
        !((C = window.MotionHandoffIsComplete) != null && C.call(window, x)) &&
        ((T = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : T.call(window, x))
    );
  return (
    Kv(() => {
      g &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        g.updateFeatures(),
        g.scheduleRenderMicrotask(),
        E.current && g.animationState && g.animationState.animateChanges());
    }),
    S.useEffect(() => {
      g &&
        (!E.current && g.animationState && g.animationState.animateChanges(),
        E.current &&
          (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) == null ||
              k.call(window, x);
          }),
          (E.current = !1)),
        (g.enteringChildren = void 0));
    }),
    g
  );
}
function Zj(e, t, i, s) {
  const {
    layoutId: a,
    layout: u,
    drag: c,
    dragConstraints: d,
    layoutScroll: h,
    layoutRoot: p,
    layoutCrossfade: g,
  } = t;
  (e.projection = new i(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : qx(e.parent)
  )),
    e.projection.setOptions({
      layoutId: a,
      layout: u,
      alwaysMeasureLayout: !!c || (d && ss(d)),
      visualElement: e,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: s,
      crossfade: g,
      layoutScroll: h,
      layoutRoot: p,
    });
}
function qx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : qx(e.parent);
}
function od(e, { forwardMotionProps: t = !1 } = {}, i, s) {
  i && Pj(i);
  const a = Zf(e) ? Yj : Gj;
  function u(d, h) {
    let p;
    const g = { ...S.useContext(Gf), ...d, layoutId: eN(d) },
      { isStatic: v } = g,
      w = Aj(d),
      x = a(d, v);
    if (!v && Ef) {
      tN();
      const E = nN(g);
      (p = E.MeasureLayout),
        (w.visualElement = Jj(e, x, g, s, E.ProjectionNode));
    }
    return y.jsxs(ru.Provider, {
      value: w,
      children: [
        p && w.visualElement
          ? y.jsx(p, { visualElement: w.visualElement, ...g })
          : null,
        Wj(e, d, qj(x, w.visualElement, h), x, v, t),
      ],
    });
  }
  u.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const c = S.forwardRef(u);
  return (c[Qj] = e), c;
}
function eN({ layoutId: e }) {
  const t = S.useContext(Cf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tN(e, t) {
  S.useContext(_x).strict;
}
function nN(e) {
  const { drag: t, layout: i } = Cs;
  if (!t && !i) return {};
  const s = { ...t, ...i };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (i != null && i.isEnabled(e))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function rN(e, t) {
  if (typeof Proxy > "u") return od;
  const i = new Map(),
    s = (u, c) => od(u, c, e, t),
    a = (u, c) => s(u, c);
  return new Proxy(a, {
    get: (u, c) =>
      c === "create"
        ? s
        : (i.has(c) || i.set(c, od(c, void 0, e, t)), i.get(c)),
  });
}
function Xx({ top: e, left: t, right: i, bottom: s }) {
  return { x: { min: t, max: i }, y: { min: e, max: s } };
}
function iN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function sN(e, t) {
  if (!t) return e;
  const i = t({ x: e.left, y: e.top }),
    s = t({ x: e.right, y: e.bottom });
  return { top: i.y, left: i.x, bottom: s.y, right: s.x };
}
function ad(e) {
  return e === void 0 || e === 1;
}
function Gd({ scale: e, scaleX: t, scaleY: i }) {
  return !ad(e) || !ad(t) || !ad(i);
}
function hi(e) {
  return (
    Gd(e) ||
    Jx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Jx(e) {
  return ny(e.x) || ny(e.y);
}
function ny(e) {
  return e && e !== "0%";
}
function Bl(e, t, i) {
  const s = e - i,
    a = t * s;
  return i + a;
}
function ry(e, t, i, s, a) {
  return a !== void 0 && (e = Bl(e, a, s)), Bl(e, i, s) + t;
}
function Yd(e, t = 0, i = 1, s, a) {
  (e.min = ry(e.min, t, i, s, a)), (e.max = ry(e.max, t, i, s, a));
}
function Zx(e, { x: t, y: i }) {
  Yd(e.x, t.translate, t.scale, t.originPoint),
    Yd(e.y, i.translate, i.scale, i.originPoint);
}
const iy = 0.999999999999,
  sy = 1.0000000000001;
function oN(e, t, i, s = !1) {
  const a = i.length;
  if (!a) return;
  t.x = t.y = 1;
  let u, c;
  for (let d = 0; d < a; d++) {
    (u = i[d]), (c = u.projectionDelta);
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (s &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        as(e, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((t.x *= c.x.scale), (t.y *= c.y.scale), Zx(e, c)),
      s && hi(u.latestValues) && as(e, u.latestValues));
  }
  t.x < sy && t.x > iy && (t.x = 1), t.y < sy && t.y > iy && (t.y = 1);
}
function os(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function oy(e, t, i, s, a = 0.5) {
  const u = Be(e.min, e.max, a);
  Yd(e, t, i, u, s);
}
function as(e, t) {
  oy(e.x, t.x, t.scaleX, t.scale, t.originX),
    oy(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ew(e, t) {
  return Xx(sN(e.getBoundingClientRect(), t));
}
function aN(e, t, i) {
  const s = ew(e, i),
    { scroll: a } = t;
  return a && (os(s.x, a.offset.x), os(s.y, a.offset.y)), s;
}
const ay = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ls = () => ({ x: ay(), y: ay() }),
  ly = () => ({ min: 0, max: 0 }),
  Ye = () => ({ x: ly(), y: ly() }),
  Qd = { current: null },
  tw = { current: !1 };
function lN() {
  if (((tw.current = !0), !!Ef))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Qd.current = e.matches);
      e.addEventListener("change", t), t();
    } else Qd.current = !1;
}
const uN = new WeakMap();
function cN(e, t, i) {
  for (const s in t) {
    const a = t[s],
      u = i[s];
    if (pt(a)) e.addValue(s, a);
    else if (pt(u)) e.addValue(s, Ss(a, { owner: e }));
    else if (u !== a)
      if (e.hasValue(s)) {
        const c = e.getValue(s);
        c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
      } else {
        const c = e.getStaticValue(s);
        e.addValue(s, Ss(c !== void 0 ? c : a, { owner: e }));
      }
  }
  for (const s in i) t[s] === void 0 && e.removeValue(s);
  return t;
}
const uy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class dN {
  scrapeMotionValuesFromProps(t, i, s) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: i,
      presenceContext: s,
      reducedMotionConfig: a,
      blockInitialAnimation: u,
      visualState: c,
    },
    d = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = $f),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const w = Mt.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), _e.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: p } = c;
    (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = i.initial ? { ...h } : {}),
      (this.renderState = p),
      (this.parent = t),
      (this.props = i),
      (this.presenceContext = s),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = a),
      (this.options = d),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = su(i)),
      (this.isVariantNode = zx(i)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
      i,
      {},
      this
    );
    for (const w in v) {
      const x = v[w];
      h[w] !== void 0 && pt(x) && x.set(h[w]);
    }
  }
  mount(t) {
    var i;
    (this.current = t),
      uN.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, a) => this.bindToMotionValue(a, s)),
      tw.current || lN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Qd.current),
      (i = this.parent) == null || i.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      Hr(this.notifyUpdate),
      Hr(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const s = Rs.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const a = i.on("change", (c) => {
      (this.latestValues[t] = c),
        this.props.onUpdate && _e.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let u;
    window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, t, i)),
      this.valueSubscriptions.set(t, () => {
        a(), u && u(), i.owner && i.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Cs) {
      const i = Cs[t];
      if (!i) continue;
      const { isEnabled: s, Feature: a } = i;
      if (
        (!this.features[t] &&
          a &&
          s(this.props) &&
          (this.features[t] = new a(this)),
        this.features[t])
      ) {
        const u = this.features[t];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = i);
    for (let s = 0; s < uy.length; s++) {
      const a = uy[s];
      this.propEventSubscriptions[a] &&
        (this.propEventSubscriptions[a](),
        delete this.propEventSubscriptions[a]);
      const u = "on" + a,
        c = t[u];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    (this.prevMotionValues = cN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i)
      return (
        i.variantChildren && i.variantChildren.add(t),
        () => i.variantChildren.delete(t)
      );
  }
  addValue(t, i) {
    const s = this.values.get(t);
    i !== s &&
      (s && this.removeValue(t),
      this.bindToMotionValue(t, i),
      this.values.set(t, i),
      (this.latestValues[t] = i.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let s = this.values.get(t);
    return (
      s === void 0 &&
        i !== void 0 &&
        ((s = Ss(i === null ? void 0 : i, { owner: this })),
        this.addValue(t, s)),
      s
    );
  }
  readValue(t, i) {
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (Gv(s) || Qv(s))
          ? (s = parseFloat(s))
          : !xj(s) && Kr.test(i) && (s = Rx(t, i)),
        this.setBaseTarget(t, pt(s) ? s.get() : s)),
      pt(s) ? s.get() : s
    );
  }
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  getBaseTarget(t) {
    var u;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const c = eh(
        this.props,
        i,
        (u = this.presenceContext) == null ? void 0 : u.custom
      );
      c && (s = c[t]);
    }
    if (i && s !== void 0) return s;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !pt(a)
      ? a
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new Rf()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
  scheduleRenderMicrotask() {
    Hf.render(this.render);
  }
}
class nw extends dN {
  constructor() {
    super(...arguments), (this.KeyframeResolver = aj);
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    return t.style ? t.style[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: s }) {
    delete i[t], delete s[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pt(t) &&
      (this.childSubscription = t.on("change", (i) => {
        this.current && (this.current.textContent = `${i}`);
      }));
  }
}
function rw(e, { style: t, vars: i }, s, a) {
  const u = e.style;
  let c;
  for (c in t) u[c] = t[c];
  a == null || a.applyProjectionStyles(u, s);
  for (c in i) u.setProperty(c, i[c]);
}
function fN(e) {
  return window.getComputedStyle(e);
}
class hN extends nw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = rw);
  }
  readValueFromInstance(t, i) {
    var s;
    if (Rs.has(i))
      return (s = this.projection) != null && s.isProjecting ? zd(i) : Pk(t, i);
    {
      const a = fN(t),
        u = (Df(i) ? a.getPropertyValue(i) : a[i]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return ew(t, i);
  }
  build(t, i, s) {
    Xf(t, i, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, s) {
    return th(t, i, s);
  }
}
const iw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function pN(e, t, i, s) {
  rw(e, t, void 0, s);
  for (const a in t.attrs) e.setAttribute(iw.has(a) ? a : nh(a), t.attrs[a]);
}
class mN extends nw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ye);
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (Rs.has(i)) {
      const s = Nx(i);
      return (s && s.default) || 0;
    }
    return (i = iw.has(i) ? i : nh(i)), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, s) {
    return Gx(t, i, s);
  }
  build(t, i, s) {
    Ux(t, i, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(t, i, s, a) {
    pN(t, i, s, a);
  }
  mount(t) {
    (this.isSVGTag = Hx(t.tagName)), super.mount(t);
  }
}
const gN = (e, t) =>
  Zf(e) ? new mN(t) : new hN(t, { allowProjection: e !== S.Fragment });
function ds(e, t, i) {
  const s = e.getProps();
  return eh(s, t, i !== void 0 ? i : s.custom, e);
}
const qd = (e) => Array.isArray(e);
function yN(e, t, i) {
  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, Ss(i));
}
function vN(e) {
  return qd(e) ? e[e.length - 1] || 0 : e;
}
function xN(e, t) {
  const i = ds(e, t);
  let { transitionEnd: s = {}, transition: a = {}, ...u } = i || {};
  u = { ...u, ...s };
  for (const c in u) {
    const d = vN(u[c]);
    yN(e, c, d);
  }
}
function wN(e) {
  return !!(pt(e) && e.add);
}
function Xd(e, t) {
  const i = e.getValue("willChange");
  if (wN(i)) return i.add(t);
  if (!i && rr.WillChange) {
    const s = new rr.WillChange("auto");
    e.addValue("willChange", s), s.add(t);
  }
}
function sw(e) {
  return e.props[Yx];
}
const bN = (e) => e !== null;
function SN(e, { repeat: t, repeatType: i = "loop" }, s) {
  const a = e.filter(bN),
    u = t && i !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
  return a[u];
}
const CN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  TN = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  EN = { type: "keyframes", duration: 0.8 },
  PN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  kN = (e, { keyframes: t }) =>
    t.length > 2
      ? EN
      : Rs.has(e)
      ? e.startsWith("scale")
        ? TN(t[1])
        : CN
      : PN;
function jN({
  when: e,
  delay: t,
  delayChildren: i,
  staggerChildren: s,
  staggerDirection: a,
  repeat: u,
  repeatType: c,
  repeatDelay: d,
  from: h,
  elapsed: p,
  ...g
}) {
  return !!Object.keys(g).length;
}
const rh =
  (e, t, i, s = {}, a, u) =>
  (c) => {
    const d = Uf(s, e) || {},
      h = d.delay || s.delay || 0;
    let { elapsed: p = 0 } = s;
    p = p - Vn(h);
    const g = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...d,
      delay: -p,
      onUpdate: (w) => {
        t.set(w), d.onUpdate && d.onUpdate(w);
      },
      onComplete: () => {
        c(), d.onComplete && d.onComplete();
      },
      name: e,
      motionValue: t,
      element: u ? void 0 : a,
    };
    jN(d) || Object.assign(g, kN(e, g)),
      g.duration && (g.duration = Vn(g.duration)),
      g.repeatDelay && (g.repeatDelay = Vn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (Hd(g), g.delay === 0 && (v = !0)),
      (rr.instantAnimations || rr.skipAnimations) &&
        ((v = !0), Hd(g), (g.delay = 0)),
      (g.allowFlatten = !d.type && !d.ease),
      v && !u && t.get() !== void 0)
    ) {
      const w = SN(g.keyframes, d);
      if (w !== void 0) {
        _e.update(() => {
          g.onUpdate(w), g.onComplete();
        });
        return;
      }
    }
    return d.isSync ? new Bf(g) : new Qk(g);
  };
function NN({ protectedKeys: e, needsAnimating: t }, i) {
  const s = e.hasOwnProperty(i) && t[i] !== !0;
  return (t[i] = !1), s;
}
function ow(e, t, { delay: i = 0, transitionOverride: s, type: a } = {}) {
  let { transition: u = e.getDefaultTransition(), transitionEnd: c, ...d } = t;
  s && (u = s);
  const h = [],
    p = a && e.animationState && e.animationState.getState()[a];
  for (const g in d) {
    const v = e.getValue(g, e.latestValues[g] ?? null),
      w = d[g];
    if (w === void 0 || (p && NN(p, g))) continue;
    const x = { delay: i, ...Uf(u || {}, g) },
      E = v.get();
    if (
      E !== void 0 &&
      !v.isAnimating &&
      !Array.isArray(w) &&
      w === E &&
      !x.velocity
    )
      continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const k = sw(e);
      if (k) {
        const R = window.MotionHandoffAnimation(k, g, _e);
        R !== null && ((x.startTime = R), (C = !0));
      }
    }
    Xd(e, g),
      v.start(
        rh(g, v, w, e.shouldReduceMotion && Px.has(g) ? { type: !1 } : x, e, C)
      );
    const T = v.animation;
    T && h.push(T);
  }
  return (
    c &&
      Promise.all(h).then(() => {
        _e.update(() => {
          c && xN(e, c);
        });
      }),
    h
  );
}
function aw(e, t, i, s = 0, a = 1) {
  const u = Array.from(e)
      .sort((p, g) => p.sortNodePosition(g))
      .indexOf(t),
    c = e.size,
    d = (c - 1) * s;
  return typeof i == "function" ? i(u, c) : a === 1 ? u * s : d - u * s;
}
function Jd(e, t, i = {}) {
  var h;
  const s = ds(
    e,
    t,
    i.type === "exit"
      ? (h = e.presenceContext) == null
        ? void 0
        : h.custom
      : void 0
  );
  let { transition: a = e.getDefaultTransition() || {} } = s || {};
  i.transitionOverride && (a = i.transitionOverride);
  const u = s ? () => Promise.all(ow(e, s, i)) : () => Promise.resolve(),
    c =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: v,
              staggerDirection: w,
            } = a;
            return RN(e, t, p, g, v, w, i);
          }
        : () => Promise.resolve(),
    { when: d } = a;
  if (d) {
    const [p, g] = d === "beforeChildren" ? [u, c] : [c, u];
    return p().then(() => g());
  } else return Promise.all([u(), c(i.delay)]);
}
function RN(e, t, i = 0, s = 0, a = 0, u = 1, c) {
  const d = [];
  for (const h of e.variantChildren)
    h.notify("AnimationStart", t),
      d.push(
        Jd(h, t, {
          ...c,
          delay:
            i +
            (typeof s == "function" ? 0 : s) +
            aw(e.variantChildren, h, s, a, u),
        }).then(() => h.notify("AnimationComplete", t))
      );
  return Promise.all(d);
}
function AN(e, t, i = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const a = t.map((u) => Jd(e, u, i));
    s = Promise.all(a);
  } else if (typeof t == "string") s = Jd(e, t, i);
  else {
    const a = typeof t == "function" ? ds(e, t, i.custom) : t;
    s = Promise.all(ow(e, a, i));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function lw(e, t) {
  if (!Array.isArray(t)) return !1;
  const i = t.length;
  if (i !== e.length) return !1;
  for (let s = 0; s < i; s++) if (t[s] !== e[s]) return !1;
  return !0;
}
const MN = qf.length;
function uw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const i = e.parent ? uw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (i.initial = e.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < MN; i++) {
    const s = qf[i],
      a = e.props[s];
    (Io(a) || a === !1) && (t[s] = a);
  }
  return t;
}
const DN = [...Qf].reverse(),
  LN = Qf.length;
function ON(e) {
  return (t) =>
    Promise.all(t.map(({ animation: i, options: s }) => AN(e, i, s)));
}
function IN(e) {
  let t = ON(e),
    i = cy(),
    s = !0;
  const a = (h) => (p, g) => {
    var w;
    const v = ds(
      e,
      g,
      h === "exit"
        ? (w = e.presenceContext) == null
          ? void 0
          : w.custom
        : void 0
    );
    if (v) {
      const { transition: x, transitionEnd: E, ...C } = v;
      p = { ...p, ...C, ...E };
    }
    return p;
  };
  function u(h) {
    t = h(e);
  }
  function c(h) {
    const { props: p } = e,
      g = uw(e.parent) || {},
      v = [],
      w = new Set();
    let x = {},
      E = 1 / 0;
    for (let T = 0; T < LN; T++) {
      const k = DN[T],
        R = i[k],
        j = p[k] !== void 0 ? p[k] : g[k],
        D = Io(j),
        O = k === h ? R.isActive : null;
      O === !1 && (E = T);
      let B = j === g[k] && j !== p[k] && D;
      if (
        (B && s && e.manuallyAnimateOnMount && (B = !1),
        (R.protectedKeys = { ...x }),
        (!R.isActive && O === null) ||
          (!j && !R.prevProp) ||
          iu(j) ||
          typeof j == "boolean")
      )
        continue;
      const V = VN(R.prevProp, j);
      let H = V || (k === h && R.isActive && !B && D) || (T > E && D),
        te = !1;
      const Z = Array.isArray(j) ? j : [j];
      let de = Z.reduce(a(k), {});
      O === !1 && (de = {});
      const { prevResolvedValues: ne = {} } = R,
        ge = { ...ne, ...de },
        X = (ee) => {
          (H = !0),
            w.has(ee) && ((te = !0), w.delete(ee)),
            (R.needsAnimating[ee] = !0);
          const F = e.getValue(ee);
          F && (F.liveStyle = !1);
        };
      for (const ee in ge) {
        const F = de[ee],
          U = ne[ee];
        if (x.hasOwnProperty(ee)) continue;
        let G = !1;
        qd(F) && qd(U) ? (G = !lw(F, U)) : (G = F !== U),
          G
            ? F != null
              ? X(ee)
              : w.add(ee)
            : F !== void 0 && w.has(ee)
            ? X(ee)
            : (R.protectedKeys[ee] = !0);
      }
      (R.prevProp = j),
        (R.prevResolvedValues = de),
        R.isActive && (x = { ...x, ...de }),
        s && e.blockInitialAnimation && (H = !1);
      const ye = B && V;
      H &&
        (!ye || te) &&
        v.push(
          ...Z.map((ee) => {
            const F = { type: k };
            if (
              typeof ee == "string" &&
              s &&
              !ye &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: U } = e,
                G = ds(U, ee);
              if (U.enteringChildren && G) {
                const { delayChildren: M } = G.transition || {};
                F.delay = aw(U.enteringChildren, e, M);
              }
            }
            return { animation: ee, options: F };
          })
        );
    }
    if (w.size) {
      const T = {};
      if (typeof p.initial != "boolean") {
        const k = ds(e, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        k && k.transition && (T.transition = k.transition);
      }
      w.forEach((k) => {
        const R = e.getBaseTarget(k),
          j = e.getValue(k);
        j && (j.liveStyle = !0), (T[k] = R ?? null);
      }),
        v.push({ animation: T });
    }
    let C = !!v.length;
    return (
      s &&
        (p.initial === !1 || p.initial === p.animate) &&
        !e.manuallyAnimateOnMount &&
        (C = !1),
      (s = !1),
      C ? t(v) : Promise.resolve()
    );
  }
  function d(h, p) {
    var v;
    if (i[h].isActive === p) return Promise.resolve();
    (v = e.variantChildren) == null ||
      v.forEach((w) => {
        var x;
        return (x = w.animationState) == null ? void 0 : x.setActive(h, p);
      }),
      (i[h].isActive = p);
    const g = c(h);
    for (const w in i) i[w].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: c,
    setActive: d,
    setAnimateFunction: u,
    getState: () => i,
    reset: () => {
      i = cy();
    },
  };
}
function VN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !lw(t, e) : !1;
}
function di(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function cy() {
  return {
    animate: di(!0),
    whileInView: di(),
    whileHover: di(),
    whileTap: di(),
    whileDrag: di(),
    whileFocus: di(),
    exit: di(),
  };
}
class Yr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class _N extends Yr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = IN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    iu(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let FN = 0;
class zN extends Yr {
  constructor() {
    super(...arguments), (this.id = FN++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s) return;
    const a = this.node.animationState.setActive("exit", !t);
    i &&
      !t &&
      a.then(() => {
        i(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const BN = { animation: { Feature: _N }, exit: { Feature: zN } };
function _o(e, t, i, s = { passive: !0 }) {
  return e.addEventListener(t, i, s), () => e.removeEventListener(t, i);
}
function qo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const $N = (e) => (t) => Kf(t) && e(t, qo(t));
function To(e, t, i, s) {
  return _o(e, t, $N(i), s);
}
const cw = 1e-4,
  UN = 1 - cw,
  WN = 1 + cw,
  dw = 0.01,
  HN = 0 - dw,
  KN = 0 + dw;
function St(e) {
  return e.max - e.min;
}
function GN(e, t, i) {
  return Math.abs(e - t) <= i;
}
function dy(e, t, i, s = 0.5) {
  (e.origin = s),
    (e.originPoint = Be(t.min, t.max, e.origin)),
    (e.scale = St(i) / St(t)),
    (e.translate = Be(i.min, i.max, e.origin) - e.originPoint),
    ((e.scale >= UN && e.scale <= WN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= HN && e.translate <= KN) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Eo(e, t, i, s) {
  dy(e.x, t.x, i.x, s ? s.originX : void 0),
    dy(e.y, t.y, i.y, s ? s.originY : void 0);
}
function fy(e, t, i) {
  (e.min = i.min + t.min), (e.max = e.min + St(t));
}
function YN(e, t, i) {
  fy(e.x, t.x, i.x), fy(e.y, t.y, i.y);
}
function hy(e, t, i) {
  (e.min = t.min - i.min), (e.max = e.min + St(t));
}
function Po(e, t, i) {
  hy(e.x, t.x, i.x), hy(e.y, t.y, i.y);
}
function Jt(e) {
  return [e("x"), e("y")];
}
const fw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  py = (e, t) => Math.abs(e - t);
function QN(e, t) {
  const i = py(e.x, t.x),
    s = py(e.y, t.y);
  return Math.sqrt(i ** 2 + s ** 2);
}
class hw {
  constructor(
    t,
    i,
    {
      transformPagePoint: s,
      contextWindow: a = window,
      dragSnapToOrigin: u = !1,
      distanceThreshold: c = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const w = ud(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          E = QN(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !E) return;
        const { point: C } = w,
          { timestamp: T } = lt;
        this.history.push({ ...C, timestamp: T });
        const { onStart: k, onMove: R } = this.handlers;
        x ||
          (k && k(this.lastMoveEvent, w),
          (this.startEvent = this.lastMoveEvent)),
          R && R(this.lastMoveEvent, w);
      }),
      (this.handlePointerMove = (w, x) => {
        (this.lastMoveEvent = w),
          (this.lastMoveEventInfo = ld(x, this.transformPagePoint)),
          _e.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (w, x) => {
        this.end();
        const { onEnd: E, onSessionEnd: C, resumeAnimation: T } = this.handlers;
        if (
          (this.dragSnapToOrigin && T && T(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = ud(
          w.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ld(x, this.transformPagePoint),
          this.history
        );
        this.startEvent && E && E(w, k), C && C(w, k);
      }),
      !Kf(t))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = i),
      (this.transformPagePoint = s),
      (this.distanceThreshold = c),
      (this.contextWindow = a || window);
    const d = qo(t),
      h = ld(d, this.transformPagePoint),
      { point: p } = h,
      { timestamp: g } = lt;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: v } = i;
    v && v(t, ud(h, this.history)),
      (this.removeListeners = Go(
        To(this.contextWindow, "pointermove", this.handlePointerMove),
        To(this.contextWindow, "pointerup", this.handlePointerUp),
        To(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Hr(this.updatePoint);
  }
}
function ld(e, t) {
  return t ? { point: t(e.point) } : e;
}
function my(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ud({ point: e }, t) {
  return {
    point: e,
    delta: my(e, pw(t)),
    offset: my(e, qN(t)),
    velocity: XN(t, 0.1),
  };
}
function qN(e) {
  return e[0];
}
function pw(e) {
  return e[e.length - 1];
}
function XN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let i = e.length - 1,
    s = null;
  const a = pw(e);
  for (; i >= 0 && ((s = e[i]), !(a.timestamp - s.timestamp > Vn(t))); ) i--;
  if (!s) return { x: 0, y: 0 };
  const u = en(a.timestamp - s.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (a.x - s.x) / u, y: (a.y - s.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function JN(e, { min: t, max: i }, s) {
  return (
    t !== void 0 && e < t
      ? (e = s ? Be(t, e, s.min) : Math.max(e, t))
      : i !== void 0 && e > i && (e = s ? Be(i, e, s.max) : Math.min(e, i)),
    e
  );
}
function gy(e, t, i) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0,
  };
}
function ZN(e, { top: t, left: i, bottom: s, right: a }) {
  return { x: gy(e.x, i, a), y: gy(e.y, t, s) };
}
function yy(e, t) {
  let i = t.min - e.min,
    s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([i, s] = [s, i]), { min: i, max: s };
}
function eR(e, t) {
  return { x: yy(e.x, t.x), y: yy(e.y, t.y) };
}
function tR(e, t) {
  let i = 0.5;
  const s = St(e),
    a = St(t);
  return (
    a > s
      ? (i = Do(t.min, t.max - s, e.min))
      : s > a && (i = Do(e.min, e.max - a, t.min)),
    nr(0, 1, i)
  );
}
function nR(e, t) {
  const i = {};
  return (
    t.min !== void 0 && (i.min = t.min - e.min),
    t.max !== void 0 && (i.max = t.max - e.min),
    i
  );
}
const Zd = 0.35;
function rR(e = Zd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Zd),
    { x: vy(e, "left", "right"), y: vy(e, "top", "bottom") }
  );
}
function vy(e, t, i) {
  return { min: xy(e, t), max: xy(e, i) };
}
function xy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const iR = new WeakMap();
class sR {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ye()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: i = !1, distanceThreshold: s } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const u = (v) => {
        const { dragSnapToOrigin: w } = this.getProps();
        w ? this.pauseAnimation() : this.stopAnimation(),
          i && this.snapToCursor(qo(v).point);
      },
      c = (v, w) => {
        const { drag: x, dragPropagation: E, onDragStart: C } = this.getProps();
        if (
          x &&
          !E &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = dj(x)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Jt((k) => {
            let R = this.getAxisMotionValue(k).get() || 0;
            if (_n.test(R)) {
              const { projection: j } = this.visualElement;
              if (j && j.layout) {
                const D = j.layout.layoutBox[k];
                D && (R = St(D) * (parseFloat(R) / 100));
              }
            }
            this.originPoint[k] = R;
          }),
          C && _e.postRender(() => C(v, w)),
          Xd(this.visualElement, "transform");
        const { animationState: T } = this.visualElement;
        T && T.setActive("whileDrag", !0);
      },
      d = (v, w) => {
        (this.latestPointerEvent = v), (this.latestPanInfo = w);
        const {
          dragPropagation: x,
          dragDirectionLock: E,
          onDirectionLock: C,
          onDrag: T,
        } = this.getProps();
        if (!x && !this.openDragLock) return;
        const { offset: k } = w;
        if (E && this.currentDirection === null) {
          (this.currentDirection = oR(k)),
            this.currentDirection !== null && C && C(this.currentDirection);
          return;
        }
        this.updateAxis("x", w.point, k),
          this.updateAxis("y", w.point, k),
          this.visualElement.render(),
          T && T(v, w);
      },
      h = (v, w) => {
        (this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          this.stop(v, w),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      p = () =>
        Jt((v) => {
          var w;
          return (
            this.getAnimationState(v) === "paused" &&
            ((w = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : w.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new hw(
      t,
      {
        onSessionStart: u,
        onStart: c,
        onMove: d,
        onSessionEnd: h,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: s,
        contextWindow: fw(this.visualElement),
      }
    );
  }
  stop(t, i) {
    const s = t || this.latestPointerEvent,
      a = i || this.latestPanInfo,
      u = this.isDragging;
    if ((this.cancel(), !u || !a || !s)) return;
    const { velocity: c } = a;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && _e.postRender(() => d(s, a));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      i && i.setActive("whileDrag", !1);
  }
  updateAxis(t, i, s) {
    const { drag: a } = this.getProps();
    if (!s || !Sl(t, a, this.currentDirection)) return;
    const u = this.getAxisMotionValue(t);
    let c = this.originPoint[t] + s[t];
    this.constraints &&
      this.constraints[t] &&
      (c = JN(c, this.constraints[t], this.elastic[t])),
      u.set(c);
  }
  resolveConstraints() {
    var u;
    const { dragConstraints: t, dragElastic: i } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (u = this.visualElement.projection) == null
          ? void 0
          : u.layout,
      a = this.constraints;
    t && ss(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && s
      ? (this.constraints = ZN(s.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = rR(i)),
      a !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Jt((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = nR(s.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !ss(t)) return !1;
    const s = t.current,
      { projection: a } = this.visualElement;
    if (!a || !a.layout) return !1;
    const u = aN(s, a.root, this.visualElement.getTransformPagePoint());
    let c = eR(a.layout.layoutBox, u);
    if (i) {
      const d = i(iN(c));
      (this.hasMutatedConstraints = !!d), d && (c = Xx(d));
    }
    return c;
  }
  startAnimation(t) {
    const {
        drag: i,
        dragMomentum: s,
        dragElastic: a,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: d,
      } = this.getProps(),
      h = this.constraints || {},
      p = Jt((g) => {
        if (!Sl(g, i, this.currentDirection)) return;
        let v = (h && h[g]) || {};
        c && (v = { min: 0, max: 0 });
        const w = a ? 200 : 1e6,
          x = a ? 40 : 1e7,
          E = {
            type: "inertia",
            velocity: s ? t[g] : 0,
            bounceStiffness: w,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...v,
          };
        return this.startAxisValueAnimation(g, E);
      });
    return Promise.all(p).then(d);
  }
  startAxisValueAnimation(t, i) {
    const s = this.getAxisMotionValue(t);
    return (
      Xd(this.visualElement, t), s.start(rh(t, s, 0, i, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Jt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Jt((t) => {
      var i;
      return (i = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : i.pause();
    });
  }
  getAnimationState(t) {
    var i;
    return (i = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : i.state;
  }
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`,
      s = this.visualElement.getProps(),
      a = s[i];
    return (
      a ||
      this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Jt((i) => {
      const { drag: s } = this.getProps();
      if (!Sl(i, s, this.currentDirection)) return;
      const { projection: a } = this.visualElement,
        u = this.getAxisMotionValue(i);
      if (a && a.layout) {
        const { min: c, max: d } = a.layout.layoutBox[i];
        u.set(t[i] - Be(c, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: i } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ss(i) || !s || !this.constraints) return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Jt((c) => {
      const d = this.getAxisMotionValue(c);
      if (d && this.constraints !== !1) {
        const h = d.get();
        a[c] = tR({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Jt((c) => {
        if (!Sl(c, t, null)) return;
        const d = this.getAxisMotionValue(c),
          { min: h, max: p } = this.constraints[c];
        d.set(Be(h, p, a[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    iR.set(this.visualElement, this);
    const t = this.visualElement.current,
      i = To(t, "pointerdown", (h) => {
        const { drag: p, dragListener: g = !0 } = this.getProps();
        p && g && this.start(h);
      }),
      s = () => {
        const { dragConstraints: h } = this.getProps();
        ss(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: a } = this.visualElement,
      u = a.addEventListener("measure", s);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
      _e.read(s);
    const c = _o(window, "resize", () => this.scalePositionWithinConstraints()),
      d = a.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Jt((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += h[g].translate),
                v.set(v.get() + h[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      c(), i(), u(), d && d();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: i = !1,
        dragDirectionLock: s = !1,
        dragPropagation: a = !1,
        dragConstraints: u = !1,
        dragElastic: c = Zd,
        dragMomentum: d = !0,
      } = t;
    return {
      ...t,
      drag: i,
      dragDirectionLock: s,
      dragPropagation: a,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: d,
    };
  }
}
function Sl(e, t, i) {
  return (t === !0 || t === e) && (i === null || i === e);
}
function oR(e, t = 10) {
  let i = null;
  return Math.abs(e.y) > t ? (i = "y") : Math.abs(e.x) > t && (i = "x"), i;
}
class aR extends Yr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = tn),
      (this.removeListeners = tn),
      (this.controls = new sR(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || tn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const wy = (e) => (t, i) => {
  e && _e.postRender(() => e(t, i));
};
class lR extends Yr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = tn);
  }
  onPointerDown(t) {
    this.session = new hw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: i,
      onPan: s,
      onPanEnd: a,
    } = this.node.getProps();
    return {
      onSessionStart: wy(t),
      onStart: wy(i),
      onMove: s,
      onEnd: (u, c) => {
        delete this.session, a && _e.postRender(() => a(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = To(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Nl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function by(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const vo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ve.test(e)) e = parseFloat(e);
        else return e;
      const i = by(e, t.target.x),
        s = by(e, t.target.y);
      return `${i}% ${s}%`;
    },
  },
  uR = {
    correct: (e, { treeScale: t, projectionDelta: i }) => {
      const s = e,
        a = Kr.parse(e);
      if (a.length > 5) return s;
      const u = Kr.createTransformer(e),
        c = typeof a[0] != "number" ? 1 : 0,
        d = i.x.scale * t.x,
        h = i.y.scale * t.y;
      (a[0 + c] /= d), (a[1 + c] /= h);
      const p = Be(d, h, 0.5);
      return (
        typeof a[2 + c] == "number" && (a[2 + c] /= p),
        typeof a[3 + c] == "number" && (a[3 + c] /= p),
        u(a)
      );
    },
  };
let cd = !1;
class cR extends S.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: i,
        switchLayoutGroup: s,
        layoutId: a,
      } = this.props,
      { projection: u } = t;
    Mj(dR),
      u &&
        (i.group && i.group.add(u),
        s && s.register && a && s.register(u),
        cd && u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Nl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: i,
        visualElement: s,
        drag: a,
        isPresent: u,
      } = this.props,
      { projection: c } = s;
    return (
      c &&
        ((c.isPresent = u),
        (cd = !0),
        a || t.layoutDependency !== i || i === void 0 || t.isPresent !== u
          ? c.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              _e.postRender(() => {
                const d = c.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Hf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: i,
        switchLayoutGroup: s,
      } = this.props,
      { projection: a } = t;
    (cd = !0),
      a &&
        (a.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(a),
        s && s.deregister && s.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function mw(e) {
  const [t, i] = Vx(),
    s = S.useContext(Cf);
  return y.jsx(cR, {
    ...e,
    layoutGroup: s,
    switchLayoutGroup: S.useContext(Qx),
    isPresent: t,
    safeToRemove: i,
  });
}
const dR = {
  borderRadius: {
    ...vo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: vo,
  borderTopRightRadius: vo,
  borderBottomLeftRadius: vo,
  borderBottomRightRadius: vo,
  boxShadow: uR,
};
function fR(e, t, i) {
  const s = pt(e) ? e : Ss(e);
  return s.start(rh("", s, t, i)), s.animation;
}
const hR = (e, t) => e.depth - t.depth;
class pR {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Pf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    kf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(hR),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function mR(e, t) {
  const i = Mt.now(),
    s = ({ timestamp: a }) => {
      const u = a - i;
      u >= t && (Hr(s), e(u - t));
    };
  return _e.setup(s, !0), () => Hr(s);
}
const gw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  gR = gw.length,
  Sy = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Cy = (e) => typeof e == "number" || ve.test(e);
function yR(e, t, i, s, a, u) {
  a
    ? ((e.opacity = Be(0, i.opacity ?? 1, vR(s))),
      (e.opacityExit = Be(t.opacity ?? 1, 0, xR(s))))
    : u && (e.opacity = Be(t.opacity ?? 1, i.opacity ?? 1, s));
  for (let c = 0; c < gR; c++) {
    const d = `border${gw[c]}Radius`;
    let h = Ty(t, d),
      p = Ty(i, d);
    if (h === void 0 && p === void 0) continue;
    h || (h = 0),
      p || (p = 0),
      h === 0 || p === 0 || Cy(h) === Cy(p)
        ? ((e[d] = Math.max(Be(Sy(h), Sy(p), s), 0)),
          (_n.test(p) || _n.test(h)) && (e[d] += "%"))
        : (e[d] = p);
  }
  (t.rotate || i.rotate) && (e.rotate = Be(t.rotate || 0, i.rotate || 0, s));
}
function Ty(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const vR = yw(0, 0.5, rx),
  xR = yw(0.5, 0.95, tn);
function yw(e, t, i) {
  return (s) => (s < e ? 0 : s > t ? 1 : i(Do(e, t, s)));
}
function Ey(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function qt(e, t) {
  Ey(e.x, t.x), Ey(e.y, t.y);
}
function Py(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function ky(e, t, i, s, a) {
  return (
    (e -= t), (e = Bl(e, 1 / i, s)), a !== void 0 && (e = Bl(e, 1 / a, s)), e
  );
}
function wR(e, t = 0, i = 1, s = 0.5, a, u = e, c = e) {
  if (
    (_n.test(t) &&
      ((t = parseFloat(t)), (t = Be(c.min, c.max, t / 100) - c.min)),
    typeof t != "number")
  )
    return;
  let d = Be(u.min, u.max, s);
  e === u && (d -= t),
    (e.min = ky(e.min, t, i, d, a)),
    (e.max = ky(e.max, t, i, d, a));
}
function jy(e, t, [i, s, a], u, c) {
  wR(e, t[i], t[s], t[a], t.scale, u, c);
}
const bR = ["x", "scaleX", "originX"],
  SR = ["y", "scaleY", "originY"];
function Ny(e, t, i, s) {
  jy(e.x, t, bR, i ? i.x : void 0, s ? s.x : void 0),
    jy(e.y, t, SR, i ? i.y : void 0, s ? s.y : void 0);
}
function Ry(e) {
  return e.translate === 0 && e.scale === 1;
}
function vw(e) {
  return Ry(e.x) && Ry(e.y);
}
function Ay(e, t) {
  return e.min === t.min && e.max === t.max;
}
function CR(e, t) {
  return Ay(e.x, t.x) && Ay(e.y, t.y);
}
function My(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function xw(e, t) {
  return My(e.x, t.x) && My(e.y, t.y);
}
function Dy(e) {
  return St(e.x) / St(e.y);
}
function Ly(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class TR {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (kf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    const i = this.members.findIndex((a) => t === a);
    if (i === 0) return !1;
    let s;
    for (let a = i; a >= 0; a--) {
      const u = this.members[a];
      if (u.isPresent !== !1) {
        s = u;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(t, i) {
    const s = this.lead;
    if (t !== s && ((this.prevLead = s), (this.lead = t), t.show(), s)) {
      s.instance && s.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = s),
        i && (t.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((t.snapshot = s.snapshot),
          (t.snapshot.latestValues = s.animationValues || s.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: a } = t.options;
      a === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: i, resumingFrom: s } = t;
      i.onExitComplete && i.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ER(e, t, i) {
  let s = "";
  const a = e.x.translate / t.x,
    u = e.y.translate / t.y,
    c = (i == null ? void 0 : i.z) || 0;
  if (
    ((a || u || c) && (s = `translate3d(${a}px, ${u}px, ${c}px) `),
    (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `),
    i)
  ) {
    const {
      transformPerspective: p,
      rotate: g,
      rotateX: v,
      rotateY: w,
      skewX: x,
      skewY: E,
    } = i;
    p && (s = `perspective(${p}px) ${s}`),
      g && (s += `rotate(${g}deg) `),
      v && (s += `rotateX(${v}deg) `),
      w && (s += `rotateY(${w}deg) `),
      x && (s += `skewX(${x}deg) `),
      E && (s += `skewY(${E}deg) `);
  }
  const d = e.x.scale * t.x,
    h = e.y.scale * t.y;
  return (d !== 1 || h !== 1) && (s += `scale(${d}, ${h})`), s || "none";
}
const dd = ["", "X", "Y", "Z"],
  PR = 1e3;
let kR = 0;
function fd(e, t, i, s) {
  const { latestValues: a } = t;
  a[e] && ((i[e] = a[e]), t.setStaticValue(e, 0), s && (s[e] = 0));
}
function ww(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const i = sw(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: a, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(i, "transform", _e, !(a || u));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && ww(s);
}
function bw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: i,
  checkIsScrollRoot: s,
  resetTransform: a,
}) {
  return class {
    constructor(c = {}, d = t == null ? void 0 : t()) {
      (this.id = kR++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(RR),
            this.nodes.forEach(LR),
            this.nodes.forEach(OR),
            this.nodes.forEach(AR);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pR());
    }
    addEventListener(c, d) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new Rf()),
        this.eventHandlers.get(c).add(d)
      );
    }
    notifyListeners(c, ...d) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...d);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c) {
      if (this.instance) return;
      (this.isSVG = Ix(c) && !yj(c)), (this.instance = c);
      const { layoutId: d, layout: h, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (h || d) && (this.isLayoutDirty = !0),
        e)
      ) {
        let g,
          v = 0;
        const w = () => (this.root.updateBlockedByResize = !1);
        _e.read(() => {
          v = window.innerWidth;
        }),
          e(c, () => {
            const x = window.innerWidth;
            x !== v &&
              ((v = x),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = mR(w, 250)),
              Nl.hasAnimatedSinceResize &&
                ((Nl.hasAnimatedSinceResize = !1), this.nodes.forEach(Vy)));
          });
      }
      d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          p &&
          (d || h) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: w,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const E =
                  this.options.transition || p.getDefaultTransition() || zR,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: T } =
                  p.getProps(),
                k = !this.targetLayout || !xw(this.targetLayout, x),
                R = !v && w;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                R ||
                (v && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const j = { ...Uf(E, "layout"), onPlay: C, onComplete: T };
                (p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((j.delay = 0), (j.type = !1)),
                  this.startAnimation(j),
                  this.setAnimationOrigin(g, R);
              } else
                v || Vy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Hr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(IR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ww(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: d, layout: h } = this.options;
      if (d === void 0 && !h) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Oy);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Iy);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(DR),
            this.nodes.forEach(jR),
            this.nodes.forEach(NR))
          : this.nodes.forEach(Iy),
        this.clearAllSnapshots();
      const d = Mt.now();
      (lt.delta = nr(0, 1e3 / 60, d - lt.timestamp)),
        (lt.timestamp = d),
        (lt.isProcessing = !0),
        ed.update.process(lt),
        ed.preRender.process(lt),
        ed.render.process(lt),
        (lt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Hf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(MR), this.sharedNodes.forEach(VR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _e.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !St(this.snapshot.measuredBox.x) &&
          !St(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0
        );
    }
    updateScroll(c = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (d = !1),
        d && this.instance)
      ) {
        const h = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!a) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !vw(this.projectionDelta),
        h = this.getTransformTemplate(),
        p = h ? h(this.latestValues, "") : void 0,
        g = p !== this.prevTransformTemplateValue;
      c &&
        this.instance &&
        (d || hi(this.latestValues) || g) &&
        (a(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const d = this.measurePageBox();
      let h = this.removeElementScroll(d);
      return (
        c && (h = this.removeTransform(h)),
        BR(h),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: c } = this.options;
      if (!c) return Ye();
      const d = c.measureViewportBox();
      if (
        !(
          ((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some($R)
        )
      ) {
        const { scroll: g } = this.root;
        g && (os(d.x, g.offset.x), os(d.y, g.offset.y));
      }
      return d;
    }
    removeElementScroll(c) {
      var h;
      const d = Ye();
      if ((qt(d, c), (h = this.scroll) != null && h.wasRoot)) return d;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p],
          { scroll: v, options: w } = g;
        g !== this.root &&
          v &&
          w.layoutScroll &&
          (v.wasRoot && qt(d, c), os(d.x, v.offset.x), os(d.y, v.offset.y));
      }
      return d;
    }
    applyTransform(c, d = !1) {
      const h = Ye();
      qt(h, c);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !d &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          as(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          hi(g.latestValues) && as(h, g.latestValues);
      }
      return hi(this.latestValues) && as(h, this.latestValues), h;
    }
    removeTransform(c) {
      const d = Ye();
      qt(d, c);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        if (!p.instance || !hi(p.latestValues)) continue;
        Gd(p.latestValues) && p.updateSnapshot();
        const g = Ye(),
          v = p.measurePageBox();
        qt(g, v),
          Ny(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return hi(this.latestValues) && Ny(d, this.latestValues), d;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var w;
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== d;
      if (
        !(
          c ||
          (h && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((w = this.parent) != null && w.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!(!this.layout || !(g || v))) {
        if (
          ((this.resolvedRelativeTargetAt = lt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ye()),
              (this.relativeTargetOrigin = Ye()),
              Po(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox
              ),
              qt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ye()), (this.targetWithTransforms = Ye())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              YN(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : qt(this.target, this.layout.layoutBox),
              Zx(this.target, this.targetDelta))
            : qt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ye()),
              (this.relativeTargetOrigin = Ye()),
              Po(this.relativeTargetOrigin, this.target, x.target),
              qt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Gd(this.parent.latestValues) ||
          Jx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var E;
      const c = this.getLead(),
        d = !!this.resumingFrom || this !== c;
      let h = !0;
      if (
        ((this.isProjectionDirty ||
          ((E = this.parent) != null && E.isProjectionDirty)) &&
          (h = !1),
        d &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (h = !1),
        this.resolvedRelativeTargetAt === lt.timestamp && (h = !1),
        h)
      )
        return;
      const { layout: p, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || g))
      )
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        w = this.treeScale.y;
      oN(this.layoutCorrected, this.treeScale, this.path, d),
        c.layout &&
          !c.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((c.target = c.layout.layoutBox), (c.targetWithTransforms = Ye()));
      const { target: x } = c;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Py(this.prevProjectionDelta.x, this.projectionDelta.x),
          Py(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Eo(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== w ||
          !Ly(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ly(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var d;
      if (((d = this.options.visualElement) == null || d.scheduleRender(), c)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ls()),
        (this.projectionDelta = ls()),
        (this.projectionDeltaWithTransform = ls());
    }
    setAnimationOrigin(c, d = !1) {
      const h = this.snapshot,
        p = h ? h.latestValues : {},
        g = { ...this.latestValues },
        v = ls();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const w = Ye(),
        x = h ? h.source : void 0,
        E = this.layout ? this.layout.source : void 0,
        C = x !== E,
        T = this.getStack(),
        k = !T || T.members.length <= 1,
        R = !!(C && !k && this.options.crossfade === !0 && !this.path.some(FR));
      this.animationProgress = 0;
      let j;
      (this.mixTargetDelta = (D) => {
        const O = D / 1e3;
        _y(v.x, c.x, O),
          _y(v.y, c.y, O),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Po(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            _R(this.relativeTarget, this.relativeTargetOrigin, w, O),
            j && CR(this.relativeTarget, j) && (this.isProjectionDirty = !1),
            j || (j = Ye()),
            qt(j, this.relativeTarget)),
          C &&
            ((this.animationValues = g), yR(g, p, this.latestValues, O, R, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = O);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      var d, h, p;
      this.notifyListeners("animationStart"),
        (d = this.currentAnimation) == null || d.stop(),
        (p = (h = this.resumingFrom) == null ? void 0 : h.currentAnimation) ==
          null || p.stop(),
        this.pendingAnimation &&
          (Hr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _e.update(() => {
          (Nl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ss(0)),
            (this.currentAnimation = fR(this.motionValue, [0, 1e3], {
              ...c,
              velocity: 0,
              isSync: !0,
              onUpdate: (g) => {
                this.mixTargetDelta(g), c.onUpdate && c.onUpdate(g);
              },
              onStop: () => {},
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(PR),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: d,
        target: h,
        layout: p,
        latestValues: g,
      } = c;
      if (!(!d || !h || !p)) {
        if (
          this !== c &&
          this.layout &&
          p &&
          Sw(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          h = this.target || Ye();
          const v = St(this.layout.layoutBox.x);
          (h.x.min = c.target.x.min), (h.x.max = h.x.min + v);
          const w = St(this.layout.layoutBox.y);
          (h.y.min = c.target.y.min), (h.y.max = h.y.min + w);
        }
        qt(d, h),
          as(d, g),
          Eo(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(c, d) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new TR()),
        this.sharedNodes.get(c).add(d);
      const p = d.options.initialPromotionConfig;
      d.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: c } = this.options;
      return c
        ? ((d = this.getStack()) == null ? void 0 : d.lead) || this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: c } = this.options;
      return c ? ((d = this.getStack()) == null ? void 0 : d.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: d, preserveFollowOpacity: h } = {}) {
      const p = this.getStack();
      p && p.promote(this, h),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let d = !1;
      const { latestValues: h } = c;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const p = {};
      h.z && fd("z", c, p, this.animationValues);
      for (let g = 0; g < dd.length; g++)
        fd(`rotate${dd[g]}`, c, p, this.animationValues),
          fd(`skew${dd[g]}`, c, p, this.animationValues);
      c.render();
      for (const g in p)
        c.setStaticValue(g, p[g]),
          this.animationValues && (this.animationValues[g] = p[g]);
      c.scheduleRender();
    }
    applyProjectionStyles(c, d) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        c.visibility = "hidden";
        return;
      }
      const h = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (c.visibility = ""),
          (c.opacity = ""),
          (c.pointerEvents = jl(d == null ? void 0 : d.pointerEvents) || ""),
          (c.transform = h ? h(this.latestValues, "") : "none");
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId &&
          ((c.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (c.pointerEvents = jl(d == null ? void 0 : d.pointerEvents) || "")),
          this.hasProjected &&
            !hi(this.latestValues) &&
            ((c.transform = h ? h({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      c.visibility = "";
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let v = ER(this.projectionDeltaWithTransform, this.treeScale, g);
      h && (v = h(g, v)), (c.transform = v);
      const { x: w, y: x } = this.projectionDelta;
      (c.transformOrigin = `${w.origin * 100}% ${x.origin * 100}% 0`),
        p.animationValues
          ? (c.opacity =
              p === this
                ? g.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : g.opacityExit)
          : (c.opacity =
              p === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                ? g.opacityExit
                : 0);
      for (const E in Vo) {
        if (g[E] === void 0) continue;
        const { correct: C, applyTo: T, isCSSVariable: k } = Vo[E],
          R = v === "none" ? g[E] : C(g[E], p);
        if (T) {
          const j = T.length;
          for (let D = 0; D < j; D++) c[T[D]] = R;
        } else
          k ? (this.options.visualElement.renderState.vars[E] = R) : (c[E] = R);
      }
      this.options.layoutId &&
        (c.pointerEvents =
          p === this ? jl(d == null ? void 0 : d.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var d;
        return (d = c.currentAnimation) == null ? void 0 : d.stop();
      }),
        this.root.nodes.forEach(Oy),
        this.root.sharedNodes.clear();
    }
  };
}
function jR(e) {
  e.updateLayout();
}
function NR(e) {
  var i;
  const t = ((i = e.resumeFrom) == null ? void 0 : i.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: a } = e.layout,
      { animationType: u } = e.options,
      c = t.source !== e.layout.source;
    u === "size"
      ? Jt((v) => {
          const w = c ? t.measuredBox[v] : t.layoutBox[v],
            x = St(w);
          (w.min = s[v].min), (w.max = w.min + x);
        })
      : Sw(u, t.layoutBox, s) &&
        Jt((v) => {
          const w = c ? t.measuredBox[v] : t.layoutBox[v],
            x = St(s[v]);
          (w.max = w.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[v].max = e.relativeTarget[v].min + x));
        });
    const d = ls();
    Eo(d, s, t.layoutBox);
    const h = ls();
    c ? Eo(h, e.applyTransform(a, !0), t.measuredBox) : Eo(h, s, t.layoutBox);
    const p = !vw(d);
    let g = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: w, layout: x } = v;
        if (w && x) {
          const E = Ye();
          Po(E, t.layoutBox, w.layoutBox);
          const C = Ye();
          Po(C, s, x.layoutBox),
            xw(E, C) || (g = !0),
            v.options.layoutRoot &&
              ((e.relativeTarget = C),
              (e.relativeTargetOrigin = E),
              (e.relativeParent = v));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: t,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g,
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function RR(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function MR(e) {
  e.clearSnapshot();
}
function Oy(e) {
  e.clearMeasurements();
}
function Iy(e) {
  e.isLayoutDirty = !1;
}
function DR(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Vy(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function LR(e) {
  e.resolveTargetDelta();
}
function OR(e) {
  e.calcProjection();
}
function IR(e) {
  e.resetSkewAndRotation();
}
function VR(e) {
  e.removeLeadSnapshot();
}
function _y(e, t, i) {
  (e.translate = Be(t.translate, 0, i)),
    (e.scale = Be(t.scale, 1, i)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Fy(e, t, i, s) {
  (e.min = Be(t.min, i.min, s)), (e.max = Be(t.max, i.max, s));
}
function _R(e, t, i, s) {
  Fy(e.x, t.x, i.x, s), Fy(e.y, t.y, i.y, s);
}
function FR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const zR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zy = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  By = zy("applewebkit/") && !zy("chrome/") ? Math.round : tn;
function $y(e) {
  (e.min = By(e.min)), (e.max = By(e.max));
}
function BR(e) {
  $y(e.x), $y(e.y);
}
function Sw(e, t, i) {
  return (
    e === "position" || (e === "preserve-aspect" && !GN(Dy(t), Dy(i), 0.2))
  );
}
function $R(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const UR = bw({
    attachResizeListener: (e, t) => _o(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  hd = { current: void 0 },
  Cw = bw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!hd.current) {
        const e = new UR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (hd.current = e);
      }
      return hd.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  WR = {
    pan: { Feature: lR },
    drag: { Feature: aR, ProjectionNode: Cw, MeasureLayout: mw },
  };
function Uy(e, t, i) {
  const { props: s } = e;
  e.animationState &&
    s.whileHover &&
    e.animationState.setActive("whileHover", i === "Start");
  const a = "onHover" + i,
    u = s[a];
  u && _e.postRender(() => u(t, qo(t)));
}
class HR extends Yr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = fj(
        t,
        (i, s) => (Uy(this.node, s, "Start"), (a) => Uy(this.node, a, "End"))
      ));
  }
  unmount() {}
}
class KR extends Yr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Go(
      _o(this.node.current, "focus", () => this.onFocus()),
      _o(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Wy(e, t, i) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    s.whileTap &&
    e.animationState.setActive("whileTap", i === "Start");
  const a = "onTap" + (i === "End" ? "" : i),
    u = s[a];
  u && _e.postRender(() => u(t, qo(t)));
}
class GR extends Yr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = gj(
        t,
        (i, s) => (
          Wy(this.node, s, "Start"),
          (a, { success: u }) => Wy(this.node, a, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const ef = new WeakMap(),
  pd = new WeakMap(),
  YR = (e) => {
    const t = ef.get(e.target);
    t && t(e);
  },
  QR = (e) => {
    e.forEach(YR);
  };
function qR({ root: e, ...t }) {
  const i = e || document;
  pd.has(i) || pd.set(i, {});
  const s = pd.get(i),
    a = JSON.stringify(t);
  return s[a] || (s[a] = new IntersectionObserver(QR, { root: e, ...t })), s[a];
}
function XR(e, t, i) {
  const s = qR(t);
  return (
    ef.set(e, i),
    s.observe(e),
    () => {
      ef.delete(e), s.unobserve(e);
    }
  );
}
const JR = { some: 0, all: 1 };
class ZR extends Yr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: i, margin: s, amount: a = "some", once: u } = t,
      c = {
        root: i ? i.current : void 0,
        rootMargin: s,
        threshold: typeof a == "number" ? a : JR[a],
      },
      d = (h) => {
        const { isIntersecting: p } = h;
        if (
          this.isInView === p ||
          ((this.isInView = p), u && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          w = p ? g : v;
        w && w(h);
      };
    return XR(this.node.current, c, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(eA(t, i)) && this.startObserver();
  }
  unmount() {}
}
function eA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (i) => e[i] !== t[i];
}
const tA = {
    inView: { Feature: ZR },
    tap: { Feature: GR },
    focus: { Feature: KR },
    hover: { Feature: HR },
  },
  nA = { layout: { ProjectionNode: Cw, MeasureLayout: mw } },
  rA = { ...BN, ...tA, ...WR, ...nA },
  W = rN(rA, gN),
  iA = "/assets/hero1-a78G4EMh.jpeg",
  sA = "/assets/hero2-PScA86KF.jpeg",
  Pi = "/assets/hero3-CtYhehTa.jpeg",
  oA = "/assets/hero4-CBTihNuU.jpeg",
  aA = "/assets/hero5-Bt81OZE9.jpeg",
  lA = "/assets/hero6-McRkRJz2.jpeg",
  Xo = "/assets/hero7-CHWIsBNb.jpeg",
  Tw = "/assets/hero8-DsBJJe-G.jpeg",
  Ew = "/assets/hero9-CJLnAMzJ.jpeg",
  Pw = "/assets/hero10-BUHY5-7g.jpeg",
  ih = "/assets/rudilogo-BuACPhqM.png",
  uA = "/assets/holiday-inn-bath-DFeTXWa6.jpg",
  cA = ({
    images: e = [iA, sA, Pi, oA, aA, lA, Xo, Tw, Ew, Pw],
    groomName: t = "Rudolf",
    brideName: i = "Jemima",
    subtitle: s = "Are Getting Married",
    className: a = "",
  }) => {
    const [u, c] = S.useState(0);
    return (
      S.useEffect(() => {
        const d = setInterval(() => {
          c((h) => (h + 1) % e.length);
        }, 6e3);
        return () => clearInterval(d);
      }, [e.length]),
      y.jsxs("section", {
        className: `relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden ${a}`,
        style: { backgroundColor: "#333333" },
        children: [
          y.jsxs("div", {
            className: "absolute inset-0 w-full h-full overflow-hidden",
            children: [
              y.jsx(Yf, {
                mode: "wait",
                children: y.jsx(
                  W.div,
                  {
                    className: "absolute inset-0 w-full h-full",
                    initial: { opacity: 0, scale: 1.03 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.98 },
                    transition: { duration: 1.5, ease: "easeInOut" },
                    children: y.jsx("img", {
                      src: e[u],
                      alt: `Hero ${u + 1}`,
                      className: "w-full h-full object-cover",
                      style: { pointerEvents: "none" },
                    }),
                  },
                  u
                ),
              }),
              y.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-black/55 via-wedding-terracotta-900/30 to-transparent",
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "relative z-10 h-full max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-center",
            children: y.jsxs("div", {
              className: "text-center",
              children: [
                y.jsxs(W.h1, {
                  initial: { y: 30, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 1, ease: "easeOut", delay: 0.5 },
                  className:
                    "text-wedding-cream-500 font-rochester text-5xl sm:text-6xl md:text-7xl lg:text-[102.4px] mb-2 break-words",
                  style: {
                    fontFamily: "Rochester, cursive",
                    lineHeight: "1.5",
                  },
                  children: [t, " & ", i],
                }),
                y.jsx(W.span, {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.8, ease: "easeOut", delay: 1 },
                  className:
                    "inline-block bg-wedding-cream-100 text-wedding-terracotta-500 px-4 py-2 rounded-sm text-sm font-black tracking-[7px] uppercase",
                  children: s,
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Hy = [
    { name: "Home", href: "/" },
    { name: "Groom & Bride", href: "/groom-bride" },
    { name: "Greetings", href: "/greetings" },
    { name: "When & Where", href: "/when-where" },
    { name: "Hotels", href: "/hotels" },
    { name: "RSVP", href: "/rsvp" },
    { name: "Gift", href: "/gift" },
  ];
function Ni() {
  const [e, t] = S.useState(!1),
    i = (s) => {
      if ((t(!1), !s.startsWith("/") && s.startsWith("#"))) {
        const a = document.querySelector(s);
        a && a.scrollIntoView({ behavior: "smooth" });
      }
    };
  return y.jsxs(W.header, {
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    className:
      "fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-sidebar-border/30 shadow-md",
    children: [
      y.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 flex justify-between items-center",
        children: [
          y.jsx(zr, {
            to: "/",
            children: y.jsx(W.div, {
              className:
                "text-wedding-terracotta-500 text-xl font-bold uppercase tracking-wider transition-colors duration-300 hover:text-wedding-terracotta-600 whitespace-nowrap",
              whileHover: { scale: 1.05 },
              transition: { type: "spring", stiffness: 400, damping: 10 },
              children: y.jsx("img", {
                src: ih,
                alt: "Rudolf & Jemima Wedding Logo",
                className:
                  "h-14 rounded-full bg-wedding-cream-100 border-2 border-wedding-cream-100 w-14 object-contain",
              }),
            }),
          }),
          y.jsx("nav", {
            className: "hidden items-center md:flex space-x-6",
            children: Hy.map((s, a) =>
              s.href.startsWith("/")
                ? y.jsx(
                    zr,
                    {
                      to: s.href,
                      children: y.jsx(W.div, {
                        whileHover: { scale: 1.1 },
                        transition: { type: "spring", stiffness: 300 },
                        className:
                          "relative block text-sm font-semibold text-wedding-cream-500 uppercase transition-colors duration-300 hover:text-wedding-terracotta-500 cursor-pointer",
                        children: s.name,
                      }),
                    },
                    a
                  )
                : y.jsx(
                    W.a,
                    {
                      href: s.href,
                      whileHover: { scale: 1.1 },
                      transition: { type: "spring", stiffness: 300 },
                      className:
                        "relative block text-sm font-semibold text-wedding-cream-500 uppercase transition-colors duration-300 hover:text-wedding-terracotta-500",
                      onClick: (u) => {
                        u.preventDefault(), i(s.href);
                      },
                      children: s.name,
                    },
                    a
                  )
            ),
          }),
          y.jsx("div", {
            className: "md:hidden text-wedding-cream-500 ",
            children: e
              ? y.jsx(z0, { size: 24, onClick: () => t(!1) })
              : y.jsx(WS, { size: 24, onClick: () => t(!0) }),
          }),
        ],
      }),
      y.jsx(Yf, {
        children:
          e &&
          y.jsx(W.div, {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.3 },
            className:
              "md:hidden bg-background text-wedding-cream-500 flex flex-col items-center space-y-5 py-6",
            children: Hy.map((s, a) =>
              s.href.startsWith("/")
                ? y.jsx(
                    zr,
                    {
                      to: s.href,
                      onClick: () => t(!1),
                      children: y.jsx(W.div, {
                        whileHover: { scale: 1.05 },
                        className:
                          "font-medium hover:text-wedding-olive-600 transition cursor-pointer",
                        children: s.name,
                      }),
                    },
                    a
                  )
                : y.jsx(
                    W.a,
                    {
                      href: s.href,
                      whileHover: { scale: 1.05 },
                      onClick: () => i(s.href),
                      className:
                        "font-medium hover:text-wedding-olive-600 transition",
                      children: s.name,
                    },
                    a
                  )
            ),
          }),
      }),
    ],
  });
}
const dA = ({ targetDate: e = "2026-03-07T16:00:00", className: t = "" }) => {
    const [i, s] = S.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
      a = () => {
        const d = +new Date(e) - +new Date();
        return d > 0
          ? {
              days: Math.floor(d / (1e3 * 60 * 60 * 24)),
              hours: Math.floor((d / (1e3 * 60 * 60)) % 24),
              minutes: Math.floor((d / 1e3 / 60) % 60),
              seconds: Math.floor((d / 1e3) % 60),
            }
          : { days: 0, hours: 0, minutes: 0, seconds: 0 };
      };
    S.useEffect(() => {
      const d = setTimeout(() => {
        s(a());
      }, 1e3);
      return () => clearTimeout(d);
    }),
      S.useEffect(() => {
        s(a());
      }, [e]);
    const u = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      },
      c = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "backOut" },
        },
      };
    return y.jsxs(W.div, {
      variants: u,
      initial: "hidden",
      animate: "visible",
      className: `relative w-full bg-wedding-terracotta-500 rounded shadow-lg flex ${t}`,
      children: [
        y.jsx(W.div, {
          variants: c,
          className:
            "w-1/5 bg-wedding-olive-500 flex items-center justify-center py-2 text-wedding-cream-50 text-center",
          children: y.jsxs("h3", {
            className:
              "font-rochester text-lg sm:text-xl md:text-3xl leading-tight text-center w-full px-2",
            children: [
              y.jsx("span", { children: "Save" }),
              y.jsx("br", {}),
              y.jsx("span", { children: "the Date" }),
            ],
          }),
        }),
        y.jsxs(W.div, {
          variants: c,
          className:
            "w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20",
          children: [
            y.jsx("span", {
              className:
                "font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight",
              children: i.days.toString().padStart(2, "0"),
            }),
            y.jsx("span", {
              className: "text-xs font-semibold uppercase tracking-wider mt-1",
              children: "Days",
            }),
          ],
        }),
        y.jsxs(W.div, {
          variants: c,
          className:
            "w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20",
          children: [
            y.jsx("span", {
              className:
                "font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight",
              children: i.hours.toString().padStart(2, "0"),
            }),
            y.jsx("span", {
              className: "text-xs font-semibold uppercase tracking-wider mt-1",
              children: "Hours",
            }),
          ],
        }),
        y.jsxs(W.div, {
          variants: c,
          className:
            "w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20",
          children: [
            y.jsx("span", {
              className:
                "font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight",
              children: i.minutes.toString().padStart(2, "0"),
            }),
            y.jsx("span", {
              className: "text-xs font-semibold uppercase tracking-wider mt-1",
              children: "Minutes",
            }),
          ],
        }),
        y.jsxs(W.div, {
          variants: c,
          className:
            "w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20",
          children: [
            y.jsx(
              W.span,
              {
                initial: { scale: 1.2, opacity: 0.8 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.3 },
                className:
                  "font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight",
                children: i.seconds.toString().padStart(2, "0"),
              },
              i.seconds
            ),
            y.jsx("span", {
              className: "text-xs font-semibold uppercase tracking-wider mt-1",
              children: "Seconds",
            }),
          ],
        }),
        y.jsx("div", {
          className: "absolute -top-2 -left-2 pointer-events-none",
          children: y.jsx(W.div, {
            animate: { rotate: [0, 10, 0], scale: [1, 1.1, 1] },
            transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
            className: "w-4 h-4 text-wedding-olive-300",
            children: "❤️",
          }),
        }),
        y.jsx("div", {
          className: "absolute -bottom-2 -right-2 pointer-events-none",
          children: y.jsx(W.div, {
            animate: { rotate: [0, -10, 0], scale: [1, 1.1, 1] },
            transition: {
              duration: 2.5,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: 1,
            },
            className: "w-4 h-4 text-wedding-olive-300",
            children: "💕",
          }),
        }),
      ],
    });
  },
  $l = ({ name: e, description: t, image: i, isGroom: s = !1, index: a }) => {
    const u = {
        hidden: { opacity: 0, y: 50, x: s ? 50 : -50 },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut", delay: a * 0.3 },
        },
      },
      c = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: "backOut", delay: a * 0.3 + 0.2 },
        },
      };
    return y.jsxs(W.div, {
      variants: u,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: !0, margin: "-100px" },
      className: "flex flex-col lg:flex-row w-full relative mb-8 lg:mb-0",
      children: [
        y.jsxs(W.div, {
          variants: c,
          className: `w-full lg:w-[400px] h-[300px] lg:h-[400px] relative overflow-hidden ${
            s
              ? "lg:order-2 lg:ml-12 lg:mr-auto"
              : "lg:order-1 lg:mr-12 lg:ml-auto"
          }`,
          children: [
            y.jsx("img", {
              src: i,
              alt: e,
              className: "w-full h-full object-cover block",
            }),
            y.jsx("div", {
              className: "absolute inset-0",
              style: {
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
              },
            }),
          ],
        }),
        y.jsxs(W.div, {
          className: `relative pt-6 lg:pt-8 ${
            s
              ? "lg:order-1 lg:text-right lg:pr-12"
              : "lg:order-2 lg:text-left lg:pl-12"
          } w-full lg:w-[calc(100%-400px)]`,
          children: [
            y.jsx("div", {
              className: `hidden lg:block absolute ${
                s ? "right-5" : "left-5"
              } bottom-0 opacity-10 pointer-events-none`,
              children: y.jsx("span", {
                className: "text-[100px] leading-none font-bold",
                style: { color: "rgba(0,0,0,0.12)" },
                children: s ? "G" : "B",
              }),
            }),
            y.jsx(W.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: a * 0.3 + 0.4 },
              className: `font-rochester text-3xl lg:text-5xl leading-tight mb-4 ${
                s ? "lg:text-right" : "lg:text-left"
              } text-center lg:text-left text-white`,
              children: e,
            }),
            y.jsx(W.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: a * 0.3 + 0.6 },
              className: `text-gray-300 leading-relaxed mb-4 ${
                s ? "lg:text-right" : "lg:text-left"
              } text-center lg:text-left`,
              children: t,
            }),
            y.jsx("div", {
              className:
                "flex justify-center lg:justify-start items-center gap-2 mt-6",
              children: [...Array(3)].map((d, h) =>
                y.jsx(
                  W.div,
                  {
                    initial: { scale: 0 },
                    whileInView: { scale: 1 },
                    transition: {
                      duration: 0.4,
                      delay: a * 0.3 + 0.8 + h * 0.1,
                      ease: "backOut",
                    },
                    className: "w-2 h-2 rounded-full bg-gray-500",
                  },
                  h
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  fA = I0(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Gr = S.forwardRef(
    ({ className: e, variant: t, size: i, asChild: s = !1, ...a }, u) => {
      const c = s ? Ub : "button";
      return y.jsx(c, {
        className: Lt(fA({ variant: t, size: i, className: e })),
        ref: u,
        ...a,
      });
    }
  );
Gr.displayName = "Button";
const Fo = { _origin: "https://api.emailjs.com" },
  hA = (e, t = "https://api.emailjs.com") => {
    (Fo._userID = e), (Fo._origin = t);
  },
  kw = (e, t, i) => {
    if (!e)
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!i)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Ky {
  constructor(t) {
    (this.status = t.status), (this.text = t.responseText);
  }
}
const jw = (e, t, i = {}) =>
    new Promise((s, a) => {
      const u = new XMLHttpRequest();
      u.addEventListener("load", ({ target: c }) => {
        const d = new Ky(c);
        d.status === 200 || d.text === "OK" ? s(d) : a(d);
      }),
        u.addEventListener("error", ({ target: c }) => {
          a(new Ky(c));
        }),
        u.open("POST", Fo._origin + e, !0),
        Object.keys(i).forEach((c) => {
          u.setRequestHeader(c, i[c]);
        }),
        u.send(t);
    }),
  pA = (e, t, i, s) => {
    const a = s || Fo._userID;
    return (
      kw(a, e, t),
      jw(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.2.0",
          user_id: a,
          service_id: e,
          template_id: t,
          template_params: i,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  mA = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  gA = (e, t, i, s) => {
    const a = s || Fo._userID,
      u = mA(i);
    kw(a, e, t);
    const c = new FormData(u);
    return (
      c.append("lib_version", "3.2.0"),
      c.append("service_id", e),
      c.append("template_id", t),
      c.append("user_id", a),
      jw("/api/v1.0/email/send-form", c)
    );
  },
  Gy = { init: hA, send: pA, sendForm: gA },
  Nw = ({ className: e = "" }) => {
    const [t, i] = S.useState({
        name: "",
        email: "",
        phone: "",
        hasPartner: "",
        partnerName: "",
      }),
      [s, a] = S.useState(!1),
      [u, c] = S.useState(!1),
      d = (w) => {
        const { name: x, value: E } = w.target;
        i((C) => ({ ...C, [x]: E }));
      },
      h = async (w) => {
        if ((w.preventDefault(), !t.email.includes("@"))) {
          alert("Please enter a valid email.");
          return;
        }
        c(!0);
        try {
          await Gy.send(
            "service_y2g2qwa",
            "template_c1kotls",
            {
              name: t.name,
              email: t.email,
              phone: t.phone,
              hasPartner: t.hasPartner,
              partnerName: t.partnerName,
            },
            "WKoNBQ1OVuVUkgbI2"
          ),
            await Gy.send(
              "service_y2g2qwa",
              "template_r1t0uh5",
              {
                name: t.name,
                email: t.email,
                phone: t.phone,
                hasPartner: t.hasPartner,
                partnerName: t.partnerName,
              },
              "WKoNBQ1OVuVUkgbI2"
            ),
            a(!0);
        } catch (x) {
          console.error("EmailJS Error:", x),
            alert("Something went wrong. Please try again later.");
        } finally {
          c(!1), window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      p =
        "w-full h-12 px-3 py-2 border-b border-wedding-terracotta-400 focus:border-wedding-terracotta-600 bg-transparent text-gray-800 font-semibold focus:outline-none",
      g = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      },
      v = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };
    return s
      ? y.jsxs("div", {
          className: "relative h-screen flex items-center justify-center",
          children: [
            y.jsx(W.div, {
              initial: { scale: 1.1, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1 },
              className: "absolute inset-0 bg-fixed bg-cover bg-center",
              style: { backgroundImage: `url(${Pi})` },
            }),
            y.jsx("div", { className: "absolute inset-0 bg-black/50" }),
            y.jsx(W.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.6 },
              className: `relative z-10 text-center ${e}`,
              children: y.jsxs("div", {
                className:
                  "bg-wedding-cream-100 rounded-lg p-8 shadow-xl max-w-md mx-auto",
                children: [
                  y.jsx(W.div, {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { duration: 0.6, delay: 0.2, ease: "backOut" },
                    className:
                      "w-16 h-16 bg-wedding-olive-200 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: y.jsx("span", {
                      className: "text-2xl",
                      children: "🍃",
                    }),
                  }),
                  y.jsx("h3", {
                    className:
                      "text-2xl font-rochester mb-4 text-wedding-terracotta-600",
                    children: "Thank You!",
                  }),
                  y.jsx("p", {
                    className: "text-gray-600",
                    children:
                      "We've received your RSVP and can't wait to celebrate with you on our special day!",
                  }),
                ],
              }),
            }),
          ],
        })
      : y.jsxs("section", {
          className: "relative h-screen flex items-center justify-center",
          children: [
            y.jsx(W.div, {
              initial: { scale: 1.1, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1.2, ease: "easeOut" },
              className: "absolute inset-0 bg-fixed bg-cover bg-center",
              style: { backgroundImage: `url(${Pi})` },
            }),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-black/60 via-wedding-terracotta-900/50 to-wedding-olive-700/40",
            }),
            y.jsx(W.div, {
              variants: g,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `relative z-10 max-w-[1100px] w-full mx-auto px-4 ${e}`,
              children: y.jsx("div", {
                className: "flex flex-wrap -mx-4",
                children: y.jsxs("div", {
                  className: "w-full lg:w-6/12 px-4",
                  children: [
                    y.jsxs(W.div, {
                      variants: v,
                      className: "mb-6 text-center lg:text-left",
                      children: [
                        y.jsx("span", {
                          className:
                            "inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-cream-500 border-wedding-terracotta-300",
                          children: "Invitation",
                        }),
                        y.jsx("h2", {
                          className:
                            "font-rochester text-4xl lg:text-6xl leading-tight mb-4 text-wedding-cream-500",
                          children: "Will You Attend?",
                        }),
                      ],
                    }),
                    y.jsxs(W.form, {
                      variants: v,
                      onSubmit: h,
                      className:
                        "space-y-4 bg-wedding-cream-100/90 backdrop-blur-sm rounded-lg p-6 shadow-lg",
                      children: [
                        y.jsxs("label", {
                          children: [
                            y.jsx("span", {
                              className: "sr-only",
                              children: "Full Name",
                            }),
                            y.jsx("input", {
                              type: "text",
                              name: "name",
                              placeholder: "Your Full Name",
                              value: t.name,
                              onChange: d,
                              required: !0,
                              className: p,
                            }),
                          ],
                        }),
                        y.jsxs("label", {
                          children: [
                            y.jsx("span", {
                              className: "sr-only",
                              children: "Email",
                            }),
                            y.jsx("input", {
                              type: "email",
                              name: "email",
                              placeholder: "Your Email Address",
                              value: t.email,
                              onChange: d,
                              required: !0,
                              className: p,
                            }),
                          ],
                        }),
                        y.jsxs("label", {
                          children: [
                            y.jsx("span", {
                              className: "sr-only",
                              children: "Phone",
                            }),
                            y.jsx("input", {
                              type: "tel",
                              name: "phone",
                              placeholder: "Your Phone Number",
                              value: t.phone,
                              onChange: d,
                              required: !0,
                              className: p,
                            }),
                          ],
                        }),
                        y.jsx("div", {
                          className: "pt-4",
                          children: y.jsx(Gr, {
                            type: "submit",
                            disabled: u,
                            className:
                              "w-full flex items-center justify-center gap-2 bg-wedding-terracotta-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-wedding-terracotta-600 transition disabled:opacity-50",
                            children: u
                              ? y.jsxs(y.Fragment, {
                                  children: [
                                    y.jsx("div", {
                                      className:
                                        "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                    }),
                                    "Sending...",
                                  ],
                                })
                              : y.jsxs(y.Fragment, {
                                  children: [
                                    y.jsx(KS, { className: "w-4 h-4" }),
                                    "Confirm Attendance",
                                  ],
                                }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
  };
function md(e) {
  const t = new Date(e);
  return isNaN(t.getTime())
    ? new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    : t.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
function yA({
  title: e,
  description: t = "",
  start: i,
  end: s,
  location: a = "",
}) {
  const u = md(i),
    c = s ? md(s) : u,
    h = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//equip-for-excellence//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${`${Date.now()}@local`}`,
      `DTSTAMP:${md(new Date().toISOString())}`,
      `DTSTART:${u}`,
      `DTEND:${c}`,
      `SUMMARY:${e}`,
      `DESCRIPTION:${t}`,
      `LOCATION:${a}`,
    ],
    p = arguments[0],
    g = (p == null ? void 0 : p.reminders) ?? [];
  if (Array.isArray(g) && g.length > 0)
    for (const v of g) {
      const w = `-PT${Math.abs(Math.round(v))}M`;
      h.push("BEGIN:VALARM"),
        h.push("ACTION:DISPLAY"),
        h.push(`DESCRIPTION:Reminder for ${e}`),
        h.push(`TRIGGER:${w}`),
        h.push("END:VALARM");
    }
  return (
    h.push("END:VEVENT", "END:VCALENDAR"),
    h.join(`\r
`)
  );
}
const vA = "/assets/champagne-BPlFG7me.jpg",
  xA = "/assets/car-CI-0HS3q.jpg",
  Yy = ({
    title: e,
    date: t,
    time: i,
    address: s,
    phone: a,
    mapUrl: u,
    icon: c,
    noBg: d = !1,
    index: h,
  }) => {
    const p = {
        hidden: { opacity: 0, y: 50 },
        visible: (x = 0) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: x * 0.2,
          },
        }),
      },
      g = async () => {
        try {
          await navigator.clipboard.writeText(s),
            xo({
              title: "Address copied",
              description: "Event address copied to clipboard.",
            });
        } catch {
          xo({
            title: "Copy failed",
            description: "Could not copy address to clipboard.",
          });
        }
      },
      v = () => {
        try {
          const x = yA({
              title: e,
              description: s,
              start: t,
              end: t,
              location: s,
              reminders: [1440, 60],
            }),
            E = new Blob([x], { type: "text/calendar;charset=utf-8" }),
            C = URL.createObjectURL(E),
            T = document.createElement("a");
          (T.href = C),
            (T.download = `${e.replace(/\s+/g, "_")}.ics`),
            document.body.appendChild(T),
            T.click(),
            T.remove(),
            URL.revokeObjectURL(C),
            xo({
              title: "Calendar saved",
              description: "An .ics file was downloaded.",
            });
        } catch {
          xo({
            title: "Download failed",
            description: "Could not create calendar file.",
          });
        }
      },
      w = () => {
        const x =
            new Date(t).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
          E = x;
        return `https://calendar.google.com/calendar/u/0/r/eventedit?${new URLSearchParams(
          { text: e, dates: `${x}/${E}`, details: s, location: s }
        ).toString()}`;
      };
    return y.jsx(W.div, {
      custom: h,
      variants: p,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: !0, margin: "-100px" },
      className: "flex justify-center w-full lg:w-1/2 px-4",
      children: y.jsxs("div", {
        className: "text-center max-w-xs sm:max-w-sm",
        children: [
          y.jsx(W.div, {
            initial: { scale: 0, rotate: -180 },
            whileInView: { scale: 1, rotate: 0 },
            transition: {
              duration: 0.6,
              ease: "backOut",
              delay: h * 0.2 + 0.3,
            },
            className: `${
              d ? "" : "bg-wedding-cream-100"
            } w-[110px] h-[110px] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`,
            style: { boxShadow: "rgba(0, 0, 0, 0.75) 0px 10px 32px -30px" },
            children: y.jsx("div", {
              className:
                "w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden",
              children: c,
            }),
          }),
          y.jsx(W.h3, {
            className:
              "text-2xl lg:text-[28px] leading-tight mb-2 text-wedding-terracotta-600 font-semibold",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: h * 0.2 + 0.5 },
            children: e,
          }),
          y.jsxs(W.div, {
            className: "mb-4 text-wedding-cream-500",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: h * 0.2 + 0.6 },
            children: [
              y.jsxs("div", {
                className: "flex items-center justify-center gap-2 mb-1",
                children: [
                  y.jsx(Zm, { className: "w-4 h-4" }),
                  y.jsx("span", {
                    children: new Date(t).toLocaleDateString(void 0, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                  y.jsx(FS, { className: "w-4 h-4" }),
                  y.jsx("span", { children: i }),
                ],
              }),
            ],
          }),
          y.jsxs(W.p, {
            className: "mb-4 text-wedding-cream-500 leading-relaxed",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: h * 0.2 + 0.7 },
            children: [y.jsx(F0, { className: "w-4 h-4 inline mr-1" }), s],
          }),
          y.jsx(W.p, {
            className: "mb-4",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: h * 0.2 + 0.8 },
            children: y.jsxs("a", {
              href: `tel:${a}`,
              className:
                "transition-colors duration-300 hover:opacity-80 text-wedding-terracotta-600",
              children: [y.jsx(HS, { className: "w-4 h-4 inline mr-1" }), a],
            }),
          }),
          y.jsxs(W.div, {
            className:
              "flex flex-col sm:flex-row items-center justify-center gap-3",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: h * 0.2 + 0.9 },
            children: [
              y.jsx("a", {
                href: u,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-80 text-wedding-terracotta-600 border-b border-wedding-terracotta-300 w-full sm:w-auto",
                children: y.jsx("span", { children: "See Map" }),
              }),
              y.jsxs("button", {
                onClick: g,
                className:
                  "inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider bg-yellow-500 text-white rounded shadow-sm hover:opacity-90 w-full sm:w-auto",
                children: [
                  y.jsx(zS, { className: "w-4 h-4" }),
                  y.jsx("span", { children: "Copy Address" }),
                ],
              }),
              y.jsxs("div", {
                className: "flex gap-2 w-full sm:w-auto",
                children: [
                  y.jsxs("button", {
                    onClick: v,
                    className:
                      "inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider bg-yellow-500 text-white rounded shadow-sm hover:opacity-90 w-full sm:w-auto",
                    children: [
                      y.jsx(BS, { className: "w-4 h-4" }),
                      y.jsx("span", { children: "Download .ics" }),
                    ],
                  }),
                  y.jsxs("a", {
                    href: w(),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider bg-wedding-terracotta-600 text-wedding-cream-500 rounded shadow-sm hover:opacity-90 w-full sm:w-auto",
                    children: [
                      y.jsx(Zm, { className: "w-4 h-4" }),
                      y.jsx("span", { children: "Add to Google Calendar" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Rw = ({ className: e = "" }) => {
    const t = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, staggerChildren: 0.2 },
      },
    };
    return y.jsx("div", {
      className: `py-12 px-4 ${e}`,
      style: { backgroundColor: "#333333" },
      children: y.jsxs(W.div, {
        variants: t,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, margin: "-100px" },
        className: "flex flex-wrap -mx-4",
        children: [
          y.jsxs("div", {
            className: "w-full px-4 mb-6 text-center",
            children: [
              y.jsx(W.span, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className:
                  "inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-500 border-wedding-terracotta-300",
                children: "Planning",
              }),
              y.jsx(W.h2, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className:
                  "font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-wedding-cream-500",
                children: "When & Where",
              }),
            ],
          }),
          y.jsxs("div", {
            className:
              "flex flex-wrap lg:flex-nowrap gap-8 lg:gap-4 justify-center w-full px-4",
            children: [
              y.jsx(Yy, {
                title: "Parking Location",
                date: "2026-03-07T13:00:00",
                address:
                  "Charlotte Street Car Park, Charlotte St, Bath BA1 2NE, United Kingdom",
                phone: "‪+44 (7984) 004626",
                mapUrl: "https://maps.app.goo.gl/Ua2QC5WvXWQzkqen8",
                icon: y.jsx("img", {
                  src: xA,
                  alt: "Parking Car",
                  className: "w-full h-full object-cover rounded-full",
                }),
                index: 0,
              }),
              y.jsx(Yy, {
                title: "The Reception",
                date: "2026-03-07T15:30:00",
                time: "3:30 PM - 9:00 PM",
                address:
                  "Percy Community Centre, New King St, Bath BA1 2BN, United Kingdom",
                phone: "‪+44 (7984) 004626",
                mapUrl: "https://maps.app.goo.gl/nDgwxcxTP9i5JkEi7",
                icon: y.jsx("img", {
                  src: vA,
                  alt: "Champagne",
                  className: "w-full h-full object-cover rounded-full",
                }),
                index: 1,
              }),
            ],
          }),
          y.jsx("div", {
            className: "w-full px-4 mt-12",
            children: y.jsx(W.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.6 },
              className:
                "bg-wedding-cream-100 rounded-lg shadow-lg overflow-hidden",
              children: y.jsx("iframe", {
                className: "w-full h-64 sm:h-96",
                style: { border: 0 },
                loading: "lazy",
                allowFullScreen: !0,
                referrerPolicy: "no-referrer-when-downgrade",
                title: "Percy Community Centre, Bath",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.216240197166!2d-2.3595092844524716!3d51.38130997962559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f0f3c5b1f3d%3A0x2f3f6f6c5e0a1a6b!2sPercy%20Community%20Centre%2C%20New%20King%20St%2C%20Bath%20BA1%202BN%2C%20UK!5e0!3m2!1sen!2sus!4v1697625600000",
              }),
            }),
          }),
        ],
      }),
    });
  },
  Aw = S.forwardRef(({ className: e, ...t }, i) =>
    y.jsx("div", {
      ref: i,
      className: Lt(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
Aw.displayName = "Card";
const wA = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx("div", {
    ref: i,
    className: Lt("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
wA.displayName = "CardHeader";
const bA = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx("h3", {
    ref: i,
    className: Lt("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
bA.displayName = "CardTitle";
const SA = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx("p", {
    ref: i,
    className: Lt("text-sm text-muted-foreground", e),
    ...t,
  })
);
SA.displayName = "CardDescription";
const Mw = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx("div", { ref: i, className: Lt("p-6 pt-0", e), ...t })
);
Mw.displayName = "CardContent";
const CA = S.forwardRef(({ className: e, ...t }, i) =>
  y.jsx("div", { ref: i, className: Lt("flex items-center p-6 pt-0", e), ...t })
);
CA.displayName = "CardFooter";
const fi = {
    name: "Holiday Inn Express Bath by IHG",
    description:
      "Our recommended accommodation for wedding guests. Comfortable rooms with modern amenities, conveniently located in Bath. We encourage you to book early to secure your stay for our special weekend.",
    mapLink: "https://maps.app.goo.gl/f3nykhVeLm6uGASq8",
    image: uA,
    price: "",
  },
  Dw = () =>
    y.jsx("section", {
      id: "hotels",
      className:
        "relative py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background",
      children: y.jsxs("div", {
        className: "container mx-auto max-w-6xl",
        children: [
          y.jsxs(W.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: !0 },
            className: "text-center mb-16",
            children: [
              y.jsx("p", {
                className: "text-sm uppercase tracking-wider text-primary mb-2",
                children: "Where to Stay",
              }),
              y.jsx("h2", {
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-rochester",
                children: "Recommended Accommodation",
              }),
            ],
          }),
          y.jsx(W.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: !0 },
            className: "max-w-3xl mx-auto",
            children: y.jsxs(Aw, {
              className:
                "overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-[rgba(0,0,0,0.55)] backdrop-blur-sm border-primary/10",
              children: [
                y.jsxs("div", {
                  className: "relative aspect-[16/9] overflow-hidden",
                  children: [
                    y.jsx("img", {
                      src: fi.image,
                      alt: fi.name,
                      className:
                        "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
                    }),
                    y.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent",
                    }),
                    y.jsxs("div", {
                      "aria-hidden": !0,
                      className: "absolute top-4 right-4 rounded-md shadow-lg",
                      style: {
                        backgroundColor: "#D4AF37",
                        color: "#F8F8F8",
                        padding: "8px 12px",
                        fontWeight: 700,
                      },
                      children: [
                        y.jsx("span", {
                          className: "text-sm",
                          children: "From",
                        }),
                        y.jsx("div", {
                          className: "text-lg leading-none",
                          children: fi.price,
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs(Mw, {
                  className: "p-8 space-y-6",
                  children: [
                    y.jsxs("div", {
                      className: "text-center space-y-3",
                      children: [
                        y.jsx("h3", {
                          className:
                            "text-2xl md:text-3xl font-bold text-wedding-cream-500",
                          children: fi.name,
                        }),
                        y.jsxs("div", {
                          className: "flex items-center justify-center gap-4",
                          children: [
                            y.jsx("p", {
                              className:
                                "text-wedding-cream-500 text-2xl font-extrabold",
                              children: fi.price,
                            }),
                            y.jsx("p", {
                              className:
                                "text-wedding-cream-200 text-base leading-relaxed max-w-xl",
                              children: fi.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    y.jsx("div", {
                      className: "pt-4",
                      children: y.jsxs("a", {
                        href: fi.mapLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0b0b0b] px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition",
                        children: [
                          y.jsx(F0, { className: "w-5 h-5" }),
                          "View Location & Book",
                          y.jsx($S, {
                            className:
                              "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          y.jsx(W.p, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: !0 },
            className:
              "text-center text-wedding-terracotta-500 font-semibold mt-12 text-base max-w-2xl mx-auto bg-wedding-cream-100 p-4 rounded-lg shadow-sm border border-wedding-terracotta-200",
            children:
              "This is our recommended hotel for all wedding guests. Please book early to secure your room for our special celebration.",
          }),
        ],
      }),
    }),
  TA = (e) => {
    const t = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    };
    return y.jsx("div", {
      children: y.jsx(W.section, {
        id: "rsvp-section",
        variants: t,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, margin: "-100px" },
        className: "py-20 bg-gradient-to-r from-black via-gray-800 to-gray-700",
        children: y.jsxs("div", {
          className: "max-w-4xl mx-auto text-center px-4",
          children: [
            y.jsx(W.h2, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              className:
                "font-rochester text-4xl md:text-5xl leading-tight text-pink-300",
              children: "Will You Join Us?",
            }),
            y.jsx(W.p, {
              className: "text-xl text-gray-200 mb-12 max-w-2xl mx-auto",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children:
                "Your presence would make our special day even more meaningful. Please let us know if you can celebrate with us!",
            }),
            y.jsx(W.p, {
              className: "text-xl text-gray-200 mb-12 max-w-2xl mx-auto",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children:
                "With sincere respect, please note that this celebration is by invitation only. We ask that this be honoured, as it is a gathering meant to be shared in intimacy and intention. We can’t wait to mark this sacred moment with you",
            }),
            y.jsxs(W.div, {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              children: [
                y.jsx("a", {
                  href: "#rsvp-section",
                  children: y.jsxs(Gr, {
                    size: "lg",
                    className:
                      "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                    children: [
                      y.jsx(Si, { className: "w-5 h-5 mr-2" }),
                      "RSVP Yes",
                    ],
                  }),
                }),
                y.jsx("a", {
                  href: "/registry",
                  children: y.jsx(Gr, {
                    variant: "outline",
                    size: "lg",
                    className:
                      "border-2 border-pink-300 bg-white hover:bg-pink-50 text-pink-700 font-semibold px-8 py-4 text-lg rounded-full",
                    children: "View Registry",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  As = () =>
    y.jsx("footer", {
      className:
        "py-12 bg-gradient-to-r from-wedding-cream-300 to-wedding-olive-400",
      children: y.jsx("div", {
        className: "max-w-4xl mx-auto text-center px-4",
        children: y.jsxs(W.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "space-y-4",
          children: [
            y.jsx("img", {
              src: ih,
              alt: "Rudolf & Jemima Wedding Logo",
              className:
                "w-16 h-16 object-contain mx-auto rounded-lg border-white border-2 shadow-lg bg-white",
            }),
            y.jsx("h3", {
              className: "text-2xl font-rochester text-pink-700",
              children: "Rudolf & Jemima",
            }),
            y.jsxs("p", {
              className: "text-gray-600",
              children: [
                "Thank you for being part of our love story",
                y.jsx("br", {}),
                "With sincere respect, please note that this celebration is by invitation only. We ask that this be honoured, as it is a gathering meant to be shared in intimacy and intention. We can’t wait to mark this sacred moment with you",
              ],
            }),
            y.jsx("p", {
              className: "text-sm text-gray-500",
              children: "March 7, 2026 • Percy Community Centre",
            }),
          ],
        }),
      }),
    }),
  EA = () => {
    const [e, t] = S.useState(!1);
    return y.jsx("div", {
      children: y.jsx("div", {
        className: "fixed bottom-4 right-4 z-50 flex",
        children: y.jsx(zr, {
          to: "/gift",
          children: y.jsxs("button", {
            className:
              "flex items-center gap-2 px-4 py-2 bg-wedding-terracotta-500 text-white rounded-full shadow-lg shadow-black/20 hover:bg-wedding-terracotta-600 transition-transform transform hover:scale-105 active:scale-95",
            children: [
              y.jsx(uf, { className: "w-5 h-5" }),
              y.jsx("span", {
                className: "font-semibold text-sm",
                children: "Give a Gift",
              }),
            ],
          }),
        }),
      }),
    });
  },
  ir = ({ zIndex: e = 10, showBackground: t = !0 } = {}) => {
    const [i, s] = S.useState([]),
      a = ["#FFD700", "#FFB400", "#FFFFFF"],
      u = "#000000";
    S.useEffect(() => {
      const d = () => {
        const g = window.innerWidth < 768 ? 25 : 40,
          v = Array.from({ length: g }, (w, x) => {
            const E = 10 + Math.random() * 18;
            return {
              id: x,
              x: Math.random() * 100,
              delay: Math.random() * 5,
              duration: 8 + Math.random() * 8,
              size: E,
              opacity: 0.6 + Math.random() * 0.4,
              drift: -20 + Math.random() * 40,
              rotation: Math.random() * 360,
              type: ["star", "sparkle", "diamond"][
                Math.floor(Math.random() * 3)
              ],
              color: a[Math.floor(Math.random() * a.length)],
            };
          });
        s(v);
      };
      d();
      const h = () => {
        s([]), setTimeout(d, 100);
      };
      return (
        window.addEventListener("resize", h),
        () => window.removeEventListener("resize", h)
      );
    }, []);
    const c = (d, h, p) => {
      const g = { width: h, height: h };
      switch (d) {
        case "star":
          return y.jsx("svg", {
            ...g,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: y.jsx("path", {
              d: "M12 2l2.9 6.24L21 9.27l-5 3.86L17.8 21 12 17.77 6.2 21 8 13.13 3 9.27l6.1-1.03L12 2z",
              fill: p,
            }),
          });
        case "diamond":
          return y.jsx("svg", {
            ...g,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: y.jsx("path", { d: "M12 2l7 7-7 13L5 9l7-7z", fill: p }),
          });
        case "sparkle":
        default:
          return y.jsx("svg", {
            ...g,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: y.jsx("path", {
              d: "M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2z",
              fill: p,
            }),
          });
      }
    };
    return i.length === 0
      ? null
      : y.jsx("div", {
          className: "fixed inset-0 pointer-events-none overflow-hidden",
          style: { zIndex: e, backgroundColor: t ? u : "transparent" },
          children: i.map((d) =>
            y.jsx(
              W.div,
              {
                className: "absolute",
                style: {
                  left: `${d.x}%`,
                  top: "-50px",
                  fontSize: `${d.size}px`,
                  opacity: d.opacity,
                  filter: `drop-shadow(0 0 ${Math.max(5, d.size / 4)}px ${
                    d.color
                  })`,
                  willChange: "transform",
                },
                initial: { y: -50, x: 0, rotate: d.rotation },
                animate: {
                  y: ["0vh", "100vh"],
                  x: [0, d.drift],
                  rotate: [0, d.rotation + 360],
                  scale: [1, 1.1, 1],
                },
                transition: {
                  duration: d.duration,
                  delay: d.delay,
                  repeat: 1 / 0,
                  ease: "linear",
                },
                children: y.jsxs(W.span, {
                  style: { display: "inline-block", lineHeight: 0 },
                  animate: {
                    scale: [1, 1.2, 1],
                    opacity: [
                      d.opacity,
                      Math.min(1, d.opacity * 1.3),
                      d.opacity,
                    ],
                  },
                  transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
                  children: [
                    y.jsx("span", {
                      style: {
                        display: "inline-block",
                        transform: "translateZ(0)",
                        filter: `blur(${Math.max(6, d.size / 5)}px)`,
                        opacity: 0.85,
                      },
                      "aria-hidden": "true",
                      children: c(d.type, Math.round(d.size * 1.3), d.color),
                    }),
                    y.jsx("span", {
                      style: {
                        display: "inline-block",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      children: c(d.type, d.size, d.color),
                    }),
                  ],
                }),
              },
              d.id
            )
          ),
        });
  },
  PA = () => {
    const e = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsxs("section", {
          id: "home-section",
          className: "relative",
          children: [
            y.jsx(cA, {}),
            y.jsx("div", {
              className:
                "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-20",
              children: y.jsx(dA, {}),
            }),
          ],
        }),
        y.jsx("section", {
          id: "groom-bride-section",
          className: "pt-32 pb-20 px-4",
          style: { backgroundColor: "#333333" },
          children: y.jsxs("div", {
            className: "max-w-[1100px] mx-auto",
            children: [
              y.jsxs(W.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.8 },
                className: "text-center mb-12 lg:mb-16",
                children: [
                  y.jsx(W.span, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-gray-300 border-gray-500",
                    children: "About Bride & Groom",
                  }),
                  y.jsx(W.h2, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.4 },
                    className:
                      "font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-white",
                    children: "Bride & Groom",
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "space-y-12 lg:space-y-20",
                children: [
                  y.jsx($l, {
                    name: "Rudolf",
                    description:
                      "Rudolf’s the kind of guy who brings a calm, steady vibe wherever he goes. He genuinely cares, gets involved, and is always ready to jump in and help out. When he commits to something or someone he’s all in, no hesitation. He shows his love through actions more than words, always showing up and following through. He’s the type who plans ahead, stays wise, and somehow still cracks a good joke when you need it. Rudolf’s also smart, the kind of intelligent that earns real respect but he never brags about it. He’s humble about his accomplishments and always quick to lift others up instead of talking about himself. He’s got big dreams but stays grounded, never forgetting what really matters. And at the heart of it all is his strong Christian faith you can feel it in everything he does: how he loves, leads, and lives.",
                    image: Xo,
                    isGroom: !0,
                    index: 0,
                  }),
                  y.jsx($l, {
                    name: "Jemima",
                    description:
                      "She’s incredibly loving and caring always checking in and making sure the people around her feel welcomed, supported, and valued. She’s the kind of person you can count on for a warm hug, a listening ear, or a good laugh when you need it most. Friendly and down-to-earth, she makes everyone feel like they’ve known her forever. She’s smart, thoughtful, artistic, quick-witted, and full of great ideas. Above all, her love for God shines through in the way she loves with grace, kindness, and quiet strength. Being around her is easy, comforting, and inspiring all at once. And a tip for visitors: bring her flowers and a box of chocolates you’ll be in her good books.",
                    image: Pi,
                    isGroom: !1,
                    index: 1,
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("section", { id: "when-where-section", children: y.jsx(Rw, {}) }),
        y.jsx(W.section, {
          id: "dress-code-section",
          variants: e,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-100px" },
          className:
            "py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
          children: y.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
              y.jsx(W.span, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className:
                  "inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-400 border-wedding-terracotta-300",
                children: "Wedding Attire",
              }),
              y.jsx(W.h2, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className:
                  "font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-600 mb-8",
                children: "Dress Code",
              }),
              y.jsxs(W.div, {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.6 },
                className:
                  "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md mx-auto border border-wedding-terracotta-200",
                children: [
                  y.jsx("div", {
                    className:
                      "w-16 h-16 bg-wedding-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: y.jsx("span", {
                      className: "text-3xl",
                      children: "👗",
                    }),
                  }),
                  y.jsx("h3", {
                    className:
                      "text-2xl font-rochester text-wedding-terracotta-600 mb-4",
                    children: "White",
                  }),
                  y.jsx("p", {
                    className: "text-gray-600",
                    children:
                      "Please come dressed in white to celebrate our special day with us.",
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("section", { id: "hotels-section", children: y.jsx(Dw, {}) }),
        y.jsx(W.section, {
          id: "greeting-section",
          variants: e,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-100px" },
          className:
            "py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
          children: y.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
              y.jsx(W.h2, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className:
                  "font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-500",
                children: "A Message From Our Hearts",
              }),
              y.jsxs(W.div, {
                className: "space-y-6 text-lg text-gray-600",
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.3 },
                children: [
                  y.jsx("p", {
                    className: "text-xl italic",
                    children:
                      '"We are so grateful for the love and support of our family and friends. Your presence in our lives has shaped who we are today, and we cannot imagine celebrating this special day without you."',
                  }),
                  y.jsx("p", {
                    children:
                      "From the bottom of our hearts, thank you for being part of our journey. We look forward to celebrating with you and creating beautiful memories that will last a lifetime.",
                  }),
                  y.jsxs("p", {
                    className: "text-wedding-olive-600 font-semibold",
                    children: [
                      "With all our love,",
                      y.jsx("br", {}),
                      "Rudolf & Jemima",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("section", {
          id: "rsvp-section",
          className: "bg-gradient-to-r from-black via-gray-800 to-gray-700",
          children: y.jsx(Nw, {}),
        }),
        y.jsx(TA, {}),
        y.jsx(As, {}),
        y.jsx(EA, {}),
      ],
    });
  },
  Lw = () => {
    const [e, t] = S.useState(null),
      [i, s] = S.useState(""),
      [a, u] = S.useState(""),
      [c, d] = S.useState(""),
      [h, p] = S.useState(""),
      [g, v] = S.useState(""),
      [w, x] = S.useState(0),
      [E, C] = S.useState(!1),
      [T, k] = S.useState({}),
      R = [Pi, Xo, Ew];
    S.useEffect(() => {
      const V = setInterval(() => {
        x((H) => (H + 1) % R.length);
      }, 5e3);
      return () => clearInterval(V);
    }, []);
    const j = e || Number(i),
      D = () => {
        const V = {};
        return (
          a
            ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) ||
              (V.email = "Please enter a valid email address")
            : (V.email = "Email is required"),
          (!j || j <= 0) &&
            (V.amount = "Please select or enter a valid amount"),
          h.trim() || (V.name = "Name is required"),
          k(V),
          Object.keys(V).length === 0
        );
      },
      O = async () => {
        var V;
        if (D()) {
          C(!0);
          try {
            const te = await (
              await fetch(
                "https://stripe-payment-3okv.onrender.com/api/create-checkout-session/",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    amount: j,
                    email: a,
                    note: c,
                    name: h,
                    phone: g,
                  }),
                }
              )
            ).json();
            if (!((V = te == null ? void 0 : te.data) != null && V.url))
              throw new Error("Missing Stripe redirect URL.");
            window.location.href = te.data.url;
          } catch (H) {
            console.error("Payment error:", H);
          } finally {
            C(!1);
          }
        }
      },
      B = [25, 50, 75, 100, 150, 200];
    return y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden",
      children: [
        y.jsxs("div", {
          className: "fixed inset-0 z-0",
          children: [
            y.jsx(
              W.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 1.5 },
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                  backgroundImage: `url(${R[w]})`,
                  filter: "brightness(0.2) saturate(1.2)",
                },
              },
              w
            ),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50",
            }),
          ],
        }),
        y.jsx(ir, { zIndex: 5, showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsxs("div", {
          className:
            "flex flex-col items-center justify-center px-2 sm:px-4 py-8 pb-16 relative z-10 min-h-screen",
          children: [
            y.jsx(W.div, {
              className: "w-full max-w-lg my-8 relative z-10",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children: y.jsxs("div", {
                className:
                  "bg-black/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700",
                children: [
                  y.jsxs(W.div, {
                    className: "text-center mb-8",
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { duration: 0.6, delay: 0.4, ease: "backOut" },
                    children: [
                      y.jsx("div", {
                        className:
                          "w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",
                        children: y.jsx(uf, {
                          className: "w-10 h-10 text-black",
                        }),
                      }),
                      y.jsx("h2", {
                        className:
                          "text-2xl sm:text-3xl font-rochester text-white mb-2",
                        children: "Contribute to Our Wedding Gift",
                      }),
                      y.jsx("p", {
                        className: "text-gray-300 text-sm sm:text-base",
                        children:
                          "Your contribution will help us start our new journey together",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "mb-6",
                    children: [
                      y.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-4",
                        children: "Select Amount",
                      }),
                      y.jsx("div", {
                        className: "grid grid-cols-3 gap-3 mb-4",
                        children: B.map((V) =>
                          y.jsxs(
                            W.button,
                            {
                              onClick: () => {
                                t(V),
                                  s(""),
                                  k((H) => ({ ...H, amount: void 0 }));
                              },
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              className: `py-3 px-4 rounded-xl text-lg font-bold border-2 shadow-md transition-all duration-300 ${
                                e === V
                                  ? "bg-yellow-500 text-black border-yellow-400 shadow-yellow-200"
                                  : "bg-gray-800 text-yellow-400 border-yellow-500 hover:border-yellow-400 hover:shadow-lg hover:bg-gray-700"
                              }`,
                              children: ["£", V],
                            },
                            V
                          )
                        ),
                      }),
                      y.jsx(W.input, {
                        type: "number",
                        placeholder: "Or enter custom amount",
                        value: i,
                        onChange: (V) => {
                          s(V.target.value),
                            t(null),
                            k((H) => ({ ...H, amount: void 0 }));
                        },
                        className:
                          "w-full border-2 border-yellow-500 rounded-xl p-4 text-lg font-medium bg-gray-800 text-white shadow-md focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-400",
                        whileFocus: { scale: 1.02 },
                      }),
                      T.amount &&
                        y.jsxs(W.p, {
                          initial: { opacity: 0, y: -10 },
                          animate: { opacity: 1, y: 0 },
                          className:
                            "text-red-500 text-sm mt-2 flex items-center",
                          children: [
                            y.jsx(ml, { className: "w-4 h-4 mr-1" }),
                            T.amount,
                          ],
                        }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "mb-6",
                    children: [
                      y.jsx("label", {
                        className:
                          "block text-sm font-semibold text-white mb-2",
                        children: "Your Email Address *",
                      }),
                      y.jsx(W.input, {
                        type: "email",
                        placeholder: "your.email@example.com",
                        value: a,
                        onChange: (V) => {
                          u(V.target.value),
                            k((H) => ({ ...H, email: void 0 }));
                        },
                        className:
                          "w-full border-2 border-yellow-500 rounded-xl p-4 text-lg font-medium bg-gray-800 text-white shadow-md focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-400",
                        whileFocus: { scale: 1.02 },
                      }),
                      T.email &&
                        y.jsxs(W.p, {
                          initial: { opacity: 0, y: -10 },
                          animate: { opacity: 1, y: 0 },
                          className:
                            "text-red-500 text-sm mt-2 flex items-center",
                          children: [
                            y.jsx(ml, { className: "w-4 h-4 mr-1" }),
                            T.email,
                          ],
                        }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                      y.jsxs("div", {
                        children: [
                          y.jsx("label", {
                            className:
                              "block text-sm font-semibold text-white mb-2",
                            children: "Name *",
                          }),
                          y.jsx(W.input, {
                            type: "text",
                            placeholder: "Your name",
                            value: h,
                            onChange: (V) => {
                              p(V.target.value),
                                k((H) => ({ ...H, name: void 0 }));
                            },
                            className:
                              "w-full border-2 border-yellow-500 rounded-xl p-4 text-lg font-medium bg-gray-800 text-white shadow-md focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-400",
                            whileFocus: { scale: 1.02 },
                          }),
                          T.name &&
                            y.jsxs(W.p, {
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              className:
                                "text-red-500 text-sm mt-2 flex items-center",
                              children: [
                                y.jsx(ml, { className: "w-4 h-4 mr-1" }),
                                T.name,
                              ],
                            }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "sm:col-span-2",
                        children: [
                          y.jsx("label", {
                            className:
                              "block text-sm font-semibold text-white mb-2",
                            children: "Phone Number",
                          }),
                          y.jsx(W.input, {
                            type: "tel",
                            placeholder: "e.g., +44 7123 456789",
                            value: g,
                            onChange: (V) => {
                              v(V.target.value),
                                k((H) => ({ ...H, phone: void 0 }));
                            },
                            className:
                              "w-full border-2 border-yellow-500 rounded-xl p-4 text-lg font-medium bg-gray-800 text-white shadow-md focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-400",
                            whileFocus: { scale: 1.02 },
                          }),
                          T.phone &&
                            y.jsxs(W.p, {
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              className:
                                "text-red-500 text-sm mt-2 flex items-center",
                              children: [
                                y.jsx(ml, { className: "w-4 h-4 mr-1" }),
                                T.phone,
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "mb-6",
                    children: [
                      y.jsx("label", {
                        className:
                          "block text-sm font-semibold text-white mb-2",
                        children: "Personal Message (Optional)",
                      }),
                      y.jsx(W.textarea, {
                        placeholder:
                          "Leave a heartfelt message for Rudolf & Jemima...",
                        value: c,
                        onChange: (V) => d(V.target.value),
                        className:
                          "w-full border-2 border-yellow-500 rounded-xl p-4 h-24 text-lg font-medium bg-gray-800 text-white shadow-md focus:border-yellow-400 focus:outline-none resize-none transition-all duration-300 placeholder-gray-400",
                        whileFocus: { scale: 1.02 },
                      }),
                    ],
                  }),
                  y.jsx(W.div, {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    children: y.jsx(Gr, {
                      onClick: O,
                      disabled: E || !j || !a || !h.trim(),
                      className:
                        "w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                      children: E
                        ? y.jsx(W.div, {
                            animate: { rotate: 360 },
                            transition: {
                              duration: 1,
                              repeat: 1 / 0,
                              ease: "linear",
                            },
                            className:
                              "w-6 h-6 border-2 border-white border-t-transparent rounded-full",
                          })
                        : `Pay £${j || ""}`,
                    }),
                  }),
                  y.jsx(W.p, {
                    className: "text-center text-sm text-gray-300 mt-4",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 1 },
                    children: "🔒 Secure payment powered by Stripe",
                  }),
                ],
              }),
            }),
            y.jsx(W.div, {
              className: "w-full max-w-lg mt-6 relative z-10",
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.6 },
              children: y.jsxs("div", {
                className:
                  "bg-black/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700",
                children: [
                  y.jsx("h3", {
                    className:
                      "text-xl font-rochester text-white mb-4 text-center",
                    children: "Alternative: Bank Transfer",
                  }),
                  y.jsx("p", {
                    className: "text-gray-300 text-sm mb-4 text-center",
                    children: "Prefer to transfer directly? Use these details:",
                  }),
                  y.jsx("div", {
                    className:
                      "bg-gray-800 p-4 rounded-xl border border-yellow-500",
                    children: y.jsxs("div", {
                      className: "space-y-2 text-sm",
                      children: [
                        y.jsxs("p", {
                          children: [
                            y.jsx("span", {
                              className: "font-semibold text-yellow-400",
                              children: "Account Name:",
                            }),
                            " ",
                            y.jsx("span", {
                              className: "text-white",
                              children: "Rudolf Ehumah",
                            }),
                          ],
                        }),
                        y.jsxs("p", {
                          children: [
                            y.jsx("span", {
                              className: "font-semibold text-yellow-400",
                              children: "Account Number:",
                            }),
                            " ",
                            y.jsx("span", {
                              className: "text-white",
                              children: "05430972",
                            }),
                          ],
                        }),
                        y.jsxs("p", {
                          children: [
                            y.jsx("span", {
                              className: "font-semibold text-yellow-400",
                              children: "Sort Code:",
                            }),
                            " ",
                            y.jsx("span", {
                              className: "text-white",
                              children: "07-13-06",
                            }),
                          ],
                        }),
                        y.jsx("p", {
                          className: "text-xs text-gray-400 mt-3 italic",
                          children: "Please include your name as reference",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            y.jsx(W.div, {
              className: "w-full max-w-lg mt-8 relative z-10",
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.8 },
              children: y.jsxs("div", {
                className:
                  "bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-xl border border-gray-700 text-center",
                children: [
                  y.jsx(W.div, {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { duration: 0.6, delay: 1, ease: "backOut" },
                    className:
                      "w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                    children: y.jsx(Si, {
                      className: "w-8 h-8 text-black fill-black",
                    }),
                  }),
                  y.jsxs("h3", {
                    className: "text-2xl font-rochester text-white mb-2",
                    children: ["Thank You", h ? `, ${h}` : "", "!"],
                  }),
                  h &&
                    y.jsx("p", {
                      className: "text-gray-300 text-sm mb-2",
                      children: "We truly appreciate your generosity.",
                    }),
                  y.jsxs("p", {
                    className: "text-gray-300 text-base leading-relaxed mb-6",
                    children: [
                      "Thank you for being part of our celebration. ",
                      y.jsx("br", {}),
                      "We can't wait to share this new chapter with you!",
                    ],
                  }),
                  y.jsx(W.div, {
                    className:
                      "bg-gray-800 p-4 rounded-xl border border-yellow-500",
                    whileHover: { scale: 1.02 },
                    transition: { duration: 0.2 },
                    children: y.jsx("p", {
                      className: "text-yellow-400 font-bold text-lg",
                      children: "With love, Rudolf & Jemima",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  kA = () =>
    y.jsxs("div", {
      className: "min-h-screen bg-black relative",
      children: [
        y.jsx(ir, { zIndex: 0 }),
        y.jsx("header", {
          className:
            "bg-wedding-cream-100/80 backdrop-blur-sm border-b border-wedding-terracotta-200/30 sticky top-0 z-40",
          children: y.jsx("div", {
            className: "max-w-7xl mx-auto px-4 py-4",
            children: y.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                y.jsx(zr, {
                  to: "/",
                  children: y.jsxs(Gr, {
                    variant: "ghost",
                    className:
                      "text-wedding-terracotta-600 hover:text-wedding-terracotta-700 hover:bg-wedding-cream-200",
                    children: [
                      y.jsx(_0, { className: "w-4 h-4 mr-2" }),
                      "Back to Wedding",
                    ],
                  }),
                }),
                y.jsxs("div", {
                  className: "text-center",
                  children: [
                    y.jsx("h1", {
                      className:
                        "text-2xl lg:text-3xl font-rochester text-wedding-terracotta-500",
                      children: "Wedding Registry",
                    }),
                    y.jsx("p", {
                      className: "text-sm text-gray-600",
                      children: "Rudolf & Jemima",
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "text-right",
                  children: [
                    y.jsx("p", {
                      className: "text-sm text-gray-600",
                      children: "Wedding Date",
                    }),
                    y.jsx("p", {
                      className: "font-semibold text-wedding-terracotta-600",
                      children: "March 7, 2026",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        y.jsx(W.section, {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "py-5 px-4",
          children: y.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
              y.jsx(W.div, {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { duration: 0.6, delay: 0.3, ease: "backOut" },
                className:
                  "w-20 h-20 bg-gradient-to-br from-wedding-terracotta-400 to-wedding-olive-500 rounded-full flex items-center justify-center mx-auto mb-6",
                children: y.jsx(uf, { className: "w-10 h-10 text-white" }),
              }),
              y.jsx(W.h2, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.5 },
                className:
                  "text-3xl lg:text-4xl font-rochester mb-4 text-wedding-terracotta-500",
                children: "Contribute to Our Wedding Gift Fund",
              }),
              y.jsx(W.p, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.7 },
                className: "text-lg text-gray-600 mb-8 max-w-2xl mx-auto",
                children:
                  "Your presence is the real gift, but if you’d like to contribute, we’ve made it simple below.",
              }),
            ],
          }),
        }),
        y.jsx(Lw, {}),
        y.jsx("footer", {
          className: "bg-gradient-to-r from-pink-200 to-purple-200 py-12",
          children: y.jsx("div", {
            className: "max-w-4xl mx-auto text-center px-4",
            children: y.jsxs(W.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "space-y-4",
              children: [
                y.jsx(Si, {
                  className: "w-8 h-8 text-pink-600 mx-auto fill-pink-600",
                }),
                y.jsx("h3", {
                  className: "text-2xl font-rochester text-pink-700",
                  children: "Thank You for Your Love & Support",
                }),
                y.jsx("p", {
                  className: "text-gray-600 max-w-2xl mx-auto",
                  children:
                    "We are so grateful for your thoughtfulness and generosity. Every gift, big or small, helps us start our married life together with joy and gratitude in our hearts.",
                }),
                y.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "With love, Rudolf & Jemima",
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  jA = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsx("section", {
          className: "pt-28 pb-20 px-4",
          style: { backgroundColor: "#333333" },
          children: y.jsxs("div", {
            className: "max-w-[1100px] mx-auto",
            children: [
              y.jsxs(W.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.8 },
                className: "text-center mb-12 lg:mb-16",
                children: [
                  y.jsx(W.span, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-gray-300 border-gray-500",
                    children: "About Bride & Groom",
                  }),
                  y.jsx(W.h2, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.4 },
                    className:
                      "font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-white",
                    children: "Bride & Groom",
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "space-y-12 lg:space-y-20",
                children: [
                  y.jsx($l, {
                    name: "Rudolf",
                    description:
                      "Rudolf’s the kind of guy who brings a calm, steady vibe wherever he goes. He genuinely cares, gets involved, and is always ready to jump in and help out. When he commits to something or someone he’s all in, no hesitation. He shows his love through actions more than words, always showing up and following through. He’s the type who plans ahead, stays wise, and somehow still cracks a good joke when you need it. Rudolf’s also smart, the kind of intelligent that earns real respect but he never brags about it. He’s humble about his accomplishments and always quick to lift others up instead of talking about himself. He’s got big dreams but stays grounded, never forgetting what really matters. And at the heart of it all is his strong Christian faith you can feel it in everything he does: how he loves, leads, and lives.",
                    image: Xo,
                    isGroom: !0,
                    index: 0,
                  }),
                  y.jsx($l, {
                    name: "Jemima",
                    description:
                      "She’s incredibly loving and caring always checking in and making sure the people around her feel welcomed, supported, and valued. She’s the kind of person you can count on for a warm hug, a listening ear, or a good laugh when you need it most. Friendly and down-to-earth, she makes everyone feel like they’ve known her forever. She’s smart, thoughtful, artistic, quick-witted, and full of great ideas. Above all, her love for God shines through in the way she loves with grace, kindness, and quiet strength. Being around her is easy, comforting, and inspiring all at once. And a tip for visitors: bring her flowers and a box of chocolates you’ll be in her good books.",
                    image: Pi,
                    isGroom: !1,
                    index: 1,
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx(As, {}),
      ],
    }),
  NA = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsx(W.section, {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "pt-28 pb-12 px-4",
          children: y.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
              y.jsx(W.h2, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className:
                  "font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-500 mb-6",
                children: "A Message From Our Hearts",
              }),
              y.jsxs(W.div, {
                className: "space-y-6 text-lg text-gray-200",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.3 },
                children: [
                  y.jsx("p", {
                    className: "text-xl italic",
                    children:
                      '"We are so grateful for the love and support of our family and friends. Your presence in our lives has shaped who we are today, and we cannot imagine celebrating this special day without you."',
                  }),
                  y.jsx("p", {
                    children:
                      "From the bottom of our hearts, thank you for being part of our journey. We look forward to celebrating with you and creating beautiful memories that will last a lifetime.",
                  }),
                  y.jsxs("p", {
                    className: "text-wedding-olive-600 font-semibold",
                    children: [
                      "With all our love,",
                      y.jsx("br", {}),
                      "Rudolf & Jemima",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("section", {
          className: "px-4 pb-20",
          children: y.jsxs("div", {
            className:
              "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
              y.jsx(W.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className: "overflow-hidden rounded-xl border border-gray-700",
                children: y.jsx("img", {
                  src: Pi,
                  alt: "Couple",
                  className: "w-full h-64 object-cover",
                }),
              }),
              y.jsx(W.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "overflow-hidden rounded-xl border border-gray-700",
                children: y.jsx("img", {
                  src: Xo,
                  alt: "Bride",
                  className: "w-full h-64 object-cover",
                }),
              }),
              y.jsx(W.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "overflow-hidden rounded-xl border border-gray-700",
                children: y.jsx("img", {
                  src: Tw,
                  alt: "Moments",
                  className: "w-full h-64 object-cover",
                }),
              }),
              y.jsx(W.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "overflow-hidden rounded-xl border border-gray-700",
                children: y.jsx("img", {
                  src: Pw,
                  alt: "Joy",
                  className: "w-full h-64 object-cover",
                }),
              }),
            ],
          }),
        }),
        y.jsx(As, {}),
      ],
    }),
  RA = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsx("section", { className: "pt-28", children: y.jsx(Rw, {}) }),
        y.jsx(As, {}),
      ],
    }),
  AA = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsx("section", { className: "pt-28", children: y.jsx(Dw, {}) }),
        y.jsx(As, {}),
      ],
    }),
  MA = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700",
      children: [
        y.jsx(ir, { showBackground: !1 }),
        y.jsx(Ni, {}),
        y.jsx("section", { className: "pt-28", children: y.jsx(Nw, {}) }),
        y.jsx(As, {}),
      ],
    }),
  DA = () => {
    const e = [
      { id: 1, delay: 0 },
      { id: 2, delay: 0.5 },
      { id: 3, delay: 1 },
      { id: 4, delay: 1.5 },
      { id: 5, delay: 2 },
    ];
    return y.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-br from-wedding-cream-100 via-white to-purple-50 flex items-center justify-center relative overflow-hidden",
      children: [
        y.jsxs("div", {
          className: "absolute inset-0",
          children: [
            y.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]",
            }),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]",
            }),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(244,114,182,0.1),transparent_50%)]",
            }),
          ],
        }),
        y.jsxs("div", {
          className:
            "relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto",
          children: [
            y.jsxs(W.div, {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, ease: "backOut" },
              className: "mb-8",
              children: [
                y.jsx(W.h1, {
                  className:
                    "text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-wedding-olive-400 via-wedding-purple-500 to-wedding-olive-400 bg-clip-text text-transparent leading-none",
                  animate: {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  },
                  transition: { duration: 3, repeat: 1 / 0, ease: "linear" },
                  children: "404",
                }),
                y.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3, duration: 0.6 },
                  className: "flex items-center justify-center gap-3 mt-4",
                  children: [
                    y.jsx(Si, {
                      className: "w-12 h-12 text-pink-400/30 fill-pink-400/30",
                    }),
                    y.jsx("span", {
                      className: "text-xl sm:text-2xl text-pink-600 font-light",
                      children: "Page Not Found",
                    }),
                    y.jsx(Si, {
                      className: "w-12 h-12 text-pink-400/30 fill-pink-400/30",
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs(W.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.8 },
              className: "mb-12",
              children: [
                y.jsx("h2", {
                  className:
                    "text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-700 mb-6",
                  children: "Oops! Love took a wrong turn.",
                }),
                y.jsx("p", {
                  className:
                    "text-lg sm:text-xl text-pink-600 max-w-2xl mx-auto leading-relaxed",
                  children:
                    "Looks like you've wandered away from our love story. Don't worry, even cupid's arrows sometimes miss their mark. Let's get you back to the celebration!",
                }),
              ],
            }),
            y.jsxs(W.div, {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.9, duration: 0.8 },
              className:
                "flex flex-col sm:flex-row gap-4 justify-center items-center",
              children: [
                y.jsx(zr, {
                  to: "/",
                  children: y.jsxs(Gr, {
                    size: "lg",
                    className:
                      "bg-gradient-to-r from-wedding-olive-500 to-wedding-purple-600 hover:from-wedding-olive-600 hover:to-wedding-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300",
                    children: [
                      y.jsx(US, { className: "w-5 h-5 mr-2" }),
                      "Back to Wedding",
                    ],
                  }),
                }),
                y.jsxs(Gr, {
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-2 border-pink-300 bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold px-8 py-4 text-lg rounded-full",
                  onClick: () => window.history.back(),
                  children: [
                    y.jsx(_0, { className: "w-5 h-5 mr-2" }),
                    "Go Back",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.map((t, i) =>
          y.jsx(
            W.div,
            {
              className: "absolute",
              style: { left: `${20 + i * 15}%`, top: `${20 + (i % 3) * 20}%` },
              animate: {
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              },
              transition: {
                duration: 4 + i,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: t.delay,
              },
              children: y.jsx(Si, {
                className: "w-8 h-8 text-pink-300/30 fill-pink-300/30",
              }),
            },
            t.id
          )
        ),
        y.jsx(W.div, {
          className: "absolute top-1/4 right-1/4",
          animate: { rotate: [0, 360], scale: [1, 1.5, 1] },
          transition: { duration: 8, repeat: 1 / 0, ease: "linear" },
          children: y.jsx("div", {
            className:
              "w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30",
          }),
        }),
        y.jsx(W.div, {
          className: "absolute bottom-1/4 left-1/3",
          animate: { y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] },
          transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
          children: y.jsx("div", { className: "text-4xl", children: "💕" }),
        }),
      ],
    });
  };
function LA() {
  const [e] = CP(),
    t = e.get("name") || "Anonymous",
    i = e.get("amount") || "0";
  return y.jsxs("div", {
    className:
      "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 px-4 text-center",
    children: [
      y.jsx(W.div, {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { type: "spring", stiffness: 120, damping: 10 },
        className:
          "bg-pink-100 text-pink-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md",
        children: y.jsx(Si, { className: "w-10 h-10 fill-pink-600" }),
      }),
      y.jsxs(W.h1, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.6 },
        className: "text-3xl font-bold text-wedding-terracotta-600 mb-2",
        children: ["Thank You, ", t, "!"],
      }),
      y.jsxs(W.p, {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4, duration: 0.5 },
        className: "text-gray-700 text-lg max-w-md",
        children: [
          "Your generous contribution of ",
          y.jsxs("span", {
            className: "font-semibold text-rose-600",
            children: ["£", i],
          }),
          " has been received. We are truly grateful for your love and support!",
        ],
      }),
      y.jsx(W.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.6, duration: 0.4 },
        className: "mt-8",
        children: y.jsx(zr, {
          to: "/",
          children: y.jsx("button", {
            className:
              "bg-wedding-terracotta-500 hover:bg-wedding-terracotta-600 text-white px-6 py-3 rounded-full shadow transition",
            children: "Back to Wedding Page",
          }),
        }),
      }),
    ],
  });
}
function OA() {
  return y.jsxs("div", {
    className:
      "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-rose-50 to-amber-50 px-4 text-center",
    children: [
      y.jsx(W.div, {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { type: "spring", stiffness: 140, damping: 12 },
        className:
          "bg-rose-100 text-rose-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md",
        children: y.jsx(_S, { className: "w-10 h-10" }),
      }),
      y.jsx(W.h1, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.6 },
        className: "text-3xl font-bold text-rose-600 mb-2",
        children: "Payment Cancelled",
      }),
      y.jsx(W.p, {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4, duration: 0.5 },
        className: "text-gray-700 text-lg max-w-md",
        children:
          "It looks like your gift wasn’t completed. Don’t worry, you can try again anytime.",
      }),
      y.jsx(W.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.6, duration: 0.4 },
        className: "mt-8",
        children: y.jsx(zr, {
          to: "/",
          children: y.jsx("button", {
            className:
              "bg-wedding-terracotta-500 hover:bg-wedding-terracotta-600 text-white px-6 py-3 rounded-full shadow transition",
            children: "Back to Wedding Page",
          }),
        }),
      }),
    ],
  });
}
const IA = () => (
    S.useEffect(() => {
      const e = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
      return () => clearTimeout(e);
    }, []),
    y.jsxs(W.div, {
      className:
        "fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800",
      style: { zIndex: 9999 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.8 },
      children: [
        y.jsx(ir, { zIndex: 9998, showBackground: !1 }),
        y.jsx(W.div, {
          className: "flex items-center justify-center flex-col",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          children: y.jsx(W.img, {
            src: ih,
            alt: "Rudolf & Jemima Wedding Logo",
            className: "w-32 h-32 rounded-full shadow-2xl z-[9999]",
            animate: { scale: [1, 1.05, 1], rotate: [0, 5, 0, -5, 0] },
            transition: { duration: 2, repeat: 1 / 0, repeatType: "reverse" },
          }),
        }),
      ],
    })
  ),
  VA = new vE(),
  _A = () => {
    const [e, t] = S.useState(!0);
    return (
      S.useEffect(() => {
        if (sessionStorage.getItem("hasVisited")) {
          const s = setTimeout(() => {
            t(!1);
          }, 1e3);
          return () => clearTimeout(s);
        } else {
          const s = setTimeout(() => {
            t(!1), sessionStorage.setItem("hasVisited", "true");
          }, 5e3);
          return () => clearTimeout(s);
        }
      }, []),
      y.jsx(wE, {
        client: VA,
        children: y.jsxs(HT, {
          children: [
            y.jsx(jC, {}),
            y.jsx(o2, {}),
            y.jsx(Yf, {
              mode: "wait",
              children: e
                ? y.jsx(IA, {}, "preloader")
                : y.jsx(
                    xP,
                    {
                      children: y.jsxs(dP, {
                        children: [
                          y.jsx(Xt, { path: "/", element: y.jsx(PA, {}) }),
                          y.jsx(Xt, {
                            path: "/groom-bride",
                            element: y.jsx(jA, {}),
                          }),
                          y.jsx(Xt, {
                            path: "/greetings",
                            element: y.jsx(NA, {}),
                          }),
                          y.jsx(Xt, {
                            path: "/when-where",
                            element: y.jsx(RA, {}),
                          }),
                          y.jsx(Xt, {
                            path: "/hotels",
                            element: y.jsx(AA, {}),
                          }),
                          y.jsx(Xt, { path: "/rsvp", element: y.jsx(MA, {}) }),
                          y.jsx(Xt, {
                            path: "/registry",
                            element: y.jsx(kA, {}),
                          }),
                          y.jsx(Xt, { path: "/gift", element: y.jsx(Lw, {}) }),
                          y.jsx(Xt, {
                            path: "/success",
                            element: y.jsx(LA, {}),
                          }),
                          y.jsx(Xt, {
                            path: "/cancel",
                            element: y.jsx(OA, {}),
                          }),
                          y.jsx(Xt, { path: "*", element: y.jsx(DA, {}) }),
                        ],
                      }),
                    },
                    "app"
                  ),
            }),
          ],
        }),
      })
    );
  };
Ib.createRoot(document.getElementById("root")).render(y.jsx(_A, {}));
