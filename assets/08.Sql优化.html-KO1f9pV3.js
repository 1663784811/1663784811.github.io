import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as n}from"./app-NZfegjwb.js";const d="/assets/img-L-wWOA4b.png",s={},l=n(`<h3 id="使用合适的索引" tabindex="-1"><a class="header-anchor" href="#使用合适的索引" aria-hidden="true">#</a> 使用合适的索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>索引设计：根据查询模式和数据访问模式来设计索引。确保频繁查询的列上建立索引，避免在大表上使用全表扫描

联合索引：考虑使用联合索引来覆盖多个查询条件，减少索引的维护成本和查询时间。

避免过多索引：过多的索引会增加数据修改的成本（如插入、更新、删除），应避免不必要的索引。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.普通索引
2.唯一索引
3.主键索引
4.全文索引
5.空间索引
6.组合索引
7.哈希索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引失效场景" tabindex="-1"><a class="header-anchor" href="#索引失效场景" aria-hidden="true">#</a> 索引失效场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.最左前缀匹配原则未遵守

2.使用 LIKE 模糊匹配时以 % 开头

3.对索引列进行函数操作或表达式计算

4.使用 OR 查询且没有覆盖所有索引列

5.隐式类型转换

6.不等查询 (&lt;&gt; 或 !=)

7.IS NULL 或 IS NOT NULL


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化查询语句" tabindex="-1"><a class="header-anchor" href="#优化查询语句" aria-hidden="true">#</a> 优化查询语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择性：确保 WHERE 子句中的条件具有良好的选择性，以利用索引的效果。

避免使用通配符查询：避免在 LIKE 操作中使用通配符（如 %value%），尽可能使用前缀搜索或全文索引。

使用 EXISTS 或 IN 替代多个 OR 条件：将多个 OR 条件替换为 EXISTS 或者 IN 子查询，可以提高查询效率。

优化 JOIN 操作：使用 INNER JOIN、LEFT JOIN 等关联方式，并确保关联字段有索引。

避免子查询：尽可能使用 JOIN 操作替代子查询，因为子查询可能会导致数据库多次扫描数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库结构优化" tabindex="-1"><a class="header-anchor" href="#数据库结构优化" aria-hidden="true">#</a> 数据库结构优化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>规范化：适当的数据库规范化可以减少数据冗余，提高数据一致性和查询效率。

反规范化：在需要频繁查询的字段上进行反规范化，避免 JOIN 操作过多。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询缓存和缓存策略" tabindex="-1"><a class="header-anchor" href="#查询缓存和缓存策略" aria-hidden="true">#</a> 查询缓存和缓存策略</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用查询缓存：MySQL 提供了查询缓存机制，但在某些情况下会影响性能，需要根据具体情况进行配置。

应用层缓存：在应用程序层面实现数据缓存，如 Memcached 或 Redis，减少数据库的访问压力。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监控和调整" tabindex="-1"><a class="header-anchor" href="#监控和调整" aria-hidden="true">#</a> 监控和调整</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用性能监控工具：定期监控数据库性能指标，如查询响应时间、慢查询日志、索引使用情况等。

分析执行计划：使用 EXPLAIN 命令分析查询执行计划，了解查询的优化潜力和瓶颈所在。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="explain-关键字" tabindex="-1"><a class="header-anchor" href="#explain-关键字" aria-hidden="true">#</a> EXPLAIN 关键字</h2><p><img src="`+d+`" alt=""></p><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id:</h3><p>查询的唯一标识符，显示执行计划中每个操作的顺序编号。值越小的操作优先级越高。</p><h3 id="select-type" tabindex="-1"><a class="header-anchor" href="#select-type" aria-hidden="true">#</a> select_type:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表示查询的类型，如 
SIMPLE（简单查询）、
PRIMARY（主查询）、
UNION（联合查询）、
SUBQUERY（子查询）等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示查询中涉及的表名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type:</h3><p>显示 MySQL 选择行的方式。常见的类型有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALL：全表扫描，效率最低。
index：索引扫描，但不使用索引的全部列。
range：索引范围扫描。
ref：基于索引进行扫描，用于非唯一索引。
eq_ref：每个索引值都被唯一引用，通常与主键或唯一索引一起使用。
const、system：常量访问或系统表，通常效率很高。
possible_keys: 显示可能用于查询的索引列表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>实际使用的索引。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="key-len" tabindex="-1"><a class="header-anchor" href="#key-len" aria-hidden="true">#</a> key_len:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用的索引的长度。显示了索引列的长度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示索引的哪个列被用于查找。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> rows:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>估算扫描的行数。表示从表中读取的行的数量的估计值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="extra" tabindex="-1"><a class="header-anchor" href="#extra" aria-hidden="true">#</a> Extra:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示额外的信息， 如 
    Using where（使用 WHERE 子句过滤）、
    Using index（仅使用索引）、
    Using temporary（使用临时表）等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),r=[l];function t(c,v){return i(),a("div",null,r)}const h=e(s,[["render",t],["__file","08.Sql优化.html.vue"]]);export{h as default};
