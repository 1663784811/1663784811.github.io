import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app--d_SyiCc.js";const i={},l=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置和获取键值</span>
SET key value
GET key

<span class="token comment"># 删除键</span>
DEL key

<span class="token comment">#检查键是否存在</span>
EXISTS key

<span class="token comment">#查看键的类型</span>
TYPE key

<span class="token comment">#设置键的过期时间</span>
EXPIRE key seconds

<span class="token comment">#查看剩余时间</span>
TTL key




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型及操作" tabindex="-1"><a class="header-anchor" href="#数据类型及操作" aria-hidden="true">#</a> 数据类型及操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 字符串</span>
SET key <span class="token string">&quot;Hello, Redis&quot;</span>
GET key


<span class="token comment"># 哈希 (Hash)</span>
HSET user:1000 name <span class="token string">&quot;John Doe&quot;</span>
HGET user:1000 name


<span class="token comment"># 获取哈希的所有字段和值：</span>
HGETALL user:1000


<span class="token comment">#  列表 (List)</span>
<span class="token comment"># 向列表左侧插入元素：</span>
LPUSH mylist <span class="token string">&quot;World&quot;</span>
LPUSH mylist <span class="token string">&quot;Hello&quot;</span>
<span class="token comment"># 获取列表中的元素：</span>
LRANGE mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token comment"># 移除并获取列表的第一个元素：</span>
LPOP mylist


<span class="token comment"># 集合 (Set)</span>
<span class="token comment"># 添加和获取集合元素：</span>
SADD myset <span class="token string">&quot;Hello&quot;</span>
SADD myset <span class="token string">&quot;World&quot;</span>
SMEMBERS myset

SISMEMBER myset <span class="token string">&quot;Hello&quot;</span>


<span class="token comment"># 有序集合 (Sorted Set)</span>
ZADD myzset <span class="token number">1</span> <span class="token string">&quot;one&quot;</span>
ZADD myzset <span class="token number">2</span> <span class="token string">&quot;two&quot;</span>

ZRANGE myzset <span class="token number">0</span> <span class="token parameter variable">-1</span> WITHSCORES


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><p>Redis 支持简单的事务，通过 MULTI 和 EXEC 命令来实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>MULTI
SET key1 <span class="token string">&quot;value1&quot;</span>
SET key2 <span class="token string">&quot;value2&quot;</span>
EXEC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布-订阅-pub-sub" tabindex="-1"><a class="header-anchor" href="#发布-订阅-pub-sub" aria-hidden="true">#</a> 发布/订阅 (Pub/Sub)</h2><p>Redis 支持消息发布和订阅模式 订阅频道：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SUBSCRIBE mychannel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发布消息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUBLISH mychannel <span class="token string">&quot;Hello, World&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化" aria-hidden="true">#</a> 数据持久化</h2><p>RDB 持久化会在指定的时间间隔生成数据快照：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AOF 持久化会记录每个写操作，重启时重放这些操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>
appendfsync everysec

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d=[l];function c(r,v){return s(),e("div",null,d)}const t=n(i,[["render",c],["__file","02.redis基础.html.vue"]]);export{t as default};
