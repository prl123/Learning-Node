var fs = require('fs'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    parseString = xml2js.parseString,
    builder = new xml2js.Builder();


// "Traditional" usage
// fs.readFile(__dirname + '/example-xml.xml', function(err, data) {
//     parser.parseString(data);
// });

// parser.addListener('end', function(result) {
//     console.dir(result);
//     console.log('Done.');
// });

fs.readFile(__dirname + '/example-xml.xml', function(err, data) {
    var parseXML = null,
        buildXML = null;
    parseString(data, {
        trim: true
    }, function(err, result) {
        parseXML = result;
    });

    console.log(parseXML);
    parseXML.xml.ToUserName[0] = 'ToUserLeohui';
    console.log(parseXML.xml.ToUserName[0]);
    console.log(parseXML);

    buildXML = builder.buildObject(parseXML);
    console.log(buildXML)
});
