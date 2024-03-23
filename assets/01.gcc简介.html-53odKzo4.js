import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-8pttA6_c.js";const d={},s=a(`<h3 id="编译软件" tabindex="-1"><a class="header-anchor" href="#编译软件" aria-hidden="true">#</a> 编译软件</h3><p>gcc -&gt; make -&gt; cmake</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make  :  MakeFile
cmake :  CMakeLists.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gcc-安装" tabindex="-1"><a class="header-anchor" href="#gcc-安装" aria-hidden="true">#</a> GCC 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>======  windows
下载: mingw64
下载地址: https://sourceforge.net/projects/mingw-w64/

====== linux 
yum -y gcc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-预处理" tabindex="-1"><a class="header-anchor" href="#_1-预处理" aria-hidden="true">#</a> 1.预处理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>译过程的第一步预就是预处理，与处理结束后会产生一个后缀为(.i)的临时文件，这一步由预处理器完成。预处理器主要完成以下任务。
    删除所有的注释
    宏扩展
    文件包含
g++ -E text.cpp -o text.i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-编译" tabindex="-1"><a class="header-anchor" href="#_2-编译" aria-hidden="true">#</a> 2.编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C 中的编译阶段使用内置编译器软件将 （.i） 
临时文件转换为具有汇编级指令（低级代码）的汇编文件 （.s）。
汇编代码是一种简单的英文语言，用于编写低级指令（在微控制器程序中，我们使用汇编语言）。
整个程序代码由编译器软件一次性解析（语法分析），并通过终端窗口告诉我们源代码中存在的任何语法错误或警告。
g++ -S text.i -o text.s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-汇编" tabindex="-1"><a class="header-anchor" href="#_3-汇编" aria-hidden="true">#</a> 3.汇编</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用汇编程序将程序集级代码（.s 文件）转换为机器可理解的代码（二进制/十六进制形式）。
汇编程序是一个预先编写的程序，它将汇编代码转换为机器代码。
它从汇编文件中获取基本指令，并将其转换为特定于计算机类型（称为目标代码）的二进制/十六进制代码。
g++ -c text.s -o text.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-连接" tabindex="-1"><a class="header-anchor" href="#_4-连接" aria-hidden="true">#</a> 4.连接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>链接是将库文件包含在我们的程序中的过程。
库文件是一些预定义的文件，其中包含机器语言中的函数定义，这些文件的扩展名为.lib。
链接过程会生成一个可执行文件，其扩展名为 .exe 在Linux 操作系统中为 .out
g++ text.o -o mybin
ld.exe 连接器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[s];function r(t,c){return i(),n("div",null,l)}const m=e(d,[["render",r],["__file","01.gcc简介.html.vue"]]);export{m as default};
