import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as s,c as i,b as e,d as r,e as d,a as c}from"./app-RaS7ap-Q.js";const l={},h={href:"https://github.com/rabbitmq/rabbitmq-auth-backend-http",target:"_blank",rel:"noopener noreferrer"},u=c(`<h3 id="第一步-开启插件" tabindex="-1"><a class="header-anchor" href="#第一步-开启插件" aria-hidden="true">#</a> 第一步：开启插件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_auth_backend_http
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_auth_backend_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-修改配置" tabindex="-1"><a class="header-anchor" href="#第二步-修改配置" aria-hidden="true">#</a> 第二步：修改配置</h3><p>/etc/rabbitmq/rabbitmq.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>auth_backends.1 = http
auth_http.http_method   = post
auth_http.user_path     = http://some-server/auth/user
auth_http.vhost_path    = http://some-server/auth/vhost
auth_http.resource_path = http://some-server/auth/resource
auth_http.topic_path    = http://some-server/auth/topic


auth_backends.1 = cache
auth_cache.cached_backend = http
auth_cache.cache_ttl = 5000



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-重启服务" tabindex="-1"><a class="header-anchor" href="#第三步-重启服务" aria-hidden="true">#</a> 第三步：重启服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart rabbitmq-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function b(o,v){const a=n("ExternalLinkIcon");return s(),i("div",null,[e("p",null,[e("a",h,[r("参考文档"),d(a)])]),u])}const _=t(l,[["render",b],["__file","08.Mqtt认证.html.vue"]]);export{_ as default};
