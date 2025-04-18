import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-ZNz1llaj.js";const d={},l=s(`<p>编写汇编源文件 *.s</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.section .text
.global _start

_start:
    LDR R0, =0x01C20804      ; GPIO_PA_CFG1 寄存器地址
    LDR R1, [R0]             ; 读取当前 PA 配置值
    BIC R1, R1, #(0x7 &lt;&lt; 20) ; 清除 PA17 的配置位 (17 * 4 = 68 bits, 68 / 32 = index in CFG1)
    ORR R1, R1, #(0x1 &lt;&lt; 20) ; 将 PA17 配置为输出 (01 表示输出)
    STR R1, [R0]             ; 写回 GPIO_PA_CFG1

    LDR R0, =0x01C20810      ; GPIO_PA_DATA 寄存器地址
    LDR R1, [R0]             ; 读取当前 PA 数据值
    ORR R1, R1, #(1 &lt;&lt; 17)   ; 将 PA17 拉高 (设置为 1)
    STR R1, [R0]             ; 写回 GPIO_PA_DATA

halt:
    B halt                   ; 死循环停止执行


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译*.s 生成 *.o</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>连接所有*.o 文件 生成 *.elf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>烧写到sd卡</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[l];function t(v,r){return i(),n("div",null,a)}const m=e(d,[["render",t],["__file","02.Linux汇编.html.vue"]]);export{m as default};
