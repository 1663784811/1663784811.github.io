import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as i,b as n,d as c,e as p,a as s}from"./app-925tRyXi.js";const o="/assets/img-1QS835hB.png",r={},u=s(`<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>节点启动过单节点一定要把data目录和logs目录删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点
Data nodes — 存储数据并执行与数据相关的操作，例如搜索和聚合     (  必需要  )
Master nodes — 负责集群范围的管理和配置操作，例如添加和删除节点   (  必需要  )

Client nodes — 将集群请求转发给主节点，将数据相关的请求转发给数据节点   (  非需要, 推荐  )
Ingest nodes — 用于在索引之前预处理文档                              (  非需要  )


3个 Master         ( node1:9200,   node2:9200,  node3:9200 )
3个 Data           ( node4:9200,   node5:9200,  node6:9200 )


3个 Client         ( node1:19200,   node2:19200,  node3:19200 )
1个 Ingest         ( node1:8200)


副本: 不需要单独指定副本节点,自动分配
     配置副本分片数量:
        可以通过索引的设置来配置每个索引的副本分片数量。这可以在索引创建时设置，也可以在索引创建后通过更新设置来调整
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elaticsearch集群安装" tabindex="-1"><a class="header-anchor" href="#elaticsearch集群安装" aria-hidden="true">#</a> ElaticSearch集群安装</h2><h3 id="修改电脑配置" tabindex="-1"><a class="header-anchor" href="#修改电脑配置" aria-hidden="true">#</a> 修改电脑配置</h3><p>/etc/security/limits.conf 追加以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* soft nofile <span class="token number">655360</span>
* hard nofile <span class="token number">655360</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/sysctl.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">262144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改-etc-hosts" tabindex="-1"><a class="header-anchor" href="#修改-etc-hosts" aria-hidden="true">#</a> 修改/etc/hosts</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.0.136 master-1
192.168.0.111 master-2
192.168.0.150 master-3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第一步-下载elaticsearch" tabindex="-1"><a class="header-anchor" href="#第一步-下载elaticsearch" aria-hidden="true">#</a> 第一步: 下载ElaticSearch</h3>`,13),d={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="第二步-master配置" tabindex="-1"><a class="header-anchor" href="#第二步-master配置" aria-hidden="true">#</a> 第二步: Master配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>application
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> master<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> ./data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> ./logs
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.0.136:9300&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.111:9300&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.150:9300&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;master-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;master-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;master-3&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12
<span class="token comment"># Enable encryption and mutual authentication between cluster nodes</span>
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/transport.p12
  <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> certs/transport.p12

<span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">transport.host</span><span class="token punctuation">:</span> 192.168.0.136
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token key atrule">node.roles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-data配置" tabindex="-1"><a class="header-anchor" href="#第三步-data配置" aria-hidden="true">#</a> 第三步: Data配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>application
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> data<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> ./data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> ./logs
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">8200</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.0.136:8300&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.136:9300&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.111:9300&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.150:9300&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12
<span class="token comment"># Enable encryption and mutual authentication between cluster nodes</span>
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/transport.p12
  <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> certs/transport.p12

<span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">transport.host</span><span class="token punctuation">:</span> 192.168.0.136
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">8300</span>
<span class="token key atrule">node.roles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四步-client配置" tabindex="-1"><a class="header-anchor" href="#第四步-client配置" aria-hidden="true">#</a> 第四步: Client配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第六步-启动集群" tabindex="-1"><a class="header-anchor" href="#第六步-启动集群" aria-hidden="true">#</a> 第六步: 启动集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./elasticsearch <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+'" alt=""></p>',9);function k(m,b){const a=t("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[n("a",d,[c("官网下载地址"),p(a)])]),v])}const g=e(r,[["render",k],["__file","03.集群安装.html.vue"]]);export{g as default};
