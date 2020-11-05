/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('nova-dates-pill-filter', __webpack_require__(3));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dedfda3", Component.options)
  } else {
    hotAPI.reload("data-v-1dedfda3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pill__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Pill__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'PillFilter',
    components: { Pill: __WEBPACK_IMPORTED_MODULE_0__Pill___default.a },
    props: {
        resourceName: {
            type: String,
            required: true
        },
        filterKey: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            range: "week" // Day, week or month
        };
    },
    mounted: function mounted() {
        this.$data.range = "week";
        this.setDates(moment(this.filter.from), moment(this.filter.to));
    },

    methods: {
        setDates: function setDates(from, to) {
            this.filter.from = from.format('YYYY-MM-DD');
            this.filter.to = to.format('YYYY-MM-DD');
            this.$store.commit(this.resourceName + '/updateFilterState', {
                filterClass: this.filterKey,
                value: {
                    from: from.format('YYYY-MM-DD'),
                    to: to.format('YYYY-MM-DD'),
                    range: this.$data.range
                }
            });

            this.$emit('change');
        },
        previous: function previous() {
            var to = moment(this.filter.from).clone();
            var from = moment(this.filter.from).subtract(1, this.$data.range);
            this.setDates(from, to);
        },
        next: function next() {
            var from = moment(this.filter.to).clone();
            var to = moment(this.filter.to).add(1, this.$data.range);
            var __ret = this.setDateLimits(from, to, this.$data.range);
            from = __ret.from;
            to = __ret.to;
            this.setDates(from, to);
        },

        setDateLimits: function setDateLimits(from, to, newRange) {
            if (from.clone().add(1, newRange).isAfter(moment())) {
                to = moment();
                from = moment().subtract(1, newRange);
            } else {
                to = from.clone().add(1, newRange);
            }
            return { from: from, to: to };
        },
        changeRange: function changeRange(newRange) {
            if (this.$data.range === newRange) return;
            var from = moment(this.filter.from); //.subtract(1, newRange).format('YYYY-MM-DD')
            var to = moment(this.filter.to); // .add(1, newRange)
            var __ret = this.setDateLimits(from, to, newRange);
            from = __ret.from;
            to = __ret.to;
            this.setDates(from, to);
            this.$data.range = newRange;
        }
    },
    computed: {
        filter: function filter() {
            return this.$store.getters[this.resourceName + '/getFilter'](this.filterKey);
        },
        from: function from() {
            return this.filter.from;
        },
        to: function to() {
            return this.filter.to;
        },

        fullDate: function fullDate() {
            return moment(this.from).format('DD/MM/YYYY') + ' - ' + moment(this.to).format('DD/MM/YYYY');
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(6)
/* template */
var __vue_template__ = __webpack_require__(7)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Pill.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f21298b8", Component.options)
  } else {
    hotAPI.reload("data-v-f21298b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Pill',
    props: {
        active: {
            type: Boolean,
            required: true
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "rounded-lg form-control cursor-pointer dim text-sm p-2 px-4 mr-2 mt-2 select-none whitespace-no-wrap",
      class: { "bg-primary text-white": _vm.active, "bg-20": !_vm.active }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f21298b8", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "viewport", staticClass: "overflow-hidden pill-filter" },
    [
      _c("div", [
        _c(
          "h3",
          { staticClass: "text-sm uppercase tracking-wide text-80 bg-30 p-3" },
          [_vm._v("\n            " + _vm._s(_vm.fullDate) + "\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { ref: "content", staticClass: "flex px-2 pb-2 " },
          [
            _c(
              "Pill",
              {
                key: _vm.previous,
                attrs: { active: "" },
                nativeOn: {
                  click: function($event) {
                    return _vm.previous()
                  }
                }
              },
              [_vm._v("\n                <\n            ")]
            ),
            _vm._v(" "),
            _vm._l(_vm.filter.options, function(option) {
              return _c(
                "Pill",
                {
                  key: option.value,
                  attrs: { active: _vm.range === option.value },
                  nativeOn: {
                    click: function($event) {
                      return _vm.changeRange(option.value)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(option.name) +
                      "\n            "
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "Pill",
              {
                key: _vm.nextone,
                attrs: { active: "" },
                nativeOn: {
                  click: function($event) {
                    return _vm.next()
                  }
                }
              },
              [_vm._v("\n                >\n            ")]
            )
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1dedfda3", module.exports)
  }
}

/***/ })
/******/ ]);