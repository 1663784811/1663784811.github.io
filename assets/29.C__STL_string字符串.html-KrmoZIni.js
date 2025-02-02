import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-SNqnN-Pf.js";const p={},e=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;StringTest.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token class-name">StringTest</span><span class="token double-colon punctuation">::</span><span class="token function">StringTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    string str <span class="token operator">=</span> <span class="token string">&quot;StringTest&quot;</span><span class="token punctuation">;</span>
    string <span class="token function">s1</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    s1<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    s1 <span class="token operator">+=</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">;</span>
    s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;append&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s1 <span class="token operator">+=</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">int</span> p <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    p <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">rfind</span><span class="token punctuation">(</span><span class="token string">&quot;n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    s1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


    <span class="token keyword">int</span> compare <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>compare <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; equale &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; not equle &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cout <span class="token operator">&lt;&lt;</span> s1<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    s1<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    s1<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;sssssssss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    s1<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    string s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> s2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    
<span class="token punctuation">}</span>

<span class="token class-name">StringTest</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">StringTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","29.C__STL_string字符串.html.vue"]]);export{k as default};
