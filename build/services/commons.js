"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifySchema = exports.verifyID = void 0;

var _InvalidBodySchema = _interopRequireDefault(require("../exceptions/InvalidBodySchema"));

var _InvalidID = _interopRequireDefault(require("../exceptions/InvalidID"));

var _mongoose = require("mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifySchema = async (schema, body) => {
  try {
    await schema.validate(body, {
      abortEarly: false
    });
  } catch (error) {
    throw new _InvalidBodySchema.default(error.errors);
  }
};

exports.verifySchema = verifySchema;

const verifyID = id => {
  const validID = (0, _mongoose.isValidObjectId)(id);

  if (!validID) {
    throw new _InvalidID.default();
  }
};

exports.verifyID = verifyID;