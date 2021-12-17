"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _database = _interopRequireDefault(require("./configs/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_dotenv.default.config();

(0, _database.default)();
app.use((0, _cors.default)({
  origin: process.env.CORS_URL
}));
app.use(_express.default.json());
app.use('/', _routes.default);
app.use((error, req, resp, next) => {
  resp.status(error.status || 500).json({
    message: error.message
  });
});
var _default = app;
exports.default = _default;