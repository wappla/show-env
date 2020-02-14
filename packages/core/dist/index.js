"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  setFavicon: true,
  setTitle: true,
  getTheme: true,
  getColor: true
};
exports.getColor = exports.getTheme = exports.setTitle = exports.setFavicon = void 0;

var _bootstrap = _interopRequireDefault(require("./theme/bootstrap"));

var _default = _interopRequireDefault(require("./theme/default"));

var _tailwind = _interopRequireWildcard(require("./theme/tailwind"));

var constants = _interopRequireWildcard(require("./constants"));

Object.keys(constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return constants[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setFavicon = function setFavicon(newIcon) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = newIcon;
  document.getElementsByTagName('head')[0].appendChild(link);
};

exports.setFavicon = setFavicon;

var getTitle = function getTitle(env, title, type, divider) {
  switch (type) {
    case constants.REPLACE:
      return env;

    case constants.APPEND:
      return "".concat(title, " ").concat(divider, " ").concat(env);

    case constants.PREPEND:
    default:
      return "".concat(env, " ").concat(divider, " ").concat(title);
  }
};

var setTitle = function setTitle(env, _ref) {
  var type = _ref.type,
      _ref$divider = _ref.divider,
      divider = _ref$divider === void 0 ? '-' : _ref$divider;
  var _document = document,
      title = _document.title;
  var newTitle = getTitle(env, title, type, divider);
  document.title = newTitle;
};

exports.setTitle = setTitle;

var getTheme = function getTheme(theme) {
  switch (theme) {
    case constants.BOOTSTRAP:
      return _bootstrap["default"];

    case constants.TAILWIND:
      return _tailwind["default"];

    case constants.TAILWIND_DARK:
      return _tailwind.dark;

    case constants.TAILWIND_LIGHT:
      return _tailwind.light;

    case constants.DEFAULT:
    default:
      return _default["default"];
  }
};

exports.getTheme = getTheme;

var getColor = function getColor(env, theme) {
  return theme[env];
};

exports.getColor = getColor;