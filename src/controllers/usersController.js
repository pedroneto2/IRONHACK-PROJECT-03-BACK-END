import { Router } from 'express';

import UsersService from '../services/UsersService';

import UsersRepository from '../repositories/UsersRepository';

import UserModel from '../models/User';

const userDB = new UsersRepository(UserModel);
const usersService = new UsersService(userDB);

const route = Router();

export default route;
