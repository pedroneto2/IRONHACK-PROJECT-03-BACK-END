import { calculateAverage } from './utils/calculateAverages';

class CompaniesRepository {
  constructor(database) {
    this.database = database;
  }

  getAll = async (name = '', grade) => {
    grade === 'all' && (grade = '');

    const companies = await this.database
      .find({ name: { $regex: new RegExp(name, 'i') } })
      .populate({ path: 'assessments', select: grade });

    const averages = companies.map((company) => ({
      _id: company._id,
      name: company.name,
      average: calculateAverage(company.assessments),
    }));

    return averages;
  };

  findCompanyByName = async (companyName) => {
    const company = await this.database.findOne({ name: { $regex: new RegExp(companyName, 'i') } });
    return company;
  };

  getName = async (name) => {
    if (!name) return [];
    const companies = await this.database.find(
      { name: { $regex: new RegExp(name, 'i') } },
      { name: 1, _id: 0 }
    );
    return companies;
  };

  create = async (companyName) => {
    const companyBody = {
      name: companyName,
    };
    const newCompany = await this.database.create(companyBody);
    return newCompany;
  };

  insertCompanyAssessment = async (assessmentID, companyID) => {
    await this.database.findByIdAndUpdate(companyID, { $push: { assessments: assessmentID } });
  };
}

export default CompaniesRepository;
