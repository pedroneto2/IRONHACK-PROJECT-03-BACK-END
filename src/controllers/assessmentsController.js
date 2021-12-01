import { Router } from 'express';
import UserRestrictions from '../exceptions/UserRestrictions';

import { assessmentService, companiesService, usersService } from './commons';

const route = Router();

route.post('/createAssessment', async (req, resp, next) => {
  try {
    const { company = '' } = req.body;
    let companyID, userID;
    const foundCompany = await companiesService.findCompanyByName(company);
    if (!foundCompany) {
      const registeredCompany = await companiesService.create(company);
      companyID = registeredCompany._id;
    } else {
      companyID = foundCompany._id;
    }
    const userIsRegistered = await usersService.findUserByLinkedinId(req.user.linkedinId);
    if (!userIsRegistered) {
      const registeredUser = await usersService.create(req.user);
      userID = registeredUser._id;
    } else {
      userID = userIsRegistered._id;
    }
    const doubleAssessment = await assessmentService.verifyDoubleAssessment(companyID, userID);
    if (doubleAssessment) throw new UserRestrictions('User can not assess a company twice!');
    const newAssessment = await assessmentService.create(req.body, companyID, userID);
    await companiesService.insertCompanyAssessment(newAssessment._id, companyID);
    await usersService.insertUserAssessment(newAssessment._id, userID);
    return resp.status(200).json(newAssessment);
  } catch (error) {
    next(error);
  }
});

export default route;
