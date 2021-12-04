"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersService = exports.companiesService = exports.assessmentService = void 0;

var _AssessmentsService = _interopRequireDefault(require("../services/AssessmentsService"));

var _CompaniesService = _interopRequireDefault(require("../services/CompaniesService"));

var _UsersService = _interopRequireDefault(require("../services/UsersService"));

var _AssessmentsRepository = _interopRequireDefault(require("../repositories/AssessmentsRepository"));

var _CompaniesRepository = _interopRequireDefault(require("../repositories/CompaniesRepository"));

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _Assessment = _interopRequireDefault(require("../models/Assessment"));

var _Company = _interopRequireDefault(require("../models/Company"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const assessmentDB = new _AssessmentsRepository.default(_Assessment.default);
const assessmentService = new _AssessmentsService.default(assessmentDB);
exports.assessmentService = assessmentService;
const companyDB = new _CompaniesRepository.default(_Company.default);
const companiesService = new _CompaniesService.default(companyDB);
exports.companiesService = companiesService;
const userDB = new _UsersRepository.default(_User.default);
const usersService = new _UsersService.default(userDB);
exports.usersService = usersService;