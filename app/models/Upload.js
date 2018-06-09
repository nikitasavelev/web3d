var pool = require("../models/db");

var Upload = {

    post: function (keyword, url1, url2 ) {
        pool.query('insert into model (name, url, url2) VALUES($1, $2, $3)',
            [keyword, url1, url2],
            function (err, result) {
                if (err) {
                    console.log(err);
                }

        });
    },
    /*search: function (keyword, callback) {
        pool.query("select id, name, url, url2 from model where name like '%' || $1 || '%'", [keyword],
            function (err, result) {
                console.log(err);
                console.log(JSON.stringify(result));
                callback(err, result.rows);
            });
    },*/
};

module.exports = Upload;