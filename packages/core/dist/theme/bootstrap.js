"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var _PRODUCTION$STAGING$D;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var red = '#dc3545';
var orange = '#ffc107';
var green = '#28a745';

var _default = (_PRODUCTION$STAGING$D = {}, _defineProperty(_PRODUCTION$STAGING$D, _constants.PRODUCTION, red), _defineProperty(_PRODUCTION$STAGING$D, _constants.STAGING, orange), _defineProperty(_PRODUCTION$STAGING$D, _constants.DEVELOPMENT, green), _PRODUCTION$STAGING$D);

exports["default"] = _default;