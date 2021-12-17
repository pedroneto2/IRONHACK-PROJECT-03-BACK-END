"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

var _auth = _interopRequireDefault(require("./auth/auth"));

var _linkedinAPI = require("./configs/linkedinAPI");

var _NotAuthenticated = _interopRequireDefault(require("./exceptions/NotAuthenticated"));

var _companiesController = _interopRequireDefault(require("./controllers/companiesController"));

var _assessmentsController = _interopRequireDefault(require("./controllers/assessmentsController"));

var _usersController = _interopRequireDefault(require("./controllers/usersController"));

var _commons = require("./controllers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = (0, _express.Router)(); //PUBLIC ROUTES

route.use('/auth', _auth.default);
route.use('/companies', _companiesController.default);
route.use(async (req, resp, next) => {
  try {
    const token = req.get('Authorization') || '';
    const header = {
      headers: {
        Authorization: token
      }
    };
    const response1 = await _axios.default.get(_linkedinAPI.linkedinMemberProfileURL, header);
    const response2 = await _axios.default.get(_linkedinAPI.linkedinEmailURL, header);
    const user = {
      linkedinId: response1.data.id,
      firstName: response1.data.localizedFirstName,
      emailAddress: response2.data.elements[0]['handle~'].emailAddress,
      profilePicture: response1.data.profilePicture['displayImage~'].elements['0'].identifiers['0'].identifier
    };
    user._id = await (0, _commons.handleUserRegistration)(user);
    req.user = user;
    next();
  } catch (error) {
    next(new _NotAuthenticated.default());
  }
});
route.use('/retrieveUser', (req, resp, next) => {
  const user = {
    firstName: req.user.firstName,
    profilePicture: req.user.profilePicture
  };
  resp.status(200).json(user);
});
route.use('/assessments', _assessmentsController.default);
route.use('/user', _usersController.default);
var _default = route;
exports.default = _default;