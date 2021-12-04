"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CompaniesService = _interopRequireDefault(require("../services/CompaniesService"));

var _CompaniesRepository = _interopRequireDefault(require("../repositories/CompaniesRepository"));

var _Company = _interopRequireDefault(require("../models/Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const companyDB = new _CompaniesRepository.default(_Company.default);
const companiesService = new _CompaniesService.default(companyDB);
const route = (0, _express.Router)();
route.get('/getAll/:grade', async (req, resp, next) => {
  const {
    name
  } = req.query;
  const {
    grade
  } = req.params;

  try {
    const companies = await companiesService.getAll(name, grade);
    return resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;