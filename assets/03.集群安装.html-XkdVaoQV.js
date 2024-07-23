import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c as r,b as e,d as l,e as t,a}from"./app--d_SyiCc.js";const c={},o=a(`<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>节点启动过单节点一定要把data目录和logs目录删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第一步-下载elaticsearch" tabindex="-1"><a class="header-anchor" href="#第一步-下载elaticsearch" aria-hidden="true">#</a> 第一步: 下载ElaticSearch</h3>`,13),v={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="第二步-master配置" tabindex="-1"><a class="header-anchor" href="#第二步-master配置" aria-hidden="true">#</a> 第二步: Master配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三步-data配置" tabindex="-1"><a class="header-anchor" href="#第三步-data配置" aria-hidden="true">#</a> 第三步: Data配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第四步-client配置" tabindex="-1"><a class="header-anchor" href="#第四步-client配置" aria-hidden="true">#</a> 第四步: Client配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第五步-ingest配置" tabindex="-1"><a class="header-anchor" href="#第五步-ingest配置" aria-hidden="true">#</a> 第五步: Ingest配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第六步-启动集群" tabindex="-1"><a class="header-anchor" href="#第六步-启动集群" aria-hidden="true">#</a> 第六步: 启动集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function h(m,b){const n=i("ExternalLinkIcon");return d(),r("div",null,[o,e("p",null,[e("a",v,[l("官网下载地址"),t(n)])]),u])}const x=s(c,[["render",h],["__file","03.集群安装.html.vue"]]);export{x as default};
