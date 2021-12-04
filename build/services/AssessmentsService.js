"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _commons = require("./commons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class AssessmentsService {
  constructor(repository) {
    this.repository = repository;
  }

  create = async (newAssessmentBody, companyID, userID) => {
    if (newAssessmentBody.isAnonymous) {
      for (let i = 1; i <= 7; i++) {
        newAssessmentBody['grade' + i] /= 2;
      }
    }

    const schema = yup.object().shape({
      isAnonymous: yup.boolean(),
      grade1: yup.number().required().min(0).max(10),
      grade2: yup.number().required().min(0).max(10),
      grade3: yup.number().required().min(0).max(10),
      grade4: yup.number().required().min(0).max(10),
      grade5: yup.number().required().min(0).max(10),
      grade6: yup.number().required().min(0).max(10),
      grade7: yup.number().required().min(0).max(10),
      comment: yup.string().max(1000),
      reply: yup.string().max(1000)
    });
    await (0, _commons.verifySchema)(schema, newAssessmentBody);
    (0, _commons.verifyID)(companyID);
    (0, _commons.verifyID)(userID);
    newAssessmentBody.company = companyID;
    newAssessmentBody.user = userID;
    const newAssessment = await this.repository.create(newAssessmentBody);
    return newAssessment;
  };
  verifyDoubleAssessment = async (companyID, userID) => {
    const doubleAssessment = await this.repository.verifyDoubleAssessment(companyID, userID);
    return doubleAssessment;
  };
}

var _default = AssessmentsService;
exports.default = _default;