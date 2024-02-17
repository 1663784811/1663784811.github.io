---
article: false
title: Spring02-模块
---

### Spring Core（Spring 核心）：
Spring 核心模块提供了核心的功能，包括 IOC（控制反转）和 DI（依赖注入）容器。
它包括 BeanFactory 接口及其实现类，用于管理应用程序中的对象（Bean）以及它们之间的依赖关系。

### Spring Context（Spring 上下文）：
Spring 上下文模块扩展了 Spring 核心模块，提供了更多的功能，
包括国际化、事件传播、资源加载、生命周期回调等。
其中最常用的是 ApplicationContext 接口及其实现类，
它是 Spring 应用程序的上下文环境，负责加载 Bean、管理 Bean 生命周期以及处理 Bean 之间的依赖关系。

### Spring AOP（面向切面编程）：
Spring AOP 模块提供了面向切面编程的支持，
允许在应用程序中使用切面来实现横切关注点的功能，
例如日志记录、事务管理、性能监控等。
它基于代理模式和反射机制实现，可以在运行时动态地将切面织入到目标对象的方法中。

### Spring DAO（数据访问对象）：
Spring DAO 模块提供了与数据访问相关的功能，
包括 JDBC、ORM（如 Hibernate、JPA 等）、事务管理等。
它提供了各种模板类（如 JdbcTemplate、HibernateTemplate 等）和异常类，简化了数据访问的代码编写。

### Spring ORM（对象关系映射）：
Spring ORM 模块提供了与对象关系映射框架集成的支持，
包括与 Hibernate、JPA、MyBatis 等 ORM 框架的集成，以及事务管理和数据访问的支持。

### Spring Web（Spring Web MVC）：
Spring Web 模块提供了与 Web 开发相关的功能，
包括 Spring MVC 框架、RESTful Web 服务、文件上传、数据校验、国际化等。
其中最常用的是 Spring MVC 框架，用于构建 Web 应用程序的控制器、视图和模型。








