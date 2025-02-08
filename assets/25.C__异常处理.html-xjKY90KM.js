import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-yiSgpiYx.js";const p={},e=t(`<p>throw: 当问题出现时，程序会抛出一个异常。这是通过使用 throw 关键字来完成的。</p><p>catch: 在您想要处理问题的地方，通过异常处理程序捕获异常。catch 关键字用于捕获异常。</p><p>try: try 块中的代码标识将被激活的特定异常。它后面通常跟着一个或多个 catch 块。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;exception&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
 
<span class="token keyword">struct</span> <span class="token class-name">MyException</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">exception</span></span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">what</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">throw</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;C++ Exception&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">try</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>MyException<span class="token operator">&amp;</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;MyException caught&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span><span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>exception<span class="token operator">&amp;</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//其他的错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","25.C__异常处理.html.vue"]]);export{r as default};
