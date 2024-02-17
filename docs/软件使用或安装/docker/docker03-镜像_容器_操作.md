---
article: false
title: 02. docker 镜像、容器 操作
---




一、 镜像操作
   查看镜像：
```shell
   docker images
```
   搜索镜像：
```shell
   docker search 镜像名
```
   拉取 镜像
```shell
   docker pull 镜像名
```
   删除镜像
```shell
   docker rmi 镜像id
```
   删除所有镜像
```shell
   docker rmi docker images -q
```

二、容器操作
查看容器
查看正在运行的容器
```shell
docker ps
```
查看所有容器
```shell
docker ps -a
```
创建容器
```shell
docker run -it linux镜像名 /bin/bash
docker run --name=容器名 -it 镜像名 /bin/bash
```
启动容器
```shell
docker start 容器名
docker start -i 容器名
```
停止容器
```shell
docker stop 容器名
```
删除容器
```shell
docker rm 容器名
```
进入已经启动的容器
```shell
docker attach 容器名
docker exec -it 容器名 /bin/bash
```

