import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-fHh30XNa.js";const t={},i=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Agent/Probe：植入应用的无侵入探针，采集数据

2. OAP Server：Observability Analysis Platform，数据处理和分析中心

3. Storage：支持 Elasticsearch/H2/MySQL/TiDB 等存储

4. UI：可视化控制台

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># Elasticsearch 7 作为存储</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/elasticsearch/elasticsearch<span class="token punctuation">:</span>7.17.10
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elasticsearch
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> discovery.type=single<span class="token punctuation">-</span>node
      <span class="token punctuation">-</span> bootstrap.memory_lock=true
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms2g -Xmx2g&quot;</span>  <span class="token comment"># 根据服务器调整内存</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> es_data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9200:9200&quot;</span>
  <span class="token comment"># SkyWalking OAP Server 10.2.0 (Java 17)</span>
  <span class="token key atrule">oap</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/skywalking<span class="token punctuation">-</span>oap<span class="token punctuation">-</span>server<span class="token punctuation">:</span>10.2.0<span class="token punctuation">-</span>java17
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>oap
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SW_STORAGE=h2
      <span class="token punctuation">-</span> SW_STORAGE_H2_DRIVER=org.h2.jdbcx.JdbcDataSource
      <span class="token punctuation">-</span> SW_STORAGE_H2_URL=jdbc<span class="token punctuation">:</span>h2<span class="token punctuation">:</span>mem<span class="token punctuation">:</span>skywalking<span class="token punctuation">-</span>oap<span class="token punctuation">-</span>db
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;11800:11800&quot;</span>  <span class="token comment"># Agent gRPC 上报端口</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;12800:12800&quot;</span>  <span class="token comment"># UI 查询端口</span>
  <span class="token comment"># SkyWalking Web UI</span>
  <span class="token key atrule">ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/skywalking<span class="token punctuation">-</span>ui<span class="token punctuation">:</span>10.2.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>ui
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> oap
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SW_OAP_ADDRESS=http<span class="token punctuation">:</span>//oap<span class="token punctuation">:</span><span class="token number">12800</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># Web 访问端口</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">es_data</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function p(c,u){return s(),a("div",null,l)}const k=n(t,[["render",p],["__file","03.SkyWalking.html.vue"]]);export{k as default};
