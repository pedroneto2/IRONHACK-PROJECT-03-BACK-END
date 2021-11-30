import { Router } from 'express';

import CompaniesService from '../services/CompaniesService';

import CompaniesRepository from '../repositories/CompaniesRepository';

import CompanyModel from '../models/Company';

const companyDB = new CompaniesRepository(CompanyModel);
const companiesService = new CompaniesService(companyDB);

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

export default route;
