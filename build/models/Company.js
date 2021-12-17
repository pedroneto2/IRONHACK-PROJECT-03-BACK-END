"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const companySchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 150
  },
  companyLogo: {
    type: String,
    unique: true,
    maxlength: 300
  },
  assessments: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'assessment',
    default: []
  }] // ONE TO MANY

});
const Company = (0, _mongoose.model)('company', companySchema);
var _default = Company;
exports.default = _default;