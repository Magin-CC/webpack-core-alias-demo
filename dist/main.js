/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/os-browserify/browser.js":
      /*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
      /***/ (__unused_webpack_module, exports) => {
        exports.endianness = function () {
          return "LE";
        };

        exports.hostname = function () {
          if (typeof location !== "undefined") {
            return location.hostname;
          } else return "";
        };

        exports.loadavg = function () {
          return [];
        };

        exports.uptime = function () {
          return 0;
        };

        exports.freemem = function () {
          return Number.MAX_VALUE;
        };

        exports.totalmem = function () {
          return Number.MAX_VALUE;
        };

        exports.cpus = function () {
          return [];
        };

        exports.type = function () {
          return "Browser";
        };

        exports.release = function () {
          if (typeof navigator !== "undefined") {
            return navigator.appVersion;
          }
          return "";
        };

        exports.networkInterfaces = exports.getNetworkInterfaces = function () {
          return {};
        };

        exports.arch = function () {
          return "javascript";
        };

        exports.platform = function () {
          return "browser";
        };

        exports.tmpdir = exports.tmpDir = function () {
          return "/tmp";
        };

        exports.EOL = "\n";

        exports.homedir = function () {
          return "/";
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

    console.log(os__WEBPACK_IMPORTED_MODULE_0__);
  })();

  /******/
})();
