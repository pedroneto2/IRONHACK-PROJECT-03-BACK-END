import app from './app';
import request from 'supertest';

// TESTE DA ROTA "/companies"

describe('Testing route "/companies/getAll/', () => {
  it('/all --> Should return a list of object with properties "_id", "name" and "average"', async () => {
    const res = await request(app).get('/companies/getAll/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(typeof res.body[0]._id).toBe('string');
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0]).toHaveProperty('average');
    expect(typeof res.body[0].average).toBe('number');
  });

  [...Array(7)].forEach((test, index) => {
    it(`/grade${
      index + 1
    } --> Should return a list of object with properties "_id", "name" and "average"`, async () => {
      const res = await request(app).get(`/companies/getAll/grade${index + 1}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body[0]).toHaveProperty('_id');
      expect(typeof res.body[0]._id).toBe('string');
      expect(res.body[0]).toHaveProperty('name');
      expect(typeof res.body[0].name).toBe('string');
      expect(res.body[0]).toHaveProperty('average');
      expect(typeof res.body[0].average).toBe('number');
    });
  });
});
