import { Router } from 'express';

import { companiesService } from './commons';

const route = Router();

route.get('/getAll/:grade', async (req, resp, next) => {
  const { name } = req.query;
  const { grade } = req.params;
  try {
    const companies = await companiesService.getAll(name, grade);
    return resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});

route.get('/getName', async (req, resp, next) => {
  const { name } = req.query;
  try {
    const companies = await companiesService.getName(name);
    return resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});

export default route;
