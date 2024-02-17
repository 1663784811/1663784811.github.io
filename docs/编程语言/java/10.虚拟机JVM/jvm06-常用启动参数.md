---
article: false
title: jvm06-常用启动参数
---



```shell
java -Xms512m -Xmx2g YourMainClass
```

```text
-Xms<size>：设置 Java 堆的初始大小。默认情况下，初始堆大小为物理内存的1/64。
-Xmx<size>：设置 Java 堆的最大大小。默认情况下，最大堆大小为物理内存的1/4

-Xss<size>：设置线程栈大小。
-XX:MaxMetaspaceSize=<size>：设置元空间的最大大小。
-XX:MaxPermSize=<size>：设置永久代的最大大小（Java 8之前使用）。

-XX:+UseG1GC：启用G1垃圾收集器。
-XX:+UseConcMarkSweepGC：启用CMS（并发标记清除）垃圾收集器。
-XX:+UseParallelGC：启用并行垃圾收集器。
-XX:+UseSerialGC：启用串行垃圾收集器

-XX:NewSize=<size>：设置新生代初始大小。
-XX:MaxNewSize=<size>：设置新生代最大大小。

-XX:SurvivorRatio=<ratio>：设置Eden区和Survivor区的比率。
-XX:MaxTenuringThreshold=<threshold>：设置对象晋升到老年代的年龄阈值。
-XX:+UseCompressedOops：启用压缩指针。
-XX:+HeapDumpOnOutOfMemoryError：在发生内存溢出时生成堆转储文件。
-XX:HeapDumpPath=<path>：指定堆转储文件的生成路径。
-D<property>=<value>：设置系统属性。



-verbose:gc：此参数告诉JVM在每次垃圾收集时输出详细的GC日志信息。
-Xloggc:<filename>：此参数指定GC日志输出的文件路径。

```


