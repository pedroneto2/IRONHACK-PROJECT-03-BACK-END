"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AssessmentsService = _interopRequireDefault(require("../services/AssessmentsService"));

var _AssessmentsRepository = _interopRequireDefault(require("../repositories/AssessmentsRepository"));

var _Assessment = _interopRequireDefault(require("../models/Assessment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const assessmentDB = new _AssessmentsRepository.default(_Assessment.default);
const usersService = new _AssessmentsService.default(assessmentDB);
const route = (0, _express.Router)();
var _default = route;
exports.default = _default;