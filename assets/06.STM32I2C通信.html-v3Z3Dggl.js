import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as o,b as n,d as s,e,a as i}from"./app-6_i_Rtq6.js";const l="/assets/img_22-rxrReTQW.png",u="/assets/img_21-8McFdD9v.png",r="/assets/img_23-8SJEP-Bp.png",d={},k=n("h2",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),s(" 资料")],-1),v={href:"https://doc.embedfire.com/products/link/zh/latest/mcu/stm32/ebf_stm32f103_zhinanzhe/download/stm32f103_zhinanzhe.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[n("a",{href:"../%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE/03.I2C%E5%8D%8F%E8%AE%AE"},"I2C基础")],-1),_={href:"https://github.com/1663784811/1663784811.github.io/blob/main/docs/%E7%A1%AC%E4%BB%B6/STM32/AT24C02.pdf",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="接线" tabindex="-1"><a class="header-anchor" href="#接线" aria-hidden="true">#</a> 接线</h2><p><img src="'+l+'" alt="img_22.png"></p><p><img src="'+u+'" alt="img_21.png"></p><h2 id="通信协议-stm32f103vet6" tabindex="-1"><a class="header-anchor" href="#通信协议-stm32f103vet6" aria-hidden="true">#</a> 通信协议 (STM32F103VET6)</h2><p><img src="'+r+`" alt="img_23.png"></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><h3 id="第一步-初始化i2c" tabindex="-1"><a class="header-anchor" href="#第一步-初始化i2c" aria-hidden="true">#</a> 第一步: 初始化I2C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token comment">/**************************I2C参数定义，I2C1或I2C2********************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2Cx</span>                                <span class="token expression">I2C1</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_APBxClock_FUN</span>                   <span class="token expression">RCC_APB1PeriphClockCmd</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_CLK</span>                             <span class="token expression">RCC_APB1Periph_I2C1</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_GPIO_APBxClock_FUN</span>              <span class="token expression">RCC_APB2PeriphClockCmd</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_GPIO_CLK</span>                        <span class="token expression">RCC_APB2Periph_GPIOB     </span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_SCL_PORT</span>                        <span class="token expression">GPIOB   </span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_SCL_PIN</span>                         <span class="token expression">GPIO_Pin_6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_SDA_PORT</span>                        <span class="token expression">GPIOB </span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>             <span class="token macro-name">EEPROM_I2C_SDA_PIN</span>                         <span class="token expression">GPIO_Pin_7</span></span>

<span class="token comment">/* 这个地址只要与STM32外挂的I2C器件地址不一样即可 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">I2Cx_OWN_ADDRESS7</span>      <span class="token expression"><span class="token number">0X0A</span>   </span></span>
<span class="token comment">/* STM32 I2C 快速模式 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">I2C_Speed</span>              <span class="token expression"><span class="token number">400000</span>  </span><span class="token comment">//*</span>
<span class="token comment">/* EEPROM Addresses defines */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EEPROM_Block0_ADDRESS</span> <span class="token expression"><span class="token number">0xA0</span>   </span><span class="token comment">/* E2 = 0 */</span></span>

<span class="token comment">/******************************************************/</span>

GPIO_InitTypeDef  GPIO_InitStructure<span class="token punctuation">;</span> 

<span class="token comment">/* 使能与 I2C 有关的时钟 */</span>
<span class="token function">EEPROM_I2C_APBxClock_FUN</span> <span class="token punctuation">(</span> EEPROM_I2C_CLK<span class="token punctuation">,</span> ENABLE <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">EEPROM_I2C_GPIO_APBxClock_FUN</span> <span class="token punctuation">(</span> EEPROM_I2C_GPIO_CLK<span class="token punctuation">,</span> ENABLE <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* I2C_SCL、I2C_SDA*/</span>
GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Pin <span class="token operator">=</span> EEPROM_I2C_SCL_PIN<span class="token punctuation">;</span>
GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Speed <span class="token operator">=</span> GPIO_Speed_50MHz<span class="token punctuation">;</span>
GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Mode <span class="token operator">=</span> GPIO_Mode_AF_OD<span class="token punctuation">;</span>	       <span class="token comment">// 开漏输出</span>
<span class="token function">GPIO_Init</span><span class="token punctuation">(</span>EEPROM_I2C_SCL_PORT<span class="token punctuation">,</span> <span class="token operator">&amp;</span>GPIO_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>

GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Pin <span class="token operator">=</span> EEPROM_I2C_SDA_PIN<span class="token punctuation">;</span>
GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Speed <span class="token operator">=</span> GPIO_Speed_50MHz<span class="token punctuation">;</span>
GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Mode <span class="token operator">=</span> GPIO_Mode_AF_OD<span class="token punctuation">;</span>	       <span class="token comment">// 开漏输出</span>
<span class="token function">GPIO_Init</span><span class="token punctuation">(</span>EEPROM_I2C_SDA_PORT<span class="token punctuation">,</span> <span class="token operator">&amp;</span>GPIO_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-i2c-工作模式配置" tabindex="-1"><a class="header-anchor" href="#第二步-i2c-工作模式配置" aria-hidden="true">#</a> 第二步: I2C 工作模式配置</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>I2C_InitTypeDef  I2C_InitStructure<span class="token punctuation">;</span> 
<span class="token comment">/* I2C 配置 */</span>
I2C_InitStructure<span class="token punctuation">.</span>I2C_Mode <span class="token operator">=</span> I2C_Mode_I2C<span class="token punctuation">;</span>
<span class="token comment">/* 高电平数据稳定，低电平数据变化 SCL 时钟线的占空比 */</span>
I2C_InitStructure<span class="token punctuation">.</span>I2C_DutyCycle <span class="token operator">=</span> I2C_DutyCycle_2<span class="token punctuation">;</span>
I2C_InitStructure<span class="token punctuation">.</span>I2C_OwnAddress1 <span class="token operator">=</span>I2Cx_OWN_ADDRESS7<span class="token punctuation">;</span> 
I2C_InitStructure<span class="token punctuation">.</span>I2C_Ack <span class="token operator">=</span> I2C_Ack_Enable <span class="token punctuation">;</span>
<span class="token comment">/* I2C的寻址模式 */</span>
I2C_InitStructure<span class="token punctuation">.</span>I2C_AcknowledgedAddress <span class="token operator">=</span> I2C_AcknowledgedAddress_7bit<span class="token punctuation">;</span>
<span class="token comment">/* 通信速率 */</span>
I2C_InitStructure<span class="token punctuation">.</span>I2C_ClockSpeed <span class="token operator">=</span> I2C_Speed<span class="token punctuation">;</span>
<span class="token comment">/* I2C 初始化 */</span>
<span class="token function">I2C_Init</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>I2C_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 使能 I2C */</span>
<span class="token function">I2C_Cmd</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>   

EEPROM_ADDRESS <span class="token operator">=</span> EEPROM_Block0_ADDRESS<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-发送数据" tabindex="-1"><a class="header-anchor" href="#第三步-发送数据" aria-hidden="true">#</a> 第三步: 发送数据</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
  * @brief   写一个字节到I2C EEPROM中
  * @param   
  *		@arg pBuffer:缓冲区指针
  *		@arg WriteAddr:写地址 
  * @retval  无
  */</span>
<span class="token class-name">uint32_t</span> <span class="token function">I2C_EE_ByteWrite</span><span class="token punctuation">(</span>u8<span class="token operator">*</span> pBuffer<span class="token punctuation">,</span> u8 WriteAddr<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token comment">/* 发送开始状态 */</span>
  <span class="token function">I2C_GenerateSTART</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>

  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>  
  <span class="token comment">/* 检测 EV5 标记寄存器, 是将开始状态发送出去 */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_MODE_SELECT<span class="token punctuation">)</span><span class="token punctuation">)</span>  
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* 发送写地址 ( 设备地址 + 0  ) */</span>
  <span class="token function">I2C_Send7bitAddress</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> EEPROM_ADDRESS<span class="token punctuation">,</span> I2C_Direction_Transmitter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">/* 检测标记寄存器 EV6  , 判断是否有设备应答 */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
  <span class="token comment">/* 发送EEPROM的写地址 */</span>
  <span class="token function">I2C_SendData</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> WriteAddr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* 检测标记寄存器 EV8  */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_BYTE_TRANSMITTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  
  <span class="token comment">/* 发送一个字节数据 */</span>
  <span class="token function">I2C_SendData</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> <span class="token operator">*</span>pBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>  
  <span class="token comment">/* 检测标记寄存器 EV8 */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_BYTE_TRANSMITTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  
  <span class="token comment">/* 发送停止状态 */</span>
  <span class="token function">I2C_GenerateSTOP</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四步-接收数据" tabindex="-1"><a class="header-anchor" href="#第四步-接收数据" aria-hidden="true">#</a> 第四步: 接收数据</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
  * @brief   从EEPROM里面读取一块数据 
  * @param   
  *		@arg pBuffer:存放从EEPROM读取的数据的缓冲区指针
  *		@arg WriteAddr:接收数据的EEPROM的地址
  *     @arg NumByteToWrite:要从EEPROM读取的字节数
  * @retval  无
  */</span>
<span class="token class-name">uint32_t</span> <span class="token function">I2C_EE_BufferRead</span><span class="token punctuation">(</span>u8<span class="token operator">*</span> pBuffer<span class="token punctuation">,</span> u8 ReadAddr<span class="token punctuation">,</span> u16 NumByteToRead<span class="token punctuation">)</span>
<span class="token punctuation">{</span>  
  
  I2CTimeout <span class="token operator">=</span> I2CT_LONG_TIMEOUT<span class="token punctuation">;</span>
  
  <span class="token comment">//*((u8 *)0x4001080c) |=0x80; </span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">I2C_GetFlagStatus</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_FLAG_BUSY<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  
  <span class="token comment">/* Send START condition */</span>
  <span class="token function">I2C_GenerateSTART</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//*((u8 *)0x4001080c) &amp;=~0x80;</span>
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* Test on EV5 and clear it */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_MODE_SELECT<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  
  <span class="token comment">/* Send EEPROM address for write */</span>
  <span class="token function">I2C_Send7bitAddress</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> EEPROM_ADDRESS<span class="token punctuation">,</span> I2C_Direction_Transmitter<span class="token punctuation">)</span><span class="token punctuation">;</span>

  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* Test on EV6 and clear it */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
    
  <span class="token comment">/* Clear EV6 by setting again the PE bit */</span>
  <span class="token function">I2C_Cmd</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* Send the EEPROM&#39;s internal address to write to */</span>
  <span class="token function">I2C_SendData</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ReadAddr<span class="token punctuation">)</span><span class="token punctuation">;</span>  

   
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* Test on EV8 and clear it */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_BYTE_TRANSMITTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
    
  <span class="token comment">/* Send STRAT condition a second time */</span>  
  <span class="token function">I2C_GenerateSTART</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* Test on EV5 and clear it */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_MODE_SELECT<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
    
  <span class="token comment">/* Send EEPROM address for read */</span>
  <span class="token function">I2C_Send7bitAddress</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> EEPROM_ADDRESS<span class="token punctuation">,</span> I2C_Direction_Receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  I2CTimeout <span class="token operator">=</span> I2CT_FLAG_TIMEOUT<span class="token punctuation">;</span>
  <span class="token comment">/* Test on EV6 and clear it */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_RECEIVER_MODE_SELECTED<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  
  <span class="token comment">/* While there is data to be read */</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>NumByteToRead<span class="token punctuation">)</span>  
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>NumByteToRead <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">/* Disable Acknowledgement */</span>
      <span class="token function">I2C_AcknowledgeConfig</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> DISABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">/* Send STOP Condition */</span>
      <span class="token function">I2C_GenerateSTOP</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* Test on EV7 and clear it */</span>    
    I2CTimeout <span class="token operator">=</span> I2CT_LONG_TIMEOUT<span class="token punctuation">;</span>
    
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">I2C_CheckEvent</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> I2C_EVENT_MASTER_BYTE_RECEIVED<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>  
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>I2CTimeout<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">I2C_TIMEOUT_UserCallback</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
    <span class="token punctuation">{</span>      
      <span class="token comment">/* Read a byte from the EEPROM */</span>
      <span class="token operator">*</span>pBuffer <span class="token operator">=</span> <span class="token function">I2C_ReceiveData</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">/* Point to the next location where the byte read will be saved */</span>
      pBuffer<span class="token operator">++</span><span class="token punctuation">;</span> 
      
      <span class="token comment">/* Decrement the read bytes counter */</span>
      NumByteToRead<span class="token operator">--</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>   
  <span class="token punctuation">}</span>

  <span class="token comment">/* Enable Acknowledgement to be ready for another reception */</span>
  <span class="token function">I2C_AcknowledgeConfig</span><span class="token punctuation">(</span>EEPROM_I2Cx<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function E(I,C){const a=p("ExternalLinkIcon");return c(),o("div",null,[k,n("p",null,[n("a",v,[s("指南者资料"),e(a)])]),m,n("p",null,[n("a",_,[s("EEPROM 数据手册 AT24C02.pdf"),e(a)])]),b])}const h=t(d,[["render",E],["__file","06.STM32I2C通信.html.vue"]]);export{h as default};
