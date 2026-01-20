import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-xRuPrnvT.js";const s={},l=d(`<p>软件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.ModbusPoll
2.ModbusSlave
3.VSPD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modbus-存储区" tabindex="-1"><a class="header-anchor" href="#modbus-存储区" aria-hidden="true">#</a> Modbus 存储区</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
只读
    输入线圈（布尔类型）( 1区 )
    输入寄存器        ( 3区 )
读写
    输出线圈（布尔类型）( 0区 )
    输出寄存器        ( 4区 )

每个存储区的最大范围65535

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能码" tabindex="-1"><a class="header-anchor" href="#功能码" aria-hidden="true">#</a> 功能码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x01   读取输出线圈
0x02   读取输入线圈
0x03   读取输出寄存器
0x04   读取输入寄存器
0x05   写入单个线圈
0x06   写入单个寄存器
0x0F   写入多个线圈
0x10   写入多个寄存器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协议分类" tabindex="-1"><a class="header-anchor" href="#协议分类" aria-hidden="true">#</a> 协议分类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ModbusRTU

ModbusASCII

ModbusTCP

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modbus-rtu" tabindex="-1"><a class="header-anchor" href="#modbus-rtu" aria-hidden="true">#</a> Modbus RTU</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>报文格式
    从站地址( 1个字节 )
    功能码 ( 1个字节 )
    数据部分( N个字节 )
        读取发送
            开始地址
            读取数量
        读取接收
            字节计数
            具体数据
        写入单发送
            具体地址
            写入数据
        写入单接收
            具体地址
            写入数据
        写入多发送
            开始地址
            写入数量
            写入数据
        写入多接收
            写入数量
            写入数据
    校验部分( 2个字节 )
         CRC16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modbus-tcp" tabindex="-1"><a class="header-anchor" href="#modbus-tcp" aria-hidden="true">#</a> Modbus TCP</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MBAP报文头 （7个字节）
    事务处理标识符（报文ID, 2个字节）
    协议标识符 ( 固定 00 00  2个字节 )
    长度 （ 长度之后共的字节数， 2个字节 ）
    单元标识符 （1个字节）
功能码（ 1个字节 ）

数据部分 （ N个字节 ）



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),a=[l];function v(r,c){return i(),n("div",null,a)}const b=e(s,[["render",v],["__file","06.ModBus协议.html.vue"]]);export{b as default};
