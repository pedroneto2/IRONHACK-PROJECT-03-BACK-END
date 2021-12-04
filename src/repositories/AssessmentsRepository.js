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

  getOne = async (idCompany) => {

    const Assessment = await this.database
      .find({ company: idCompany })
      .populate({path: 'company', select: ['name', 'companyLogo']})
      .populate({path: 'user', select: ['firstName', 'emailAddress', 'profilePicture']})
     
    return Assessment;
  };
}

export default AssessmentsRepository;
