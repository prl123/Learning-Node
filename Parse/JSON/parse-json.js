var fs = require('fs'),
    fileJSON = require('./example.json');

console.log(fileJSON);

// fs.readFile(__dirname + '/example.json', function(err, data) {
//     if (err) throw err;

//     var jsonstr = JSON.parse(data);

//     console.dir(jsonstr);

//     recursionObject(jsonstr);
// });


/**
 * recursion detect prop in obj
 * @param  {Object} obj
 */
function recursionObject(obj) {
    for (var prop in obj) {
        console.log(prop, ":", obj[prop]);
        if (typeof obj[prop] == 'object' && !(obj[prop] instanceof Array)) {
            recursionObject(obj[prop])
        }
    }
}
