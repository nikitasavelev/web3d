var Image = require('../models/Image');


var modelsController = {

    index: function (req, res) {
        var keyword = req.query.keyword;

        Image.search(keyword, function (err, images) {

            var text;
            console.log(req.query.keyword);
            if (typeof req.query.keyword == "undefined") {
                text = "Поиск";
            } else {
                text = "Поиск по запросу " + JSON.stringify(req.query.keyword);
            }

            res.render('models/index', {
                title: text,
                message: text,
                images: images,
                isNoResults: images.length === 0
            });
        });
    },
    show: function (req, res) {
        var image;
        var shet = req.params.id;

        Image.findAll(function (err, images) {

            for (var i = 0; i < images.length; i++) {
                if (images[i].id == shet) {
                    image = images[i];
                    break;
                }
            }

            console.log(image);

            res.render('models/show', {

                title: 'Модель',
                message: 'Model ' + shet,
                image: image,
            });
        });

    }
};


module.exports = modelsController;
