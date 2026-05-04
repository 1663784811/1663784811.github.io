import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-aYIhXeuB.js";const a={},s=d(`<h2 id="_1-jps-最常用" tabindex="-1"><a class="header-anchor" href="#_1-jps-最常用" aria-hidden="true">#</a> 1. jps（最常用）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-jstat-jvm-统计信息监控" tabindex="-1"><a class="header-anchor" href="#_2-jstat-jvm-统计信息监控" aria-hidden="true">#</a> 2. jstat（JVM 统计信息监控）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# 格式：jstat -&lt;选项&gt; &lt;PID&gt; &lt;刷新间隔(ms)&gt; &lt;查询次数&gt;
jstat -gc 12345 1000        # 每秒打印一次GC详情
jstat -gcutil 12345 1000    # 查看GC使用率（百分比，更直观）
jstat -class 12345          # 查看类加载信息
jstack 12345                  # 打印所有线程栈
jstack -l 12345               # 打印详细锁信息
jstack 12345 &gt; thread.log     # 输出到文件，方便分析



S0     S1       E      O      M     CCS      YGC     YGCT     FGC    FGCT     CGC    CGCT       GCT
-     96.77   8.55   90.86  98.76   95.82    57      0.469     0     0.000    36     0.212     0.681

常用指标：
S0/S1：幸存者区使用率
E：Eden 区使用率
O：老年代使用率
M：元空间使用率
YGC/YGT：Young GC 次数 / 耗时
FGC/FGT：Full GC 次数 / 耗时





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-jcmd-多功能聚合命令-jdk8-推荐" tabindex="-1"><a class="header-anchor" href="#_3-jcmd-多功能聚合命令-jdk8-推荐" aria-hidden="true">#</a> 3. jcmd（多功能聚合命令，JDK8 + 推荐）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jcmd                          # 列出所有Java进程
jcmd 12345 help               # 查看该进程支持的命令
jcmd 12345 VM.flags           # 查看JVM参数
jcmd 12345 GC.run             # 主动触发Full GC
jcmd 12345 Thread.print       # 打印线程栈


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-jmap-堆内存快照" tabindex="-1"><a class="header-anchor" href="#_4-jmap-堆内存快照" aria-hidden="true">#</a> 4. jmap（堆内存快照）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
jmap -heap 12345              # 查看堆配置和使用情况
jmap -histo 12345             # 查看对象数量/大小（不用dump）
jmap -dump:format=b,file=heap.hprof 12345  # 生成堆dump文件


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-jhat-堆-dump-文件分析" tabindex="-1"><a class="header-anchor" href="#_5-jhat-堆-dump-文件分析" aria-hidden="true">#</a> 5. jhat（堆 dump 文件分析）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jhat heap.hprof
# 访问 http://localhost:7000 查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-jinfo-查看-修改-jvm-配置" tabindex="-1"><a class="header-anchor" href="#_6-jinfo-查看-修改-jvm-配置" aria-hidden="true">#</a> 6. jinfo（查看 / 修改 JVM 配置）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jinfo 12345                   # 查看所有JVM参数
jinfo -flags 12345            # 只看JVM启动参数
jinfo -sysprops 12345         # 查看系统属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[s];function r(t,v){return i(),n("div",null,l)}const u=e(a,[["render",r],["__file","jvm07-常用命令.html.vue"]]);export{u as default};
