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
}

export default CompaniesRepository;
