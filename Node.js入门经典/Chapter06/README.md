# Express.js
截至今日(2014.05.02),Express已经更新到4.x了。并且保持了良好的更新速度。所以有些教程里的东西可能在新版中不适用。此书讲解的还是3.x系列。

Express就是一个Web框架，写好了很多处理web的结构，比如路由，静态文件等。是一个典型的MVC框架。

## 安装
`npm install -g express`，新版4.x安装完成之后，无法直接通过`express [项目名称]`的方式创建新项目。因为4.x版本把生成器分离出来了，[express-generator](https://github.com/expressjs/generator)。

安装老版本的话，可以通过`@`指定版本，比如`npm install -g express@3`。


## 测试
按照好4.x版本后，额外安装`npm install -g express-generator`.

建立项目：`express hello-world`, 安装依赖: `cd hello-world && npm install`.

3.x版本，建立项目后启动命名是`node app.js`， 而4.x后的启动命名是`npm start`. 启动的端口都是3000.

### 模板引擎
express默认的模板引擎是`jade`， 如需替换，使用`express [项目名称] -ejs`即可。

jade更接近Ruby的写法，简洁。Ejs更加接近HTML的写法。

## 目录结构
### app.js
主文件

### node_modules
保存`package.json`中定义并且按照的Node模块。

### package.json
提供依赖关系和项目信息

### public
可以直接访问你的公共文件夹。存放静态文件。此文件夹下不应包含任何逻辑。比如`http://localhost:3000/stylesheets/style.css`即可访问。

### route
路由定义，定义如何响应URL。

### views
提供应用程序的布局，一般配合使用模板引擎，可选的有`jade`和`ejs`。
