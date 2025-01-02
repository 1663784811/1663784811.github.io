import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-ytEAYCZ3.js";const d={},l=s(`<p><strong>重要提示</strong>: 熟悉每个编译过程有助于解决奇奇怪怪的问题</p><p><strong>比如:</strong> 可以查看预处理结果文件,最终要编译的代码是什么</p><p>gcc ***.c</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
1.预处理
    译过程的第一步预就是预处理，与处理结束后会产生一个后缀为(.i)的临时文件，这一步由预处理器完成。预处理器主要完成以下任务。
        删除所有的注释
        宏扩展
        文件包含

    g++ -E text.cpp -o text.i
    

2.编译
    C 中的编译阶段使用内置编译器软件将 （.i） 
    临时文件转换为具有汇编级指令（低级代码）的汇编文件 （.s）。
    汇编代码是一种简单的英文语言，用于编写低级指令（在微控制器程序中，我们使用汇编语言）。
    整个程序代码由编译器软件一次性解析（语法分析），并通过终端窗口告诉我们源代码中存在的任何语法错误或警告。
    
    g++ -S text.i -o text.s
    
3.汇编
    使用汇编程序将程序集级代码（.s 文件）转换为机器可理解的代码（二进制/十六进制形式）。
    汇编程序是一个预先编写的程序，它将汇编代码转换为机器代码。
    它从汇编文件中获取基本指令，并将其转换为特定于计算机类型（称为目标代码）的二进制/十六进制代码。
    
    g++ -c text.s -o text.o
    
4.连接 
    链接是将库文件包含在我们的程序中的过程。
    库文件是一些预定义的文件，其中包含机器语言中的函数定义，这些文件的扩展名为.lib。
    链接过程会生成一个可执行文件，其扩展名为 .exe 在Linux 操作系统中为 .out
    
    g++ text.o -o mybin
    
    ld.exe 连接器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[l];function c(r,a){return i(),e("div",null,v)}const u=n(d,[["render",c],["__file","02.C编译过程.html.vue"]]);export{u as default};
