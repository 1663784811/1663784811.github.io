---
article: false
title: Spring01-简介
---

Spring 是一个开源的、轻量级的、基于 Java 的框架，用于构建企业级应用程序

## IOT / DI
```text
什么是 IOC（控制反转）和 DI（依赖注入）？Spring 是如何实现这两个功能的？


```

## AOP
```text
什么是 AOP（面向切面编程）？Spring 中的 AOP 是如何工作的？

```

Spring 中常用的注解有哪些？

Spring Bean 的作用域有哪些？它们之间的区别是什么？
````text
1.singleton：单例（默认）
2.prototype：多例
3.request：一次 HTTP 请求
4.session：一次用户会话

==== 另外 2 种（Web 环境）
5.application：整个 Web 应用，全局 ServletContext
6.websocket：一个 WebSocket 会话

````

Spring 中如何处理事务？
```text
1.编程式事务：手动写代码控制（用 TransactionTemplate / PlatformTransactionManager）
2.声明式事务：注解 @Transactional（实际开发 99% 用这个）

事务传播行为（7 种，面试必背）
1. REQUIRED（默认）：有事务就加入，没有就新建
2. SUPPORTS：有就用，没有就非事务运行
3. MANDATORY：必须在事务内，没有直接报错
4. REQUIRES_NEW：新建独立事务，挂起外层事务
5. NOT_SUPPORTED：始终非事务运行，挂起外层事务
6. NEVER：强制非事务，有事务就报错
7. NESTED：嵌套事务，有保存点，只回滚子事务



```


Spring MVC 是什么？它的工作原理是什么？
```text
Spring MVC 核心组件
    1. DispatcherServlet 前端控制器（总调度）
    2. HandlerMapping 处理器映射器（找 Controller）
    3. HandlerAdapter 处理器适配器（调用 Controller）
    4. Handler/Controller 业务控制器
    5. ViewResolver 视图解析器（拼页面路径）
    6. View 视图对象
```

Spring Boot 是什么？它与 Spring 框架有什么区别？


Spring Boot 的自动配置是如何工作的？


Spring Boot 中的 Starter 是什么？


Spring Cloud 是什么？它解决了什么问题？


Spring Security 是什么？它的作用是什么？


Spring 中的 Bean 生命周期是怎样的？


什么是 Spring 的依赖注入方式？有哪些方式可以实现依赖注入？
```text
1. 实例化 Bean（构造方法执行）
2. 依赖注入 / 属性填充（赋值 @Autowired、setter）
3. Bean 前置处理：BeanPostProcessor 前置初始化
4. 初始化方法
    执行 InitializingBean#afterPropertiesSet()
    执行自定义 init-method / @PostConstruct
5. BeanPostProcessor 后置处理
6.Bean 就绪，放入单例池，对外提供使用
7.容器关闭 执行 销毁方法
    DisposableBean#destroy()
    自定义 destroy-method / @PreDestroy
```






