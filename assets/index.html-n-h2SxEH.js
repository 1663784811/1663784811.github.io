import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-95lzpKUJ.js";const s={},l=d(`<p>鱼头笔记</p><p>项目架构 ================== 服务监控 ===================</p><h4 id="skywalking" tabindex="-1"><a class="header-anchor" href="#skywalking" aria-hidden="true">#</a> SkyWalking</h4><h4 id="elaticsearch-、logstash-、kibana" tabindex="-1"><a class="header-anchor" href="#elaticsearch-、logstash-、kibana" aria-hidden="true">#</a> ElaticSearch 、Logstash 、Kibana</h4><h4 id="node-export" tabindex="-1"><a class="header-anchor" href="#node-export" aria-hidden="true">#</a> node export</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目架构" tabindex="-1"><a class="header-anchor" href="#项目架构" aria-hidden="true">#</a> 项目架构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-设计规范" tabindex="-1"><a class="header-anchor" href="#ui-设计规范" aria-hidden="true">#</a> UI 设计规范</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>物理像素         像素密度PPI         逻辑像素
px                                 pt


375pt   390pt


1.配色数值
    全局品牌色:
    品牌过渡色:
    卡片背景色
    重点强调
    辅助色
       
2.字体字号
3.图标样式
4.图标风格
5.弹窗、提示框
6.按钮样式
7.表单分页
8.图片尺寸
9.布局
    栅格系统
        边距:
        内容相对宽度:
        列:
        水槽:
        



一个产品一个东西的主题是什么？想表达什么意思？



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[l];function v(r,c){return n(),e("div",null,a)}const b=i(s,[["render",v],["__file","index.html.vue"]]);export{b as default};
