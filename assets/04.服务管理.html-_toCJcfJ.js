import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-cD0C1f9F.js";const a={},s=d(`<h2 id="rpm包默认安装的服务" tabindex="-1"><a class="header-anchor" href="#rpm包默认安装的服务" aria-hidden="true">#</a> rpm包默认安装的服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    
    chkconfig --list   查看服务自启动状态，可以看到所有rpm 包安装的服务
    
    service 服务名 start|status|restart|stop
    service --status-all
    

    rpm目录意义
        /etc/init.d/         启动脚本位置
        /etc/sysconfig/      初始化环境配置文件位置
        /etc/                配置文件位置
        /etc/xinetd.conf     xinetd配置文件
        /etc/xinetd.d        基于xinetd服务的启动脚本
        /var/lib             服务产生的数据放在这里
        /var/log             日志

    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-独立的服务" tabindex="-1"><a class="header-anchor" href="#_1-独立的服务" aria-hidden="true">#</a> 1.独立的服务</h3><pre><code>启动


自启
    /etc/rc.d/rc.local
</code></pre><h3 id="_2-基于xinetd服务" tabindex="-1"><a class="header-anchor" href="#_2-基于xinetd服务" aria-hidden="true">#</a> 2.基于xinetd服务</h3><h2 id="源码包安装的服务" tabindex="-1"><a class="header-anchor" href="#源码包安装的服务" aria-hidden="true">#</a> 源码包安装的服务</h2>`,6),r=[s];function c(t,l){return i(),n("div",null,r)}const o=e(a,[["render",c],["__file","04.服务管理.html.vue"]]);export{o as default};
