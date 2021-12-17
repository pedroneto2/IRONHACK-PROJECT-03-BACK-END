"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InvalidBodySchema = _interopRequireDefault(require("../exceptions/InvalidBodySchema"));

var _commons = require("./commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CompaniesService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (name, grade) => {
    const companies = await this.repository.getAll(name, grade);
    return companies;
  };
  getName = async name => {
    const companies = await this.repository.getName(name);
    return companies;
  };
  findCompanyByName = async companyName => {
    verifyCompanyName(companyName);
    const company = await this.repository.findCompanyByName(companyName);
    return company;
  };
  create = async (companyName, companyLogo) => {
    verifyCompanyName(companyName);
    const newCompany = await this.repository.create(companyName, companyLogo);
    return newCompany;
  };
  insertCompanyAssessment = async (assessmentID, companyID) => {
    (0, _commons.verifyID)(companyID);
    (0, _commons.verifyID)(assessmentID);
    await this.repository.insertCompanyAssessment(assessmentID, companyID);
  };
} //HELPER FUNCTIONS


function verifyCompanyName(companyName) {
  if (companyName.length < 3 || companyName.length > 100 || typeof companyName !== 'string') {
    throw new _InvalidBodySchema.default('Nome de empresa inválido!');
  }
}

var _default = CompaniesService;
exports.default = _default;