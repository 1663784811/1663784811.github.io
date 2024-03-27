import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-nEtvyeop.js";const t={},i=e(`<h2 id="预处理器" tabindex="-1"><a class="header-anchor" href="#预处理器" aria-hidden="true">#</a> 预处理器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#define	定义宏
#include	包含一个源代码文件
#undef	取消已定义的宏
#ifdef	如果宏已经定义，则返回真
#ifndef	如果宏没有定义，则返回真
#if	如果给定条件为真，则编译下面代码
#else	#if 的替代方案
#elif	如果前面的 #if 给定条件不为真，当前条件为真，则编译下面代码
#endif	结束一个 #if……#else 条件编译块
#error	当遇到标准错误时，输出错误消息
#pragma	使用标准化方法，向编译器发布特殊的命令到编译器中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预定义宏" tabindex="-1"><a class="header-anchor" href="#预定义宏" aria-hidden="true">#</a> 预定义宏</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>__DATE__	当前日期，一个以 &quot;MMM DD YYYY&quot; 格式表示的字符常量。
__TIME__	当前时间，一个以 &quot;HH:MM:SS&quot; 格式表示的字符常量。
__FILE__	这会包含当前文件名，一个字符串常量。
__LINE__	这会包含当前行号，一个十进制常量。
__STDC__	当编译器以 ANSI 标准编译时，则定义为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数化的宏" tabindex="-1"><a class="header-anchor" href="#参数化的宏" aria-hidden="true">#</a> 参数化的宏</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">MAX</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Max between 20 and 10 is %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function p(l,o){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","14.预处理器.html.vue"]]);export{r as default};
