import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9pqFnJBk.js";const t={},i=e(`<h3 id="锁的分类" tabindex="-1"><a class="header-anchor" href="#锁的分类" aria-hidden="true">#</a> 锁的分类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>公平锁:
    确保线程按顺序获得锁，防止线程饥饿。

非公平锁:
    高效利用 CPU 资源，减少线程切换开销

可重入锁：
    允许同一线程多次获取同一锁。
    
乐观锁：
    通过版本号或 CAS 操作实现，无需锁住资源。

悲观锁：
    在访问资源前获取锁，确保数据一致性。

读锁:
    允许多个线程同时读取资源，提高读操作并发性。
    
写锁
    独占访问资源，确保写操作的一致性。

独占锁(互斥锁)
    在同一时间只允许一个线程访问资源。





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="锁的实现" tabindex="-1"><a class="header-anchor" href="#锁的实现" aria-hidden="true">#</a> 锁的实现</h3><h4 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized" aria-hidden="true">#</a> synchronized</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ============ 同步代码块</span>
<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// ============ 方法</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">instanceMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reentrantlock" tabindex="-1"><a class="header-anchor" href="#reentrantlock" aria-hidden="true">#</a> ReentrantLock</h4><p>第一种: 公平锁, 可重入锁</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种: 非公平锁, 可重入锁</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reentrantreadwritelock-读写锁" tabindex="-1"><a class="header-anchor" href="#reentrantreadwritelock-读写锁" aria-hidden="true">#</a> ReentrantReadWriteLock 读写锁</h4><p>写锁：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>写锁是独占锁，一次只能有一个线程持有写锁。
持有写锁的线程可以执行写操作，并且写操作会阻塞其他读操作和写操作。
写锁是独占锁，用于保证写操作的原子性和可见性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读锁：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多个线程可以同时持有读锁，只要没有线程持有写锁。
读操作不会阻塞其他读操作。
读锁是共享锁，允许多线程并发读取。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReadWriteLockExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantReadWriteLock</span> readWriteLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantReadWriteLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>ReadLock</span> readLock <span class="token operator">=</span> readWriteLock<span class="token punctuation">.</span><span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>WriteLock</span> writeLock <span class="token operator">=</span> readWriteLock<span class="token punctuation">.</span><span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token comment">// 写操作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        writeLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            writeLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 读操作</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        readLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            readLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stampedlock" tabindex="-1"><a class="header-anchor" href="#stampedlock" aria-hidden="true">#</a> StampedLock</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,18),c=[i];function p(l,o){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","多线程12-锁.html.vue"]]);export{r as default};
