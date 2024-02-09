---
article: false
title: java多线程-基本概念-创建线程方式
---
### 基本概念

线程状态：
    NEW(新建) 、
    RUNNABLE(运行)、
    BLOCKED(阻塞)、
    WAITING(等待)、
    TIMED_WAITING(超时等待)、
    TERMINATED(执行完毕)
```text
提示：源码 java.lang.Thread.State 找到
```

Java中有两类线程：
```text
用户线程 (User Thread)、
守护线程 (Daemon Thread)
守护线程是指在程序运行的时候在后台提供一种通用服务的线程，
比如垃圾回收线程就是一个很称职的守护者，
并且这种线程并不属于程序中不可或缺的部分。
因此，当所有的非守护线程结束时，程序也就终止了，
同时会杀死进程中的所有守护线程。反过来说，
只要任何非守护线程还在运行，程序就不会终止。
Thread.setDaemon(true)
```



### 1.继承Thread类
```java
public class ThreadTest {

    public static void main(String[] args) {
        System.out.println("开始：" + Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            A a = new A();
            a.start();
        }
        System.out.println("结束：" + Thread.currentThread().getName());
    }
}


class A extends Thread {
    @Override
    public void run() {
        super.run();
        System.out.println("启动线程" + Thread.currentThread().getName());

    }
}
```

### 2.Runable 接口
```java
public class RunnableTest {

    public static void main(String[] args) {
        System.out.println("开始：" + Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            B b = new B();
            new Thread(b).start();
        }
        System.out.println("结束：" + Thread.currentThread().getName());
    }
}


class B implements Runnable {
    @Override
    public void run() {
        System.out.println("启动线程" + Thread.currentThread().getName());
    }
}
```

### 3.Callable 接口
```java
import cn.hutool.core.util.RandomUtil;

import java.util.Date;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;

public class CallAbleTest {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        System.out.println("----程序开始运行----");
        Date date1 = new Date();
        FutureTask[] randomNumberTasks = new FutureTask[5];
        for (int i = 0; i < randomNumberTasks.length; i++) {
            Callable c = new C(i);
            // 执行任务并获取Future对象
            randomNumberTasks[i] = new FutureTask(c);
            Thread t = new Thread(randomNumberTasks[i]);
            t.start();
        }
        int a = RandomUtil.randomInt(100);
        if (a % 2 != 0) {
            System.out.println("------- 主线程  【引用】 子线程 ----------");
            for (Future f : randomNumberTasks) {// 获取所有并发任务的运行结果
                System.out.println(">>>" + f.get().toString()); // 从Future对象上获取任务的返回值，并输
            }
        } else {
            System.out.println("------- 主线程没引用子线程 ----------");

        }
        Date date2 = new Date();
        System.out.println("----程序结束运行----，程序运行时间【" + (date2.getTime() - date1.getTime()) + "毫秒】");
    }
}


class C implements Callable<Object> {

    private int taskNum;

    public C(int taskNum) {
        this.taskNum = taskNum;
    }

    // call方法的实现，主要用于执行线程的具体实现，并返回结果
    @Override
    public Object call() throws Exception {
        System.out.println(">>>" + taskNum + "任务启动");
        Date dateTmp1 = new Date();
        int ins = RandomUtil.randomInt(15) * 1000;
        Thread.sleep(ins);
        Date dateTmp2 = new Date();
        long time = dateTmp2.getTime() - dateTmp1.getTime();
        System.out.println("<<<" + taskNum + "任务完成:【" + time + "毫秒】");
        return taskNum + "任务返回运行结果,当前任务时间【" + time + "毫秒】";
    }
}
```
