import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-Fq1AZp76.js";const t={},o=e(`<h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">for</span>
<span class="token keyword">do</span> <span class="token keyword">while</span>
<span class="token keyword">while</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断" tabindex="-1"><a class="header-anchor" href="#判断" aria-hidden="true">#</a> 判断</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span>
<span class="token keyword">else</span> <span class="token keyword">if</span>
<span class="token keyword">else</span>
<span class="token keyword">switch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto语句" tabindex="-1"><a class="header-anchor" href="#goto语句" aria-hidden="true">#</a> goto语句</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// 局部变量声明</span>
   <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
   <span class="token comment">// do 循环执行</span>
   LOOP<span class="token operator">:</span><span class="token keyword">do</span>
   <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span> a <span class="token operator">==</span> <span class="token number">15</span><span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
          <span class="token comment">// 跳过迭代</span>
          a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">goto</span> LOOP<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a 的值：&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
       a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[o];function c(i,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","06.程序流程结构.html.vue"]]);export{u as default};
