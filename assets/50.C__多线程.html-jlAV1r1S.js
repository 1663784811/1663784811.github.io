import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-925tRyXi.js";const t={},p=e(`<h3 id="重要方法" tabindex="-1"><a class="header-anchor" href="#重要方法" aria-hidden="true">#</a> 重要方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
join();         主线程等待子线程执行完毕
detach();       让线程独立运行，主线程不等待它
joinable();     检查线程是否可 join


this_thread::get_id()
this_thread::sleep_for(100ms);
this_thread::sleep_until(chrono::system_clock::now() + 100ms);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建线程的方式" tabindex="-1"><a class="header-anchor" href="#创建线程的方式" aria-hidden="true">#</a> 创建线程的方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.使用 std::thread（C++11 标准线程库）✅                  无返回值
2.使用 std::async（异步任务）✅                           有返回值 ( 异步任务 )
=====
3.使用 POSIX 线程（pthread，Linux 专用）
4.使用 Windows 线程（CreateThread，Windows 专用）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建线程" tabindex="-1"><a class="header-anchor" href="#创建线程" aria-hidden="true">#</a> 创建线程</h3><p>1.使用 std::thread（C++11 标准库线程）</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">runFn</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> arg<span class="token punctuation">,</span> string argName<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;参数1: &quot;</span> <span class="token operator">&lt;&lt;</span> arg <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;   参数2:&quot;</span> <span class="token operator">&lt;&lt;</span> argName <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    arg <span class="token operator">=</span> arg <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建一个线程</span>
    thread <span class="token function">t1</span><span class="token punctuation">(</span>runFn<span class="token punctuation">,</span> <span class="token function">ref</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;创建一个线程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; age: &quot;</span> <span class="token operator">&lt;&lt;</span> age<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token comment">// t1 加入主线程 阻塞主线程</span>
    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; age: &quot;</span> <span class="token operator">&lt;&lt;</span> age<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;结束&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.使用 std::async（异步任务）</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;future&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">asyncFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    future<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> result <span class="token operator">=</span> <span class="token function">async</span><span class="token punctuation">(</span>launch<span class="token double-colon punctuation">::</span>async<span class="token punctuation">,</span> asyncFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 获取线程返回值</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","50.C__多线程.html.vue"]]);export{d as default};
