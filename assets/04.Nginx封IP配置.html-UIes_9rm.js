import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,a as s}from"./app-wkWaJKuf.js";const a={},d=s(`<h3 id="_1-创建黑名单文件" tabindex="-1"><a class="header-anchor" href="#_1-创建黑名单文件" aria-hidden="true">#</a> 1. 创建黑名单文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/nginx/conf/block
<span class="token function">vi</span> /usr/local/nginx/conf/block/ip_blacklist.conf


deny <span class="token number">1.2</span>.3.4<span class="token punctuation">;</span>
deny <span class="token number">5.6</span>.7.8<span class="token punctuation">;</span>
deny <span class="token number">10.0</span>.0.0/24<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-在-nginx-中引入" tabindex="-1"><a class="header-anchor" href="#_2-在-nginx-中引入" aria-hidden="true">#</a> 2. 在 Nginx 中引入</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
server {
    listen 80;
    server_name yourdomain.com;

    # 引入黑名单
    include /usr/local/nginx/conf/block/ip_blacklist.conf;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级-自动封-ip-防攻击-爬虫-cc" tabindex="-1"><a class="header-anchor" href="#高级-自动封-ip-防攻击-爬虫-cc" aria-hidden="true">#</a> 高级：自动封 IP（防攻击 / 爬虫 / CC）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
    # 定义限流规则
    limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

    server {
        listen 80;
        server_name yourdomain.com;

        # 自动拦截高频访问 IP
        limit_req zone=one burst=15 nodelay;

        # 超过频率直接返回 503
    }
}

rate=10r/s：每秒最多 10 次请求
burst=15：允许突发 15 个请求

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[d];function r(c,v){return e(),i("div",null,l)}const m=n(a,[["render",r],["__file","04.Nginx封IP配置.html.vue"]]);export{m as default};
