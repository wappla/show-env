"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _core = require("@show-env/core");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: expose only needed methods from core
var EnvBar = function EnvBar(_ref) {
  var env = _ref.env,
      _ref$theme = _ref.theme,
      themeName = _ref$theme === void 0 ? _core.DEFAULT : _ref$theme,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 100 : _ref$zIndex,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '5px' : _ref$height;
  var theme = (0, _core.getTheme)(themeName);
  var backgroundColor = (0, _core.getColor)(env, theme);
  var style = {
    position: 'fixed',
    zIndex: zIndex,
    top: 0,
    left: 0,
    width: '100%',
    height: height,
    backgroundColor: backgroundColor
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style
  });
};

var _default = EnvBar;
exports.default = _default;