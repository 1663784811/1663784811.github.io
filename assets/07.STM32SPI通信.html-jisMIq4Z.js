import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c,b as n,d as s,e as o,a as i}from"./app-xVnx8adb.js";const l={},u=n("h3",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),s(" 资料")],-1),d={href:"https://doc.embedfire.com/products/link/zh/latest/mcu/stm32/ebf_stm32f103_zhinanzhe/download/stm32f103_zhinanzhe.html",target:"_blank",rel:"noopener noreferrer"},r=i(`<p><a href="../%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE/04.SPI%E9%80%9A%E4%BF%A1">参考</a></p><h3 id="通信过程" tabindex="-1"><a class="header-anchor" href="#通信过程" aria-hidden="true">#</a> 通信过程</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">LCD_Writ_Bus</span><span class="token punctuation">(</span>u8 dat<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>	
	u8 i<span class="token punctuation">;</span>
	<span class="token function">LCD_CS_Clr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//拉低选择与显示屏通信------------------ spi选择线  CS   </span>
	<span class="token comment">// 传输 8个bit</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>	
		<span class="token comment">// 电钟线拉低      					 -----------------     spi 的  SCLK 线</span>
		<span class="token function">LCD_SCLK_Clr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 数据 &amp; </span>
		<span class="token comment">//       数据  1111 1111</span>
		<span class="token comment">//       0x80  1000 0000</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>dat<span class="token operator">&amp;</span><span class="token number">0x80</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			 <span class="token comment">// 数据 &amp; 后为1 拉高电平   -----------------     spi 的 MOSI 线</span>
		   <span class="token function">LCD_MOSI_Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 数据 &amp; 后为0 拉低电平   -----------------     spi 的 MOSI 线</span>
		  <span class="token function">LCD_MOSI_Clr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 电钟线拉高      					 -----------------     spi 的  SCLK 线</span>
		<span class="token function">LCD_SCLK_Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 左移一位传下数据   例 1111 1111  左移一位后 1111 11110</span>
		dat<span class="token operator">&lt;&lt;=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
  <span class="token function">LCD_CS_Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	 <span class="token comment">//拉高数据传输结束 ----------------   spi 的  SCLK 线 </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(k,v){const a=e("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[s("指南者资料"),o(a)])]),r])}const h=t(l,[["render",m],["__file","07.STM32SPI通信.html.vue"]]);export{h as default};
