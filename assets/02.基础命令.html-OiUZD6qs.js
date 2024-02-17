import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-25ukqj7I.js";const d={},l=s(`<h2 id="命令结构" tabindex="-1"><a class="header-anchor" href="#命令结构" aria-hidden="true">#</a> 命令结构</h2><p>命令 [ -选项 ] [ 参数 ]</p><h2 id="ls-ll-命令" tabindex="-1"><a class="header-anchor" href="#ls-ll-命令" aria-hidden="true">#</a> ls ll 命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
############   查看文件
cat 

tac

tail -f  xxx.txt

more xxx.txt

less xxx.txt


######################   搜索文件

find [搜索范围] [匹配条件]

find /etc -name *xxxx.init
find /etc -iname *xxx.init
find /etc -size +204800
find /etc -user root





######################   权限
所有者、所处组、其它人

chown 所有者  文件
chown root  xxx.txt

chgrp 所处组 xxx.txt
chgrp root  xxx.txt



修改权限
chmod 777 xxx.txt

r   4
w   2
x   1



####################  网络
last  查看所有登录用户信息


查看数据包经过的节点
traceroute  baidu.com


netstat

-t   tcp协议
-u   udp协议
-l   监听
-r   路由
-n   显示ip和端口号

netstat -tlun
netstat -an
netstat -rn





iftop






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[l];function a(r,c){return i(),e("div",null,v)}const b=n(d,[["render",a],["__file","02.基础命令.html.vue"]]);export{b as default};
