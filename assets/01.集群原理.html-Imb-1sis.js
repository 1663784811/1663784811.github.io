import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-t2ugctAo.js";const d={},l=s(`<h3 id="集群-8-0以下" tabindex="-1"><a class="header-anchor" href="#集群-8-0以下" aria-hidden="true">#</a> 集群 8.0以下</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点
    Data nodes — 存储数据并执行与数据相关的操作，例如搜索和聚合
    
    Master nodes — 负责集群范围的管理和配置操作，例如添加和删除节点
    
    Client nodes — 将集群请求转发给主节点，将数据相关的请求转发给数据节点
    
    Ingest nodes — 用于在索引之前预处理文档

Master
    管理索引（创建索引、删除索引）、分配分片：操作索引，决定哪些分片分配给相关的节点
    维护元数据（就是mapping等信息）
    管理集群节点状态
    不负责数据写入和查询，比较轻量级
    一个Elasticsearch集群中，只有一个Master节点。在生产环境中，内存可以相对小一点，但机器要稳定。


DataNode节点
     在Elasticsearch集群中，会有N个DataNode节点。DataNode节点主要负责：文档写入、文档检索，
     大部分Elasticsearch的压力都在DataNode节点上。所以在生产环境中，内存最好配置大一些（4个G）。

客户端节点
    当主节点和数据节点配置都设置为false的时候，代表该节点即没有选举主节点的资格，
    也没有选举数据节点的资格，该节点只能处理路由请求，
    处理搜索，分发索引操作等，从本质上来说该客户节点表现为智能负载平衡器。
    独立的客户端节点在一个比较大的集群中是非常有用的，他协调主节点和数据节点，
    客户端节点加入集群可以得到集群的状态，根据集群的状态可以直接路由请求。




=========================================================
1 、分片（Shard）
         Elasticsearch是一个分布式的搜索引擎，索引的数据也是分成若干部分，分布在不同的服务器节点中。
         分布在不同服务器节点中的索引数据，就是分片（Shard）。
         Elasticsearch会自动管理分片，如果发现分片分布不均衡，就会自动迁移。
        一个索引（index）由多个shard（分片）组成，而分片是分布在不同的服务器上的


2、副本
        为了对Elasticsearch的分片进行容错，假设某个节点不可用，会导致整个索引库都将不可用。
        所以，需要对分片进行副本容错。每一个分片都会有对应的副本。
        在Elasticsearch中，默认（7.x版本）创建的索引为1个分片、每个分片有1个主分片和1个副本分片。
        但是都是可以设置的，如果指定了多个主分片，则写入数据的时候可能就写入其中一个分片中，然后同步备份到若干个副分片中。
        如果几个主分片分布于不同的节点，则同一个索引库的数据自然而然就分布在不同的节点中。
        每个分片都会有一个Primary Shard（主分片）和若干个Replica Shard（副本分片），
        Primary Shard和Replica Shard不在同一个节点上。如下面的0、1、2，有一个主分片，两个副本分片



1、Elasticsearch文档写入原理


2、Elasticsearch检索原理



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-0以后" tabindex="-1"><a class="header-anchor" href="#_8-0以后" aria-hidden="true">#</a> 8.0以后</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点角色

node.roles: [master,data]


master：主节点角色，负责集群的管理和协调操作。主节点不存储数据，但负责选举和维护集群状态。

data：数据节点角色，负责存储和处理数据。数据节点通常拥有磁盘空间用于持久化索引和文档数据。

ingest：数据处理节点角色，负责执行数据预处理操作，如文档转换、字段解析和修改等。

ml：机器学习节点角色，专门用于执行 Elasticsearch 机器学习作业。

remote_cluster_client：远程集群客户端角色，允许节点充当远程集群的客户端，执行跨集群操作。

transform：转换节点角色，负责执行 Elasticsearch 转换作业，允许实时数据转换和聚合。

voting_only：仅投票节点角色，用于参与主节点选举但不处理数据请求。

cold：冷节点角色，专门用于存储冷数据，通常是对热数据存取不频繁的长期存储解决方案的一部分。

content：内容节点角色，用于存储内容和执行搜索操作，通常与 Elastic Enterprise Search 集成。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function v(r,c){return n(),e("div",null,a)}const b=i(d,[["render",v],["__file","01.集群原理.html.vue"]]);export{b as default};
