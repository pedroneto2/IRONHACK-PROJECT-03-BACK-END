"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const userSchema = new _mongoose.Schema({
  linkedinId: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  emailAddress: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 300
  },
  profilePicture: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 300
  },
  assessments: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'assessment',
    default: []
  }]
});
const User = (0, _mongoose.model)('user', userSchema);
var _default = User;
exports.default = _default;