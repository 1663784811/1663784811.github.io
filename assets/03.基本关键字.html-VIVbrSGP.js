import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-K-eMSB5C.js";const i={},l=e(`<h2 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型" aria-hidden="true">#</a> 1.数据类型</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span>
<span class="token keyword">int</span>
<span class="token keyword">long</span>
<span class="token keyword">short</span>
<span class="token keyword">unsigned</span>
<span class="token keyword">signed</span>
<span class="token keyword">float</span>
<span class="token keyword">double</span>
<span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自定义数据类型" tabindex="-1"><a class="header-anchor" href="#_2-自定义数据类型" aria-hidden="true">#</a> 2.自定义数据类型</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span>
<span class="token class-name">union</span>
<span class="token keyword">enum</span>
<span class="token class-name">typedef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-逻辑结构" tabindex="-1"><a class="header-anchor" href="#_3-逻辑结构" aria-hidden="true">#</a> 3.逻辑结构</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token keyword">else</span> 
<span class="token keyword">switch</span> <span class="token keyword">case</span> <span class="token keyword">default</span>
<span class="token keyword">do</span> <span class="token keyword">while</span> <span class="token keyword">for</span>
<span class="token keyword">continue</span> <span class="token keyword">break</span> <span class="token keyword">goto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-类型修饰符" tabindex="-1"><a class="header-anchor" href="#_4-类型修饰符" aria-hidden="true">#</a> 4.类型修饰符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">auto</span>
<span class="token keyword">register</span>
<span class="token keyword">static</span>
<span class="token keyword">const</span>

<span class="token keyword">extern</span>

<span class="token comment">// 在C语言中，volatile关键字用于提示编译器某个变量的值可能会在程序的其他部分（例如硬件、中断服务例程或其他任务）中发生意外的改变</span>
<span class="token keyword">volatile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-算术运算符" tabindex="-1"><a class="header-anchor" href="#_5-算术运算符" aria-hidden="true">#</a> 5.算术运算符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
常量：
    #define URl &quot;http://xxxxx.xxx&quot;
    const long aa = 111L;

    
