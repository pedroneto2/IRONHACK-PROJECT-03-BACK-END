"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidBodySchema extends Error {
  constructor(message) {
    super();
    this.status = 400;
    this.message = message;
  }

}

var _default = InvalidBodySchema;
exports.default = _default;