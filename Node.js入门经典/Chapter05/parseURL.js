var http = require("http"),
    url = require("url"),
    requestURL = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash",
    parseURL = url.parse(requestURL);


console.log("href:", parseURL.href);
console.log("protocol:", parseURL.protocol);
console.log("Host:", parseURL.host);
console.log("auth:", parseURL.auth);
console.log("hostname:", parseURL.hostname);
console.log("port:", parseURL.port);
console.log("pathname:", parseURL.pathname);
console.log("search:", parseURL.search);
console.log("path:", parseURL.path);
console.log("query:", parseURL.query);
console.log("hash:", parseURL.hash);



