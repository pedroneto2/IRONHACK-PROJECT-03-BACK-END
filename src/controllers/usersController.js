import { Router } from 'express';

import { assessmentService } from './commons';

const route = Router();

route.get('/assessments', async (req, resp, next) => {
  try {
    const { _id } = req.user;
    const companies = await assessmentService.getAllByUser(_id);
    resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});

route.delete('/assessment/:id', async (req, resp, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    await assessmentService.deleteOneById(id, _id);
    resp.status(200).json({ message: 'Avaliação deletada com sucesso!' });
  } catch (error) {
    next(error);
  }
});

export default route;
