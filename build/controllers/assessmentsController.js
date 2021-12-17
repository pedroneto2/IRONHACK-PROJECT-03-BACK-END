"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserRestrictions = _interopRequireDefault(require("../exceptions/UserRestrictions"));

var _commons = require("./commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = (0, _express.Router)();
route.post('/createAssessment', async (req, resp, next) => {
  try {
    const {
      company = '',
      companyLogo = ''
    } = req.body;
    let companyID;
    const foundCompany = await _commons.companiesService.findCompanyByName(company);

    if (!foundCompany) {
      const registeredCompany = await _commons.companiesService.create(company, companyLogo);
      companyID = registeredCompany._id;
    } else {
      companyID = foundCompany._id;
    }

    const doubleAssessment = await _commons.assessmentService.verifyDoubleAssessment(companyID, req.user._id);
    if (doubleAssessment) throw new _UserRestrictions.default('O usuário não pode avaliar uma empresa mais que uma vez!');
    const newAssessment = await _commons.assessmentService.create(req.body, companyID, req.user._id);
    await _commons.companiesService.insertCompanyAssessment(newAssessment._id, companyID);
    await _commons.usersService.insertUserAssessment(newAssessment._id, req.user._id);
    return resp.status(200).json(newAssessment);
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;