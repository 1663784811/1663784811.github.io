import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as s}from"./app-fpcHT6LC.js";const i={},t=s(`<h2 id="开启方法" tabindex="-1"><a class="header-anchor" href="#开启方法" aria-hidden="true">#</a> 开启方法</h2><h3 id="命令开启" tabindex="-1"><a class="header-anchor" href="#命令开启" aria-hidden="true">#</a> 命令开启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启插件</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_mqtt

<span class="token comment"># 开启 mqtt_v5</span>
rabbitmqctl enable_feature_flag all

<span class="token comment">## 查看</span>
rabbitmqctl list_feature_flags <span class="token parameter variable">--formatter</span><span class="token operator">=</span>pretty_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker开启" tabindex="-1"><a class="header-anchor" href="#docker开启" aria-hidden="true">#</a> docker开启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> rabbitmq rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_mqtt

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> rabbitmq rabbitmqctl enable_feature_flag all

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> rabbitmq rabbitmqctl list_feature_flags <span class="token parameter variable">--formatter</span><span class="token operator">=</span>pretty_table

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-开启" tabindex="-1"><a class="header-anchor" href="#docker-compose-开启" aria-hidden="true">#</a> docker-compose 开启</h3><p>请参考 01.RabbitMq安装_docker-compose</p><h3 id="安装-事件交换机-rabbitmq-event-exchange" tabindex="-1"><a class="header-anchor" href="#安装-事件交换机-rabbitmq-event-exchange" aria-hidden="true">#</a> 安装 事件交换机 rabbitmq_event_exchange</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_event_exchange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),l=[t];function r(c,d){return e(),n("div",null,l)}const m=a(i,[["render",r],["__file","03.Mqtt插件.html.vue"]]);export{m as default};
