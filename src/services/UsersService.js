import * as yup from 'yup';

import { verifyID, verifySchema } from './commons';

class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  findUserByLinkedinId = async (linkedinId) => {
    const foundUser = await this.repository.findUserByLinkedinId(linkedinId);
    return foundUser;
  };

  create = async (userBody) => {
    const schema = yup.object().shape({
      linkedinId: yup.string().required().min(3).max(100),
      firstName: yup.string().required().min(3).max(100),
      emailAddress: yup.string().required().email().max(300),
      profilePicture: yup.string().required().min(3).max(300),
    });

    await verifySchema(schema, userBody);

    const newUser = await this.repository.create(userBody);
    return newUser;
  };

  insertUserAssessment = async (assessmentID, userID) => {
    verifyID(assessmentID);
    verifyID(userID);
    await this.repository.insertUserAssessment(assessmentID, userID);
  };
}

export default UsersService;
