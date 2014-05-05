# 数据的持久化
本章主要讲解如何存储数据。

## 数据库方式

### MongoDB
首先需要配置好MongoDB的环境，，这点可以根据[官方文档](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)操作。

Windows下我推荐一个[robomongo](http://robomongo.org/)，一个全平台的免费客户端。


## 测试
启动MongoDB之后，会在本地开启27017, 28017两个端口。浏览器打开`localhost:27017`即可查看。

## Node.js连接
推荐`Mongooes`模块，一个第三方处理MongoDB的库。引入Mongoose模块之后，代码如下：
```
var mongoose = require('mongoose');

// connect mongodb
mongoose.connect('mongodb://localhost/todo_development', function(err) {
    if (!err) {
        console.log('connected to MongoDB!');
    } else {
        throw err;
    }
});
```

## Mongoose
### 定义文档
通过Mongoose提供的Schema(模式)接口定义，然后声明属性。使用的过程中，有可能对MongoDB和Mongoose的模型产生混淆。


