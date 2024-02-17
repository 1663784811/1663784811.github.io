---
article: false
title: 01. Docker  安装
---


## 1.docker 安装

```shell
执行这个脚本会添加docker.repo源并安装Docker
yum install curl -y curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
#sudo sh get-docker.sh --mirror Aliyun

```   


## docker启动    
```shell
systemctl start docker
service docker start

```

开机启动
```shell
systemctl enable docker
```

重启docker服务
```shell
systemctl restart docker
sudo service docker restart
```

关闭docker  
```shell
systemctl stop docker
service docker stop
```

查看是否启动成功
```shell
docker ps -a
```
加速器配置
```shell

vi /etc/docker/daemon.json
{
  "registry-mirrors": ["http://192.168.118.8","http://hub-mirror.c.163.com","https://registry.docker-cn.com","https://kxv08zer.mirror.aliyuncs.com"],
  "insecure-registries": ["192.168.118.8"],
  "exec-opts": ["native.cgroupdriver=systemd"]
}
```

重载所有修改过的配置文件 重新启动Docker服务
```shell
systemctl daemon-reload
systemctl restart docker
```



