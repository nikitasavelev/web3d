var Categories = require('../models/Categories');
var Image = require('../models/Image');

var catalogueController = {

    index: function (req, res) {
        var imagelogo = '/images/Logo.png';
        var imagelogo2 = '/images/Barbariarts.png';
        Categories.findAll(function (err, categories) {
            res.render('catalogue/index', {
                title: 'Каталог',
                message: 'Каталог',
                categories: categories,
                logoImage: imagelogo,
                logoImage2: imagelogo2
            });
        });
    },
    show: function (req, res) {
        var shet = req.params.id;
        var category;
        var imagelogo = '/images/Logo.png';
        var imagelogo2 = '/images/Barbariarts.png';

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
                        logoImage: imagelogo,
                        logoImage2: imagelogo2
                    });
                });

        });


    }
};

module.exports = catalogueController;