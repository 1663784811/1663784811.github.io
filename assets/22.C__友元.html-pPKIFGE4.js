import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-2JEAsQOb.js";const t={},p=e(`<p>C++的友元是用来访问有限制的私有内容</p><h3 id="全局函数友元" tabindex="-1"><a class="header-anchor" href="#全局函数友元" aria-hidden="true">#</a> 全局函数友元</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> secret<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">secret</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 声明全局函数为友元</span>
    <span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">showSecret</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 全局函数定义</span>
<span class="token keyword">void</span> <span class="token function">showSecret</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Secret value: &quot;</span> <span class="token operator">&lt;&lt;</span> obj<span class="token punctuation">.</span>secret <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyClass <span class="token function">obj</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">showSecret</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 访问私有成员</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="友元类" tabindex="-1"><a class="header-anchor" href="#友元类" aria-hidden="true">#</a> 友元类</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> secret<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">secret</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 声明 Friend 类</span>
    <span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">SecretKeeper</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SecretKeeper</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">revealSecret</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Secret value: &quot;</span> <span class="token operator">&lt;&lt;</span> obj<span class="token punctuation">.</span>secret <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyClass <span class="token function">obj</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    SecretKeeper keeper<span class="token punctuation">;</span>
    keeper<span class="token punctuation">.</span><span class="token function">revealSecret</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 访问私有成员</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="友元函数" tabindex="-1"><a class="header-anchor" href="#友元函数" aria-hidden="true">#</a> 友元函数</h3>`,6),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","22.C__友元.html.vue"]]);export{d as default};
