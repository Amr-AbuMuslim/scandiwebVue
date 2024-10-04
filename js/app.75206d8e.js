(function () {
  "use strict";
  var t = {
      913: function (t, e, o) {
        var a = o(5130),
          s = o(6768);
        function r(t, e) {
          const o = (0, s.g2)("router-view");
          return (0, s.uX)(), (0, s.Wv)(o);
        }
        var i = o(1241);
        const n = {},
          l = (0, i.A)(n, [["render", r]]);
        var d = l,
          u = o(1387),
          c = o(4232);
        const h = { class: "task-list" },
          p = { class: "navbar" },
          f = { class: "navbar-links" },
          k = { class: "button-group" },
          g = ["disabled"],
          v = { class: "tasks-container" },
          m = ["value", "onClick", "checked"],
          b = { class: "task-content" },
          y = { class: "task-title" },
          L = { class: "info" },
          w = { key: 0 },
          C = { key: 1 },
          E = { key: 2 };
        function I(t, e, o, a, r, i) {
          const n = (0, s.g2)("router-link"),
            l = (0, s.g2)("footercommon");
          return (
            (0, s.uX)(),
            (0, s.CE)(
              s.FK,
              null,
              [
                (0, s.Lk)("div", h, [
                  (0, s.Lk)("nav", p, [
                    e[4] ||
                      (e[4] = (0, s.Lk)(
                        "h1",
                        { class: "navbar-title" },
                        "Task Manager",
                        -1
                      )),
                    (0, s.Lk)("div", f, [
                      (0, s.Lk)("div", k, [
                        (0, s.Lk)(
                          "button",
                          {
                            onClick:
                              e[0] ||
                              (e[0] = (...t) =>
                                i.deleteTasks && i.deleteTasks(...t)),
                            disabled: 0 === r.selectedTasks.length,
                          },
                          " MASS DELETE ",
                          8,
                          g
                        ),
                      ]),
                      (0, s.bF)(
                        n,
                        { to: "/add-task" },
                        {
                          default: (0, s.k6)(
                            () => e[3] || (e[3] = [(0, s.eW)("ADD")])
                          ),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  (0, s.Lk)("ul", v, [
                    ((0, s.uX)(!0),
                    (0, s.CE)(
                      s.FK,
                      null,
                      (0, s.pI)(
                        r.tasks,
                        (t) => (
                          (0, s.uX)(),
                          (0, s.CE)(
                            "li",
                            {
                              key: t.id,
                              class: "task-item",
                              onMouseover:
                                e[1] || (e[1] = (t) => (r.hover = !0)),
                              onMouseleave:
                                e[2] || (e[2] = (t) => (r.hover = !1)),
                            },
                            [
                              (0, s.Lk)(
                                "input",
                                {
                                  type: "checkbox",
                                  value: t.id,
                                  onClick: (e) =>
                                    i.toggleTaskSelection(t.id, e),
                                  checked: r.selectedTasks.includes(t.id),
                                  class: "delete-checkbox",
                                },
                                null,
                                8,
                                m
                              ),
                              (0, s.Lk)("div", b, [
                                (0, s.Lk)("h3", y, (0, c.v_)(t.sku), 1),
                                (0, s.Lk)("div", L, [
                                  (0, s.Lk)("span", null, [
                                    (0, s.Lk)(
                                      "strong",
                                      null,
                                      (0, c.v_)(t.name),
                                      1
                                    ),
                                  ]),
                                  "book" === t.categoryClass
                                    ? ((0, s.uX)(),
                                      (0, s.CE)("div", w, [
                                        (0, s.Lk)(
                                          "p",
                                          null,
                                          "Weight: " +
                                            (0, c.v_)(t.additionalInfo.weight) +
                                            " KG",
                                          1
                                        ),
                                      ]))
                                    : (0, s.Q3)("", !0),
                                  "dvd" === t.categoryClass
                                    ? ((0, s.uX)(),
                                      (0, s.CE)("div", C, [
                                        (0, s.Lk)(
                                          "p",
                                          null,
                                          "Size: " +
                                            (0, c.v_)(t.additionalInfo.size) +
                                            " MB",
                                          1
                                        ),
                                      ]))
                                    : (0, s.Q3)("", !0),
                                  "furniture" === t.categoryClass
                                    ? ((0, s.uX)(),
                                      (0, s.CE)("div", E, [
                                        (0, s.Lk)(
                                          "p",
                                          null,
                                          " Dimensions: " +
                                            (0, c.v_)(t.additionalInfo.height) +
                                            " x " +
                                            (0, c.v_)(t.additionalInfo.width) +
                                            " x " +
                                            (0, c.v_)(t.additionalInfo.length),
                                          1
                                        ),
                                      ]))
                                    : (0, s.Q3)("", !0),
                                ]),
                              ]),
                            ],
                            32
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                (0, s.bF)(l),
              ],
              64
            )
          );
        }
        o(4114);
        const T = { class: "footer" };
        function P(t, e, o, a, r, i) {
          return (
            (0, s.uX)(),
            (0, s.CE)(
              "footer",
              T,
              e[0] || (e[0] = [(0, s.Lk)("h3", null, "ScandiWeb TEST V1", -1)])
            )
          );
        }
        var _ = { name: "footer-common" };
        const M = (0, i.A)(_, [
          ["render", P],
          ["__scopeId", "data-v-752893fa"],
        ]);
        var S = M,
          D = o(4373),
          x = {
            data() {
              return { tasks: [], selectedTasks: [], hover: !1 };
            },
            components: { footercommon: S },
            mounted() {
              this.fetchTasks();
            },
            methods: {
              async fetchTasks() {
                try {
                  const t = await D.A.get("http://localhost/ToDoApplication");
                  this.tasks = t.data;
                } catch (t) {
                  alert("Error fetching tasks:", t);
                }
              },
              async deleteTasks() {
                if (0 === this.selectedTasks.length)
                  return void alert(
                    "Please select at least one task to delete."
                  );
                const t = { ids: [...this.selectedTasks] };
                try {
                  const e = await fetch(
                    "http://localhost/ToDoApplication/delete-tasks",
                    {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(t),
                    }
                  );
                  if (!e.ok) {
                    const t = await e.json();
                    throw new Error(t.message || "Error deleting tasks.");
                  }
                  const o = await e.json();
                  o.success
                    ? ((this.tasks = this.tasks.filter(
                        (t) => !this.selectedTasks.includes(t.id)
                      )),
                      (this.selectedTasks = []))
                    : alert(o.message || "Error deleting tasks.");
                } catch (e) {
                  alert("An error occurred: " + e.message);
                }
              },
              toggleTaskSelection(t, e) {
                e.target.checked
                  ? this.selectedTasks.push(t)
                  : (this.selectedTasks = this.selectedTasks.filter(
                      (e) => e !== t
                    ));
              },
            },
          };
        const F = (0, i.A)(x, [["render", I]]);
        var A = F;
        const V = { class: "navbar" },
          N = { class: "navbar-links" },
          O = { class: "add-product-container" },
          U = { class: "form" },
          X = { class: "form-group" },
          z = { class: "form-group" },
          j = { class: "form-group" },
          J = { class: "form-group" },
          K = { key: 0, class: "form-group" },
          B = { key: 1, class: "form-group" },
          W = { key: 2, class: "form-group" },
          Q = { key: 0, class: "popup" },
          q = { class: "popup-content" };
        function $(t, e, o, r, i, n) {
          const l = (0, s.g2)("router-link"),
            d = (0, s.g2)("footercommon");
          return (
            (0, s.uX)(),
            (0, s.CE)(
              s.FK,
              null,
              [
                (0, s.Lk)("nav", V, [
                  e[12] ||
                    (e[12] = (0, s.Lk)(
                      "h1",
                      { class: "navbar-title" },
                      "Product Manager",
                      -1
                    )),
                  (0, s.Lk)("div", N, [
                    (0, s.bF)(
                      l,
                      { to: "/" },
                      {
                        default: (0, s.k6)(
                          () => e[11] || (e[11] = [(0, s.eW)("Cancel")])
                        ),
                        _: 1,
                      }
                    ),
                    (0, s.Lk)(
                      "button",
                      {
                        onClick:
                          e[0] ||
                          (e[0] = (...t) => n.addproduct && n.addproduct(...t)),
                        class: "btn",
                      },
                      "Save"
                    ),
                  ]),
                ]),
                e[23] || (e[23] = (0, s.Lk)("h2", null, "Add product", -1)),
                (0, s.Lk)("div", O, [
                  (0, s.Lk)("div", U, [
                    (0, s.Lk)("div", X, [
                      e[13] || (e[13] = (0, s.Lk)("label", null, "SKU:", -1)),
                      (0, s.bo)(
                        (0, s.Lk)(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.product.sku = t)),
                            placeholder: "Enter SKU",
                          },
                          null,
                          512
                        ),
                        [[a.Jo, i.product.sku]]
                      ),
                    ]),
                    (0, s.Lk)("div", z, [
                      e[14] || (e[14] = (0, s.Lk)("label", null, "Name:", -1)),
                      (0, s.bo)(
                        (0, s.Lk)(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (i.product.name = t)),
                            placeholder: "Enter Product Name",
                          },
                          null,
                          512
                        ),
                        [[a.Jo, i.product.name]]
                      ),
                    ]),
                    (0, s.Lk)("div", j, [
                      e[15] || (e[15] = (0, s.Lk)("label", null, "Price:", -1)),
                      (0, s.bo)(
                        (0, s.Lk)(
                          "textarea",
                          {
                            "onUpdate:modelValue":
                              e[3] || (e[3] = (t) => (i.product.price = t)),
                            placeholder: "Enter Product price",
                          },
                          null,
                          512
                        ),
                        [[a.Jo, i.product.price]]
                      ),
                    ]),
                    (0, s.Lk)("div", J, [
                      e[17] ||
                        (e[17] = (0, s.Lk)("label", null, "Category:", -1)),
                      (0, s.bo)(
                        (0, s.Lk)(
                          "select",
                          {
                            "onUpdate:modelValue":
                              e[4] ||
                              (e[4] = (t) => (i.product.categoryClass = t)),
                            class: "selector",
                          },
                          e[16] ||
                            (e[16] = [
                              (0, s.Lk)(
                                "option",
                                { value: "Book" },
                                "Book",
                                -1
                              ),
                              (0, s.Lk)("option", { value: "DVD" }, "DVD", -1),
                              (0, s.Lk)(
                                "option",
                                { value: "Furniture" },
                                "Furniture",
                                -1
                              ),
                            ]),
                          512
                        ),
                        [[a.u1, i.product.categoryClass]]
                      ),
                    ]),
                    "Furniture" === i.product.categoryClass
                      ? ((0, s.uX)(),
                        (0, s.CE)("div", K, [
                          e[18] ||
                            (e[18] = (0, s.Lk)("label", null, "Height", -1)),
                          (0, s.bo)(
                            (0, s.Lk)(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[5] ||
                                  (e[5] = (t) => (i.additionalInfo.height = t)),
                              },
                              null,
                              512
                            ),
                            [[a.Jo, i.additionalInfo.height]]
                          ),
                          e[19] ||
                            (e[19] = (0, s.Lk)("label", null, "Width", -1)),
                          (0, s.bo)(
                            (0, s.Lk)(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[6] ||
                                  (e[6] = (t) => (i.additionalInfo.width = t)),
                              },
                              null,
                              512
                            ),
                            [[a.Jo, i.additionalInfo.width]]
                          ),
                          e[20] ||
                            (e[20] = (0, s.Lk)("label", null, "Length", -1)),
                          (0, s.bo)(
                            (0, s.Lk)(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[7] ||
                                  (e[7] = (t) => (i.additionalInfo.length = t)),
                              },
                              null,
                              512
                            ),
                            [[a.Jo, i.additionalInfo.length]]
                          ),
                        ]))
                      : (0, s.Q3)("", !0),
                    "Book" === i.product.categoryClass
                      ? ((0, s.uX)(),
                        (0, s.CE)("div", B, [
                          e[21] ||
                            (e[21] = (0, s.Lk)("label", null, "Weight:", -1)),
                          (0, s.bo)(
                            (0, s.Lk)(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[8] ||
                                  (e[8] = (t) => (i.additionalInfo.weight = t)),
                              },
                              null,
                              512
                            ),
                            [[a.Jo, i.additionalInfo.weight]]
                          ),
                        ]))
                      : (0, s.Q3)("", !0),
                    "DVD" === i.product.categoryClass
                      ? ((0, s.uX)(),
                        (0, s.CE)("div", W, [
                          e[22] ||
                            (e[22] = (0, s.Lk)("label", null, "Size:", -1)),
                          (0, s.bo)(
                            (0, s.Lk)(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[9] ||
                                  (e[9] = (t) => (i.additionalInfo.size = t)),
                              },
                              null,
                              512
                            ),
                            [[a.Jo, i.additionalInfo.size]]
                          ),
                        ]))
                      : (0, s.Q3)("", !0),
                  ]),
                  (0, s.bF)(
                    a.eB,
                    { name: "fade" },
                    {
                      default: (0, s.k6)(() => [
                        i.showErrorPopup
                          ? ((0, s.uX)(),
                            (0, s.CE)("div", Q, [
                              (0, s.Lk)("div", q, [
                                (0, s.Lk)(
                                  "h3",
                                  null,
                                  (0, c.v_)(i.errorMessage),
                                  1
                                ),
                                (0, s.Lk)(
                                  "button",
                                  {
                                    onClick:
                                      e[10] ||
                                      (e[10] = (...t) =>
                                        n.closeErrorPopup &&
                                        n.closeErrorPopup(...t)),
                                    class: "btn",
                                  },
                                  "Close"
                                ),
                              ]),
                            ]))
                          : (0, s.Q3)("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                (0, s.bF)(d),
              ],
              64
            )
          );
        }
        var G = {
          data() {
            return {
              showPopup: !1,
              showErrorPopup: !1,
              errorMessage: "",
              product: { sku: "", name: "", price: "", categoryClass: "" },
              additionalInfo: {
                size: "",
                weight: "",
                height: "",
                width: "",
                length: "",
              },
            };
          },
          components: { footercommon: S },
          methods: {
            validateFields() {
              if (
                !this.product.sku ||
                !this.product.name ||
                !this.product.price ||
                !this.product.categoryClass
              )
                return (this.errorMessage = "All fields are required."), !1;
              if (isNaN(this.product.price))
                return (
                  (this.errorMessage =
                    "Please, provide the data of indicated type (price must be a number)."),
                  !1
                );
              if ("Furniture" === this.product.categoryClass) {
                if (
                  !this.additionalInfo.height ||
                  !this.additionalInfo.width ||
                  !this.additionalInfo.length
                )
                  return (
                    (this.errorMessage =
                      "All dimensions are required for Furniture category."),
                    !1
                  );
                if (
                  isNaN(this.additionalInfo.height) ||
                  isNaN(this.additionalInfo.width) ||
                  isNaN(this.additionalInfo.length)
                )
                  return (
                    (this.errorMessage =
                      "Please, provide the data of indicated type (dimensions must be numbers)."),
                    !1
                  );
              }
              if ("Book" === this.product.categoryClass) {
                if (!this.additionalInfo.weight)
                  return (
                    (this.errorMessage =
                      "Weight is required for Book category."),
                    !1
                  );
                if (isNaN(this.additionalInfo.weight))
                  return (
                    (this.errorMessage =
                      "Please, provide the data of indicated type (weight must be a number)."),
                    !1
                  );
              }
              if ("DVD" === this.product.categoryClass) {
                if (!this.additionalInfo.size)
                  return (
                    (this.errorMessage = "Size is required for DVD category."),
                    !1
                  );
                if (isNaN(this.additionalInfo.size))
                  return (
                    (this.errorMessage =
                      "Please, provide the data of indicated type (size must be a number)."),
                    !1
                  );
              }
              return !0;
            },
            addproduct() {
              if (!this.validateFields())
                return void (this.showErrorPopup = !0);
              let t = {
                sku: this.product.sku,
                name: this.product.name,
                price: this.product.price,
                categoryClass: this.product.categoryClass,
                additionalInfo: {},
              };
              "Furniture" === this.product.categoryClass
                ? ((t.additionalInfo.height = this.additionalInfo.height),
                  (t.additionalInfo.width = this.additionalInfo.width),
                  (t.additionalInfo.length = this.additionalInfo.length))
                : "Book" === this.product.categoryClass
                ? (t.additionalInfo.weight = this.additionalInfo.weight)
                : "DVD" === this.product.categoryClass &&
                  (t.additionalInfo.size = this.additionalInfo.size),
                D.A.post("http://localhost/ToDoApplication/add-product", t)
                  .then((t) => {
                    t.data.success
                      ? this.$router.push("/")
                      : t.data.error.includes("SKU already exists")
                      ? ((this.errorMessage =
                          "The SKU already exists. Please use a unique SKU."),
                        (this.showErrorPopup = !0))
                      : ((this.errorMessage =
                          "Failed to add product: " + t.data.error),
                        (this.showErrorPopup = !0));
                  })
                  .catch((t) => {
                    (this.errorMessage = "Error adding product: " + t),
                      (this.showErrorPopup = !0);
                  });
            },
            closePopup() {
              this.showPopup = !1;
            },
            closeErrorPopup() {
              this.showErrorPopup = !1;
            },
          },
        };
        const H = (0, i.A)(G, [
          ["render", $],
          ["__scopeId", "data-v-04e020a6"],
        ]);
        var R = H;
        const Y = [
            { path: "/", name: "tasks", component: A },
            { path: "/add-task", name: "add", component: R },
          ],
          Z = (0, u.aE)({ history: (0, u.LA)("/"), routes: Y });
        var tt = Z,
          et = o(782),
          ot = (0, et.y$)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          });
        (0, a.Ef)(d).use(ot).use(tt).mount("#app");
      },
    },
    e = {};
  function o(a) {
    var s = e[a];
    if (void 0 !== s) return s.exports;
    var r = (e[a] = { exports: {} });
    return t[a].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (function () {
      var t = [];
      o.O = function (e, a, s, r) {
        if (!a) {
          var i = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (a = t[u][0]), (s = t[u][1]), (r = t[u][2]);
            for (var n = !0, l = 0; l < a.length; l++)
              (!1 & r || i >= r) &&
              Object.keys(o.O).every(function (t) {
                return o.O[t](a[l]);
              })
                ? a.splice(l--, 1)
                : ((n = !1), r < i && (i = r));
            if (n) {
              t.splice(u--, 1);
              var d = s();
              void 0 !== d && (e = d);
            }
          }
          return e;
        }
        r = r || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > r; u--) t[u] = t[u - 1];
        t[u] = [a, s, r];
      };
    })(),
    (function () {
      o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return o.d(e, { a: e }), e;
      };
    })(),
    (function () {
      o.d = function (t, e) {
        for (var a in e)
          o.o(e, a) &&
            !o.o(t, a) &&
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      o.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var t = { 524: 0 };
      o.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, a) {
          var s,
            r,
            i = a[0],
            n = a[1],
            l = a[2],
            d = 0;
          if (
            i.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in n) o.o(n, s) && (o.m[s] = n[s]);
            if (l) var u = l(o);
          }
          for (e && e(a); d < i.length; d++)
            (r = i[d]), o.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return o.O(u);
        },
        a = (self["webpackChunkscandiweb_test_v1"] =
          self["webpackChunkscandiweb_test_v1"] || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })();
  var a = o.O(void 0, [504], function () {
    return o(913);
  });
  a = o.O(a);
})();
//# sourceMappingURL=app.75206d8e.js.map
