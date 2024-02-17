---
article: false
title: 01. docker 包安装
---


## 离线安装Docker系统

### 第一步：下载docker离线包
```text

https://download.docker.com/linux/static/stable/x86_64/docker-20.10.6.tgz

补充，也可以从https://download.docker.com/linux/static/stable/网址下载指定版本

```
### 第二步：下载离线安装工具
```text
    https://github.com/Jrohy/docker-install/
```
### 第三步：将下载好的资源放在一个目录

### 第四步:
```text
在linux环境下，创建/root/setup/docker目录，然后拷贝下载好的资源到此目录
（可通过MobaXterm工具直接上传到linux目录）
```
### 第五步：执行安装操作
```text
1.进入/root/setup/docker 文件夹
    指令：
        cd /root/setup/docker
2.为 install.sh添加执行权限
    指令：
        chmod +x install.sh
3.安装
    ./install.sh -f docker-20.10.6.tgz

4.安装成功后,会出现如下信息:
    Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.docker 20.10.6 install success!

```


### 第六步：安装成功以后，检查安装状态

```text
指令：
    docker info
```
