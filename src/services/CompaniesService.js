class CompaniesService {
  constructor(repository) {
    this.repository = repository;
  }
  getAll = async (name, grade) => {
    const companies = await this.repository.getAll(name, grade);
    return companies;
  };
}

export default CompaniesService;
