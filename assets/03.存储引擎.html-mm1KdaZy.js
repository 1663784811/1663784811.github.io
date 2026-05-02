import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as d}from"./app-c20o3SDW.js";const a={},s=d(`<h2 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h2><p>支持事务处理、</p><p>行级锁定和外键约束，</p><p>是默认的存储引擎</p><p>采用聚簇索引（Clustered Index），数据文件和索引文件一体化管理，数据存储较紧凑。同时支持自动增长的表空间（tablespace），可以在多个文件间分配。</p><p>使用缓冲池（Buffer Pool）来缓存索引和数据，提高访问速度</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>聚簇索引 = 主键索引 + 整行数据 + 隐藏列

非聚簇索引 = 索引字段值 + 主键 ID

一张 InnoDB 表 = 一棵聚簇索引 B+Tree + 多棵二级索引 B+Tree

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="innodb-存储结构" tabindex="-1"><a class="header-anchor" href="#innodb-存储结构" aria-hidden="true">#</a> InnoDB 存储结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>InnoDB 所有索引、数据 都基于 B+Tree

B+Tree 特点
    1. 所有数据都在叶子节点
    2. 非叶子节点只存索引键 + 页指针，层级矮、磁盘 IO 少
    3. 叶子节点双向链表有序，范围查询、排序、分页极快
    4. 高度一般 3~4 层，千万级数据也只需 3 次磁盘 IO

InnoDB 存储最小单元
    页（Page） 默认 16KB 是磁盘读写最小单位
    区（Extent）连续 64 个页 = 1024KB
    段（Segment）由多个区组成，分数据段、索引段、回滚段

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-tree-结构" tabindex="-1"><a class="header-anchor" href="#b-tree-结构" aria-hidden="true">#</a> B+Tree 结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以聚簇索引为例

一、非叶子节点（根节点、中间层）
    只存：索引键值 + 子节点页指针
        索引键值: 大小与索引字段类型有关，int 占 4 字节， long 占 8 字节
        子节点页指针: 占 6 字节 ( 表空间号4 字节 + 页号2 字节 )

二、叶子节点（最底层，唯一存数据的层）
    主键值 + 整行所有字段
    



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="myisam-适用于需要高性能读操作的场景" tabindex="-1"><a class="header-anchor" href="#myisam-适用于需要高性能读操作的场景" aria-hidden="true">#</a> MyISAM 适用于需要高性能读操作的场景</h2><p>不支持事务处理</p><p>不支持外键约束</p><p>使用表级锁: 当对表进行读写操作时会锁定整个表，适用于读多写少的场景。</p><p>数据文件和索引文件分离，表的存储空间可以根据需要调整，适用于大规模的存储需求。</p><p>使用键缓存（Key Cache）来缓存索引，但不缓存数据</p>`,17),l=[s];function r(v,c){return n(),i("div",null,l)}const m=e(a,[["render",r],["__file","03.存储引擎.html.vue"]]);export{m as default};
