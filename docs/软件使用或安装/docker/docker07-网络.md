---
article: false
title: 07.docker网络
---

## 桥接网络（Bridge Network）：
桥接网络是 Docker 默认使用的网络模式。每个容器都分配一个独立的 IP 地址，
并且可以通过**容器名称**进行通信。默认情况下，
Docker 在主机上创建一个名为 docker0 的虚拟以太网桥接口，并将容器连接到这个网络上。

```shell
# 创建一个桥接网络
docker network create my-bridge-network
```


## 主机网络（Host Network）
主机网络模式让容器直接使用主机的网络命名空间。
容器将与主机共享同一个 IP 地址，因此容器可以直接使用主机的网络配置。
这种模式下容器的网络性能可能更好，但容器与主机之间的网络隔离性较差。

```shell
# 使用主机网络模式运行容器
docker run --network=host my-container-image

```

## 无网络（None Network）
在无网络模式下，Docker 容器不会连接到任何网络，即不分配 IP 地址。
这种模式适用于完全隔离容器的情况，例如只希望通过数据卷与容器进行通信或者进行一些特定的测试。
```shell
# 使用无网络模式运行容器
docker run --network=none my-container-image
```




## 自定义 Docker 网络
### 创建自定义网络
```shell
docker network create my-custom-network
```
### 连接容器到自定义网络
```shell
docker run --network=my-custom-network my-container-image
```
### 网络驱动程序（Network Drivers）：
Docker 支持多种网络驱动程序，例如 Overlay、Macvlan、IPvlan 等，用于在不同的场景下提供更高级的网络功能和配置。


## docker-compose配置网络
```shell

version: '3.8'

services:
  webapp:
    image: nginx:latest
    ports:
      - "8080:80"
    networks:
      my-network:  # 网络
        aliases:
          - nginx # 别名
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
    networks:
      my-network:
        aliases:
          - mysql # 别名
          

networks:
  my-network:
    driver: bridge  # 驱动
    
    
```






