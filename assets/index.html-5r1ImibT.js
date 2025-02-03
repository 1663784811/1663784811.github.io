import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-V7ZioKQY.js";const s={},l=d(`<h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件" aria-hidden="true">#</a> 硬件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单片机资源:


通信协议:
    usart
    I2C
    CAN
    SPI
    ADC
    DAC
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
       读取mp3文件-&gt; 解码为数字信号 -&gt; DAC 转为模拟信号 -&gt; 功率放大 -&gt; 扬声器
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
        

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="软件" tabindex="-1"><a class="header-anchor" href="#软件" aria-hidden="true">#</a> 软件</h2><p>鱼头笔记</p><p>项目架构 ================== 服务监控 ===================</p><h4 id="skywalking" tabindex="-1"><a class="header-anchor" href="#skywalking" aria-hidden="true">#</a> SkyWalking</h4><h4 id="elaticsearch-、logstash-、kibana" tabindex="-1"><a class="header-anchor" href="#elaticsearch-、logstash-、kibana" aria-hidden="true">#</a> ElaticSearch 、Logstash 、Kibana</h4><h4 id="node-export" tabindex="-1"><a class="header-anchor" href="#node-export" aria-hidden="true">#</a> node export</h4><h2 id="项目开发流程" tabindex="-1"><a class="header-anchor" href="#项目开发流程" aria-hidden="true">#</a> 项目开发流程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>====================================================
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
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目架构" tabindex="-1"><a class="header-anchor" href="#项目架构" aria-hidden="true">#</a> 项目架构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),a=[l];function v(r,c){return n(),e("div",null,a)}const b=i(s,[["render",v],["__file","index.html.vue"]]);export{b as default};