宏定义：



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预编译" tabindex="-1"><a class="header-anchor" href="#预编译" aria-hidden="true">#</a> 预编译</h2><h2 id="c-98-03关键字共63个" tabindex="-1"><a class="header-anchor" href="#c-98-03关键字共63个" aria-hidden="true">#</a> C++98/03关键字共63个</h2><h3 id="asm" tabindex="-1"><a class="header-anchor" href="#asm" aria-hidden="true">#</a> asm</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>基本语法：
<span class="token keyword">asm</span><span class="token punctuation">(</span><span class="token string">&quot;assembly code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
指定操作数：
<span class="token keyword">asm</span><span class="token punctuation">(</span><span class="token string">&quot;assembly code&quot;</span> <span class="token operator">:</span> output <span class="token operator">:</span> input <span class="token operator">:</span> clobber<span class="token punctuation">)</span><span class="token punctuation">;</span>
扩展<span class="token keyword">asm</span>
<span class="token keyword">asm</span><span class="token punctuation">(</span><span class="token string">&quot;assembly code&quot;</span> <span class="token operator">:</span> output <span class="token operator">:</span> input <span class="token operator">:</span> clobber <span class="token operator">:</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
嵌入汇编中的变量：
<span class="token keyword">asm</span><span class="token punctuation">(</span><span class="token string">&quot;assembly code&quot;</span> <span class="token operator">:</span> <span class="token operator">:</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
汇编模板：
<span class="token keyword">asm</span> <span class="token keyword">volatile</span><span class="token punctuation">(</span><span class="token string">&quot;assembly code&quot;</span> <span class="token operator">:</span> <span class="token operator">:</span> <span class="token operator">:</span> <span class="token string">&quot;memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typedef" tabindex="-1"><a class="header-anchor" href="#typedef" aria-hidden="true">#</a> typedef</h3><p>使用 typedef 为一个已有的类型取一个新的名字</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">1.</span>定义新的类型别名：
<span class="token keyword">typedef</span> <span class="token keyword">int</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">float</span> RealNumber<span class="token punctuation">;</span>

<span class="token number">2.</span>结构体类型的简化：
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Point<span class="token punctuation">;</span>

<span class="token number">3.</span>指针类型的别名：
<span class="token keyword">typedef</span> <span class="token keyword">char</span><span class="token operator">*</span> String<span class="token punctuation">;</span>

<span class="token number">4.</span>枚举类型的简化：
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token punctuation">{</span>
    MON<span class="token punctuation">,</span>
    TUE<span class="token punctuation">,</span>
    WED<span class="token punctuation">,</span>
    THU<span class="token punctuation">,</span>
    FRI
<span class="token punctuation">}</span> Weekday<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token operator">*</span>  <span class="token keyword">do</span>
<span class="token operator">*</span>  <span class="token keyword">if</span>
<span class="token operator">*</span>  <span class="token keyword">return</span>                          
<span class="token keyword">auto</span>
<span class="token operator">*</span>  <span class="token keyword">double</span>
<span class="token operator">*</span>  <span class="token keyword">inline</span>
<span class="token operator">*</span>  <span class="token keyword">short</span>
typeid
<span class="token operator">*</span>  bool
dynamic_cast
<span class="token operator">*</span>  <span class="token keyword">int</span>
<span class="token operator">*</span>  <span class="token keyword">signed</span>
typename
<span class="token keyword">break</span>
<span class="token operator">*</span>  <span class="token keyword">else</span>
<span class="token operator">*</span>  <span class="token keyword">long</span>                                  
<span class="token operator">*</span>  <span class="token keyword">sizeof</span>                                <span class="token keyword">sizeof</span><span class="token punctuation">(</span>变量名<span class="token punctuation">)</span> 查询变量所占用的内存
<span class="token keyword">union</span>
<span class="token operator">*</span>  <span class="token keyword">case</span>
<span class="token keyword">enum</span>
<span class="token class-name">mutable</span>
<span class="token operator">*</span>  <span class="token keyword">static</span>
<span class="token operator">*</span>  <span class="token keyword">unsigned</span>
<span class="token operator">*</span>  catch
explicit
namespace
static_cast
<span class="token operator">*</span>  using
<span class="token operator">*</span>  <span class="token keyword">char</span>
export
<span class="token operator">*</span>  new
<span class="token operator">*</span>  <span class="token keyword">struct</span>
<span class="token class-name">virtual</span>
<span class="token operator">*</span>  class
<span class="token operator">*</span>  <span class="token keyword">extern</span>
operator
<span class="token keyword">switch</span>
<span class="token operator">*</span>  <span class="token keyword">void</span>
<span class="token operator">*</span>  <span class="token keyword">const</span>
<span class="token operator">*</span>  false
private
template
<span class="token keyword">volatile</span>
const_cast
<span class="token operator">*</span>  <span class="token keyword">float</span>
protected
<span class="token operator">*</span>  this
<span class="token class-name">wchar_t</span>
<span class="token keyword">continue</span>
<span class="token operator">*</span>  <span class="token keyword">for</span>
<span class="token operator">*</span>  public
<span class="token operator">*</span>  throw
<span class="token operator">*</span>  <span class="token keyword">while</span>
<span class="token operator">*</span>  <span class="token keyword">default</span>
friend
<span class="token keyword">register</span>
<span class="token operator">*</span>  true
<span class="token operator">*</span>  delete
<span class="token operator">*</span>  <span class="token keyword">goto</span>
reinterpret_cast
<span class="token operator">*</span>  try
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-11-关键字共73个-新增10个关键字" tabindex="-1"><a class="header-anchor" href="#c-11-关键字共73个-新增10个关键字" aria-hidden="true">#</a> C++11 关键字共73个 新增10个关键字：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alignas
alignof
char16_t
char32_t
constexpr
decltype
noexcept
nullptr
static_assert
thread_local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[l];function o(c,t){return s(),a("div",null,d)}const v=n(i,[["render",o],["__file","03.基本关键字.html.vue"]]);export{v as default};
