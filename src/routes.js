import { Router } from 'express';
import axios from 'axios';
import authentication from './auth/auth';

import NotAuthenticated from './exceptions/NotAuthenticated';

const linkedinMemberProfileURL =
  'https://api.linkedin.com/v2/me?projection=(localizedFirstName,profilePicture(displayImage~:playableStreams))';

const route = Router();

//PUBLIC ROUTES
route.use('/auth', authentication);

route.use(async (req, resp, next) => {
  try {
    const token = req.get('Authorization') || '';
    const { data } = await axios.get(linkedinMemberProfileURL, {
      headers: { Authorization: token },
    });
    req.user = data;
    next();
  } catch (error) {
    next(new NotAuthenticated());
  }
});

route.use('/retrieveUser', (req, resp, next) => {
  resp.status(200).json(req.user);
});

export default route;
