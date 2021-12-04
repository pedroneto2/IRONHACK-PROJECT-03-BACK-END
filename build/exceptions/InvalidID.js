"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidID extends Error {
  constructor() {
    super();
    this.status = 400;
    this.message = 'Invalid ID!';
  }

}

var _default = InvalidID;
exports.default = _default;