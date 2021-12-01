class AssessmentsRepository {
  constructor(database) {
    this.database = database;
  }
  create = async (newAssessmentBody) => {
    const newAssessment = await this.database.create(newAssessmentBody);
    return newAssessment;
  };
}

export default AssessmentsRepository;
