import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-UOEFPimu.js";const d={},s=a(`<h3 id="acid属性" tabindex="-1"><a class="header-anchor" href="#acid属性" aria-hidden="true">#</a> ACID属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Atomicity（原子性）：事务中的所有操作要么全部完成，要么全部不完成，不会出现部分完成的情况。

Consistency（一致性）：事务执行前后，数据必须保持一致性。

Isolation（隔离性）：并发事务之间互不影响，事务的中间状态对其他事务不可见。

Durability（持久性）：事务一旦提交，其结果是持久的，即使系统崩溃也不会丢失。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cap定理" tabindex="-1"><a class="header-anchor" href="#cap定理" aria-hidden="true">#</a> CAP定理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Consistency（一致性）：所有节点在同一时间看到相同的数据。

Availability（可用性）：每个请求都能获得一个（成功或失败的）响应。

Partition tolerance（分区容错性）：系统在网络分区的情况下仍然可以继续运作。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="base理论" tabindex="-1"><a class="header-anchor" href="#base理论" aria-hidden="true">#</a> BASE理论</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Basically Available（基本可用）
基本可用性意味着系统在大多数时间内能够正常工作，但在极端情况下（如高负载、网络分区等），
系统仍然可以提供基本的服务。即使部分功能受限，系统仍能继续运行，而不会完全崩溃。例如：

某些读请求可能会返回旧数据（读写延迟）。
某些写请求可能会被延迟处理或暂时失败。
2. Soft State（软状态）
软状态意味着系统中的状态可以是临时的和不稳定的，不需要保持强一致性。在分布式系统中，
数据可以在多个节点之间进行同步，但不要求每个节点都在同一时刻保持完全一致。换句话说，数据可以在不同步的情况下存在一段时间。

3. Eventual Consistency（最终一致性）
最终一致性是指在没有新的更新发生的情况下，系统中的所有副本最终将达到一致状态。
虽然数据在短时间内可能不一致，但随着时间的推移，通过复制和同步机制，所有节点上的数据最终会收敛到一致的状态。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分布式事务协议" tabindex="-1"><a class="header-anchor" href="#分布式事务协议" aria-hidden="true">#</a> 分布式事务协议</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>二阶段提交协议（2PC）：一种常用的分布式事务协调协议，分为准备阶段和提交阶段，协调者会确保所有参与者都同意提交或者回滚。

三阶段提交协议（3PC）：对2PC的改进，增加了一个准备提交阶段，以减少协调者失败时的阻塞问题。

Paxos：一种一致性算法，用于在分布式系统中达成一致，广泛应用于分布式数据库和分布式文件系统中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[s];function r(c,v){return i(),n("div",null,l)}const m=e(d,[["render",r],["__file","01.分布式事务基础.html.vue"]]);export{m as default};
