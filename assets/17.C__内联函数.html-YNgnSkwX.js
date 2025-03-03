import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-JwWGHoxs.js";const t={},p=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>定义
在普通函数前加 <span class="token keyword">inline</span>

<span class="token keyword">inline</span> <span class="token keyword">void</span> <span class="token function">A</span><span class="token punctuation">(</span> <span class="token keyword">int</span> b <span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> c<span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

调用
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

本质
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> c<span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","17.C__内联函数.html.vue"]]);export{r as default};
