import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-JXXVuIpY.js";const d={},s=n(`<h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> GC</h2><p>串行收集器（Serial Garbage Collector）JDK 1.1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>它是一个单线程的收集器，使用“标记-复制”算法。
主要用于小型应用或者客户端应用，对于单线程场景效果较好。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>并行收集器（Parallel Garbage Collector）JDK 1.4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>也称为“吞吐量优先”收集器，它使用多个线程来进行垃圾收集，以最大化吞吐量。
适用于多核处理器环境，尤其是后台运行的应用程序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>并发标记清除收集器（Concurrent Mark-Sweep Garbage Collector，CMS GC）JDK 1.5</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>它是一种并发收集器，它在应用程序线程运行的同时执行垃圾收集。
CMS GC旨在减少垃圾收集的停顿时间，适用于对停顿时间要求较高的应用场景。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>G1收集器（Garbage-First Garbage Collector）：JDK 7u4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>它是一种面向服务端应用程序的垃圾收集器，使用了“分区回收”和“整理回收”策略，
可以有效地控制垃圾收集的停顿时间，并提供可预测的性能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ZGC：JDK 11</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Z Garbage Collector是一种低停顿、可扩展的垃圾收集器，
适用于大内存和低延迟的场景。它通过将堆内存划分为不同的区域，
并使用读屏障技术来实现快速的并发垃圾收集。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shenandoah GC JDK 12</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shenandoah是一种可伸缩的低停顿垃圾收集器，
适用于需要较短停顿时间的大型堆应用程序。
它使用了一种称为“垃圾行（Garbage Compaction）”的技术，可以在几乎不停顿的情况下执行垃圾收集。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法:</h3><p>标记-清除算法（Mark and Sweep）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是最基本的垃圾收集算法之一。它分为两个阶段：标记阶段和清除阶段。
在标记阶段，垃圾收集器会遍历所有可达对象，并标记它们。
在清除阶段，垃圾收集器会清除所有未标记的对象，
从而释放它们所占用的内存空间。标记-清除算法的缺点是会产生内存碎片。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制算法（Copying）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>复制算法将堆内存分为两个区域，通常是一半大小。
当一个区域满了之后，垃圾收集器会将存活的对象复制到另一个区域，
并将原区域中的对象全部清除。这样做的好处是避免了内存碎片化，
并且垃圾收集效率高。但是，这种算法会浪费一半的内存空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标记-整理算法（Mark and Compact）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标记-整理算法是一种结合了标记-清除和复制算法的方法。
它首先标记所有存活的对象，然后将它们移动到堆的一端，
然后将所有未标记的对象清除。这样做的好处是消除了内存碎片，
并且不浪费额外的内存空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分代收集算法（Generational Garbage Collection）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分代收集算法是一种基于对象的生命周期长度的策略。
它将堆分为多个代，通常是新生代和老年代。
新创建的对象会被分配到新生代，
而经过多次垃圾收集仍然存活的对象会被晋升到老年代。
因为大部分对象在短时间内就会变得不可达，
所以对新生代使用复制算法，对老年代使用标记-整理算法或标记-清除算法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[s];function r(t,c){return a(),i("div",null,l)}const m=e(d,[["render",r],["__file","jvm04-垃圾收集.html.vue"]]);export{m as default};
