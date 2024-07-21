import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-_5rfG-fE.js";const d="/assets/01-Zo7eWIVk.png",t={},s=n(`<h3 id="简单工作模型" tabindex="-1"><a class="header-anchor" href="#简单工作模型" aria-hidden="true">#</a> 简单工作模型:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个生产者，一个队列 ，一个消费者（一对一）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="工作模型" tabindex="-1"><a class="header-anchor" href="#工作模型" aria-hidden="true">#</a> 工作模型:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个生产者 ==&gt; 一个队列 ==&gt; 多个消费者。
一个消息只能被消费一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="订阅模式-fanout-广播" tabindex="-1"><a class="header-anchor" href="#订阅模式-fanout-广播" aria-hidden="true">#</a> 订阅模式-----Fanout（广播）:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个生产者 ==&gt; 一个交换机 ==&gt; 多个列队 ==&gt; 多个消费者。

一个消息可以被  多个消费者消费  生产者发生消息只能发送到交换机。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="订阅模式-direct-路由" tabindex="-1"><a class="header-anchor" href="#订阅模式-direct-路由" aria-hidden="true">#</a> 订阅模式 ---- Direct（路由）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个生产者 ==&gt; 一个交换机 ==&gt; 多个队列 ==&gt; 多个消费者routing Key ，

一个消息发送给符合 routing Key 的队列

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="订阅模式-topic-通配符" tabindex="-1"><a class="header-anchor" href="#订阅模式-topic-通配符" aria-hidden="true">#</a> 订阅模式 ---- topic（通配符）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Topic类型的Exchange与Direct相比，都是可以根据RoutingKey把消息路由到不同的队列。

只不过Topic类型Exchange可以让队列在绑定Routing key 的时候使用通配符！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p>',11),r=[s];function c(l,u){return a(),i("div",null,r)}const h=e(t,[["render",c],["__file","02.RabbitMq模型.html.vue"]]);export{h as default};
