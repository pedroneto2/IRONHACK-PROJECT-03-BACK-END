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
      companyLogo: company.companyLogo,
      average: calculateAverage(company.assessments),
    }));

    return averages;
  };

  findCompanyByName = async (companyName) => {
    const company = await this.database.findOne({ name: companyName.toUpperCase() });
    return company;
  };

  getName = async (name) => {
    if (!name) return [];
    const companies = await this.database.find(
      { name: { $regex: new RegExp(name, 'i') } },
      { name: 1, _id: 0, logo: 1 }
    );
    return companies;
  };

  create = async (companyName, companyLogo) => {
    const companyBody = {
      name: companyName.toUpperCase(),
      companyLogo: companyLogo,
    };
    const newCompany = await this.database.create(companyBody);
    return newCompany;
  };

  insertCompanyAssessment = async (assessmentID, companyID) => {
    await this.database.findByIdAndUpdate(companyID, { $push: { assessments: assessmentID } });
  };
}

export default CompaniesRepository;
