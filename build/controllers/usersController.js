"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _commons = require("./commons");

const route = (0, _express.Router)();
route.get('/assessments', async (req, resp, next) => {
  try {
    const {
      _id
    } = req.user;
    const companies = await _commons.assessmentService.getAllByUser(_id);
    resp.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});
route.delete('/assessment/:id', async (req, resp, next) => {
  try {
    const {
      id
    } = req.params;
    const {
      _id
    } = req.user;
    await _commons.assessmentService.deleteOneById(id, _id);
    resp.status(200).json({
      message: 'Avaliação deletada com sucesso!'
    });
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;