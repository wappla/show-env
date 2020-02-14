"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.light = exports.dark = void 0;

var _constants = require("../constants");

var _dark, _light, _PRODUCTION$STAGING$D;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var red400 = '#FC8181';
var red500 = '#F56565';
var red600 = '#E53E3E';
var orange400 = '#F6AD55';
var orange500 = '#ED8936';
var orange600 = '#DD6B20';
var green400 = '#68D391';
var green500 = '#48BB78';
var green600 = '#38A169';
var dark = (_dark = {}, _defineProperty(_dark, _constants.PRODUCTION, red400), _defineProperty(_dark, _constants.STAGING, orange400), _defineProperty(_dark, _constants.DEVELOPMENT, green400), _dark);
exports.dark = dark;
var light = (_light = {}, _defineProperty(_light, _constants.PRODUCTION, red600), _defineProperty(_light, _constants.STAGING, orange600), _defineProperty(_light, _constants.DEVELOPMENT, green600), _light);
exports.light = light;

var _default = (_PRODUCTION$STAGING$D = {}, _defineProperty(_PRODUCTION$STAGING$D, _constants.PRODUCTION, red500), _defineProperty(_PRODUCTION$STAGING$D, _constants.STAGING, orange500), _defineProperty(_PRODUCTION$STAGING$D, _constants.DEVELOPMENT, green500), _PRODUCTION$STAGING$D);

exports["default"] = _default;