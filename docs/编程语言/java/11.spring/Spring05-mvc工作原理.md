---
article: false
title: Spring05-mvc工作原理
---



1.客户端发送请求到 DispatcherServlet。

2.DispatcherServlet 调用 HandlerMapping 查找处理器。

3.DispatcherServlet 使用 HandlerAdapter 调用处理器方法。

4.处理器处理请求并返回 ModelAndView。

5.DispatcherServlet 调用 ViewResolver 解析视图。

6.视图生成内容并返回给 DispatcherServlet。

7.DispatcherServlet 将视图内容返回给客户端。
































