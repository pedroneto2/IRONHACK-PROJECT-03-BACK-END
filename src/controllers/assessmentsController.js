import { Router } from 'express';
import UserRestrictions from '../exceptions/UserRestrictions';

import { assessmentService, companiesService, usersService } from './commons';

const route = Router();

route.post('/createAssessment', async (req, resp, next) => {
  try {
    const { company = '', companyLogo = '' } = req.body;
    let companyID;
    const foundCompany = await companiesService.findCompanyByName(company);
    if (!foundCompany) {
      const registeredCompany = await companiesService.create(company, companyLogo);
      companyID = registeredCompany._id;
    } else {
      companyID = foundCompany._id;
    }
    const doubleAssessment = await assessmentService.verifyDoubleAssessment(companyID,req.user._id);
    if (doubleAssessment) throw new UserRestrictions('O usuário não pode avaliar uma empresa mais que uma vez!');
    const newAssessment = await assessmentService.create(req.body, companyID, req.user._id);
    await companiesService.insertCompanyAssessment(newAssessment._id, companyID);
    await usersService.insertUserAssessment(newAssessment._id, req.user._id);
    return resp.status(200).json(newAssessment);
  } catch (error) {
    next(error);
  }
});

export default route;
