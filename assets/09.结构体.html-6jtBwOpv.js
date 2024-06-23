import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-8chMZ8X4.js";const e={},p=t(`<h2 id="结构体-struct" tabindex="-1"><a class="header-anchor" href="#结构体-struct" aria-hidden="true">#</a> 结构体 ( struct )</h2><p>结构体是一种用户定义的复合数据类型，用于表示一组相关联的数据项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct 结构体名称 {
    数据类型1 成员1;
    数据类型2 成员2;
    // 更多成员...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> a<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> b<span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;width: %d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height: %d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="共用体-union" tabindex="-1"><a class="header-anchor" href="#共用体-union" aria-hidden="true">#</a> 共用体（union）</h2><p>共用体是一种特殊的数据类型，它允许在<strong>同一个内存位置</strong>存储不同类型的数据。共用体的所有成员共享同一块内存空间，因此共用体的大小取决于它的最大成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>union 共用体名称 {
    数据类型1 成员1;
    数据类型2 成员2;
    // 更多成员...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">union</span>  Rectangle <span class="token punctuation">{</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">union</span> Rectangle a<span class="token punctuation">;</span>
    <span class="token keyword">union</span> Rectangle b<span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;width: %d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height: %d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;width: %d \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height: %d \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>1.结构体用于组织不同类型的数据，每个成员都有自己的内存空间，可以同时存储多个数据；<br> 2.共用体用于节省内存空间，所有成员共享同一块内存，只能同时存储一个数据。</p>`,10),i=[p];function c(o,u){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","09.结构体.html.vue"]]);export{r as default};
