var http = require("http");

var options = {
    "host": "shapeshed.com",
    "port": "80",
    "path": "/"
};

http.get(options, function(res) {
    console.log("Site Status:", res.statusCode);
    if (res.statusCode == 200) {
        console.log("The site is up!\n");
    } else {
        console.log("The site is down!\n");
    }
}).on("error", function(e) {
    console.log("There was an error:", e.message);
});
