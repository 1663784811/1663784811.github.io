import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as n}from"./app-XUhMUaul.js";const s={},d=n(`<h3 id="编译软件" tabindex="-1"><a class="header-anchor" href="#编译软件" aria-hidden="true">#</a> 编译软件</h3><p>gcc -&gt; make -&gt; cmake</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make  :  MakeFile
cmake :  CMakeLists.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CMake是一个跨平台的安装（编译）工具，可以用简单的语句来描述所有平台的安装(编译过程)。

他能够输出各种各样的makefile或者project文件，能测试编译器所支持的C++特性,

类似UNIX下的automake。只是 CMake 的组态档取名为 CMakeLists.txt。Cmake 并不直接建构出最终的软件，

而是产生标准的建构档（如 Unix 的 Makefile 或 Windows Visual C++ 的 projects/workspaces），

然后再依一般的建构方式使用。这使得熟悉某个集成开发环境（IDE）的开发者可以用标准的方式建构他的软件，

这种可以使用各平台的原生建构系统的能力是 CMake 和 SCons 等其他类似系统的区别之处。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装cmake-工具" tabindex="-1"><a class="header-anchor" href="#安装cmake-工具" aria-hidden="true">#</a> 安装Cmake 工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下载
https://cmake.org/download/

安装

添加Path
C:\\Program Files\\CMake\\bin

验证
cmd -&gt;  cmake

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmakelists-txt" tabindex="-1"><a class="header-anchor" href="#cmakelists-txt" aria-hidden="true">#</a> CMakeLists.txt</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[d];function r(t,c){return i(),a("div",null,l)}const u=e(s,[["render",r],["__file","06.CMake简介.html.vue"]]);export{u as default};
