import InvalidBodySchema from '../exceptions/InvalidBodySchema';

import { verifyID } from './commons';

class CompaniesService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (name, grade) => {
    const companies = await this.repository.getAll(name, grade);
    return companies;
  };

  getName = async (name) => {
    const companies = await this.repository.getName(name);
    return companies;
  };

  findCompanyByName = async (companyName) => {
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
    verifyID(companyID);
    verifyID(assessmentID);
    await this.repository.insertCompanyAssessment(assessmentID, companyID);
  };
}

//HELPER FUNCTIONS
function verifyCompanyName(companyName) {
  if (companyName.length < 3 || companyName.length > 100 || typeof companyName !== 'string') {
    throw new InvalidBodySchema('Nome de empresa inválido!');
  }
}

export default CompaniesService;
