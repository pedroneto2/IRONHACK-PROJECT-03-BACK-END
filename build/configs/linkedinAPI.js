"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkedinMemberProfileURL = exports.linkedinEmailURL = void 0;
const linkedinMemberProfileURL = 'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,profilePicture(displayImage~:playableStreams))';
exports.linkedinMemberProfileURL = linkedinMemberProfileURL;
const linkedinEmailURL = 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
exports.linkedinEmailURL = linkedinEmailURL;