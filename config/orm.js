var orm = require("../config/connection.js");

// printing  question marks since we are doing 3 operations
function printQuestionMarks(num) {
    var arr= [];

    for (var i = 0; i < num; i++) {
        arr.push("?");

    }

    return arr.toString();

}

// function to convert object to SQL Syntax
function objToSql(ob) {
    var arr= []

}