import * as yup from 'yup';

import { verifySchema, verifyID } from './commons';

class AssessmentsService {
  constructor(repository) {
    this.repository = repository;
  }
  create = async (newAssessmentBody, companyID, userID) => {
    const schema = yup.object().shape({
      isAnonymous: yup.boolean(),
      grade1: yup.number().required().min(0).max(10),
      grade2: yup.number().required().min(0).max(10),
      grade3: yup.number().required().min(0).max(10),
      grade4: yup.number().required().min(0).max(10),
      grade5: yup.number().required().min(0).max(10),
      grade6: yup.number().required().min(0).max(10),
      grade7: yup.number().required().min(0).max(10),
      grade8: yup.number().required().min(0).max(10),
      comment: yup.string().min(10).max(1000),
      reply: yup.string().min(10).max(1000),
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
}

export default AssessmentsService;
