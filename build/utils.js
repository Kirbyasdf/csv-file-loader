"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    //'06/10/2018
    var dateArr = dateString.split("/").map(function (part) {
        return parseInt(part);
    });
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
