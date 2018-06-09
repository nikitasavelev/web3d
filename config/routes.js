var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function (app) {

    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var catalogueRoutes = Router()
        .get('/', controllers.catalogue.index)
        .get('/:id', controllers.catalogue.show);

    var modelsRoutes = Router()
        .get('/', controllers.models.index)
        .get('/:id', controllers.models.show);

    var contactRoutes = Router()
        .get('/', controllers.contact.index)
        .post('/', controllers.contact.create);

    var adminRoutes = Router()
        .get('/', controllers.admin.index);

    var fileRoutes = Router()
        .post('/', controllers.fileupload.index);

    app.use('/', homeRoutes);
    app.use('/catalogue', catalogueRoutes);
    app.use('/models', modelsRoutes);
    app.use('/contact', contactRoutes);
    app.use('/admin', adminRoutes);
    app.use('/fileupload', fileRoutes);
};