# 回掉(Callback)

## 同步(阻塞) 与 非同步(异步)
阻塞就是过程的编程方式，A->B->C，一个接着一个完成。

异步就是A,B,C同时处理，根据事件的相应决定触发的顺序。

前端开发过程中的DOM事件绑定就是典型的异步处理，根据处理去相应对应的函数。

Node.js的阻塞可以用如下代码实现：
```
function sleep(milliseconds) {
    var start = new Date().getTime();
    while ((new Date().getTime() - start) < milliseconds) {
    }
}
```

但是这个方法很少用。。。

## 缺点
异步处理的确定是执行顺序不确定，以及回调过程会造成很多嵌套。