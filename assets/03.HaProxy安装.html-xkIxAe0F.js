import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as i,c as l,b as n,d,e as r,a as c}from"./app--uvhhyST.js";const o={},t={href:"https://www.haproxy.org/#down",target:"_blank",rel:"noopener noreferrer"},p=c(`<h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> haproxy-3.0.3.tar

<span class="token builtin class-name">cd</span> haproxy-3.0.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 Debian/Ubuntu 上</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre3-dev zlib1g-dev
<span class="token comment"># 在 CentOS/RHEL 上</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> pcre-devel zlib-devel openssl-devel

<span class="token comment">## 安装</span>
<span class="token function">make</span> <span class="token assign-left variable">TARGET</span><span class="token operator">=</span>linux-glibc <span class="token assign-left variable">USE_OPENSSL</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">USE_ZLIB</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">USE_PCRE</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TARGET=linux-glibc: 这是编译目标，linux-glibc 适用于大多数 Linux 发行版。</p><p>USE_OPENSSL=1: 启用 SSL 支持（如果你需要支持 HTTPS）。</p><p>USE_PCRE=1: 启用 PCRE 支持，用于正则表达式处理（通常用于高级路由和重写规则）。</p><p>USE_ZLIB=1: 启用 zlib 支持，用于 HTTP 压缩。</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>haproxy.cfg</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>global
    log /dev/log local0
    log /dev/log local1 notice
    <span class="token function">chroot</span> /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode <span class="token number">660</span> level admin
    stats <span class="token function">timeout</span> 30s
    user haproxy
    group haproxy
    daemon

defaults
    log global
    option httplog
    option dontlognull
    <span class="token function">timeout</span> connect <span class="token number">5000</span>
    <span class="token function">timeout</span> client  <span class="token number">50000</span>
    <span class="token function">timeout</span> server  <span class="token number">50000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-haproxy-服务" tabindex="-1"><a class="header-anchor" href="#启动-haproxy-服务" aria-hidden="true">#</a> 启动 HAProxy 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>haproxy <span class="token parameter variable">-f</span> ./haproxy.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> haproxy



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function u(v,b){const s=e("ExternalLinkIcon");return i(),l("div",null,[n("p",null,[n("a",t,[d("官网源码下载"),r(s)])]),p])}const k=a(o,[["render",u],["__file","03.HaProxy安装.html.vue"]]);export{k as default};
