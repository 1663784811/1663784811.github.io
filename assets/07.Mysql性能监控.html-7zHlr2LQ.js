import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as e}from"./app-41izi-NS.js";const i={},c=e(`<h2 id="专业术语" tabindex="-1"><a class="header-anchor" href="#专业术语" aria-hidden="true">#</a> 专业术语</h2><p>QPS 是每秒查询数的缩写</p><p>TPS 是每秒事务数的缩写</p><h2 id="show" tabindex="-1"><a class="header-anchor" href="#show" aria-hidden="true">#</a> SHOW</h2><p>当前数据库连接数 进程列表 状态信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从服务器启动以来执行的查询数量。</span>
SHOW GLOBAL STATUS LIKE <span class="token string">&#39;Questions&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 从服务器启动以来提交的事务数量。</span>
SHOW GLOBAL STATUS LIKE <span class="token string">&#39;Com_commit&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 从服务器启动以来回滚的事务数量。</span>
SHOW GLOBAL STATUS LIKE <span class="token string">&#39;Com_rollback&#39;</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="performance-schema" tabindex="-1"><a class="header-anchor" href="#performance-schema" aria-hidden="true">#</a> PERFORMANCE_SCHEMA</h2><p>可以提供更详细的性能指标和数据库内部的统计信息</p><h2 id="information-schema" tabindex="-1"><a class="header-anchor" href="#information-schema" aria-hidden="true">#</a> INFORMATION_SCHEMA</h2><p>包含了数据库服务器内部的元数据、统计信息和性能指标，可以用来查询数据库对象、索引使用情况、表大小等信息。</p>`,10),r=[c];function t(d,o){return n(),s("div",null,r)}const h=a(i,[["render",t],["__file","07.Mysql性能监控.html.vue"]]);export{h as default};
