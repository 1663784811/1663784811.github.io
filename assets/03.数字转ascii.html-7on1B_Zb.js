import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as p,c as t,b as e,e as o,w as c,a as i,d as l}from"./app-925tRyXi.js";const u={},r=i(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">printNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n-----------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printNumber</span><span class="token punctuation">(</span><span class="token number">123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n-----------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> number<span class="token punctuation">;</span>
    <span class="token keyword">int</span> temp2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断有多少位</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        sum<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//打印出结果</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum<span class="token operator">--</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> sum<span class="token punctuation">;</span>
        temp2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp2 <span class="token operator">=</span> temp2 <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
            temp<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token punctuation">(</span>number <span class="token operator">/</span> temp2<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(d,m){const n=a("RouterLink");return p(),t("div",null,[e("p",null,[o(n,{to:"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/c/%E7%A4%BA%E4%BE%8B%E7%A8%8B%E5%BA%8F/03.%E6%95%B0%E5%AD%97%E8%BD%ACascii.html"},{default:c(()=>[l("03.数字转ascii.md")]),_:1})]),r])}const _=s(u,[["render",k],["__file","03.数字转ascii.html.vue"]]);export{_ as default};
