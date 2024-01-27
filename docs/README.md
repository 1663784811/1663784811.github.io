---
article: false
title: 鱼头笔记
icon: note
---

鱼头笔记

项目架构
==================   服务监控   ===================

####  SkyWalking


#### ElaticSearch  、Logstash 、Kibana


####  node export




```text

====================================================
调研

立项 启动

需求分析
需规编写

图：业务架构、技术架构、数据交互架构、部署架构



详细设计
UI 页面设计


=====================================================
环境搭建
编写代码


=====================================================
测试
上线


```


## 项目架构
```text

1.超级管理员

2.企业管理

3.app管理端

4.用户端


规则
1.所有的实运营的都在app端: 公众号、小程序、微信支付、支付宝支付
2.路由划分
    /tx/业务/                    超级管理员
    /admin/企业Code/业务/         企业管理
    /appAdmin/appID/业务/        app管理端
    /app/appID/业务/             用户端
3.页面命名
    企业-app名-页面名           ent_shopping_user            企业
    app管理-app名-页面名        appAdmin_shopping_user       app管理端
    app-app名-页面名           app_shopping_user            用户端
    

4.项目命名
    admin                    超级管理员
    admin_enterprise         企业管理
    app名_admin               app管理端
    app名_app                 app用户端
    app名_guide               app导购端( 分销 )



5.版权问题
    字体、图片、音乐、视频


```



