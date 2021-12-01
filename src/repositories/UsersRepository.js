class UsersRepository {
  constructor(database) {
    this.database = database;
  }

  findUserByLinkedinId = async (linkedinId) => {
    const foundUser = await this.database.findOne({ linkedinId });
    return foundUser;
  };

  create = async (userBody) => {
    const newUser = await this.database.create(userBody);
    return newUser;
  };

  insertUserAssessment = async (assessmentID, userID) => {
    await this.database.findByIdAndUpdate(userID, { $push: { assessments: assessmentID } });
  };
}

export default UsersRepository;
