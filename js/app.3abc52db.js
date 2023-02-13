(function (t) {
  function e(e) {
    for (
      var i, c, p = e[0], r = e[1], o = e[2], f = 0, u = [];
      f < p.length;
      f++
    )
      (c = p[f]),
        Object.prototype.hasOwnProperty.call(s, c) && s[c] && u.push(s[c][0]),
        (s[c] = 0);
    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    g && g(e);
    while (u.length) u.shift()();
    return a.push.apply(a, o || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], i = !0, p = 1; p < n.length; p++) {
        var r = n[p];
        0 !== s[r] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    a = [];
  function c(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = t),
    (c.c = i),
    (c.d = function (t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          c.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "/pokemon-memories/");
  var p = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = p.push.bind(p);
  (p.push = e), (p = p.slice());
  for (var o = 0; o < p.length; o++) e(p[o]);
  var g = r;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "0512": function (t, e, n) {
    t.exports = n.p + "img/31.937d367b.png";
  },
  "0694": function (t, e, n) {
    t.exports = n.p + "img/26.4a8c3de9.png";
  },
  "06db": function (t, e, n) {
    t.exports = n.p + "img/16.77cc0a23.png";
  },
  "0768": function (t, e, n) {
    t.exports = n.p + "img/9.0a917143.png";
  },
  "0958": function (t, e, n) {
    t.exports = n.p + "img/12.22867b7a.png";
  },
  "0b66": function (t, e, n) {
    t.exports = n.p + "img/25.ed552ad4.png";
  },
  "0c39": function (t, e, n) {
    "use strict";
    n("2214");
  },
  "0cc9": function (t, e, n) {},
  "10b0": function (t, e, n) {
    t.exports = n.p + "img/59.6fa94c94.png";
  },
  1703: function (t, e, n) {
    t.exports = n.p + "img/28.8a638d34.png";
  },
  1771: function (t, e, n) {
    var i = {
      "./images/1.png": "c1c5",
      "./images/10.png": "5f7f",
      "./images/11.png": "66a3",
      "./images/12.png": "0958",
      "./images/13.png": "aa70",
      "./images/14.png": "d780",
      "./images/15.png": "584e",
      "./images/16.png": "06db",
      "./images/17.png": "27d4",
      "./images/18.png": "a8cf",
      "./images/19.png": "e028",
      "./images/2.png": "81e5",
      "./images/20.png": "93f2",
      "./images/21.png": "ad16",
      "./images/22.png": "8c40",
      "./images/23.png": "aa8b",
      "./images/24.png": "627c",
      "./images/25.png": "0b66",
      "./images/26.png": "0694",
      "./images/27.png": "b082",
      "./images/28.png": "1703",
      "./images/29.png": "f919",
      "./images/3.png": "619a",
      "./images/30.png": "aee0",
      "./images/31.png": "0512",
      "./images/32.png": "ff93",
      "./images/33.png": "a265",
      "./images/34.png": "6c6f",
      "./images/35.png": "2f58",
      "./images/36.png": "1ca3",
      "./images/37.png": "f7a0",
      "./images/38.png": "d354",
      "./images/39.png": "aa0c",
      "./images/4.png": "33b2",
      "./images/40.png": "5e62",
      "./images/41.png": "93a5",
      "./images/42.png": "b188",
      "./images/43.png": "9ed6",
      "./images/44.png": "24fa",
      "./images/45.png": "5b8c",
      "./images/46.png": "f3f9",
      "./images/47.png": "33ed",
      "./images/48.png": "7310",
      "./images/49.png": "5942",
      "./images/5.png": "4660",
      "./images/50.png": "1e92",
      "./images/51.png": "3634",
      "./images/52.png": "ea49",
      "./images/53.png": "3b56",
      "./images/54.png": "35a1",
      "./images/55.png": "c2b9",
      "./images/56.png": "378f",
      "./images/57.png": "3ac9",
      "./images/58.png": "8fd2",
      "./images/59.png": "10b0",
      "./images/6.png": "97ca",
      "./images/60.png": "bbd8",
      "./images/61.png": "9f47",
      "./images/62.png": "8e68",
      "./images/63.png": "94e9",
      "./images/64.png": "7516",
      "./images/7.png": "8efd",
      "./images/8.png": "570d",
      "./images/9.png": "0768",
      "./images/icon_back.png": "4ad7",
      "./logo.png": "cf05",
      "./styles/global.css": "f95d",
    };
    function s(t) {
      var e = a(t);
      return n(e);
    }
    function a(t) {
      if (!n.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (s.keys = function () {
      return Object.keys(i);
    }),
      (s.resolve = a),
      (t.exports = s),
      (s.id = "1771");
  },
  "1ca3": function (t, e, n) {
    t.exports = n.p + "img/36.4734ecf8.png";
  },
  "1e92": function (t, e, n) {
    t.exports = n.p + "img/50.1d22be25.png";
  },
  2214: function (t, e, n) {},
  "24fa": function (t, e, n) {
    t.exports = n.p + "img/44.5bdf8714.png";
  },
  "27d4": function (t, e, n) {
    t.exports = n.p + "img/17.115f5afb.png";
  },
  "2f58": function (t, e, n) {
    t.exports = n.p + "img/35.71d5cfa0.png";
  },
  "33b2": function (t, e, n) {
    t.exports = n.p + "img/4.a1ac67b6.png";
  },
  "33ed": function (t, e, n) {
    t.exports = n.p + "img/47.950a71f4.png";
  },
  "35a1": function (t, e, n) {
    t.exports = n.p + "img/54.abb9af17.png";
  },
  3634: function (t, e, n) {
    t.exports = n.p + "img/51.e8af4b9c.png";
  },
  "378f": function (t, e, n) {
    t.exports = n.p + "img/56.8cfe9dd0.png";
  },
  "38b0": function (t, e, n) {
    "use strict";
    n("ea03");
  },
  "3ac9": function (t, e, n) {
    t.exports = n.p + "img/57.63da7c03.png";
  },
  "3b56": function (t, e, n) {
    t.exports = n.p + "img/53.6f8ce73a.png";
  },
  4473: function (t, e, n) {
    "use strict";
    n("0cc9");
  },
  4660: function (t, e, n) {
    t.exports = n.p + "img/5.6e800f80.png";
  },
  "4ad7": function (t, e, n) {
    t.exports = n.p + "img/icon_back.a2a7e44b.png";
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n("7a23");
    function s(t, e, n, s, a, c) {
      const p = Object(i["m"])("main-screen"),
        r = Object(i["m"])("interact-screen"),
        o = Object(i["m"])("result-screen");
      return (
        Object(i["i"])(),
        Object(i["e"])(
          i["a"],
          null,
          [
            "main" === a.statusMatch
              ? (Object(i["i"])(),
                Object(i["c"])(p, {
                  key: 0,
                  onOnStart: e[0] || (e[0] = (t) => c.onHandleBeforeStart(t)),
                }))
              : Object(i["d"])("", !0),
            "match" === a.statusMatch
              ? (Object(i["i"])(),
                Object(i["c"])(
                  r,
                  {
                    key: 1,
                    cardsContext: a.settings.cardsContext,
                    onOnFinish: e[1] || (e[1] = (t) => c.onShowResult()),
                  },
                  null,
                  8,
                  ["cardsContext"]
                ))
              : Object(i["d"])("", !0),
            "result" === a.statusMatch
              ? (Object(i["i"])(),
                Object(i["c"])(
                  o,
                  {
                    key: 2,
                    timer: a.timer,
                    onOnStartAgain:
                      e[2] || (e[2] = (t) => (a.statusMatch = "main")),
                  },
                  null,
                  8,
                  ["timer"]
                ))
              : Object(i["d"])("", !0),
          ],
          64
        )
      );
    }
    const a = (t) => (
        Object(i["k"])("data-v-f1b69144"), (t = t()), Object(i["j"])(), t
      ),
      c = { class: "screen" },
      p = a(() => Object(i["f"])("h1", null, "POKEMON MEMORIES", -1)),
      r = a(() => Object(i["f"])("h3", null, "Select mode to start game", -1)),
      o = { class: "modes" },
      g = a(() => Object(i["f"])("span", null, "4x4", -1)),
      f = a(() => Object(i["f"])("span", null, "Easy", -1)),
      u = [g, f],
      d = a(() => Object(i["f"])("span", null, "6x6", -1)),
      l = a(() => Object(i["f"])("span", null, "Normal", -1)),
      m = [d, l];
    function b(t, e, n, s, a, g) {
      return (
        Object(i["i"])(),
        Object(i["e"])("div", c, [
          p,
          r,
          Object(i["f"])("div", o, [
            Object(i["f"])(
              "button",
              { onClick: e[0] || (e[0] = (t) => g.onStart(16)) },
              u
            ),
            Object(i["f"])(
              "button",
              { onClick: e[1] || (e[1] = (t) => g.onStart(36)) },
              m
            ),
          ]),
        ])
      );
    }
    var h = {
        methods: {
          onStart(t) {
            this.$emit("onStart", { totalOfBlock: t });
          },
        },
      },
      x = (n("38b0"), n("6b0d")),
      O = n.n(x);
    const j = O()(h, [
      ["render", b],
      ["__scopeId", "data-v-f1b69144"],
    ]);
    var v = j;
    const y = { class: "screen" };
    function _(t, e, n, s, a, c) {
      const p = Object(i["m"])("card-flip");
      return (
        Object(i["i"])(),
        Object(i["e"])("div", y, [
          Object(i["f"])(
            "div",
            {
              class: "screen__inner",
              style: Object(i["h"])({
                width:
                  ((3 * (621 / Math.sqrt(n.cardsContext.length) - 16)) / 4 +
                    16) *
                    Math.sqrt(n.cardsContext.length) +
                  "px",
              }),
            },
            [
              (Object(i["i"])(!0),
              Object(i["e"])(
                i["a"],
                null,
                Object(i["l"])(
                  n.cardsContext,
                  (t, s) => (
                    Object(i["i"])(),
                    Object(i["c"])(
                      p,
                      {
                        key: s,
                        ref_for: !0,
                        ref: "card-" + s,
                        imageBackUrl: `images/${t}.png`,
                        card: { index: s, value: t },
                        cardsContext: n.cardsContext,
                        onOnFlip: e[0] || (e[0] = (t) => c.checkRule(t)),
                      },
                      null,
                      8,
                      ["imageBackUrl", "card", "cardsContext"]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ),
        ])
      );
    }
    n("14d9");
    const k = { class: "card__face card__face--front" },
      S = { class: "card__face card__face--back" };
    function C(t, e, s, a, c, p) {
      return (
        Object(i["i"])(),
        Object(i["e"])(
          "div",
          {
            class: Object(i["g"])(["card", { disable: c.isDisable }]),
            style: Object(i["h"])({
              height: 621 / Math.sqrt(s.cardsContext.length) - 16 + "px",
              width:
                (3 * (621 / Math.sqrt(s.cardsContext.length) - 16)) / 4 + "px",
            }),
          },
          [
            Object(i["f"])(
              "div",
              {
                class: Object(i["g"])([
                  "card__inner",
                  { "is-flipped": c.isFlipped },
                ]),
                onClick: e[0] || (e[0] = (t) => p.onToggleFlipCard()),
              },
              [
                Object(i["f"])("div", k, [
                  Object(i["f"])(
                    "div",
                    {
                      class: "card__content",
                      style: Object(i["h"])({
                        backgroundSize: `${
                          (3 * (621 / Math.sqrt(s.cardsContext.length) - 16)) /
                          4 /
                          3
                        }px ${
                          (3 * (621 / Math.sqrt(s.cardsContext.length) - 16)) /
                          4 /
                          3
                        }px`,
                      }),
                    },
                    null,
                    4
                  ),
                ]),
                Object(i["f"])("div", S, [
                  Object(i["f"])(
                    "div",
                    {
                      class: "card__content",
                      style: Object(i["h"])({
                        backgroundImage: `url(${n("1771")(
                          "./" + s.imageBackUrl
                        )})`,
                      }),
                    },
                    null,
                    4
                  ),
                ]),
              ],
              2
            ),
          ],
          6
        )
      );
    }
    var M = {
      props: {
        imageBackUrl: { type: String, required: !0 },
        card: { type: [String, Number, Array, Object], required: !0 },
        cardsContext: { type: [Array, String, Number, Object], required: !0 },
      },
      data() {
        return { isFlipped: !1, isDisable: !1 };
      },
      methods: {
        onToggleFlipCard() {
          return (
            !this.isDisable &&
            !this.isFlipped &&
            ((this.isFlipped = !this.isFlipped),
            void (this.isFlipped && this.$emit("onFlip", this.card)))
          );
        },
        onResetFlip() {
          (this.isDisable = !1), (this.isFlipped = !1);
        },
        onDisableFlip() {
          this.isDisable = !0;
        },
      },
    };
    n("0c39");
    const F = O()(M, [
      ["render", C],
      ["__scopeId", "data-v-01b9b00a"],
    ]);
    var w = F,
      A = {
        props: {
          cardsContext: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        components: { CardFlip: w },
        data() {
          return { rules: [], rights: [] };
        },
        methods: {
          checkRule(t) {
            if (2 === this.rules.length) {
              for (let t = 0; t < this.cardsContext.length; t++) {
                const e = this.$refs["card-" + t];
                e[0].onDisableFlip();
              }
              return !1;
            }
            this.rules.push(t),
              2 === this.rules.length &&
              this.rules[0].value === this.rules[1].value
                ? (this.$refs["card-" + this.rules[0].index][0].onDisableFlip(),
                  this.$refs["card-" + this.rules[1].index][0].onDisableFlip(),
                  this.rights.push(...this.rules),
                  (this.rules = []))
                : 2 === this.rules.length &&
                  this.rules[0].value !== this.rules[1].value &&
                  setTimeout(() => {
                    for (let t = 0; t < this.cardsContext.length; t++) {
                      const e = this.rights.find((e) => e.index === t);
                      e || this.$refs["card-" + t][0].onResetFlip();
                    }
                    this.rules = [];
                  }, 800),
              this.rights.length / 2 === this.cardsContext.length / 2 &&
                setTimeout(() => {
                  this.$emit("onFinish", {});
                }, 920);
          },
        },
      };
    n("b2cf");
    const D = O()(A, [
      ["render", _],
      ["__scopeId", "data-v-c8c25362"],
    ]);
    var $ = D;
    const B = (t) => (
        Object(i["k"])("data-v-abdbd440"), (t = t()), Object(i["j"])(), t
      ),
      q = { class: "screen" },
      T = B(() => Object(i["f"])("h1", null, "✨ Congratulations ✨", -1));
    function I(t, e, n, s, a, c) {
      return (
        Object(i["i"])(),
        Object(i["e"])("div", q, [
          T,
          Object(i["f"])(
            "h3",
            null,
            Object(i["n"])(Math.round(n.timer / 920)) + " seconds",
            1
          ),
          Object(i["f"])(
            "button",
            {
              onClick:
                e[0] ||
                (e[0] = (...t) => c.onStartAgain && c.onStartAgain(...t)),
            },
            "Start Again"
          ),
        ])
      );
    }
    var P = {
      props: { timer: { type: [Number, String], default: 0 } },
      data() {
        return {};
      },
      methods: {
        onStartAgain() {
          this.$emit("onStartAgain");
        },
      },
    };
    n("4473");
    const R = O()(P, [
      ["render", I],
      ["__scopeId", "data-v-abdbd440"],
    ]);
    var N = R;
    const E = (t) => t.sort(() => Math.random() - Math.random());
    var U = {
      name: "App",
      components: { MainScreen: v, InteractScreen: $, ResultScreen: N },
      data() {
        return {
          statusMatch: "main",
          settings: { totalBlocks: 0, cardsContext: {}, startedAt: null },
          timer: 0,
        };
      },
      methods: {
        onHandleBeforeStart(t) {
          this.settings.totalBlocks = t.totalOfBlock;
          const e = Array.from(
              { length: this.settings.totalBlocks / 2 },
              (t, e) => e + 1
            ),
            n = [...e, ...e];
          (this.settings.cardsContext = E(E(E(n)))),
            (this.settings.startedAt = new Date().getTime()),
            (this.statusMatch = "match");
        },
        onShowResult() {
          (this.timer = new Date().getTime() - this.settings.startedAt),
            (this.statusMatch = "result");
        },
      },
    };
    n("d8ca");
    const H = O()(U, [
      ["render", s],
      ["__scopeId", "data-v-122f131e"],
    ]);
    var J = H;
    n("f95d");
    Object(i["b"])(J).mount("#app");
  },
  "570d": function (t, e, n) {
    t.exports = n.p + "img/8.c7f11013.png";
  },
  "584e": function (t, e, n) {
    t.exports = n.p + "img/15.285fc076.png";
  },
  5942: function (t, e, n) {
    t.exports = n.p + "img/49.10b9cbeb.png";
  },
  "5b8c": function (t, e, n) {
    t.exports = n.p + "img/45.5fd202ca.png";
  },
  "5e62": function (t, e, n) {
    t.exports = n.p + "img/40.4383db74.png";
  },
  "5f7f": function (t, e, n) {
    t.exports = n.p + "img/10.76dd1969.png";
  },
  "619a": function (t, e, n) {
    t.exports = n.p + "img/3.be1b34e4.png";
  },
  "627c": function (t, e, n) {
    t.exports = n.p + "img/24.86aa04af.png";
  },
  "66a3": function (t, e, n) {
    t.exports = n.p + "img/11.0694855e.png";
  },
  "6c6f": function (t, e, n) {
    t.exports = n.p + "img/34.9f5652f7.png";
  },
  7310: function (t, e, n) {
    t.exports = n.p + "img/48.d4793782.png";
  },
  7516: function (t, e, n) {
    t.exports = n.p + "img/64.f841ee56.png";
  },
  "81e5": function (t, e, n) {
    t.exports = n.p + "img/2.dc64f372.png";
  },
  "8c40": function (t, e, n) {
    t.exports = n.p + "img/22.2b267013.png";
  },
  "8e68": function (t, e, n) {
    t.exports = n.p + "img/62.d5f9fed5.png";
  },
  "8efd": function (t, e, n) {
    t.exports = n.p + "img/7.37c115ab.png";
  },
  "8fd2": function (t, e, n) {
    t.exports = n.p + "img/58.ceb5685f.png";
  },
  "93a5": function (t, e, n) {
    t.exports = n.p + "img/41.eb72d46e.png";
  },
  "93f2": function (t, e, n) {
    t.exports = n.p + "img/20.ecca08b0.png";
  },
  "94e9": function (t, e, n) {
    t.exports = n.p + "img/63.f8c507da.png";
  },
  "97ca": function (t, e, n) {
    t.exports = n.p + "img/6.191e8f3a.png";
  },
  "9ed6": function (t, e, n) {
    t.exports = n.p + "img/43.8c2cdbdf.png";
  },
  "9f20": function (t, e, n) {},
  "9f47": function (t, e, n) {
    t.exports = n.p + "img/61.492b643d.png";
  },
  a265: function (t, e, n) {
    t.exports = n.p + "img/33.390c252d.png";
  },
  a8cf: function (t, e, n) {
    t.exports = n.p + "img/18.92e8d5b1.png";
  },
  aa0c: function (t, e, n) {
    t.exports = n.p + "img/39.6d815a08.png";
  },
  aa70: function (t, e, n) {
    t.exports = n.p + "img/13.9c98f385.png";
  },
  aa8b: function (t, e, n) {
    t.exports = n.p + "img/23.78973551.png";
  },
  ad16: function (t, e, n) {
    t.exports = n.p + "img/21.e00e90a0.png";
  },
  aee0: function (t, e, n) {
    t.exports = n.p + "img/30.41afb62f.png";
  },
  b082: function (t, e, n) {
    t.exports = n.p + "img/27.49051a13.png";
  },
  b188: function (t, e, n) {
    t.exports = n.p + "img/42.e552b4c5.png";
  },
  b2cf: function (t, e, n) {
    "use strict";
    n("d268");
  },
  bbd8: function (t, e, n) {
    t.exports = n.p + "img/60.b197a48c.png";
  },
  c1c5: function (t, e, n) {
    t.exports = n.p + "img/1.ec31564c.png";
  },
  c2b9: function (t, e, n) {
    t.exports = n.p + "img/55.637daf96.png";
  },
  cf05: function (t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  },
  d268: function (t, e, n) {},
  d354: function (t, e, n) {
    t.exports = n.p + "img/38.ca407f72.png";
  },
  d780: function (t, e, n) {
    t.exports = n.p + "img/14.6dd067d3.png";
  },
  d8ca: function (t, e, n) {
    "use strict";
    n("9f20");
  },
  e028: function (t, e, n) {
    t.exports = n.p + "img/19.affb1356.png";
  },
  ea03: function (t, e, n) {},
  ea49: function (t, e, n) {
    t.exports = n.p + "img/52.30a8871d.png";
  },
  f3f9: function (t, e, n) {
    t.exports = n.p + "img/46.69c8e7f3.png";
  },
  f7a0: function (t, e, n) {
    t.exports = n.p + "img/37.a2cf13bb.png";
  },
  f919: function (t, e, n) {
    t.exports = n.p + "img/29.fb497abc.png";
  },
  f95d: function (t, e, n) {},
  ff93: function (t, e, n) {
    t.exports = n.p + "img/32.3050a512.png";
  },
});
//# sourceMappingURL=app.3abc52db.js.map
