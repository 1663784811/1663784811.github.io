---
article: false
title: 多线程03-Future 异步
---

### FutureTask
```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class FutureTaskTest {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        FutureTask<String> futureTask = new FutureTask<>(new MyThread());
        Thread thread = new Thread(futureTask);
        thread.start();
        // 取消线程
        // futureTask.cancel(true);
        // 判断线程是否被取消
        System.out.println(futureTask.isCancelled());
        // 判断子线程是否完成
        System.out.println(futureTask.isDone());
        // 获取线程结果,主线程会被阻塞
        String s = futureTask.get();
        System.out.println(s);
    }

}

class MyThread implements Callable<String> {
    @Override
    public String call() throws Exception {
        return "ssssss";
    }
}

```

### CompletableFuture

```java

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CompletableFutureTest {


    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService threadPool = Executors.newFixedThreadPool(3);
        CompletableFuture<Void> runAsync = CompletableFuture.runAsync(() -> {
            System.out.println("1111");
            int aa = 1 / 0;
        }).whenCompleteAsync((v, e) -> {
            if (null == e) {
                int aa = 1 / 0;
                System.out.println("1111  的结果:" + v);
            } else {
                System.out.println("1111  的结果: 异常");
            }
        }).exceptionally(e -> {
            System.out.println("异常");
            e.printStackTrace();
            return null;
        });
        CompletableFuture<Void> runAsync2 = CompletableFuture.runAsync(() -> {
            System.out.println("22222");
        }, threadPool).whenCompleteAsync((v, e) -> {
            if (null == e) {
                System.out.println("22222  的结果:" + v);
            }
        }, threadPool);
        CompletableFuture<String> supplyAsync3 = CompletableFuture.supplyAsync(() -> {
            return "33333";
        }).whenCompleteAsync((v, e) -> {
            if (null == e) {
                System.out.println("33333  的结果:" + v);
            }
        }, threadPool);
        CompletableFuture<String> supplyAsync4 = CompletableFuture.supplyAsync(() -> {
            return "4444";
        }, threadPool).whenCompleteAsync((v, e) -> {
            if (null == e) {
                System.out.println("4444  的结果:" + v);
            }
        });
        System.out.println("=================");
        System.out.println(runAsync.get());
        System.out.println(runAsync2.get());
        System.out.println(supplyAsync3.get());
        System.out.println(supplyAsync4.get());
        threadPool.shutdown();
        // =========================
    }

}
```
### 1.获取结果并触发计算

### 2.对计算结果进行处理

### 3.对计算结果进行消费

### 4.对计算速度进行选用

### 5.对计算结果进行合并























