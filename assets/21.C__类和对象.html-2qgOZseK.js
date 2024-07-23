import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app--d_SyiCc.js";const t={},c=e(`<h2 id="类访问修饰符" tabindex="-1"><a class="header-anchor" href="#类访问修饰符" aria-hidden="true">#</a> 类访问修饰符</h2><h2 id="c-类定义" tabindex="-1"><a class="header-anchor" href="#c-类定义" aria-hidden="true">#</a> C++ 类定义</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class 类名<span class="token operator">:</span> 继承方式 基类<span class="token number">1</span><span class="token punctuation">,</span> 基类<span class="token number">2</span><span class="token punctuation">,</span> 基类<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 公有成员</span>
   public<span class="token operator">:</span>
      <span class="token keyword">double</span> length<span class="token punctuation">;</span>   <span class="token comment">// 盒子的长度</span>
      <span class="token keyword">double</span> breadth<span class="token punctuation">;</span>  <span class="token comment">// 盒子的宽度</span>
      <span class="token keyword">double</span> height<span class="token punctuation">;</span>   <span class="token comment">// 盒子的高度</span>
      <span class="token comment">// 构造函数</span>
      类名<span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 析构函数</span>
      <span class="token operator">~</span>类名<span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
      返回类型 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> xx<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> 
   <span class="token comment">// 受保护成员</span>
   protected<span class="token operator">:</span>
   <span class="token comment">// 私有成员</span>
   private<span class="token operator">:</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>Box Box1<span class="token punctuation">;</span>          <span class="token comment">// 声明 Box1，类型为 Box</span>
Box Box2<span class="token punctuation">;</span>          <span class="token comment">// 声明 Box2，类型为 Box</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承类型" tabindex="-1"><a class="header-anchor" href="#继承类型" aria-hidden="true">#</a> 继承类型</h2><p><strong>公有继承（public）</strong>：当一个类派生自公有基类时，基类的公有成员也是派生类的公有成员，基类的保护成员也是派生类的保护成员，基类的私有成员不能直接被派生类访问，但是可以通过调用基类的公有和保护成员来访问。</p><p><strong>保护继承（protected）</strong>： 当一个类派生自保护基类时，基类的公有和保护成员将成为派生类的保护成员。</p><p><strong>私有继承（private）</strong>：当一个类派生自私有基类时，基类的公有和保护成员将成为派生类的私有成员。</p><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><p>纯虚函数</p>`,11),i=[c];function o(p,l){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","21.C__类和对象.html.vue"]]);export{u as default};
