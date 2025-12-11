import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-sOVZqPqZ.js";const d={},s=a(`<h2 id="_1-api-网关" tabindex="-1"><a class="header-anchor" href="#_1-api-网关" aria-hidden="true">#</a> 1.API 网关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zuul
作用：Netflix 开源的 API 网关，提供路由、过滤、鉴权等功能。
现状：Zuul 1.x 基于阻塞 IO，性能较低；Zuul 2.x 未广泛使用，推荐替代方案：Spring Cloud Gateway。

Spring Cloud Gateway
作用：基于 Spring 5 的响应式 API 网关，支持动态路由、限流、熔断等。
优势：高性能、支持 WebFlux 异步非阻塞模型。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#_2-服务注册与发现" aria-hidden="true">#</a> 2.服务注册与发现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eureka
作用：Netflix 开源的注册中心，实现服务实例的注册与发现。
现状：Eureka 2.x 已停止维护，推荐替代方案：Nacos 或 Consul。

Nacos
作用：阿里开源的注册中心，支持服务发现、配置管理、动态 DNS 等功能。
优势：轻量、高可用，整合了注册中心和配置中心的功能。

Consul
作用：HashiCorp 开源的注册中心，支持服务发现、健康检查、多数据中心。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-客户端负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-客户端负载均衡" aria-hidden="true">#</a> 3.客户端负载均衡</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Ribbon
    作用：客户端负载均衡器，根据规则（轮询、随机等）从服务列表中选择目标实例。
    现状：逐渐被 Spring Cloud LoadBalancer 替代

Spring Cloud LoadBalancer


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-服务调用" tabindex="-1"><a class="header-anchor" href="#_4-服务调用" aria-hidden="true">#</a> 4.服务调用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OpenFeign
    作用：声明式的 HTTP 客户端，整合 Ribbon 和 Hystrix，通过接口注解简化服务调用。
    替代方案：RestTemplate（已过时）或 Spring Cloud OpenFeign。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-熔断与限流" tabindex="-1"><a class="header-anchor" href="#_5-熔断与限流" aria-hidden="true">#</a> 5.熔断与限流</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hystrix
    作用：Netflix 开源的熔断器，通过熔断、降级、隔离机制提高系统容错性。
    现状：已停止维护，推荐替代方案：Resilience4j 或 Sentinel。

Sentinel
    作用：阿里开源的流量控制组件，支持熔断、限流、系统保护等功能。
    优势：实时监控、规则动态配置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-分布式配置中心" tabindex="-1"><a class="header-anchor" href="#_6-分布式配置中心" aria-hidden="true">#</a> 6.分布式配置中心</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Spring Cloud Config
    作用：集中化管理配置文件，支持 Git、SVN 等存储方式。
    替代方案：Nacos Config（配置动态刷新更友好）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-消息驱动" tabindex="-1"><a class="header-anchor" href="#_7-消息驱动" aria-hidden="true">#</a> 7.消息驱动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Spring Cloud Stream
    作用：通过消息中间件（如 RabbitMQ、Kafka）实现服务间通信，解耦生产者与消费者。
    核心概念：Binder（绑定消息中间件）、Channel（消息通道）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-分布式链路追踪" tabindex="-1"><a class="header-anchor" href="#_8-分布式链路追踪" aria-hidden="true">#</a> 8.分布式链路追踪</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Sleuth
    作用：生成请求的唯一跟踪 ID（Trace ID 和 Span ID），用于分布式系统调用链追踪。
    搭配工具：Zipkin（可视化追踪数据）或 SkyWalking（APM 工具）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-安全认证" tabindex="-1"><a class="header-anchor" href="#_9-安全认证" aria-hidden="true">#</a> 9.安全认证</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Spring Cloud Security
    作用：整合 OAuth2、JWT 等安全协议，实现服务鉴权、单点登录（SSO）。
    常用场景：保护 API 网关、服务间调用的身份认证。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-分布式事务" tabindex="-1"><a class="header-anchor" href="#_10-分布式事务" aria-hidden="true">#</a> 10.分布式事务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Seata
    作用：阿里开源的分布式事务解决方案，支持 AT、TCC、Saga 模式。
    核心概念：TC（事务协调者）、TM（事务管理器）、RM（资源管理器）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他工具" tabindex="-1"><a class="header-anchor" href="#其他工具" aria-hidden="true">#</a> 其他工具</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Spring Cloud Bus
    作用：通过消息总线（如 RabbitMQ、Kafka）广播配置更新事件，实现配置动态刷新。
    典型场景：结合 Spring Cloud Config 使用。
    
Spring Cloud Circuit Breaker
    作用：统一熔断器抽象层，支持 Hystrix、Resilience4j、Sentinel 等多种实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[s];function r(t,c){return i(),n("div",null,l)}const m=e(d,[["render",r],["__file","01.springclude组件.html.vue"]]);export{m as default};
