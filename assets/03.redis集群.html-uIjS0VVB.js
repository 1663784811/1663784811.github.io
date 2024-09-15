import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a}from"./app-_8NupADL.js";const i={},l=a(`<h2 id="_1-单机" tabindex="-1"><a class="header-anchor" href="#_1-单机" aria-hidden="true">#</a> 1.单机</h2><h2 id="_2-主从" tabindex="-1"><a class="header-anchor" href="#_2-主从" aria-hidden="true">#</a> 2.主从</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><pre><code>7001 主
7002 从

主节点：主节点负责处理所有的写操作，主节点会将数据的变化同步到所有从节点。
从节点： 从节点主要用于处理读操作（例如：GET）从节点通过复制主节点的数据来保持数据的一致性。
       如果主节点出现故障，从节点可以提升为新的主节点，保证系统的高可用性。
       从节点并不会自动提升为主节点，需要借助 Redis Sentinel 或其他高可用性管理工具来实现自动故障转移
</code></pre><h3 id="第一步-主服务器" tabindex="-1"><a class="header-anchor" href="#第一步-主服务器" aria-hidden="true">#</a> 第一步: 主服务器</h3><p>修改配置redis.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 绑定主服务器的IP地址或设置为0.0.0.0以允许所有IP地址连接</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0

<span class="token comment"># 允许的保护模式（可以关闭以允许外部访问，但需要注意安全性）</span>
protected-mode no

<span class="token comment"># 修改端口</span>
port <span class="token number">7001</span>

<span class="token comment"># 指定数据持久化目录</span>
<span class="token function">dir</span> ./redisData

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动主服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./src/redis-server ./redis.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第二步-修改从服务器" tabindex="-1"><a class="header-anchor" href="#第二步-修改从服务器" aria-hidden="true">#</a> 第二步: 修改从服务器</h3><p>修改配置redis.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 绑定从服务器的IP地址或设置为0.0.0.0以允许所有IP地址连接</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0

<span class="token comment"># 允许的保护模式（可以关闭以允许外部访问，但需要注意安全性）</span>
protected-mode no

<span class="token comment"># 修改端口</span>
port <span class="token number">7002</span>

<span class="token comment"># 指定数据持久化目录</span>
<span class="token function">dir</span> ./redisData

<span class="token comment"># 指定主服务器的IP地址和端口</span>
replicaof <span class="token number">192.168</span>.1.100 <span class="token number">7001</span>

<span class="token comment"># 如果主服务器设置了密码，需要添加以下配置</span>
<span class="token comment"># masterauth yourpassword</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动从服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./src/redis-server ./redis.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三步-验证" tabindex="-1"><a class="header-anchor" href="#第三步-验证" aria-hidden="true">#</a> 第三步: 验证</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 连接到主节点</span>
./redis-cli <span class="token parameter variable">-p</span> <span class="token number">7001</span>
<span class="token comment">## 打印主从信息</span>
INFO replication


<span class="token comment">## 连接到从节点</span>
./redis-cli <span class="token parameter variable">-p</span> <span class="token number">7002</span>
<span class="token comment">## 打印主从信息</span>
INFO replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-哨兵" tabindex="-1"><a class="header-anchor" href="#_3-哨兵" aria-hidden="true">#</a> 3.哨兵</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点
    主节点（Master）：192.168.0.100:6379
    从节点1（Slave1）：192.168.0.101:6379
    从节点2（Slave2）：192.168.0.102:6379

哨兵: 需要三个 Sentinel 实例来监控 Redis 集群
    Sentinel1：192.168.0.103:26379
    Sentinel2：192.168.0.104:26379
    Sentinel3：192.168.0.105:26379

配置主节点（Master）：
    主节点不需要特别的配置，启动 Redis 即可。
        bind 0.0.0.0
        protected-mode no
        port 8001
        dir ./redisData
    
配置从节点（Slave）
    在从节点的 redis.conf 文件中添加以下内容
    bind 0.0.0.0
    protected-mode no
    port 8001
    dir ./redisData
    replicaof 192.168.0.100:6379
    
配置和启动 Sentinel
    sentinel.conf
    port 8004
    sentinel monitor mymaster 192.168.1.100 6379 2     # 改主节点或子节点IP
    sentinel down-after-milliseconds mymaster 5000
    sentinel failover-timeout mymaster 60000
    sentinel parallel-syncs mymaster 1

    
    
    启动 Sentinel
        nohup ./src/redis-sentinel ./sentinel.conf &amp;
验证 Sentinel 配置
        ./src/redis-cli -p 8004
        sentinel masters





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-cluster-高可用" tabindex="-1"><a class="header-anchor" href="#_4-cluster-高可用" aria-hidden="true">#</a> 4.cluster 高可用</h2><p>Redis Cluster 通过分片和复制机制提供高可用性。当主节点故障时，相应的从节点会自动提升为主节点，从而保证数据的可用性。</p><p>环境准备</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    节点1：192.168.1.100:6379
    节点2：192.168.1.101:6379
    节点3：192.168.1.102:6379
    节点4：192.168.1.103:6379
    节点5：192.168.1.104:6379
    节点6：192.168.1.105:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前三个节点作为主节点（Master），后三个节点作为从节点（Slave）。</p><p>每个节点的配置文件 redis.conf 应包括以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
protected-mode no
port <span class="token number">6379</span>
cluster-enabled <span class="token function">yes</span>
cluster-config-file nodes.conf
cluster-node-timeout <span class="token number">5000</span>
appendonly <span class="token function">yes</span>
<span class="token function">dir</span> ./redisData
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 Redis 实例 在每个节点上启动 Redis：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./src/redis-server ./redis.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 Redis Cluster</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> create <span class="token punctuation">\\</span>
<span class="token number">192.168</span>.1.100:6379 <span class="token number">192.168</span>.1.101:6379 <span class="token number">192.168</span>.1.102:6379 <span class="token punctuation">\\</span>
<span class="token number">192.168</span>.1.103:6379 <span class="token number">192.168</span>.1.104:6379 <span class="token number">192.168</span>.1.105:6379 <span class="token punctuation">\\</span>
--cluster-replicas <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证 Redis Cluster</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span> cluster info

<span class="token comment">#查看节点信息：</span>
redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span> cluster nodes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),d=[l];function r(c,v){return e(),s("div",null,d)}const u=n(i,[["render",r],["__file","03.redis集群.html.vue"]]);export{u as default};
