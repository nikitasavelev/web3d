var pg = require('pg');

var config = {
    user: 'nikitasavelev',
    database: 'webdb',
    password: '123321',
    host: 'localhost',
    port: 5432,
    max: 10,
    min: 3,
    idleTimeoutMillis: 10000,
};

var pool = new pg.Pool(config);

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