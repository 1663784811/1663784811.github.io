import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-PoU5pAeB.js";const t={},i=e(`<p>引用变量是一个别名，也就是说，它是某个已存在变量的另一个名字。 一旦把引用初始化为某个变量，就可以使用该引用名称或变量名称来指向变量</p><p>引用很容易与指针混淆，它们之间有三个主要的不同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不存在空引用。引用必须连接到一块合法的内存。

一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。

引用必须在创建时被初始化。指针可以在任何时间被初始化。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-中创建引用" tabindex="-1"><a class="header-anchor" href="#c-中创建引用" aria-hidden="true">#</a> C++ 中创建引用</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
 
using namespace std<span class="token punctuation">;</span>
 
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// 声明简单的变量</span>
   <span class="token keyword">int</span>    i<span class="token punctuation">;</span>
   <span class="token keyword">double</span> d<span class="token punctuation">;</span>
 
   <span class="token comment">// 声明引用变量</span>
   <span class="token keyword">int</span><span class="token operator">&amp;</span>    r <span class="token operator">=</span> i<span class="token punctuation">;</span>
   <span class="token keyword">double</span><span class="token operator">&amp;</span> s <span class="token operator">=</span> d<span class="token punctuation">;</span>
   
   i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of i : &quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of i reference : &quot;</span> <span class="token operator">&lt;&lt;</span> r  <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
 
   d <span class="token operator">=</span> <span class="token number">11.7</span><span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of d : &quot;</span> <span class="token operator">&lt;&lt;</span> d <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of d reference : &quot;</span> <span class="token operator">&lt;&lt;</span> s  <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
   
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-引用作为函数参数" tabindex="-1"><a class="header-anchor" href="#c-引用作为函数参数" aria-hidden="true">#</a> C++ 引用作为函数参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-引用作为函数返回值" tabindex="-1"><a class="header-anchor" href="#c-引用作为函数返回值" aria-hidden="true">#</a> C++ 引用作为函数返回值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[i];function c(o,p){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","19.C__引用.html.vue"]]);export{u as default};
