import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-46rmjwfB.js";const e={},o=t(`<p>C++ 标准库没有提供所谓的日期类型。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctime&gt;</span></span>
 
using namespace std<span class="token punctuation">;</span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// 基于当前系统的当前日期/时间</span>
   <span class="token class-name">time_t</span> now <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;1970 到目前经过秒数:&quot;</span> <span class="token operator">&lt;&lt;</span> now <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
 
   tm <span class="token operator">*</span>ltm <span class="token operator">=</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
   <span class="token comment">// 输出 tm 结构的各个组成部分</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;年: &quot;</span><span class="token operator">&lt;&lt;</span> <span class="token number">1900</span> <span class="token operator">+</span> ltm<span class="token operator">-&gt;</span>tm_year <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;月: &quot;</span><span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">+</span> ltm<span class="token operator">-&gt;</span>tm_mon<span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;日: &quot;</span><span class="token operator">&lt;&lt;</span>  ltm<span class="token operator">-&gt;</span>tm_mday <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;时间: &quot;</span><span class="token operator">&lt;&lt;</span> ltm<span class="token operator">-&gt;</span>tm_hour <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> ltm<span class="token operator">-&gt;</span>tm_min <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> ltm<span class="token operator">-&gt;</span>tm_sec <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function l(c,i){return s(),a("div",null,p)}const k=n(e,[["render",l],["__file","20.C__日期时间.html.vue"]]);export{k as default};
