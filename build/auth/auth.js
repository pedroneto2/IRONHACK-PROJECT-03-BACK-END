"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const accessTokenURL = 'https://www.linkedin.com/oauth/v2/accessToken';

const generateQuery = authCode => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', authCode);
  params.append('redirect_uri', process.env.REDIRECT_URL);
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  return params;
};

const route = (0, _express.Router)();
route.post('/login', async (req, resp, next) => {
  const {
    code = ''
  } = req.body;
  const params = generateQuery(code);

  try {
    const {
      data
    } = await _axios.default.post(accessTokenURL, params);
    console.log(data);
    resp.status(200).json(data);
  } catch (error) {
    next(error);
  }
});
var _default = route;
exports.default = _default;