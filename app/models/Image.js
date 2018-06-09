var pool = require("../models/db");

var Image = {
    findAll: function (callback) {

        //setTimeout(function () {
        pool.query("select id, name, url, url2 from model", [], function (err, result) {
            //console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    },

    search: function (keyword, callback) {
        pool.query("select id, name, url, url2 from model where name like '%' || $1 || '%'", [keyword],
            function (err, result) {
                console.log(err);
                console.log(JSON.stringify(result));
                callback(err, result.rows);
            });
    },
};

module.exports = Image;