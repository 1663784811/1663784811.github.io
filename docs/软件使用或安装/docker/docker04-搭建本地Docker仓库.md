---
article: false
title: 04. 搭建本地 Docker 仓库
---


一、创建仓库

下载镜像
```shell
   docker pull registry
```

创建容器并启动
```shell
docker run -d -p 5000:5000 -v /opt/data/registry:/usr/local/docker/registry registry
```
验证仓库是否启动成功
```shell
docker ps -a
```
浏览器访问
```shell
http://192.168.0.103:5000/v2/_catalog
```

```yaml
version: '3.1'
services:
  registry:
    image: registry
    restart: always
    container_name: registry
    environment:
      - "REGISTRY_HTTP_ADDR=0.0.0.0:5000"
      - "REGISTRY_HTTP_HEADERS=Access-Control-Allow-Origin:*,Access-Control-Allow-Methods:GET,HEAD,PUT,POST,DELETE,OPTIONS,Access-Control-Allow-Headers:Accept,Content-Type,Content-Length,Accept-Encoding,X-Registry-Auth,Authorization"
    ports:
      - 5000:5000
    volumes:
      - ./data:/var/lib/registry
```

# 用Nexus做docker仓库

二、配置仓库
vi /etc/docker/daeon.json
```shell
{
"registry-mirrors" : [ "https://6vrrj6n2.mirror.aliyuncs.com" ],
"insecure-registries":["192.168.1.130:5000"]
}
```

重启docker服务
```shell
systemctl restart docker
```

上传镜像

登录docker 
```shell
docker login 192.168.1.130:5000 -u docker -p docker
```

容器打成镜像
打标签
```shell
docker tag 本地镜像名 标签名

docker tag m.daocloud.io/docker.io/nacos/nacos-server:v2.5.1 nacos/nacos-server:v2.5.1

```
上传
```shell
docker push 192.168.0.130:5000/标签名
```
查看
```shell
http://192.168.0.130:5000/v2/_catalog
```







