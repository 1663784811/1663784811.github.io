import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as l}from"./app-0dcfCSYg.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
确认系统环境中是否已经安装了 gcc、make、openssl 和 openssl-devel 这些软件包，如果没有安装，可以通过以下命令进行安装
        # CentOS、RedHat 系统
        sudo yum install gcc make openssl openssl-devel -y


下载 Keepalived 的安装包，可以在 Keepalived 的官方网站
解压下载的安装包：
        tar -zxvf keepalived-x.x.x.tar.gz
        cd keepalived-x.x.x

编译和安装 Keepalived：
        ./configure --prefix=/usr/local/keepalived
        make
        sudo make install


配置 Keepalived，可以通过修改 
        /usr/local/keepalived/etc/keepalived/keepalived.conf 文件进行配置。
        
        
启动 Keepalived 服务：
        sudo /usr/local/keepalived/sbin/keepalived -f /usr/local/keepalived/etc/keepalived/keepalived.conf



验证 Keepalived 是否启动成功。可以通过 ps -ef | grep keepalived 命令查看 




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[s];function a(c,r){return i(),n("div",null,v)}const t=e(d,[["render",a],["__file","2.keepalived安装.html.vue"]]);export{t as default};
