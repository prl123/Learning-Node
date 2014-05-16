# 调试Node.js应用程序

## STDIO
就是标准输入输出，所有语言都会有的打印信息。使用方法就是`console.xxx`。


## Node.js 调试器
在代码中添加`debugger;`插入断点，`node debug app.js`启动调试。

插入断点使用REPL来检查对象和变量状态是Node调试的常用模式。

### 进入udebug后的命名
- count, 下一步
- repl, 查询变量值， `ctrl+C`退出查询
- `Program terminated`信息表明程序已经结束，`ctrl+d`退出。



