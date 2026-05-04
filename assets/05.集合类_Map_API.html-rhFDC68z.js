import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as i}from"./app-aYIhXeuB.js";const d={},s=i(`<h3 id="实现类" tabindex="-1"><a class="header-anchor" href="#实现类" aria-hidden="true">#</a> 实现类</h3><h4 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap" aria-hidden="true">#</a> HashMap</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底层：数组 + 链表 + 红黑树
特点：无序、key 唯一、线程不安全、查询极快
允许 key=null、value=null（只能一个 null key）
适用：绝大多数单线程业务场景
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linkedhashmap" tabindex="-1"><a class="header-anchor" href="#linkedhashmap" aria-hidden="true">#</a> LinkedHashMap</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>继承 HashMap
特点：保留插入顺序，有序不排序
适用：需要存取顺序一致的场景、LRU 缓存

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap" aria-hidden="true">#</a> TreeMap</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底层：红黑树

特点：key 自动升序排序（自然排序 / 自定义比较器）

有序、不允许 null key

适用：需要按 key 排序的场景

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hashtable" tabindex="-1"><a class="header-anchor" href="#hashtable" aria-hidden="true">#</a> Hashtable</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底层：哈希表

特点：线程安全、效率极低

不允许 key、value 为 null

已被 HashMap + 并发工具替代，不要用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JUC 并发包，线程安全

分段锁 / CAS+synchronized，并发性能远好于 Hashtable

适用：多线程高并发存键值对


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[s];function r(c,t){return a(),n("div",null,l)}const h=e(d,[["render",r],["__file","05.集合类_Map_API.html.vue"]]);export{h as default};
