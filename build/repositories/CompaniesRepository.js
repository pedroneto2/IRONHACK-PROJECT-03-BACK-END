"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _calculateAverages = require("./utils/calculateAverages");

class CompaniesRepository {
  constructor(database) {
    this.database = database;
  }

  getAll = async (name = '', grade) => {
    grade === 'all' && (grade = '');
    const companies = await this.database.find({
      name: {
        $regex: new RegExp(name, 'i')
      }
    }).populate({
      path: 'assessments',
      select: grade
    });
    const averages = companies.map(company => ({
      _id: company._id,
      name: company.name,
      average: company.assessments.populate()
    }));
    return companies;
  };
}

var _default = CompaniesRepository;
exports.default = _default;