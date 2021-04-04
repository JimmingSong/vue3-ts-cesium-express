mysql启动命令
===
```
docker run -d -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
```
                                     首先搜索MySQL的镜像
dokcer search mysql

下载镜像(下载第一个)

docker pull mysql[name]
查看下载后的镜像

docker images

创建容器并且设置MySQL的密码

docker run -d -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=root mysql:latest[创建MySQL容器， MYSQL_ROOT_PASSWORD=root 设置root的密码为root]

进入容器修改root用户允许远程访问

docker exec -it dockerId /bin/sh

mysql -uroot -p

输入密码rootver

确认MySQL的版本

version

重置密码

update user set authentication_string=password('123456') where user='root';
grant all privileges on *.* to root@'%' identified by  '123456'; // 设置root用户在任何地方进行远程登录，并具有所有库任何操作权限，（公司绝对不能这么做，暴露的攻击面太大），这里只是做测试。

flush privileges; // 刷新权限
