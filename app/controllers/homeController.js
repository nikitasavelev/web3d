var homeController = {
    index: function (req, res) {
        var image = '/images/3D1.jpg';
        res.render('home/index', {
            title: 'BarbariArts',
            message: 'BarbariArts',
            page: 'index',
            titleImage: image,
            helpers: {
                toUpperCase: function (value) {
                    return value && value.toUpperCase && value.toUpperCase;
                },
            }

        });
    }
};

module.exports = homeController;