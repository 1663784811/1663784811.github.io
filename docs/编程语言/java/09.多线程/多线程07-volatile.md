---
article: false
title: 多线程07-volatile
---

## volatile 的特性


### 可见性
当一个线程修改了 volatile 变量的值，新的值对其他所有线程立即可见。

这种可见性保证是通过在变量读写时刷新和更新主内存中的值实现的，确保任何线程对 volatile 变量的读操作都能看到最新的写操作结果。



### 有序性
volatile 变量禁止指令重排序优化。

在写入一个 volatile 变量时，会确保在此之前的所有写操作都已完成，并且在读取一个 volatile 变量时，会确保在此之后的所有读操作都已完成。


### 不能保证原子性
volatile 变量的单次读/写操作是原子的，但复合操作（如 ++、-- 等）不是原子的。

如果需要对变量进行复合操作，需要使用其他同步机制，如 synchronized 块或 java.util.concurrent 包中的类。





