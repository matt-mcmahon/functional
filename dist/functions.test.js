"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const functional = __importStar(require("./functions"));
const fs_1 = require("fs");
const util_1 = require("util");
const listDir = util_1.promisify(fs_1.readdir);
const removeExtension = (fileNames) => fileNames.map((file) => file.replace(/.\w+$/, ""));
const filterTestFiles = (fileNames) => fileNames.filter((name) => !name.includes(".test.") && !name.includes("index"));
const sortFiles = (files) => files.sort();
const getModuleList = () => listDir("./source/functions")
    .then(filterTestFiles)
    .then(removeExtension)
    .then(sortFiles);
sign_1.describe("index", async ({ assert }) => {
    const actual = Object.keys(functional).sort();
    const expected = await getModuleList();
    assert({
        actual,
        expected,
        given: "actual module exports",
        should: "include all public exports",
    });
});
