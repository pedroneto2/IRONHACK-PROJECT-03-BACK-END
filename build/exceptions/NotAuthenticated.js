"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NotAuthenticated extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = 'Você não está autenticado!';
  }

}

var _default = NotAuthenticated;
exports.default = _default;