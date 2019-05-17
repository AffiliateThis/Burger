var connection = require("../config/connection.js");


// printing  question marks since we are doing 3 operations
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");

    }

    return arr.toString();

}

// function to convert object to SQL Syntax
function objToSql(ob) {
    var arr = [];

    // this is a loop to get through the keys and push the values as
    // string
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob.key)) {
            if (typeof value === "string" && value.indexOf("") >= 0) {
                value = "'" + value + "'";

            }
            arr.push(key + "=" + value);
        }





    }

    return arr.toString();



}



var orm = {
    all: function (tableInput, cb) {

        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) {
                throw err;
            }

            cb(res)
        });
    },

    insertBurger: function (burger_name, res) {
        connection.query("INSERT INTO burgrs SET?", {
            burger_name: burger_name,
            devoured: false,

        },
            function (err, res) {
                if (err) throw err;
                return res;
            });

    },
    updateBurger: function (oneBurger, res) {
        connection.query("UPDATE burgers SET? WHERE?", [{
            devoured: true
        }, { id: oneBurger }], function (err, res) {
            if (err) throw err;
            return res;
        });

    }


}





// cb(res);

module.exports = orm;
