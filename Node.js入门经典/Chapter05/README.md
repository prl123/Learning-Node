# HTTP
HTTP是超文本传输协议，定义服务器和客户端通信时候如何发送和接受数据。Node.js既可以创建服务器，也可以创建客户端。

## 服务器端
Node.js可以作为服务器端相应请求，针对请求做出相应。Node.js使用`createServer`方法，使用方式如下：
```
var http = require("http");

http.createServer(function(req, res) {
    res.end("Hello World!\n");
}).listen(3000, "127.0.0.1");

console.log("Server running at http://127.0.0.1:3000");
```

## 客户端
使用`get`和`post`方法对服务器发起请求，根据相应处理：
```
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

```