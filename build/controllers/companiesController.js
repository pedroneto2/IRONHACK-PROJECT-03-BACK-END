"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _commons = require("./commons");

const route = (0, _express.Router)();
route.get('/getAll/:grade', async (req, resp, next) => {
  try {
    const {
      name
    } = req.query;
    const {
      grade
    } = req.params;
    const companies = await _commons.companiesService.getAll(name, grade);
    return resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});
route.get('/getName', async (req, resp, next) => {
  try {
    const {
      name
    } = req.query;
    const companies = await _commons.companiesService.getName(name);
    return resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});
route.get('/assessment/:id', async (req, resp, next) => {
  try {
    const {
      id
    } = req.params;
    const company = await _commons.assessmentService.getOne(id);
    return resp.status(200).json(company);
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;