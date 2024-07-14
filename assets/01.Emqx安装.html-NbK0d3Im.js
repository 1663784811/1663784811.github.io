import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-DALbP30y.js";const t="/assets/img-WIEss--b.png",p={},l=e(`<p>docker-compose.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">emqx1</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> emqx<span class="token punctuation">:</span>5.7.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emqx1
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_NODE_NAME=emqx@node1.emqx.io&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_CLUSTER__DISCOVERY_STRATEGY=static&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_CLUSTER__STATIC__SEEDS=[emqx@node1.emqx.io,emqx@node2.emqx.io]&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/opt/emqx/bin/emqx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ctl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 25s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">emqx-bridge</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> node1.emqx.io
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 1883<span class="token punctuation">:</span><span class="token number">1883</span>
      <span class="token punctuation">-</span> 8083<span class="token punctuation">:</span><span class="token number">8083</span>
      <span class="token punctuation">-</span> 8084<span class="token punctuation">:</span><span class="token number">8084</span>
      <span class="token punctuation">-</span> 8883<span class="token punctuation">:</span><span class="token number">8883</span>
      <span class="token punctuation">-</span> 18083<span class="token punctuation">:</span><span class="token number">18083</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./emqx1_data<span class="token punctuation">:</span>/opt/emqx/data

  <span class="token key atrule">emqx2</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> emqx<span class="token punctuation">:</span>5.7.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emqx2
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_NODE_NAME=emqx@node2.emqx.io&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_CLUSTER__DISCOVERY_STRATEGY=static&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;EMQX_CLUSTER__STATIC__SEEDS=[emqx@node1.emqx.io,emqx@node2.emqx.io]&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/opt/emqx/bin/emqx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ctl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 25s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">emqx-bridge</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> node2.emqx.io
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./emqx2_data<span class="token punctuation">:</span>/opt/emqx/data

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">emqx-bridge</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 http://IP:18083 用户名： admin 密码 ： public</p><p><img src="`+t+'" alt=""></p>',4),i=[l];function c(o,u){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","01.Emqx安装.html.vue"]]);export{d as default};
