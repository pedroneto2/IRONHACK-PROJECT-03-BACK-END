import AssessmentsService from '../services/AssessmentsService';
import CompaniesService from '../services/CompaniesService';
import UsersService from '../services/UsersService';

import AssessmentsRepository from '../repositories/AssessmentsRepository';
import CompaniesRepository from '../repositories/CompaniesRepository';
import UsersRepository from '../repositories/UsersRepository';

import AssessmentModel from '../models/Assessment';
import CompanyModel from '../models/Company';
import UserModel from '../models/User';

const assessmentDB = new AssessmentsRepository(AssessmentModel);
export const assessmentService = new AssessmentsService(assessmentDB);

const companyDB = new CompaniesRepository(CompanyModel);
export const companiesService = new CompaniesService(companyDB);

const userDB = new UsersRepository(UserModel);
export const usersService = new UsersService(userDB);
