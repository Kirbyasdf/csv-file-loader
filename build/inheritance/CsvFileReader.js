"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        //treat generatics like args
        //abstract implies it is meant for its child classes
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync("./" + this.filename + ".csv", { encoding: "utf-8" })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        })
            .map(this.mapRow); // pass by reference
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
