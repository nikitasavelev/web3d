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