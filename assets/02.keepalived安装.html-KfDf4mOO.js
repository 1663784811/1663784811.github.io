import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as d,b as n,d as c,e as t,a as e}from"./app-IYCXZ43E.js";const r={},p=e(`<p>Keepalived 是一个用于提供高可用性和负载均衡解决方案的工具， 通常与 HAProxy 或 Nginx 等负载均衡器结合使用。 它通过 Virtual Router Redundancy Protocol (VRRP) 实现虚拟 IP 地址的故障转移， 使多个服务器节点能够共同维护一个虚拟 IP 地址，当主节点出现故障时，备份节点可以迅速接管服务。</p><h3 id="系统环境" tabindex="-1"><a class="header-anchor" href="#系统环境" aria-hidden="true">#</a> 系统环境</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>确认系统环境中是否已经安装了 gcc、make、openssl 和 openssl-devel 这些软件包，如果没有安装，可以通过以下命令进行安装

# CentOS、RedHat 系统
sudo yum install gcc make openssl openssl-devel -y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h3>`,4),o={href:"https://www.keepalived.org/download.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下载 Keepalived 的安装包，可以在 Keepalived 的官方网站
解压下载的安装包：
tar -xvf keepalived-x.x.x.tar.gz
cd keepalived-x.x.x

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译和安装" tabindex="-1"><a class="header-anchor" href="#编译和安装" aria-hidden="true">#</a> 编译和安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 编译和安装 Keepalived：</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/keepalived
<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>配置 Keepalived，可以通过修改</p><p>/usr/local/keepalived/etc/keepalived/keepalived.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
vrrp_instance VI_1 <span class="token punctuation">{</span>
    <span class="token comment"># 主节点 MASTER 备份节点BACKUP</span>
    state MASTER
    <span class="token comment"># 网卡</span>
    interface eth0
    <span class="token comment"># 节点ID</span>
    virtual_router_id <span class="token number">51</span>
    <span class="token comment"># 优先级 1-255  越大优先级越高</span>
    priority <span class="token number">100</span>
    <span class="token comment"># 心跳时间 10s</span>
    advert_int <span class="token number">10</span>
    <span class="token comment"># 验证方式</span>
    authentication <span class="token punctuation">{</span>
        <span class="token comment"># 密码</span>
        auth_type PASS
        auth_pass <span class="token number">1234</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 虚拟ip</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">192.168</span>.0.222
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动 Keepalived 服务：</span>
<span class="token function">sudo</span> /usr/local/keepalived/sbin/keepalived <span class="token parameter variable">-f</span> /usr/local/keepalived/etc/keepalived/keepalived.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 验证 Keepalived 是否启动成功。可以通过命令查看</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> keepalived 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##  RHEL/CentOS 的系统上：</span>
<span class="token function">sudo</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages <span class="token operator">|</span> <span class="token function">grep</span> keepalived
<span class="token comment">##  Debian/Ubuntu 的系统上：</span>
<span class="token function">sudo</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/syslog <span class="token operator">|</span> <span class="token function">grep</span> keepalived

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置备份服务" tabindex="-1"><a class="header-anchor" href="#配置备份服务" aria-hidden="true">#</a> 配置备份服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP                <span class="token comment"># 备份节点设置</span>
    interface eth0
    virtual_router_id <span class="token number">52</span>        <span class="token comment"># 每个实例应使用不同的 virtual_router_id</span>
    priority <span class="token number">90</span>                 <span class="token comment"># 设置较低的优先级</span>
    advert_int <span class="token number">10</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass <span class="token number">1234</span>
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">192.168</span>.0.222
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动备份服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/keepalived/sbin/keepalived <span class="token parameter variable">-f</span> /usr/local/keepalived/etc/keepalived/keepalived.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17);function u(m,b){const a=i("ExternalLinkIcon");return l(),d("div",null,[p,n("p",null,[n("a",o,[c("官网下载"),t(a)])]),v])}const g=s(r,[["render",u],["__file","02.keepalived安装.html.vue"]]);export{g as default};
