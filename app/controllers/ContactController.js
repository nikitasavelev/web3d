var isNotEmpty = function (string) {
    var result = string && string.trim() !== "" && string.length === 0;
    return result;
}

var contactController = {
    index: function (req, res) {
        res.render('contact/index', {
            title: 'Контакт',
            message: 'Оставьте ваши пожелания здесь'
        });
    },

    create: function (req, res) {
        console.log(req.body);

        var name = req.body.name;

        if (isNotEmpty(name)) {
            res.render('shared/messages', {
                title: 'Коонтакт',
                message: 'Hi!',
                detailMessage: {
                    success: 'Your message is sent'
                }
            });
        } else {
            res.render('contact/index', {
                title: 'Контакт',
                message: 'Hi!',
                detailMessage: {
                    error: 'Your field cannot be empty'
                }
            });
        }
    }
};

module.exports = contactController;