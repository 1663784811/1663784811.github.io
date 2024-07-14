import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app-DALbP30y.js";const i={},d=a(`<h2 id="_1-单机" tabindex="-1"><a class="header-anchor" href="#_1-单机" aria-hidden="true">#</a> 1.单机</h2><h2 id="_2-主从" tabindex="-1"><a class="header-anchor" href="#_2-主从" aria-hidden="true">#</a> 2.主从</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><pre><code>7001 主
7002 从
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-哨兵" tabindex="-1"><a class="header-anchor" href="#_3-哨兵" aria-hidden="true">#</a> 3.哨兵</h2><h2 id="_4-cluster-高可用" tabindex="-1"><a class="header-anchor" href="#_4-cluster-高可用" aria-hidden="true">#</a> 4.cluster 高可用</h2>`,18),l=[d];function r(c,t){return s(),e("div",null,l)}const v=n(i,[["render",r],["__file","03.redis集群.html.vue"]]);export{v as default};
