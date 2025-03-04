import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-ML6kfvSb.js";const s={},l=d(`<h2 id="静态库与动态库的区别" tabindex="-1"><a class="header-anchor" href="#静态库与动态库的区别" aria-hidden="true">#</a> 静态库与动态库的区别</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                静态库（.a）                         动态库（.so）
文件格式	    .a（在 Windows 上是 .lib）               .so（在 Windows 上是 .dll）
链接方式	    编译时 链接到可执行文件                    运行时 由系统动态加载
可执行文件大小	较大，因为库的代码被复制到可执行文件中        较小，因为库代码不包含在可执行文件内
运行时共享	不能共享，所有程序都包含自己的库副本         多个程序可共享 相同的库，节省内存
修改与更新	需要重新编译整个程序                      可以直接更新库 而无需重新编译主程序
加载方式	    直接加载（无需额外的库文件）                运行时加载（依赖 LD_LIBRARY_PATH 或 /etc/ld.so.conf）
适用于	    嵌入式系统、独立应用，不依赖外部库           系统级库、插件、共享库（如 glibc、libstdc++）


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态库制作过程" tabindex="-1"><a class="header-anchor" href="#静态库制作过程" aria-hidden="true">#</a> 静态库制作过程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.编写源文件
    a.c a.h 
    b.c b.h 
    c.c c.h

2.编译生成目标文件
    gcc -c a.c b.c c.c
    生成 a.o b.o c.o

3.创建静态库
ar rcs libmath.a a.o b.o c.o

参数说明：
    r：添加文件到库（如果已存在则替换）
    c：创建库（如果库不存在）
    s：创建索引，加快链接速度

生成文件 libmath.a

4.使用静态库
gcc main.c -L. -lmath -o main
参数说明：
    -L.：指定当前目录搜索库文件
    -lmath：链接 libmath.a（去掉 lib 和 .a）


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态库制作过程" tabindex="-1"><a class="header-anchor" href="#动态库制作过程" aria-hidden="true">#</a> 动态库制作过程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.编写源文件
    a.c a.h 
    b.c b.h 
    c.c c.h
    
步骤 2：编译
gcc -fPIC -c a.c b.c c.c

    
步骤 3：创建动态库
    gcc -shared -o libmath.so a.o b.o c.o
生成文件：
    libmath.so

4.使用动态库
gcc main.c -L. -lmath -o main
    -L.：指定当前目录搜索库文件
    -lmath：链接 libmath.so（去掉 lib 和 .so）


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function c(v,r){return n(),e("div",null,a)}const u=i(s,[["render",c],["__file","02.静态库和动态库.html.vue"]]);export{u as default};
