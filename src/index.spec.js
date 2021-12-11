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

  it('/all?name=1 --> Should return a list of object with properties "_id", "name" and "average" and name containing the string "1"', async () => {
    const res = await request(app).get('/companies/getAll/all?name=1');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(typeof res.body[0]._id).toBe('string');
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0]).toHaveProperty('average');
    expect(typeof res.body[0].average).toBe('number');
    const resCompanyName = /1/.test(res.body[0].name);
    expect(resCompanyName).toBe(true);
  });

  it('/grade5?name=1 --> Should return a list of object with properties "_id", "name" and "average" and name containing the string "1"', async () => {
    const res = await request(app).get('/companies/getAll/all?name=1');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(typeof res.body[0]._id).toBe('string');
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0]).toHaveProperty('average');
    expect(typeof res.body[0].average).toBe('number');
    const resCompanyName = /1/.test(res.body[0].name);
    expect(resCompanyName).toBe(true);
  });
});

describe('Testing route "/companies/getName', () => {
  it('Using "name" QUERY as "1" should return a list of object with property "name"', async () => {
    const res = await request(app).get('/companies/getName?name=1');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    const resCompanyName = /1/.test(res.body[0].name);
    const resCompanyName2 = /2/.test(res.body[0].name);
    expect(resCompanyName).toBe(true);
    expect(resCompanyName2).toBe(false);
    expect(res.body[0]).not.toHaveProperty('_id');
    expect(res.body[0]).not.toHaveProperty('average');
  });
  it('Using "name" QUERY as "2" should return a list of object with property "name"', async () => {
    const res = await request(app).get('/companies/getName?name=2');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    const resCompanyName = /2/.test(res.body[0].name);
    const resCompanyName2 = /1/.test(res.body[0].name);
    expect(resCompanyName).toBe(true);
    expect(resCompanyName2).toBe(false);
    expect(res.body[0]).not.toHaveProperty('_id');
    expect(res.body[0]).not.toHaveProperty('average');
  });

  it('Using "name" QUERY as "pre" should return a list of object with property "name"', async () => {
    const res = await request(app).get('/companies/getName?name=pre');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    const resCompanyName = /2/.test(res.body[1].name);
    const resCompanyName2 = /1/.test(res.body[0].name);
    expect(resCompanyName).toBe(true);
    expect(resCompanyName2).toBe(true);
    expect(res.body[0]).not.toHaveProperty('_id');
    expect(res.body[0]).not.toHaveProperty('average');
  });
});

describe('Testing route /assessment/:id', () => {
  it('Using id = "61abc2956d2bde8fce07a9da"', async () => {
    const res = await request(app).get('/companies/assessment/61abc2956d2bde8fce07a9da');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('isAnonymous');
    expect(typeof res.body[0].isAnonymous).toBe('boolean');
    expect(res.body[0]).toHaveProperty('company');
    expect(typeof res.body[0].company).toBe('object');
    expect(res.body[0]).toHaveProperty('user');
    expect(typeof res.body[0].user).toBe('object');
    [...Array(7)].forEach((test, index) => {
      expect(res.body[0]).toHaveProperty(`grade${index + 1}`);
      expect(typeof res.body[0][`grade${index + 1}`]).toBe('number');
    });
  });
});
