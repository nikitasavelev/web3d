var formidable = require('formidable');
var fs = require('fs');
var Upload = require('../models/Upload');

var fileUploadController = {
    index: function (req, res) {
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            console.log(fields);
            console.log(files.img.name);
            console.log(files.fileObj.name);
            console.log(files.fileMtl.name);

            var oldpath = files.img.path;
            var newpath = '/Volumes/TRASH/3dweb-3js 2/public/images/' + files.img.name;
            fs.createReadStream(oldpath).pipe(fs.createWriteStream(newpath));
            /*fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
            });*/

            var oldpath = files.fileObj.path;
            var newpath = '/Volumes/TRASH/3dweb-3js 2/public/models/' + files.fileObj.name;
            fs.createReadStream(oldpath).pipe(fs.createWriteStream(newpath));
            /*fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
            });*/

            var oldpath = files.fileMtl.path;
            var newpath = '/Volumes/TRASH/3dweb-3js 2/public/models/' + files.fileMtl.name;
            fs.createReadStream(oldpath).pipe(fs.createWriteStream(newpath));
            /*fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
            });*/
            Upload.post(fields.keywords,'/images/'+ files.img.name ,files.fileObj.name);
        });

        res.render('fileupload/index', {
            title: 'Success',
            message: 'BarbariArts',
            page: 'index',
        });


    }
};

module.exports = fileUploadController;