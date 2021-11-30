export const linkedinMemberProfileURL =
  'https://api.linkedin.com/v2/me?projection=(localizedFirstName,profilePicture(displayImage~:playableStreams))';

export const linkedinEmailURL =
  'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
