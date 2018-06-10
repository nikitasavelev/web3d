var Home = require('../models/Home');

var homeController = {
    index: function (req, res) {
        var image1;
        var shet = req.params.id;
        var image = '/images/3D1.jpg';
        var imagelogo = '/images/Logo.png';
        var imagelogo2 = '/images/Barbariarts.png';

        Home.findAll(function (err, images) {
            for (var i = 0; i < images.length; i++) {
                if (images[i].id == shet) {
                    image1 = images[i];
                    break;
                }
            }
            res.render('home/index', {
                title: 'BarbariArts',
                message: '',
                page: 'index',
                titleImage: image,
                logoImage: imagelogo,
                logoImage2: imagelogo2,
                helpers: {
                    toUpperCase: function (value) {
                        return value && value.toUpperCase && value.toUpperCase;
                    },
                }

            });
        })
    }
}


module.exports = homeController;