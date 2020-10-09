"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readdir = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
exports.readdir = util_1.promisify(fs_1.readdir);
