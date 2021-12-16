import * as yup from 'yup';

import { verifySchema, verifyID } from './commons';

class AssessmentsService {
  constructor(repository) {
    this.repository = repository;
  }
  create = async (newAssessmentBody, companyID, userID) => {
    if (newAssessmentBody.isAnonymous) {
      for (let i = 1; i <= 7; i++) {
        newAssessmentBody['grade' + i] /= 2;
      }
    }

    const schema = yup.object().shape({
      isAnonymous: yup.boolean(),
      grade1: yup.number().required().min(0).max(10),
      grade2: yup.number().required().min(0).max(10),
      grade3: yup.number().required().min(0).max(10),
      grade4: yup.number().required().min(0).max(10),
      grade5: yup.number().required().min(0).max(10),
      grade6: yup.number().required().min(0).max(10),
      grade7: yup.number().required().min(0).max(10),
      comment: yup.string().max(1000),
      reply: yup.string().max(1000),
    });

    await verifySchema(schema, newAssessmentBody);

    verifyID(companyID);
    verifyID(userID);

    newAssessmentBody.company = companyID;
    newAssessmentBody.user = userID;

    const newAssessment = await this.repository.create(newAssessmentBody);
    return newAssessment;
  };

  verifyDoubleAssessment = async (companyID, userID) => {
    const doubleAssessment = await this.repository.verifyDoubleAssessment(companyID, userID);
    return doubleAssessment;
  };

  getOne = async (companyId) => {
    verifyID(companyId);
    const assessment = await this.repository.getOne(companyId);
    return assessment;
  };

  getAllByUser = async (userID) => {
    verifyID(userID);
    const assessments = await this.repository.getAllByUser(userID);
    return assessments;
  };

  deleteOneById = async (assessmentID, userID) => {
    verifyID(assessmentID);
    verifyID(userID);
    await this.repository.deleteOneById(assessmentID, userID);
  };
}

export default AssessmentsService;
