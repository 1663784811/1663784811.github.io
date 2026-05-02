import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-wkWaJKuf.js";const d={},s=a(`<h3 id="实现类" tabindex="-1"><a class="header-anchor" href="#实现类" aria-hidden="true">#</a> 实现类</h3><h4 id="hashset" tabindex="-1"><a class="header-anchor" href="#hashset" aria-hidden="true">#</a> HashSet</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>无序（存取顺序不一致）
不可重复
线程不安全
允许存 null（只能存一个）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linkedhashset" tabindex="-1"><a class="header-anchor" href="#linkedhashset" aria-hidden="true">#</a> LinkedHashSet</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底层：基于 LinkedHashMap 实现
特点：
有序（保证插入顺序）
不可重复
线程不安全
适用：既要去重，又要保持插入顺序

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="treeset" tabindex="-1"><a class="header-anchor" href="#treeset" aria-hidden="true">#</a> TreeSet</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底层：基于 TreeMap 实现
特点：
自动排序（自然升序 / 自定义规则）
不可重复
线程不安全
不能存 null
适用：既要去重，又要自动排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[s];function r(t,c){return i(),n("div",null,l)}const h=e(d,[["render",r],["__file","06.集合类_Set_API.html.vue"]]);export{h as default};
