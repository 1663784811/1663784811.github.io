import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-JwWGHoxs.js";const d={},l=s(`<p><strong>重要提示</strong>: 熟悉每个编译过程有助于解决奇奇怪怪的问题</p><p><strong>比如:</strong> 可以查看预处理结果文件,最终要编译的代码是什么</p><p>gcc ***.c</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gcc-常用参数" tabindex="-1"><a class="header-anchor" href="#gcc-常用参数" aria-hidden="true">#</a> gcc 常用参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>编译和输出 
-c	仅编译，不链接，生成 .o 目标文件
-o &lt;file&gt;	指定输出文件名称
-S	生成汇编代码（.s 文件）
-E	仅进行预处理，不编译
-v	显示详细的编译过程


优化
-O0	不优化，默认
-O1	基本优化
-O2	普通优化，提高执行速度
-O3	高级优化，包含 -O2 并进行额外优化
-Os	优化代码大小，适合嵌入式系统
-Ofast	极端优化，可能不符合标准
-march=&lt;arch&gt;	针对特定 CPU 进行优化（如 -march=armv7-a）
-mtune=&lt;arch&gt;	优化代码运行（但仍可在其他 CPU 上运行）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[l];function a(c,r){return n(),e("div",null,v)}const u=i(d,[["render",a],["__file","02.C编译过程.html.vue"]]);export{u as default};
