import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-Ih7cekOi.js";const t={},i=e(`<h3 id="docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml" aria-hidden="true">#</a> docker-compose.yaml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>3.13.4
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> rabbitmq
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=rabbitmq
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=rabbitmq
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
      <span class="token punctuation">-</span> 15692<span class="token punctuation">:</span><span class="token number">15692</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
      <span class="token punctuation">-</span> 1883<span class="token punctuation">:</span><span class="token number">1883</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./rabbitmq_data<span class="token punctuation">:</span>/var/lib/rabbitmq
      <span class="token punctuation">-</span> ./rabbitmq_logs<span class="token punctuation">:</span>/var/log/rabbitmq
      <span class="token punctuation">-</span> ./enabled_plugins<span class="token punctuation">:</span>/etc/rabbitmq/enabled_plugins<span class="token punctuation">:</span>ro

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enabled-plugins" tabindex="-1"><a class="header-anchor" href="#enabled-plugins" aria-hidden="true">#</a> enabled_plugins</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[rabbitmq_mqtt, rabbitmq_management, rabbitmq_shovel, rabbitmq_shovel_management, rabbitmq_prometheus].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),l=[i];function c(p,o){return a(),s("div",null,l)}const d=n(t,[["render",c],["__file","02.RabbitMq安装_docker-compose.html.vue"]]);export{d as default};
