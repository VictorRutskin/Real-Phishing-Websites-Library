(function () {
  var c = this, tt = c._, r = Array.prototype, p = Object.prototype, it = Function.prototype, w = r.push, t = r.slice, l = r.concat, u = p.toString, b = p.hasOwnProperty, rt = Array.isArray, k = Object.keys, a = it.bind, n = function (t) {
    if (t instanceof n) return t;
    if (!(this instanceof n)) return new n(t);
    this._wrapped = t;
  }, i, v, e, f, o, s, nt, h;
  typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = n), exports._ = n) : c._ = n;
  n.VERSION = "1.7.0";
  i = function (n, t, i) {
    if (t === void 0) return n;
    switch (i == null ? 3 : i) {
      case 1:
        return function (i) {
          return n.call(t, i);
        };
      case 2:
        return function (i, r) {
          return n.call(t, i, r);
        };
      case 3:
        return function (i, r, u) {
          return n.call(t, i, r, u);
        };
      case 4:
        return function (i, r, u, f) {
          return n.call(t, i, r, u, f);
        };
    }
    return function () {
      return n.apply(t, arguments);
    };
  };
  n.iteratee = function (t, r, u) {
    return t == null ? n.identity : n.isFunction(t) ? i(t, r, u) : n.isObject(t) ? n.matches(t) : n.property(t);
  };
  n.each = n.forEach = function (t, r, u) {
    var f, e, o;
    if (t == null) return t;
    if (r = i(r, u), e = t.length, e === +e) for (f = 0; f < e; f++) r(t[f], f, t); else for (o = n.keys(t), f = 0, e = o.length; f < e; f++) r(t[o[f]], o[f], t);
    return t;
  };
  n.map = n.collect = function (t, i, r) {
    var u;
    if (t == null) return [];
    i = n.iteratee(i, r);
    var f = t.length !== +t.length && n.keys(t), o = (f || t).length, s = Array(o), e;
    for (u = 0; u < o; u++) e = f ? f[u] : u, s[u] = i(t[e], e, t);
    return s;
  };
  v = "Reduce of empty array with no initial value";
  n.reduce = n.foldl = n.inject = function (t, r, u, f) {
    t == null && (t = []);
    r = i(r, f, 4);
    var o = t.length !== +t.length && n.keys(t), h = (o || t).length, e = 0, s;
    if (arguments.length < 3) {
      if (!h) throw new TypeError(v);
      u = t[o ? o[e++] : e++];
    }
    for (; e < h; e++) s = o ? o[e] : e, u = r(u, t[s], s, t);
    return u;
  };
  n.reduceRight = n.foldr = function (t, r, u, f) {
    t == null && (t = []);
    r = i(r, f, 4);
    var o = t.length !== +t.length && n.keys(t), e = (o || t).length, s;
    if (arguments.length < 3) {
      if (!e) throw new TypeError(v);
      u = t[o ? o[--e] : --e];
    }
    while (e--) s = o ? o[e] : e, u = r(u, t[s], s, t);
    return u;
  };
  n.find = n.detect = function (t, i, r) {
    var u;
    return i = n.iteratee(i, r), n.some(t, function (n, t, r) {
      if (i(n, t, r)) return u = n, true;
    }), u;
  };
  n.filter = n.select = function (t, i, r) {
    var u = [];
    return t == null ? u : (i = n.iteratee(i, r), n.each(t, function (n, t, r) {
      i(n, t, r) && u.push(n);
    }), u);
  };
  n.reject = function (t, i, r) {
    return n.filter(t, n.negate(n.iteratee(i)), r);
  };
  n.every = n.all = function (t, i, r) {
    if (t == null) return true;
    i = n.iteratee(i, r);
    for (var f = t.length !== +t.length && n.keys(t), o = (f || t).length, e, u = 0; u < o; u++) if (e = f ? f[u] : u, !i(t[e], e, t)) return false;
    return true;
  };
  n.some = n.any = function (t, i, r) {
    if (t == null) return false;
    i = n.iteratee(i, r);
    for (var f = t.length !== +t.length && n.keys(t), o = (f || t).length, e, u = 0; u < o; u++) if (e = f ? f[u] : u, i(t[e], e, t)) return true;
    return false;
  };
  n.contains = n.include = function (t, i) {
    return t == null ? false : (t.length !== +t.length && (t = n.values(t)), n.indexOf(t, i) >= 0);
  };
  n.invoke = function (i, r) {
    var u = t.call(arguments, 2), f = n.isFunction(r);
    return n.map(i, function (n) {
      return (f ? r : n[r]).apply(n, u);
    });
  };
  n.pluck = function (t, i) {
    return n.map(t, n.property(i));
  };
  n.where = function (t, i) {
    return n.filter(t, n.matches(i));
  };
  n.findWhere = function (t, i) {
    return n.find(t, n.matches(i));
  };
  n.max = function (t, i, r) {
    var u = -Infinity, s = -Infinity, o, f, e, h;
    if (i == null && t != null) for (t = t.length === +t.length ? t : n.values(t), e = 0, h = t.length; e < h; e++) o = t[e], o > u && (u = o); else i = n.iteratee(i, r), n.each(t, function (n, t, r) {
      f = i(n, t, r);
      (f > s || f === -Infinity && u === -Infinity) && (u = n, s = f);
    });
    return u;
  };
  n.min = function (t, i, r) {
    var u = Infinity, s = Infinity, o, f, e, h;
    if (i == null && t != null) for (t = t.length === +t.length ? t : n.values(t), e = 0, h = t.length; e < h; e++) o = t[e], o < u && (u = o); else i = n.iteratee(i, r), n.each(t, function (n, t, r) {
      f = i(n, t, r);
      (f < s || f === Infinity && u === Infinity) && (u = n, s = f);
    });
    return u;
  };
  n.shuffle = function (t) {
    for (var f = t && t.length === +t.length ? t : n.values(t), e = f.length, r = Array(e), i = 0, u; i < e; i++) u = n.random(0, i), u !== i && (r[i] = r[u]), r[u] = f[i];
    return r;
  };
  n.sample = function (t, i, r) {
    return i == null || r ? (t.length !== +t.length && (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, i));
  };
  n.sortBy = function (t, i, r) {
    return i = n.iteratee(i, r), n.pluck(n.map(t, function (n, t, r) {
      return {value: n, index: t, criteria: i(n, t, r)};
    }).sort(function (n, t) {
      var i = n.criteria, r = t.criteria;
      if (i !== r) {
        if (i > r || i === void 0) return 1;
        if (i < r || r === void 0) return -1;
      }
      return n.index - t.index;
    }), "value");
  };
  e = function (t) {
    return function (i, r, u) {
      var f = {};
      return r = n.iteratee(r, u), n.each(i, function (n, u) {
        var e = r(n, u, i);
        t(f, n, e);
      }), f;
    };
  };
  n.groupBy = e(function (t, i, r) {
    n.has(t, r) ? t[r].push(i) : t[r] = [i];
  });
  n.indexBy = e(function (n, t, i) {
    n[i] = t;
  });
  n.countBy = e(function (t, i, r) {
    n.has(t, r) ? t[r]++ : t[r] = 1;
  });
  n.sortedIndex = function (t, i, r, u) {
    var e;
    r = n.iteratee(r, u, 1);
    for (var s = r(i), f = 0, o = t.length; f < o;) e = f + o >>> 1, r(t[e]) < s ? f = e + 1 : o = e;
    return f;
  };
  n.toArray = function (i) {
    return i ? n.isArray(i) ? t.call(i) : i.length === +i.length ? n.map(i, n.identity) : n.values(i) : [];
  };
  n.size = function (t) {
    return t == null ? 0 : t.length === +t.length ? t.length : n.keys(t).length;
  };
  n.partition = function (t, i, r) {
    i = n.iteratee(i, r);
    var u = [], f = [];
    return n.each(t, function (n, t, r) {
      (i(n, t, r) ? u : f).push(n);
    }), [u, f];
  };
  n.first = n.head = n.take = function (n, i, r) {
    if (n != null) return i == null || r ? n[0] : i < 0 ? [] : t.call(n, 0, i);
  };
  n.initial = function (n, i, r) {
    return t.call(n, 0, Math.max(0, n.length - (i == null || r ? 1 : i)));
  };
  n.last = function (n, i, r) {
    if (n != null) return i == null || r ? n[n.length - 1] : t.call(n, Math.max(n.length - i, 0));
  };
  n.rest = n.tail = n.drop = function (n, i, r) {
    return t.call(n, i == null || r ? 1 : i);
  };
  n.compact = function (t) {
    return n.filter(t, n.identity);
  };
  f = function (t, i, r, u) {
    var o, s, e;
    if (i && n.every(t, n.isArray)) return l.apply(u, t);
    for (o = 0, s = t.length; o < s; o++) e = t[o], n.isArray(e) || n.isArguments(e) ? i ? w.apply(u, e) : f(e, i, r, u) : r || u.push(e);
    return u;
  };
  n.flatten = function (n, t) {
    return f(n, t, false, []);
  };
  n.without = function (i) {
    return n.difference(i, t.call(arguments, 1));
  };
  n.uniq = n.unique = function (t, i, r, u) {
    var e, s, o, c, f, h;
    if (t == null) return [];
    for (n.isBoolean(i) || (u = r, r = i, i = false), r != null && (r = n.iteratee(r, u)), e = [], s = [], o = 0, c = t.length; o < c; o++) f = t[o], i ? (o && s === f || e.push(f), s = f) : r ? (h = r(f, o, t), n.indexOf(s, h) < 0 && (s.push(h), e.push(f))) : n.indexOf(e, f) < 0 && e.push(f);
    return e;
  };
  n.union = function () {
    return n.uniq(f(arguments, true, true, []));
  };
  n.intersection = function (t) {
    var r, e, u, o, f, i;
    if (t == null) return [];
    for (r = [], e = arguments.length, u = 0, o = t.length; u < o; u++) if (f = t[u], !n.contains(r, f)) {
      for (i = 1; i < e; i++) if (!n.contains(arguments[i], f)) break;
      i === e && r.push(f);
    }
    return r;
  };
  n.difference = function (i) {
    var r = f(t.call(arguments, 1), true, true, []);
    return n.filter(i, function (t) {
      return !n.contains(r, t);
    });
  };
  n.zip = function (t) {
    var r, u, i;
    if (t == null) return [];
    for (r = n.max(arguments, "length").length, u = Array(r), i = 0; i < r; i++) u[i] = n.pluck(arguments, i);
    return u;
  };
  n.object = function (n, t) {
    var r, i, u;
    if (n == null) return {};
    for (r = {}, i = 0, u = n.length; i < u; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
    return r;
  };
  n.indexOf = function (t, i, r) {
    if (t == null) return -1;
    var u = 0, f = t.length;
    if (r) if (typeof r == "number") u = r < 0 ? Math.max(0, f + r) : r; else return u = n.sortedIndex(t, i), t[u] === i ? u : -1;
    for (; u < f; u++) if (t[u] === i) return u;
    return -1;
  };
  n.lastIndexOf = function (n, t, i) {
    if (n == null) return -1;
    var r = n.length;
    for (typeof i == "number" && (r = i < 0 ? r + i + 1 : Math.min(r, i + 1)); --r >= 0;) if (n[r] === t) return r;
    return -1;
  };
  n.range = function (n, t, i) {
    var u, f, r;
    for (arguments.length <= 1 && (t = n || 0, n = 0), i = i || 1, u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; r < u; r++, n += i) f[r] = n;
    return f;
  };
  o = function () {};
  n.bind = function (i, r) {
    var u, f;
    if (a && i.bind === a) return a.apply(i, t.call(arguments, 1));
    if (!n.isFunction(i)) throw new TypeError("Bind must be called on a function");
    return u = t.call(arguments, 2), f = function () {
      var e, s;
      return this instanceof f ? (o.prototype = i.prototype, e = new o, o.prototype = null, s = i.apply(e, u.concat(t.call(arguments))), n.isObject(s)) ? s : e : i.apply(r, u.concat(t.call(arguments)));
    };
  };
  n.partial = function (i) {
    var r = t.call(arguments, 1);
    return function () {
      for (var f = 0, t = r.slice(), u = 0, e = t.length; u < e; u++) t[u] === n && (t[u] = arguments[f++]);
      while (f < arguments.length) t.push(arguments[f++]);
      return i.apply(this, t);
    };
  };
  n.bindAll = function (t) {
    var i, u = arguments.length, r;
    if (u <= 1) throw new Error("bindAll must be passed function names");
    for (i = 1; i < u; i++) r = arguments[i], t[r] = n.bind(t[r], t);
    return t;
  };
  n.memoize = function (t, i) {
    var r = function (u) {
      var f = r.cache, e = i ? i.apply(this, arguments) : u;
      return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e];
    };
    return r.cache = {}, r;
  };
  n.delay = function (n, i) {
    var r = t.call(arguments, 2);
    return setTimeout(function () {
      return n.apply(null, r);
    }, i);
  };
  n.defer = function (i) {
    return n.delay.apply(n, [i, 1].concat(t.call(arguments, 1)));
  };
  n.throttle = function (t, i, r) {
    var f, e, s, u = null, o = 0, h;
    return r || (r = {}), h = function () {
      o = r.leading === false ? 0 : n.now();
      u = null;
      s = t.apply(f, e);
      u || (f = e = null);
    }, function () {
      var l = n.now(), c;
      return o || r.leading !== false || (o = l), c = i - (l - o), f = this, e = arguments, c <= 0 || c > i ? (clearTimeout(u), u = null, o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === false || (u = setTimeout(h, c)), s;
    };
  };
  n.debounce = function (t, i, r) {
    var u, f, e, s, o, h = function () {
      var c = n.now() - s;
      c < i && c > 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)));
    };
    return function () {
      e = this;
      f = arguments;
      s = n.now();
      var c = r && !u;
      return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o;
    };
  };
  n.wrap = function (t, i) {
    return n.partial(i, t);
  };
  n.negate = function (n) {
    return function () {
      return !n.apply(this, arguments);
    };
  };
  n.compose = function () {
    var n = arguments, t = n.length - 1;
    return function () {
      for (var r = t, i = n[t].apply(this, arguments); r--;) i = n[r].call(this, i);
      return i;
    };
  };
  n.after = function (n, t) {
    return function () {
      if (--n < 1) return t.apply(this, arguments);
    };
  };
  n.before = function (n, t) {
    var i;
    return function () {
      return --n > 0 ? i = t.apply(this, arguments) : t = null, i;
    };
  };
  n.once = n.partial(n.before, 2);
  n.keys = function (t) {
    var i, r;
    if (!n.isObject(t)) return [];
    if (k) return k(t);
    i = [];
    for (r in t) n.has(t, r) && i.push(r);
    return i;
  };
  n.values = function (t) {
    for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; i < u; i++) f[i] = t[r[i]];
    return f;
  };
  n.pairs = function (t) {
    for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; i < u; i++) f[i] = [r[i], t[r[i]]];
    return f;
  };
  n.invert = function (t) {
    for (var u = {}, r = n.keys(t), i = 0, f = r.length; i < f; i++) u[t[r[i]]] = r[i];
    return u;
  };
  n.functions = n.methods = function (t) {
    var i = [];
    for (var r in t) n.isFunction(t[r]) && i.push(r);
    return i.sort();
  };
  n.extend = function (t) {
    var i, r, u, f;
    if (!n.isObject(t)) return t;
    for (u = 1, f = arguments.length; u < f; u++) {
      i = arguments[u];
      for (r in i) b.call(i, r) && (t[r] = i[r]);
    }
    return t;
  };
  n.pick = function (r, u, f) {
    var o = {}, e, h, c, s, a;
    if (r == null) return o;
    if (n.isFunction(u)) {
      u = i(u, f);
      for (e in r) h = r[e], u(h, e, r) && (o[e] = h);
    } else for (c = l.apply([], t.call(arguments, 1)), r = new Object(r), s = 0, a = c.length; s < a; s++) e = c[s], e in r && (o[e] = r[e]);
    return o;
  };
  n.omit = function (i, r, u) {
    if (n.isFunction(r)) r = n.negate(r); else {
      var f = n.map(l.apply([], t.call(arguments, 1)), String);
      r = function (t, i) {
        return !n.contains(f, i);
      };
    }
    return n.pick(i, r, u);
  };
  n.defaults = function (t) {
    var i, f, u, r;
    if (!n.isObject(t)) return t;
    for (i = 1, f = arguments.length; i < f; i++) {
      u = arguments[i];
      for (r in u) t[r] === void 0 && (t[r] = u[r]);
    }
    return t;
  };
  n.clone = function (t) {
    return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t;
  };
  n.tap = function (n, t) {
    return t(n), n;
  };
  s = function (t, i, r, f) {
    var l, a, h, c, e, o, y, v;
    if (t === i) return t !== 0 || 1 / t == 1 / i;
    if (t == null || i == null) return t === i;
    if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), l = u.call(t), l !== u.call(i)) return false;
    switch (l) {
      case "[object RegExp]":
      case "[object String]":
        return "" + t == "" + i;
      case "[object Number]":
        return +t != +t ? +i != +i : +t == 0 ? 1 / +t == 1 / i : +t == +i;
      case "[object Date]":
      case "[object Boolean]":
        return +t == +i;
    }
    if (typeof t != "object" || typeof i != "object") return false;
    for (a = r.length; a--;) if (r[a] === t) return f[a] === i;
    if (h = t.constructor, c = i.constructor, h !== c && "constructor" in t && "constructor" in i && !(n.isFunction(h) && h instanceof h && n.isFunction(c) && c instanceof c)) return false;
    if (r.push(t), f.push(i), l === "[object Array]") {
      if (e = t.length, o = e === i.length, o) while (e--) if (!(o = s(t[e], i[e], r, f))) break;
    } else if (y = n.keys(t), e = y.length, o = n.keys(i).length === e, o) while (e--) if (v = y[e], !(o = n.has(i, v) && s(t[v], i[v], r, f))) break;
    return r.pop(), f.pop(), o;
  };
  n.isEqual = function (n, t) {
    return s(n, t, [], []);
  };
  n.isEmpty = function (t) {
    if (t == null) return true;
    if (n.isArray(t) || n.isString(t) || n.isArguments(t)) return t.length === 0;
    for (var i in t) if (n.has(t, i)) return false;
    return true;
  };
  n.isElement = function (n) {
    return !!(n && n.nodeType === 1);
  };
  n.isArray = rt || function (n) {
    return u.call(n) === "[object Array]";
  };
  n.isObject = function (n) {
    var t = typeof n;
    return t === "function" || t === "object" && !!n;
  };
  n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
    n["is" + t] = function (n) {
      return u.call(n) === "[object " + t + "]";
    };
  });
  n.isArguments(arguments) || (n.isArguments = function (t) {
    return n.has(t, "callee");
  });
  typeof /./ != "function" && (n.isFunction = function (n) {
    return typeof n == "function" || false;
  });
  n.isFinite = function (n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  };
  n.isNaN = function (t) {
    return n.isNumber(t) && t !== +t;
  };
  n.isBoolean = function (n) {
    return n === true || n === false || u.call(n) === "[object Boolean]";
  };
  n.isNull = function (n) {
    return n === null;
  };
  n.isUndefined = function (n) {
    return n === void 0;
  };
  n.has = function (n, t) {
    return n != null && b.call(n, t);
  };
  n.noConflict = function () {
    return c._ = tt, this;
  };
  n.identity = function (n) {
    return n;
  };
  n.constant = function (n) {
    return function () {
      return n;
    };
  };
  n.noop = function () {};
  n.property = function (n) {
    return function (t) {
      return t[n];
    };
  };
  n.matches = function (t) {
    var i = n.pairs(t), r = i.length;
    return function (n) {
      var t, u, f;
      if (n == null) return !r;
      for (n = new Object(n), t = 0; t < r; t++) if (u = i[t], f = u[0], u[1] !== n[f] || !(f in n)) return false;
      return true;
    };
  };
  n.times = function (n, t, r) {
    var f = Array(Math.max(0, n)), u;
    for (t = i(t, r, 1), u = 0; u < n; u++) f[u] = t(u);
    return f;
  };
  n.random = function (n, t) {
    return t == null && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
  };
  n.now = Date.now || function () {
    return (new Date).getTime();
  };
  var d = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, ut = n.invert(d), g = function (t) {
    var i = "(?:" + n.keys(t).join("|") + ")", u = RegExp(i), f = RegExp(i, "g");
    return function (n) {
      return n = n == null ? "" : "" + n, u.test(n) ? n.replace(f, r) : n;
    };
  };
  n.escape = g(d);
  n.unescape = g(ut);
  n.result = function (t, i) {
    if (t == null) return void 0;
    var r = t[i];
    return n.isFunction(r) ? t[i]() : r;
  };
  nt = 0;
  n.uniqueId = function (n) {
    var t = ++nt + "";
    return n ? n + t : t;
  };
  n.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
  var y = /(.)^/, ft = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"}, et = /\\|'|\r|\n|\u2028|\u2029/g;
  n.template = function (t, i, r) {
    var o, f, h;
    !i && r && (i = r);
    i = n.defaults({}, i, n.templateSettings);
    var c = RegExp([(i.escape || y).source, (i.interpolate || y).source, (i.evaluate || y).source].join("|") + "|$", "g"), e = 0, u = "__p+='";
    t.replace(c, function (n, i, r, f, o) {
      return u += t.slice(e, o).replace(et, ot), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n;
    });
    u += "';\n";
    i.variable || (u = "with(obj||{}){\n" + u + "}\n");
    u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
    try {
      o = new Function(i.variable || "obj", "_", u);
    } catch (s) {
      s.source = u;
      throw s;
    }
    return f = function (t) {
      return o.call(this, t, n);
    }, h = i.variable || "obj", f.source = "function(" + h + "){\n" + u + "}", f;
  };
  n.chain = function (t) {
    var i = n(t);
    return i._chain = true, i;
  };
  h = function (t) {
    return this._chain ? n(t).chain() : t;
  };
  n.mixin = function (t) {
    n.each(n.functions(t), function (i) {
      var r = n[i] = t[i];
      n.prototype[i] = function () {
        var t = [this._wrapped];
        return w.apply(t, arguments), h.call(this, r.apply(n, t));
      };
    });
  };
  n.mixin(n);
  n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
    var i = r[t];
    n.prototype[t] = function () {
      var n = this._wrapped;
      return i.apply(n, arguments), (t === "shift" || t === "splice") && n.length === 0 && delete n[0], h.call(this, n);
    };
  });
  n.each(["concat", "join", "slice"], function (t) {
    var i = r[t];
    n.prototype[t] = function () {
      return h.call(this, i.apply(this._wrapped, arguments));
    };
  });
  n.prototype.value = function () {
    return this._wrapped;
  };
  typeof define == "function" && define.amd && define("underscore", [], function () {
    return n;
  });
}.call(this));
(function (C) {
  "use strict";
  function N(a) {
    return function () {
      var b = arguments[0], d;
      d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + b;
      for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
        var c = encodeURIComponent, e;
        e = arguments[b];
        e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
        d += c(e);
      }
      return Error(d);
    };
  }
  function ta(a) {
    if (null == a || a && a.window === a) return false;
    if (L(a) || "string" === typeof a || F && a instanceof F) return true;
    var b = "length" in Object(a) && a.length;
    return "number" === typeof b && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
  }
  function q(a, b, d) {
    var c, e;
    if (a) if ("function" === typeof a) for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (L(a) || ta(a)) {
      var f = "object" !== typeof a;
      c = 0;
      for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a);
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a); else if (null !== a && "object" === typeof a && !wc(a)) for (c in a) b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a); else for (c in a) ua.call(a, c) && b.call(d, a[c], c, a);
    return a;
  }
  function tc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
    return c;
  }
  function uc(a) {
    return function (b, d) {
      a(d, b);
    };
  }
  function Yd() {
    return ++pb;
  }
  function Pb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (null !== g && "object" === typeof g || "function" === typeof g) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k], n = g[m];
        d && (null !== n && "object" === typeof n) ? "[object Date]" === ma.call(n) ? a[m] = new Date(n.valueOf()) : "[object RegExp]" === ma.call(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(true) : !(!n || !(n.nodeName || n.prop && n.attr && n.find)) ? a[m] = n.clone() : (null !== a[m] && "object" === typeof a[m] || (a[m] = L(n) ? [] : {}), Pb(a[m], [n], true)) : a[m] = n;
      }
    }
    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a;
  }
  function A() {}
  function ha(a) {
    return function () {
      return a;
    };
  }
  function be(a) {
    var b = {};
    a = a.split(",");
    var d;
    for (d = 0; d < a.length; d++) b[a[d]] = true;
    return b;
  }
  function Za(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d;
  }
  function pa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey, e;
      if (L(a)) {
        e = 0;
        for (var f = a.length; e < f; e++) b.push(c(a[e]));
      } else if (null !== a && "object" === typeof a && !wc(a)) for (e in a) b[e] = c(a[e]); else if (a && "function" === typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e])); else for (e in a) ua.call(a, e) && (b[e] = c(a[e]));
      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b;
    }
    function c(a) {
      if (!(null !== a && "object" === typeof a)) return a;
      var b = f.indexOf(a);
      if (-1 !== b) return g[b];
      if (a && a.window === a || a && a.$evalAsync && a.$watch) throw xa("cpws");
      var b = false, c = e(a);
      void 0 === c && (c = L(a) ? [] : Object.create(wc(a)), b = true);
      f.push(a);
      g.push(c);
      return b ? d(a, c) : c;
    }
    function e(a) {
      switch (ma.call(a)) {
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return new a.constructor(c(a.buffer), a.byteOffset, a.length);
        case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);
            new Uint8Array(b).set(new Uint8Array(a));
            return b;
          }
          return a.slice(0);
        case "[object Boolean]":
        case "[object Number]":
        case "[object String]":
        case "[object Date]":
          return new a.constructor(a.valueOf());
        case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
        case "[object Blob]":
          return new a.constructor([a], {type: a.type});
      }
      if ("function" === typeof a.cloneNode) return a.cloneNode(true);
    }
    var f = [], g = [];
    if (b) {
      if (b && "number" === typeof b.length && ae.test(ma.call(b)) || "[object ArrayBuffer]" === ma.call(b)) throw xa("cpta");
      if (a === b) throw xa("cpi");
      L(b) ? b.length = 0 : q(b, function (a, d) {
        "$$hashKey" !== d && delete b[d];
      });
      f.push(a);
      g.push(b);
      return d(a, b);
    }
    return c(a);
  }
  function na(a, b) {
    if (a === b) return true;
    if (null === a || null === b) return false;
    if (a !== a && b !== b) return true;
    var d = typeof a, c;
    if (d == typeof b && "object" == d) if (L(a)) {
      if (!L(b)) return false;
      if ((d = a.length) == b.length) {
        for (c = 0; c < d; c++) if (!na(a[c], b[c])) return false;
        return true;
      }
    } else {
      if ("[object Date]" === ma.call(a)) return "[object Date]" === ma.call(b) ? na(a.getTime(), b.getTime()) : false;
      if ("[object RegExp]" === ma.call(a)) return "[object RegExp]" === ma.call(b) ? a.toString() == b.toString() : false;
      if (a && a.$evalAsync && a.$watch || b && b.$evalAsync && b.$watch || a && a.window === a || b && b.window === b || L(b) || "[object Date]" === ma.call(b) || "[object RegExp]" === ma.call(b)) return false;
      d = Object.create(null);
      for (c in a) if ("$" !== c.charAt(0) && !("function" === typeof a[c])) {
        if (!na(a[c], b[c])) return false;
        d[c] = true;
      }
      for (c in b) if (!(c in d) && "$" !== c.charAt(0) && "undefined" !== typeof b[c] && !("function" === typeof b[c])) return false;
      return true;
    }
    return false;
  }
  function ab(a, b) {
    var d = 2 < arguments.length ? va.call(arguments, 2) : [];
    return !("function" === typeof b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, d.concat(va.call(arguments, 0))) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }
  function ce(a, b) {
    var d = b;
    "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : b && b.window === b ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : b && b.$evalAsync && b.$watch && (d = "$SCOPE");
    return d;
  }
  function bb(a, b) {
    if (!("undefined" === typeof a)) return "number" === typeof b || (b = b ? 2 : null), JSON.stringify(a, ce, b);
  }
  function xc(a) {
    return "string" === typeof a ? JSON.parse(a) : a;
  }
  function yc(a, b) {
    a = a.replace(de, "");
    var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
    return isNaN(d) ? b : d;
  }
  function Sb(a, b, d) {
    d = d ? -1 : 1;
    var c = a.getTimezoneOffset();
    b = yc(b, c);
    d *= b - c;
    a = new Date(a.getTime());
    a.setMinutes(a.getMinutes() + d);
    return a;
  }
  function ya(a) {
    a = F(a).clone();
    try {
      a.empty();
    } catch (b) {}
    var d = F("<div>").append(a).html();
    try {
      return a[0].nodeType === Ma ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + Q(b);
      });
    } catch (c) {
      return Q(d);
    }
  }
  function zc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }
  function Ac(a) {
    var b = {};
    q((a || "").split("&"), function (a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = zc(e), "undefined" !== typeof e && (f = "undefined" !== typeof f ? zc(f) : true, ua.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });
    return b;
  }
  function Tb(a) {
    var b = [];
    q(a, function (a, c) {
      L(a) ? q(a, function (a) {
        b.push(encodeURIComponent(c).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20") + (true === a ? "" : "=" + encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20")));
      }) : b.push(encodeURIComponent(c).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20") + (true === a ? "" : "=" + encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20")));
    });
    return b.length ? b.join("&") : "";
  }
  function ee(a, b) {
    var d, c, e = Na.length;
    for (c = 0; c < e; ++c) if (d = Na[c] + b, "string" === typeof (d = a.getAttribute(d))) return d;
    return null;
  }
  function fe(a, b) {
    var d, c, e = {};
    q(Na, function (b) {
      b += "app";
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });
    q(Na, function (b) {
      b += "app";
      var e;
      !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });
    d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e));
  }
  function Bc(a, b, d) {
    null !== d && "object" === typeof d || (d = {});
    d = Pb({strictDi: false}, va.call(arguments, 1), false);
    var c = function () {
      a = F(a);
      if (a.injector()) {
        var c = a[0] === C.document ? "document" : ya(a);
        throw xa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }
      b = b || [];
      b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);
      d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(true);
      }]);
      b.unshift("ng");
      c = cb(b, d.strictDi);
      c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);
          c(b)(a);
        });
      }]);
      return c;
    }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
    C && e.test(C.name) && (d.debugInfoEnabled = true, C.name = C.name.replace(e, ""));
    if (C && !f.test(C.name)) return c();
    C.name = C.name.replace(f, "");
    ca.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });
      return c();
    };
    "function" === typeof ca.resumeDeferredBootstrap && ca.resumeDeferredBootstrap();
  }
  function ge() {
    C.name = "NG_ENABLE_DEBUG_INFO!" + C.name;
    C.location.reload();
  }
  function he(a) {
    a = ca.element(a).injector();
    if (!a) throw xa("test");
    return a.get("$$testability");
  }
  function Cc(a, b) {
    b = b || "_";
    return a.replace(ie, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }
  function je() {
    var a;
    if (!Dc) {
      var b = rb();
      (qa = "undefined" === typeof b ? C.jQuery : b ? C[b] : void 0) && qa.fn.on ? (F = qa, Pb(qa.fn, va.call(arguments, 1), false), a = qa.cleanData, qa.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) (c = qa._data(f, "events")) && c.$destroy && qa(f).triggerHandler("$destroy");
        a(b);
      }) : F = O;
      ca.element = F;
      Dc = true;
    }
  }
  function sb(a, b, d) {
    if (!a) throw xa("areq", b || "?", d || "required");
    return a;
  }
  function Pa(a, b, d) {
    d && L(a) && (a = a[a.length - 1]);
    sb("function" === typeof a, b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
    return a;
  }
  function Qa(a, b) {
    if ("hasOwnProperty" === a) throw xa("badname", b);
  }
  function Ec(a, b, d) {
    if (!b) return a;
    b = b.split(".");
    for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);
    return !d && "function" === typeof a ? ab(e, a) : a;
  }
  function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) if (c || a[e] !== b) c || (c = F(va.call(a, 0, e))), c.push(b);
    return c || a;
  }
  function ke(a) {
    var d = N("$injector"), c = N("ng");
    a = a.angular || (a.angular = Object());
    a.$$minErr = a.$$minErr || N;
    return a.module || (a.module = function () {
      var a = {};
      return function (f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");
        g && a.hasOwnProperty(f) && (a[f] = null);
        return a[f] || (a[f] = function () {
          function a(b, d, e, f) {
            f || (f = c);
            return function () {
              f[e || "push"]([b, d, arguments]);
              return R;
            };
          }
          function b(a, d) {
            return function (b, e) {
              e && "function" === typeof e && (e.$$moduleName = f);
              c.push([a, d, arguments]);
              return R;
            };
          }
          if (!g) throw d("nomod", f);
          var c = [], e = [], p = [], u = a("$injector", "invoke", "push", e), R = {_invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: "$provide".provider || ("$provide".provider = c()), factory: "$provide".factory || ("$provide".factory = c()), service: "$provide".service || ("$provide".service = c()), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: "$provide".decorator || ("$provide".decorator = c()), animation: "$animateProvider".register || ("$animateProvider".register = c()), filter: "$filterProvider".register || ("$filterProvider".register = c()), controller: "$controllerProvider".register || ("$controllerProvider".register = c()), directive: "$compileProvider".directive || ("$compileProvider".directive = c()), component: "$compileProvider".component || ("$compileProvider".component = c()), config: u, run: function (a) {
            p.push(a);
            return this;
          }};
          h && u(h);
          return R;
        }());
      };
    }());
  }
  function ia(a, b) {
    if (L(a)) {
      b = b || [];
      for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
    } else if (null !== a && "object" === typeof a) for (d in b = b || {}, a) if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    return b || a;
  }
  function le(a) {
    Pb(a, va.call(arguments, 1), false);
    Ub = ke(C);
    Ub("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({$$sanitizeUri: ne});
      a.provider("$compile", Fc).directive({a: oe, input: Gc, textarea: Gc, form: pe, script: qe, select: re, style: se, option: te, ngBind: ue, ngBindHtml: ve, ngBindTemplate: we, ngClass: xe, ngClassEven: ye, ngClassOdd: ze, ngCloak: Ae, ngController: Be, ngForm: Ce, ngHide: De, ngIf: Ee, ngInclude: Fe, ngInit: Ge, ngNonBindable: He, ngPluralize: Ie, ngRepeat: Je, ngShow: Ke, ngStyle: Le, ngSwitch: Me, ngSwitchWhen: Ne, ngSwitchDefault: Oe, ngOptions: Pe, ngTransclude: Qe, ngModel: Re, ngList: Se, ngChange: Te, pattern: Hc, ngPattern: Hc, required: Ic, ngRequired: Ic, minlength: Jc, ngMinlength: Jc, maxlength: Kc, ngMaxlength: Kc, ngValue: Ue, ngModelOptions: Ve}).directive({ngInclude: We}).directive(vb).directive(Lc);
      a.provider({$anchorScroll: Xe, $animate: Ye, $animateCss: Ze, $$animateJs: $e, $$animateQueue: af, $$AnimateRunner: bf, $$animateAsyncRun: cf, $browser: df, $cacheFactory: ef, $controller: ff, $document: gf, $exceptionHandler: hf, $filter: Mc, $$forceReflow: jf, $interpolate: kf, $interval: lf, $http: mf, $httpParamSerializer: nf, $httpParamSerializerJQLike: of, $httpBackend: pf, $xhrFactory: qf, $jsonpCallbacks: rf, $location: sf, $log: tf, $parse: uf, $rootScope: vf, $q: wf, $$q: xf, $sce: yf, $sceDelegate: zf, $sniffer: Af, $templateCache: Bf, $templateRequest: Cf, $$testability: Df, $timeout: Ef, $window: Ff, $$rAF: Gf, $$jqLite: Hf, $$HashMap: If, $$cookieReader: Jf});
    }]);
  }
  function db(a) {
    return a.replace(Kf, function (a, d, c, e) {
      return e ? c.toUpperCase() : c;
    }).replace(Lf, "Moz$1");
  }
  function Nc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a;
  }
  function Oc(a, b) {
    var d, c, e = b.createDocumentFragment(), f = [];
    if (Vb.test(a)) {
      d = e.appendChild(b.createElement("div"));
      c = (Mf.exec(a) || ["", ""])[1].toLowerCase();
      c = ja[c] || ja._default;
      d.innerHTML = c[1] + a.replace(Nf, "<$1></$2>") + c[2];
      for (c = c[0]; c--;) d = d.lastChild;
      f = f.concat(va.call(d.childNodes, d));
      d = e.firstChild;
      d.textContent = "";
    } else f.push(b.createTextNode(a));
    e.textContent = "";
    e.innerHTML = "";
    q(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }
  function Pc(a, b) {
    var d = a.parentNode;
    d && d.replaceChild(b, a);
    b.appendChild(a);
  }
  function O(a) {
    if (a instanceof O) return a;
    var b;
    "string" === typeof a && (a = W(a), b = true);
    if (!(this instanceof O)) {
      if (b && "<" != a.charAt(0)) throw Wb("nosel");
      return new O(a);
    }
    if (b) {
      b = C.document;
      var d;
      a = (d = Of.exec(a)) ? [b.createElement(d[1])] : (d = Oc(a, b)) ? d.childNodes : [];
    }
    Qc(this, a);
  }
  function wb(a, b) {
    b || eb(a);
    if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) eb(d[c]);
  }
  function Rc(a, b, d, c) {
    if ("undefined" !== typeof c) throw Wb("offargs");
    var e = (c = xb(a)) && c.events, f = c && c.handle;
    if (f) if (b) {
      var g = function (b) {
        var c = e[b];
        "undefined" !== typeof d && Za(c || [], d);
        "undefined" !== typeof d && c && 0 < c.length || (a.removeEventListener(b, f, false), delete e[b]);
      };
      q(b.split(" "), function (a) {
        g(a);
        yb[a] && g(yb[a]);
      });
    } else for (b in e) "$destroy" !== b && a.removeEventListener(b, f, false), delete e[b];
  }
  function eb(a, b) {
    var d = a.ng339, c = d && fb[d];
    c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Rc(a)), delete fb[d], a.ng339 = void 0));
  }
  function xb(a, b) {
    var d = a.ng339, d = d && fb[d];
    b && !d && (a.ng339 = d = ++Pf, d = fb[d] = {events: {}, data: {}, handle: void 0});
    return d;
  }
  function Yb(a, b, d) {
    if (Nc(a)) {
      var c = "undefined" !== typeof d, e = !c && b && !(null !== b && "object" === typeof b), f = !b;
      a = (a = xb(a, !e)) && a.data;
      if (c) a[b] = d; else {
        if (f) return a;
        if (e) return a && a[b];
        Pb(a, va.call(arguments, 1), false);
      }
    }
  }
  function zb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : false;
  }
  function Ab(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
    });
  }
  function Bb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      q(b.split(" "), function (a) {
        a = W(a);
        -1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });
      a.setAttribute("class", W(d));
    }
  }
  function Qc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b; else {
      var d = b.length;
      if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
      } else a[a.length++] = b;
    }
  }
  function Cb(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);
    for (b = L(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) if ("undefined" !== typeof (d = F.data(a, b[c]))) return d;
      a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }
  function Tc(a) {
    for (wb(a, true); a.firstChild;) a.removeChild(a.firstChild);
  }
  function Db(a, b) {
    b || wb(a);
    var d = a.parentNode;
    d && d.removeChild(a);
  }
  function Qf(a, b) {
    b = b || C;
    if ("complete" === b.document.readyState) b.setTimeout(a); else F(b).on("load", a);
  }
  function Uc(a, b) {
    var d = Eb[b.toLowerCase()];
    return d && Vc[Q(a.nodeName || a[0] && a[0].nodeName)] && d;
  }
  function Rf(a, b) {
    var d = function (c, d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = b[d || c.type], g = f ? f.length : 0;
      if (g) {
        if ("undefined" === typeof c.immediatePropagationStopped) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = true;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c);
          };
        }
        c.isImmediatePropagationStopped = function () {
          return true === c.immediatePropagationStopped;
        };
        var k = f.specialHandlerWrapper || Sf;
        1 < g && (f = ia(f));
        for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l]);
      }
    };
    d.elem = a;
    return d;
  }
  function Sf(a, b, d) {
    d.call(a, b);
  }
  function Tf(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || Uf.call(a, c)) || d.call(a, b);
  }
  function Hf() {
    this.$get = function () {
      return Pb(O, va.call(arguments, 1), false);
    };
  }
  function Ca(a, b) {
    var d = a && a.$$hashKey;
    if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
    d = typeof a;
    return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a;
  }
  function Ra(a, b) {
    if (b) {
      var d = 0;
      this.nextUid = function () {
        return ++d;
      };
    }
    q(a, this.put, this);
  }
  function Wc(a) {
    a = (Function.prototype.toString.call(a) + " ").replace(Vf, "");
    return a.match(Wf) || a.match(Xf);
  }
  function Yf(a) {
    return (a = Wc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }
  function cb(a, b) {
    function d(a) {
      return function (b, c) {
        if (null !== b && "object" === typeof b) q(b, uc(a)); else return a(b, c);
      };
    }
    function c(a, b) {
      Qa(a, "service");
      if ("function" === typeof b || L(b)) b = p.instantiate(b);
      if (!b.$get) throw Ha("pget", a);
      return n[a + "Provider"] = b;
    }
    function e(a, b) {
      return function () {
        var c = B.invoke(b, this);
        if ("undefined" === typeof c) throw Ha("undef", a);
        return c;
      };
    }
    function g(a) {
      sb("undefined" === typeof a || L(a), "modulesToLoad", "not an array");
      var b = [], c;
      q(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], f = p.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }
        if (!m.get(a)) {
          m.put(a, true);
          try {
            "string" === typeof a ? (c = Ub(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : "function" === typeof a ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Pa(a, "module");
          } catch (e) {
            throw L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));
          return a[b];
        }
        try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e);
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }
      function e(a, c, f) {
        var g = [];
        a = cb.$$annotate(a, b, f);
        for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];
          if ("string" !== typeof l) throw Ha("itkn", l);
          g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }
        return g;
      }
      return {invoke: function (a, b, c, d) {
        "string" === typeof c && (d = c, c = null);
        c = e(a, c, d);
        L(a) && (a = a[a.length - 1]);
        d = 11 >= Ea ? false : "function" === typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ");
        return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))) : a.apply(b, c);
      }, instantiate: function (a, b, c) {
        var d = L(a) ? a[a.length - 1] : a;
        a = e(a, b, c);
        a.unshift(null);
        return new (Function.prototype.bind.apply(d, a));
      }, get: d, annotate: cb.$$annotate, has: function (b) {
        return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
      }};
    }
    b = true === b;
    var k = {}, l = [], m = new Ra([], true), n = {$provide: {provider: d(c), factory: d(f), service: d(function (a, b) {
      return c(a, {$get: false !== d ? e(a, ["$injector", function (a) {
        return a.instantiate(b);
      }]) : ["$injector", function (a) {
        return a.instantiate(b);
      }]});
    }), value: d(function (a, b) {
      return c(a, {$get: ha(b)});
    }), constant: d(function (a, b) {
      Qa(a, "constant");
      n[a] = b;
      u[a] = b;
    }), decorator: function (a, b) {
      var c = p.get(a + "Provider"), d = c.$get;
      c.$get = function () {
        var a = B.invoke(d, c);
        return B.invoke(b, null, {$delegate: a});
      };
    }}}, p = n.$injector = h(n, function (a, b) {
      ca.isString(b) && l.push(b);
      throw Ha("unpr", l.join(" <- "));
    }), u = {}, R = h(u, function (a, b) {
      var c = p.get(a + "Provider", b);
      return B.invoke(c.$get, c, void 0, a);
    }), B = R;
    n.$injectorProvider = {$get: ha(R)};
    var r = g(a), B = R.get("$injector");
    B.strictDi = b;
    q(r, function (a) {
      a && B.invoke(a);
    });
    return B;
  }
  function Xe() {
    var a = true;
    this.disableAutoScrolling = function () {
      a = false;
    };
    this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function (a) {
          if ("a" === Q(a.nodeName || a[0] && a[0].nodeName)) return b = a, true;
        });
        return b;
      }
      function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;
          c = g.yOffset;
          "function" === typeof c ? c = c() : !(!c || !(c.nodeName || c.prop && c.attr && c.find)) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : "number" === typeof c || (c = 0);
          c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }
      function g(a) {
        a = "string" === typeof a ? a : d.hash();
        var b;
        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }
      var h = b.document;
      a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || Qf(function () {
          c.$evalAsync(g);
        });
      });
      return g;
    }];
  }
  function gb(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    L(a) && (a = a.join(" "));
    L(b) && (b = b.join(" "));
    return a + " " + b;
  }
  function Zf(a) {
    "string" === typeof a && (a = a.split(" "));
    var b = Object.create(null);
    q(a, function (a) {
      a.length && (b[a] = true);
    });
    return b;
  }
  function Ia(a) {
    return null !== a && "object" === typeof a ? a : {};
  }
  function $f(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, va.call(arguments, 1));
      } finally {
        if (R--, 0 === R) for (; B.length;) try {
          B.pop()();
        } catch (b) {
          d.error(b);
        }
      }
    }
    function f() {
      t = null;
      g();
      h();
    }
    function g() {
      r = K();
      r = "undefined" === typeof r ? null : r;
      na(r, E) && (r = E);
      E = r;
    }
    function h() {
      if (v !== k.url() || J !== r) v = k.url(), J = r, q(M, function (a) {
        a(k.url(), r);
      });
    }
    var k = this, l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, u = {};
    k.isMock = false;
    var R = 0, B = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function () {
      R++;
    };
    k.notifyWhenNoOutstandingRequests = function (a) {
      0 === R ? a() : B.push(a);
    };
    var r, J, v = l.href, fa = b.find("base"), t = null, K = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : A;
    g();
    J = r;
    k.url = function (b, d, e) {
      "undefined" === typeof e && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);
      if (b) {
        var f = J === e;
        if (v === b && (!c.history || f)) return k;
        var h = v && Ja(v) === Ja(b);
        v = b;
        J = e;
        !c.history || h && f ? (h || (t = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (t = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), J = r);
        t && (t = b);
        return k;
      }
      return t || l.href.replace(/%27/g, "'");
    };
    k.state = function () {
      return r;
    };
    var M = [], H = false, E = null;
    k.onUrlChange = function (b) {
      if (!H) {
        if (c.history) F(a).on("popstate", f);
        F(a).on("hashchange", f);
        H = true;
      }
      M.push(b);
      return b;
    };
    k.$$applicationDestroyed = function () {
      F(a).off("hashchange popstate", f);
    };
    k.$$checkUrlChange = h;
    k.baseHref = function () {
      var a = fa.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };
    k.defer = function (a, b) {
      var c;
      R++;
      c = n(function () {
        delete u[c];
        e(a);
      }, b || 0);
      u[c] = true;
      return c;
    };
    k.defer.cancel = function (a) {
      return u[a] ? (delete u[a], p(a), e(A), true) : false;
    };
  }
  function df() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new $f(a, c, b, d);
    }];
  }
  function ef() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (a in b) throw N("$cacheFactory")("iid", a);
        var g = 0, h = Pb({}, va.call(arguments, 1), false), k = Object.create(null), l = c && c.capacity || Number.MAX_VALUE, m = Object.create(null), n = null, p = null;
        return b[a] = {put: function (a, b) {
          if (!("undefined" === typeof b)) {
            if (l < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = {key: a});
              e(c);
            }
            a in k || g++;
            k[a] = b;
            g > l && this.remove(p.key);
            return b;
          }
        }, get: function (a) {
          if (l < Number.MAX_VALUE) {
            var b = m[a];
            if (!b) return;
            e(b);
          }
          return k[a];
        }, remove: function (a) {
          if (l < Number.MAX_VALUE) {
            var b = m[a];
            if (!b) return;
            b == n && (n = b.p);
            b == p && (p = b.n);
            f(b.n, b.p);
            delete m[a];
          }
          a in k && (delete k[a], g--);
        }, removeAll: function () {
          k = Object.create(null);
          g = 0;
          m = Object.create(null);
          n = p = null;
        }, destroy: function () {
          m = h = k = null;
          delete b[a];
        }, info: function () {
          return Pb({}, va.call(arguments, 1), false);
        }};
      }
      var b = {};
      a.info = function () {
        var a = {};
        q(b, function (b, e) {
          a[e] = b.info();
        });
        return a;
      };
      a.get = function (a) {
        return b[a];
      };
      return a;
    };
  }
  function Bf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }
  function Fc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, e = Object.create(null);
      q(a, function (a, f) {
        if (a in n) e[f] = n[a]; else {
          var g = a.match(d);
          if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
          e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f};
          g[4] && (n[a] = e[f]);
        }
      });
      return e;
    }
    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== Q(b)) throw ga("baddir", a);
      if (a !== a.trim()) throw ga("baddir", a);
    }
    function e(a) {
      var b = a.require || a.controller && a.name;
      !L(b) && (null !== b && "object" === typeof b) && q(b, function (a, c) {
        var d = a.match(l);
        a.substring(d[0].length) || (b[c] = d[0] + c);
      });
      return b;
    }
    var f = {}, g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, h = /(([\w\-]+)(?:\:([^;]+))?;?)/, k = be("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/, n = Object.create(null);
    this.directive = function B(b, d) {
      Qa(b, "directive");
      "string" === typeof b ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];
        q(f[b], function (f, g) {
          try {
            var h = a.invoke(f);
            "function" === typeof h ? h = {compile: ha(h)} : !h.compile && h.link && (h.compile = ha(h.link));
            h.priority = h.priority || 0;
            h.index = g;
            h.name = h.name || b;
            h.require = e(h);
            h.restrict = h.restrict || "EA";
            h.$$moduleName = f.$$moduleName;
            d.push(h);
          } catch (k) {
            c(k);
          }
        });
        return d;
      }])), f[b].push(d)) : q(b, uc(B));
      return this;
    };
    this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return "function" === typeof b || L(b) ? function (c, d) {
            return a.invoke(b, this, {$element: c, $attrs: d});
          } : b;
        }
        var f = b.template || b.templateUrl ? b.template : "", g = {controller: d, controllerAs: Xc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require};
        q(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });
        return g;
      }
      var d = b.controller || function () {};
      q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, "function" === typeof d && (d[b] = a));
      });
      c.$inject = ["$injector"];
      return this.directive(a, c);
    };
    this.aHrefSanitizationWhitelist = function (a) {
      return "undefined" !== typeof a ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (a) {
      return "undefined" !== typeof a ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };
    var p = true;
    this.debugInfoEnabled = function (a) {
      return "undefined" !== typeof a ? (p = a, this) : p;
    };
    var u = 10;
    this.onChangesTtl = function (a) {
      return arguments.length ? (u = a, this) : u;
    };
    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, t, K, M, H, E) {
      function I() {
        try {
          if (!--qa) throw Y = void 0, ga("infchng", u);
          K.$apply(function () {
            for (var a = [], b = 0, c = Y.length; b < c; ++b) try {
              Y[b]();
            } catch (d) {
              a.push(d);
            }
            Y = void 0;
            if (a.length) throw a;
          });
        } finally {
          qa++;
        }
      }
      function Da(a, b) {
        if (b) {
          var c = Object.keys(b), d, e, f;
          d = 0;
          for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
        } else this.$attr = {};
        this.$$element = a;
      }
      function P(a, b, c) {
        pa.innerHTML = "<span " + b + ">";
        b = pa.firstChild.attributes;
        var d = b[0];
        b.removeNamedItem(d.name);
        d.value = c;
        a.attributes.setNamedItem(d);
      }
      function x(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }
      function aa(a, b, c, d, e) {
        a instanceof F || (a = F(a));
        for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
          var k = a[g];
          k.nodeType === Ma && k.nodeValue.match(f) && Pc(k, a[g] = C.document.createElement("span"));
        }
        var l = s(a, b, a, c, d, e);
        aa.$$addScopeClass(a);
        var m = null;
        return function (b, c, d) {
          sb(b, "scope");
          e && e.needsNewScope && (b = b.$parent.$new());
          d = d || {};
          var f = d.parentBoundTranscludeFn, g = d.transcludeControllers;
          d = d.futureParentElement;
          f && f.$$boundTransclude && (f = f.$$boundTransclude);
          m || (m = (d = d && d[0]) ? "foreignobject" !== Q(d.nodeName || d[0] && d[0].nodeName) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");
          d = "html" !== m ? F("[object Date]" === ma.call(m)) : c ? Oa.clone.call(a) : a;
          if (g) for (var h in g) d.data("$" + h + "Controller", g[h].instance);
          aa.$$addScopeInfo(d, b);
          c && c(d, b);
          l && l(b, d, d, f);
          return d;
        };
      }
      function s(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, p, r, v;
          if (n) for (v = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], v[f] = c[f]; else v = c;
          m = 0;
          for (p = h.length; m < p;) k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(F(k), l)) : l = a, r = c.transcludeOnThisElement ? za(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? za(a, b) : null, c(f, l, k, d, r)) : f && f(a, k.childNodes, void 0, e);
        }
        for (var h = [], k, l, m, p, n, r = 0; r < a.length; r++) {
          k = new Da;
          l = $b(a[r], [], k, 0 === r ? d : void 0, e);
          (f = l.length ? oa(l, a[r], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);
          k = f && f.terminal || !(m = a[r].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
          if (f || k) h.push(r, f, k), p = true, n = n || f;
          f = null;
        }
        return p ? g : null;
      }
      function za(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(false, k), e.$$transcluded = true);
          return b(e, f, {parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h});
        }
        var e = d.$$slots = Object.create(null), f;
        for (f in b.$$slots) e[f] = b.$$slots[f] ? za(a, b.$$slots[f], c) : null;
        return d;
      }
      function $b(a, b, c, d, e) {
        var f = c.$attr;
        switch (a.nodeType) {
          case 1:
            O(b, db(Q(a.nodeName || a[0] && a[0].nodeName).replace(Yc, "")), "E", d, e);
            for (var g, k, l, m, p = a.attributes, n = 0, r = p && p.length; n < r; n++) {
              var v = false, u = false;
              g = p[n];
              k = g.name;
              l = W(g.value);
              g = db(k.replace(Yc, ""));
              if (m = Ba.test(g)) k = k.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });
              (g = g.match(Ca)) && V(g[1]) && (v = k, u = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
              g = db(k.toLowerCase().replace(Yc, ""));
              f[g] = k;
              if (m || !c.hasOwnProperty(g)) c[g] = l, Uc(a, g) && (c[g] = true);
              ia(a, b, l, g, m);
              O(b, g, "A", d, e, v, u);
            }
            f = a.className;
            null !== f && "object" === typeof f && (f = f.animVal);
            if ("string" === typeof f && "" !== f) for (; a = h.exec(f);) g = db(a[2].replace(Yc, "")), O(b, g, "C", d, e) && (c[g] = W(a[3])), f = f.substr(a.index + a[0].length);
            break;
          case Ma:
            if (11 === Ea) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            ca(b, a.nodeValue);
            break;
          case 8:
            hb(a, b, c, d, e);
        }
        b.sort(Z);
        return b;
      }
      function hb(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);
          if (f) {
            var h = db(f[1].replace(Yc, ""));
            O(b, h, "M", d, e) && (c[h] = W(f[2]));
          }
        } catch (k) {}
      }
      function N(a, b, c) {
        var d = [], e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ga("uterdir", b, c);
            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);
        return F(d);
      }
      function Zc(a, b, c) {
        return function (d, e, f, g, h) {
          e = N(e[0], b, c);
          return a(d, e, f, g, h);
        };
      }
      function ac(a, b, c, d, e, f) {
        var g;
        return a ? aa(b, c, d, e, f) : function () {
          g || (g = aa(b, c, d, e, f), b = c = f = null);
          return g.apply(this, arguments);
        };
      }
      function oa(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = Zc(a, c, d));
            a.require = x.require;
            a.directiveName = I;
            if (u === x || x.$$isolateScope) a = ja(a, {isolateScope: true});
            h.push(a);
          }
          if (b) {
            c && (b = Zc(b, c, d));
            b.require = x.require;
            b.directiveName = I;
            if (u === x || x.$$isolateScope) b = ja(b, {isolateScope: true});
            k.push(b);
          }
        }
        function p(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;
            a && a.$evalAsync && a.$watch || (d = c, c = b, b = a, a = void 0);
            fa && (e = t);
            c || (c = fa ? I.parent() : I);
            if (d) {
              var f = l.$$slots[d];
              if (f) return f(a, b, e, c, s);
              if ("undefined" === typeof f) throw ga("noslot", d, ya(I));
            } else return l(a, b, e, c, s);
          }
          var n, E, x, M, B, t, P, I;
          b === f ? (g = d, I = d.$$element) : (I = F(f), g = new Da(I, d));
          B = e;
          u ? M = e.$new(true) : r && (B = e.$parent);
          l && (P = m, P.$$boundTransclude = l, P.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });
          v && (t = ag(I, g, P, v, M, e, u));
          u && (aa.$$addScopeInfo(I, M, true, !(H && (H === u || H === u.$$originalDirective))), aa.$$addScopeClass(I, true), M.$$isolateBindings = u.$$isolateBindings, E = ka(e, g, M, M.$$isolateBindings, u), E.removeWatches && M.$on("$destroy", E.removeWatches));
          for (n in t) {
            E = v[n];
            x = t[n];
            var Zb = E.$$bindings.bindToController;
            x.bindingInfo = x.identifier && Zb ? ka(B, g, x.instance, Zb, E) : {};
            var K = x();
            K !== x.instance && (x.instance = K, I.data("$" + E.name + "Controller", K), x.bindingInfo.removeWatches && x.bindingInfo.removeWatches(), x.bindingInfo = ka(B, g, x.instance, Zb, E));
          }
          q(v, function (a, b) {
            var c = a.require;
            a.bindToController && !L(c) && (null !== c && "object" === typeof c) && Pb(t[b].instance, va.call(arguments, 1), false);
          });
          q(t, function (a) {
            var b = a.instance;
            if ("function" === typeof b.$onChanges) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }
            if ("function" === typeof b.$onInit) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }
            "function" === typeof b.$doCheck && (B.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());
            "function" === typeof b.$onDestroy && B.$on("$destroy", function () {
              b.$onDestroy();
            });
          });
          n = 0;
          for (E = h.length; n < E; n++) x = h[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
          var s = e;
          u && (u.template || null === u.templateUrl) && (s = M);
          a && a(s, f.childNodes, void 0, l);
          for (n = k.length - 1; 0 <= n; n--) x = k[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
          q(t, function (a) {
            a = a.instance;
            "function" === typeof a.$postLink && a.$postLink();
          });
        }
        l = l || {};
        for (var n = -Number.MAX_VALUE, r = l.newScopeDirective, v = l.controllerDirectives, u = l.newIsolateScopeDirective, H = l.templateDirective, E = l.nonTlbTranscludeDirective, M = false, B = false, fa = l.hasElementTranscludeDirective, t = d.$$element = F(b), x, I, P, K = e, s, Fa = false, za = false, w, A = 0, C = a.length; A < C; A++) {
          x = a[A];
          var G = x.$$start, hb = x.$$end;
          G && (t = N(b, G, hb));
          P = void 0;
          if (n > x.priority) break;
          if (w = x.scope) x.templateUrl || (null !== w && "object" === typeof w ? (X("new/isolated scope", u || r, x, t), u = x) : X("new/isolated scope", u, x, t)), r = r || x;
          I = x.name;
          if (!Fa && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
            for (w = A + 1; Fa = a[w++];) if (Fa.transclude && !Fa.$$tlb || Fa.replace && (Fa.templateUrl || Fa.template)) {
              za = true;
              break;
            }
            Fa = true;
          }
          !x.templateUrl && x.controller && (w = x.controller, v = v || Object.create(null), X("'" + I + "' controller", v[I], x, t), v[I] = x);
          if (w = x.transclude) if (M = true, x.$$tlb || (X("transclusion", E, x, t), E = x), "element" == w) fa = true, n = x.priority, P = t, t = d.$$element = F(aa.$$createComment(I, d[I])), b = t[0], encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, va.call(P, 0) ? "%20" : "+"), P[0].$$parentNode = P[0].parentNode, K = ac(za, P, e, n, g && g.name, {nonTlbTranscludeDirective: E}); else {
            var oa = Object.create(null);
            P = F(b.cloneNode(true)).contents();
            if (null !== w && "object" === typeof w) {
              P = [];
              var Q = Object.create(null), O = Object.create(null);
              q(w, function (a, b) {
                var c = "?" === a.charAt(0);
                a = c ? a.substring(1) : a;
                Q[a] = b;
                oa[b] = null;
                O[b] = c;
              });
              q(t.contents(), function (a) {
                var b = Q[db(Q(a.nodeName || a[0] && a[0].nodeName).replace(Yc, ""))];
                b ? (O[b] = true, oa[b] = oa[b] || [], oa[b].push(a)) : P.push(a);
              });
              q(O, function (a, b) {
                if (!a) throw ga("reqslot", b);
              });
              for (var V in oa) oa[V] && (oa[V] = ac(za, oa[V], e));
            }
            t.empty();
            K = ac(za, P, e, void 0, void 0, {needsNewScope: x.$$isolateScope || x.$$newScope});
            K.$$slots = oa;
          }
          if (x.template) if (B = true, X("template", H, x, t), H = x, w = "function" === typeof x.template ? x.template(t, d) : x.template, w = xa(w), x.replace) {
            g = x;
            P = Vb.test(w) ? $c("[object Date]" === ma.call(x.templateNamespace)) : [];
            b = P[0];
            if (1 != P.length || 1 !== b.nodeType) throw ga("tplrt", I, "");
            encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+");
            C = {$attr: {}};
            w = $b(b, [], C);
            var Z = a.splice(A + 1, a.length - (A + 1));
            (u || r) && "number" === typeof w;
            a = a.concat(w).concat(Z);
            $(d, C);
            C = a.length;
          } else t.html(w);
          if (x.templateUrl) B = true, X("template", H, x, t), H = x, x.replace && (g = x), p = ba(a.splice(A, a.length - A), t, d, f, M && K, h, k, {controllerDirectives: v, newScopeDirective: r !== x && r, newIsolateScopeDirective: u, templateDirective: H, nonTlbTranscludeDirective: E}), C = a.length; else if (x.compile) try {
            s = x.compile(t, d, K);
            var Y = x.$$originalDirective || x;
            "function" === typeof s ? m(null, ab(Y, s), G, hb) : s && m(ab(Y, s.pre), ab(Y, s.post), G, hb);
          } catch (ca) {
            c(ca, ya(t));
          }
          x.terminal && (p.terminal = true, n = Math.max(n, x.priority));
        }
        p.scope = r && true === r.scope;
        p.transcludeOnThisElement = M;
        p.templateOnThisElement = B;
        p.transclude = K;
        l.hasElementTranscludeDirective = fa;
        return p;
      }
      function ib(a, b, c, d) {
        var e;
        if ("string" === typeof b) {
          var f = b.match(l);
          b = b.substring(f[0].length);
          var g = f[1] || f[3], f = "?" === f[2];
          "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
          if (!e) {
            var h = "$" + b + "Controller";
            e = g ? c.inheritedData(h) : c.data(h);
          }
          if (!e && !f) throw ga("ctreq", b, a);
        } else if (L(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = ib(a, b[g], c, d); else null !== b && "object" === typeof b && (e = {}, q(b, function (b, f) {
          e[f] = ib(a, b, c, d);
        }));
        return e || null;
      }
      function ag(a, b, c, d, e, f, g) {
        var h = Object.create(null), k;
        for (k in d) {
          var l = d[k], m = {$scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c}, p = l.controller;
          "@" == p && (p = b[l.name]);
          m = t(p, m, true, l.controllerAs);
          h[l.name] = m;
          a.data("$" + l.name + "Controller", m.instance);
        }
        return h;
      }
      function T(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d] = Pb(Object.create(a[d]), va.call(arguments, 1), false);
      }
      function O(b, e, g, h, k, l, m) {
        if (e === k) return null;
        k = null;
        if (f.hasOwnProperty(e)) {
          var p;
          e = a.get(e + "Directive");
          for (var n = 0, r = e.length; n < r; n++) try {
            if (p = e[n], ("undefined" === typeof h || h > p.priority) && -1 != p.restrict.indexOf(g)) {
              l && (p = Pb(Object.create(p), va.call(arguments, 1), false));
              if (!p.$$bindings) {
                var u = p, v = p, x = p.name, H = {isolateScope: null, bindToController: null};
                null !== v.scope && "object" === typeof v.scope && (true === v.bindToController ? (H.bindToController = d(v.scope, x, true), H.isolateScope = {}) : H.isolateScope = d(v.scope, x, false));
                null !== v.bindToController && "object" === typeof v.bindToController && (H.bindToController = d(v.bindToController, x, true));
                if (null !== H.bindToController && "object" === typeof H.bindToController) {
                  var E = v.controller, M = v.controllerAs;
                  if (!E) throw ga("noctrl", x);
                  if (!Xc(E, M)) throw ga("noident", x);
                }
                var t = u.$$bindings = H;
                null !== t.isolateScope && "object" === typeof t.isolateScope && (p.$$isolateBindings = t.isolateScope);
              }
              b.push(p);
              k = p;
            }
          } catch (I) {
            c(I);
          }
        }
        return k;
      }
      function V(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) if (b = c[d], b.multiElement) return true;
        return false;
      }
      function $(a, b) {
        var c = b.$attr, d = a.$attr;
        q(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, true, c[e]));
        });
        q(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }
      function ba(a, b, c, d, f, g, h, k) {
        var l = [], m, p, n = b[0], r = a.shift(), u = Pb(Object.create(r), va.call(arguments, 1), false), H = "function" === typeof r.templateUrl ? r.templateUrl(b, c) : r.templateUrl, E = r.templateNamespace;
        b.empty();
        e(H).then(function (e) {
          var v, M;
          e = xa(e);
          if (r.replace) {
            e = Vb.test(e) ? $c("[object Date]" === ma.call(E)) : [];
            v = e[0];
            if (1 != e.length || 1 !== v.nodeType) throw ga("tplrt", r.name, H);
            e = {$attr: {}};
            encodeURIComponent(d).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
            var B = $b(v, [], e);
            null !== r.scope && "object" === typeof r.scope && "number" === typeof B;
            a = B.concat(a);
            $(c, e);
          } else v = n, b.html(e);
          a.unshift(u);
          m = oa(a, v, c, f, b, r, g, h, k);
          q(d, function (a, c) {
            a == v && (d[c] = b[0]);
          });
          for (p = s(b[0].childNodes, f); l.length;) {
            e = l.shift();
            M = l.shift();
            var t = l.shift(), I = l.shift(), B = b[0];
            if (!e.$$destroyed) {
              if (M !== n) {
                var P = M.className;
                k.hasElementTranscludeDirective && r.replace || (B = v.cloneNode(true));
                encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, F(M) ? "%20" : "+");
                x(F(B), P);
              }
              M = m.transcludeOnThisElement ? za(e, m.transclude, I) : I;
              m(p, e, B, d, M);
            }
          }
          l = null;
        });
        return function (a, b, c, d, e) {
          a = e;
          b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = za(b, m.transclude, e)), m(p, b, c, d, a)));
        };
      }
      function Z(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }
      function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }
        if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
      }
      function ca(a, c) {
        var d = b(c, true);
        d && a.push({priority: 0, compile: function (a) {
          a = a.parent();
          var b = !!a.length;
          b && aa.$$addBindingClass(a);
          return function (a, c) {
            var e = c.parent();
            b || aa.$$addBindingClass(e);
            aa.$$addBindingInfo(e, d.expressions);
            a.$watch(d, function (a) {
              c[0].nodeValue = a;
            });
          };
        }});
      }
      function da(a, b) {
        a = Q(a || "html");
        switch (a) {
          case "svg":
          case "math":
            var c = C.document.createElement("div");
            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
            return c.childNodes[0].childNodes;
          default:
            return b;
        }
      }
      function ha(a, b) {
        if ("srcdoc" == b) return M.HTML;
        var c = Q(a.nodeName || a[0] && a[0].nodeName);
        if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return M.RESOURCE_URL;
      }
      function ia(a, c, d, e, f) {
        var g = ha(a, e);
        f = k[e] || f;
        var h = b(d, true, g, f);
        if (h) {
          if ("multiple" === e && "select" === Q(a.nodeName || a[0] && a[0].nodeName)) throw ga("selmulti", ya(a));
          c.push({priority: 100, compile: function () {
            return {pre: function (a, c, k) {
              c = k.$$observers || (k.$$observers = Object.create(null));
              if (m.test(e)) throw ga("nodomevents");
              var l = k[e];
              l !== d && (h = l && b(l, true, g, f), d = l);
              h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = true, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
              }));
            }};
          }});
        }
      }
      function ea(a, b, c) {
        var d = b[0], e = b.length, f = d.parentNode, g, h;
        if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
          a[g++] = c;
          h = g + e - 1;
          for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
          a.length -= e - 1;
          a.context === d && (a.context = c);
          break;
        }
        f && f.replaceChild(c, d);
        a = C.document.createDocumentFragment();
        for (g = 0; g < e; g++) a.appendChild(b[g]);
        F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy"));
        F.cleanData(a.querySelectorAll("*"));
        for (g = 1; g < e; g++) delete b[g];
        b[0] = c;
        b.length = 1;
      }
      function ja(a, b) {
        return Pb(function () {
          return a.apply(null, arguments);
        }, va.call(arguments, 1), false);
      }
      function la(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, ya(d));
        }
      }
      function ka(a, c, d, e, f) {
        function g(b, c, e) {
          "function" === typeof d.$onChanges && c !== e && (Y || (a.$$postDigest(I), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Fb(e, c));
        }
        function h() {
          d.$onChanges(m);
          m = void 0;
        }
        var k = [], l = {}, m;
        q(e, function (e, h) {
          var m = e.attrName, p = e.optional, v, u, x, H;
          switch (e.mode) {
            case "@":
              p || ua.call(c, m) || (d[h] = c[m] = void 0);
              c.$observe(m, function (a) {
                if ("string" === typeof a || "boolean" === typeof a) g(h, a, d[h]), d[h] = a;
              });
              c.$$observers[m].$$scope = a;
              v = c[m];
              "string" === typeof v ? d[h] = b(v)(a) : "boolean" === typeof v && (d[h] = v);
              l[h] = new Fb(bc, d[h]);
              break;
            case "=":
              if (!ua.call(c, m)) {
                if (p) break;
                c[m] = void 0;
              }
              if (p && !c[m]) break;
              u = n(c[m]);
              H = u.literal ? na : function (a, b) {
                return a === b || a !== a && b !== b;
              };
              x = u.assign || function () {
                v = d[h] = u(a);
                throw ga("nonassign", c[m], m, f.name);
              };
              v = d[h] = u(a);
              p = function (b) {
                H(b, d[h]) || (H(b, v) ? x(a, b = d[h]) : d[h] = b);
                return v = b;
              };
              p.$stateful = true;
              p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, u.literal);
              k.push(p);
              break;
            case "<":
              if (!ua.call(c, m)) {
                if (p) break;
                c[m] = void 0;
              }
              if (p && !c[m]) break;
              u = n(c[m]);
              var E = d[h] = u(a);
              l[h] = new Fb(bc, d[h]);
              p = a.$watch(u, function (a, b) {
                if (b === a) {
                  if (b === E) return;
                  b = E;
                }
                g(h, a, b);
                d[h] = a;
              }, u.literal);
              k.push(p);
              break;
            case "&":
              u = c.hasOwnProperty(m) ? n(c[m]) : A;
              if (u === A && p) break;
              d[h] = function (b) {
                return u(a, b);
              };
          }
        });
        return {initialChanges: l, removeWatches: k.length && function () {
          for (var a = 0, b = k.length; a < b; ++a) k[a]();
        }};
      }
      var ta = /^\w/, pa = C.document.createElement("div"), qa = u, Y;
      Da.prototype = {$normalize: Aa, $addClass: function (a) {
        a && 0 < a.length && H.addClass(this.$$element, a);
      }, $removeClass: function (a) {
        a && 0 < a.length && H.removeClass(this.$$element, a);
      }, $updateClass: function (a, b) {
        var c = ad(a, b);
        c && c.length && H.addClass(this.$$element, c);
        (c = ad(b, a)) && c.length && H.removeClass(this.$$element, c);
      }, $set: function (a, b, d, e) {
        var f = Uc(this.$$element[0], a), g = bd[a], h = a;
        f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
        this[a] = b;
        e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Cc(a, "-"));
        f = Q(this.$$element.nodeName || this.$$element[0] && this.$$element[0].nodeName);
        if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = E(b, "src" === a); else if ("img" === f && "srcset" === a && "undefined" !== typeof b) {
          for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + E(W(g[m]), true), f = f + (" " + W(g[m + 1]));
          g = W(g[2 * l]).split(/\s/);
          f += E(W(g[0]), true);
          2 === g.length && (f += " " + W(g[1]));
          this[a] = b = f;
        }
        false !== d && (null === b || "undefined" === typeof b ? this.$$element.removeAttr(e) : ta.test(e) ? this.$$element.attr(e, b) : P(this.$$element[0], e, b));
        (a = this.$$observers) && q(a[h], function (a) {
          try {
            a(b);
          } catch (d) {
            c(d);
          }
        });
      }, $observe: function (a, b) {
        var c = this, d = c.$$observers || (c.$$observers = Object.create(null)), e = d[a] || (d[a] = []);
        e.push(b);
        K.$evalAsync(function () {
          e.$$inter || !c.hasOwnProperty(a) || "undefined" === typeof c[a] || b(c[a]);
        });
        return function () {
          Za(e, b);
        };
      }};
      var ra = b.startSymbol(), sa = b.endSymbol(), xa = "{{" == ra && "}}" == sa ? Xa : function (a) {
        return a.replace(/\{\{/g, ra).replace(/}}/g, sa);
      }, Ba = /^ngAttr[A-Z]/, Ca = /^(.+)Start$/;
      aa.$$addBindingInfo = p ? function (a, b) {
        var c = a.data("$binding") || [];
        L(b) ? c = c.concat(b) : c.push(b);
        a.data("$binding", c);
      } : A;
      aa.$$addBindingClass = p ? function (a) {
        x(a, "ng-binding");
      } : A;
      aa.$$addScopeInfo = p ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : A;
      aa.$$addScopeClass = p ? function (a, b) {
        x(a, b ? "ng-isolate-scope" : "ng-scope");
      } : A;
      aa.$$createComment = function (a, b) {
        var c = "";
        p && (c = " " + (a || "") + ": ", b && (c += b + " "));
        return C.document.createComment(c);
      };
      return aa;
    }];
  }
  function Fb(a, b) {
    this.previousValue = a;
    this.currentValue = b;
  }
  function ad(a, b) {
    var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
    a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
      d += (0 < d.length ? " " : "") + g;
    }
    return d;
  }
  function $c(a) {
    a = F(a);
    var b = a.length;
    if (1 >= b) return a;
    for (; b--;) 8 === a[b].nodeType && bg.call(a, b, 1);
    return a;
  }
  function Xc(a, b) {
    if (b && "string" === typeof b) return b;
    if ("string" === typeof a) {
      var d = cd.exec(a);
      if (d) return d[3];
    }
  }
  function ff() {
    var a = {}, b = false;
    this.has = function (b) {
      return a.hasOwnProperty(b);
    };
    this.register = function (b, c) {
      Qa(b, "controller");
      null !== b && "object" === typeof b ? Pb(a, va.call(arguments, 1), false) : a[b] = c;
    };
    this.allowGlobals = function () {
      b = true;
    };
    this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !(null !== a.$scope && "object" === typeof a.$scope)) throw N("$controller")("noscp", d, b);
        a.$scope[b] = c;
      }
      return function (f, g, h, k) {
        var l, m, n;
        h = true === h;
        k && "string" === typeof k && (n = k);
        if ("string" === typeof f) {
          k = f.match(cd);
          if (!k) throw cg("ctrlfmt", f);
          m = k[1];
          n = n || k[3];
          f = a.hasOwnProperty(m) ? a[m] : Ec(g.$scope, m, true) || (b ? Ec(c, m, true) : void 0);
          Pa(f, m, true);
        }
        if (h) return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), Pb(function () {
          var a = d.invoke(f, l, g, m);
          a !== l && (null !== a && "object" === typeof a || "function" === typeof a) && (l = a, n && e(g, n, l, m || f.name));
          return l;
        }, va.call(arguments, 1), false);
        l = d.instantiate(f, g, m);
        n && e(g, n, l, m || f.name);
        return l;
      };
    }];
  }
  function gf() {
    this.$get = ["$window", function (a) {
      return F(a.document);
    }];
  }
  function hf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }
  function cc(a) {
    return null !== a && "object" === typeof a ? "[object Date]" === ma.call(a) ? a.toISOString() : bb(a) : a;
  }
  function nf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";
        var b = [];
        tc(a, function (a, c) {
          null === a || "undefined" === typeof a || (L(a) ? q(a, function (a) {
            b.push(encodeURIComponent(c).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+") + "=" + encodeURIComponent(cc(a)).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+"));
          }) : b.push(encodeURIComponent(c).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+") + "=" + encodeURIComponent(cc(a)).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")));
        });
        return b.join("&");
      };
    };
  }
  function of() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || "undefined" === typeof a || (L(a) ? q(a, function (a, c) {
            b(a, e + "[" + (null !== a && "object" === typeof a ? c : "") + "]");
          }) : null !== a && "object" === typeof a && !("[object Date]" === ma.call(a)) ? tc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+") + "=" + encodeURIComponent(cc(a)).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")));
        }
        if (!a) return "";
        var d = [];
        b(a, "", true);
        return d.join("&");
      };
    };
  }
  function dc(a, b) {
    if ("string" === typeof a) {
      var d = a.replace(dg, "").trim();
      if (d) {
        var c = b("Content-Type");
        (c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(eg)) && fg[c[0]].test(d));
        c && (a = xc(d));
      }
    }
    return a;
  }
  function ed(a) {
    var b = Object.create(null), d;
    "string" === typeof a ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");
      var e = Q(W(a.substr(0, d)));
      a = W(a.substr(d + 1));
      e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : null !== a && "object" === typeof a && q(a, function (a, d) {
      var f = Q(d), g = W(a);
      f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });
    return b;
  }
  function fd(a) {
    var b;
    return function (d) {
      b || (b = ed(a));
      return d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b;
    };
  }
  function gd(a, b, d, c) {
    if ("function" === typeof c) return c(a, b, d);
    q(c, function (c) {
      a = c(a, b, d);
    });
    return a;
  }
  function mf() {
    var a = this.defaults = {transformResponse: [dc], transformRequest: [function (a) {
      return null !== a && "object" === typeof a && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? bb(a) : a;
    }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: ia(ec), put: ia(ec), patch: ia(ec)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer"}, b = false;
    this.useApplyAsync = function (a) {
      return "undefined" !== typeof a ? (b = !!a, this) : b;
    };
    var d = true;
    this.useLegacyPromiseExtensions = function (a) {
      return "undefined" !== typeof a ? (d = !!a, this) : d;
    };
    var c = this.interceptors = [];
    this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
      function m(b) {
        function c(a, b) {
          for (var d = 0, e = b.length; d < e;) {
            var f = b[d++], g = b[d++];
            a = a.then(f, g);
          }
          b.length = 0;
          return a;
        }
        function e(a, b) {
          var c, d = {};
          q(a, function (a, e) {
            "function" === typeof a ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });
          return d;
        }
        function f(a) {
          var b = Pb({}, va.call(arguments, 1), false);
          b.data = gd(a.data, a.headers, a.status, g.transformResponse);
          a = a.status;
          return 200 <= a && 300 > a ? b : k.reject(b);
        }
        if (!(null !== b && "object" === typeof b)) throw N("$http")("badreq", b);
        if (!("string" === typeof b.url)) throw N("$http")("badreq", b.url);
        var g = Pb({method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer}, va.call(arguments, 1), false);
        g.headers = function (b) {
          var c = a.headers, d = Pb({}, va.call(arguments, 1), false), f, g, h, c = Pb({}, va.call(arguments, 1), false);
          a: for (f in c) {
            g = Q(f);
            for (h in d) if (Q(h) === g) continue a;
            d[f] = c[f];
          }
          return e(d, ia(b));
        }(b);
        g.method = ub(g.method);
        g.paramSerializer = "string" === typeof g.paramSerializer ? l.get(g.paramSerializer) : g.paramSerializer;
        var h = [], m = [], p = k.when(g);
        q(R, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);
          (a.response || a.responseError) && m.push(a.response, a.responseError);
        });
        p = c(p, h);
        p = p.then(function (b) {
          var c = b.headers, d = gd(b.data, fd(c), void 0, b.transformRequest);
          "undefined" === typeof d && q(c, function (a, b) {
            "content-type" === Q(b) && delete c[b];
          });
          "undefined" === typeof b.withCredentials && !("undefined" === typeof a.withCredentials) && (b.withCredentials = a.withCredentials);
          return n(b, d).then(f, f);
        });
        p = c(p, m);
        d ? (p.success = function (a) {
          Pa(a, "fn");
          p.then(function (b) {
            a(b.data, b.status, b.headers, g);
          });
          return p;
        }, p.error = function (a) {
          Pa(a, "fn");
          p.then(null, function (b) {
            a(b.data, b.status, b.headers, g);
          });
          return p;
        }) : (p.success = hd("success"), p.error = hd("error"));
        return p;
      }
      function n(c, d) {
        function g(a) {
          if (a) {
            var c = {};
            q(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }
                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });
            return c;
          }
        }
        function l(a, c, d, e) {
          function f() {
            n(c, a, d, e);
          }
          E && (200 <= a && 300 > a ? E.put(P, [a, c, ed(d), e]) : E.remove(P));
          b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }
        function n(a, b, d, e) {
          b = -1 <= b ? b : 0;
          (200 <= b && 300 > b ? M.resolve : M.reject)({data: a, status: b, headers: fd(d), config: c, statusText: e});
        }
        function t(a) {
          n(a.data, a.status, ia(a.headers()), a.statusText);
        }
        function R() {
          var a = m.pendingRequests.indexOf(c);
          -1 !== a && m.pendingRequests.splice(a, 1);
        }
        var M = k.defer(), H = M.promise, E, I, Da = c.headers, P = p(c.url, c.paramSerializer(c.params));
        m.pendingRequests.push(c);
        H.then(R, R);
        !c.cache && !a.cache || false === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = null !== c.cache && "object" === typeof c.cache ? c.cache : null !== a.cache && "object" === typeof a.cache ? a.cache : u);
        E && (I = E.get(P), "undefined" !== typeof I ? I && "function" === typeof I.then ? I.then(t, t) : L(I) ? n(I[1], I[0], ia(I[2]), I[3]) : n(I, 200, {}, "OK") : E.put(P, H));
        "undefined" === typeof I && ((I = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Da[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, P, d, l, Da, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
        return H;
      }
      function p(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
        return a;
      }
      var u = g("$http");
      a.paramSerializer = "string" === typeof a.paramSerializer ? l.get(a.paramSerializer) : a.paramSerializer;
      var R = [];
      q(c, function (a) {
        R.unshift("string" === typeof a ? l.get(a) : l.invoke(a));
      });
      m.pendingRequests = [];
      (function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c) {
            return m(Pb({}, va.call(arguments, 1), false));
          };
        });
      }("get", "delete", "head", "jsonp"));
      (function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c, d) {
            return m(Pb({}, va.call(arguments, 1), false));
          };
        });
      }("post", "put", "patch"));
      m.defaults = a;
      return m;
    }];
  }
  function qf() {
    this.$get = function () {
      return function () {
        return new C.XMLHttpRequest;
      };
    };
  }
  function pf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return gg(a, c, a.defer, b, d[0]);
    }];
  }
  function gg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);
      var f = e.createElement("script"), m = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = true;
      m = function (a) {
        f.removeEventListener("load", m, false);
        f.removeEventListener("error", m, false);
        e.body.removeChild(f);
        f = null;
        var g = -1, u = "unknown";
        a && ("load" !== a.type || c.wasCalled(b) || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
        d && d(g, u);
      };
      f.addEventListener("load", m, false);
      f.addEventListener("error", m, false);
      e.body.appendChild(f);
      return m;
    }
    return function (e, h, k, l, m, n, p, u, R, B) {
      function r() {
        fa && fa();
        t && t.abort();
      }
      function J(b, c, e, f, g) {
        "undefined" !== typeof M && d.cancel(M);
        fa = t = null;
        b(c, e, f, g);
        a.$$completeOutstandingRequest(A);
      }
      a.$$incOutstandingRequestCount();
      h = h || a.url();
      if ("jsonp" === Q(e)) var v = c.createCallback(h), fa = f(h, v, function (a, b) {
        var d = 200 === a && c.getResponse(v);
        J(l, a, d, "", b);
        c.removeCallback(v);
      }); else {
        var t = b(e, h);
        t.open(e, h, true);
        q(m, function (a, b) {
          "undefined" !== typeof a && t.setRequestHeader(b, a);
        });
        t.onload = function () {
          var a = t.statusText || "", b = "response" in t ? t.response : t.responseText, c = 1223 === t.status ? 204 : t.status;
          0 === c && (c = b ? 200 : "file" == Y(h).protocol ? 404 : 0);
          J(l, c, b, t.getAllResponseHeaders(), a);
        };
        e = function () {
          J(l, -1, null, null, "");
        };
        t.onerror = e;
        t.onabort = e;
        q(R, function (a, b) {
          t.addEventListener(b, a);
        });
        q(B, function (a, b) {
          t.upload.addEventListener(b, a);
        });
        p && (t.withCredentials = true);
        if (u) try {
          t.responseType = u;
        } catch (K) {
          if ("json" !== u) throw K;
        }
        t.send("undefined" === typeof k ? null : k);
      }
      if (0 < n) var M = d(r, n); else n && "function" === typeof n.then && n.then(r);
    };
  }
  function kf() {
    var a = "{{", b = "}}";
    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function h(a, b, c, d) {
        var e;
        return e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
      }
      function k(f, k, p, n) {
        function J(a) {
          try {
            var b = a;
            a = p ? e.getTrusted(p, b) : e.valueOf(b);
            var d;
            if (n && !("undefined" !== typeof a)) d = a; else if (null == a) d = ""; else {
              switch (typeof a) {
                case "string":
                  break;
                case "number":
                  a = "" + a;
                  break;
                default:
                  a = bb(a);
              }
              d = a;
            }
            return d;
          } catch (g) {
            c(Ka.interr(f, g));
          }
        }
        if (!f.length || -1 === f.indexOf(a)) {
          var v;
          k || (k = f.replace(n, a).replace(p, b), v = ha(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);
          return v;
        }
        n = !!n;
        var q, t, K = 0, M = [], H = [];
        v = f.length;
        for (var E = [], I = []; K < v;) if (-1 != (q = f.indexOf(a, K)) && -1 != (t = f.indexOf(b, q + l))) K !== q && E.push(f.substring(K, q).replace(n, a).replace(p, b)), K = f.substring(q + l, t), M.push(K), H.push(d(K, J)), K = t + m, I.push(E.length), E.push(""); else {
          K !== v && E.push(f.substring(K).replace(n, a).replace(p, b));
          break;
        }
        p && 1 < E.length && Ka.throwNoconcat(f);
        if (!k || M.length) {
          var Da = function (a) {
            for (var b = 0, c = M.length; b < c; b++) {
              if (n && "undefined" === typeof a[b]) return;
              E[I[b]] = a[b];
            }
            return E.join("");
          };
          return Pb(function (a) {
            var b = 0, d = M.length, e = Array(d);
            try {
              for (; b < d; b++) e[b] = H[b](a);
              return Da(e);
            } catch (g) {
              c(Ka.interr(f, g));
            }
          }, va.call(arguments, 1), false);
        }
      }
      var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, f), "g"), p = new RegExp(b.replace(/./g, f), "g");
      k.startSymbol = function () {
        return a;
      };
      k.endSymbol = function () {
        return b;
      };
      return k;
    }];
  }
  function lf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, u) : f(r);
        }
        var p = 4 < arguments.length, u = p ? va.call(arguments, 4) : [], R = b.setInterval, q = b.clearInterval, r = 0, J = "undefined" !== typeof m && !m, v = (J ? c : d).defer(), fa = v.promise;
        l = "undefined" !== typeof l ? l : 0;
        fa.$$intervalId = R(function () {
          J ? e.defer(n) : a.$evalAsync(n);
          v.notify(r++);
          0 < l && r >= l && (v.resolve(r), q(fa.$$intervalId), delete g[fa.$$intervalId]);
          J || a.$apply();
        }, k);
        g[fa.$$intervalId] = v;
        return fa;
      }
      var g = {};
      f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], true) : false;
      };
      return f;
    }];
  }
  function fc(a) {
    a = a.split("/");
    for (var b = a.length; b--;) a[b] = encodeURIComponent(a[b]).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    return a.join("/");
  }
  function jd(a, b) {
    var d = Y(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = parseInt(d.port, 10) || hg[d.protocol] || null;
  }
  function kd(a, b) {
    var d = "/" !== a.charAt(0);
    d && (a = "/" + a);
    var c = Y(a);
    b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
    b.$$search = Ac(c.search);
    b.$$hash = decodeURIComponent(c.hash);
    b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }
  function ka(a, b) {
    if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length);
  }
  function Ja(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b);
  }
  function gc(a, b, d) {
    this.$$html5 = true;
    d = d || "";
    jd(a, this);
    this.$$parse = function (a) {
      var d = ka(b, a);
      if (!("string" === typeof d)) throw Gb("ipthprfx", a, b);
      kd(d, this);
      this.$$path || (this.$$path = "/");
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Tb(this.$$search), d = this.$$hash ? "#" + encodeURIComponent(this.$$hash).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") : "";
      this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;
      this.$$absUrl = b + this.$$url.substr(1);
    };
    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), true;
      var f, g;
      "undefined" !== typeof (f = ka(a, c)) ? (g = f, g = "undefined" !== typeof (f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : "undefined" !== typeof (f = ka(b, c)) ? g = b + f : b == c + "/" && (g = b);
      g && this.$$parse(g);
      return !!g;
    };
  }
  function hc(a, b, d) {
    jd(a, this);
    this.$$parse = function (c) {
      var e = ka(a, c) || ka(b, c), f;
      "undefined" === typeof e || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", "undefined" === typeof e && (a = c, this.replace())) : (f = ka(d, e), "undefined" === typeof f && (f = e));
      kd(f, this);
      c = this.$$path;
      var e = a, g = /^\/[A-Z]:(\/.*)/;
      0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose();
    };
    this.$$compose = function () {
      var b = Tb(this.$$search), e = this.$$hash ? "#" + encodeURIComponent(this.$$hash).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") : "";
      this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };
    this.$$parseLinkUrl = function (b, d) {
      return Ja(a) == Ja(b) ? (this.$$parse(b), true) : false;
    };
  }
  function ld(a, b, d) {
    this.$$html5 = true;
    hc.apply(this, arguments);
    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), true;
      var f, g;
      a == Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
      f && this.$$parse(f);
      return !!f;
    };
    this.$$compose = function () {
      var b = Tb(this.$$search), e = this.$$hash ? "#" + encodeURIComponent(this.$$hash).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") : "";
      this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + d + this.$$url;
    };
  }
  function Hb(a) {
    return function () {
      return this[a];
    };
  }
  function md(a, b) {
    return function (d) {
      if ("undefined" === typeof d) return this[a];
      this[a] = b(d);
      this.$$compose();
      return this;
    };
  }
  function sf() {
    var a = "", b = {enabled: false, requireBase: true, rewriteLinks: true};
    this.hashPrefix = function (b) {
      return "undefined" !== typeof b ? (a = b, this) : a;
    };
    this.html5Mode = function (a) {
      return "boolean" === typeof a ? (b.enabled = a, this) : null !== a && "object" === typeof a ? ("boolean" === typeof a.enabled && (b.enabled = a.enabled), "boolean" === typeof a.requireBase && (b.requireBase = a.requireBase), "boolean" === typeof a.rewriteLinks && (b.rewriteLinks = a.rewriteLinks), this) : b;
    };
    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function h(a, b, d) {
        var e = l.url(), f = l.$$state;
        try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }
      function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }
      var l, m;
      m = c.baseHref();
      var n = c.url(), p;
      if (b.enabled) {
        if (!m && b.requireBase) throw Gb("nobase");
        p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
        m = e.history ? gc : ld;
      } else p = Ja(n), m = hc;
      var u = p.substr(0, Ja(p).lastIndexOf("/") + 1);
      l = new m(p, u, "#" + a);
      l.$$parseLinkUrl(n, n);
      l.$$state = c.state();
      var R = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = F(a.target); "a" !== Q(e[0].nodeName || e[0][0] && e[0][0].nodeName);) if (e[0] === f[0] || !(e = e.parent())[0]) return;
          var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
          null !== h && "object" === typeof h && "[object SVGAnimatedString]" === h.toString() && (h = Y(h.animVal).href);
          R.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = true));
        }
      });
      l.absUrl().replace(/(#.+)|#$/, "$1") != n.replace(/(#.+)|#$/, "$1") && c.url(l.absUrl(), true);
      var q = true;
      c.onUrlChange(function (a, b) {
        "undefined" === typeof ka(u, a) ? g.location.href = a : (d.$evalAsync(function () {
          var c = l.absUrl(), e = l.$$state, f;
          a = a.replace(/(#.+)|#$/, "$1");
          l.$$parse(a);
          l.$$state = b;
          f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
          l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, false, e)) : (q = false, k(c, e)));
        }), d.$$phase || d.$digest());
      });
      d.$watch(function () {
        var a = c.url().replace(/(#.+)|#$/, "$1"), b = l.absUrl().replace(/(#.+)|#$/, "$1"), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
        if (q || m) q = false, d.$evalAsync(function () {
          var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
          l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
        });
        l.$$replace = false;
      });
      return l;
    }];
  }
  function tf() {
    var a = true, b = this;
    this.debugEnabled = function (b) {
      return "undefined" !== typeof b ? (a = b, this) : a;
    };
    this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a;
      }
      function e(a) {
        var b = d.console || {}, e = b[a] || b.log || A;
        a = false;
        try {
          a = !!e.apply;
        } catch (k) {}
        return a ? function () {
          var a = [];
          q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }
      return {log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
        var c = e("debug");
        return function () {
          a && c.apply(b, arguments);
        };
      }()};
    }];
  }
  function Sa(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw X("isecfld", b);
    return a;
  }
  function ra(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);
      if (a.window === a) throw X("isecwindow", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw X("isecdom", b);
      if (a === Object) throw X("isecobj", b);
    }
    return a;
  }
  function nd(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);
      if (a === jg || a === kg || a === lg) throw X("isecff", b);
    }
  }
  function Ib(a, b) {
    if (a && (a === 0..constructor || a === false.constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw X("isecaf", b);
  }
  function mg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }
  function od(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }
  function V(a, b) {
    var d, c;
    switch (a.type) {
      case s.Program:
        d = true;
        q(a.body, function (a) {
          V(a.expression, b);
          d = d && a.expression.constant;
        });
        a.constant = d;
        break;
      case s.Literal:
        a.constant = true;
        a.toWatch = [];
        break;
      case s.UnaryExpression:
        V(a.argument, b);
        a.constant = a.argument.constant;
        a.toWatch = a.argument.toWatch;
        break;
      case s.BinaryExpression:
        V(a.left, b);
        V(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;
      case s.LogicalExpression:
        V(a.left, b);
        V(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.ConditionalExpression:
        V(a.test, b);
        V(a.alternate, b);
        V(a.consequent, b);
        a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.Identifier:
        a.constant = false;
        a.toWatch = [a];
        break;
      case s.MemberExpression:
        V(a.object, b);
        a.computed && V(a.property, b);
        a.constant = a.object.constant && (!a.computed || a.property.constant);
        a.toWatch = [a];
        break;
      case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : false;
        c = [];
        q(a.arguments, function (a) {
          V(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch);
        });
        a.constant = d;
        a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
        break;
      case s.AssignmentExpression:
        V(a.left, b);
        V(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = [a];
        break;
      case s.ArrayExpression:
        d = true;
        c = [];
        q(a.elements, function (a) {
          V(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch);
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ObjectExpression:
        d = true;
        c = [];
        q(a.properties, function (a) {
          V(a.value, b);
          d = d && a.value.constant && !a.computed;
          a.value.constant || c.push.apply(c, a.value.toWatch);
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ThisExpression:
        a.constant = false;
        a.toWatch = [];
        break;
      case s.LocalsExpression:
        a.constant = false, a.toWatch = [];
    }
  }
  function pd(a) {
    if (1 == a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }
  function rd(a) {
    if (1 === a.body.length && (a.body[0].expression.type === s.Identifier || a.body[0].expression.type === s.MemberExpression)) return {type: s.AssignmentExpression, left: a.body[0].expression, right: {type: s.NGValueParameter}, operator: "="};
  }
  function td(a, b) {
    this.astBuilder = a;
    this.$filter = b;
  }
  function ud(a, b) {
    this.astBuilder = a;
    this.$filter = b;
  }
  function ic(a) {
    return "function" === typeof a.valueOf ? a.valueOf() : ng.call(a);
  }
  function uf() {
    var a = Object.create(null), b = Object.create(null), d = {true: true, false: false, null: null, undefined: void 0}, c, e;
    this.addLiteral = function (a, b) {
      d[a] = b;
    };
    this.setIdentifierFns = function (a, b) {
      c = a;
      e = b;
      return this;
    };
    this.$get = ["$filter", function (f) {
      function g(c, d, e) {
        var g, k, H;
        e = e || J;
        switch (typeof c) {
          case "string":
            H = c = c.trim();
            var E = e ? b : a;
            g = E[H];
            if (!g) {
              ":" === c.charAt(0) && ":" === c.charAt(1) && (k = true, c = c.substring(2));
              g = e ? r : B;
              var q = new jc(g);
              g = new kc(q, f, g).parse(c);
              g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);
              e && (g = h(g));
              E[H] = g;
            }
            return u(g, d);
          case "function":
            return u(c, d);
          default:
            return u(A, d);
        }
      }
      function h(a) {
        function b(c, d, e, f) {
          var g = J;
          J = true;
          try {
            return a(c, d, e, f);
          } finally {
            J = g;
          }
        }
        if (!a) return a;
        b.$$watchDelegate = a.$$watchDelegate;
        b.assign = h(a.assign);
        b.constant = a.constant;
        b.literal = a.literal;
        for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = h(a.inputs[c]);
        b.inputs = a.inputs;
        return b;
      }
      function k(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = ic(a), "object" === typeof a) ? false : a === b || a !== a && b !== b;
      }
      function l(a, b, c, d, e) {
        var f = d.inputs, g;
        if (1 === f.length) {
          var h = k, f = f[0];
          return a.$watch(function (a) {
            var b = f(a);
            k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b));
            return g;
          }, b, c, e);
        }
        for (var l = [], m = [], p = 0, n = f.length; p < n; p++) l[p] = k, m[p] = null;
        return a.$watch(function (a) {
          for (var b = false, c = 0, e = f.length; c < e; c++) {
            var h = f[c](a);
            if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h);
          }
          b && (g = d(a, void 0, void 0, m));
          return g;
        }, b, c, e);
      }
      function m(a, b, c, d) {
        var e, f;
        return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;
          "function" === typeof b && b.apply(this, arguments);
          "undefined" !== typeof a && d.$$postDigest(function () {
            "undefined" !== typeof f && e();
          });
        }, c);
      }
      function n(a, b, c, d) {
        function e(a) {
          var b = true;
          q(a, function (a) {
            "undefined" !== typeof a || (b = false);
          });
          return b;
        }
        var f, g;
        return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;
          "function" === typeof b && b.call(this, a, c, d);
          e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }
      function p(a, b, c, d) {
        var e;
        return e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
      }
      function u(a, b) {
        if (!b) return a;
        var c = a.$$watchDelegate, d = false, c = c !== n && c !== m ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);
          return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);
          c = b(e, c, d);
          return "undefined" !== typeof e ? c : e;
        };
        a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
        return c;
      }
      var R = Ba().noUnsafeEval, B = {csp: R, expensiveChecks: false, literals: pa(d), isIdentifierStart: "function" === typeof c && c, isIdentifierContinue: "function" === typeof e && e}, r = {csp: R, expensiveChecks: true, literals: pa(d), isIdentifierStart: "function" === typeof c && c, isIdentifierContinue: "function" === typeof e && e}, J = false;
      g.$$runningExpensiveChecks = function () {
        return J;
      };
      return g;
    }];
  }
  function wf() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.$evalAsync(b);
      }, b);
    }];
  }
  function xf() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.defer(b);
      }, b);
    }];
  }
  function vd(a, b) {
    function d() {
      this.$$state = {status: 0};
    }
    function c(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }
    function e(c) {
      !c.processScheduled && c.pending && (c.processScheduled = true, a(function () {
        var a, d, e;
        e = c.pending;
        c.processScheduled = false;
        c.pending = void 0;
        for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];
          a = e[f][c.status];
          try {
            "function" === typeof a ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), b(h);
          }
        }
      }));
    }
    function f() {
      this.promise = new d;
    }
    var g = N("$q", TypeError), h = function () {
      var a = new f;
      a.resolve = c(a, a.resolve);
      a.reject = c(a, a.reject);
      a.notify = c(a, a.notify);
      return a;
    };
    Pb(d.prototype, va.call(arguments, 1), false);
    Pb(f.prototype, va.call(arguments, 1), false);
    var k = function (a, b) {
      var c = new f;
      b ? c.resolve(a) : c.reject(a);
      return c.promise;
    }, l = function (a, b, c) {
      var d = null;
      try {
        "function" === typeof c && (d = c());
      } catch (e) {
        return k(e, false);
      }
      return d && "function" === typeof d.then ? d.then(function () {
        return k(a, b);
      }, function (a) {
        return k(a, false);
      }) : k(a, b);
    }, m = function (a, b, c, d) {
      var e = new f;
      e.resolve(a);
      return e.promise.then(b, c, d);
    }, n = function (a) {
      if (!("function" === typeof a)) throw g("norslvr", a);
      var b = new f;
      a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });
      return b.promise;
    };
    n.prototype = d.prototype;
    n.defer = h;
    n.reject = function (a) {
      var b = new f;
      b.reject(a);
      return b.promise;
    };
    n.when = m;
    n.resolve = m;
    n.all = function (a) {
      var b = new f, c = 0, d = L(a) ? [] : {};
      q(a, function (a, e) {
        c++;
        m(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });
      0 === c && b.resolve(d);
      return b.promise;
    };
    n.race = function (a) {
      var b = h();
      q(a, function (a) {
        m(a).then(b.resolve, b.reject);
      });
      return b.promise;
    };
    return n;
  }
  function Gf() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
        var b = d(a);
        return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, false);
        return function () {
          b.cancel(c);
        };
      };
      f.supported = e;
      return f;
    }];
  }
  function vf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++pb;
        this.$$ChildScope = null;
      }
      b.prototype = a;
      return b;
    }
    var b = 10, d = N("$rootScope"), c = null, e = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = true;
      }
      function l(a) {
        9 === Ea && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }
      function m() {
        this.$id = ++pb;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$destroyed = false;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$$isolateBindings = null;
      }
      function n(a) {
        if (J.$$phase) throw d("inprog", J.$$phase);
        J.$$phase = a;
      }
      function p(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent);
      }
      function u(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
      }
      function s() {}
      function B() {
        for (; t.length;) try {
          t.shift()();
        } catch (a) {
          f(a);
        }
        e = null;
      }
      function r() {
        null === e && (e = h.defer(function () {
          J.$apply(B);
        }));
      }
      m.prototype = {constructor: m, $new: function (b, c) {
        var d;
        c = c || this;
        b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
        d.$parent = c;
        d.$$prevSibling = c.$$childTail;
        c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
        (b || c != this) && d.$on("$destroy", k);
        return d;
      }, $watch: function (a, b, d, e) {
        var f = g(a);
        if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
        var h = this, k = h.$$watchers, l = {fn: b, last: s, get: f, exp: e || a, eq: !!d};
        c = null;
        "function" === typeof b || (l.fn = A);
        k || (k = h.$$watchers = []);
        k.unshift(l);
        p(this, 1);
        return function () {
          0 <= Za(k, l) && p(h, -1);
          c = null;
        };
      }, $watchGroup: function (a, b) {
        function c() {
          h = false;
          k ? (k = false, b(e, e, g)) : b(e, d, g);
        }
        var d = Array(a.length), e = Array(a.length), f = [], g = this, h = false, k = true;
        if (!a.length) {
          var l = true;
          g.$evalAsync(function () {
            l && b(e, e, g);
          });
          return function () {
            l = false;
          };
        }
        if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
          e[0] = a;
          d[0] = c;
          b(e, a === c ? e : d, f);
        });
        q(a, function (a, b) {
          var k = g.$watch(a, function (a, f) {
            e[b] = a;
            d[b] = f;
            h || (h = true, g.$evalAsync(c));
          });
          f.push(k);
        });
        return function () {
          for (; f.length;) f.shift()();
        };
      }, $watchCollection: function (a, b) {
        function c(a) {
          e = a;
          var b, d, g, h;
          if (!("undefined" === typeof e)) {
            if (null !== e && "object" === typeof e) if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
              f !== p && (f = p = {}, u = 0, l++);
              a = 0;
              for (b in e) ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
              if (u > a) for (b in l++, f) ua.call(e, b) || (u--, delete f[b]);
            } else f !== e && (f = e, l++);
            return l;
          }
        }
        c.$stateful = true;
        var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), n = [], p = {}, r = true, u = 0;
        return this.$watch(m, function () {
          r ? (r = false, b(e, e, d)) : b(e, h, d);
          if (k) if (null !== e && "object" === typeof e) if (ta(e)) {
            h = Array(e.length);
            for (var a = 0; a < e.length; a++) h[a] = e[a];
          } else for (a in h = {}, e) ua.call(e, a) && (h[a] = e[a]); else h = e;
        });
      }, $digest: function () {
        var a, g, k, l, m, p, u, r, q = b, t, y = [], A, C;
        n("$digest");
        h.$$checkUrlChange();
        this === J && null !== e && (h.defer.cancel(e), B());
        c = null;
        do {
          r = false;
          t = this;
          for (p = 0; p < v.length; p++) {
            try {
              C = v[p], C.scope.$eval(C.expression, C.locals);
            } catch (F) {
              f(F);
            }
            c = null;
          }
          v.length = 0;
          a: do {
            if (p = t.$$watchers) for (u = p.length; u--;) try {
              if (a = p[u]) if (m = a.get, (g = m(t)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) r = true, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, t), 5 > q && (A = 4 - q, y[A] || (y[A] = []), y[A].push({msg: "function" === typeof a.exp ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k})); else if (a === c) {
                r = false;
                break a;
              }
            } catch (G) {
              f(G);
            }
            if (!(p = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(p = t.$$nextSibling);) t = t.$parent;
          } while (t = p);
          if ((r || v.length) && !q--) throw J.$$phase = null, d("infdig", b, y);
        } while (r || v.length);
        for (J.$$phase = null; K < w.length;) try {
          w[K++]();
        } catch (D) {
          f(D);
        }
        w.length = K = 0;
      }, $destroy: function () {
        if (!this.$$destroyed) {
          var a = this.$parent;
          this.$broadcast("$destroy");
          this.$$destroyed = true;
          this === J && h.$$applicationDestroyed();
          p(this, -this.$$watchersCount);
          for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);
          a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
          a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
          this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
          this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
          this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A;
          this.$on = this.$watch = this.$watchGroup = function () {
            return A;
          };
          this.$$listeners = {};
          this.$$nextSibling = null;
          l(this);
        }
      }, $eval: function (a, b) {
        return g(a)(this, b);
      }, $evalAsync: function (a, b) {
        J.$$phase || v.length || h.defer(function () {
          v.length && J.$digest();
        });
        v.push({scope: this, expression: g(a), locals: b});
      }, $$postDigest: function (a) {
        w.push(a);
      }, $apply: function (a) {
        try {
          n("$apply");
          try {
            return this.$eval(a);
          } finally {
            J.$$phase = null;
          }
        } catch (b) {
          f(b);
        } finally {
          try {
            J.$digest();
          } catch (c) {
            throw f(c), c;
          }
        }
      }, $applyAsync: function (a) {
        function b() {
          c.$eval(a);
        }
        var c = this;
        a && t.push(b);
        a = g(a);
        r();
      }, $on: function (a, b) {
        var c = this.$$listeners[a];
        c || (this.$$listeners[a] = c = []);
        c.push(b);
        var d = this;
        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
        var e = this;
        return function () {
          var d = c.indexOf(b);
          -1 !== d && (c[d] = null, u(e, 1, a));
        };
      }, $emit: function (a, b) {
        var c = [], d, e = this, g = false, h = {name: a, targetScope: e, stopPropagation: function () {
          g = true;
        }, preventDefault: function () {
          h.defaultPrevented = true;
        }, defaultPrevented: false}, k = [h].concat(va.call(arguments, 1)), l, m;
        do {
          d = e.$$listeners[a] || c;
          h.currentScope = e;
          l = 0;
          for (m = d.length; l < m; l++) if (d[l]) try {
            d[l].apply(null, k);
          } catch (n) {
            f(n);
          } else d.splice(l, 1), l--, m--;
          if (g) return h.currentScope = null, h;
          e = e.$parent;
        } while (e);
        h.currentScope = null;
        return h;
      }, $broadcast: function (a, b) {
        var c = this, d = this, e = {name: a, targetScope: this, preventDefault: function () {
          e.defaultPrevented = true;
        }, defaultPrevented: false};
        if (!this.$$listenerCount[a]) return e;
        for (var g = [e].concat(va.call(arguments, 1)), h, k; c = d;) {
          e.currentScope = c;
          d = c.$$listeners[a] || [];
          h = 0;
          for (k = d.length; h < k; h++) if (d[h]) try {
            d[h].apply(null, g);
          } catch (l) {
            f(l);
          } else d.splice(h, 1), h--, k--;
          if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
        }
        e.currentScope = null;
        return e;
      }};
      var J = new m, v = J.$$asyncQueue = [], w = J.$$postDigestQueue = [], t = J.$$applyAsyncQueue = [], K = 0;
      return J;
    }];
  }
  function ne() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (b) {
      return "undefined" !== typeof b ? (a = b, this) : a;
    };
    this.imgSrcSanitizationWhitelist = function (a) {
      return "undefined" !== typeof a ? (b = a, this) : b;
    };
    this.$get = function () {
      return function (d, c) {
        var e = c ? b : a, f;
        f = Y(d).href;
        return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }
  function og(a) {
    if ("self" === a) return a;
    if ("string" === typeof a) {
      if (-1 < a.indexOf("***")) throw sa("iwcard", a);
      a = a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return new RegExp("^" + a + "$");
    }
    if ("[object RegExp]" === ma.call(a)) return new RegExp("^" + a.source + "$");
    throw sa("imatcher");
  }
  function xd(a) {
    var b = [];
    "undefined" !== typeof a && q(a, function (a) {
      b.push(og(a));
    });
    return b;
  }
  function zf() {
    this.SCE_CONTEXTS = la;
    var a = ["self"], b = [];
    this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = xd(b));
      return a;
    };
    this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = xd(a));
      return b;
    };
    this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? id(b) : !!a.exec(b.href);
      }
      function e(a) {
        var b = function (a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };
        a && (b.prototype = new a);
        b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };
        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };
        return b;
      }
      var f = function (a) {
        throw sa("unsafe");
      };
      d.has("$sanitize") && (f = d.get("$sanitize"));
      var g = e(), h = {};
      h[la.HTML] = e(g);
      h[la.CSS] = e(g);
      h[la.URL] = e(g);
      h[la.JS] = e(g);
      h[la.RESOURCE_URL] = e(h[la.URL]);
      return {trustAs: function (a, b) {
        var c = h.hasOwnProperty(a) ? h[a] : null;
        if (!c) throw sa("icontext", a, b);
        if (null === b || "undefined" === typeof b || "" === b) return b;
        if ("string" !== typeof b) throw sa("itype", a);
        return new c(b);
      }, getTrusted: function (d, e) {
        if (null === e || "undefined" === typeof e || "" === e) return e;
        var g = h.hasOwnProperty(d) ? h[d] : null;
        if (g && e instanceof g) return e.$$unwrapTrustedValue();
        if (d === la.RESOURCE_URL) {
          var g = Y(e.toString()), n, p, u = false;
          n = 0;
          for (p = a.length; n < p; n++) if (c(a[n], g)) {
            u = true;
            break;
          }
          if (u) for (n = 0, p = b.length; n < p; n++) if (c(b[n], g)) {
            u = false;
            break;
          }
          if (u) return e;
          throw sa("insecurl", e.toString());
        }
        if (d === la.HTML) return f(e);
        throw sa("unsafe");
      }, valueOf: function (a) {
        return a instanceof g ? a.$$unwrapTrustedValue() : a;
      }};
    }];
  }
  function yf() {
    var a = true;
    this.enabled = function (b) {
      arguments.length && (a = !!b);
      return a;
    };
    this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Ea) throw sa("iequirks");
      var c = ia(la);
      c.isEnabled = function () {
        return a;
      };
      c.trustAs = d.trustAs;
      c.getTrusted = d.getTrusted;
      c.valueOf = d.valueOf;
      a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Xa);
      c.parseAs = function (a, d) {
        var e = b(d);
        return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };
      var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
      q(la, function (a, b) {
        var d = Q(b);
        c[db("parse_as_" + d)] = function (b) {
          return e(a, b);
        };
        c[db("get_trusted_" + d)] = function (b) {
          return f(a, b);
        };
        c[db("trust_as_" + d)] = function (b) {
          return g(a, b);
        };
      });
      return c;
    }];
  }
  function Af() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {}, c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState, e = parseInt((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1], 10), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h, k = /^(Moz|webkit|ms)(?=[A-Z])/, l = g.body && g.body.style, m = false, n = false;
      if (l) {
        for (var p in l) if (m = k.exec(p)) {
          h = m[0];
          h = h[0].toUpperCase() + h.substr(1);
          break;
        }
        h || (h = "WebkitOpacity" in l && "webkit");
        m = !!("transition" in l || h + "Transition" in l);
        n = !!("animation" in l || h + "Animation" in l);
        !e || m && n || (m = "string" === typeof l.webkitTransition, n = "string" === typeof l.webkitAnimation);
      }
      return {history: !(!c || 4 > e || f), hasEvent: function (a) {
        if ("input" === a && 11 >= Ea) return false;
        if ("undefined" === typeof d[a]) {
          var b = g.createElement("div");
          d[a] = "on" + a in b;
        }
        return d[a];
      }, csp: Ba(), vendorPrefix: h, transitions: m, animations: n, android: e};
    }];
  }
  function Cf() {
    var a;
    this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
      function f(g, h) {
        f.totalPendingRequests++;
        if (!("string" === typeof g) || "undefined" === typeof b.get(g)) g = e.getTrustedResourceUrl(g);
        var k = d.defaults && d.defaults.transformResponse;
        L(k) ? k = k.filter(function (a) {
          return a !== dc;
        }) : k === dc && (k = null);
        return d.get(g, Pb({cache: b, transformResponse: k}, va.call(arguments, 1), false)).finally(function () {
          f.totalPendingRequests--;
        }).then(function (a) {
          b.put(g, a.data);
          return a.data;
        }, function (a) {
          if (!h) throw pg("tpload", g, a.status, a.statusText);
          return c.reject(a);
        });
      }
      f.totalPendingRequests = 0;
      return f;
    }];
  }
  function Df() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return {findBindings: function (a, b, d) {
        a = a.getElementsByClassName("ng-binding");
        var g = [];
        q(a, function (a) {
          var c = ca.element(a).data("$binding");
          c && q(c, function (c) {
            d ? new RegExp("(^|\\s)" + b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
          });
        });
        return g;
      }, findModels: function (a, b, d) {
        for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
          var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
          if (k.length) return k;
        }
      }, getLocation: function () {
        return d.url();
      }, setLocation: function (b) {
        b !== d.url() && (d.url(b), a.$digest());
      }, whenStable: function (a) {
        b.notifyWhenNoOutstandingRequests(a);
      }};
    }];
  }
  function Ef() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        "function" === typeof f || (l = k, k = f, f = A);
        var m = va.call(arguments, 3), n = "undefined" !== typeof l && !l, p = (n ? c : d).defer(), u = p.promise, q;
        q = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[u.$$timeoutId];
          }
          n || a.$apply();
        }, k);
        u.$$timeoutId = q;
        g[q] = p;
        return u;
      }
      var g = {};
      f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : false;
      };
      return f;
    }];
  }
  function Y(a) {
    Ea && ($.setAttribute("href", a), a = $.href);
    $.setAttribute("href", a);
    return {href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, "") : "", host: $.host, search: $.search ? $.search.replace(/^\?/, "") : "", hash: $.hash ? $.hash.replace(/^#/, "") : "", hostname: $.hostname, port: $.port, pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname};
  }
  function id(a) {
    a = "string" === typeof a ? Y(a) : a;
    return a.protocol === yd.protocol && a.host === yd.host;
  }
  function Ff() {
    this.$get = ha(C);
  }
  function zd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var d = a[0] || {}, c = {}, e = "";
    return function () {
      var a, g, h, k, l;
      a = d.cookie || "";
      if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), "undefined" === typeof c[l] && (c[l] = b(g.substring(k + 1))));
      return c;
    };
  }
  function Jf() {
    this.$get = zd;
  }
  function Mc(a) {
    function b(d, c) {
      if (null !== d && "object" === typeof d) {
        var e = {};
        q(d, function (a, c) {
          e[c] = b(c, a);
        });
        return e;
      }
      return a.factory(d + "Filter", c);
    }
    this.register = b;
    this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];
    b("currency", Ad);
    b("date", Bd);
    b("filter", qg);
    b("json", rg);
    b("limitTo", sg);
    b("lowercase", tg);
    b("number", Cd);
    b("orderBy", Dd);
    b("uppercase", ug);
  }
  function qg() {
    return function (a, b, d, c) {
      if (!ta(a)) {
        if (null == a) return a;
        throw N("filter")("notarray", a);
      }
      c = c || "$";
      var e;
      switch (lc(b)) {
        case "function":
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          e = true;
        case "object":
          b = vg(b, d, c, e);
          break;
        default:
          return a;
      }
      return Array.prototype.filter.call(a, b);
    };
  }
  function vg(a, b, d, c) {
    var e = null !== a && "object" === typeof a && d in a;
    true === b ? b = na : "function" === typeof b || (b = function (a, b) {
      if ("undefined" === typeof a) return false;
      if (null === a || null === b) return a === b;
      if (null !== b && "object" === typeof b || null !== a && "object" === typeof a && !("function" === typeof a.toString && a.toString !== ma)) return false;
      a = Q("" + a);
      b = Q("" + b);
      return -1 !== a.indexOf(b);
    });
    return function (f) {
      return e && !(null !== f && "object" === typeof f) ? La(f, a[d], b, d, false) : La(f, a, b, d, c);
    };
  }
  function La(a, b, d, c, e, f) {
    var g = lc(a), h = lc(b);
    if ("string" === h && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c, e);
    if (L(a)) return a.some(function (a) {
      return La(a, b, d, c, e);
    });
    switch (g) {
      case "object":
        var k;
        if (e) {
          for (k in a) if ("$" !== k.charAt(0) && La(a[k], b, d, c, true)) return true;
          return f ? false : La(a, b, d, c, false);
        }
        if ("object" === h) {
          for (k in b) if (f = b[k], !("function" === typeof f) && !("undefined" === typeof f) && (g = k === c, !La(g ? a : a[k], f, d, c, g, g))) return false;
          return true;
        }
        return d(a, b);
      case "function":
        return false;
      default:
        return d(a, b);
    }
  }
  function lc(a) {
    return null === a ? "null" : typeof a;
  }
  function Ad(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, e) {
      "undefined" === typeof c && (c = b.CURRENCY_SYM);
      "undefined" === typeof e && (e = b.PATTERNS[1].maxFrac);
      return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }
  function Cd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }
  function wg(a) {
    var b = 0, d, c, e, f, g;
    -1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));
    0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
    for (e = 0; a.charAt(e) == mc; e++) ;
    if (e == (g = a.length)) d = [0], c = 1; else {
      for (g--; a.charAt(g) == mc;) g--;
      c -= e;
      d = [];
      for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e);
    }
    c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);
    return {d: d, e: b, i: c};
  }
  function xg(a, b, d, c) {
    var e = a.d, f = e.length - a.i;
    b = "undefined" === typeof b ? Math.min(Math.max(d, f), c) : +b;
    d = b + a.i;
    c = e[d];
    if (0 < d) {
      e.splice(Math.max(a.i, d));
      for (var g = d; g < e.length; g++) e[g] = 0;
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;
    if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) e.unshift(0), a.i++;
      e.unshift(1);
      a.i++;
    } else e[d - 1]++;
    for (; f < Math.max(0, b); f++) e.push(0);
    if (b = e.reduceRight(function (a, b, c, d) {
      b += a;
      d[c] = b % 10;
      return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }
  function Ed(a, b, d, c, e) {
    if (!("string" === typeof a) && !("number" === typeof a) || isNaN(a)) return "";
    var f = !isFinite(a), g = false, h = Math.abs(a) + "", k = "";
    if (f) k = "∞"; else {
      g = wg(h);
      xg(g, e, b.minFrac, b.maxFrac);
      k = g.d;
      h = g.i;
      e = g.e;
      f = [];
      for (g = k.reduce(function (a, b) {
        return a && !b;
      }, true); 0 > h;) k.unshift(0), h++;
      0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);
      h = [];
      for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));
      k.length && h.unshift(k.join(""));
      k = h.join(d);
      f.length && (k += c + f.join(""));
      e && (k += "e+" + e);
    }
    return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }
  function Kb(a, b, d, c) {
    var e = "";
    if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");
    for (a = "" + a; a.length < b;) a = mc + a;
    d && (a = a.substr(a.length - b));
    return e + a;
  }
  function ba(a, b, d, c, e) {
    d = d || 0;
    return function (f) {
      f = f["get" + a]();
      if (0 < d || f > -d) f += d;
      0 === f && -12 == d && (f = 12);
      return Kb(f, b, c, e);
    };
  }
  function kb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](), g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
      return e[g][f];
    };
  }
  function Hd(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }
  function Id(a) {
    return function (b) {
      var d = Hd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
      b = 1 + Math.round(b / 6048e5);
      return Kb(b, a);
    };
  }
  function nc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }
  function Bd(a) {
    function b(a) {
      var b;
      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = parseInt(b[9] + b[10], 10), g = parseInt(b[9] + b[11], 10));
        h.call(a, parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10));
        f = parseInt(b[4] || 0, 10) - f;
        g = parseInt(b[5] || 0, 10) - g;
        h = parseInt(b[6] || 0, 10);
        b = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
        k.call(a, f, g, h, b);
      }
      return a;
    }
    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, f) {
      var g = "", h = [], k, l;
      d = d || "mediumDate";
      d = a.DATETIME_FORMATS[d] || d;
      "string" === typeof c && (c = yg.test(c) ? parseInt(c, 10) : b(c));
      "number" === typeof c && (c = new Date(c));
      if (!("[object Date]" === ma.call(c)) || !isFinite(c.getTime())) return c;
      for (; d;) (l = zg.exec(d)) ? (h = h.concat(va.call(l, 1)), d = h.pop()) : (h.push(d), d = null);
      var m = c.getTimezoneOffset();
      f && (m = yc(f, m), c = Sb(c, f, true));
      q(h, function (b) {
        k = Ag[b];
        g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });
      return g;
    };
  }
  function rg() {
    return function (a, b) {
      "undefined" === typeof b && (b = 2);
      return bb(a, b);
    };
  }
  function sg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : parseInt(b, 10);
      if (isNaN(b)) return a;
      "number" === typeof a && (a = a.toString());
      if (!ta(a)) return a;
      d = !d || isNaN(d) ? 0 : parseInt(d, 10);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? oc(a, d, d + b) : 0 === d ? oc(a, b, a.length) : oc(a, Math.max(0, d + b), d);
    };
  }
  function oc(a, b, d) {
    return "string" === typeof a ? a.slice(b, d) : va.call(a, b, d);
  }
  function Dd(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1;
        if ("function" === typeof b) d = b; else if ("string" === typeof b) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ("" !== b && (d = a(b), d.constant)) var e = a[e];
        }
        return {get: d, descending: c};
      });
    }
    function d(a) {
      switch (typeof a) {
        case "number":
        case "boolean":
        case "string":
          return true;
        default:
          return false;
      }
    }
    function c(a, b) {
      var c = 0, d = a.type, k = b.type;
      if (d === k) {
        var k = a.value, l = b.value;
        "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (null !== k && "object" === typeof k && (k = a.index), null !== l && "object" === typeof l && (l = b.index));
        k !== l && (c = k < l ? -1 : 1);
      } else c = d < k ? -1 : 1;
      return c;
    }
    return function (a, f, g, h) {
      if (null == a) return a;
      if (!ta(a)) throw N("orderBy")("notarray", a);
      L(f) || (f = [f]);
      0 === f.length && (f = ["+"]);
      var k = b(f), l = g ? -1 : 1, m = "function" === typeof h ? h : c;
      a = Array.prototype.map.call(a, function (a, b) {
        return {value: a, tieBreaker: {value: b, type: "number", index: b}, predicateValues: k.map(function (c) {
          var e = c.get(a);
          c = typeof e;
          if (null === e) c = "string", e = "null"; else if ("object" === c) a: {
            if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;
            "function" === typeof e.toString && e.toString !== ma && (e = e.toString(), d(e));
          }
          return {value: e, type: c, index: b};
        })};
      });
      a.sort(function (a, b) {
        for (var c = 0, d = k.length; c < d; c++) {
          var e = m(a.predicateValues[c], b.predicateValues[c]);
          if (e) return e * k[c].descending * l;
        }
        return m(a.tieBreaker, b.tieBreaker) * l;
      });
      return a = a.map(function (a) {
        return a.value;
      });
    };
  }
  function Ta(a) {
    "function" === typeof a && (a = {link: a});
    a.restrict = a.restrict || "AC";
    return ha(a);
  }
  function Jd(a, b, d, c, e) {
    var f = this, g = [];
    f.$error = {};
    f.$$success = {};
    f.$pending = void 0;
    f.$name = e(b.name || b.ngForm || "")(d);
    f.$dirty = false;
    f.$pristine = true;
    f.$valid = true;
    f.$invalid = false;
    f.$submitted = false;
    f.$$parentForm = Lb;
    f.$rollbackViewValue = function () {
      q(g, function (a) {
        a.$rollbackViewValue();
      });
    };
    f.$commitViewValue = function () {
      q(g, function (a) {
        a.$commitViewValue();
      });
    };
    f.$addControl = function (a) {
      Qa(a.$name, "input");
      g.push(a);
      a.$name && (f[a.$name] = a);
      a.$$parentForm = f;
    };
    f.$$renameControl = function (a, b) {
      var c = a.$name;
      f[c] === a && delete f[c];
      f[b] = a;
      a.$name = b;
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      q(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });
      q(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });
      q(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });
      Za(g, a);
      a.$$parentForm = Lb;
    };
    Kd({ctrl: this, $element: a, set: function (a, b, c) {
      var d = a[b];
      d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
    }, unset: function (a, b, c) {
      var d = a[b];
      d && (Za(d, c), 0 === d.length && delete a[b]);
    }, $animate: c});
    f.$setDirty = function () {
      c.removeClass(a, Ua);
      c.addClass(a, Mb);
      f.$dirty = true;
      f.$pristine = false;
      f.$$parentForm.$setDirty();
    };
    f.$setPristine = function () {
      c.setClass(a, Ua, Mb + " ng-submitted");
      f.$dirty = false;
      f.$pristine = true;
      f.$submitted = false;
      q(g, function (a) {
        a.$setPristine();
      });
    };
    f.$setUntouched = function () {
      q(g, function (a) {
        a.$setUntouched();
      });
    };
    f.$setSubmitted = function () {
      c.addClass(a, "ng-submitted");
      f.$submitted = true;
      f.$$parentForm.$setSubmitted();
    };
  }
  function pc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }
  function lb(a, b, d, c, e, f) {
    var g = Q(b[0].type);
    if (!e.android) {
      var h = false;
      b.on("compositionstart", function () {
        h = true;
      });
      b.on("compositionend", function () {
        h = false;
        l();
      });
    }
    var k, l = function (a) {
      k && (f.defer.cancel(k), k = null);
      if (!h) {
        var e = b.val();
        a = a && a.type;
        "password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));
        (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };
    if (e.hasEvent("input")) b.on("input", l); else {
      var m = function (a, b, c) {
        k || (k = f.defer(function () {
          k = null;
          b && b.value === c || l(a);
        }));
      };
      b.on("keydown", function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });
      if (e.hasEvent("paste")) b.on("paste cut", m);
    }
    b.on("change", l);
    if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity, c = b.badInput, d = b.typeMismatch;
        k = f.defer(function () {
          k = null;
          b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });
    c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
      b.val() !== a && b.val(a);
    };
  }
  function Nb(a, b) {
    return function (d, c) {
      var e, f;
      if ("[object Date]" === ma.call(d)) return d;
      if ("string" === typeof d) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (Bg.test(d)) return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d)) return e.shift(), f = c ? {yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1e3} : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1e3 * f.sss || 0);
      }
      return NaN;
    };
  }
  function mb(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function p(a) {
        return "undefined" !== typeof a && !("[object Date]" === ma.call(a)) ? d(a) || void 0 : a;
      }
      Md(e, f, g, h);
      lb(e, f, g, h, k, l);
      var u = h && h.$options && h.$options.timezone, q;
      h.$$parserName = a;
      h.$parsers.push(function (a) {
        if (h.$isEmpty(a)) return null;
        if (b.test(a)) return a = d(a, q), u && (a = Sb(a, u)), a;
      });
      h.$formatters.push(function (a) {
        if (a && !("[object Date]" === ma.call(a))) throw nb("datefmt", a);
        if (a && !(a.getTime && a.getTime() !== a.getTime())) return (q = a) && u && (q = Sb(q, u, true)), m("date")(a, c, u);
        q = null;
        return "";
      });
      if ("undefined" !== typeof g.min || g.ngMin) {
        var s;
        h.$validators.min = function (a) {
          return !(a && !(a.getTime && a.getTime() !== a.getTime())) || "undefined" === typeof s || d(a) >= s;
        };
        g.$observe("min", function (a) {
          s = p(a);
          h.$validate();
        });
      }
      if ("undefined" !== typeof g.max || g.ngMax) {
        var r;
        h.$validators.max = function (a) {
          return !(a && !(a.getTime && a.getTime() !== a.getTime())) || "undefined" === typeof r || d(a) <= r;
        };
        g.$observe("max", function (a) {
          r = p(a);
          h.$validate();
        });
      }
    };
  }
  function Md(a, b, d, c) {
    (c.$$hasNativeValidators = null !== b[0].validity && "object" === typeof b[0].validity) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};
      return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }
  function Nd(a, b, d, c, e) {
    if ("undefined" !== typeof c) {
      a = a(c);
      if (!a.constant) throw nb("constexpr", d, c);
      return a(b);
    }
    return e;
  }
  function qc(a, b) {
    a = "ngClass" + a;
    return ["$animate", function (d) {
      function c(a, b) {
        var c = [], d = 0;
        a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
          c.push(e);
        }
        return c;
      }
      function e(a) {
        var b = [];
        return L(a) ? (q(a, function (a) {
          b = b.concat(e(a));
        }), b) : "string" === typeof a ? a.split(" ") : null !== a && "object" === typeof a ? (q(a, function (a, c) {
          a && (b = b.concat(c.split(" ")));
        }), b) : a;
      }
      return {restrict: "AC", link: function (f, g, h) {
        function k(a) {
          a = l(a, 1);
          h.$addClass(a);
        }
        function l(a, b) {
          var c = g.data("$classCounts") || Object.create(null), d = [];
          q(a, function (a) {
            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
          });
          g.data("$classCounts", c);
          return d.join(" ");
        }
        function m(a, b) {
          var e = c(b, a), f = c(a, b), e = l(e, 1), f = l(f, -1);
          e && e.length && d.addClass(g, e);
          f && f.length && d.removeClass(g, f);
        }
        function n(a) {
          if (true === b || (f.$index & 1) === b) {
            var c = e(a || []);
            if (!p) k(c); else if (!na(a, p)) {
              var d = e(p);
              m(d, c);
            }
          }
          p = L(a) ? a.map(function (a) {
            return ia(a);
          }) : ia(a);
        }
        var p;
        f.$watch(h[a], n, true);
        h.$observe("class", function (b) {
          n(f.$eval(h[a]));
        });
        "ngClass" !== a && f.$watch("$index", function (c, d) {
          var g = c & 1;
          if (g !== (d & 1)) {
            var m = e(f.$eval(h[a]));
            g === b ? k(m) : (g = l(m, -1), h.$removeClass(g));
          }
        });
      }};
    }];
  }
  function Kd(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = true) : !b && f[a] && (k.removeClass(e, a), f[a] = false);
    }
    function d(a, c) {
      a = a ? "-" + Cc(a, "-") : "";
      b(ob + a, true === c);
      b(Od + a, false === c);
    }
    var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
    f[Od] = !(f[ob] = e.hasClass(ob));
    c.$setValidity = function (a, e, f) {
      "undefined" === typeof e ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));
      "boolean" === typeof e ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
      c.$pending ? (b(Qd, true), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, false), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
      e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? false : c.$$success[a] ? true : null;
      d(a, e);
      c.$$parentForm.$setValidity(a, e, c);
    };
  }
  function Pd(a) {
    if (a) for (var b in a) if (a.hasOwnProperty(b)) return false;
    return true;
  }
  var Cg = /^\/(.+)\/([a-z]*)$/, ua = Object.prototype.hasOwnProperty, Q = function (a) {
    return "string" === typeof a ? a.toLowerCase() : a;
  }, ub = function (a) {
    return "string" === typeof a ? a.toUpperCase() : a;
  }, Ea, F, qa, va = [].slice, bg = [].splice, Dg = [].push, ma = Object.prototype.toString, wc = Object.getPrototypeOf, xa = N("ng"), ca = C.angular || (C.angular = {}), Ub, pb = 0;
  Ea = C.document.documentMode;
  A.$inject = [];
  Xa.$inject = [];
  var L = Array.isArray, ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, W = function (a) {
    return "string" === typeof a ? a.trim() : a;
  }, Ba = function () {
    if (!("undefined" !== typeof Ba.rules)) {
      var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");
      if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Ba.rules = {noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")};
      } else {
        a = Ba;
        try {
          new Function(""), b = false;
        } catch (d) {
          b = true;
        }
        a.rules = {noUnsafeEval: b, noInlineStyle: false};
      }
    }
    return Ba.rules;
  }, rb = function () {
    if ("undefined" !== typeof rb.name_) return rb.name_;
    var a, b, d = Na.length, c, e;
    for (b = 0; b < d; ++b) if (c = Na[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
      e = a.getAttribute(c + "jq");
      break;
    }
    return rb.name_ = e;
  }, de = /:/g, Na = ["ng-", "data-ng-", "ng:", "x-ng-"], ie = /[A-Z]/g, Dc = false, Ma = 3, me = {full: "1.5.8", major: 1, minor: 5, dot: 8, codeName: "arbitrary-fallbacks"};
  O.expando = "ng339";
  var fb = O.cache = {}, Pf = 1;
  O._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };
  var Kf = /([\:\-\_]+(.))/g, Lf = /^moz([A-Z])/, yb = {mouseleave: "mouseout", mouseenter: "mouseover"}, Wb = N("jqLite"), Of = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Vb = /<|&#?\w+;/, Mf = /<([\w:-]+)/, Nf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ja = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
  ja.optgroup = ja.option;
  ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
  ja.th = ja.td;
  var Uf = C.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  }, Oa = O.prototype = {ready: function (a) {
    function b() {
      d || (d = true, a());
    }
    var d = false;
    "complete" === C.document.readyState ? C.setTimeout(b) : (this.on("DOMContentLoaded", b), O(C).on("load", b));
  }, toString: function () {
    var a = [];
    q(this, function (b) {
      a.push("" + b);
    });
    return "[" + a.join(", ") + "]";
  }, eq: function (a) {
    return 0 <= a ? F(this[a]) : F(this[this.length + a]);
  }, length: 0, push: Dg, sort: [].sort, splice: [].splice}, Eb = {};
  q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Eb[Q(a)] = a;
  });
  var Vc = {};
  q("input select option textarea button form details".split(" "), function (a) {
    Vc[a] = true;
  });
  var bd = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
  q({data: Yb, removeData: eb, hasData: function (a) {
    for (var b in fb[a.ng339]) return true;
    return false;
  }, cleanData: function (a) {
    for (var b = 0, d = a.length; b < d; b++) eb(a[b]);
  }}, function (a, b) {
    O[b] = a;
  });
  q({data: Yb, inheritedData: Cb, scope: function (a) {
    return F.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"]);
  }, isolateScope: function (a) {
    return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate");
  }, controller: Sc, injector: function (a) {
    return Cb(a, "$injector");
  }, removeAttr: function (a, b) {
    a.removeAttribute(b);
  }, hasClass: zb, css: function (a, b, d) {
    b = db(b);
    if ("undefined" !== typeof d) a.style[b] = d; else return a.style[b];
  }, attr: function (a, b, d) {
    var c = a.nodeType;
    if (c !== Ma && 2 !== c && 8 !== c) if (c = Q(b), Eb[c]) if ("undefined" !== typeof d) d ? (a[b] = true, a.setAttribute(b, c)) : (a[b] = false, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || A).specified ? c : void 0; else if ("undefined" !== typeof d) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a;
  }, prop: function (a, b, d) {
    if ("undefined" !== typeof d) a[b] = d; else return a[b];
  }, text: function () {
    function a(a, d) {
      if ("undefined" === typeof d) {
        var c = a.nodeType;
        return 1 === c || c === Ma ? a.textContent : "";
      }
      a.textContent = d;
    }
    a.$dv = "";
    return a;
  }(), val: function (a, b) {
    if ("undefined" === typeof b) {
      if (a.multiple && "select" === Q(a.nodeName || a[0] && a[0].nodeName)) {
        var d = [];
        q(a.options, function (a) {
          a.selected && d.push(a.value || a.text);
        });
        return 0 === d.length ? null : d;
      }
      return a.value;
    }
    a.value = b;
  }, html: function (a, b) {
    if ("undefined" === typeof b) return a.innerHTML;
    wb(a, true);
    a.innerHTML = b;
  }, empty: Tc}, function (a, b) {
    O.prototype[b] = function (b, c) {
      var e, f, g = this.length;
      if (a !== Tc && "undefined" === typeof (2 == a.length && a !== zb && a !== Sc ? b : c)) {
        if (null !== b && "object" === typeof b) {
          for (e = 0; e < g; e++) if (a === Yb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
          return this;
        }
        e = a.$dv;
        g = "undefined" === typeof e ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < g; e++) a(this[e], b, c);
      return this;
    };
  });
  q({removeData: eb, on: function (a, b, d, c) {
    if ("undefined" !== typeof c) throw Wb("onargs");
    if (Nc(a)) {
      c = xb(a, true);
      var e = c.events, f = c.handle;
      f || (f = c.handle = Rf(a, e));
      c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
      for (var g = c.length, h = function (b, c, g) {
        var h = e[b];
        h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, false));
        h.push(d);
      }; g--;) b = c[g], yb[b] ? (h(yb[b], Tf), h(b, void 0, true)) : h(b);
    }
  }, off: Rc, one: function (a, b, d) {
    a = F(a);
    a.on(b, function e() {
      a.off(b, d);
      a.off(b, e);
    });
    a.on(b, d);
  }, replaceWith: function (a, b) {
    var d, c = a.parentNode;
    wb(a);
    q(new O(b), function (b) {
      d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
      d = b;
    });
  }, children: function (a) {
    var b = [];
    q(a.childNodes, function (a) {
      1 === a.nodeType && b.push(a);
    });
    return b;
  }, contents: function (a) {
    return a.contentDocument || a.childNodes || [];
  }, append: function (a, b) {
    var d = a.nodeType;
    if (1 === d || 11 === d) {
      b = new O(b);
      for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d]);
    }
  }, prepend: function (a, b) {
    if (1 === a.nodeType) {
      var d = a.firstChild;
      q(new O(b), function (b) {
        a.insertBefore(b, d);
      });
    }
  }, wrap: function (a, b) {
    Pc(a, F(b).eq(0).clone()[0]);
  }, remove: Db, detach: function (a) {
    Db(a, true);
  }, after: function (a, b) {
    var d = a, c = a.parentNode;
    b = new O(b);
    for (var e = 0, f = b.length; e < f; e++) {
      var g = b[e];
      c.insertBefore(g, d.nextSibling);
      d = g;
    }
  }, addClass: Bb, removeClass: Ab, toggleClass: function (a, b, d) {
    b && q(b.split(" "), function (b) {
      var e = d;
      "undefined" === typeof e && (e = !zb(a, b));
      (e ? Bb : Ab)(a, b);
    });
  }, parent: function (a) {
    return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
  }, next: function (a) {
    return a.nextElementSibling;
  }, find: function (a, b) {
    return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
  }, clone: Xb, triggerHandler: function (a, b, d) {
    var c, e, f = b.type || b, g = xb(a);
    if (g = (g = g && g.events) && g[f]) c = {preventDefault: function () {
      this.defaultPrevented = true;
    }, isDefaultPrevented: function () {
      return true === this.defaultPrevented;
    }, stopImmediatePropagation: function () {
      this.immediatePropagationStopped = true;
    }, isImmediatePropagationStopped: function () {
      return true === this.immediatePropagationStopped;
    }, stopPropagation: A, type: f, target: a}, b.type && (c = Pb(c, va.call(arguments, 1), false)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
      c.isImmediatePropagationStopped() || b.apply(a, e);
    });
  }}, function (a, b) {
    O.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) "undefined" === typeof f ? (f = a(this[g], b, c, e), "undefined" !== typeof f && (f = F(f))) : Qc(f, a(this[g], b, c, e));
      return "undefined" !== typeof f ? f : this;
    };
    O.prototype.bind = O.prototype.on;
    O.prototype.unbind = O.prototype.off;
  });
  Ra.prototype = {put: function (a, b) {
    this[Ca(a, this.nextUid)] = b;
  }, get: function (a) {
    return this[Ca(a, this.nextUid)];
  }, remove: function (a) {
    var b = this[a = Ca(a, this.nextUid)];
    delete this[a];
    return b;
  }};
  var If = [function () {
    this.$get = [function () {
      return Ra;
    }];
  }], Wf = /^([^\(]+?)=>/, Xf = /^[^\(]*\(\s*([^\)]*)\)/m, Eg = /,/, Fg = /^\s*(_?)(\S+?)\1\s*$/, Vf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ha = N("$injector");
  cb.$$annotate = function (a, b, d) {
    var c;
    if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];
        if (a.length) {
          if (b) throw "string" === typeof d && d || (d = a.name || Yf(a)), Ha("strictdi", d);
          b = Wc(a);
          q(b[1].split(Eg), function (a) {
            a.replace(Fg, function (a, b, d) {
              c.push(d);
            });
          });
        }
        a.$inject = c;
      }
    } else L(a) ? (b = a.length - 1, Pa(a[b], "fn"), c = a.slice(0, b)) : Pa(a, "fn", true);
    return c;
  };
  var Rd = N("$animate"), $e = function () {
    this.$get = A;
  }, af = function () {
    var a = new Ra, b = [];
    this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = false;
        b && (b = "string" === typeof b ? b.split(" ") : L(b) ? b : [], q(b, function (b) {
          b && (d = true, a[b] = c);
        }));
        return d;
      }
      function f() {
        q(b, function (b) {
          var c = a.get(b);
          if (c) {
            var d = Zf(b.attr("class")), e = "", f = "";
            q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });
            q(b, function (a) {
              e && Bb(a, e);
              f && Ab(a, f);
            });
            a.remove(b);
          }
        });
        b.length = 0;
      }
      return {enabled: A, on: A, off: A, pin: A, push: function (g, h, k, l) {
        l && l();
        k = k || {};
        k.from && g.css(k.from);
        k.to && g.css(k.to);
        if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, true), l = e(k, l, false), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
        g = new d;
        g.complete();
        return g;
      }};
    }];
  }, Ye = ["$provide", function (a) {
    var b = this;
    this.$$registeredAnimations = Object.create(null);
    this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);
      var e = d + "-animation";
      b.$$registeredAnimations[d.substr(1)] = e;
      a.factory(e, c);
    };
    this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");
      return this.$$classNameFilter;
    };
    this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var h;
          a: {
            for (h = 0; h < d.length; h++) {
              var k = d[h];
              if (1 === k.nodeType) {
                h = k;
                break a;
              }
            }
            h = void 0;
          }
          !h || h.parentNode || h.previousElementSibling || (d = null);
        }
        d ? d.after(a) : c.prepend(a);
      }
      return {on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
        a.end && a.end();
      }, enter: function (e, f, g, h) {
        f = f && F(f);
        g = g && F(g);
        f = f || g.parent();
        b(e, f, g);
        return a.push(e, "enter", Ia(h));
      }, move: function (e, f, g, h) {
        f = f && F(f);
        g = g && F(g);
        f = f || g.parent();
        b(e, f, g);
        return a.push(e, "move", Ia(h));
      }, leave: function (b, c) {
        return a.push(b, "leave", Ia(c), function () {
          b.remove();
        });
      }, addClass: function (b, c, g) {
        g = Ia(g);
        g.addClass = gb(g.addclass, c);
        return a.push(b, "addClass", g);
      }, removeClass: function (b, c, g) {
        g = Ia(g);
        g.removeClass = gb(g.removeClass, c);
        return a.push(b, "removeClass", g);
      }, setClass: function (b, c, g, h) {
        h = Ia(h);
        h.addClass = gb(h.addClass, c);
        h.removeClass = gb(h.removeClass, g);
        return a.push(b, "setClass", h);
      }, animate: function (b, c, g, h, k) {
        k = Ia(k);
        k.from = k.from ? Pb(k.from, va.call(arguments, 1), false) : c;
        k.to = k.to ? Pb(k.to, va.call(arguments, 1), false) : g;
        k.tempClasses = gb(k.tempClasses, h || "ng-inline-animate");
        return a.push(b, "animate", k);
      }};
    }];
  }], cf = function () {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);
        1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) d[a]();
          d = [];
        });
      }
      var d = [];
      return function () {
        var a = false;
        b(function () {
          a = true;
        });
        return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  }, bf = function () {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);
        var b = d();
        this._doneCallbacks = [];
        this._tick = function (a) {
          var d = c[0];
          d && d.hidden ? e(a, 0, false) : b(a);
        };
        this._state = 0;
      }
      f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(true); else a[d](function (a) {
            false === a ? b(false) : (d++, c());
          });
        }
        var d = 0;
        c();
      };
      f.all = function (a, b) {
        function c(f) {
          e = e && f;
          ++d === a.length && b(e);
        }
        var d = 0, e = true;
        q(a, function (a) {
          a.done(c);
        });
      };
      f.prototype = {setHost: function (a) {
        this.host = a || {};
      }, done: function (a) {
        2 === this._state ? a() : this._doneCallbacks.push(a);
      }, progress: A, getPromise: function () {
        if (!this.promise) {
          var b = this;
          this.promise = a(function (a, c) {
            b.done(function (b) {
              false === b ? c() : a();
            });
          });
        }
        return this.promise;
      }, then: function (a, b) {
        return this.getPromise().then(a, b);
      }, catch: function (a) {
        return this.getPromise().catch(a);
      }, finally: function (a) {
        return this.getPromise().finally(a);
      }, pause: function () {
        this.host.pause && this.host.pause();
      }, resume: function () {
        this.host.resume && this.host.resume();
      }, end: function () {
        this.host.end && this.host.end();
        this._resolve(true);
      }, cancel: function () {
        this.host.cancel && this.host.cancel();
        this._resolve(false);
      }, complete: function (a) {
        var b = this;
        0 === b._state && (b._state = 1, b._tick(function () {
          b._resolve(a);
        }));
      }, _resolve: function (a) {
        2 !== this._state && (q(this._doneCallbacks, function (b) {
          b(a);
        }), this._doneCallbacks.length = 0, this._state = 2);
      }};
      return f;
    }];
  }, Ze = function () {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);
            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
            g.to && (b.css(g.to), g.to = null);
            h || k.complete();
            h = true;
          });
          return k;
        }
        var g = e || {};
        g.$$prepared || (g = pa(g));
        g.cleanupStyles && (g.from = g.to = null);
        g.from && (b.css(g.from), g.from = null);
        var h, k = new d;
        return {start: f, end: f};
      };
    }];
  }, ga = N("$compile"), bc = new function () {};
  Fc.$inject = ["$provide", "$$sanitizeUriProvider"];
  Fb.prototype.isFirstChange = function () {
    return this.previousValue === bc;
  };
  var Yc = /^((?:x|data)[\:\-_])/i, cg = N("$controller"), cd = /^(\S+)(\s+as\s+([\w$]+))?$/, jf = function () {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body;
        return b.offsetWidth + 1;
      };
    }];
  }, dd = "application/json", ec = {"Content-Type": dd + ";charset=utf-8"}, eg = /^\[|^\{(?!\{)/, fg = {"[": /]$/, "{": /}$/}, dg = /^\)\]\}',?\n/, Gg = N("$http"), hd = function (a) {
    return function () {
      throw Gg("legacy", a);
    };
  }, Ka = ca.$interpolateMinErr = N("$interpolate");
  Ka.throwNoconcat = function (a) {
    throw Ka("noconcat", a);
  };
  Ka.interr = function (a, b) {
    return Ka("interr", a, b.toString());
  };
  var rf = function () {
    this.$get = ["$window", function (a) {
      function b(a) {
        var b = function (a) {
          b.data = a;
          b.called = true;
        };
        b.id = a;
        return b;
      }
      var d = a.angular.callbacks, c = {};
      return {createCallback: function (a) {
        a = "_" + (d.$$counter++).toString(36);
        var f = "angular.callbacks." + a, g = b(a);
        c[f] = d[a] = g;
        return f;
      }, wasCalled: function (a) {
        return c[a].called;
      }, getResponse: function (a) {
        return c[a].data;
      }, removeCallback: function (a) {
        delete d[c[a].id];
        delete c[a];
      }};
    }];
  }, Hg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, hg = {http: 80, https: 443, ftp: 21}, Gb = N("$location"), Ig = {$$absUrl: "", $$html5: false, $$replace: false, absUrl: Hb("$$absUrl"), url: function (a) {
    if ("undefined" === typeof a) return this.$$url;
    var b = Hg.exec(a);
    (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
    (b[2] || b[1] || "" === a) && this.search(b[3] || "");
    this.hash(b[5] || "");
    return this;
  }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: md("$$path", function (a) {
    a = null !== a ? a.toString() : "";
    return "/" == a.charAt(0) ? a : "/" + a;
  }), search: function (a, b) {
    switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if ("string" === typeof a || "number" === typeof a) a = a.toString(), this.$$search = Ac(a); else if (null !== a && "object" === typeof a) a = pa(a, {}), q(a, function (b, c) {
          null == b && delete a[c];
        }), this.$$search = a; else throw Gb("isrcharg");
        break;
      default:
        "undefined" === typeof b || null === b ? delete this.$$search[a] : this.$$search[a] = b;
    }
    this.$$compose();
    return this;
  }, hash: md("$$hash", function (a) {
    return null !== a ? a.toString() : "";
  }), replace: function () {
    this.$$replace = true;
    return this;
  }};
  q([ld, hc, gc], function (a) {
    a.prototype = Object.create(Ig);
    a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;
      if (a !== gc || !this.$$html5) throw Gb("nostate");
      this.$$state = "undefined" === typeof b ? null : b;
      return this;
    };
  });
  var X = N("$parse"), jg = Function.prototype.call, kg = Function.prototype.apply, lg = Function.prototype.bind, Ob = Object.create(null);
  q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Ob[a] = true;
  });
  var Jg = {n: "\n", f: "", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, jc = function (a) {
    this.options = a;
  };
  jc.prototype = {constructor: jc, lex: function (a) {
    this.text = a;
    this.index = 0;
    for (this.tokens = []; this.index < this.text.length;) if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({index: this.index, text: a}), this.index++; else if (this.isWhitespace(a)) this.index++; else {
      var b = a + this.peek(), d = b + this.peek(2), c = Ob[b], e = Ob[d];
      Ob[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({index: this.index, text: a, operator: true}), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
    }
    return this.tokens;
  }, is: function (a, b) {
    return -1 !== b.indexOf(a);
  }, peek: function (a) {
    a = a || 1;
    return this.index + a < this.text.length ? this.text.charAt(this.index + a) : false;
  }, isNumber: function (a) {
    return "0" <= a && "9" >= a && "string" === typeof a;
  }, isWhitespace: function (a) {
    return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
  }, isIdentifierStart: function (a) {
    return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
  }, isValidIdentifierStart: function (a) {
    return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
  }, isIdentifierContinue: function (a) {
    return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
  }, isValidIdentifierContinue: function (a, b) {
    return this.isValidIdentifierStart(a, b) || this.isNumber(a);
  }, codePointAt: function (a) {
    return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
  }, peekMultichar: function () {
    var a = this.text.charAt(this.index), b = this.peek();
    if (!b) return a;
    var d = a.charCodeAt(0), c = b.charCodeAt(0);
    return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
  }, isExpOperator: function (a) {
    return "-" === a || "+" === a || this.isNumber(a);
  }, throwError: function (a, b, d) {
    d = d || this.index;
    b = "undefined" !== typeof b ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
    throw X("lexerr", a, b, this.text);
  }, readNumber: function () {
    for (var a = "", b = this.index; this.index < this.text.length;) {
      var d = Q(this.text.charAt(this.index));
      if ("." == d || this.isNumber(d)) a += d; else {
        var c = this.peek();
        if ("e" == d && this.isExpOperator(c)) a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent");
      }
      this.index++;
    }
    this.tokens.push({index: b, text: a, constant: true, value: Number(a)});
  }, readIdent: function () {
    var a = this.index;
    for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
      var b = this.peekMultichar();
      if (!this.isIdentifierContinue(b)) break;
      this.index += b.length;
    }
    this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: true});
  }, readString: function (a) {
    var b = this.index;
    this.index++;
    for (var d = "", c = a, e = false; this.index < this.text.length;) {
      var f = this.text.charAt(this.index), c = c + f;
      if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Jg[f] || f, e = false; else if ("\\" === f) e = true; else {
        if (f === a) {
          this.index++;
          this.tokens.push({index: b, text: c, constant: true, value: d});
          return;
        }
        d += f;
      }
      this.index++;
    }
    this.throwError("Unterminated quote", b);
  }};
  var s = function (a, b) {
    this.lexer = a;
    this.options = b;
  };
  s.Program = "Program";
  s.ExpressionStatement = "ExpressionStatement";
  s.AssignmentExpression = "AssignmentExpression";
  s.ConditionalExpression = "ConditionalExpression";
  s.LogicalExpression = "LogicalExpression";
  s.BinaryExpression = "BinaryExpression";
  s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";
  s.MemberExpression = "MemberExpression";
  s.Identifier = "Identifier";
  s.Literal = "Literal";
  s.ArrayExpression = "ArrayExpression";
  s.Property = "Property";
  s.ObjectExpression = "ObjectExpression";
  s.ThisExpression = "ThisExpression";
  s.LocalsExpression = "LocalsExpression";
  s.NGValueParameter = "NGValueParameter";
  s.prototype = {ast: function (a) {
    this.text = a;
    this.tokens = this.lexer.lex(a);
    a = this.program();
    0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
    return a;
  }, program: function () {
    for (var a = [];;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {type: s.Program, body: a};
  }, expressionStatement: function () {
    return {type: s.ExpressionStatement, expression: this.filterChain()};
  }, filterChain: function () {
    for (var a = this.expression(); this.expect("|");) a = this.filter(a);
    return a;
  }, expression: function () {
    return this.assignment();
  }, assignment: function () {
    var a = this.ternary();
    this.expect("=") && (a = {type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
    return a;
  }, ternary: function () {
    var a = this.logicalOR(), b, d;
    return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {type: s.ConditionalExpression, test: a, alternate: b, consequent: d}) : a;
  }, logicalOR: function () {
    for (var a = this.logicalAND(); this.expect("||");) a = {type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND()};
    return a;
  }, logicalAND: function () {
    for (var a = this.equality(); this.expect("&&");) a = {type: s.LogicalExpression, operator: "&&", left: a, right: this.equality()};
    return a;
  }, equality: function () {
    for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.relational()};
    return a;
  }, relational: function () {
    for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.additive()};
    return a;
  }, additive: function () {
    for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative()};
    return a;
  }, multiplicative: function () {
    for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.unary()};
    return a;
  }, unary: function () {
    var a;
    return (a = this.expect("+", "-", "!")) ? {type: s.UnaryExpression, operator: a.text, prefix: true, argument: this.unary()} : this.primary();
  }, primary: function () {
    var a;
    this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {type: s.Literal, value: this.options.literals[this.consume().text]} : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
    for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {type: s.CallExpression, callee: a, arguments: this.parseArguments()}, this.consume(")")) : "[" === b.text ? (a = {type: s.MemberExpression, object: a, property: this.expression(), computed: true}, this.consume("]")) : "." === b.text ? a = {type: s.MemberExpression, object: a, property: this.identifier(), computed: false} : this.throwError("IMPOSSIBLE");
    return a;
  }, filter: function (a) {
    a = [a];
    for (var b = {type: s.CallExpression, callee: this.identifier(), arguments: a, filter: true}; this.expect(":");) a.push(this.expression());
    return b;
  }, parseArguments: function () {
    var a = [];
    if (")" !== this.peekToken().text) {
      do a.push(this.filterChain()); while (this.expect(","));
    }
    return a;
  }, identifier: function () {
    var a = this.consume();
    a.identifier || this.throwError("is not a valid identifier", a);
    return {type: s.Identifier, name: a.text};
  }, constant: function () {
    return {type: s.Literal, value: this.consume().value};
  }, arrayDeclaration: function () {
    var a = [];
    if ("]" !== this.peekToken().text) {
      do {
        if (this.peek("]")) break;
        a.push(this.expression());
      } while (this.expect(","));
    }
    this.consume("]");
    return {type: s.ArrayExpression, elements: a};
  }, object: function () {
    var a = [], b;
    if ("}" !== this.peekToken().text) {
      do {
        if (this.peek("}")) break;
        b = {type: s.Property, kind: "init"};
        this.peek().constant ? (b.key = this.constant(), b.computed = false, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = false, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = true, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
        a.push(b);
      } while (this.expect(","));
    }
    this.consume("}");
    return {type: s.ObjectExpression, properties: a};
  }, throwError: function (a, b) {
    throw X("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
  }, consume: function (a) {
    if (0 === this.tokens.length) throw X("ueoe", this.text);
    var b = this.expect(a);
    b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
    return b;
  }, peekToken: function () {
    if (0 === this.tokens.length) throw X("ueoe", this.text);
    return this.tokens[0];
  }, peek: function (a, b, d, c) {
    return this.peekAhead(0, a, b, d, c);
  }, peekAhead: function (a, b, d, c, e) {
    if (this.tokens.length > a) {
      a = this.tokens[a];
      var f = a.text;
      if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
    }
    return false;
  }, expect: function (a, b, d, c) {
    return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : false;
  }, selfReferential: {this: {type: s.ThisExpression}, $locals: {type: s.LocalsExpression}}};
  td.prototype = {compile: function (a, b) {
    var d = this, c = this.astBuilder.ast(a);
    this.state = {nextId: 0, filters: {}, expensiveChecks: b, fn: {vars: [], body: [], own: {}}, assign: {vars: [], body: [], own: {}}, inputs: []};
    V(c, d.$filter);
    var e = "", f;
    this.stage = "assign";
    if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
    f = pd(c.body);
    d.stage = "inputs";
    q(f, function (a, b) {
      var c = "fn" + b;
      d.state[c] = {vars: [], body: [], own: {}};
      d.state.computing = c;
      var e = d.nextId();
      d.recurse(a, e);
      d.return_(e);
      d.state.inputs.push(c);
      a.watchId = b;
    });
    this.state.computing = "fn";
    this.stage = "main";
    this.recurse(c);
    e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
    e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Sa, ra, nd, ig, Ib, mg, od, a);
    this.state = this.stage = void 0;
    e.literal = 0 === c.body.length || 1 === c.body.length && (c.body[0].expression.type === s.Literal || c.body[0].expression.type === s.ArrayExpression || c.body[0].expression.type === s.ObjectExpression);
    e.constant = c.constant;
    return e;
  }, USE: "use", STRICT: "strict", watchFns: function () {
    var a = [], b = this.state.inputs, d = this;
    q(b, function (b) {
      a.push("var " + b + "=" + d.generateFunction(b, "s"));
    });
    b.length && a.push("fn.inputs=[" + b.join(",") + "];");
    return a.join("");
  }, generateFunction: function (a, b) {
    return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
  }, filterPrefix: function () {
    var a = [], b = this;
    q(this.state.filters, function (d, c) {
      a.push(d + "=$filter(" + b.escape(c) + ")");
    });
    return a.length ? "var " + a.join(",") + ";" : "";
  }, varsPrefix: function (a) {
    return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
  }, body: function (a) {
    return this.state[a].body.join("");
  }, recurse: function (a, b, d, c, e, f) {
    var g, h, k = this, l, m, n;
    c = c || A;
    if (!f && "undefined" !== typeof a.watchId) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, true)); else switch (a.type) {
      case s.Program:
        q(a.body, function (b, c) {
          k.recurse(b.expression, void 0, void 0, function (a) {
            h = a;
          });
          c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
        });
        break;
      case s.Literal:
        m = this.escape(a.value);
        this.assign(b, m);
        c(m);
        break;
      case s.UnaryExpression:
        this.recurse(a.argument, void 0, void 0, function (a) {
          h = a;
        });
        m = a.operator + "(" + this.ifDefined(h, 0) + ")";
        this.assign(b, m);
        c(m);
        break;
      case s.BinaryExpression:
        this.recurse(a.left, void 0, void 0, function (a) {
          g = a;
        });
        this.recurse(a.right, void 0, void 0, function (a) {
          h = a;
        });
        m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
        this.assign(b, m);
        c(m);
        break;
      case s.LogicalExpression:
        b = b || this.nextId();
        k.recurse(a.left, b);
        k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
        c(b);
        break;
      case s.ConditionalExpression:
        b = b || this.nextId();
        k.recurse(a.test, b);
        k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
        c(b);
        break;
      case s.Identifier:
        b = b || this.nextId();
        d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = false, d.name = a.name);
        Sa(a.name);
        k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
          k.if_("inputs" === k.stage || "s", function () {
            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
            k.assign(b, k.nonComputedMember("s", a.name));
          });
        }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
        (k.state.expensiveChecks || "constructor" == a.name) && k.addEnsureSafeObject(b);
        c(b);
        break;
      case s.MemberExpression:
        g = d && (d.context = this.nextId()) || this.nextId();
        b = b || this.nextId();
        k.recurse(a.object, g, void 0, function () {
          k.if_(k.notNull(g), function () {
            e && 1 !== e && k.addEnsureSafeAssignContext(g);
            if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = true, d.name = h); else {
              Sa(a.property.name);
              e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
              m = k.nonComputedMember(g, a.property.name);
              if (k.state.expensiveChecks || "constructor" == a.property.name) m = k.ensureSafeObject(m);
              k.assign(b, m);
              d && (d.computed = false, d.name = a.property.name);
            }
          }, function () {
            k.assign(b, "undefined");
          });
          c(b);
        }, !!e);
        break;
      case s.CallExpression:
        b = b || this.nextId();
        a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
          var b = k.nextId();
          k.recurse(a, b);
          l.push(b);
        }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
          k.if_(k.notNull(h), function () {
            k.addEnsureSafeFunction(h);
            q(a.arguments, function (a) {
              k.recurse(a, k.nextId(), void 0, function (a) {
                l.push(k.ensureSafeObject(a));
              });
            });
            g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
            m = k.ensureSafeObject(m);
            k.assign(b, m);
          }, function () {
            k.assign(b, "undefined");
          });
          c(b);
        }));
        break;
      case s.AssignmentExpression:
        h = this.nextId();
        g = {};
        if (!(a.left.type === s.Identifier || a.left.type === s.MemberExpression)) throw X("lval");
        this.recurse(a.left, void 0, g, function () {
          k.if_(k.notNull(g.context), function () {
            k.recurse(a.right, h);
            k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
            k.addEnsureSafeAssignContext(g.context);
            m = k.member(g.context, g.name, g.computed) + a.operator + h;
            k.assign(b, m);
            c(b || m);
          });
        }, 1);
        break;
      case s.ArrayExpression:
        l = [];
        q(a.elements, function (a) {
          k.recurse(a, k.nextId(), void 0, function (a) {
            l.push(a);
          });
        });
        m = "[" + l.join(",") + "]";
        this.assign(b, m);
        c(m);
        break;
      case s.ObjectExpression:
        l = [];
        n = false;
        q(a.properties, function (a) {
          a.computed && (n = true);
        });
        n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
          a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;
          h = k.nextId();
          k.recurse(a.value, h);
          k.assign(k.member(b, g, a.computed), h);
        })) : (q(a.properties, function (b) {
          k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
            l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
          });
        }), m = "{" + l.join(",") + "}", this.assign(b, m));
        c(b || m);
        break;
      case s.ThisExpression:
        this.assign(b, "s");
        c("s");
        break;
      case s.LocalsExpression:
        this.assign(b, "l");
        c("l");
        break;
      case s.NGValueParameter:
        this.assign(b, "v"), c("v");
    }
  }, getHasOwnProperty: function (a, b) {
    var d = a + "." + b, c = this.current().own;
    c.hasOwnProperty(d) || (c[d] = this.nextId(false, a + "&&(" + this.escape(b) + " in " + a + ")"));
    return c[d];
  }, assign: function (a, b) {
    if (a) return this.current().body.push(a, "=", b, ";"), a;
  }, filter: function (a) {
    this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(true));
    return this.state.filters[a];
  }, ifDefined: function (a, b) {
    return "ifDefined(" + a + "," + this.escape(b) + ")";
  }, plus: function (a, b) {
    return "plus(" + a + "," + b + ")";
  }, return_: function (a) {
    this.current().body.push("return ", a, ";");
  }, if_: function (a, b, d) {
    if (true === a) b(); else {
      var c = this.current().body;
      c.push("if(", a, "){");
      b();
      c.push("}");
      d && (c.push("else{"), d(), c.push("}"));
    }
  }, not: function (a) {
    return "!(" + a + ")";
  }, notNull: function (a) {
    return a + "!=null";
  }, nonComputedMember: function (a, b) {
    var d = /[^$_a-zA-Z0-9]/g;
    return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]';
  }, computedMember: function (a, b) {
    return a + "[" + b + "]";
  }, member: function (a, b, d) {
    return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
  }, addEnsureSafeObject: function (a) {
    this.current().body.push(this.ensureSafeObject(a), ";");
  }, addEnsureSafeMemberName: function (a) {
    this.current().body.push(this.ensureSafeMemberName(a), ";");
  }, addEnsureSafeFunction: function (a) {
    this.current().body.push(this.ensureSafeFunction(a), ";");
  }, addEnsureSafeAssignContext: function (a) {
    this.current().body.push(this.ensureSafeAssignContext(a), ";");
  }, ensureSafeObject: function (a) {
    return "ensureSafeObject(" + a + ",text)";
  }, ensureSafeMemberName: function (a) {
    return "ensureSafeMemberName(" + a + ",text)";
  }, ensureSafeFunction: function (a) {
    return "ensureSafeFunction(" + a + ",text)";
  }, getStringValue: function (a) {
    this.assign(a, "getStringValue(" + a + ")");
  }, ensureSafeAssignContext: function (a) {
    return "ensureSafeAssignContext(" + a + ",text)";
  }, lazyRecurse: function (a, b, d, c, e, f) {
    var g = this;
    return function () {
      g.recurse(a, b, d, c, e, f);
    };
  }, lazyAssign: function (a, b) {
    var d = this;
    return function () {
      d.assign(a, b);
    };
  }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
  }, escape: function (a) {
    if ("string" === typeof a) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
    if ("number" === typeof a) return a.toString();
    if (true === a) return "true";
    if (false === a) return "false";
    if (null === a) return "null";
    if ("undefined" === typeof a) return "undefined";
    throw X("esc");
  }, nextId: function (a, b) {
    var d = "v" + this.state.nextId++;
    a || this.current().vars.push(d + (b ? "=" + b : ""));
    return d;
  }, current: function () {
    return this.state[this.state.computing];
  }};
  ud.prototype = {compile: function (a, b) {
    var d = this, c = this.astBuilder.ast(a);
    this.expression = a;
    this.expensiveChecks = b;
    V(c, d.$filter);
    var e, f;
    if (e = rd(c)) f = this.recurse(e);
    e = pd(c.body);
    var g;
    e && (g = [], q(e, function (a, b) {
      var c = d.recurse(a);
      a.input = c;
      g.push(c);
      a.watchId = b;
    }));
    var h = [];
    q(c.body, function (a) {
      h.push(d.recurse(a.expression));
    });
    e = 0 === c.body.length ? A : 1 === c.body.length ? h[0] : function (a, b) {
      var c;
      q(h, function (d) {
        c = d(a, b);
      });
      return c;
    };
    f && (e.assign = function (a, b, c) {
      return f(a, c, b);
    });
    g && (e.inputs = g);
    e.literal = 0 === c.body.length || 1 === c.body.length && (c.body[0].expression.type === s.Literal || c.body[0].expression.type === s.ArrayExpression || c.body[0].expression.type === s.ObjectExpression);
    e.constant = c.constant;
    return e;
  }, recurse: function (a, b, d) {
    var c, e, f = this, g;
    if (a.input) return this.inputs(a.input, a.watchId);
    switch (a.type) {
      case s.Literal:
        return this.value(a.value, b);
      case s.UnaryExpression:
        return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
      case s.BinaryExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
      case s.LogicalExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
      case s.ConditionalExpression:
        return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
      case s.Identifier:
        return Sa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || "constructor" == a.name, b, d, f.expression);
      case s.MemberExpression:
        return c = this.recurse(a.object, false, !!d), a.computed || (Sa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
      case s.CallExpression:
        return g = [], q(a.arguments, function (a) {
          g.push(f.recurse(a));
        }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, true)), a.filter ? function (a, c, d, f) {
          for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, f));
          a = e.apply(void 0, n, f);
          return b ? {context: void 0, name: void 0, value: a} : a;
        } : function (a, c, d, m) {
          var n = e(a, c, d, m), p;
          if (null != n.value) {
            ra(n.context, f.expression);
            nd(n.value, f.expression);
            p = [];
            for (var q = 0; q < g.length; ++q) p.push(ra(g[q](a, c, d, m), f.expression));
            p = ra(n.value.apply(n.context, p), f.expression);
          }
          return b ? {value: p} : p;
        };
      case s.AssignmentExpression:
        return c = this.recurse(a.left, true, 1), e = this.recurse(a.right), function (a, d, g, m) {
          var n = c(a, d, g, m);
          a = e(a, d, g, m);
          ra(n.value, f.expression);
          Ib(n.context);
          n.context[n.name] = a;
          return b ? {value: a} : a;
        };
      case s.ArrayExpression:
        return g = [], q(a.elements, function (a) {
          g.push(f.recurse(a));
        }), function (a, c, d, e) {
          for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));
          return b ? {value: f} : f;
        };
      case s.ObjectExpression:
        return g = [], q(a.properties, function (a) {
          a.computed ? g.push({key: f.recurse(a.key), computed: true, value: f.recurse(a.value)}) : g.push({key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: false, value: f.recurse(a.value)});
        }), function (a, c, d, e) {
          for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
          return b ? {value: f} : f;
        };
      case s.ThisExpression:
        return function (a) {
          return b ? {value: a} : a;
        };
      case s.LocalsExpression:
        return function (a, c) {
          return b ? {value: c} : c;
        };
      case s.NGValueParameter:
        return function (a, c, d) {
          return b ? {value: d} : d;
        };
    }
  }, "unary+": function (a, b) {
    return function (d, c, e, f) {
      d = a(d, c, e, f);
      d = "undefined" !== typeof d ? +d : 0;
      return b ? {value: d} : d;
    };
  }, "unary-": function (a, b) {
    return function (d, c, e, f) {
      d = a(d, c, e, f);
      d = "undefined" !== typeof d ? -d : 0;
      return b ? {value: d} : d;
    };
  }, "unary!": function (a, b) {
    return function (d, c, e, f) {
      d = !a(d, c, e, f);
      return b ? {value: d} : d;
    };
  }, "binary+": function (a, b, d) {
    return function (c, e, f, g) {
      var h = a(c, e, f, g);
      c = b(c, e, f, g);
      h = od(h, c);
      return d ? {value: h} : h;
    };
  }, "binary-": function (a, b, d) {
    return function (c, e, f, g) {
      var h = a(c, e, f, g);
      c = b(c, e, f, g);
      h = ("undefined" !== typeof h ? h : 0) - ("undefined" !== typeof c ? c : 0);
      return d ? {value: h} : h;
    };
  }, "binary*": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) * b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary/": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) / b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary%": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) % b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary===": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) === b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary!==": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) !== b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary==": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) == b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary!=": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) != b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary<": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) < b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary>": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) > b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary<=": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) <= b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary>=": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) >= b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary&&": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) && b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "binary||": function (a, b, d) {
    return function (c, e, f, g) {
      c = a(c, e, f, g) || b(c, e, f, g);
      return d ? {value: c} : c;
    };
  }, "ternary?:": function (a, b, d, c) {
    return function (e, f, g, h) {
      e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
      return c ? {value: e} : e;
    };
  }, value: function (a, b) {
    return function () {
      return b ? {context: void 0, name: void 0, value: a} : a;
    };
  }, identifier: function (a, b, d, c, e) {
    return function (f, g, h, k) {
      f = g && a in g ? g : f;
      c && 1 !== c && f && !f[a] && (f[a] = {});
      g = f ? f[a] : void 0;
      b && ra(g, e);
      return d ? {context: f, name: a, value: g} : g;
    };
  }, computedMember: function (a, b, d, c, e) {
    return function (f, g, h, k) {
      var l = a(f, g, h, k), m, n;
      null != l && (m = b(f, g, h, k), m += "", Sa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], ra(n, e));
      return d ? {context: l, name: m, value: n} : n;
    };
  }, nonComputedMember: function (a, b, d, c, e, f) {
    return function (g, h, k, l) {
      g = a(g, h, k, l);
      e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {}));
      h = null != g ? g[b] : void 0;
      (d || "constructor" == b) && ra(h, f);
      return c ? {context: g, name: b, value: h} : h;
    };
  }, inputs: function (a, b) {
    return function (d, c, e, f) {
      return f ? f[b] : a(d, c, e);
    };
  }};
  var kc = function (a, b, d) {
    this.lexer = a;
    this.$filter = b;
    this.options = d;
    this.ast = new s(a, d);
    this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b);
  };
  kc.prototype = {constructor: kc, parse: function (a) {
    return this.astCompiler.compile(a, this.options.expensiveChecks);
  }};
  var ng = Object.prototype.valueOf, sa = N("$sce"), la = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, pg = N("$compile"), $ = C.document.createElement("a"), yd = Y(C.location.href);
  zd.$inject = ["$document"];
  Mc.$inject = ["$provide"];
  var Gd = 22, Fd = ".", mc = "0";
  Ad.$inject = ["$locale"];
  Cd.$inject = ["$locale"];
  var Ag = {yyyy: ba("FullYear", 4, 0, false, true), yy: ba("FullYear", 2, 0, true, true), y: ba("FullYear", 1, 0, false, true), MMMM: kb("Month"), MMM: kb("Month", true), MM: ba("Month", 2, 1), M: ba("Month", 1, 1), LLLL: kb("Month", false, true), dd: ba("Date", 2), d: ba("Date", 1), HH: ba("Hours", 2), H: ba("Hours", 1), hh: ba("Hours", 2, -12), h: ba("Hours", 1, -12), mm: ba("Minutes", 2), m: ba("Minutes", 1), ss: ba("Seconds", 2), s: ba("Seconds", 1), sss: ba("Milliseconds", 3), EEEE: kb("Day"), EEE: kb("Day", true), a: function (a, b) {
    return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
  }, Z: function (a, b, d) {
    a = -1 * d;
    return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
  }, ww: Id(2), w: Id(1), G: nc, GG: nc, GGG: nc, GGGG: function (a, b) {
    return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
  }}, zg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, yg = /^\-?\d+$/;
  Bd.$inject = ["$locale"];
  var tg = ha(Q), ug = ha(ub);
  Dd.$inject = ["$parse"];
  var oe = ha({restrict: "E", compile: function (a, b) {
    if (!b.href && !b.xlinkHref) return function (a, b) {
      if ("a" === b[0].nodeName.toLowerCase()) {
        var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";
        b.on("click", function (a) {
          b.attr(e) || a.preventDefault();
        });
      }
    };
  }}), vb = {};
  q(Eb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }
    if ("multiple" != a) {
      var c = db(("ng-" + b).replace(Yc, "")), e = d;
      "checked" === a && (e = function (a, b, e) {
        e.ngModel !== e[c] && d(a, b, e);
      });
      vb[c] = function () {
        return {restrict: "A", priority: 100, link: e};
      };
    }
  });
  q(bd, function (a, b) {
    vb[b] = function () {
      return {priority: 100, link: function (a, c, e) {
        if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Cg))) {
          e.$set("ngPattern", new RegExp(c[1], c[2]));
          return;
        }
        a.$watch(e[b], function (a) {
          e.$set(b, a);
        });
      }};
    };
  });
  q(["src", "srcset", "href"], function (a) {
    var b = db(("ng-" + a).replace(Yc, ""));
    vb[b] = function () {
      return {priority: 99, link: function (d, c, e) {
        var f = a, g = a;
        "href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
        e.$observe(b, function (b) {
          b ? (e.$set(g, b), Ea && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
        });
      }};
    };
  });
  var Lb = {$addControl: A, $$renameControl: function (a, b) {
    a.$name = b;
  }, $removeControl: A, $setValidity: A, $setDirty: A, $setPristine: A, $setSubmitted: A};
  Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var Sd = function (a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || A;
      }
      return {name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Jd, compile: function (d, f) {
        d.addClass(Ua).addClass(ob);
        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : false;
        return {pre: function (a, d, e, f) {
          var n = f[0];
          if (!("action" in e)) {
            var p = function (b) {
              a.$apply(function () {
                n.$commitViewValue();
                n.$setSubmitted();
              });
              b.preventDefault();
            };
            d[0].addEventListener("submit", p, false);
            d.on("$destroy", function () {
              b(function () {
                d[0].removeEventListener("submit", p, false);
              }, 0, false);
            });
          }
          (f[1] || n.$$parentForm).$addControl(n);
          var q = g ? c(n.$name) : A;
          g && (q(a, n), e.$observe(g, function (b) {
            n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
          }));
          d.on("$destroy", function () {
            n.$$parentForm.$removeControl(n);
            q(a, void 0);
            Pb(n, va.call(arguments, 1), false);
          });
        }};
      }};
    }];
  }, pe = Sd(), Ce = Sd(true), Bg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, Kg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Lg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, Mg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Td = /^(\d{4,})-(\d{2})-(\d{2})$/, Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, rc = /^(\d{4,})-W(\d\d)$/, Vd = /^(\d{4,})-(\d\d)$/, Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Ld = Object.create(null);
  q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Ld[a] = true;
  });
  var Xd = {text: function (a, b, d, c, e, f) {
    lb(a, b, d, c, e, f);
    pc(c);
  }, date: mb("date", Td, Nb(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ud, Nb(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Wd, Nb(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", rc, function (a, b) {
    if ("[object Date]" === ma.call(a)) return a;
    if ("string" === typeof a) {
      rc.lastIndex = 0;
      var d = rc.exec(a);
      if (d) {
        var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Hd(c), e = 7 * (e - 1);
        b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
        return new Date(c, 0, k.getDate() + e, d, f, g, h);
      }
    }
    return NaN;
  }, "yyyy-Www"), month: mb("month", Vd, Nb(Vd, ["yyyy", "MM"]), "yyyy-MM"), number: function (a, b, d, c, e, f) {
    Md(a, b, d, c);
    lb(a, b, d, c, e, f);
    c.$$parserName = "number";
    c.$parsers.push(function (a) {
      if (c.$isEmpty(a)) return null;
      if (Mg.test(a)) return parseFloat(a);
    });
    c.$formatters.push(function (a) {
      if (!c.$isEmpty(a)) {
        if (!("number" === typeof a)) throw nb("numfmt", a);
        a = a.toString();
      }
      return a;
    });
    if ("undefined" !== typeof d.min || d.ngMin) {
      var g;
      c.$validators.min = function (a) {
        return c.$isEmpty(a) || "undefined" === typeof g || a >= g;
      };
      d.$observe("min", function (a) {
        "undefined" !== typeof a && !("number" === typeof a) && (a = parseFloat(a));
        g = "number" === typeof a && !isNaN(a) ? a : void 0;
        c.$validate();
      });
    }
    if ("undefined" !== typeof d.max || d.ngMax) {
      var h;
      c.$validators.max = function (a) {
        return c.$isEmpty(a) || "undefined" === typeof h || a <= h;
      };
      d.$observe("max", function (a) {
        "undefined" !== typeof a && !("number" === typeof a) && (a = parseFloat(a));
        h = "number" === typeof a && !isNaN(a) ? a : void 0;
        c.$validate();
      });
    }
  }, url: function (a, b, d, c, e, f) {
    lb(a, b, d, c, e, f);
    pc(c);
    c.$$parserName = "url";
    c.$validators.url = function (a, b) {
      var d = a || b;
      return c.$isEmpty(d) || Kg.test(d);
    };
  }, email: function (a, b, d, c, e, f) {
    lb(a, b, d, c, e, f);
    pc(c);
    c.$$parserName = "email";
    c.$validators.email = function (a, b) {
      var d = a || b;
      return c.$isEmpty(d) || Lg.test(d);
    };
  }, radio: function (a, b, d, c) {
    "undefined" === typeof d.name && b.attr("name", ++pb);
    b.on("click", function (a) {
      b[0].checked && c.$setViewValue(d.value, a && a.type);
    });
    c.$render = function () {
      b[0].checked = d.value == c.$viewValue;
    };
    d.$observe("value", c.$render);
  }, checkbox: function (a, b, d, c, e, f, g, h) {
    var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, true), l = Nd(h, a, "ngFalseValue", d.ngFalseValue, false);
    b.on("click", function (a) {
      c.$setViewValue(b[0].checked, a && a.type);
    });
    c.$render = function () {
      b[0].checked = c.$viewValue;
    };
    c.$isEmpty = function (a) {
      return false === a;
    };
    c.$formatters.push(function (a) {
      return na(a, k);
    });
    c.$parsers.push(function (a) {
      return a ? k : l;
    });
  }, hidden: A, button: A, submit: A, reset: A, file: A}, Gc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return {restrict: "E", require: ["?ngModel"], link: {pre: function (e, f, g, h) {
      h[0] && (Xd[Q(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
    }}};
  }], Ng = /^(true|false|\d+)$/, Ue = function () {
    return {restrict: "A", priority: 100, compile: function (a, b) {
      return Ng.test(b.ngValue) ? function (a, b, e) {
        e.$set("value", a.$eval(e.ngValue));
      } : function (a, b, e) {
        a.$watch(e.ngValue, function (a) {
          e.$set("value", a);
        });
      };
    }};
  }, ue = ["$compile", function (a) {
    return {restrict: "AC", compile: function (b) {
      a.$$addBindingClass(b);
      return function (b, c, e) {
        a.$$addBindingInfo(c, e.ngBind);
        c = c[0];
        b.$watch(e.ngBind, function (a) {
          c.textContent = "undefined" === typeof a ? "" : a;
        });
      };
    }};
  }], we = ["$interpolate", "$compile", function (a, b) {
    return {compile: function (d) {
      b.$$addBindingClass(d);
      return function (c, d, f) {
        c = a(d.attr(f.$attr.ngBindTemplate));
        b.$$addBindingInfo(d, c.expressions);
        d = d[0];
        f.$observe("ngBindTemplate", function (a) {
          d.textContent = "undefined" === typeof a ? "" : a;
        });
      };
    }};
  }], ve = ["$sce", "$parse", "$compile", function (a, b, d) {
    return {restrict: "A", compile: function (c, e) {
      var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (b) {
        return a.valueOf(b);
      });
      d.$$addBindingClass(c);
      return function (b, c, e) {
        d.$$addBindingInfo(c, e.ngBindHtml);
        b.$watch(g, function () {
          var d = f(b);
          c.html(a.getTrustedHtml(d) || "");
        });
      };
    }};
  }], Te = ha({restrict: "A", require: "ngModel", link: function (a, b, d, c) {
    c.$viewChangeListeners.push(function () {
      a.$eval(d.ngChange);
    });
  }}), xe = qc("", true), ze = qc("Odd", 0), ye = qc("Even", 1), Ae = Ta({compile: function (a, b) {
    b.$set("ngCloak", void 0);
    a.removeClass("ng-cloak");
  }}), Be = [function () {
    return {restrict: "A", scope: true, controller: "@", priority: 500};
  }], Lc = {}, Og = {blur: true, focus: true};
  q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = db(("ng-" + a).replace(Yc, ""));
    Lc[b] = ["$parse", "$rootScope", function (d, c) {
      return {restrict: "A", compile: function (e, f) {
        var g = d(f[b], null, true);
        return function (b, d) {
          d.on(a, function (d) {
            var e = function () {
              g(b, {$event: d});
            };
            Og[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
          });
        };
      }};
    }];
  });
  var Ee = ["$animate", "$compile", function (a, b) {
    return {multiElement: true, transclude: "element", priority: 600, terminal: true, restrict: "A", $$tlb: true, link: function (d, c, e, f, g) {
      var h, k, l;
      d.$watch(e.ngIf, function (d) {
        d ? k || g(function (d, f) {
          k = f;
          d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
          h = {clone: d};
          a.enter(d, c.parent(), c);
        }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
          l = null;
        }), h = null));
      });
    }};
  }], Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return {restrict: "ECA", priority: 400, terminal: true, transclude: "element", controller: ca.noop, compile: function (c, e) {
      var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
      return function (c, e, m, n, p) {
        var q = 0, s, B, r, y = function () {
          B && (B.remove(), B = null);
          s && (s.$destroy(), s = null);
          r && (d.leave(r).then(function () {
            B = null;
          }), B = r, r = null);
        };
        c.$watch(f, function (f) {
          var m = function () {
            !("undefined" !== typeof h) || h && !c.$eval(h) || b();
          }, t = ++q;
          f ? (a(f, true).then(function (a) {
            if (!c.$$destroyed && t === q) {
              var b = c.$new();
              n.template = a;
              a = p(b, function (a) {
                "undefined" === typeof a;
                d.enter(a, null, e).then(m);
              });
              s = b;
              r = a;
              s.$emit("$includeContentLoaded", f);
              c.$eval(g);
            }
          }, function () {
            c.$$destroyed || t !== q || ("undefined" === typeof a, c.$emit("$includeContentError", f));
          }), c.$emit("$includeContentRequested", f)) : ("undefined" === typeof a, n.template = null);
        });
      };
    }};
  }], We = ["$compile", function (a) {
    return {restrict: "ECA", priority: -400, require: "ngInclude", link: function (b, d, c, e) {
      ma.call(d[0]).match(/SVG/) ? (d.empty(), a(Oc(e.template, C.document).childNodes)(b, function (a) {
        d.append(a);
      }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b));
    }};
  }], Ge = Ta({priority: 450, compile: function () {
    return {pre: function (a, b, d) {
      a.$eval(d.ngInit);
    }};
  }}), Se = function () {
    return {restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
      var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? W(e) : e;
      c.$parsers.push(function (a) {
        if (!("undefined" === typeof a)) {
          var b = [];
          a && q(a.split(g), function (a) {
            a && b.push(f ? W(a) : a);
          });
          return b;
        }
      });
      c.$formatters.push(function (a) {
        if (L(a)) return a.join(e);
      });
      c.$isEmpty = function (a) {
        return !a || !a.length;
      };
    }};
  }, ob = "ng-valid", Od = "ng-invalid", Ua = "ng-pristine", Mb = "ng-dirty", Qd = "ng-pending", nb = N("ngModel"), Pg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
    this.$modelValue = this.$viewValue = Number.NaN;
    this.$$rawModelValue = void 0;
    this.$validators = {};
    this.$asyncValidators = {};
    this.$parsers = [];
    this.$formatters = [];
    this.$viewChangeListeners = [];
    this.$untouched = true;
    this.$touched = false;
    this.$pristine = true;
    this.$dirty = false;
    this.$valid = true;
    this.$invalid = false;
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = l(d.name || "", false)(a);
    this.$$parentForm = Lb;
    var m = e(d.ngModel), n = m.assign, p = m, u = n, s = null, B, r = this;
    this.$$setOptions = function (a) {
      if ((r.$options = a) && a.getterSetter) {
        var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
        p = function (a) {
          var c = m(a);
          "function" === typeof c && (c = b(a));
          return c;
        };
        u = function (a, b) {
          "function" === typeof m(a) ? f(a, {$$$p: b}) : n(a, b);
        };
      } else if (!m.assign) throw nb("nonassign", d.ngModel, ya(c));
    };
    this.$render = A;
    this.$isEmpty = function (a) {
      return "undefined" === typeof a || "" === a || null === a || a !== a;
    };
    this.$$updateEmptyClasses = function (a) {
      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
    };
    var J = 0;
    Kd({ctrl: this, $element: c, set: function (a, b) {
      a[b] = true;
    }, unset: function (a, b) {
      delete a[b];
    }, $animate: f});
    this.$setPristine = function () {
      r.$dirty = false;
      r.$pristine = true;
      f.removeClass(c, Mb);
      f.addClass(c, Ua);
    };
    this.$setDirty = function () {
      r.$dirty = true;
      r.$pristine = false;
      f.removeClass(c, Ua);
      f.addClass(c, Mb);
      r.$$parentForm.$setDirty();
    };
    this.$setUntouched = function () {
      r.$touched = false;
      r.$untouched = true;
      f.setClass(c, "ng-untouched", "ng-touched");
    };
    this.$setTouched = function () {
      r.$touched = true;
      r.$untouched = false;
      f.setClass(c, "ng-touched", "ng-untouched");
    };
    this.$rollbackViewValue = function () {
      g.cancel(s);
      r.$viewValue = r.$$lastCommittedViewValue;
      r.$render();
    };
    this.$validate = function () {
      if (!("number" === typeof r.$modelValue) || !isNaN(r.$modelValue)) {
        var a = r.$$rawModelValue, b = r.$valid, c = r.$modelValue, d = r.$options && r.$options.allowInvalid;
        r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
          d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope());
        });
      }
    };
    this.$$runValidators = function (a, b, c) {
      function d() {
        var c = true;
        q(r.$validators, function (d, e) {
          var g = d(a, b);
          c = c && g;
          f(e, g);
        });
        return c ? true : (q(r.$asyncValidators, function (a, b) {
          f(b, null);
        }), false);
      }
      function e() {
        var c = [], d = true;
        q(r.$asyncValidators, function (e, g) {
          var h = e(a, b);
          if (!h || !("function" === typeof h.then)) throw nb("nopromise", h);
          f(g, void 0);
          c.push(h.then(function () {
            f(g, true);
          }, function () {
            d = false;
            f(g, false);
          }));
        });
        c.length ? k.all(c).then(function () {
          g(d);
        }, A) : g(true);
      }
      function f(a, b) {
        h === J && r.$setValidity(a, b);
      }
      function g(a) {
        h === J && c(a);
      }
      J++;
      var h = J;
      (function () {
        var a = r.$$parserName || "parse";
        if ("undefined" === typeof B) f(a, null); else return B || (q(r.$validators, function (a, b) {
          f(b, null);
        }), q(r.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, B), B;
        return true;
      }() ? d() ? e() : g(false) : g(false));
    };
    this.$commitViewValue = function () {
      var a = r.$viewValue;
      g.cancel(s);
      if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };
    this.$$parseAndValidate = function () {
      var b = r.$$lastCommittedViewValue;
      if (B = "undefined" === typeof b ? void 0 : true) for (var c = 0; c < r.$parsers.length; c++) if (b = r.$parsers[c](b), "undefined" === typeof b) {
        B = false;
        break;
      }
      "number" === typeof r.$modelValue && isNaN(r.$modelValue) && (r.$modelValue = p(a));
      var d = r.$modelValue, e = r.$options && r.$options.allowInvalid;
      r.$$rawModelValue = b;
      e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());
      r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
        e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope());
      });
    };
    this.$$writeModelToScope = function () {
      u(a, r.$modelValue);
      q(r.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (c) {
          b(c);
        }
      });
    };
    this.$setViewValue = function (a, b) {
      r.$viewValue = a;
      r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
    };
    this.$$debounceViewValueCommit = function (b) {
      var c = 0, d = r.$options;
      d && "undefined" !== typeof d.debounce && (d = d.debounce, "number" === typeof d ? c = d : "number" === typeof d[b] ? c = d[b] : "number" === typeof d.default && (c = d.default));
      g.cancel(s);
      c ? s = g(function () {
        r.$commitViewValue();
      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
        r.$commitViewValue();
      });
    };
    a.$watch(function () {
      var b = p(a);
      if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
        r.$modelValue = r.$$rawModelValue = b;
        B = void 0;
        for (var c = r.$formatters, d = c.length, e = b; d--;) e = c[d](e);
        r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, A));
      }
      return b;
    });
  }], Re = ["$rootScope", function (a) {
    return {restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Pg, priority: 1, compile: function (b) {
      b.addClass(Ua).addClass("ng-untouched").addClass(ob);
      return {pre: function (a, b, e, f) {
        var g = f[0];
        b = f[1] || g.$$parentForm;
        g.$$setOptions(f[2] && f[2].$options);
        b.$addControl(g);
        e.$observe("name", function (a) {
          g.$name !== a && g.$$parentForm.$$renameControl(g, a);
        });
        a.$on("$destroy", function () {
          g.$$parentForm.$removeControl(g);
        });
      }, post: function (b, c, e, f) {
        var g = f[0];
        if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
          g.$$debounceViewValueCommit(a && a.type);
        });
        c.on("blur", function () {
          g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
        });
      }};
    }};
  }], Qg = /(\s+|^)default(\s+|$)/, Ve = function () {
    return {restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
      var d = this;
      this.$options = pa(a.$eval(b.ngModelOptions));
      "undefined" !== typeof this.$options.updateOn ? (this.$options.updateOnDefault = false, this.$options.updateOn = W(this.$options.updateOn.replace(Qg, function () {
        d.$options.updateOnDefault = true;
        return " ";
      }))) : this.$options.updateOnDefault = true;
    }]};
  }, He = Ta({terminal: true, priority: 1e3}), Rg = N("ngOptions"), Sg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Pe = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;
        this.viewValue = b;
        this.label = c;
        this.group = d;
        this.disabled = f;
      }
      function f(a) {
        var b;
        if (!q && ta(a)) b = a; else {
          b = [];
          for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
        }
        return b;
      }
      var n = a.match(Sg);
      if (!n) throw Rg("iexp", a, ya(b));
      var p = n[5] || n[7], q = n[6];
      a = / as /.test(n[0]) && n[1];
      var s = n[9];
      b = d(n[2] ? n[1] : p);
      var w = a && d(a) || b, r = s && d(s), y = s ? function (a, b) {
        return r(c, b);
      } : function (a) {
        return Ca(a);
      }, A = d(n[2] || n[1]), t = d(n[3] || ""), K = d(n[4] || ""), z = d(n[8]), H = {}, E = q ? function (a, b) {
        H[q] = b;
        H[p] = a;
        return H;
      } : function (a) {
        H[p] = a;
        return H;
      };
      return {trackBy: s, getTrackByValue: v, getWatchables: d(z, function (a) {
        var b = [];
        a = a || [];
        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
          var h = a === d ? g : d[g], l = a[h], h = E(l, h), l = "undefined" === typeof l;
          b.push(l);
          if (n[2] || n[1]) l = A(c, h), b.push(l);
          n[4] && (h = K(c, h), b.push(h));
        }
        return b;
      }), getOptions: function () {
        for (var a = [], b = {}, d = "function" === typeof c || [], g = f(d), h = g.length, n = 0; n < h; n++) {
          var p = d === g ? n : g[n], q = E(d[p], p), r = "undefined" !== typeof c, p = "undefined" === typeof r, u = A(c, q), H = t(c, q), q = K(c, q), r = new e(p, r, u, H, q);
          a.push(r);
          b[p] = r;
        }
        return {items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
          return b["undefined" === typeof a];
        }, getViewValueFromOption: function (a) {
          return s ? ca.copy(a.viewValue) : a.viewValue;
        }};
      }};
    }
    var e = C.document.createElement("option"), f = C.document.createElement("optgroup");
    return {restrict: "A", terminal: true, require: ["select", "ngModel"], link: {pre: function (a, b, c, d) {
      d[0].registerOption = A;
    }, post: function (d, h, k, l) {
      function m(a, b) {
        a.element = b;
        b.disabled = a.disabled;
        a.label !== b.label && (b.label = a.label, b.textContent = a.label);
        a.value !== b.value && (b.value = a.selectValue);
      }
      function n() {
        var a = t && p.readValue();
        if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
          var c = t.items[b];
          "undefined" !== typeof c.group ? Db(c.element.parentNode) : Db(c.element);
        }
        t = K.getOptions();
        var d = {};
        v && h.prepend(B);
        t.items.forEach(function (a) {
          var b;
          if ("undefined" !== typeof a.group) {
            b = d[a.group];
            b || (b = f.cloneNode(false), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
            var c = e.cloneNode(false);
          } else b = C, c = e.cloneNode(false);
          b.appendChild(c);
          m(a, c);
        });
        h[0].appendChild(C);
        s.$render();
        s.$isEmpty(a) || (b = p.readValue(), (K.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
      }
      var p = l[0], s = l[1], y = k.multiple, B;
      l = 0;
      for (var r = h.children(), A = r.length; l < A; l++) if ("" === r[l].value) {
        B = r.eq(l);
        break;
      }
      var v = !!B, z = F(e.cloneNode(false));
      z.val("?");
      var t, K = c(k.ngOptions, h, d), C = b[0].createDocumentFragment();
      y ? (s.$isEmpty = function (a) {
        return !a || 0 === a.length;
      }, p.writeValue = function (a) {
        t.items.forEach(function (a) {
          a.element.selected = false;
        });
        a && a.forEach(function (a) {
          if (a = t.getOptionFromViewValue(a)) a.element.selected = true;
        });
      }, p.readValue = function () {
        var a = h.val() || [], b = [];
        q(a, function (a) {
          (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
        });
        return b;
      }, K.trackBy && d.$watchCollection(function () {
        if (L(s.$viewValue)) return s.$viewValue.map(function (a) {
          return K.getTrackByValue(a);
        });
      }, function () {
        s.$render();
      })) : (p.writeValue = function (a) {
        var b = t.getOptionFromViewValue(a);
        b ? (h[0].value !== b.selectValue && (z.remove(), v || B.remove(), h[0].value = b.selectValue, b.element.selected = true), b.element.setAttribute("selected", "selected")) : null === a || v ? (z.remove(), v || h.prepend(B), h.val(""), B.prop("selected", true), B.attr("selected", true)) : (v || B.remove(), h.prepend(z), h.val("?"), z.prop("selected", true), z.attr("selected", true));
      }, p.readValue = function () {
        var a = t.selectValueMap[h.val()];
        return a && !a.disabled ? (v || B.remove(), z.remove(), t.getViewValueFromOption(a)) : null;
      }, K.trackBy && d.$watch(function () {
        return K.getTrackByValue(s.$viewValue);
      }, function () {
        s.$render();
      }));
      v ? (B.remove(), a(B)(d), B.removeClass("ng-scope")) : B = F(e.cloneNode(false));
      h.empty();
      n();
      d.$watchCollection(K.getWatchables, n);
    }}};
  }], Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g, e = /^when(Minus)?(.+)$/;
    return {link: function (f, g, h) {
      function k(a) {
        g.text(a || "");
      }
      var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, p = f.$eval(m) || {}, s = {}, w = b.startSymbol(), B = b.endSymbol(), r = w + l + "-" + n + B, z = ca.noop, v;
      q(h, function (a, b) {
        var c = e.exec(b);
        c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]));
      });
      q(p, function (a, d) {
        s[d] = b(a.replace(c, r));
      });
      f.$watch(l, function (b) {
        var c = parseFloat(b), e = isNaN(c);
        e || c in p || (c = a.pluralCat(c - n));
        c === v || e && "number" === typeof v && isNaN(v) || ("function" === typeof a, e = s[c], "undefined" === typeof e ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), z = A, k()) : z = f.$watch(e, k), v = c);
      });
    }};
  }], Je = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = N("ngRepeat"), e = function (a, b, c, d, e, m, n) {
      a[c] = d;
      e && (a[e] = m);
      a.$index = b;
      a.$first = 0 === b;
      a.$last = b === n - 1;
      a.$middle = !(a.$first || a.$last);
      a.$odd = !(a.$even = 0 === (b & 1));
    };
    return {restrict: "A", multiElement: true, transclude: "element", priority: 1e3, terminal: true, $$tlb: true, compile: function (f, g) {
      var h = g.ngRepeat, k = d.$$createComment("end ngRepeat", h), l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
      if (!l) throw c("iexp", h);
      var m = l[1], n = l[2], p = l[3], s = l[4], l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
      if (!l) throw c("iidexp", m);
      var w = l[3] || l[1], y = l[2];
      if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
      var r, z, v, A, t = {$id: Ca};
      s ? r = a(s) : (v = function (a, b) {
        return Ca(b);
      }, A = function (a) {
        return a;
      });
      return function (a, d, f, g, l) {
        r && (z = function (b, c, d) {
          y && (t[y] = b);
          t[w] = c;
          t.$index = d;
          return r(a, t);
        });
        var m = Object.create(null);
        a.$watchCollection(n, function (f) {
          var g, n, r = d[0], s, u = Object.create(null), t, C, F, E, G, D, H;
          p && (a[p] = f);
          if (ta(f)) G = f, n = z || v; else for (H in n = z || A, G = [], f) ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
          t = G.length;
          H = Array(t);
          for (g = 0; g < t; g++) if (C = f === G ? g : G[g], F = f[C], E = n(C, F, g), m[E]) D = m[E], delete m[E], u[E] = D, H[g] = D; else {
            if (u[E]) throw q(H, function (a) {
              a && a.scope && (m[a.id] = a);
            }), c("dupes", h, E, F);
            H[g] = {id: E, scope: void 0, clone: void 0};
            u[E] = true;
          }
          for (s in m) {
            D = m[s];
            E = tb(D.clone);
            b.leave(E);
            if (E[0].parentNode) for (g = 0, n = E.length; g < n; g++) E[g].$$NG_REMOVED = true;
            D.scope.$destroy();
          }
          for (g = 0; g < t; g++) if (C = f === G ? g : G[g], F = f[C], D = H[g], D.scope) {
            s = r;
            do s = s.nextSibling; while (s && s.$$NG_REMOVED);
            D.clone[0] != s && b.move(tb(D.clone), null, r);
            r = D.clone[D.clone.length - 1];
            e(D.scope, g, w, F, y, C, t);
          } else l(function (a, c) {
            D.scope = c;
            var d = k.cloneNode(false);
            a[a.length++] = d;
            b.enter(a, null, r);
            r = d;
            D.clone = a;
            u[D.id] = D;
            e(D.scope, g, w, F, y, C, t);
          });
          m = u;
        });
      };
    }};
  }], Ke = ["$animate", function (a) {
    return {restrict: "A", multiElement: true, link: function (b, d, c) {
      b.$watch(c.ngShow, function (b) {
        a[b ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
      });
    }};
  }], De = ["$animate", function (a) {
    return {restrict: "A", multiElement: true, link: function (b, d, c) {
      b.$watch(c.ngHide, function (b) {
        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
      });
    }};
  }], Le = Ta(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });
      a && b.css(a);
    }, true);
  }), Me = ["$animate", "$compile", function (a, b) {
    return {require: "ngSwitch", controller: ["$scope", function () {
      this.cases = {};
    }], link: function (d, c, e, f) {
      var g = [], h = [], k = [], l = [], m = function (a, b) {
        return function () {
          a.splice(b, 1);
        };
      };
      d.$watch(e.ngSwitch || e.on, function (c) {
        var d, e;
        d = 0;
        for (e = k.length; d < e; ++d) a.cancel(k[d]);
        d = k.length = 0;
        for (e = l.length; d < e; ++d) {
          var s = tb(h[d].clone);
          l[d].$destroy();
          (k[d] = a.leave(s)).then(m(k, d));
        }
        h.length = 0;
        l.length = 0;
        (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
          c.transclude(function (d, e) {
            l.push(e);
            var f = c.element;
            d[d.length++] = b.$$createComment("end ngSwitchWhen");
            h.push({clone: d});
            a.enter(d, f.parent(), f);
          });
        });
      });
    }};
  }], Ne = Ta({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: true, link: function (a, b, d, c, e) {
    c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
    c.cases["!" + d.ngSwitchWhen].push({transclude: e, element: b});
  }}), Oe = Ta({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: true, link: function (a, b, d, c, e) {
    c.cases["?"] = c.cases["?"] || [];
    c.cases["?"].push({transclude: e, element: b});
  }}), Tg = N("ngTransclude"), Qe = ["$compile", function (a) {
    return {restrict: "EAC", terminal: true, compile: function (b) {
      var d = a(b.contents());
      b.empty();
      return function (a, b, f, g, h) {
        function k() {
          d(a, function (a) {
            b.append(a);
          });
        }
        if (!h) throw Tg("orphan", ya(b));
        f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
        f = f.ngTransclude || f.ngTranscludeSlot;
        h(function (a, c) {
          a.length ? b.append(a) : (k(), c.$destroy());
        }, null, f);
        f && !h.isSlotFilled(f) && k();
      };
    }};
  }], qe = ["$templateCache", function (a) {
    return {restrict: "E", terminal: true, compile: function (b, d) {
      "text/ng-template" == d.type && a.put(d.id, b[0].text);
    }};
  }], Ug = {$setViewValue: A, $render: A}, Vg = ["$element", "$scope", function (a, b) {
    var d = this, c = new Ra;
    d.ngModelCtrl = Ug;
    d.unknownOption = F(C.document.createElement("option"));
    d.renderUnknownOption = function (b) {
      b = "? " + Ca(b) + " ?";
      d.unknownOption.val(b);
      a.prepend(d.unknownOption);
      a.val(b);
    };
    b.$on("$destroy", function () {
      d.renderUnknownOption = A;
    });
    d.removeUnknownOption = function () {
      d.unknownOption.parent() && d.unknownOption.remove();
    };
    d.readValue = function () {
      d.removeUnknownOption();
      return a.val();
    };
    d.writeValue = function (b) {
      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", true)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
    };
    d.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Qa(a, '"option value"');
        "" === a && (d.emptyOption = b);
        var g = c.get(a) || 0;
        c.put(a, g + 1);
        d.ngModelCtrl.$render();
        b[0].hasAttribute("selected") && (b[0].selected = true);
      }
    };
    d.removeOption = function (a) {
      var b = c.get(a);
      b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1));
    };
    d.hasOption = function (a) {
      return !!c.get(a);
    };
    d.registerOption = function (a, b, c, h, k) {
      if (h) {
        var l;
        c.$observe("value", function (a) {
          "undefined" !== typeof l && d.removeOption(l);
          l = a;
          d.addOption(a, b);
        });
      } else k ? a.$watch(k, function (a, e) {
        c.$set("value", a);
        e !== a && d.removeOption(e);
        d.addOption(a, b);
      }) : d.addOption(c.value, b);
      b.on("$destroy", function () {
        d.removeOption(c.value);
        d.ngModelCtrl.$render();
      });
    };
  }], re = function () {
    return {restrict: "E", require: ["select", "?ngModel"], controller: Vg, priority: 1, link: {pre: function (a, b, d, c) {
      var e = c[1];
      if (e) {
        var f = c[0];
        f.ngModelCtrl = e;
        b.on("change", function () {
          a.$apply(function () {
            e.$setViewValue(f.readValue());
          });
        });
        if (d.multiple) {
          f.readValue = function () {
            var a = [];
            q(b.find("option"), function (b) {
              b.selected && a.push(b.value);
            });
            return a;
          };
          f.writeValue = function (a) {
            var c = new Ra(a);
            q(b.find("option"), function (a) {
              a.selected = "undefined" !== typeof c.get(a.value);
            });
          };
          var g, h = NaN;
          a.$watch(function () {
            h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());
            h = e.$viewValue;
          });
          e.$isEmpty = function (a) {
            return !a || 0 === a.length;
          };
        }
      }
    }, post: function (a, b, d, c) {
      var e = c[1];
      if (e) {
        var f = c[0];
        e.$render = function () {
          f.writeValue(e.$viewValue);
        };
      }
    }}};
  }, te = ["$interpolate", function (a) {
    return {restrict: "E", priority: 100, compile: function (b, d) {
      if ("undefined" !== typeof d.value) var c = a(d.value, true); else {
        var e = a(b.text(), true);
        e || d.$set("value", b.text());
      }
      return function (a, b, d) {
        var k = b.parent();
        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
      };
    }};
  }], se = ha({restrict: "E", terminal: false}), Ic = function () {
    return {restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
      c && (d.required = true, c.$validators.required = function (a, b) {
        return !d.required || !c.$isEmpty(b);
      }, d.$observe("required", function () {
        c.$validate();
      }));
    }};
  }, Hc = function () {
    return {restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
      if (c) {
        var e, f = d.ngPattern || d.pattern;
        d.$observe("pattern", function (a) {
          "string" === typeof a && 0 < a.length && (a = new RegExp("^" + a + "$"));
          if (a && !a.test) throw N("ngPattern")("noregexp", f, a, ya(b));
          e = a || void 0;
          c.$validate();
        });
        c.$validators.pattern = function (a, b) {
          return c.$isEmpty(b) || "undefined" === typeof e || e.test(b);
        };
      }
    }};
  }, Kc = function () {
    return {restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
      if (c) {
        var e = -1;
        d.$observe("maxlength", function (a) {
          a = parseInt(a, 10);
          e = isNaN(a) ? -1 : a;
          c.$validate();
        });
        c.$validators.maxlength = function (a, b) {
          return 0 > e || c.$isEmpty(b) || b.length <= e;
        };
      }
    }};
  }, Jc = function () {
    return {restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
      if (c) {
        var e = 0;
        d.$observe("minlength", function (a) {
          e = parseInt(a, 10) || 0;
          c.$validate();
        });
        c.$validators.minlength = function (a, b) {
          return c.$isEmpty(b) || b.length >= e;
        };
      }
    }};
  };
  C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(ca), ca.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";
      var b = a.indexOf(".");
      return -1 == b ? 0 : a.length - b - 1;
    }
    a.value("$locale", {DATETIME_FORMATS: {AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", short: "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a"}, NUMBER_FORMATS: {CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: ""}, {gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: ""}]}, id: "en-us", localeID: "en_US", pluralCat: function (a, c) {
      var e = a | 0, f = c;
      void 0 === f && (f = Math.min(b(a), 3));
      Math.pow(10, f);
      return 1 == e && 0 == f ? "one" : "other";
    }});
  }]), F(C.document).ready(function () {
    fe(C.document, Bc);
  }));
}(window));
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
(function (n, t) {
  "use strict";
  function f() {
    function i(t, i, u, f) {
      return function (e, o, s) {
        var h = s.$normalize(i);
        !n[h] || r(o, u) || s[h] || e.$watch(s[t], function (n) {
          n = f ? !n : !!n;
          o.attr(i, n);
        });
      };
    }
    var n = {ariaHidden: true, ariaChecked: true, ariaReadonly: true, ariaDisabled: true, ariaRequired: true, ariaInvalid: true, ariaValue: true, tabindex: true, bindKeypress: true, bindRoleForClick: true};
    this.config = function (i) {
      n = t.extend(n, i);
    };
    this.$get = function () {
      return {config: function (t) {
        return n[t];
      }, $$watchExpr: i};
    };
  }
  var u = t.module("ngAria", ["ng"]).provider("$aria", f), i = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "DETAILS", "SUMMARY"], r = function (n, t) {
    if (t.indexOf(n[0].nodeName) !== -1) return true;
  };
  u.directive("ngShow", ["$aria", function (n) {
    return n.$$watchExpr("ngShow", "aria-hidden", [], true);
  }]).directive("ngHide", ["$aria", function (n) {
    return n.$$watchExpr("ngHide", "aria-hidden", [], false);
  }]).directive("ngValue", ["$aria", function (n) {
    return n.$$watchExpr("ngValue", "aria-checked", i, false);
  }]).directive("ngChecked", ["$aria", function (n) {
    return n.$$watchExpr("ngChecked", "aria-checked", i, false);
  }]).directive("ngReadonly", ["$aria", function (n) {
    return n.$$watchExpr("ngReadonly", "aria-readonly", i, false);
  }]).directive("ngRequired", ["$aria", function (n) {
    return n.$$watchExpr("ngRequired", "aria-required", i, false);
  }]).directive("ngModel", ["$aria", function (n) {
    function f(n) {
      var i = n.type, t = n.role;
      return (i || t) === "checkbox" || t === "menuitemcheckbox" ? "checkbox" : (i || t) === "radio" || t === "menuitemradio" ? "radio" : i === "range" || t === "progressbar" || t === "slider" ? "range" : "";
    }
    return {restrict: "A", require: "ngModel", priority: 200, compile: function (i, r) {
      var e = f(r, i);
      return {pre: function (n, t, i, r) {
        e === "checkbox" && (r.$isEmpty = function (n) {
          return n === false;
        });
      }, post: function (i, r, f, o) {
        function h() {
          return o.$modelValue;
        }
        function c() {
          var n = f.value == o.$viewValue;
          r.attr("aria-checked", n);
        }
        function l() {
          r.attr("aria-checked", !o.$isEmpty(o.$viewValue));
        }
        var s = n.config("tabindex") && !r.attr("tabindex") && (false || !r(r, i));
        switch (e) {
          case "radio":
          case "checkbox":
            !r.attr("role") && r.attr("type") === e && r[0].nodeName !== "INPUT" && r.attr("role", e);
            n.config("ariaChecked") && !r.attr("aria-checked") && (false || !r(r, i)) && i.$watch(h, e === "radio" ? c : l);
            s && r.attr("tabindex", 0);
            break;
          case "range":
            if (!r.attr("role") && r.attr("type") === e && r[0].nodeName !== "INPUT" && r.attr("role", "slider"), n.config("ariaValue")) {
              var a = !r.attr("aria-valuemin") && (f.hasOwnProperty("min") || f.hasOwnProperty("ngMin")), v = !r.attr("aria-valuemax") && (f.hasOwnProperty("max") || f.hasOwnProperty("ngMax")), y = !r.attr("aria-valuenow");
              a && f.$observe("min", function (n) {
                r.attr("aria-valuemin", n);
              });
              v && f.$observe("max", function (n) {
                r.attr("aria-valuemax", n);
              });
              y && i.$watch(h, function (n) {
                r.attr("aria-valuenow", n);
              });
            }
            s && r.attr("tabindex", 0);
        }
        !f.hasOwnProperty("ngRequired") && o.$validators.required && (n.config("ariaRequired") && !r.attr("aria-required") && (false || !r(r, i))) && f.$observe("required", function () {
          r.attr("aria-required", !!f.required);
        });
        n.config("ariaInvalid") && !r.attr("aria-invalid") && (true || !r(r, i)) && i.$watch(function () {
          return o.$invalid && o.$dirty;
        }, function (n) {
          r.attr("aria-invalid", !!n);
        });
      }};
    }};
  }]).directive("ngDisabled", ["$aria", function (n) {
    return n.$$watchExpr("ngDisabled", "aria-disabled", i, false);
  }]).directive("ngMessages", function () {
    return {restrict: "A", require: "?ngMessages", link: function (n, t) {
      t.attr("aria-live") || t.attr("aria-live", "assertive");
    }};
  }).directive("ngClick", ["$aria", "$parse", function (n, t) {
    return {restrict: "A", compile: function (u, f) {
      var e = t(f.ngClick, null, true);
      return function (t, u, f) {
        if (!r(u, i) && (n.config("bindRoleForClick") && !u.attr("role") && u.attr("role", "button"), n.config("tabindex") && !u.attr("tabindex") && u.attr("tabindex", 0), n.config("bindKeypress") && !f.ngKeypress)) u.on("keypress", function (n) {
          function r() {
            e(t, {$event: n});
          }
          var i = n.which || n.keyCode;
          (i === 32 || i === 13) && t.$apply(r);
        });
      };
    }};
  }]).directive("ngDblclick", ["$aria", function (n) {
    return function (t, u) {
      !n.config("tabindex") || u.attr("tabindex") || r(u, i) || u.attr("tabindex", 0);
    };
  }]);
}(window, window.angular));
(function (s, g) {
  "use strict";
  function H(g) {
    var l = [];
    t(l, A).chars(g);
    return l.join("");
  }
  var B = g.$$minErr("$sanitize"), C, l, D, E, q, A, F, t;
  g.module("ngSanitize", []).provider("$sanitize", function () {
    function k(a, e) {
      var b = {}, c = a.split(","), h;
      for (h = 0; h < c.length; h++) b[e ? q(c[h]) : c[h]] = true;
      return b;
    }
    function I(a) {
      for (var e = {}, b = 0, c = a.length; b < c; b++) {
        var h = a[b];
        e[h.name] = h.value;
      }
      return e;
    }
    function G(a) {
      return a.replace(/&/g, "&amp;").replace(J, function (a) {
        var b = a.charCodeAt(0);
        a = a.charCodeAt(1);
        return "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";";
      }).replace(K, function (a) {
        return "&#" + a.charCodeAt(0) + ";";
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function u(a) {
      if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, b = 0, c = e.length; b < c; b++) {
        var h = e[b], d = h.name.toLowerCase();
        if ("xmlns:ns1" === d || 0 === d.lastIndexOf("ns1:", 0)) a.removeAttributeNode(h), b--, c--;
      }
      (e = a.firstChild) && u(e);
      (e = a.nextSibling) && u(e);
    }
    var v = false;
    this.$get = ["$$sanitizeUri", function (a) {
      v && l(w, x);
      return function (e) {
        var b = [];
        F(e, t(b, function (b, h) {
          return !/^unsafe:/.test(a(b, h));
        }));
        return b.join("");
      };
    }];
    this.enableSvg = function (a) {
      return E(a) ? (v = a, this) : v;
    };
    C = g.bind;
    l = g.extend;
    D = g.forEach;
    E = g.isDefined;
    q = g.lowercase;
    A = g.noop;
    F = function (a, e) {
      null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);
      f.innerHTML = a;
      var b = 5;
      do {
        if (0 === b) throw B("uinput");
        b--;
        s.document.documentMode && u(f);
        a = f.innerHTML;
        f.innerHTML = a;
      } while (a !== f.innerHTML);
      for (b = f.firstChild; b;) {
        switch (b.nodeType) {
          case 1:
            e.start(b.nodeName.toLowerCase(), I(b.attributes));
            break;
          case 3:
            e.chars(b.textContent);
        }
        var c;
        if (!(c = b.firstChild) && (1 == b.nodeType && e.end(b.nodeName.toLowerCase()), c = b.nextSibling, !c)) for (; null == c;) {
          b = b.parentNode;
          if (b === f) break;
          c = b.nextSibling;
          1 == b.nodeType && e.end(b.nodeName.toLowerCase());
        }
        b = c;
      }
      for (; b = f.firstChild;) f.removeChild(b);
    };
    t = function (a, e) {
      var b = false, c = C(a, a.push);
      return {start: function (a, d) {
        a = q(a);
        !b && z[a] && (b = a);
        b || true !== w[a] || (c("<"), c(a), D(d, function (b, d) {
          var f = q(d), g = "img" === a && "src" === f || "background" === f;
          true !== m[f] || true === n[f] && !e(b, g) || (c(" "), c(d), c('="'), c(G(b)), c('"'));
        }), c(">"));
      }, end: function (a) {
        a = q(a);
        b || true !== w[a] || true === y[a] || (c("</"), c(a), c(">"));
        a == b && (b = false);
      }, chars: function (a) {
        b || c(G(a));
      }};
    };
    var J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, K = /([^\#-~ |!])/g, y = k("area,br,col,hr,img,wbr"), d = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), r = k("rp,rt"), p = l({}, r, d), d = l({}, d, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")), r = l({}, r, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), x = k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"), z = k("script,style"), w = l({}, y, d, r, p), n = k("background,cite,href,longdesc,src,xlink:href"), p = k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"), r = k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", true), m = l({}, n, r, p), f;
    (function (a) {
      if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert"); else throw B("noinert");
      var e = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");
      1 === e.length ? f = e[0] : (e = a.createElement("html"), f = a.createElement("body"), e.appendChild(f), a.appendChild(e));
    }(s));
  });
  g.module("ngSanitize").filter("linky", ["$sanitize", function (k) {
    var l = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i, q = /^mailto:/i, u = g.$$minErr("linky"), v = g.isDefined, s = g.isFunction, t = g.isObject, y = g.isString;
    return function (d, g, p) {
      function x(a) {
        a && m.push(H(a));
      }
      function z(a, b) {
        var c, d = w(a);
        m.push("<a ");
        for (c in d) m.push(c + '="' + d[c] + '" ');
        !v(g) || "target" in d || m.push('target="', g, '" ');
        m.push('href="', a.replace(/"/g, "&quot;"), '">');
        x(b);
        m.push("</a>");
      }
      if (null == d || "" === d) return d;
      if (!y(d)) throw u("notstring", d);
      for (var w = s(p) ? p : t(p) ? function () {
        return p;
      } : function () {
        return {};
      }, n = d, m = [], f, a; d = n.match(l);) f = d[0], d[2] || d[4] || (f = (d[3] ? "http://" : "mailto:") + f), a = d.index, x(n.substr(0, a)), z(f, d[0].replace(q, "")), n = n.substring(a + d[0].length);
      x(n);
      return k(m.join(""));
    };
  }]);
}(window, window.angular));
(function (R, B) {
  "use strict";
  function Da(a, b, c) {
    if (!a) throw Ma("areq", b || "?", c || "required");
    return a;
  }
  function Ea(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    Y(a) && (a = a.join(" "));
    Y(b) && (b = b.join(" "));
    return a + " " + b;
  }
  function Na(a) {
    var b = {};
    a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
    return b;
  }
  function Z(a, b, c) {
    var d = "";
    a = Y(a) ? a : a && G(a) && a.length ? a.split(/\s+/) : [];
    s(a, function (a, l) {
      a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b);
    });
    return d;
  }
  function Oa(a) {
    if (a instanceof F) switch (a.length) {
      case 0:
        return a;
      case 1:
        if (1 === a[0].nodeType) return a;
        break;
      default:
        return F(ta(a));
    }
    if (1 === a.nodeType) return F(a);
  }
  function ta(a) {
    if (!a[0]) return a;
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (1 == c.nodeType) return c;
    }
  }
  function Pa(a, b, c) {
    s(b, function (b) {
      a.addClass(b, c);
    });
  }
  function Qa(a, b, c) {
    s(b, function (b) {
      a.removeClass(b, c);
    });
  }
  function V(a) {
    return function (b, c) {
      c.addClass && (Pa(a, b, c.addClass), c.addClass = null);
      c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null);
    };
  }
  function oa(a) {
    a = a || {};
    if (!a.$$prepared) {
      var b = a.domOperation || P;
      a.domOperation = function () {
        a.$$domOperationFired = true;
        b();
        b = P;
      };
      a.$$prepared = true;
    }
    return a;
  }
  function ha(a, b) {
    Fa(a, b);
    Ga(a, b);
  }
  function Fa(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }
  function Ga(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }
  function W(a, b, c) {
    var d = b.options || {};
    c = c.options || {};
    var e = (d.addClass || "") + " " + (c.addClass || ""), l = (d.removeClass || "") + " " + (c.removeClass || "");
    a = Ra(a.attr("class"), e, l);
    c.preparationClasses && (d.preparationClasses = $(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    e = d.domOperation !== P ? d.domOperation : null;
    ua(d, c);
    e && (d.domOperation = e);
    d.addClass = a.addClass ? a.addClass : null;
    d.removeClass = a.removeClass ? a.removeClass : null;
    b.addClass = d.addClass;
    b.removeClass = d.removeClass;
    return d;
  }
  function Ra(a, b, c) {
    function d(a) {
      G(a) && (a = a.split(" "));
      var b = {};
      s(a, function (a) {
        a.length && (b[a] = true);
      });
      return b;
    }
    var e = {};
    a = d(a);
    b = d(b);
    s(b, function (a, b) {
      e[b] = 1;
    });
    c = d(c);
    s(c, function (a, b) {
      e[b] = 1 === e[b] ? null : -1;
    });
    var l = {addClass: "", removeClass: ""};
    s(e, function (b, c) {
      var d, e;
      1 === b ? (d = "addClass", e = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", e = a[c] || a[c + "-add"]);
      e && (l[d].length && (l[d] += " "), l[d] += c);
    });
    return l;
  }
  function y(a) {
    return a instanceof F ? a[0] : a;
  }
  function Sa(a, b, c) {
    var d = "";
    b && (d = Z(b, "ng-", true));
    c.addClass && (d = $(d, Z(c.addClass, "-add")));
    c.removeClass && (d = $(d, Z(c.removeClass, "-remove")));
    d.length && (c.preparationClasses = d, a.addClass(d));
  }
  function pa(a, b) {
    var c = b ? "-" + b + "s" : "";
    la(a, [ma, c]);
    return [ma, c];
  }
  function va(a, b) {
    var c = b ? "paused" : "", d = aa + "PlayState";
    la(a, [d, c]);
    return [d, c];
  }
  function la(a, b) {
    a.style[b[0]] = b[1];
  }
  function $(a, b) {
    return a ? b ? a + " " + b : a : b;
  }
  function Ha(a, b, c) {
    var d = Object.create(null), e = a.getComputedStyle(b) || {};
    s(c, function (a, b) {
      var c = e[a];
      if (c) {
        var g = c.charAt(0);
        if ("-" === g || "+" === g || 0 <= g) c = Ta(c);
        0 === c && (c = null);
        d[b] = c;
      }
    });
    return d;
  }
  function Ta(a) {
    var b = 0;
    a = a.split(/\s*,\s*/);
    s(a, function (a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
      a = parseFloat(a) || 0;
      b = b ? Math.max(a, b) : a;
    });
    return b;
  }
  function Ia(a, b) {
    var c = S, d = a + "s";
    b ? c += "Duration" : d += " linear all";
    return [c, d];
  }
  function Ja() {
    var a = Object.create(null);
    return {flush: function () {
      a = Object.create(null);
    }, count: function (b) {
      return (b = a[b]) ? b.total : 0;
    }, get: function (b) {
      return (b = a[b]) && b.value;
    }, put: function (b, c) {
      a[b] ? a[b].total++ : a[b] = {total: 1, value: c};
    }};
  }
  function Ka(a, b, c) {
    s(c, function (c) {
      a[c] = xa(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }
  var S, ya, aa, za;
  void 0 === R.ontransitionend && void 0 !== R.onwebkittransitionend ? (S = "WebkitTransition", ya = "webkitTransitionEnd transitionend") : (S = "transition", ya = "transitionend");
  void 0 === R.onanimationend && void 0 !== R.onwebkitanimationend ? (aa = "WebkitAnimation", za = "webkitAnimationEnd animationend") : (aa = "animation", za = "animationend");
  var qa = aa + "Delay", Aa = aa + "Duration", ma = S + "Delay", La = S + "Duration", Ma = B.$$minErr("ng"), Ua = {transitionDuration: La, transitionDelay: ma, transitionProperty: S + "Property", animationDuration: Aa, animationDelay: qa, animationIterationCount: aa + "IterationCount"}, Va = {transitionDuration: La, transitionDelay: ma, animationDuration: Aa, animationDelay: qa}, Ba, ua, s, Y, xa, ea, Ca, ba, G, J, F, P;
  B.module("ngAnimate", [], function () {
    P = B.noop;
    Ba = B.copy;
    ua = B.extend;
    F = B.element;
    s = B.forEach;
    Y = B.isArray;
    G = B.isString;
    ba = B.isObject;
    J = B.isUndefined;
    xa = B.isDefined;
    Ca = B.isFunction;
    ea = B.isElement;
  }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return {restrict: "A", transclude: "element", terminal: true, priority: 600, link: function (b, d, e, l, n) {
      var I, g;
      b.$watchCollection(e.ngAnimateSwap || e.for, function (e) {
        I && a.leave(I);
        g && (g.$destroy(), g = null);
        if (e || 0 === e) g = b.$new(), n(g, function (b) {
          I = b;
          a.enter(b, null, d);
        });
      });
    }};
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return {link: function (b, c, d) {
      function e(a) {
        c.data("$$ngAnimateChildren", "on" === a || "true" === a);
      }
      var l = d.ngAnimateChildren;
      G(l) && 0 === l.length ? c.data("$$ngAnimateChildren", true) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e));
    }};
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);
      c();
    }
    function c() {
      if (d.length) {
        for (var b = d.shift(), n = 0; n < b.length; n++) b[n]();
        e || a(function () {
          e || c();
        });
      }
    }
    var d, e;
    d = b.queue = [];
    b.waitUntilQuiet = function (b) {
      e && e();
      e = a(function () {
        e = null;
        b();
        c();
      });
    };
    return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;
      a = a.split(" ");
      var b = Object.create(null);
      s(a, function (a) {
        b[a] = true;
      });
      return b;
    }
    function c(a, c) {
      if (a && c) {
        var d = b(c);
        return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }
    function d(a, b, c, d) {
      return l[a].some(function (a) {
        return a(b, c, d);
      });
    }
    function e(a, b) {
      var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length;
      return b ? c && d : c || d;
    }
    var l = this.rules = {skip: [], cancel: [], join: []};
    l.join.push(function (a, b, c) {
      return !b.structural && e(b);
    });
    l.skip.push(function (a, b, c) {
      return !b.structural && !e(b);
    });
    l.skip.push(function (a, b, c) {
      return "leave" == c.event && b.structural;
    });
    l.skip.push(function (a, b, c) {
      return c.structural && 2 === c.state && !b.structural;
    });
    l.cancel.push(function (a, b, c) {
      return c.structural && b.structural;
    });
    l.cancel.push(function (a, b, c) {
      return 2 === c.state && b.structural;
    });
    l.cancel.push(function (a, b, d) {
      if (d.structural) return false;
      a = b.addClass;
      b = b.removeClass;
      var e = d.addClass;
      d = d.removeClass;
      return J(a) && J(b) || J(e) && J(d) ? false : c(a, d) || c(b, e);
    });
    this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, l, C, Wa, Q, t, H, T) {
      function O() {
        var a = false;
        return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = true;
            b();
          });
        };
      }
      function x(a, b, c) {
        var f = y(b), d = y(a), N = [];
        (a = h[c]) && s(a, function (a) {
          w.call(a.node, f) ? N.push(a.callback) : "leave" === c && w.call(a.node, d) && N.push(a.callback);
        });
        return N;
      }
      function r(a, b, c) {
        var f = ta(b);
        return a.filter(function (a) {
          return !(a.node === f && (!c || a.callback === c));
        });
      }
      function p(a, h, v) {
        function r(c, f, d, h) {
          sa(function () {
            var c = x(T, a, f);
            c.length ? b(function () {
              s(c, function (b) {
                b(a, d, h);
              });
              "close" !== d || a[0].parentNode || ra.off(a);
            }) : "close" !== d || a[0].parentNode || ra.off(a);
          });
          c.progress(f, d, h);
        }
        function k(b) {
          var c = a, f = m;
          f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null);
          f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null);
          E(a, m);
          ha(a, m);
          m.domOperation();
          A.complete(!b);
        }
        var m = Ba(v), p, T;
        if (a = Oa(a)) p = y(a), T = a.parent();
        var m = oa(m), A = new Q, sa = O();
        Y(m.addClass) && (m.addClass = m.addClass.join(" "));
        m.addClass && !G(m.addClass) && (m.addClass = null);
        Y(m.removeClass) && (m.removeClass = m.removeClass.join(" "));
        m.removeClass && !G(m.removeClass) && (m.removeClass = null);
        m.from && !ba(m.from) && (m.from = null);
        m.to && !ba(m.to) && (m.to = null);
        if (!p) return y(a) === y(b), A;
        v = [p.className, m.addClass, m.removeClass].join(" ");
        if (!Xa(v)) return y(a) === y(b), A;
        var g = 0 <= ["enter", "move", "leave"].indexOf(h), w = l[0].hidden, t = !f || w || N.get(p);
        v = !t && z.get(p) || {};
        var H = !!v.state;
        t || H && 1 == v.state || (t = !M(a, T, h));
        if (t) return w && r(A, h, "start"), y(a) === y(b), w && r(A, h, "close"), A;
        g && K(a);
        w = {structural: g, element: a, event: h, addClass: m.addClass, removeClass: m.removeClass, close: k, options: m, runner: A};
        if (H) {
          if (d("skip", a, w, v)) {
            if (2 === v.state) return y(a) === y(b), A;
            W(a, v, w);
            return v.runner;
          }
          if (d("cancel", a, w, v)) if (2 === v.state) v.runner.end(); else if (v.structural) v.close(); else return W(a, v, w), v.runner; else if (d("join", a, w, v)) if (2 === v.state) W(a, w, {}); else return Sa(a, g ? h : null, m), h = w.event = v.event, m = W(a, v, w), v.runner;
        } else W(a, w, {});
        (H = w.structural) || (H = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || e(w));
        if (!H) return y(a) === y(b), ka(a), A;
        var C = (v.counter || 0) + 1;
        w.counter = C;
        L(a, 1, w);
        c.$$postDigest(function () {
          var b = z.get(p), c = !b, b = b || {}, f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));
          if (c || b.counter !== C || !f) {
            c && (E(a, m), ha(a, m));
            if (c || g && b.event !== h) m.domOperation(), A.end();
            f || ka(a);
          } else h = !b.structural && e(b, true) ? "setClass" : b.event, L(a, 2), b = Wa(a, h, b.options), A.setHost(b), r(A, h, "start", {}), b.done(function (b) {
            y(!b) === y(b);
            (b = z.get(p)) && b.counter === C && ka(y(a));
            r(A, h, "close", {});
          });
        });
        return A;
      }
      function K(a) {
        a = y(a).querySelectorAll("[data-ng-animate]");
        s(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate")), c = z.get(a);
          if (c) switch (b) {
            case 2:
              c.runner.end();
            case 1:
              z.remove(a);
          }
        });
      }
      function ka(a) {
        a = y(a);
        a.removeAttribute("data-ng-animate");
        z.remove(a);
      }
      function M(a, b, c) {
        c = F(l[0].body);
        var f = y(a) === y(c) || "HTML" === a[0].nodeName, d = y(a) === y(g), h = false, r, e = N.get(y(a));
        (a = F.data(a[0], "$ngAnimatePin")) && (b = a);
        for (b = y(b); b;) {
          d || (d = y(b) === y(g));
          if (1 !== b.nodeType) break;
          a = z.get(b) || {};
          if (!h) {
            var p = N.get(b);
            if (true === p && false !== e) {
              e = true;
              break;
            } else false === p && (e = false);
            h = a.structural;
          }
          if (J(r) || true === r) a = F.data(b, "$$ngAnimateChildren"), xa(a) && (r = a);
          if (h && false === r) break;
          f || (f = y(b) === y(c));
          if (f && d) break;
          if (!d && (a = F.data(b, "$ngAnimatePin"))) {
            b = y(a);
            continue;
          }
          b = b.parentNode;
        }
        return (!h || r) && true !== e && d && f;
      }
      function L(a, b, c) {
        c = c || {};
        c.state = b;
        a = y(a);
        a.setAttribute("data-ng-animate", b);
        c = (b = z.get(a)) ? ua(b, c) : c;
        z.put(a, c);
      }
      var z = new C, N = new C, f = null, A = c.$watch(function () {
        return 0 === t.totalPendingRequests;
      }, function (a) {
        a && (A(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === f && (f = true);
          });
        }));
      }), h = Object.create(null), sa = a.classNameFilter(), Xa = sa ? function (a) {
        return sa.test(a);
      } : function () {
        return true;
      }, E = V(H), w = R.Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      }, ra = {on: function (a, b, c) {
        var f = ta(b);
        h[a] = h[a] || [];
        h[a].push({node: f, callback: c});
        F(b).on("$destroy", function () {
          z.get(f) || ra.off(a, b, c);
        });
      }, off: function (a, b, c) {
        if (1 !== arguments.length || G(arguments[0])) {
          var f = h[a];
          f && (h[a] = 1 === arguments.length ? null : r(f, b, c));
        } else for (f in b = arguments[0], h) h[f] = r(h[f], b);
      }, pin: function (a, b) {
        Da(ea(a), "element", "not an element");
        Da(ea(b), "parentElement", "not an element");
        a.data("$ngAnimatePin", b);
      }, push: function (a, b, c, f) {
        c = c || {};
        c.domOperation = f;
        return p(a, b, c);
      }, enabled: function (a, b) {
        var c = arguments.length;
        if (0 === c) b = !!f; else if (ea(a)) {
          var d = y(a);
          1 === c ? b = !N.get(d) : N.put(d, !b);
        } else b = f = !!a;
        return b;
      }};
      return ra;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    var b = this.drivers = [];
    this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, e, l, n, I) {
      function g(a) {
        function b(a) {
          if (a.processed) return a;
          a.processed = true;
          var d = a.domNode, p = d.parentNode;
          e.put(d, a);
          for (var K; p;) {
            if (K = e.get(p)) {
              K.processed || (K = b(K));
              break;
            }
            p = p.parentNode;
          }
          (K || c).children.push(a);
          return a;
        }
        var c = {children: []}, d, e = new n;
        for (d = 0; d < a.length; d++) {
          var g = a[d];
          e.put(g.domNode, a[d] = {domNode: g.domNode, fn: g.fn, children: []});
        }
        for (d = 0; d < a.length; d++) b(a[d]);
        return function (a) {
          var b = [], c = [], d;
          for (d = 0; d < a.children.length; d++) c.push(a.children[d]);
          a = c.length;
          var e = 0, k = [];
          for (d = 0; d < c.length; d++) {
            var g = c[d];
            0 >= a && (a = e, e = 0, b.push(k), k = []);
            k.push(g.fn);
            g.children.forEach(function (a) {
              e++;
              c.push(a);
            });
            a--;
          }
          k.length && b.push(k);
          return b;
        }(c);
      }
      var u = [], C = V(a);
      return function (n, Q, t) {
        function H(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
          var b = [];
          s(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");
            c && c.length && b.push(a);
          });
          return b;
        }
        function T(a) {
          var b = [], c = {};
          s(a, function (a, d) {
            var h = y(a.element), e = 0 <= ["enter", "move"].indexOf(a.event), h = a.structural ? H(h) : [];
            if (h.length) {
              var k = e ? "to" : "from";
              s(h, function (a) {
                var b = a.getAttribute("ng-animate-ref");
                c[b] = c[b] || {};
                c[b][k] = {animationID: d, element: F(a)};
              });
            } else b.push(a);
          });
          var d = {}, e = {};
          s(c, function (c, k) {
            var r = c.from, p = c.to;
            if (r && p) {
              var z = a[r.animationID], g = a[p.animationID], A = r.animationID.toString();
              if (!e[A]) {
                var n = e[A] = {structural: true, beforeStart: function () {
                  z.beforeStart();
                  g.beforeStart();
                }, close: function () {
                  z.close();
                  g.close();
                }, classes: O(z.classes, g.classes), from: z, to: g, anchors: []};
                n.classes.length ? b.push(n) : (b.push(z), b.push(g));
              }
              e[A].anchors.push({out: r.element, in: p.element});
            } else r = r ? r.animationID : p.animationID, p = r.toString(), d[p] || (d[p] = true, b.push(a[r]));
          });
          return b;
        }
        function O(a, b) {
          a = a.split(" ");
          b = b.split(" ");
          for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d];
            if ("ng-" !== e.substring(0, 3)) for (var r = 0; r < b.length; r++) if (e === b[r]) {
              c.push(e);
              break;
            }
          }
          return c.join(" ");
        }
        function x(a) {
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = e.get(b[c])(a);
            if (d) return d;
          }
        }
        function r(a, b) {
          function c(a) {
            (a = a.data("$$animationRunner")) && a.setHost(b);
          }
          a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
        }
        function p() {
          var a = n.data("$$animationRunner");
          !a || "leave" === Q && t.$$domOperationFired || a.end();
        }
        function K(b) {
          n.off("$destroy", p);
          n.removeData("$$animationRunner");
          C(n, t);
          ha(n, t);
          t.domOperation();
          L && a.removeClass(n, L);
          n.removeClass("ng-animate");
          k.complete(!b);
        }
        t = oa(t);
        var ka = 0 <= ["enter", "move", "leave"].indexOf(Q), k = new l({end: function () {
          K();
        }, cancel: function () {
          K(true);
        }});
        if (!b.length) return K(), k;
        n.data("$$animationRunner", k);
        var M = Ea(n.attr("class"), Ea(t.addClass, t.removeClass)), L = t.tempClasses;
        L && (M += " " + L, t.tempClasses = null);
        var z;
        ka && (z = "ng-" + Q + "-prepare", a.addClass(n, z));
        u.push({element: n, classes: M, event: Q, structural: ka, options: t, beforeStart: function () {
          n.addClass("ng-animate");
          L && a.addClass(n, L);
          z && (a.removeClass(n, z), z = null);
        }, close: K});
        n.on("$destroy", p);
        if (1 < u.length) return k;
        d.$$postDigest(function () {
          var a = [];
          s(u, function (b) {
            b.element.data("$$animationRunner") ? a.push(b) : b.close();
          });
          u.length = 0;
          var b = T(a), c = [];
          s(b, function (a) {
            c.push({domNode: y(a.from ? a.from.element : a.element), fn: function () {
              a.beforeStart();
              var b, c = a.close;
              if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                var d = x(a);
                d && (b = d.start);
              }
              b ? (b = b(), b.done(function (a) {
                c(!a);
              }), r(a, b)) : c();
            }});
          });
          I(g(c));
        });
        return k;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = Ja(), c = Ja();
    this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, l, n, I, g, u, C) {
      function B(a, b) {
        var c = a.parentNode;
        return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++O)) + "-" + a.getAttribute("class") + "-" + b;
      }
      function Q(r, p, g, n) {
        var k;
        0 < b.count(g) && (k = c.get(g), k || (p = Z(p, "-stagger"), e.addClass(r, p), k = Ha(a, r, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(r, p), c.put(g, k)));
        return k || {};
      }
      function t(a) {
        x.push(a);
        u.waitUntilQuiet(function () {
          b.flush();
          c.flush();
          for (var a = I(), d = 0; d < x.length; d++) x[d](a);
          x.length = 0;
        });
      }
      function H(c, e, g) {
        e = b.get(g);
        e || (e = Ha(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));
        b.put(g, e);
        c = e;
        g = c.animationDelay;
        e = c.transitionDelay;
        c.maxDelay = g && e ? Math.max(g, e) : g || e;
        c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
        return c;
      }
      var T = V(e), O = 0, x = [];
      return function (a, c) {
        function d() {
          k();
        }
        function u() {
          k(true);
        }
        function k(b) {
          if (!(w || F && O)) {
            w = true;
            O = false;
            f.$$skipPreparationClasses || e.removeClass(a, ga);
            e.removeClass(a, ea);
            va(h, false);
            pa(h, false);
            s(x, function (a) {
              h.style[a[0]] = "";
            });
            T(a, f);
            ha(a, f);
            Object.keys(A).length && s(A, function (a, b) {
              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
            });
            if (f.onDone) f.onDone();
            fa && fa.length && a.off(fa.join(" "), z);
            var c = a.data("$$animateCss");
            c && (n.cancel(c[0].timer), a.removeData("$$animateCss"));
            G && G.complete(!b);
          }
        }
        function M(a) {
          q.blockTransition && pa(h, a);
          q.blockKeyframeAnimation && va(h, !!a);
        }
        function L() {
          G = new l({end: d, cancel: u});
          t(P);
          k();
          return {$$willAnimate: false, start: function () {
            return G;
          }, end: d};
        }
        function z(a) {
          a.stopPropagation();
          var b = a.originalEvent || a;
          a = b.$manualTimeStamp || Date.now();
          b = parseFloat(b.elapsedTime.toFixed(3));
          Math.max(a - W, 0) >= R && b >= m && (F = true, k());
        }
        function N() {
          function b() {
            if (!w) {
              M(false);
              s(x, function (a) {
                h.style[a[0]] = a[1];
              });
              T(a, f);
              e.addClass(a, ea);
              if (q.recalculateTimingStyles) {
                na = h.className + " " + ga;
                ia = B(h, na);
                D = H(h, na, ia);
                ca = D.maxDelay;
                J = Math.max(ca, 0);
                m = D.maxDuration;
                if (0 === m) {
                  k();
                  return;
                }
                q.hasTransitions = 0 < D.transitionDuration;
                q.hasAnimations = 0 < D.animationDuration;
              }
              q.applyAnimationDelay && (ca = "boolean" !== typeof f.delay && (0 === f.delay || null != f.delay) ? parseFloat(f.delay) : ca, J = Math.max(ca, 0), D.animationDelay = ca, da = [qa, ca + "s"], x.push(da), h.style[da[0]] = da[1]);
              R = 1e3 * J;
              V = 1e3 * m;
              if (f.easing) {
                var d, g = f.easing;
                q.hasTransitions && (d = S + "TimingFunction", x.push([d, g]), h.style[d] = g);
                q.hasAnimations && (d = aa + "TimingFunction", x.push([d, g]), h.style[d] = g);
              }
              D.transitionDuration && fa.push(ya);
              D.animationDuration && fa.push(za);
              W = Date.now();
              var p = R + 1.5 * V;
              d = W + p;
              var g = a.data("$$animateCss") || [], N = true;
              if (g.length) {
                var l = g[0];
                (N = d > l.expectedEndTime) ? n.cancel(l.timer) : g.push(k);
              }
              N && (p = n(c, p, false), g[0] = {timer: p, expectedEndTime: d}, g.push(k), a.data("$$animateCss", g));
              if (fa.length) a.on(fa.join(" "), z);
              f.to && (f.cleanupStyles && Ka(A, h, Object.keys(f.to)), Ga(a, f));
            }
          }
          function c() {
            var b = a.data("$$animateCss");
            if (b) {
              for (var d = 1; d < b.length; d++) b[d]();
              a.removeData("$$animateCss");
            }
          }
          if (!w) if (h.parentNode) {
            var d = function (a) {
              if (F) O && a && (O = false, k()); else if (O = !a, D.animationDuration) if (a = va(h, O), O) x.push(a); else {
                var b = x, c = b.indexOf(a);
                0 <= a && b.splice(c, 1);
              }
            }, g = 0 < ba && (D.transitionDuration && 0 === X.transitionDuration || D.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);
            g ? n(b, Math.floor(g * ba * 1e3), false) : b();
            v.resume = function () {
              d(true);
            };
            v.pause = function () {
              d(false);
            };
          } else k();
        }
        var f = c || {};
        f.$$prepared || (f = oa(Ba(f)));
        var A = {}, h = y(a);
        if (!h || !h.parentNode || !C.enabled()) return L();
        var x = [], I = a.attr("class"), E = Na(f), w, O, F, G, v, J, R, m, V, W, fa = [];
        if (0 === f.duration || !g.animations && !g.transitions) return L();
        var ja = f.event && Y(f.event) ? f.event.join(" ") : f.event, $ = "", U = "";
        ja && f.structural ? $ = Z(ja, "ng-", true) : ja && ($ = ja);
        f.addClass && (U += Z(f.addClass, "-add"));
        f.removeClass && (U.length && (U += " "), U += Z(f.removeClass, "-remove"));
        f.applyClassesEarly && U.length && T(a, f);
        var ga = [$, U].join(" ").trim(), na = I + " " + ga, ea = Z(ga, "-active"), I = E.to && 0 < Object.keys(E.to).length;
        if (!(0 < (f.keyframeStyle || "").length || I || ga)) return L();
        var ia, X;
        0 < f.stagger ? (E = parseFloat(f.stagger), X = {transitionDelay: E, animationDelay: E, transitionDuration: 0, animationDuration: 0}) : (ia = B(h, na), X = Q(h, ga, ia, Va));
        f.$$skipPreparationClasses || e.addClass(a, ga);
        f.transitionStyle && (E = [S, f.transitionStyle], la(h, E), x.push(E));
        0 <= f.duration && (E = 0 < h.style[S].length, E = Ia(f.duration, E), la(h, E), x.push(E));
        f.keyframeStyle && (E = [aa, f.keyframeStyle], la(h, E), x.push(E));
        var ba = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;
        (ja = 0 === ba) && !f.skipBlocking && pa(h, 9999);
        var D = H(h, na, ia), ca = D.maxDelay;
        J = Math.max(ca, 0);
        m = D.maxDuration;
        var q = {};
        q.hasTransitions = 0 < D.transitionDuration;
        q.hasAnimations = 0 < D.animationDuration;
        q.hasTransitionAll = q.hasTransitions && "all" == D.transitionProperty;
        q.applyTransitionDuration = I && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);
        q.applyAnimationDuration = f.duration && q.hasAnimations;
        q.applyTransitionDelay = (0 === f.delay || null != f.delay) && (q.applyTransitionDuration || q.hasTransitions);
        q.applyAnimationDelay = (0 === f.delay || null != f.delay) && q.hasAnimations;
        q.recalculateTimingStyles = 0 < U.length;
        if (q.applyTransitionDuration || q.applyAnimationDuration) m = f.duration ? parseFloat(f.duration) : m, q.applyTransitionDuration && (q.hasTransitions = true, D.transitionDuration = m, E = 0 < h.style[S + "Property"].length, x.push(Ia(m, E))), q.applyAnimationDuration && (q.hasAnimations = true, D.animationDuration = m, x.push([Aa, m + "s"]));
        if (0 === m && !q.recalculateTimingStyles) return L();
        if (null != f.delay) {
          var da;
          "boolean" !== typeof f.delay && (da = parseFloat(f.delay), J = Math.max(da, 0));
          q.applyTransitionDelay && x.push([ma, da + "s"]);
          q.applyAnimationDelay && x.push([qa, da + "s"]);
        }
        null == f.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ja);
        R = 1e3 * J;
        V = 1e3 * m;
        f.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration);
        f.from && (f.cleanupStyles && Ka(A, h, Object.keys(f.from)), Fa(a, f));
        q.blockTransition || q.blockKeyframeAnimation ? M(m) : f.skipBlocking || pa(h, false);
        return {$$willAnimate: true, end: d, start: function () {
          if (!w) return v = {end: d, cancel: u, resume: null, pause: null}, G = new l(v), t(N), G;
        }};
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");
    this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, l, n, I) {
      function u(a, b) {
        G(a) && (a = a.split(" "));
        G(b) && (b = b.split(" "));
        return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }
      function C(c, e, n) {
        function l(a) {
          var b = {}, c = y(a).getBoundingClientRect();
          s(["width", "height", "top", "left"], function (a) {
            var d = c[a];
            switch (a) {
              case "top":
                d += t.scrollTop;
                break;
              case "left":
                d += t.scrollLeft;
            }
            b[a] = Math.floor(d) + "px";
          });
          return b;
        }
        function p() {
          var c = (n.attr("class") || "").replace(/\bng-\S+\b/g, ""), d = u(c, k), c = u(k, c), d = a(C, {to: l(n), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: true});
          return d.$$willAnimate ? d : null;
        }
        function I() {
          C.remove();
          e.removeClass("ng-animate-shim");
          n.removeClass("ng-animate-shim");
        }
        var C = F(y(e).cloneNode(true)), k = (C.attr("class") || "").replace(/\bng-\S+\b/g, "");
        e.addClass("ng-animate-shim");
        n.addClass("ng-animate-shim");
        C.addClass("ng-anchor");
        H.append(C);
        var M;
        c = function () {
          var c = a(C, {addClass: "ng-anchor-out", delay: true, from: l(e)});
          return c.$$willAnimate ? c : null;
        }();
        if (!c && (M = p(), !M)) return I();
        var L = c || M;
        return {start: function () {
          function a() {
            c && c.end();
          }
          var b, c = L.start();
          c.done(function () {
            c = null;
            if (!M && (M = p())) return c = M.start(), c.done(function () {
              c = null;
              I();
              b.complete();
            }), c;
            I();
            b.complete();
          });
          return b = new d({end: a, cancel: a});
        }};
      }
      function B(a, b, c, e) {
        var g = Q(a, P), n = Q(b, P), l = [];
        s(e, function (a) {
          (a = C(c, a.out, a.in)) && l.push(a);
        });
        if (g || n || 0 !== l.length) return {start: function () {
          function a() {
            s(b, function (a) {
              a.end();
            });
          }
          var b = [];
          g && b.push(g.start());
          n && b.push(n.start());
          s(l, function (a) {
            b.push(a.start());
          });
          var c = new d({end: a, cancel: a});
          d.all(b, function (a) {
            c.complete(a);
          });
          return c;
        }};
      }
      function Q(c) {
        var d = c.element, e = c.options || {};
        c.structural && (e.event = c.event, e.structural = true, e.applyClassesEarly = true, "leave" === c.event && (e.onDone = e.domOperation));
        e.preparationClasses && (e.event = $(e.event, e.preparationClasses));
        c = a(d, e);
        return c.$$willAnimate ? c : null;
      }
      if (!l.animations && !l.transitions) return P;
      var t = I[0].body;
      c = y(e);
      var H = F(c.parentNode && 11 === c.parentNode.nodeType || t.contains(c) ? c : t);
      V(n);
      return function (a) {
        return a.from && a.to ? B(a.from, a.to, a.classes, a.anchors) : Q(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function e(c) {
        c = Y(c) ? c : c.split(" ");
        for (var d = [], e = {}, l = 0; l < c.length; l++) {
          var s = c[l], B = a.$$registeredAnimations[s];
          B && !e[s] && (d.push(b.get(B)), e[s] = true);
        }
        return d;
      }
      var l = V(d);
      return function (a, b, d, u) {
        function C() {
          u.domOperation();
          l(a, u);
        }
        function B(a, b, d, e, f) {
          switch (d) {
            case "animate":
              b = [b, e.from, e.to, f];
              break;
            case "setClass":
              b = [b, F, G, f];
              break;
            case "addClass":
              b = [b, F, f];
              break;
            case "removeClass":
              b = [b, G, f];
              break;
            default:
              b = [b, f];
          }
          b.push(e);
          if (a = a.apply(a, b)) if (Ca(a.start) && (a = a.start()), a instanceof c) a.done(f); else if (Ca(a)) return a;
          return P;
        }
        function y(a, b, d, e, f) {
          var g = [];
          s(e, function (e) {
            var k = e[f];
            k && g.push(function () {
              var e, f, g = false, h = function (a) {
                g || (g = true, (f || P)(a), e.complete(!a));
              };
              e = new c({end: function () {
                h();
              }, cancel: function () {
                h(true);
              }});
              f = B(k, a, b, d, function (a) {
                h(false === a);
              });
              return e;
            });
          });
          return g;
        }
        function t(a, b, d, e, f) {
          var g = y(a, b, d, e, f);
          if (0 === g.length) {
            var h, k;
            "beforeSetClass" === f ? (h = y(a, "removeClass", d, e, "beforeRemoveClass"), k = y(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = y(a, "removeClass", d, e, "removeClass"), k = y(a, "addClass", d, e, "addClass"));
            h && (g = g.concat(h));
            k && (g = g.concat(k));
          }
          if (0 !== g.length) return function (a) {
            var b = [];
            g.length && s(g, function (a) {
              b.push(a());
            });
            b.length ? c.all(b, a) : a();
            return function (a) {
              s(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }
        var H = false;
        3 === arguments.length && ba(d) && (u = d, d = null);
        u = oa(u);
        d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));
        var F = u.addClass, G = u.removeClass, x = e(d), r, p;
        if (x.length) {
          var K, J;
          "leave" == b ? (J = "leave", K = "afterLeave") : (J = "before" + b.charAt(0).toUpperCase() + b.substr(1), K = b);
          "enter" !== b && "move" !== b && (r = t(a, b, u, x, J));
          p = t(a, b, u, x, K);
        }
        if (r || p) {
          var k;
          return {$$willAnimate: true, end: function () {
            k ? k.end() : (H = true, C(), ha(a, u), k = new c, k.complete(true));
            return k;
          }, start: function () {
            function b(c) {
              H = true;
              C();
              ha(a, u);
              k.complete(c);
            }
            if (k) return k;
            k = new c;
            var d, e = [];
            r && e.push(function (a) {
              d = r(a);
            });
            e.length ? e.push(function (a) {
              C();
              a(true);
            }) : C();
            p && e.push(function (a) {
              d = p(a);
            });
            k.setHost({end: function () {
              H || ((d || P)(void 0), b(void 0));
            }, cancel: function () {
              H || ((d || P)(true), b(true));
            }});
            c.chain(e, b);
            return k;
          }};
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");
    this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      return function (a) {
        if (a.from && a.to) {
          var b = a(a.from.element, a.from.event, a.from.classes, a.from.options), n = a(a.to.element, a.to.event, a.to.classes, a.to.options);
          if (b || n) return {start: function () {
            function a() {
              return function () {
                s(d, function (a) {
                  a.end();
                });
              };
            }
            var d = [];
            b && d.push(b.start());
            n && d.push(n.start());
            c.all(d, function (a) {
              e.complete(a);
            });
            var e = new c({end: a(), cancel: a()});
            return e;
          }};
        } else return a(a.element, a.event, a.classes, a.options);
      };
    }];
  }]);
}(window, window.angular));
"use strict";
angular.module("ngLocale", [], ["$provide", function (n) {
  var t = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
  n.value("$locale", {DATETIME_FORMATS: {AMPMS: ["לפנה״צ", "אחה״צ"], DAY: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], MONTH: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], SHORTDAY: ["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], SHORTMONTH: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"], fullDate: "EEEE, d בMMMM y", longDate: "d בMMMM y", medium: "d בMMM yyyy HH:mm:ss", mediumDate: "d בMMM yyyy", mediumTime: "HH:mm:ss", short: "dd/MM/yy HH:mm", shortDate: "dd/MM/yy", shortTime: "HH:mm"}, NUMBER_FORMATS: {CURRENCY_SYM: "₪", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{gSize: 3, lgSize: 3, macFrac: 0, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: ""}, {gSize: 3, lgSize: 3, macFrac: 0, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-", negSuf: " ¤", posPre: "", posSuf: " ¤"}]}, id: "he-il", pluralCat: function (n) {
    return n == 1 ? t.ONE : t.OTHER;
  }});
}]);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return R(new (R(function () {}, {prototype: a})), b);
  }
  function e(a) {
    return Q(arguments, function (b) {
      b !== a && Q(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }
  function f(a, b) {
    var c = [];
    for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;
      c.push(a.path[d]);
    }
    return c;
  }
  function g(a) {
    if (Object.keys) return Object.keys(a);
    var b = [];
    return Q(a, function (a, c) {
      b.push(c);
    }), b;
  }
  function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
    var c = a.length >>> 0, d = Number(arguments[2]) || 0;
    for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) if (d in a && a[d] === b) return d;
    return -1;
  }
  function i(a, b, c, d) {
    var e, i = f(c, d), j = {}, k = [];
    for (var l in i) if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
    return R({}, j, b);
  }
  function j(a, b, c) {
    if (!c) {
      c = [];
      for (var d in a) c.push(d);
    }
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      if (a[f] != b[f]) return false;
    }
    return true;
  }
  function k(a, b) {
    var c = {};
    return Q(a, function (a) {
      c[a] = b[a];
    }), c;
  }
  function l(a) {
    var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    return Q(c, function (c) {
      c in a && (b[c] = a[c]);
    }), b;
  }
  function m(a) {
    var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
    return b;
  }
  function n(a, b) {
    var c = P(a), d = c ? [] : {};
    return Q(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }
  function o(a, b) {
    var c = P(a) ? [] : {};
    return Q(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }
  function p(a, b) {
    var d = 1, f = 2, i = {}, j = [], k = i, l = R(a.when(i), {$$promises: i, $$values: i});
    this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
          if (s[c] = d, N(a)) q.push(c, [function () {
            return b.get(a);
          }], j); else {
            var e = b.annotate(a);
            Q(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }
          r.pop(), s[c] = f;
        }
      }
      if (!O(i)) throw new Error("'invocables' must be an object");
      var p = g(i || {}), q = [], r = [], s = {};
      return Q(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || true, delete r.$$inheritedValues, n.resolve(t));
        }
        function i(a) {
          r.$$failure = a, n.reject(a);
        }
        function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }
          function k() {
            if (!L(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }
          var l = a.defer(), m = 0;
          Q(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }
        if (O(d) && d.then && d.$$promises && g === c && (g = f, f = d, d = null), d) {
          if (!O(d)) throw new Error("'locals' must be an object");
        } else d = k;
        if (f) {
          if (!(O(f) && f.then && f.$$promises)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = l;
        var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = R({}, d), u = 1 + q.length / 3, v = false;
        if (L(f.$$failure)) return i(f.$$failure), r;
        f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), R(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }
  function q(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return L(a.template) ? this.fromString(a.template, b) : L(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : L(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return M(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return M(c) && (c = c(d)), null == c ? null : a.get(c, {cache: b, headers: {Accept: "text/html"}}).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || {params: b});
    };
  }
  function r(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];
      if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
      if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
      return p[b] = new U.Param(b, c, d, e), p[b];
    }
    function g(a, b, c, d) {
      var e = ["", ""], f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
      if (!b) return f;
      switch (c) {
        case false:
          e = ["(", ")" + (d ? "?" : "")];
          break;
        case true:
          f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
          break;
        default:
          e = ["(" + c + "|", ")?"];
      }
      return f + "" + b + "";
    }
    function h(e, f) {
      var g, h, i, j, k;
      return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = U.type(h) || d(U.type("string"), {pattern: new RegExp(h, b.caseInsensitive ? "i" : c)})), {id: g, regexp: h, segment: i, type: j, cfg: k};
    }
    b = R({params: {}}, O(b) ? b : {});
    var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", m = 0, n = this.segments = [], o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new U.ParamSet, q = [];
    this.source = a;
    for (var r, s, t; (i = j.exec(a)) && (r = h(i, false), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
    t = a.substring(m);
    var u = t.indexOf("?");
    if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);
      if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) r = h(i, true), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
    } else this.sourcePath = a, this.sourceSearch = "";
    l += g(t) + (b.strict === false ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }
  function s(a) {
    R(this, a);
  }
  function t() {
    function a(a) {
      return null != a ? a.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : a;
    }
    function e(a) {
      return null != a ? a.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : a;
    }
    function f() {
      return {strict: p, caseInsensitive: m};
    }
    function j() {
      for (; w.length;) {
        var a = w.shift();
        if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
        b.extend(u[a.name], l.invoke(a.def));
      }
    }
    function k(a) {
      R(this, a || {});
    }
    U = this;
    var l, m = false, p = true, q = false, u = {}, v = true, w = [], x = {string: {encode: a, decode: e, is: function (a) {
      return null == a || !L(a) || "string" == typeof a;
    }, pattern: /[^\/]*/}, int: {encode: a, decode: function (a) {
      return parseInt(a, 10);
    }, is: function (a) {
      return L(a) && this.decode(a.toString()) === a;
    }, pattern: /\d+/}, bool: {encode: function (a) {
      return a ? 1 : 0;
    }, decode: function (a) {
      return 0 !== parseInt(a, 10);
    }, is: function (a) {
      return a === true || a === false;
    }, pattern: /0|1/}, date: {encode: function (a) {
      return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
    }, decode: function (a) {
      if (this.is(a)) return a;
      var b = this.capture.exec(a);
      return b ? new Date(b[1], b[2] - 1, b[3]) : c;
    }, is: function (a) {
      return a instanceof Date && !isNaN(a.valueOf());
    }, equals: function (a, b) {
      return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
    }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}, json: {encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/}, any: {encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/}};
    t.$$getDefaultValue = function (a) {
      if (!(M(a.value) || P(a.value) && M(a.value[a.value.length - 1]))) return a.value;
      if (!l) throw new Error("Injectable functions cannot be called at configuration time");
      return l.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return L(a) && (m = a), m;
    }, this.strictMode = function (a) {
      return L(a) && (p = a), p;
    }, this.defaultSquashPolicy = function (a) {
      if (!L(a)) return q;
      if (a !== true && a !== false && !N(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
      return q = a, a;
    }, this.compile = function (a, b) {
      return new r(a, R(f(), b));
    }, this.isMatcher = function (a) {
      if (!O(a)) return false;
      var b = true;
      return Q(r.prototype, function (c, d) {
        M(c) && (b = b && L(a[d]) && M(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!L(b)) return u[a];
      if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
      return u[a] = new s(R({name: a}, b)), c && (w.push({name: a, def: c}), v || j()), this;
    }, Q(x, function (a, b) {
      u[b] = new s(R({name: b}, a));
    }), u = d(u, {}), this.$get = ["$injector", function (a) {
      return l = a, v = false, j(), Q(x, function (a, b) {
        u[b] || (u[b] = new s(a));
      }), this;
    }], this.Param = function (a, d, e, f) {
      function j(a) {
        var b = O(a) ? g(a) : [], c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
        return c && (a = {value: a}), a.$$fn = M(a.value) || P(a.value) && M(a.value[a.value.length - 1]) ? a.value : function () {
          return a.value;
        }, a;
      }
      function k(c, d, e) {
        if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");
        return d ? d : c.type ? b.isString(c.type) ? u[c.type] : c.type instanceof s ? c.type : new s(c.type) : "config" === e ? u.any : u.string;
      }
      function m() {
        var b = {array: "search" === f ? "auto" : false}, c = a.match(/\[\]$/) ? {array: true} : {};
        return R(b, c, e).array;
      }
      function p(a, b) {
        var c = a.squash;
        if (!b || c === false) return false;
        if (!L(c) || null == c) return q;
        if (c === true || N(c)) return c;
        throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }
      function r(a, b, d, e) {
        var f, g, i = [{from: "", to: d || b ? c : ""}, {from: null, to: d || b ? c : ""}];
        return f = P(a.replace) ? a.replace : [], N(e) && f.push({from: e, to: c}), g = o(f, function (a) {
          return a.from;
        }), n(i, function (a) {
          return -1 === h(g, a.from);
        }).concat(f);
      }
      function t() {
        if (!l) throw new Error("Injectable functions cannot be called at configuration time");
        var a = l.invoke(e.$$fn);
        if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
        return a;
      }
      function v(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }
        function c(a) {
          var c = o(n(x.replace, b(a)), function (a) {
            return a.to;
          });
          return c.length ? c[0] : a;
        }
        return a = c(a), L(a) ? x.type.$normalize(a) : t();
      }
      var x = this;
      e = j(e), d = k(e, d, f);
      var y = m();
      d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
      var z = e.value !== c, A = p(e, z), B = r(e, y, z, A);
      R(this, {id: a, type: d, location: f, array: y, squash: A, replace: B, isOptional: z, value: v, dynamic: c, config: e, toString: w});
    }, k.prototype = {$$new: function () {
      return d(this, R(new k, {$$parent: this}));
    }, $$keys: function () {
      for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
      return b.reverse(), Q(b, function (b) {
        Q(g(b), function (b) {
          -1 === h(a, b) && -1 === h(d, b) && a.push(b);
        });
      }), a;
    }, $$values: function (a) {
      var b = {}, c = this;
      return Q(c.$$keys(), function (d) {
        b[d] = c[d].value(a && a[d]);
      }), b;
    }, $$equals: function (a, b) {
      var c = true, d = this;
      return Q(d.$$keys(), function (e) {
        var f = a && a[e], g = b && b[e];
        d[e].type.equals(f, g) || (c = false);
      }), c;
    }, $$validates: function (a) {
      var d, e, f, g, h, i = this.$$keys();
      for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
        if (g = e.type.$normalize(f), !e.type.is(g)) return false;
        if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return false;
      }
      return true;
    }, $$parent: c}, this.ParamSet = k;
  }
  function u(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
      return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }
    function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }
    function g(a, b, c) {
      if (!c) return false;
      var d = a.invoke(b, b, {$match: c});
      return L(d) ? d : true;
    }
    function h(d, e, f, g, h) {
      function m(a, b, c) {
        return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a;
      }
      function n(a) {
        function b(a) {
          var b = a(f, d);
          return b ? (N(b) && d.replace().url(b), true) : false;
        }
        if (!a || !a.defaultPrevented) {
          p && d.url() === p;
          p = c;
          var e, g = j.length;
          for (e = 0; g > e; e++) if (b(j[e])) return;
          k && b(k);
        }
      }
      function o() {
        return i = i || e.$on("$locationChangeSuccess", n);
      }
      var p, q = g.baseHref(), r = d.url();
      return l || o(), {sync: function () {
        n();
      }, listen: function () {
        return o();
      }, update: function (a) {
        return a ? void (r = d.url()) : void (d.url() !== r && (d.url(r), d.replace()));
      }, push: function (a, b, e) {
        var f = a.format(b || {});
        null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
      }, href: function (c, e, f) {
        if (!c.validates(e)) return null;
        var g = a.html5Mode();
        b.isObject(g) && (g = g.enabled), g = g && h.history;
        var i = c.format(e);
        if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;
        var j = !g && i ? "/" : "", k = d.port();
        return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
      }};
    }
    var i, j = [], k = null, l = false;
    this.rule = function (a) {
      if (!M(a)) throw new Error("'rule' must be a function");
      return j.push(a), this;
    }, this.otherwise = function (a) {
      if (N(a)) {
        var b = a;
        a = function () {
          return b;
        };
      } else if (!M(a)) throw new Error("'rule' must be a function");
      return k = a, this;
    }, this.when = function (a, b) {
      var c, h = N(b);
      if (N(a) && (a = d.compile(a)), !h && !M(b) && !P(b)) throw new Error("invalid 'handler' in when()");
      var i = {matcher: function (a, b) {
        return h && (c = d.compile(b), b = ["$match", function (a) {
          return c.format(a);
        }]), R(function (c, d) {
          return g(c, b, a.exec(d.path(), d.search()));
        }, {prefix: N(a.prefix) ? a.prefix : ""});
      }, regex: function (a, b) {
        if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
        return h && (c = b, b = ["$match", function (a) {
          return f(c, a);
        }]), R(function (c, d) {
          return g(c, b, a.exec(d.path()));
        }, {prefix: e(a)});
      }}, j = {matcher: d.isMatcher(a), regex: a instanceof RegExp};
      for (var k in j) if (j[k]) return this.rule(i[k](a, b));
      throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = true), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"];
  }
  function v(a, e) {
    function m(a, b) {
      if (!a) return c;
      var d = N(a), e = d ? a : a.name, g = 0 === e.indexOf(".") || 0 === e.indexOf("^");
      if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");
        b = m(b);
        for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) if ("" !== h[i] || 0 !== i) {
          if ("^" !== h[i]) break;
          if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
          k = k.parent;
        } else k = b;
        h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }
      var l = z[e];
      return !l || !d && (d || l !== a && l.self !== a) ? c : l;
    }
    function n(a, b) {
      A[a] || (A[a] = []), A[a].push(b);
    }
    function p(a) {
      for (var b = A[a] || []; b.length;) q(b.shift());
    }
    function q(b) {
      b = d(b, {self: b, resolve: b.resolve || {}, toString: function () {
        return this.name;
      }});
      var c = b.name;
      if (!N(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
      if (z.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");
      var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : N(b.parent) ? b.parent : O(b.parent) && N(b.parent.name) ? b.parent.name : "";
      if (e && !z[e]) return n(e, b.self);
      for (var f in C) M(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
      return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {inherit: true, location: false});
      }]), p(c), b;
    }
    function s(a) {
      for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
      return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length ? false : c.join("") === b.join("");
    }
    function t(a, b) {
      return N(a) && !L(b) ? C[a] : M(b) && N(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this;
    }
    function v(a, e, f, h, l, n, p, q, t) {
      function u(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);
        if (g.defaultPrevented) return p.update(), D;
        if (!g.retry) return null;
        if (f.$retry) return p.update(), E;
        var h = y.transition = e.when(g.retry);
        return h.then(function () {
          return h !== y.transition ? A : (b.options.$retry = true, y.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return D;
        }), p.update(), h;
      }
      function v(a, c, d, g, i, j) {
        function m() {
          var c = [];
          return Q(a.views, function (d, e) {
            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
            g.$template = [function () {
              return f.load(e, {view: d, locals: i.globals, params: n, notify: j.notify}) || "";
            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
              if (M(d.controllerProvider) || P(d.controllerProvider)) {
                var f = b.extend({}, g, i.globals);
                c.$$controller = h.invoke(d.controllerProvider, null, f);
              } else c.$$controller = d.controller;
              c.$$state = a, c.$$controllerAs = d.controllerAs, i[e] = c;
            }));
          }), e.all(c).then(function () {
            return i.globals;
          });
        }
        var n = d ? c : k(a.params.$$keys(), c), o = {$stateParams: n};
        i.resolve = l.resolve(a.resolve, o, i.resolve, a);
        var p = [i.resolve.then(function (a) {
          i.globals = a;
        })];
        return g && p.push(g), e.all(p).then(m).then(function (a) {
          return i;
        });
      }
      var A = e.reject(new Error("transition superseded")), C = e.reject(new Error("transition prevented")), D = e.reject(new Error("transition aborted")), E = e.reject(new Error("transition failed"));
      return x.locals = {resolve: null, globals: {$stateParams: {}}}, y = {params: {}, current: x.self, $current: x, transition: null}, y.reload = function (a) {
        return y.transitionTo(y.current, n, {reload: a || true, inherit: false, notify: true});
      }, y.go = function (a, b, c) {
        return y.transitionTo(a, b, R({inherit: true, relative: y.$current}, c));
      }, y.transitionTo = function (b, c, f) {
        c = c || {}, f = R({location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false}, f || {});
        var g, j = y.$current, l = y.params, o = j.path, q = m(b, f.relative), r = c["#"];
        if (!L(q)) {
          var s = {to: b, toParams: c, options: f}, t = (O(s) ? j.self = s : j.self.name = s, q(j.self), this);
          if (t) return t;
          if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !L(q)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");
            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }
        if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
        if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
        c = q.params.$$values(c), b = q;
        var z = b.path, D = 0, F = z[D], G = x.locals, H = [];
        if (f.reload) {
          if (N(f.reload) || O(f.reload)) {
            if (O(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
            var I = f.reload === true ? o[0] : m(f.reload);
            if (f.reload && !I) throw new Error("No such reload state '" + (N(f.reload) ? f.reload : f.reload.name) + "'");
            for (; F && F === o[D] && F !== I;) G = H[D] = F.locals, D++, F = z[D];
          }
        } else for (; F && F === o[D] && F.ownParams.$$equals(c, l);) G = H[D] = F.locals, D++, F = z[D];
        if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, S(y.params, n), S(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {$$avoidResync: true, replace: "replace" === f.location}), p.update(true)), y.transition = null, e.when(y.current);
        if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == y.transition && p.update(), C;
        for (var J = e.when(G), K = D; K < z.length; K++, F = z[K]) G = H[K] = d(G), J = v(F, c, F === b, J, G, f);
        var M = y.transition = J.then(function () {
          var d, e, g;
          if (y.transition !== M) return A;
          for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          for (d = D; d < z.length; d++) e = z[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          return y.transition !== M ? A : (y.$current = b, y.current = b.self, y.params = c, S(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {$$avoidResync: true, replace: "replace" === f.location}), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(true), y.current);
        }, function (d) {
          return y.transition !== M ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d));
        });
        return M;
      }, y.is = function (a, b, d) {
        d = R({relative: y.$current}, d || {});
        var e = m(a, d.relative);
        return L(e) ? y.$current !== e ? false : b ? j(e.params.$$values(b), n) : true : c;
      }, y.includes = function (a, b, d) {
        if (d = R({relative: y.$current}, d || {}), N(a) && a.indexOf("*") > -1) {
          if (!s(a)) return false;
          a = y.$current.name;
        }
        var e = m(a, d.relative);
        return L(e) ? L(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : true : false : c;
      }, y.href = function (a, b, d) {
        d = R({lossy: true, inherit: true, absolute: false, relative: y.$current}, d || {});
        var e = m(a, d.relative);
        if (!L(e)) return null;
        d.inherit && (b = i(n, b || {}, y.$current, e));
        var f = e && d.lossy ? e.navigable : e;
        return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {absolute: d.absolute}) : null;
      }, y.get = function (a, b) {
        if (0 === arguments.length) return o(g(z), function (a) {
          return z[a].self;
        });
        var c = m(a, b || y.$current);
        return c && c.self ? c.self : null;
      }, y;
    }
    function w(a, b, c, d, e, f) {
      function g(a, b, c) {
        var e = a.params.$$keys().filter(d), f = l.apply({}, [a.params].concat(e)), g = new U.ParamSet(f);
        return g.$$equals(b, c);
      }
      return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === false && g(c, d, b)) ? true : void 0;
    }
    var x, y, z = {}, A = {}, B = "abstract", C = {parent: function (a) {
      if (L(a.parent) && a.parent) return m(a.parent);
      var b = /^(.+)\.[^.]+$/.exec(a.name);
      return b ? m(b[1]) : x;
    }, data: function (a) {
      return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data;
    }, url: function (a) {
      var b = a.url, c = {params: a.params || {}};
      if (N(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
      if (!b || e.isMatcher(b)) return b;
      throw new Error("Invalid url '" + b + "' in state '" + a + "'");
    }, navigable: function (a) {
      return a.url ? a : a.parent ? a.parent.navigable : null;
    }, ownParams: function (a) {
      var b = a.url && a.url.params || new U.ParamSet;
      return Q(a.params || {}, function (a, c) {
        b[c] || (b[c] = new U.Param(c, null, a, "config"));
      }), b;
    }, params: function (a) {
      var b = l(a.ownParams, a.ownParams.$$keys());
      return a.parent && a.parent.params ? R(a.parent.params.$$new(), b) : new U.ParamSet;
    }, views: function (a) {
      var b = {};
      return Q(L(a.views) ? a.views : {"": a}, function (c, d) {
        d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c;
      }), b;
    }, path: function (a) {
      return a.parent ? a.parent.path.concat(a) : [];
    }, includes: function (a) {
      var b = a.parent ? R({}, a.parent.includes) : {};
      return b[a.name] = true, b;
    }, $delegates: {}};
    x = q({name: "", url: "^", views: null, abstract: true}), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }
  function w() {
    function a(a, b) {
      return {load: function (a, c) {
        var d, e = {template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}};
        return c = R(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d;
      }};
    }
    this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }
  function x() {
    var a = false;
    this.useAnchorScroll = function () {
      a = true;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        return c(function () {
          a[0].scrollIntoView();
        }, 0, false);
      };
    }];
  }
  function y(a, c, d, e) {
    function f() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (b) {
          return null;
        }
      };
    }
    function g(a, c) {
      function d(a) {
        return 1 === V && W >= 4 ? !!j.enabled(a) : 1 === V && W >= 2 ? !!j.enabled() : !!i;
      }
      var e = {enter: function (a, b, c) {
        b.after(a), c();
      }, leave: function (a, b) {
        a.remove(), b();
      }};
      if (a.noanimation) return e;
      if (j) return {enter: function (a, c, f) {
        d(a) ? b.version.minor > 2 ? j.enter(a, null, c).then(f) : j.enter(a, null, c, f) : e.enter(a, c, f);
      }, leave: function (a, c) {
        d(a) ? b.version.minor > 2 ? j.leave(a).then(c) : j.leave(a, c) : e.leave(a, c);
      }};
      if (i) {
        var f = i && i(c, a);
        return {enter: function (a, b, c) {
          f.enter(a, null, b), c();
        }, leave: function (a, b) {
          f.leave(a), b();
        }};
      }
      return e;
    }
    var h = f(), i = h("$animator"), j = h("$animate"), k = {restrict: "ECA", terminal: true, priority: 400, transclude: "element", compile: function (c, f, h) {
      return function (c, f, i) {
        function j() {
          function a() {
            b && b.remove(), c && c.$destroy();
          }
          var b = l, c = n;
          c && (c._willBeDestroyed = true), m ? (r.leave(m, function () {
            a(), l = null;
          }), l = m) : (a(), l = null), m = null, n = null;
        }
        function k(g) {
          var k, l = A(c, i, f, e), s = l && a.$current && a.$current.locals[l];
          if ((g || s !== o) && !c._willBeDestroyed) {
            k = c.$new(), o = a.$current.locals[l], k.$emit("$viewContentLoading", l);
            var t = h(k, function (a) {
              r.enter(a, f, function () {
                n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a);
              }), j();
            });
            m = t, n = k, n.$emit("$viewContentLoaded", l), n.$eval(p);
          }
        }
        var l, m, n, o, p = i.onload || "", q = i.autoscroll, r = g(i, c);
        c.$on("$stateChangeSuccess", function () {
          k(false);
        }), k(true);
      };
    }};
    return k;
  }
  function z(a, b, c, d) {
    return {restrict: "ECA", priority: -400, compile: function (e) {
      var f = e.html();
      return function (e, g, h) {
        var i = c.$current, j = A(e, h, g, d), k = i && i.locals[j];
        if (k) {
          g.data("$uiView", {name: j, state: k.$$state}), g.html(k.$template ? k.$template : f);
          var l = a(g.contents());
          if (k.$$controller) {
            k.$scope = e, k.$element = g;
            var m = b(k.$$controller, k);
            k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m);
          }
          l(e);
        }
      };
    }};
  }
  function A(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
    return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }
  function B(a, b) {
    var c, d = a.match(/^\s*({[^}]*})\s*$/);
    if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
    return {state: c[1], paramExpr: c[3] || null};
  }
  function C(a) {
    var b = a.parent().inheritedData("$uiView");
    return b && b.state && b.state.name ? b.state : void 0;
  }
  function D(a) {
    var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")), c = "FORM" === a[0].nodeName;
    return {attr: c ? "action" : b ? "xlink:href" : "href", isAnchor: "A" === a.prop("tagName").toUpperCase(), clickable: !c};
  }
  function E(a, b, c, d, e) {
    return function (f) {
      var g = f.which || f.button, h = e();
      if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
        var i = c(function () {
          b.go(h.state, h.params, h.options);
        });
        f.preventDefault();
        var j = d.isAnchor && !h.href ? 1 : 0;
        f.preventDefault = function () {
          j-- <= 0 && c.cancel(i);
        };
      }
    };
  }
  function F(a, b) {
    return {relative: C(a) || b.$current, inherit: true};
  }
  function G(a, c) {
    return {restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (d, e, f, g) {
      var h = B(f.uiSref, a.current.name), i = {state: h.state, href: null, params: null}, j = D(e), k = g[1] || g[0];
      i.options = R(F(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
      var l = function (c) {
        c && (i.params = b.copy(c)), i.href = a.href(h.state, i.params, i.options), k && k.$$addStateInfo(h.state, i.params), null !== i.href && f.$set(j.attr, i.href);
      };
      h.paramExpr && (d.$watch(h.paramExpr, function (a) {
        a !== i.params && l(a);
      }, true), i.params = b.copy(d.$eval(h.paramExpr))), l(), j.clickable && e.bind("click", E(e, a, c, j, function () {
        return i;
      }));
    }};
  }
  function H(a, b) {
    return {restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (c, d, e, f) {
      function g(b) {
        l.state = b[0], l.params = b[1], l.options = b[2], l.href = a.href(l.state, l.params, l.options), i && i.$$addStateInfo(l.state, l.params), l.href && e.$set(h.attr, l.href);
      }
      var h = D(d), i = f[1] || f[0], j = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null], k = "[" + j.map(function (a) {
        return a || "null";
      }).join(", ") + "]", l = {state: null, params: null, options: null, href: null};
      c.$watch(k, g, true), g(c.$eval(k)), h.clickable && d.bind("click", E(d, a, b, h, function () {
        return l;
      }));
    }};
  }
  function I(a, b, c) {
    return {restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
      function g(b, c, e) {
        var f = a.get(b, C(d)), g = h(b, c);
        p.push({state: f || {name: b}, params: c, hash: g}), q[g] = e;
      }
      function h(a, c) {
        if (!N(a)) throw new Error("state should be a string");
        return O(c) ? a + T(c) : (c = b.$eval(c), O(c) ? a + T(c) : a);
      }
      function i() {
        for (var a = 0; a < p.length; a++) a.includes(p[a].state.name, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), a.is(p[a].state.name, p[a].params) ? j(d, n) : k(d, n);
      }
      function j(a, b) {
        f(function () {
          a.addClass(b);
        });
      }
      function k(a, b) {
        a.removeClass(b);
      }
      var n, o, p = [], q = {};
      n = c(e.uiSrefActiveEq || "", false)(b);
      try {
        o = b.$eval(e.uiSrefActive);
      } catch (r) {}
      o = o || c(e.uiSrefActive || "", false)(b), O(o) && Q(o, function (c, d) {
        if (N(c)) {
          var e = B(c, a.current.name);
          g(e.state, b.$eval(e.paramExpr), d);
        }
      }), this.$$addStateInfo = function (a, b) {
        O(o) && p.length > 0 || (g(a, b, o), i());
      }, b.$on("$stateChangeSuccess", i), i();
    }]};
  }
  function J(a) {
    return b.$stateful = true, b;
  }
  function K(a) {
    return b.$stateful = true, b;
  }
  var L = b.isDefined, M = b.isFunction, N = b.isString, O = b.isObject, P = b.isArray, Q = b.forEach, R = b.extend, S = b.copy, T = b.toJson;
  b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
  var U;
  r.prototype.concat = function (a, b) {
    var c = {caseInsensitive: U.caseInsensitive(), strict: U.strictMode(), squash: U.defaultSquashPolicy()};
    return new r(this.sourcePath + a + this.sourceSearch, R(c, b), this);
  }, r.prototype.toString = function () {
    return this.source;
  }, r.prototype.exec = function (a, b) {
    function c(a) {
      var d = a.split("").reverse().join("").split(/-(?!\\)/), e = o(d, b);
      return o(e, c).reverse();
    }
    var d = this.regexp.exec(a);
    if (!d) return null;
    b = b || {};
    var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
    if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
    var l, m;
    for (e = 0; j > e; e++) {
      for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
      m && l.array === true && (m = c(m)), L(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }
    for (; i > e; e++) {
      for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
      L(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }
    return k;
  }, r.prototype.parameters = function (a) {
    return L(a) ? this.params[a] || null : this.$$paramNames;
  }, r.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, r.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    a = a || {};
    var c = this.segments, d = this.parameters(), e = this.params;
    if (!this.validates(a)) return null;
    var f, g = false, h = c.length - 1, i = d.length, j = c[0];
    for (f = 0; i > f; f++) {
      var k = h > f, l = d[f], m = e[l], n = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), n), q = p ? m.squash : false, r = m.type.encode(n);
      if (k) {
        var s = c[f + 1], t = f + 1 === h;
        if (q === false) null != r && (j += P(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s; else if (q === true) {
          var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
          j += s.match(u)[1];
        } else N(q) && (j += q + s);
        t && m.squash === true && "/" === j.slice(-1) && (j = j.slice(0, -1));
      } else {
        if (null == r || p && q !== false) continue;
        if (P(r) || (r = [r]), 0 === r.length) continue;
        r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = true;
      }
    }
    return j;
  }, s.prototype.is = function (a, b) {
    return true;
  }, s.prototype.encode = function (a, b) {
    return a;
  }, s.prototype.decode = function (a, b) {
    return a;
  }, s.prototype.equals = function (a, b) {
    return a == b;
  }, s.prototype.$subPattern = function () {
    var a = this.pattern.toString();
    return a.substr(1, a.length - 2);
  }, s.prototype.pattern = /.*/, s.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, s.prototype.$normalize = function (a) {
    return this.is(a) ? a : this.decode(a);
  }, s.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }
      function e(a) {
        return P(a) ? a : L(a) ? [a] : [];
      }
      function f(a) {
        switch (a.length) {
          case 0:
            return c;
          case 1:
            return "auto" === b ? a[0] : a;
          default:
            return a;
        }
      }
      function h(a, b) {
        return function (c) {
          if (P(c) && 0 === c.length) return c;
          c = e(c);
          var d = o(c, a);
          return b === true ? 0 === n(d, g).length : f(d);
        };
      }
      function i(a) {
        return function (b, c) {
          var d = e(b), f = e(c);
          if (d.length !== f.length) return false;
          for (var g = 0; g < d.length; g++) if (!a(d[g], f[g])) return false;
          return true;
        };
      }
      this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), true), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b;
    }
    if (!a) return this;
    if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
    return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {}]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
    return {};
  }).provider("$state", v), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x);
  var V = b.version.major, W = b.version.minor;
  y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), G.$inject = ["$state", "$timeout"], H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", G).directive("uiSrefActive", I).directive("uiSrefActiveEq", I).directive("uiState", H), J.$inject = ["$state"], K.$inject = ["$state"], b.module("ui.router.state").filter("isState", J).filter("includedByState", K);
}(window, window.angular);
(function () {
  "use strict";
  angular.module("angular-loading-bar", ["cfp.loadingBarInterceptor"]);
  angular.module("chieffancypants.loadingBar", ["cfp.loadingBarInterceptor"]);
  angular.module("cfp.loadingBarInterceptor", ["cfp.loadingBar"]).config(["$httpProvider", function (n) {
    var t = ["$q", "$cacheFactory", "$timeout", "$rootScope", "cfpLoadingBar", function (t, i, r, u, f) {
      function c() {
        r.cancel(h);
        f.complete();
        o = 0;
        e = 0;
      }
      function s(t) {
        var u, e = i.get("$http"), f = n.defaults, r;
        return ((t.cache || f.cache) && t.cache !== false && (t.method === "GET" || t.method === "JSONP") && (u = angular.isObject(t.cache) ? t.cache : angular.isObject(f.cache) ? f.cache : e), r = u !== undefined ? u.get(t.url) !== undefined : false, t.cached !== undefined && r !== t.cached) ? t.cached : (t.cached = r, r);
      }
      var e = 0, o = 0, l = f.latencyThreshold, h;
      return {request: function (n) {
        return n.ignoreLoadingBar || s(n) || (u.$broadcast("cfpLoadingBar:loading", {url: n.url}), e === 0 && (h = r(function () {
          f.start();
        }, l)), e++, f.set(o / e)), n;
      }, response: function (n) {
        return n.config.ignoreLoadingBar || s(n.config) || (o++, u.$broadcast("cfpLoadingBar:loaded", {url: n.config.url, result: n}), o >= e ? c() : f.set(o / e)), n;
      }, responseError: function (n) {
        return n.config.ignoreLoadingBar || s(n.config) || (o++, u.$broadcast("cfpLoadingBar:loaded", {url: n.config.url, result: n}), o >= e ? c() : f.set(o / e)), t.reject(n);
      }};
    }];
    n.interceptors.push(t);
  }]);
  angular.module("cfp.loadingBar", []).provider("cfpLoadingBar", function () {
    this.includeSpinner = true;
    this.includeBar = true;
    this.latencyThreshold = 100;
    this.startSize = 0.02;
    this.parentSelector = angular.element("#loader-container") ? "#loader-container" : "body";
    this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    this.loadingBarTemplate = '<div id="loading-bar"><div class="bar" aria-valuemin="0" aria-valuemax="100" role="progressbar"><div class="peg"></div></div></div>';
    this.$get = ["$injector", "$document", "$timeout", "$rootScope", function (n, t, i, r) {
      function g() {
        u || (u = n.get("$animate"));
        var o = t.find(w).eq(0);
        (i.cancel(h), f) || (r.$broadcast("cfpLoadingBar:started"), f = true, k && u.enter(s, o), b && u.enter(a, o), e(d), $(this.parentSelector).attr("aria-busy", true));
      }
      function e(n) {
        if (f) {
          var t = n * 100 + "%";
          l.css("width", t);
          l.attr("aria-valuenow", (n * 100).toFixed());
          c = n;
          i.cancel(v);
          v = i(function () {
            y();
          }, 250);
        }
      }
      function y() {
        var t, n, i;
        c >= 1 || (t = 0, n = c, t = n >= 0 && n < 0.25 ? (Math.random() * 3 + 3) / 100 : n >= 0.25 && n < 0.65 ? Math.random() * 3 / 100 : n >= 0.65 && n < 0.9 ? Math.random() / 50 : n >= 0.9 && n < 0.99 ? 0.005 : 0, i = c + t, e(i));
      }
      function p() {
        c = 0;
        f = false;
      }
      function nt() {
        $(this.parentSelector).attr("aria-busy", false);
        u || (u = n.get("$animate"));
        r.$broadcast("cfpLoadingBar:completed");
        e(1);
        i.cancel(h);
        h = i(function () {
          var n = u.leave(s, p);
          n && n.then && n.then(p);
          u.leave(a);
        }, 500);
      }
      var u, w = this.parentSelector, s = angular.element(this.loadingBarTemplate), l = s.find("div").eq(0), a = angular.element(this.spinnerTemplate), v, h, f = false, c = 0, b = this.includeSpinner, k = this.includeBar, d = this.startSize;
      return {start: g, set: e, status: o, inc: y, complete: nt, includeSpinner: this.includeSpinner, latencyThreshold: this.latencyThreshold, parentSelector: this.parentSelector, startSize: this.startSize};
    }];
  });
}());
angular.module("blockingClick", []).provider("blockingClickHandler", function ($httpProvider) {
  this.$get = ["$timeout", function ($timeout) {
    var activeRequests = 0;
    var obj = {callbacks: [], stopBlocking: function () {
      if (activeRequests == 0) {
        var that = this;
        angular.forEach(this.callbacks, function (f) {
          $timeout(function () {
            if (activeRequests == 0) f(); else that.callbacks.push(f);
          });
        });
        this.callbacks = [];
      }
    }};
    $httpProvider.defaults.transformRequest.push(function (data) {
      activeRequests++;
      return data;
    });
    $httpProvider.defaults.transformResponse.push(function (data) {
      activeRequests--;
      obj.stopBlocking();
      return data;
    });
    return obj;
  }];
}).directive("blockingClick", function () {
  return {restrict: "A", controller: function ($scope, $element, $attrs, blockingClickHandler) {
    $element.on("dblclick", function () {
      console.log("Ignoring dblclick.");
      return false;
    });
    $element.on("click", function () {
      var pbar, isText = false;
      setTimeout(function () {
        $element.attr("disabled", "disabled");
      }, 100);
      $element.addClass("sending");
      if (!angular.isUndefined($attrs.blockingClick) && angular.isString($attrs.blockingClick) && $attrs.blockingClick != "" && $attrs.blockingClick != "$pbar") {
        pbar = angular.element("<div/>").css("text-align", "center").css("white-space", "nowrap").text($attrs.blockingClick);
        isText = true;
      } else {
        pbar = angular.element('<div class="pbar"/>');
      }
      pbar.css("position", "absolute");
      var container = angular.element('<div class="blocking-click"/>').insertBefore($element).append(pbar);
      container.css({height: $element.outerHeight(true) + "px", width: "100%", position: "absolute"});
      pbar.css("top", container.innerHeight() / 2 - pbar.outerHeight() / 2 + "px");
      blockingClickHandler.callbacks.push(function () {
        setTimeout(function () {
          container.remove();
          $element.removeAttr("disabled");
          $element.removeClass("sending");
        }, 300);
      });
      return true;
    });
  }};
});
(function () {
  "use strict";
  function c(t) {
    var i = [];
    return angular.forEach(t.requires, function (t) {
      n.indexOf(t) === -1 && i.push(t);
    }), i;
  }
  function s(n) {
    try {
      return angular.module(n);
    } catch (t) {
      if (/No module/.test(t) || t.message.indexOf("$injector:nomod") > -1) return false;
    }
  }
  function l(n) {
    try {
      return angular.module(n);
    } catch (t) {
      (/No module/.test(t) || t.message.indexOf("$injector:nomod") > -1) && (t.message = 'The module "' + n + '" that you are trying to load does not exist. ' + t.message);
      throw t;
    }
  }
  function i(n, t, i, r) {
    var s, c, u, f, l, h, o, v;
    if (t) for (s = 0, c = t.length; s < c; s++) if (u = t[s], angular.isArray(u)) {
      if (n !== null) if (n.hasOwnProperty(u[0])) f = n[u[0]]; else throw new Error("unsupported provider " + u[0]);
      if (l = a(u[2][0]), u[1] !== "invoke") l && angular.isDefined(f) && f[u[1]].apply(f, u[2]); else if (h = function (n) {
        var t = e.indexOf(i + "-" + n);
        (t === -1 || r) && (t === -1 && e.push(i + "-" + n), angular.isDefined(f) && f[u[1]].apply(f, u[2]));
      }, angular.isFunction(u[2][0])) h(u[2][0]); else if (angular.isArray(u[2][0])) for (o = 0, v = u[2][0].length; o < v; o++) angular.isFunction(u[2][0][o]) && h(u[2][0][o]);
    }
  }
  function h(r, e, o) {
    var l, s, c, a, v, y;
    if (e) {
      for (a = [], l = e.length - 1; l >= 0; l--) (s = e[l], typeof s != "string" && (s = f(s)), s && u.indexOf(s) === -1) && (v = n.indexOf(s) === -1, c = angular.module(s), v && (n.push(s), h(r, c.requires, o), a = a.concat(c._runBlocks)), i(r, c._invokeQueue, s, o.reconfig), i(r, c._configBlocks, s, o.reconfig), t(v ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", s), e.pop(), u.push(s));
      y = r.getInstanceInjector();
      angular.forEach(a, function (n) {
        y.invoke(n);
      });
    }
  }
  function a(n) {
    var i = false, u = function (n) {
      i = true;
      r.push(n);
      t("ocLazyLoad.componentLoaded", n);
    };
    if (angular.isString(n)) r.indexOf(n) === -1 && u(n); else if (angular.isObject(n)) angular.forEach(n, function (n) {
      angular.isString(n) && r.indexOf(n) === -1 && u(n);
    }); else return true;
    return i;
  }
  function f(n) {
    if (n === null) return null;
    var t = null;
    return typeof n == "string" ? t = n : typeof n == "object" && n.hasOwnProperty("name") && typeof n.name == "string" && (t = n.name), t;
  }
  function v(t) {
    var o = [t], r, f, e = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], s = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    angular.forEach(e, function (n) {
      e[n] = true;
      document.getElementById(n) && o.push(document.getElementById(n));
      n = n.replace(":", "\\:");
      t.querySelectorAll && (angular.forEach(t.querySelectorAll("." + n), u), angular.forEach(t.querySelectorAll("." + n + "\\:"), u), angular.forEach(t.querySelectorAll("[" + n + "]"), u));
    });
    angular.forEach(o, function (n) {
      if (!r) {
        var u = " " + t.className + " ", i = s.exec(u);
        i ? (r = n, f = (i[2] || "").replace(/\s+/g, ",")) : angular.forEach(n.attributes, function (t) {
          !r && e[t.name] && (r = n, f = t.value);
        });
      }
    });
    r && function h(t) {
      if (n.indexOf(t) === -1) {
        n.push(t);
        var r = angular.module(t);
        i(null, r._invokeQueue, t);
        i(null, r._configBlocks, t);
        angular.forEach(r.requires, h);
      }
    }(f);
  }
  var n = ["ng"], r = [], e = [], u = [], o = angular.module("oc.lazyLoad", ["ng"]), t = angular.noop;
  o.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function (i, r, e, o, a, y) {
    var k = {}, g = {$controllerProvider: i, $compileProvider: e, $filterProvider: o, $provide: r, $injector: a, $animateProvider: y}, nt = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0], p, w, b, d = false, tt = false;
    v(angular.element(window.document));
    this.$get = ["$timeout", "$log", "$q", "$templateCache", "$http", "$rootElement", "$rootScope", "$cacheFactory", function (i, r, e, o, a, v, y, it) {
      var et, rt = it("ocLazyLoad"), ft, ut;
      return d || (r = {}, r.error = angular.noop, r.warn = angular.noop, r.info = angular.noop), g.getInstanceInjector = function () {
        return et ? et : et = v.data("$injector");
      }, t = function (n, t) {
        tt && y.$broadcast(n, t);
        d && r.info(n, t);
      }, ft = function (n, i, r) {
        var f = e.defer(), u, o, s = function (n) {
          var t = (new Date).getTime();
          return n.indexOf("?") >= 0 ? n.substring(0, n.length - 1) === "&" ? n + "_dc=" + t : n + "&_dc=" + t : n + "?_dc=" + t;
        };
        angular.isUndefined(rt.get(i)) && rt.put(i, f.promise);
        switch (n) {
          case "css":
            u = document.createElement("link");
            u.type = "text/css";
            u.rel = "stylesheet";
            u.href = r.cache === false ? s(i) : i;
            break;
          case "js":
            u = document.createElement("script");
            u.src = r.cache === false ? s(i) : i;
            break;
          default:
            f.reject(new Error('Requested type "' + n + '" is not known. Could not inject "' + i + '"'));
        }
        return u.onload = u.onreadystatechange = function () {
          u.readyState && !/^c|loade/.test(u.readyState) || o || (u.onload = u.onreadystatechange = null, o = 1, t("ocLazyLoad.fileLoaded", i), f.resolve());
        }, u.onerror = function () {
          f.reject(new Error("Unable to load " + i));
        }, u.async = 1, nt.insertBefore(u, nt.lastChild), f.promise;
      }, angular.isUndefined(p) && (p = function (n, t, i) {
        var r = [];
        angular.forEach(n, function (n) {
          r.push(ft("js", n, i));
        });
        e.all(r).then(function () {
          t();
        }, function (n) {
          t(n);
        });
      }, p.ocLazyLoadLoader = true), angular.isUndefined(w) && (w = function (n, t, i) {
        var r = [];
        angular.forEach(n, function (n) {
          r.push(ft("css", n, i));
        });
        e.all(r).then(function () {
          t();
        }, function (n) {
          t(n);
        });
      }, w.ocLazyLoadLoader = true), angular.isUndefined(b) && (b = function (n, t, i) {
        angular.isString(n) && (n = [n]);
        var u = [];
        return angular.forEach(n, function (n) {
          var t = e.defer();
          u.push(t.promise);
          a.get(n, i).success(function (i) {
            angular.forEach(angular.element(i), function (n) {
              n.nodeName === "SCRIPT" && n.type === "text/ng-template" && o.put(n.id, n.innerHTML);
            });
            angular.isUndefined(rt.get(n)) && rt.put(n, true);
            t.resolve();
          }).error(function (i) {
            var u = 'Error load template "' + n + '": ' + i;
            r.error(u);
            t.reject(new Error(u));
          });
        }), e.all(u).then(function () {
          t();
        }, function (n) {
          t(n);
        });
      }, b.ocLazyLoadLoader = true), ut = function (n, t) {
        var u = [], f = [], o = [], i = [], s = null, h, c, l;
        return angular.extend(t || {}, n), angular.forEach(t.files, function (n) {
          s = rt.get(n);
          angular.isUndefined(s) || t.cache === false ? /\.css[^\.]*$/.test(n) && u.indexOf(n) === -1 ? u.push(n) : /\.(htm|html)[^\.]*$/.test(n) && f.indexOf(n) === -1 ? f.push(n) : o.indexOf(n) === -1 && o.push(n) : s && i.push(s);
        }), u.length > 0 && (h = e.defer(), w(u, function (n) {
          angular.isDefined(n) && w.hasOwnProperty("ocLazyLoadLoader") ? (r.error(n), h.reject(n)) : h.resolve();
        }, t), i.push(h.promise)), f.length > 0 && (c = e.defer(), b(f, function (n) {
          angular.isDefined(n) && b.hasOwnProperty("ocLazyLoadLoader") ? (r.error(n), c.reject(n)) : c.resolve();
        }, t), i.push(c.promise)), o.length > 0 && (l = e.defer(), p(o, function (n) {
          angular.isDefined(n) && p.hasOwnProperty("ocLazyLoadLoader") ? (r.error(n), l.reject(n)) : l.resolve();
        }, t), i.push(l.promise)), e.all(i);
      }, {getModuleConfig: function (n) {
        return k[n] ? k[n] : null;
      }, setModuleConfig: function (n) {
        return k[n.name] = n, n;
      }, getModules: function () {
        return n;
      }, loadTemplateFile: function (n, t) {
        return ut({files: n}, t);
      }, load: function (t, o) {
        var p = this, a = null, w = [], d = [], v = e.defer(), y, k, b;
        return (angular.isUndefined(o) && (o = {}), angular.isArray(t)) ? (angular.forEach(t, function (n) {
          n && d.push(p.load(n, o));
        }), e.all(d).then(function () {
          v.resolve(t);
        }), v.promise) : (y = f(t), typeof t == "string" ? (a = p.getModuleConfig(t), a || (a = {files: [t]}, y = null)) : typeof t == "object" && (a = p.setModuleConfig(t)), a === null ? (k = 'Module "' + y + '" is not configured, cannot load.', r.error(k), v.reject(new Error(k))) : angular.isDefined(a.template) && (angular.isUndefined(a.files) && (a.files = []), angular.isString(a.template) ? a.files.push(a.template) : angular.isArray(a.template) && a.files.concat(a.template)), w.push = function (n) {
          this.indexOf(n) === -1 && Array.prototype.push.apply(this, arguments);
        }, angular.isDefined(y) && s(y) && n.indexOf(y) !== -1 && (w.push(y), angular.isUndefined(a.files))) ? (v.resolve(), v.promise) : (b = function b(n) {
          var t, a, v, i, u = [], h;
          if (t = f(n), t === null) return e.when();
          try {
            a = l(t);
          } catch (y) {
            return h = e.defer(), r.error(y.message), h.reject(y), h.promise;
          }
          return v = c(a), angular.forEach(v, function (f) {
            if (typeof f == "string") {
              var e = p.getModuleConfig(f);
              if (e === null) {
                w.push(f);
                return;
              }
              f = e;
            }
            if (s(f.name)) {
              typeof n != "string" && (i = f.files.filter(function (n) {
                return p.getModuleConfig(f.name).files.indexOf(n) < 0;
              }), i.length !== 0 && r.warn('Module "', t, '" attempted to redefine configuration for dependency. "', f.name, '"\n Additional Files Loaded:', i), u.push(ut(f.files, o).then(function () {
                return b(f);
              })));
              return;
            }
            typeof f == "object" && (f.hasOwnProperty("name") && f.name && (p.setModuleConfig(f), w.push(f.name)), f.hasOwnProperty("css") && f.css.length !== 0 && angular.forEach(f.css, function (n) {
              ft("css", n, o);
            }));
            f.hasOwnProperty("files") && f.files.length !== 0 && f.files && u.push(ut(f, o).then(function () {
              return b(f);
            }));
          }), e.all(u);
        }, ut(a, o).then(function () {
          y === null ? v.resolve(t) : (w.push(y), b(y).then(function () {
            try {
              u = [];
              h(g, w, o);
            } catch (n) {
              r.error(n.message);
              v.reject(n);
              return;
            }
            i(function () {
              v.resolve(t);
            });
          }, function (n) {
            i(function () {
              v.reject(n);
            });
          }));
        }, function (n) {
          v.reject(n);
        }), v.promise);
      }};
    }];
    this.config = function (t) {
      if ((angular.isDefined(t.jsLoader) || angular.isDefined(t.asyncLoader)) && (p = t.jsLoader || t.asyncLoader, !angular.isFunction(p))) throw "The js loader needs to be a function";
      if (angular.isDefined(t.cssLoader) && (w = t.cssLoader, !angular.isFunction(w))) throw "The css loader needs to be a function";
      if (angular.isDefined(t.templatesLoader) && (b = t.templatesLoader, !angular.isFunction(b))) throw "The template loader needs to be a function";
      if (angular.isDefined(t.loadedModules)) {
        var i = function (t) {
          n.indexOf(t) < 0 && (n.push(t), angular.forEach(angular.module(t).requires, i));
        };
        angular.forEach(t.loadedModules, i);
      }
      angular.isDefined(t.modules) && (angular.isArray(t.modules) ? angular.forEach(t.modules, function (n) {
        k[n.name] = n;
      }) : k[t.modules.name] = t.modules);
      angular.isDefined(t.debug) && (d = t.debug);
      angular.isDefined(t.events) && (tt = t.events);
    };
  }]);
  o.directive("ocLazyLoad", ["$http", "$log", "$ocLazyLoad", "$compile", "$timeout", "$templateCache", "$animate", function (n, t, i, r, u, f, e) {
    return {restrict: "A", terminal: true, priority: 401, transclude: "element", controller: angular.noop, compile: function () {
      return function (r, u, o, s, h) {
        function a() {
          c && (c.$destroy(), c = null);
          u.html("");
        }
        var c, l = r.$eval(o.ocLazyLoad), v = l && l.onload ? l.onload : "";
        r.$watch(o.ocLazyLoad, function (n) {
          angular.isDefined(n) ? i.load(n).then(function () {
            h(r, function (n) {
              e.enter(n, null, u);
            });
          }) : a();
        }, true);
      };
    }};
  }]);
  Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
    var r, f, u, i;
    if (this == null) throw new TypeError('"this" is null or not defined');
    if ((f = Object(this), u = f.length >>> 0, u === 0) || (i = +t || 0, Math.abs(i) === Infinity && (i = 0), i >= u)) return -1;
    for (r = Math.max(i >= 0 ? i : u - Math.abs(i), 0); r < u;) {
      if (r in f && f[r] === n) return r;
      r++;
    }
    return -1;
  });
}());
(function (n) {
  typeof define == "function" && define.amd ? define("picker", ["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : this.Picker = n(jQuery);
}(function (n) {
  function t(e, o, h, c) {
    function d() {
      if (p.data(o, l).addClass(y.input).val(p.data("value") ? l.get("select", v.format) : e.value), !v.editable) p.on("keydown." + a.id, function (n) {
        var t = n.keyCode, i = /^(8|46)$/.test(t);
        if (t == 27) return l.close(), false;
        (t == 32 || i || !a.open && l.component.key[t]) && (n.preventDefault(), n.stopPropagation(), i ? l.clear().close() : l.open());
      });
      i(e, {haspopup: true, expanded: false, readonly: false, owns: e.id + "_root" + (l._hidden ? " " + l._hidden.id : "")});
    }
    function g() {
      l.$root.on({focusin: function (n) {
        l.$root.removeClass(y.focused);
        n.stopPropagation();
      }, "mousedown click": function (t) {
        var i = t.target;
        i != l.$root.children()[0] && (t.stopPropagation(), t.type != "mousedown" || n(i).is(":input") || i.nodeName == "OPTION" || (t.preventDefault(), e.focus()));
      }}).on("click", "[data-pick], [data-nav], [data-clear]", function () {
        var u = n(this), r = u.data(), f = u.hasClass(y.navDisabled) || u.hasClass(y.disabled), i = document.activeElement;
        i = i && (i.type || i.href) && i;
        (f || i && !n.contains(l.$root[0], i)) && e.focus();
        r.nav && !f ? l.set("highlight", l.component.item.highlight, {nav: r.nav}) : t._.isInteger(r.pick) && !f ? l.set("select", r.pick).close(true) : r.clear && l.clear().close(true);
      }).on("click", "[data-close]", function () {
        l.close(true);
      });
      i(l.$root[0], "hidden", true);
    }
    function nt() {
      var t;
      v.hiddenName === true ? (t = e.name, e.name = "") : (t = [typeof v.hiddenPrefix == "string" ? v.hiddenPrefix : "", typeof v.hiddenSuffix == "string" ? v.hiddenSuffix : "_submit"], t = t[0] + e.name + t[1]);
      l._hidden = n('<input type=hidden name="' + t + '"' + (e.id ? 'id="' + e.id + '_hidden"' : "") + (p.data("value") || e.value ? ' value="' + l.get("select", v.formatSubmit) + '"' : "") + ">")[0];
      p.on("change." + a.id, function () {
        l._hidden.value = e.value ? l.get("select", v.formatSubmit) : "";
      }).after(l._hidden);
    }
    if (!e) return t;
    var w = false, a = {id: e.id || "P" + Math.abs(~~(Math.random() * new Date))}, v = h ? n.extend(true, {}, h.defaults, c) : c || {}, y = n.extend({}, t.klasses(), v.klass), p = n(e), l = b.prototype = {constructor: b, $node: p, start: function () {
      if (a && a.start) return l;
      a.methods = {};
      a.start = true;
      a.open = false;
      a.type = e.type;
      e.autofocus = e == document.activeElement;
      e.readOnly = !v.editable;
      e.id = e.id || a.id;
      e.type != "text" && (e.type = "text");
      l.component = new h(l, v);
      l.$root = n(t._.node("div", t._.node("div", t._.node("div", t._.node("div", t._.node("div", l.component.nodes(a.open), y.box), y.wrap), y.frame), y.holder), y.picker + " " + y.notshown, 'id="' + e.id + '_root"'));
      g();
      v.formatSubmit && nt();
      d();
      v.container ? n(v.container).append(l.$root) : p.after(l.$root);
      l.on({start: l.component.onStart, render: l.component.onRender, stop: l.component.onStop, open: l.component.onOpen, close: l.component.onClose, set: l.component.onSet}).on({start: v.onStart, render: v.onRender, stop: v.onStop, open: v.onOpen, close: v.onClose, set: v.onSet});
      return w = s(l.$root.children()[0]), e.autofocus && l.open(), l.trigger("start").trigger("render");
    }, render: function (n) {
      return n ? l.$root.html(t._.node("div", t._.node("div", t._.node("div", t._.node("div", l.component.nodes(a.open), y.box), y.wrap), y.frame), y.holder)) : l.$root.find("." + y.box).html(l.component.nodes(a.open)), l.trigger("render");
    }, stop: function () {
      return a.start ? (l.close(), l._hidden && l._hidden.parentNode.removeChild(l._hidden), l.$root.remove(), p.removeClass(y.input).removeData(o), setTimeout(function () {
        p.off("." + a.id);
      }, 0), e.type = a.type, e.readOnly = false, l.trigger("stop"), a.methods = {}, a.start = false, l) : l;
    }, open: function (o) {
      if (a.open) return l;
      if (p.addClass(y.active), i(e, "expanded", true), setTimeout(function () {
        var u = n(window).height(), f = n(window).scrollTop(), r;
        l.$root.removeClass(y.notshown);
        l.$root.addClass(y.opened);
        i(l.$root[0], "hidden", true);
        var s = p.offset(), t = l.$root.children(0).height(), e = p.height(), o = p.offset().top + e + t;
        o > u + f ? (r = t + 4, l.$root.css("top", -r)) : l.$root.css("top", "auto");
      }, 0), o !== false) {
        a.open = true;
        w && r.css("overflow", "hidden").css("padding-right", "+=" + f());
        p.trigger("focus");
        u.on("click." + a.id + " focusin." + a.id, function (n) {
          var t = n.target;
          t != e && t != document && n.which != 3;
        }).on("keydown." + a.id, function (i) {
          var r = i.keyCode, u = l.component.key[r], f = i.target;
          r == 27 ? l.close(true) : f == e && (u || r == 13) ? (i.preventDefault(), u ? t._.trigger(l.component.key.go, l, [t._.trigger(u)]) : l.$root.find("." + y.highlighted).hasClass(y.disabled) || l.set("select", l.component.item.highlight).close()) : n.contains(l.$root[0], f) && r == 13 && (i.preventDefault(), f.click());
        });
      }
      return l.trigger("open");
    }, close: function (n) {
      return (n && (p.off("focus." + a.id).trigger("focus"), setTimeout(function () {}, 0)), p.removeClass(y.active), i(e, "expanded", false), setTimeout(function () {
        l.$root.addClass(y.notshown);
        l.$root.removeClass(y.opened + " " + y.focused);
        i(l.$root[0], "hidden", true);
      }, 0), !a.open) ? l : (a.open = false, w && r.css("overflow", "").css("padding-right", "-=" + f()), u.off("." + a.id), l.trigger("close"));
    }, clear: function (n) {
      return l.set("clear", null, n);
    }, set: function (t, i, r) {
      var u, f, o = n.isPlainObject(t), e = o ? t : {};
      if (r = o && n.isPlainObject(i) ? i : r || {}, t) {
        o || (e[t] = i);
        for (u in e) f = e[u], u in l.component.item && (f === undefined && (f = null), l.component.set(u, f, r)), (u == "select" || u == "clear") && p.val(u == "clear" ? "" : l.get(u, v.format)).trigger("change");
        l.render();
      }
      return r.muted ? l : l.trigger("set", e);
    }, get: function (n, i) {
      if (n = n || "value", a[n] != null) return a[n];
      if (n == "value") return e.value;
      if (n in l.component.item) {
        if (typeof i == "string") {
          var r = l.component.get(n);
          return r ? t._.trigger(l.component.formats.toString, l.component, [i, r]) : "";
        }
        return l.component.get(n);
      }
    }, on: function (t, i, r) {
      var u, e, o = n.isPlainObject(t), f = o ? t : {};
      if (t) {
        o || (f[t] = i);
        for (u in f) e = f[u], r && (u = "_" + u), a.methods[u] = a.methods[u] || [], a.methods[u].push(e);
      }
      return l;
    }, off: function () {
      var n, t, i = arguments;
      for (n = 0, namesCount = i.length; n < namesCount; n += 1) t = i[n], t in a.methods && delete a.methods[t];
      return l;
    }, trigger: function (n, i) {
      var r = function (n) {
        var r = a.methods[n];
        r && r.map(function (n) {
          t._.trigger(n, l, [i]);
        });
      };
      return r("_" + n), r(n), l;
    }};
    return new b;
  }
  function s(n) {
    var t, i = "position";
    return n.currentStyle ? t = n.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(n)[i]), t == "fixed";
  }
  function f() {
    var t, i, u, f;
    return r.height() <= o.height() ? 0 : (t = n('<div style="visibility:hidden;width:100px" />').appendTo("body"), i = t[0].offsetWidth, t.css("overflow", "scroll"), u = n('<div style="width:100%" />').appendTo(t), f = u[0].offsetWidth, t.remove(), i - f);
  }
  function i(t, i, r) {
    if (n.isPlainObject(i)) for (var u in i) e(t, u, i[u]); else e(t, i, r);
  }
  function e(n, t, i) {
    n.setAttribute((t == "role" ? "" : "aria-") + t, i);
  }
  function h(t, i) {
    var r, u, f;
    n.isPlainObject(t) || (t = {attribute: i});
    i = "";
    for (r in t) u = (r == "role" ? "" : "aria-") + r, f = t[r], i += f == null ? "" : u + '="' + t[r] + '"';
    return i;
  }
  var o = n(window), u = n(document), r = n(document.documentElement);
  return t.klasses = function (n) {
    return n = n || "picker", {picker: n, notshown: n + "--notshown", opened: n + "--opened", focused: n + "--focused", input: n + "__input", active: n + "__input--active", holder: n + "__holder", frame: n + "__frame", wrap: n + "__wrap", box: n + "__box"};
  }, t._ = {group: function (n) {
    for (var i, u = "", r = t._.trigger(n.min, n); r <= t._.trigger(n.max, n, [r]); r += n.i) i = t._.trigger(n.item, n, [r]), u += t._.node(n.node, i[0], i[1], i[2]);
    return u;
  }, node: function (t, i, r, u) {
    return i ? (i = n.isArray(i) ? i.join("") : i, r = r ? ' class="' + r + '"' : "", u = u ? " " + u : "", "<" + t + r + u + ">" + i + "</" + t + ">") : "";
  }, lead: function (n) {
    return (n < 10 ? "0" : "") + n;
  }, trigger: function (n, t, i) {
    return typeof n == "function" ? n.apply(t, i || []) : n;
  }, digits: function (n) {
    return /\d/.test(n[1]) ? 2 : 1;
  }, isDate: function (n) {
    return {}.toString.call(n).indexOf("Date") > -1 && this.isInteger(n.getDate());
  }, isInteger: function (n) {
    return {}.toString.call(n).indexOf("Number") > -1 && n % 1 == 0;
  }, ariaAttr: h}, t.extend = function (i, r) {
    n.fn[i] = function (u, f) {
      var e = this.data(i);
      return u == "picker" ? e : e && typeof u == "string" ? t._.trigger(e[u], e, [f]) : this.each(function () {
        var f = n(this);
        f.data(i) || new t(this, i, r, u);
      });
    };
    n.fn[i].defaults = r.defaults;
  }, t;
}));
(function (n) {
  typeof define == "function" && define.amd ? define(["picker", "jquery"], n) : typeof exports == "object" ? module.exports = n(require("./picker.js"), require("jquery")) : n(Picker, jQuery);
}(function (n, t) {
  function r(n, t) {
    var i = this, r = n.$node[0], o = r.value, u = n.$node.data("value"), f = u || o, s = u ? t.formatSubmit : t.format, e = function () {
      return r.currentStyle ? r.currentStyle.direction == "rtl" : getComputedStyle(n.$root[0]).direction == "rtl";
    };
    i.settings = t;
    i.$node = n.$node;
    i.queue = {min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate"};
    i.item = {};
    i.item.clear = null;
    i.item.disable = (t.disable || []).slice(0);
    i.item.enable = -function (n) {
      return n[0] === true ? n.shift() : -1;
    }(i.item.disable);
    i.set("min", t.min).set("max", t.max).set("now");
    f ? i.set("select", f, {format: s}) : i.set("select", null).set("highlight", i.item.now);
    i.key = {40: 7, 38: -7, 39: function () {
      return e() ? -1 : 1;
    }, 37: function () {
      return e() ? 1 : -1;
    }, go: function (n) {
      var t = i.item.highlight, r = new Date(t.year, t.month, t.date + n);
      i.set("highlight", [r.getFullYear(), r.getMonth(), r.getDate()], {interval: n});
      this.render();
    }};
    n.on("render", function () {
      n.$root.find("." + t.klass.selectMonth).on("change", function () {
        var i = this.value;
        i && (n.set("highlight", [n.get("view").year, i, n.get("highlight").date]), n.$root.find("." + t.klass.selectMonth).trigger("focus"));
      });
      n.$root.find("." + t.klass.selectYear).on("change", function () {
        var i = this.value;
        i && (n.set("highlight", [i, n.get("view").month, n.get("highlight").date]), n.$root.find("." + t.klass.selectYear).trigger("focus"));
      });
    }, 1).on("open", function () {
      var r = "";
      i.disabled(i.get("now")) && (r = ":not(." + t.klass.buttonToday + ")");
      n.$root.find("button" + r + ", select").attr("disabled", false);
    }, 1).on("close", function () {
      n.$root.find("button, select").attr("disabled", true);
    }, 1);
  }
  function e(n, t) {
    var i, o, f, e, r, s, u;
    if (n instanceof Date || n == null) return n;
    if (n.indexOf("0001-01-01") > -1 || n === "0001/01/01") return new Date(-62135596800000);
    if (n.indexOf("T") == 10 && (t = "y-m-d"), i = n.split(/\W+/), i.length == 1) if (n.length == 6) i = [n.substr(0, 2), n.substr(2, 2), n.substr(4, 2)]; else if (n.length == 8) i = [n.substr(0, 2), n.substr(2, 2), n.substr(4, 4)]; else return null; else i[0].length == 4 && (t = "y-m-d");
    for (o = t.split(/\W+/), o.length == 2 && (f = 1), s = Math.min(o.length, i.length), u = 0; u < s; u++) switch (o[u][0]) {
      case "d":
        if (f = parseInt(i[u], 10), isNaN(f)) return null;
        break;
      case "m":
      case "M":
        if ((e = parseInt(i[u], 10) - 1, isNaN(e)) || e < 0 || e > 11) return null;
        break;
      case "y":
        if ((r = parseInt(i[u], 10), isNaN(r)) || r < 0) return null;
        r += r > 100 ? 0 : r < 29 ? 2e3 : 1900;
    }
    return (f === undefined && (f = 1), r === undefined || e === undefined) ? null : new Date(r, e, f);
  }
  var u = 7, f = 6, i = n._;
  r.prototype.set = function (n, t, i) {
    var r = this, u = r.item;
    return t === null ? (n == "clear" && (n = "select"), u[n] = t, r) : (u[n == "enable" ? "disable" : n == "flip" ? "enable" : n] = r.queue[n].split(" ").map(function (u) {
      return t = r[u](n, t, i);
    }).pop(), n == "select" ? r.set("highlight", u.select, i) : n == "highlight" ? r.set("view", u.highlight, i) : n.match(/^(flip|min|max|disable|enable)$/) && (u.select && r.disabled(u.select) && r.set("select", u.select, i), u.highlight && r.disabled(u.highlight) && r.set("highlight", u.highlight, i)), r);
  };
  r.prototype.get = function (n) {
    return this.item[n];
  };
  r.prototype.create = function (n, r, u) {
    var f, e = this;
    return r = r === undefined ? n : r, r == -Infinity || r == Infinity ? f = r : t.isPlainObject(r) && i.isInteger(r.pick) ? r = r.obj : t.isArray(r) ? (r = new Date(r[0], r[1], r[2]), r = i.isDate(r) ? r : e.create().obj) : r = i.isInteger(r) || i.isDate(r) ? e.normalize(new Date(r), u) : e.now(n, r, u), {year: f || r.getFullYear(), month: f || r.getMonth(), date: f || r.getDate(), day: f || r.getDay(), obj: f || r, pick: f || r.getTime()};
  };
  r.prototype.createRange = function (n, r) {
    var f = this, u = function (n) {
      return n === true || t.isArray(n) || i.isDate(n) ? f.create(n) : n;
    };
    return i.isInteger(n) || (n = u(n)), i.isInteger(r) || (r = u(r)), i.isInteger(n) && t.isPlainObject(r) ? n = [r.year, r.month, r.date + n] : i.isInteger(r) && t.isPlainObject(n) && (r = [n.year, n.month, n.date + r]), {from: u(n), to: u(r)};
  };
  r.prototype.withinRange = function (n, t) {
    return n = this.createRange(n.from, n.to), t.pick >= n.from.pick && t.pick <= n.to.pick;
  };
  r.prototype.overlapRanges = function (n, t) {
    var i = this;
    return n = i.createRange(n.from, n.to), t = i.createRange(t.from, t.to), i.withinRange(n, t.from) || i.withinRange(n, t.to) || i.withinRange(t, n.from) || i.withinRange(t, n.to);
  };
  r.prototype.now = function (n, t, i) {
    return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i);
  };
  r.prototype.navigate = function (n, i, r) {
    var s, f, u, e, c = t.isArray(i), h = t.isPlainObject(i), o = this.item.view;
    if (c || h) {
      for (h ? (f = i.year, u = i.month, e = i.date) : (f = +i[0], u = +i[1], e = +i[2]), r && r.nav && o && o.month !== u && (f = o.year, u = o.month), s = new Date(f, u + (r && r.nav ? r.nav : 0), 1), f = s.getFullYear(), u = s.getMonth(); new Date(f, u, e).getMonth() !== u;) e -= 1;
      i = [f, u, e];
    }
    return i;
  };
  r.prototype.normalize = function (n) {
    return n.setHours(0, 0, 0, 0), n;
  };
  r.prototype.measure = function (n, t) {
    var r = this;
    return t ? typeof t == "string" ? t = r.parse(n, t) : i.isInteger(t) && (t = r.now(n, t, {rel: t})) : t = n == "min" ? -Infinity : Infinity, t;
  };
  r.prototype.viewset = function (n, t) {
    return this.create([t.year, t.month, 1]);
  };
  r.prototype.validate = function (n, r, u) {
    var f = this, c = r, e = u && u.interval ? u.interval : 1, h = f.item.enable === -1, l, a, o = f.item.min, s = f.item.max, v, y, p = h && f.item.disable.filter(function (n) {
      if (t.isArray(n)) {
        var u = f.create(n).pick;
        u < r.pick ? l = true : u > r.pick && (a = true);
      }
      return i.isInteger(n);
    }).length;
    if ((!u || !u.nav) && (!h && f.disabled(r) || h && f.disabled(r) && (p || l || a) || !h && (r.pick <= o.pick || r.pick >= s.pick))) for (h && !p && (!a && e > 0 || !l && e < 0) && (e *= -1); f.disabled(r);) {
      if (Math.abs(e) > 1 && (r.month < c.month || r.month > c.month) && (r = c, e = e > 0 ? 1 : -1), r.pick <= o.pick ? (v = true, e = 1, r = f.create([o.year, o.month, o.date + (r.pick === o.pick ? 0 : -1)])) : r.pick >= s.pick && (y = true, e = -1, r = f.create([s.year, s.month, s.date + (r.pick === s.pick ? 0 : 1)])), v && y) break;
      r = f.create([r.year, r.month, r.date + e]);
    }
    return r;
  };
  r.prototype.disabled = function (n) {
    var r = this, u = r.item.disable.filter(function (u) {
      return i.isInteger(u) ? n.day === (r.settings.firstDay ? u : u - 1) % 7 : t.isArray(u) || i.isDate(u) ? n.pick === r.create(u).pick : t.isPlainObject(u) ? r.withinRange(u, n) : void 0;
    });
    return u = u.length && !u.filter(function (n) {
      return t.isArray(n) && n[3] == "inverted" || t.isPlainObject(n) && n.inverted;
    }).length, r.item.enable === -1 ? !u : u || n.pick < r.item.min.pick || n.pick > r.item.max.pick;
  };
  r.prototype.parse = function (n, t, r) {
    var f = this, o = {}, u;
    return !t || typeof t != "string" ? t : (r && r.format || (r = r || {}, r.format = f.settings.format), u = e(t, r.format), u == null) ? null : [u.getFullYear(), u.getMonth(), u.getDate()];
  };
  r.prototype.formats = function () {
    function n(n, t, i) {
      var r = n.match(/\w+/)[0];
      return i.mm || i.m || (i.m = t.indexOf(r) + 1), r.length;
    }
    function t(n) {
      return n.match(/\w+/)[0].length;
    }
    return {d: function (n, t) {
      return n ? i.digits(n) : t.date;
    }, dd: function (n, t) {
      return n ? 2 : i.lead(t.date);
    }, ddd: function (n, i) {
      return n ? t(n) : this.settings.weekdaysShort[i.day];
    }, dddd: function (n, i) {
      return n ? t(n) : this.settings.weekdaysFull[i.day];
    }, m: function (n, t) {
      return n ? i.digits(n) : t.month + 1;
    }, mm: function (n, t) {
      return n ? 2 : i.lead(t.month + 1);
    }, mmm: function (t, i) {
      var r = this.settings.monthsShort;
      return t ? n(t, r, i) : r[i.month];
    }, mmmm: function (t, i) {
      var r = this.settings.monthsFull;
      return t ? n(t, r, i) : r[i.month];
    }, yy: function (n, t) {
      return n ? 2 : ("" + t.year).slice(2);
    }, yyyy: function (n, t) {
      return n ? 4 : t.year;
    }, toArray: function (n) {
      return n.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
    }, toString: function (n, t) {
      var r = this;
      return r.formats.toArray(n).map(function (n) {
        return i.trigger(r.formats[n], r, [0, t]) || n.replace(/^!/, "");
      }).join("");
    }};
  }();
  r.prototype.isDateExact = function (n, r) {
    var u = this;
    return i.isInteger(n) && i.isInteger(r) || typeof n == "boolean" && typeof r == "boolean" ? n === r : (i.isDate(n) || t.isArray(n)) && (i.isDate(r) || t.isArray(r)) ? u.create(n).pick === u.create(r).pick : t.isPlainObject(n) && t.isPlainObject(r) ? u.isDateExact(n.from, r.from) && u.isDateExact(n.to, r.to) : false;
  };
  r.prototype.isDateOverlap = function (n, r) {
    var u = this, f = u.settings.firstDay ? 1 : 0;
    return i.isInteger(n) && (i.isDate(r) || t.isArray(r)) ? (n = n % 7 + f, n === u.create(r).day + 1) : i.isInteger(r) && (i.isDate(n) || t.isArray(n)) ? (r = r % 7 + f, r === u.create(n).day + 1) : t.isPlainObject(n) && t.isPlainObject(r) ? u.overlapRanges(n, r) : false;
  };
  r.prototype.flipEnable = function (n) {
    var t = this.item;
    t.enable = n || (t.enable == -1 ? 1 : -1);
  };
  r.prototype.deactivate = function (n, r) {
    var f = this, u = f.item.disable.slice(0);
    return r == "flip" ? f.flipEnable() : r === false ? (f.flipEnable(1), u = []) : r === true ? (f.flipEnable(-1), u = []) : r.map(function (n) {
      for (var e, r = 0; r < u.length; r += 1) if (f.isDateExact(n, u[r])) {
        e = true;
        break;
      }
      e || (i.isInteger(n) || i.isDate(n) || t.isArray(n) || t.isPlainObject(n) && n.from && n.to) && u.push(n);
    }), u;
  };
  r.prototype.activate = function (n, r) {
    var f = this, u = f.item.disable, e = u.length;
    return r == "flip" ? f.flipEnable() : r === true ? (f.flipEnable(1), u = []) : r === false ? (f.flipEnable(-1), u = []) : r.map(function (n) {
      for (var o, s, h, r = 0; r < e; r += 1) if (s = u[r], f.isDateExact(s, n)) {
        o = u[r] = null;
        h = true;
        break;
      } else if (f.isDateOverlap(s, n)) {
        t.isPlainObject(n) ? (n.inverted = true, o = n) : t.isArray(n) ? (o = n, o[3] || o.push("inverted")) : i.isDate(n) && (o = [n.getFullYear(), n.getMonth(), n.getDate(), "inverted"]);
        break;
      }
      if (o) for (r = 0; r < e; r += 1) if (f.isDateExact(u[r], n)) {
        u[r] = null;
        break;
      }
      if (h) for (r = 0; r < e; r += 1) if (f.isDateOverlap(u[r], n)) {
        u[r] = null;
        break;
      }
      o && u.push(o);
    }), u.filter(function (n) {
      return n != null;
    });
  };
  r.prototype.nodes = function (n) {
    var r = this, t = r.settings, h = r.item, c = h.now, l = h.select, a = h.highlight, e = h.view, w = h.disable, o = h.min, s = h.max, b = function (n, r) {
      return t.firstDay && (n.push(n.shift()), r.push(r.shift())), i.node("thead", i.node("tr", i.group({min: 0, max: u - 1, i: 1, node: "th", item: function (i) {
        return [n[i], t.klass.weekdays, 'scope=col title="' + r[i] + '"'];
      }})));
    }((t.showWeekdaysFull ? t.weekdaysFull : t.weekdaysShort).slice(0), t.weekdaysFull.slice(0)), y = function () {
      var u = t.showMonthsShort ? t.monthsShort : t.monthsFull;
      return t.selectMonths ? i.node("select", i.group({min: 0, max: 11, i: 1, node: "option", item: function (n) {
        return [u[n], 0, "value=" + n + (e.month == n ? " selected" : "") + (e.year == o.year && n < o.month || e.year == s.year && n > s.month ? " disabled" : "")];
      }}), t.klass.selectMonth, (n ? "" : "disabled1") + " " + i.ariaAttr({controls: r.$node[0].id + "_table"}) + ' title="' + t.labelMonthSelect + '"') : i.node("div", u[e.month], t.klass.month);
    }, p = function () {
      var h = e.year, a, v;
      if (numberYears = t.selectYears === true || s.year == Infinity || o.year == Infinity ? 5 : t.selectYears === -1 ? s.year - o.year : ~~(t.selectYears / 2), numberYears) {
        var c = o.year, l = s.year, u = h - numberYears, f = h + numberYears;
        return c > u && (f += c - u, u = c), l < f && (a = u - c, v = f - l, u -= a > v ? v : a, f = l), i.node("select", i.group({min: u, max: f, i: 1, node: "option", item: function (n) {
          return [n, 0, "value=" + n + (h == n ? " selected" : "")];
        }}), t.klass.selectYear, (n ? "" : "disabled1") + " " + i.ariaAttr({controls: r.$node[0].id + "_table"}) + ' title="' + t.labelYearSelect + '"');
      }
      return i.node("div", h, t.klass.year);
    };
    return i.node("div", (t.selectYears ? p() + y() : y() + p()) + i.node("div", " ", t.klass["nav" + (n ? "Next" : "Prev")] + (n && e.year >= s.year && e.month >= s.month || !n && e.year <= o.year && e.month <= o.month ? " " + t.klass.navDisabled : ""), "data-nav=" + (n || -1) + " " + i.ariaAttr({role: "button", controls: r.$node[0].id + "_table"}) + ' title="' + (n ? t.labelMonthNext : t.labelMonthPrev) + '"') + i.node("div", " ", t.klass["nav" + (1 ? "Next" : "Prev")] + (1 && e.year >= s.year && e.month >= s.month || false && e.year <= o.year && e.month <= o.month ? " " + t.klass.navDisabled : ""), "data-nav=1 " + i.ariaAttr({role: "button", controls: r.$node[0].id + "_table"}) + ' title="' + (1 ? t.labelMonthNext : t.labelMonthPrev) + '"'), t.klass.header) + i.node("table", b + i.node("tbody", i.group({min: 0, max: f - 1, i: 1, node: "tr", item: function (n) {
      var f = t.firstDay && r.create([e.year, e.month, 1]).day === 0 ? -7 : 0;
      return [i.group({min: u * n - e.day + f + 1, max: function () {
        return this.min + u - 1;
      }, i: 1, node: "td", item: function (n) {
        n = r.create([e.year, e.month, n + (t.firstDay ? 1 : 0)]);
        var u = l && l.pick == n.pick, f = a && a.pick == n.pick, h = w && r.disabled(n) || n.pick < o.pick || n.pick > s.pick;
        return [i.node("div", n.date, function (i) {
          return i.push(e.month == n.month ? t.klass.infocus : t.klass.outfocus), c.pick == n.pick && i.push(t.klass.now), u && i.push(t.klass.selected), f && i.push(t.klass.highlighted), h && i.push(t.klass.disabled), i.join(" ");
        }([t.klass.day]), "data-pick=" + n.pick + " " + i.ariaAttr({role: "gridcell", selected: u && r.$node.val() === i.trigger(r.formats.toString, r, [t.format, n]) ? true : null, activedescendant: f ? true : null, disabled: h ? true : null})), "", i.ariaAttr({role: "presentation"})];
      }})];
    }})), t.klass.table, 'id="' + r.$node[0].id + '_table" ' + i.ariaAttr({role: "grid", controls: r.$node[0].id, readonly: true})) + i.node("div", i.node("button", t.today, t.klass.buttonToday, "type=button data-pick=" + c.pick + (n && !r.disabled(c) ? "" : " disabled1") + " " + i.ariaAttr({controls: r.$node[0].id})) + i.node("button", t.clear, t.klass.buttonClear, "type=button data-clear=1" + (n ? "" : " disabled1") + " " + i.ariaAttr({controls: r.$node[0].id})) + i.node("button", t.close, t.klass.buttonClose, "type=button data-close=true " + (n ? "" : " disabled1") + " " + i.ariaAttr({controls: r.$node[0].id})), t.klass.footer);
  };
  r.defaults = function (n) {
    return {labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], today: "Today", clear: "Clear", close: "Close", format: "d mmmm, yyyy", klass: {table: n + "table", header: n + "header", navPrev: n + "nav--prev", navNext: n + "nav--next", navDisabled: n + "nav--disabled", month: n + "month", year: n + "year", selectMonth: n + "select--month", selectYear: n + "select--year", weekdays: n + "weekday", day: n + "day", disabled: n + "day--disabled", selected: n + "day--selected", highlighted: n + "day--highlighted", now: n + "day--today", infocus: n + "day--infocus", outfocus: n + "day--outfocus", footer: n + "footer", buttonClear: n + "button--clear", buttonToday: n + "button--today", buttonClose: n + "button--close"}};
  }(n.klasses().picker + "__");
  n.extend("pickadate", r);
}), function (n, t) {
  "use strict";
  function f(n, t, i) {
    i = Array.prototype.slice.call(arguments, 2);
    var r = n.$root.$$phase;
    r === "$apply" || r === "$digest" ? t.apply(t, i) : n.$apply(function () {
      t.apply(t, i);
    });
  }
  var i, u, e, r = t.module("angular-pickadate", ["ngLocale", "fluent.validation"]);
  r.run(["fluentDateRange", "$parse", "getFluentDateRange", function (n, t, r) {
    i = n;
    e = t;
    u = r;
  }]);
  r.directive("pickADate", ["$filter", function (n) {
    return {restrict: "A", require: "^ngModel", scope: {minDate: "=", maxDate: "=", pickADateOptions: "="}, link: function (r, e, o, s) {
      function v() {
        var i = h.get("select"), t;
        i && i.year && (t = new Date, t.setYear(i.year), t.setMonth(i.month, i.date), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), s.$setViewValue(n("date")(t, "yyyy-MM-ddT00:00:00Z")));
      }
      function l(n) {
        if (n) {
          var t = n instanceof Date ? n : u.parseDate(n, "dd/MM/yyyy");
          t ? h.set("select", t.getTime()) : (h.clear(), s.$setViewValue(null));
        } else h.clear(), s.$setViewValue(null);
      }
      var c, h, y = t.extend(r.pickADateOptions || {}, {selectYears: -1, selectMonths: true, onSet: function (n) {
        if (n.hasOwnProperty("clear")) {
          s.$setViewValue(null);
          return;
        }
        n.hasOwnProperty("select") && (s.$modelValue || s.$setViewValue(new Date(0)), f(r, v));
      }, onOpen: function () {
        var f = r.pickADateOptions, t = e.val(), n = {open: true}, u;
        n.min = i(r.$parent, r.$eval(o.dateMin));
        n.max = i(r.$parent, r.$eval(o.dateMax));
        u = new Date;
        n.min || (n.min = new Date(1900, 0, 1));
        n.max || (n.max = new Date(2099, 11, 31));
        t ? (n.select = t, n.view = t) : n.max < u && (n.view = n.max);
        this.set(n);
      }, onStop: function () {
        e[0].focus();
      }}), a;
      c = e.pickadate(y);
      h = c.pickadate("picker");
      a = r.$watch("ready", function () {
        var t = r.$watch(o.ngModel, function (n, t) {
          n !== t && l(n);
        }, true), i = r.$watch("minDate", function (n, t) {
          n !== t && (n > s.$modelValue && h.clear(), h.set("min", n));
        }, true), u = r.$watch("maxDate", function (n, t) {
          n !== t && h.set("max", n);
        }, true), n;
        s.$modelValue && l(s.$modelValue);
        r.minDate && h.set("min", r.minDate);
        r.maxDate && h.set("max", r.maxDate);
        a();
        n = r.$on("$destory", function () {
          t();
          i();
          u();
          n();
        });
      });
      e.bind("blur", function () {
        var t = s.$viewValue, i, r;
        t && (i = h.get("select"), i ? (r = n("date")(t, "dd/MM/yyyy"), n("date")(new Date(i.pick), "dd/MM/yyyy") != r && h.set("select", t)) : h.set("select", t));
      });
      s.$formatters.push(function (t) {
        return n("date")(t, "dd/MM/yyyy");
      });
    }};
  }]);
  r.directive("pickATime", function () {
    return {restrict: "A", require: "^ngModel", scope: {minTime: "=", maxTime: "=", pickATimeOptions: "="}, link: function (n, t, i, r) {
      function h() {
        var t = u.get("select"), n = new Date;
        n.setHours(t.hour);
        n.setMinutes(t.mins);
        n.setSeconds(0);
        n.setMilliseconds(0);
        r.$setViewValue(n);
      }
      function o(n) {
        if (n) {
          var t = n instanceof Date ? n : new Date(n), i = t.getHours() * 60 + t.getMinutes();
          u.set("select", i);
        } else u.clear(), r.$setViewValue(null);
      }
      var e, u, s;
      e = t.pickatime({onSet: function (t) {
        if (t.hasOwnProperty("clear")) {
          r.$setViewValue(null);
          return;
        }
        t.hasOwnProperty("select") && (r.$modelValue || r.$setViewValue(new Date(0)), f(n, h));
      }, onStop: function () {
        t[0].focus();
      }});
      u = e.pickatime("picker");
      s = n.$watch("ready", function () {
        var f = n.$watch(i.ngModel, function (n, t) {
          n !== t && o(n);
        }, true), e = n.$watch("minTime", function (n, t) {
          n !== t && (n > r.$modelValue && u.clear(), u.set("min", n));
        }, true), h = n.$watch("maxTime", function (n, t) {
          n !== t && u.set("max", n);
        }, true), t;
        r.$modelValue && o(r.$modelValue);
        n.minTime && u.set("min", n.minTime);
        n.maxTime && u.set("max", n.maxTime);
        s();
        t = n.$on("$destory", function () {
          f();
          e();
          h();
          t();
        });
      });
    }};
  });
}(window, window.angular));
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.dateparser", "ui.bootstrap.dropdown", "ui.bootstrap.position", "ui.bootstrap.transition", "ui.bootstrap.modal", "ui.bootstrap.tabs", "ui.bootstrap.datepicker"]);
angular.module("ui.bootstrap.tpls", ["template/modal/backdrop.html", "template/modal/window.html"]);
angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function (n) {
  return {link: function (t, i, r) {
    function u() {
      i.removeClass("collapse").addClass("collapsing");
      n.addClass(i, "in", {to: {height: i[0].scrollHeight + "px"}}).then(f);
    }
    function f() {
      i.removeClass("collapsing");
      i.css({height: "auto"});
      i.attr("aria-expanded", "true");
    }
    function e() {
      i.css({height: i[0].scrollHeight + "px"}).removeClass("collapse").addClass("collapsing");
      n.removeClass(i, "in", {to: {height: "0"}}).then(o);
    }
    function o() {
      i.css({height: "0"});
      i.removeClass("collapsing");
      i.addClass("collapse");
      i.attr("aria-expanded", "false");
    }
    t.$watch(r.collapse, function (n) {
      n ? e() : u();
    });
  }};
}]);
angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (n, t) {
  function u(n) {
    var u = [], r = n.split("");
    return angular.forEach(i, function (t, i) {
      var f = n.indexOf(i), e, o;
      if (f > -1) {
        for (n = n.split(""), r[f] = "(" + t.regex + ")", n[f] = "$", e = f + 1, o = f + i.length; e < o; e++) r[e] = "", n[e] = "$";
        n = n.join("");
        u.push({index: f, apply: t.apply});
      }
    }), {regex: new RegExp("^" + r.join("") + "$"), map: t(u, "index")};
  }
  function f(n, t, i) {
    return i < 1 ? false : t === 1 && i > 28 ? i === 29 && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) : t === 3 || t === 5 || t === 8 || t === 10 ? i < 31 : true;
  }
  var r = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, i;
  this.parsers = {};
  i = {yyyy: {regex: "\\d{4}", apply: function (n) {
    this.year = +n;
  }}, yy: {regex: "\\d{2}", apply: function (n) {
    this.year = +n + 2e3;
  }}, y: {regex: "\\d{1,4}", apply: function (n) {
    this.year = +n;
  }}, MMMM: {regex: n.DATETIME_FORMATS.MONTH.join("|"), apply: function (t) {
    this.month = n.DATETIME_FORMATS.MONTH.indexOf(t);
  }}, MMM: {regex: n.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (t) {
    this.month = n.DATETIME_FORMATS.SHORTMONTH.indexOf(t);
  }}, MM: {regex: "0[1-9]|1[0-2]", apply: function (n) {
    this.month = n - 1;
  }}, M: {regex: "[1-9]|1[0-2]", apply: function (n) {
    this.month = n - 1;
  }}, dd: {regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (n) {
    this.date = +n;
  }}, d: {regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (n) {
    this.date = +n;
  }}, EEEE: {regex: n.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: n.DATETIME_FORMATS.SHORTDAY.join("|")}, HH: {regex: "(?:0|1)[0-9]|2[0-3]", apply: function (n) {
    this.hours = +n;
  }}, H: {regex: "1?[0-9]|2[0-3]", apply: function (n) {
    this.hours = +n;
  }}, mm: {regex: "[0-5][0-9]", apply: function (n) {
    this.minutes = +n;
  }}, m: {regex: "[0-9]|[1-5][0-9]", apply: function (n) {
    this.minutes = +n;
  }}, sss: {regex: "[0-9][0-9][0-9]", apply: function (n) {
    this.milliseconds = +n;
  }}, ss: {regex: "[0-5][0-9]", apply: function (n) {
    this.seconds = +n;
  }}, s: {regex: "[0-9]|[1-5][0-9]", apply: function (n) {
    this.seconds = +n;
  }}};
  this.parse = function (t, i, e) {
    var o, a, e, s, v, c;
    if (!angular.isString(t) || !i) return t;
    i = n.DATETIME_FORMATS[i] || i;
    i = i.replace(r, "\\$&");
    this.parsers[i] || (this.parsers[i] = u(i));
    var l = this.parsers[i], y = l.regex, p = l.map, h = t.match(y);
    if (h && h.length) {
      for (e = new Date(e), isNaN(e.getTime()) && (e = null), o = e ? {year: e.getFullYear(), month: e.getMonth(), date: e.getDate(), hours: e.getHours(), minutes: e.getMinutes(), seconds: e.getSeconds(), milliseconds: e.getMilliseconds()} : {year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0}, s = 1, v = h.length; s < v; s++) c = p[s - 1], c.apply && c.apply.call(o, h[s]);
      return f(o.year, o.month, o.date) && (a = new Date(o.year, o.month, o.date, o.hours, o.minutes, o.seconds, o.milliseconds || 0)), a;
    }
  };
}]);
angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", "$rootScope", function (n, t) {
  var i = null, r, u;
  this.open = function (t) {
    i || (n.bind("click", r), n.bind("keydown", u));
    i && i !== t && (i.isOpen = false);
    i = t;
  };
  this.close = function (t) {
    i === t && (i = null, n.unbind("click", r), n.unbind("keydown", u));
  };
  r = function (n) {
    var r, u;
    i && (n && i.getAutoClose() === "disabled" || (r = i.getToggleElement(), n && r && r[0].contains(n.target)) || (u = i.getElement(), n && i.getAutoClose() === "outsideClick" && u && u[0].contains(n.target)) || (i.isOpen = false, t.$$phase || i.$apply()));
  };
  u = function (n) {
    n.which === 27 && (i.focusToggleElement(), r());
  };
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", function (n, t, i, r, u, f, e, o) {
  var h = this, s = n.$new(), v = r.openClass, c, a = angular.noop, y = t.onToggle ? i(t.onToggle) : angular.noop, l = false;
  this.init = function (r) {
    if (h.$element = r, t.isOpen && (c = i(t.isOpen), a = c.assign, n.$watch(c, function (n) {
      s.isOpen = !!n;
    })), l = angular.isDefined(t.dropdownAppendToBody), l && h.dropdownMenu) {
      o.find("body").append(h.dropdownMenu);
      r.on("$destroy", function () {
        h.dropdownMenu.remove();
      });
    }
  };
  this.toggle = function (n) {
    return s.isOpen = arguments.length ? !!n : !s.isOpen;
  };
  this.isOpen = function () {
    return s.isOpen;
  };
  s.getToggleElement = function () {
    return h.toggleElement;
  };
  s.getAutoClose = function () {
    return t.autoClose || "always";
  };
  s.getElement = function () {
    return h.$element;
  };
  s.focusToggleElement = function () {
    h.toggleElement && h.toggleElement[0].focus();
  };
  s.$watch("isOpen", function (t, i) {
    if (l && h.dropdownMenu) {
      var r = e.positionElements(h.$element, h.dropdownMenu, "bottom-left", true);
      h.dropdownMenu.css({top: r.top + "px", left: r.left + "px", display: t ? "block" : "none"});
    }
    f[t ? "addClass" : "removeClass"](h.$element, v);
    t ? (s.focusToggleElement(), u.open(s)) : u.close(s);
    a(n, t);
    angular.isDefined(t) && t !== i && y(n, {open: !!t});
  });
  n.$on("$locationChangeSuccess", function () {
    s.isOpen = false;
  });
  n.$on("$destroy", function () {
    s.$destroy();
  });
}]).directive("dropdown", function () {
  return {controller: "DropdownController", link: function (n, t, i, r) {
    r.init(t);
  }};
}).directive("dropdownMenu", function () {
  return {restrict: "AC", require: "?^dropdown", link: function (n, t, i, r) {
    r && (r.dropdownMenu = t);
  }};
}).directive("dropdownToggle", function () {
  return {require: "?^dropdown", link: function (n, t, i, r) {
    if (r) {
      r.toggleElement = t;
      var u = function (u) {
        u.preventDefault();
        t.hasClass("disabled") || i.disabled || n.$apply(function () {
          r.toggle();
        });
      };
      t.bind("click", u);
      t.attr({"aria-haspopup": true, "aria-expanded": false});
      n.$watch(r.isOpen, function (n) {
        t.attr("aria-expanded", !!n);
      });
      n.$on("$destroy", function () {
        t.unbind("click", u);
      });
    }
  }};
});
angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (n, t) {
  function i(n, i) {
    return n.currentStyle ? n.currentStyle[i] : t.getComputedStyle ? t.getComputedStyle(n)[i] : n.style[i];
  }
  var u = function (t) {
    for (var u = n[0], i = t.offsetParent || u; i && i !== u && (i(i, "position") || "static") === "static";) i = i.offsetParent;
    return i || u;
  };
  return {position: function (t) {
    var e = this.offset(t), r = {top: 0, left: 0}, i = u(t[0]), f;
    return i != n[0] && (r = this.offset(angular.element(i)), r.top += i.clientTop - i.scrollTop, r.left += i.clientLeft - i.scrollLeft), f = t[0].getBoundingClientRect(), {width: f.width || t.prop("offsetWidth"), height: f.height || t.prop("offsetHeight"), top: e.top - r.top, left: e.left - r.left};
  }, offset: function (i) {
    var r = i[0].getBoundingClientRect();
    return {width: r.width || i.prop("offsetWidth"), height: r.height || i.prop("offsetHeight"), top: r.top + (t.pageYOffset || n[0].documentElement.scrollTop), left: r.left + (t.pageXOffset || n[0].documentElement.scrollLeft)};
  }, positionElements: function (n, t, i, r) {
    var a = i.split("-"), h = a[0], e = a[1] || "center", u, c, l, f, o, s;
    u = r ? this.offset(n) : this.position(n);
    c = t.prop("offsetWidth");
    l = t.prop("offsetHeight");
    o = {center: function () {
      return u.left + u.width / 2 - c / 2;
    }, left: function () {
      return u.left;
    }, right: function () {
      return u.left + u.width;
    }};
    s = {center: function () {
      return u.top + u.height / 2 - l / 2;
    }, top: function () {
      return u.top;
    }, bottom: function () {
      return u.top + u.height;
    }};
    switch (h) {
      case "right":
        f = {top: s[e](), left: o[h]()};
        break;
      case "left":
        f = {top: s[e](), left: u.left - c};
        break;
      case "bottom":
        f = {top: s[h](), left: o[e]()};
        break;
      default:
        f = {top: u.top - l, left: o[e]()};
    }
    return f;
  }};
}]);
angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", false).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function (n, t, i, r, u) {
  function e(n) {
    for (var t in n) if (o.style[t] !== undefined) return n[t];
  }
  u || r.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
  var f = function (r, u, e) {
    e = e || {};
    var s = n.defer(), o = f[e.animation ? "animationEndEventName" : "transitionEndEventName"], h = function () {
      i.$apply(function () {
        r.unbind(o, h);
        s.resolve(r);
      });
    };
    return o && r.bind(o, h), t(function () {
      angular.isString(u) ? r.addClass(u) : angular.isFunction(u) ? u(r) : angular.isObject(u) && r.css(u);
      o || s.resolve(r);
    }), s.promise.cancel = function () {
      o && r.unbind(o, h);
      s.reject("Transition cancelled");
    }, s.promise;
  }, o = document.createElement("trans");
  return f.transitionEndEventName = e({WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}), f.animationEndEventName = e({WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"}), f;
}]);
angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function () {
  return {createNew: function () {
    var n = [];
    return {add: function (t, i) {
      n.push({key: t, value: i});
    }, get: function (t) {
      for (var i = 0; i < n.length; i++) if (t == n[i].key) return n[i];
    }, keys: function () {
      for (var i = [], t = 0; t < n.length; t++) i.push(n[t].key);
      return i;
    }, top: function () {
      return n[n.length - 1];
    }, remove: function (t) {
      for (var r = -1, i = 0; i < n.length; i++) if (t == n[i].key) {
        r = i;
        break;
      }
      return n.splice(r, 1)[0];
    }, removeTop: function () {
      return n.splice(n.length - 1, 1)[0];
    }, length: function () {
      return n.length;
    }};
  }};
}).directive("modalBackdrop", ["$timeout", function (n) {
  function t(t) {
    t.animate = false;
    n(function () {
      t.animate = true;
    });
  }
  return {restrict: "EA", replace: true, templateUrl: "template/modal/backdrop.html", compile: function (n, i) {
    return n.addClass(i.backdropClass), t;
  }};
}]).directive("modalWindow", ["$modalStack", "$q", function (n, t) {
  return {restrict: "EA", scope: {index: "@", animate: "="}, replace: true, transclude: true, templateUrl: function (n, t) {
    return t.templateUrl || "template/modal/window.html";
  }, link: function (i, r, u) {
    r.addClass(u.windowClass || "");
    i.size = u.size;
    i.close = function (t) {
      var i = n.getTop();
      i && i.value.backdrop && i.value.backdrop != "static" && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), n.dismiss(i.key, "backdrop click"));
    };
    i.$isRendered = true;
    var f = t.defer();
    u.$observe("modalRender", function (n) {
      n == "true" && f.resolve();
    });
    f.promise.then(function () {
      var t, u;
      i.animate = true;
      t = r[0].querySelectorAll("[autofocus]");
      t.length ? t[0].focus() : r[0].focus();
      u = n.getTop();
      u && n.modalRendered(u.key);
    });
  }};
}]).directive("modalAnimationClass", [function () {
  return {compile: function (n, t) {
    t.modalAnimation && n.addClass(t.modalAnimationClass);
  }};
}]).directive("modalTransclude", function () {
  return {link: function (n, t, i, r, u) {
    u(n.$parent, function (n) {
      t.empty();
      t.append(n);
    });
  }};
}).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (n, t, i, r, u, f) {
  function c() {
    for (var t = -1, i = o.keys(), n = 0; n < i.length; n++) o.get(i[n]).value.backdrop && (t = n);
    return t;
  }
  function a(n) {
    var r = i.find("body").eq(0), t = o.get(n).value;
    o.remove(n);
    v(t.modalDomEl, t.modalScope, function () {
      r.toggleClass(l, o.length() > 0);
      k();
    });
  }
  function k() {
    if (h && c() == -1) {
      var n = s;
      v(h, s, function () {
        n = null;
      });
      h = undefined;
      s = undefined;
    }
  }
  function v(i, r, f) {
    function e() {
      e.done || (e.done = true, i.remove(), r.$destroy(), f && f());
    }
    if (r.animate = false, i.attr("modal-animation") && n.enabled()) i.one("$animate:close", function () {
      u.$evalAsync(e);
    }); else t(e);
  }
  function y(n) {
    var t, i, r;
    if (n.isDefaultPrevented()) return n;
    if (t = o.top(), t) switch (n.which) {
      case 27:
        t.value.keyboard && (n.preventDefault(), u.$apply(function () {
          e.dismiss(t.key, "escape key press");
        }));
        break;
      case 9:
        i = e.loadFocusElementList(t);
        r = false;
        n.shiftKey ? (e.isFocusInFirstItem(n, i) || e.isModalFocused(n, t)) && (r = e.focusLastFocusableElement(i)) : e.isFocusInLastItem(n, i) && (r = e.focusFirstFocusableElement(i));
        r && (n.preventDefault(), n.stopPropagation());
    }
  }
  var l = "modal-open", h, s, o = f.createNew(), e = {}, w = "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]";
  u.$watch(c, function (n) {
    s && (s.index = n);
  });
  i.on("keydown", y);
  return u.$on("$destroy", function () {
    i.off("keydown", y);
  }), e.open = function (n, t) {
    var p = i[0].activeElement, f, v, e, a, y;
    o.add(n, {deferred: t.deferred, renderDeferred: t.renderDeferred, modalScope: t.scope, backdrop: t.backdrop, keyboard: t.keyboard});
    f = i.find("body").eq(0);
    v = c();
    v >= 0 && !h && (s = u.$new(true), s.index = v, e = angular.element('<div modal-backdrop="modal-backdrop"></div>'), e.attr("backdrop-class", t.backdropClass), t.animation && e.attr("modal-animation", "true"), h = r(e)(s), f.append(h));
    a = angular.element('<div modal-window="modal-window"></div>');
    a.attr({"template-url": t.windowTemplateUrl, "window-class": t.windowClass, size: t.size, index: o.length() - 1, animate: "animate"}).html(t.content);
    t.animation && a.attr("modal-animation", "true");
    y = r(a)(t.scope);
    o.top().value.modalDomEl = y;
    o.top().value.modalOpener = p;
    f.append(y);
    f.addClass(l);
  }, e.close = function (n, t) {
    var i = o.get(n);
    return i && !i.value.modalScope.$broadcast("modal.closing", t, true).defaultPrevented ? (i.value.deferred.resolve(t), a(n), i.value.modalOpener.focus(), true) : !i;
  }, e.dismiss = function (n, t) {
    var i = o.get(n);
    return i && !i.value.modalScope.$broadcast("modal.closing", t, false).defaultPrevented ? (i.value.deferred.reject(t), a(n), i.value.modalOpener.focus(), true) : !i;
  }, e.dismissAll = function (n) {
    for (var t = this.getTop(); t && this.dismiss(t.key, n);) t = this.getTop();
  }, e.getTop = function () {
    return o.top();
  }, e.modalRendered = function (n) {
    var t = o.get(n);
    t && t.value.renderDeferred.resolve();
  }, e.focusFirstFocusableElement = function (n) {
    return n.length > 0 ? (n[0].focus(), true) : false;
  }, e.focusLastFocusableElement = function (n) {
    return n.length > 0 ? (n[n.length - 1].focus(), true) : false;
  }, e.isModalFocused = function (n, t) {
    if (n && t) {
      var i = t.value.modalDomEl;
      if (i && i.length) return (n.target || n.srcElement) === i[0];
    }
    return false;
  }, e.isFocusInFirstItem = function (n, t) {
    return t.length > 0 ? (n.target || n.srcElement) === t[0] : false;
  }, e.isFocusInLastItem = function (n, t) {
    return t.length > 0 ? (n.target || n.srcElement) === t[t.length - 1] : false;
  }, e.loadFocusElementList = function (n) {
    var t, i;
    if (n && (t = n.value.modalDomEl, t && t.length)) return i = t[0].querySelectorAll(w), i ? Array.prototype.filter.call(i, function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }) : i;
  }, e;
}]).provider("$modal", function () {
  var n = {options: {animation: true, backdrop: true, keyboard: true}, $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function (t, i, r, u, f, e) {
    function s(n) {
      return n.template ? r.when(n.template) : u(angular.isFunction(n.templateUrl) ? n.templateUrl() : n.templateUrl);
    }
    function h(n) {
      var i = [];
      return angular.forEach(n, function (n) {
        (angular.isFunction(n) || angular.isArray(n)) && i.push(r.when(t.invoke(n)));
      }), i;
    }
    var o = {};
    return o.open = function (t) {
      var o = r.defer(), c = r.defer(), a = r.defer(), u = {result: o.promise, opened: c.promise, rendered: a.promise, close: function (n) {
        return e.close(u, n);
      }, dismiss: function (n) {
        return e.dismiss(u, n);
      }}, l;
      if (t = angular.extend({}, n.options, t), t.resolve = t.resolve || {}, !t.template && !t.templateUrl) throw new Error("One of template or templateUrl options is required.");
      return l = r.all([s(t)].concat(h(t.resolve))), l.then(function (n) {
        var r = (t.scope || i).$new(), h, s, c;
        r.$close = u.close;
        r.$dismiss = u.dismiss;
        s = {};
        c = 1;
        t.controller && (s.$scope = r, s.$modalInstance = u, angular.forEach(t.resolve, function (t, i) {
          s[i] = n[c++];
        }), h = f(t.controller, s), t.controllerAs && (r[t.controllerAs] = h));
        e.open(u, {scope: r, deferred: o, renderDeferred: a, content: n[0], animation: t.animation, backdrop: t.backdrop, keyboard: t.keyboard, backdropClass: t.backdropClass, windowClass: t.windowClass, windowTemplateUrl: t.windowTemplateUrl, size: t.size});
      }, function (n) {
        o.reject(n);
      }), l.then(function () {
        c.resolve(true);
      }, function (n) {
        c.reject(n);
      }), u;
    }, o;
  }]};
  return n;
});
angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (n) {
  var i = this, t = i.tabs = n.tabs = [], r = true, u;
  i.select = function (i) {
    angular.forEach(t, function (n) {
      n.active && n !== i && (n.active = false, n.onDeselect());
    });
    i.active = true;
    setTimeout(function () {
      n.$apply(function () {
        r ? r = false : angular.element("#tab" + i.$id).focus();
      });
    }, 110);
    i.onSelect();
  };
  i.addTab = function (n) {
    t.push(n);
    t.length === 1 && n.active !== false ? n.active = true : n.active ? i.select(n) : n.active = false;
  };
  i.removeTab = function (n) {
    var r = t.indexOf(n), f;
    n.active && t.length > 1 && !u && (f = r == t.length - 1 ? r - 1 : r + 1, i.select(t[f]));
    t.splice(r, 1);
  };
  n.$on("$destroy", function () {
    u = true;
  });
}]).directive("tabset", function () {
  return {restrict: "EA", transclude: true, replace: true, scope: {type: "@"}, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function (n, t, i) {
    n.vertical = angular.isDefined(i.vertical) ? n.$parent.$eval(i.vertical) : false;
    n.justified = angular.isDefined(i.justified) ? n.$parent.$eval(i.justified) : false;
  }};
}).directive("tab", ["$parse", "$log", function (n, t) {
  return {require: "^tabset", restrict: "EA", replace: true, templateUrl: "template/tabs/tab.html", transclude: true, scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function () {}, link: function (n, t) {
    n.$watch("headingElement", function (n) {
      n && (t.html(""), t.append(n));
    });
  }, compile: function (i, r, u) {
    return function (i, r, f, e) {
      i.$watch("active", function (n) {
        n && e.select(i);
      });
      i.disabled = false;
      f.disable && i.$parent.$watch(n(f.disable), function (n) {
        i.disabled = !!n;
      });
      f.disabled && (t.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), i.$parent.$watch(n(f.disabled), function (n) {
        i.disabled = !!n;
      }));
      i.select = function () {
        i.disabled || (i.active = true);
      };
      e.addTab(i);
      i.$on("$destroy", function () {
        e.removeTab(i);
      });
      r.bind("keydown", function (n) {
        var t = e.tabs.indexOf(i);
        (n.which === 37 || n.which === 40) && t + 1 < e.tabs.length && i.$apply(function () {
          e.select(e.tabs[t + 1]);
        });
        (n.which === 39 || n.which === 38) && t - 1 >= 0 && i.$apply(function () {
          e.select(e.tabs[t - 1]);
        });
      });
      i.$transcludeFn = u;
    };
  }};
}]).directive("tabHeadingTransclude", [function () {
  return {restrict: "A", require: "^tab", link: function (n, t) {
    n.$watch("headingElement", function (n) {
      n && (t.html(""), t.append(n));
    });
  }};
}]).directive("tabContentTransclude", function () {
  return {restrict: "A", require: "^tabset", link: function (t, i, r) {
    var u = t.$eval(r.tabContentTransclude);
    u.$transcludeFn(u.$parent, function (t) {
      angular.forEach(t, function (t) {
        t.tagName && (t.hasAttribute("tab-heading") || t.hasAttribute("data-tab-heading") || t.tagName.toLowerCase() === "tab-heading" || t.tagName.toLowerCase() === "data-tab-heading") ? u.headingElement = t : i.append(t);
      });
    });
  }};
});
angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position", "fluent.validation"]).constant("datepickerConfig", {formatDay: "dd", formatMonth: "MMMM", formatYear: "yyyy", formatDayHeader: "EEE", formatDayTitle: "MMMM yyyy", formatMonthTitle: "yyyy", datepickerMode: "day", minMode: "day", maxMode: "year", showWeeks: true, startingDay: 0, yearRange: 20, minDate: null, maxDate: null, shortcutPropagation: false}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (n, t, i, r, u, f, e, o) {
  var s = this, h = {$setViewValue: angular.noop}, c;
  this.modes = ["day", "month", "year"];
  angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function (i, u) {
    s[i] = angular.isDefined(t[i]) ? u < 8 ? r(t[i])(n.$parent) : n.$parent.$eval(t[i]) : o[i];
  });
  angular.forEach(["minDate", "maxDate"], function (r) {
    t[r] ? n.$parent.$watch(i(t[r]), function (n) {
      s[r] = n ? new Date(n) : null;
      s.refreshView();
    }) : s[r] = o[r] ? new Date(o[r]) : null;
  });
  n.datepickerMode = n.datepickerMode || o.datepickerMode;
  n.maxMode = s.maxMode;
  n.uniqueId = "datepicker-" + n.$id + "-" + Math.floor(Math.random() * 1e4);
  angular.isDefined(t.initDate) ? (this.activeDate = n.$parent.$eval(t.initDate) || new Date, n.$parent.$watch(t.initDate, function (n) {
    n && (h.$isEmpty(h.$modelValue) || h.$invalid) && (s.activeDate = n, s.refreshView());
  })) : this.activeDate = new Date;
  n.isActive = function (t) {
    return s.compare(t.date, s.activeDate) === 0 ? (n.activeDateId = t.uid, true) : false;
  };
  this.init = function (n) {
    h = n;
    h.$render = function () {
      s.render();
    };
  };
  this.render = function () {
    if (h.$viewValue) {
      var n = new Date(h.$viewValue), t = !isNaN(n);
      t ? this.activeDate = n : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      h.$setValidity("date", t);
    }
    this.refreshView();
  };
  this.refreshView = function () {
    if (this.element) {
      this._refreshView();
      var n = h.$viewValue ? new Date(h.$viewValue) : null;
      h.$setValidity("date-disabled", !n || this.element && !this.isDisabled(n));
    }
  };
  this.createDateObject = function (n, t) {
    var i = h.$viewValue ? new Date(h.$viewValue) : null;
    return {date: n, label: e(n, t), selected: i && this.compare(n, i) === 0, disabled: this.isDisabled(n), current: this.compare(n, new Date) === 0, customClass: this.customClass(n)};
  };
  this.isDisabled = function (i) {
    return this.minDate && this.compare(i, this.minDate) < 0 || this.maxDate && this.compare(i, this.maxDate) > 0 || t.dateDisabled && n.dateDisabled({date: i, mode: n.datepickerMode});
  };
  this.customClass = function (t) {
    return n.customClass({date: t, mode: n.datepickerMode});
  };
  this.split = function (n, t) {
    for (var i = []; n.length > 0;) i.push(n.splice(0, t));
    return i;
  };
  n.select = function (t) {
    if (n.datepickerMode === s.minMode) {
      var i = h.$viewValue ? new Date(h.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
      i.setFullYear(t.getFullYear(), t.getMonth(), t.getDate());
      h.$setViewValue(i);
      h.$render();
    } else s.activeDate = t, n.datepickerMode = s.modes[s.modes.indexOf(n.datepickerMode) - 1];
  };
  n.move = function (n) {
    var t = s.activeDate.getFullYear() + n * (s.step.years || 0), i = s.activeDate.getMonth() + n * (s.step.months || 0);
    s.activeDate.setFullYear(t, i, 1);
    s.refreshView();
  };
  n.toggleMode = function (t) {
    (t = t || 1, (n.datepickerMode !== s.maxMode || t !== 1) && (n.datepickerMode !== s.minMode || t !== -1)) && (n.datepickerMode = s.modes[s.modes.indexOf(n.datepickerMode) + t]);
  };
  n.keys = {13: "enter", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down"};
  c = function () {
    u(function () {
      s.element[0].focus();
    }, 0, false);
  };
  n.$on("datepicker.focus", c);
  n.keydown = function (t) {
    var i = n.keys[t.which];
    if (i && !t.shiftKey && !t.altKey) if (t.preventDefault(), s.shortcutPropagation || t.stopPropagation(), i === "enter" || i === "space") {
      if (s.isDisabled(s.activeDate)) return;
      n.select(s.activeDate);
      c();
    } else t.ctrlKey && (i === "up" || i === "down") ? (n.toggleMode(i === "up" ? 1 : -1), c()) : (s.handleKeyDown(i, t), s.refreshView());
  };
}]).directive("datepicker", function () {
  return {restrict: "EA", replace: true, templateUrl: "template/datepicker/datepicker.html", scope: {datepickerMode: "=?", dateDisabled: "&", customClass: "&", shortcutPropagation: "&?"}, require: ["datepicker", "?^ngModel"], controller: "DatepickerController", link: function (n, t, i, r) {
    var f = r[0], u = r[1];
    u && f.init(u);
  }};
}).directive("daypicker", ["dateFilter", function (n) {
  return {restrict: "EA", replace: true, templateUrl: "template/datepicker/day.html", require: "^datepicker", link: function (t, i, r, u) {
    function f(n, t) {
      return t === 1 && n % 4 == 0 && (n % 100 != 0 || n % 400 == 0) ? 29 : e[t];
    }
    function o(n, t) {
      var r = new Array(t), i = new Date(n), u = 0;
      for (i.setHours(12); u < t;) r[u++] = new Date(i), i.setDate(i.getDate() + 1);
      return r;
    }
    function s(n) {
      var t = new Date(n), i;
      return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1;
    }
    t.showWeeks = u.showWeeks;
    u.step = {months: 1};
    u.element = i;
    var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    u._refreshView = function () {
      var w = u.activeDate.getFullYear(), c = u.activeDate.getMonth(), l = new Date(w, c, 1), h = u.startingDay - l.getDay(), a = h > 0 ? 7 - h : -h, v = new Date(l), i, r, f, y, p, e;
      for (a > 0 && v.setDate(-a + 1), i = o(v, 42), r = 0; r < 42; r++) i[r] = angular.extend(u.createDateObject(i[r], u.formatDay), {secondary: i[r].getMonth() !== c, uid: t.uniqueId + "-" + r});
      for (t.labels = new Array(7), f = 0; f < 7; f++) t.labels[f] = {abbr: n(i[f].date, u.formatDayHeader), full: n(i[f].date, "EEEE")};
      if (t.title = n(u.activeDate, u.formatDayTitle), t.rows = u.split(i, 7), t.showWeeks) for (t.weekNumbers = [], y = (11 - u.startingDay) % 7, p = t.rows.length, e = 0; e < p; e++) t.weekNumbers.push(s(t.rows[e][y].date));
    };
    u.compare = function (n, t) {
      return new Date(n.getFullYear(), n.getMonth(), n.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate());
    };
    u.handleKeyDown = function (n) {
      var t = u.activeDate.getDate(), i;
      n === "left" ? t = t - 1 : n === "up" ? t = t - 7 : n === "right" ? t = t + 1 : n === "down" ? t = t + 7 : n === "pageup" || n === "pagedown" ? (i = u.activeDate.getMonth() + (n === "pageup" ? -1 : 1), u.activeDate.setMonth(i, 1), t = Math.min(f(u.activeDate.getFullYear(), u.activeDate.getMonth()), t)) : n === "home" ? t = 1 : n === "end" && (t = f(u.activeDate.getFullYear(), u.activeDate.getMonth()));
      u.activeDate.setDate(t);
    };
    u.refreshView();
  }};
}]).directive("monthpicker", ["dateFilter", function (n) {
  return {restrict: "EA", replace: true, templateUrl: "template/datepicker/month.html", require: "^datepicker", link: function (t, i, r, u) {
    u.step = {years: 1};
    u.element = i;
    u._refreshView = function () {
      for (var r = new Array(12), f = u.activeDate.getFullYear(), i = 0; i < 12; i++) r[i] = angular.extend(u.createDateObject(new Date(f, i, 1), u.formatMonth), {uid: t.uniqueId + "-" + i});
      t.title = n(u.activeDate, u.formatMonthTitle);
      t.rows = u.split(r, 3);
    };
    u.compare = function (n, t) {
      return new Date(n.getFullYear(), n.getMonth()) - new Date(t.getFullYear(), t.getMonth());
    };
    u.handleKeyDown = function (n) {
      var t = u.activeDate.getMonth(), i;
      n === "left" ? t = t - 1 : n === "up" ? t = t - 3 : n === "right" ? t = t + 1 : n === "down" ? t = t + 3 : n === "pageup" || n === "pagedown" ? (i = u.activeDate.getFullYear() + (n === "pageup" ? -1 : 1), u.activeDate.setFullYear(i)) : n === "home" ? t = 0 : n === "end" && (t = 11);
      u.activeDate.setMonth(t);
    };
    u.refreshView();
  }};
}]).directive("yearpicker", ["dateFilter", function () {
  return {restrict: "EA", replace: true, templateUrl: "template/datepicker/year.html", require: "^datepicker", link: function (n, t, i, r) {
    var u = r.yearRange;
    r.step = {years: u};
    r.element = t;
    r._refreshView = function () {
      for (var i = new Array(u), t = 0, e = parseInt((r.activeDate.getFullYear() - 1) / u, 10) * u + 1; t < u; t++) i[t] = angular.extend(r.createDateObject(new Date(e + t, 0, 1), r.formatYear), {uid: n.uniqueId + "-" + t});
      n.title = [i[0].label, i[u - 1].label].join(" - ");
      n.rows = r.split(i, 5);
    };
    r.compare = function (n, t) {
      return n.getFullYear() - t.getFullYear();
    };
    r.handleKeyDown = function (n) {
      var t = r.activeDate.getFullYear();
      n === "left" ? t = t - 1 : n === "up" ? t = t - 5 : n === "right" ? t = t + 1 : n === "down" ? t = t + 5 : n === "pageup" || n === "pagedown" ? t += (n === "pageup" ? -1 : 1) * r.step.years : n === "home" ? t = parseInt((r.activeDate.getFullYear() - 1) / u, 10) * u + 1 : n === "end" && (t = parseInt((r.activeDate.getFullYear() - 1) / u, 10) * u + 1 + u - 1);
      r.activeDate.setFullYear(t);
    };
    r.refreshView();
  }};
}]).constant("datepickerPopupConfig", {datepickerPopup: "yyyy-MM-dd", html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"}, currentText: "Today", clearText: "Clear", closeText: "Done", closeOnDateSelection: true, appendToBody: false, showButtonBar: true}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", "getFluentDateRange", function (n, t, i, r, u, f, e, o) {
  return {restrict: "EA", require: "ngModel", scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&", customClass: "&"}, link: function (s, h, c, l) {
    function nt(n) {
      return n.replace(/([A-Z])/g, function (n) {
        return "-" + n.toLowerCase();
      });
    }
    function it(n) {
      if (angular.isNumber(n) && (n = new Date(n)), n) {
        if (angular.isDate(n) && !isNaN(n)) return n;
        if (angular.isString(n)) {
          var t = f.parse(n, a, s.date) || new Date(n);
          return isNaN(t) ? undefined : t;
        }
        return undefined;
      }
      return null;
    }
    function rt(n, t) {
      var i = n || t, r;
      return angular.isNumber(i) && (i = new Date(i)), i ? angular.isDate(i) && !isNaN(i) ? true : angular.isString(i) ? (r = o.parseDate(i, a) || new Date(i), !isNaN(r)) : false : true;
    }
    var a, tt = angular.isDefined(c.closeOnDateSelection) ? s.$parent.$eval(c.closeOnDateSelection) : e.closeOnDateSelection, g = angular.isDefined(c.datepickerAppendToBody) ? s.$parent.$eval(c.datepickerAppendToBody) : e.appendToBody, y, p, v, w, b, d, k;
    if (s.showButtonBar = angular.isDefined(c.showButtonBar) ? s.$parent.$eval(c.showButtonBar) : e.showButtonBar, s.getText = function (n) {
      return s[n + "Text"] || e[n + "Text"];
    }, y = false, e.html5Types[c.type] ? (a = e.html5Types[c.type], y = true) : (a = c.datepickerPopup || e.datepickerPopup, c.$observe("datepickerPopup", function (n) {
      var t = n || e.datepickerPopup;
      if (t !== a && (a = t, l.$modelValue = null, !a)) throw new Error("datepickerPopup must have a date format specified.");
    })), !a) throw new Error("datepickerPopup must have a date format specified.");
    if (y && c.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
    p = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
    p.attr({"ng-model": "date", "ng-change": "dateSelection()"});
    v = angular.element(p.children()[0]);
    y && c.type == "month" && (v.attr("datepicker-mode", '"month"'), v.attr("min-mode", "month"));
    c.datepickerOptions && (w = s.$parent.$eval(c.datepickerOptions), w.initDate && (s.initDate = w.initDate, v.attr("init-date", "initDate"), delete w.initDate), angular.forEach(w, function (n, t) {
      v.attr(nt(t), n);
    }));
    s.watchData = {};
    angular.forEach(["minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function (n) {
      var i, r;
      c[n] && (i = t(c[n]), s.$parent.$watch(i, function (t) {
        s.watchData[n] = t;
      }), v.attr(nt(n), "watchData." + n), n === "datepickerMode" && (r = i.assign, s.$watch("watchData." + n, function (n, t) {
        n !== t && angular.isFunction(r) && r(s.$parent, n);
      })));
    });
    c.dateDisabled && v.attr("date-disabled", "dateDisabled({ date: date, mode: mode })");
    c.showWeeks && v.attr("show-weeks", c.showWeeks);
    c.customClass && v.attr("custom-class", "customClass({ date: date, mode: mode })");
    y ? l.$formatters.push(function (n) {
      return s.date = n, n;
    }) : (l.$$parserName = "date", l.$validators.date = rt, l.$parsers.unshift(it), l.$formatters.push(function (n) {
      return s.date = n, l.$isEmpty(n) ? n : u(n, a);
    }));
    s.dateSelection = function (n) {
      angular.isDefined(n) && (s.date = n);
      var t = s.date ? u(s.date, a) : "";
      h.val(t);
      l.$setViewValue(t);
      tt && (s.isOpen = false, h[0].focus(), setTimeout(function () {
        h.parent()[0].click();
      }, 200));
    };
    l.$viewChangeListeners.push(function () {
      s.date = f.parse(l.$viewValue, a, s.date) || new Date(l.$viewValue);
    });
    b = function (n) {
      s.isOpen && n.target !== h[0] && s.$apply(function () {
        s.isOpen = false;
      });
    };
    d = function (n) {
      s.keydown(n);
    };
    h.bind("keydown", d);
    s.keydown = function (n) {
      n.which === 27 ? (n.preventDefault(), s.isOpen && n.stopPropagation(), s.close()) : n.which !== 40 || s.isOpen || (s.isOpen = true);
    };
    s.$watch("isOpen", function (n) {
      n ? (c.dateMin && (s.watchData.minDate = o.get(s.$parent, s.$eval(c.dateMin))), c.dateMax && (s.watchData.maxDate = o.get(s.$parent, s.$eval(c.dateMax))), s.$broadcast("datepicker.focus"), s.position = g ? r.offset(h) : r.position(h), s.position.top = s.position.top + h.prop("offsetHeight"), i.bind("click", b)) : i.unbind("click", b);
    });
    s.select = function (n) {
      if (n === "today") {
        var t = new Date;
        angular.isDate(s.date) ? (n = new Date(s.date), n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate())) : n = new Date(t.setHours(0, 0, 0, 0));
      }
      s.dateSelection(n);
    };
    s.close = function () {
      s.isOpen = false;
      h[0].focus();
      setTimeout(function () {
        h[0].blur();
      }, 100);
    };
    k = n(p)(s);
    p.remove();
    g ? i.find("body").append(k) : h.after(k);
    s.$on("$destroy", function () {
      k.remove();
      h.unbind("keydown", d);
      i.unbind("click", b);
    });
  }};
}]).directive("datepickerPopupWrap", function () {
  return {restrict: "EA", replace: true, transclude: true, templateUrl: "template/datepicker/popup.html", link: function (n, t) {
    t.bind("click", function (n) {
      n.preventDefault();
      n.stopPropagation();
    });
  }};
});
angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (n) {
  n.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
}]);
angular.module("template/modal/window.html", []).run(["$templateCache", function (n) {
  n.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" aria-labelledby="modalHeader"  aria-describedby="modalBody" class="modal"\n    modal-animation-class="fade"\n	ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n');
}]);
jQuery.extend(jQuery.fn.pickadate.defaults, {monthsFull: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], monthsShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"], weekdaysFull: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום ששי", "יום שבת"], weekdaysShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש"], today: "היום", clear: "לאפס", close: "סגור", format: "dd/mm/yyyy", formatSubmit: "yyyy/mm/dd"});
var mpCfg = angular.module("ui.bootstrap.datepicker").config(["datepickerPopupConfig", function (n) {
  n.currentText = "החודש";
  n.closeText = "סגירה";
  n.clearText = "ניקוי";
}]);
(function (n) {
  "use strict";
  n.module("jcs-autoValidate", []);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").provider("validator", [function () {
    var t = {}, i = true, r = true, u = true, e = function (n) {
      var t;
      return n && n.length !== 0 ? (t = n.toLowerCase(), n = !(t === "f" || t === "0" || t === "false")) : n = false, n;
    }, o = function (n, t) {
      var i;
      return n !== undefined && (i = n.attr(t) || n.attr("data-" + t)), i;
    }, s = function (n, t) {
      var i;
      return n !== undefined && (i = n.attr(t) !== undefined || n.attr("data-" + t) !== undefined), i;
    };
    this.enable = function (n) {
      u = n;
    };
    this.isEnabled = function () {
      return u;
    };
    this.setDefaultElementModifier = function (n) {
      if (t[n] === undefined) throw new Error("Element modifier not registered: " + n);
      this.defaultElementModifier = n;
    };
    this.registerDomModifier = function (n, i) {
      t[n] = i;
    };
    this.setErrorMessageResolver = function (n) {
      this.errorMessageResolver = n;
    };
    this.getErrorMessage = function (t, i) {
      var r;
      if (this.errorMessageResolver === undefined) throw new Error("Please set an error message resolver via the setErrorMessageResolver function before attempting to resolve an error message.");
      return s(i, "disable-validation-message") ? (r = n.injector(["ng"]).get("$q").defer(), r.resolve(""), r.promise) : this.errorMessageResolver(t, i);
    };
    this.setValidElementStyling = function (n) {
      i = n;
    };
    this.setInvalidElementStyling = function (n) {
      r = n;
    };
    this.getDomModifier = function (n) {
      var i = (n !== undefined ? n.attr("element-modifier") : this.defaultElementModifier) || (n !== undefined ? n.attr("data-element-modifier") : this.defaultElementModifier) || this.defaultElementModifier;
      if (i === undefined) throw new Error("Please set a default dom modifier via the setDefaultElementModifier method on the validator class.");
      return t[i];
    };
    this.makeValid = function (n) {
      i && !e(o(n, "disable-valid-styling")) ? this.getDomModifier(n).makeValid(n) : this.makeDefault(n);
    };
    this.makeInvalid = function (n, t) {
      r && !e(o(n, "disable-invalid-styling")) ? this.getDomModifier(n).makeInvalid(n, t) : this.makeDefault(n);
    };
    this.makeDefault = function (n) {
      var t = this.getDomModifier(n);
      t.makeDefault && t.makeDefault(n);
    };
    this.defaultFormValidationOptions = {forceValidation: false, disabled: false, validateNonVisibleControls: false};
    this.$get = [function () {
      return this;
    }];
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").factory("bootstrap3ElementModifier", ["$log", function (t) {
    var i = function (t) {
      n.forEach(t.find("span"), function (t) {
        t = n.element(t);
        (t.hasClass("error-msg") || t.hasClass("form-control-feedback") || t.hasClass("control-feedback")) && t.remove();
      });
      t.removeClass("has-success has-error has-feedback");
    }, s = function (n, t) {
      for (var r, i = n, u = 0; u <= 3; u += 1) if (i !== undefined && i.hasClass(t)) {
        r = i;
        break;
      } else i !== undefined && (i = i.parent());
      return r;
    }, e = function (t, i) {
      for (var r, u = 0; u < t.children.length; u += 1) if (r = t.children[u], r !== undefined && n.element(r).hasClass(i)) break; else if (r.children !== undefined && (r = e(r, i), r.length > 0)) break;
      return n.element(r);
    }, u = function (n, t) {
      n[0].parentNode.insertBefore(t[0], n[0].nextSibling);
    }, f = false, h = function (n) {
      f = n;
    }, c = function (e) {
      var h = s(e, "form-group"), c, s;
      h ? (i(h), c = e(h[0], "input-group"), h.addClass("has-success " + (c.length > 0 ? "" : "has-feedback")), f && (s = '<span class="glyphicon glyphicon-ok form-control-feedback"></span>', c.length > 0 && (s = s.replace("form-", ""), s = '<span class="input-group-addon control-feedback">' + s + "</span"), u(e, n.element(s)))) : t.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
    }, l = function (e, s) {
      var l = s(e, "form-group"), a = n.element('<span class="help-block has-error error-msg">' + s + "</span>"), c, h;
      l ? (i(l), c = e(l[0], "input-group"), l.addClass("has-error " + (c.length > 0 ? "" : "has-feedback")), u(c.length > 0 ? c : e, a), f && (h = '<span class="glyphicon glyphicon-remove form-control-feedback"></span>', c.length > 0 && (h = h.replace("form-", ""), h = '<span class="input-group-addon control-feedback">' + h + "</span"), u(e, n.element(h)))) : t.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
    }, a = function (n) {
      var u = s(n, "form-group");
      u ? i(u) : t.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
    };
    return {makeValid: c, makeInvalid: l, makeDefault: a, enableValidationStateIcons: h, key: "bs3"};
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").factory("jcs-debounce", ["$timeout", function (t) {
    var i = function (i, r, u) {
      r = n.isUndefined(r) ? 0 : r;
      u = n.isUndefined(u) ? true : u;
      var f = 0;
      return function () {
        var e = this, o = arguments, n;
        return f += 1, n = function (n) {
          return function () {
            if (n === f) return i.apply(e, o);
          };
        }(f), t(n, r, u);
      };
    };
    return {debounce: i};
  }]);
}(angular), function (n, t) {
  "use strict";
  "format" in n.prototype || (n.prototype.format = function () {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function (t, i) {
      return typeof n[i] !== undefined ? n[i] : t;
    });
  });
  t.autoValidate = t.autoValidate || {errorMessages: {}};
  t.autoValidate.errorMessages["en-us"] = t.autoValidate.errorMessages["en-gb"] = {defaultMsg: "Please add error message for {0}", email: "Please enter a valid email address", minlength: "Please enter at least {0} characters", maxlength: "You have entered more than the maximum {0} characters", min: "Please enter the minimum number of {0}", max: "Please enter the maximum number of {0}", required: "This field is required", date: "Please enter a valid date", pattern: "Please ensure the entered information adheres to this pattern {0}", number: "Please enter a valid number", url: "Please enter a valid URL in the format of http(s)://www.google.com"};
  t.module("jcs-autoValidate").factory("defaultErrorMessageResolver", ["$q", "$http", function (n, i) {
    var r = "en-gb", f = "js/angular-auto-validate/dist/lang", u, o = function (n) {
      return u = i.get("{0}/jcs-auto-validate_{1}.json".format(f, n.toLowerCase()));
    }, s = function (n) {
      f = n;
    }, h = function (i, f) {
      var e = n.defer();
      return f = f || o, r = i.toLowerCase(), t.autoValidate.errorMessages[r] === undefined ? (u = f(i), u.then(function (n) {
        u = undefined;
        t.autoValidate.errorMessages[r] = n.data;
        e.resolve(t.autoValidate.errorMessages[r]);
      }, function (n) {
        t.autoValidate.errorMessages[r] = {defaultMsg: "Loading culture failed!"};
        u = null;
        e.reject(n);
      })) : e.resolve(t.autoValidate.errorMessages[r]), e.promise;
    }, c = function (i) {
      var f = n.defer();
      return i = i === undefined ? r : i.toLowerCase(), u !== undefined ? u.then(function () {
        f.resolve(t.autoValidate.errorMessages[i]);
      }, function (n) {
        f.reject(n);
      }) : f.resolve(t.autoValidate.errorMessages[i]), f.promise;
    }, l = function (n, t) {
      var i;
      return t && (n += "-err-type", i = t.attr("ng-" + n), i === undefined && (i = t.attr("data-ng-" + n) || t.attr(n)), i && (i = i.replace(/[\W]/g, ""))), i;
    }, e = function (i, f) {
      var h = n.defer(), o, a = [], s, c;
      if (u !== undefined) u.then(function () {
        e(i, f).then(function (n) {
          h.resolve(n);
        });
      }); else {
        if (o = t.autoValidate.errorMessages[r][i], c = l(i, f), c && (o = t.autoValidate.errorMessages[r][c]), o === undefined && (o = t.autoValidate.errorMessages[r].defaultMsg.format(i)), f && f.attr) try {
          s = f.attr("ng-" + i);
          s === undefined && (s = f.attr("data-ng-" + i) || f.attr(i));
          a.push(s || "");
          o = o.format(a);
        } catch (v) {}
        h.resolve(o);
      }
      return h.promise;
    };
    return {setI18nFileRootPath: s, setCulture: h, getErrorMessages: c, resolve: e};
  }]);
}(String, angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").factory("foundation5ElementModifier", [function () {
    var t = function (t, i) {
      n.forEach(t.find("small"), function (t) {
        n.element(t).hasClass("error") && n.element(t).remove();
      });
      i.removeClass("error");
    }, i = function (n) {
      for (var t = n, i = 0; i <= 3; i += 1) if (t !== undefined && t.hasClass("columns")) break; else t !== undefined && (t = t.parent());
      return t;
    }, r = function (n) {
      var r = i(n);
      t(r && r.length > 0 ? r : n, n);
    }, u = function (r, u) {
      var f = i(r), e;
      t(f || r, r);
      r.addClass("error");
      f && (e = n.element('<small class="error">' + u + "</small>"), f.append(e));
    }, f = function (n) {
      r(n);
    };
    return {makeValid: r, makeInvalid: u, makeDefault: f, key: "foundation5"};
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").factory("jcs-elementUtils", [function () {
    return {isElementVisible: n};
  }]);
  n.module("jcs-autoValidate").factory("validationManager", ["validator", "jcs-elementUtils", function (t, i) {
    var o = ["input", "textarea", "select", "form"], h = function (i) {
      var r = n.element(i).controller("form");
      return r !== undefined && r !== null ? r.autoValidateFormOptions : t.defaultFormValidationOptions;
    }, u = function (i, u, f) {
      var o = true, e = f || h(u), c = i && i.$pristine === false || e.forceValidation, s, l = function (t) {
        var i = true, r;
        return n.forEach(t, function (n, t) {
          i && n && (i = false, r = t);
        }), r;
      };
      return e.forceValidation && n.forEach(i.$parsers, function (n) {
        n(i.$viewValue);
      }), e.disabled === false && (e.forceValidation || u && u.length > 0 && (i.isElementVisible(u) || e.validateNonVisibleControls) && (o.indexOf(u[0].nodeName.toLowerCase()) > -1 || u[0].hasAttribute("register-custom-form-control")) && i && c) && (o = !i.$invalid, o ? t.makeValid(u) : (s = l(i.$errors || i.$error), s === undefined ? o = true : t.getErrorMessage(s, u).then(function (n) {
        t.makeInvalid(u, n);
      }))), o;
    }, c = function (n) {
      t.makeDefault(n);
    }, f = function (t) {
      n.forEach(t[0], function (t) {
        var i, r = n.element(t);
        i = r.controller("ngModel");
        i !== undefined && (r[0].nodeName.toLowerCase() === "form" ? f(r) : i.$setPristine());
      });
    }, e = function (t) {
      var s = true, i = t ? n.element(t).controller("form") : undefined, h = function (t, f, o) {
        var h, c;
        return t = n.element(t), h = t.controller("ngModel"), h !== undefined && (f || t && t.length > 0 && (i.isElementVisible(t) || i.autoValidateFormOptions.validateNonVisibleControls) && (o.indexOf(t[0].nodeName.toLowerCase()) > -1 || t[0].hasAttribute("register-custom-form-control"))) && (t[0].nodeName.toLowerCase() === "form" ? e(t) : (c = u(h, t, o), s = s && c)), c;
      }, f, o;
      return t === undefined || i !== undefined && i.autoValidateFormOptions.disabled ? t !== undefined : (f = n.copy(i.autoValidateFormOptions), f.forceValidation = true, o = false, n.forEach(t[0].all || t[0].elements || t[0], function (n) {
        var i = false, t;
        n.attributes["s2-options"] && (i = true);
        t = h(n, i, f, o);
        (n.nodeName === "BUTTON" || n.type === "hidden" || t == undefined) && (n.attributes["s2-options"] || (t = true));
        t || o || (o = true, setTimeout(function () {
          n.attributes["s2-options"] ? $("#" + n.attributes.id.value).select2("focus") : n.focus();
        }, 300));
      }), t[0].customHTMLFormControlsCollection && n.forEach(t[0].customHTMLFormControlsCollection, function (n) {
        h(n, true, f);
      }), s);
    }, l = function (n, i, r) {
      i ? t.getErrorMessage(i, n).then(function (i) {
        t.makeInvalid(n, i);
      }) : t.makeInvalid(n, r);
    };
    return {setElementValidationError: l, validateElement: u, validateForm: e, resetElement: c, resetForm: f};
  }]);
}(angular), function (n) {
  "use strict";
  function i(i, r, u) {
    var f = i.autoValidateFormOptions = i.autoValidateFormOptions || n.copy(r.defaultFormValidationOptions);
    f.forceValidation = false;
    f.disabled = !r.isEnabled() || u.disableDynamicValidation !== undefined && u.disableDynamicValidation !== "false";
    f.validateNonVisibleControls = u.validateNonVisibleControls !== undefined && u.validateNonVisibleControls !== "false";
  }
  n.module("jcs-autoValidate").directive("form", ["validator", function (n) {
    return {restrict: "E", require: "form", priority: 9999, compile: function () {
      return {pre: function (t, r, u, f) {
        i(f, n, u);
      }};
    }};
  }]);
  n.module("jcs-autoValidate").directive("ngForm", ["validator", function (n) {
    return {restrict: "EA", require: "form", priority: 9999, compile: function () {
      return {pre: function (t, r, u, f) {
        i(f, n, u);
      }};
    }};
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").directive("form", ["validationManager", function (n) {
    return {restrict: "E", link: function (t, i) {
      i.on("reset", function () {
        n.resetForm(i);
      });
      t.$on("$destroy", function () {
        i.off("reset");
      });
    }};
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").directive("registerCustomFormControl", [function () {
    var t = function (t) {
      for (var i = t, r = 0; r <= 50; r += 1) if (i !== undefined && i.nodeName.toLowerCase() === "form") break; else i !== undefined && (i = n.element(i).parent()[0]);
      return i;
    };
    return {restrict: "A", link: function (n, i) {
      var r = t(i.parent()[0]);
      r && (r.customHTMLFormControlsCollection = r.customHTMLFormControlsCollection || [], r.customHTMLFormControlsCollection.push(i[0]));
    }};
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").config(["$provide", function (n) {
    n.decorator("ngSubmitDirective", ["$delegate", "$parse", "validationManager", function (n, t, i) {
      return n[0].compile = function (n, r) {
        var u = t(r.ngSubmit), f = r.ngSubmitForce === "true";
        return function (n, t) {
          t.on("submit", function (r) {
            n.$apply(function () {
              i.validateForm(t) || f === true ? (n.$root.$broadcast("form-validation-valid"), u(n, {$event: r})) : n.$root.$broadcast("form-validation-failed");
            });
          });
        };
      }, n;
    }]);
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").config(["$provide", function (t) {
    t.decorator("ngModelDirective", ["$timeout", "$delegate", "validationManager", "jcs-debounce", function (t, i, r, u) {
      var e = i[0], f = e.link || e.compile;
      return e.compile = function (t) {
        return function (i, e, o, s) {
          var h = s[0], c = s[1], a = n.version.major >= 1 && n.version.minor >= 3, l = o.ngModelOptions === undefined ? undefined : i.$eval(o.ngModelOptions), y = h.$setValidity, p = h.$setPristine, v = u.debounce(function () {
            var n = c !== undefined && c !== null ? c.autoValidateFormOptions : undefined;
            r.validateElement(h, e, n);
          }, 100);
          if (a && n.isFunction(f) && (f = f(t)), f.pre && (f.pre.apply(this, arguments), l = h.$options === undefined ? undefined : h.$options), o.formnovalidate === undefined || c !== undefined && c.disableDynamicValidation === false) {
            if (a || l === undefined || l.updateOn === undefined || l.updateOn === "") h.$setValidity = function (n, t) {
              y.call(h, n, t);
              v();
            }; else {
              e.on(l.updateOn, function () {
                v();
              });
              i.$on("$destroy", function () {
                e.off(l.updateOn);
              });
            }
            h.$setPristine = function () {
              p.call(h);
              r.resetElement(e);
            };
            h.autoValidated = true;
          }
          f.post ? f.post.apply(this, arguments) : f.apply(this, arguments);
          h.setExternalValidation = function (n, t, i) {
            i && (h.$error ? h.$error[n] = false : h.$errors[n] = false);
            r.setElementValidationError(e, n, t);
          };
          h.removeExternalValidation = function (n, t) {
            t && (h.$error ? h.$error[n] = true : h.$errors[n] = true);
            r.resetElement(e);
          };
          c && (c.setExternalValidation = function (n, t, i, r) {
            var u = false;
            return c[n] && (c[n].setExternalValidation(t, i, r), u = true), u;
          }, c.removeExternalValidation = function (n, t, i, r) {
            var u = false;
            return c[n] && (c[n].removeExternalValidation(t, r), u = true), u;
          });
        };
      }, i;
    }]);
  }]);
}(angular), function (n) {
  "use strict";
  n.module("jcs-autoValidate").run(["validator", "defaultErrorMessageResolver", "bootstrap3ElementModifier", "foundation5ElementModifier", function (n, t, i, r) {
    n.setErrorMessageResolver(t.resolve);
    n.registerDomModifier(i.key, i);
    n.registerDomModifier(r.key, r);
    n.setDefaultElementModifier(i.key);
  }]);
}(angular));
(function (n) {
  "use strict";
  function t(t, i, r) {
    if (n.isUndefined(i[r + "Condition"])) return true;
    var u = t[i[r + "Condition"]];
    return n.isFunction(u) ? u() : true;
  }
  function i(n, t, i, r) {
    r ? t.removeAttr("aria-invalid") : t.attr("aria-invalid", true);
    n.$setValidity(i, r);
  }
  function r(t, i) {
    var r, o, u;
    if (!i || (r = i.relativeValue ? i.relativeValue === "0001/01/01" ? new Date(-62135596800000) : new Date(i.relativeValue) : i.relativeTo, n.isUndefined(r) || r == null ? r = y() : n.isString(r) && (r = t.$eval(r)), n.isString(r) && (r = new f(r, i.dateformat)), !n.isDate(r))) return null;
    if (o = i.period, u = r, o != 0) switch (i.periodType) {
      case "Days":
        u = p(r, o);
        break;
      case "Months":
        u = c(r, o);
        break;
      case "Years":
        u = w(r, o);
    }
    switch (i.edge) {
      case "UntilEndOfMonth":
        u = h(u);
        break;
      case "FromStartOfMonth":
        u = s(u);
    }
    return u;
  }
  function a(n, t, u, e, o, c, l, a) {
    var v = !a, y, p;
    if (a) {
      if ((y = f(l, c), y == null) || (o.dateformat = u.dateformat, p = r(n, o), p == null)) return true;
      switch (o.comparison) {
        case "LessThan":
          y < p && (v = true);
          break;
        case "LessThanOrEqual":
          y <= p && (v = true);
          break;
        case "UntilEndOfMonth":
          y <= h(p) && (v = true);
          break;
        case "GreaterThan":
          y > p && (v = true);
          break;
        case "GreaterThanOrEqual":
          y >= p && (v = true);
          break;
        case "FromStartOfMonth":
          y >= s(p) && (v = true);
      }
    }
    return i(e, t, "~fvrule" + o.rule + "|date" + o.comparison, v), v;
  }
  function v(t, r, u, f, o, s, h) {
    var l = !h, c, a;
    if (h) {
      if (typeof s == "undefined" || (c = o.value, c = t.$eval(c), n.isUndefined(c))) return true;
      u.valNumber && (c = Number(c), s = Number(s));
      u["valCmpFvrule" + o.rule] && (a = t.$eval(u["valCmpFvrule" + o.rule]), a && r.attr("data-val-cmpv-fvrule" + o.rule, a));
      switch (o.comparison) {
        case "Equal":
          s == c && (l = true);
          break;
        case "NotEqual":
          s != c && (l = true);
          break;
        case "LessThan":
          s < c && (l = true);
          break;
        case "LessOrEqualTo":
          s <= c && (l = true);
          break;
        case "GreaterThan":
          s > c && (l = true);
          break;
        case "GreaterOrEqualTo":
          s >= c && (l = true);
      }
    }
    return i(f, r, "~fvrule" + o.rule + "|" + o.comparison, l), l;
  }
  function f(n, t) {
    var i, o, f, e, r, s, u;
    if (n instanceof Date || n == null) return n;
    if (n.indexOf("0001-01-01") > -1 || n === "0001/01/01") return new Date(-62135596800000);
    if (n.indexOf("T") == 10 && (t = "y-m-d"), i = n.split(/\W+/), i.length == 1) if (n.length == 6) i = [n.substr(0, 2), n.substr(2, 2), n.substr(4, 2)]; else if (n.length == 8) i = [n.substr(0, 2), n.substr(2, 2), n.substr(4, 4)]; else return null; else i[0].length == 4 && (t = "y-m-d");
    for (o = t.split(/\W+/), o.length == 2 && (f = 1), s = Math.min(o.length, i.length), u = 0; u < s; u++) switch (o[u][0]) {
      case "d":
        if (f = parseInt(i[u], 10), isNaN(f)) return null;
        break;
      case "m":
      case "M":
        if ((e = parseInt(i[u], 10) - 1, isNaN(e)) || e < 0 || e > 11) return null;
        break;
      case "y":
        if ((r = parseInt(i[u], 10), isNaN(r)) || r < 0) return null;
        r += r > 100 ? 0 : r < 29 ? 2e3 : 1900;
    }
    return (f === undefined && (f = 1), r === undefined || e === undefined) ? null : new Date(r, e, f);
  }
  function s(n) {
    return new Date(n.getFullYear(), n.getMonth(), 1);
  }
  function h(n) {
    return new Date(n.getFullYear(), n.getMonth(), new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate());
  }
  function y() {
    var n = new Date;
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }
  function p(n, t) {
    var i = new Date(n);
    return i.setDate(i.getDate() + t * 1), i;
  }
  function c(n, t) {
    var i = new Date(n), r = i.getDate();
    return i.setDate(1), i.setMonth(i.getMonth() + t * 1), i.setDate(Math.min(r, new Date(i.getFullYear(), i.getMonth() + 1, 0).getDate())), i;
  }
  function w(n, t) {
    var i = new Date(n);
    return c(i, t * 12);
  }
  var l, u = n.module("fluent.validation", ["ngLocale", "jcs-autoValidate"]).provider("fluentDateRange", function () {
    this.$get = function () {
      return r;
    };
    this.getDateRange = r;
  }).directive("fvValidationSummary", ["$rootScope", function (t) {
    function r(n) {
      for (var t = n, i = 0; i <= 6; i += 1) if (t !== undefined && t[0].tagName == "FORM") break; else t !== undefined && (t = t.parent());
      return t;
    }
    function u(n) {
      for (var t = n, i = 0; i <= 6; i += 1) if (t !== undefined && t.hasClass("modal")) break; else t !== undefined && (t = t.parent());
      return t;
    }
    function i(n, t) {
      t && n.parent()[0] && n.parent()[0].offsetWidth > 0 ? n.html('<div class="sr-only" role="alert"><div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span>&nbsp;' + t + "</div></div>") : n.html("");
    }
    return function (f, e, o) {
      var s = r(e), h = u(e);
      if (setTimeout(function () {
        $(s).find("#redAsteriskText").length == 0 && ($(s).find("[required]").length > 0 || $(s).find("[ng-required]").length > 0 || $(s).find(".required-inp").length > 0) && n.element('<div class="row"><div class="col-xs-12" id="redAsteriskText">שדה עם ציון כוכבית <span>*</span> הינו שדה חובה</div></div><div class="clearfix"></div>').insertBefore($(s).find("div.form-group").first());
      }, 110), h) h.on("hidden.bs.modal", function () {
        e.html("");
        var n = $(s);
        n.removeClass("ng-dirty ng-submitted ng-invalid ng-invalid-pattern ng-valid-parse");
        n.find("span.has-error.error-msg").remove();
        n.find("div.form-group").removeClass("has-error has-feedback");
      });
      o.permission && f.$watch(o.permission, function () {
        var n = f.$eval(o.permission);
        n && n != "3" && ($(s).find("input").attr("disabled", true), $(s).find("textarea").attr("disabled", true), $(s).find("select").prop("disabled", true), $(s).find("button[type=submit]").hide(), $(s).find("button[type=button]").hide());
      });
      s.scope().$watch(function () {
        return s.attr("class");
      }, function () {
        s.hasClass("ng-invalid") || e.html("");
      });
      t.$on("form-validation-failed", function () {
        s.hasClass("ng-invalid") && i(e, "אירעו שגיאות, נא לעבור על השדות ולתקן לפי הודעת השגיאה שבכל שדה.");
      });
      t.$on("server-error", function () {
        i(e, "ארעה תקלה. אנא נסו לבצע פעולה זו מאוחר יותר.");
      });
    };
  }]).directive("fvValidation", ["$locale", "validationManager", "jcs-debounce", "$filter", function (i, r, u, f) {
    return {restrict: "A", require: "ngModel", link: function (i, u, e, o) {
      var h = i.$eval(e.fvValidation), b, c, w, l, y, s, p;
      for (i.form._fvValidating = {}, b = function (s) {
        var k = new Date, d, y, l, p, b;
        if (i.form._fvValidating && i.form._fvValidating[e.ngModel] && (d = k - i.form._fvValidating[e.ngModel], d < 100)) return console.log("Recursive Validation for " + e.ngModel + " stopped."), s;
        for (i.form._fvValidating && (i.form._fvValidating[e.ngModel] = k), y = 0; y < h.length; y++) {
          var c = h[y], w = t(i, c, c.comparison), g = !w;
          g = c.type == "date" ? a(i, u, e, o, c, e.dateformat, s, w) : v(i, u, e, o, c, s, w);
        }
        if (l = i.form._fvRelated, !i.form.$pristine && s && l && l[e.ngModel]) for (p in l[e.ngModel]) b = n.element("#" + l[e.ngModel][p]), b.val() && setTimeout(function () {
          i.form.$pristine || (r.validateElement(i.form[p.substr(3)], b, true), console.log("Validated " + e.ngModel + " & Related: " + p));
        }, 150);
        return n.isDate(s) && (s = f("date")(s, "yyyy-MM-ddT00:00:00Z")), s;
      }, o.$parsers.push(b), c = {}, w = false, l = 0; l < h.length; l++) y = h[l], y.relativeTo && !c[y.relativeTo] && (c[y.relativeTo] = true, w = true);
      if (w) {
        s = i.form._fvRelated;
        s || (s = {}, i.form._fvRelated = s);
        for (p in c) s[p] || (s[p] = {}), s[p][e.ngModel] = u[0].id;
      }
    }};
  }]).directive("fvCreditcard", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      function e(n) {
        var i, f;
        if (/[^0-9 \-]+/.test(n)) return false;
        var u = 0, t = 0, r = false;
        for (n = n.replace(/\D/g, ""), i = n.length - 1; i >= 0; i--) f = n.charAt(i), t = parseInt(f, 10), r && (t *= 2) > 9 && (t -= 9), u += t, r = !r;
        return u % 10 == 0;
      }
      var o = function (o) {
        if (typeof o == "undefined") return o;
        var s = t(n, u, "creditcard"), h = !s;
        return s && (h = o.$eval(t)), i(f, r, "creditcard", h), o;
      };
      f.$parsers.push(o);
    }};
  }).directive("fvIsraelicreditcard", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      function e(n) {
        var i, h;
        if (/[^0-9 \-]+/.test(n)) return false;
        if (n.length == 8 || n.length == 9) {
          n.length == 8 && (n = "0" + n);
          for (var e = 0, r = n.length - 1, o = 1, u; r >= 0;) {
            if (u = parseInt(n.charAt(r), 10), isNaN(u)) return false;
            e += u * o;
            o++;
            r--;
          }
          return e % 11 == 0;
        }
        var s = 0, t = 0, f = false;
        for (n = n.replace(/\D/g, ""), i = n.length - 1; i >= 0; i--) h = n.charAt(i), t = parseInt(h, 10), f && (t *= 2) > 9 && (t -= 9), s += t, f = !f;
        return s % 10 == 0;
      }
      var o = function (o) {
        if (typeof o == "undefined") return o;
        var s = t(n, u, "israelicreditcard"), h = !s;
        return s && (h = o.$eval(t)), i(f, r, "israelicreditcard", h), o;
      };
      f.$parsers.push(o);
    }};
  }).directive("fvLength", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      var e = n.$eval(u.fvLength), o = function (o) {
        var h, c, s;
        return typeof o == "undefined" ? o : (h = t(n, u, "length"), c = !h, h && (s = String(o).length, c = typeof e.min == "undefined" ? s == e : s >= e.min && s <= e.max), i(f, r, "length", c), o);
      };
      f.$parsers.push(o);
    }};
  }).directive("fvNumber", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      var e = function (e) {
        var o, s, h;
        return typeof e == "undefined" ? e : (o = t(n, u, "number"), s = !o, o && (h = /^(\+|-)?\d+$/, s = h.test(e)), i(f, r, "number", s), e);
      };
      f.$parsers.push(e);
    }};
  }).directive("fvRequired", function () {
    return {restrict: "A", require: "ngModel", link: function (r, u, f, e) {
      var o = function (o) {
        var s = t(r, f, "required"), h = !s;
        return s && (u.attr("aria-required", true), h = o !== null && n.isDefined(o) && (!n.isString(o) || n.isString(o) && o != "")), i(e, u, "required", h), o;
      };
      e.$parsers.push(o);
      t(r, f, "required") && u.attr("aria-required", true);
    }};
  }).directive("fvPattern", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      var e = function (e) {
        var o, s, h;
        return typeof e == "undefined" ? e : (o = t(n, u, "pattern"), s = !o, o && (h = new RegExp(u.fvPattern), s = h.test(e)), i(f, r, "pattern", s), e);
      };
      f.$parsers.push(e);
    }};
  }).directive("fvCustomValidation", function () {
    return {restrict: "A", require: "ngModel", link: function (n, r, u, f) {
      var e = function (e) {
        var s, h, o;
        return typeof e == "undefined" ? e : (s = t(n, u, "custom"), h = !s, s && (o = u.fvCustomValidation, o && n[o] && (h = n[o](e, u.required, n))), i(f, r, "custom", h), e);
      };
      f.$parsers.push(e);
    }};
  }).directive("fvPercentage", function () {
    function k(t, s, h, c) {
      w(c, h);
      b(c, h);
      h.$observe("precision", function (n) {
        var t = parseFloat(n);
        isNaN(t) ? t = u : t < 0 || t < r && (t = r);
        i = t;
      });
      h.$observe("min", function (n) {
        var t = parseFloat(n);
        e = isNaN(t) ? f : t;
      });
      n.isDefined(h.max) && h.$observe("max", function (n) {
        var t = parseFloat(n);
        o = t;
      });
    }
    var a = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, r = 2, u = 4, f = 0, t = false, e = f, i = u, o, s = function (n, t) {
      return t.$isEmpty(n) ? true : a.test(n);
    }, h = function (n, t) {
      var i = Math.pow(10, t);
      return Math.round(n * i) / i;
    }, y = function (n, t) {
      var u = "", r;
      return t.$valid && (t.$isEmpty(n) ? u = "" : (r = s(n, t), r || (n = "", t.$setValidity("percentage", false)), r && (n = n / 100), r && i > -1 && (n = h(n, i)), u = n)), u;
    }, p = function (n, t) {
      var r = "", u;
      return t.$valid && (t.$isEmpty(n) ? r = "" : (u = s(n, t), u || (n = "", t.$setValidity("percentage", false)), u && (n = n * 100, i > -1 && (n = h(n, i), n = (i = i - 2, i < 0 && (i = 0), parseFloat(n).toFixed(i)))), r = n.toString())), r;
    }, c = function (n, t) {
      return !t.$isEmpty(n) && n < e ? (t.$setValidity("percentage", false), n) : n;
    }, l = function (n, t) {
      return !t.$isEmpty(n) && n > o ? (t.$setValidity("percentage", false), n) : n;
    }, w = function (i, r) {
      i.$parsers.push(function (n) {
        i.$setValidity("percentage", true);
        var r = n;
        return t ? console.log("ngModelCtrl.$parsers $setValidity newModelData:" + r) : "", r;
      });
      i.$parsers.push(function (n) {
        var r = c(n, i);
        return t ? console.log("ngModelCtrl.$parsers minValidator newModelData:" + r) : "", r;
      });
      n.isDefined(r.max) && i.$parsers.push(function (n) {
        var r = l(n, i);
        return t ? console.log("ngModelCtrl.$parsers maxValidator newModelData:" + r) : "", r;
      });
      i.$parsers.push(function (n) {
        var r = y(n, i);
        return t ? console.log("ngModelCtrl.$parsers formatViewDataIntoModelData newModelData:" + r) : "", r;
      });
    }, b = function (i, r) {
      i.$formatters.unshift(function (n) {
        i.$setValidity("percentage", true);
        var r = n;
        return t ? console.log("ngModelCtrl.$formatters $setValidity newViewData:" + r) : "", r;
      });
      i.$formatters.unshift(function (n) {
        var r = c(n, i);
        return t ? console.log("ngModelCtrl.$formatters minValidator newViewData:" + r) : "", r;
      });
      n.isDefined(r.max) && i.$formatters.unshift(function (n) {
        var r = l(n, i);
        return t ? console.log("ngModelCtrl.$formatters maxValidator newViewData:" + r) : "", r;
      });
      i.$formatters.unshift(function (n) {
        var r = p(n, i);
        return t ? console.log("ngModelCtrl.$formatters formatModelDataIntoViewData newViewData:" + r) : "", r;
      });
    };
    return {restrict: "A", require: "ngModel", link: k};
  }).run(["$parse", function (n) {
    l = n;
  }]);
  u.factory("myCustomErrorMessageResolver", ["$q", "$locale", function (t, i) {
    var r = function (r, u) {
      var l = t.defer(), a = i.id, v = [], o, f, s, e, h, c;
      for (s = r[0] == "~" ? r.substr(1).split("|") : [r], e = s[0], h = 0; h < s.length; h++) if (c = s[h], u && u.attr && (f = u.attr("data-val-" + c)), f === undefined && (f = n.autoValidate.errorMessages[a][c]), f) break;
      if (f === undefined && (f = n.autoValidate.errorMessages[a].defaultMsg.format(e)), u && u.attr) try {
        o = u.attr(e);
        o === undefined && (o = u.attr("data-ng-" + e) || u.attr("ng-" + e));
        u.attr("data-val-cmpv-" + e) && (o = u.attr("data-val-cmpv-" + e));
        v.push(o || "");
        f = f.format(v);
      } catch (y) {}
      return l.resolve(f), l.promise;
    };
    return {resolve: r};
  }]);
  u.factory("getFluentDateRange", function () {
    return {parseDate: f, get: function (n, t) {
      return r(n, t);
    }};
  }), function (n) {
    u.factory("fluentElementModifier", ["$log", "$rootScope", function (t, i) {
      var u = function (t) {
        n.forEach(t.find("span"), function (t) {
          t = n.element(t);
          (t.hasClass("error-msg") || t.hasClass("form-control-feedback") || t.hasClass("control-feedback")) && t.remove();
        });
        t.removeClass("has-success has-error has-feedback");
      }, c = function (n, t) {
        var i = n, u = 3, r;
        for (n.type && n.type == "radio" && (u = 6), r = 0; r <= 6; r += 1) if (i !== undefined && i.hasClass(t)) break; else i !== undefined && (i = i.parent());
        return i;
      }, h = function (t, i) {
        for (var r, u = 0; u < t.children.length; u += 1) if (r = t.children[u], r !== undefined && n.element(r).hasClass(i)) break; else if (r.children !== undefined && (r = h(r, i), r.length > 0)) break;
        return n.element(r);
      }, r = function (t, i) {
        for (var u, f = 0; f < t.children.length; f += 1) if (u = t.children[f], u !== undefined && n.element(u).attr("role") == i) break; else if (u.children !== undefined && (u = r(u, i), u.length > 0)) break;
        return n.element(u);
      }, o = function (n, t) {
        n[0].parentNode.insertBefore(t[0], n[0].nextSibling);
      }, s = false, l = function (n) {
        s = n;
      }, a = function (i) {
        var h = c(i, "form-group"), c, l = i.attr("id") + "_lblErr", r;
        i.removeAttr("aria-describedby");
        h ? (u(h), c = h(h[0], "input-group"), s && (r = '<span class="fa fa-check form-control-feedback"></span>', c.length > 0 && (r = r.replace("form-", ""), r = '<span class="input-group-addon control-feedback">' + r + "</span"), new Date(i.getFullYear(), i.getMonth() + 1, 0).getDate())) : t.error("Angular-auto-validate: invalid fluent form structure elements must be wrapped by a form-group class");
      }, v = function (h, c) {
        var y, a, l, p, v, w;
        i.AccessibilityOn && h.focus();
        y = h.attr("id") + "_lblErr";
        h.attr("type") == "radio" && (y = h.attr("id").slice(0, h.attr("id").length - 1) + "_lblErr");
        h.attr("aria-describedby", y);
        a = c(h, "form-group");
        l = null;
        h.attr("type") == "radio" || h.attr("type") == "checkbox" ? (l = r(a[0], "group"), l && l.length || (l = r(a[0], "radiogroup"))) : l = h.hasClass("choices__input") ? h.parent().parent() : h(a[0], "input-group");
        p = n.element('<span class="fa fa-exclamation-circle help-block has-error error-msg">&nbsp;<span class="error-text-font" id="' + y + '">' + c + "</span></span>");
        u(a, l);
        a ? (u(a), h.attr("type") == "radio" ? (l = r(a[0], "group"), l && l.length || (l = r(a[0], "radiogroup"))) : h.attr("type") == "checkbox" ? h.parent().hasClass("checkbox-inline") || h.parent().hasClass("inline-input") ? (l = h.parent(), p.addClass("col-xs-12")) : l = h(a[0], "input-group") : h.hasClass("choices__input") || (l = h(a[0], "input-group")), a.addClass("has-error " + (l.length > 0 ? "" : "has-feedback")), new Date((l.length > 0 ? l : h).getFullYear(), (l.length > 0 ? l : h).getMonth() + 1, 0).getDate(), s && (v = '<span class="fa fa-exclamation-circle form-control-feedback"></span>', l.length > 0 && (v = v.replace("form-", ""), v = '<span class="input-group-addon control-feedback">' + v + "</span"), new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate()), l.length == 0 && h.attr("s2-options") && (w = $("#" + h.attr("name") + "_lbl_sr"), w.text(", שגיאה: " + c))) : t.error("Angular-auto-validate: invalid fluent form structure elements must be wrapped by a form-group class");
      }, y = function (n) {
        var r = n.attr("id") + "_lblErr", i;
        n.removeAttr("aria-describedby");
        i = c(n, "form-group");
        i ? u(i) : t.error("Angular-auto-validate: invalid fluent form structure elements must be wrapped by a form-group class");
      };
      return {makeValid: a, makeInvalid: v, makeDefault: y, enableValidationStateIcons: l, key: "fluent"};
    }]);
  }(n);
  u.run(["validator", "myCustomErrorMessageResolver", "fluentElementModifier", function (n, t, i) {
    n.setErrorMessageResolver(t.resolve);
    n.registerDomModifier(i.key, i);
    n.setDefaultElementModifier(i.key);
  }]);
  n.autoValidate.errorMessages["he-il"] = {defaultMsg: "נא להוסיף הודעת שגיאה עבור {0}", email: 'נא למלא כתובת דוא"ל תקינה', minlength: "נא למלא לפחות {0} תווים", maxlength: "אין למלא יותר מ: {0} תווים", length: "נא למלא {0} תווים", min: "נא למלא מספר גדול מ: {0}", max: "נא למלא מספר קטן מ: {0}", required: "יש למלא שדה זה", date: "נא למלא שדה תאריך תקין", pattern: "הערך אינו מתאים", number: "נא למלא מספר תקין", url: "נא למלא כתובת תקנית כגון http://wwww.google.com", creditcard: "נא למלא מס' כרטיס אשראי תקין", israelicreditcard: "נא למלא מס' כרטיס אשראי תקין", dateLessThan: "תאריך חייב להיות קטן מ-'{0}'", dateLessThanOrEqual: "תאריך חייב להיות קטן או שווה ל-'{0}'", dateGreaterThan: "תאריך חייב להיות גדול מ-'{0}'", dateGreaterThanOrEqual: "תאריך חייב להיות גדול או שווה ל-'{0}'", dateUntilEndOfMonth: "תאריך חייב להיות עד סוף החודש {0}", dateFromStartOfMonth: "תאריך חייב להיות מתחילת החודש {0}", Equal: "ערך חייב להיות שווה ל-'{0}'", NotEqual: "ערך חייב להיות שונה ל-'{0}'", LessThan: "ערך חייב להיות קטן מ-'{0}'", LessOrEqualTo: "ערך חייב להיות קטן או שווה ל-'{0}'", GreaterThan: "ערך חייב להיות גדול מ-'{0}'", GreaterOrEqualTo: "ערך חייב להיות גדול או שווה ל-'{0}'", dateNotValid: "יש להזין תאריך מלא לדוגמא - 21/01/2017"};
}(angular));
(function (ng) {
  "use strict";
  ng.module("vcRecaptcha", []);
}(angular));
(function (ng) {
  "use strict";
  function throwNoKeyException() {
    throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create');
  }
  var app = ng.module("vcRecaptcha");
  app.provider("vcRecaptchaService", function () {
    var provider = this;
    var config = {};
    provider.onLoadFunctionName = "vcRecaptchaApiLoaded";
    provider.setDefaults = function (defaults) {
      ng.copy(defaults, config);
    };
    provider.setSiteKey = function (siteKey) {
      config.key = siteKey;
    };
    provider.setTheme = function (theme) {
      config.theme = theme;
    };
    provider.setStoken = function (stoken) {
      config.stoken = stoken;
    };
    provider.setSize = function (size) {
      config.size = size;
    };
    provider.setType = function (type) {
      config.type = type;
    };
    provider.setLang = function (lang) {
      config.lang = lang;
    };
    provider.setOnLoadFunctionName = function (onLoadFunctionName) {
      provider.onLoadFunctionName = onLoadFunctionName;
    };
    provider.$get = ["$rootScope", "$window", "$q", "$document", function ($rootScope, $window, $q, $document) {
      var deferred = $q.defer(), promise = deferred.promise, instances = {}, recaptcha;
      $window.vcRecaptchaApiLoadedCallback = $window.vcRecaptchaApiLoadedCallback || [];
      var callback = function () {
        recaptcha = $window.grecaptcha;
        deferred.resolve(recaptcha);
      };
      $window.vcRecaptchaApiLoadedCallback.push(callback);
      $window[provider.onLoadFunctionName] = function () {
        $window.vcRecaptchaApiLoadedCallback.forEach(function (callback) {
          callback();
        });
      };
      function getRecaptcha() {
        if (!!recaptcha) {
          return $q.when(recaptcha);
        }
        return promise;
      }
      function validateRecaptchaInstance() {
        if (!recaptcha) {
          throw new Error("reCaptcha has not been loaded yet.");
        }
      }
      if (ng.isDefined($window.grecaptcha)) {
        callback();
      } else {
        var script = $window.document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://www.google.com/recaptcha/api.js?onload=" + provider.onLoadFunctionName + "&render=explicit";
        $document.find("body").append(script);
      }
      return {create: function (elm, conf) {
        conf.sitekey = conf.key || config.key;
        conf.theme = conf.theme || config.theme;
        conf.stoken = conf.stoken || config.stoken;
        conf.size = conf.size || config.size;
        conf.type = conf.type || config.type;
        conf.hl = conf.lang || config.lang;
        if (!conf.sitekey || conf.sitekey.length !== 40) {
          throwNoKeyException();
        }
        return getRecaptcha().then(function (recaptcha) {
          var widgetId = recaptcha.render(elm, conf);
          instances[widgetId] = elm;
          return widgetId;
        });
      }, reload: function (widgetId) {
        validateRecaptchaInstance();
        recaptcha.reset(widgetId);
        $rootScope.$broadcast("reCaptchaReset", widgetId);
      }, useLang: function (widgetId, lang) {
        var instance = instances[widgetId];
        if (instance) {
          var iframe = instance.querySelector("iframe");
          if (lang) {
            if (iframe && iframe.src) {
              var s = iframe.src;
              if (/[?&]hl=/.test(s)) {
                s = s.replace(/([?&]hl=)\w+/, "$1" + lang);
              } else {
                s += (s.indexOf("?") === -1 ? "?" : "&") + "hl=" + lang;
              }
              iframe.src = s;
            }
          } else {
            if (iframe && iframe.src && /[?&]hl=\w+/.test(iframe.src)) {
              return iframe.src.replace(/.+[?&]hl=(\w+)([^\w].+)?/, "$1");
            } else {
              return null;
            }
          }
        } else {
          throw new Error("reCaptcha Widget ID not exists", widgetId);
        }
      }, getResponse: function (widgetId) {
        validateRecaptchaInstance();
        return recaptcha.getResponse(widgetId);
      }, getInstance: function (widgetId) {
        return instances[widgetId];
      }, destroy: function (widgetId) {
        delete instances[widgetId];
      }};
    }];
  });
}(angular));
(function (ng) {
  "use strict";
  var app = ng.module("vcRecaptcha");
  app.directive("vcRecaptcha", ["$document", "$timeout", "vcRecaptchaService", function ($document, $timeout, vcRecaptcha) {
    return {restrict: "A", require: "?^^form", scope: {response: "=?ngModel", key: "=?", stoken: "=?", theme: "=?", size: "=?", type: "=?", lang: "=?", tabindex: "=?", required: "=?", onCreate: "&", onSuccess: "&", onExpire: "&"}, link: function (scope, elm, attrs, ctrl) {
      scope.widgetId = null;
      if (ctrl && ng.isDefined(attrs.required)) {
        scope.$watch("required", validate);
      }
      var removeCreationListener = scope.$watch("key", function (key) {
        var callback = function (gRecaptchaResponse) {
          $timeout(function () {
            scope.response = gRecaptchaResponse;
            validate();
            scope.onSuccess({response: gRecaptchaResponse, widgetId: scope.widgetId});
          });
        };
        vcRecaptcha.create(elm[0], {callback: callback, key: key, stoken: scope.stoken || attrs.stoken || null, theme: scope.theme || attrs.theme || null, type: scope.type || attrs.type || null, lang: scope.lang || attrs.lang || null, tabindex: scope.tabindex || attrs.tabindex || null, size: scope.size || attrs.size || null, "expired-callback": expired}).then(function (widgetId) {
          validate();
          scope.widgetId = widgetId;
          scope.onCreate({widgetId: widgetId});
          scope.$on("$destroy", destroy);
          scope.$on("reCaptchaReset", function (event, resetWidgetId) {
            if (ng.isUndefined(resetWidgetId) || widgetId === resetWidgetId) {
              scope.response = "";
              validate();
            }
          });
        });
        removeCreationListener();
      });
      function destroy() {
        if (ctrl) {
          ctrl.$setValidity("recaptcha", null);
        }
        cleanup();
      }
      function expired() {
        $timeout(function () {
          scope.response = "";
          validate();
          scope.onExpire({widgetId: scope.widgetId});
        });
      }
      function validate() {
        if (ctrl) {
          ctrl.$setValidity("recaptcha", scope.required === false ? null : Boolean(scope.response));
        }
      }
      function cleanup() {
        vcRecaptcha.destroy(scope.widgetId);
        ng.element($document[0].querySelectorAll(".pls-container")).parent().remove();
      }
    }};
  }]);
}(angular));
(function (n, t, i) {
  function h(t, i) {
    this.bodyOverflowX;
    this.callbacks = {hide: [], show: []};
    this.checkInterval = null;
    this.Content;
    this.$el = n(t);
    this.$elProxy;
    this.elProxyPosition;
    this.enabled = true;
    this.options = n.extend({}, f, i);
    this.mouseIsOverProxy = false;
    this.namespace = "tooltipster-" + Math.round(Math.random() * 1e5);
    this.Status = "hidden";
    this.timerHide = null;
    this.timerShow = null;
    this.$tooltip;
    this.options.iconTheme = this.options.iconTheme.replace(".", "");
    this.options.theme = this.options.theme.replace(".", "");
    this._init();
  }
  function e(t, i) {
    var r = true;
    return n.each(t, function (n) {
      if (typeof i[n] == "undefined" || t[n] !== i[n]) return r = false, false;
    }), r;
  }
  function u() {
    var u = i.body || i.documentElement, r = u.style, n = "transition", t;
    if (typeof r[n] == "string") return true;
    for (v = ["Moz", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1), t = 0; t < v.length; t++) if (typeof r[v[t] + n] == "string") return true;
    return false;
  }
  var f = {animation: "fade", arrow: true, arrowColor: "", autoClose: true, content: null, contentAsHTML: false, contentCloning: true, debug: true, delay: 200, minWidth: 0, maxWidth: null, functionInit: function () {}, functionBefore: function (n, t) {
    t();
  }, functionReady: function () {}, functionAfter: function () {}, icon: "(?)", iconCloning: true, iconDesktop: false, iconTouch: false, iconTheme: "tooltipster-icon", interactive: false, interactiveTolerance: 350, multiple: false, offsetX: 0, offsetY: 0, onlyOne: false, position: "top", positionTracker: false, speed: 350, timer: 0, theme: "tooltipster-default", touchDevices: true, trigger: "hover", updateAnimation: true}, r, o;
  h.prototype = {_init: function () {
    var t = this, u, f;
    if (i.querySelector) if (t.options.content !== null ? t._content_set(t.options.content) : (u = t.$el.attr("title"), typeof u == "undefined" && (u = null), t._content_set(u)), f = t.options.functionInit.call(t.$el, t.$el, t.Content), typeof f != "undefined" && t._content_set(f), t.$el.removeAttr("title").addClass("tooltipstered"), !r && t.options.iconDesktop || r && t.options.iconTouch ? (typeof t.options.icon == "string" ? (t.$elProxy = n('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.$elProxy = t.options.iconCloning ? t.options.icon.clone(true) : t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, t.options.trigger == "hover") {
      t.$elProxy.on("mouseenter." + t.namespace, function () {
        (!(!o && r) || t.options.touchDevices) && (t.mouseIsOverProxy = true, t._show());
      }).on("mouseleave." + t.namespace, function () {
        (!(!o && r) || t.options.touchDevices) && (t.mouseIsOverProxy = false);
      });
      if (r && t.options.touchDevices) t.$elProxy.on("touchstart." + t.namespace, function () {
        t._showNow();
      });
    } else if (t.options.trigger == "click") t.$elProxy.on("click." + t.namespace, function () {
      (!(!o && r) || t.options.touchDevices) && t._show();
    });
  }, _show: function () {
    var n = this;
    n.Status != "shown" && n.Status != "appearing" && (n.options.delay ? n.timerShow = setTimeout(function () {
      (n.options.trigger == "click" || n.options.trigger == "hover" && n.mouseIsOverProxy) && n._showNow();
    }, n.options.delay) : n._showNow());
  }, _showNow: function (i) {
    var f = this;
    f.options.functionBefore.call(f.$el, f.$el, function () {
      var e, s, o;
      if (f.enabled && f.Content !== null) {
        if (i && f.callbacks.show.push(i), f.callbacks.hide = [], clearTimeout(f.timerShow), f.timerShow = null, clearTimeout(f.timerHide), f.timerHide = null, f.options.onlyOne && n(".tooltipstered").not(f.$el).each(function (t, i) {
          var r = n(i), u = r.data("tooltipster-ns");
          n.each(u, function (n, t) {
            var i = r.data(t), u = i.status(), f = i.option("autoClose");
            u !== "hidden" && u !== "disappearing" && f && i.hide();
          });
        }), e = function () {
          f.Status = "shown";
          n.each(f.callbacks.show, function (n, t) {
            t.call(f.$el);
          });
          f.callbacks.show = [];
        }, f.Status !== "hidden") s = 0, f.Status === "disappearing" ? (f.Status = "appearing", u() ? (f.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + f.options.animation + "-show"), f.options.speed > 0 && f.$tooltip.delay(f.options.speed), f.$tooltip.queue(e)) : f.$tooltip.stop().fadeIn(e)) : f.Status === "shown" && e(); else {
          f.Status = "appearing";
          s = f.options.speed;
          f.bodyOverflowX = n("body").css("overflow-x");
          n("body").css("overflow-x", "hidden");
          var h = "tooltipster-" + f.options.animation, c = "-webkit-transition-duration: " + f.options.speed + "ms; -webkit-animation-duration: " + f.options.speed + "ms; -moz-transition-duration: " + f.options.speed + "ms; -moz-animation-duration: " + f.options.speed + "ms; -o-transition-duration: " + f.options.speed + "ms; -o-animation-duration: " + f.options.speed + "ms; -ms-transition-duration: " + f.options.speed + "ms; -ms-animation-duration: " + f.options.speed + "ms; transition-duration: " + f.options.speed + "ms; animation-duration: " + f.options.speed + "ms;", l = f.options.minWidth ? "min-width:" + Math.round(f.options.minWidth) + "px;" : "", a = f.options.maxWidth ? "max-width:" + Math.round(f.options.maxWidth) + "px;" : "", v = f.options.interactive ? "pointer-events: auto;" : "";
          f.$tooltip = n('<div class="tooltipster-base ' + f.options.theme + '" style="' + l + " " + a + " " + v + " " + c + '"><div class="tooltipster-content"></div></div>');
          u() && f.$tooltip.addClass(h);
          f._content_insert();
          f.$tooltip.appendTo("body");
          f.reposition();
          f.options.functionReady.call(f.$el, f.$el, f.$tooltip);
          u() ? (f.$tooltip.addClass(h + "-show"), f.options.speed > 0 && f.$tooltip.delay(f.options.speed), f.$tooltip.queue(e)) : f.$tooltip.css("display", "none").fadeIn(f.options.speed, e);
          f._interval_set();
          n(t).on("scroll." + f.namespace + " resize." + f.namespace, function () {
            f.reposition();
          });
          if (f.options.autoClose) if (n("body").off("." + f.namespace), f.options.trigger == "hover") if (r && setTimeout(function () {
            n("body").on("touchstart." + f.namespace, function () {
              f.hide();
            });
          }, 0), f.options.interactive) {
            if (r) f.$tooltip.on("touchstart." + f.namespace, function (n) {
              n.stopPropagation();
            });
            o = null;
            f.$elProxy.add(f.$tooltip).on("mouseleave." + f.namespace + "-autoClose", function () {
              clearTimeout(o);
              o = setTimeout(function () {
                f.hide();
              }, f.options.interactiveTolerance);
            }).on("mouseenter." + f.namespace + "-autoClose", function () {
              clearTimeout(o);
            });
          } else f.$elProxy.on("mouseleave." + f.namespace + "-autoClose", function () {
            f.hide();
          }); else if (f.options.trigger == "click" && (setTimeout(function () {
            n("body").on("click." + f.namespace + " touchstart." + f.namespace, function () {
              f.hide();
            });
          }, 0), f.options.interactive)) f.$tooltip.on("click." + f.namespace + " touchstart." + f.namespace, function (n) {
            n.stopPropagation();
          });
        }
        f.options.timer > 0 && (f.timerHide = setTimeout(function () {
          f.timerHide = null;
          f.hide();
        }, f.options.timer + s));
      }
    });
  }, _interval_set: function () {
    var t = this;
    t.checkInterval = setInterval(function () {
      if (n("body").find(t.$el).length === 0 || n("body").find(t.$elProxy).length === 0 || t.Status == "hidden" || n("body").find(t.$tooltip).length === 0) (t.Status == "shown" || t.Status == "appearing") && t.hide(), t._interval_cancel(); else if (t.options.positionTracker) {
        var i = t._repositionInfo(t.$elProxy), r = false;
        e(i.dimension, t.elProxyPosition.dimension) && (t.$elProxy.css("position") === "fixed" ? e(i.position, t.elProxyPosition.position) && (r = true) : e(i.offset, t.elProxyPosition.offset) && (r = true));
        r || t.reposition();
      }
    }, 200);
  }, _interval_cancel: function () {
    clearInterval(this.checkInterval);
    this.checkInterval = null;
  }, _content_set: function (n) {
    typeof n == "object" && n !== null && this.options.contentCloning && (n = n.clone(true));
    this.Content = n;
  }, _content_insert: function () {
    var n = this, t = this.$tooltip.find(".tooltipster-content");
    typeof n.Content != "string" || n.options.contentAsHTML ? t.empty().append(n.Content) : t.text(n.Content);
  }, _update: function (n) {
    var t = this;
    t._content_set(n);
    t.Content !== null ? t.Status !== "hidden" && (t._content_insert(), t.reposition(), t.options.updateAnimation && (u() ? (t.$tooltip.css({width: "", "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"), setTimeout(function () {
      t.Status != "hidden" && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function () {
        t.Status !== "hidden" && t.$tooltip.css({"-webkit-transition": t.options.speed + "ms", "-moz-transition": t.options.speed + "ms", "-o-transition": t.options.speed + "ms", "-ms-transition": t.options.speed + "ms", transition: t.options.speed + "ms"});
      }, t.options.speed));
    }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, 0.5, function () {
      t.Status != "hidden" && t.$tooltip.fadeTo(t.options.speed, 1);
    }))) : t.hide();
  }, _repositionInfo: function (n) {
    return {dimension: {height: n.outerHeight(false), width: n.outerWidth(false)}, offset: n.offset(), position: {left: parseInt(n.css("left")), top: parseInt(n.css("top"))}};
  }, hide: function (i) {
    var r = this, f, e;
    return i && r.callbacks.hide.push(i), r.callbacks.show = [], clearTimeout(r.timerShow), r.timerShow = null, clearTimeout(r.timerHide), r.timerHide = null, f = function () {
      n.each(r.callbacks.hide, function (n, t) {
        t.call(r.$el);
      });
      r.callbacks.hide = [];
    }, r.Status == "shown" || r.Status == "appearing" ? (r.Status = "disappearing", e = function () {
      r.Status = "hidden";
      typeof r.Content == "object" && r.Content !== null && r.Content.detach();
      r.$tooltip.remove();
      r.$tooltip = null;
      n(t).off("." + r.namespace);
      n("body").off("." + r.namespace).css("overflow-x", r.bodyOverflowX);
      n("body").off("." + r.namespace);
      r.$elProxy.off("." + r.namespace + "-autoClose");
      r.options.functionAfter.call(r.$el, r.$el);
      f();
    }, u() ? (r.$tooltip.clearQueue().removeClass("tooltipster-" + r.options.animation + "-show").addClass("tooltipster-dying"), r.options.speed > 0 && r.$tooltip.delay(r.options.speed), r.$tooltip.queue(e)) : r.$tooltip.stop().fadeOut(r.options.speed, e)) : r.Status == "hidden" && f(), r;
  }, show: function (n) {
    return this._showNow(n), this;
  }, update: function (n) {
    return this.content(n);
  }, content: function (n) {
    return typeof n == "undefined" ? this.Content : (this._update(n), this);
  }, reposition: function () {
    var r = this, k, y, vt, p, ut, ft, w, dt, a, nt, kt, tt, gt, ni;
    if (n("body").find(r.$tooltip).length !== 0) {
      r.$tooltip.css("width", "");
      r.elProxyPosition = r._repositionInfo(r.$elProxy);
      var o = null, b = n(t).width(), i = r.elProxyPosition, e = r.$tooltip.outerWidth(false), ui = r.$tooltip.innerWidth() + 1, c = r.$tooltip.outerHeight(false);
      if (r.$elProxy.is("area")) {
        var yt = r.$elProxy.attr("shape"), ti = r.$elProxy.parent().attr("name"), et = n('img[usemap="#' + ti + '"]'), ot = et.offset().left, st = et.offset().top, v = r.$elProxy.attr("coords") !== undefined ? r.$elProxy.attr("coords").split(",") : undefined;
        if (yt == "circle") {
          var pt = parseInt(v[0]), wt = parseInt(v[1]), ht = parseInt(v[2]);
          i.dimension.height = ht * 2;
          i.dimension.width = ht * 2;
          i.offset.top = st + wt - ht;
          i.offset.left = ot + pt - ht;
        } else if (yt == "rect") {
          var pt = parseInt(v[0]), wt = parseInt(v[1]), ii = parseInt(v[2]), ri = parseInt(v[3]);
          i.dimension.height = ri - wt;
          i.dimension.width = ii - pt;
          i.offset.top = st + wt;
          i.offset.left = ot + pt;
        } else if (yt == "poly") {
          var it = 0, rt = 0, ct = 0, lt = 0, bt = "even";
          for (k = 0; k < v.length; k++) y = parseInt(v[k]), bt == "even" ? (y > ct && (ct = y, k === 0 && (it = ct)), y < it && (it = y), bt = "odd") : (y > lt && (lt = y, k == 1 && (rt = lt)), y < rt && (rt = y), bt = "even");
          i.dimension.height = lt - rt;
          i.dimension.width = ct - it;
          i.offset.top = st + rt;
          i.offset.left = ot + it;
        } else i.dimension.height = et.outerHeight(false), i.dimension.width = et.outerWidth(false), i.offset.top = st, i.offset.left = ot;
      }
      var u = 0, at = 0, l = 0, s = parseInt(r.options.offsetY), h = parseInt(r.options.offsetX), f = r.options.position;
      function d() {
        var i = n(t).scrollLeft();
        u - i < 0 && (o = u - i, u = i);
        u + e - i > b && (o = u - (b + i - e), u = b + i - e);
      }
      function g(r, u) {
        i.offset.top - n(t).scrollTop() - c - s - 12 < 0 && u.indexOf("top") > -1 && (f = r);
        i.offset.top + i.dimension.height + c + 12 + s > n(t).scrollTop() + n(t).height() && u.indexOf("bottom") > -1 && (f = r, l = i.offset.top - c - s - 12);
      }
      f == "top" && (vt = i.offset.left + e - (i.offset.left + i.dimension.width), u = i.offset.left + h - vt / 2, l = i.offset.top - c - s - 12, d(), g("bottom", "top"));
      f == "top-left" && (u = i.offset.left + h, l = i.offset.top - c - s - 12, d(), g("bottom-left", "top-left"));
      f == "top-right" && (u = i.offset.left + i.dimension.width + h - e, l = i.offset.top - c - s - 12, d(), g("bottom-right", "top-right"));
      f == "bottom" && (vt = i.offset.left + e - (i.offset.left + i.dimension.width), u = i.offset.left - vt / 2 + h, l = i.offset.top + i.dimension.height + s + 12, d(), g("top", "bottom"));
      f == "bottom-left" && (u = i.offset.left + h, l = i.offset.top + i.dimension.height + s + 12, d(), g("top-left", "bottom-left"));
      f == "bottom-right" && (u = i.offset.left + i.dimension.width + h - e, l = i.offset.top + i.dimension.height + s + 12, d(), g("top-right", "bottom-right"));
      f == "left" && (u = i.offset.left - h - e - 12, at = i.offset.left + h + i.dimension.width + 12, p = i.offset.top + c - (i.offset.top + i.dimension.height), l = i.offset.top - p / 2 - s, u < 0 && at + e > b ? (ut = parseFloat(r.$tooltip.css("border-width")) * 2, ft = e + u - ut, r.$tooltip.css("width", ft + "px"), c = r.$tooltip.outerHeight(false), u = i.offset.left - h - ft - 12 - ut, p = i.offset.top + c - (i.offset.top + i.dimension.height), l = i.offset.top - p / 2 - s) : u < 0 && (u = i.offset.left + h + i.dimension.width + 12, o = "left"));
      f == "right" && (u = i.offset.left + h + i.dimension.width + 12, at = i.offset.left - h - e - 12, p = i.offset.top + c - (i.offset.top + i.dimension.height), l = i.offset.top - p / 2 - s, u + e > b && at < 0 ? (ut = parseFloat(r.$tooltip.css("border-width")) * 2, ft = b - u - ut, r.$tooltip.css("width", ft + "px"), c = r.$tooltip.outerHeight(false), p = i.offset.top + c - (i.offset.top + i.dimension.height), l = i.offset.top - p / 2 - s) : u + e > b && (u = i.offset.left - h - e - 12, o = "right"));
      r.options.arrow && (w = "tooltipster-arrow-" + f, dt = r.options.arrowColor.length < 1 ? r.$tooltip.css("background-color") : r.options.arrowColor, o ? o == "left" ? (w = "tooltipster-arrow-right", o = "") : o == "right" ? (w = "tooltipster-arrow-left", o = "") : o = "left:" + Math.round(o) + "px;" : o = "", f == "top" || f == "top-left" || f == "top-right" ? (a = parseFloat(r.$tooltip.css("border-bottom-width")), nt = r.$tooltip.css("border-bottom-color")) : f == "bottom" || f == "bottom-left" || f == "bottom-right" ? (a = parseFloat(r.$tooltip.css("border-top-width")), nt = r.$tooltip.css("border-top-color")) : f == "left" ? (a = parseFloat(r.$tooltip.css("border-right-width")), nt = r.$tooltip.css("border-right-color")) : f == "right" ? (a = parseFloat(r.$tooltip.css("border-left-width")), nt = r.$tooltip.css("border-left-color")) : (a = parseFloat(r.$tooltip.css("border-bottom-width")), nt = r.$tooltip.css("border-bottom-color")), a > 1 && a++, kt = "", a !== 0 && (tt = "", gt = "border-color: " + nt + ";", w.indexOf("bottom") !== -1 ? tt = "margin-top: -" + Math.round(a) + "px;" : w.indexOf("top") !== -1 ? tt = "margin-bottom: -" + Math.round(a) + "px;" : w.indexOf("left") !== -1 ? tt = "margin-right: -" + Math.round(a) + "px;" : w.indexOf("right") !== -1 && (tt = "margin-left: -" + Math.round(a) + "px;"), kt = '<span class="tooltipster-arrow-border" style="' + tt + " " + gt + ';"></span>'), r.$tooltip.find(".tooltipster-arrow").remove(), ni = '<div class="' + w + ' tooltipster-arrow" style="' + o + '">' + kt + '<span style="border-color:' + dt + ';"></span></div>', r.$tooltip.append(ni));
      r.$tooltip.css({top: Math.round(l) + "px", left: Math.round(u) + "px"});
    }
    return r;
  }, enable: function () {
    return this.enabled = true, this;
  }, disable: function () {
    return this.hide(), this.enabled = false, this;
  }, destroy: function () {
    var t = this, i, r;
    return t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace), i = t.$el.data("tooltipster-ns"), i.length === 1 ? (r = typeof t.Content == "string" ? t.Content : n("<div></div>").append(t.Content).html(), t.$el.removeClass("tooltipstered").attr("title", r).removeData(t.namespace).removeData("tooltipster-ns").off("." + t.namespace)) : (i = n.grep(i, function (n) {
      return n !== t.namespace;
    }), t.$el.data("tooltipster-ns", i)), t;
  }, elementIcon: function () {
    return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : undefined;
  }, elementTooltip: function () {
    return this.$tooltip ? this.$tooltip[0] : undefined;
  }, option: function (n, t) {
    return typeof t == "undefined" ? this.options[n] : (this.options[n] = t, this);
  }, status: function () {
    return this.Status;
  }};
  n.fn.tooltipster = function () {
    var t = arguments, r, i;
    if (this.length === 0) {
      if (typeof t[0] == "string") {
        r = true;
        switch (t[0]) {
          case "setDefaults":
            n.extend(f, t[1]);
            break;
          default:
            r = false;
        }
        return r ? true : this;
      }
      return this;
    }
    if (typeof t[0] == "string") return i = "#*$~&", this.each(function () {
      var f = n(this).data("tooltipster-ns"), r = f ? n(this).data(f[0]) : null, u;
      if (r) {
        if (typeof r[t[0]] == "function") u = r[t[0]](t[1], t[2]); else throw new Error('Unknown method .tooltipster("' + t[0] + '")');
        if (u !== r) return i = u, false;
      } else throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
    }), i !== "#*$~&" ? i : this;
    var u = [], e = t[0] && typeof t[0].multiple != "undefined", o = e && t[0].multiple || !e && f.multiple, s = t[0] && typeof t[0].debug != "undefined", c = s && t[0].debug || !s && f.debug;
    return this.each(function () {
      var f = false, i = n(this).data("tooltipster-ns"), r = null;
      i ? o ? f = true : c && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : f = true;
      f && (r = new h(this, t[0]), i || (i = []), i.push(r.namespace), n(this).data("tooltipster-ns", i), n(this).data(r.namespace, r));
      u.push(r);
    }), o ? u : this;
  };
  r = !!("ontouchstart" in t);
  o = false;
  n("body").one("mousemove", function () {
    o = true;
  });
}(jQuery, window, document));
var tooltipSter = angular.module("tooltipSter", []);
tooltipSter.directive("tipster", function () {
  return {restrict: "A", link: function (n, t, i) {
    var u, r, o, s, f, h, e;
    $(t).tooltipster({contentAsHTML: true, content: i.title, position: "top", maxWidth: 300, theme: "tooltipster-shadow-bgyellow", arrow: true, iconTouch: false, iconCloning: false, autoClose: true, trigger: "click"});
    this.contentIsShown = false;
    n.$root.AccessibilityOn ? $(t).attr("tabindex", "0") : $(t).attr("tabindex", "-1");
    $(t).attr("aria-disabled", "true");
    u = null;
    r = null;
    $(t)[0].tagName !== "DIV" || $(t)[0].className.indexOf("like-a") > -1 || $(t)[0].className.indexOf("num-files") > -1 ? $(t)[0].className.indexOf("like-a") > -1 ? (r = $(t), r && $(r).text() !== "" && (u = $(r).text(), o = new RegExp("{", "g"), s = new RegExp("}", "g"), r[0].id && (f = r[0].id.replace(o, ""), f = f.replace(s, "")), h = n.$eval(f), e = h || r[0].id, $(t).append('<span class="sr-only" id="tooltipsterContent_' + e + '" role="tooltip">הסבר נוסף על ערך ' + (u ? u : "זה") + ": " + i.title + "</span>"), $(t).attr("aria-describedby", "tooltipsterContent_" + e))) : $(t)[0].tagName === "INPUT" && (r = $(t)[0].parentNode, r && (u = $(r).text(), $(r).attr("tabindex", "0"), $(r).append('<span class="sr-only" id="tooltipsterContent_' + r.id + '" role="tooltip">הסבר נוסף על שדה קלט ' + (u ? u : "זה") + ": " + i.title + "</span>"), $(r).attr("aria-describedby", "tooltipsterContent_" + r.id))) : (r = $(t)[0].parentNode.previousElementSibling, r && (u = $(r).text(), $(t).append('<span class="sr-only" id="tooltipsterContent_' + r.id + '" role="tooltip">הסבר נוסף על שדה קלט ' + (u ? u : "זה") + ": " + i.title + "</span>"), $(t).attr("aria-labelledby", "tooltipsterContent_" + r.id)));
    $(t).keypress(function (n) {
      n.which === 13 && (n.preventDefault(), $(t).tooltipster("_show"));
    });
    $(t).focusout(function () {
      $(t).tooltipster("hide");
    });
  }};
});
(function (n, t) {
  typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : n.Spinner = t();
}(this, function () {
  "use strict";
  function i(n, t) {
    var i = document.createElement(n || "div");
    for (var r in t) i[r] = t[r];
    return i;
  }
  function t(n) {
    for (var t = 1, i = arguments.length; t < i; t++) n.appendChild(arguments[t]);
    return n;
  }
  function a(n, t, i, r) {
    var f = ["opacity", t, ~~(n * 100), i, r].join("-"), o = 0.01 + i / r * 100, s = Math.max(1 - (1 - n) / t * (100 - o), n), c = u.substring(0, u.indexOf("Animation")).toLowerCase(), l = c && "-" + c + "-" || "";
    return h[f] || (e.insertRule("@" + l + "keyframes " + f + "{0%{opacity:" + s + "}" + o + "%{opacity:" + n + "}" + (o + 0.01) + "%{opacity:1}" + (o + t) % 100 + "%{opacity:" + n + "}100%{opacity:" + s + "}}", e.cssRules.length), h[f] = 1), f;
  }
  function o(n, t) {
    var u = n.style, r, i;
    for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < s.length; i++) if (r = s[i] + t, u[r] !== undefined) return r;
    if (u[t] !== undefined) return t;
  }
  function n(n, t) {
    for (var i in t) n.style[o(n, i) || i] = t[i];
    return n;
  }
  function c(n) {
    for (var r, i, t = 1; t < arguments.length; t++) {
      r = arguments[t];
      for (i in r) n[i] === undefined && (n[i] = r[i]);
    }
    return n;
  }
  function l(n, t) {
    return typeof n == "string" ? n : n[t % n.length];
  }
  function r(n) {
    this.opts = c(n || {}, r.defaults, v);
  }
  function y() {
    e.addRule(".spin-vml", "behavior:url(#default#VML)");
    r.prototype.lines = function (i, r) {
      function a(i, f, o) {
        t(c, t(n(n(i('<group xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', {coordsize: o + " " + o, coordorigin: -e + " " + -e}), {width: o, height: o}), {rotation: 360 / r.lines * i + "deg", left: ~~f}), t(n(i('<roundrect xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', {arcsize: r.corners}), {width: e, height: r.width, left: r.radius, top: -r.width >> 1, filter: o}), i('<fill xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', {color: l(r.color, i), opacity: r.opacity}), i('<stroke xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', {opacity: 0}))));
      }
      var e = r.length + r.width, o = 2 * e, h = -(r.width + r.length) * 2 + "px", c = n(n(i('<group xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', {coordsize: o + " " + o, coordorigin: -e + " " + -e}), {width: o, height: o}), {position: "absolute", top: h, left: h}), f;
      if (r.shadow) for (f = 1; f <= r.lines; f++) a(f, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
      for (f = 1; f <= r.lines; f++) a(f);
      return t(i, c);
    };
    r.prototype.opacity = function (n, t, i, r) {
      var u = n.firstChild;
      r = r.shadow && r.lines || 0;
      u && t + r < u.childNodes.length && (u = u.childNodes[t + r], u = u && u.firstChild, u = u && u.firstChild, u && (u.opacity = i));
    };
  }
  var s = ["webkit", "Moz", "ms", "O"], h = {}, u, e = function () {
    var n = i("style", {type: "text/css"});
    return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet;
  }(), v = {lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: 0.25, fps: 20, zIndex: 2e9, className: "spinner", top: "50%", left: "50%", position: "absolute"}, f;
  return r.defaults = {}, c(r.prototype, {spin: function (t) {
    this.stop();
    var f = this, r = f.opts, e = f.el = n(i(0, {className: r.className}), {position: r.position, width: 0, zIndex: r.zIndex}), p = r.radius + r.length + r.width;
    if (n(e, {left: r.left, top: r.top}), t && t.insertBefore(e, t.firstChild || null), e.setAttribute("role", "progressbar"), f.lines(e, f.opts), !u) {
      var s = 0, l = (r.lines - 1) * (1 - r.direction) / 2, h, c = r.fps, o = c / r.speed, a = (1 - r.opacity) / (o * r.trail / 100), v = o / r.lines;
      (function y() {
        s++;
        for (var n = 0; n < r.lines; n++) h = Math.max(1 - (s + (r.lines - n) * v) % o * a, r.opacity), f.opacity(e, n * r.direction + l, h, r);
        f.timeout = f.el && setTimeout(y, ~~(1e3 / c));
      }());
    }
    return f;
  }, stop: function () {
    var n = this.el;
    return n && (clearTimeout(this.timeout), n.parentNode && n.parentNode.removeChild(n), this.el = undefined), this;
  }, lines: function (r, f) {
    for (var e = 0, h = (f.lines - 1) * (1 - f.direction) / 2, o; e < f.lines; e++) o = n(i(), {position: "absolute", top: 1 + ~(f.width / 2) + "px", transform: f.hwaccel ? "translate3d(0,0,0)" : "", opacity: f.opacity, animation: u && a(f.opacity, f.trail, h + e * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"}), f.shadow && t(o, n(n(i(), {position: "absolute", width: f.length + f.width + "px", height: f.width + "px", background: "#000", boxShadow: "0 0 4px #000", transformOrigin: "left", transform: "rotate(" + ~~(360 / f.lines * e + f.rotate) + "deg) translate(" + f.radius + "px,0)", borderRadius: (f.corners * f.width >> 1) + "px"}), {top: "2px"})), t(r, t(o, n(i(), {position: "absolute", width: f.length + f.width + "px", height: f.width + "px", background: l(f.color, e), boxShadow: "0 0 1px rgba(0,0,0,.1)", transformOrigin: "left", transform: "rotate(" + ~~(360 / f.lines * e + f.rotate) + "deg) translate(" + f.radius + "px,0)", borderRadius: (f.corners * f.width >> 1) + "px"})));
    return r;
  }, opacity: function (n, t, i) {
    t < n.childNodes.length && (n.childNodes[t].style.opacity = i);
  }}), f = n(i("group"), {behavior: "url(#default#VML)"}), !o(f, "transform") && f.adj ? y() : u = o(f, "animation"), r;
}));
(function (n, t) {
  typeof exports == "object" ? module.exports = t(require("spin.js")) : typeof define == "function" && define.amd ? define(["spin"], t) : n.Ladda = t(n.Spinner);
}(this, function (n) {
  "use strict";
  function i(n) {
    var i, r, u, f;
    if (typeof n == "undefined") {
      console.warn("Ladda button target must be defined.");
      return;
    }
    return n.querySelector(".ladda-label") || (n.innerHTML = '<span class="ladda-label">' + n.innerHTML + "</span>"), r = n.querySelector(".ladda-spinner"), r || (r = document.createElement("span"), r.className = "ladda-spinner"), n.appendChild(r), f = {start: function () {
      return i || (i = o(n)), n.setAttribute("disabled", ""), n.setAttribute("data-loading", ""), clearTimeout(u), i.spin(r), this.setProgress(0), this;
    }, startAfter: function (n) {
      return clearTimeout(u), u = setTimeout(function () {
        f.start();
      }, n), this;
    }, stop: function () {
      return n.removeAttribute("disabled"), n.removeAttribute("data-loading"), clearTimeout(u), i && (u = setTimeout(function () {
        i.stop();
      }, 1e3)), this;
    }, toggle: function () {
      return this.isLoading() ? this.stop() : this.start(), this;
    }, setProgress: function (t) {
      t = Math.max(Math.min(t, 1), 0);
      var i = n.querySelector(".ladda-progress");
      t === 0 && i && i.parentNode ? i.parentNode.removeChild(i) : (i || (i = document.createElement("div"), i.className = "ladda-progress", n.appendChild(i)), i.style.width = (t || 0) * n.offsetWidth + "px");
    }, enable: function () {
      return this.stop(), this;
    }, disable: function () {
      return this.stop(), n.setAttribute("disabled", ""), this;
    }, isLoading: function () {
      return n.hasAttribute("data-loading");
    }, remove: function () {
      clearTimeout(u);
      n.removeAttribute("disabled", "");
      n.removeAttribute("data-loading", "");
      i && (i.stop(), i = null);
      for (var r = 0, e = t.length; r < e; r++) if (f === t[r]) {
        t.splice(r, 1);
        break;
      }
    }, forceDisable: function () {
      return setTimeout(function () {
        n.setAttribute("disabled", "disabled");
      }, 110), this;
    }, forceEnable: function () {
      return setTimeout(function () {
        n.removeAttribute("disabled");
      }, 110), this;
    }}, t.push(f), f;
  }
  function r(n, t) {
    while (n.parentNode && n.tagName !== t) n = n.parentNode;
    return t === n.tagName ? n : undefined;
  }
  function u(n) {
    for (var i, t, u = ["input", "textarea", "select"], f = [], r = 0; r < u.length; r++) for (i = n.getElementsByTagName(u[r]), t = 0; t < i.length; t++) i[t].hasAttribute("required") && f.push(i[t]);
    return f;
  }
  function f(n, t) {
    var f, e, o;
    for (t = t || {}, f = [], typeof n == "string" ? f = s(document.querySelectorAll(n)) : typeof n == "object" && typeof n.nodeName == "string" && (f = [n]), e = 0, o = f.length; e < o; e++) (function () {
      var n = f[e], o, s;
      typeof n.addEventListener == "function" && (o = i(n), s = -1, n.addEventListener("click", function () {
        var e = true, h = r(n, "FORM"), f, i;
        if (typeof h != "undefined") for (f = u(h), i = 0; i < f.length; i++) f[i].value.replace(/^\s+|\s+$/g, "") === "" && (e = false), f[i].type !== "checkbox" && f[i].type !== "radio" || f[i].checked || (e = false), f[i].type === "email" && (e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(f[i].value));
        e && (o.startAfter(1), typeof t.timeout == "number" && (clearTimeout(s), s = setTimeout(o.stop, t.timeout)), typeof t.callback == "function" && t.callback.apply(null, [o]));
      }, false));
    }());
  }
  function e() {
    for (var n = 0, i = t.length; n < i; n++) t[n].stop();
  }
  function o(t) {
    var i = t.offsetHeight, u;
    i === 0 && (i = parseFloat(window.getComputedStyle(t).height));
    i > 32 && (i *= 0.8);
    t.hasAttribute("data-spinner-size") && (i = parseInt(t.getAttribute("data-spinner-size"), 10));
    t.hasAttribute("data-spinner-color") && (u = t.getAttribute("data-spinner-color"));
    var r = i * 0.2, f = r * 0.6, e = r < 7 ? 2 : 3;
    return new n({color: u || "#fff", lines: 12, radius: r, length: f, width: e, zIndex: "auto", top: "auto", left: "auto", className: ""});
  }
  function s(n) {
    for (var i = [], t = 0; t < n.length; t++) i.push(n[t]);
    return i;
  }
  var t = [];
  return {bind: f, create: i, stopAll: e};
}));
(function () {
  "use strict";
  angular.module("ladda", []).directive("laddaButton", ["$rootScope", function (n) {
    return {restrict: "A", link: function (t, i, r) {
      var u = Ladda.create(i[0]);
      (t.$watch(r.laddaButton, function (n) {
        typeof n == "number" ? (u.isLoading() || u.start(), u.setProgress(n / 100)) : n === true ? u.start() : n === false && u.stop();
      }), t.$watch(r.forceDisabled, function (n) {
        n === true ? u.forceDisable() : u.forceEnable();
      }), r.setLoading !== "false") && i.click(function () {
        n.laddaLoading = true;
      });
    }};
  }]);
}());
(function (n) {
  typeof n.fn.each2 == "undefined" && n.extend(n.fn, {each2: function (t) {
    for (var i = n([0]), r = -1, u = this.length; ++r < u && (i.context = i[0] = this[r]) && t.call(i[0], r, i) !== false;) ;
    return this;
  }});
}(jQuery), function (n, t) {
  "use strict";
  function nt(t) {
    var i = n(document.createTextNode(""));
    t.before(i);
    i.before(t);
    i.remove();
  }
  function c(n) {
    return n.replace(/[^\u0000-\u007E]/g, t);
  }
  function e(n, t) {
    for (var i = 0, r = t.length; i < r; i = i + 1) if (f(n, t[i])) return i;
    return -1;
  }
  function lt() {
    var t = n(ht), i;
    return t.appendTo(document.body), i = {width: t.width() - t[0].clientWidth, height: t.height() - t[0].clientHeight}, t.remove(), i;
  }
  function f(n, i) {
    return n === i ? true : n === t || i === t ? false : n === null || i === null ? false : n.constructor === String ? n + "" == i + "" : i.constructor === String ? i + "" == n + "" : false;
  }
  function w(n, t, i) {
    var u, r, f;
    if (n === null || n.length < 1) return [];
    for (u = n.split(t), r = 0, f = u.length; r < f; r = r + 1) u[r] = i(u[r]);
    return u;
  }
  function it(i) {
    var r = "keyup-change-value";
    i.on("keydown", function () {
      n.data(i, r) === t && n.data(i, r, i.val());
    });
    i.on("keyup", function () {
      var u = n.data(i, r);
      u !== t && i.val() !== u && (n.removeData(i, r), i.trigger("keyup-change"));
    });
  }
  function at(i) {
    i.on("mousemove", function (i) {
      var r = v;
      (r === t || r.x !== i.pageX || r.y !== i.pageY) && n(i.target).trigger("mousemove-filtered", i);
    });
  }
  function rt(n, i, r) {
    r = r || t;
    var u;
    return function () {
      var t = arguments;
      window.clearTimeout(u);
      u = window.setTimeout(function () {
        i.apply(r, t);
      }, n);
    };
  }
  function vt(n, t) {
    var i = rt(n, function (n) {
      t.trigger("scroll-debounced", n);
    });
    t.on("scroll", function (n) {
      e(n.target, t.get()) >= 0 && i(n);
    });
  }
  function yt(n) {
    n[0] !== document.activeElement && window.setTimeout(function () {
      var t = n[0], r = n.val().length, i, u;
      n.focus();
      u = t.offsetWidth > 0 || t.offsetHeight > 0;
      u && t === document.activeElement && (t.setSelectionRange ? t.setSelectionRange(r, r) : t.createTextRange && (i = t.createTextRange(), i.collapse(false), i.select()));
    }, 0);
  }
  function pt(t) {
    var i, r, u;
    return t = n(t)[0], i = 0, r = 0, "selectionStart" in t ? (i = t.selectionStart, r = t.selectionEnd - i) : "selection" in document && (t.focus(), u = document.selection.createRange(), r = document.selection.createRange().text.length, u.moveStart("character", -t.value.length), i = u.text.length - r), {offset: i, length: r};
  }
  function r(n) {
    n.preventDefault();
    n.stopPropagation();
  }
  function wt(n) {
    n.preventDefault();
    n.stopImmediatePropagation();
  }
  function bt(t) {
    if (!s) {
      var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
      s = n(document.createElement("div")).css({position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: i.fontSize, fontFamily: i.fontFamily, fontStyle: i.fontStyle, fontWeight: i.fontWeight, letterSpacing: i.letterSpacing, textTransform: i.textTransform, whiteSpace: "nowrap"});
      s.attr("class", "select2-sizer");
      n(document.body).append(s);
    }
    return s.text(t.val()), s.width();
  }
  function a(t, i, r) {
    var u, f = [], e;
    u = n.trim(t.attr("class"));
    u && (u = "" + u, n(u.split(/\s+/)).each2(function () {
      this.indexOf("select2-") === 0 && (f[f.length] = this);
    }));
    u = n.trim(i.attr("class"));
    u && (u = "" + u, n(u.split(/\s+/)).each2(function () {
      this.indexOf("select2-") !== 0 && (e = r(this), e && (f[f.length] = e));
    }));
    t.attr("class", f.join(" "));
  }
  function ut(n, t, i, r) {
    var u = c(n.toUpperCase()).indexOf(c(t.toUpperCase())), f = t.length;
    if (u < 0) {
      i[i.length] = r(n);
      return;
    }
    i[i.length] = r(n.substring(0, u));
    i[i.length] = "<span class='select2-match'>";
    i[i.length] = r(n.substring(u, u + f));
    i[i.length] = "</span>";
    i[i.length] = r(n.substring(u + f, n.length));
  }
  function ft(n) {
    var t = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
    return String(n).replace(/[&<>"'\/\\]/g, function (n) {
      return t[n];
    });
  }
  function et(i) {
    var f, r = null, e = i.quietMillis || 100, o = i.url, u = this;
    return function (s) {
      window.clearTimeout(f);
      f = window.setTimeout(function () {
        var e = i.data, f = o, c = i.transport || n.fn.select2.ajaxDefaults.transport, l = {type: i.type || "GET", cache: i.cache || false, jsonpCallback: i.jsonpCallback || t, dataType: i.dataType || "json"}, h = n.extend({}, n.fn.select2.ajaxDefaults.params, l);
        e = e ? e.call(u, s.term, s.page, s.context) : null;
        f = typeof f == "function" ? f.call(u, s.term, s.page, s.context) : f;
        r && typeof r.abort == "function" && r.abort();
        i.params && (n.isFunction(i.params) ? n.extend(h, i.params.call(u)) : n.extend(h, i.params));
        n.extend(h, {url: f, dataType: i.dataType, data: e, success: function (n) {
          var t = i.results(n, s.page, s);
          s.callback(t);
        }, error: function (n, t, i) {
          var r = {hasError: true, jqXHR: n, textStatus: t, errorThrown: i};
          s.callback(r);
        }});
        r = c.call(u, h);
      }, e);
    };
  }
  function ot(t) {
    var i = t, e, u, f;
    return n.isArray(i) && (u = i, i = {results: u}), n.isFunction(i) === false && (u = i, i = function () {
      return u;
    }), f = i(), f.text && (r = f.text, n.isFunction(r) || (e = f.text, r = function (n) {
      return n[e];
    })), function (t) {
      var u = t.term, e = {results: []}, f;
      if (u === "") {
        t.callback(i());
        return;
      }
      f = function (i, e) {
        var o, s;
        if (i = i[0], i.children) {
          o = {};
          for (s in i) i.hasOwnProperty(s) && (o[s] = i[s]);
          o.children = [];
          n(i.children).each2(function (n, t) {
            f(t, o.children);
          });
          (o.children.length || t.matcher(u, "" + o.text, i)) && (e[e.length] = o);
        } else t.matcher(u, "" + i.text, i) && (e[e.length] = i);
      };
      n(i().results).each2(function (n, t) {
        f(t, e.results);
      });
      t.callback(e);
    };
  }
  function kt(i) {
    var r = n.isFunction(i);
    return function (u) {
      var e = u.term, f = {results: []}, o = r ? i(u) : i;
      n.isArray(o) && (n(o).each(function () {
        var n = this.text !== t, i = n ? this.text : this;
        (e === "" || u.matcher(e, i)) && (f.results[f.results.length] = n ? this : {id: this, text: this});
      }), u.callback(f));
    };
  }
  function o(t, i) {
    if (n.isFunction(t)) return true;
    if (!t) return false;
    if (typeof t == "string") return true;
    throw new Error(i + " must be a string, function, or falsy value");
  }
  function u(t, i) {
    if (n.isFunction(t)) {
      var r = Array.prototype.slice.call(arguments, 2);
      return t.apply(i, r);
    }
    return t;
  }
  function st(t) {
    var i = 0;
    return n.each(t, function (n, t) {
      t.children ? i += st(t.children) : i++;
    }), i;
  }
  function dt(n, i, r, u) {
    var a = n, c = false, e, s, o, h, l;
    if (!u.createSearchChoice || !u.tokenSeparators || u.tokenSeparators.length < 1) return t;
    for (;;) {
      for (s = -1, o = 0, h = u.tokenSeparators.length; o < h; o++) if (l = u.tokenSeparators[o], s = n.indexOf(l), s >= 0) break;
      if (s < 0) break;
      if (e = n.substring(0, s), n = n.substring(s + l.length), e.length > 0 && (e = u.createSearchChoice.call(this, e, i), e !== t && e !== null && u.id(e) !== t && u.id(e) !== null)) {
        for (c = false, o = 0, h = i.length; o < h; o++) if (f(u.id(e), u.id(i[o]))) {
          c = true;
          break;
        }
        c || r(e);
      }
    }
    if (a !== n) return n;
  }
  function b() {
    var t = this;
    n.each(arguments, function (n, i) {
      t[i].remove();
      t[i] = null;
    });
  }
  function k(t, i) {
    var r = function () {};
    return r.prototype = new t, r.prototype.constructor = r, r.prototype.parent = t.prototype, r.prototype = n.extend(r.prototype, i), r;
  }
  if (window.Select2 === t) {
    var l, d, g, h, s, v = {x: 0, y: 0}, y, p, i = {TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SHIFT: 16, CTRL: 17, ALT: 18, PAGE_UP: 33, PAGE_DOWN: 34, HOME: 36, END: 35, BACKSPACE: 8, DELETE: 46, isArrow: function (n) {
      n = n.which ? n.which : n;
      switch (n) {
        case i.LEFT:
        case i.RIGHT:
        case i.UP:
        case i.DOWN:
          return true;
      }
      return false;
    }, isControl: function (n) {
      var t = n.which;
      switch (t) {
        case i.SHIFT:
        case i.CTRL:
        case i.ALT:
          return true;
      }
      return n.metaKey ? true : false;
    }, isFunctionKey: function (n) {
      return n = n.which ? n.which : n, n >= 112 && n <= 123;
    }}, ht = "<div class='select2-measure-scrollbar'></div>", ct = {"Ⓐ": "A", Ａ: "A", À: "A", Á: "A", Â: "A", Ầ: "A", Ấ: "A", Ẫ: "A", Ẩ: "A", Ã: "A", Ā: "A", Ă: "A", Ằ: "A", Ắ: "A", Ẵ: "A", Ẳ: "A", Ȧ: "A", Ǡ: "A", Ä: "A", Ǟ: "A", Ả: "A", Å: "A", Ǻ: "A", Ǎ: "A", Ȁ: "A", Ȃ: "A", Ạ: "A", Ậ: "A", Ặ: "A", Ḁ: "A", Ą: "A", Ⱥ: "A", Ɐ: "A", Ꜳ: "AA", Æ: "AE", Ǽ: "AE", Ǣ: "AE", Ꜵ: "AO", Ꜷ: "AU", Ꜹ: "AV", Ꜻ: "AV", Ꜽ: "AY", "Ⓑ": "B", Ｂ: "B", Ḃ: "B", Ḅ: "B", Ḇ: "B", Ƀ: "B", Ƃ: "B", Ɓ: "B", "Ⓒ": "C", Ｃ: "C", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", Ç: "C", Ḉ: "C", Ƈ: "C", Ȼ: "C", Ꜿ: "C", "Ⓓ": "D", Ｄ: "D", Ḋ: "D", Ď: "D", Ḍ: "D", Ḑ: "D", Ḓ: "D", Ḏ: "D", Đ: "D", Ƌ: "D", Ɗ: "D", Ɖ: "D", Ꝺ: "D", Ǳ: "DZ", Ǆ: "DZ", ǲ: "Dz", ǅ: "Dz", "Ⓔ": "E", Ｅ: "E", È: "E", É: "E", Ê: "E", Ề: "E", Ế: "E", Ễ: "E", Ể: "E", Ẽ: "E", Ē: "E", Ḕ: "E", Ḗ: "E", Ĕ: "E", Ė: "E", Ë: "E", Ẻ: "E", Ě: "E", Ȅ: "E", Ȇ: "E", Ẹ: "E", Ệ: "E", Ȩ: "E", Ḝ: "E", Ę: "E", Ḙ: "E", Ḛ: "E", Ɛ: "E", Ǝ: "E", "Ⓕ": "F", Ｆ: "F", Ḟ: "F", Ƒ: "F", Ꝼ: "F", "Ⓖ": "G", Ｇ: "G", Ǵ: "G", Ĝ: "G", Ḡ: "G", Ğ: "G", Ġ: "G", Ǧ: "G", Ģ: "G", Ǥ: "G", Ɠ: "G", Ꞡ: "G", Ᵹ: "G", Ꝿ: "G", "Ⓗ": "H", Ｈ: "H", Ĥ: "H", Ḣ: "H", Ḧ: "H", Ȟ: "H", Ḥ: "H", Ḩ: "H", Ḫ: "H", Ħ: "H", Ⱨ: "H", Ⱶ: "H", Ɥ: "H", "Ⓘ": "I", Ｉ: "I", Ì: "I", Í: "I", Î: "I", Ĩ: "I", Ī: "I", Ĭ: "I", İ: "I", Ï: "I", Ḯ: "I", Ỉ: "I", Ǐ: "I", Ȉ: "I", Ȋ: "I", Ị: "I", Į: "I", Ḭ: "I", Ɨ: "I", "Ⓙ": "J", Ｊ: "J", Ĵ: "J", Ɉ: "J", "Ⓚ": "K", Ｋ: "K", Ḱ: "K", Ǩ: "K", Ḳ: "K", Ķ: "K", Ḵ: "K", Ƙ: "K", Ⱪ: "K", Ꝁ: "K", Ꝃ: "K", Ꝅ: "K", Ꞣ: "K", "Ⓛ": "L", Ｌ: "L", Ŀ: "L", Ĺ: "L", Ľ: "L", Ḷ: "L", Ḹ: "L", Ļ: "L", Ḽ: "L", Ḻ: "L", Ł: "L", Ƚ: "L", Ɫ: "L", Ⱡ: "L", Ꝉ: "L", Ꝇ: "L", Ꞁ: "L", Ǉ: "LJ", ǈ: "Lj", "Ⓜ": "M", Ｍ: "M", Ḿ: "M", Ṁ: "M", Ṃ: "M", Ɱ: "M", Ɯ: "M", "Ⓝ": "N", Ｎ: "N", Ǹ: "N", Ń: "N", Ñ: "N", Ṅ: "N", Ň: "N", Ṇ: "N", Ņ: "N", Ṋ: "N", Ṉ: "N", Ƞ: "N", Ɲ: "N", Ꞑ: "N", Ꞥ: "N", Ǌ: "NJ", ǋ: "Nj", "Ⓞ": "O", Ｏ: "O", Ò: "O", Ó: "O", Ô: "O", Ồ: "O", Ố: "O", Ỗ: "O", Ổ: "O", Õ: "O", Ṍ: "O", Ȭ: "O", Ṏ: "O", Ō: "O", Ṑ: "O", Ṓ: "O", Ŏ: "O", Ȯ: "O", Ȱ: "O", Ö: "O", Ȫ: "O", Ỏ: "O", Ő: "O", Ǒ: "O", Ȍ: "O", Ȏ: "O", Ơ: "O", Ờ: "O", Ớ: "O", Ỡ: "O", Ở: "O", Ợ: "O", Ọ: "O", Ộ: "O", Ǫ: "O", Ǭ: "O", Ø: "O", Ǿ: "O", Ɔ: "O", Ɵ: "O", Ꝋ: "O", Ꝍ: "O", Ƣ: "OI", Ꝏ: "OO", Ȣ: "OU", "Ⓟ": "P", Ｐ: "P", Ṕ: "P", Ṗ: "P", Ƥ: "P", Ᵽ: "P", Ꝑ: "P", Ꝓ: "P", Ꝕ: "P", "Ⓠ": "Q", Ｑ: "Q", Ꝗ: "Q", Ꝙ: "Q", Ɋ: "Q", "Ⓡ": "R", Ｒ: "R", Ŕ: "R", Ṙ: "R", Ř: "R", Ȑ: "R", Ȓ: "R", Ṛ: "R", Ṝ: "R", Ŗ: "R", Ṟ: "R", Ɍ: "R", Ɽ: "R", Ꝛ: "R", Ꞧ: "R", Ꞃ: "R", "Ⓢ": "S", Ｓ: "S", ẞ: "S", Ś: "S", Ṥ: "S", Ŝ: "S", Ṡ: "S", Š: "S", Ṧ: "S", Ṣ: "S", Ṩ: "S", Ș: "S", Ş: "S", Ȿ: "S", Ꞩ: "S", Ꞅ: "S", "Ⓣ": "T", Ｔ: "T", Ṫ: "T", Ť: "T", Ṭ: "T", Ț: "T", Ţ: "T", Ṱ: "T", Ṯ: "T", Ŧ: "T", Ƭ: "T", Ʈ: "T", Ⱦ: "T", Ꞇ: "T", Ꜩ: "TZ", "Ⓤ": "U", Ｕ: "U", Ù: "U", Ú: "U", Û: "U", Ũ: "U", Ṹ: "U", Ū: "U", Ṻ: "U", Ŭ: "U", Ü: "U", Ǜ: "U", Ǘ: "U", Ǖ: "U", Ǚ: "U", Ủ: "U", Ů: "U", Ű: "U", Ǔ: "U", Ȕ: "U", Ȗ: "U", Ư: "U", Ừ: "U", Ứ: "U", Ữ: "U", Ử: "U", Ự: "U", Ụ: "U", Ṳ: "U", Ų: "U", Ṷ: "U", Ṵ: "U", Ʉ: "U", "Ⓥ": "V", Ｖ: "V", Ṽ: "V", Ṿ: "V", Ʋ: "V", Ꝟ: "V", Ʌ: "V", Ꝡ: "VY", "Ⓦ": "W", Ｗ: "W", Ẁ: "W", Ẃ: "W", Ŵ: "W", Ẇ: "W", Ẅ: "W", Ẉ: "W", Ⱳ: "W", "Ⓧ": "X", Ｘ: "X", Ẋ: "X", Ẍ: "X", "Ⓨ": "Y", Ｙ: "Y", Ỳ: "Y", Ý: "Y", Ŷ: "Y", Ỹ: "Y", Ȳ: "Y", Ẏ: "Y", Ÿ: "Y", Ỷ: "Y", Ỵ: "Y", Ƴ: "Y", Ɏ: "Y", Ỿ: "Y", "Ⓩ": "Z", Ｚ: "Z", Ź: "Z", Ẑ: "Z", Ż: "Z", Ž: "Z", Ẓ: "Z", Ẕ: "Z", Ƶ: "Z", Ȥ: "Z", Ɀ: "Z", Ⱬ: "Z", Ꝣ: "Z", "ⓐ": "a", ａ: "a", ẚ: "a", à: "a", á: "a", â: "a", ầ: "a", ấ: "a", ẫ: "a", ẩ: "a", ã: "a", ā: "a", ă: "a", ằ: "a", ắ: "a", ẵ: "a", ẳ: "a", ȧ: "a", ǡ: "a", ä: "a", ǟ: "a", ả: "a", å: "a", ǻ: "a", ǎ: "a", ȁ: "a", ȃ: "a", ạ: "a", ậ: "a", ặ: "a", ḁ: "a", ą: "a", ⱥ: "a", ɐ: "a", ꜳ: "aa", æ: "ae", ǽ: "ae", ǣ: "ae", ꜵ: "ao", ꜷ: "au", ꜹ: "av", ꜻ: "av", ꜽ: "ay", "ⓑ": "b", ｂ: "b", ḃ: "b", ḅ: "b", ḇ: "b", ƀ: "b", ƃ: "b", ɓ: "b", "ⓒ": "c", ｃ: "c", ć: "c", ĉ: "c", ċ: "c", č: "c", ç: "c", ḉ: "c", ƈ: "c", ȼ: "c", ꜿ: "c", ↄ: "c", "ⓓ": "d", ｄ: "d", ḋ: "d", ď: "d", ḍ: "d", ḑ: "d", ḓ: "d", ḏ: "d", đ: "d", ƌ: "d", ɖ: "d", ɗ: "d", ꝺ: "d", ǳ: "dz", ǆ: "dz", "ⓔ": "e", ｅ: "e", è: "e", é: "e", ê: "e", ề: "e", ế: "e", ễ: "e", ể: "e", ẽ: "e", ē: "e", ḕ: "e", ḗ: "e", ĕ: "e", ė: "e", ë: "e", ẻ: "e", ě: "e", ȅ: "e", ȇ: "e", ẹ: "e", ệ: "e", ȩ: "e", ḝ: "e", ę: "e", ḙ: "e", ḛ: "e", ɇ: "e", ɛ: "e", ǝ: "e", "ⓕ": "f", ｆ: "f", ḟ: "f", ƒ: "f", ꝼ: "f", "ⓖ": "g", ｇ: "g", ǵ: "g", ĝ: "g", ḡ: "g", ğ: "g", ġ: "g", ǧ: "g", ģ: "g", ǥ: "g", ɠ: "g", ꞡ: "g", ᵹ: "g", ꝿ: "g", "ⓗ": "h", ｈ: "h", ĥ: "h", ḣ: "h", ḧ: "h", ȟ: "h", ḥ: "h", ḩ: "h", ḫ: "h", ẖ: "h", ħ: "h", ⱨ: "h", ⱶ: "h", ɥ: "h", ƕ: "hv", "ⓘ": "i", ｉ: "i", ì: "i", í: "i", î: "i", ĩ: "i", ī: "i", ĭ: "i", ï: "i", ḯ: "i", ỉ: "i", ǐ: "i", ȉ: "i", ȋ: "i", ị: "i", į: "i", ḭ: "i", ɨ: "i", ı: "i", "ⓙ": "j", ｊ: "j", ĵ: "j", ǰ: "j", ɉ: "j", "ⓚ": "k", ｋ: "k", ḱ: "k", ǩ: "k", ḳ: "k", ķ: "k", ḵ: "k", ƙ: "k", ⱪ: "k", ꝁ: "k", ꝃ: "k", ꝅ: "k", ꞣ: "k", "ⓛ": "l", ｌ: "l", ŀ: "l", ĺ: "l", ľ: "l", ḷ: "l", ḹ: "l", ļ: "l", ḽ: "l", ḻ: "l", ſ: "l", ł: "l", ƚ: "l", ɫ: "l", ⱡ: "l", ꝉ: "l", ꞁ: "l", ꝇ: "l", ǉ: "lj", "ⓜ": "m", ｍ: "m", ḿ: "m", ṁ: "m", ṃ: "m", ɱ: "m", ɯ: "m", "ⓝ": "n", ｎ: "n", ǹ: "n", ń: "n", ñ: "n", ṅ: "n", ň: "n", ṇ: "n", ņ: "n", ṋ: "n", ṉ: "n", ƞ: "n", ɲ: "n", ŉ: "n", ꞑ: "n", ꞥ: "n", ǌ: "nj", "ⓞ": "o", ｏ: "o", ò: "o", ó: "o", ô: "o", ồ: "o", ố: "o", ỗ: "o", ổ: "o", õ: "o", ṍ: "o", ȭ: "o", ṏ: "o", ō: "o", ṑ: "o", ṓ: "o", ŏ: "o", ȯ: "o", ȱ: "o", ö: "o", ȫ: "o", ỏ: "o", ő: "o", ǒ: "o", ȍ: "o", ȏ: "o", ơ: "o", ờ: "o", ớ: "o", ỡ: "o", ở: "o", ợ: "o", ọ: "o", ộ: "o", ǫ: "o", ǭ: "o", ø: "o", ǿ: "o", ɔ: "o", ꝋ: "o", ꝍ: "o", ɵ: "o", ƣ: "oi", ȣ: "ou", ꝏ: "oo", "ⓟ": "p", ｐ: "p", ṕ: "p", ṗ: "p", ƥ: "p", ᵽ: "p", ꝑ: "p", ꝓ: "p", ꝕ: "p", "ⓠ": "q", ｑ: "q", ɋ: "q", ꝗ: "q", ꝙ: "q", "ⓡ": "r", ｒ: "r", ŕ: "r", ṙ: "r", ř: "r", ȑ: "r", ȓ: "r", ṛ: "r", ṝ: "r", ŗ: "r", ṟ: "r", ɍ: "r", ɽ: "r", ꝛ: "r", ꞧ: "r", ꞃ: "r", "ⓢ": "s", ｓ: "s", ß: "s", ś: "s", ṥ: "s", ŝ: "s", ṡ: "s", š: "s", ṧ: "s", ṣ: "s", ṩ: "s", ș: "s", ş: "s", ȿ: "s", ꞩ: "s", ꞅ: "s", ẛ: "s", "ⓣ": "t", ｔ: "t", ṫ: "t", ẗ: "t", ť: "t", ṭ: "t", ț: "t", ţ: "t", ṱ: "t", ṯ: "t", ŧ: "t", ƭ: "t", ʈ: "t", ⱦ: "t", ꞇ: "t", ꜩ: "tz", "ⓤ": "u", ｕ: "u", ù: "u", ú: "u", û: "u", ũ: "u", ṹ: "u", ū: "u", ṻ: "u", ŭ: "u", ü: "u", ǜ: "u", ǘ: "u", ǖ: "u", ǚ: "u", ủ: "u", ů: "u", ű: "u", ǔ: "u", ȕ: "u", ȗ: "u", ư: "u", ừ: "u", ứ: "u", ữ: "u", ử: "u", ự: "u", ụ: "u", ṳ: "u", ų: "u", ṷ: "u", ṵ: "u", ʉ: "u", "ⓥ": "v", ｖ: "v", ṽ: "v", ṿ: "v", ʋ: "v", ꝟ: "v", ʌ: "v", ꝡ: "vy", "ⓦ": "w", ｗ: "w", ẁ: "w", ẃ: "w", ŵ: "w", ẇ: "w", ẅ: "w", ẘ: "w", ẉ: "w", ⱳ: "w", "ⓧ": "x", ｘ: "x", ẋ: "x", ẍ: "x", "ⓨ": "y", ｙ: "y", ỳ: "y", ý: "y", ŷ: "y", ỹ: "y", ȳ: "y", ẏ: "y", ÿ: "y", ỷ: "y", ẙ: "y", ỵ: "y", ƴ: "y", ɏ: "y", ỿ: "y", "ⓩ": "z", ｚ: "z", ź: "z", ẑ: "z", ż: "z", ž: "z", ẓ: "z", ẕ: "z", ƶ: "z", ȥ: "z", ɀ: "z", ⱬ: "z", ꝣ: "z", Ά: "Α", Έ: "Ε", Ή: "Η", Ί: "Ι", Ϊ: "Ι", Ό: "Ο", Ύ: "Υ", Ϋ: "Υ", Ώ: "Ω", ά: "α", έ: "ε", ή: "η", ί: "ι", ϊ: "ι", ΐ: "ι", ό: "ο", ύ: "υ", ϋ: "υ", ΰ: "υ", ω: "ω", ς: "σ"};
    y = n(document);
    h = function () {
      var n = 1;
      return function () {
        return n++;
      };
    }();
    l = k(Object, {bind: function (n) {
      var t = this;
      return function () {
        n.apply(t, arguments);
      };
    }, init: function (i) {
      var f, e, o = ".select2-results", s, c;
      this.opts = i = this.prepareOpts(i);
      this.id = i.id;
      i.element.data("select2") !== t && i.element.data("select2") !== null && i.element.data("select2").destroy();
      this.container = this.createContainer();
      this.liveRegion = n(".select2-hidden-accessible");
      this.liveRegion.length == 0 && (this.liveRegion = n("<span>", {role: "status", "aria-live": "polite"}).addClass("select2-hidden-accessible").appendTo(document.body));
      this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + h());
      this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
      this.container.attr("id", this.containerId);
      this.container.attr("title", i.element.attr("title"));
      this.body = n(document.body);
      a(this.container, this.opts.element, this.opts.adaptContainerCssClass);
      this.container.attr("style", i.element.attr("style"));
      this.container.css(u(i.containerCss, this.opts.element));
      this.container.addClass(u(i.containerCssClass, this.opts.element));
      this.elementTabIndex = this.opts.element.attr("tabindex");
      this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", r);
      this.container.data("select2", this);
      this.dropdown = this.container.find(".select2-drop");
      a(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
      this.dropdown.addClass(u(i.dropdownCssClass, this.opts.element));
      this.dropdown.data("select2", this);
      this.dropdown.on("click", r);
      this.results = f = this.container.find(o);
      this.search = e = this.container.find("input.select2-input");
      this.queryCount = 0;
      this.resultsPage = 0;
      this.context = null;
      this.initContainer();
      this.container.on("click", r);
      at(this.results);
      this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent));
      this.dropdown.on("touchstart touchmove touchend", o, this.bind(function (n) {
        this._touchEvent = true;
        this.highlightUnderEvent(n);
      }));
      this.dropdown.on("touchmove", o, this.bind(this.touchMoved));
      this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved));
      this.dropdown.on("click", this.bind(function () {
        this._touchEvent && (this._touchEvent = false, this.selectHighlighted());
      }));
      vt(80, this.results);
      this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded));
      n(this.container).on("change", ".select2-input", function (n) {
        n.stopPropagation();
      });
      n(this.dropdown).on("change", ".select2-input", function (n) {
        n.stopPropagation();
      });
      n.fn.mousewheel && f.mousewheel(function (n, t, i, u) {
        var e = f.scrollTop();
        u > 0 && e - u <= 0 ? (f.scrollTop(0), r(n)) : u < 0 && f.get(0).scrollHeight - f.scrollTop() + u <= f.height() && (f.scrollTop(f.get(0).scrollHeight - f.height()), r(n));
      });
      it(e);
      e.on("keyup-change input paste", this.bind(this.updateResults));
      e.on("focus", function () {
        e.addClass("select2-focused");
      });
      e.on("blur", function () {
        e.removeClass("select2-focused");
      });
      this.dropdown.on("mouseup", o, this.bind(function (t) {
        n(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t));
      }));
      this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (n) {
        n.stopPropagation();
      });
      this.lastSearchTerm = t;
      n.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource());
      i.maximumInputLength !== null && this.search.attr("maxlength", i.maximumInputLength);
      s = i.element.prop("disabled");
      s === t && (s = false);
      this.enable(!s);
      c = i.element.prop("readonly");
      c === t && (c = false);
      this.readonly(c);
      p = p || lt();
      this.autofocus = i.element.prop("autofocus");
      i.element.prop("autofocus", false);
      this.autofocus && this.focus();
      this.search.attr("placeholder", i.searchInputPlaceholder);
    }, destroy: function () {
      var n = this.opts.element, i = n.data("select2"), r = this;
      this.close();
      n.length && n[0].detachEvent && r._sync && n.each(function () {
        r._sync && this.detachEvent("onpropertychange", r._sync);
      });
      this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null);
      this._sync = null;
      i !== t && (i.container.remove(), i.liveRegion.remove(), i.dropdown.remove(), n.removeData("select2").off(".select2"), n.is("input[type='hidden']") ? n.css("display", "") : (n.show().prop("autofocus", this.autofocus || false), this.elementTabIndex ? n.attr({tabindex: this.elementTabIndex}) : n.removeAttr("tabindex"), n.show()));
      b.call(this, "container", "liveRegion", "dropdown", "results", "search");
    }, optionToData: function (n) {
      return n.is("option") ? {id: n.prop("value"), text: n.text(), element: n.get(), css: n.attr("class"), disabled: n.prop("disabled"), locked: f(n.attr("locked"), "locked") || f(n.data("locked"), true)} : n.is("optgroup") ? {text: n.attr("label"), children: [], element: n.get(), css: n.attr("class")} : void 0;
    }, prepareOpts: function (i) {
      var s, c, l, e, o = this, u, r;
      if (s = i.element, s.get(0).tagName.toLowerCase() === "select" && (this.select = c = i.element), c && n.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
        if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
      }), i.debug = i.debug || n.fn.select2.defaults.debug, i.debug && console && console.warn && (i.id != null && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), i.text != null && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), i.sortResults != null && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), i.selectOnBlur != null && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), i.ajax != null && i.ajax.results != null && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), i.formatNoResults != null && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), i.formatSearching != null && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), i.formatInputTooShort != null && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), i.formatInputTooLong != null && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), i.formatLoading != null && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), i.formatSelectionTooBig != null && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), i.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), i.element.data("tags") != null && (u = i.element.data("tags"), n.isArray(u) || (u = []), i.element.data("select2Tags", u)), i.sorter != null && (i.sortResults = i.sorter), i.selectOnClose != null && (i.selectOnBlur = i.selectOnClose), i.ajax != null && n.isFunction(i.ajax.processResults) && (i.ajax.results = i.ajax.processResults), i.language != null && (r = i.language, n.isFunction(r.noMatches) && (i.formatNoMatches = r.noMatches), n.isFunction(r.searching) && (i.formatSearching = r.searching), n.isFunction(r.inputTooShort) && (i.formatInputTooShort = r.inputTooShort), n.isFunction(r.inputTooLong) && (i.formatInputTooLong = r.inputTooLong), n.isFunction(r.loadingMore) && (i.formatLoading = r.loadingMore), n.isFunction(r.maximumSelected) && (i.formatSelectionTooBig = r.maximumSelected)), i = n.extend({}, {populateResults: function (r, u, f) {
        var e, s = this.opts.id, c = this.liveRegion;
        e = function (r, u, l) {
          var p, nt, v, tt, k, d, a, y, w, g, b;
          for (r = i.sortResults(r, u, f), b = [], p = 0, nt = r.length; p < nt; p = p + 1) v = r[p], k = v.disabled === true, tt = !k && s(v) !== t, d = v.children && v.children.length > 0, a = n("<li></li>"), a.addClass("select2-results-dept-" + l), a.addClass("select2-result"), a.addClass(tt ? "select2-result-selectable" : "select2-result-unselectable"), k && a.addClass("select2-disabled"), d && a.addClass("select2-result-with-children"), a.addClass(o.opts.formatResultCssClass(v)), a.attr("role", "presentation"), y = n(document.createElement("div")), y.addClass("select2-result-label"), y.attr("id", "select2-result-label-" + h()), y.attr("role", "option"), g = i.formatResult(v, y, f, o.opts.escapeMarkup), g !== t && (y.html(g), a.append(y)), d && (w = n("<ul></ul>"), w.addClass("select2-result-sub"), e(v.children, w, l + 1), a.append(w)), a.data("select2-data", v), b[b.length] = a[0];
          u.append(b);
          c.text(i.formatMatches(r.length));
        };
        e(u, r, 0);
      }}, n.fn.select2.defaults, i), typeof i.id != "function" && (l = i.id, i.id = function (n) {
        return n[l];
      }), n.isArray(i.element.data("select2Tags"))) {
        if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
        i.tags = i.element.data("select2Tags");
      }
      if (c ? (i.query = this.bind(function (n) {
        var f = {results: [], more: false}, e = n.term, i, r, u;
        u = function (t, i) {
          var r;
          t.is("option") ? n.matcher(e, t.text(), t) && (i[i.length] = o.optionToData(t)) : t.is("optgroup") && (r = o.optionToData(t), t.children().each2(function (n, t) {
            u(t, r.children);
          }), r.children.length > 0 && (i[i.length] = r));
        };
        i = s.children();
        this.getPlaceholder() !== t && i.length > 0 && (r = this.getPlaceholderOption(), r && (i = i.not(r)));
        i.each2(function (n, t) {
          u(t, f.results);
        });
        n.callback(f);
      }), i.id = function (n) {
        return n.id;
      }) : "query" in i || ("ajax" in i ? (e = i.element.data("ajax-url"), e && e.length > 0 && (i.ajax.url = e), i.query = et.call(i.element, i.ajax)) : "data" in i ? i.query = ot(i.data) : "tags" in i && (i.query = u(i.tags), i.createSearchChoice === t && (i.createSearchChoice = function (t) {
        return {id: n.trim(t), text: n.trim(t)};
      }), i.initSelection === t && (i.initSelection = function (t, r) {
        var u = [];
        n(w(t.val(), i.separator, i.transformVal)).each(function () {
          var r = {id: this, text: this}, t = i.tags;
          n.isFunction(t) && (t = t());
          n(t).each(function () {
            if (f(this.id, r.id)) return r = this, false;
          });
          u[u.length] = r;
        });
        r(u);
      }))), typeof i.query != "function") throw "query function not defined for Select2 " + i.element.attr("id");
      if (i.createSearchChoicePosition === "top") i.createSearchChoicePosition = function (n, t) {
        n.unshift(t);
      }; else if (i.createSearchChoicePosition === "bottom") i.createSearchChoicePosition = function (n, t) {
        n[n.length] = t;
      }; else if (typeof i.createSearchChoicePosition != "function") throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
      return i;
    }, monitorSource: function () {
      var i = this.opts.element, r, f = this;
      i.on("change.select2", this.bind(function () {
        this.opts.element.data("select2-change-triggered") !== true && this.initSelection();
      }));
      this._sync = this.bind(function () {
        var r = i.prop("disabled"), n;
        r === t && (r = false);
        this.enable(!r);
        n = i.prop("readonly");
        n === t && (n = false);
        this.readonly(n);
        this.container && (a(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(u(this.opts.containerCssClass, this.opts.element)));
        this.dropdown && (a(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(u(this.opts.dropdownCssClass, this.opts.element)));
      });
      i.length && i[0].attachEvent && i.each(function () {
        this.attachEvent("onpropertychange", f._sync);
      });
      r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      r !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new r(function (t) {
        n.each(t, f._sync);
      }), this.propertyObserver.observe(i.get(0), {attributes: true, subtree: false}));
    }, triggerSelect: function (t) {
      var i = n.Event("select2-selecting", {val: this.id(t), object: t, choice: t});
      return this.opts.element.trigger(i), !i.isDefaultPrevented();
    }, triggerChange: function (t) {
      t = t || {};
      t = n.extend({}, t, {type: "change", val: this.val()});
      this.opts.element.data("select2-change-triggered", true);
      this.opts.element.trigger(t);
      this.opts.element.data("select2-change-triggered", false);
      this.opts.element.click();
      this.opts.blurOnChange && this.opts.element.blur();
    }, isInterfaceEnabled: function () {
      return this.enabledInterface === true;
    }, enableInterface: function () {
      var n = this._enabled && !this._readonly, t = !n;
      return n === this.enabledInterface ? false : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = n, true);
    }, enable: function (n) {
      (n === t && (n = true), this._enabled !== n) && (this._enabled = n, this.opts.element.prop("disabled", !n), this.enableInterface());
    }, disable: function () {
      this.enable(false);
    }, readonly: function (n) {
      (n === t && (n = false), this._readonly !== n) && (this._readonly = n, this.opts.element.prop("readonly", n), this.enableInterface());
    }, opened: function () {
      return this.container ? this.container.hasClass("select2-dropdown-open") : false;
    }, positionDropdown: function () {
      var t = this.dropdown, l = this.container, i = l.offset(), v = l.outerHeight(false), s = l.outerWidth(false), o = t.outerHeight(false), e = n(window), d = e.width(), g = e.height(), y = e.scrollLeft() + d, nt = e.scrollTop() + g, a = i.top + v, h = i.left, tt = a + o <= nt, it = i.top - o >= e.scrollTop(), r = t.outerWidth(false), ft = t.hasClass("select2-drop-above"), w, c, b, f, k;
      ft ? (c = true, !it && tt && (b = true, c = false)) : (c = false, !tt && it && (b = true, c = true));
      b && (t.hide(), i = this.container.offset(), v = this.container.outerHeight(false), s = this.container.outerWidth(false), o = t.outerHeight(false), y = e.scrollLeft() + d, nt = e.scrollTop() + g, a = i.top + v, h = i.left, r = t.outerWidth(false), t.show(), this.focusSearch());
      this.opts.dropdownAutoWidth ? (k = n(".select2-results", t)[0], t.addClass("select2-drop-auto-width"), t.css("width", ""), r = t.outerWidth(false) + (k.scrollHeight === k.clientHeight ? 0 : p.width), r > s ? s = r : r = s, o = t.outerHeight(false)) : this.container.removeClass("select2-drop-auto-width");
      this.body.css("position") !== "static" && (w = this.body.offset(), a -= w.top, h -= w.left);
      !(h + r <= y) && i.left + y + l.outerWidth(false) > r && (h = i.left + this.container.outerWidth(false) - r);
      f = {left: h, width: s};
      c ? (this.container.addClass("select2-drop-above"), t.addClass("select2-drop-above"), o = t.outerHeight(false), f.top = i.top - o, f.bottom = "auto") : (f.top = a, f.bottom = "auto", this.container.removeClass("select2-drop-above"), t.removeClass("select2-drop-above"));
      f = n.extend(f, u(this.opts.dropdownCss, this.opts.element));
      t.css(f);
    }, shouldOpen: function () {
      var t;
      return this.opened() ? false : this._enabled === false || this._readonly === true ? false : (t = n.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented());
    }, clearDropdownAlignmentPreference: function () {
      this.container.removeClass("select2-drop-above");
      this.dropdown.removeClass("select2-drop-above");
    }, open: function () {
      if (!this.shouldOpen()) return false;
      this.opening();
      y.on("mousemove.select2Event", function (n) {
        v.x = n.pageX;
        v.y = n.pageY;
      });
      return true;
    }, opening: function () {
      var i = this.containerEventName, u = "scroll." + i, f = "resize." + i, e = "orientationchange." + i, t, r;
      if (this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), t = n("#select2-drop-mask"), t.length === 0) {
        t = n(document.createElement("div"));
        t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask");
        t.hide();
        t.appendTo(this.body);
        t.on("mousedown touchstart click", function (i) {
          nt(t);
          var u = n("#select2-drop"), r;
          u.length > 0 && (r = u.data("select2"), r.opts.selectOnBlur && r.selectHighlighted({noFocus: true}), r.close(), i.preventDefault(), i.stopPropagation());
        });
      }
      this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t);
      n("#select2-drop").removeAttr("id");
      this.dropdown.attr("id", "select2-drop");
      t.show();
      this.positionDropdown();
      this.dropdown.show();
      this.positionDropdown();
      this.dropdown.addClass("select2-drop-active");
      r = this;
      this.container.parents().add(window).each(function () {
        n(this).on(f + " " + u + " " + e, function () {
          r.opened() && r.positionDropdown();
        });
      });
    }, close: function () {
      if (this.opened()) {
        var t = this.containerEventName, i = "scroll." + t, r = "resize." + t, u = "orientationchange." + t;
        this.container.parents().add(window).each(function () {
          n(this).off(i).off(r).off(u);
        });
        this.clearDropdownAlignmentPreference();
        n("#select2-drop-mask").hide();
        this.dropdown.removeAttr("id");
        this.dropdown.hide();
        this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
        this.results.empty();
        y.off("mousemove.select2Event");
        this.clearSearch();
        this.search.removeClass("select2-active");
        this.search.removeAttr("aria-activedescendant");
        this.opts.element.trigger(n.Event("select2-close"));
      }
    }, externalSearch: function (n) {
      this.open();
      this.search.val(n);
      this.updateResults(false);
    }, clearSearch: function () {}, prefillNextSearchTerm: function () {
      if (this.search.val() !== "") return false;
      var n = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
      return n !== t ? (this.search.val(n), this.search.select(), true) : false;
    }, getMaximumSelectionSize: function () {
      return u(this.opts.maximumSelectionSize, this.opts.element);
    }, ensureHighlightVisible: function () {
      var t = this.results, e, i, r, u, o, s, f, h;
      if (i = this.highlight(), !(i < 0)) {
        if (i == 0) {
          t.scrollTop(0);
          return;
        }
        e = this.findHighlightableChoices().find(".select2-result-label");
        r = n(e[i]);
        h = (r.offset() || {}).top || 0;
        u = h + r.outerHeight(true);
        i === e.length - 1 && (f = t.find("li.select2-more-results"), f.length > 0 && (u = f.offset().top + f.outerHeight(true)));
        o = t.offset().top + t.outerHeight(false);
        u > o && t.scrollTop(t.scrollTop() + (u - o));
        s = h - t.offset().top;
        s < 0 && r.css("display") != "none" && t.scrollTop(t.scrollTop() + s);
      }
    }, findHighlightableChoices: function () {
      return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
    }, moveHighlight: function (t) {
      for (var u = this.findHighlightableChoices(), i = this.highlight(), r; i > -1 && i < u.length;) if (i += t, r = n(u[i]), r.hasClass("select2-result-selectable") && !r.hasClass("select2-disabled") && !r.hasClass("select2-selected")) {
        this.highlight(i);
        break;
      }
    }, highlight: function (t) {
      var i = this.findHighlightableChoices(), r, u;
      if (arguments.length === 0) return e(i.filter(".select2-highlighted")[0], i.get());
      t >= i.length && (t = i.length - 1);
      t < 0 && (t = 0);
      this.removeHighlight();
      r = n(i[t]);
      r.addClass("select2-highlighted");
      this.search.attr("aria-activedescendant", r.find(".select2-result-label").attr("id"));
      this.ensureHighlightVisible();
      this.liveRegion.text(r.text());
      u = r.data("select2-data");
      u && this.opts.element.trigger({type: "select2-highlight", val: this.id(u), choice: u});
    }, removeHighlight: function () {
      this.results.find(".select2-highlighted").removeClass("select2-highlighted");
    }, touchMoved: function () {
      this._touchMoved = true;
    }, clearTouchMoved: function () {
      this._touchMoved = false;
    }, countSelectableResults: function () {
      return this.findHighlightableChoices().length;
    }, highlightUnderEvent: function (t) {
      var i = n(t.target).closest(".select2-result-selectable"), r;
      i.length > 0 && !i.is(".select2-highlighted") ? (r = this.findHighlightableChoices(), this.highlight(r.index(i))) : i.length == 0 && this.removeHighlight();
    }, loadMoreIfNeeded: function () {
      var t = this.results, i = t.find("li.select2-more-results"), f, r = this.resultsPage + 1, n = this, e = this.search.val(), o = this.context;
      i.length !== 0 && (f = i.offset().top - t.offset().top - t.height(), f <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({element: this.opts.element, term: e, page: r, context: o, matcher: this.opts.matcher, callback: this.bind(function (f) {
        n.opened() && (n.opts.populateResults.call(this, t, f.results, {term: e, page: r, context: o}), n.postprocessResults(f, false, false), f.more === true ? (i.detach().appendTo(t).html(n.opts.escapeMarkup(u(n.opts.formatLoadMore, n.opts.element, r + 1))), window.setTimeout(function () {
          n.loadMoreIfNeeded();
        }, 10)) : i.remove(), n.positionDropdown(), n.resultsPage = r, n.context = f.context, this.opts.element.trigger({type: "select2-loaded", items: f}));
      })})));
    }, tokenize: function () {}, updateResults: function (i) {
      function b() {
        e.removeClass("select2-active");
        s.positionDropdown();
        c.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? s.liveRegion.text(c.text()) : s.liveRegion.text(s.opts.formatMatches(c.find('.select2-result-selectable:not(".select2-selected")').length));
      }
      function h(n) {
        c.html(n);
        b();
      }
      var e = this.search, c = this.results, r = this.opts, v, s = this, l, y = e.val(), p = n.data(this.container, "select2-last-term"), w, a;
      if ((i === true || !p || !f(y, p)) && (n.data(this.container, "select2-last-term", y), i === true || this.showSearchInput !== false && this.opened())) {
        if (w = ++this.queryCount, a = this.getMaximumSelectionSize(), a >= 1 && (v = this.data(), n.isArray(v) && v.length >= a && o(r.formatSelectionTooBig, "formatSelectionTooBig"))) {
          h("<li class='select2-selection-limit'>" + u(r.formatSelectionTooBig, r.element, a) + "</li>");
          return;
        }
        if (e.val().length < r.minimumInputLength) {
          o(r.formatInputTooShort, "formatInputTooShort") ? h("<li class='select2-no-results'>" + u(r.formatInputTooShort, r.element, e.val(), r.minimumInputLength) + "</li>") : h("");
          i && this.showSearch && this.showSearch(true);
          return;
        }
        if (r.maximumInputLength && e.val().length > r.maximumInputLength) {
          o(r.formatInputTooLong, "formatInputTooLong") ? h("<li class='select2-no-results'>" + u(r.formatInputTooLong, r.element, e.val(), r.maximumInputLength) + "</li>") : h("");
          return;
        }
        r.formatSearching && this.findHighlightableChoices().length === 0 && h("<li class='select2-searching'>" + u(r.formatSearching, r.element) + "</li>");
        e.addClass("select2-active");
        this.removeHighlight();
        l = this.tokenize();
        l != t && l != null && e.val(l);
        this.resultsPage = 1;
        r.query({element: r.element, term: e.val(), page: this.resultsPage, context: null, matcher: r.matcher, callback: this.bind(function (l) {
          var a;
          if (w == this.queryCount) {
            if (!this.opened()) {
              this.search.removeClass("select2-active");
              return;
            }
            if (l.hasError !== t && o(r.formatAjaxError, "formatAjaxError")) {
              h("<li class='select2-ajax-error'>" + u(r.formatAjaxError, r.element, l.jqXHR, l.textStatus, l.errorThrown) + "</li>");
              return;
            }
            if (this.context = l.context === t ? null : l.context, this.opts.createSearchChoice && e.val() !== "" && (a = this.opts.createSearchChoice.call(s, e.val(), l.results), a !== t && a !== null && s.id(a) !== t && s.id(a) !== null && n(l.results).filter(function () {
              return f(s.id(this), s.id(a));
            }).length === 0 && this.opts.createSearchChoicePosition(l.results, a)), l.results.length === 0 && o(r.formatNoMatches, "formatNoMatches")) {
              h("<li class='select2-no-results'>" + u(r.formatNoMatches, r.element, e.val()) + "</li>");
              this.showSearch && this.showSearch(e.val());
              return;
            }
            c.empty();
            s.opts.populateResults.call(this, c, l.results, {term: e.val(), page: this.resultsPage, context: null});
            l.more === true && o(r.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + r.escapeMarkup(u(r.formatLoadMore, r.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
              s.loadMoreIfNeeded();
            }, 10));
            this.postprocessResults(l, i);
            b();
            this.opts.element.trigger({type: "select2-loaded", items: l});
          }
        })});
      }
    }, cancel: function () {
      this.close();
    }, blur: function () {
      this.opts.selectOnBlur && this.selectHighlighted({noFocus: true});
      this.close();
      this.container.removeClass("select2-container-active");
      this.search[0] === document.activeElement && this.search.blur();
      this.clearSearch();
      this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
    }, focusSearch: function () {
      yt(this.search);
    }, selectHighlighted: function (n) {
      if (this._touchMoved) {
        this.clearTouchMoved();
        return;
      }
      var i = this.highlight(), r = this.results.find(".select2-highlighted"), t = r.closest(".select2-result").data("select2-data");
      if (t) {
        this.highlight(i);
        this.onSelect(t, n);
      } else n && n.noFocus && this.close();
    }, getPlaceholder: function () {
      var n;
      return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((n = this.getPlaceholderOption()) !== t ? n.text() : t);
    }, getPlaceholderOption: function () {
      if (this.select) {
        var i = this.select.children("option").first();
        if (this.opts.placeholderOption !== t) return this.opts.placeholderOption === "first" && i || typeof this.opts.placeholderOption == "function" && this.opts.placeholderOption(this.select);
        if (n.trim(i.text()) === "" && i.val() === "") return i;
      }
    }, initContainerWidth: function () {
      function i() {
        var t, u, r, i, f, e;
        if (this.opts.width === "off") return null;
        if (this.opts.width === "element") return this.opts.element.outerWidth(false) === 0 ? "auto" : this.opts.element.outerWidth(false) + "px";
        if (this.opts.width === "copy" || this.opts.width === "resolve") {
          if (t = this.opts.element.attr("style"), typeof t == "string") for (u = t.split(";"), i = 0, f = u.length; i < f; i = i + 1) if (e = u[i].replace(/\s/g, ""), r = e.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), r !== null && r.length >= 1) return r[1];
          return this.opts.width === "resolve" ? (t = this.opts.element.css("width"), t.indexOf("%") > 0) ? t : this.opts.element.outerWidth(false) === 0 ? "auto" : this.opts.element.outerWidth(false) + "px" : null;
        }
        return n.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
      }
      var t = i.call(this);
      t !== null && this.container.css("width", t);
    }});
    d = k(l, {createContainer: function () {
      return n(document.createElement("div")).attr({class: "select2-container"}).html("<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span></a><label for='' class='select2-offscreen'></label><input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' /><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <label for='' class='select2-offscreen'></label>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'       aria-autocomplete='list' />   </div>   <ul class='select2-results' role='listbox'>   </ul></div>");
    }, enableInterface: function () {
      this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled());
    }, opening: function () {
      var t, i, r;
      this.opts.minimumResultsForSearch >= 0 && this.showSearch(true);
      this.parent.opening.apply(this, arguments);
      this.showSearchInput !== false && this.search.val(this.focusser.val());
      this.opts.shouldFocusInput(this) && (this.search.focus(), t = this.search.get(0), t.createTextRange ? (i = t.createTextRange(), i.collapse(false), i.select()) : t.setSelectionRange && (r = this.search.val().length, t.setSelectionRange(r, r)));
      this.prefillNextSearchTerm();
      this.focusser.prop("disabled", true).val("");
      this.updateResults(true);
      this.opts.element.trigger(n.Event("select2-open"));
    }, close: function () {
      this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", false), this.opts.shouldFocusInput(this) && this.focusser.focus());
    }, focus: function () {
      this.opened() ? this.close() : (this.focusser.prop("disabled", false), this.opts.shouldFocusInput(this) && this.focusser.focus());
    }, isFocused: function () {
      return this.container.hasClass("select2-container-active");
    }, cancel: function () {
      this.parent.cancel.apply(this, arguments);
      this.focusser.prop("disabled", false);
      this.opts.shouldFocusInput(this) && this.focusser.focus();
    }, destroy: function () {
      n("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id"));
      this.parent.destroy.apply(this, arguments);
      b.call(this, "selection", "focusser");
    }, initContainer: function () {
      var t, e = this.container, s = this.dropdown, u = h(), f, o;
      this.opts.minimumResultsForSearch < 0 ? this.showSearch(false) : this.showSearch(true);
      this.selection = t = e.find(".select2-choice");
      this.focusser = e.find(".select2-focusser");
      t.find(".select2-chosen").attr("id", "select2-chosen-" + u);
      this.focusser.attr("aria-labelledby", "select2-chosen-" + u);
      this.results.attr("id", "select2-results-" + u);
      this.search.attr("aria-owns", "select2-results-" + u);
      this.focusser.attr("id", "s2id_autogen" + u);
      f = n("label[for='" + this.opts.element.attr("id") + "']");
      this.opts.element.on("focus.select2", this.bind(function () {
        this.focus();
      }));
      this.focusser.prev().text(f.text()).attr("for", this.focusser.attr("id"));
      o = this.opts.element.attr("title");
      this.opts.element.attr("title", o || f.text());
      this.focusser.attr("tabindex", this.elementTabIndex);
      this.search.attr("id", this.focusser.attr("id") + "_search");
      this.search.prev().text(n("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id"));
      this.search.on("keydown", this.bind(function (n) {
        if (this.isInterfaceEnabled() && 229 != n.keyCode) {
          if (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) {
            r(n);
            return;
          }
          switch (n.which) {
            case i.UP:
            case i.DOWN:
              this.moveHighlight(n.which === i.UP ? -1 : 1);
              r(n);
              return;
            case i.ENTER:
              this.selectHighlighted();
              r(n);
              return;
            case i.TAB:
              this.selectHighlighted({noFocus: true});
              return;
            case i.ESC:
              this.cancel(n);
              r(n);
              return;
          }
        }
      }));
      this.search.on("blur", this.bind(function () {
        document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
          this.opened() && this.results && this.results.length > 1 && this.search.focus();
        }), 0);
      }));
      this.focusser.on("keydown", this.bind(function (n) {
        if (this.isInterfaceEnabled() && n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.ESC) {
          if (this.opts.openOnEnter === false && n.which === i.ENTER) {
            r(n);
            return;
          }
          if (n.which == i.DOWN || n.which == i.UP || n.which == i.ENTER && this.opts.openOnEnter) {
            if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey) return;
            this.open();
            r(n);
            return;
          }
          if (n.which == i.DELETE || n.which == i.BACKSPACE) {
            this.opts.allowClear && this.clear();
            r(n);
            return;
          }
        }
      }));
      it(this.focusser);
      this.focusser.on("keyup-change input", this.bind(function (n) {
        if (this.opts.minimumResultsForSearch >= 0) {
          if (n.stopPropagation(), this.opened()) return;
          this.open();
        }
      }));
      t.on("mousedown touchstart", "abbr", this.bind(function (n) {
        this.isInterfaceEnabled() && (this.clear(), wt(n), this.close(), this.selection && this.selection.focus());
      }));
      t.on("mousedown touchstart", this.bind(function (i) {
        nt(t);
        this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
        this.opened() ? this.close() : this.isInterfaceEnabled() && this.open();
        r(i);
      }));
      s.on("mousedown touchstart", this.bind(function () {
        this.opts.shouldFocusInput(this) && this.search.focus();
      }));
      t.on("focus", this.bind(function (n) {
        r(n);
      }));
      this.focusser.on("focus", this.bind(function () {
        this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
        this.container.addClass("select2-container-active");
      })).on("blur", this.bind(function () {
        this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(n.Event("select2-blur")));
      }));
      this.search.on("focus", this.bind(function () {
        this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
        this.container.addClass("select2-container-active");
      }));
      this.initContainerWidth();
      this.opts.element.hide();
      this.setPlaceholder();
    }, clear: function (t) {
      var i = this.selection.data("select2-data"), r, u;
      if (i) {
        if (r = n.Event("select2-clearing"), this.opts.element.trigger(r), r.isDefaultPrevented()) return;
        u = this.getPlaceholderOption();
        this.opts.element.val(u ? u.val() : "");
        this.selection.find(".select2-chosen").empty();
        this.selection.removeData("select2-data");
        this.setPlaceholder();
        t !== false && (this.opts.element.trigger({type: "select2-removed", val: this.id(i), choice: i}), this.triggerChange({removed: i}));
        var f = this.selection.find(".select2-chosen")[0].id.split("_")[2] + "_lbl", o = n("#" + f).text() + ": ", e = "";
        n("#" + f).hasClass("required-label") && (e = " נדרש");
        this.selection.find(".select2-chosen").children().length == 0 && n("#" + this.selection.find(".select2-chosen").attr("id")).prepend("<span class='sr-only'>" + o + e + "<span id='" + f + "_sr'></span></span>");
      }
    }, initSelection: function () {
      var n;
      this.isPlaceholderOptionSelected() ? (this.updateSelection(null), this.close(), this.setPlaceholder()) : (n = this, this.opts.initSelection.call(null, this.opts.element, function (i) {
        i !== t && i !== null && (n.updateSelection(i), n.close(), n.setPlaceholder(), n.lastSearchTerm = n.search.val());
      }));
    }, isPlaceholderOptionSelected: function () {
      var n;
      return this.getPlaceholder() === t ? false : (n = this.getPlaceholderOption()) !== t && n.prop("selected") || this.opts.element.val() === "" || this.opts.element.val() === t || this.opts.element.val() === null;
    }, prepareOpts: function () {
      var t = this.parent.prepareOpts.apply(this, arguments), i = this;
      return t.element.get(0).tagName.toLowerCase() === "select" ? t.initSelection = function (n, t) {
        var r = n.find("option").filter(function () {
          return this.selected && !this.disabled;
        });
        t(i.optionToData(r));
      } : "data" in t && (t.initSelection = t.initSelection || function (i, r) {
        var e = i.val(), u = null;
        t.query({matcher: function (n, i, r) {
          var o = f(e, t.id(r));
          return o && (u = r), o;
        }, callback: n.isFunction(r) ? function () {
          r(u);
        } : n.noop});
      }), t;
    }, getPlaceholder: function () {
      return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments);
    }, setPlaceholder: function () {
      var n = this.getPlaceholder();
      if (this.isPlaceholderOptionSelected() && n !== t) {
        if (this.select && this.getPlaceholderOption() === t) return;
        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(n));
        this.selection.addClass("select2-default");
        this.container.removeClass("select2-allowclear");
      }
    }, postprocessResults: function (n, t, i) {
      var r = 0, e = this, u;
      this.findHighlightableChoices().each2(function (n, t) {
        if (f(e.id(t.data("select2-data")), e.opts.element.val())) return r = n, false;
      });
      i !== false && (t === true && r >= 0 ? this.highlight(r) : this.highlight(0));
      t === true && (u = this.opts.minimumResultsForSearch, u >= 0 && this.showSearch(st(n.results) >= u));
    }, showSearch: function (t) {
      this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), n(this.dropdown, this.container).toggleClass("select2-with-searchbox", t));
    }, onSelect: function (n, t) {
      if (this.triggerSelect(n)) {
        var i = this.opts.element.val(), r = this.data();
        this.opts.element.val(this.id(n));
        this.updateSelection(n);
        this.opts.element.trigger({type: "select2-selected", val: this.id(n), choice: n});
        this.lastSearchTerm = this.search.val();
        this.close();
        t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus();
        f(i, this.id(n)) || this.triggerChange({added: n, removed: r});
      }
    }, updateSelection: function (i) {
      var r = this.selection.find(".select2-chosen"), u, f;
      this.selection.data("select2-data", i);
      r.empty();
      i !== null && (u = this.opts.formatSelection(i, r, this.opts.escapeMarkup));
      u !== t && r.append(u);
      f = this.opts.formatSelectionCssClass(i, r);
      f !== t && r.addClass(f);
      this.selection.removeClass("select2-default");
      this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear");
      var e = this.selection.find(".select2-chosen")[0].id.split("_")[2] + "_lbl", s = n("#" + e).text() + ": ", o = "";
      n("#" + e).hasClass("required-label") && (o = " נדרש");
      this.selection.find(".select2-chosen").children().length == 0 && n("#" + this.selection.find(".select2-chosen").attr("id")).prepend("<span class='sr-only' id='" + e + "_sr'>" + s + o + "</span>");
    }, val: function () {
      var i, r = false, u = null, n = this, f = this.data();
      if (arguments.length === 0) return this.opts.element.val();
      if (i = arguments[0], arguments.length > 1 && (r = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(i).find("option").filter(function () {
        return this.selected;
      }).each2(function (t, i) {
        return u = n.optionToData(i), false;
      }), this.updateSelection(u), this.setPlaceholder(), r && this.triggerChange({added: u, removed: f}); else {
        if (!i && i !== 0) {
          this.clear(r);
          return;
        }
        if (this.opts.initSelection === t) throw new Error("cannot call val() if initSelection() is not defined");
        this.opts.element.val(i);
        this.opts.initSelection(this.opts.element, function (t) {
          n.opts.element.val(t ? n.id(t) : "");
          n.updateSelection(t);
          n.setPlaceholder();
          r && n.triggerChange({added: t, removed: f});
        });
      }
    }, clearSearch: function () {
      this.search.val("");
      this.focusser.val("");
    }, data: function (n) {
      var i, r = false;
      if (arguments.length === 0) return i = this.selection.data("select2-data"), i == t && (i = null), i;
      opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.');
      arguments.length > 1 && (r = arguments[1]);
      n ? (i = this.data(), this.opts.element.val(n ? this.id(n) : ""), this.updateSelection(n), r && this.triggerChange({added: n, removed: i})) : this.clear(r);
    }});
    g = k(l, {createContainer: function () {
      return n(document.createElement("div")).attr({class: "select2-container select2-container-multi"}).html("<ul class='select2-choices'>  <li class='select2-search-field'>    <label for='' class='select2-offscreen'></label>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   </ul></div>");
    }, prepareOpts: function () {
      var t = this.parent.prepareOpts.apply(this, arguments), i = this;
      return t.element.get(0).tagName.toLowerCase() === "select" ? t.initSelection = function (n, t) {
        var r = [];
        n.find("option").filter(function () {
          return this.selected && !this.disabled;
        }).each2(function (n, t) {
          r.push(i.optionToData(t));
        });
        t(r);
      } : "data" in t && (t.initSelection = t.initSelection || function (i, r) {
        var e = w(i.val(), t.separator, t.transformVal), u = [];
        t.query({matcher: function (i, r, o) {
          var s = n.grep(e, function (n) {
            return f(n, t.id(o));
          }).length;
          return s && u.push(o), s;
        }, callback: n.isFunction(r) ? function () {
          for (var h, n, o, s = [], i = 0; i < e.length; i++) for (h = e[i], n = 0; n < u.length; n++) if (o = u[n], f(h, t.id(o))) {
            s.push(o);
            u.splice(n, 1);
            break;
          }
          r(s);
        } : n.noop});
      }), t;
    }, selectChoice: function (n) {
      var t = this.container.find(".select2-search-choice-focus");
      t.length && n && n[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), n && n.length && (this.close(), n.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", n)));
    }, destroy: function () {
      n("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id"));
      this.parent.destroy.apply(this, arguments);
      b.call(this, "searchContainer", "selection");
    }, initContainer: function () {
      var t = ".select2-choices", u, f;
      this.searchContainer = this.container.find(".select2-search-field");
      this.selection = u = this.container.find(t);
      f = this;
      this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function () {
        f.search[0].focus();
        f.selectChoice(n(this));
      });
      this.search.attr("id", "s2id_autogen" + h());
      this.search.prev().text(n("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id"));
      this.opts.element.on("focus.select2", this.bind(function () {
        this.focus();
      }));
      this.search.on("input paste", this.bind(function () {
        this.search.attr("placeholder") && this.search.val().length == 0 || this.isInterfaceEnabled() && (this.opened() || this.open());
      }));
      this.search.attr("tabindex", this.elementTabIndex);
      this.keydowns = 0;
      this.search.on("keydown", this.bind(function (n) {
        var t;
        if (this.isInterfaceEnabled()) {
          ++this.keydowns;
          var f = u.find(".select2-search-choice-focus"), o = f.prev(".select2-search-choice:not(.select2-locked)"), e = f.next(".select2-search-choice:not(.select2-locked)"), s = pt(this.search);
          if (f.length && (n.which == i.LEFT || n.which == i.RIGHT || n.which == i.BACKSPACE || n.which == i.DELETE || n.which == i.ENTER)) {
            t = f;
            n.which == i.LEFT && o.length ? t = o : n.which == i.RIGHT ? t = e.length ? e : null : n.which === i.BACKSPACE ? this.unselect(f.first()) && (this.search.width(10), t = o.length ? o : e) : n.which == i.DELETE ? this.unselect(f.first()) && (this.search.width(10), t = e.length ? e : null) : n.which == i.ENTER && (t = null);
            this.selectChoice(t);
            r(n);
            t && t.length || this.open();
            return;
          }
          if ((n.which !== i.BACKSPACE || this.keydowns != 1) && n.which != i.LEFT || s.offset != 0 || s.length) this.selectChoice(null); else {
            this.selectChoice(u.find(".select2-search-choice:not(.select2-locked)").last());
            r(n);
            return;
          }
          if (this.opened()) switch (n.which) {
            case i.UP:
            case i.DOWN:
              this.moveHighlight(n.which === i.UP ? -1 : 1);
              r(n);
              return;
            case i.ENTER:
              this.selectHighlighted();
              r(n);
              return;
            case i.TAB:
              this.selectHighlighted({noFocus: true});
              this.close();
              return;
            case i.ESC:
              this.cancel(n);
              r(n);
              return;
          }
          if (n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.BACKSPACE && n.which !== i.ESC) {
            if (n.which === i.ENTER) {
              if (this.opts.openOnEnter === false) return;
              if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey) return;
            }
            this.open();
            (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) && r(n);
            n.which === i.ENTER && r(n);
          }
        }
      }));
      this.search.on("keyup", this.bind(function () {
        this.keydowns = 0;
        this.resizeSearch();
      }));
      this.search.on("blur", this.bind(function (t) {
        this.container.removeClass("select2-container-active");
        this.search.removeClass("select2-focused");
        this.selectChoice(null);
        this.opened() || this.clearSearch();
        t.stopImmediatePropagation();
        this.opts.element.trigger(n.Event("select2-blur"));
      }));
      this.container.on("click", t, this.bind(function (t) {
        this.isInterfaceEnabled() && (n(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()));
      }));
      this.container.on("focus", t, this.bind(function () {
        this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder());
      }));
      this.initContainerWidth();
      this.opts.element.hide();
      this.clearSearch();
    }, enableInterface: function () {
      this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled());
    }, initSelection: function () {
      var n;
      this.opts.element.val() === "" && this.opts.element.text() === "" && (this.updateSelection([]), this.close(), this.clearSearch());
      (this.select || this.opts.element.val() !== "") && (n = this, this.opts.initSelection.call(null, this.opts.element, function (i) {
        i !== t && i !== null && (n.updateSelection(i), n.close(), n.clearSearch());
      }));
    }, clearSearch: function () {
      var n = this.getPlaceholder(), i = this.getMaxSearchWidth();
      n !== t && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false ? (this.search.val(n).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10);
    }, clearPlaceholder: function () {
      this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default");
    }, opening: function () {
      this.clearPlaceholder();
      this.resizeSearch();
      this.parent.opening.apply(this, arguments);
      this.focusSearch();
      this.prefillNextSearchTerm();
      this.updateResults(true);
      this.opts.shouldFocusInput(this) && this.search.focus();
      this.opts.element.trigger(n.Event("select2-open"));
    }, close: function () {
      this.opened() && this.parent.close.apply(this, arguments);
    }, focus: function () {
      this.close();
      this.search.focus();
    }, isFocused: function () {
      return this.search.hasClass("select2-focused");
    }, updateSelection: function (t) {
      var r = {}, u = [], i = this;
      n(t).each(function () {
        i.id(this) in r || (r[i.id(this)] = 0, u.push(this));
      });
      this.selection.find(".select2-search-choice").remove();
      this.addSelectedChoice(u);
      i.postprocessResults();
    }, tokenize: function () {
      var n = this.search.val();
      n = this.opts.tokenizer.call(this, n, this.data(), this.bind(this.onSelect), this.opts);
      n != null && n != t && (this.search.val(n), n.length > 0 && this.open());
    }, onSelect: function (n, t) {
      this.triggerSelect(n) && n.text !== "" && (this.addSelectedChoice(n), this.opts.element.trigger({type: "selected", val: this.id(n), choice: n}), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(n, false, this.opts.closeOnSelect === true), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(true) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({added: n}), t && t.noFocus || this.focusSearch());
    }, cancel: function () {
      this.close();
      this.focusSearch();
    }, addSelectedChoice: function (t) {
      var i = this.getVal(), r = this;
      n(t).each(function () {
        i.push(r.createChoice(this));
      });
      this.setVal(i);
    }, createChoice: function (i) {
      var o = !i.locked, s = n("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"), h = n("<li class='select2-search-choice select2-locked'><div></div></li>"), u = o ? s : h, c = this.id(i), f, e;
      if (f = this.opts.formatSelection(i, u.find("div"), this.opts.escapeMarkup), f != t && u.find("div").replaceWith(n("<div></div>").html(f)), e = this.opts.formatSelectionCssClass(i, u.find("div")), e != t && u.addClass(e), o) u.find(".select2-search-choice-close").on("mousedown", r).on("click dblclick", this.bind(function (t) {
        this.isInterfaceEnabled() && (this.unselect(n(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), r(t), this.close(), this.focusSearch());
      })).on("focus", this.bind(function () {
        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"));
      }));
      return u.data("select2-data", i), u.insertBefore(this.searchContainer), c;
    }, unselect: function (t) {
      var u = this.getVal(), i, f, r;
      if (t = t.closest(".select2-search-choice"), t.length === 0) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
      if (i = t.data("select2-data"), i) {
        if (r = n.Event("select2-removing"), r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented()) return false;
        while ((f = e(this.id(i), u)) >= 0) u.splice(f, 1), this.setVal(u), this.select && this.postprocessResults();
        return t.remove(), this.opts.element.trigger({type: "select2-removed", val: this.id(i), choice: i}), this.triggerChange({removed: i}), true;
      }
    }, postprocessResults: function (n, t, i) {
      var s = this.getVal(), f = this.results.find(".select2-result"), h = this.results.find(".select2-result-with-children"), r = this;
      f.each2(function (n, t) {
        var i = r.id(t.data("select2-data"));
        e(i, s) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"));
      });
      h.each2(function (n, t) {
        t.is(".select2-result-selectable") || t.find(".select2-result-selectable:not(.select2-selected)").length !== 0 || t.addClass("select2-selected");
      });
      this.highlight() == -1 && i !== false && this.opts.closeOnSelect === true && r.highlight(0);
      !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (n && (!n || n.more || this.results.find(".select2-no-results").length !== 0) || o(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + u(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "</li>"));
    }, getMaxSearchWidth: function () {
      return this.selection.width() - (this.search.outerWidth(false) - this.search.width());
    }, resizeSearch: function () {
      var i, u, t, f, n, r = this.search.outerWidth(false) - this.search.width();
      i = bt(this.search) + 10;
      u = this.search.offset().left;
      t = this.selection.width();
      f = this.selection.offset().left;
      n = t - (u - f) - r;
      n < i && (n = t - r);
      n < 40 && (n = t - r);
      n <= 0 && (n = i);
      this.search.width(Math.floor(n));
    }, getVal: function () {
      var n;
      return this.select ? (n = this.select.val(), n === null ? [] : n) : (n = this.opts.element.val(), w(n, this.opts.separator, this.opts.transformVal));
    }, setVal: function (t) {
      if (this.select) this.select.val(t); else {
        var i = [], r = {};
        n(t).each(function () {
          this in r || (i.push(this), r[this] = 0);
        });
        this.opts.element.val(i.length === 0 ? "" : i.join(this.opts.separator));
      }
    }, buildChangeDetails: function (n, t) {
      for (var r, t = t.slice(0), n = n.slice(0), i = 0; i < t.length; i++) for (r = 0; r < n.length; r++) if (f(this.opts.id(t[i]), this.opts.id(n[r]))) {
        t.splice(i, 1);
        i--;
        n.splice(r, 1);
        break;
      }
      return {added: t, removed: n};
    }, val: function (i, r) {
      var f, u = this;
      if (arguments.length === 0) return this.getVal();
      if (f = this.data(), f.length || (f = []), !i && i !== 0) {
        this.opts.element.val("");
        this.updateSelection([]);
        this.clearSearch();
        r && this.triggerChange({added: this.data(), removed: f});
        return;
      }
      if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), r && this.triggerChange(this.buildChangeDetails(f, this.data())); else {
        if (this.opts.initSelection === t) throw new Error("val() cannot be called if initSelection() is not defined");
        this.opts.initSelection(this.opts.element, function (t) {
          var i = n.map(t, u.id);
          u.setVal(i);
          u.updateSelection(t);
          u.clearSearch();
          r && u.triggerChange(u.buildChangeDetails(f, u.data()));
        });
      }
      this.clearSearch();
    }, onSortStart: function () {
      if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
      this.search.width(0);
      this.searchContainer.hide();
    }, onSortEnd: function () {
      var t = [], i = this;
      this.searchContainer.show();
      this.searchContainer.appendTo(this.searchContainer.parent());
      this.resizeSearch();
      this.selection.find(".select2-search-choice").each(function () {
        t.push(i.opts.id(n(this).data("select2-data")));
      });
      this.setVal(t);
      this.triggerChange();
    }, data: function (t, i) {
      var f = this, r, u;
      if (arguments.length === 0) return this.selection.children(".select2-search-choice").map(function () {
        return n(this).data("select2-data");
      }).get();
      u = this.data();
      t || (t = []);
      r = n.map(t, function (n) {
        return f.opts.id(n);
      });
      this.setVal(r);
      this.updateSelection(t);
      this.clearSearch();
      i && this.triggerChange(this.buildChangeDetails(u, this.data()));
    }});
    n.fn.select2 = function () {
      var i = Array.prototype.slice.call(arguments, 0), r, u, f, o, s, c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], l = ["opened", "isFocused", "container", "dropdown"], a = ["val", "data"], h = {search: "externalSearch"};
      return this.each(function () {
        if (i.length === 0 || typeof i[0] == "object") r = i.length === 0 ? {} : n.extend({}, i[0]), r.element = n(this), r.element.get(0).tagName.toLowerCase() === "select" ? s = r.element.prop("multiple") : (s = r.multiple || false, "tags" in r && (r.multiple = s = true)), u = s ? new window.Select2.class.multi : new window.Select2.class.single, u.init(r); else if (typeof i[0] == "string") {
          if (e(i[0], c) < 0) throw "Unknown method: " + i[0];
          if (o = t, u = n(this).data("select2"), u === t) return;
          if (f = i[0], f === "container" ? o = u.container : f === "dropdown" ? o = u.dropdown : (h[f] && (f = h[f]), o = u[f].apply(u, i.slice(1))), e(i[0], l) >= 0 || e(i[0], a) >= 0 && i.length == 1) return false;
        } else throw "Invalid arguments to select2 plugin: " + i;
      }), o === t ? this : o;
    };
    n.fn.select2.defaults = {debug: false, width: "copy", loadMorePadding: 0, closeOnSelect: true, openOnEnter: true, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function (n, t, i, r) {
      var u = [];
      return ut(this.text(n), i.term, u, r), u.join("");
    }, transformVal: function (t) {
      return n.trim(t);
    }, formatSelection: function (n, i, r) {
      return n ? r(this.text(n)) : t;
    }, sortResults: function (n) {
      return n;
    }, formatResultCssClass: function (n) {
      return n.css;
    }, formatSelectionCssClass: function () {
      return t;
    }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumInputLength: null, maximumSelectionSize: 0, id: function (n) {
      return n == t ? null : n.id;
    }, text: function (t) {
      return t && this.data && this.data.text ? n.isFunction(this.data.text) ? this.data.text(t) : t[this.data.text] : t.text;
    }, matcher: function (n, t) {
      return c("" + t).toUpperCase().indexOf(c("" + n).toUpperCase()) >= 0;
    }, separator: ",", tokenSeparators: [], tokenizer: dt, escapeMarkup: ft, blurOnChange: false, selectOnBlur: false, adaptContainerCssClass: function (n) {
      return n;
    }, adaptDropdownCssClass: function () {
      return null;
    }, nextSearchTerm: function () {
      return t;
    }, searchInputPlaceholder: "", createSearchChoicePosition: "top", shouldFocusInput: function (n) {
      var t = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
      return t ? n.opts.minimumResultsForSearch < 0 ? false : true : true;
    }};
    n.fn.select2.locales = [];
    n.fn.select2.locales.en = {formatMatches: function (n) {
      return n === 1 ? "One result is available, press enter to select it." : n + " results are available, use up and down arrow keys to navigate.";
    }, formatNoMatches: function () {
      return "No matches found";
    }, formatAjaxError: function () {
      return "Loading failed";
    }, formatInputTooShort: function (n, t) {
      var i = t - n.length;
      return "Please enter " + i + " or more character" + (i == 1 ? "" : "s");
    }, formatInputTooLong: function (n, t) {
      var i = n.length - t;
      return "Please delete " + i + " character" + (i == 1 ? "" : "s");
    }, formatSelectionTooBig: function (n) {
      return "You can only select " + n + " item" + (n == 1 ? "" : "s");
    }, formatLoadMore: function () {
      return "Loading more results…";
    }, formatSearching: function () {
      return "Searching…";
    }};
    n.extend(n.fn.select2.defaults, n.fn.select2.locales.en);
    n.fn.select2.ajaxDefaults = {transport: n.ajax, params: {type: "GET", cache: false, dataType: "json"}};
    window.Select2 = {query: {ajax: et, local: ot, tags: kt}, util: {debounce: rt, markMatch: ut, escapeMarkup: ft, stripDiacritics: c}, class: {abstract: l, single: d, multi: g}};
  }
}(jQuery));
angular.module("rt.select2", []).value("select2Config", {}).factory("select2Stack", function () {
  var n = [];
  return {$register: function (t) {
    n.push(t);
  }, $unregister: function (t) {
    var i = n.indexOf(t);
    i !== -1 && n.splice(i, 1);
  }, closeAll: function () {
    n.forEach(function (n) {
      n.close();
    });
  }};
}).directive("select2", ["$rootScope", "$timeout", "$parse", "$filter", "select2Config", "select2Stack", function (n, t, i, r, u, f) {
  "use strict";
  function e(n) {
    var t = [], i = 0;
    for (var r in n) n.hasOwnProperty(r) && (t[i] = r, i++);
    return t.sort();
  }
  var s = r("filter"), o = {}, h = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
  return u && angular.extend(o, u), {require: "ngModel", priority: 1, restrict: "E", template: '<input type="hidden"></input>', replace: true, link: function (n, r, u, c) {
    function nt(t) {
      if (k) {
        var i = k(n);
        if (i) return s(t, i);
      }
      return t;
    }
    function ft(n) {
      w ? p(function (t) {
        for (var r, f, u = [], i = 0; i < t.length; i++) r = t[i], f = c.$viewValue || [], f.indexOf(r.id) > -1 && u.push(r);
        n(u);
      }) : p(function () {
        b ? n(a[c.$viewValue] || {id: c.$viewValue, text: c.$viewValue, obj: {text: c.$viewValue, id: c.$viewValue}}) : n(a[c.$viewValue] || {obj: {}});
      });
    }
    var p, l = angular.extend({}, o, n.$eval(u.options)), w = angular.isDefined(u.multiple) || l.multiple, b = angular.isDefined(u.allowNewValues) || l.allowNewValues, k, a, v, ut, et, g;
    if (b && (l.createSearchChoice = function (n, t) {
      if ($(t).filter(function () {
        return n.localeCompare(this.text) === 0;
      }).length === 0) return {id: n, text: n + " [לא מזוהה]", obj: {text: n, id: "0"}};
    }), l.multiple = w, u.placeholder && (l.placeholder = u.placeholder), k = i(u.optionsFilter), a = {}, u.s2Options) {
      if (!(v = u.s2Options.match(h))) throw new Error("Invalid s2Options encountered!");
      var tt = i(v[2] || v[1]), it = i(v[7]), d = v[4] || v[6], rt = i(v[2] ? v[1] : d), y = v[5];
      p = function (t) {
        var i, r, u, o, l;
        a = {};
        var f = nt(it(n)), s = (y ? e(f) : f) || [], h = [], c = 0;
        for (i = 0; i < s.length; i++) r = {}, u = i, y && (u = s[i], r[y] = u), r[d] = f[u], o = rt(n, r), l = tt(n, r) || "", a[o] = {id: o, text: l, obj: f[u]}, h[c] = a[o], c++;
        t(h);
      };
      l.query = function (t) {
        for (var i, r, l, o, u = nt(it(n)), s = (y ? e(u) : u) || [], h = [], c = 0, f = 0; f < s.length; f++) i = {}, r = f, y && (r = s[f], i[y] = r), i[d] = u[r], l = rt(n, i), o = tt(n, i) || "", o.toLowerCase().indexOf(t.term.toLowerCase()) > -1 && (h[c] = {id: l, text: o, obj: u[r]}, c++);
        t.callback({results: h});
      };
      n.$watch(v[7], function () {
        c.$render();
      });
    } else {
      if (!l.query) throw new Error("You need to supply a query function!");
      ut = l.query;
      l.query = function (n) {
        var t = n.callback;
        n.callback = function (n) {
          for (var r, i = 0; i < n.results.length; i++) r = n.results[i], a[r.id] = r;
          t(n);
        };
        ut(n);
      };
      p = function (n) {
        l.query({term: "", callback: function (t) {
          n(t.results);
        }});
      };
    }
    c.$render = function () {
      ft(function (n) {
        w ? r.select2("data", n) : r.select2("val", n.id);
      });
    };
    l.initSelection ? (et = l.initSelection, l.initSelection = function (n, t) {
      et(n, function (n) {
        a[n.id] = n;
        t(n);
      });
    }) : l.initSelection = function (n, t) {
      ft(t);
    };
    g = {close: function () {
      r.select2("close");
    }};
    f.$register(g);
    n.$on("destroy", function () {
      f.$unregister(g);
    });
    t(function () {
      r.select2(l);
      r.on("change", function (t) {
        n.$apply(function () {
          var n, r, u, i;
          if (w) {
            for (r = [], u = 0, i = 0; i < t.val.length; i++) n = a[t.val[i]], n && (r[u] = n.id, u++);
            c.$setViewValue(r);
            c.$render();
            c.$commitViewValue();
          } else p(function () {
            n = a[t.val];
            b ? c.$setViewValue(n ? n.id : t.added.id) : c.$setViewValue(n ? n.id : null);
            c.$render();
            c.$commitViewValue();
          });
        });
      });
      r.on("select2-blur", function () {
        c.$touched || n.$apply(c.$setTouched);
      });
      c.$render();
      c.$commitViewValue();
    });
  }};
}]);
(function (n) {
  "use strict";
  n.fn.select2.locales.he = {formatNoMatches: function () {
    return "לא נמצאו התאמות";
  }, formatInputTooShort: function (n, t) {
    var i = t - n.length;
    return i == 1 ? "נא להזין תו לקבלת הרשימה" : "נא להזין " + i + " תווים נוספים לקבלת הרשימה";
  }, formatInputTooLong: function (n, t) {
    var i = n.length - t;
    return "נא להזין פחות " + i + " תווים";
  }, formatSelectionTooBig: function (n) {
    return "ניתן לבחור " + n + " פריטים";
  }, formatLoadMore: function () {
    return "טוען תוצאות נוספות…";
  }, formatSearching: function () {
    return "מחפש…";
  }};
  n.extend(n.fn.select2.defaults, n.fn.select2.locales.he);
}(jQuery));
(function (n, t) {
  typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports["angular-file-upload"] = t() : n["angular-file-upload"] = t();
}(this, function () {
  return function (n) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var u = i[r] = {exports: {}, id: r, loaded: false};
      return n[r].call(u.exports, u, u.exports, t), u.loaded = true, u.exports;
    }
    var i = {};
    return t.m = n, t.c = i, t.p = "", t(0);
  }([function (n, t, i) {
    "use strict";
    function r(n) {
      return n && n.__esModule ? n : {default: n};
    }
    var u = i(1), f = r(u), e = i(2), o = r(e), s = i(3), h = r(s), c = i(4), l = r(c), a = i(5), v = r(a), y = i(6), p = r(y), w = i(7), b = r(w), k = i(8), d = r(k), g = i(9), nt = r(g), tt = i(10), it = r(tt), rt = i(11), ut = r(rt), ft = i(12), et = r(ft), ot = i(13), st = r(ot);
    angular.module(f.default.name, []).value("fileUploaderOptions", o.default).factory("FileUploader", h.default).factory("FileLikeObject", l.default).factory("FileItem", v.default).factory("FileDirective", p.default).factory("FileSelect", b.default).factory("FileDrop", nt.default).factory("FileOver", it.default).factory("Pipeline", d.default).directive("nvFileSelect", ut.default).directive("nvFileDrop", et.default).directive("nvFileOver", st.default).run(["FileUploader", "FileLikeObject", "FileItem", "FileDirective", "FileSelect", "FileDrop", "FileOver", "Pipeline", function (n, t, i, r, u, f, e, o) {
      n.FileLikeObject = t;
      n.FileItem = i;
      n.FileDirective = r;
      n.FileSelect = u;
      n.FileDrop = f;
      n.FileOver = e;
      n.Pipeline = o;
    }]);
  }, function (n) {
    n.exports = {name: "angularFileUpload"};
  }, function (n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = {url: "/", alias: "file", headers: {}, queue: [], progress: 0, autoUpload: false, removeAfterUpload: false, method: "POST", filters: [], formData: [], queueLimit: Number.MAX_VALUE, withCredentials: false, disableMultipart: false};
  }, function (n, t, i) {
    "use strict";
    function c(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function l(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(n, t, i, u, o, s, h, c) {
      var nt = u.File, tt = u.FormData, g = function () {
        function u(t) {
          l(this, u);
          var i = v(n);
          y(this, i, t, {isUploading: false, _nextIndex: 0, _directives: {select: [], drop: [], over: []}});
          this.filters.unshift({name: "queueLimit", fn: this._queueLimitFilter});
          this.filters.unshift({name: "folder", fn: this._folderFilter});
        }
        return u.prototype.addToQueue = function (n, t, i) {
          var r = this, o = this.isArrayLikeObject(n) ? Array.prototype.slice.call(n) : [n], l = this._getFilters(i), a = this.queue.length, f = [], u = function u() {
            var n = o.shift();
            if (d(n)) return v();
            var a = r.isFile(n) ? n : new s(n), y = r._convertFiltersToPipes(l), i = new c(y), p = function (n) {
              var i = n.pipe.originalFilter, t = e(n.args, 2), f = t[0], o = t[1];
              r._onWhenAddingFileFailed(f, i, o);
              u();
            }, w = function (n, t) {
              var i = new h(r, n, t);
              f.push(i);
              r.queue.push(i);
              r._onAfterAddingFile(i);
              u();
            };
            i.onThrown = p;
            i.onSuccessful = w;
            i.exec(a, t);
          }, v = function () {
            r.queue.length !== a && (r._onAfterAddingAll(f), r.progress = r._getTotalProgress());
            r._render();
            r.autoUpload && r.uploadAll();
          };
          u();
        }, u.prototype.removeFromQueue = function (n) {
          var i = this.getIndexOfItem(n), t = this.queue[i];
          t.isUploading && t.cancel();
          this.queue.splice(i, 1);
          t._destroy();
          this.progress = this._getTotalProgress();
        }, u.prototype.clearQueue = function () {
          while (this.queue.length) this.queue[0].remove();
          this.progress = 0;
        }, u.prototype.uploadItem = function (n) {
          var i = this.getIndexOfItem(n), t = this.queue[i], r = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";
          (t._prepareToUploading(), this.isUploading) || (this._onBeforeUploadItem(t), t.isCancel) || (t.isUploading = true, this.isUploading = true, this[r](t), this._render());
        }, u.prototype.cancelItem = function (n) {
          var i = this, r = this.getIndexOfItem(n), t = this.queue[r], u = this.isHTML5 ? "_xhr" : "_form";
          t && (t.isCancel = true, t.isUploading ? t[u].abort() : function () {
            var n = [undefined, 0, {}], r = function () {
              i._onCancelItem.apply(i, [t].concat(n));
              i._onCompleteItem.apply(i, [t].concat(n));
            };
            o(r);
          }());
        }, u.prototype.uploadAll = function () {
          var n = this.getNotUploadedItems().filter(function (n) {
            return !n.isUploading;
          });
          n.length && (r(n, function (n) {
            return n._prepareToUploading();
          }), n[0].upload());
        }, u.prototype.cancelAll = function () {
          var n = this.getNotUploadedItems();
          r(n, function (n) {
            return n.cancel();
          });
        }, u.prototype.isFile = function (n) {
          return this.constructor.isFile(n);
        }, u.prototype.isFileLikeObject = function (n) {
          return this.constructor.isFileLikeObject(n);
        }, u.prototype.isArrayLikeObject = function (n) {
          return this.constructor.isArrayLikeObject(n);
        }, u.prototype.getIndexOfItem = function (n) {
          return w(n) ? n : this.queue.indexOf(n);
        }, u.prototype.getNotUploadedItems = function () {
          return this.queue.filter(function (n) {
            return !n.isUploaded;
          });
        }, u.prototype.getReadyItems = function () {
          return this.queue.filter(function (n) {
            return n.isReady && !n.isUploading;
          }).sort(function (n, t) {
            return n.index - t.index;
          });
        }, u.prototype.destroy = function () {
          var n = this;
          r(this._directives, function (t) {
            r(n._directives[t], function (n) {
              n.destroy();
            });
          });
        }, u.prototype.onAfterAddingAll = function () {}, u.prototype.onAfterAddingFile = function () {}, u.prototype.onWhenAddingFileFailed = function () {}, u.prototype.onBeforeUploadItem = function () {}, u.prototype.onProgressItem = function () {}, u.prototype.onProgressAll = function () {}, u.prototype.onSuccessItem = function () {}, u.prototype.onErrorItem = function () {}, u.prototype.onCancelItem = function () {}, u.prototype.onCompleteItem = function () {}, u.prototype.onCompleteAll = function () {}, u.prototype._getTotalProgress = function (n) {
          if (this.removeAfterUpload) return n || 0;
          var t = this.getNotUploadedItems().length, r = t ? this.queue.length - t : this.queue.length, i = 100 / this.queue.length, u = (n || 0) * i / 100;
          return Math.round(r * i + u);
        }, u.prototype._getFilters = function (n) {
          if (!n) return this.filters;
          if (k(n)) return n;
          var t = n.match(/[^\s,]+/g);
          return this.filters.filter(function (n) {
            return t.indexOf(n.name) !== -1;
          });
        }, u.prototype._convertFiltersToPipes = function (n) {
          var t = this;
          return n.map(function (n) {
            var i = a(t, n.fn);
            return i.isAsync = n.fn.length === 3, i.originalFilter = n, i;
          });
        }, u.prototype._render = function () {
          t.$$phase || t.$apply();
        }, u.prototype._folderFilter = function (n) {
          return !!(n.size || n.type);
        }, u.prototype._queueLimitFilter = function () {
          return this.queue.length < this.queueLimit;
        }, u.prototype._isSuccessCode = function (n) {
          return n >= 200 && n < 300 || n === 304;
        }, u.prototype._transformResponse = function (n, t) {
          var u = this._headersGetter(t);
          return r(i.defaults.transformResponse, function (t) {
            n = t(n, u);
          }), n;
        }, u.prototype._parseHeaders = function (n) {
          var t = {}, i, u, f;
          return n ? (r(n.split("\n"), function (n) {
            f = n.indexOf(":");
            i = n.slice(0, f).trim().toLowerCase();
            u = n.slice(f + 1).trim();
            i && (t[i] = t[i] ? t[i] + ", " + u : u);
          }), t) : t;
        }, u.prototype._headersGetter = function (n) {
          return function (t) {
            return t ? n[t.toLowerCase()] || null : n;
          };
        }, u.prototype._xhrTransport = function (n) {
          var i = this, t = n._xhr = new XMLHttpRequest, u;
          if (n.disableMultipart ? u = n._file : (u = new tt, r(n.formData, function (n) {
            r(n, function (n, t) {
              u.append(t, n);
            });
          }), u.append(n.alias, n._file, n.file.name)), typeof n._file.size != "number") throw new TypeError("The file specified is no longer valid");
          t.upload.onprogress = function (t) {
            var r = Math.round(t.lengthComputable ? t.loaded * 100 / t.total : 0);
            i._onProgressItem(n, r);
          };
          t.onload = function () {
            var r = i._parseHeaders(t.getAllResponseHeaders()), u = i._transformResponse(t.response, r), f = i._isSuccessCode(t.status) ? "Success" : "Error", e = "_on" + f + "Item";
            i[e](n, u, t.status, r);
            i._onCompleteItem(n, u, t.status, r);
          };
          t.onerror = function () {
            var r = i._parseHeaders(t.getAllResponseHeaders()), u = i._transformResponse(t.response, r);
            i._onErrorItem(n, u, t.status, r);
            i._onCompleteItem(n, u, t.status, r);
          };
          t.onabort = function () {
            var r = i._parseHeaders(t.getAllResponseHeaders()), u = i._transformResponse(t.response, r);
            i._onCancelItem(n, u, t.status, r);
            i._onCompleteItem(n, u, t.status, r);
          };
          t.open(n.method, n.url, true);
          t.withCredentials = n.withCredentials;
          r(n.headers, function (n, i) {
            t.setRequestHeader(i, n);
          });
          t.send(u);
        }, u.prototype._iframeTransport = function (n) {
          var i = this, t = f('<form style="display: none;" />'), u = f('<iframe name="iframeTransport' + Date.now() + '">'), e = n._input;
          n._form && n._form.replaceWith(e);
          n._form = t;
          e.prop("name", n.alias);
          r(n.formData, function (n) {
            r(n, function (n, i) {
              var r = f('<input type="hidden" name="' + i + '" />');
              r.val(n);
              t.append(r);
            });
          });
          t.prop({action: n.url, method: "POST", target: u.prop("name"), enctype: "multipart/form-data", encoding: "multipart/form-data"});
          u.bind("load", function () {
            var f = "", e = 200;
            try {
              f = u[0].contentDocument.body.innerHTML;
            } catch (s) {
              e = 500;
            }
            var t = {response: f, status: e, dummy: true}, r = {}, o = i._transformResponse(t.response, r);
            i._onSuccessItem(n, o, t.status, r);
            i._onCompleteItem(n, o, t.status, r);
          });
          t.abort = function () {
            var r = {status: 0, dummy: true}, f = {}, o;
            u.unbind("load").prop("src", "javascript:false;");
            t.replaceWith(e);
            i._onCancelItem(n, o, r.status, f);
            i._onCompleteItem(n, o, r.status, f);
          };
          e.after(t);
          t.append(e).append(u);
          t[0].submit();
        }, u.prototype._onWhenAddingFileFailed = function (n, t, i) {
          this.onWhenAddingFileFailed(n, t, i);
        }, u.prototype._onAfterAddingFile = function (n) {
          this.onAfterAddingFile(n);
        }, u.prototype._onAfterAddingAll = function (n) {
          this.onAfterAddingAll(n);
        }, u.prototype._onBeforeUploadItem = function (n) {
          n._onBeforeUpload();
          this.onBeforeUploadItem(n);
        }, u.prototype._onProgressItem = function (n, t) {
          var i = this._getTotalProgress(t);
          this.progress = i;
          n._onProgress(t);
          this.onProgressItem(n, t);
          this.onProgressAll(i);
          this._render();
        }, u.prototype._onSuccessItem = function (n, t, i, r) {
          n._onSuccess(t, i, r);
          this.onSuccessItem(n, t, i, r);
        }, u.prototype._onErrorItem = function (n, t, i, r) {
          n._onError(t, i, r);
          this.onErrorItem(n, t, i, r);
        }, u.prototype._onCancelItem = function (n, t, i, r) {
          n._onCancel(t, i, r);
          this.onCancelItem(n, t, i, r);
        }, u.prototype._onCompleteItem = function (n, t, i, r) {
          n._onComplete(t, i, r);
          this.onCompleteItem(n, t, i, r);
          var u = this.getReadyItems()[0];
          if (this.isUploading = false, b(u)) {
            u.upload();
            return;
          }
          this.onCompleteAll();
          this.progress = this._getTotalProgress();
          this._render();
        }, u.isFile = function (n) {
          return nt && n instanceof nt;
        }, u.isFileLikeObject = function (n) {
          return n instanceof s;
        }, u.isArrayLikeObject = function (n) {
          return p(n) && "length" in n;
        }, u.inherit = function (n, t) {
          n.prototype = Object.create(t.prototype);
          n.prototype.constructor = n;
          n.super_ = t;
        }, u;
      }();
      return g.prototype.isHTML5 = !!(nt && tt), g.isHTML5 = g.prototype.isHTML5, g;
    }
    var e, o, h;
    Object.defineProperty(t, "__esModule", {value: true});
    e = function () {
      function n(n, t) {
        var r = [], u = true, f = false, e = undefined, i, o;
        try {
          for (i = n[Symbol.iterator](); !(u = (o = i.next()).done); u = true) if (r.push(o.value), t && r.length === t) break;
        } catch (s) {
          f = true;
          e = s;
        } finally {
          try {
            !u && i.return && i.return();
          } finally {
            if (f) throw e;
          }
        }
        return r;
      }
      return function (t, i) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return n(t, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
    t.default = s;
    o = i(1);
    h = c(o);
    var u = angular, a = u.bind, v = u.copy, y = u.extend, r = u.forEach, p = u.isObject, w = u.isNumber, b = u.isDefined, k = u.isArray, d = u.isUndefined, f = u.element;
    s.$inject = ["fileUploaderOptions", "$rootScope", "$http", "$window", "$timeout", "FileLikeObject", "FileItem", "Pipeline"];
  }, function (n, t, i) {
    "use strict";
    function e(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function o(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l() {
      return function () {
        function n(t) {
          o(this, n);
          var r = h(t), i = r ? t.value : t, u = c(i) ? "FakePath" : "Object", f = "_createFrom" + u;
          this[f](i);
        }
        return n.prototype._createFromFakePath = function (n) {
          this.lastModifiedDate = null;
          this.size = null;
          this.type = "like/" + n.slice(n.lastIndexOf(".") + 1).toLowerCase();
          this.name = n.slice(n.lastIndexOf("/") + n.lastIndexOf("\\") + 2);
        }, n.prototype._createFromObject = function (n) {
          this.lastModifiedDate = s(n.lastModifiedDate);
          this.size = n.size;
          this.type = n.type;
          this.name = n.name;
        }, n;
      }();
    }
    var u, f;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = l;
    u = i(1);
    f = e(u);
    var r = angular, s = r.copy, h = r.isElement, c = r.isString;
  }, function (n, t, i) {
    "use strict";
    function s(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function h(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function e(n, t) {
      return function () {
        function i(n, r, u) {
          h(this, i);
          var o = a(r), e = o ? l(r) : null, s = o ? null : r;
          c(this, {url: n.url, alias: n.alias, headers: f(n.headers), formData: f(n.formData), removeAfterUpload: n.removeAfterUpload, withCredentials: n.withCredentials, disableMultipart: n.disableMultipart, method: n.method}, u, {uploader: n, file: new t(r), isReady: false, isUploading: false, isUploaded: false, isSuccess: false, isCancel: false, isError: false, progress: 0, index: null, _file: s, _input: e});
          e && this._replaceNode(e);
        }
        return i.prototype.upload = function () {
          try {
            this.uploader.uploadItem(this);
          } catch (n) {
            var t = n.name + ":" + n.message;
            this.uploader._onCompleteItem(this, t, n.code, []);
            this.uploader._onErrorItem(this, t, n.code, []);
          }
        }, i.prototype.cancel = function () {
          this.uploader.cancelItem(this);
        }, i.prototype.remove = function () {
          this.uploader.removeFromQueue(this);
        }, i.prototype.onBeforeUpload = function () {}, i.prototype.onProgress = function () {}, i.prototype.onSuccess = function () {}, i.prototype.onError = function () {}, i.prototype.onCancel = function () {}, i.prototype.onComplete = function () {}, i.prototype._onBeforeUpload = function () {
          this.isReady = true;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.onBeforeUpload();
        }, i.prototype._onProgress = function (n) {
          this.progress = n;
          this.onProgress(n);
        }, i.prototype._onSuccess = function (n, t, i) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = true;
          this.isCancel = false;
          this.isError = false;
          this.progress = 100;
          this.index = null;
          this.onSuccess(n, t, i);
        }, i.prototype._onError = function (n, t, i) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = true;
          this.progress = 0;
          this.index = null;
          this.onError(n, t, i);
        }, i.prototype._onCancel = function (n, t, i) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = true;
          this.isError = false;
          this.progress = 0;
          this.index = null;
          this.onCancel(n, t, i);
        }, i.prototype._onComplete = function (n, t, i) {
          this.onComplete(n, t, i);
          this.removeAfterUpload && this.remove();
        }, i.prototype._destroy = function () {
          this._input && this._input.remove();
          this._form && this._form.remove();
          delete this._form;
          delete this._input;
        }, i.prototype._prepareToUploading = function () {
          this.index = this.index || ++this.uploader._nextIndex;
          this.isReady = true;
        }, i.prototype._replaceNode = function (t) {
          var i = n(t.clone())(t.scope());
          i.prop("value", null);
          t.css("display", "none");
          t.after(i);
        }, i;
      }();
    }
    var u, o;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = e;
    u = i(1);
    o = s(u);
    var r = angular, f = r.copy, c = r.extend, l = r.element, a = r.isElement;
    e.$inject = ["$compile", "FileLikeObject"];
  }, function (n, t, i) {
    "use strict";
    function o(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function s(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function h() {
      var n = function () {
        function n(t) {
          s(this, n);
          f(this, t);
          this.uploader._directives[this.prop].push(this);
          this._saveLinks();
          this.bind();
        }
        return n.prototype.bind = function () {
          var n, t;
          for (n in this.events) t = this.events[n], this.element.bind(n, this[t]);
        }, n.prototype.unbind = function () {
          for (var n in this.events) this.element.unbind(n, this.events[n]);
        }, n.prototype.destroy = function () {
          var n = this.uploader._directives[this.prop].indexOf(this);
          this.uploader._directives[this.prop].splice(n, 1);
          this.unbind();
        }, n.prototype._saveLinks = function () {
          var t, n;
          for (t in this.events) n = this.events[t], this[n] = this[n].bind(this);
        }, n;
      }();
      return n.prototype.events = {}, n;
    }
    var r, e, u, f;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = h;
    r = i(1);
    e = o(r);
    u = angular;
    f = u.extend;
  }, function (n, t, i) {
    "use strict";
    function s(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function h(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(n, t) {
      if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t && (typeof t == "object" || typeof t == "function") ? t : n;
    }
    function l(n, t) {
      if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      n.prototype = Object.create(t && t.prototype, {constructor: {value: n, enumerable: false, writable: true, configurable: true}});
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t);
    }
    function e(n, t) {
      return function (t) {
        function i(n) {
          h(this, i);
          var u = f(n, {events: {$destroy: "destroy", change: "onChange"}, prop: "select"}), r = c(this, t.call(this, u));
          return r.uploader.isHTML5 || r.element.removeAttr("multiple"), r.element.prop("value", null), r;
        }
        return l(i, t), i.prototype.getOptions = function () {}, i.prototype.getFilters = function () {}, i.prototype.isEmptyAfterSelection = function () {
          return !!this.element.attr("multiple");
        }, i.prototype.onChange = function () {
          var t = this.uploader.isHTML5 ? this.element[0].files : this.element[0], i = this.getOptions(), r = this.getFilters();
          this.uploader.isHTML5 || this.destroy();
          this.uploader.addToQueue(t, i, r);
          this.isEmptyAfterSelection() && (this.element.prop("value", null), this.element.replaceWith(n(this.element.clone())(this.scope)));
        }, i;
      }(t);
    }
    var r, o, u, f;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = e;
    r = i(1);
    o = s(r);
    u = angular;
    f = u.extend;
    e.$inject = ["$compile", "FileDirective"];
  }, function (n, t) {
    "use strict";
    function i(n) {
      if (Array.isArray(n)) {
        for (var t = 0, i = Array(n.length); t < n.length; t++) i[t] = n[t];
        return i;
      }
      return Array.from(n);
    }
    function e(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function f(n) {
      return function () {
        function t() {
          var n = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
          e(this, t);
          this.pipes = n;
        }
        return t.prototype.next = function (t) {
          var r = this.pipes.shift(), f, s;
          if (o(r)) {
            this.onSuccessful.apply(this, i(t));
            return;
          }
          if (f = new Error("The filter has not passed"), f.pipe = r, f.args = t, r.isAsync) {
            var e = n.defer(), h = u(this, this.next, t), c = u(this, this.onThrown, f);
            e.promise.then(h, c);
            r.apply(undefined, i(t).concat([e]));
          } else if (s = Boolean(r.apply(undefined, i(t))), s) this.next(t); else this.onThrown(f);
        }, t.prototype.exec = function () {
          for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
          this.next(i);
        }, t.prototype.onThrown = function () {}, t.prototype.onSuccessful = function () {}, t;
      }();
    }
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = f;
    var r = angular, u = r.bind, o = r.isUndefined;
    f.$inject = ["$q"];
  }, function (n, t, i) {
    "use strict";
    function s(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function h(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(n, t) {
      if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t && (typeof t == "object" || typeof t == "function") ? t : n;
    }
    function l(n, t) {
      if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      n.prototype = Object.create(t && t.prototype, {constructor: {value: n, enumerable: false, writable: true, configurable: true}});
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t);
    }
    function e(n) {
      return function (n) {
        function t(i) {
          h(this, t);
          var r = a(i, {events: {$destroy: "destroy", drop: "onDrop", dragover: "onDragOver", dragleave: "onDragLeave"}, prop: "drop"});
          return c(this, n.call(this, r));
        }
        return l(t, n), t.prototype.getOptions = function () {}, t.prototype.getFilters = function () {}, t.prototype.onDrop = function (n) {
          var t = this._getTransfer(n), i, u;
          t && (i = this.getOptions(), u = this.getFilters(), this._preventAndStop(n), r(this.uploader._directives.over, this._removeOverClass, this), this.uploader.addToQueue(t.files, i, u));
        }, t.prototype.onDragOver = function (n) {
          var t = this._getTransfer(n);
          this._haveFiles(t.types) && (t.dropEffect = "copy", this._preventAndStop(n), r(this.uploader._directives.over, this._addOverClass, this));
        }, t.prototype.onDragLeave = function (n) {
          n.currentTarget !== this.element[0] && (this._preventAndStop(n), r(this.uploader._directives.over, this._removeOverClass, this));
        }, t.prototype._getTransfer = function (n) {
          return n.dataTransfer ? n.dataTransfer : n.originalEvent.dataTransfer;
        }, t.prototype._preventAndStop = function (n) {
          n.preventDefault();
          n.stopPropagation();
        }, t.prototype._haveFiles = function (n) {
          return n ? n.indexOf ? n.indexOf("Files") !== -1 : n.contains ? n.contains("Files") : false : false;
        }, t.prototype._addOverClass = function (n) {
          n.addOverClass();
        }, t.prototype._removeOverClass = function (n) {
          n.removeOverClass();
        }, t;
      }(n);
    }
    var u, o;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = e;
    u = i(1);
    o = s(u);
    var f = angular, a = f.extend, r = f.forEach;
    e.$inject = ["FileDirective"];
  }, function (n, t, i) {
    "use strict";
    function s(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function h(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(n, t) {
      if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t && (typeof t == "object" || typeof t == "function") ? t : n;
    }
    function l(n, t) {
      if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      n.prototype = Object.create(t && t.prototype, {constructor: {value: n, enumerable: false, writable: true, configurable: true}});
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t);
    }
    function e(n) {
      return function (n) {
        function t(i) {
          h(this, t);
          var r = f(i, {events: {$destroy: "destroy"}, prop: "over", overClass: "nv-file-over"});
          return c(this, n.call(this, r));
        }
        return l(t, n), t.prototype.addOverClass = function () {
          this.element.addClass(this.getOverClass());
        }, t.prototype.removeOverClass = function () {
          this.element.removeClass(this.getOverClass());
        }, t.prototype.getOverClass = function () {
          return this.overClass;
        }, t;
      }(n);
    }
    var r, o, u, f;
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = e;
    r = i(1);
    o = s(r);
    u = angular;
    f = u.extend;
    e.$inject = ["FileDirective"];
  }, function (n, t, i) {
    "use strict";
    function f(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function r(n, t, i) {
      return {link: function (r, u, f) {
        var o = r.$eval(f.uploader), e;
        if (!(o instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
        e = new i({uploader: o, element: u, scope: r});
        e.getOptions = n(f.options).bind(e, r);
        e.getFilters = function () {
          return f.filters;
        };
      }};
    }
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = r;
    var u = i(1), e = f(u);
    r.$inject = ["$parse", "FileUploader", "FileSelect"];
  }, function (n, t, i) {
    "use strict";
    function f(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function r(n, t, i) {
      return {link: function (r, u, f) {
        var o = r.$eval(f.uploader), e;
        if (!(o instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
        o.isHTML5 && (e = new i({uploader: o, element: u}), e.getOptions = n(f.options).bind(e, r), e.getFilters = function () {
          return f.filters;
        });
      }};
    }
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = r;
    var u = i(1), e = f(u);
    r.$inject = ["$parse", "FileUploader", "FileDrop"];
  }, function (n, t, i) {
    "use strict";
    function f(n) {
      return n && n.__esModule ? n : {default: n};
    }
    function r(n, t) {
      return {link: function (i, r, u) {
        var e = i.$eval(u.uploader), f;
        if (!(e instanceof n)) throw new TypeError('"Uploader" must be an instance of FileUploader');
        f = new t({uploader: e, element: r});
        f.getOverClass = function () {
          return u.overClass || f.overClass;
        };
      }};
    }
    Object.defineProperty(t, "__esModule", {value: true});
    t.default = r;
    var u = i(1), e = f(u);
    r.$inject = ["FileUploader", "FileOver"];
  }]);
}));
(function (n, t) {
  "use strict";
  typeof module != "undefined" && module.exports ? (typeof angular == "undefined" ? t(require("angular")) : t(angular), module.exports = "angular-google-analytics") : typeof define == "function" && define.amd ? define(["angular"], t) : t(n.angular);
}(this, function (n, t) {
  "use strict";
  return n.module("angular-google-analytics", []).provider("Analytics", function () {
    var i, u = true, f = "auto", st = false, g = false, nt, tt = "USD", it = false, rt = false, a = false, ut = false, v, e = false, o = false, y = false, p, w = false, b = false, k = false, r = false, ft = "$routeChangeSuccess", s = false, h, d = false, et = false, c = "", l = true, ot = false;
    this.log = [];
    this.offlineQueue = [];
    this.setAccount = function (r) {
      return i = n.isUndefined(r) || r === false ? t : n.isArray(r) ? r : n.isObject(r) ? [r] : [{tracker: r, trackEvent: true}], this;
    };
    this.trackPages = function (n) {
      return l = !!n, this;
    };
    this.trackPrefix = function (n) {
      return c = n, this;
    };
    this.setDomainName = function (n) {
      return v = n, this;
    };
    this.useDisplayFeatures = function (n) {
      return a = !!n, this;
    };
    this.useAnalytics = function (n) {
      return u = !!n, this;
    };
    this.useEnhancedLinkAttribution = function (n) {
      return y = !!n, this;
    };
    this.useCrossDomainLinker = function (n) {
      return g = !!n, this;
    };
    this.setCrossLinkDomains = function (n) {
      return nt = n, this;
    };
    this.setPageEvent = function (n) {
      return ft = n, this;
    };
    this.setCookieConfig = function (n) {
      return f = n, this;
    };
    this.useECommerce = function (n, t) {
      return e = !!n, o = !!t, this;
    };
    this.setCurrency = function (n) {
      return tt = n, this;
    };
    this.setRemoveRegExp = function (n) {
      return n instanceof RegExp && (h = n), this;
    };
    this.setExperimentId = function (n) {
      return p = n, this;
    };
    this.ignoreFirstPageLoad = function (n) {
      return w = !!n, this;
    };
    this.trackUrlParams = function (n) {
      return ot = !!n, this;
    };
    this.disableAnalytics = function (n) {
      return ut = !!n, this;
    };
    this.setHybridMobileSupport = function (n) {
      return k = !!n, this;
    };
    this.startOffline = function (n) {
      return r = !!n, r === true && this.delayScriptTag(true), this;
    };
    this.delayScriptTag = function (n) {
      return rt = !!n, this;
    };
    this.logAllCalls = function (n) {
      return b = !!n, this;
    };
    this.enterTestMode = function () {
      return d = true, this;
    };
    this.enterDebugMode = function (n) {
      return it = true, et = !!n, this;
    };
    this.readFromRoute = function (n) {
      return s = !!n, this;
    };
    this.$get = ["$document", "$location", "$log", "$rootScope", "$window", "$injector", function (ht, ct, lt, at, vt, yt) {
      var pt = this, gt = function (t, i) {
        return n.isString(i) ? i + "." + t : n.isObject(i) && n.isDefined(i.name) ? i.name + "." + t : t;
      }, ri = {};
      s && (yt.has("$route") ? ri = yt.get("$route") : lt.warn("$route service is not available. Make sure you have included ng-route in your application dependencies."));
      var ui = function () {
        if (s && ri.current && "pageTrack" in ri.current) return ri.current.pageTrack;
        var n = ot ? ct.url() : ct.path();
        return h ? n.replace(h, "") : n;
      }, oi = function () {
        var i = {utm_source: "campaignSource", utm_medium: "campaignMedium", utm_term: "campaignTerm", utm_content: "campaignContent", utm_campaign: "campaignName"}, t = {};
        return n.forEach(ct.search(), function (r, u) {
          var f = i[u];
          n.isDefined(f) && (t[f] = r);
        }), t;
      }, fi = function (n, t, i, r, u, f, e, o, s) {
        var h = {};
        return n && (h.id = n), t && (h.affiliation = t), i && (h.revenue = i), r && (h.tax = r), u && (h.shipping = u), f && (h.coupon = f), e && (h.list = e), o && (h.step = o), s && (h.option = s), h;
      }, ei = function (t, i) {
        var r = "", f = document.location.protocol === "https:", e = document.location.protocol === "chrome-extension:", o = u === true && k === true;
        return t = n.isString(t) ? t : "", i = n.isString(i) ? i : "", t !== "" && (r = "http:" + t), (e || o || f && i !== "") && (r = "https:" + i), r;
      }, ii = function (n) {
        !u && vt._gaq && typeof n == "function" && n();
      }, bt = function () {
        var n = Array.prototype.slice.call(arguments);
        if (r === true) {
          pt.offlineQueue.push([bt, n]);
          return;
        }
        vt._gaq || (vt._gaq = []);
        b === true && pt._log.apply(pt, n);
        vt._gaq.push(n);
      }, kt = function (n) {
        u && vt.ga && typeof n == "function" && n();
      }, wt = function () {
        var n = Array.prototype.slice.call(arguments);
        if (r === true) {
          pt.offlineQueue.push([wt, n]);
          return;
        }
        if (typeof vt.ga != "function") {
          pt._log("warn", "ga function not set on window");
          return;
        }
        b === true && pt._log.apply(pt, n);
        vt.ga.apply(null, n);
      }, ni = function (n) {
        var t = Array.prototype.slice.call(arguments, 1), u = t[0], r = [];
        if (typeof n == "function" ? i.forEach(function (t) {
          n(t) && r.push(t);
        }) : r = i, r.length === 0) {
          wt.apply(pt, t);
          return;
        }
        r.forEach(function (n) {
          (!(n.isObject(n) && n.isDefined(n.select)) || typeof n.select != "function" || n.select(t)) && (t[0] = gt(u, n), wt.apply(pt, t));
        });
      };
      return this._log = function () {
        var n = Array.prototype.slice.call(arguments);
        if (n.length > 0) {
          if (n.length > 1) switch (n[0]) {
            case "debug":
            case "error":
            case "info":
            case "log":
            case "warn":
              lt[n[0]](n.slice(1));
          }
          pt.log.push(n);
        }
      }, this._createScriptTag = function () {
        pt._registerScriptTags();
        pt._registerTrackers();
      }, this._createAnalyticsScriptTag = function () {
        pt._registerScriptTags();
        pt._registerTrackers();
      }, this._registerScriptTags = function () {
        var t = ht[0], r = ei(), n, f, e;
        if (st === true) {
          pt._log("warn", "Script tags already created");
          return;
        }
        return ut === true && i.forEach(function (n) {
          pt._log("info", "Analytics disabled: " + n.tracker);
          vt["ga-disable-" + n.tracker] = true;
        }), u === true ? (n = r + "//www.google-analytics.com/" + (it ? "analytics_debug.js" : "analytics.js"), d !== true ? function (n, t, i, r, u, f, e) {
          n.GoogleAnalyticsObject = u;
          n[u] = n[u] || function () {
            (n[u].q = n[u].q || []).push(arguments);
          };
          n[u].l = 1 * new Date;
          f = t.createElement(i);
          e = t.getElementsByTagName(i)[0];
          f.async = 1;
          f.src = r;
          e.parentNode.insertBefore(f, e);
        }(window, t, "script", n, "ga") : (typeof vt.ga != "function" && (vt.ga = function () {}), pt._log("inject", n)), et && (vt.ga_debug = {trace: true}), p && (f = t.createElement("script"), e = t.getElementsByTagName("script")[0], f.src = r + "//www.google-analytics.com/cx/api.js?experiment=" + p, e.parentNode.insertBefore(f, e))) : (n = ei("//www", "//ssl") + ".google-analytics.com/ga.js", a === true && (n = r + "//stats.g.doubleclick.net/dc.js"), d !== true ? function () {
          var i = t.createElement("script"), r;
          i.type = "text/javascript";
          i.async = true;
          i.src = n;
          r = t.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(i, r);
        }() : pt._log("inject", n)), st = true, true;
      }, this._registerTrackers = function () {
        if (!i || i.length < 1) {
          pt._log("warn", "No accounts to register");
          return;
        }
        return u === true ? i.forEach(function (t) {
          var i, r;
          t.crossDomainLinker = n.isObject(t) && n.isDefined(t.crossDomainLinker) ? t.crossDomainLinker : g;
          t.crossLinkDomains = n.isObject(t) && n.isDefined(t.crossLinkDomains) ? t.crossLinkDomains : nt;
          t.displayFeatures = n.isObject(t) && n.isDefined(t.displayFeatures) ? t.displayFeatures : a;
          t.enhancedLinkAttribution = n.isObject(t) && n.isDefined(t.enhancedLinkAttribution) ? t.enhancedLinkAttribution : y;
          t.set = n.isObject(t) && n.isDefined(t.set) ? t.set : {};
          t.trackEcommerce = n.isObject(t) && n.isDefined(t.trackEcommerce) ? t.trackEcommerce : e;
          t.trackEvent = n.isObject(t) && n.isDefined(t.trackEvent) ? t.trackEvent : false;
          i = {};
          n.isObject(t) && n.isDefined(t.fields) ? i = t.fields : n.isObject(t) && n.isDefined(t.cookieConfig) ? n.isString(t.cookieConfig) ? i.cookieDomain = t.cookieConfig : i = t.cookieConfig : n.isString(f) ? i.cookieDomain = f : f && (i = f);
          t.crossDomainLinker === true && (i.allowLinker = true);
          n.isObject(t) && n.isDefined(t.name) && (i.name = t.name);
          t.fields = i;
          wt("create", t.tracker, t.fields);
          k === true && wt(gt("set", t), "checkProtocolTask", null);
          for (r in t.set) t.set.hasOwnProperty(r) && wt(gt("set", t), r, t.set[r]);
          t.crossDomainLinker === true && (wt(gt("require", t), "linker"), n.isDefined(t.crossLinkDomains) && wt(gt("linker:autoLink", t), t.crossLinkDomains));
          t.displayFeatures && wt(gt("require", t), "displayfeatures");
          t.trackEcommerce && (o ? (wt(gt("require", t), "ec"), wt(gt("set", t), "&cu", tt)) : wt(gt("require", t), "ecommerce"));
          t.enhancedLinkAttribution && wt(gt("require", t), "linkid");
          l && !w && wt(gt("send", t), "pageview", c + ui());
        }) : (i.length > 1 && (pt._log("warn", "Multiple trackers are not supported with ga.js. Using first tracker only"), i = i.slice(0, 1)), bt("_setAccount", i[0].tracker), v && bt("_setDomainName", v), y && bt("_require", "inpage_linkid", "//www.google-analytics.com/plugins/ga/inpage_linkid.js"), l && !w && (h ? bt("_trackPageview", ui()) : bt("_trackPageview"))), true;
      }, this._ecommerceEnabled = function (n, t) {
        var i = e && !o;
        return n === true && i === false && (e && o ? pt._log("warn", t + " is not available when Enhanced Ecommerce is enabled with analytics.js") : pt._log("warn", "Ecommerce must be enabled to use " + t + " with analytics.js")), i;
      }, this._enhancedEcommerceEnabled = function (n, t) {
        var i = e && o;
        return n === true && i === false && pt._log("warn", "Enhanced Ecommerce must be enabled to use " + t + " with analytics.js"), i;
      }, this._trackPage = function (i, r, u) {
        i = i ? i : ui();
        r = r ? r : ht[0].title;
        ii(function () {
          bt("_set", "title", r);
          bt("_trackPageview", c + i);
        });
        kt(function () {
          var f = {page: c + i, title: r};
          n.extend(f, oi());
          n.isObject(u) && n.extend(f, u);
          ni(t, "send", "pageview", f);
        });
      }, this._trackEvent = function (t, i, r, u, f, e) {
        ii(function () {
          bt("_trackEvent", t, i, r, u, !!f);
        });
        kt(function () {
          var o = {};
          n.isDefined(f) && (o.nonInteraction = !!f);
          n.isObject(e) && n.extend(o, e);
          n.isDefined(o.page) || (o.page = ui());
          ni(s, "send", "event", t, i, r, u, o);
        });
      }, this._addTrans = function (n, t, i, r, u, f, e, o, s) {
        ii(function () {
          bt("_addTrans", n, t, i, r, u, f, e, o);
        });
        kt(function () {
          if (pt._ecommerceEnabled(true, "addTrans")) {
            ni(f, "ecommerce:addTransaction", {id: n, affiliation: t, revenue: i, tax: r, shipping: u, currency: s || "USD"});
          }
        });
      }, this._addItem = function (n, t, i, r, u, f) {
        ii(function () {
          bt("_addItem", n, t, i, r, u, f);
        });
        kt(function () {
          if (pt._ecommerceEnabled(true, "addItem")) {
            ni(e, "ecommerce:addItem", {id: n, name: i, sku: t, category: r, price: u, quantity: f});
          }
        });
      }, this._trackTrans = function () {
        ii(function () {
          bt("_trackTrans");
        });
        kt(function () {
          if (pt._ecommerceEnabled(true, "trackTrans")) {
            ni(n, "ecommerce:send");
          }
        });
      }, this._clearTrans = function () {
        kt(function () {
          if (pt._ecommerceEnabled(true, "clearTrans")) {
            ni(n, "ecommerce:clear");
          }
        });
      }, this._addProduct = function (t, i, r, u, f, e, o, s, h, c) {
        ii(function () {
          bt("_addProduct", t, i, r, u, f, e, o, s, h);
        });
        kt(function () {
          if (pt._enhancedEcommerceEnabled(true, "addProduct")) {
            var l = {id: t, name: i, category: r, brand: u, variant: f, price: e, quantity: o, coupon: s, position: h};
            n.isObject(c) && n.extend(l, c);
            ni(a, "ec:addProduct", l);
          }
        });
      }, this._addImpression = function (n, t, i, r, u, f, e, o) {
        ii(function () {
          bt("_addImpression", n, t, i, r, u, f, e, o);
        });
        kt(function () {
          if (pt._enhancedEcommerceEnabled(true, "addImpression")) {
            ni(s, "ec:addImpression", {id: n, name: t, category: u, brand: r, variant: f, list: i, position: e, price: o});
          }
        });
      }, this._addPromo = function (n, t, i, r) {
        ii(function () {
          bt("_addPromo", n, t, i, r);
        });
        kt(function () {
          if (pt._enhancedEcommerceEnabled(true, "addPromo")) {
            ni(u, "ec:addPromo", {id: n, name: t, creative: i, position: r});
          }
        });
      }, this._setAction = function (n, t) {
        ii(function () {
          bt("_setAction", n, t);
        });
        kt(function () {
          if (pt._enhancedEcommerceEnabled(true, "setAction")) {
            ni(i, "ec:setAction", n, t);
          }
        });
      }, this._trackTransaction = function (n, t, i, r, u, f, e, o, s) {
        this._setAction("purchase", fi(n, t, i, r, u, f, e, o, s));
      }, this._trackRefund = function (n) {
        this._setAction("refund", fi(n));
      }, this._trackCheckOut = function (n, t) {
        this._setAction("checkout", fi(null, null, null, null, null, null, null, n, t));
      }, this._trackDetail = function () {
        this._setAction("detail");
        this._pageView();
      }, this._trackCart = function (n, t) {
        ["add", "remove"].indexOf(n) !== -1 && (this._setAction(n, {list: t}), this._trackEvent("UX", "click", n + (n === "add" ? " to cart" : " from cart")));
      }, this._promoClick = function (n) {
        this._setAction("promo_click");
        this._trackEvent("Internal Promotions", "click", n);
      }, this._productClick = function (n) {
        this._setAction("click", fi(null, null, null, null, null, null, n, null, null));
        this._trackEvent("UX", "click", n);
      }, this._pageView = function (n) {
        kt(function () {
          wt(gt("send", n), "pageview");
        });
      }, this._send = function () {
        var n = Array.prototype.slice.call(arguments);
        n.unshift("send");
        kt(function () {
          wt.apply(pt, n);
        });
      }, this._set = function (n, t, i) {
        kt(function () {
          wt(gt("set", i), n, t);
        });
      }, this._trackTimings = function (n, i, r, u) {
        kt(function () {
          ni(t, "send", "timing", n, i, r, u);
        });
      }, this._trackException = function (n, i) {
        kt(function () {
          ni(t, "send", "exception", {exDescription: n, exFatal: !!i});
        });
      }, rt || (this._registerScriptTags(), this._registerTrackers()), l && at.$on(ft, function () {
        (!s || ri.current && ri.current.templateUrl && !ri.current.doNotTrack) && pt._trackPage();
      }), {log: pt.log, offlineQueue: pt.offlineQueue, configuration: {accounts: i, universalAnalytics: u, crossDomainLinker: g, crossLinkDomains: nt, currency: tt, debugMode: it, delayScriptTag: rt, disableAnalytics: ut, displayFeatures: a, domainName: v, ecommerce: pt._ecommerceEnabled(), enhancedEcommerce: pt._enhancedEcommerceEnabled(), enhancedLinkAttribution: y, experimentId: p, hybridMobileSupport: k, ignoreFirstPageLoad: w, logAllCalls: b, pageEvent: ft, readFromRoute: s, removeRegExp: h, testMode: d, traceDebuggingMode: et, trackPrefix: c, trackRoutes: l, trackUrlParams: ot}, getUrl: ui, setCookieConfig: function () {
        return pt._log("warn", "DEPRECATION WARNING: setCookieConfig method is deprecated. Please use tracker fields instead."), pt._setCookieConfig.apply(pt, arguments);
      }, getCookieConfig: function () {
        return pt._log("warn", "DEPRECATION WARNING: getCookieConfig method is deprecated. Please use tracker fields instead."), f;
      }, createAnalyticsScriptTag: function (n) {
        return pt._log("warn", "DEPRECATION WARNING: createAnalyticsScriptTag method is deprecated. Please use registerScriptTags and registerTrackers methods instead."), n && (f = n), pt._createAnalyticsScriptTag();
      }, createScriptTag: function () {
        return pt._log("warn", "DEPRECATION WARNING: createScriptTag method is deprecated. Please use registerScriptTags and registerTrackers methods instead."), pt._createScriptTag();
      }, registerScriptTags: function () {
        return pt._registerScriptTags();
      }, registerTrackers: function () {
        return pt._registerTrackers();
      }, offline: function (n) {
        if (n === true && r === false && (r = true), n === false && r === true) for (r = false; pt.offlineQueue.length > 0;) {
          var t = pt.offlineQueue.shift();
          t[0].apply(pt, t[1]);
        }
        return r;
      }, trackPage: function () {
        pt._trackPage.apply(pt, arguments);
      }, trackEvent: function () {
        pt._trackEvent.apply(pt, arguments);
      }, addTrans: function () {
        pt._addTrans.apply(pt, arguments);
      }, addItem: function () {
        pt._addItem.apply(pt, arguments);
      }, trackTrans: function () {
        pt._trackTrans.apply(pt, arguments);
      }, clearTrans: function () {
        pt._clearTrans.apply(pt, arguments);
      }, addProduct: function () {
        pt._addProduct.apply(pt, arguments);
      }, addPromo: function () {
        pt._addPromo.apply(pt, arguments);
      }, addImpression: function () {
        pt._addImpression.apply(pt, arguments);
      }, productClick: function () {
        pt._productClick.apply(pt, arguments);
      }, promoClick: function () {
        pt._promoClick.apply(pt, arguments);
      }, trackDetail: function () {
        pt._trackDetail.apply(pt, arguments);
      }, trackCart: function () {
        pt._trackCart.apply(pt, arguments);
      }, trackCheckout: function () {
        pt._trackCheckOut.apply(pt, arguments);
      }, trackTimings: function () {
        pt._trackTimings.apply(pt, arguments);
      }, trackTransaction: function () {
        pt._trackTransaction.apply(pt, arguments);
      }, trackException: function () {
        pt._trackException.apply(pt, arguments);
      }, setAction: function () {
        pt._setAction.apply(pt, arguments);
      }, pageView: function () {
        pt._pageView.apply(pt, arguments);
      }, send: function () {
        pt._send.apply(pt, arguments);
      }, set: function () {
        pt._set.apply(pt, arguments);
      }};
    }];
  }).directive("gaTrackEvent", ["Analytics", "$parse", function (n, t) {
    return {restrict: "A", link: function (i, r, u) {
      var f = t(u.gaTrackEvent);
      r.bind("click", function () {
        (!u.gaTrackEventIf || i.$eval(u.gaTrackEventIf)) && f.length > 1 && n.trackEvent.apply(n, f(i));
      });
    }};
  }]), n.module("angular-google-analytics");
}));
(function (a, b) {
  if ("function" == typeof define && define.amd) define([], b); else if ("undefined" != typeof exports) b(); else {
    b(), a.FileSaver = {exports: {}}.exports;
  }
}(this, function () {
  "use strict";
  function c(a, b, c) {
    var d = new XMLHttpRequest;
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest;
    b.open("HEAD", a, false);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL, j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4e4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(("undefined" == typeof h ? h = {autoBom: false} : "object" != typeof h && (console.warn("Deprecated: Expected third argument to be a object"), h = {autoBom: !h}), h.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["﻿", f], {type: f.type}) : f), g); else if (d(f)) c(f, g, h); else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader;
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4e4);
    }
  });
  f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
}));
!function (e) {
  e(["jquery"], function (e) {
    return function () {
      function s(e) {
        C = e;
      }
      function r(e, t) {
        var o = e.extend({}, p(), b.options);
        v || (o || (o = e.extend({}, p(), b.options)), v = e("#" + o.containerId), v.length ? v : (n && (v = (v = e("<div/>").attr("id", o.containerId).addClass(o.positionClass), v.appendTo(e(o.target)), v)), v)), u(e, o, t) || l(o);
      }
      function c(t) {
        var o = e.extend({}, p(), b.options);
        return v || (o || (o = e.extend({}, p(), b.options)), v = e("#" + o.containerId), v.length ? v : (n && (v = (v = e("<div/>").attr("id", o.containerId).addClass(o.positionClass), v.appendTo(e(o.target)), v)), v)), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t);
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({duration: n.hideDuration, easing: n.hideEasing, complete: function () {
          h(t);
        }}), true);
      }
      function p() {
        return {tapToDismiss: true, toastClass: "toast", containerId: "toast-container", debug: false, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: false, closeDuration: false, closeEasing: false, closeOnHover: true, extendedTimeOut: 1e3, iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"}, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: false, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: true, preventDuplicates: false, progressBar: false, progressClass: "toast-progress", rtl: false};
      }
      function f(e) {
        C && C(e);
      }
      function g(t) {
        function s() {
          c(), u(), (v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v), p(), g(), C(), l(), g({type: O.success, iconClass: e.extend({}, p(), b.options).iconClasses.success, message: e, optionsOverride: n, title: t});
        }
        function i() {
          var e = "";
          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;
            default:
              e = "assertive";
          }
          I.attr("aria-live", e);
        }
        function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== true && (e.cancelBubble = true), E.onCloseClick && E.onCloseClick(e), b(true);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }
        function r() {
          I.hide(), I[E.showMethod]({duration: E.showDuration, easing: E.showEasing, complete: E.onShown}), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }
        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }
        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = (null == t.title && (t.title = ""), t.title.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = (null == t.message && (t.message = ""), t.message.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }
        function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }
        function C() {
          E.rtl && I.addClass("rtl");
        }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return true;
            w = t.message;
          }
          return false;
        }
        function b(t) {
          var n = t && E.closeMethod !== false ? E.closeMethod : E.hideMethod, o = t && E.closeDuration !== false ? E.closeDuration : E.hideDuration, s = t && E.closeEasing !== false ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({duration: o, easing: s, complete: function () {
            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P);
          }});
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime);
        }
        function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(true, true)[E.showMethod]({duration: E.showDuration, easing: E.showEasing});
        }
        function x() {
          var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
          q.width(e + "%");
        }
        var E = e.extend({}, p(), b.options), y = t.iconClass || E.iconClass;
        if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = (E || (E = e.extend({}, p(), b.options)), v = e("#" + E.containerId), v.length ? v : (true && (v = (v = e("<div/>").attr("id", E.containerId).addClass(E.positionClass), v.appendTo(e(E.target)), v)), v));
          var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"), q = e("<div/>"), j = e(E.closeHtml), F = {intervalId: null, hideEta: null, maxHideTime: null}, P = {toastId: T, state: "visible", startTime: new Date, options: E, map: t};
          return s(), r(), g({type: O.warning, iconClass: e.extend({}, p(), b.options).iconClasses.warning, message: e, optionsOverride: n, title: t}), f(P), E.debug && console && console.log(P), I;
        }
      }
      function h(e) {
        v || (v = (t || (t = e.extend({}, p(), b.options)), v = e("#" + t.containerId), v.length ? v : (n && (v = (v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v)), v))), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }
      var v, C, w, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"}, b = {clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.4", warning: a};
      return b;
    }();
  });
}("function" == typeof define && define.amd ? define : function (e, t) {
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
});
"use strict";
angular.module("app.AuthService", []).constant("USER_ROLES", {all: "*", user: "user"}).constant("AUTH_EVENTS", {loginRequired: "auth-login-required", loginAuthenticated: "auth-login-authenticated", loginSuccess: "auth-login-success", loginFailed: "auth-login-failed", loginCanceled: "auth-login-canceled", logoutSuccess: "auth-logout-success", tempLoginSuccess: "auth-temp-login", sessionTimeout: "auth-session-timeout", needUserAction: "auth-session-need-user-action", notAuthenticated: "auth-not-authenticated", notAuthorized: "auth-not-authorized", validationError: "validation-error", validationErrorSummary: "validation-error-summary", serverError: "server-error", specificServerError: "specific-server-error", serverSuccess: "server-success", gotResponseFromServerThroughModalHalaa: "got-response-from-server-through-modal-halaa", gotResponseFromServerThroughModalDrisha: "got-response-from-server-through-modal-drisha", gotResponseFromServerThroughModalCreateTviaAvt: "got-response-from-server-through-modal-create-tvia-avt", modalBitulTviaAvtReq: "modal-bitul-tvia-avt-req", gotResponseFromModalRemoveEmployer: "got-response-from-modal-remove-employer", gotResponseFromServerThroughModalDeleteTviaAvt: "got-response-from-server-through-modal-delete-tvia-avt", gotResponseFromServerThroughModalRemoveTkufatMiluim: "got-response-from-server-through-modal-remove-tkufat-miluim"}).constant("DATE_CONSTANTS", {minValue: "0001-01-01"}).provider("UserAuthenticationStatus", function () {
  this.IsAuthenticated = false;
  this.$get = function () {
    return this;
  };
}).service("AuthSession", ["$window", "AUTH_EVENTS", "UserAuthenticationStatus", "$rootScope", function (n, t, i, r) {
  return this._lastAction = new Date, this._pendingRequests = {}, this.refresh = function (t, i) {
    n.sessionStorage.token = t;
    n.sessionStorage.tokenExpiration = i;
    r.$broadcast("refresh-done");
  }, this.create = function (t, r, u, f, e, o, s) {
    if (this.destroy(), this.refresh(t, r), n.sessionStorage.user = JSON.stringify(u), n.sessionStorage.userRole = f, e && (n.sessionStorage.vitur = e), o && (n.sessionStorage.msg = o), s && (n.sessionStorage.AccessibilityOn = s), u.sideNav) {
      var h = _.find(u.sideNav, function (n) {
        return n.name === "Personal";
      });
      h ? n.sessionStorage.hasPersonal = true : n.sessionStorage.hasPersonal && n.sessionStorage.removeItem("hasPersonal");
    }
    this.setIsActive();
    i.IsAuthenticated = true;
  }, this.destroy = function () {
    var u = n.sessionStorage.hasPersonal, f = n.sessionStorage.cardLogin, t = n.sessionStorage.exitUrl, r = n.sessionStorage.OrgUrl;
    n.sessionStorage.clear();
    u != null && (n.sessionStorage.hasPersonal = true);
    f != null && (n.sessionStorage.cardLogin = true);
    t != null && (n.sessionStorage.exitUrl = t);
    r != null && (n.sessionStorage.OrgUrl = r);
    i.IsAuthenticated = false;
  }, this.setIsActive = function () {
    this._lastAction = new Date;
  }, this.getLastActive = function () {
    return this._lastAction;
  }, this.getTokenExpiration = function () {
    return new Date(n.sessionStorage.tokenExpiration);
  }, this.getToken = function () {
    var t = this.getTokenExpiration();
    return t < new Date ? null : n.sessionStorage.token;
  }, this.getUser = function () {
    return n.sessionStorage.user ? JSON.parse(n.sessionStorage.user) : null;
  }, this.saveUser = function (t) {
    t && (n.sessionStorage.user = JSON.stringify(t));
  }, this.getUserRole = function () {
    return n.sessionStorage.userRole;
  }, this.getNatzig = function () {
    return n.sessionStorage.natzig;
  }, this.startPendingRequest = function (n) {
    return this._pendingRequests[n] ? false : (this._pendingRequests[n] = true, true);
  }, this.clearPendingRequest = function (n) {
    this._pendingRequests[n] = null;
  }, this;
}]).factory("AuthService", ["$q", "$http", "$rootScope", "AuthSession", "USER_ROLES", "AUTH_EVENTS", "timer", "$window", function (n, t, i, r, u, f, e, o) {
  function h() {
    c && (c.teardown(), c = null);
  }
  var s = {}, c = null, l = 3e4, a = 85e4 - l, v;
  return console.debug("_inactiveDuration: " + a), v = function () {
    console.debug("_refreshTokenCallback: " + (new Date - r.getLastActive()));
    console.debug("_refreshTokenCallback getLastActive: " + r.getLastActive());
    console.debug("_refreshTokenCallback _inactiveDuration: " + a);
    new Date - r.getLastActive() <= a ? (console.debug("refreshToken: " + new Date), s.refreshToken()) : (h(), r.getToken() ? (console.debug("needUserAction: " + new Date), i.$broadcast(f.needUserAction, l)) : (console.debug("loginRequired: " + new Date), i.$broadcast(f.loginRequired)));
  }, s.refreshToken = function () {
    t.post("api/loginApi/refreshToken").success(function (n) {
      if (h(), n && n.Token) {
        console.debug("After refreshToken, token exist: " + new Date);
        var t = new Date;
        t.setSeconds(t.getSeconds() + n.SessionDuration);
        n.TokenExpiration = t;
        s.startTimer(n.TokenExpiration);
        r.refresh(n.Token, n.TokenExpiration);
      } else console.debug("After refreshToken, loginRequired: " + new Date), i.$broadcast(f.loginRequired);
    });
  }, s.startTimer = function (n) {
    n || (console.debug("startTimer no tokenExpiration retrieve from authSession.getTokenExpiration: " + new Date), n = r.getTokenExpiration());
    var t = Number(new Date(n) - new Date) - l - 4e4;
    console.debug("startTimer _sessionWarning: " + l);
    console.debug("startTimer tokenExpiration: " + n);
    console.debug("pulse: " + t);
    c = e(v, t);
    c.start();
  }, s.login = function (u) {
    return (h(), !r.startPendingRequest("login")) ? (i.laddaLoading = false, n.defer().promise) : t.post("api/loginApi/authenticate", u).success(function (n) {
      if (i.laddaLoading = false, r.clearPendingRequest("login"), n.Token) {
        var t = new Date;
        t.setSeconds(t.getSeconds() + n.SessionDuration);
        n.TokenExpiration = t;
        s.startTimer(n.TokenExpiration);
        r.create(n.Token, n.TokenExpiration, n, "user", null, null, o.sessionStorage.AccessibilityOn);
        n.Status == "Approved" ? s.loginConfirmed(n) : s.loginAuthenticated(n);
        r.clearPendingRequest("login");
      } else r.clearPendingRequest("login"), i.$root.$broadcast("form-validation-failed");
    }).error(function () {
      i.laddaLoading = false;
      r.clearPendingRequest("login");
      i.$root.$broadcast("form-validation-failed");
    });
  }, s.loginProxy = function (n, t, i) {
    h();
    n.Token && (s.startTimer(n.TokenExpiration), r.create(n.Token, n.TokenExpiration, n, "user", null, null, o.sessionStorage.AccessibilityOn), window.sessionStorage.smartLogin = t, window.sessionStorage.cardLogin = t);
    window.location = i;
  }, s.applyProfile = function (n, t) {
    h();
    n.Token && (s.startTimer(n.TokenExpiration), t ? r.create(n.Token, n.TokenExpiration, n, "user", null, t, o.sessionStorage.AccessibilityOn) : r.create(n.Token, n.TokenExpiration, n, "user", null, null, o.sessionStorage.AccessibilityOn), i.$broadcast(f.loginSuccess, n));
  }, s.tempLogin = function (n, t) {
    h();
    n.Token && (s.startTimer(n.TokenExpiration), t ? r.create(n.Token, n.TokenExpiration, n, "user", null, t, o.sessionStorage.AccessibilityOn) : r.create(n.Token, n.TokenExpiration, n, "user", null, null, o.sessionStorage.AccessibilityOn), i.$broadcast(f.tempLoginSuccess, n));
  }, s.logout = function () {
    return t.post("api/loginApi/logout");
  }, s.loginAuthenticated = function (n) {
    i.$broadcast(f.loginAuthenticated, n);
  }, s.loginConfirmed = function (n) {
    i.$broadcast(f.loginSuccess, n);
  }, s.loginCancelled = function (n) {
    i.$broadcast(f.loginCanceled, n);
  }, s.isAuthenticated = function (n) {
    var i = !!r.getToken(), t;
    return i ? n ? (t = r.getUser(), t.Status == "Approved") : true : false;
  }, s.isAuthorized = function (n) {
    return n ? angular.isArray(n) || (n = [n]) : n = [u.user], n.indexOf(u.all) !== -1 || s.isAuthenticated() && n.indexOf(r.getUserRole()) !== -1;
  }, s;
}]).factory("tokenInterceptor", ["$rootScope", "$q", "$window", "AuthSession", "AUTH_EVENTS", "validator", function (n, t, i, r, u, f) {
  return {request: function (n) {
    n.url !== "api/loginApi/refreshToken" && r.setIsActive();
    n.headers = n.headers || {};
    var t = r.getToken();
    return t && (n.headers.Authorization = "Bearer " + t), n;
  }, requestError: function (i) {
    if (i.status !== 401 || i.config.ignoreAuthModule) i.status == 500 && n.$broadcast(u.serverError); else {
      var f = t.defer();
      return r.getToken() ? n.$broadcast(u.notAuthorized) : n.$broadcast(u.loginRequired, i), f.promise;
    }
    return t.reject(i);
  }, responseError: function (i) {
    if (n.showPending && (n.showPending = false, n.$broadcast(u.serverError)), i.status == 307) window.location.reload(); else if (i.status !== 401 || i.config.ignoreAuthModule) i.status == 400 ? i.data && i.data.Errors && i.data.Errors.length > 0 && (angular.forEach(i.data.Errors, function (t) {
      var i = angular.element("#" + t.ElementId);
      i.length ? t.ElementId[0] == "_" ? i.removeClass("hidden").append('<div class="fa fa-exclamation-circle">&nbsp;' + t.ErrorMessage + "</div>") : setTimeout(function () {
        f.makeInvalid(i, t.ErrorMessage);
      }, 200) : (i = angular.element(document.querySelectorAll("[name='" + t.ElementId + "']")), i.length ? setTimeout(function () {
        f.makeInvalid(i, t.ErrorMessage);
      }, 200) : (i = angular.element("#ValidationSummary"), i.length ? i.removeClass("hidden").text(t.ErrorMessage) : n.$broadcast(u.validationError, t)));
    }), n.$broadcast(u.validationErrorSummary, i.data.Errors), n.$root.$broadcast("form-validation-failed")) : i.status == 500 && n.$broadcast(u.serverError); else {
      var e = t.defer();
      return r.getToken() ? n.$broadcast(u.notAuthorized) : n.$broadcast(u.loginRequired, i), e.promise;
    }
    return t.reject(i);
  }};
}]).factory("timer", ["$timeout", function (n) {
  function t(n, t, i) {
    this._callback = n;
    this._duration = t || 0;
    this._invokeApply = i !== false;
    this._timer = null;
  }
  function i(n, i, r) {
    return new t(n, i, r);
  }
  return t.prototype = {constructor: t, isActive: function () {
    return !!this._timer;
  }, restart: function () {
    this.stop();
    this.start();
  }, start: function () {
    var t = this;
    this._timer = n(function () {
      try {
        t._callback.call(null);
      } finally {
        t = t._timer = null;
      }
    }, this._duration, this._invokeApply);
  }, stop: function () {
    n.cancel(this._timer);
    this._timer = false;
  }, teardown: function () {
    this.stop();
    this._callback = null;
    this._duration = null;
    this._invokeApply = null;
    this._timer = null;
  }}, i.Timer = t, i;
}]).config(["$httpProvider", function (n) {
  n.interceptors.push("tokenInterceptor");
}]);
"use strict";
angular.module("app.filters", []).filter("interpolate", ["version", function (n) {
  return function (t) {
    return String(t).replace(/\%VERSION\%/gm, n);
  };
}]).filter("israelId", function () {
  return function (n, t, i) {
    if (!n) return null;
    if (n = n.toString(), n.length >= t) return n.substring(0, 8) + "-" + n.substring(8);
    i = (i || 0).toString();
    var r = new Array(1 + t - n.length).join(i) + n;
    return r.substring(0, r.length - 1) + "-" + r.substring(r.length - 1);
  };
}).filter("creditCardSuffix", function () {
  return function (n, t) {
    return n ? (n = n.toString(), n.length <= t) ? n : n.substring(n.length - t, n.length) : null;
  };
}).filter("arrangeNegativeSign", function () {
  return function (n) {
    if (n >= 0) return n;
    if (n = n.toString(), n.indexOf("-") > -1) {
      var t = n.replace("-", "");
      return t + " -";
    }
    return n;
  };
}).filter("filterOutContactUsOrCallUs", function () {
  return function (n) {
    for (var t, r = [], i = 0; i < n.length; i++) t = n[i], t.name != "ContactUs" && t.name != "CallUs" && r.push(t);
    return r;
  };
});
"use strict";
angular.module("app.services", []).factory("dataService", ["$q", "$http", "$rootScope", "AuthSession", "USER_ROLES", "AUTH_EVENTS", "$interval", "SvcFlattenDate", function (n, t, i, r, u, f, e, o) {
  return {get: function (u, e, s) {
    var h, c;
    return r.getToken() ? (c = "api/" + u, s, r.setIsActive(), t.get(c, {cache: e}).success(function (n) {
      if (i.laddaLoading = false, r.clearPendingRequest(u), angular.isString(n) && n.indexOf("The requested URL was rejected") > -1) {
        var t = n.indexOf("Your support ID is: "), e = n.substr(t + 20, 20);
        i.$broadcast(f.serverError, "תקלה בקבלת המידע, מזהה השגיאה: " + e + ", יש לפנות לתמיכה.");
      } else o.flattenDates(n, true), i.$broadcast(f.serverSuccess);
    }).error(function (n, t) {
      i.laddaLoading = false;
      r.clearPendingRequest(u);
      t != 400 && t != 307 && i.$broadcast(f.serverError);
    })) : (i.$broadcast(f.loginRequired), h = n.defer().promise, h.success = function () {
      return h;
    }, h.error = function (n) {
      return n(), h;
    }, h);
  }, getDocument: function (u) {
    if (!r.getToken()) {
      i.$broadcast(f.loginRequired);
      var e = n.defer().promise;
      return e.success = function () {
        return e;
      }, e.error = function (n) {
        return n(), e;
      }, e;
    }
    return r.setIsActive(), t.get(u, {responseType: "arraybuffer"}).success(function (n) {
      if (i.laddaLoading = false, angular.isString(n) && n.indexOf("The requested URL was rejected") > -1) {
        var t = n.indexOf("Your support ID is: "), r = n.substr(t + 20, 20);
        i.$broadcast(f.serverError, "תקלה בקבלת המידע, מזהה השגיאה: " + r + ", יש לפנות לתמיכה.");
      } else i.$broadcast(f.serverSuccess);
    }).error(function (n, t) {
      i.laddaLoading = false;
      t != 400 && t != 307 && i.$broadcast(f.serverError);
    });
  }, post: function (u, e) {
    if (!r.startPendingRequest(u)) {
      i.laddaLoading = false;
      var s = n.defer().promise;
      return s.success = function () {
        return s;
      }, s.error = function () {
        return s;
      }, console.log("Ignoring duplicate request: " + u), s;
    }
    return e ? e.ErrorMessage && (e.ErrorMessage = undefined) : e = {}, r.setIsActive(), o.flattenDates(e, false), t.post("api/" + u, e).success(function (n) {
      if (i.laddaLoading = false, r.clearPendingRequest(u), angular.isString(n) && n.indexOf("The requested URL was rejected") > -1) {
        var t = n.indexOf("Your support ID is: "), e = n.substr(t + 20, 20);
        i.$broadcast(f.serverError, "תקלה בקבלת המידע, מזהה השגיאה: " + e + ", יש לפנות לתמיכה.");
      } else o.flattenDates(n, true), i.$broadcast(f.serverSuccess);
    }).error(function (n, t) {
      i.laddaLoading = false;
      r.clearPendingRequest(u);
      t != 400 && t != 307 && i.$broadcast(f.serverError);
    });
  }};
}]).service("sideMenuValues", function () {
  var n = null;
  this.setSideMenu = function (t) {
    n = t;
  };
  this.getSideMenu = function () {
    return n;
  };
}).service("externalNavigationParams", function () {
  var n = {};
  this.setParams = function (t, i) {
    n[t] = i;
  };
  this.getParams = function (t) {
    return n[t];
  };
}).service("tkufotMitzuyValues", function () {
  var n = null;
  this.setTkufotMitzuy = function (t) {
    n = t;
  };
  this.getTkufotMitzuy = function () {
    return n;
  };
  this.clearTkufotMitzuy = function () {
    n = null;
  };
}).service("SvcUUID", function () {
  this.generateUUID = function () {
    var n = (new Date).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var i = (n + Math.random() * 16) % 16 | 0;
      return n = Math.floor(n / 16), (t == "x" ? i : i & 7 | 8).toString(16);
    });
  };
}).service("Discoder", function () {
  this.decode = function (n) {
    var i = "", t;
    if (!n) return "";
    for (t = 0; t < n.length / 8; t++) {
      var r = n.substr(t * 8, 8), u = "" + r[4] + r[3], f = parseInt(u, 16);
      i = i + String.fromCharCode(f);
    }
    return i;
  };
}).service("SvcPhone", function () {
  this.FullPhoneNumberIsCorrect = function (n, t, i) {
    if (!i && (t === null || t === "") && !n) return false;
    return n ? t !== null && t !== "" ? t.match("^[1-9][0-9]{6}$") ? true : false : false : t === null || t === "" ? true : false;
  };
}).service("SvcEmail", function () {
  this.EmailAddressValid = function (n) {
    if (n) {
      var i = new RegExp("\n", "g"), t = RegExp("^[A-Z0-9._-]+@(?:[A-Z0-9-]+\\.)+[A-Z]{2,}$", "i");
      return t.test(n);
    }
    return false;
  };
  this.EmailAddressNotEmptyAndValid = function (n) {
    if (n != null && n !== "") {
      var i = new RegExp("\n", "g"), t = RegExp("^[A-Z0-9._-]+@(?:[A-Z0-9-]+\\.)+[A-Z]{2,}$", "i");
      return t.test(n);
    }
    return false;
  };
}).service("SvcFlattenDate", function () {
  var n = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d/;
  this.flattenDates = function (t, i, r) {
    var e, u, f;
    if (angular.isArray(t) && this.flattenDatesFromArray(t, i), angular.isObject(t)) for (e in t) u = t[e], angular.isObject(u) ? this.flattenDates(u, i) : angular.isArray(u) ? this.flattenDatesFromArray(u, i) : angular.isString(u) && n.test(u) && (t[e] = i ? u.substr(0, 19) : u.substr(0, 10));
    if (r && angular.isString(t) && n.test(t)) return i ? t.substr(0, 19) : (f = t.substr(0, 10), f.substr(8, 2) + "/" + f.substr(5, 2) + "/" + f.substr(0, 4));
  };
  this.flattenDatesFromArray = function (t, i) {
    for (var r, u = 0; u < t.length; u++) r = t[u], angular.isObject(r) ? this.flattenDates(r, i) : angular.isString(r) && n.test(r) && (t[u] = i ? r.substr(0, 19) : r.substr(0, 10));
  };
}).service("SvcDateManip", function () {
  this.addYears = function (n, t) {
    var i = new Date(n);
    return this.addMonths(i, t * 12);
  };
  this.addMonths = function (n, t) {
    var i = new Date(n), r = i.getDate();
    return i.setDate(1), i.setMonth(i.getMonth() + t * 1), i.setDate(Math.min(r, this.daysInMonth(i))), i;
  };
  this.daysInMonth = function (n) {
    return new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
  };
  this.formatMMDDYYYY = function (n) {
    return n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear();
  };
}).service("SvcMountaineer", function () {
  this.getClosest = function (n, t) {
    for (var i = t.charAt(0); n && n !== document; n = n.parentNode) if (i === ".") {
      if (n.classList.contains(t.substr(1))) return n;
    } else if (i === "#") {
      if (n.id === t.substr(1)) return n;
    } else if (i === "[" && n.hasAttribute(t.substr(1, t.length - 2))) return n;
    return false;
  };
  this.getParents = function (n, t) {
    for (var r = t.charAt(0), i = []; n && n !== document; n = n.parentNode) r === "." ? n.classList.contains(t.substr(1)) && i.push(n) : r === "#" ? n.id === t.substr(1) && i.push(n) : r === "[" && n.hasAttribute(t.substr(1, t.length - 2)) && i.push(n);
    return i.length === 0 ? false : i;
  };
}).service("svcYeshuvim", ["$rootScope", "$q", "dataService", function (n, t, i) {
  var r = {}, u = {};
  return {getRehovot: function (n, r, f) {
    return t(function (t) {
      var o = n + r + f, s = u[o], e;
      if (s) {
        t(s);
        return;
      }
      e = [];
      f ? i.post("DataApi/GetRehov?city_code=" + n + "&street_code=" + r).success(function (n) {
        n && e.push({text: n.street_name, id: n.street_code, code: n.official_code});
        u[o] = e;
        t(e);
      }) : i.post("DataApi/FindRehov?city_code=" + n + "&streetPrefix=" + encodeURIComponent(r)).success(function (n) {
        var r, i;
        if (n) for (r in n) i = n[r], e.push({text: i.street_name, id: i.street_code, code: i.official_code});
        u[o] = e;
        t(e);
      });
    });
  }, getYeshuvim: function (n) {
    return t(function (t) {
      var f = n, e = r[f], u;
      if (e) {
        t(e);
        return;
      }
      u = [];
      i.post("DataApi/FindYeshuv?cityPrefix=" + encodeURIComponent(n)).success(function (n) {
        var e, i;
        if (n) for (e in n) i = n[e], u.push({text: i.city_name, id: i.city_code});
        r[f] = u;
        t(u);
      });
    });
  }, getYeshuv: function (n) {
    return t(function (t) {
      var f = n + "", e = r[f], u;
      if (e) {
        t(e);
        return;
      }
      u = [];
      i.post("DataApi/GetYeshuv?city_code=" + n).success(function (n) {
        n && u.push({text: n.city_name, id: n.city_code});
        r[f] = u;
        t(u);
      });
    });
  }};
}]).service("BtlFormsService", ["$q", "$http", "$rootScope", "AuthSession", "USER_ROLES", "AUTH_EVENTS", "$interval", function (n, t, i, r) {
  function u(n, t, i) {
    var f = window.open("about:blank", t), r, e, u;
    try {
      f.document.write("<h3 style='direction:rtl;text-align:center;font-family:arial;padding-top:100px;' >המתן...</h3>");
    } catch (o) {
      console.log("Showing pending message blocked: " + o);
    }
    r = f.document.createElement("form");
    r.setAttribute("method", "post");
    r.setAttribute("action", n);
    r.setAttribute("target", t);
    for (e in i) i.hasOwnProperty(e) && (u = f.document.createElement("input"), u.type = "hidden", u.name = e, u.value = i[e], r.appendChild(u));
    f.document.body.appendChild(r);
    r.submit();
  }
  this.openBtlForm = function (n) {
    var t = "Links/OpenForm?id=" + n;
    u(t, n, {_AuthToken: r.getToken(), test: true});
  };
}]).value("version", "0.1");
String.prototype.padStart || (String.prototype.padStart = function (n, t) {
  return n = n >> 0, t = String(typeof t != "undefined" ? t : " "), this.length > n ? String(this) : (n = n - this.length, n > t.length && (t += t.repeat(n / t.length)), t.slice(0, n) + String(this));
});
angular.module("app.directives", ["angular-loading-bar", "fluent.validation", "jcs-autoValidate"]).directive("appVersion", ["version", function (n) {
  return function (t, i) {
    i.text(n);
  };
}]).directive("iframeOnload", [function () {
  return {scope: {callBack: "&iframeOnload"}, link: function (n, t) {
    t.on("load", function () {
      return n.callBack();
    });
  }};
}]).directive("simpleDateInput", ["$filter", "getFluentDateRange", function () {
  return {restrict: "A", priority: -1000, require: "ngModel", scope: {model: "=ngModel", dateformat: "@", options: "@pickerOptions"}, controller: ["$scope", function (n) {
    var t = new Date;
    n.viewDate = {};
    n.dateformat || (n.dateformat = "dd/MM/yyyy");
  }], link: function (n, t, i, r) {
    function u(t) {
      var h = true, i = "", t, u, c, e, o, f, l, s;
      if (angular.isObject(t) || t == undefined) return undefined;
      for (t instanceof Date || t == null ? i = t : (t.indexOf("0001-01-01") > -1 || t === "0001/01/01") && (i = new Date(-62135596800000)), t.indexOf("T") == 10 && (n.dateformat = "y-m-d"), u = t.split(/\W+/), u.length == 1 ? t.length == 6 ? u = [t.substr(0, 2), t.substr(2, 2), t.substr(4, 2)] : t.length == 8 ? u = [t.substr(0, 2), t.substr(2, 2), t.substr(4, 4)] : i = null : u[0].length == 4 && (n.dateformat = "y-m-d"), c = n.dateformat.split(/\W+/), c.length == 2 && (e = 1), l = Math.min(c.length, u.length), s = 0; s < l; s++) switch (c[s][0]) {
        case "d":
          e = parseInt(u[s], 10);
          isNaN(e) && (i = null);
          break;
        case "m":
        case "M":
          o = parseInt(u[s], 10) - 1;
          isNaN(o) && (i = null);
          (o < 0 || o > 11) && (i = null);
          break;
        case "y":
          f = parseInt(u[s], 10);
          isNaN(f) && (i = null);
          f < 0 && (i = null);
          f += f > 100 ? 0 : f < 29 ? 2e3 : 1900;
      }
      return e === undefined && (e = 1), (f === undefined || o === undefined) && (i = null), i != null ? (i = new Date(f, o, e), h = true, n.model = new String(i.getDate()).padStart(2, "0") + "/" + new String(i.getMonth() + 1).padStart(2, "0") + "/" + new String(i.getFullYear()).padStart(2, "0")) : (i = new Date(f, o, e), h = false), r.$setValidity("dateNotValid", h), h ? new String(i.getDate()).padStart(2, "0") + "/" + new String(i.getMonth() + 1).padStart(2, "0") + "/" + new String(i.getFullYear()).padStart(2, "0") : undefined;
    }
    n.$watch(function () {
      return r.$modelValue;
    }, function (n) {
      if (angular.isDefined(n) && n != null) {
        var t = u(n);
        t && (r.$setViewValue(t), r.$commitViewValue(), r.$render());
      }
    });
  }};
}]).directive("monthYearPicker", ["$filter", "getFluentDateRange", function (n, t) {
  return {restrict: "A", priority: -1000, require: "ngModel", scope: {model: "=ngModel", dateformat: "@", options: "@pickerOptions"}, controller: ["$scope", function (n) {
    var u = new Date, i, r;
    for (n.viewDate = {}, i = null, n.dateformat || (n.dateformat = "dd/MM/yyyy"), n.minDate = i && i.min ? t.get(n.$parent, i.min) : new Date(u.getFullYear() - 10, u.getMonth(), 1), n.maxDate = i && i.max ? t.get(n.$parent, i.max) : new Date(u.getFullYear(), 11, 1), n.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], n.years = [], r = n.minDate.getFullYear(); r <= n.maxDate.getFullYear(); r++) n.years.push(r);
  }], template: '<div class="col-sm-6"><select ng-focus="refreshRange()" ng-model="viewDate.month" ng-disabled="checkIfParentDisabled()" disable-valid-styling="true"  class="form-control no-error-styling" ng-options="m as m for m in months" aria-label="חודש"></select></div><div class="col-sm-6 last"><select ng-focus="refreshRange()" ng-model="viewDate.year"  ng-disabled="checkIfParentDisabled()" disable-valid-styling="true"  class="form-control no-error-styling" ng-options="y as y for y in years" aria-label="שנה"></select></div>', link: function (i, r, u, f) {
    i.checkIfParentDisabled = function () {
      return r[0].attributes.disabled != undefined;
    };
    f.$render = function () {
      r.removeAttr("tabindex");
      f.$viewValue && (i.viewDate = f.$viewValue);
    };
    i.refreshRange = function () {
      var r = i.viewDate, n, t;
      i.months = [];
      var u = i.minDate.getFullYear(), f = i.maxDate.getFullYear(), e = 1, o = 12;
      for (u == r.year && (e = i.minDate.getMonth() + 1), f == r.year && (o = i.maxDate.getMonth() + 1), n = e; n <= o; n++) i.months.push(n);
      for (i.years = [], t = u; t <= f; t++) i.years.push(t);
    };
    var e = function (t) {
      var u = true, e = "", r;
      return t && (r = new Date(t.year, t.month - 1, 1), t.year && i.refreshRange(), angular.isDate(r) ? (e = n("date")(r, i.dateformat), r.getFullYear() != t.year || r.getMonth() != t.month - 1 || r.getDate() != 1 ? u = false : r < i.minDate || r > r.maxDate ? (u = false, i.model = null) : i.model = e) : e = null, f.$setValidity("monthYearPicker", u)), u ? e : undefined;
    };
    i.$watch("viewDate", function (n) {
      e(n);
    }, true);
    f.$formatters.push(function (n) {
      if (n && (!n || n.indexOf("0001-01-01") != 0)) {
        var r = t.parseDate(n, i.dateformat);
        !angular.isDate(r);
      }
    });
    f.$parsers.unshift(e);
  }};
}]).directive("resizeLayout", ["$window", "$rootScope", "jcs-debounce", function (n, t, i) {
  return function (r, u, f) {
    var l = "hidden-" + f.resizeLayout, h = true, c = true, e = true, o = angular.element("<span style='width:0;height:0' class='" + l + "'></span>"), s;
    u.append(o);
    s = i.debounce(function () {
      o.css("display") == "none" ? (h = false, t._layoutType = f.resizeLayout === "lg" ? "normal" : "small", e || t.$apply(), c = true) : o.css("display") != "none" && (c = false, f.resizeLayout === "lg" ? t._layoutType = "small" : (t._layoutType = "normal", t._isMMCollapsed = false), e || t.$apply(), h = true);
    }, 100, false);
    angular.element(n).bind("resize", s);
    s();
    e = false;
  };
}]).directive("flexIframe", ["cfpLoadingBar", "jcs-debounce", function (n, t) {
  var i = function (i, r) {
    i.$parent._pdfNotInline = null;
    var u = t.debounce(function () {
      var u, t, f, e, r;
      i.$parent._pdfVisible = false;
      n.complete();
      try {
        if (u = String(this.contentWindow.window.location), u.indexOf("ErrorMessage=") > 0) {
          for (t = {}, f = this.contentWindow.window.location.search.replace(/^\?/, "").split("&"), r = 0; r < f.length; r++) e = f[r].split("="), t[e[0]] = e[1];
          t.ErrorMessage && (i.$parent._ErrorMessage = decodeURIComponent(t.ErrorMessage).replace(/\+/g, " "));
        } else u === "about:blank" || (i.$parent._ErrorMessage = null, (this.contentWindow.document.mimeType == "application/pdf" || this.contentWindow.document.contentType == "application/pdf") && (i.$parent._pdfVisible = true));
      } catch (o) {
        i.$parent._ErrorMessage = null;
      }
      i.$parent.$apply();
    }, 400, false);
    r[0].onload = u;
    r[0].ieReadyCheck = function () {
      try {
        if (!this.src || !this.contentWindow.document) return;
      } catch (n) {
        return;
      }
      u();
    };
    setTimeout(function () {
      r[0].contentDocument && r[0].contentDocument.readyState == "uninitialized" && (i.$parent._pdfNotInline = true, n.complete(), console.log("PDF not loaded inline"));
    }, 15e3);
  };
  return {restrict: "EA", scope: {src: "@src", width: "@width", scrolling: "@scrolling"}, link: i};
}]).directive("stickyIframe", ["jcs-debounce", function (n) {
  var t = function (t, i) {
    var u = angular.element("<span style='width:0;height:0' class='hidden-xs'></span>"), r;
    i.append(u);
    r = n.debounce(function () {
      var n = $(i[0]), t;
      n.css("display", "block");
      t = n.offset().top;
      u.css("display") == "none" ? (t = -20, n.css({position: "fixed", top: 0, right: 0, left: 0, zIndex: 3e3, width: "100%"})) : n.css({position: "static", top: "auto", right: "auto", left: "auto", zIndex: "inherit", width: "100%"});
      n.height(Math.max(window.innerHeight - t - 20, 320));
    }, 100, false);
    i[0].onload = r;
    window.onresize = r;
  };
  return {restrict: "EA", link: t};
}]).directive("flexTop", ["$window", "$rootScope", "jcs-debounce", function (n, t, i) {
  return function (r, u, f) {
    function l(n) {
      if (n.pageYOffset != null) return n.pageYOffset;
      var t = n.document;
      return document.compatMode == "CSS1Compat" ? t.documentElement.scrollTop : t.body.scrollTop;
    }
    var e = true, o = true, s = true, c = parseInt(f.flexTop), h = function () {
      var u = $(document.body).height(), f = $(window).height(), r = 5, i;
      t._isMMCollapsed ? (t._topLayout = "hidden", s || t.$apply()) : (i = l(n), i < r && e ? (e = false, t._topLayout = "top", s || t.$apply(), o = true) : i >= r && o && u > f + c && (o = false, t._topLayout = "hidden", s || t.$apply(), e = true));
    }, a = i.debounce(function () {
      e = true;
      o = true;
      h();
    }, 300, false);
    angular.element(n).bind("scroll", h);
    angular.element(n).bind("resize", a);
    h();
    s = false;
  };
}]).directive("afocus", function () {
  return {link: function (n, t) {
    setTimeout(function () {
      n.$apply(function () {
        $(t).focus();
      });
    }, 200);
  }};
}).directive("localAnchor", ["$window", function (n) {
  return {restrict: "A", link: function (t, i, r) {
    return i.bind("click", function () {
      var t;
      t = document.getElementById(r.localAnchor);
      r.localAnchor == "Top" ? n.scrollTo(0, 0) : t.scrollIntoView(true);
    });
  }};
}]).directive("calenderExtButton", ["$window", function () {
  return {restrict: "A", link: function (n, t, i) {
    return t.bind("click", function () {
      if (i.tabindex == 0) {
        var n = $("#" + i.calenderExtButton).pickadate(), t = n.pickadate("picker");
        t.open(true);
      }
    }).bind("keydown keypress", function (n) {
      if (i.tabindex == 0 && n.which === 13) {
        var t = $("#" + i.calenderExtButton).pickadate(), r = t.pickadate("picker");
        r.open(true);
        n.preventDefault();
      }
    });
  }};
}]).directive("closeMobileMenu", ["$window", "$rootScope", function (n, t) {
  return {restrict: "A", link: function (n, i) {
    $(i).click(function () {
      t._isMMCollapsed && n.safeApply(function () {
        t._isMMCollapsed = false;
      });
    });
  }};
}]).directive("focusListener", ["$window", "$rootScope", function (n, t) {
  return {restrict: "A", link: function (n, i) {
    $(i).focusin(function (i) {
      $(i.target).is("[data-ksr]") ? n.safeApply(function () {
        t.ddlCollapse = true;
      }) : n.safeApply(function () {
        t.ddlCollapse = false;
      });
    });
  }};
}]).directive("activeInformer", function () {
  return {restrict: "A", link: function (n, t) {
    n.$watch(function () {
      return t.attr("class");
    }, function () {
      var n = angular.element("<span id='activeFlag' class='sr-only'>(עמוד נוכחי) </span>");
      t.hasClass("active") === true ? t.children("span#activeFlag") && t.append(n) : t.children("span#activeFlag") && t.children("span#activeFlag").remove();
    });
  }};
}).directive("unfocusable", ["$window", "$rootScope", function () {
  return {restrict: "EA", link: function (n, t) {
    var i = t.attr("tabindex");
    i || t.attr("tabindex", -1);
    $(t).focusin(function (n) {
      var t, i;
      n.preventDefault();
      t = n.currentTarget;
      t !== null && angular.isFunction(t.blur) && $(t).blur();
      i = n.relatedTarget;
      i !== null && angular.isFunction(i.focus) && $(i).focus();
    });
  }};
}]).directive("skipLinks", ["$rootScope", "$compile", function (n, t) {
  return {restrict: "A", link: function (n, i) {
    var r = t('<ul class="skip-links"><li><a href="javascript:void(0)" ng-click="skipTo(\'topNav_0\')">דילוג לתפריט עליון</a></li><li><a href="javascript:void(0)" ng-click="skipTo(\'sideNav_0\')">דילוג לתפריט צד</a></li></ul>')(n);
    r.insertAfter(i);
  }};
}]).directive("resetWhenDisabled", function () {
  return {restrict: "A", require: "ngModel", link: function (n, t, i, r) {
    n.$watch(function () {
      return t.attr("disabled");
    }, function (n) {
      n === "disabled" && (r.$setViewValue(null), r.$render());
    });
    n.$watch(function () {
      return r.$viewValue;
    }, function () {
      t.attr("disabled") === "disabled" && (r.$setViewValue(null), r.$render());
    });
  }};
}).directive("cellMask", function () {
  return {restrict: "A", require: "ngModel", link: function (n, t, i, r) {
    n.$watch(function () {
      return r.$modelValue;
    }, function (n) {
      var t, i, u;
      angular.isDefined(n) && n != null && (isNaN(n) || (t = new String(n), t.length > 3 && (i = t.substr(0, 3), u = t.substr(3, t.length - 3), r.$setViewValue(i + "-" + u), r.$commitViewValue(), r.$render())));
    });
  }};
}).directive("toUpperCase", function () {
  return {restrict: "A", require: "ngModel", link: function (n, t, i, r) {
    n.$watch(function () {
      return r.$modelValue;
    }, function (n) {
      angular.isString(n) && n != null && (r.$setViewValue(n.toUpperCase()), r.$commitViewValue(), r.$render());
    });
  }};
}).directive("onEnter", function () {
  return function (n, t, i) {
    t.bind("keydown keypress", function (t) {
      t.preventDefault();
      t.which === 13 && n.$apply(function () {
        n.$eval(i.onEnter);
      });
    });
  };
}).directive("maxLengthCheck", function () {
  return function (n, t) {
    t.bind("paste", function (n) {
      n.stopPropagation();
      n.preventDefault();
    });
  };
}).directive("preventPaste", function () {
  return function (n, t) {
    t.bind("paste", function (n) {
      n.stopPropagation();
      n.preventDefault();
    });
  };
}).directive("timeLine", function () {
  function n(n, t) {
    var h, i, g, c, f, y, p, u, a, v;
    if (t) {
      var b = $('<h3 class="sr-only">להלן פירוט שלבי הטיפול בתביעה</h3><ul aria-hidden="true" class="timeline dates"><li class="timeline-row"><div class="timeline-header">&#160;</div><div class="timeline-bar"><ul id="dates"/></div></li></ul>'), k = b.find("#dates"), e, d = 0, s, o;
      for (t.Today && (o = t.Today.Date, s = $('<div class="today" style="left: ' + t.Today.After + '%"></div>'), n.append(s)), h = {}, u = 0; u < t.Steps.length; u++) if (i = t.Steps[u], g = i.FinishedStatus == "finished" ? i.Length : i.MaxLength, g) for (c = 0; c < i.Marks.length; c++) (f = i.Marks[c], h[f.Date]) || (h[f.Date] = true, e = $('<li style="right: ' + f.Offset + '%;"><div class="date"></div></li>'), y = e.find(".date"), y.text(f.Date), f.After < 3 && f.After > 0 && (d += 16, y.css("padding-left", d)), f.Offset == 100 && e.addClass("lastDate"), k.append(e), f.Date == o && (o = null));
      for (o && !h[o] && (e = $('<li class=" dateToday" style="right: ' + t.Today.Offset + '%;"><div class="date">היום</div></li>'), k.append(e)), n.append(b), p = " start", u = 0; u < t.Steps.length; u++) {
        var i = t.Steps[u], nt = u + 1, l = $('<ul class="timeline ' + i.Stage + '"><li aria-hidden="true" class="timeline-row"><div class="timeline-header step"><div class="stage ' + i.Stage + '"></div><div id="title"></div></div><div class="timeline-bar bar"><ul id="bars"></ul></div></li></ul');
        for (l.find("#title").text(i.Title), a = l.find("#bars"), v = 0; v < i.Marks.length; v++) {
          var r = i.Marks[v], w = "", tt = "";
          r.Marker && (w = "<span class='" + r.Marker + "-marker'></span>", tt = " " + r.Marker);
          l.append('<li class="timeline-row details"><span class="sr-only">' + w + r.Title + " " + r.Date + '</span><div aria-hidden="true" class="timeline-header"><ul><li class="' + r.Css + tt + '"><div class="marker-text"><span>' + w + r.Title + " " + r.Date + '</span></div></li></ul></div><div aria-hidden="true" class="timeline-bar ' + p + '"><div class="timeline-limit-gap ' + r.Css + " " + i.FinishedStatus + '"></div><ul><li class="timeline-limit ' + r.Css + '" style="width:' + r.Offset + '%">&nbsp;</li></ul></div></li>');
          p = "";
        }
        i.FinishedStatus == "finished" ? a.append('<li class="timeline-finished" style="width: ' + i.MaxLength + "%;margin-right:" + i.Offset + '%;">&nbsp;</li><li class="timeline-base timeline-step' + nt + '" style="width: ' + i.Length + "%;margin-right:" + i.Offset + '%;">&nbsp;</li>') : i.FinishedStatus == "overdue" ? a.append('<li class="timeline-overdue" style="width: ' + i.MaxLength + "%;margin-right:" + i.Offset + '%;">&nbsp;</li><li class="timeline-base timeline-color' + nt + '" style="width: ' + i.Length + "%;margin-right:" + i.Offset + '%;">&nbsp;</li>') : a.append('<li class="timeline-base" style="width: ' + i.MaxLength + "%;margin-right:" + i.Offset + '%;">&nbsp;</li>');
        n.append(l);
        s && s.css("height", "100%");
      }
    }
  }
  return {restrict: "A", link: function (t, i, r) {
    t.vm[r.timeLine] ? n(i, t.vm[r.timeLine]) : $scope.$watch(t.vm[r.timeLine], function (t) {
      n(i, t);
    });
  }};
}).directive("linksExternal", ["$modal", "externalNavigationParams", "$state", function (n, t, i) {
  return {restrict: "A", link: function (n, r, u) {
    var e = JSON.parse(u.linksExternal), f = String(Number(new Date) + Math.floor(Math.random() * 1e6 + 1));
    return r.attr("data-ext-lnk", f), t.setParams(f, e), r.bind("click", function () {
      var n = r.attr("data-ext-lnk"), t = r.attr("data-tviot-lnk");
      return t ? i.go("TviotExternal", {key: n}) : i.go("LinksExternal", {key: n}), false;
    });
  }};
}]).directive("openExternal", ["$modal", "Analytics", function (n, t) {
  return {restrict: "A", link: function (i, r) {
    return r.bind("click", function () {
      var u, f;
      if (!localStorage.BtlMobile) return u = i.$new(), u.close = function () {
        f.dismiss("cancel");
      }, u.open = function () {
        t.trackPage($(r).attr("href"));
        window.open($(r).attr("href"), "_blank");
        f.dismiss("cancel");
      }, f = n.open({templateUrl: "Partials/Modal/OpenExternal.html?ts=" + Number(new Date), scope: u, backdrop: "static"}), false;
    });
  }};
}]).directive("checkOnChange", ["validationManager", function (n) {
  return {restrict: "A", require: "ngModel", scope: {model: "=ngModel"}, link: function (t, i, r, u) {
    t.$watch("model", function () {
      u.$validate();
      n.validateElement(u, i, {forceValidation: true, disabled: !u.$valid});
    });
  }};
}]);
"use strict";
angular.module("app.PublicSideNav", []).constant("PUBLIC_SIDE_NAV", [{name: "login", title: "כניסה לאתר שירות אישי", url: "/login"}, {name: "ForgotPassword", title: "שכחתי סיסמה או קוד משתמש", url: "/ForgotPassword"}, {name: "Odot", title: "אודות האתר", url: "/Odot"}, {name: "AvtachatMeida", title: "אבטחת מידע", url: "/AvtachatMeida"}, {name: "Kesher", title: "תמיכה", url: "/Kesher"}, {name: "TnaeyShimush", title: "תנאי שימוש", url: "/TnaeyShimush"}, {name: "QRCodeRegistrationUser", title: "הצטרפות לשירות אישי", url: "/QrCode/Registration/user", css: "register-bold"}]);
"use strict";
var app = angular.module("app.controllers", ["ui.router", "app.services", "app.AuthService", "oc.lazyLoad", "ui.bootstrap", "angular-loading-bar", "tooltipSter", "app.Mevutach", "ngLocale", "ladda", "app.PublicSideNav"]);
app.controller("ApplicationController", ["$rootScope", "$scope", "$state", "AuthSession", "AuthService", "USER_ROLES", "AUTH_EVENTS", "$ocLazyLoad", "PUBLIC_SIDE_NAV", "$location", "$modal", "$modalStack", "sideMenuValues", "$window", "Analytics", function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
  n.urlTS = "?ts=" + Number(new Date);
  n.ladaLoading = false;
  n.parseInt = parseInt;
  n._isMMCollapsed = false;
  n.goTo = function (n, t) {
    t && setTimeout(function () {
      document.querySelector("[id $= " + t + "]") && document.querySelector("[id $= " + t + "]").focus();
    }, 110);
  };
  t.currentUser = null;
  t.$location = h;
  var p = true;
  t.toggleMobileMenu = function () {
    n._isMMCollapsed = !n._isMMCollapsed;
    n._isMMCollapsed ? (n._topLayout = "hidden", $("#sideNav").animate({"margin-right": "0"}, 500)) : $("#sideNav").css("margin-right", "-300px");
  };
  n.negishutStatementTitle = "הצהרת נגישות";
  n.chisachonYeledTitle = "חסכון לכל ילד";
  n.encodeUrl = function (n) {
    return encodeURIComponent(n);
  };
  n.ddlCollapse = false;
  n.togglePassView = function (n, t) {
    $("#" + t).attr("type") == "password" ? ($("#" + t).attr("type", "text"), $("#" + n).text("הסתר סיסמה")) : ($("#" + t).attr("type", "password"), $("#" + n).text("הצג סיסמה"));
  };
  t.ddlOpenerKDown = function (t) {
    t.keyCode == "13" && (n.ddlCollapse = !n.ddlCollapse);
    t.keyCode == "40" && (n.ddlCollapse = true);
    t.keyCode == "38" && (n.ddlCollapse = false);
  };
  t.ddlOpenerMOver = function () {
    n.ddlCollapse = true;
  };
  t.ddlOpenerMLeave = function () {
    n.ddlCollapse = false;
  };
  n.applyAccebilityCss = function (n) {
    n ? angular.element("#appAcc").attr("href", "/content/app-acc.css") : angular.element("#appAcc").attr("href", "");
  };
  t.toggleCssAcc = function () {
    v.sessionStorage.AccessibilityOn == undefined ? (v.sessionStorage.AccessibilityOn = true, n.AccessibilityOn = true) : (v.sessionStorage.removeItem("AccessibilityOn"), n.AccessibilityOn = !n.AccessibilityOn);
    t.applyAccebilityCss(n.AccessibilityOn);
    window.location.reload();
  };
  t.applyCurrentUser = function (r, f) {
    var nt, tt, e, c, d, l, v, y, w, g, b, k;
    if (n.topBtl = null, n.topKishurim = null, n.topHome = null, n.topNoBtlNoKishurim = null, n.BASE_URL = r ? r.currentZehut.BASE_URL : "", t.currentUser = r, t.topNav = null, t.statePrm = null, r) {
      for (n.topNavNoUser = null, p && u.startTimer(), r.Environment != "PRD" && r.Environment != "INT" && (t.Environment = "(" + r.Environment + ")"), t.topNav = r.topNav, t.sideNav = r.sideNav, t.sideNavMnk = [{name: "Maanak", title: "מענקים", subNav: []}], nt = {name: "MaanakEzrach", title: "מענק לכל אזרח", func: "getMevBankDetails()"}, t.sideNavMnk[0].subNav.push(nt), t.currentUser.ochlusin.Atidi_1 && t.currentUser.ochlusin.Atidi_1.split(";")[1] == "Y" && (tt = {name: "MaanakNechut", title: "מענק נכות", func: "getMaanakNechutData()"}, t.sideNavMnk[0].subNav.push(tt)), e = _.filter(t.sideNav, function (n) {
        return n.name === "ContactUs";
      }), e && e.length > 0 && (t.sideNavContactUs = e[0]), c = _.filter(t.sideNav, function (n) {
        return n.name === "CallUs";
      }), c && c.length > 0 && (t.sideNavCallUs = c[0]), t.natzig = r.NameNatzig, n.meyatzegArea = false, r.currentZehut.MeyatzegArea && (n.meyatzegArea = true), n.kupachMenu = false, r.currentZehut.kupachMenu && (r.currentZehut.hidePersonalMenu = true, r.currentZehut.hideStaticMenu = true, n.kupachMenu = true), r.currentZehut.odMenu && (n.odMenu = true), r.currentZehut.hideDalpakPniyotKodomt && (n.hideDalpakPniyotKodomt = true), r.currentZehut.pniyaBidud && (n.pniyaBidud = r.currentZehut.pniyaBidud), r.currentZehut.tikMaasik && (n.tikMaasik = r.currentZehut.tikMaasik), r.currentZehut.mezahePinkas && (n.mezahePinkas = r.currentZehut.mezahePinkas), n.ntzgContext = false, r.currentZehut.showTiyuvOnly && t.sideNav[0].name === "Personal" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "MevutachConfirmDetails" && (f = t.sideNav[0].subNav[0].name, n.ntzgContext = true), r.currentZehut.hidePersonalMenu ? (t.sideNav.length == 1 && t.sideNav[0].name !== "MevutachConfirmDetails" && t.sideNav[0].name !== "Avtala" && t.sideNav[0].name !== "Siud" && t.sideNav[0].name !== "Personal" && t.sideNav[0].name !== "Maasik" && t.sideNav[0].name !== "Atzmai" ? f = "MevutachSwitch" : t.sideNav[0].name === "Siud" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "SiudTochnitTipul" ? (f = t.sideNav[0].subNav[0].name, n.ntzgContext = true) : t.sideNav[0].name === "Avtala" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "AvtalaDivuachStatus" ? (f = t.sideNav[0].subNav[0].name, n.ntzgContext = true) : t.sideNav[0].name === "Personal" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "PersonalHeshbonBank" ? (f = t.sideNav[0].subNav[0].name + "Me", t.statePrm = {nose: "mev"}, n.ntzgContext = true) : t.sideNav[0].name === "Maasik" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "Maasik" ? (f = t.sideNav[0].subNav[0].name, n.ntzgContext = true) : t.sideNav[0].name === "Atzmai" && t.sideNav[0].subNav.length == 1 && t.sideNav[0].subNav[0].name == "Atzmai" ? (f = t.sideNav[0].subNav[0].name, n.ntzgContext = true) : f = t.sideNav[0].url, n.hidePersonalMenu = true, d = "/Personal/Summary", r.currentZehut.kupachMenu && (d = ""), t.topNav = _.filter(t.topNav, function (n) {
        switch (n.url) {
          case "/VaadotRefuiyot":
          case "/My/IshurimList/all":
          case "/Michtavim":
          case "/Mismachim":
          case d:
          case "/Michtavim/Protocols":
          case null:
            return false;
        }
        return true;
      }), r.currentZehut.hideStaticMenu && (n.hideStaticMenu = true)) : r.currentZehut.hideStaticMenu ? n.hideStaticMenu = true : (n.hidePersonalMenu = false, n.hideStaticMenu = false), n.personalUserMenu = r.currentZehut.personalUserMenu ? true : false, n.mzgUserMenu = r.currentZehut.mzgUserMenu ? true : false, l = _.filter(t.topNav, function (n) {
        return n.name === "btl";
      }), l && l.length > 0 && (n.topBtl = l[0]), v = _.filter(t.topNav, function (n) {
        return n.name === "Kishurim";
      }), v && v.length > 0 && (n.topKishurim = v), y = _.filter(t.topNav, function (n) {
        return n.name === "home";
      }), y && y.length > 0 && (n.topHome = y[0]), w = _.filter(t.topNav, function (n) {
        switch (n.name) {
          case "home":
          case "btl":
          case "Kishurim":
            return false;
        }
        return true;
      }), w && w.length > 0 && (n.topNoBtlNoKishurim = w), g = [], b = 0; b < r.states.length; b++) k = r.states[b], k.Files && g.push({name: k.id, files: k.Files});
      o.load(g).then(function () {
        for (var u, e = 0; e < r.states.length; e++) {
          u = r.states[e];
          try {
            app.stateProvider.state(u.name, {url: u.url, templateUrl: u.templateUrl, controller: u.controller, title: u.title});
          } catch (o) {
            console.log("stateProvider msg: " + o);
          }
        }
        n.$broadcast("ApplySideNav", {sideNav: t.sideNav, currentUser: r, sideNavMnk: t.sideNavMnk});
        a.setSideMenu(t.sideNav);
        sessionStorage.OrgUrl && !f && (f = sessionStorage.OrgUrl);
        f && (f[0] == "/" ? setTimeout(function () {
          h.path(f);
          h.replace();
        }, 110) : setTimeout(function () {
          f === "ChangeTempPassword" && r.PasswordMessage ? i.go(f, {pswdMsg: r.PasswordMessage}) : t.statePrm ? i.go(f, t.statePrm) : setTimeout(function () {
            i.go(f);
          }, 330);
        }, 110));
      });
    } else n.topNavNoUser = [{name: "btl", title: "דף הבית", url: "https://www.btl.gov.il"}, {name: "kitzba", title: "קצבאות והטבות", url: "https://www.btl.gov.il/benefits"}, {name: "bituah", title: "ביטוח וגבייה", url: "https://www.btl.gov.il/INSURANCE/Pages/default.aspx"}, {name: "snifim", title: "סניפים וערוצי שירות", url: "https://www.btl.gov.il/snifim"}, {name: "pirsumim", title: "פרסומים ומדיניות חברתית", url: "https://www.btl.gov.il/Mediniyut/Pages/default.aspx"}, {name: "kranot", title: "קרנות", url: "https://www.btl.gov.il/Funds/Pages/default.aspx"}], t.sideNav = s, n.$broadcast("ApplySideNav", {sideNav: t.sideNav});
  };
  u.isAuthenticated(true) ? t.applyCurrentUser(r.getUser(), h.path()) : t.applyCurrentUser(null);
  t.userRoles = f;
  t.isAuthorized = r.getToken;
  t.pdfUrl = null;
  n.$on(e.notAuthenticated, function () {
    n.laddaLoading = false;
    t.applyCurrentUser(null);
    i.go("login");
  });
  n.$on(e.loginRequired, function (i, u) {
    var f, e, o;
    n.laddaLoading = false;
    u ? (f = r.getUser(), f ? (e = t.$new(), e.LogoutUrl = f.LogoutUrl, r.destroy(), o = c.open({templateUrl: "Partials/Modal/SessionEnded.html?ts=" + Number(new Date), controller: "SessionEndedModalCtrl", scope: e, backdrop: "static"})) : window.location = window.location.origin + window.location.pathname) : r.getToken() || (r.destroy(), window.location = window.location.origin + window.location.pathname);
  });
  n.$on("ApplyUser", function (n, i) {
    t.applyCurrentUser(i.currentUser, i.goToState);
  });
  n.$on(e.loginAuthenticated, function (n, t) {
    if (t && t.Status) switch (t.Status) {
      case "PinRequired":
        i.go("loginPin");
    }
  });
  n.$on(e.loginSuccess, function (r, u) {
    u.currentZehut.tempPswd || u.PasswordMessage ? n.$broadcast(e.tempLoginSuccess, u) : (n.laddaLoading = false, p = false, t.applyCurrentUser(u), u.currentZehut.hidePersonalMenu || i.go("home"));
  });
  n.$on(e.tempLoginSuccess, function (i, r) {
    n.laddaLoading = false;
    p = false;
    t.applyCurrentUser(r, "ChangeTempPassword");
  });
  n.$on(e.needUserAction, function (n, i) {
    var r = t.$new(), u;
    r.seconds = i / 1e3;
    u = c.open({templateUrl: "Partials/Modal/NeedUserAction.html?ts=" + Number(new Date), controller: "NeedUserActionModalCtrl", scope: r, backdrop: "static"});
  });
  n.$on(e.loginCanceled, function () {
    t.logOut();
  });
  n.logOut = function () {
    if (v.sessionStorage.msg && (t.changePasswordSucceededMsg = v.sessionStorage.msg, v.sessionStorage.removeItem("msg")), v.sessionStorage.vitur && (t.viturSucceededMsg = v.sessionStorage.vitur, v.sessionStorage.removeItem("vitur")), n.ntzgContext == true) window.open("", "_self", ""), window.close(); else {
      var f = r.getUser(), i = null;
      f ? (i = f.LogoutUrl, u.logout().then(function () {
        t.AfterLogoutActs(i);
      })) : (i = "/", t.AfterLogoutActs(i));
    }
  };
  t.AfterLogoutActs = function (n) {
    r.destroy();
    localStorage.BtlMobile ? (t.applyCurrentUser(null), setTimeout(function () {
      window.history.go(-(window.history.length - 1));
    }, 500)) : (sessionStorage.cardLogin && (sessionStorage.exitUrl = n), exitApp());
  };
  n.safeApply = function (n) {
    var t = this.$root.$$phase;
    t == "$apply" || t == "$digest" ? n && typeof n == "function" && n() : n && typeof n == "function" && this.$apply(n);
  };
  n.$on("$locationChangeStart", function (n) {
    var t = l.getTop();
    t && (l.dismiss(t.key, "cancel"), n.preventDefault());
  });
  n.$on("$stateChangeStart", function () {
    if (n._isMMCollapsed = false, !r.getToken()) {
      n.laddaLoading = false;
      return;
    }
    n._topLayout == "top" ? window.scrollTo(0, 0) : window.scrollTo(0, 15);
  });
  n.$on("$stateChangeError", function () {});
  n.$on("form-validation-failed", function () {
    n.laddaLoading = false;
  });
  n.$on("$stateChangeSuccess", function (t, r, u, f) {
    if (n.title = i.current.title, i.previous = f, (r.url == sessionStorage.OrgUrl || i.current.name === "MevutachSwitch") && sessionStorage.removeItem("OrgUrl"), i.current.name !== "showPdf" && i.current.name !== "IshurimList" && (n.CurrentIshurInd = null), i.current.name !== "showPdf" && i.current.name !== "Michtavim" && (n.CurrentMichtavInd = null, n.CurrentTviaInd = null), i.current.name !== "showPdf" && i.current.name !== "Protocols" && (n.CurrentProtocolsInd = null), r.url != f.url) if (u.track) y.trackPage(u.track, r.title); else {
      var e = i.href(r.name, u, {absolute: false});
      e && y.trackPage(e.slice(1), r.title);
    }
  });
  n.$on("$viewContentLoaded", function () {
    setTimeout(function () {
      var r = null, u;
      n.topIntMsgShown && i.current.name === "home" ? (r = angular.element("#topMsg"), n.topIntMsgShown = false) : i.current.name !== t.lastCurState && (r = angular.element("h1").attr("tabindex", -1).attr("id", "mainContent_id").css("outline", "none"));
      t.lastCurState = i.current.name;
      u = null;
      r && (u = r.length > 1 ? r[0] : r, u.focus());
    }, 110);
  });
  n.skipTo = function (n) {
    i.current.name == "home" ? angular.element("#summary_h1").attr("tabindex", -1).css("outline", "none").focus() : angular.element("#" + n).focus();
  };
  n.$on("initial-top-message-shown", function () {
    n.topIntMsgShown = true;
  });
}]).controller("LinksExternalCtrl", ["externalNavigationParams", "$stateParams", "$scope", function (n, t, i) {
  var r = n.getParams(t.key);
  if (!r) {
    i.extUrl = "/#/Personal/Summary";
    return;
  }
  i.extUrl = r.extUrl;
  i.decodedUrlTitle = decodeURIComponent(r.linkTitle).replace(/\+/g, " ");
  i.ChisachonYeled = false;
  i.MeidaMaasikim = false;
  i.peilut = decodeURIComponent(r.peilut).replace(/\+/g, " ");
  i.extUrl.indexOf("TochnitChisachonYeledInfo.aspx") >= 0 && (i.ChisachonYeled = true);
  i.extUrl.indexOf("Insurance/Maasik/") >= 0 && (i.MeidaMaasikim = true);
}]).controller("AppErrorController", ["$rootScope", "$scope", "AUTH_EVENTS", "$window", function (n, t, i, r) {
  n.appError = null;
  n.$on("$stateChangeStart", function () {
    n.appError = null;
  });
  n.$on(i.specificServerError, function (t, i) {
    n.laddaLoading = false;
    n.appError = i;
    r.scrollTo(0, 0);
  });
  n.$on(i.serverError, function (t, i) {
    n.laddaLoading = false;
    n.appError = i ? i : "ארעה תקלה. אנא נסו לבצע פעולה זו מאוחר יותר.";
    r.scrollTo(0, 0);
  });
  n.$on(i.serverSuccess, function () {
    n.appError = null;
  });
  n.$on(i.notAuthorized, function () {
    n.appError = "אינך מורשה לביצוע פעולה זו";
  });
}]).controller("SideNavController", ["$rootScope", "$scope", "PUBLIC_SIDE_NAV", "$location", "AuthSession", "$state", "$window", "$modal", "BtlFormsService", function (n, t, i, r, u, f, e, o, s) {
  t.$location = r;
  t.sideNav = i;
  n.AccessibilityOn = e.sessionStorage.AccessibilityOn == undefined ? false : true;
  n.applyAccebilityCss(n.AccessibilityOn);
  t.isExternal = function (n) {
    return n.linkType == 11;
  };
  t.getMaanakNechutData = function () {
    var n = t.$new(), i = o.open({templateUrl: "Partials/Modal/MaanakNechut.html?ts=" + Number(new Date), controller: "MaanakNechutModalCtrl", scope: n, backdrop: "static", size: "lg"});
  };
  t.getMevBankDetails = function () {
    var n = t.$new(), i = o.open({templateUrl: "Partials/Modal/MaanakEzrach.html?ts=" + Number(new Date), controller: "MaanakEzrachModalCtrl", scope: n, backdrop: "static", size: "lg"});
  };
  n.$on("ApplySideNav", function (i, r) {
    var u, f;
    n.BtlMobile = localStorage.BtlMobile;
    t.currentUser = r.currentUser;
    t.sideNav = r.sideNav;
    t.sideNavMnk = r.sideNavMnk;
    u = _.filter(t.sideNav, function (n) {
      return n.name === "ContactUs";
    });
    u && u.length > 0 && (t.sideNavContactUs = u[0]);
    f = _.filter(t.sideNav, function (n) {
      return n.name === "CallUs";
    });
    f && f.length > 0 && (t.sideNavCallUs = f[0]);
  });
  n.$on("$stateChangeSuccess", function (t) {
    u.setIsActive();
    n.title = f.current.title ? f.current.title : t.currentScope.title;
  });
  n.$on("$stateChangeStart", function () {
    t.$rootScope = null;
  });
  t.ShowTviatMaanakHagdalatGilPrisha = function () {
    var n = u.getUser();
    return n != null && n.ochlusin != null && n.ochlusin.Atidi_1 != null && n.ochlusin.Atidi_1.split(";").length > 3 ? n.ochlusin.Atidi_1.split(";")[3] == "Y" : false;
  };
  t.openTviatMaanakHagdalatGilPrishaBtlForm = function () {
    var i = t.$new(), r;
    i.vm = n.mevutachContactDetails;
    i.currentUser = u.getUser();
    i.close = function () {
      r.dismiss("cancel");
    };
    i.goToConfirmDetails = function () {
      r.dismiss("cancel");
      n.DoNotShowInitiaContactDetails = true;
      f.go("MevutachConfirmDetails");
    };
    i.openTvia = function () {
      r.dismiss("cancel");
      s.openBtlForm("Prisha62");
    };
    r = o.open({templateUrl: "Partials/Modal/MevutachContactDetails.html?ts=" + Number(new Date), scope: i, backdrop: "static", size: "lg"});
  };
}]).controller("MaanakEzrachModalCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", "dataService", function (n, t, i, r, u, f, e, o) {
  f.showPending = true;
  f.appError = null;
  f._isMMCollapsed = false;
  o.post("PersonalApi/GetHeshbonBankNew").success(function (t) {
    if (f.showPending = false, n.BankStatus = t.BankStatus, n.TashlumDate = t.TashlumDate, n.SibatShaguy = t.SibatShaguy, n.AlreadyPaid = t.AlreadyPaid, n.KizuzMale = t.KizuzMale, n.TashlumDate == null && t.MaanaksDetails.length >= 2 && (n.AlreadyPaid = true), n.SchumMaanak = t.SchumMaanak, n.MaanaksDetails = t.MaanaksDetails, n.UpdatePermited = t.UpdatePermited, n.SchumKizuz = t.SchumKizuz, n.SchumBeforeKizuz = t.SchumBeforeKizuz, n.Shaguy = t.Shaguy, n.MaanakTitle = null, n.SchumMaanak == "1,500" && (n.MaanakTitle = "(מענק מוגדל)"), n.curBankName = null, t.HeshbonDetails && (t.BankStatus == 0 || t.BankStatus == 1 || t.BankStatus == 2 || t.BankStatus == 3 || t.BankStatus == -3)) {
      var i = _.find(n.bankNames, function (n) {
        return n.Value == t.BankCodeStr;
      });
      i && (n.curBankName = i.Text);
      n.ChnDetails = n.curBankName + " " + t.HeshbonDetails;
      n.Bank = t.Bank;
      n.Snif = t.Snif;
      n.Heshbon = t.Heshbon;
    } else n.ChnDetails = "אין נתון";
    angular.element("#maanakEzrachDiv").focus();
  });
  n.close = function () {
    t.close();
  };
  n.bankNames = globals.bankNames;
  n.editMeBankDetails = function () {
    i.go("PersonalHeshbonBankMe", {nose: "mev"});
  };
  n.getChnDetails = function (t, i, r) {
    var u = null, f;
    return t && (f = n.getBankName(t), u = f + " (" + t.substring(2) + "), סניף: " + i + ", חשבון: " + r), u;
  };
  n.getBankName = function (t) {
    var i = _.find(n.bankNames, function (n) {
      return n.Value == t;
    });
    return i ? i.Text : null;
  };
  f.$on(e.serverError, function () {
    n.close();
  });
}]).controller("SessionEndedModalCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", function (n, t, i, r, u, f, e) {
  n.close = function () {
    t.dismiss("cancel");
    localStorage.BtlMobile ? f.$broadcast(e.loginCanceled) : window.location = n.LogoutUrl;
  };
}]).controller("NeedUserActionModalCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", function (n, t, i, r, u, f, e) {
  var o = setInterval(function () {
    n.seconds > 1 ? (n.seconds -= 1, n.$apply()) : n.close();
  }, 1e3);
  n.continueWork = function () {
    clearInterval(o);
    r.refreshToken();
    u.setIsActive();
    t.close();
  };
  n.close = function () {
    clearInterval(o);
    t.dismiss("cancel");
    f.$broadcast(e.loginCanceled);
  };
}]).controller("TatBerurCtrl", ["$scope", "$stateParams", "AuthSession", "dataService", "$state", "$modal", "$rootScope", function (n, t, i, r, u, f, e) {
  var c = i.getUser(), l = t.id, o, h, s;
  if (l) for (n.tikim = [], o = 0; o < c.sideNav.length; o++) {
    if (angular.isObject(c.sideNav[o].subNav)) for (h = c.sideNav[o].subNav, s = 0; s < h.length; s++) if (h[s].id == l) {
      n.tikim = h[s].subNav;
      break;
    }
    if (n.tikim.lenth > 0) {
      e.title = n.tikim[0].title + "- תפריט משני";
      break;
    }
  }
}]).controller("MichtavimCtrl", ["$scope", "$stateParams", "AuthSession", "dataService", "$state", "$modal", "$window", "$rootScope", function (n, t, i, r, u, f, e, o) {
  n.$root.title = "מכתבים";
  n.protocolView = false;
  n.title = "מכתבים";
  n.ListPeriod = "- 24 החודשים האחרונים";
  var h = (new Date).getFullYear(), s = h;
  n.MichShanim = ["בחר שנה", s, --s, --s, --s, --s, --s, --s];
  n.CurMichtavInd = null;
  n.CurTviaInd = null;
  o.CurrentMichtavInd != null && o.CurrentMichtavInd >= 0 && (n.CurMichtavInd = o.CurrentMichtavInd);
  o.CurrentTviaInd != null && o.CurrentTviaInd >= 0 && (n.CurTviaInd = o.CurrentTviaInd);
  n.vm = {};
  o.MichtavimShana ? (n.MichShanim[0] == "בחר שנה" && o.MichtavimShana != "בחר שנה" && n.MichShanim.splice(0, 1), n.MichtShana = o.MichtavimShana, r.post("MichtavimApi/MichtavimList?prtcl=false&shana=" + o.MichtavimShana).success(function (t) {
    n.vm = t;
    n.vm.Letters.length > 0 && s > 0 && (n.ListPeriod = "שנת " + o.MichtavimShana);
  })) : (n.MichtShana = "בחר שנה", r.post("MichtavimApi/MichtavimList?prtcl=false").success(function (t) {
    n.vm = t;
  }));
  n.showMichtavimList = function (t) {
    n.MichShanim[0] == "בחר שנה" && n.MichShanim.splice(0, 1);
    o.MichtavimShana = t;
    r.post("MichtavimApi/MichtavimList?prtcl=false&shana=" + t).success(function (i) {
      n.vm = i;
      n.vm.Letters.length > 0 && t > 0 && (n.ListPeriod = "שנת " + t);
    });
  };
  n.downloadLetter = function (t, r, u) {
    u ? (o.CurrentMichtavInd = r, o.CurrentTviaInd = null) : (o.CurrentMichtavInd = null, o.CurrentTviaInd = r);
    var f = o.BASE_URL + "/Michtavim/GetMichtav?token=" + i.getToken() + "&BtlSubjectName=" + t.BtlSubjectName + "&DocumentSubType=" + t.DocumentSubType + "&FileName=" + (t.FileName || "") + "&LetterId=" + (t.letterId || "0") + "&LetterDate=" + (t.LetterDate || "") + "&Oid=" + t.Oid + "&Kod_Maarechet=" + t.Kod_Maarechet + "&Attachments=" + (t.Attachments || "") + "&NotAccessible=" + (!t.isAccessible || "");
    n.downloadPdfDocument(f, t.BtlSubjectName);
  };
  n.downloadPdfDocument = function (n, t) {
    var i = n + "&api=1";
    r.getDocument(i).success(function (n) {
      var i = new Uint8Array(n);
      String.fromCharCode(i[0]) == "{" ? toastr.error(JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, i)))).ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"}) : (saveAs(new Blob([n]), t + ".pdf"), toastr.success('הקובץ: "' + t + '" הורד בהצלחה', "הורדה", {positionClass: "toast-top-left"}));
    });
  };
  n.showLetter = function (n, t, r) {
    r ? (o.CurrentMichtavInd = t, o.CurrentTviaInd = null) : (o.CurrentMichtavInd = null, o.CurrentTviaInd = t);
    var f = o.BASE_URL + "/Michtavim/GetMichtav?token=" + i.getToken() + "&BtlSubjectName=" + n.BtlSubjectName + "&DocumentSubType=" + n.DocumentSubType + "&FileName=" + (n.FileName || "") + "&LetterId=" + (n.letterId || "0") + "&LetterDate=" + (n.LetterDate || "") + "&Oid=" + n.Oid + "&Kod_Maarechet=" + n.Kod_Maarechet + "&Attachments=" + (n.Attachments || "") + "&NotAccessible=" + (!n.isAccessible || "");
    u.go("showPdf", {url: encodeURIComponent(f), track: "/Michtavim/" + n.BtlSubjectName, shem: n.BtlSubjectName, isAccessibleForSR: n.isAccessibleForScreenReader});
  };
}]).controller("PdfNewWindowModalCtrl", ["$scope", "$modalInstance", "$state", "AuthSession", "$window", function (n, t, i, r, u) {
  n.showPdf = function () {
    t.dismiss("cancel");
    u.open(n.url, "_blank");
  };
  n.showAccessibleDoc = function () {
    t.dismiss("cancel");
    u.open(n.url + "&preview=true", "_blank");
  };
  n.close = function () {
    t.dismiss("cancel");
  };
}]).controller("ProtocolsCtrl", ["$scope", "$stateParams", "AuthSession", "dataService", "$state", "$modal", "$window", "$rootScope", function (n, t, i, r, u, f, e, o) {
  n.$root.title = "פרוטוקולים";
  n.protocolView = true;
  n.title = "פרוטוקולים";
  n.CurProtocolInd = null;
  o.CurrentProtocolInd != null && o.CurrentProtocolInd >= 0 && (n.CurProtocolInd = o.CurrentProtocolInd);
  n.vm = {};
  r.post("MichtavimApi/MichtavimList?prtcl=true").success(function (t) {
    n.vm = t;
  });
  n.downloadLetter = function (t, r) {
    o.CurrentProtocolInd = r;
    var u = o.BASE_URL + "/Michtavim/GetMichtav?token=" + i.getToken() + "&BtlSubjectName=" + t.BtlSubjectName + "&DocumentSubType=" + t.DocumentSubType + "&FileName=" + (t.FileName || "") + "&LetterId=" + (t.letterId || "0") + "&LetterDate=" + (t.LetterDate || "") + "&Oid=" + t.Oid + "&Kod_Maarechet=" + t.Kod_Maarechet + "&Attachments=" + (t.Attachments || "") + "&NotAccessible=" + (!t.isAccessible || "");
    n.downloadPdfDocument(u, t.BtlSubjectName);
  };
  n.downloadPdfDocument = function (n, t) {
    var i = n + "&api=1";
    r.getDocument(i).success(function (n) {
      var i = new Uint8Array(n);
      String.fromCharCode(i[0]) == "{" ? toastr.error(JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, i)))).ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"}) : (saveAs(new Blob([n]), t + ".pdf"), toastr.success('הקובץ: "' + t + '" הורד בהצלחה', "הורדה", {positionClass: "toast-top-left"}));
    });
  };
  n.showLetter = function (n, t) {
    o.CurrentProtocolInd = t;
    var r = o.BASE_URL + "/Michtavim/GetMichtav?token=" + i.getToken() + "&BtlSubjectName=" + n.BtlSubjectName + "&DocumentSubType=" + n.DocumentSubType + "&FileName=" + (n.FileName || "") + "&LetterId=" + (n.letterId || "0") + "&LetterDate=" + (n.LetterDate || "") + "&Oid=" + n.Oid + "&Kod_Maarechet=" + n.Kod_Maarechet + "&Attachments=" + (n.Attachments || "") + "&NotAccessible=" + (!n.isAccessible || "");
    u.go("showPdf", {url: encodeURIComponent(r), track: "/Michtavim/protocols/" + n.BtlSubjectName, shem: n.BtlSubjectName, isAccessibleForSR: n.isAccessibleForScreenReader});
  };
}]).controller("IshurimCtrl", ["$scope", "$stateParams", "AuthSession", "AUTH_EVENTS", "dataService", "$state", "$modal", "$rootScope", "$window", function (n, t, i, r, u, f, e, o, s) {
  function it() {
    for (var n = [], t = (new Date).getFullYear(); t > 2014;) n.push(t--);
    return n;
  }
  var c, p, l, h;
  if (n.$root.title = "אישורים", n.title = "אישורים", n.viturSucceededMsg = null, o.CurrentIshurInd != null && o.CurrentIshurInd >= 0 && (n.CurIshurInd = o.CurrentIshurInd), s.sessionStorage.vitur && (n.viturSucceededMsg = s.sessionStorage.vitur, s.sessionStorage.removeItem("vitur")), c = i.getUser(), c || (window.location = window.location.origin + window.location.pathname), c.name && (n.strUserName = c.name), c.currentZehut && c.currentZehut.P_teudat_zehut && (n.strUserId = c.currentZehut.P_teudat_zehut), n.Tkufa = {}, p = t.nose, p && p != "all") for (n.Ishurim = [], h = 0; h < c.ishurim.length; h++) l = c.ishurim[h], (l.Kod_nose == p || p == "GN" && l.Action == "Ishur_hatavot") && (n.Ishurim.push(l), l.First && (n.$root.title = "אישורים - " + l.Shem_nose, n.title = n.$root.title)); else n.Ishurim = c.ishurim;
  for (h = 0; h < n.Ishurim.length; h++) l = n.Ishurim[h], l.SugParam == "?" && (n.Tkufa[h] = "?");
  var w = (new Date).getFullYear(), a = w, y = w, b = w, v = w, k = [], d = new Date;
  for (h = 1; h < 12; h++) {
    var g = new Date(d.setMonth(d.getMonth() - 1)), nt = g.getMonth() + 1, tt = g.getFullYear();
    k.push(nt + "/" + tt);
  }
  n.Tkufot = {shana: [a, --a, --a, --a, --a, --a, --a, --a], shana_6: [--y, --y, --y, --y, --y, --y], shana_2: [--b, --b], shana_7: [--v, --v, --v, --v, --v, --v, --v], shana_2015: it(), tlat: k};
  n.downloadPdf = function (t, r, f, h, c, l, a, v, y, p, w) {
    var k, b, d;
    if (w && (o.curZehutDisabledChild = w), o.CurrentIshurInd = y, h == "?") {
      u.post("IshurimApi/IshurYears?nose=" + r).success(function (i) {
        if (i.ErrorMessage) {
          toastr.error(i.ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"});
          return;
        }
        if (i.List.length == 1) h = parseInt(i.List[0].Value), n.downloadPdf(t, r, f, h, c, l, a, v + " לשנת " + h); else {
          var u = n.$new();
          u.ishur = t;
          u.tik = f;
          u.snif = c;
          u.List = i.List;
          e.open({templateUrl: "Partials/Modal/IshurYears.html?ts=" + Number(new Date), controller: "IshurYearsModalCtrl", scope: u});
          return;
        }
      });
      return;
    }
    h && (k = new String(h).split("/"), k.length > 1 && (h = k[0] + k[1].substring(2)));
    s.sessionStorage.vitur && s.sessionStorage.removeItem("vitur");
    b = "Ishurim/" + t + "?token=" + i.getToken() + "&tkufa=" + h + "&tik=" + f + "&snif=" + c + "&tafkid=" + l + "&sugGimla=" + p;
    switch (t) {
      case "Nechut_mekablim":
        return b = "IshurimApi/" + t, d = {Sug_Gimla: p, Tik: f}, u.post(b, d).success(function (t) {
          if (t.ErrorMessage) {
            toastr.error(t.ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"});
            return;
          }
          if (t.List.length == 1) b = "Ishurim/Nechut_mekablim?token=" + i.getToken() + "&tkufa=" + h + "&sugGimla=" + p + "&tik=" + f + "&siduri=" + t.List[0].Value, n.downloadPdfDocument(b, v); else if (t.List.length > 1) {
            var r = n.$new();
            r.tik = f;
            r.sugGimal = p;
            r.Shanim = n.Tkufot.shana;
            r.List = t.List;
            e.open({templateUrl: "Partials/Modal/Nechut_mekablim.html?ts=" + Number(new Date), controller: "Nechut_mekablimModalCtrl", scope: r});
            return;
          }
        }), false;
      default:
        n.downloadPdfDocument(b, v);
    }
  };
  n.downloadPdfDocument = function (n, t) {
    var i = n + "&api=1";
    u.getDocument(i).success(function (n) {
      var i = new Uint8Array(n);
      String.fromCharCode(i[0]) == "{" ? toastr.error(JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, i)))).ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"}) : (saveAs(new Blob([n]), t + ".pdf"), toastr.success('הקובץ: "' + t + '" הורד בהצלחה', "הורדה", {positionClass: "toast-top-left"}));
    });
  };
  n.showPdf = function (t, r, h, c, l, a, v, y, p, w) {
    var k, b, d;
    if (o.CurrentIshurInd = p, c == "?") {
      u.post("IshurimApi/IshurYears?nose=" + r).success(function (i) {
        if (i.ErrorMessage) {
          f.go("showPdf", {url: undefined, errMsg: i.ErrorMessage, track: "/Ishurim/" + t + "/" + i.ErrorMessage});
          return;
        }
        if (i.List.length == 1) c = parseInt(i.List[0].Value), n.showPdf(t, r, h, c, l); else {
          var u = n.$new();
          u.ishur = t;
          u.tik = h;
          u.snif = l;
          u.List = i.List;
          e.open({templateUrl: "Partials/Modal/IshurYears.html?ts=" + Number(new Date), controller: "IshurYearsModalCtrl", scope: u});
          return;
        }
      });
      return;
    }
    c && (k = new String(c).split("/"), k.length > 1 && (c = k[0] + k[1].substring(2)));
    s.sessionStorage.vitur && s.sessionStorage.removeItem("vitur");
    b = "Ishurim/" + t + "?token=" + i.getToken() + "&tkufa=" + c + "&tik=" + h + "&snif=" + l + "&tafkid=" + a + "&sugGimla=" + w;
    switch (t) {
      case "Nechut_mekablim":
        return b = "IshurimApi/" + t, d = {Sug_Gimla: w, Tik: h}, u.post(b, d).success(function (r) {
          if (r.ErrorMessage) {
            f.go("showPdf", {url: undefined, errMsg: r.ErrorMessage, track: "/Ishurim/" + t + "/" + r.ErrorMessage});
            return;
          }
          if (r.List.length == 1) b = "Ishurim/Nechut_mekablim?token=" + i.getToken() + "&tkufa=" + c + "&sugGimla=" + w + "&tik=" + h + "&siduri=" + r.List[0].Value, f.go("showPdf", {url: encodeURIComponent(b), track: "/Ishurim/" + t}); else if (r.List.length > 1) {
            var u = n.$new();
            u.tik = h;
            u.sugGimal = w;
            u.Shanim = n.Tkufot.shana;
            u.List = r.List;
            e.open({templateUrl: "Partials/Modal/Nechut_mekablim.html?ts=" + Number(new Date), controller: "Nechut_mekablimModalCtrl", scope: u});
            return;
          }
        }), false;
      default:
        f.go("showPdf", {url: encodeURIComponent(b), track: "/Ishurim/" + t, shem: y});
    }
  };
}]).controller("IshurYearsModalCtrl", ["$scope", "$modalInstance", "$state", "AuthSession", "$window", "dataService", function (n, t, i, r, u, f) {
  n.showPdf = function (u) {
    t.dismiss("cancel");
    var f = "Ishurim/" + n.ishur + "?token=" + r.getToken() + "&tkufa=" + u + "&tik=" + n.tik + "&snif=" + n.snif;
    i.go("showPdf", {url: encodeURIComponent(f), track: "/Ishurim/" + n.ishur});
  };
  n.downloadPdf = function (i) {
    t.dismiss("cancel");
    var u = "Ishurim/" + n.ishur + "?token=" + r.getToken() + "&tkufa=" + i + "&tik=" + n.tik + "&snif=" + n.snif;
    n.downloadPdfDocument(u, "אישור מס הכנסה לשנת " + i);
  };
  n.downloadPdfDocument = function (n, t) {
    var i = n + "&api=1";
    f.getDocument(i).success(function (n) {
      var i = new Uint8Array(n);
      String.fromCharCode(i[0]) == "{" ? toastr.error(JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, i)))).ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"}) : (saveAs(new Blob([n]), t + ".pdf"), toastr.success('הקובץ: "' + t + '" הורד בהצלחה', "הורדה", {positionClass: "toast-top-left"}));
    });
  };
  n.showAccessibleDoc = function (i, f) {
    t.dismiss("cancel");
    var e = null;
    e = n.List.length == 1 ? "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + n.tkufa + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + n.List[0].Value + "&preview=true" : "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + f + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + i + "&preview=true";
    u.open(e, "_blank");
  };
  n.close = function () {
    t.dismiss("cancel");
  };
}]).controller("QRCodeRegistrationCtrl", ["$state", "$scope", "$rootScope", "$modal", "$stateParams", "dataService", "AuthSession", "SvcUUID", "AuthService", "SvcPhone", "AUTH_EVENTS", "SvcEmail", "vcRecaptchaService", "$window", function (n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
  t.vm = {token: u.token, KSodi: n.$current.url.prefix.indexOf("/ksodi/") > 0};
  t.Months = globals.Months;
  t.IdentificationTbl = [{title: "חשבון בנק", selected: false, id: "bdBtn"}, {title: "כרטיס אשראי", selected: false, id: "ccBtn"}];
  t.vm.StationId = v.localStorage.getItem("BLSIStationId");
  t.vm.StationId || (t.vm.StationId = o.generateUUID(), v.localStorage.setItem("BLSIStationId", t.vm.StationId));
  sessionStorage.OrgUrl && sessionStorage.removeItem("OrgUrl");
  t.mobilePrefixes = globals.mobilePrefixes;
  t.minDate = "01/01/1900";
  t.vm.showLoginLink = false;
  t.vm.recaptcha = false;
  t.captchaWgtId = null;
  t.captchaCreated = function (n) {
    t.captchaWgtId = n;
  };
  f.post("QRCodeApi/Registration", t.vm).success(function (n) {
    n.BirthDate = null;
    n.IdPublishDate = null;
    n.IdDarconEndDate = null;
    t.vm = n;
    t.vm.PhonePrefix == null && (t.vm.PhonePrefix = "");
  });
  t.submit = function () {
    if (!t.vm.recaptcha) {
      t.vm.ErrorCode = "invalid-captcha";
      i.$root.$broadcast("form-validation-failed");
      return;
    }
    t.vm.showLoginLink = false;
    t.vm.token ? (t.vm.StationId = v.localStorage.getItem("BLSIStationId"), t.vm.StationId || (t.vm.StationId = o.generateUUID(), v.localStorage.setItem("BLSIStationId", t.vm.StationId)), t.bankDetailsLink = false, t.vm.showLoginLink = false, f.post("QRCodeApi/CompleteRegistration", t.vm).success(function (n) {
      angular.isNumber(n.CellTxtMsgEnabled) && (n.CellTxtMsgEnabled = n.CellTxtMsgEnabled.toString());
      angular.isNumber(n.CellMsgType) && (n.CellMsgType = n.CellMsgType.toString());
      t.vm = n;
      t.vm.AlertType === "Error" && (t.vm.AlertMessage && t.vm.AlertMessage.indexOf("*") > -1 && (t.bankDetailsLink = true, t.vm.AlertMessage = t.vm.AlertMessage.replace("*", "<br />")), v.scrollTo(0, 0));
    })) : (t.vm.StationId = v.localStorage.getItem("BLSIStationId"), t.vm.StationId || (t.vm.StationId = o.generateUUID(), v.localStorage.setItem("BLSIStationId", t.vm.StationId)), t.bankDetailsLink = false, f.post("QRCodeApi/SendUserDetails", t.vm).success(function (n) {
      if (angular.isNumber(n.CellTxtMsgEnabled) && (n.CellTxtMsgEnabled = n.CellTxtMsgEnabled.toString()), angular.isNumber(n.CellMsgType) && (n.CellMsgType = n.CellMsgType.toString()), t.vm = n, t.vm.PhonePrefix == null && (t.vm.PhonePrefix = ""), t.vm.AlertType === "Error") v.scrollTo(0, 0); else if (t.vm.AlertType === "Success") {
        var i = Number(t.vm.CellMsgType);
        y({vm: t.vm, ktovetValue: t.vm.AlertMessage}, function (n, i) {
          switch (n) {
            case "ok":
            case "error":
              angular.isNumber(i.CellTxtMsgEnabled) && (i.CellTxtMsgEnabled = i.CellTxtMsgEnabled.toString());
              angular.isNumber(i.CellMsgType) && (i.CellMsgType = i.CellMsgType.toString());
              t.vm = i;
              t.vm.AlertType === "Error" && t.vm.AlertMessage && t.vm.AlertMessage.indexOf("*") > -1 && (t.bankDetailsLink = true, t.vm.AlertMessage = t.vm.AlertMessage.replace("*", "<br />"));
              v.scrollTo(0, 0);
          }
        });
      }
    }));
  };
  var y = function (n, i) {
    var u = t.$new(), f, e;
    return u.vm = n.vm, u.ktovetValue = n.ktovetValue, u.nextStep = i, f = "במסרון (SMS)", Number(t.vm.CellMsgType) === 1 && (f = "הודעה קולית"), f === "הודעה קולית" ? (u.ktovet = " בטלפון הנייד שמספרו:", u.cellMsgVoiceCall = f) : u.ktovet = f + " לטלפון נייד שמספרו:", u.ktovetValue = n.ktovetValue, u.CellMsgType = t.vm.CellMsgType, e = 0, e = Number(t.vm.CellMsgType) == 0 ? 25e3 : 6e4, u.resendMsgSuspension = e, r.open({templateUrl: "Partials/Modal/RegImutVerification.html?ts=" + Number(new Date), controller: "RegOptVerificationModalCtrl", scope: u, size: "md", backdrop: "static"}), false;
  };
  t.zihuyListBtnClicked = function (n) {
    t.vm.IdentificationOpt = null;
    for (var i = 0; i < t.IdentificationTbl.length; i++) !n.selected && t.IdentificationTbl[i].title !== n.title && t.IdentificationTbl[i].selected && (t.IdentificationTbl[i].selected = false);
    n.title == "כרטיס אשראי" ? n.selected ? t.vm.CreditCardIdentification = false : (t.vm.CreditCardIdentification = true, t.vm.BankDetailsIdentification = false, t.vm.IdentificationOpt = "CC") : n.selected ? t.vm.BankDetailsIdentification = false : (t.vm.BankDetailsIdentification = true, t.vm.CreditCardIdentification = false, t.vm.IdentificationOpt = "BD");
    t.clearFields();
    n.selected = !n.selected;
  };
  t.valExpMonth = function (n) {
    var i = t.vm;
    return i.TokefKartisShana == i.CurrentYear && n < i.CurrentMonth ? false : i.TokefKartisShana == 0 ? false : true;
  };
  t.PhoneIsCorrect = function (n) {
    return t.vm.PhonePrefix || n ? h.FullPhoneNumberIsCorrect(t.vm.PhonePrefix, n, false) : true;
  };
  t.goTo = function (n) {
    n && setTimeout(function () {
      n == "IdentificationOpt" && (n = "bdBtn");
      document.querySelector("[id $= " + n + "]") && document.querySelector("[id $= " + n + "]").focus();
    }, 110);
  };
  i.$on(c.validationErrorSummary, function (n, i) {
    var u, r, f;
    if (t.vm.AlertMessage = null, n.currentScope.$state.$current.name === "QRCodeRegistrationUser") {
      if (t.vm.AlertType = "Error", t.summaryErrors = [], i.length > 0) for (u = 0; u < i.length; u++) i[u].Collection || (r = i[u].ElementId.split("-"), f = "", angular.isArray(r) && r.length > 1 ? f = r[1] : (r = i[u].ElementId.split("_"), angular.isArray(r) && r.length > 1 && (f = r[1]))), t.summaryErrors.push({stepNo: null, Msg: i[u].ErrorMessage, propertyName: f, recIndex: null});
      i.length > 0 && setTimeout(function () {
        t.$apply(function () {
          angular.element("#errorLnk_0").focus();
        });
      }, 400);
      v.scrollTo(0, 0);
    }
  });
  t.clearFields = function () {
    (t.vm.IdentificationOpt == "CC" || t.vm.IdentificationOpt == null) && (t.vm.BankCode = null, t.vm.BankBrunch = null, t.vm.BankAccntNum = null, t.bankNames = null);
    (t.vm.IdentificationOpt == "BD" || t.vm.IdentificationOpt == null) && (t.bankNames = globals.bankNames, t.vm.MisparKartis = null, t.vm.TokefKartisShana = 0, t.vm.TokefKartisChodesh = 0, t.vm.CVV = null);
  };
  t.CellMsgTypeValid = function () {
    return t.vm.CellMsgType == "0" || t.vm.CellMsgType == "1";
  };
  t.CellTxtMsgEnabledValid = function () {
    return t.vm.CellTxtMsgEnabled == "0" || t.vm.CellTxtMsgEnabled == "1";
  };
  t.CreditCardSelected = function () {
    return t.vm.IdentificationOpt === "CC";
  };
  t.BankSelected = function () {
    return t.vm.IdentificationOpt === "BD";
  };
  t.IsEmailExists = function () {
    return t.vm.CellMsgType == "1";
  };
  t.IsEmailFilled = function () {
    return t.vm.Email != null && t.vm.Email !== "";
  };
  t.CellTxtMsgEnabledChanged = function () {
    t.vm.CellMsgType = t.vm.CellTxtMsgEnabled == "1" ? "1" : "0";
  };
  t.phoneChanged = function () {
    t.vm.token = null;
    t.vm.MobilePhoneLocated = true;
    t.vm.AlertMobilePhoneNotLocated = false;
    t.vm.IdentificationOpt = null;
    t.clearFields();
    t.vm.AlertMessage = null;
    t.vm.AlertType = null;
  };
  t.ShowIdPublishDate = function () {
    return t.IsDarconId() && t.vm.userId != undefined && t.vm.userId != null && t.vm.userId !== "" ? false : true;
  };
  t.IsDarconId = function () {
    return t.vm.userId && t.vm.userId !== "" && t.vm.userId.length == 9 && t.vm.userId.startsWith("77") ? true : false;
  };
  t.IsRegularId = function () {
    return !t.IsDarconId();
  };
  t.EmailAddressValid = function (n) {
    return n ? l.EmailAddressValid(n) : true;
  };
  t.IsChecked = function (n) {
    return n;
  };
  t.BankChosenIsDoar = function () {
    return t.vm.BankCode === "1009";
  };
  t.BankCodeChanged = function () {
    t.BankChosenIsDoar() && (t.vm.BankBrunch = 1);
  };
}]).controller("RegOptVerificationModalCtrl", ["$scope", "$rootScope", "$modalInstance", "$window", "SvcPhone", "dataService", "AuthSession", "vcRecaptchaService", function (n, t, i, r, u, f) {
  n.ShowResendOption = false;
  n.setTO = setTimeout(function () {
    t.safeApply(function () {
      n.ShowResendOption = true;
    });
  }, n.resendMsgSuspension);
  n.close = function () {
    n.vm.MdlAlertMessage = null;
    n.vm.MdlAlertType = null;
    n.vm.AlertMessage = null;
    n.vm.AlertType = null;
    n.vm.token = null;
    clearTimeout(n.setTO);
    i.dismiss("cancel");
    n.nextStep("resend", null);
  };
  n.ResendVerficationCode = function () {
    clearTimeout(n.setTO);
    i.dismiss("cancel");
    n.nextStep("resend", null);
  };
  n.confirmVerifcationCode = function () {
    clearTimeout(n.setTO);
    n.vm.MdlAlertMessage = null;
    n.vm.MdlAlertType = null;
    n.vm.KodImut ? (t.laddaLoading = true, n.vm.OptCode = n.vm.KodImut, n.vm.CellMsgType = Number(n.CellMsgType), n.vm.bankDetailsLink = false, n.vm.showLoginLink = false, f.post("QRCodeApi/CompleteRegistration", n.vm).success(function (r) {
      if (t.laddaLoading = false, r.AlertType === "Error") {
        var u = Number(r.ErrorCode);
        switch (u) {
          case 1:
            n.vm.MdlAlertMessage = "קוד האימות אינו תואם לקוד שנשלח אליך, נסה שנית";
            n.vm.MdlAlertType = "Error";
            break;
          case 3:
            n.vm.MdlAlertMessage = "פג תוקפו של קוד האימות";
            n.vm.MdlAlertType = "Resend";
            break;
          case 4:
            n.vm.MdlAlertMessage = "פג תוקפו של קוד האימות";
            n.vm.MdlAlertType = "Resend";
            break;
          default:
            n.nextStep("error", r);
            i.dismiss("cancel");
        }
      } else n.nextStep("ok", r), i.dismiss("cancel");
    })) : (n.vm.MdlAlertMessage = "יש למלא את קוד האימות שנשלח אליך", n.vm.MdlAlertType = "Error");
  };
  n.CheckKodImutIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[0-9]{6}$", t);
  };
  n.checkRegIfNotNull = function (n, t) {
    return t && t !== "" ? t.match(n) ? true : false : true;
  };
}]).controller("ForgotPasswordCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "SvcUUID", "AuthService", "SvcPhone", "AUTH_EVENTS", "SvcEmail", "vcRecaptchaService", function (n, t, i, r, u, f, e, o, s, h, c, l, a) {
  e.getUser() && e.destroy();
  t.vm = {};
  t.vm.StationId = u.localStorage.getItem("BLSIStationId");
  t.vm.StationId || (t.vm.StationId = o.generateUUID(), u.localStorage.setItem("BLSIStationId", t.vm.StationId));
  t.mobilePrefixes = globals.mobilePrefixes;
  t.CaptchaTextValid = true;
  t.reCaptchaIsInvalid = false;
  t.captchaWgtId = null;
  t.captchaCreated = function (n) {
    t.captchaWgtId = n;
  };
  f.post("ForgotPasswordApi/ForgotPassword").success(function (n) {
    t.vm = n;
    t.vm.PhonePrefix == null && (t.vm.PhonePrefix = "");
    t.vm.BirthYear == 0 && (t.vm.BirthYear = null);
  });
  t.submit = function () {
    var n = null;
    t.vm.AlertType = null;
    t.vm.AlertMessage = null;
    switch (t.vm.CurrentStep) {
      case "UserDetails":
        n = "ResetPassword";
        break;
      case "TemporaryCode":
        n = "ProcessTempCode";
    }
    if (t.vm.CurrentStep !== "UserDetails" || Boolean(t.vm.PhoneNumber || t.vm.PhonePrefix || t.vm.Email)) {
      if (n) {
        if (n === "ResetPassword" && !t.vm.recaptcha) {
          t.vm.ErrorCode = "invalid-captcha";
          i.$root.$broadcast("form-validation-failed");
          return;
        }
        n === "ProcessTempCode" && (t.vm.StationId = u.localStorage.getItem("BLSIStationId"));
        f.post("ForgotPasswordApi/" + n, t.vm).success(function (i) {
          i.Token ? s.tempLogin(i) : setTimeout(function () {
            t.$apply(function () {
              if (t.captchaWgtId != null && a.reload(t.captchaWgtId), t.vm = i, u.scrollTo(0, 0), n === "ResetPassword") {
                var r = angular.element("h1").attr("tabindex", -1).css("outline", "none");
                r.length > 1 ? r[0].focus() : r.focus();
              }
            });
          }, 110);
        }).error(function () {});
      }
    } else t.vm.AlertType = "Error", t.vm.AlertMessage = "יש למלא כתובת דואר אלקטרוני ו/או מספר טלפון נייד", i.laddaLoading = false, i.$root.$broadcast("form-validation-failed"), u.scrollTo(0, 0);
  };
  t.navToLogin = function () {
    e.getToken() || (e.destroy(), window.location = window.location.origin + window.location.pathname);
  };
  t.printPage = function () {
    window.print();
  };
  t.PhoneIsCorrect = function (n) {
    return h.FullPhoneNumberIsCorrect(t.vm.PhonePrefix, n, true);
  };
  t.MobilePhoneExistAndUserDetailsStep = function () {
    return t.IsUserDetailsStep() && Boolean(t.vm.PhoneNumber || t.vm.PhonePrefix);
  };
  t.MobilePhoneNotExistAndUserDetailsStep = function () {
    return t.IsUserDetailsStep() && Boolean(!t.vm.PhoneNumber && !t.vm.PhonePrefix);
  };
  t.EmailExistAndUserDetailsStep = function () {
    return t.IsUserDetailsStep() && t.vm.Email != null && t.vm.Email !== "";
  };
  t.EmailNotExistAndUserDetailsStep = function () {
    return t.IsUserDetailsStep() && (t.vm.Email == null || t.vm.Email == "");
  };
  t.MobileAndEmailNotExistAndUserDetailsStep = function () {
    return t.IsUserDetailsStep() && (t.vm.Email == null || t.vm.Email == "") && Boolean(!t.vm.PhoneNumber && !t.vm.PhonePrefix);
  };
  t.IsUserDetailsStep = function () {
    var n = t.vm;
    return n.CurrentStep == "UserDetails";
  };
  t.IsTemporaryCodeStep = function () {
    var n = t.vm;
    return n.CurrentStep == "TemporaryCode";
  };
  t.CheckCaptchaEqual = function () {
    return t.CaptchaTextValid;
  };
  t.EmailAddressValid = function (n) {
    return n ? l.EmailAddressValid(n) : true;
  };
}]).controller("MashovCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "SvcEmail", function (n, t, i, r, u, f, e, o) {
  var s, h;
  t.vm = {};
  t.mobilePrefixes = globals.mobilePrefixes;
  s = e.getUser();
  s.name && (h = s.name.concat(" - "), t.userIdAndName = h.concat(s.currentZehut.P_teudat_zehut));
  f.post("MashovApi/Mashov").success(function (n) {
    t.vm = n;
    t.vm.From = t.userIdAndName;
    t.vm.PhonePrefix == null && (t.vm.PhonePrefix = "");
  });
  t.CheckPhoneIfNotNull = function (n) {
    return t.vm.PhonePrefix ? n !== null && n !== "" ? n.match("^[0-9]{7}$") ? true : false : false : n === null || n === "" ? true : false;
  };
  t.EmailAddressValid = function (n) {
    return o.EmailAddressValid(n);
  };
  t.submit = function () {
    f.post("MashovApi/SendMashov", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          t.vm.PhonePrefix == null && (t.vm.PhonePrefix = "");
          t.form.$setPristine();
          u.scrollTo(0, 0);
        });
      }, 110);
    });
  };
}]).controller("ContactUsCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "SvcEmail", "sideMenuValues", "$stateParams", function (n, t, i, r, u, f, e, o, s, h) {
  var c, a, v, y, p, l;
  t.vm = {};
  t.dictMahut = {};
  t.dictMahutHH = {};
  t.showForm = true;
  t.showFormPniya = true;
  t.snifim = globals.snifim;
  t.avtalaSubSubSubjects = [];
  t.avtalaSubSubjects = [];
  t.HHSubSubSubjects = [];
  t.HHSubSubjects = [];
  t.avt = _.find(s.getSideMenu(), function (n) {
    return n.name == "Avtala";
  });
  t.$on("$destroy", function () {
    t.vm.AlertTypePniya = null;
    t.vm.AlertMessagePniya = null;
    t.vm.AlertType = null;
    t.vm.AlertMessage = null;
    u.sessionStorage.setItem("contactUsData", JSON.stringify(t.vm));
  });
  t.tabs = {pakid: {active: true}, mashov: {}, mySnif: {}};
  t.selectTab = function (n) {
    t.tabs[n].active = true;
  };
  t.mobilePrefixes = globals.mobilePrefixes;
  c = e.getUser();
  c.name && (a = c.name.concat(" - "), t.userIdAndName = a.concat(c.currentZehut.P_teudat_zehut));
  t.userFirstName = c.firstName;
  t.userLastName = c.lastName;
  t.userSnif = c.snifPone;
  t.showEmailConfirmation = false;
  t.showEmailConfirmationPniya = false;
  t.isDisbaledChildLogin = c.currentZehut.disabledChildLoggedIn == true;
  v = window.location.protocol + "//www.btl.gov.il/_layouts/15/1037/BTL-JScripts/Data/ContactUsSubjects.js?ts=" + Number(new Date);
  $.getScript(v, function () {
    ContactUsSubjects && ContactUsSubjects.length > 0 && (t.subjects = _.filter(ContactUsSubjects, function (n) {
      return n.ShowInForm;
    }));
  });
  y = window.location.protocol + "//www.btl.gov.il/_layouts/15/1037/BTL-JScripts/Data/ContactUsAvtalaSubjects.js?ts=" + Number(new Date);
  $.getScript(y, function () {
    AvtalaSubjectsJSON && AvtalaSubjectsJSON.length > 0 && (t.avtalaSubSubjects = AvtalaSubjectsJSON, t.avtalaSubSubjects.forEach(function (n) {
      n.Text = n.Title;
      n.Value = n.Id;
      var i = new RegExp("#BERURAVTALA#", "g"), r = new RegExp("/#/Avtala/DivuachStatus", "g");
      n.SubSubjects && n.SubSubjects.length > 0 && n.SubSubjects.forEach(function (n) {
        n.Text = n.Title;
        n.Value = n.Id;
        t.avt || (n.OnSelectMsg += 'אם טרם הגשת תביעה לאבטלה, ניתן למלא ולשלוח און ליין (באופן מקוון) <a href="https://www.btl.gov.il/%D7%98%D7%A4%D7%A1%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/forms/unemployment_forms/Pages/Fill1500.aspx" target="_blank">בלחיצה כאן</a>');
        n.OnSelectMsg.indexOf("#BERURAVTALA#") !== -1 ? n.OnSelectMsg = n.OnSelectMsg.replace(i, "בירור אבטלה (מופיע בנושא אבטלה שבתפריט, אם הוגשה תביעה לאבטלה)") : n.OnSelectMsg.indexOf("/#/Avtala/DivuachStatus") !== -1 && (t.avt || (n.OnSelectMsg = n.OnSelectMsg.replace(r, "https://forms.btl.gov.il/Form/DStart/AvtalaCurrentState")));
      });
      t.dictMahut[n.Id] = n;
    }));
  });
  p = window.location.protocol + "//www.btl.gov.il/_layouts/15/1037/BTL-JScripts/Data/ContactUsHavtachatHachnassa.js?ts=" + Number(new Date);
  $.getScript(p, function () {
    HavtachatHachnassaSubjectsJSON && HavtachatHachnassaSubjectsJSON.length > 0 && (t.HHSubSubjects = HavtachatHachnassaSubjectsJSON, t.HHSubSubjects.forEach(function (n) {
      n.Text = n.Title;
      n.Value = n.Id;
      var r = new RegExp("#BERURGH#", "g"), u = new RegExp('<a href="https&#58;//forms.btl.gov.il/Form/DStart/TkufotAvtala" target="_blank" title="קישור לעמוד הדיווח על התחלת עבודה - נפתח בחלון חדש">כאן</a>', "g");
      n.SubSubjects && n.SubSubjects.length > 0 && n.SubSubjects.forEach(function (n) {
        var h, f, o;
        if (n.Text = n.Title, n.Value = n.Id, n.OnSelectMsg = n.OnSelectMsg, h = _.filter(c.sideNav, function (n) {
          return n.name == "Chovot";
        }), h.length == 0 && n.Id == "3413" && (n.OnSelectMsg = "לא נמצא חוב בהבטחת הכנסה שניתן לשלם."), h.length == 0 && n.Id == "3412" && (n.OnSelectMsg = "אנא רשמו את פרטי החוב עליו ברצונכם לברר ושלחו את הפניה."), n.OnSelectMsg.indexOf("#BERURGH#") !== -1) {
          if (r = new RegExp("#BERURGH#", "g"), f = _.find(s.getSideMenu(), function (n) {
            return n.name == "HavtachatHachnasa";
          }), f) {
            t.GHUrl = _.filter(f.subNav, function (n) {
              return n.id == "Berur";
            })[0].url;
            t.GHName = _.filter(f.subNav, function (n) {
              return n.id == "Berur";
            })[0].name;
            var l = t.GHName.replace("HavtachatHachnasaBerur({", "").replace("})", ""), a = l.replace(/\s/g, "").replace(/'/g, "").split(","), e = {};
            a.forEach(function (n) {
              var t = n.split(":");
              e[t[0]] = t[1];
            });
            o = "";
            n.OnSelectMsg.indexOf("#BERURGH#TASH#") !== -1 ? o = "true" : n.OnSelectMsg.indexOf("#BERURGH#GANT#") !== -1 && (o = "meshech");
            t.GHRef = i.BASE_URL + "/#" + t.GHUrl.replace(":tik", e.tik).replace(":sugGimla", "").replace(":peilut", e.peilut).replace(":taarichZakaut", "").replace(":tafkid", e.tafkid).replace(":showBack", "").replace(":snif", "").replace(":shemGimla", "").replace(":tash", o);
            t.GHLink = '<a href="' + t.GHRef + '">בירור הבטחת הכנסה</a>';
          } else t.GHLink = "בירור הבטחת הכנסה (מופיע בנושא הבטחת הכנסה שבתפריט, אם הוגשה תביעה להבטחת הכנסה)";
          n.OnSelectMsg.indexOf("#BERURGH#TASH#") !== -1 ? r = new RegExp("#BERURGH#TASH#", "g") : n.OnSelectMsg.indexOf("#BERURGH#GANT#") !== -1 && (r = new RegExp("#BERURGH#GANT#", "g"));
          n.OnSelectMsg = n.OnSelectMsg.replace(r, t.GHLink);
        } else n.OnSelectMsg.indexOf("DStart/TkufotAvtala") !== -1 && (n.OnSelectMsg = n.OnSelectMsg.replace(u, '<span class="showDivachHaasaka"></span>'));
      });
      t.dictMahutHH[n.Id] = n;
    }));
  });
  l = false;
  f.post("PniyaApi/Pniya").success(function (n) {
    n.AlertType == "Error" ? (t.vm.AlertTypePniya = n.AlertType, t.vm.AlertMessagePniya = n.AlertMessage, t.showFormPniya = false, setTimeout(function () {
      $("#redAsteriskText").addClass("non-shown");
    }, 200)) : (h.nose && u.sessionStorage.removeItem("contactUsData"), u.sessionStorage.contactUsData && !n.ShowNatzigView ? (l = true, t.vm = JSON.parse(u.sessionStorage.contactUsData), u.sessionStorage.removeItem("contactUsData"), (t.vm.Nose == "3B" || t.vm.Nose == "30B" && t.vm.TatNose) && setTimeout(function () {
      t.SubSubjectChanged();
      setTimeout(function () {
        t.SubSubSubjectChanged();
      }, 200);
    }, 110)) : (t.vm = n, h.nose && setTimeout(function () {
      t.vm.Nose = h.nose;
    }, 110)), t.vm.ShowNatzigView = n.ShowNatzigView);
    t.vm.Nose == null && (t.vm.Nose = "0");
    t.vm.PhonePrefixPniya == null && (t.vm.PhonePrefixPniya = "");
    t.vm.FirstName = t.userFirstName;
    t.vm.LastName = t.userLastName;
    t.vm.SnifPone = t.userSnif;
    var i = _.find(t.snifim, function (n) {
      return n.Value == t.vm.SnifPone.toString();
    });
    i && (t.SnifName = i.Text);
    t.SnifUrl = window.location.protocol + "//www.btl.gov.il/SystemFiles/AjaxFiles/AjaxDataSource.aspx?p=GoToSnif&Mark=" + t.vm.SnifPone.toString() + "&Neguishut=false";
    t.showEmailConfirmationPniya = t.vm.EmailPniya ? false : true;
    f.post("MashovApi/Mashov2").success(function (n) {
      l || (t.vm.Email = n.Email, t.vm.EmailConfirmation = n.EmailConfirmation, t.vm.From = c.name);
      t.vm.PhonePrefix == null && (t.vm.PhonePrefix = "");
      t.showEmailConfirmation = t.vm.Email ? false : true;
    });
  });
  t.openNewBtlForm = function () {
    BtlFormsService.openBtlForm("TkufotAvtala");
  };
  t.openChat = function () {
    var t = e.getUser(), i, n;
    t ? (i = e.getToken(), n = "ContactUs/Chat?token=" + e.getToken(), u.open(n, "_blank")) : window.location = "/";
  };
  t.SubjectChanged = function () {
    t.vm.Nose != "17B" && (t.vm.ChildId = null, t.vm.ChildName = null);
    t.vm.Nose != "4B" && (t.vm.NiftarId = null);
    t.vm.Nose != "3B" && (t.vm.TatNose = null, t.vm.TatTatNose = null, t.avtalaSubSubSubjectsMsg = null);
    t.vm.Nose != "30B" && (t.vm.TatNose = null, t.vm.TatTatNose = null, t.HHSubSubSubjectsMsg = null);
    t.vm.Nose == "17B" && t.isDisbaledChildLogin && (t.vm.ChildId = c.currentZehut.P_teudat_zehut.toString());
  };
  t.SubSubjectChanged = function () {
    t.dictPratim = {};
    t.dictPratimHH = {};
    t.vm.Nose === "3B" ? (t.avtalaSubSubSubjects = _.sortBy(t.dictMahut[t.vm.TatNose].SubSubjects, "Order"), t.avtalaSubSubSubjects.forEach(function (n) {
      t.dictPratim[n.Id] = n;
    })) : t.vm.Nose === "30B" && (t.HHSubSubSubjects = _.sortBy(t.dictMahutHH[t.vm.TatNose].SubSubjects, "Order"), t.HHSubSubSubjects.forEach(function (n) {
      t.dictPratimHH[n.Id] = n;
    }));
  };
  t.SubSubSubjectChanged = function () {
    t.vm.Nose === "3B" ? t.avtalaSubSubSubjectsMsg = t.vm.TatTatNose && t.dictPratim[t.vm.TatTatNose] ? t.dictPratim[t.vm.TatTatNose].OnSelectMsg : null : t.vm.Nose === "30B" && (t.HHSubSubSubjectsMsg = t.vm.TatTatNose && t.dictPratimHH[t.vm.TatTatNose] ? t.dictPratimHH[t.vm.TatTatNose].OnSelectMsg : null);
  };
  t.ChildIdChanged = function () {
    t.vm.ChildName = null;
  };
  t.getChildName = function () {
    t.vm.ChildName = null;
    setTimeout(function () {
      if (t.vm.ChildId) {
        var n = {Id: t.vm.ChildId, Shem: null, Org: "Pniya"};
        f.post("DocumentsUploadApi/GetChildNameById", n).success(function (n) {
          t.vm.AlertType = n.AlertType;
          t.vm.AlertMessage = n.AlertMessage;
          t.vm.AlertType == "Error" && u.scrollTo(0, 0);
          t.vm.ChildName = n.Shem;
          t.vm.ChildName || t.RemoveUpload();
        }, 100);
      }
    });
  };
  t.ChildIdIsEmptyStr = function (n) {
    return !(n === "");
  };
  t.DisabledChildIsSelected = function () {
    return t.vm.Nose == "17B";
  };
  t.SheerimSelected = function () {
    return t.vm.Nose == "4B";
  };
  t.showConfirmFieldPniya = function () {
    t.showEmailConfirmationPniya || (t.vm.EmailPniyaConfirmation = null);
    t.showEmailConfirmationPniya = true;
  };
  t.CheckIfEqualToEmailPniya = function (n) {
    return (t.vm.EmailPniya === "" || t.vm.EmailPniya == null) && (n === "" || n == null) ? true : n == null || t.vm.EmailPniya == null ? false : n.toLowerCase() === t.vm.EmailPniya.toLowerCase();
  };
  t.CheckIfNoseChosen = function (n) {
    return n != null && n !== "0";
  };
  t.CheckIfTatNoseChosen = function (n) {
    return n != null && n !== "0";
  };
  t.CheckIfTatTatNoseChosen = function (n) {
    return n != null && n !== "0";
  };
  t.NoseAvtalaIsChosen = function () {
    return t.vm.Nose != null && t.vm.Nose == "3B";
  };
  t.CheckPhonePniyaIfNotNull = function (n) {
    return t.vm.PhonePrefixPniya ? n !== null && n !== "" ? n.match("^[0-9]{7}$") ? true : false : false : n === null || n === "" ? true : false;
  };
  t.NiftarIdIncludesDigitsOnly = function (n) {
    return n.match("^[0-9]{1,9}$") ? true : false;
  };
  t.EmailAddressValid = function (n) {
    return n ? o.EmailAddressValid(n) : true;
  };
  t.CheckPhoneIfNotNull = function (n) {
    return t.vm.PhonePrefix ? n !== null && n !== "" ? n.match("^[0-9]{7}$") ? true : false : false : n === null || n === "" ? true : false;
  };
  t.showConfirmField = function () {
    t.showEmailConfirmation || (t.vm.EmailConfirmation = null);
    t.showEmailConfirmation = true;
  };
  t.CheckIfEqualToEmail = function (n) {
    return (t.vm.Email === "" || t.vm.Email == null) && (n === "" || n == null) ? true : n == null || t.vm.Email == null ? false : n.toLowerCase() === t.vm.Email.toLowerCase();
  };
  t.submitPniya = function () {
    t.vm.Nose != "17B" || t.isDisbaledChildLogin ? t.callPniya() : (t.vm.ChildName = null, setTimeout(function () {
      if (t.vm.ChildId) {
        var n = {Id: t.vm.ChildId, Shem: null, Org: "Pniya"};
        f.post("DocumentsUploadApi/GetChildNameById", n).success(function (n) {
          t.vm.AlertType = n.AlertType;
          t.vm.AlertMessage = n.AlertMessage;
          t.vm.AlertType == "Error" && u.scrollTo(0, 0);
          t.vm.ChildName = n.Shem;
          t.vm.ChildName && t.callPniya();
        }, 100);
      }
    }));
  };
  t.callPniya = function () {
    f.post("PniyaApi/SendPniya", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm.AlertTypePniya = n.AlertType;
          t.vm.AlertMessagePniya = n.AlertMessage;
          u.scrollTo(0, 0);
          t.vm.AlertTypePniya == "Success" && (t.vm.Nose = "0", t.vm.ClaimContent = null, t.vm.TatNose = null, t.vm.TatTatNose = null, t.vm.NiftarId = null, t.avtalaSubSubSubjectsMsg = null, t.HHSubSubSubjectsMsg = null, t.showFormPniya = false, $("#redAsteriskText").addClass("non-shown"), u.sessionStorage.contactUsData && u.sessionStorage.removeItem("contactUsData"));
        });
      }, 110);
    });
  };
  t.startAgainNewPniya = function () {
    t.vm.AlertTypePniya = null;
    t.vm.AlertMessagePniya = null;
    t.showFormPniya = true;
  };
  t.submit = function () {
    f.post("MashovApi/Mashov2SendMashov", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          if (t.vm.AlertType = n.AlertType, t.vm.AlertMessage = n.AlertMessage, u.scrollTo(0, 0), t.vm.AlertType == "Success") {
            t.vm.InformationRetrieval = null;
            t.vm.Needs = null;
            t.vm.SiteContent = null;
            t.vm.SiteDesign = null;
            t.showForm = false;
            var i = $("#mashovForm");
            $(i).find("#redAsteriskText").addClass("non-shown");
          }
          u.sessionStorage.contactUsData && u.sessionStorage.removeItem("contactUsData");
        });
      }, 110);
    });
  };
}]).controller("MismachimCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t, i, r, u, f) {
  t.vm = {};
  f.get("MismachimApi/Mismachim").success(function (n) {
    t.vm = n;
  });
}]).controller("OdotCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t) {
  t.vm = {};
  t.arrBrs = new Array(40);
}]).controller("TnaeyShimushCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t) {
  t.vm = {};
}]).controller("KesherCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t) {
  t.vm = {};
}]).controller("AvtachatMeidaCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t) {
  t.vm = {};
  t.arrBrs = new Array(40);
}]).controller("VaadotRefuiyotCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", function (n, t, i, r, u, f, e) {
  var s, o;
  for (t.vm = {}, t.generalLink = null, s = e.getUser(), o = 0; o < s.topNav.length; o++) s.topNav[o].name == "VaadotRefuiyot" && (t.generalLink = s.topNav[o].data);
  f.post("VaadotRefuiyotApi/BerurVaadotRefuiyot").success(function (n) {
    if (n.ErrorMessage || n.InitialMessage) {
      t.vm = n;
      return;
    }
    t.vm = n.Info;
  });
}]).controller("VaadotRefuiyotTabCtrl", ["$scope", function (n) {
  n.VaadaSelectedIdx = 0;
  n.showPratimTab = false;
  n.ShowPratim = function (t) {
    n.showPratimTab = true;
    n.VaadaSelectedIdx = t;
    $(".areaFlash").hide();
    $(".areaFlash").fadeIn(1e3);
  };
}]).controller("TviotCtrl", ["$state", "$scope", "$rootScope", "BtlFormsService", "$modal", "AuthSession", "dataService", function (n, t, i, r, u, f, e) {
  t.tviot = f.getUser().tviot;
  t.IsExist = function (n, t) {
    return n.indexOf(t) > -1;
  };
  var o = f.getUser();
  t.ShowTviatMaanakHagdalatGilPrisha = o != null && o.ochlusin != null && o.ochlusin.Atidi_1 != null && o.ochlusin.Atidi_1.split(";").length > 3 ? o.ochlusin.Atidi_1.split(";")[3] == "Y" : false;
  i.mevutachContactDetails == null && e.post("MevutachApi/ConfirmDetails").success(function (n) {
    t.vm = n;
    t.vm.CurEmail || (t.vm.CurEmail = "אין נתון");
    t.vm.CurMobilePhone || (t.vm.CurMobilePhone = "אין נתון");
    t.vm.CurAddress || (t.vm.CurAddress = "אין נתון");
    i.mevutachContactDetails = t.vm;
  });
  t.openTviatMaanakHagdalatGilPrishaBtlForm = function () {
    var e, o;
    i._isMMCollapsed = false;
    e = t.$new();
    e.vm = i.mevutachContactDetails;
    e.currentUser = f.getUser();
    e.close = function () {
      o.dismiss("cancel");
    };
    e.goToConfirmDetails = function () {
      o.dismiss("cancel");
      i.DoNotShowInitiaContactDetails = true;
      n.go("MevutachConfirmDetails");
    };
    e.openTvia = function () {
      o.dismiss("cancel");
      r.openBtlForm("Prisha62");
    };
    o = u.open({templateUrl: "Partials/Modal/MevutachContactDetails.html?ts=" + Number(new Date), scope: e, backdrop: "static", size: "lg"});
  };
}]).controller("Nechut_mekablimModalCtrl", ["$scope", "$modalInstance", "$state", "AuthSession", "$window", "dataService", function (n, t, i, r, u, f) {
  n.showPdf = function (u, f) {
    t.dismiss("cancel");
    var e = null;
    e = n.List.length == 1 ? "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + n.tkufa + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + n.List[0].Value : "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + f + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + u;
    i.go("showPdf", {url: encodeURIComponent(e), track: "/Ishurim/Nechut_mekablim"});
  };
  n.downloadPdf = function (i, u) {
    t.dismiss("cancel");
    var f = null;
    n.List.length == 1 ? (f = "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + n.tkufa + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + n.List[0].Value, n.downloadPdfDocument(f, "אישור שנתי על תשלומים לשנת " + n.tkufa)) : (f = "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + u + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + i, n.downloadPdfDocument(f, "אישור שנתי על תשלומים לשנת " + u));
  };
  n.downloadPdfDocument = function (n, t) {
    var i = n + "&api=1";
    f.getDocument(i).success(function (n) {
      var i = new Uint8Array(n);
      String.fromCharCode(i[0]) == "{" ? toastr.error(JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, i)))).ErrorMessage, "שגיאה", {positionClass: "toast-bottom-left"}) : (saveAs(new Blob([n]), t + ".pdf"), toastr.success('הקובץ: "' + t + '" הורד בהצלחה', "הורדה", {positionClass: "toast-top-left"}));
    });
  };
  n.showAccessibleDoc = function (i, f) {
    t.dismiss("cancel");
    var e = null;
    e = n.List.length == 1 ? "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + n.tkufa + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + n.List[0].Value + "&preview=true" : "Ishurim/Nechut_mekablim?token=" + r.getToken() + "&tkufa=" + f + "&sugGimla=" + n.sugGimla + "&tik=" + n.tik + "&siduri=" + i + "&preview=true";
    u.open(e, "_blank");
  };
  n.close = function () {
    t.dismiss("cancel");
  };
}]).controller("ShowPdfCtrl", ["$scope", "$stateParams", "cfpLoadingBar", "$state", "AuthSession", "$window", "dataService", function (n, t, i, r, u, f, e) {
  var s = u.getUser(), l, a;
  n.isAccessibleVersionExists = true;
  n.isIE = document.documentMode;
  window._pdf2show = null;
  n._ErrorMessage = "_";
  n.ShemMismach = t.shem;
  t.isAccessibleForSR && (n.IsAccessibleForSR = t.isAccessibleForSR === "true");
  var o = null, h = false, c = function () {
    o && (h = true, o.open(n.pdfArray), o.url = n.ShemMismach + ".pdf");
  };
  if (n.handleLoad = function () {
    var t = angular.element("#pdfViewer")[0];
    t.contentWindow && (t.contentWindow.PDFViewerApplicationOptions.set("locale", "he"), t.contentWindow.PDFViewerApplicationOptions.set("defaultUrl", ""), t.contentWindow.PDFViewerApplicationOptions.set("workerSrc", "../build/pdf.worker.min.js"), o = t.contentWindow.PDFViewerApplication, o.appConfig.toolbar.openFile.hidden = true, o.appConfig.secondaryToolbar.openFileButton.hidden = true, !h && n.pdfArray && c());
  }, s) if (angular.isString(t.url) && t.url.length > 0) {
    if (n.url = decodeURIComponent(t.url), l = u.getToken(), n.url = n.url.replace(new RegExp("token=[^&]+&", "g"), "token=" + l + "&"), isMobile.apple.phone && localStorage.BtlMobile) {
      window.location.replace("https://iospdf.btl.gov.il" + n.url);
      return;
    }
    i.start();
    n.url.indexOf("&NotAccessible=true") > -1 && (n.isAccessibleVersionExists = false);
    a = n.url + "&api=1";
    e.getDocument(a).then(function (t) {
      var r = new Uint8Array(t.data), i, u, f;
      n.pdfArray = r;
      String.fromCharCode(r[0]) == "{" ? n._ErrorMessage = JSON.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, r)))).ErrorMessage : (i = "btl_document", u = t.headers()["content-disposition"], u && (i = decodeURIComponent(u), f = i.lastIndexOf("="), f > 0 && (i = i.substr(f + 1))), n._ErrorMessage = null, !h && o && c());
    });
  } else t.errMsg && (n._ErrorMessage = t.errMsg); else window.location = window.location.origin + window.location.pathname;
  n.showDocNewWindow = function () {
    if (s) {
      var t = u.getToken();
      n.urlNewWindow = n.url.replace(new RegExp("token=[^&]+&", "g"), "token=" + t + "&");
      f.open(n.urlNewWindow, "_blank");
    } else window.location = "/";
  };
  n.showAccessibleDocNewWindow = function () {
    if (s) {
      var t = u.getToken();
      n.urlAccessibleNewWindow = n.url.replace(new RegExp("token=[^&]+&", "g"), "token=" + t + "&") + "&preview=true";
      f.open(n.urlAccessibleNewWindow, "_blank");
    } else window.location = window.location.origin + window.location.pathname;
  };
}]).controller("TashlumimCtrl", ["$scope", "$rootScope", function (n) {
  n.KaspitSelectedIdx = 0;
  n.showNikZak = false;
  n.h3_focused = false;
  n.IsShowNikZak = function () {
    n.vm.TabTashlumim.KaspitTbl === null && n.vm.TabTashlumim.Show === true && (n.showNikZak = true);
  };
  n.tarTashlumClicked = function () {};
}]).controller("MobileCtrl", ["$state", "$rootScope", "AuthSession", function (n, t, i) {
  localStorage.BtlMobile = "mobile-app";
  t.BtlMobile = localStorage.BtlMobile;
  BtlMobileFix();
  var r = i.getToken();
  r ? n.go("home", null, {location: "replace"}) : n.go("login", null, {location: "replace"});
}]).controller("RouterCtrl", ["$scope", "$rootScope", "$location", "$state", "AuthSession", "AuthService", "AUTH_EVENTS", function (n, t, i, r, u, f, e) {
  var s, o;
  t.BtlMobile = localStorage.BtlMobile;
  s = u.getToken();
  s ? (o = u.getUser(), o.currentZehut.hidePersonalMenu ? o.states && o.states.length == 1 && o.states[0].name == "MevutachConfirmDetails" && setTimeout(function () {
    r.go(o.states[0].name);
  }, 110) : r.go("home")) : (u.destroy(), sessionStorage.cardLogin ? window.location = "Login/Error" : t.$broadcast(e.notAuthenticated));
}]).controller("Error404Ctrl", ["$scope", "$location", "$window", function (n) {
  n.$root.title = "Error 404: Page Not Found";
}]);
app.config(["$stateProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$modalProvider", function (n, t, i, r, u) {
  app.stateProvider = n;
  u.options.animation = false;
}]);
(function (n) {
  var u = /iPhone/i, s = /iPod/i, h = /iPad/i, f = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, c = /Android/i, i = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, r = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, l = /Windows Phone/i, a = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, v = /BlackBerry/i, y = /BB10/i, p = /Opera Mini/i, w = /(CriOS|Chrome)(?=.*\bMobile\b)/i, b = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, k = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), e = function (n) {
    var e = n || navigator.userAgent, o = e.split("[FBAN");
    return typeof o[1] != "undefined" && (e = o[0]), o = e.split("Twitter"), typeof o[1] != "undefined" && (e = o[0]), this.apple = {phone: u.test(e), ipod: s.test(e), tablet: !u.test(e) && h.test(e), device: u.test(e) || s.test(e) || h.test(e)}, this.amazon = {phone: i.test(e), tablet: !i.test(e) && r.test(e), device: i.test(e) || r.test(e)}, this.android = {phone: i.test(e) || f.test(e), tablet: !i.test(e) && !f.test(e) && (r.test(e) || c.test(e)), device: i.test(e) || r.test(e) || f.test(e) || c.test(e)}, this.windows = {phone: l.test(e), tablet: a.test(e), device: l.test(e) || a.test(e)}, this.other = {blackberry: v.test(e), blackberry10: y.test(e), opera: p.test(e), firefox: b.test(e), chrome: w.test(e), device: v.test(e) || y.test(e) || p.test(e) || b.test(e) || w.test(e)}, this.seven_inch = k.test(e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, typeof window == "undefined" ? this : void 0;
  }, o = function () {
    var n = new e;
    return n.Class = e, n;
  };
  typeof module != "undefined" && module.exports && typeof window == "undefined" ? module.exports = e : typeof module != "undefined" && module.exports && typeof window != "undefined" ? module.exports = o() : typeof define == "function" && define.amd ? define("isMobile", [], n.isMobile = o()) : n.isMobile = o();
}(this));
"use strict";
var app = angular.module("app.login", ["ui.router", "app.AuthService", "app.services", "tooltipSter", "jcs-autoValidate", "angular-pickadate", "fluent.validation", "ngLocale"]).controller("LoginCtrl", ["$state", "$scope", "$rootScope", "$modal", "$window", "AuthService", "AUTH_EVENTS", "SvcUUID", "AuthSession", "validator", function (n, t, i, r, u, f, e, o, s, h) {
  i.BtlMobile = localStorage.BtlMobile;
  f.isAuthenticated(true) && n.go("home");
  s.getUser() && s.destroy();
  t.vm = {CellMsgType: 0, Opt: false};
  t.errorMessage = undefined;
  t.loginType = "password";
  t.changeLoginType = function (n) {
    t.loginType = n;
    t.vm.Opt = true;
    n == "password" && (t.vm.Opt = false);
  };
  t.resetErrors = function (n) {
    n ? (setTimeout(function () {
      h.makeValid(angular.element("#vm_userZehut"), "");
    }, 200), angular.element("#vm_userName")[0] && setTimeout(function () {
      h.makeValid(angular.element("#vm_userName"), "");
    }, 200), setTimeout(function () {
      h.makeValid(angular.element("#vm_password"), "");
    }, 200)) : angular.element("#vm_OptZehut")[0] && setTimeout(function () {
      h.makeValid(angular.element("#vm_OptZehut"), "");
    }, 200);
  };
  t.submit = function (n) {
    t.errorMessage = null;
    t.ErrorCode = null;
    t.showChangeIntMsg = false;
    t.showChangeIntSoonMsg = false;
    t.vm.Opt = n;
    t.vm.StationId = u.localStorage.getItem("BLSIStationId");
    t.vm.StationId || (t.vm.StationId = o.generateUUID(), u.localStorage.setItem("BLSIStationId", t.vm.StationId));
    t.passValidityExpiredSoonMsgShown && (t.vm.PassValidityExpiredSoonMsgShown = true);
    f.login(t.vm).then(function (n) {
      if (i.laddaLoading = false, n || (t.errorMessage = "אחד או יותר מהפרטים שהוזנו אינו תקין."), n.data.ErrorMessage) t.errorMessage = n.data.ErrorMessage, t.passValidityNumDays = n.data.PassValidityNumDays, t.errorMessage.indexOf("passwordExpired") >= 0 && (t.errorMessage = undefined, t.passValidityNumDays > 0 ? (t.showChangeIntSoonMsg = true, t.passValidityExpiredSoonMsgShown = true) : t.showChangeIntMsg = true); else if (n.data.ErrorCode) t.ErrorCode = n.data.ErrorCode; else if (n.data.Status === "OptRequired") {
        var r = Number(t.vm.CellMsgType);
        c({SugKtovet: r < 2 ? "טנ" : "דא", State: n.data.State, ktovetValue: n.data.KtovetValue}, function (n, i) {
          n === "ok" ? i.Token && f.applyProfile(i) : n === "resend" && (t.vm.OptZehut = null);
        });
      } else n.data.Token || (t.errorMessage = "שגיאה בכניסה לשירות אישי - יש לנסות לרענן את הדף ולהכנס שוב. במידה והשגיאה חוזרת יש לנסות במועד מאוחר יותר.");
    });
  };
  t.upperCaseStr = function () {
    return t.vm.userName && (t.vm.userName = t.vm.userName.toUpperCase()), true;
  };
  t.upperCasePswdStr = function () {
    return t.vm.password && (t.vm.password = t.vm.password.toUpperCase()), true;
  };
  t.IsOpt = function () {
    return t.vm.Opt;
  };
  t.IsNotOpt = function () {
    return !t.vm.Opt;
  };
  var c = function (n, i) {
    var u = t.$new(), f, e;
    u.vm = n;
    u.nextStep = i;
    f = "במסרון (SMS)";
    Number(t.vm.CellMsgType) === 1 && (f = "הודעה קולית");
    n.SugKtovet !== "דא" && f === "הודעה קולית" ? (u.ktovet = " בטלפון הנייד שמספרו:", u.cellMsgVoiceCall = f) : u.ktovet = n.SugKtovet === "דא" ? "בדואר אלקטרוני לכתובת: " : f + " לטלפון נייד שמספרו:";
    u.ktovetValue = n.ktovetValue;
    u.CellMsgType = t.vm.CellMsgType;
    e = 0;
    switch (n.SugKtovet) {
      case "דא":
        e = 25e3;
        break;
      case "טנ":
        e = Number(t.vm.CellMsgType) == 0 ? 25e3 : 6e4;
    }
    return u.resendMsgSuspension = e, r.open({templateUrl: "Partials/Modal/LoginImutVerification.html?ts=" + Number(new Date), controller: "OptVerificationModalCtrl", scope: u, size: "md", backdrop: "static"}), false;
  };
}]).controller("LoginPinCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "AuthService", "AUTH_EVENTS", "SvcUUID", "dataService", "$stateParams", function (n, t, i, r, u, f, e, o, s) {
  f.isAuthenticated() || n.go("login");
  t.vm = {LoginType: "עד"};
  t.submit = function () {
    t.vm.StationId = u.localStorage.getItem("BLSIStationId");
    t.vm.StationId || (t.vm.StationId = o.generateUUID(), u.localStorage.setItem("BLSIStationId", t.vm.StationId));
    s.post("LoginApi/PinLogin", t.vm).success(function (n) {
      n.Token ? f.applyProfile(n) : t.ErrorMessage = n.ErrorMessage;
    });
  };
  t.IshiLoginTypeChosen = function () {
    return t.vm.LoginType === "אישי";
  };
}]).controller("ChangeInternalPasswordCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "AuthService", "AUTH_EVENTS", "SvcUUID", "dataService", "$stateParams", function (n, t, i, r, u, f, e, o, s, h) {
  t.vm = {};
  h.userId && (t.vm.userId = h.userId);
  t.goToLoginPage = function () {
    n.go("login");
  };
  t.submit = function () {
    t.vm.StationId = u.localStorage.getItem("BLSIStationId");
    t.vm.StationId || (t.vm.StationId = o.generateUUID(), u.localStorage.setItem("BLSIStationId", t.vm.StationId));
    s.post("LoginApi/ChangeInternalPassword", t.vm).success(function (n) {
      n.Token ? n.AlertType == "Success" ? f.tempLogin(n, n.AlertMessage) : f.tempLogin(n) : setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          t.form.$setPristine();
          u.scrollTo(0, 0);
        });
      }, 110);
    });
  };
}]).controller("BtlSiteCtrl", ["AuthSession", function (n) {
  n.destroy();
  window.location = "https://www.btl.gov.il";
}]).controller("OptVerificationModalCtrl", ["$scope", "$rootScope", "$modalInstance", "$window", "SvcPhone", "dataService", "AuthSession", "AUTH_EVENTS", function (n, t, i, r, u, f) {
  n.ShowResendOption = false;
  n.setTO = setTimeout(function () {
    t.safeApply(function () {
      n.ShowResendOption = true;
    });
  }, n.resendMsgSuspension);
  n.close = function () {
    n.vm.MdlAlertMessage = null;
    n.vm.MdlAlertType = null;
    clearTimeout(n.setTO);
    i.dismiss("cancel");
    n.nextStep("resend", null);
  };
  n.ResendVerficationCode = function () {
    clearTimeout(n.setTO);
    i.dismiss("cancel");
    n.nextStep("resend", null);
  };
  n.confirmVerifcationCode = function () {
    clearTimeout(n.setTO);
    n.vm.MdlAlertMessage = null;
    n.vm.MdlAlertType = null;
    n.vm.KodImut ? (t.laddaLoading = true, f.post("LoginApi/VerifyOptCode", {OptCode: n.vm.KodImut, State: n.vm.State, CellMsgType: Number(n.CellMsgType)}).success(function (r) {
      if (t.laddaLoading = false, r.Status === "OptRequired") {
        var u = Number(r.ErrorCode);
        switch (u) {
          case 1:
            n.vm.MdlAlertMessage = "קוד האימות אינו תואם לקוד שנשלח אליך, נסה שנית";
            n.vm.MdlAlertType = "Error";
            break;
          case 3:
            n.vm.MdlAlertMessage = "פג תוקפו של קוד האימות";
            n.vm.MdlAlertType = "Resend";
            break;
          case 4:
            n.vm.MdlAlertMessage = "פג תוקפו של קוד האימות";
            n.vm.MdlAlertType = "Resend";
            break;
          default:
            n.vm.MdlAlertMessage = "כשלון בבדיקת קוד האימות";
            n.vm.MdlAlertType = "Resend";
        }
      } else r.Status === "Approved" && (n.nextStep("ok", r), i.dismiss("cancel"));
    })) : (n.vm.MdlAlertMessage = "יש למלא את קוד האימות שנשלח אליך", n.vm.MdlAlertType = "Error");
  };
  n.CheckKodImutIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[0-9]{6}$", t);
  };
  n.checkRegIfNotNull = function (n, t) {
    return t && t !== "" ? t.match(n) ? true : false : true;
  };
}]);
"use strict";
angular.module("app.Mevutach", ["ui.router", "app.services", "app.AuthService", "tooltipSter"]).controller("BerurMevutachCtrl", ["$scope", "$stateParams", "AuthSession", "dataService", "$state", "$modal", function (n, t, i, r) {
  n.$root.title = "נתוני הביטוח";
  n.title = "נתוני הביטוח";
  n.currentZehut = i.getUser().currentZehut;
  n.tabs = {klali: {active: true}, toshavut: {}, hashlamatPratim: {}, isukim: {}, kisuyim: {}, amanot: {}, tkufotChaserot: {}};
  r.post("MevutachApi/BerurMevutach").success(function (t) {
    if (t.ErrorMessage) {
      n.vm = t;
      return;
    }
    n.vm = t.Info;
  });
}]);
"use strict";
angular.module("app.Personal", ["ui.router", "app.services", "ngSanitize", "ui.bootstrap"]).controller("PersonalCtrl", ["$scope", "AuthSession", "$window", "$rootScope", "$state", "dataService", "sideMenuValues", "$modal", function (n, t, i, r, u, f, e, o) {
  n.SummaryPage = true;
  n.currentUser = t.getUser();
  n.bankNames = globals.bankNames;
  r.lnkYmimMervTitle = "בדיקת ימים מירביים";
  r.lnkZakGHTitle = "תנאי זכאות להבטחת הכנסה";
  n.currentUser == null && r.logOut();
  n.viturSucceededMsg = null;
  i.sessionStorage.vitur && (n.viturSucceededMsg = i.sessionStorage.vitur, i.sessionStorage.removeItem("vitur"), r.$root.$broadcast("initial-top-message-shown"));
  n.changePasswordSucceededMsg = null;
  i.sessionStorage.msg && (n.changePasswordSucceededMsg = i.sessionStorage.msg, i.sessionStorage.removeItem("msg"), r.$root.$broadcast("initial-top-message-shown"));
  i.sessionStorage.MashovImutMsg && (n.mashovImutMsg = i.sessionStorage.MashovImutMsg, i.sessionStorage.removeItem("MashovImutMsg"));
  i.sessionStorage.InnerImutMsg && (n.innerImutMsg = i.sessionStorage.InnerImutMsg, i.sessionStorage.removeItem("InnerImutMsg"));
  f.post("MevutachApi/ConfirmDetails").success(function (t) {
    if (n.vm = t, n.vm.CurEmail || (n.vm.CurEmail = "אין נתון"), n.vm.CurMobilePhone || (n.vm.CurMobilePhone = "אין נתון"), n.vm.CurAddress || (n.vm.CurAddress = "אין נתון"), r.mevutachContactDetails = n.vm, n.ShowChnBnkAvtLnk = false, n.ChnDetails = null, angular.isArray(e.getSideMenu()) && e.getSideMenu().length > 0) {
      var i = _.find(e.getSideMenu(), function (n) {
        return n.name == "Avtala";
      });
      i && (n.ShowChnBnkAvtLnk = true);
    } else setTimeout(function () {
      n.$apply(function () {
        var t = _.find(e.getSideMenu(), function (n) {
          return n.name == "Avtala";
        });
        t && (n.ShowChnBnkAvtLnk = true);
      });
    }, 300);
  });
  n.goToConfirmDetails = function () {
    r.DoNotShowInitiaContactDetails = true;
    u.go("MevutachConfirmDetails");
  };
  n.getAvtBankDetails = function () {
    f.post("AvtalaApi/GetHeshbonBank").success(function (t) {
      if (n.BankStatus = t.BankStatus, n.curBankName = null, t.HeshbonDetails && (t.BankStatus == 0 || t.BankStatus == 1 || t.BankStatus == 2)) {
        var i = _.find(n.bankNames, function (n) {
          return n.Value == t.BankCodeStr;
        });
        i && (n.curBankName = i.Text);
        n.ChnDetails = n.curBankName + " " + t.HeshbonDetails;
        n.Bank = t.Bank;
        n.Snif = t.Snif;
        n.Heshbon = t.Heshbon;
        n.UpdatePermited = t.UpdatePermited;
      } else n.ChnDetails = "אין נתון";
    });
  };
  n.confirmBankDetails = function (t) {
    var i = {};
    i.Nose = t;
    i.Bank = n.Bank;
    i.Snif = n.Snif;
    i.Heshbon = n.Heshbon;
    n.BankAlertMessage = null;
    n.BankAlertType = null;
    f.post("PersonalApi/UpdateHeshbonBank", i).success(function (t) {
      setTimeout(function () {
        n.$apply(function () {
          n.BankAlertType = t.AlertType;
          n.BankAlertMessage = t.AlertType == "Error" ? t.AlertMessage || t.ErrorMessage : t.AlertMessage;
        });
      }, 110);
    });
  };
  n.confirmMevBankDetails = function () {
    n.confirmBankDetails("ME");
  };
  n.confirmAvtBankDetails = function () {
    n.confirmBankDetails("HV");
  };
  n.editAvtBankDetails = function () {
    u.go("PersonalHeshbonBankAvt", {nose: "avt"});
  };
  n.getMaanakNechutData = function () {
    var t = n.$new(), i = o.open({templateUrl: "Partials/Modal/MaanakNechut.html?ts=" + Number(new Date), controller: "MaanakNechutModalCtrl", scope: t, backdrop: "static", size: "lg"});
  };
  n.getAvtalaNewTerms = function () {
    var t = n.$new(), i = o.open({templateUrl: "Partials/Modal/AvtalaNewTerms.html?ts=" + Number(new Date), controller: "AvtalaNewTermsCtrl", scope: t, backdrop: "static", size: "lg"});
  };
}]).controller("AvtalaNewTermsCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", "dataService", "BtlFormsService", function (n, t, i, r, u, f, e, o, s) {
  f.showPending = true;
  f.appError = null;
  var h = u.getUser();
  n.UserAgeNum = new Number(h.currentZehut.age.replace(")", "").replace("(גיל: ", ""));
  o.post("PersonalApi/GetAvtalaNewTerms").success(function (t) {
    n.vm = t.AlertType == "Error" ? t : t.Info.AvtalaNewTermsData;
    f.showPending = false;
  });
  n.close = function () {
    t.close();
  };
  f.$on(e.serverError, function () {
    n.close();
  });
  n.openNewBtlForm = function () {
    s.openBtlForm("TkufotAvtala");
  };
}]).controller("MaanakLongAvtalaCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", "dataService", "BtlFormsService", function (n, t, i, r, u, f, e, o, s) {
  f.showPending = true;
  f.appError = null;
  var h = u.getUser();
  n.UserAgeNum = new Number(h.currentZehut.age.replace(")", "").replace("(גיל: ", ""));
  o.post("PersonalApi/GetMaanakLongAvtala").success(function (t) {
    n.vm = t;
    f.showPending = false;
  });
  n.close = function () {
    t.close();
  };
  f.$on(e.serverError, function () {
    n.close();
  });
  n.openNewBtlForm = function () {
    s.openBtlForm("TkufotAvtala");
  };
}]).controller("MaanakNechutModalCtrl", ["$scope", "$modalInstance", "$state", "AuthService", "AuthSession", "$rootScope", "AUTH_EVENTS", "dataService", function (n, t, i, r, u, f, e, o) {
  f.showPending = true;
  f.appError = null;
  o.post("PersonalApi/GetMaanakNechut").success(function (t) {
    n.vm = t;
    f.showPending = false;
  });
  n.close = function () {
    t.close();
  };
  f.$on(e.serverError, function () {
    n.close();
  });
}]).controller("PersonalKodSodiCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "Discoder", function (n, t, i, r, u, f, e, o) {
  var s = e.getUser();
  t.vm = {kodSodi: o.decode(s.currentZehut.P_kod_sodi_i), hasKod: s.currentZehut.P_kod_status_i != "לה" && s.currentZehut.P_kod_status_i != "סר"};
  t.generateKodSodi = function () {
    f.post("PersonalApi/GenerateKodSodi").success(function (n) {
      n.ErrorMessage ? t.vm = n : (t.vm = n.Info, s.currentZehut.P_kod_sodi_i = n.Info.kodSodi.toString(), t.vm.kodSodi = o.decode(n.Info.kodSodi).toString(), s.currentZehut.P_kod_status_i = n.Info.hasKod, e.saveUser(s));
    });
  };
}]).controller("PersonalHeshbonBankCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "$anchorScroll", "$stateParams", "AuthSession", "FileUploader", "$interval", "sideMenuValues", "$http", "validator", function (n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
  var w, k, d, p, b, y;
  for (t.vm = {}, t.bankNames = globals.bankNames, t.subjects = [], t.allowUpdateMe = true, t.currentUser = s.getUser(), t.SummaryPage = false, t.banks = [], w = "/Content/Data/banks", a.get("{0}/banks.js".format(w)).success(function (n) {
    n && n.length > 0 && n.forEach(function (n) {
      t.banks.push({Text: n.label, Value: n.value});
    });
  }).error(function (n, i) {
    t.banks = [];
    console.log("error, status: " + i);
  }), t.getBankName = function (n) {
    var i = _.find(t.bankNames, function (t) {
      return t.Value == n;
    });
    return i ? i.Text : null;
  }, t.getChnDetails = function (n, i, r) {
    var u = null, f;
    return n && (f = t.getBankName(n), u = f + " (" + n.substring(2) + "), סניף: " + i + ", חשבון: " + r), u;
  }, t.getRehovot = function () {
    t.vm.Bank != null && setTimeout(function () {
      v.makeValid(angular.element("#vm_Bank"), "יש לבחור סניף מהרשימה");
    }, 200);
    t.bankSnifim = [];
    setTimeout(function () {
      t.vm.Bank && t.$apply(function () {
        a.get("{0}/Bank-{1}.js".format(w, t.vm.Bank)).success(function (n) {
          n && n.length > 0 && n.forEach(function (n) {
            t.bankSnifim.push({Text: n.label, Value: n.value});
          });
        }).error(function (n, i) {
          t.bankSnifim = [];
          console.log("error, status: " + i);
        });
      });
    }, 100);
  }, t.clearFields = function () {
    t.vm.Bank = null;
    t.vm.Snif = null;
    t.vm.Heshbon = null;
    t.vm.HatzharaKlalit = null;
    t.vm.BtlAccessAgree = null;
    t.vm.BankReturnAgree = null;
    t.vm.HeshbonDetails = null;
    t.vm.AlertType = null;
    t.vm.AlertMessage = null;
    t.vm.ErrorMessage = null;
  }, t.SubjectChanged = function () {
    var n = t.vm.Nose;
    t.clearFields();
    n == "ME" && (t.allowUpdateMe = false);
    (n == "HV" || n == "ME") && t.vmDocs && !t.vmDocs.SnifMetapel && f.post("DocumentsUploadApi/EmbededDocumentsUpload").success(function (n) {
      t.vmDocs = n;
    });
    n == "ME" ? t.getBankMaanakDetails() : t.allowUpdateMe = true;
  }, angular.isArray(l.getSideMenu()) && l.getSideMenu().length > 0 && (k = _.find(l.getSideMenu(), function (n) {
    return n.name == "Avtala";
  }), k && (t.avtExists = true), d = _.find(l.getSideMenu(), function (n) {
    return n.name == "Miluim";
  }), d && (t.milExists = true)), p = 0; p < globals.subjects.length; p++) (globals.subjects[p].Value == "HV" && t.avtExists || globals.subjects[p].Value == "NK" && t.milExists) && t.subjects.push(globals.subjects[p]);
  if (t.subjects.push({Value: "ME", Text: "מענק לכל אזרח"}), t.subjects = _.sortBy(t.subjects, "Text"), t.subjects.push({Value: "OTHER", Text: "גמלה אחרת"}), t.updateSnifField = function () {
    t.vm.Snif != null && setTimeout(function () {
      v.makeValid(angular.element("#vm_Snif"), "יש לבחור סניף מהרשימה");
    }, 200);
  }, t.submit = function () {
    var n, i;
    t.vm.HeshbonDetails == null ? t.vm.Bank == null || t.vm.Snif == null ? (t.vm.Bank == null && setTimeout(function () {
      v.makeInvalid(angular.element("#vm_Bank"), "יש לבחור בנק מהרשימה");
    }, 200), t.vm.Snif == null && setTimeout(function () {
      v.makeInvalid(angular.element("#vm_Snif"), "יש לבחור סניף מהרשימה");
    }, 200)) : t.checkCheshbon() : (t.vm.shemMev = t.currentUser.name, n = _.find(t.banks, function (n) {
      return n.Value == t.vm.Bank;
    }), n && (t.vm.shemBank = n.Text), i = _.find(t.bankSnifim, function (n) {
      return n.Value == t.vm.Snif;
    }), i && (t.vm.shemSnif = i.Text), (t.vm.Nose !== "ME" || t.validatedBank(t.vm.Bank)) && (t.vm.uplaodedLocaleFileName = null), f.post("PersonalApi/UpdateHeshbonBank", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          t.vm.Nose == "ME" && t.vmDocs.AlertType == "Success" && (t.vmDocs.AlertType = null, t.vmDocs.AlertMessage = null);
          u.scrollTo(0, 0);
        });
      }, 110);
    }));
  }, t.getBankMaanakDetails = function () {
    f.post("PersonalApi/GetHeshbonBankNew").success(function (n) {
      if (t.allowUpdateMe = false, t.BankStatus = n.BankStatus, t.TashlumDate = n.TashlumDate, t.SibatShaguy = n.SibatShaguy, t.AlreadyPaid = n.AlreadyPaid, t.KizuzMale = n.KizuzMale, t.TashlumDate == null && n.MaanaksDetails.length >= 2 && (t.AlreadyPaid = true), t.SchumMaanak = n.SchumMaanak, t.MaanaksDetails = n.MaanaksDetails, t.UpdatePermited = n.UpdatePermited, t.SchumKizuz = n.SchumKizuz, t.SchumBeforeKizuz = n.SchumBeforeKizuz, t.Shaguy = n.Shaguy, t.UpdatePermited && ((t.BankStatus == 0 || t.BankStatus == -2) && t.TashlumDate == null || t.BankStatus == 2 || t.BankStatus == 4 || t.BankStatus == 9 || t.BankStatus == 10) && (t.allowUpdateMe = true), t.MaanakTitle = null, t.SchumMaanak == "1,500" && (t.MaanakTitle = "(מענק מוגדל)"), t.curBankName = null, n.HeshbonDetails && (n.BankStatus == 0 || n.BankStatus == 1 || n.BankStatus == 2 || n.BankStatus == 3 || n.BankStatus == -3)) {
        var i = _.find(t.bankNames, function (t) {
          return t.Value == n.BankCodeStr;
        });
        i && (t.curBankName = i.Text);
        t.ChnDetails = t.curBankName + " " + n.HeshbonDetails;
        t.Bank = n.Bank;
        t.Snif = n.Snif;
        t.Heshbon = n.Heshbon;
      } else t.ChnDetails = "אין נתון";
    });
  }, t.checkCheshbon = function () {
    t.vm.BankFileNeeded = false;
    f.post("PersonalApi/CheckHeshbonBank", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          var i, f;
          t.vm.BankFileNeeded = n.BankFileNeeded;
          t.vm.HeshbonDetails = null;
          i = _.find(t.banks, function (n) {
            return n.Value == t.vm.Bank;
          });
          i ? (f = _.find(t.bankSnifim, function (n) {
            return n.Value == t.vm.Snif;
          }), f && (t.vm.HeshbonDetails = i.Text + ", " + f.Text + ", חשבון: " + t.vm.Heshbon)) : (t.vm.AlertType = "Error", t.vm.AlertMessage = "שגיאה באחד מפרטי החשבון", u.scrollTo(0, 0));
          n.AlertType === "Error" ? (t.vm.AlertMessage = "שגיאה בבדיקת חשבון הבנק, אנא נסו מאוחר יותר", t.vm.AlertType = n.AlertType, t.vm.HeshbonDetails = null, u.scrollTo(0, 0)) : t.vm.Nose == "ME" ? ($("#redAsteriskText").addClass("non-shown"), u.scrollTo(0, 0)) : (r.hash("updateCheshbonDetails"), e());
        });
      }, 110);
    });
  }, t.cancel = function () {
    t.vm.AlertType = null;
    t.vm.AlertMessage = null;
    t.vmDocs.AlertType = null;
    t.vmDocs.AlertMessage = null;
    t.ErrorMessage = null;
    t.vm.HeshbonDetails = null;
    r.hash("enterCheshbonDetails");
    e();
    t.vm.Nose == "ME" && $("#redAsteriskText").removeClass("non-shown");
  }, t.validatedBank = function (n) {
    for (var i = false, r = ["1084", "1083", "1093", "1071", "1067", "1024", "1079", "1001", "1019", "1008", "1023", "1054", "1099", "1032", "1030", "1033", "1089", "1007", "1066"], t = 0; t < r.length; t++) r[t] == n && (i = true);
    return i == true ? false : true;
  }, t.notValidatedBank = function (n) {
    for (var i = false, r = ["1084", "1083", "1093", "1071", "1067", "1024", "1079", "1001", "1019", "1008", "1023", "1054", "1099", "1032", "1030", "1033", "1089", "1007", "1066"], t = 0; t < r.length; t++) r[t] == n && (i = true);
    return i == true ? true : false;
  }, t.showBankDetailsMsg = function () {
    return t.vm.Nose == "ME" && t.validatedBank(t.vm.Bank) ? true : t.vm.Nose !== "ME" ? true : false;
  }, t.showUpdateButton = function () {
    return t.vm.HeshbonDetails && t.vm.Nose != "OTHER" && t.vm.Nose != "ME" ? true : t.vm.HeshbonDetails && t.vm.Nose != "OTHER" && t.vm.Nose == "ME" && t.vmDocs.AlertType !== "Success" && !t.vm.BankFileNeeded && t.validatedBank(t.vm.Bank) ? true : t.vm.HeshbonDetails && t.vm.Nose != "OTHER" && t.vm.Nose == "ME" && t.vmDocs.AlertType === "Success" && (t.notValidatedBank(t.vm.Bank) || t.vm.BankFileNeeded) ? true : false;
  }, t.NoseIsAllowed = function (n) {
    return n == "HV" || n == "NK" || n == "ME";
  }, t.vmDocs = {}, t.tglExplanation = true, b = s.getToken(), t.ShowProgressBar = false, t.FileTypeError = false, t.FileSizeError = false, t.FileUploadNeededError = false, t.FileGeneralError = false, t.FileOpenningError = false, t.FilePasswordError = false, t.FileDimensionError = false, t.fileItem = null, t.vmDocs.UploadedLocaleFileName = null, t.FileAmountError = false, t.NumFileLoaded = 0, y = t.uploader = new h({url: "api/DocumentsUploadApi/UploadFile?token=" + b, autoUpload: true, headers: {Authorization: "Bearer " + b}}), h.FileSelect.prototype.isEmptyAfterSelection = function () {
    return true;
  }, y.filters.push({name: "fileTypeFilter", fn: function (n) {
    var t = "|" + n.name.slice(n.name.lastIndexOf(".") + 1) + "|";
    return console.log(t), "|jpeg|jpg|png|tif|tiff|pdf|".indexOf(t.toLowerCase()) !== -1;
  }}), y.filters.push({name: "fileSizeFilter", fn: function (n) {
    return (console.log(n.size), n.size) ? n.size < t.vmDocs.MaxRequestLength : true;
  }}), y.filters.push({name: "fileMinSizeFilter", fn: function (n) {
    return (console.log(n.size), angular.isNumber(n.size)) ? n.size >= 512 : true;
  }}), y.filters.push({name: "queueLengthFilter", fn: function () {
    return console.log(this.queue.length), this.queue.length < 1;
  }}), y.onWhenAddingFileFailed = function (n, i) {
    t.FileGeneralError = false;
    t.FileOpenningError = false;
    t.FilePasswordError = false;
    t.FileDimensionError = false;
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileAmountError = false;
    switch (i.name) {
      case "fileSizeFilter":
        t.FileSizeError = true;
        break;
      case "fileTypeFilter":
        t.FileTypeError = true;
        break;
      case "fileMinSizeFilter":
        t.FileMinSizeError = true;
      case "queueLengthFilter":
        t.NumFileLoaded++;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.fileItem = null;
  }, y.onAfterAddingAll = function () {
    if (t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.NumFileLoaded > 0) {
      t.FileAmountError = true;
      for (var n = 0; n < y.queue.length; n++) y.queue[n].remove();
      t.NumFileLoaded = 0;
    } else t.ShowProgressBar = true;
  }, y.onAfterAddingFile = function () {
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileAmountError = false;
  }, y.onProgressAll = function () {
    t.ShowProgressBar = true;
  }, y.onCompleteItem = function () {
    y.queue[0].remove();
    t.FileUploadNeededError = false;
    t.vmDocs.AlertMessage = null;
    t.vmDocs.AlertType = null;
  }, y.onSuccessItem = function (n, i) {
    var r, f, u;
    if (t.FileGeneralError = false, t.FileOpenningError = false, t.FilePasswordError = false, t.FileDimensionError = false, t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.fileItem = n, t.ShowProgressBar = false, t.vmDocs.UploadedLocaleFileName = null, r = true, angular.isArray(i)) i.length > 0 && (t.vmDocs.UploadedLocaleFileName = i[0].Name, r = false); else {
      f = i;
      try {
        u = $(f).find("FileDesc:first>Name").text();
        u && u != "" && (t.vmDocs.UploadedLocaleFileName = u, r = false);
      } catch (e) {
        r = true;
        t.FileGeneralError = true;
        t.fileItem = null;
      }
    }
    r && (t.FileGeneralError = true, t.fileItem = null);
  }, y.onErrorItem = function (n, i) {
    t.FilePasswordError = false;
    t.FileOpenningError = false;
    t.FileDimensionError = false;
    t.FileGeneralError = false;
    switch (i) {
      case "PASSWORD-NEEDED":
        t.FilePasswordError = true;
        break;
      case "OPENING-PROBLEM":
        t.FileOpenningError = true;
        break;
      case "SMALL-IMAGE":
        t.FileDimensionError = true;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.vmDocs.UploadedLocaleFileName = null;
  }, t.RemoveUpload = function () {
    t.fileItem = null;
    t.vmDocs.UploadedLocaleFileName && f.post("DocumentsUploadApi/RemoveUpload?uploadedFileName=" + t.vmDocs.UploadedLocaleFileName).success(function (n) {
      t.vmDocs.UploadedLocaleFileName = n;
    });
  }, t.curBankNameValue = function () {
    if (t.vm.Bank) {
      var n = _.find(t.bankNames, function (n) {
        return n.Value == t.vm.Bank;
      });
      return n ? n.Text : "בנק זה";
    }
    return "בנק זה";
  }, t.submitDoc = function () {
    t.vmDocs.UploadedLocaleFileName ? (t.vmDocs.KodNose = t.vm.Nose, t.vmDocs.BankCode = Number(t.vm.Bank), t.vmDocs.SnifCode = Number(t.vm.Snif), t.vmDocs.HeshbonCode = Number(t.vm.Heshbon), t.vm.uplaodedLocaleFileName = null, f.post("DocumentsUploadApi/SaveEmbededDocument", t.vmDocs).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vmDocs = n;
          i.laddaLoading = false;
          t.vmDocs.AlertType ? (t.vmDocs.AlertType == "Error" && t.vmDocs.AlertMessage == "יש לטעון קובץ תואם למסמך שנבחר." && (t.FileUploadNeededError = true), t.vm.Nose == "ME" && (t.vm.uplaodedLocaleFileName = t.fileItem.file.name), t.fileItem = null, t.vmDocs.UploadedLocaleFileName = null, u.scrollTo(0, 0)) : t.errorMessage = n.ErrorMessage ? n.ErrorMessage : "בעיה בהעלאת המסמך";
        });
      }, 110);
    })) : (t.FileUploadNeededError = true, i.laddaLoading = false);
  }, t.Nose = "כללי", t.NoseCode = "general", o.nose) switch (o.nose) {
    case "mil":
      t.Nose = "מילואים";
      t.vm.Nose = "NK";
      t.NoseCode = "mil";
      break;
    case "avt":
      t.Nose = "אבטלה";
      t.vm.Nose = "HV";
      t.NoseCode = "avt";
      break;
    case "mev":
      t.Nose = "מענק לכל אזרח";
      t.vm.Nose = "ME";
      t.NoseCode = "mev";
      break;
    default:
      t.Nose = "כללי";
      t.NoseCode = "general";
  }
  (t.Nose == "אבטלה" || t.Nose == "מענק לכל אזרח") && f.post("DocumentsUploadApi/EmbededDocumentsUpload").success(function (n) {
    t.vmDocs = n;
    t.vm.Nose == "ME" && t.getBankMaanakDetails();
  });
}]).controller("PersonalIsukCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", "$stateParams", function (n, t, i, r, u, f) {
  t.vm = {};
  t.isukStatuses = globals.isukStatuses;
  t.ShowPnlContinue = false;
  t.updateOptionExists = true;
  f.get("PersonalApi/Isuk").success(function (n) {
    t.vm = n.Info;
    t.vm.Isukim && t.vm.Isukim.length > 0 && (t.updateOptionExists = _.find(t.vm.Isukim, function (n) {
      return n.IdkunStatus == "Y";
    }));
  });
  t.Contains = function (n, t) {
    return n ? n.indexOf(t) != -1 : null;
  };
  t.showPnl = function () {
    t.ShowPnlContinue = t.vm.Isukim[t.vm.Isukim.length - 1].Cid != "" ? true : false;
  };
  t.submit = function () {
    t.updateOptionExists = true;
    t.ErrorMessage = null;
    f.post("PersonalApi/UpdateIsuk", t.vm).success(function (n) {
      t.vm = n.Info;
      t.vm.SicumMsg && (t.vm.SicumMsg = t.vm.SicumMsg.replace("\n", "<br />"));
      t.form.$setPristine();
      t.vm.Isukim && t.vm.Isukim.length > 0 && (t.updateOptionExists = _.find(t.vm.Isukim, function (n) {
        return n.IdkunStatus == "Y";
      }));
      t.vm.ErrorMessage && (t.ErrorMessage = t.vm.ErrorMessage);
    });
  };
}]).controller("PersonalChangePasswordCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t, i, r, u, f) {
  t.vm = {};
  t.submit = function () {
    f.post("PersonalApi/ChangePassword", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          t.form.$setPristine();
          u.scrollTo(0, 0);
        });
      }, 110);
    });
  };
}]).controller("PersonalPniyotKodmotCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "dataService", function (n, t, i, r, u, f) {
  t.vm = {};
  t.tabs = {lastCallsToBtlSite: {active: true}, lastEntrancesSherutIshi: {}};
  t.selectTab = function (n) {
    t.tabs[n].active = true;
  };
  f.get("PersonalApi/PniyotKodmot").success(function (n) {
    var r, i;
    if (n.ErrorMessage || n.InitialMessage) {
      t.vm = n;
      return;
    }
    if (n.Info && n.Info.TabBtlSiteCalls && n.Info.TabBtlSiteCalls.PniyotTbl && n.Info.TabBtlSiteCalls.PniyotTbl.length > 0) for (r = new RegExp("http:", "g"), i = 0; i < n.Info.TabBtlSiteCalls.PniyotTbl.length; i++) n.Info.TabBtlSiteCalls.PniyotTbl[i].Answer && (n.Info.TabBtlSiteCalls.PniyotTbl[i].Answer = n.Info.TabBtlSiteCalls.PniyotTbl[i].Answer.replace(r, "https:"));
    t.vm = n.Info;
  });
}]);
"use strict";
angular.module("app.Chovot", ["ui.router", "app.services"]).controller("ChovotGalashCtrl", ["$state", "$stateParams", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "sideMenuValues", "WizardHandler", "validator", function (n, t, i, r, u, f, e, o, s) {
  i.vm = {};
  i.title = "חובות";
  var h = o.getUser();
  i.userName = h.name;
  i.userId = h.currentZehut.P_teudat_zehut;
  e.post("ChovotApi/ChovotGalash").success(function (n) {
    if (t.showBack === "True" && (i.showBack = true), n.ErrorMessage || n.AlertType || n.InitialMessage) {
      i.vm = n;
      return;
    }
    i.vm = n.Info;
    var r = _.find(s.getSideMenu(), function (n) {
      return n.name === "Galash";
    });
    r && (i.GalashLink = _.filter(r.subNav, function (n) {
      return n.id === "Berur";
    })[0].name);
  });
}]).controller("ChovotGimlaotCtrl", ["$state", "$stateParams", "$scope", "$rootScope", "$location", "$window", "dataService", "AuthSession", "sideMenuValues", "WizardHandler", "validator", function (n, t, i, r, u, f, e, o, s, h, c) {
  i.vm = {};
  i.title = "חובות";
  i.showTshGimlaWizard = false;
  var l = o.getUser();
  i.userName = l.name;
  i.userId = l.currentZehut.P_teudat_zehut;
  i.tabs = {chovot: {active: true}, hesderim: {}};
  e.post("ChovotApi/ChovotGimlaot").success(function (n) {
    var u, r;
    if (t.showBack === "True" && (i.showBack = true), n.ErrorMessage || n.AlertType || n.InitialMessage) {
      i.vm = n;
      return;
    }
    if (i.vm = n.Info, u = _.find(s.getSideMenu(), function (n) {
      return n.name === "Galash";
    }), u && (i.GalashLink = _.filter(u.subNav, function (n) {
      return n.id === "Berur";
    })[0].name), i.vm.ChovotGimlaotNew !== null) for (i.atLeastOneEnabledChovExist = false, i.OnlyOneRowMeukav = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl.length == 1 && i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[0].Meukav === "YES", r = 0; r < i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl.length; r++) i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[r].TakbulimTeremNikletuAsChov || (i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[r].AllowTashlum && (i.atLeastOneEnabledChovExist = true), i.checkChov(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[r].Selected, r));
  });
  i.submit = function () {
    i.moveToNextStep();
  };
  i.proceedToPaymentWizard = function () {
    if (i.vm.ErrorMessage = null, i.vm.AlertMessage = null, i.vm.AlertType = null, i.vm.ChovotGimlaotNew.SchumKolelLeTashlum <= 0) {
      i.vm.AlertMessage = "כדי להמשיך לתשלום חוב בגמלאות יש לבחור תחילה את החוב שברצונך לשלם ולהזין סכום לתשלום";
      i.vm.AlertType = "Error";
      r.laddaLoading = false;
      f.scrollTo(0, 0);
      return;
    }
    var n = {};
    n.SchumLeTashlum = i.vm.ChovotGimlaotNew.SchumKolelLeTashlum;
    n.ChovotGimlaot = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl;
    e.post("ChovotApi/CheckSchumChovLeTashlum", n).success(function (n) {
      if (n.ErrorMessage || n.AlertType === "Error") {
        i.vm.AlertType = "Error";
        n.ErrorMessage ? i.vm.ErrorMessage = n.ErrorMessage : i.vm.AlertMessage = n.AlertMessage;
        return;
      }
      i.vm.SchumLeTashlum = n.SchumLeTashlum;
      i.vm.SugAshrai = null;
      i.sugAshraiOptions = i.getSugAshraiOptions();
      i.vm.OfenTashlum = "ashrai";
      i.vm.TokefYears = n.TokefYears;
      i.vm.CurrentMonth = n.CurrentMonth;
      i.vm.CurrentYear = n.CurrentYear;
      i.vm.PaySubjects = n.PaySubjects;
      i.Months = globals.Months;
      i.showTshGimlaWizard = true;
    });
  };
  i.backToMainPage = function () {
    i.showTshGimlaWizard = false;
    f.scrollTo(0, 0);
  };
  i.sendPniyaSnif = function (n) {
    var t = {};
    t.ChovGimla = n;
    e.post("ChovotApi/SendPniyaSnif", t).success(function (n) {
      if (n.ErrorMessage || n.AlertType === "Error") {
        i.vm.AlertType = "Error";
        n.ErrorMessage ? i.vm.ErrorMessage = n.ErrorMessage : i.vm.AlertMessage = n.AlertMessage;
        return;
      }
      i.vm.AlertMessage = n.AlertMessage;
      i.vm.AlertType = n.AlertType;
    });
  };
  i.getSugAshraiOptions = function () {
    var n = _.filter(globals.sugAshraiOptions, function (n) {
      return n.Value === 1;
    });
    return i.vm.SchumLeTashlum < i.vm.MinSchumLeTashlumCredit || !i.vm.SchumLeTashlum ? n : (i.vm.SchumLeTashlum >= i.vm.MinSchumLeTashlumCredit && i.MisTashlumimAllowed() <= 1 && (n = _.filter(globals.sugAshraiOptions, function (n) {
      return n.Value === 1 || n.Value === 3;
    })), i.vm.SchumLeTashlum >= i.vm.MinSchumLeTashlumCredit && i.MisTashlumimAllowed() > 1 && (n = globals.sugAshraiOptions), n);
  };
  i.MisTashlumimAllowed = function () {
    if (i.vm.SugAshrai === 1) return 1;
    if (i.vm.SugAshrai === 3) return i.vm.MaxTashlumimAllowedCredit;
    var n = null;
    return i.vm.SchumLeTashlum < i.vm.ChovotGimlaotNew.ChovGimlaMisTashTbl[0].MinPay ? n = i.vm.ChovotGimlaotNew.ChovGimlaMisTashTbl[0].MaxSTashlumimAlowed : (i.vm.ChovotGimlaotNew.ChovGimlaMisTashTbl.forEach(function (t) {
      i.vm.SchumLeTashlum >= t.MinPay && i.vm.SchumLeTashlum <= t.MaxPay && (n = t.MaxSTashlumimAlowed);
    }), n || (n = i.vm.ChovotGimlaotNew.ChovGimlaMisTashTbl[i.vm.ChovotGimlaotNew.ChovGimlaMisTashTbl.length - 1].MaxSTashlumimAlowed), n);
  };
  i.IsSchumChovInValidRange = function (n, t, r) {
    var e = false, f = 0, u;
    for (r.$index && (f = r.$index), t ? isNaN(n) || n == "" ? i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ErrMsg = "יש להזין מספר" : n === 0 ? i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ErrMsg = "יש להזין סכום שונה מ-0" : n < 0 ? i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ErrMsg = "יש להזין סכום גדול מ-0" : n > i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ChovProposed ? i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ErrMsg = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].Mivtza ? "הסכום הגבוה ביותר שאפשר להזין הוא " + i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ChovProposedStr + " ₪" : "יש להזין סכום נמוך מסך החוב" : (i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[f].ErrMsg = null, e = true) : e = true, i.vm.ChovotGimlaotNew.SchumKolelLeTashlum = 0, i.vm.ChovotGimlaotNew.HatzmadaKolelet = 0, u = 0; u < i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl.length; u++) i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].ErrMsg || (u !== f ? (i.vm.ChovotGimlaotNew.SchumKolelLeTashlum += Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].SchumLeTashlum) ? 0 : i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].SchumLeTashlum), Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].SchumLeTashlum)) || i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].SchumLeTashlum != i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].ChovProposed || (i.vm.ChovotGimlaotNew.HatzmadaKolelet += Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].HanachaMeshuarechet) ? 0 : i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].HanachaMeshuarechet))) : (i.vm.ChovotGimlaotNew.SchumKolelLeTashlum += Number(isNaN(n) ? 0 : n), Number(isNaN(n)) || n !== i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].ChovProposed || (i.vm.ChovotGimlaotNew.HatzmadaKolelet += Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].HanachaMeshuarechet) ? 0 : i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[u].HanachaMeshuarechet))));
    return e;
  };
  i.ChovChosen = function () {
    for (var n = 0; n < i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl.length; n++) if (i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[n].Selected) return true;
  };
  i.SchumLeTashlumChanged = function (n) {
    var t = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[n];
    t.Mivtza && (t.Selected && t.ChovProposed === new Number(t.SchumLeTashlum).valueOf() ? (t.HanachaMeshuarechet = t.Hatzmada, i.vm.ChovotGimlaotNew.HatzmadaKolelet += Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[n].HanachaMeshuarechet) ? 0 : i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[n].HanachaMeshuarechet)) : t.HanachaMeshuarechet = 0);
  };
  i.checkChov = function (n, t) {
    n ? (i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].SchumLeTashlum = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].ChovProposed, i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].HanachaMeshuarechet = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].Mivtza ? i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].Hatzmada : "", i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].ErrMsg = null, i.vm.ChovotGimlaotNew.SchumKolelLeTashlum += Number(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].SchumLeTashlum), i.vm.ChovotGimlaotNew.HatzmadaKolelet += Number(isNaN(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].HanachaMeshuarechet) ? 0 : i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].HanachaMeshuarechet)) : (i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].SchumLeTashlum = "", i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].HanachaMeshuarechet = "", setTimeout(function () {
      angular.element("#vm_SchumLeTashlum" + t).length > 0 && c.makeValid(angular.element("#vm_SchumLeTashlum" + t), "");
    }, 200), i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[t].ErrMsg = "יש להזין סכום גדול מ-0", i.CalcSchumChovKolel(t));
  };
  i.CalcSchumChovKolel = function (n) {
    var t = null, r;
    for (i.vm.ChovotGimlaotNew.SchumKolelLeTashlum = 0, i.vm.ChovotGimlaotNew.HatzmadaKolelet = 0, r = 0; r < i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl.length; r++) t = i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl[r], t.ErrMsg || !t.AllowTashlum || t.TakbulimTeremNikletuAsChov || r !== n && (i.vm.ChovotGimlaotNew.SchumKolelLeTashlum += Number(isNaN(t.SchumLeTashlum) ? 0 : t.SchumLeTashlum), i.vm.ChovotGimlaotNew.HatzmadaKolelet += Number(isNaN(t.HanachaMeshuarechet) ? 0 : t.HanachaMeshuarechet));
  };
  i.IsMisparTashlumimValid = function (n) {
    return i.CreditOrPaymentArrangement() ? n > 1 && n <= i.MisTashlumimAllowed() : n == 0 || !n;
  };
  i.SugAshraiIsValid = function (n) {
    var t = _.find(i.sugAshraiOptions, function (t) {
      return t.Value === n;
    });
    return t ? true : false;
  };
  i.IsMisparTashlumimAshraiValid = function (n) {
    return i.CreditOrPaymentArrangement() ? n > 1 && n <= i.MisTashlumimAllowed() : n == 0 || !n;
  };
  i.IsMisTashlumimAshraiRequired = function () {
    return i.vm.OfenTashlum === "ashrai" && i.CreditOrPaymentArrangement();
  };
  i.CreditOrPaymentArrangement = function () {
    var n = i.vm;
    return n.SugAshrai == 3 || n.SugAshrai == 2;
  };
  i.OfenTashlumAshraiSelectedAndZehutMeshalemNeeded = function () {
    return i.IsZehutMeshalemNeeded() && i.OfenTashlumAshraiSelected();
  };
  i.OfenTashlumAshraiSelected = function () {
    return i.vm.OfenTashlum === "ashrai";
  };
  i.IsZehutMeshalemNeeded = function () {
    var n = i.vm;
    return n.SugBaalKartis == "other";
  };
  i.IsZehutHoreNeeded = function () {
    var n = i.vm;
    return n.SugBaalKartis == "other";
  };
  i.SugAshraiIsSingleOrNull = function () {
    return i.vm.OfenTashlum == "ashrai" && (i.vm.SugAshrai == 1 || i.vm.SugAshrai == 0 || !i.vm.SugAshrai);
  };
  i.SugAshraiIsCredit = function () {
    return i.vm.OfenTashlum == "ashrai" && i.vm.SugAshrai == 3;
  };
  i.SugAshraiIsPaymentArrangement = function () {
    return i.vm.OfenTashlum == "ashrai" && i.vm.SugAshrai == 2;
  };
  i.valExpMonth = function (n) {
    var t = i.vm;
    return t.TokefKartisShana == t.CurrentYear && n < t.CurrentMonth ? false : t.TokefKartisShana == 0 ? false : true;
  };
  i.IsSchumInValidRange = function (n) {
    return i.vm.SchumMaximumLeTashlum > 0 ? n <= i.vm.SchumMaximumLeTashlum : n <= 999999;
  };
  i.misparTashlumimAshraiChanged = function () {
    i.vm.KerenRibitTashlum = null;
    i.vm.TashlumRishun = null;
    i.vm.ShaarTashlumim = null;
  };
  i.sugAshraiChanged = function () {
    var n = i.vm.SugAshrai;
    i.vm.MisTashlumimAshrai = 0;
    switch (n) {
      case 1:
        i.vm.MisTashlumimAshrai = 1;
        break;
      case 2:
        i.misTashlumim = i.vm.SchumLeTashlum ? _.filter(globals.misTashlumimCv, function (n) {
          return n.Value <= i.MisTashlumimAllowed() && n.Value != 1;
        }) : _.filter(globals.misTashlumimCv, function (n) {
          return n.Value != 1;
        });
        break;
      case 3:
        i.misTashlumim = i.vm.SchumLeTashlum ? _.filter(globals.misTashlumimVn2, function (n) {
          return n.Value <= i.MisTashlumimAllowed() && n.Value != 1;
        }) : _.filter(globals.misTashlumimVn2, function (n) {
          return n.Value != 1;
        });
    }
  };
  i.misTashlumim = i.vm.SchumLeTashlum ? _.filter(globals.misTashlumimCv, function (n) {
    return n.Value <= i.MisTashlumimAllowed() && n.Value != 1;
  }) : _.filter(globals.misTashlumimCv, function (n) {
    return n.Value != 1;
  });
  i.moveToNextStep = function () {
    i.next();
  };
  i.next = function (n) {
    h.wizard().next(n);
    (i.vm.AlertMessage || i.vm.ErrorMessage) && (i.vm.AlertMessage = null, i.vm.ErrorMessage = null, i.vm.AlertType = null);
  };
  i.prev = function () {
    (i.vm.AlertMessage || i.vm.ErrorMessage) && (i.vm.AlertMessage = null, i.vm.ErrorMessage = null, i.vm.AlertType = null);
    h.wizard().previous();
  };
  i.goBack = function () {
    h.wizard().goTo(0);
  };
  i.resetTashlumDetails = function () {
    i.vm.SugAshrai = 0;
    i.vm.MisTashlumimAshrai = null;
    i.vm.MisparKartis = null;
    i.vm.SugBaalKartis = null;
    i.vm.ZehutBaalKartis = null;
    i.vm.SugHoraatKeva = null;
  };
  i.confirmDetails = function () {
    i.vm.AlertMessage = null;
    i.vm.AlertType = null;
    i.vm.ChovotGimlaotPaymentTbl = angular.copy(i.vm.ChovotGimlaotNew.ChovotGimlaotNewTbl);
    r.laddaLoading = true;
    e.post("ChovotApi/ChovGimlaotExecutePayment", i.vm).success(function (n) {
      i.summaryErrors = [];
      i.vm = angular.copy(n);
      r.laddaLoading = false;
      i.vm.SchumLeTashlum == 0 && (i.vm.SchumLeTashlum = null);
      n.AlertType == "Success" ? (i.next(true), i.vm.AlertMessage = n.AlertMessage, i.vm.AlertType = n.AlertType, i.summaryErrors = []) : (i.vm.AlertMessage = n.AlertMessage, i.vm.AlertType = "Error");
    });
  };
  i.restartWizard = function () {
    n.reload();
  };
  i.openCheckDeteils = function (n) {
    var t = i.$new(), r;
    t.hsdr = n;
    t.close = function () {
      r.dismiss("cancel");
    };
    r = $modal.open({templateUrl: "Partials/Modal/ChovotGimlaotHesderHamchaaDetails.html?ts=" + Number(new Date), scope: t, backdrop: "static", size: "lg"});
  };
}]);
"use strict";
angular.module("app.DocumentsUpload", ["ui.router", "app.AuthService", "app.services", "tooltipSter", "jcs-autoValidate", "fluent.validation", "ngLocale"]).controller("DocumentsUploadCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "AuthService", "AUTH_EVENTS", "dataService", "$modal", "AuthSession", "SvcPhone", "FileUploader", "$interval", "SvcDateManip", "DATE_CONSTANTS", "$stateParams", function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
  function k(n) {
    var i = _.find(t.subjects, function (n) {
      return n.Value == t.vm.Nose;
    }), u;
    if (n.Text == "תביעות") return (u = _.find(n.mismachim, function (n) {
      return n.Value.substr(0, 2) == i.Value;
    }), !u) ? false : true;
    if (!i.subjectCategories) return true;
    var r = i.subjectCategories.split(","), f = _.find(r, function (t) {
      return t == n.Value;
    }), e = _.find(r, function (t) {
      return t == "-" + n.Value;
    }), o = _.find(r, function (n) {
      return n == "*";
    });
    return (f || o) && !e;
  }
  var b, w;
  t.vm = {};
  t.fileUpFocus = false;
  t.snifim = globals.snifim;
  t.subjects = [];
  t.categories = [];
  t.mismachim = [];
  t.tglExplanation = true;
  t.vm.ChildName = null;
  t.docTitle = null;
  b = h.getToken();
  t.ShowProgressBar = false;
  t.FileTypeError = false;
  t.FileSizeError = false;
  t.FileUploadNeededError = false;
  t.FileGeneralError = false;
  t.FileDimensionError = false;
  t.FilePasswordError = false;
  t.FileOpenningError = false;
  t.fileItem = null;
  t.vm.UploadedLocaleFileName = null;
  t.FileAmountError = false;
  t.NumFileLoaded = 0;
  w = t.uploader = new l({url: "api/DocumentsUploadApi/UploadFile?token=" + b, autoUpload: true, headers: {Authorization: "Bearer " + b}});
  l.FileSelect.prototype.isEmptyAfterSelection = function () {
    return true;
  };
  w.filters.push({name: "fileTypeFilter", fn: function (n) {
    var t = "|" + n.name.slice(n.name.lastIndexOf(".") + 1) + "|";
    return console.log(t), "|jpeg|jpg|png|tif|tiff|pdf|".indexOf(t.toLowerCase()) !== -1;
  }});
  w.filters.push({name: "fileSizeFilter", fn: function (n) {
    return (console.log(n.size), n.size) ? n.size < t.vm.MaxRequestLength : true;
  }});
  w.filters.push({name: "fileMinSizeFilter", fn: function (n) {
    return (console.log(n.size), angular.isNumber(n.size)) ? n.size >= 512 : true;
  }});
  w.filters.push({name: "queueLengthFilter", fn: function () {
    return console.log(this.queue.length), this.queue.length < 1;
  }});
  w.onWhenAddingFileFailed = function (n, i) {
    t.FileGeneralError = false;
    t.FileOpenningError = false;
    t.FilePasswordError = false;
    t.FileDimensionError = false;
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileMinSizeError = false;
    t.FileAmountError = false;
    switch (i.name) {
      case "fileSizeFilter":
        t.FileSizeError = true;
        break;
      case "fileTypeFilter":
        t.FileTypeError = true;
        break;
      case "fileMinSizeFilter":
        t.FileMinSizeError = true;
      case "queueLengthFilter":
        t.NumFileLoaded++;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.fileItem = null;
  };
  w.onAfterAddingFile = function () {
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileAmountError = false;
  };
  w.onAfterAddingAll = function () {
    if (t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.NumFileLoaded > 0) {
      t.FileAmountError = true;
      for (var n = 0; n < w.queue.length; n++) w.queue[n].remove();
      t.NumFileLoaded = 0;
    } else t.ShowProgressBar = true;
  };
  w.onProgressAll = function () {
    t.ShowProgressBar = true;
  };
  w.onSuccessItem = function (n, i) {
    var r, f, u;
    if (t.FileGeneralError = false, t.FileOpenningError = false, t.FilePasswordError = false, t.FileDimensionError = false, t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.fileItem = n, t.ShowProgressBar = false, t.vm.UploadedLocaleFileName = null, setTimeout(function () {
      t.$apply(function () {
        angular.element("#cancelUpload_btn").focus();
      });
    }, 300), r = true, angular.isArray(i)) i.length > 0 && (t.vm.UploadedLocaleFileName = i[0].Name, r = false); else {
      f = i;
      try {
        u = $(f).find("FileDesc:first>Name").text();
        u && u != "" && (t.vm.UploadedLocaleFileName = u, r = false);
      } catch (e) {
        r = true;
        t.FileGeneralError = true;
        t.fileItem = null;
      }
    }
    r && (t.FileGeneralError = true, t.fileItem = null);
  };
  w.onCompleteItem = function () {
    w.queue[0].remove();
    t.FileUploadNeededError = false;
    t.vm.AlertMessage = null;
    t.vm.AlertType = null;
  };
  w.onErrorItem = function (n, i) {
    t.FilePasswordError = false;
    t.FileOpenningError = false;
    t.FileDimensionError = false;
    t.FileGeneralError = false;
    switch (i) {
      case "PASSWORD-NEEDED":
        t.FilePasswordError = true;
        break;
      case "OPENING-PROBLEM":
        t.FileOpenningError = true;
        break;
      case "SMALL-IMAGE":
        t.FileDimensionError = true;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.vm.UploadedLocaleFileName = null;
  };
  t.RemoveUpload = function () {
    t.fileItem = null;
    t.vm.UploadedLocaleFileName && o.post("DocumentsUploadApi/RemoveUpload?uploadedFileName=" + t.vm.UploadedLocaleFileName).success(function (n) {
      t.vm.UploadedLocaleFileName = n;
      setTimeout(function () {
        t.$apply(function () {
          angular.element("#fileUpload_h4").focus();
        });
      }, 110);
    });
  };
  t.showLinkSetFields = false;
  o.post("DocumentsUploadApi/DocumentsUpload").success(function (n) {
    setTimeout(function () {
      t.$apply(function () {
        t.vm = n;
        t.OriginalSnif = t.vm.SnifMetapel;
        t.OriginalSnifName = t.vm.ShemSnifMetapel;
        for (var i = 0; i < globals.subjects.length; i++) t.subjects.push(globals.subjects[i]), _.some(t.vm.NoseiDrishot, function (n) {
          return n.Key === globals.subjects[i].Value;
        }) && (t.subjects[i].NoseDarush = true);
        t.subjects = _.sortBy(t.subjects, "Text");
        p.nose && p.ctg && p.mism ? (t.noseParm = p.nose, t.ctgParm = p.ctg, t.mismArr = [], p.mism ? t.mismArr = p.mism.split(",") : t.mismArr.push(null), t.mismArr.length > 1 && (t.showLinkSetFields = true), t.setFields(p.nose, p.ctg, t.mismArr[0])) : p.nose && (t.vm.Nose = p.nose, t.SubjectChanged());
      });
    }, 110);
  });
  t.setFields = function (n, i, r) {
    t.vm.Nose = n;
    t.SubjectChanged();
    t.showNoseDarushAlertAtUpload || setTimeout(function () {
      t.vm.Category = Number(i);
      t.CategoryChanged();
      setTimeout(function () {
        t.vm.Mismach = r;
      }, 110);
    }, 110);
  };
  t.submit = function () {
    if (t.vm.AlertMessage = null, t.vm.AlertType = null, t.vm.UploadedLocaleFileName) if ((t.vm.Mismach == "HA0001" || t.vm.Mismach == "HA0003") && t.vm.Nose !== "LK") {
      var n = {tik: t.vm.TikMaasik, Shem: null};
      o.post("DocumentsUploadApi/ValidateMaasik", n).success(function (n) {
        t.vm.AlertType = n.AlertType;
        t.vm.AlertMessage = n.AlertMessage;
        t.vm.AlertType == "Success" && (t.vm.AlertMessage = null, t.vm.AlertType = null, o.post("DocumentsUploadApi/SaveDocument", t.vm).success(function (n) {
          setTimeout(function () {
            t.$apply(function () {
              t.vm = n;
              t.vm.AlertType == "Error" && t.vm.AlertMessage == "יש לטעון קובץ תואם למסמך שנבחר." ? t.FileUploadNeededError = true : t.CategoryChanged();
              t.fileItem = null;
              t.vm.UploadedLocaleFileName = null;
              t.form.$setPristine();
              u.scrollTo(0, 0);
            });
          }, 110);
        }));
      });
    } else o.post("DocumentsUploadApi/SaveDocument", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          t.vm.AlertType == "Error" && t.vm.AlertMessage == "יש לטעון קובץ תואם למסמך שנבחר." ? t.FileUploadNeededError = true : t.CategoryChanged();
          t.fileItem = null;
          t.vm.UploadedLocaleFileName = null;
          t.form.$setPristine();
          u.scrollTo(0, 0);
        });
      }, 110);
    }); else t.FileUploadNeededError = true, i.laddaLoading = false;
  };
  t.sortDocsBy = function (n) {
    t.docTitle = n;
  };
  t.SubjectChanged = function () {
    var n, i;
    t.showNoseDarushAlertAtUpload = false;
    n = _.find(t.subjects, function (n) {
      return n.Value == t.vm.Nose;
    });
    n && n.NoseDarush ? (t.categories = [], t.mismachim = [], t.vm.Category = null, t.vm.Mismach = null, t.RemoveUpload(), t.showNoseDarushAlertAtUpload = true) : (t.categories = _.filter(globals.categories, function (n) {
      return k(n);
    }), t.vm.Category = null, t.vm.Mismach = null, t.vm.StartMonth = y.minValue, t.vm.EndMonth = y.minValue, t.mismachim = [], t.vm.Nose == "ZY" && t.RemoveUpload());
    i = {};
    i.Nose = t.vm.Nose;
    o.post("DocumentsUploadApi/DocumentsUploadGetSnifByNose", i).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          if (n.SnifMetapel) {
            var i = _.find(t.snifim, function (t) {
              return t.Value === n.SnifMetapel;
            });
            i ? (t.vm.SnifMetapel = n.SnifMetapel, t.vm.ShemSnifMetapel = i.Text) : (t.vm.SnifMetapel = t.OriginalSnif, t.vm.ShemSnifMetapel = t.OriginalSnifName);
          } else t.vm.SnifMetapel = t.OriginalSnif, t.vm.ShemSnifMetapel = t.OriginalSnifName;
          t.showSnif = true;
        });
      }, 110);
    });
  };
  t.forceShowingUploadRegion = function () {
    t.UserWishesScannedFileUpload = true;
  };
  t.UserWishesScannedFileUpload = false;
  t.MismachChanged = function () {
    t.UserWishesScannedFileUpload = false;
    t.tviot = h.getUser().tviot;
    var n = _.find(t.tviot, function (n) {
      return n.docCode === t.vm.Mismach;
    });
    t.tviaAddress = n ? t.vm.Mismach == "NK0502" ? n.extUrl : n.url : "https://www.btl.gov.il/%D7%98%D7%A4%D7%A1%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/tfassim-mekuvanim/Pages/default.aspx";
  };
  t.CategoryChanged = function () {
    var r, i, u, n, f;
    t.vm.StartMonth = y.minValue;
    t.vm.EndMonth = y.minValue;
    r = _.find(globals.subjects, function (n) {
      return n.Value == t.vm.Nose;
    });
    i = _.find(globals.categories, function (n) {
      return n.Value == t.vm.Category;
    });
    r && i ? (t.mismachim = t.vm.Category == 100 ? _.filter(i.mismachim, function (n) {
      return n.Value.substr(0, 2) == r.Value;
    }) : i.mismachim, u = h.getUser(), u && (n = u.ochlusin.Tarich_lida.split("/"), n.length == 3 && (f = new Date(n[2], n[1] - 1, n[0]) <= v.addYears(new Date, -85))), f && (t.mismachim = _.filter(t.mismachim, function (n) {
      return n.Value !== "MZ0012" && n.Value !== "LK0420";
    }))) : (t.categories = [], t.mismachim = []);
    t.vm.Mismach = null;
  };
  t.findMismachTeur = function () {
    var n = _.find(t.mismachim, function (n) {
      return n.Value === t.vm.Mismach;
    });
    if (n) return n.Text;
  };
  t.findMismachLink = function () {
    var n = _.find(t.mismachim, function (n) {
      return n.Value === t.vm.Mismach;
    });
    if (n) return n.Link;
  };
  i.$on(e.gotResponseFromServerThroughModalHalaa, function (n, i) {
    t.vm = i;
    t.form && t.form.$setPristine();
  });
  t.removeDoc = function (n) {
    var r = h.getUser(), i = t.$new();
    i.vm = t.vm;
    i.doc = n;
    s.open({templateUrl: "Partials/Modal/ConfirmRemoveUploadedDocument.html?ts=" + Number(new Date), controller: "ConfirmRemoveUploadedDocumentModalCtrl", scope: i});
    return;
  };
  t.getMaasikName = function () {
    setTimeout(function () {
      if (t.vm.TikMaasik) {
        var n = {tik: t.vm.TikMaasik, Shem: null};
        t.TikMaasikIsValid(t.vm.TikMaasik) && o.post("DocumentsUploadApi/GetEmployerByTikNumber", n).success(function (n) {
          t.vm.AlertType = n.AlertType;
          t.vm.AlertMessage = n.AlertMessage;
          t.vm.AlertType == "Error" && u.scrollTo(0, 0);
          t.vm.ShemMaasik = n.Shem;
        });
      }
    }, 100);
  };
  t.getChildName = function () {
    t.vm.ChildName = null;
    setTimeout(function () {
      if (t.vm.ChildId) {
        var n = {Id: t.vm.ChildId, Shem: null};
        o.post("DocumentsUploadApi/GetChildNameById", n).success(function (n) {
          t.vm.AlertType = n.AlertType;
          t.vm.AlertMessage = n.AlertMessage;
          t.vm.AlertType == "Error" && u.scrollTo(0, 0);
          t.vm.ChildName = n.Shem;
          t.vm.ChildName || t.RemoveUpload();
        }, 100);
      }
    });
  };
  i.$on(e.validationErrorSummary, function (n, i) {
    var r, u, f;
    if (t.vm.AlertMessage = null, n.currentScope.$state.$current.name === "DocumentsUpload" && i.length > 0) for (r = 0; r < i.length; r++) u = i[r].ElementId.split("_"), f = null, angular.isArray(u) && u.length > 1 && (f = u[1]), f === "ChildId" && t.RemoveUpload();
  });
  t.TikMaasikChanged = function () {
    t.vm.ShemMaasik = null;
  };
  t.ChildIdChanged = function () {
    t.vm.ChildName = null;
    t.vm.Category = null;
    t.vm.Mismach = null;
    t.mismachim = [];
  };
  t.IsSnifAllowed = function () {
    return true;
  };
  t.IsNoseAllowed = function () {
    return true;
  };
  t.IsCategoryAllowed = function () {
    return true;
  };
  t.IsMismachAllowed = function () {
    return true;
  };
  t.TlushIsSelected = function () {
    return t.vm.Mismach == "HA0001" || t.vm.Mismach == "HA0003";
  };
  t.TlushIsSelectedNotAmanot = function () {
    return (t.vm.Mismach == "HA0001" || t.vm.Mismach == "HA0003") && t.vm.Nose != "LK";
  };
  t.TikMaasikIsValid = function (n) {
    return n ? n.length == 11 : false;
  };
  t.ChildIdIsEmptyStr = function (n) {
    return !(n === "");
  };
  t.DisabledChildIsSelected = function () {
    return t.vm.Nose == "ZY";
  };
  i.EndMonthIsDisabled = function () {
    return t.vm.StartMonth ? t.vm.StartMonth.indexOf(y.minValue) == 0 : true;
  };
}]).controller("ConfirmRemoveUploadedDocumentModalCtrl", ["$scope", "$rootScope", "$modalInstance", "$state", "dataService", "AuthSession", "AUTH_EVENTS", "$window", function (n, t, i, r, u, f, e) {
  n.confirmDetails = function () {
    i.dismiss("cancel");
    u.post("DocumentsUploadApi/RemoveDocument?removeDocOid=" + n.doc.Oid + "&removeDocFileNameXml=" + n.doc.FileNameXml).success(function (i) {
      n.vm = i;
      t.$broadcast(e.gotResponseFromServerThroughModalHalaa, i);
    });
  };
  n.close = function () {
    i.dismiss("cancel");
  };
}]).controller("UploadVitalDocumentsCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "AuthService", "AUTH_EVENTS", "dataService", "$modal", "AuthSession", "SvcPhone", "FileUploader", "$interval", function (n, t, i, r, u, f, e, o, s, h, c, l) {
  var v, a;
  t.vm = {};
  t.tglExplanation = true;
  v = h.getToken();
  t.ShowProgressBar = false;
  t.FileTypeError = false;
  t.FileSizeError = false;
  t.FileUploadNeededError = false;
  t.FileGeneralError = false;
  t.FileOpenningError = false;
  t.FilePasswordError = false;
  t.FileDimensionError = false;
  t.fileItem = null;
  t.vm.UploadedLocaleFileName = null;
  t.FileAmountError = false;
  t.NumFileLoaded = 0;
  a = t.uploader = new l({url: "api/DocumentsUploadApi/UploadFile?token=" + v, autoUpload: true, headers: {Authorization: "Bearer " + v}});
  l.FileSelect.prototype.isEmptyAfterSelection = function () {
    return true;
  };
  a.filters.push({name: "fileTypeFilter", fn: function (n) {
    var t = "|" + n.name.slice(n.name.lastIndexOf(".") + 1) + "|";
    return console.log(t), "|jpeg|jpg|png|tif|tiff|pdf|".indexOf(t.toLowerCase()) !== -1;
  }});
  a.filters.push({name: "fileSizeFilter", fn: function (n) {
    return (console.log(n.size), n.size) ? n.size < t.vm.MaxRequestLength : true;
  }});
  a.filters.push({name: "fileMinSizeFilter", fn: function (n) {
    return (console.log(n.size), angular.isNumber(n.size)) ? n.size >= 512 : true;
  }});
  a.filters.push({name: "queueLengthFilter", fn: function () {
    return console.log(this.queue.length), this.queue.length < 1;
  }});
  a.onWhenAddingFileFailed = function (n, i) {
    t.FileGeneralError = false;
    t.FileOpenningError = false;
    t.FilePasswordError = false;
    t.FileDimensionError = false;
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileAmountError = false;
    switch (i.name) {
      case "fileSizeFilter":
        t.FileSizeError = true;
        break;
      case "fileTypeFilter":
        t.FileTypeError = true;
        break;
      case "fileMinSizeFilter":
        t.FileMinSizeError = true;
      case "queueLengthFilter":
        t.NumFileLoaded++;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.fileItem = null;
  };
  a.onAfterAddingAll = function () {
    if (t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.NumFileLoaded > 0) {
      t.FileAmountError = true;
      for (var n = 0; n < a.queue.length; n++) a.queue[n].remove();
      t.NumFileLoaded = 0;
    } else t.ShowProgressBar = true;
  };
  a.onAfterAddingFile = function () {
    t.FileTypeError = false;
    t.FileSizeError = false;
    t.FileAmountError = false;
  };
  a.onProgressAll = function () {
    t.ShowProgressBar = true;
  };
  a.onCompleteItem = function () {
    a.queue[0].remove();
    t.FileUploadNeededError = false;
    t.vm.AlertMessage = null;
    t.vm.AlertType = null;
  };
  a.onSuccessItem = function (n, i) {
    var r, f, u;
    if (t.FileGeneralError = false, t.FileOpenningError = false, t.FilePasswordError = false, t.FileDimensionError = false, t.FileTypeError = false, t.FileSizeError = false, t.FileAmountError = false, t.fileItem = n, t.ShowProgressBar = false, t.vm.UploadedLocaleFileName = null, r = true, angular.isArray(i)) i.length > 0 && (t.vm.UploadedLocaleFileName = i[0].Name, r = false); else {
      f = i;
      try {
        u = $(f).find("FileDesc:first>Name").text();
        u && u != "" && (t.vm.UploadedLocaleFileName = u, r = false);
      } catch (e) {
        r = true;
        t.FileGeneralError = true;
        t.fileItem = null;
      }
    }
    r && (t.FileGeneralError = true, t.fileItem = null);
  };
  a.onErrorItem = function (n, i) {
    t.FilePasswordError = false;
    t.FileOpenningError = false;
    t.FileDimensionError = false;
    t.FileGeneralError = false;
    switch (i) {
      case "PASSWORD-NEEDED":
        t.FilePasswordError = true;
        break;
      case "OPENING-PROBLEM":
        t.FileOpenningError = true;
        break;
      case "SMALL-IMAGE":
        t.FileDimensionError = true;
        break;
      default:
        t.FileGeneralError = true;
    }
    t.vm.UploadedLocaleFileName = null;
  };
  t.RemoveUpload = function () {
    t.fileItem = null;
    t.vm.UploadedLocaleFileName && o.post("DocumentsUploadApi/RemoveUpload?uploadedFileName=" + t.vm.UploadedLocaleFileName).success(function (n) {
      t.vm.UploadedLocaleFileName = n;
    });
  };
  o.post("DocumentsUploadApi/VitalDocumentsUpload").success(function (n) {
    t.vm = n;
  });
  t.submit = function () {
    t.vm.UploadedLocaleFileName ? o.post("DocumentsUploadApi/SaveVitalDocument", t.vm).success(function (n) {
      setTimeout(function () {
        t.$apply(function () {
          t.vm = n;
          i.laddaLoading = false;
          n.Token ? (h.create(n.Token, n.TokenDuration, n, "user", "טופס ויתור סודיות הועלה בהצלחה הינך רשאי/ת לצפות במבוטח", null, u.sessionStorage.AccessibilityOn), window.location = window.location.origin + window.location.pathname) : t.vm.AlertType ? (t.vm.AlertType == "Error" && t.vm.AlertMessage == "יש לטעון קובץ תואם למסמך שנבחר." && (t.FileUploadNeededError = true), t.fileItem = null, t.vm.UploadedLocaleFileName = null, t.form.$setPristine(), u.scrollTo(0, 0)) : t.errorMessage = n.ErrorMessage ? n.ErrorMessage : "מספר זהות אינו תקין.";
        });
      }, 110);
    }) : (t.FileUploadNeededError = true, i.laddaLoading = false);
  };
}]);
"use strict";
angular.module("app.DrishatMismachim", ["ui.router", "app.AuthService", "app.services", "tooltipSter", "jcs-autoValidate", "fluent.validation", "ngLocale"]).controller("DrishatMismachimCtrl", ["$state", "$scope", "$rootScope", "$location", "$window", "AuthService", "AUTH_EVENTS", "dataService", "$modal", "AuthSession", "SvcPhone", "FileUploader", function (n, t, i, r, u, f, e, o, s) {
  t.vm = {};
  t.tglExplanation = true;
  t.showPratim = false;
  t.showForm = false;
  o.post("DrishatMismachimApi/DrishatMismachim").success(function (n) {
    t.vm = n;
    t.vm.NosimDrushim.length < 2 && (t.noseIndex = 0);
    t.form.$setPristine();
    $("#redAsteriskText").addClass("non-shown");
    t.showForm = true;
  });
  t.showNoseDarush = function (n) {
    t.showPratim = true;
    t.noseIndex = n;
    $(".areaFlash").hide();
    $(".areaFlash").fadeIn(1e3);
  };
  t.printPage = function () {
    window.print();
  };
  t.openUploadDialog = function () {
    t.vm.CurrentNoseIndex = t.noseIndex;
    var n = t.$new();
    n.noseIndex = t.noseIndex;
    n.vm = t.vm;
    s.open({templateUrl: "Partials/Modal/UploadDocsDrishatMismachim.html?ts=" + Number(new Date), controller: "UploadDocsDrishatMismachimModalCtrl", scope: n, size: "lg", backdrop: "static"});
    return;
  };
  i.$on(e.serverError, function () {
    u.scrollTo(0, 0);
  });
  i.$on(e.gotResponseFromServerThroughModalDrisha, function (n, i) {
    t.vm = i;
    u.scrollTo(0, 0);
  });
  t.removeFile = function (n) {
    t.vm.CurrentFileKey = n.FileKey;
    t.vm.CurrentNoseIndex = t.noseIndex;
    var i = t.$new();
    i.file = n;
    i.vm = t.vm;
    s.open({templateUrl: "Partials/Modal/ConfirmRemoveDrishatMismachim.html?ts=" + Number(new Date), controller: "ConfirmRemoveDrishatMismachimModalCtrl", scope: i});
    return;
  };
}]).controller("UploadDocsDrishatMismachimModalCtrl", ["$scope", "$rootScope", "$modalInstance", "$state", "dataService", "AuthSession", "AUTH_EVENTS", "$window", "FileUploader", function (n, t, i, r, u, f, e, o, s) {
  var l, c, h;
  n.fileItem = null;
  n.vm.AlertType = null;
  n.fileUpFocus = false;
  n.shemNoseUpload = n.vm.NosimDrushim[n.noseIndex].Value.ShemNose;
  n.snifim = globals.snifim;
  l = f.getUser();
  c = _.find(n.snifim, function (n) {
    return n.Value == l.snifPone.toString();
  });
  c && (n.SnifName = c.Text);
  n.submit = function () {
    var f, r, o, s;
    for (n.vm.AlertType = null, n.vm.AlertMessage = null, f = false, r = 0; r < n.vm.NosimDrushim[n.noseIndex].Value.PotentialUploadAttachDocs.length; r++) n.vm.NosimDrushim[n.noseIndex].Value.PotentialUploadAttachDocs[r].Selected && (f = true);
    if (!f) for (r = 0; r < n.vm.NosimDrushim[n.noseIndex].Value.PotentialUploadMaasikDocs.length; r++) for (o = 0; o < n.vm.NosimDrushim[n.noseIndex].Value.PotentialUploadMaasikDocs[r].Value.length; o++) n.vm.NosimDrushim[n.noseIndex].Value.PotentialUploadMaasikDocs[r].Value[o].Selected && (f = true);
    f ? n.vm.UploadedLocaleFileName ? (n.fileItem = null, t.laddaLoading = true, u.post("DrishatMismachimApi/SaveDocument", n.vm).success(function (r) {
      n.vm = r;
      n.vm.AlertType == "Error" && n.vm.AlertMessage == "יש לטעון קובץ המכיל את המסמכים שסומנו." && (n.FileUploadNeededError = true, n.scrollToError("middleAlert"));
      n.vm.UploadedLocaleFileName = null;
      r.AlertType == "Success" && (i.dismiss("cancel"), t.$broadcast(e.gotResponseFromServerThroughModalDrisha, r));
    })) : (t.laddaLoading = false, n.FileUploadNeededError = true, n.scrollToError("middleAlert")) : (t.laddaLoading = false, n.vm.AlertType = "Error", n.vm.AlertMessage = "יש לסמן לפחות מסמך אחד.", s = document.getElementById("topAlert"), setTimeout(function () {
      s.scrollIntoView(true);
    }, 110));
  };
  n.scrollToError = function (n) {
    var t = document.getElementById(n);
    setTimeout(function () {
      t.scrollIntoView(true);
    }, 110);
  };
  t.$on(e.serverError, function () {
    n.vm.AlertType = "Error";
    n.vm.AlertMessage = "ארעה תקלה. אנא נסו לבצע פעולה זו מאוחר יותר.";
    o.scrollTo(0, 0);
  });
  n.checkDoc = function (t) {
    n.vm.AlertType = null;
    n.vm.AlertMessage = null;
    t.NumOfFiles > 4 && t.Selected && (n.vm.AlertType = "Error", n.vm.AlertMessage = "לא ניתן להעלות יותר מ-5 קבצים למסמך", t.Selected = false);
    t.DisableUpload && t.Selected && (n.vm.AlertType = "Error", n.vm.AlertMessage = 'לא ניתן לסמן מסמך "' + t.Teur + '". לצורך העלאת המסמך, עליך לגשת לפקיד בסניף: ' + n.SnifName, t.Selected = false);
  };
  n.ShowProgressBar = false;
  n.FileTypeError = false;
  n.FileSizeError = false;
  n.FileUploadNeededError = false;
  n.FileOpenningError = false;
  n.FilePasswordError = false;
  n.FileDimensionError = false;
  n.FileGeneralError = false;
  n.fileItem = null;
  n.FileAmountError = false;
  n.NumFileLoaded = 0;
  h = n.uploader = new s({url: "api/DrishatMismachimApi/UploadFile?token=" + f.getToken() + "&OidDrisha=" + n.vm.NosimDrushim[n.noseIndex].Value.OidDrisha, autoUpload: true, headers: {Authorization: "Bearer " + f.getToken()}});
  s.FileSelect.prototype.isEmptyAfterSelection = function () {
    return true;
  };
  h.filters.push({name: "fileTypeFilter", fn: function (n) {
    var t = "|" + n.name.slice(n.name.lastIndexOf(".") + 1) + "|";
    return console.log(t), "|jpeg|jpg|png|tif|tiff|pdf|".indexOf(t.toLowerCase()) !== -1;
  }});
  h.filters.push({name: "fileSizeFilter", fn: function (t) {
    return (console.log(t.size), t.size) ? t.size < n.vm.MaxRequestLength : true;
  }});
  h.filters.push({name: "fileMinSizeFilter", fn: function (n) {
    return (console.log(n.size), angular.isNumber(n.size)) ? n.size >= 512 : true;
  }});
  h.filters.push({name: "queueLengthFilter", fn: function () {
    return console.log(this.queue.length), this.queue.length < 1;
  }});
  h.onWhenAddingFileFailed = function (t, i) {
    n.FileGeneralError = false;
    n.FileOpenningError = false;
    n.FilePasswordError = false;
    n.FileDimensionError = false;
    n.FileTypeError = false;
    n.FileSizeError = false;
    n.FileAmountError = false;
    switch (i.name) {
      case "fileSizeFilter":
        n.FileSizeError = true;
        break;
      case "fileTypeFilter":
        n.FileTypeError = true;
        break;
      case "fileMinSizeFilter":
        n.FileMinSizeError = true;
      case "queueLengthFilter":
        n.NumFileLoaded++;
        break;
      default:
        n.FileGeneralError = true;
    }
    n.fileItem = null;
  };
  h.onAfterAddingAll = function () {
    if (n.FileTypeError = false, n.FileSizeError = false, n.FileAmountError = false, n.NumFileLoaded > 0) {
      n.FileAmountError = true;
      for (var t = 0; t < h.queue.length; t++) h.queue[t].remove();
      n.NumFileLoaded = 0;
    } else n.ShowProgressBar = true;
  };
  h.onAfterAddingFile = function () {
    n.FileTypeError = false;
    n.FileSizeError = false;
    n.FileAmountError = false;
  };
  h.onProgressAll = function () {
    n.ShowProgressBar = true;
  };
  h.onCompleteItem = function () {
    h.queue[0].remove();
    n.FileUploadNeededError = false;
    n.vm.AlertMessage = null;
    n.vm.AlertType = null;
  };
  h.onSuccessItem = function (t, i) {
    var r, f, u;
    if (n.FileGeneralError = false, n.FileOpenningError = false, n.FilePasswordError = false, n.FileDimensionError = false, n.FileTypeError = false, n.FileSizeError = false, n.FileAmountError = false, n.fileItem = t, n.ShowProgressBar = false, n.vm.UploadedLocaleFileName = null, setTimeout(function () {
      n.$apply(function () {
        angular.element("#cancelUpload_btn").focus();
      });
    }, 300), r = true, angular.isArray(i)) i.length > 0 && (n.vm.UploadedLocaleFileName = i[0].Name, r = false); else {
      f = i;
      try {
        u = $(f).find("FileDesc:first>Name").text();
        u && u != "" && (n.vm.UploadedLocaleFileName = u, r = false);
      } catch (e) {
        r = true;
        n.FileGeneralError = true;
        n.scrollToError("middleAlert");
        n.fileItem = null;
      }
    }
    r && (n.FileGeneralError = true, n.scrollToError("middleAlert"), n.fileItem = null);
  };
  h.onErrorItem = function (t, i) {
    n.FilePasswordError = false;
    n.FileOpenningError = false;
    n.FileDimensionError = false;
    n.FileGeneralError = false;
    switch (i) {
      case "PASSWORD-NEEDED":
        n.FilePasswordError = true;
        break;
      case "OPENING-PROBLEM":
        n.FileOpenningError = true;
        break;
      case "SMALL-IMAGE":
        n.FileDimensionError = true;
        break;
      default:
        n.FileGeneralError = true;
    }
    n.scrollToError("middleAlert");
    n.vm.UploadedLocaleFileName = null;
  };
  n.RemoveUpload = function () {
    n.fileItem = null;
    n.vm.UploadedLocaleFileName && u.post("DrishatMismachimApi/RemoveUpload?uploadedFileName=" + n.vm.UploadedLocaleFileName + "&OidDrisha=" + n.vm.NosimDrushim[n.noseIndex].Value.OidDrisha).success(function (t) {
      n.vm.UploadedLocaleFileName = t;
      setTimeout(function () {
        n.$apply(function () {
          angular.element("#fileUpload_h4").focus();
        });
      }, 110);
    });
  };
  n.close = function () {
    n.fileItem = null;
    n.vm.AlertType = null;
    i.dismiss("cancel");
  };
}]).controller("ConfirmRemoveDrishatMismachimModalCtrl", ["$scope", "$rootScope", "$modalInstance", "$state", "dataService", "AuthSession", "AUTH_EVENTS", "$window", function (n, t, i, r, u, f, e) {
  n.confirmDetails = function () {
    i.dismiss("cancel");
    u.post("DrishatMismachimApi/RemoveFile", n.vm).success(function (i) {
      n.vm = i;
      t.$broadcast(e.gotResponseFromServerThroughModalDrisha, i);
    });
  };
  n.close = function () {
    i.dismiss("cancel");
  };
}]);
"use strict";
angular.module("app.Registration", ["ui.router", "app.services", "app.AuthService", "tooltipSter", "mgo-angular-wizard", "jcs-autoValidate", "angular-pickadate", "fluent.validation"]).controller("RegistrationCtrl", ["$scope", "$stateParams", "AuthSession", "dataService", "$state", "$modal", "$window", "SvcEmail", "WizardHandler", "SvcPhone", "AuthService", "AUTH_EVENTS", "$rootScope", "SvcMountaineer", "svcYeshuvim", "validator", function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
  n.$root.title = "הרשמה לשירות אישי";
  n.changeEmailText = "מבקש/ת לעדכן כתובת דואר אלקטרוני אחרת";
  n.changePhoneText = "מבקש/ת לעדכן מספר טלפון נייד אחר";
  n.title = "הרשמה לשירות אישי";
  n.updateModeEmail = false;
  n.updateModePhone = false;
  n.vm = {};
  n.mobilePrefixes = globals.mobilePrefixes;
  n.telephonePrefixes = globals.telephonePrefixes;
  n.bankNames = globals.bankNames;
  n.Months = globals.Months;
  n.summaryErrors = [];
  n.Redo = null;
  e.sessionStorage.Redo ? (n.Redo = JSON.parse(e.sessionStorage.Redo), e.sessionStorage.removeItem("Redo"), n.vm = n.Redo.RedoData, n.ShowInitialDetails = false) : r.post("RegistrationApi/Registration").success(function (t) {
    t.IdPublishDate = null;
    n.vm = t;
    n.vm.Kidomet == null && (n.vm.Kidomet = "");
  });
  n.wizardFinished = function () {
    n.verifiedEmail && !n.vm.EmailKodImut && (n.vm.EmailKodImut = n.verifiedEmail.kodImut);
    n.verifiedMobilePhone && !n.vm.MobilePhoneKodImut && (n.vm.MobilePhoneKodImut = n.verifiedMobilePhone.kodImut);
    a.laddaLoading = true;
    r.post("RegistrationApi/VerifyAndRegister", n.vm).success(function (t) {
      a.laddaLoading = false;
      n.summaryErrors = [];
      t.AlertType === "Success" ? (e.sessionStorage.RegisterMsg = t.AlertMessage, u.go("login")) : (n.vm = t, setTimeout(function () {
        var t = new RegExp("\n", "g");
        n.vm.AlertMessage && (n.vm.AlertMessage = n.vm.AlertMessage.replace(t, "<br />"));
      }, 110), n.vm.AlertType == "Error" && (n.vm.Kidomet == null && (n.vm.Kidomet = ""), n.vm.KidometConfirmation == null && (n.vm.KidometConfirmation = ""), n.vm.KidometNayach == null && (n.vm.KidometNayach = ""), n.vm.KidometNayachConfirmation == null && (n.vm.KidometNayachConfirmation = ""), e.scrollTo(0, 0)));
    });
  };
  n.getAuthStatus = function () {
    return "BeforeProfileApplied";
  };
  n.multiplyDetailsSubmit = function () {
    var t, i, r, f;
    switch (n.vm.MulDetailesOpt) {
      case "שינוי":
        t = n.vm;
        t.InitialMessageType = null;
        t.InitialMessage = null;
        i = false;
        n.vm.IsMulEmail && (i = true, t.IsMulEmail = null, t.Email = null, t.EmailKodImut = null, t.EmailOpt = null);
        r = false;
        n.vm.IsMulMobilePhone && (r = true, t.IsMulMobilePhone = null, t.Kidomet = "", t.Mispar = null, t.MobilePhoneKodImut = null, t.MobilePhoneOpt = null);
        f = {RedoEmail: i, RedoMobilePhone: r, RedoData: t};
        e.sessionStorage.Redo = JSON.stringify(f);
        window.location.reload();
        break;
      case "יציאה":
        a.$broadcast(l.loginCanceled);
        break;
      case "בירור":
        n.sendMultiplyErrorEmail();
    }
  };
  n.sendMultiplyErrorEmail = function () {
    r.post("RegistrationApi/RegistrationConfirmDetailsSendErrorMultiply", n.vm).success(function (t) {
      var r, o, i, s;
      n.summaryErrors = [];
      n.vm.AlertType = t.AlertType;
      n.vm.AlertMessage = t.AlertMessage;
      r = new RegExp("\n", "g");
      n.vm = t;
      setTimeout(function () {
        a.safeApply(function () {
          n.vm.AlertMessage && (n.vm.AlertMessage = n.vm.AlertMessage.replace(r, "<br />"));
        });
      }, 110);
      n.vm.AlertType == "Error" ? (n.vm.Kidomet == null && (n.vm.Kidomet = ""), n.vm.KidometConfirmation == null && (n.vm.KidometConfirmation = ""), n.vm.KidometNayach == null && (n.vm.KidometNayach = ""), n.vm.KidometNayachConfirmation == null && (n.vm.KidometNayachConfirmation = ""), e.scrollTo(0, 0)) : (n.summaryErrors = [], n.ErrorMessage = t.ErrorMessage, n.vm.MashovSent && (n.vm.MashovSent = false, e.sessionStorage.MashovImutMsg = n.vm.AlertMessage, n.vm.AlertMessage = null, o = n.getAuthStatus(), o === "BeforeProfileApplied" ? (i = n.$new(), i.close = function () {
        a.$broadcast(l.loginCanceled);
      }, s = f.open({templateUrl: "Partials/Modal/AlertAndLogout.html?ts=" + Number(new Date), scope: i, backdrop: "static"})) : u.go("home")));
    });
  };
  n.yeshuvQueryOptions = {query: function (t) {
    t.term ? y.getYeshuvim(t.term).then(function (n) {
      t.callback({results: n});
    }) : n.vm.Yeshuv && y.getYeshuv(n.vm.Yeshuv).then(function (n) {
      t.callback({results: n});
    });
  }, dir: "rtl", minimumInputLength: 2};
  n.rechovQueryOptions = {query: function (t) {
    t.term ? y.getRehovot(n.vm.Yeshuv, t.term).then(function (n) {
      t.callback({results: n});
    }) : n.vm.CurSemelRehov && n.vm.Yeshuv && y.getRehovot(n.vm.Yeshuv, n.vm.CurSemelRehov, true).then(function (n) {
      t.callback({results: n});
    });
  }, dir: "rtl", minimumInputLength: 2};
  n.clearShowInitialDetails = function () {
    n.ShowInitialDetails = false;
    n.vm.InitialMessage = null;
    n.vm.InitialMessageType = null;
  };
  n.clearFieldsAddress = function () {
    n.vm.AddressType = null;
    n.vm.AddressOpt === "ע" ? (n.vm.CurAddressType && (n.vm.AddressType = n.vm.CurAddressType), n.vm.CurShchuna && (n.vm.Shchuna = n.vm.CurShchuna), n.vm.CurSemelYeshuv && n.vm.CurSemelYeshuv != 0 && (n.vm.Yeshuv = n.vm.CurSemelYeshuv, n.UpdateShemYeshuv(), n.vm.CurAddressType === "regular" ? (n.vm.Rehov = n.vm.CurSemelRehov, n.vm.Dira = n.vm.CurDira, n.vm.Bait = n.vm.CurBait, n.vm.Knisa = n.vm.CurKnisa) : n.vm.CurAddressType === "taDoar" && (n.vm.TaDoar = n.vm.CurTaDoar, n.vm.DoarNa = n.vm.CurDoarNa))) : n.resetAddressFields();
  };
  n.resetAddressFields = function () {
    $("#vm_Yeshuv").select2("val", null);
    $("#vm_Rehov").select2("val", null);
    n.vm.Yeshuv = undefined;
    n.vm.Rehov = undefined;
    n.vm.Dira = undefined;
    n.vm.Bait = undefined;
    n.vm.TaDoar = undefined;
    n.vm.DoarNa = undefined;
    n.vm.Knisa = undefined;
    n.vm.Shchuna = undefined;
    n.vm.Shchuna = undefined;
  };
  n.yeshuvChanged = function () {
    setTimeout(function () {
      p.makeValid(angular.element("#vm_Yeshuv"), "יש להזין ישוב");
    }, 200);
    n.vm.Rehov = undefined;
    n.UpdateShemYeshuv();
  };
  n.rehovChanged = function () {
    console.log();
    setTimeout(function () {
      p.makeValid(angular.element("#vm_Rehov"), "יש להזין רחוב");
    }, 200);
  };
  n.UpdateShemYeshuv = function () {
    n.vm.Yeshuv && y.getYeshuv(n.vm.Yeshuv).then(function (t) {
      n.ShemYeshuv = t[0].text;
    });
  };
  n.addressTypeChanged = function () {
    n.clearFieldsEmail();
  };
  n.clearFields = function () {
    n.vm.IdentificationOpt == "CC" ? (n.vm.BankCode == null, n.vm.BankBrunch = null, n.vm.BankAccntNum = null, n.bankNames = null) : (n.bankNames = globals.bankNames, n.vm.MisparKartis = null, n.vm.TokefKartisShana = 0, n.vm.TokefKartisChodesh = 0, n.vm.CVV = null);
  };
  n.changeIdentificationType = function (t) {
    n.vm.IdentificationOpt = t;
  };
  n.clearFieldsEmail = function () {
    n.verifiedEmail = null;
    n.vm.EmailOpt === "ל" ? (n.vm.Email = null, n.changeEmailText !== "מבקש/ת לעדכן כתובת דואר אלקטרוני אחרת" && n.toggleChangeEmail(), n.vm.ConfirmEmailOwner = false, n.vm.IshurDivurBaMail = false) : n.vm.IshurDivurBaMail = true;
  };
  n.clearFieldsMobilePhone = function () {
    n.verifiedMobilePhone = null;
    n.vm.MobilePhoneOpt === "ל" ? (n.vm.Kidomet = "", n.vm.Mispar = null, n.changePhoneText !== "מבקש/ת לעדכן מספר טלפון נייד אחר" && n.toggleChangePhone(), n.vm.IshurDivurBeSMS = false) : n.vm.IshurDivurBeSMS = true;
  };
  n.clearFieldsNayachPhone = function () {
    n.vm.NayachPhoneOpt && n.vm.NayachPhoneOpt !== "ל" || (n.vm.KidometNayach = "", n.vm.KidometNayachConfirmation = "", n.vm.MisparNayach = null, n.vm.MisparNayachConfirmation = null);
  };
  n.toggleChangePhone = function () {
    n.changePhoneText === "מבקש/ת לעדכן מספר טלפון נייד אחר" ? (n.updateModePhone = true, n.changePhoneText = "ביטול", $("#redAsteriskText").removeClass("non-shown")) : (n.changePhoneText = "מבקש/ת לעדכן מספר טלפון נייד אחר", n.updateModePhone = false, n.vm.Kidomet = "", n.vm.Mispar = null, n.vm.KidometConfirmation = "", n.vm.MisparConfirmation = null);
  };
  n.toggleChangeEmail = function () {
    n.changeEmailText === "מבקש/ת לעדכן כתובת דואר אלקטרוני אחרת" ? (n.updateModeEmail = true, n.changeEmailText = "ביטול", $("#redAsteriskText").removeClass("non-shown")) : (n.changeEmailText = "מבקש/ת לעדכן כתובת דואר אלקטרוני אחרת", n.updateModeEmail = false, n.vm.Email = null);
  };
  n.clearVerifiedEmail = function () {
    n.verifiedEmail = null;
  };
  n.clearVerifiedMobilePhone = function () {
    n.verifiedMobilePhone = null;
  };
  n.EmailStepVisibility = function () {
    return n.Redo && !n.Redo.RedoEmail ? false : true;
  };
  n.MobilePhoneStepVisibility = function () {
    return n.Redo && !n.Redo.RedoMobilePhone ? false : true;
  };
  n.RedoNotExists = function () {
    return n.Redo ? false : true;
  };
  n.moveToNextStep = function (t) {
    var f, u, i, o;
    if (n.vm.FinalStep = false, n.changePasswordSucceededMsg = null, n.ErrorMessage = null, n.summaryErrors && n.summaryErrors.length > 0) for (f = 0; f < n.summaryErrors.length; f++) n.summaryErrors = _.filter(n.summaryErrors, function (n) {
      return n.stepNo != t;
    });
    if (s.wizard().currentStepNumber() == 1) {
      r.post("RegistrationApi/VerifyIndentificationDetails", n.vm).success(function (t) {
        n.summaryErrors = [];
        n.vm = t;
        t.ErrorMessage && (n.ErrorMessage = t.ErrorMessage, e.scrollTo(0, 0));
        t.AlertType === "Error" ? e.scrollTo(0, 0) : n.next();
        return;
      });
      return;
    }
    if (s.wizard().currentStepNumber() == 2 && !(n.vm.EmailOpt !== "ע" && n.vm.RealImutConfirmedEmail == true) && (n.vm.EmailOpt === "כ" || n.vm.EmailOpt === "ע") && !n.verifiedEmail) {
      u = {};
      u.Ktovet = n.vm.EmailOpt === "כ" ? n.vm.CurEmail : n.vm.Email;
      u.SugKtovet = "דא";
      u.Idr = n.vm.Idr;
      r.post("MevutachApi/ConfirmDetailsSendForVerification", u).success(function (i) {
        n.summaryErrors = [];
        i.ErrorMessage ? n.ErrorMessage = i.ErrorMessage : n.openModalImutVerification(i, function (i, r) {
          i == "ok" ? (n.verifiedEmail = u, n.verifiedEmail.kodImut = r, n.next()) : i == "resend" && n.moveToNextStep(t);
        });
        return;
      });
      return;
    }
    if (s.wizard().currentStepNumber() == 3 && !(n.vm.MobilePhoneOpt !== "ע" && n.vm.RealImutConfirmedMobilePhone == true) && (n.vm.MobilePhoneOpt === "כ" || n.vm.MobilePhoneOpt === "ע") && !n.verifiedMobilePhone) {
      i = {CellMsgType: n.vm.CellMsgType};
      n.vm.MobilePhoneOpt === "כ" ? i.Ktovet = n.vm.CurMobilePhone.substr(1) : (o = Number(n.vm.Kidomet), i.Ktovet = o + "-" + n.vm.Mispar);
      i.SugKtovet = "טנ";
      n.ErrorMessage;
      n.vm.AlertType = null;
      n.vm.AlertMessage = null;
      i.Idr = n.vm.Idr;
      r.post("MevutachApi/ConfirmDetailsSendForVerification", i).success(function (r) {
        n.summaryErrors = [];
        r.ErrorMessage ? n.ErrorMessage = r.ErrorMessage : r.AlertType === "Error" ? (n.vm.AlertType = r.AlertType, n.vm.AlertMessage = r.AlertMessage) : n.openModalImutVerification(r, function (r, u) {
          r == "ok" ? (n.verifiedMobilePhone = i, n.verifiedMobilePhone.kodImut = u, n.next()) : r == "resend" && n.moveToNextStep(t);
        });
        return;
      });
      return;
    }
    s.wizard().currentStepNumber() == 4 && (n.vm.FinalStep = true);
    s.wizard().currentStepNumber() == 3 ? n.vm.EmailOpt === "ל" && n.vm.MobilePhoneOpt === "ל" ? n.ErrorMessage = "משתמשי האתר האישי חייבים שתהיה בידם כתובת דואר אלקטרוני או טלפון נייד, וזאת על מנת לאפשר שחזור קוד משתמש ו/או סיסמה" : (n.ErrorMessage = null, n.next()) : s.wizard().currentStepNumber() == 2 ? n.vm.EmailOpt !== "ל" || n.vm.MobilePhoneOpt !== "ל" || n.MobilePhoneStepVisibility() ? (n.ErrorMessage = null, n.next()) : n.ErrorMessage = "משתמשי האתר האישי חייבים שתהיה בידם כתובת דואר אלקטרוני או טלפון נייד, וזאת על מנת לאפשר שחזור קוד משתמש ו/או סיסמה" : (n.ErrorMessage = null, n.next());
  };
  n.next = function (t) {
    s.wizard().next(t);
    (n.vm.AlertMessage || n.vm.ErrorMessage) && (n.vm.AlertMessage = null, n.vm.ErrorMessage = null, n.vm.AlertType = null);
  };
  n.prev = function () {
    (n.vm.AlertMessage || n.vm.ErrorMessage) && (n.vm.AlertMessage = null, n.vm.ErrorMessage = null, n.vm.AlertType = null);
    s.wizard().previous();
  };
  n.goBack = function () {
    s.wizard().goTo(0);
  };
  n.goTo = function (t, i, r) {
    angular.isDefined(t) && s.wizard().currentStepNumber() != t + 1 && s.wizard().goTo(t, true);
    r && n.editEmp(r);
    i && setTimeout(function () {
      document.querySelector("[id $= " + i + "]") && document.querySelector("[id $= " + i + "]").focus();
    }, 110);
  };
  n.openModalImutVerification = function (t, i) {
    var r = n.$new(), u, s, o, e;
    r.vm = t;
    r.nextStep = i;
    u = "במסרון (SMS)";
    n.vm.CellMsgType == 1 && (u = "הודעה קולית");
    t.SugKtovet !== "דא" && u === "הודעה קולית" ? (r.ktovet = " בטלפון נייד שמספרו", r.cellMsgVoiceCall = u) : r.ktovet = t.SugKtovet == "דא" ? "בדואר אלקטרוני לכתובת:" : u + " לטלפון נייד שמספרו:";
    s = n.vm.EmailOpt === "כ" ? n.vm.CurEmail : n.vm.Email;
    o = null;
    o = n.vm.MobilePhoneOpt === "כ" ? n.vm.CurMobilePhone : n.vm.Kidomet + "-" + n.vm.Mispar;
    r.ktovetValue = t.SugKtovet == "דא" ? s : o;
    e = 0;
    switch (t.SugKtovet) {
      case "דא":
        e = 25e3;
        break;
      case "טנ":
        e = n.vm.CellMsgType == 0 ? 25e3 : 6e4;
    }
    return r.resendMsgSuspension = e, f.open({templateUrl: "Partials/Modal/ConfirmDetailsImutVerification.html?ts=" + Number(new Date), controller: "ConfirmDetailsImutVerificationModalCtrl", scope: r, size: "md", backdrop: "static"}), false;
  };
  n.MultiplyDetailesExistAndOptBerur = function () {
    return n.MultiplyDetailesExist() && n.vm.MulDetailesOpt == "בירור";
  };
  n.MultiplyDetailesExist = function () {
    return n.vm.IsMulEmail || n.vm.IsMulMobilePhone;
  };
  n.LongTextIsValid = function () {
    return true;
  };
  n.IsraeliIdNeeded = function () {
    return true;
  };
  n.CreditCardNeeded = function (t) {
    return n.BankSelected(n.vm) && n.IsraeliIdSelected(n.vm) ? true : t;
  };
  n.BankDetailsNeeded = function (t) {
    return n.CreditCardSelected(n.vm) && n.IsraeliIdSelected(n.vm) ? true : t;
  };
  n.IsraeliIdSelected = function () {
    return n.vm.IsrealiIdIdentification;
  };
  n.CreditCardSelected = function () {
    return n.vm.IdentificationOpt === "CC";
  };
  n.BankSelected = function () {
    return n.vm.IdentificationOpt === "BD";
  };
  n.LongTextIsValid = function () {
    return true;
  };
  n.MultiplyDetailesExistAndOptBerur = function () {
    return n.MultiplyDetailesExist() && n.vm.MulDetailesOpt == "בירור";
  };
  n.MultiplyDetailesExist = function () {
    return n.vm.IsMulEmail || n.vm.IsMulMobilePhone;
  };
  n.EmailNeeded = function () {
    return n.vm.EmailOpt === "ע";
  };
  n.EmailAddressValid = function (n) {
    return o.EmailAddressValid(n);
  };
  n.MobilePhoneNeeded = function () {
    return n.vm.MobilePhoneOpt === "ע";
  };
  n.NayachPhoneNeeded = function () {
    return n.vm.NayachPhoneOpt === "ע";
  };
  n.AddressNeeded = function () {
    return n.vm.AddressOpt === "ע";
  };
  n.PhoneIsCorrect = function (t) {
    return h.FullPhoneNumberIsCorrect(n.vm.Kidomet, t, true);
  };
  n.NayachPhoneIsCorrect = function (t) {
    return h.FullPhoneNumberIsCorrect(n.vm.KidometNayach, t, true);
  };
  n.IsEmailOwnerChecked = function (n) {
    return n == true;
  };
  n.IsMobilePhoneOwnerChecked = function (n) {
    return n == true;
  };
  n.CheckIfEqualToNayachPhone = function (t) {
    return (n.vm.KidometNayach === "" || n.vm.KidometNayach == null) && (n.vm.KidometNayachConfirmation === "" || n.vm.KidometNayachConfirmation == null) && (n.vm.MisparNayach === "" || n.vm.MisparNayach == null) && (t === "" || t == null) ? true : n.vm.KidometNayach === n.vm.KidometNayachConfirmation && t === n.vm.MisparNayach;
  };
  n.checkRegIfNotNull = function (n, t) {
    return t && t !== "" ? t.match(n) ? true : false : true;
  };
  n.CheckBaitIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[0-9]{0,5}$", t);
  };
  n.CheckDoarNaIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[א-ת0-9 ]{0,20}$", t);
  };
  n.CheckKnisaIfNotNull = function (t) {
    return n.checkRegIfNotNull("^([א-ת0-9]{1})$|^([א-ת0-9][א-ט00-9])$", t);
  };
  n.CheckDiraIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[0-9]{0,4}$", t);
  };
  n.CheckKodImutIfNotNull = function (t) {
    return n.checkRegIfNotNull("^[0-9]{6}$", t);
  };
  n.DiraOrKnisaFilled = function () {
    return n.vm.Dira && n.vm.Dira !== "" || n.vm.Knisa && n.vm.Knisa !== null;
  };
  n.SugDoarIsTaDoar = function () {
    return n.vm.AddressType === "taDoar";
  };
  n.SugDoarIsRegular = function () {
    return n.vm.AddressType === "regular";
  };
  n.valExpMonth = function (t) {
    var i = n.vm;
    return i.TokefKartisShana == i.CurrentYear && t < i.CurrentMonth ? false : i.TokefKartisShana == 0 ? false : true;
  };
  a.$on(l.validationErrorSummary, function (t, i) {
    var r, h, u, f, o;
    if (n.vm.AlertMessage = null, t.currentScope.$state.$current.name === "Registration" && n.vm.InitialMessageType !== "Error" && !n.ShowInitialDetails) {
      if (n.vm.AlertType = "Error", n.summaryErrors = [], i.length > 0) for (r = 0; r < i.length; r++) {
        if (h = null, i[r].Collection) {
          o = i[r].ElementId.split("-");
          angular.isArray(o) && o.length > 1 ? f = o[1] : (o = i[r].ElementId.split("_"), angular.isArray(o) && o.length > 1 && (f = o[1]));
          switch (i[r].Collection.split(".")[1]) {
            case "EmploymentRecord":
              h = "2. מעסיקים אחרונים";
              break;
            default:
              h = null;
          }
        } else u = i[r].ElementId.split("-"), f = "", angular.isArray(u) && u.length > 1 ? f = u[1] : (u = i[r].ElementId.split("_"), angular.isArray(u) && u.length > 1 && (f = u[1]));
        if (f !== "") {
          var a = document.querySelector("[id $= " + f + "]"), c = null, l = null;
          a ? (c = v.getClosest(a, "[wz-step]"), l = s.wizard().stepNumber(c.title || c.attributes["group-title"].value)) : h && (l = s.wizard().stepNumber(h));
        }
        n.summaryErrors.push({stepNo: l, Msg: i[r].ErrorMessage, propertyName: f, recIndex: i[r].Index});
      }
      i.length > 0 && setTimeout(function () {
        n.$apply(function () {
          angular.element("#errorLnk_0").focus();
        });
      }, 400);
      e.scrollTo(0, 0);
    }
  });
  a.$on("ConfirmDetailsSendApprovalVerificationCodeRequestResponsed", function (t, i) {
    n.vm = i;
    e.scrollTo(0, 0);
  });
}]);
function wizardButtonDirective(n) {
  angular.module("mgo-angular-wizard").directive(n, function () {
    return {restrict: "A", replace: false, require: "^wizard", link: function (t, i, r, u) {
      i.on("click", function (i) {
        i.preventDefault();
        t.$apply(function () {
          u[n.replace("wz", "").toLowerCase()](t.$eval(r[n]));
        });
      });
    }};
  });
}
angular.module("templates-angularwizard", ["step.html", "wizard.html"]);
angular.module("step.html", []).run(["$templateCache", function (n) {
  n.put("step.html", '<div ng-show="selected" ng-class="{current: selected, done: completed}" class="step" ng-transclude>\n</div>');
}]);
angular.module("wizard.html", []).run(["$templateCache", function (n) {
  n.put("wizard.html", '<div>\n    <div class="steps" ng-transclude></div>\n    <ul class="steps-indicator steps-{{steps.length}}" ng-if="!hideIndicators">\n      <li ng-class="{default: !step.completed && !step.selected, current: step.selected && !step.completed, done: step.completed && !step.selected, editing: step.selected && step.completed}" ng-repeat="step in steps">\n        <a ng-click="goTo(step)">{{step.title || step.wzTitle || step.attributes[\'group-title\'].value}}</a>\n      </li>\n    </ul>\n</div>\n');
}]);
angular.module("mgo-angular-wizard", ["templates-angularwizard", "app.directives"]);
angular.module("mgo-angular-wizard").directive("wzStep", ["$rootScope", function () {
  return {restrict: "EA", replace: true, transclude: true, scope: {wzTitle: "@", title: "@", canenter: "=", canexit: "=", canview: "=", afternext: "=", ignoreDone: "@", level: "@", group: "@", groupTitle: "@", parentGroup: "@"}, require: "^wizard", templateUrl: function (n, t) {
    return t.template || "step.html";
  }, link: function (n, t, i, r) {
    n.title = n.title || n.wzTitle || n.attributes["group-title"].value;
    n.form = t.find("form");
    r.addStep(n);
  }};
}]);
angular.module("mgo-angular-wizard").directive("wizard", ["$rootScope", function () {
  return {restrict: "EA", replace: true, transclude: true, scope: {currentStep: "=", onFinish: "=", onStepChanged: "=", hideIndicators: "=", dynamicIndicators: "=", firstFaultedProperty: "=", editMode: "=", name: "@"}, templateUrl: function (n, t) {
    return t.template || "wizard.html";
  }, controller: ["$scope", "$element", "$log", "WizardHandler", "$rootScope", function (n, t, i, r, u) {
    function f(t) {
      var i = _.filter(n.steps, function (n) {
        return n.parentGroup == t.group && (angular.isFunction(n.canview) && n.canview(n) || angular.isUndefined(n.canview));
      });
      i.length > 1 && (i[i.length - 1].level = undefined, i[i.length - 1].group = undefined, i[i.length - 1].groupTitle = undefined, i[i.length - 1].grpCorrected = undefined);
    }
    function e(t) {
      var i = _.filter(n.steps, function (n) {
        return n.parentGroup == t.group && (angular.isFunction(n.canview) && n.canview(n) || angular.isUndefined(n.canview));
      });
      i.length > 0 && angular.isUndefined(i[0].grpCorrected) && (i[0].level = "top", i[0].group = t.group, i[0].groupTitle = t.groupTitle, i[0].grpCorrected = true);
    }
    function s() {
      _.each(n.steps, function (n) {
        n.selected = false;
      });
      n.selectedStep = null;
    }
    u.$watch("_layoutType", function () {
      n._layoutType = u._layoutType;
    });
    n.callFromKeyPress = false;
    var o = true;
    r.addWizard(n.name || r.defaultName, this);
    n.faultedStepFound = false;
    n.$on("$destroy", function () {
      r.removeWizard(n.name || r.defaultName);
    });
    n.steps = [];
    n.topSteps = [];
    n.context = {};
    n.selectedStepGroup = {};
    n.$watch("selectedStep", function (t) {
      var i, r;
      n.steps && (i = _.find(n.steps, function (n) {
        return n.selected == true;
      }), i && (r = i.parentGroup || i.group), n.selectedStepGroup = _.find(n.steps, function (t) {
        var i = t.parentGroup || t.group;
        return i == r && t.level === "top" && (t.canview == null || n.$eval(t.canview) == true);
      }), setTimeout(function () {
        n.steps[0] == t ? angular.element("#srOnlyWizardStepsExplanation").focus() : (angular.element("#routeDumb").focus(), setTimeout(function () {
          angular.element("#tab" + n.selectedStepGroup.$id).focus();
        }, 200));
      }, 110));
    });
    n.$watch("currentStep", function (t) {
      if (t) {
        var i = n.selectedStep.title || n.selectedStep.wzTitle || n.selectedStep.attributes["group-title"].value;
        n.selectedStep && i !== n.currentStep && n.goTo(_.findWhere(n.steps, {title: n.currentStep}));
      }
    });
    n.$watch("[editMode, steps.length]", function () {
      var t = n.editMode;
      _.isUndefined(t) || _.isNull(t) || t && _.each(n.steps, function (n) {
        n.completed = true;
      });
    }, true);
    this.lastStepIndex = function () {
      return n.lastStepIndex;
    };
    this.getLastStep = function () {
      return n.getPrevStep(true);
    };
    this.addStep = function (t) {
      var r, e, u, o, f, i;
      if (n.steps.length > 0) for (i = n.steps.length - 1; i >= 0; i--) angular.isFunction(n.steps[i].canview) && !n.steps[i].canview(n.steps[i]) && n.steps[i].level === "top" && t.parentGroup == n.steps[i].group && angular.isUndefined(n.steps[i].grpCorrected) && (r = false, angular.isFunction(t.canview) ? t.canview(t) && (r = true) : angular.isUndefined(t.canview) && (r = true), r && (e = _.filter(n.steps, function (n) {
        return (n.parentGroup == t.group || n.parentGroup == t.parentGroup) && (angular.isFunction(n.canview) && n.canview(n) || angular.isUndefined(n.canview)) && n.grpCorrected;
      }), e.length == 0 && (t.level = "top", t.group = n.steps[i].group, t.groupTitle = n.steps[i].groupTitle, t.grpCorrected = true)));
      if (t.wzTitle && (t.wzTitlet = t.wzTitle.replace(/\d./g, "")), t.title && (t.titleShort = t.title.replace(/\d./g, "")), n.firstFaultedProperty && !n.faultedStepFound) {
        for (u = n.firstFaultedProperty.split("^"), i = 0; i < u.length; i++) if (t.form[0].querySelector('[id *= "' + u[i] + '"]') || t.form.prevObject[0].querySelector('[id *= "' + u[i] + '"]')) {
          n.faultedStepFound = true;
          t.firstEditNeeded = true;
          break;
        }
        n.faultedStepFound || (t.completed = true);
      }
      if (n.steps.push(t), n.showSteps = true, n.steps.length > 0 && (o = _.filter(n.steps, function (n) {
        return angular.isFunction(n.canview) && n.canview(n) || angular.isUndefined(n.canview);
      }), o.length == 1 && (n.showSteps = false)), n.topSteps = _.filter(n.steps, function (n) {
        return n.level === "top";
      }), t.hidden = t.canview === undefined ? false : !t.canview(t), f = false, n.steps.length > 0) for (i = 0; i < n.steps.length; i++) n.steps[i].hidden || f || (f = true, n.goTo(n.steps[i], true));
    };
    n.getShalavTitle = function (t) {
      var i = t.group || t.parentGroup;
      return i === n.currentGroup ? "שלב " + t.groupTitle + " תת שלב " + (n.selectedStep.titleShort || n.selectedStep.wzTitleShort) : "שלב " + t.groupTitle;
    };
    this.context = n.context;
    this.goToNextStep = function (t, i) {
      n.goTo(this.getNextStep(), t, i, true);
    };
    this.goToPrevStep = function (t, i) {
      n.goTo(this.getPrevStep(), t, i);
    };
    n.goToNextStep = function (t, i) {
      n.goTo(n.getNextStep(), t, i, true);
    };
    n.goToPrevStep = function (t, i) {
      n.goTo(n.getPrevStep(), t, i);
    };
    n.goTo = function (t, i, r, h) {
      var y, l, a, p, c, v;
      if (n.currentStepNumber() > 0 && (n.lastStepIndex = n.currentStepNumber() - 1), y = false, n.lastStepIndex > _.indexOf(n.steps, t) && (r = true, y = true), o) s(), n.selectedStep = t, _.isUndefined(n.currentStep) || (n.currentStep = t.title || t.wzTitle || t.attributes["group-title"].value), t.selected = true, n.$emit("wizard:stepChanged", {step: t, index: _.indexOf(n.steps, t)}), o = false, n.currentGroup = t.group, u.$root.$broadcast("wizard-is-ready"); else {
        if (!t || !t.completed && !t.ignoreDone && !i && !t.firstEditNeeded) return false;
        if (a = false, p = false, n.currentStepNumber() > 0 ? l = n.currentStepNumber() - 1 : n.currentStepNumber() === 0 && (l = 0), c = n.steps[l], y && n.steps[l].completed && (n.steps[l].firstEditNeeded = true), !r && c.form && $(c.form).hasClass("ng-invalid") && (n.callFromNextKeyPress && (n.callFromNextKeyPress = false, u.$root.$broadcast("wizard-current-form-is-invalid")), c = null), c && (n.callFromNextKeyPress && (n.callFromNextKeyPress = false, u.$root.$broadcast("wizard-current-form-is-valid")), console.log("steps[thisStep] Data: ", c.canexit), (typeof c.canexit == "undefined" || c.canexit(n.context) === true) && (a = true)), a) {
          if (!(t.canview === undefined)) {
            if (!t.canview(t)) return t.hidden = true, false;
            t.hidden = false;
          }
          (t.canenter === undefined || t.canenter(n.context) === true) && (p = true);
        }
        if (a && p) h && (n.selectedStep.completed = true, n.selectedStep.firstEditNeeded = null), s(), n.selectedStep = t, _.isUndefined(n.currentStep) || (n.currentStep = t.title || t.wzTitle || t.attributes["group-title"].value), t.selected = true, n.$emit("wizard:stepChanged", {step: t, index: _.indexOf(n.steps, t)}), console.log("current step number: ", n.currentStepNumber()); else return false;
      }
      if (n.dynamicIndicators) for (v = n.currentStepNumber(); v < n.steps.length; v++) t = n.steps[v], t.canview === undefined ? t.hidden = false : (t.hidden = !t.canview(t), t.level === "top" && (t.hidden ? e(t) : f(t)));
      if (n.currentGroup = n.selectedStep.group ? n.selectedStep.group : n.selectedStep.parentGroup, n.onStepChanged) n.onStepChanged(n.selectedStep);
      return true;
    };
    n.currentStepNumber = function () {
      return _.indexOf(n.steps, n.selectedStep) + 1;
    };
    this.currentStepNumber = function () {
      return n.currentStepNumber();
    };
    n.getNextStep = function () {
      for (var i = _.indexOf(n.steps, n.selectedStep) + 1, t;;) {
        if (i === n.steps.length) return null;
        if (t = n.steps[i], t.canview === undefined) return t;
        if (t.canview(t)) return t.hidden = false, n.dynamicIndicators || t.level === "top" && f(t), t;
        t.hidden = true;
        n.dynamicIndicators || t.level === "top" && e(t);
        i++;
      }
    };
    this.getNextStep = function () {
      for (var i = _.indexOf(n.steps, n.selectedStep) + 1, t;;) {
        if (i === n.steps.length) return null;
        if (t = n.steps[i], t.canview === undefined) return t;
        if (t.canview(t)) return t.hidden = false, n.dynamicIndicators || t.level === "top" && f(t), t;
        t.hidden = true;
        n.dynamicIndicators || t.level === "top" && e(t);
        i++;
      }
    };
    this.next = function (t) {
      var r, i;
      if (angular.isFunction(t)) {
        if (!t()) return;
      } else if (angular.isDefined(t)) for (r = 0; r < n.steps.length - 1; r++) n.steps[r].lockStepFlag = true;
      if (n.selectedStep.firstEditNeeded = null, n.selectedStep.completed = true, i = this.getNextStep(), i === null) {
        this.finish();
        return;
      }
      n.goTo(i, true);
      i.afternext === undefined || i.afternext(n.context);
    };
    n.showUlSteps2 = function () {
      var t = _.find(n.steps, function (t) {
        return t.parentGroup === n.currentGroup;
      });
      return t ? true : false;
    };
    this.goTo = function (t, i) {
      n.currentStepNumber() > 0 && (n.lastStepIndex = n.currentStepNumber() - 1);
      var r;
      r = _.isNumber(t) ? n.steps[t] : _.findWhere(n.steps, {title: t});
      n.goTo(r, true, i);
    };
    this.stepNumber = function (t) {
      return _.indexOf(n.steps, _.findWhere(n.steps, {title: t}));
    };
    this.finish = function () {
      n.onFinish && n.onFinish();
    };
    n.getPrevStep = function (t) {
      var r = _.indexOf(n.steps, n.selectedStep) - 1, i;
      for (t && (r = n.lastStepIndex ? n.lastStepIndex : -1);;) {
        if (r < 0) return null;
        if (i = n.steps[r], i.canview === undefined) return i;
        if (i.canview(i)) return i.hidden = false, n.dynamicIndicators || i.level === "top" && f(i), i;
        r--;
        i.hidden = true;
        n.dynamicIndicators || i.level === "top" && e(i);
      }
    };
    this.getPrevStep = function () {
      for (var i = _.indexOf(n.steps, n.selectedStep) - 1, t;;) {
        if (i < 0) return null;
        if (t = n.steps[i], t.canview === undefined) return t;
        if (t.canview(t)) return t.hidden = false, n.dynamicIndicators || t.level === "top" && f(t), t;
        i--;
        t.hidden = true;
        n.dynamicIndicators || t.level === "top" && e(t);
      }
    };
    this.cancel = this.previous = function () {
      var t = this.getPrevStep();
      t && n.goTo(t, true, true);
    };
  }], link: function (n, t) {
    t.bind("keydown", function (t) {
      var i = this.parentElement.firstElementChild.attributes;
      (t.which === 37 || t.which === 40) && i.length > 0 && i.template && i.template.value.indexOf("FlexTabbedWizard") >= 0 && t.target.attributes.role && t.target.attributes.role.value === "tab" && n.$apply(function () {
        n.callFromNextKeyPress = true;
        n.goToNextStep(true, false);
      });
      (t.which === 39 || t.which === 38) && i.length > 0 && i.template && i.template.value.indexOf("FlexTabbedWizard") >= 0 && t.target.attributes.role && t.target.attributes.role.value === "tab" && n.$apply(function () {
        n.callFromBackKeyPress = true;
        n.goToPrevStep(true, true);
      });
    });
  }};
}]);
wizardButtonDirective("wzNext");
wizardButtonDirective("wzPrevious");
wizardButtonDirective("wzFinish");
wizardButtonDirective("wzCancel");
angular.module("mgo-angular-wizard").factory("WizardHandler", function () {
  var n = {}, t = {};
  return n.defaultName = "defaultWizard", n.addWizard = function (n, i) {
    t[n] = i;
  }, n.removeWizard = function (n) {
    delete t[n];
  }, n.wizard = function (i) {
    var r = i;
    return i || (r = n.defaultName), t[r];
  }, n;
});
"use strict";
function BtlMobileFix() {
  navigator.userAgent.indexOf("iPhone OS 11_1") > 0 && ($("div.navbar-fixed-top").addClass("ios11_1fix"), $(document.body).addClass("ios11_1"));
}
angular.module("app", ["ui.router", "app.filters", "app.services", "app.directives", "app.controllers", "ui.bootstrap", "ui.bootstrap.collapse", "app.AuthService", "app.login", "angular-loading-bar", "jcs-autoValidate", "angular-pickadate", "fluent.validation", "app.Personal", "app.Chovot", "app.DocumentsUpload", "app.DrishatMismachim", "ngLocale", "ngAria", "angularFileUpload", "ladda", "rt.select2", "ngAnimate", "vcRecaptcha", "angular-google-analytics"]).config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$provide", "USER_ROLES", "UserAuthenticationStatusProvider", "AnalyticsProvider", function (n, t, i, r, u, f, e) {
  i.otherwise("/personal");
  i.when("/KLALI/KOD_SODI", "/Personal/KodSodi");
  i.when("/BERURIM/BERUR_GALASH", "/Galash/Berur");
  n.state("MobileApp", {url: "/mobile", controller: "MobileCtrl"}).state("router", {url: "/personal", controller: "RouterCtrl"}).state("home", {url: "/Personal/Summary", templateUrl: "personal/Summary", controller: "PersonalCtrl", title: "מידע אישי"}).state("IdkunIsuk", {url: "/Personal/Isuk", templateUrl: "Personal/Isuk", controller: "PersonalIsukCtrl", title: "עדכון עיסוק"}).state("DocumentsUpload", {url: "/DocumentsUpload/:nose/:ctg/:mism", templateUrl: "DocumentsUpload", controller: "DocumentsUploadCtrl", title: "העלאת מסמכים"}).state("DrishatMismachim", {url: "/DrishatMismachim", templateUrl: "DrishatMismachim", controller: "DrishatMismachimCtrl", title: "מסמכים נדרשים"}).state("Tviot", {url: "/Tviot", templateUrl: "Tviot", controller: "TviotCtrl", title: "תביעות"}).state("Mismachim", {url: "/Mismachim", templateUrl: "Mismachim", controller: "MismachimCtrl", title: "מסמכים שהתקבלו"}).state("Michtavim", {url: "/Michtavim", templateUrl: "Michtavim", controller: "MichtavimCtrl", title: "מכתבים"}).state("Protocols", {url: "/Michtavim/Protocols", templateUrl: "Michtavim", controller: "ProtocolsCtrl", title: "פרוטוקולים"}).state("ContactUs", {url: "/ContactUs/:nose", templateUrl: "ContactUs", controller: "ContactUsCtrl", title: "צור קשר"}).state("CallUsMashov", {url: "/Mashov", templateUrl: "Mashov", controller: "MashovCtrl", title: "משוב"}).state("KishurimOdot", {url: "/Odot", templateUrl: "Odot", controller: "OdotCtrl", Roles: [u.all], title: "אודות"}).state("Odot", {url: "/Odot", templateUrl: "Odot", controller: "OdotCtrl", Roles: [u.all], title: "אודות"}).state("TnaeyShimush", {url: "/TnaeyShimush", templateUrl: "TnaeyShimush", controller: "TnaeyShimushCtrl", Roles: [u.all], title: "תנאי שימוש"}).state("Kesher", {url: "/Kesher", templateUrl: "Kesher", controller: "KesherCtrl", Roles: [u.all], title: "תמיכה"}).state("AvtachatMeida", {url: "/AvtachatMeida", templateUrl: "AvtachatMeida", controller: "AvtachatMeidaCtrl", Roles: [u.all], title: "אבטחת מידע"}).state("ForgotPassword", {url: "/ForgotPassword", templateUrl: "ForgotPassword", controller: "ForgotPasswordCtrl", Roles: [u.all], title: "שכחתי סיסמה או קוד משתמש"}).state("QRCodeRegistrationUser", {url: "/QrCode/Registration/user/:token?", templateUrl: "QRCode/UserRegistration", controller: "QRCodeRegistrationCtrl", Roles: [u.all], title: "הפקת קוד משתמש לאתר שירות אישי"}).state("QRCodeRegistrationKSodi", {url: "/QrCode/Registration/ksodi/:token", templateUrl: "QRCode/KSodiRegistration", controller: "QRCodeRegistrationCtrl", Roles: [u.all], title: "הפקת קוד סודי לאתר שירות אישי"}).state("VaadotRefuiyot", {url: "/VaadotRefuiyot", templateUrl: "VaadotRefuiyot/Berur", controller: "VaadotRefuiyotCtrl", title: "ועדות רפואיות"}).state("TatBerur", {url: "/Mevutach/TatBerur/:id", templateUrl: "Mevutach/TatBerur", controller: "TatBerurCtrl", title: "רשימה"}).state("IshurimList", {url: "/:subMenu/IshurimList/:nose", templateUrl: "Ishurim", controller: "IshurimCtrl", title: "אישורים"}).state("showPdf", {url: "/showPdf/:url/:errMsg/:track/:shem/:ind/:isAccessibleForSR", templateUrl: "Partials/IframeResult.html?ts=" + Number(new Date), controller: "ShowPdfCtrl", title: "הצגת מסמך"}).state("LinksExternal", {url: "/Links/External/:key", templateUrl: "Links/External", controller: "LinksExternalCtrl", title: "הפניה אל מחוץ לאתר", id: "app.LinksExternal"}).state("/views/404", {url: "/views/404", templateUrl: "views/404", controller: "Error404Ctrl", Roles: [u.all], title: "שגיאה"});
  window.sessionStorage.smartLogin ? n.state("login", {url: "/login", controller: "BtlSiteCtrl", Roles: [u.all]}) : (n.state("login", {url: "/login", templateUrl: "login", controller: "LoginCtrl", Roles: [u.all], title: "כניסה לשירות אישי"}), n.state("loginPin", {url: "/loginPin", templateUrl: "login/Pin", controller: "LoginPinCtrl", title: "כניסה לשירות אישי - ניתוב"}).state("ChangeInternalPassword", {url: "/ChangeInternalPassword/:userId", templateUrl: "login/ChangeInternalPassword", controller: "ChangeInternalPasswordCtrl", Roles: [u.all], title: "שינוי סיסמה"}));
  window._btlDev ? e.startOffline(true) : e.setAccount("UA-58103841-1");
}]).run(["$templateCache", "$rootScope", "$state", "$stateParams", "AuthService", "AUTH_EVENTS", "Analytics", function (n, t, i, r) {
  var u = angular.element("#ui-view");
  n.put(u.data("tmpl-url"), u.html());
  t.$state = i;
  t.$stateParams = r;
}]);
var globals = {};
globals.SugSherutList = [{Text: "רגיל", Value: "רג"}, {Text: "חצי יומי", Value: "חצ"}];
globals.MaamadList = [{Text: "לא שכיר ולא עצמאי", Value: "לל"}, {Text: "עצמאי", Value: "עצ"}, {Text: "תלמיד", Value: "תל"}];
globals.mobilePrefixes = [{Text: "", Value: ""}, {Text: "050", Value: "050"}, {Text: "051", Value: "051"}, {Text: "052", Value: "052"}, {Text: "053", Value: "053"}, {Text: "054", Value: "054"}, {Text: "055", Value: "055"}, {Text: "056", Value: "056"}, {Text: "057", Value: "057"}, {Text: "058", Value: "058"}, {Text: "059", Value: "059"}];
globals.telephonePrefixes = [{Text: "02", Value: "02"}, {Text: "03", Value: "03"}, {Text: "04", Value: "04"}, {Text: "08", Value: "08"}, {Text: "09", Value: "09"}, {Text: "071", Value: "071"}, {Text: "072", Value: "072"}, {Text: "073", Value: "073"}, {Text: "074", Value: "074"}, {Text: "076", Value: "076"}, {Text: "077", Value: "077"}, {Text: "078", Value: "078"}];
globals.isukStatuses = [{Text: "לא עובד", Value: ""}, {Text: "שכיר", Value: "עעו"}, {Text: "פנסיונר", Value: "עפנ"}];
globals.Months = [{Text: "01", Value: 1}, {Text: "02", Value: 2}, {Text: "03", Value: 3}, {Text: "04", Value: 4}, {Text: "05", Value: 5}, {Text: "06", Value: 6}, {Text: "07", Value: 7}, {Text: "08", Value: 8}, {Text: "09", Value: 9}, {Text: "10", Value: 10}, {Text: "11", Value: 11}, {Text: "12", Value: 12}];
globals.misTashlumim = [{Text: "-בחר/י תשלומים-", Value: 0}, {Text: "2", Value: 2}, {Text: "3", Value: 3}, {Text: "4", Value: 4}, {Text: "5", Value: 5}, {Text: "6", Value: 6}, {Text: "7", Value: 7}, {Text: "8", Value: 8}, {Text: "9", Value: 9}, {Text: "10", Value: 10}, {Text: "11", Value: 11}, {Text: "12", Value: 12}];
globals.misTashlumimVn2 = [{Text: "-בחר/י תשלומים-", Value: 0}, {Text: "1", Value: 1}, {Text: "2", Value: 2}, {Text: "3", Value: 3}, {Text: "4", Value: 4}, {Text: "5", Value: 5}, {Text: "6", Value: 6}, {Text: "7", Value: 7}, {Text: "8", Value: 8}, {Text: "9", Value: 9}, {Text: "10", Value: 10}, {Text: "11", Value: 11}, {Text: "12", Value: 12}, {Text: "13", Value: 13}, {Text: "14", Value: 14}, {Text: "15", Value: 15}, {Text: "16", Value: 16}, {Text: "17", Value: 17}, {Text: "18", Value: 18}, {Text: "19", Value: 19}, {Text: "20", Value: 20}, {Text: "21", Value: 21}, {Text: "22", Value: 22}, {Text: "23", Value: 23}, {Text: "24", Value: 24}, {Text: "25", Value: 25}, {Text: "26", Value: 26}, {Text: "27", Value: 27}, {Text: "28", Value: 28}, {Text: "29", Value: 29}, {Text: "30", Value: 30}, {Text: "31", Value: 31}, {Text: "32", Value: 32}, {Text: "33", Value: 33}, {Text: "34", Value: 34}, {Text: "35", Value: 35}, {Text: "36", Value: 36}, {Text: "37", Value: 37}, {Text: "38", Value: 38}, {Text: "39", Value: 39}, {Text: "40", Value: 40}, {Text: "41", Value: 41}, {Text: "42", Value: 42}, {Text: "43", Value: 43}, {Text: "44", Value: 44}, {Text: "45", Value: 46}, {Text: "46", Value: 45}, {Text: "47", Value: 47}, {Text: "48", Value: 48}];
globals.misTashlumimCv = [{Text: "-בחר/י תשלומים-", Value: 0}, {Text: "1", Value: 1}, {Text: "2", Value: 2}, {Text: "3", Value: 3}, {Text: "4", Value: 4}, {Text: "5", Value: 5}, {Text: "6", Value: 6}, {Text: "7", Value: 7}, {Text: "8", Value: 8}, {Text: "9", Value: 9}, {Text: "10", Value: 10}, {Text: "11", Value: 11}, {Text: "12", Value: 12}, {Text: "18", Value: 18}, {Text: "24", Value: 24}, {Text: "30", Value: 30}, {Text: "36", Value: 36}, {Text: "42", Value: 42}, {Text: "48", Value: 48}, {Text: "60", Value: 60}, {Text: "72", Value: 72}, {Text: "84", Value: 84}];
globals.sugAshraiOptions = [{Text: "תשלום אחד", Value: 1}, {Text: "תשלומים", Value: 2}, {Text: "קרדיט", Value: 3}];
globals.snifim = [{Value: "1764", Text: "אום אל פחם"}, {Value: "5253", Text: "אופקים"}, {Value: "3936", Text: "אור יהודה"}, {Value: "1763", Text: "אור עקיבא"}, {Value: "5258", Text: "אילת"}, {Value: "3785", Text: "אלעד"}, {Value: "2407", Text: "אריאל"}, {Value: "3800", Text: "אשדוד"}, {Value: "2900", Text: "אשקלון"}, {Value: "1762", Text: "באקה אל גרביה"}, {Value: "5200", Text: "באר שבע"}, {Value: "268", Text: "בית שאן"}, {Value: "2540", Text: "בית שמש"}, {Value: "4148", Text: "ביתר עילית"}, {Value: "3700", Text: "בני ברק"}, {Value: "3100", Text: "בת ים"}, {Value: "5255", Text: "דימונה"}, {Value: "2327", Text: "הרצליה"}, {Value: "1765", Text: "זכרון יעקב"}, {Value: "1700", Text: "חדרה"}, {Value: "1600", Text: "חולון"}, {Value: "1000", Text: "חיפה"}, {Value: "114", Text: "חצור הגלילית"}, {Value: "100", Text: "טבריה"}, {Value: "1078", Text: "טירת הכרמל"}, {Value: "2683", Text: "יבנה"}, {Value: "2408", Text: "יהוד"}, {Value: "266", Text: "יקנעם עילית"}, {Value: "5256", Text: "ירוחם"}, {Value: "4100", Text: "ירושלים"}, {Value: "4500", Text: "ירושלים צפון"}, {Value: "650", Text: "ירכא"}, {Value: "2300", Text: "כפר סבא"}, {Value: "3500", Text: "כרמיאל"}, {Value: "113", Text: "מגאר"}, {Value: "267", Text: "מגדל העמק"}, {Value: "2534", Text: "מודיעין"}, {Value: "2512", Text: "מודיעין עלית"}, {Value: "4142", Text: "מעלה אדומים"}, {Value: "649", Text: "מעלות תרשיחה"}, {Value: "5257", Text: "מצפה רמון"}, {Value: "3132", Text: "משנה בת ים"}, {Value: "600", Text: "נהריה"}, {Value: "500", Text: "נצרת"}, {Value: "571", Text: "נצרת עילית"}, {Value: "5254", Text: "נתיבות"}, {Value: "2100", Text: "נתניה"}, {Value: "646", Text: "עכו"}, {Value: "1080", Text: "עספיא-דאלית אל כרמל"}, {Value: "200", Text: "עפולה"}, {Value: "5259", Text: "ערד"}, {Value: "1761", Text: "פרדס חנה"}, {Value: "2400", Text: "פתח תקוה"}, {Value: "104", Text: "צפת"}, {Value: "111", Text: "קצרין"}, {Value: "900", Text: "קריות"}, {Value: "115", Text: "קרית שמונה"}, {Value: "918", Text: "קרית אתא"}, {Value: "2697", Text: "קרית גת"}, {Value: "2696", Text: "קרית מלאכי"}, {Value: "2303", Text: "קרני שומרון"}, {Value: "2489", Text: "ראש העין"}, {Value: "2800", Text: "ראשון לציון"}, {Value: "5251", Text: "רהט"}, {Value: "2600", Text: "רחובות"}, {Value: "2500", Text: "רמלה"}, {Value: "3900", Text: "רמת גן"}, {Value: "2999", Text: "שדרות"}, {Value: "572", Text: "שפרעם"}, {Value: "3000", Text: "תל אביב"}, {Value: "573", Text: "תרדיון"}];
globals.subjects = [{Value: "HV", subSubject: 36, Text: "אבטלה", subjectCategories: "100,400,130,150,200,210,310,370,380,600,1360,1480"}, {Value: "GB", subSubject: 51, Text: "איבה", subjectCategories: "100,400,130,150,200,310,380,1220,1360,1400,1480"}, {Value: "AZ", subSubject: 2, Text: "אסיר ציון", subjectCategories: "100,130,150,380,1360,1400"}, {Value: "VN", subSubject: 52, Text: "ביטוח וגבייה", subjectCategories: "*,-310,-1140,-1460,-220"}, {Value: "ZG", subSubject: 34, Text: "גזזת", subjectCategories: "100,130,150,380,1480"}, {Value: "GE", subSubject: 70, Text: "דמי לידה/מענק לידה", subjectCategories: "100,400,130,150,200,370,380,1360,1400,1480"}, {Value: "GK", subSubject: 60, Text: "דמי פגיעה", subjectCategories: "*,-160,-180,-210,-1140,-1460,-220"}, {Value: "DK", subSubject: 16, Text: "דמי קבורה", subjectCategories: "100,380,1480"}, {Value: "DT", subSubject: 50, Text: "דמי תאונה", subjectCategories: "100,400,130,150,160,200,370,380,1400,1480"}, {Value: "GH", subSubject: 7, Text: "הבטחת הכנסה", subjectCategories: "*,-1460,-220"}, {Value: "VR", subSubject: 99, Text: "ועדות רפואיות-נפגעי עבודה/מס הכנסה", subjectCategories: "130,600,1360,1480"}, {Value: "XN", subSubject: 98, Text: "ועדות רפואיות-נכות כללית", subjectCategories: "130,600,1360,1480"}, {Value: "GZ", subSubject: 4, Text: "אזרח ותיק", subjectCategories: "*,-1220,-1460,-220"}, {Value: "GL", subSubject: 5, Text: "ילדים", subjectCategories: "100,400,130,150,310,380,1400,1480"}, {Value: "ZY", subSubject: 30, Text: "ילד נכה", subjectCategories: "100,400,130,150,210,310,380,600,1360,1400,1480"}, {Value: "GW", subSubject: 25, Text: "מזונות", subjectCategories: "*,-130,-160,-180,-210,-1140,-1220,-1460,-220"}, {Value: "NK", subSubject: 59, Text: "מילואים", subjectCategories: "100,400,150,310,370,380,600,1480"}, {Value: "HC", subSubject: 90, Text: "מענק לחייל משוחרר", subjectCategories: "100,400,150,200,310,370,380,600,1480"}, {Value: "NY", subSubject: 15, Text: "ניידות", subjectCategories: "*,-180,-210,-1140,-1220,-1400,-1460,-220"}, {Value: "GN", subSubject: 33, Text: "נכות כללית", subjectCategories: "*,-160,-180,-1220,-1460,-220"}, {Value: "GU", subSubject: 10, Text: "נכות מעבודה", subjectCategories: "*,-160,-180,-210,-310,-1460,-220"}, {Value: "SD", subSubject: 96, Text: "סיעוד", subjectCategories: "100,400,130,150,180,200,370,380,1140,1480"}, {Value: "ZP", subSubject: 41, Text: "פוליו", subjectCategories: "100,130,150,310,380,600,1400,1480"}, {Value: "PS", subSubject: 15, Text: "פשיטות רגל", subjectCategories: "400,150,310,600,1360,1480"}, {Value: "GR", subSubject: 1, Text: "שאירים", subjectCategories: "100,400,150,160,180,200,210,310,370,380,1220,1400,1480"}, {Value: "RH", subSubject: 81, Text: "שיקום", subjectCategories: "*,-210,-220"}, {Value: "ZX", subSubject: 29, Text: "קצבת שירותים מיוחדים", subjectCategories: "100,400,130,150,200,310,380,600,1140,1360,1400,1480"}, {Value: "GF", subSubject: 78, Text: "שמירת הריון", subjectCategories: "100,400,130,150,200,370,380,600,1220,1400,1480"}, {Value: "LK", subSubject: 86, Text: "אמנות בינלאומיות", subjectCategories: "100,400,130,150,200,210,310,370,380,600,1400,1480"}];
globals.categories = [{Value: 100, Text: "תביעות/טפסים", mismachim: [{Text: "תביעה לתשלום דמי תאונה (בל 2201)", Value: "DT2201"}, {Text: "תביעה לתשלום דמי לידה ליולדת (בל 355)", Value: "GE0355"}, {Text: "תביעה לתשלום מענק לידה מענק אשפוז וקצבת לידה (בל 300)", Value: "GE0300"}, {Text: "בקשה להפרשי דמי לידה (בל 363)", Value: "GE0363"}, {Text: "תביעה לתשלום גמלת הורים (בל 356)", Value: "GE0356"}, {Text: "תביעה לתשלום דמי לידה לתובע חופשת לידה (בל 360)", Value: "GE0360"}, {Text: "תביעה להארכה או פיצול דמי לידה/גמלת הורים/מאמצת (בל 368)", Value: "GE0368"}, {Text: "תביעה לתשלום גמלה לשמירת הריון (בל 330)", Value: "GF0330"}, {Text: "אישור רפואי לעניין גמלה לשמירת הריון (בל 331 )", Value: "GF0331"}, {Text: "תביעה לגמלה להבטחת הכנסה (בל 5619)", Value: "GH5619"}, {Text: "טופס הצהרה לנפרדת (בל 5612)", Value: "GH5612"}, {Text: "תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה (בל 211)", Value: "GK0211"}, {Text: "אישור למתן טיפול רפואי לנפגע בעבודה עצמאי (בל 283)", Value: "GK0283"}, {Text: "טופס למתן טיפול רפואי לנפגע בעבודה (בל 250)", Value: "GK0250"}, {Text: "בקשה לתשלום תוספת תלויים לידי בן/בת זוג (בל 3296)", Value: "GN3296"}, {Text: "תביעה לקצבת נכות כללית (בל 7801)", Value: "GN7801"}, {Text: "בקשה לבדיקה מחדש למקבל קצבת נכות (בל 7842)", Value: "GN7842"}, {Text: "בקשה לבדיקה מחדש למקבל קצבת נכות חוק לרון", Value: "GN784A"}, {Text: "תביעה לקצבת שאירים (בל 410)", Value: "GR0410"}, {Text: "תביעה להשלמת הכנסה לקצבת שאירים (בל 430)", Value: "GR0430"}, {Text: "תביעה לגמלת שארים מיוחדת (בל 4506)", Value: "GR4506"}, {Text: "הצהרת הכנסות -שארים/ דמי מחיה (בל 412)", Value: "GR0412"}, {Text: "תביעה לדמי מחיה בעד יתום בקצבת שארים בשנת הלימודים (בל 2910)", Value: "GR2910"}, {Text: "תביעה לקביעת דרגת נכות מעבודה (בל 200)", Value: "GU9200"}, {Text: "תביעה לצירוף דרגת נכות מעבודה (בל 210)", Value: "GU0002"}, {Text: "תביעה לתשלום גמלה לתלויים בנפגע עבודה (בל 213)", Value: "GU0003"}, {Text: "תביעה לקביעת דיון מחדש בדרגת נכות עקב שנוי בהכנסות (בל 215)", Value: "GU0004"}, {Text: "תביעה לדיון מחדש לפי תקנה 36 - החמרה במצב (בל 228)", Value: "GU0228"}, {Text: "תביעה לדמי מחיה עבור ילד זכאי לקצבת תלויים (בל 230)", Value: "GU0230"}, {Text: 'תביעה עפ"י חוק התגמולים - אלימות במשפחה (בל 235)', Value: "GU0235"}, {Text: "תביעה להכרה כנכה נזקק לפי תקנה 18א (בל 279)", Value: "GU9279"}, {Text: "תביעה לתשלום מענק מיוחד לנפגע בעבודה (בל 282)", Value: "GU0282"}, {Text: 'טופס בקשה לתשלום עפ"י חוק המזונות (בל 5400)', Value: "GW5400"}, {Text: "בקשה להפסקת/ חידוש מזונות (בל 5422)", Value: "GW5422"}, {Text: "הצהרה על- פי חוק המזונות (בל 5409)", Value: "GW5409"}, {Text: "הצהרה על- פי חוק המזונות- אפוטרופוס (בל 5410)", Value: "GW5410"}, {Text: "הוראה לחיוב חשבון בנק חייבים במזונות (בל 6019)", Value: "GW6019"}, {Text: "בקשה למענק לבני 67 ומעלה אשר הופסקה עבודתם עקב הקורונה (בל 489)", Value: "GZ0489"}, {Text: "תביעה לקצבת אזרח ותיק (בל 480)", Value: "GZ0001"}, {Text: "תביעה להשלמת הכנסה לקצבת אזרח ותיק (בל 430)", Value: "GZ0005"}, {Text: "תביעה לגמלת אזרח ותיק מיוחדת (בל 4501)", Value: "GZ0008"}, {Text: "תביעה לתוספת עבור בן/בת זוג בקצבת אזרח ותיק (בל 484)", Value: "GZ0006"}, {Text: "תביעה לתשלום מענק פטירה ו/או יתרת קצבה (בל 416)", Value: "GZ0003"}, {Text: "תביעה לקצבת ילדים (בל 5025)", Value: "GL5025"}, {Text: "תביעה למענק לימודים (בל 5015)", Value: "GL5015"}, {Text: "תביעה למענק לימודים (בל 5024)", Value: "GL5024"}, {Text: "תביעה לתשלום מענק לחייל משוחרר (בל 1521)", Value: "HC1521"}, {Text: "תביעה למענק למובטל העובד בשכר נמוך (בל 1517)", Value: "HN1517"}, {Text: "תביעה לאבטלה (בל 1500)", Value: "HV0001"}, {Text: "תביעה אישית לתגמולי מילואים (בל 502)", Value: "NK0502"}, {Text: "תביעה להענקה בעד השתתפות בחנוך קדם צבאי (בל 504)", Value: "NK0504"}, {Text: "אישור המעסיק על תקופות העסקה ושכר (בל 510)", Value: "NK0510"}, {Text: 'תביעה להטבות עפ"י הסכם הניידות (בל 8200)', Value: "NY8200"}, {Text: "תביעה להטבות למחליף רכב (8201)", Value: "NY8201"}, {Text: "בקשה לרכב מיוחד (בל 8226)", Value: "NY8226"}, {Text: "בקשה ללימוד נהיגה ברכב לאביזרים מיוחדים (בל 8261)", Value: "NY8261"}, {Text: "תביעה לתשלום חוב שכר עבודה ופיצויי פיטורין בפשיטת רגל ופירוק תאגיד (בל 5305)", Value: "PS5305"}, {Text: "תביעה לתשלום קצבה מיוחדת לנפגע בעבודה (בל 266)", Value: "RH0266"}, {Text: "תביעה למתן שיקום מקצועי (בל 270)", Value: "RH0270"}, {Text: "תביעה למענק במקום קצבה לנפגע בעבודה- היוון (בל 271)", Value: "RH0271"}, {Text: "תביעה לגמלת סיעוד (בל 2600)", Value: "SD2600"}, {Text: "תביעה לבדיקה מחדש (בל 2620)", Value: "SD2620"}, {Text: "בקשה לתשלום גמלה בכסף למעסיק על מטפל צמוד (בל 2655)", Value: "SD2655"}, {Text: "אישור על מגורים במוסד/ בית אבות/ דיור מוגן (בל 2604)", Value: "SD2604"}, {Text: "בחירת שירותי סיעוד לזכאי ברמה הראשונה (בל 2672)", Value: "SD2672"}, {Text: "בקשה לקבלת חלק מהגמלה בכסף או לשינוי הרכב סל השירותים (בל 2673)", Value: "SD2673"}, {Text: "דין וחשבון רב שנתי (בל 6101)", Value: "VN6101"}, {Text: 'תביעה לפיצוי עפ"י חוק פיצוי פוליו (בל 7870)', Value: "ZP7870"}, {Text: "תביעה לקצבת שירותים מיוחדים (בל 7849)", Value: "ZX7849"}, {Text: "בקשה לבדיקה מחדש למקבל קצבת שירותים מיוחדים (בל 7850)", Value: "ZX7850"}, {Text: "בקשה להפסקת תשלום קצבה לשירותים מיוחדים (בל 3525)", Value: "ZX3525"}, {Text: "תביעת גמלה לילד נכה (בל 7821)", Value: "ZY7821"}, {Text: "בקשה לבדיקת תלות בעזרת הזולת למקבל קצבת ילד נכה (בל 7824)", Value: "ZY7824"}, {Text: "תביעה לקצבת אזרח ותיק- בשפה האנגלית (בל 488)", Value: "LK0488"}, {Text: "תביעה לקצבת שאירים - עברית/אנגלית (בל 487)", Value: "LK0487"}, {Text: "תביעה לקצבת נכות - עברית/אנגלית (בל 9135)", Value: "LK9135"}, {Text: "אישור חיים (בל 420)", Value: "LK0420"}, {Text: "תביעה לגמלת מעבר (בל 434)", Value: "GP0434"}]}, {Value: 400, Text: "תלושי שכר/ פנסיה", mismachim: [{Text: "תלושי שכר", Value: "HA0001"}, {Text: "תלושי פנסיה", Value: "HA0003"}]}, {Value: 130, Text: "רפואי", mismachim: [{Text: "אישורים רפואיים", Value: "RF0082"}, {Text: "בדיקות רפואיות", Value: "RF0033"}, {Text: "אישורי מחלה", Value: "RF0002"}, {Text: "בקשה לדחיית מועד ועדה", Value: "RF0104"}, {Text: "אישור ממגן דוד אדום", Value: "RF0004"}, {Text: 'דו"ח תפקוד/ התפתחותי/ מעובדת סוציאלי', Value: "SK0006"}, {Text: "תעודה ראשונה לנפגע בתאונה", Value: "RF0099"}, {Text: "תעודה רפואית נוספת לנפגע בתאונה", Value: "RF0100"}]}, {Value: 150, Text: "בנק", mismachim: [{Text: "שינוי פרטים אישיים (בל 900)", Value: "KL0900"}, {Text: "העתקי המחאות שהופקדו בחשבון הבנק", Value: "BN0025"}, {Text: "אישור על חשבון בנק מוגבל", Value: "BN0022"}, {Text: 'תדפיס מהבנק על תנועות עו"ש', Value: "BN0024"}, {Text: "הוראת קבע בכרטיס אשראי", Value: "BN0015"}, {Text: "אישור מהבנק", Value: "BN0004"}]}, {Value: 160, Text: "רכב", mismachim: [{Text: "ביטוח רכב", Value: "RE0014"}, {Text: "הצהרות על רכב", Value: "RE0028"}, {Text: "מורשה נהיגה", Value: "MZ0014"}, {Text: "משטרה", Value: "RE0013"}, {Text: "זכרון דברים על קניית/ מכירת רכב", Value: "RE0053"}, {Text: "רישיונות/משרד הרישוי/ליסינג", Value: "RE0052"}]}, {Value: 180, Text: 'נדל"ן', mismachim: [{Text: "משק חקלאי", Value: "ME0010"}, {Text: "אישורים מרשויות", Value: "NE0002"}, {Text: "הצהרות על נכסים", Value: "NE0038"}, {Text: "חוזים", Value: "NE0041"}, {Text: "חשבוניות", Value: "NE0042"}, {Text: "מכירה/שכירות", Value: "NE0039"}]}, {Value: 200, Text: "הכנסות", mismachim: [{Text: "הכנסות אחרות/הצהרות", Value: "HA0123"}, {Text: "הצהרה על הכנסות", Value: "HA0052"}, {Text: "הכנסות עצמאי", Value: "HA0118"}, {Text: "אישור מרואה חשבון", Value: "HA0067"}, {Text: 'תשלום על פרויקט פר"ח', Value: "CU0014"}, {Text: "שומות מס", Value: "HA0130"}, {Text: "פירוט גובה גמלה ממדינת אמנה", Value: "LK0004"}]}, {Value: 210, Text: "לימודים", mismachim: [{Text: "אישור על לימודים", Value: "CU0002"}, {Text: "תעודה/ אישור על סיום לימודים", Value: "CU0023"}, {Text: "אישור על שהייה במסגרת חינוכית", Value: "YL0001"}, {Text: "קבלת מלגה ללימודים", Value: "CU0013"}]}, {Value: 220, Text: "אישור על הכנסות", mismachim: [{Text: "אישור על פנסיה", Value: "HA0005"}, {Text: "הצהרה על הכנסות נוספות", Value: "HA0027"}, {Text: "אישור תגמולים ממשרד האוצר", Value: "MN0026"}, {Text: 'אישור על פנסיה מחו"ל', Value: "HA0043"}, {Text: 'אישור על רנטה מחו"ל', Value: "HA0079"}, {Text: "אישור מעסיק על תאריך הפסקת העבודה", Value: "HA0084"}]}, {Value: 310, Text: "מסמכים מגורמים אחרים", mismachim: [{Text: "בית משפט/פסקי דין", Value: "BM0018"}, {Text: "בית סוהר", Value: "SB0011"}, {Text: "הוצאה לפועל", Value: "HP0001"}, {Text: "בית חולים", Value: "RF0109"}, {Text: "שירות התעסוקה", Value: "CU0001"}, {Text: "אישור ממגן דוד אדום", Value: "RF0004"}, {Text: 'מס הכנסה ומע"מ', Value: "HA0120"}, {Text: "מרכז גמילה", Value: "MG0003"}, {Text: "משרד הביטחון", Value: "HA0021"}, {Text: "משרד הבריאות", Value: "RF0110"}, {Text: "משרד הרווחה/שירותים חברתיים", Value: "SK0005"}, {Text: "משרד הקליטה", Value: "HA0119"}, {Text: "משטרה", Value: "RE0013"}, {Text: "אישור ממקום ההתנדבות", Value: "HA0077"}, {Text: 'צה"ל ושירות לאומי', Value: "ZV0009"}, {Text: 'טופס 3010 - אישור על תקופת השירות בצה"ל', Value: "ZV0007"}, {Text: "אישור על תקופות ביטוח מהמוסד הסוציאלי במדינת אמנה", Value: "HA0129"}]}, {Value: 370, Text: "מסמכים לעניין עבודה", mismachim: [{Text: "אישור המעסיק על תקופת ההעסקה והשכר (בל 1514)", Value: "HV1514"}, {Text: "אישור מעסיק על תשלומים", Value: "HA0071"}, {Text: "אישור המעסיק על היקף מישרה", Value: "MA0006"}, {Text: "מכתב פיטורין", Value: "HV0002"}, {Text: 'תאונה/מחלה/חל"ת', Value: "HA0121"}, {Text: "תקופות תעסוקה", Value: "HA0070"}, {Text: "מתנדב/עובד זר", Value: "MT0003"}, {Text: "אישור על תקופת העדרות מעבודה", Value: "HA0128"}, {Text: "אישור מעסיק על פרישה לפנסיה", Value: "HA0073"}, {Text: "אישור מהמעסיק על יתרת ימי מחלה", Value: "RF0111"}, {Text: "אישור המעסיק על סיבת הירידה בשכר הרבעון שקדם להפסקת העבודה", Value: "MA0015"}, {Text: "אישור על רישום מעסיק  להעסקת עובד זר", Value: "MN0035"}, {Text: "היתר להעסקת עובד זר מטעם רשות ההגירה", Value: "MN0034"}, {Text: "חוזה העסקת מטפל (ישראלי או עובד זר)", Value: "MN0033"}, {Text: 'אישור על יציאה לחל"ת', Value: "MN0068"}]}, {Value: 380, Text: "פרטים אישיים", mismachim: [{Text: "שינוי פרטים אישיים (בל 900)", Value: "KL0900"}, {Text: "מגורים", Value: "MI0027"}, {Text: "מסמכים מזהים", Value: "MZ0017"}, {Text: "צילום תעודת נישואין", Value: "MI0001"}, {Text: "צילום תעודת גירושין", Value: "MI0002"}, {Text: "צילום ת.ז לרבות הספח בו מופיע המצב המשפחתי", Value: "MZ0005"}, {Text: "שאלון לידועים בציבור (בל 107)", Value: "MV0107"}, {Text: "עדכון מצב אישי", Value: "MN0028"}, {Text: "ילדים", Value: "YL0023"}, {Text: "אישור חיים", Value: "MZ0012"}, {Text: "תעודת פטירה", Value: "DK0001"}, {Text: "רשיון נהיגה", Value: "RE0001"}]}, {Value: 600, Text: "הצהרות/ויתור סודיות", mismachim: [{Text: "ויתור סודיות", Value: "KL0041"}, {Text: "ויתור סודיות רפואית", Value: "KL0003"}, {Text: "ויתור סודיות למייצג", Value: "KL0001"}, {Text: "הצהרות", Value: "KL0031"}]}, {Value: 1140, Text: "אפוטרופוס/מקבל גמלה", mismachim: [{Text: "צו אפוטרופוס/בקשה למינוי מקבל גמלה", Value: "KL0042"}]}, {Value: 1220, Text: "עיסוקים", mismachim: [{Text: "הצהרת עיסוקים (בל6131)", Value: "VN6131"}, {Text: "מעצר/מאסר", Value: "SB0010"}, {Text: "לימודים/הכשרה מקצועית", Value: "CU0022"}, {Text: "משק בית", Value: "MA0060"}, {Text: "קבלת גמלה מגוף ציבורי שאינו המוסד לביטוח לאומי", Value: "MI0010"}, {Text: 'צה"ל ושירות לאומי', Value: "ZV0009"}, {Text: "התנדבות", Value: "HA0077"}, {Text: "חבר קיבוץ", Value: "HA0076"}]}, {Value: 1360, Text: 'עו"ד/מייצג', mismachim: [{Text: 'פנייה ממיצג/ עו"ד/ רואה חשבון', Value: "PN0002"}, {Text: "כתב ויתור סודיות למייצג/ת", Value: "KL0001"}, {Text: 'ייפוי כח למייצג/ לעו"ד', Value: "KL0002"}]}, {Value: 1400, Text: 'תושבות/שהות בחו"ל', mismachim: [{Text: "נכסים", Value: "NE0038"}, {Text: "ילדים", Value: "YL0023"}, {Text: "דרכון/מסמכים", Value: "MZ0018"}, {Text: "שאלון לרישום נפש- עברית/ אנגלית (בל 1050)", Value: "MV1050"}, {Text: "תעסוקה", Value: "HA0122"}, {Text: 'יציאה לחו"ל', Value: "MI0019"}, {Text: 'שהייה/ כתובת בחו"ל', Value: "SH0002"}, {Text: "שאלון לקביעת תושבות", Value: "KL0051"}, {Text: "אישור חיים", Value: "MZ0012"}]}, {Value: 1460, Text: "החזר כספי למשפחות נפ.איבה", mismachim: [{Text: "קבלות עבור טיפול נפשי", Value: "BY0005"}]}, {Value: 1480, Text: "פניות", mismachim: [{Text: "פנייה", Value: "PN0001"}, {Text: "ערר על החלטת הביטוח הלאומי", Value: "IR0001"}, {Text: "פנייה למיצוי זכויות במסגרת אמנה", Value: "PN0012"}, {Text: "בקשה לבחינת חובות (3199)", Value: "GX3199"}]}, {Value: 1490, Text: "תלונות", mismachim: [{Text: "תלונה", Value: "TL0001"}]}];
globals.bankNames = [{Text: "בנק דיסקונט לישראל בעמ", Value: "1011"}, {Text: "בנק הפועלים בעמ", Value: "1012"}, {Text: "בנק לאומי לישראל בעמ", Value: "1010"}, {Text: "בנק מזרחי טפחות  בעמ", Value: "1020"}, {Text: "הבנק הבינלאומי הראשון לישראל בעמ", Value: "1031"}, {Text: "בנק אגוד לישראל בעמ", Value: "1013"}, {Text: "בנק אוצר החייל בעמ", Value: "1014"}, {Text: "בנק אל אסאכן", Value: "1084"}, {Text: "בנק אל אתיחאד", Value: "1083"}, {Text: "בנק אלאורדון ואל כווית", Value: "1093"}, {Text: "בנק אלאורדון ואלחליג", Value: "1071"}, {Text: "בנק אלעקארי אלערבי", Value: "1067"}, {Text: "בנק אמריקאי ישראלי בעמ", Value: "1024"}, {Text: "בנק אנז גרינדליז", Value: "1079"}, {Text: "בנק הבניה בעמ", Value: "1001"}, {Text: "בנק הדואר", Value: "1009"}, {Text: "בנק החקלאות לישראל בעמ", Value: "1019"}, {Text: "בנק הספנות", Value: "1008"}, {Text: "בנק יהב בעמ", Value: "1004"}, {Text: "בנק יעד לפיתוח חקלאי בעמ", Value: "1023"}, {Text: "בנק ירושלים", Value: "1054"}, {Text: "בנק ישראל", Value: "1099"}, {Text: "יובנק בעמ (לשעבר בנק כללי לישראל)", Value: "1026"}, {Text: "בנק למימון ולסחר בעמ", Value: "1032"}, {Text: "בנק למסחר בעמ", Value: "1030"}, {Text: "בנק מסד בעמ", Value: "1046"}, {Text: "בנק מרכנתיל דיסקונט בעמ", Value: "1017"}, {Text: "בנק ערבי ישראלי בעמ", Value: "1034"}, {Text: "בנק פועלי אגודת ישראל בעמ", Value: "1052"}, {Text: "בנק פלשטין בעמ", Value: "1089"}, {Text: "בנק פתוח התעשיה", Value: "1007"}, {Text: "בנק קאירו עמאן", Value: "1066"}, {Text: "בנק קונטיננטל לישראל בעמ", Value: "1028"}];
globals._T0130_Yshuvim = [{Text: "אבו גוש", Value: "0472"}, {Text: "אבו ג'ווייעד (שבט)", Value: "0967"}, {Text: "אבו סנאן", Value: "0473"}, {Text: "אבו סריחאן (שבט)", Value: "0935"}, {Text: "אבו עבדון (שבט)", Value: "0958"}, {Text: "אבו עמאר (שבט)", Value: "1042"}, {Text: "אבו עמרה (שבט)", Value: "0932"}, {Text: "אבו קורינאת (יישוב)", Value: "1342"}, {Text: "אבו קורינאת (שבט)", Value: "0968"}, {Text: "אבו רובייעה (שבט)", Value: "0966"}, {Text: "אבו רוקייק (שבט)", Value: "0961"}, {Text: "אבו תלול", Value: "1357"}, {Text: "אבטין", Value: "0652"}, {Text: "אבטליון", Value: "1275"}, {Text: "אביאל", Value: "0679"}, {Text: "אביבים", Value: "1115"}, {Text: "אביגדור", Value: "0819"}, {Text: "אביחיל", Value: "0175"}, {Text: "אביטל", Value: "2052"}, {Text: "אביעזר", Value: "1070"}, {Text: "אבירים", Value: "1220"}, {Text: "אבן יהודה", Value: "0182"}, {Text: "אבן מנחם", Value: "1081"}, {Text: "אבן ספיר", Value: "0783"}, {Text: "אבן שמואל", Value: "0400"}, {Text: "אבני איתן", Value: "4011"}, {Text: "אבני חפץ", Value: "3793"}, {Text: "אבנת", Value: "3786"}, {Text: "אבשלום", Value: "1311"}, {Text: "אדורה", Value: "3759"}, {Text: "אדירים", Value: "0113"}, {Text: "אדמית", Value: "1068"}, {Text: "אדרת", Value: "1123"}, {Text: "אודים", Value: "0446"}, {Text: "אודם", Value: "4010"}, {Text: "אוהד", Value: "1046"}, {Text: "אום אל-פחם", Value: "2710"}, {Text: "אום אל-קוטוף", Value: "2024"}, {Text: "אום בטין", Value: "1358"}, {Text: "אומן", Value: "1108"}, {Text: "אומץ", Value: "0680"}, {Text: "אופקים", Value: "0031"}, {Text: "אור הגנוז", Value: "1294"}, {Text: "אור הנר", Value: "0067"}, {Text: "אור יהודה", Value: "2400"}, {Text: "אור עקיבא", Value: "1020"}, {Text: "אורה", Value: "0780"}, {Text: "אורות", Value: "2012"}, {Text: "אורטל", Value: "4013"}, {Text: "אורים", Value: "0403"}, {Text: "אורנים", Value: "0882"}, {Text: "אורנית", Value: "3760"}, {Text: "אושה", Value: "0278"}, {Text: "אזור", Value: "0565"}, {Text: "אחווה", Value: "1157"}, {Text: "אחוזם", Value: "0821"}, {Text: "אחוזת ברק", Value: "1330"}, {Text: "אחיהוד", Value: "0785"}, {Text: "אחיטוב", Value: "0850"}, {Text: "אחיסמך", Value: "0804"}, {Text: "אחיעזר", Value: "0797"}, {Text: "אטרש (שבט)", Value: "0965"}, {Text: "איבים", Value: "0338"}, {Text: "אייל", Value: "0716"}, {Text: "איילת השחר", Value: "0077"}, {Text: "אילון", Value: "0294"}, {Text: "אילות", Value: "1126"}, {Text: "אילנייה", Value: "0049"}, {Text: "אילת", Value: "2600"}, {Text: "איתמר", Value: "3762"}, {Text: "איתן", Value: "0037"}, {Text: "איתנים", Value: "0886"}, {Text: "אכסאל", Value: "0478"}, {Text: "אל סייד", Value: "1359"}, {Text: "אל -עזי", Value: "1339"}, {Text: "אל -עריאן", Value: "1316"}, {Text: "אל -רום", Value: "4003"}, {Text: "אלומה", Value: "1145"}, {Text: "אלומות", Value: "0330"}, {Text: "אלון הגליל", Value: "1182"}, {Text: "אלון מורה", Value: "3579"}, {Text: "אלון שבות", Value: "3604"}, {Text: "אלוני אבא", Value: "0429"}, {Text: "אלוני הבשן", Value: "4017"}, {Text: "אלוני יצחק", Value: "0868"}, {Text: "אלונים", Value: "0285"}, {Text: "אליאב", Value: "1365"}, {Text: "אליכין", Value: "0041"}, {Text: "אלי-עד", Value: "4002"}, {Text: "אליפז", Value: "1248"}, {Text: "אליפלט", Value: "0730"}, {Text: "אליקים", Value: "0682"}, {Text: "אלישיב", Value: "0204"}, {Text: "אלישמע", Value: "0841"}, {Text: "אלמגור", Value: "1125"}, {Text: "אלמוג", Value: "3556"}, {Text: "אלעד", Value: "1309"}, {Text: "אלעזר", Value: "3618"}, {Text: "אלפי מנשה", Value: "3750"}, {Text: "אלקוש", Value: "0603"}, {Text: "אלקנה", Value: "3560"}, {Text: "אמונים", Value: "0772"}, {Text: "אמירים", Value: "1064"}, {Text: "אמנון", Value: "1253"}, {Text: "אמציה", Value: "0023"}, {Text: "אניעם", Value: "4012"}, {Text: "אסד (שבט)", Value: "0960"}, {Text: "אספר", Value: "3754"}, {Text: "אעבלין", Value: "0529"}, {Text: "אעצם (שבט)", Value: "0963"}, {Text: "אפיניש (שבט)", Value: "0959"}, {Text: "אפיק", Value: "4301"}, {Text: "אפיקים", Value: "0176"}, {Text: "אפק", Value: "0313"}, {Text: "אפרתה", Value: "3650"}, {Text: "ארבל", Value: "0701"}, {Text: "ארגמן", Value: "3598"}, {Text: "ארז", Value: "0714"}, {Text: "אריאל", Value: "3570"}, {Text: "ארסוף", Value: "1324"}, {Text: "אשבול", Value: "0071"}, {Text: "אשבל", Value: "1276"}, {Text: "אשדוד", Value: "0070"}, {Text: "אשדות יעקב (איחוד)", Value: "0199"}, {Text: "אשדות יעקב (מאוחד)", Value: "0188"}, {Text: "אשחר", Value: "1188"}, {Text: "אשכולות", Value: "3722"}, {Text: "אשל הנשיא", Value: "2021"}, {Text: "אשלים", Value: "1152"}, {Text: "אשקלון", Value: "7100"}, {Text: "אשרת", Value: "1256"}, {Text: "אשתאול", Value: "0740"}, {Text: "באקה-ג'ת*", Value: "6000"}, {Text: "באר אורה", Value: "0021"}, {Text: "באר גנים", Value: "1376"}, {Text: "באר טוביה", Value: "0155"}, {Text: "באר יעקב", Value: "2530"}, {Text: "באר מילכה", Value: "1278"}, {Text: "באר שבע", Value: "9000"}, {Text: "בארות יצחק", Value: "0450"}, {Text: "בארותיים", Value: "0697"}, {Text: "בארי", Value: "0399"}, {Text: "בוסתן הגליל", Value: "0559"}, {Text: "בועיינה-נוג'ידאת", Value: "0482"}, {Text: "בוקעאתא", Value: "4001"}, {Text: "בורגתה", Value: "0698"}, {Text: "בחן", Value: "2043"}, {Text: "בטחה", Value: "0762"}, {Text: "ביצרון", Value: "0234"}, {Text: "ביר אל-מכסור", Value: "0998"}, {Text: "ביר הדאג'", Value: "1348"}, {Text: "בירייה", Value: "0368"}, {Text: "בית אורן", Value: "0317"}, {Text: "בית אל", Value: "3574"}, {Text: "בית אלעזרי", Value: "0562"}, {Text: "בית אלפא", Value: "0095"}, {Text: "בית אריה", Value: "3652"}, {Text: "בית ברל", Value: "1076"}, {Text: "בית גוברין", Value: "0619"}, {Text: "בית גמליאל", Value: "0571"}, {Text: "בית ג'ן", Value: "0480"}, {Text: "בית דגן", Value: "0466"}, {Text: "בית הגדי", Value: "0723"}, {Text: "בית הלוי", Value: "0373"}, {Text: "בית הלל", Value: "0322"}, {Text: "בית העמק", Value: "0572"}, {Text: "בית הערבה", Value: "3645"}, {Text: "בית השיטה", Value: "0242"}, {Text: "בית זיד", Value: "0353"}, {Text: "בית זית", Value: "0710"}, {Text: "בית זרע", Value: "0143"}, {Text: "בית חורון", Value: "3575"}, {Text: "בית חירות", Value: "0877"}, {Text: "בית חלקיה", Value: "2033"}, {Text: "בית חנן", Value: "0159"}, {Text: "בית חנניה", Value: "0800"}, {Text: "בית חשמונאי", Value: "1050"}, {Text: "בית יהושע", Value: "0288"}, {Text: "בית יוסף", Value: "0265"}, {Text: "בית ינאי", Value: "0200"}, {Text: "בית יצחק-שער חפר", Value: "0326"}, {Text: "בית לחם הגלילית", Value: "0430"}, {Text: "בית מאיר", Value: "0751"}, {Text: "בית נחמיה", Value: "0784"}, {Text: "בית ניר", Value: "0016"}, {Text: "בית נקופה", Value: "0672"}, {Text: "בית עובד", Value: "0202"}, {Text: "בית עוזיאל", Value: "0301"}, {Text: "בית עזרא", Value: "0756"}, {Text: "בית עריף", Value: "0604"}, {Text: "בית צבי", Value: "0212"}, {Text: "בית קמה", Value: "0598"}, {Text: "בית קשת", Value: "0365"}, {Text: "בית רבן", Value: "0848"}, {Text: "בית רימון", Value: "1162"}, {Text: "בית שאן", Value: "9200"}, {Text: "בית שמש", Value: "2610"}, {Text: "בית שערים", Value: "0248"}, {Text: "בית שקמה", Value: "0747"}, {Text: "ביתן אהרן", Value: "0252"}, {Text: "ביתר עילית", Value: "3780"}, {Text: "בלאטה", Value: "3090"}, {Text: "בלפוריה", Value: "0094"}, {Text: "בן זכאי", Value: "0760"}, {Text: "בן עמי", Value: "0712"}, {Text: "בן שמן (כפר נוער)", Value: "1084"}, {Text: "בן שמן (מושב)", Value: "2013"}, {Text: "בני ברק", Value: "6100"}, {Text: "בני דקלים", Value: "1368"}, {Text: "בני דרום", Value: "0592"}, {Text: "בני דרור", Value: "0386"}, {Text: "בני יהודה", Value: "4015"}, {Text: "בני עטרות", Value: "0448"}, {Text: 'בני עי"ש', Value: "1066"}, {Text: "בני ציון", Value: "0418"}, {Text: "בני ראם", Value: "0588"}, {Text: "בניה", Value: "0685"}, {Text: "בנימינה-גבעת עדה*", Value: "9800"}, {Text: "בסמת טבעון", Value: "0944"}, {Text: 'בסמ"ה', Value: "1326"}, {Text: "בענה", Value: "0483"}, {Text: "בצרה", Value: "0389"}, {Text: "בצת", Value: "0589"}, {Text: "בקוע", Value: "0864"}, {Text: "בקעות", Value: "3612"}, {Text: "בר גיורא", Value: "0823"}, {Text: "בר יוחאי", Value: "1191"}, {Text: "ברוכין", Value: "3744"}, {Text: "ברור חיל", Value: "0428"}, {Text: "ברוש", Value: "2060"}, {Text: "בריג", Value: "5200"}, {Text: "ברכה", Value: "3710"}, {Text: "ברכיה", Value: "0746"}, {Text: "ברעם", Value: "0667"}, {Text: "ברק", Value: "0141"}, {Text: "ברקאי", Value: "0617"}, {Text: "ברקן", Value: "3654"}, {Text: "ברקת", Value: "2038"}, {Text: "בת הדר", Value: "1323"}, {Text: "בת חן", Value: "1361"}, {Text: "בת חפר", Value: "1319"}, {Text: "בת ים", Value: "6200"}, {Text: "בת עין", Value: "3794"}, {Text: "בת שלמה", Value: "0033"}, {Text: "גאולי תימן", Value: "0872"}, {Text: "גאולים", Value: "0379"}, {Text: "גאליה", Value: "0853"}, {Text: "גבולות", Value: "0352"}, {Text: "גבים", Value: "0424"}, {Text: "גבע", Value: "0086"}, {Text: "גבע בנימין", Value: "3763"}, {Text: "גבע כרמל", Value: "0683"}, {Text: "גבעולים", Value: "2014"}, {Text: "גבעון החדשה", Value: "3644"}, {Text: "גבעות בר", Value: "1344"}, {Text: "גבעת אבני", Value: "1293"}, {Text: "גבעת אלה", Value: "1288"}, {Text: "גבעת ברנר", Value: "0147"}, {Text: "גבעת השלושה", Value: "0870"}, {Text: "גבעת זאב", Value: "3730"}, {Text: "גבעת חיים (איחוד)", Value: "2018"}, {Text: "גבעת חיים (מאוחד)", Value: "0173"}, {Text: 'גבעת ח"ן', Value: "0207"}, {Text: "גבעת יואב", Value: "4021"}, {Text: "גבעת יערים", Value: "0787"}, {Text: "גבעת ישעיהו", Value: "0919"}, {Text: 'גבעת כ"ח', Value: "0802"}, {Text: 'גבעת ניל"י', Value: "0360"}, {Text: "גבעת עוז", Value: "0703"}, {Text: "גבעת שמואל", Value: "0681"}, {Text: "גבעת שמש", Value: "0566"}, {Text: "גבעת שפירא", Value: "1077"}, {Text: "גבעתי", Value: "0793"}, {Text: "גבעתיים", Value: "6300"}, {Text: "גברעם", Value: "0342"}, {Text: "גבת", Value: "0133"}, {Text: "גדות", Value: "0035"}, {Text: "גדיש", Value: "0145"}, {Text: "גדעונה", Value: "0442"}, {Text: "גדרה", Value: "2550"}, {Text: "גונן", Value: "0852"}, {Text: "גורן", Value: "0755"}, {Text: "גורנות הגליל", Value: "1219"}, {Text: "גזית", Value: "0457"}, {Text: "גזר", Value: "0370"}, {Text: "גיאה", Value: "0706"}, {Text: "גיבתון", Value: "0196"}, {Text: "גיזו", Value: "1043"}, {Text: "גילון", Value: "1204"}, {Text: "גילת", Value: "0736"}, {Text: "גינוסר", Value: "0262"}, {Text: "גיניגר", Value: "0092"}, {Text: "גינתון", Value: "0863"}, {Text: "גיתה", Value: "1206"}, {Text: "גיתית", Value: "3613"}, {Text: "גלאון", Value: "0393"}, {Text: "גלגל", Value: "3606"}, {Text: "גליל ים", Value: "0346"}, {Text: "גלעד (אבן יצחק)", Value: "0369"}, {Text: "גמזו", Value: "0745"}, {Text: "גן הדרום", Value: "1072"}, {Text: "גן השומרון", Value: "0225"}, {Text: "גן חיים", Value: "0239"}, {Text: "גן יאשיה", Value: "0734"}, {Text: "גן יבנה", Value: "0166"}, {Text: "גן נר", Value: "1274"}, {Text: "גן שורק", Value: "0311"}, {Text: "גן שלמה", Value: "0144"}, {Text: "גן שמואל", Value: "0072"}, {Text: "גנות", Value: "0836"}, {Text: "גנות הדר", Value: "0549"}, {Text: "גני הדר", Value: "1103"}, {Text: "גני טל", Value: "1371"}, {Text: "גני יוחנן", Value: "0862"}, {Text: "גני עם", Value: "0218"}, {Text: "גני תקווה", Value: "0229"}, {Text: "געש", Value: "0842"}, {Text: "געתון", Value: "0463"}, {Text: "גפן", Value: "0039"}, {Text: "גרופית", Value: "1129"}, {Text: "גשור", Value: "4022"}, {Text: "גשר", Value: "0305"}, {Text: "גשר הזיו", Value: "0574"}, {Text: "גת (קיבוץ)", Value: "0340"}, {Text: "גת רימון", Value: "0128"}, {Text: "ג'דיידה-מכר", Value: "1292"}, {Text: "ג'ולס", Value: "0485"}, {Text: "ג'לג'וליה", Value: "0627"}, {Text: "ג'לזון", Value: "3147"}, {Text: "ג'נאביב (שבט)", Value: "0976"}, {Text: "ג'סר א-זרקא", Value: "0541"}, {Text: "ג'ש (גוש חלב)", Value: "0487"}, {Text: "ג'ת", Value: "0628"}, {Text: "דאלית אל-כרמל", Value: "0494"}, {Text: "דבורה", Value: "0146"}, {Text: "דבורייה", Value: "0489"}, {Text: "דבירה", Value: "0849"}, {Text: "דברת", Value: "0407"}, {Text: "דגניה א'", Value: "0062"}, {Text: "דגניה ב'", Value: "0079"}, {Text: "דהישה", Value: "3183"}, {Text: 'דוב"ב', Value: "1067"}, {Text: "דולב", Value: "3747"}, {Text: "דור", Value: "0738"}, {Text: "דורות", Value: "0336"}, {Text: "דחי", Value: "0475"}, {Text: "דייר אל-אסד", Value: "0490"}, {Text: "דייר חנא", Value: "0492"}, {Text: "דייר ראפאת", Value: "0493"}, {Text: "דימונה", Value: "2200"}, {Text: "דיר עמאר", Value: "3206"}, {Text: "דישון", Value: "2063"}, {Text: "דלייה", Value: "0300"}, {Text: "דלתון", Value: "0431"}, {Text: "דמיידה", Value: "1317"}, {Text: "דן", Value: "0303"}, {Text: "דפנה", Value: "0302"}, {Text: "דקל", Value: "1241"}, {Text: "דריג'את", Value: "1349"}, {Text: "האון", Value: "0702"}, {Text: "הבונים", Value: "0675"}, {Text: "הגושרים", Value: "0356"}, {Text: "הדר עם", Value: "0191"}, {Text: "הוד השרון", Value: "9700"}, {Text: "הודיות", Value: "1322"}, {Text: "הודייה", Value: "0726"}, {Text: "הוואשלה (שבט)", Value: "1169"}, {Text: "הוזייל (שבט)", Value: "0956"}, {Text: "הושעיה", Value: "1186"}, {Text: "הזורע", Value: "0250"}, {Text: "הזורעים", Value: "0307"}, {Text: "החותרים", Value: "0434"}, {Text: "היוגב", Value: "0684"}, {Text: "הילה", Value: "1208"}, {Text: "המעפיל", Value: "0377"}, {Text: "הסוללים", Value: "0677"}, {Text: "העוגן", Value: "0423"}, {Text: "הר אדר", Value: "3769"}, {Text: "הר גילה", Value: "3603"}, {Text: "הראל", Value: "0464"}, {Text: "הרדוף", Value: "1249"}, {Text: "הרצלייה", Value: "6400"}, {Text: "הררית", Value: "1203"}, {Text: "ורד יריחו", Value: "3639"}, {Text: "ורדון", Value: "1133"}, {Text: "זבארגה (שבט)", Value: "2742"}, {Text: "זבדיאל", Value: "0815"}, {Text: "זוהר", Value: "0044"}, {Text: "זיקים", Value: "0584"}, {Text: "זיתן", Value: "0788"}, {Text: "זכרון יעקב", Value: "9300"}, {Text: "זכריה", Value: "0799"}, {Text: "זמר", Value: "1290"}, {Text: "זמרת", Value: "1065"}, {Text: "זנוח", Value: "0816"}, {Text: "זרועה", Value: "2064"}, {Text: "זרזיר", Value: "0975"}, {Text: "זרחיה", Value: "0818"}, {Text: "חבצלת השרון", Value: "0235"}, {Text: "חבר", Value: "1110"}, {Text: "חגור", Value: "0717"}, {Text: "חגי", Value: "3764"}, {Text: "חגלה", Value: "0205"}, {Text: "חדיד", Value: "0618"}, {Text: "חד-נס", Value: "4026"}, {Text: "חדרה", Value: "6500"}, {Text: "חוג'ייראת (ד'הרה) (ש", Value: "0948"}, {Text: "חולדה", Value: "0160"}, {Text: "חולון", Value: "6600"}, {Text: "חולית", Value: "1239"}, {Text: "חולתה", Value: "0253"}, {Text: "חוסן", Value: "0662"}, {Text: "חוסנייה", Value: "1332"}, {Text: "חופית", Value: "0115"}, {Text: "חוקוק", Value: "0374"}, {Text: "חורה", Value: "1303"}, {Text: "חורפיש", Value: "0496"}, {Text: "חורשים", Value: "0355"}, {Text: "חזון", Value: "1047"}, {Text: "חיבת ציון", Value: "0219"}, {Text: "חיננית", Value: "3643"}, {Text: "חיפה", Value: "4000"}, {Text: "חירות", Value: "0162"}, {Text: "חלוץ", Value: "1272"}, {Text: "חלמיש", Value: "3573"}, {Text: "חלץ", Value: "0820"}, {Text: "חמאם", Value: "0993"}, {Text: "חמד", Value: "0801"}, {Text: "חמדיה", Value: "0343"}, {Text: "חמדת", Value: "3646"}, {Text: "חמרה", Value: "3609"}, {Text: "חניאל", Value: "0807"}, {Text: "חניתה", Value: "0280"}, {Text: "חנתון", Value: "1257"}, {Text: "חספין", Value: "4005"}, {Text: "חפץ חיים", Value: "0363"}, {Text: "חפצי-בה", Value: "0090"}, {Text: "חצב", Value: "0700"}, {Text: "חצבה", Value: "0013"}, {Text: "חצור הגלילית", Value: "2034"}, {Text: "חצור-אשדוד", Value: "0406"}, {Text: "חצרים", Value: "0397"}, {Text: "חרב לאת", Value: "0422"}, {Text: "חרוצים", Value: "1024"}, {Text: "חריש", Value: "1247"}, {Text: "חרמש", Value: "3717"}, {Text: "חרשים", Value: "1209"}, {Text: "חשמונאים", Value: "3770"}, {Text: "ח'ואלד", Value: "1321"}, {Text: "ח'ואלד (שבט)", Value: "0986"}, {Text: "טבריה", Value: "6700"}, {Text: "טובא-זנגרייה", Value: "0962"}, {Text: "טורעאן", Value: "0498"}, {Text: "טייבה", Value: "2730"}, {Text: "טייבה (בעמק)", Value: "0497"}, {Text: "טירה", Value: "2720"}, {Text: "טירת יהודה", Value: "0663"}, {Text: "טירת כרמל", Value: "2100"}, {Text: "טירת צבי", Value: "0268"}, {Text: "טל שחר", Value: "0462"}, {Text: "טללים", Value: "1177"}, {Text: "טלמון", Value: "3788"}, {Text: "טל-אל", Value: "1181"}, {Text: "טמרה", Value: "8900"}, {Text: "טמרה (יזרעאל)", Value: "0547"}, {Text: "טנא", Value: "3743"}, {Text: "טפחות", Value: "1214"}, {Text: "יאנוח-ג'ת", Value: "1295"}, {Text: "יבול", Value: "1232"}, {Text: "יבנאל", Value: "0046"}, {Text: "יבנה", Value: "2660"}, {Text: "יגור", Value: "0096"}, {Text: "יגל", Value: "0798"}, {Text: "יד בנימין", Value: "0577"}, {Text: "יד השמונה", Value: "1134"}, {Text: "יד חנה", Value: "0758"}, {Text: "יד מרדכי", Value: "0358"}, {Text: "יד נתן", Value: "0775"}, {Text: 'יד רמב"ם', Value: "0064"}, {Text: "ידידה", Value: "1144"}, {Text: "יהוד", Value: "9400"}, {Text: "יהל", Value: "1158"}, {Text: "יובל", Value: "2009"}, {Text: "יובלים", Value: "1226"}, {Text: "יודפת", Value: "1112"}, {Text: "יונתן", Value: "4007"}, {Text: "יושיביה", Value: "0803"}, {Text: "יזרעאל", Value: "0452"}, {Text: "יחיעם", Value: "0409"}, {Text: "יטבתה", Value: "0866"}, {Text: 'ייט"ב', Value: "3607"}, {Text: "יכיני", Value: "0811"}, {Text: "ינוב", Value: "0753"}, {Text: "ינון", Value: "2011"}, {Text: "יסוד המעלה", Value: "0029"}, {Text: "יסודות", Value: "0440"}, {Text: "יסעור", Value: "0575"}, {Text: "יעד", Value: "1138"}, {Text: "יעף", Value: "1044"}, {Text: "יערה", Value: "0795"}, {Text: "יפיע", Value: "0499"}, {Text: "יפית", Value: "3566"}, {Text: "יפעת", Value: "0134"}, {Text: "יפתח", Value: "0453"}, {Text: "יצהר", Value: "3749"}, {Text: "יציץ", Value: "0759"}, {Text: "יקום", Value: "0417"}, {Text: "יקיר", Value: "3647"}, {Text: "יקנעם (מושבה)", Value: "0241"}, {Text: "יקנעם עילית", Value: "0240"}, {Text: "יראון", Value: "0623"}, {Text: "ירדנה", Value: "2026"}, {Text: "ירוחם", Value: "0831"}, {Text: "ירושלים", Value: "3000"}, {Text: "ירחיב", Value: "0718"}, {Text: "ירכא", Value: "0502"}, {Text: "ירקונה", Value: "0183"}, {Text: "ישע", Value: "0916"}, {Text: "ישעי", Value: "0805"}, {Text: "ישרש", Value: "0828"}, {Text: "יתד", Value: "1227"}, {Text: "כאבול", Value: "0504"}, {Text: "כאוכב אבו אל-היג'א", Value: "0505"}, {Text: "כברי", Value: "0576"}, {Text: "כדורי", Value: "0371"}, {Text: "כוכב השחר", Value: "3564"}, {Text: "כוכב יאיר", Value: "1224"}, {Text: "כוכב יעקב", Value: "3779"}, {Text: "כוכב מיכאל", Value: "0824"}, {Text: "כורזים", Value: "1252"}, {Text: "כחל", Value: "1210"}, {Text: "כיסופים", Value: "0840"}, {Text: "כישור", Value: "1153"}, {Text: "כליל", Value: "1183"}, {Text: "כלנית", Value: "1229"}, {Text: "כמאנה", Value: "1331"}, {Text: "כמהין", Value: "1291"}, {Text: "כמון", Value: "1201"}, {Text: "כנות", Value: "2006"}, {Text: "כנף", Value: "4028"}, {Text: "כנרת (מושבה)", Value: "0063"}, {Text: "כנרת (קבוצה)", Value: "0057"}, {Text: "כסיפה", Value: "1059"}, {Text: "כסלון", Value: "0859"}, {Text: "כסרא-סמיע", Value: "1296"}, {Text: "כעביה-טבאש-חג'אג'רה", Value: "0978"}, {Text: "כפר אביב", Value: "0857"}, {Text: "כפר אדומים", Value: "3638"}, {Text: "כפר אוריה", Value: "0364"}, {Text: "כפר אחים", Value: "0690"}, {Text: "כפר ביאליק", Value: "0220"}, {Text: 'כפר ביל"ו', Value: "0177"}, {Text: "כפר בלום", Value: "0357"}, {Text: "כפר בן נון", Value: "2010"}, {Text: "כפר ברא", Value: "0633"}, {Text: "כפר ברוך", Value: "0132"}, {Text: "כפר גדעון", Value: "0106"}, {Text: "כפר גלים", Value: "0427"}, {Text: "כפר גליקסון", Value: "0310"}, {Text: "כפר גלעדי", Value: "0076"}, {Text: "כפר דניאל", Value: "0707"}, {Text: "כפר האורנים", Value: "3796"}, {Text: "כפר החורש", Value: "0192"}, {Text: "כפר המכבי", Value: "0254"}, {Text: "כפר הנגיד", Value: "0582"}, {Text: "כפר הנוער הדתי", Value: "0890"}, {Text: "כפר הנשיא", Value: "0443"}, {Text: "כפר הס", Value: "0187"}, {Text: 'כפר הרא"ה', Value: "0217"}, {Text: 'כפר הרי"ף', Value: "0888"}, {Text: "כפר ויתקין", Value: "0190"}, {Text: "כפר ורבורג", Value: "0320"}, {Text: "כפר ורדים", Value: "1263"}, {Text: "כפר זיתים", Value: "0786"}, {Text: 'כפר חב"ד', Value: "0696"}, {Text: "כפר חושן", Value: "0609"}, {Text: "כפר חיטים", Value: "0255"}, {Text: "כפר חיים", Value: "0193"}, {Text: "כפר חנניה", Value: "1297"}, {Text: "כפר חסידים א'", Value: "0112"}, {Text: "כפר חסידים ב'", Value: "0889"}, {Text: "כפר חרוב", Value: "4004"}, {Text: "כפר טרומן", Value: "0673"}, {Text: "כפר יאסיף", Value: "0507"}, {Text: "כפר ידידיה", Value: "0233"}, {Text: "כפר יהושע", Value: "0140"}, {Text: "כפר יונה", Value: "0168"}, {Text: "כפר יחזקאל", Value: "0085"}, {Text: "כפר יעבץ", Value: "0170"}, {Text: "כפר כמא", Value: "0508"}, {Text: "כפר כנא", Value: "0509"}, {Text: "כפר מונש", Value: "0387"}, {Text: "כפר מימון", Value: "1095"}, {Text: 'כפר מל"ל', Value: "0098"}, {Text: "כפר מנדא", Value: "0510"}, {Text: "כפר מנחם", Value: "0274"}, {Text: "כפר מסריק", Value: "0297"}, {Text: "כפר מצר", Value: "0512"}, {Text: "כפר מרדכי", Value: "0764"}, {Text: "כפר נטר", Value: "0316"}, {Text: "כפר סאלד", Value: "0345"}, {Text: "כפר סבא", Value: "6900"}, {Text: "כפר סילבר", Value: "0107"}, {Text: "כפר סירקין", Value: "0249"}, {Text: "כפר עבודה", Value: "0875"}, {Text: "כפר עזה", Value: "0845"}, {Text: "כפר עציון", Value: "3488"}, {Text: "כפר פינס", Value: "0189"}, {Text: "כפר קאסם", Value: "0634"}, {Text: "כפר קיש", Value: "0388"}, {Text: "כפר קרע", Value: "0654"}, {Text: "כפר ראש הנקרה", Value: "0579"}, {Text: "כפר רוזנואלד (זרעית)", Value: "1130"}, {Text: "כפר רופין", Value: "0295"}, {Text: "כפר רות", Value: "1166"}, {Text: "כפר שמאי", Value: "0605"}, {Text: "כפר שמואל", Value: "0743"}, {Text: "כפר שמריהו", Value: "0267"}, {Text: "כפר תבור", Value: "0047"}, {Text: "כפר תפוח", Value: "3572"}, {Text: "כרכום", Value: "1285"}, {Text: "כרם בן זמרה", Value: "0664"}, {Text: "כרם בן שמן", Value: "0088"}, {Text: "כרם יבנה (ישיבה)", Value: "1094"}, {Text: 'כרם מהר"ל', Value: "0580"}, {Text: "כרם שלום", Value: "1085"}, {Text: "כרמי יוסף", Value: "1264"}, {Text: "כרמי צור", Value: "3766"}, {Text: "כרמיאל", Value: "1139"}, {Text: "כרמייה", Value: "0768"}, {Text: "כרמים", Value: "1198"}, {Text: "כרמל", Value: "3656"}, {Text: "לבון", Value: "1207"}, {Text: "לביא", Value: "0585"}, {Text: "לבנים", Value: "1230"}, {Text: "להב", Value: "2023"}, {Text: "להבות הבשן", Value: "0380"}, {Text: "להבות חביבה", Value: "0715"}, {Text: "להבים", Value: "1271"}, {Text: "לוד", Value: "7000"}, {Text: "לוזית", Value: "0052"}, {Text: "לוחמי הגיטאות", Value: "0595"}, {Text: "לוטם", Value: "1171"}, {Text: "לוטן", Value: "1255"}, {Text: "לימן", Value: "0674"}, {Text: "לכיש", Value: "0024"}, {Text: "לפיד", Value: "1310"}, {Text: "לפידות", Value: "1173"}, {Text: "לקיה", Value: "1060"}, {Text: "מאור", Value: "2055"}, {Text: "מאיר שפיה", Value: "0102"}, {Text: "מבוא ביתר", Value: "0771"}, {Text: "מבוא דותן", Value: "3569"}, {Text: "מבוא חורון", Value: "3709"}, {Text: "מבוא חמה", Value: "4204"}, {Text: "מבוא מודיעים", Value: "1141"}, {Text: "מבואות ים", Value: "1318"}, {Text: "מבועים", Value: "1080"}, {Text: "מבטחים", Value: "0829"}, {Text: "מבקיעים", Value: "0573"}, {Text: "מבשרת ציון", Value: "1015"}, {Text: "מגאזי", Value: "5301"}, {Text: "מגאר", Value: "0481"}, {Text: "מגדים", Value: "0689"}, {Text: "מגדל", Value: "0065"}, {Text: "מגדל העמק", Value: "0874"}, {Text: "מגדל עוז", Value: "3561"}, {Text: "מגדלים", Value: "3751"}, {Text: "מגידו", Value: "0586"}, {Text: "מגל", Value: "0375"}, {Text: "מגן", Value: "0695"}, {Text: "מגן שאול", Value: "1155"}, {Text: "מגשימים", Value: "0722"}, {Text: "מג'ד אל-כרום", Value: "0516"}, {Text: "מג'דל שמס", Value: "4201"}, {Text: "מדרך עוז", Value: "2029"}, {Text: "מדרשת בן גוריון", Value: "1140"}, {Text: "מדרשת רופין", Value: "0897"}, {Text: "מודיעין עילית", Value: "3797"}, {Text: "מודיעין-מכבים-רעות*", Value: "1200"}, {Text: "מולדה*", Value: "1360"}, {Text: "מולדת", Value: "0269"}, {Text: "מוצא עילית", Value: "0208"}, {Text: "מוקייבלה", Value: "0635"}, {Text: "מורן", Value: "1163"}, {Text: "מורשת", Value: "1178"}, {Text: "מזור", Value: "0606"}, {Text: "מזכרת בתיה", Value: "0028"}, {Text: "מזרע", Value: "0104"}, {Text: "מזרעה", Value: "0517"}, {Text: "מחולה", Value: "3599"}, {Text: "מחניים", Value: "0308"}, {Text: "מחסיה", Value: "0776"}, {Text: "מח'ים פרעה", Value: "3540"}, {Text: "מח'ים קלנדיה", Value: "3541"}, {Text: "מטולה", Value: "0043"}, {Text: "מטע", Value: "0822"}, {Text: "מי עמי", Value: "1128"}, {Text: "מיטב", Value: "2054"}, {Text: "מייסר", Value: "0649"}, {Text: "מיצר", Value: "4019"}, {Text: "מירב", Value: "1282"}, {Text: "מירון", Value: "0607"}, {Text: "מישר", Value: "0731"}, {Text: "מיתר", Value: "1268"}, {Text: "מכורה", Value: "3614"}, {Text: "מכמורת", Value: "0382"}, {Text: "מכמנים", Value: "1202"}, {Text: "מלאה", Value: "0164"}, {Text: "מלילות", Value: "2044"}, {Text: "מלכייה", Value: "0596"}, {Text: "מלכישוע", Value: "1154"}, {Text: "מנוחה", Value: "2030"}, {Text: "מנוף", Value: "1174"}, {Text: "מנות", Value: "1205"}, {Text: "מנחמיה", Value: "0048"}, {Text: "מנרה", Value: "0347"}, {Text: "מנשית זבדה", Value: "0994"}, {Text: "מסד", Value: "1258"}, {Text: "מסדה", Value: "0263"}, {Text: "מסילות", Value: "0298"}, {Text: "מסילת ציון", Value: "0742"}, {Text: "מסלול", Value: "0748"}, {Text: "מסעדה", Value: "4203"}, {Text: "מסעודין אל-עזאזמה (ש", Value: "0939"}, {Text: "מעברות", Value: "0197"}, {Text: "מעגלים", Value: "1082"}, {Text: "מעגן", Value: "0678"}, {Text: "מעגן מיכאל", Value: "0694"}, {Text: "מעוז חיים", Value: "0272"}, {Text: "מעון", Value: "3657"}, {Text: "מעונה", Value: "0570"}, {Text: "מעיין ברוך", Value: "0416"}, {Text: "מעיין צבי", Value: "0290"}, {Text: "מעיליא", Value: "0518"}, {Text: "מעלה אדומים", Value: "3616"}, {Text: "מעלה אפרים", Value: "3608"}, {Text: "מעלה גלבוע", Value: "1127"}, {Text: "מעלה גמלא", Value: "4008"}, {Text: "מעלה החמישה", Value: "0286"}, {Text: "מעלה לבונה", Value: "3752"}, {Text: "מעלה מכמש", Value: "3651"}, {Text: "מעלה עירון", Value: "1327"}, {Text: "מעלה עמוס", Value: "3653"}, {Text: "מעלה שומרון", Value: "3637"}, {Text: "מעלות-תרשיחא", Value: "1063"}, {Text: "מענית", Value: "0344"}, {Text: "מעסכר אל-ערוב", Value: "3547"}, {Text: "מעש", Value: "0230"}, {Text: "מפלסים", Value: "0668"}, {Text: "מצדות יהודה", Value: "3745"}, {Text: "מצובה", Value: "0325"}, {Text: "מצליח", Value: "0757"}, {Text: "מצפה", Value: "0058"}, {Text: 'מצפה אבי"ב', Value: "1222"}, {Text: "מצפה אילן", Value: "1370"}, {Text: "מצפה יריחו", Value: "3576"}, {Text: "מצפה נטופה", Value: "1190"}, {Text: "מצפה רמון", Value: "0099"}, {Text: "מצפה שלם", Value: "3610"}, {Text: "מצר", Value: "0648"}, {Text: "מקווה ישראל", Value: "0022"}, {Text: "מרגליות", Value: "0843"}, {Text: "מרום גולן", Value: "4101"}, {Text: "מרחב עם", Value: "1340"}, {Text: "מרחביה (מושב)", Value: "0097"}, {Text: "מרחביה (קיבוץ)", Value: "0066"}, {Text: "מרכז שפירא", Value: "1098"}, {Text: "משאבי שדה", Value: "0421"}, {Text: "משגב דב", Value: "0765"}, {Text: "משגב עם", Value: "0378"}, {Text: "משהד", Value: "0520"}, {Text: "משואה", Value: "3605"}, {Text: "משואות יצחק", Value: "0620"}, {Text: "משמר איילון", Value: "0670"}, {Text: "משמר דוד", Value: "0563"}, {Text: "משמר הירדן", Value: "0732"}, {Text: "משמר הנגב", Value: "0395"}, {Text: "משמר העמק", Value: "0130"}, {Text: "משמר השבעה", Value: "0729"}, {Text: "משמר השרון", Value: "0194"}, {Text: "משמרות", Value: "0213"}, {Text: "משמרת", Value: "0425"}, {Text: "משען", Value: "0791"}, {Text: "מתן", Value: "1315"}, {Text: "מתת", Value: "1184"}, {Text: "מתתיהו", Value: "3648"}, {Text: "נאות גולן", Value: "4551"}, {Text: "נאות הכיכר", Value: "1124"}, {Text: "נאות מרדכי", Value: "0408"}, {Text: "נאות סמדר", Value: "1197"}, {Text: "נאעורה", Value: "0524"}, {Text: "נבטים", Value: "0396"}, {Text: "נגבה", Value: "0315"}, {Text: "נגוהות", Value: "3724"}, {Text: "נהורה", Value: "0309"}, {Text: "נהלל", Value: "0080"}, {Text: "נהרייה", Value: "9100"}, {Text: "נוב", Value: "4304"}, {Text: "נוגה", Value: "0055"}, {Text: "נווה אבות", Value: "0926"}, {Text: "נווה אור", Value: "0590"}, {Text: 'נווה אטי"ב', Value: "4303"}, {Text: "נווה אילן", Value: "0405"}, {Text: "נווה איתן", Value: "0296"}, {Text: "נווה דניאל", Value: "3725"}, {Text: "נווה זוהר", Value: "1057"}, {Text: "נווה זיו", Value: "1314"}, {Text: "נווה חריף", Value: "1279"}, {Text: "נווה ים", Value: "0312"}, {Text: "נווה ימין", Value: "0686"}, {Text: "נווה ירק", Value: "0858"}, {Text: "נווה מבטח", Value: "0827"}, {Text: "נווה מיכאל", Value: "1071"}, {Text: "נווה שלום", Value: "1259"}, {Text: "נועם", Value: "0015"}, {Text: "נוף איילון", Value: "1333"}, {Text: "נופים", Value: "3790"}, {Text: "נופית", Value: "1284"}, {Text: "נופך", Value: "0257"}, {Text: "נוקדים", Value: "3726"}, {Text: "נור א-שמס", Value: "3587"}, {Text: "נורדייה", Value: "0447"}, {Text: "נחושה", Value: "0059"}, {Text: "נחל עוז", Value: "0844"}, {Text: "נחלה", Value: "2045"}, {Text: "נחליאל", Value: "3767"}, {Text: "נחלים", Value: "0449"}, {Text: "נחם", Value: "0809"}, {Text: "נחף", Value: "0522"}, {Text: "נחשולים", Value: "0433"}, {Text: "נחשון", Value: "0777"}, {Text: "נחשונים", Value: "0705"}, {Text: "נטועה", Value: "1147"}, {Text: "נטור", Value: "4014"}, {Text: "נטע", Value: "1369"}, {Text: "נטעים", Value: "0174"}, {Text: "נטף", Value: "1254"}, {Text: "ניין", Value: "0523"}, {Text: 'ניל"י', Value: "3655"}, {Text: "ניצן", Value: "0351"}, {Text: "ניצן ב'", Value: "1419"}, {Text: "ניצנה (קהילת חינוך)", Value: "1195"}, {Text: "ניצני סיני", Value: "1280"}, {Text: "ניצני עוז", Value: "0851"}, {Text: "ניצנים", Value: "0359"}, {Text: "ניר אליהו", Value: "0808"}, {Text: "ניר בנים", Value: "0553"}, {Text: "ניר גלים", Value: "0720"}, {Text: "ניר דוד (תל עמל)", Value: "0256"}, {Text: 'ניר ח"ן', Value: "0011"}, {Text: "ניר יפה", Value: "0165"}, {Text: "ניר יצחק", Value: "0402"}, {Text: "ניר ישראל", Value: "0699"}, {Text: "ניר משה", Value: "2047"}, {Text: "ניר עוז", Value: "0069"}, {Text: "ניר עם", Value: "0348"}, {Text: "ניר עציון", Value: "0769"}, {Text: "ניר עקיבא", Value: "2048"}, {Text: "ניר צבי", Value: "0331"}, {Text: "נירים", Value: "0602"}, {Text: "נירית", Value: "1236"}, {Text: "נירן", Value: "3620"}, {Text: "נס הרים", Value: "0825"}, {Text: "נס עמים", Value: "1143"}, {Text: "נס ציונה", Value: "7200"}, {Text: "נעורים", Value: "0186"}, {Text: "נעלה", Value: "3787"}, {Text: 'נעמ"ה', Value: "3713"}, {Text: "נען", Value: "0158"}, {Text: "נצאצרה (שבט)", Value: "1041"}, {Text: "נציראת", Value: "5600"}, {Text: "נצר חזני", Value: "1372"}, {Text: "נצר סרני", Value: "0435"}, {Text: "נצרת", Value: "7300"}, {Text: "נצרת עילית", Value: "1061"}, {Text: "נשר", Value: "2500"}, {Text: "נתיב הגדוד", Value: "3555"}, {Text: 'נתיב הל"ה', Value: "0693"}, {Text: "נתיב העשרה", Value: "1242"}, {Text: "נתיב השיירה", Value: "0792"}, {Text: "נתיבות", Value: "0246"}, {Text: "נתניה", Value: "7400"}, {Text: "סאג'ור", Value: "0525"}, {Text: "סאסא", Value: "0578"}, {Text: "סביון*", Value: "0587"}, {Text: "סגולה", Value: "2046"}, {Text: "סואעד (חמרייה)*", Value: "0942"}, {Text: "סואעד (כמאנה) (שבט)", Value: "0989"}, {Text: "סולם", Value: "0526"}, {Text: "סוסיה", Value: "3756"}, {Text: "סופה", Value: "1238"}, {Text: "סח'נין", Value: "7500"}, {Text: "סייד (שבט)", Value: "1170"}, {Text: "סלמה", Value: "1245"}, {Text: "סלעית", Value: "3567"}, {Text: "סמר", Value: "1156"}, {Text: "סנסנה", Value: "3777"}, {Text: "סעד", Value: "0419"}, {Text: "סער", Value: "0454"}, {Text: "ספיר", Value: "1176"}, {Text: "סתרייה", Value: "0610"}, {Text: "עבדון", Value: "0892"}, {Text: "עברון", Value: "0376"}, {Text: "עגור", Value: "0794"}, {Text: "עדי", Value: "1199"}, {Text: "עדנים", Value: "2035"}, {Text: "עוזה", Value: "0826"}, {Text: "עוזייר", Value: "0528"}, {Text: "עולש", Value: "0737"}, {Text: "עומר", Value: "0666"}, {Text: "עופר", Value: "0810"}, {Text: "עוצם", Value: "0032"}, {Text: "עוקבי (בנו עוקבה) (ש", Value: "0957"}, {Text: "עזוז", Value: "0328"}, {Text: "עזר", Value: "1149"}, {Text: "עזריאל", Value: "0837"}, {Text: "עזריה", Value: "0711"}, {Text: "עזריקם", Value: "0817"}, {Text: "עטאוונה (שבט)", Value: "0969"}, {Text: "עטרת", Value: "3658"}, {Text: "עידן", Value: "1175"}, {Text: "עיילבון", Value: "0530"}, {Text: "עיינות", Value: "0156"}, {Text: "עילוט", Value: "0511"}, {Text: "עין איילה", Value: "0687"}, {Text: "עין אל-אסד", Value: "0546"}, {Text: "עין א-סלטאן", Value: "3678"}, {Text: "עין גב", Value: "0273"}, {Text: "עין גדי", Value: "2042"}, {Text: "עין דור", Value: "0436"}, {Text: "עין הבשור", Value: "1240"}, {Text: "עין הוד", Value: "0074"}, {Text: "עין החורש", Value: "0167"}, {Text: "עין המפרץ", Value: "0289"}, {Text: 'עין הנצי"ב', Value: "0383"}, {Text: "עין העמק", Value: "0367"}, {Text: "עין השופט", Value: "0270"}, {Text: "עין השלושה", Value: "0676"}, {Text: "עין ורד", Value: "0157"}, {Text: "עין זיוון", Value: "4503"}, {Text: "עין חוד", Value: "1320"}, {Text: "עין חרוד (איחוד)", Value: "0089"}, {Text: "עין חרוד (מאוחד)", Value: "0082"}, {Text: "עין יהב", Value: "0806"}, {Text: "עין יעקב", Value: "0813"}, {Text: 'עין כרם-בי"ס חקלאי', Value: "1056"}, {Text: "עין כרמל", Value: "0426"}, {Text: "עין מאהל", Value: "0532"}, {Text: "עין נקובא", Value: "0521"}, {Text: "עין עירון", Value: "0223"}, {Text: "עין צורים", Value: "0622"}, {Text: "עין קנייא", Value: "4502"}, {Text: "עין ראפה", Value: "0514"}, {Text: "עין שמר", Value: "0139"}, {Text: "עין שריד", Value: "0880"}, {Text: "עין תמר", Value: "1251"}, {Text: "עינת", Value: "0871"}, {Text: "עכו", Value: "7600"}, {Text: "עלומים", Value: "1146"}, {Text: "עלי", Value: "3765"}, {Text: "עלי זהב", Value: "3727"}, {Text: "עלמה", Value: "0688"}, {Text: "עלמון", Value: "3715"}, {Text: "עמוקה", Value: "1212"}, {Text: "עמינדב", Value: "0779"}, {Text: "עמיעד", Value: "0385"}, {Text: "עמיעוז", Value: "0318"}, {Text: "עמיקם", Value: "0773"}, {Text: "עמיר", Value: "0319"}, {Text: "עמנואל", Value: "3660"}, {Text: "עמקה", Value: "0708"}, {Text: "ענב", Value: "3712"}, {Text: "עסכר", Value: "3693"}, {Text: "עספיא", Value: "0534"}, {Text: "עפולה", Value: "7700"}, {Text: "עפרה", Value: "3617"}, {Text: "עץ אפרים", Value: "3778"}, {Text: "עצמון שגב", Value: "0917"}, {Text: "עקבת ג'בר", Value: "3697"}, {Text: "עראבה", Value: "0531"}, {Text: "עראמשה*", Value: "1246"}, {Text: "ערב אל נעים", Value: "1335"}, {Text: "ערד", Value: "2560"}, {Text: "ערוגות", Value: "0593"}, {Text: "ערערה", Value: "0637"}, {Text: "ערערה-בנגב", Value: "1192"}, {Text: "עשרת", Value: "0591"}, {Text: "עתלית", Value: "0053"}, {Text: "עתניאל", Value: "3748"}, {Text: "ע'ג'ר", Value: "4501"}, {Text: "פארן", Value: "1151"}, {Text: "פדואל", Value: "3768"}, {Text: "פדויים", Value: "0750"}, {Text: "פדיה", Value: "0838"}, {Text: "פואר", Value: "3732"}, {Text: "פוריידיס", Value: "0537"}, {Text: "פורייה - כפר עבודה", Value: "1104"}, {Text: "פורייה - נווה עובד", Value: "1105"}, {Text: "פורייה עילית", Value: "1313"}, {Text: "פורת", Value: "0767"}, {Text: "פטיש", Value: "0749"}, {Text: "פלמחים", Value: "0597"}, {Text: "פני חבר", Value: "3723"}, {Text: "פסגות", Value: "3659"}, {Text: "פסוטה", Value: "0535"}, {Text: 'פעמי תש"ז', Value: "2059"}, {Text: "פצאל", Value: "3615"}, {Text: "פקיעין חדשה", Value: "0281"}, {Text: "פקיעין (בוקייעה)", Value: "0536"}, {Text: "פרדס חנה-כרכור", Value: "7800"}, {Text: "פרדסייה", Value: "0171"}, {Text: "פרוד", Value: "0599"}, {Text: "פרזון", Value: "2053"}, {Text: "פרי גן", Value: "1231"}, {Text: "פתח תקווה", Value: "7900"}, {Text: "פתחיה", Value: "0839"}, {Text: "צאלים", Value: "0413"}, {Text: "צביה", Value: "1180"}, {Text: "צבעון", Value: "1213"}, {Text: "צובה", Value: "0465"}, {Text: "צוחר", Value: "1136"}, {Text: "צופים", Value: "3791"}, {Text: "צופית", Value: "0198"}, {Text: "צופר", Value: "1150"}, {Text: "צוקי ים", Value: "1102"}, {Text: "צוקים", Value: "1262"}, {Text: "צור הדסה", Value: "1113"}, {Text: "צור יצחק", Value: "1345"}, {Text: "צור משה", Value: "0276"}, {Text: "צור נתן", Value: "1148"}, {Text: "צוריאל", Value: "0774"}, {Text: "צורית", Value: "1221"}, {Text: "ציפורי", Value: "0613"}, {Text: "צלפון", Value: "0796"}, {Text: "צנדלה", Value: "0636"}, {Text: "צפרייה", Value: "0594"}, {Text: "צפרירים", Value: "1079"}, {Text: "צפת", Value: "8000"}, {Text: "צרופה", Value: "0612"}, {Text: "צרעה", Value: "0567"}, {Text: "קבועה (שבט)", Value: "1234"}, {Text: "קבוצת יבנה", Value: "0334"}, {Text: "קדומים", Value: "3557"}, {Text: "קדימה-צורן", Value: "0195"}, {Text: "קדמה", Value: "0392"}, {Text: "קדמת צבי", Value: "4025"}, {Text: "קדר", Value: "3781"}, {Text: "קדרון", Value: "0615"}, {Text: "קדרים", Value: "1211"}, {Text: "קודייראת א-צאנע (שבט", Value: "0964"}, {Text: "קוואעין (שבט)", Value: "0972"}, {Text: "קוממיות", Value: "0766"}, {Text: "קורנית", Value: "1179"}, {Text: "קטורה", Value: "1052"}, {Text: "קיסריה", Value: "1167"}, {Text: "קלחים", Value: "0414"}, {Text: "קליה", Value: "3601"}, {Text: "קלנסווה", Value: "0638"}, {Text: "קלע", Value: "4024"}, {Text: "קציר", Value: "1243"}, {Text: "קצר א-סר", Value: "1347"}, {Text: "קצרין", Value: "4100"}, {Text: "קריות", Value: "3814"}, {Text: "קריית אונו", Value: "2620"}, {Text: "קריית ארבע", Value: "3611"}, {Text: "קריית אתא", Value: "6800"}, {Text: "קריית ביאליק", Value: "9500"}, {Text: "קריית גת", Value: "2630"}, {Text: "קריית חיים", Value: "0900"}, {Text: "קריית טבעון", Value: "2300"}, {Text: "קריית ים", Value: "9600"}, {Text: "קריית יערים", Value: "1137"}, {Text: "קריית יערים (מוסד)", Value: "2039"}, {Text: "קריית מוצקין", Value: "8200"}, {Text: "קריית מלאכי", Value: "1034"}, {Text: "קריית נטפים", Value: "3746"}, {Text: "קריית ענבים", Value: "0078"}, {Text: "קריית עקרון", Value: "0469"}, {Text: "קריית שמונה", Value: "2800"}, {Text: "קרני שומרון", Value: "3640"}, {Text: "קשת", Value: "4006"}, {Text: "ראמה", Value: "0543"}, {Text: "ראס אל-עין", Value: "1334"}, {Text: "ראס עלי", Value: "0990"}, {Text: "ראש העין", Value: "2640"}, {Text: "ראש פינה", Value: "0026"}, {Text: "ראש צורים", Value: "3602"}, {Text: "ראשון לציון", Value: "8300"}, {Text: "רבבה", Value: "3795"}, {Text: "רבדים", Value: "0564"}, {Text: "רביבים", Value: "0354"}, {Text: "רביד", Value: "1225"}, {Text: "רגבה", Value: "0390"}, {Text: "רגבים", Value: "0444"}, {Text: "רהט", Value: "1161"}, {Text: "רווחה", Value: "2051"}, {Text: "רוויה", Value: "2016"}, {Text: "רוח מדבר", Value: "1341"}, {Text: "רוחמה", Value: "0362"}, {Text: "רומאנה", Value: "0539"}, {Text: "רומת הייב", Value: "0997"}, {Text: "רועי", Value: "3619"}, {Text: "רחוב", Value: "0854"}, {Text: "רחובות", Value: "8400"}, {Text: "ריחאנייה", Value: "0540"}, {Text: "ריחן", Value: "3568"}, {Text: "ריינה", Value: "0542"}, {Text: "רימונים", Value: "3565"}, {Text: "רינתיה", Value: "0616"}, {Text: "רכסים", Value: "0922"}, {Text: "רם-און", Value: "1069"}, {Text: "רמות", Value: "4702"}, {Text: "רמות השבים", Value: "0206"}, {Text: "רמות מאיר", Value: "0735"}, {Text: "רמות מנשה", Value: "0445"}, {Text: "רמות נפתלי", Value: "0372"}, {Text: "רמלה", Value: "8500"}, {Text: "רמת גן", Value: "8600"}, {Text: "רמת דוד", Value: "0135"}, {Text: "רמת הכובש", Value: "0184"}, {Text: "רמת השופט", Value: "0335"}, {Text: "רמת השרון", Value: "2650"}, {Text: "רמת יוחנן", Value: "0178"}, {Text: "רמת ישי", Value: "0122"}, {Text: "רמת מגשימים", Value: "4701"}, {Text: "רמת צבי", Value: "0339"}, {Text: "רמת רזיאל", Value: "0460"}, {Text: "רמת רחל", Value: "0127"}, {Text: "רנן", Value: "0789"}, {Text: "רעים", Value: "0713"}, {Text: "רעננה", Value: "8700"}, {Text: "רקפת", Value: "1228"}, {Text: "רשפון", Value: "0247"}, {Text: "רשפים", Value: "0437"}, {Text: "רתמים", Value: "1260"}, {Text: "שאר ישוב", Value: "0324"}, {Text: "שבי ציון", Value: "0282"}, {Text: "שבי שומרון", Value: "3571"}, {Text: "שבלי - אום אל-גנם", Value: "0913"}, {Text: "שגב-שלום", Value: "1286"}, {Text: "שדה אילן", Value: "0721"}, {Text: "שדה אליהו", Value: "0304"}, {Text: "שדה אליעזר", Value: "0861"}, {Text: "שדה בוקר", Value: "0885"}, {Text: "שדה דוד", Value: "0036"}, {Text: "שדה ורבורג", Value: "0284"}, {Text: "שדה יואב", Value: "0293"}, {Text: "שדה יעקב", Value: "0142"}, {Text: "שדה יצחק", Value: "2008"}, {Text: "שדה משה", Value: "0018"}, {Text: "שדה נחום", Value: "0259"}, {Text: "שדה נחמיה", Value: "0329"}, {Text: "שדה ניצן", Value: "1058"}, {Text: "שדה עוזיהו", Value: "0739"}, {Text: "שדה צבי", Value: "2049"}, {Text: "שדות ים", Value: "0327"}, {Text: "שדות מיכה", Value: "0027"}, {Text: "שדי אברהם", Value: "1223"}, {Text: "שדי חמד", Value: "2015"}, {Text: "שדי תרומות", Value: "2057"}, {Text: "שדמה", Value: "0555"}, {Text: "שדמות דבורה", Value: "0306"}, {Text: "שדמות מחולה", Value: "3578"}, {Text: "שדרות", Value: "1031"}, {Text: "שואבה", Value: "0741"}, {Text: "שובה", Value: "0761"}, {Text: "שובל", Value: "0394"}, {Text: "שוהם", Value: "1304"}, {Text: "שומרה", Value: "0614"}, {Text: "שומרייה", Value: "1265"}, {Text: "שוקדה", Value: "0415"}, {Text: "שורש", Value: "0456"}, {Text: "שורשים", Value: "1235"}, {Text: "שושנת העמקים", Value: "0224"}, {Text: "שזור", Value: "0527"}, {Text: "שחר", Value: "0007"}, {Text: "שחרות", Value: "1266"}, {Text: "שיבולים", Value: "0865"}, {Text: "שייח' דנון", Value: "0658"}, {Text: "שילה", Value: "3641"}, {Text: "שילת", Value: "1165"}, {Text: "שכניה", Value: "1160"}, {Text: "שלווה", Value: "0873"}, {Text: "שלווה במדבר", Value: "1373"}, {Text: "שלוחות", Value: "0439"}, {Text: "שלומי", Value: "0812"}, {Text: "שלומית", Value: "1364"}, {Text: "שמיר", Value: "0366"}, {Text: "שמעה", Value: "3784"}, {Text: "שמרת", Value: "0432"}, {Text: "שמשית", Value: "1337"}, {Text: "שני", Value: "1287"}, {Text: "שניר", Value: "1132"}, {Text: "שעב", Value: "0538"}, {Text: "שעל", Value: "4009"}, {Text: "שעלבים", Value: "0856"}, {Text: "שער אפרים", Value: "0661"}, {Text: "שער הגולן", Value: "0264"}, {Text: "שער העמקים", Value: "0237"}, {Text: "שער מנשה", Value: "0921"}, {Text: "שערי תקווה", Value: "3720"}, {Text: "שפיים", Value: "0232"}, {Text: "שפיר", Value: "0692"}, {Text: "שפר", Value: "0846"}, {Text: "שפרעם", Value: "8800"}, {Text: "שקד", Value: "3649"}, {Text: "שקף", Value: "1233"}, {Text: "שרונה", Value: "0292"}, {Text: "שריגים (לי-און)", Value: "1114"}, {Text: "שריד", Value: "0126"}, {Text: "שרשרת", Value: "0398"}, {Text: "שתולה", Value: "1045"}, {Text: "שתולים", Value: "0763"}, {Text: "תאשור", Value: "2062"}, {Text: "תדהר", Value: "2061"}, {Text: "תובל", Value: "1172"}, {Text: "תומר", Value: "3558"}, {Text: "תושייה", Value: "1083"}, {Text: "תימורים", Value: "0163"}, {Text: "תירוש", Value: "0010"}, {Text: "תל אביב -יפו", Value: "5000"}, {Text: "תל יוסף", Value: "0084"}, {Text: "תל יצחק", Value: "0287"}, {Text: "תל מונד", Value: "0154"}, {Text: "תל עדשים", Value: "0103"}, {Text: "תל קציר", Value: "0719"}, {Text: "תל שבע", Value: "1054"}, {Text: "תל תאומים", Value: "1283"}, {Text: "תלם", Value: "3719"}, {Text: "תלמי אליהו", Value: "1051"}, {Text: "תלמי אלעזר", Value: "2003"}, {Text: 'תלמי ביל"ו', Value: "2050"}, {Text: "תלמי יוסף", Value: "1237"}, {Text: "תלמי יחיאל", Value: "0727"}, {Text: "תלמי יפה", Value: "0744"}, {Text: "תלמים", Value: "0814"}, {Text: "תמרת", Value: "1244"}, {Text: "תנובות", Value: "2002"}, {Text: "תעוז", Value: "0752"}, {Text: "תפרח", Value: "0709"}, {Text: "תקומה", Value: "0665"}, {Text: "תקוע", Value: "3563"}, {Text: "תראבין א-צאנע (שבט)", Value: "0970"}, {Text: "תרבין א-צאנע (יישוב)", Value: "1346"}, {Text: "תרום", Value: "0778"}];
localStorage.BtlMobile && BtlMobileFix();
