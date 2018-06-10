var isNotEmpty = function (string) {
    var result = string && string.trim() !== "" && string.length === 0;
    return result;
}

var contactController = {
    index: function (req, res) {
        var imagelogo = '/images/Logo.png';
        var imagelogo2 = '/images/Barbariarts.png';
        res.render('contact/index', {
            title: 'Контакт',
            message: 'Оставьте ваши пожелания здесь',
            logoImage: imagelogo,
            logoImage2: imagelogo2
        });
    },

    create: function (req, res) {
        var imagelogo = '/images/Logo.png';
        var imagelogo2 = '/images/Barbariarts.png';
        console.log(req.body);

        var name = req.body.name;

        if (isNotEmpty(name)) {
            res.render('shared/messages', {
                title: 'Коонтакт',
                message: 'Всё нормальненько!',
                logoImage: imagelogo,
                logoImage2: imagelogo2,
                detailMessage: {
                    success: 'Your message is sent',

                }
            });
        } else {
            res.render('contact/index', {
                title: 'Контакт',
                message: 'Пусто!!',
                logoImage: imagelogo,
                logoImage2: imagelogo2,
                detailMessage: {
                    error: 'Your field cannot be empty'
                }
            });
        }
    }
};

module.exports = contactController;