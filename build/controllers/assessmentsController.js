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
      company = ''
    } = req.body;
    let companyID, userID;
    const foundCompany = await _commons.companiesService.findCompanyByName(company);

    if (!foundCompany) {
      const registeredCompany = await _commons.companiesService.create(company);
      companyID = registeredCompany._id;
    } else {
      companyID = foundCompany._id;
    }

    const userIsRegistered = await _commons.usersService.findUserByLinkedinId(req.user.linkedinId);

    if (!userIsRegistered) {
      const registeredUser = await _commons.usersService.create(req.user);
      userID = registeredUser._id;
    } else {
      userID = userIsRegistered._id;
    }

    const doubleAssessment = await _commons.assessmentService.verifyDoubleAssessment(companyID, userID);
    if (doubleAssessment) throw new _UserRestrictions.default('User can not assess a company twice!');
    const newAssessment = await _commons.assessmentService.create(req.body, companyID, userID);
    await _commons.companiesService.insertCompanyAssessment(newAssessment._id, companyID);
    await _commons.usersService.insertUserAssessment(newAssessment._id, userID);
    return resp.status(200).json(newAssessment);
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;