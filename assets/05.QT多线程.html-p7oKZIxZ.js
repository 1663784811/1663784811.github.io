import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-46rmjwfB.js";const p={},e=t(`<h3 id="创建一个简单的线程" tabindex="-1"><a class="header-anchor" href="#创建一个简单的线程" aria-hidden="true">#</a> 创建一个简单的线程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>继承 QThread 类。
重写 run() 方法。
使用 start() 启动线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QCoreApplication&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QThread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>

<span class="token comment">// 继承 QThread</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">QThread</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 线程执行的任务</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Thread started!&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Processing in thread:&quot;</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
            <span class="token class-name">QThread</span><span class="token double-colon punctuation">::</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 模拟耗时操作</span>
        <span class="token punctuation">}</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Thread finished!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QCoreApplication <span class="token function">a</span><span class="token punctuation">(</span>argc<span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建线程对象</span>
    MyThread thread<span class="token punctuation">;</span>

    <span class="token comment">// 启动线程</span>
    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 等待线程执行完毕</span>
    thread<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-qobject-和-qthread-实现线程" tabindex="-1"><a class="header-anchor" href="#使用-qobject-和-qthread-实现线程" aria-hidden="true">#</a> 使用 QObject 和 QThread 实现线程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建一个普通的 QObject 类，并将任务放到 run() 或者槽方法中。
使用 moveToThread() 将 QObject 对象移动到一个新的线程中。
使用信号和槽机制与主线程或其他线程通信。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QCoreApplication&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QThread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QObject&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Worker</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">QObject</span></span> <span class="token punctuation">{</span>
    Q_OBJECT
<span class="token keyword">public</span> slots<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Worker thread started!&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Processing in worker thread:&quot;</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
            <span class="token class-name">QThread</span><span class="token double-colon punctuation">::</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Worker thread finished!&quot;</span><span class="token punctuation">;</span>
        emit <span class="token function">finished</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 发出信号，表示工作完成</span>
    <span class="token punctuation">}</span>

signals<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">finished</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 线程完成信号</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QCoreApplication <span class="token function">a</span><span class="token punctuation">(</span>argc<span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建一个线程</span>
    QThread thread<span class="token punctuation">;</span>

    <span class="token comment">// 创建一个 Worker 对象</span>
    Worker worker<span class="token punctuation">;</span>

    <span class="token comment">// 将 Worker 移动到新线程中</span>
    worker<span class="token punctuation">.</span><span class="token function">moveToThread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 连接信号和槽</span>
    <span class="token class-name">QObject</span><span class="token double-colon punctuation">::</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>thread<span class="token punctuation">,</span> <span class="token operator">&amp;</span>QThread<span class="token double-colon punctuation">::</span>started<span class="token punctuation">,</span> <span class="token operator">&amp;</span>worker<span class="token punctuation">,</span> <span class="token operator">&amp;</span>Worker<span class="token double-colon punctuation">::</span>doWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">QObject</span><span class="token double-colon punctuation">::</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>worker<span class="token punctuation">,</span> <span class="token operator">&amp;</span>Worker<span class="token double-colon punctuation">::</span>finished<span class="token punctuation">,</span> <span class="token operator">&amp;</span>thread<span class="token punctuation">,</span> <span class="token operator">&amp;</span>QThread<span class="token double-colon punctuation">::</span>quit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">QObject</span><span class="token double-colon punctuation">::</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>worker<span class="token punctuation">,</span> <span class="token operator">&amp;</span>Worker<span class="token double-colon punctuation">::</span>finished<span class="token punctuation">,</span> <span class="token operator">&amp;</span>worker<span class="token punctuation">,</span> <span class="token operator">&amp;</span>QObject<span class="token double-colon punctuation">::</span>deleteLater<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">QObject</span><span class="token double-colon punctuation">::</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>thread<span class="token punctuation">,</span> <span class="token operator">&amp;</span>QThread<span class="token double-colon punctuation">::</span>finished<span class="token punctuation">,</span> <span class="token operator">&amp;</span>thread<span class="token punctuation">,</span> <span class="token operator">&amp;</span>QObject<span class="token double-colon punctuation">::</span>deleteLater<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 启动线程</span>
    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;main.moc&quot;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制线程的同步和互斥" tabindex="-1"><a class="header-anchor" href="#控制线程的同步和互斥" aria-hidden="true">#</a> 控制线程的同步和互斥</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QCoreApplication&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QThread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QMutex&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>

QMutex mutex<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Worker</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">QThread</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        mutex<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 加锁</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Worker thread started!&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Processing:&quot;</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
            <span class="token class-name">QThread</span><span class="token double-colon punctuation">::</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Worker thread finished!&quot;</span><span class="token punctuation">;</span>
        mutex<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 解锁</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QCoreApplication <span class="token function">a</span><span class="token punctuation">(</span>argc<span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Worker thread1<span class="token punctuation">;</span>
    Worker thread2<span class="token punctuation">;</span>

    thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    thread1<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    thread2<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","05.QT多线程.html.vue"]]);export{k as default};
