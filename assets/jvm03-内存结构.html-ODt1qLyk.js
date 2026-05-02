import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-c20o3SDW.js";const a={},s=d(`<h2 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Java堆是JVM中最大的一块内存区域，用于存储对象实例和数组对象。
Java堆是所有线程共享的内存区域，用于存放通过new关键字创建的对象实例。
Java堆可以分为新生代、老年代和永久代（或元空间）等不同的区域。
结构：
    新生代：
        edn
            满了触发 Minor GC
        s0 幸存者区
        s1 幸存者区
    老年代：
        对象在 S0/S1 中每熬过一次 GC，年龄 +1；默认年龄达到 15（-XX:MaxTenuringThreshold）晋升到老年代
    
====================  结构图
    
┌─────────────────────────────────────────┐
│  年轻代 (Young) 1/3                     │
│  ┌───────────────┐ ┌─────────────────┐ │
│  │ Eden (80%)    │ │ SurvivorFrom 10%│ │
│  └───────────────┘ └─────────────────┘ │
│                      ┌─────────────────┐ │
│                      │ Survivor To 10% │ │
│                      └─────────────────┘ │
├─────────────────────────────────────────┤
│  老年代 (Old) 2/3                       │
└─────────────────────────────────────────┘

==================== 对象处理过程
流程：
    1. 标记 Eden + S0 (From) 中存活对象
    2. 用复制算法：把存活对象全部复制到 S1 (To)
    3. 清空整个 Eden 和 S0
    4. 交换 S0 和 S1 身份（下次反过来）
    5. 对象年龄 + 1  每熬过一次 Minor GC 年龄 + 1 默认15 岁直接晋升老年代
    6. 大对象 直接分配进老年代，不进年轻代

对象晋升老年代条件
    1.对象年龄达到阈值（默认 15）
    2.Survivor 放不下存活对象，直接晋升大对象直接进老年代

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟机栈" tabindex="-1"><a class="header-anchor" href="#虚拟机栈" aria-hidden="true">#</a> 虚拟机栈</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Java栈也是线程私有的，每个线程都有自己的Java栈。
Java栈用于存储局部变量、方法调用和部分结果，并且会在方法调用的开始和结束时进行压栈和弹栈操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h2><p>调用操作系统方法, .so .lib</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本地方法栈类似于Java栈，但是它是用于执行本地方法（Native Method）的。
每个线程都有自己的本地方法栈，用于存储本地方法的参数和局部变量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法区也是所有线程共享的内存区域，
用于存储类信息、静态变量、常量、方法字节码等数据。

在旧版本的JVM中，方法区是通过永久代来实现的，
但是在较新的JVM中，永久代被元空间（Metaspace）所取代。
元空间并不属于Java堆，而是属于本地内存。

元空间（Metaspace）→ 本地内存（不在堆内）
    存放：类元数据、方法、常量池、静态变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序计数器是一块较小的内存区域，它是线程私有的，
每个线程都有自己的程序计数器。
程序计数器存储当前线程执行的字节码指令地址，
用于线程切换、分支、循环、异常处理等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[s];function v(r,c){return i(),n("div",null,l)}const t=e(a,[["render",v],["__file","jvm03-内存结构.html.vue"]]);export{t as default};
