"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const assessmentSchema = new _mongoose.Schema({
  isAnonymous: {
    type: Boolean,
    default: false
  },
  grade1: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade2: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade3: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade4: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade5: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade6: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  grade7: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  comment: {
    type: String,
    maxlength: 1000
  },
  reply: {
    type: String,
    maxlength: 1000
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  company: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: true
  }
}, {
  timestamps: true
});
const Assessment = (0, _mongoose.model)('assessment', assessmentSchema);
var _default = Assessment;
exports.default = _default;