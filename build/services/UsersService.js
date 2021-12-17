"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _commons = require("./commons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  findUserByLinkedinId = async linkedinId => {
    const foundUser = await this.repository.findUserByLinkedinId(linkedinId);
    return foundUser;
  };
  create = async userBody => {
    const schema = yup.object().shape({
      linkedinId: yup.string().required().min(3).max(100),
      firstName: yup.string().required().min(3).max(100),
      emailAddress: yup.string().required().email().max(300),
      profilePicture: yup.string().required().min(3).max(300)
    });
    await (0, _commons.verifySchema)(schema, userBody);
    const newUser = await this.repository.create(userBody);
    return newUser;
  };
  insertUserAssessment = async (assessmentID, userID) => {
    (0, _commons.verifyID)(assessmentID);
    (0, _commons.verifyID)(userID);
    await this.repository.insertUserAssessment(assessmentID, userID);
  };
}

var _default = UsersService;
exports.default = _default;