"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CompaniesService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (name, grade) => {
    const companies = await this.repository.getAll(name, grade);
    return companies;
  };
}

var _default = CompaniesService;
exports.default = _default;