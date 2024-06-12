import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as s}from"./app-D69xzb5d.js";const d={},a=s(`<h2 id="配置静态ip" tabindex="-1"><a class="header-anchor" href="#配置静态ip" aria-hidden="true">#</a> 配置静态IP</h2><p>编辑文件 /etc/sysconfig/network-scripts/ifcfg-ens33</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no

########   静态与动态
#BOOTPROTO=dhcp
BOOTPROTO=static

DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=949ee818-e3b2-4a48-8e9f-e4d1f201eecb
DEVICE=ens33
ONBOOT=yes

####################    IP  
IPADDR=192.168.0.50
####################    子网掩码
NETMASK=255.255.255.0
###################     网关
GATEWAY=DEFAULT_GATEWAY


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启网卡" tabindex="-1"><a class="header-anchor" href="#重启网卡" aria-hidden="true">#</a> 重启网卡</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),l=[a];function r(c,v){return n(),i("div",null,l)}const m=e(d,[["render",r],["__file","08.IP与DNS.html.vue"]]);export{m as default};
