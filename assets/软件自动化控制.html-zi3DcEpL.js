import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as l}from"./app-3y-0j7uu.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>==================
dll 注入原理
    首先我们知道在windows上面如果引入一个dll的话，那么需要用到一个函数 loadlibrary() 这个函数是用来引入外部dll的
    因为这个函数在系统的kernel32.dll里面，所有软件都会引入包含这个dll, 而且都是使用同一份，所以在所有软件里面，这个
    dll的基地址是固定的
    我们其实主要是要用到它里面的一个函数， loadlibrary() 地址，你们想，既然所有软件这个dll的基址都是一样，那么它里面
    的函数肯定也是一样的。那这就好办了，我们只需要在我们自己的程序，比如这个注入工具里面自己获取自己的loadlibrary()地
    址，不就知道程序里面的loadlibrary()函数地址了么，
    知道这个地址后,通过进程打开程序获取程序的句柄，然后写入我们的dll的路径，用远程线程方式去执行这个这个函数，程序就自己
    引入我们的dll从而注入到程序内部，这个时候我们想怎么操作程序内存数据都没问题
===================


工具
    onlly Debug
    Cheat Engine 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[s];function r(v,c){return n(),i("div",null,a)}const t=e(d,[["render",r],["__file","软件自动化控制.html.vue"]]);export{t as default};
