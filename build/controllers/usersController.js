"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UsersService = _interopRequireDefault(require("../services/UsersService"));

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userDB = new _UsersRepository.default(_User.default);
const usersService = new _UsersService.default(userDB);
const route = (0, _express.Router)();
var _default = route;
exports.default = _default;