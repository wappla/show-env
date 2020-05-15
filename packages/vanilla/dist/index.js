"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _core = require("@wappla/show-env-core");

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createEnvBar =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var env, _ref2$theme, themeName, _ref2$zIndex, zIndex, _ref2$height, height;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            env = _ref2.env, _ref2$theme = _ref2.theme, themeName = _ref2$theme === void 0 ? _core.DEFAULT : _ref2$theme, _ref2$zIndex = _ref2.zIndex, zIndex = _ref2$zIndex === void 0 ? 100 : _ref2$zIndex, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? '5px' : _ref2$height;
            return _context.abrupt("return", new Promise(function (resolve) {
              var theme = (0, _core.getTheme)(themeName);
              var backgroundColor = (0, _core.getColor)(env, theme);
              var bar = document.createElement('div');
              bar.style.cssText = "\n        position: fixed;\n        z-index: ".concat(zIndex, ";\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ").concat(height, ";\n        background-color: ").concat(backgroundColor, ";\n    "); // Append bar to body on load

              var onLoad = function onLoad() {
                document.body.appendChild(bar);
                resolve(bar);
              }; // Wait for document to be ready


              if (document.readyState === 'complete') {
                onLoad();
              } else {
                window.onload = onLoad;
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEnvBar(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = createEnvBar;
exports["default"] = _default;
