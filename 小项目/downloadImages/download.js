var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback) {

    request.head(uri, function(err, res, body) {

        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        var r = request(uri).pipe(fs.createWriteStream(filename));
        r.on('close', callback);
    });
};

download('http://360-javascriptviewer.appspot.com/images/ipod/ipod_71.jpg', 'img71.jpg', function() {
    console.log('Done downloading..');
});

download('http://360-javascriptviewer.appspot.com/images/ipod/ipod_72.jpg', 'img72.jpg', function() {
    console.log('Done downloading..');
});
