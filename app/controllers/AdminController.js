var adminController = {
    index: function (req, res) {
        res.render('admin/index', {
            title: 'BarbariArts',
            message: 'BarbariArts',
            page: 'index',

        });
    }
};

module.exports = adminController;