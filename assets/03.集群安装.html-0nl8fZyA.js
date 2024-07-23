import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as s,c as r,b as e,d as t,e as l,a}from"./app-QVpU4N0f.js";const c={},o=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elaticsearch集群安装" tabindex="-1"><a class="header-anchor" href="#elaticsearch集群安装" aria-hidden="true">#</a> ElaticSearch集群安装</h2><h3 id="第一步-下载elaticsearch" tabindex="-1"><a class="header-anchor" href="#第一步-下载elaticsearch" aria-hidden="true">#</a> 第一步: 下载ElaticSearch</h3>`,3),v={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="第二步-master配置" tabindex="-1"><a class="header-anchor" href="#第二步-master配置" aria-hidden="true">#</a> 第二步: Master配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三步-data配置" tabindex="-1"><a class="header-anchor" href="#第三步-data配置" aria-hidden="true">#</a> 第三步: Data配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第四步-client配置" tabindex="-1"><a class="header-anchor" href="#第四步-client配置" aria-hidden="true">#</a> 第四步: Client配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第五步-ingest配置" tabindex="-1"><a class="header-anchor" href="#第五步-ingest配置" aria-hidden="true">#</a> 第五步: Ingest配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第六步-启动集群" tabindex="-1"><a class="header-anchor" href="#第六步-启动集群" aria-hidden="true">#</a> 第六步: 启动集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function h(m,b){const n=d("ExternalLinkIcon");return s(),r("div",null,[o,e("p",null,[e("a",v,[t("官网下载地址"),l(n)])]),u])}const _=i(c,[["render",h],["__file","03.集群安装.html.vue"]]);export{_ as default};
