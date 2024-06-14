import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-pYGI2H2o.js";const d={},l=s(`<h3 id="锁的分类" tabindex="-1"><a class="header-anchor" href="#锁的分类" aria-hidden="true">#</a> 锁的分类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>公平锁:
    确保线程按顺序获得锁，防止线程饥饿。

非公平锁:
    高效利用 CPU 资源，减少线程切换开销

可重入锁：
    允许同一线程多次获取同一锁。
    
乐观锁：
    通过版本号或 CAS 操作实现，无需锁住资源。

悲观锁：
    在访问资源前获取锁，确保数据一致性。

读锁:
    允许多个线程同时读取资源，提高读操作并发性。
    
写锁
    独占访问资源，确保写操作的一致性。

独占锁
    在同一时间只允许一个线程访问资源。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function v(r,c){return i(),e("div",null,a)}const t=n(d,[["render",v],["__file","多线程12-锁.html.vue"]]);export{t as default};
