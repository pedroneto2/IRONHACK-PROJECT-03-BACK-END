import { Router } from 'express';

import { companiesService, assessmentService } from './commons';

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

route.get('/assessment/:id', async (req, resp, next) => {
  const { id } = req.params;
  try {
    const company = await assessmentService.getOne(id);
    return resp.status(200).json(company);
  } catch (error) {
    next(error);
  }
});

export default route;
