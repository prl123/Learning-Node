Nginx默认安装之后

## 让node通过ip访问
listen的时候只绑定端口，不指定地址即可。


## 配置文件
目录在`conf`下，修改`nginx.conf`文件， 提取出中间的`server`模块，放到`conf/vhosts`下，命名随意，比如`default.conf`。然后把`server`提取后空白的那块，补充上:

```
include    vhosts/*.conf;
```


## 设置反向代理
我完全修改了`server`的配置文件，为了达到使用localhost访问转向4000端口，192.168.1.60转向3000端口。

```
upstream nodejs__upstream {
     server 127.0.0.1:3000;
     keepalive 64;
}
server {
     listen 80;
     server_name 192.168.1.60;
     location / {
         proxy_set_header   X-Real-IP            $remote_addr;
         proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
         proxy_set_header   Host                   $http_host;
         proxy_set_header   X-NginX-Proxy    true;
         proxy_set_header   Connection "";
         proxy_http_version 1.1;
         proxy_pass         http://nodejs__upstream;
     }
}


upstream nodejs__upstream2 {
     server 127.0.0.1:4000;
     keepalive 64;
}
server {
     listen 80;
     server_name localhost;
     location / {
         proxy_set_header   X-Real-IP            $remote_addr;
         proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
         proxy_set_header   Host                   $http_host;
         proxy_set_header   X-NginX-Proxy    true;
         proxy_set_header   Connection "";
         proxy_http_version 1.1;
         proxy_pass         http://nodejs__upstream2;
     }
}
```