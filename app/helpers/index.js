module.exports = {

    showStatusMessage: function (message) {
        if (message === undefined) {
            return '';
        }

        if (message.error !== undefined) {
            return '<div class="alert alert-danger"> ${message.error} </div>';
        }

        if (message.success !== undefined) {
            return '<div class="alert alert-success"> ${message.success} </div>';
        }

        return '';
    }
};