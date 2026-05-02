import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as s}from"./app-GC5NavQz.js";const d={},l=s(`<h3 id="对象布局" tabindex="-1"><a class="header-anchor" href="#对象布局" aria-hidden="true">#</a> 对象布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.对象头： 占 16 字节（64位默认开启压缩类指针占12个字节）
        对象标记 (8 字节)
            哈希码
            GC标记
            GC次数
            同步锁标记
            偏向锁持有者
        类元信息（类型指针） (8 字节 开启压缩类指针后 4 字节)
            指向方法区中该对象的类元数据，JVM 通过它知道是哪个类的实例
2.实例数据：
    
3.对齐填充：
    HotSpot 要求：整个对象大小必须是 8 字节的整数倍。前面两部分加起来不够 8 的倍数，就补空白字节凑齐，无实际业务含义，只为内存对齐、访问效率更高
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class User {
    int age;     // 4字节
    String name; // 引用 4字节
}

1.对象头: 占12字节
2.实例数据: 占8字节
3.对齐填充: 占4字节

12 + 8 + 4 = 24字节


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function v(r,c){return n(),i("div",null,a)}const u=e(d,[["render",v],["__file","jvm05-对象.html.vue"]]);export{u as default};
