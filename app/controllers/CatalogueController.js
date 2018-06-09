var Categories = require('../models/Categories');
var Image = require('../models/Image');

var catalogueController = {
    index: function (req, res) {
        Categories.findAll(function (err, categories) {
            res.render('catalogue/index', {
                title: 'Каталог',
                message: 'Каталог',
                categories: categories,
            });
        });
    },
    show: function (req, res) {
        var shet = req.params.id;
        var category;

        Categories.findAll(function (err, categories) {
            for (var i = 0; i < categories.length; i++) {
                console.log(categories[i].id);
                if (categories[i].id == shet) {
                    category = categories[i];
                    break;
                }
            }
            if (typeof category != 'undefined')

                Image.search(category.name, function (err, images) {

                    res.render('catalogue/show', {

                        title: category.name,
                        message: category.name,
                        images: images,
                    });
                });

        });


    }
};

module.exports = catalogueController;