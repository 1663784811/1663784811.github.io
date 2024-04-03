import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c,b as n,d as s,e as i,a as o}from"./app-CeeaJpDY.js";const l="/assets/img_19-YZwoxJqE.png",r="/assets/img_20-oQKoWN_I.png",u={},d=n("h2",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),s(" 资料")],-1),k={href:"https://doc.embedfire.com/products/link/zh/latest/mcu/stm32/ebf_stm32f103_zhinanzhe/download/stm32f103_zhinanzhe.html",target:"_blank",rel:"noopener noreferrer"},m=o('<p><a href="../%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE/02.%E4%B8%B2%E5%8F%A3">串口基础</a></p><h2 id="stm32-串口通信" tabindex="-1"><a class="header-anchor" href="#stm32-串口通信" aria-hidden="true">#</a> STM32 串口通信</h2><p>接线</p><p><img src="'+l+`" alt="img_19.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>串口5-UART5
      STM32                         通信端
  TX  80引脚  C12  ----------------   RX
  RX  83引脚  C2   ----------------   TX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中断函数</p><p><img src="`+r+`" alt="img_20.png"></p><h3 id="收发数据-rx-tx" tabindex="-1"><a class="header-anchor" href="#收发数据-rx-tx" aria-hidden="true">#</a> 收发数据 ( RX TX )</h3><p>需要引入的头文件</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stm32f10x.h&quot;</span></span>

<span class="token comment">// 串口5-UART5</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USARTx</span>                   <span class="token expression">UART5</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_CLK</span>                <span class="token expression">RCC_APB1Periph_UART5</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_APBxClkCmd</span>         <span class="token expression">RCC_APB1PeriphClockCmd</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_BAUDRATE</span>           <span class="token expression"><span class="token number">115200</span></span></span>

<span class="token comment">// USART GPIO 引脚宏定义</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_GPIO_CLK</span>           <span class="token expression"><span class="token punctuation">(</span>RCC_APB2Periph_GPIOC<span class="token operator">|</span>RCC_APB2Periph_GPIOD<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_GPIO_APBxClkCmd</span>    <span class="token expression">RCC_APB2PeriphClockCmd</span></span>
<span class="token comment">// 发送引脚</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_TX_GPIO_PORT</span>       <span class="token expression">GPIOC   </span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_TX_GPIO_PIN</span>        <span class="token expression">GPIO_Pin_12</span></span>
<span class="token comment">// 接收引脚</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_RX_GPIO_PORT</span>       <span class="token expression">GPIOD</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_RX_GPIO_PIN</span>        <span class="token expression">GPIO_Pin_2</span></span>
<span class="token comment">// 接收中断源</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_IRQ</span>                <span class="token expression">UART5_IRQn</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>  <span class="token macro-name">DEBUG_USART_IRQHandler</span>         <span class="token expression">UART5_IRQHandler</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置中断</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token comment">/**
  * @brief  配置嵌套向量中断控制器NVIC
  * @param  无
  * @retval 无
  */</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">NVIC_Configuration</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	GPIO_InitTypeDef GPIO_InitStructure<span class="token punctuation">;</span>
	USART_InitTypeDef USART_InitStructure<span class="token punctuation">;</span>
	<span class="token comment">// 打开串口GPIO的时钟</span>
	<span class="token function">DEBUG_USART_GPIO_APBxClkCmd</span><span class="token punctuation">(</span>DEBUG_USART_GPIO_CLK<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 打开串口外设的时钟</span>
	<span class="token function">DEBUG_USART_APBxClkCmd</span><span class="token punctuation">(</span>DEBUG_USART_CLK<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 将USART Tx的GPIO配置为推挽复用模式</span>
	GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Pin <span class="token operator">=</span> DEBUG_USART_TX_GPIO_PIN<span class="token punctuation">;</span>
	GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Mode <span class="token operator">=</span> GPIO_Mode_AF_PP<span class="token punctuation">;</span>
	GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Speed <span class="token operator">=</span> GPIO_Speed_50MHz<span class="token punctuation">;</span>
	<span class="token function">GPIO_Init</span><span class="token punctuation">(</span>DEBUG_USART_TX_GPIO_PORT<span class="token punctuation">,</span> <span class="token operator">&amp;</span>GPIO_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将USART Rx的GPIO配置为浮空输入模式</span>
	GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Pin <span class="token operator">=</span> DEBUG_USART_RX_GPIO_PIN<span class="token punctuation">;</span>
	GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Mode <span class="token operator">=</span> GPIO_Mode_IN_FLOATING<span class="token punctuation">;</span>
	<span class="token function">GPIO_Init</span><span class="token punctuation">(</span>DEBUG_USART_RX_GPIO_PORT<span class="token punctuation">,</span> <span class="token operator">&amp;</span>GPIO_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// ========================== 配置串口的工作参数</span>
	<span class="token comment">// 配置波特率</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_BaudRate <span class="token operator">=</span> DEBUG_USART_BAUDRATE<span class="token punctuation">;</span>
	<span class="token comment">// 配置 针数据字长</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_WordLength <span class="token operator">=</span> USART_WordLength_8b<span class="token punctuation">;</span>
	<span class="token comment">// 配置停止位</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_StopBits <span class="token operator">=</span> USART_StopBits_1<span class="token punctuation">;</span>
	<span class="token comment">// 配置校验位</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_Parity <span class="token operator">=</span> USART_Parity_No <span class="token punctuation">;</span>
	<span class="token comment">// 配置硬件流控制</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_HardwareFlowControl <span class="token operator">=</span> USART_HardwareFlowControl_None<span class="token punctuation">;</span>
	<span class="token comment">// 配置工作模式，收发一起</span>
	USART_InitStructure<span class="token punctuation">.</span>USART_Mode <span class="token operator">=</span> USART_Mode_Rx <span class="token operator">|</span> USART_Mode_Tx<span class="token punctuation">;</span>
	<span class="token comment">// 完成串口的初始化配置</span>
	<span class="token function">USART_Init</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>USART_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 串口中断优先级配置</span>
	<span class="token function">NVIC_Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 使能串口接收中断</span>
	<span class="token function">USART_ITConfig</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">,</span> USART_IT_RXNE<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token comment">// 使能串口</span>
	<span class="token function">USART_Cmd</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>

<span class="token comment">/*****************  发送一个字符 **********************/</span>
<span class="token keyword">void</span> <span class="token function">Usart_SendByte</span><span class="token punctuation">(</span> USART_TypeDef <span class="token operator">*</span> pUSARTx<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> ch<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">/* 发送一个字节数据到USART */</span>
	<span class="token function">USART_SendData</span><span class="token punctuation">(</span>pUSARTx<span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token comment">/* 等待发送数据寄存器为空 */</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">USART_GetFlagStatus</span><span class="token punctuation">(</span>pUSARTx<span class="token punctuation">,</span> USART_FLAG_TXE<span class="token punctuation">)</span> <span class="token operator">==</span> RESET<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 串口中断服务函数</span>
<span class="token keyword">void</span> <span class="token function">DEBUG_USART_IRQHandler</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name">uint8_t</span> ucTemp<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">USART_GetITStatus</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">,</span>USART_IT_RXNE<span class="token punctuation">)</span><span class="token operator">!=</span>RESET<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>		
		ucTemp <span class="token operator">=</span> <span class="token function">USART_ReceiveData</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">USART_SendData</span><span class="token punctuation">(</span>DEBUG_USARTx<span class="token punctuation">,</span>ucTemp<span class="token punctuation">)</span><span class="token punctuation">;</span>    
	<span class="token punctuation">}</span>	 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function v(_,T){const a=t("ExternalLinkIcon");return p(),c("div",null,[d,n("p",null,[n("a",k,[s("指南者资料"),i(a)])]),m])}const U=e(u,[["render",v],["__file","04.STM32串口通信.html.vue"]]);export{U as default};
