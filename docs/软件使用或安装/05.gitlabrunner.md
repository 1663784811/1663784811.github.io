---
article: false
title: 05. gitlab runner
---


一、安装并配置必要的依赖项

a)在centos7的系统防火墙中打http和ssh访问

```shell
#sudo  yum install -y curl policycoreutils-python openssh-server
#sudo  systemctl enable sshd
#sudo  systemctl start sshd
#sudo  firewall-cmd --permanent --add-service=http
#sudo  systemctl reload firewalld
```

b)安装postfix以发送通知邮件
```shell
#sudo yum install postfix
#sudo systemctl enable postfix
#sudo systemctl start postfix
```

c)      iptables规则
```shell
#iptables -I INPUT -p tcp --dport <端口号>  -j  ACCEPT
#service iptables save
#service iptables restart
```

二、添加gitlab镜像源，并安装

a)      添加GitLab包存储库。
```shell
#curl  https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```
# 或者清华镜像源
[gitlab-ce]name=gitlab-ce
baseurl=http://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7
repo_gpgcheck=0
gpgcheck=0
enabled=1
gpgkey=https://packages.gitlab.com/gpg.key

b)     设置域名访问地址并安装gitlab
``` shell 
#sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ce
EXTERNAL_URL也可配置为EXTERNAL_URL=http://IP:端口
##### 三、配置邮箱（例qq企业邮箱）


编辑配置文件/etc/gitlab/ gitlab.rb
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "你的邮箱"
gitlab_rails['smtp_password'] = "你的密码"
gitlab_rails['smtp_domain'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = '你的邮箱'
gitlab_rails['gitlab_email_display_name'] = 'Gitlab'

重启服务#gitlab-ctl reconfigure

发送测试邮件
#gitlab-rails console
#Notify.test_email('接收邮件的邮箱','1234','5678').deliver_now


##### 四、安装gitlab-runner

##### docker-compose 安装gitlab-runner
https://www.jianshu.com/p/5810760049ac

###### 1、    添加镜像源
在/etc/yum.repos.d目录下新建文件gitlab-runner.repo填写如下 
[gitlab-runner]
name=gitlab-runner
baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el7/
repo_gpgcheck=0
gpgcheck=0
enabled=1
gpgkey=https://packages.gitlab.com/gpg.key

###### 2、 安装gitlab-runner

#yum clean all
yum makecache
yum install gitlab-runner -y
###### 3、注册gitlab-runner

说明gitlab-runner有两种，
 共享型Runner分为
 共享型（Shared Runner）：使用gitlab的root用户下的token注册
 特享型（Specific Runner）：使用gitlab项目相关人员下的token注册

查看token及url方式如下图
![31142c9f8f131fee23ecbb7e013ce48d.png](en-resource://database/624:2)


执行job方式后来选择为shell。图片为docker
![41cc45bdbbff89f358b6d13490e188f1.png](en-resource://database/625:1)


注册成功后gitlab会有相应显示

l  私有型登陆gitlab查看某项目的url和token  
#每个项目的token都不一样注意例如：

1.     查看token单击设置 ---》  ci/cd  à  runner  如下图所示url和token


2.     注册runner
　　登陆gitlab-runner执行命令注册
  　　#gitlab-ci-multi-runner  register     
      　#注册runner 如下图所示依次输入
        ＃gitlab-ci-multi-runner  start  runner-name

![5b7521065b9dc028b240e14e9f3c71db.png](en-resource://database/626:1)

3.     配置文件（忽略）  配置文件在  /etc/gitlab-runner/config.toml


#### 五、.gitlab-ci.yml简介

###### 关键字介绍

shell
script 由Runner执行的Shell脚本。
image 使用docker镜像， image：name
service 使用docker services镜像, services：name
before_script 执行作业前运行的脚本
after_script 作业完成后运行的脚本
stages 定义管道中的步骤，依次运行
stage 定义管道中步骤的作业段
only 指定作业限制only:refs，only:kubernetes，only:variables，和only:changes
tags 指定执行作业的runner
allow_failure 允许job失败
when 什么时候开始工作，
 on_success 只有当前一个阶段的所有工作都成功时（或者因为它们被标记而被认为是成功的allow_failure）才执行工作 。这是默认值。
 on_failure 仅当前一阶段的至少一个作业失败时才执行作业。
 always 无论先前阶段的工作状态如何，都可以执行工作。
 manual 手动执行作业
 delayed 延迟作业。后面跟start_in,start_in 30minutes(延迟30分钟)，不加单位，默认为秒。最长可延迟1小时。environment 作业部署到的环境名称 #暂未搞清
cache 
 key："$CI_JOB_STAGE-$CI_COMMIT_REF_SLUG" #为每分支，每步骤启用缓存
artifacts job成功时附加到作业的文件或目录
dependencies 此job依赖其他jobz,主要作用于作业优先级
converage 给定作业代码覆盖率设置 
retry 在发生故障时，可以自动重试作业的次数。
parallel 应该并行运行多少个作业实例
trigger 定义下游管道触发器
include 允许此作业包含外部YAML
extends 此作业将继承的配置项
pages 上传作业结果用于gitlab pages
variables 作业级别定义作业变量
```
简单使用案例
runner的执行方式为shell的简单示例。

