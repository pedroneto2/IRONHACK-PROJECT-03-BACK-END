"use strict";

var _app = _interopRequireDefault(require("./app"));

var _supertest = _interopRequireDefault(require("supertest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TESTE DA ROTA "/companies"
describe('Teste rota "/companies/getAll/', () => {
  it('/all --> Should return a list of object with properties "_id", "name" and "average"', async () => {
    const res = await (0, _supertest.default)(_app.default).get('/companies/getAll/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(typeof res.body[0]._id).toBe('string');
    expect(res.body[0]).toHaveProperty('name');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0]).toHaveProperty('average');
    expect(typeof res.body[0].average).toBe('number');
  });
  [...Array(7)].forEach((test, index) => {
    it(`/grade${index + 1} --> Should return a list of object with properties "_id", "name" and "average"`, async () => {
      const res = await (0, _supertest.default)(_app.default).get(`/companies/getAll/grade${index + 1}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body[0]).toHaveProperty('_id');
      expect(typeof res.body[0]._id).toBe('string');
      expect(res.body[0]).toHaveProperty('name');
      expect(typeof res.body[0].name).toBe('string');
      expect(res.body[0]).toHaveProperty('average');
      expect(typeof res.body[0].average).toBe('number');
    });
    it('/all?name=1 --> Should return a list of object with properties "_id", "name" and "average" and name containing the string "1"', async () => {
      const res = await (0, _supertest.default)(_app.default).get('/companies/getAll/all?name=1');
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
});