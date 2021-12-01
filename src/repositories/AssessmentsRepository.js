class AssessmentsRepository {
  constructor(database) {
    this.database = database;
  }

  create = async (newAssessmentBody) => {
    const newAssessment = await this.database.create(newAssessmentBody);
    return newAssessment;
  };

  verifyDoubleAssessment = async (companyID, userID) => {
    const doubleAssessment = await this.database.findOne({ company: companyID, user: userID });
    return doubleAssessment;
  };
}

export default AssessmentsRepository;
