import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as i,c,b as n,d as s,e as p,a as o}from"./app-ZNz1llaj.js";const l={},r=n("h3",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),s(" 资料")],-1),u={href:"https://doc.embedfire.com/products/link/zh/latest/mcu/stm32/ebf_stm32f103_zhinanzhe/download/stm32f103_zhinanzhe.html",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>STM32微控制器具有直接存储器访问（DMA）控制器，<br> 可以在外设和存储器之间提供高效的数据传输， 无需CPU干预。<br> DMA功能通常在需要高速数据传输的情况下使用，<br> 例如音频处理、图像处理、通信接口等。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>DMA 请求 <br> DMA 通道 <br> DMA 仲裁器 <br></p><h2 id="支持方式" tabindex="-1"><a class="header-anchor" href="#支持方式" aria-hidden="true">#</a> 支持方式</h2><h3 id="_1-存储器到存储器-m2m-传输" tabindex="-1"><a class="header-anchor" href="#_1-存储器到存储器-m2m-传输" aria-hidden="true">#</a> 1.存储器到存储器（M2M）传输</h3><h3 id="_2-存储器到外设-m2p-传输" tabindex="-1"><a class="header-anchor" href="#_2-存储器到外设-m2p-传输" aria-hidden="true">#</a> 2.存储器到外设（M2P）传输</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
  * @brief  USARTx TX DMA 配置，内存到外设(USART1-&gt;DR)
  * @param  无
  * @retval 无
  */</span>
<span class="token keyword">void</span> <span class="token function">USARTx_DMA_Config</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
		DMA_InitTypeDef DMA_InitStructure<span class="token punctuation">;</span>
	
		<span class="token comment">// 开启DMA时钟</span>
		<span class="token function">RCC_AHBPeriphClockCmd</span><span class="token punctuation">(</span>RCC_AHBPeriph_DMA1<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 设置DMA源地址：串口数据寄存器地址*/</span>
    DMA_InitStructure<span class="token punctuation">.</span>DMA_PeripheralBaseAddr <span class="token operator">=</span> USART_DR_ADDRESS<span class="token punctuation">;</span>
		<span class="token comment">// 内存地址(要传输的变量的指针)</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_MemoryBaseAddr <span class="token operator">=</span> <span class="token punctuation">(</span>u32<span class="token punctuation">)</span>SendBuff<span class="token punctuation">;</span>
		<span class="token comment">// 方向：从内存到外设	</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_DIR <span class="token operator">=</span> DMA_DIR_PeripheralDST<span class="token punctuation">;</span>
		<span class="token comment">// 传输大小	</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_BufferSize <span class="token operator">=</span> SENDBUFF_SIZE<span class="token punctuation">;</span>
		<span class="token comment">// 外设地址不增	    </span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_PeripheralInc <span class="token operator">=</span> DMA_PeripheralInc_Disable<span class="token punctuation">;</span>
		<span class="token comment">// 内存地址自增</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_MemoryInc <span class="token operator">=</span> DMA_MemoryInc_Enable<span class="token punctuation">;</span>
		<span class="token comment">// 外设数据单位	</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_PeripheralDataSize <span class="token operator">=</span> 
	  DMA_PeripheralDataSize_Byte<span class="token punctuation">;</span>
		<span class="token comment">// 内存数据单位</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_MemoryDataSize <span class="token operator">=</span> DMA_MemoryDataSize_Byte<span class="token punctuation">;</span>	 
		<span class="token comment">// DMA模式，一次或者循环模式</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_Mode <span class="token operator">=</span> DMA_Mode_Normal <span class="token punctuation">;</span>
		<span class="token comment">//DMA_InitStructure.DMA_Mode = DMA_Mode_Circular;	</span>
		<span class="token comment">// 优先级：中	</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_Priority <span class="token operator">=</span> DMA_Priority_Medium<span class="token punctuation">;</span> 
		<span class="token comment">// 禁止内存到内存的传输</span>
		DMA_InitStructure<span class="token punctuation">.</span>DMA_M2M <span class="token operator">=</span> DMA_M2M_Disable<span class="token punctuation">;</span>
		<span class="token comment">// 配置DMA通道		   </span>
		<span class="token function">DMA_Init</span><span class="token punctuation">(</span>USART_TX_DMA_CHANNEL<span class="token punctuation">,</span> <span class="token operator">&amp;</span>DMA_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>		
		<span class="token comment">// 使能DMA</span>
		<span class="token function">DMA_Cmd</span> <span class="token punctuation">(</span>USART_TX_DMA_CHANNEL<span class="token punctuation">,</span>ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-外设到存储器-p2m-传输" tabindex="-1"><a class="header-anchor" href="#_3-外设到存储器-p2m-传输" aria-hidden="true">#</a> 3.外设到存储器（P2M）传输</h3>`,8);function m(_,v){const a=e("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[n("a",u,[s("指南者资料"),p(a)])]),d])}const A=t(l,[["render",m],["__file","05.STM32DMA.html.vue"]]);export{A as default};
