import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as s}from"./app-ytEAYCZ3.js";const i={},l=s(`<h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>在官网上下载 https://www.rabbitmq.com/community-plugins.html，</p><p>下载rabbitmq_delayed_message_exchange 插件</p><p>然后放置到 RabbitMQ 的插件目录。</p><p><strong>/usr/lib/rabbitmq/lib/rabbitmq_server-xx.xx.xx/plugins</strong></p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/lib/rabbitmq/lib/rabbitmq_server-3.13.0/plugins/rabbitmq_delayed_message_exchange-3.13.0.ez
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="开启" tabindex="-1"><a class="header-anchor" href="#开启" aria-hidden="true">#</a> 开启</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看</span>
rabbitmq-plugins list
<span class="token comment"># 开启</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_delayed_message_exchange

<span class="token comment"># 重启rabbitmq服务</span>
systemctl restart rabbitmq-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitConfig</span> <span class="token punctuation">{</span>



<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[l];function r(t,c){return e(),n("div",null,d)}const o=a(i,[["render",r],["__file","07.延时队列.html.vue"]]);export{o as default};
