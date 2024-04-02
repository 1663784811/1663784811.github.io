---
article: false
title: 鱼头笔记
icon: note
---

### 硬件

```text
单片机资源:


通信协议:
    usart
    I2C
    CAN
    SPI
    ADC
    DMA ( stm32 )
    FSMC ( 灵活静态存储器控制器 )
    
具体硬件:
   EEPROM
   FLASH
   文件系统
       FAT
   LCD
   触摸屏 (  电容屏、电阻屏  )
   SD卡 ( TF卡 )  
   MPU6050 (  陀罗仪  )
   摄像头
   电机
       无刷电机
       步进电机
       伺服电机
   音频播放
   WIFI
   蓝牙
   Zigbee
   GSM
   LoRa
   NFC

实物
    打印机
    无人机
    云台
        

```




### 软件
鱼头笔记

项目架构
==================   服务监控   ===================

####  SkyWalking


#### ElaticSearch  、Logstash 、Kibana


####  node export



## 项目开发流程
```text
====================================================
调研: 
    1.确定客户需求
    2.可行性分析
        是否符合市场需要求
        是否符合法律法规
        所用到的技术是否可行？难点在哪？工作量大小？
    3.编写需求文档

    
============
前期沟通：
    1.原型设计
        文档
    2.工作量评估
        工作量文档

        
============
立项: 开项目启动会议  ppt展示
    1.项目概览
    2.说明技术架构
    3.说明功能点
        xxx 功能的作用


============
设计
    1.UI页面设计
        编写规范
    2.项目架构
        图：业务架构、技术架构、数据交互架构、部署架构


============
开发:
    根据需求规格说明书编写实现代码


============
测试:
    功能测试


============
上线:
    

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



