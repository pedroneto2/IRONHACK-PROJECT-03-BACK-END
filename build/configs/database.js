"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const initDBConnection = () => {
  try {
    (0, _mongoose.connect)(process.env.MONGODB_URL);
    console.log('Sucessfully connected to database');
  } catch (error) {
    next(error);
  }
};

var _default = initDBConnection;
exports.default = _default;