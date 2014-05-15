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

main();

function main() {
    for (var i =0; i< 71; i++) {
        var filename = 'img';
        var filenameID = i<10? '0'+i: i;
        filename += (filenameID + '.jpg');
        download('http://360-javascriptviewer.appspot.com/images/ipod/ipod_'+filenameID+'.jpg', filename, function() {
            console.log('Done downloading..');
        });
    }
}