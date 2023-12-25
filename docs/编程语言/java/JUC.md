# JUC  java 并发编程

######################################
两份内容
    1.线程控制
    2.锁

#####################################
### 一、线程控制
    
    线程创建
        1.Thread 类
        2.Runable 接口
        3.Callable 接口
        
    线程睡眠、等待、唤醒
        Thread.sleep(100)
        wait()等待通知方法是Object类中的方法
        join()方法是Thread类直接提供的，无参，返回值void。
        notify()函数一个线程在调用共享对象的notify()方法后，会唤醒一个在共享变量上wait等待的线程，如果有多个线程在等待，具体唤醒哪一个则是随机的。
        notifyAll()函数唤醒共享变量上的所有wait挂起的线程。
        
    用户线程：
    守护线程：
    异步任务接口: Future
            FutureTask
            RunnableScheduledFuture -> ScheduledThreadPoolExecutor
            CompletableFuture
                4个重要的静态方法
                    runAsync(Runable  runable);
                    runAsync(Runable  runable, Excutor ex);
                    supplyAsync(Supplier<U> su);
                    supplyAsync(Supplier<U> su, Excutor ex);
    线程中断 LockSuport


    

### 二、 锁
    AQS 抽象队列同步器
        是用来实现锁或者其它同步器组件的公共基础部分的抽象实现，主要是解决锁分配给哪个线程的问题
        是重量级基础框架及整个juc体系的基石
        整体就是一个抽象的FIFO队列来完成资源获取线程的排队工作，并通过一个int类变量表示持有锁的状态
        

    锁的8种现象: 理解无锁、对象锁、类锁
    synchronized 原理    monitor(管程)
        同步代码块   
            monitorenter  加锁
            monitorexit   解锁
        同步方法
            ACC_SYNCHRONIZED
        静态同步方法
            ACC_STATIC     ACC_SYNCHRONIZED
        
    死锁排查
        jps -l  查进程
        jstack <进程号>
            Found 1 deadlock
        













