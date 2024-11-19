import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-3y-0j7uu.js";const d={},l=e(`<h2 id="粒度分类" tabindex="-1"><a class="header-anchor" href="#粒度分类" aria-hidden="true">#</a> 粒度分类</h2><h3 id="全局锁" tabindex="-1"><a class="header-anchor" href="#全局锁" aria-hidden="true">#</a> 全局锁</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 加全局读锁</span>
FLUSH <span class="token keyword">TABLES</span> <span class="token keyword">WITH</span> <span class="token keyword">READ</span> <span class="token keyword">LOCK</span><span class="token punctuation">;</span>

<span class="token comment">-- 在另一个会话中执行备份操作</span>
mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p <span class="token comment">--all-databases &gt; backup.sql</span>

<span class="token comment">-- 备份完成后，释放锁</span>
<span class="token keyword">UNLOCK</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表锁" tabindex="-1"><a class="header-anchor" href="#表锁" aria-hidden="true">#</a> 表锁</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 获取表的读锁</span>
<span class="token keyword">LOCK</span> <span class="token keyword">TABLES</span> table_name <span class="token keyword">READ</span><span class="token punctuation">;</span>

<span class="token comment">-- 获取表的写锁</span>
<span class="token keyword">LOCK</span> <span class="token keyword">TABLES</span> table_name <span class="token keyword">WRITE</span><span class="token punctuation">;</span>

<span class="token comment">-- 释放锁</span>
<span class="token keyword">UNLOCK</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行锁" tabindex="-1"><a class="header-anchor" href="#行锁" aria-hidden="true">#</a> 行锁</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 对某一行加共享锁（读锁）</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span><span class="token punctuation">;</span>

<span class="token comment">-- 对某一行加排他锁（写锁）</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span><span class="token punctuation">;</span>

<span class="token comment">-- 对查询的数据加共享锁</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span><span class="token punctuation">;</span>

<span class="token comment">-- 对查询的数据加排他锁</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模式分类" tabindex="-1"><a class="header-anchor" href="#模式分类" aria-hidden="true">#</a> 模式分类</h2><h3 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>START TRANSACTION;
-- 对查询的数据加悲观锁
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;

-- 修改数据
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态分类" tabindex="-1"><a class="header-anchor" href="#状态分类" aria-hidden="true">#</a> 状态分类</h2><p>意向锁（Intention Lock）：为了行级锁和表级锁之间的协调引入的锁。MySQL 在给表加行级锁时，先申请意向锁，表级操作与行级操作并不冲突。</p><h3 id="意向共享锁" tabindex="-1"><a class="header-anchor" href="#意向共享锁" aria-hidden="true">#</a> 意向共享锁</h3><p>表示事务打算给某些行加共享锁</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="意向排他锁" tabindex="-1"><a class="header-anchor" href="#意向排他锁" aria-hidden="true">#</a> 意向排他锁</h3><p>表示事务打算给某些行加排他锁</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),i=[l];function c(r,t){return n(),a("div",null,i)}const u=s(d,[["render",c],["__file","09.Sql锁.html.vue"]]);export{u as default};
