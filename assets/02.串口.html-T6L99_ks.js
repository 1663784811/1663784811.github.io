import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-pQGvvAvV.js";const a={},s=d(`<p>===================================================</p><h2 id="标准" tabindex="-1"><a class="header-anchor" href="#标准" aria-hidden="true">#</a> 标准</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TTL   电平   (  4根线  0-3.3V  )

RS232 标准   (  9根线  -15到15V )
RS422          9根线
RS485          9根线

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>===================================================</p><h2 id="ttl接线" tabindex="-1"><a class="header-anchor" href="#ttl接线" aria-hidden="true">#</a> TTL接线:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   设备1            设备2              
    1. 3v3             3v3
    2. GND             GND
    3. TX              RX
    4. RX              TX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>===================================================</p><h2 id="传输协议" tabindex="-1"><a class="header-anchor" href="#传输协议" aria-hidden="true">#</a> 传输协议</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>串口名  COMx

波特率:
    串口异步通讯中由于没有时钟信号，所以通讯双方需要约定好波特率
    9600  115200  ...

校验位

数据位数

起始位 停止位


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[s];function r(v,c){return i(),n("div",null,l)}const m=e(a,[["render",r],["__file","02.串口.html.vue"]]);export{m as default};
