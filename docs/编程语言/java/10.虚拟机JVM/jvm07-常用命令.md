---
article: false
title: jvm07-常用命令
---

## 1. jps（最常用）
```text
jps -l
```

## 2. jstat（JVM 统计信息监控）
```text

# 格式：jstat -<选项> <PID> <刷新间隔(ms)> <查询次数>
jstat -gc 12345 1000        # 每秒打印一次GC详情
jstat -gcutil 12345 1000    # 查看GC使用率（百分比，更直观）
jstat -class 12345          # 查看类加载信息
jstack 12345                  # 打印所有线程栈
jstack -l 12345               # 打印详细锁信息
jstack 12345 > thread.log     # 输出到文件，方便分析



S0     S1       E      O      M     CCS      YGC     YGCT     FGC    FGCT     CGC    CGCT       GCT
-     96.77   8.55   90.86  98.76   95.82    57      0.469     0     0.000    36     0.212     0.681

常用指标：
S0/S1：幸存者区使用率
E：Eden 区使用率
O：老年代使用率
M：元空间使用率
YGC/YGT：Young GC 次数 / 耗时
FGC/FGT：Full GC 次数 / 耗时





```

## 3. jcmd（多功能聚合命令，JDK8 + 推荐）
```text
jcmd                          # 列出所有Java进程
jcmd 12345 help               # 查看该进程支持的命令
jcmd 12345 VM.flags           # 查看JVM参数
jcmd 12345 GC.run             # 主动触发Full GC
jcmd 12345 Thread.print       # 打印线程栈


```


## 4. jmap（堆内存快照）
```text

jmap -heap 12345              # 查看堆配置和使用情况
jmap -histo 12345             # 查看对象数量/大小（不用dump）
jmap -dump:format=b,file=heap.hprof 12345  # 生成堆dump文件


```

## 5. jhat（堆 dump 文件分析）
```text
jhat heap.hprof
# 访问 http://localhost:7000 查看
```

## 6. jinfo（查看 / 修改 JVM 配置）
```text
jinfo 12345                   # 查看所有JVM参数
jinfo -flags 12345            # 只看JVM启动参数
jinfo -sysprops 12345         # 查看系统属性
```






























