import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-2JEAsQOb.js";const e={},p=t(`<h3 id="计数信号量-std-counting-semaphore" tabindex="-1"><a class="header-anchor" href="#计数信号量-std-counting-semaphore" aria-hidden="true">#</a> 计数信号量 std::counting_semaphore</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;semaphore&gt;</span>  <span class="token comment">// C++20</span></span>

std<span class="token double-colon punctuation">::</span>counting_semaphore<span class="token operator">&lt;</span><span class="token number">3</span><span class="token operator">&gt;</span> <span class="token function">sem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计数信号量，最多允许 3 个线程访问</span>

<span class="token keyword">void</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sem<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取信号量</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;线程 &quot;</span> <span class="token operator">&lt;&lt;</span> id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; 进入临界区\\n&quot;</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>this_thread<span class="token double-colon punctuation">::</span><span class="token function">sleep_for</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 模拟工作</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;线程 &quot;</span> <span class="token operator">&lt;&lt;</span> id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; 退出临界区\\n&quot;</span><span class="token punctuation">;</span>
    sem<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 释放信号量</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>thread threads<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        threads<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">thread</span><span class="token punctuation">(</span>worker<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> t <span class="token operator">:</span> threads<span class="token punctuation">)</span>
        t<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二进制信号量-std-binary-semaphore" tabindex="-1"><a class="header-anchor" href="#二进制信号量-std-binary-semaphore" aria-hidden="true">#</a> 二进制信号量 std::binary_semaphore</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;semaphore&gt;</span>  <span class="token comment">// C++20</span></span>

std<span class="token double-colon punctuation">::</span>binary_semaphore <span class="token function">semA</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始允许线程 A 运行</span>
std<span class="token double-colon punctuation">::</span>binary_semaphore <span class="token function">semB</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 线程 B 需要等待</span>

<span class="token keyword">void</span> <span class="token function">threadA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        semA<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 等待信号</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;A&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        semB<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 通知线程 B</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">threadB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        semB<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 等待线程 A</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;B&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        semA<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 通知线程 A</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>thread <span class="token function">t1</span><span class="token punctuation">(</span>threadA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>thread <span class="token function">t2</span><span class="token punctuation">(</span>threadB<span class="token punctuation">)</span><span class="token punctuation">;</span>

    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="经典生产者-消费者模型" tabindex="-1"><a class="header-anchor" href="#经典生产者-消费者模型" aria-hidden="true">#</a> 经典生产者-消费者模型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;
#include &lt;semaphore&gt;
#include &lt;queue&gt;
#include &lt;chrono&gt;

std::counting_semaphore&lt;1&gt; empty_slots(1); // 1 个空槽位（生产者等待）
std::counting_semaphore&lt;0&gt; filled_slots(0); // 0 个数据（消费者等待）
std::mutex mtx; // 保护共享队列
std::queue&lt;int&gt; buffer; // 共享缓冲区

void producer() {
    for (int i = 1; i &lt;= 5; ++i) {
        empty_slots.acquire();  // 等待空槽
        {
            std::lock_guard&lt;std::mutex&gt; lock(mtx);
            buffer.push(i);
            std::cout &lt;&lt; &quot;生产者：生产数据 &quot; &lt;&lt; i &lt;&lt; std::endl;
        }
        filled_slots.release();  // 通知消费者
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
    }
}

void consumer() {
    for (int i = 1; i &lt;= 5; ++i) {
        filled_slots.acquire();  // 等待数据
        {
            std::lock_guard&lt;std::mutex&gt; lock(mtx);
            int value = buffer.front();
            buffer.pop();
            std::cout &lt;&lt; &quot;消费者：消费数据 &quot; &lt;&lt; value &lt;&lt; std::endl;
        }
        empty_slots.release();  // 通知生产者
        std::this_thread::sleep_for(std::chrono::milliseconds(800));
    }
}

int main() {
    std::thread t1(producer);
    std::thread t2(consumer);

    t1.join();
    t2.join();

    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","55.C__线程控制_信号量.html.vue"]]);export{r as default};
