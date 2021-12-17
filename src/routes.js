import { Router } from 'express';
import axios from 'axios';
import authentication from './auth/auth';

import { linkedinMemberProfileURL, linkedinEmailURL } from './configs/linkedinAPI';

import NotAuthenticated from './exceptions/NotAuthenticated';

import companiesController from './controllers/companiesController';
import assessmentsController from './controllers/assessmentsController';
import userController from './controllers/usersController';

import { handleUserRegistration } from './controllers/commons';

const route = Router();

//PUBLIC ROUTES
route.use('/auth', authentication);
route.use('/companies', companiesController);

route.use(async (req, resp, next) => {
  try {
    const token = req.get('Authorization') || '';
    const header = { headers: { Authorization: token } };
    const response1 = await axios.get(linkedinMemberProfileURL, header);
    const response2 = await axios.get(linkedinEmailURL, header);
    const user = {
      linkedinId: response1.data.id,
      firstName: response1.data.localizedFirstName,
      emailAddress: response2.data.elements[0]['handle~'].emailAddress,
      profilePicture:
        response1.data.profilePicture['displayImage~'].elements['0'].identifiers['0'].identifier,
    };
    user._id = await handleUserRegistration(user);
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthenticated());
  }
});

route.use('/retrieveUser', (req, resp, next) => {
  const user = {
    firstName: req.user.firstName,
    profilePicture: req.user.profilePicture,
  };
  resp.status(200).json(user);
});

route.use('/assessments', assessmentsController);
route.use('/user', userController);

export default route;
