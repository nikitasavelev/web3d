var pool = require("../models/db");

var Categories = {
    findAll: function (callback) {

        //setTimeout(function () {
        pool.query("select id, name, url_for_cat from categories", [], function (err, result) {
            console.log(JSON.stringify(result));

            callback(err, result.rows);
        });
    },

    search: function (keyword, callback) {
        pool.query("select id, name, url_for_cat from categories where name like '%' || $1 || '%'", [keyword],
            function (err, result) {
                console.log(err);
                console.log(JSON.stringify(result));
                callback(err, result.rows);
            });
    },
};

module.exports = Categories;