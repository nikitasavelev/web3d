var pool = require("../models/db");

var Home = {
    findAll: function (callback) {

        //setTimeout(function () {
        pool.query("select id, name, url, url2 from model", [], function (err, result) {
            //console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    },
};

module.exports = Home;