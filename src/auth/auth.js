import { Router } from 'express';
import axios from 'axios';

const accessTokenURL = 'https://www.linkedin.com/oauth/v2/accessToken';

const generateQuery = (authCode) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', authCode);
  params.append('redirect_uri', process.env.REDIRECT_URL);
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  return params;
};

const route = Router();

route.post('/login', async (req, resp, next) => {
  const { code = '' } = req.body;
  const params = generateQuery(code);
  try {
    const { data } = await axios.post(accessTokenURL, params);
    console.log(data)
    resp.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

export default route;
