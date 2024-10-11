import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-xICttKkM.js";const a={},l=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Xms512m</span> <span class="token parameter variable">-Xmx2g</span> YourMainClass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xms&lt;size&gt;：设置 Java 堆的初始大小。默认情况下，初始堆大小为物理内存的1/64。
-Xmx&lt;size&gt;：设置 Java 堆的最大大小。默认情况下，最大堆大小为物理内存的1/4

-Xss&lt;size&gt;：设置线程栈大小。
-XX:MaxMetaspaceSize=&lt;size&gt;：设置元空间的最大大小。
-XX:MaxPermSize=&lt;size&gt;：设置永久代的最大大小（Java 8之前使用）。

-XX:+UseG1GC：启用G1垃圾收集器。
-XX:+UseConcMarkSweepGC：启用CMS（并发标记清除）垃圾收集器。
-XX:+UseParallelGC：启用并行垃圾收集器。
-XX:+UseSerialGC：启用串行垃圾收集器

-XX:NewSize=&lt;size&gt;：设置新生代初始大小。
-XX:MaxNewSize=&lt;size&gt;：设置新生代最大大小。

-XX:SurvivorRatio=&lt;ratio&gt;：设置Eden区和Survivor区的比率。
-XX:MaxTenuringThreshold=&lt;threshold&gt;：设置对象晋升到老年代的年龄阈值。
-XX:+UseCompressedOops：启用压缩指针。
-XX:+HeapDumpOnOutOfMemoryError：在发生内存溢出时生成堆转储文件。
-XX:HeapDumpPath=&lt;path&gt;：指定堆转储文件的生成路径。
-D&lt;property&gt;=&lt;value&gt;：设置系统属性。



-verbose:gc：此参数告诉JVM在每次垃圾收集时输出详细的GC日志信息。
-Xloggc:&lt;filename&gt;：此参数指定GC日志输出的文件路径。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function r(v,t){return i(),n("div",null,d)}const u=e(a,[["render",r],["__file","jvm06-常用启动参数.html.vue"]]);export{u as default};
