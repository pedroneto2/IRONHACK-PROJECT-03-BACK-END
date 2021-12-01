import { Router } from 'express';

import { assessmentService, companiesService, usersService } from './commons';

const route = Router();

route.post('/createAssessment', async (req, resp, next) => {
  try {
    const { company = '' } = req.body;
    let companyID, userID;
    const foundCompany = await companiesService.findCompanyByName(company);
    companyID = foundCompany._id;
    if (!foundCompany) {
      const registeredCompany = await companiesService.create(company);
      companyID = registeredCompany._id;
    }
    const userIsRegistered = await usersService.findUserByLinkedinId(req.user.linkedinId);
    userID = userIsRegistered._id;
    if (!userIsRegistered) {
      const registeredUser = await usersService.create(req.user);
      userID = registeredUser._id;
    }
    const newAssessment = await assessmentService.create(req.body, companyID, userID);
    await companiesService.insertCompanyAssessment(newAssessment._id, companyID);
    await usersService.insertUserAssessment(newAssessment._id, userID);
    return resp.status(200).json(newAssessment);
  } catch (error) {
    next(error);
  }
});

export default route;
