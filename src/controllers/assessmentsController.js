import { Router } from 'express';

import AssessmentsService from '../services/AssessmentsService';

import AssessmentsRepository from '../repositories/AssessmentsRepository';

import AssessmentModel from '../models/Assessment';

const assessmentDB = new AssessmentsRepository(AssessmentModel);
const usersService = new AssessmentsService(assessmentDB);

const route = Router();

export default route;
