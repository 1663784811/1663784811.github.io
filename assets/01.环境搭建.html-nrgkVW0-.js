import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-IvGY8YdW.js";const d={},a=s(`<h2 id="安装-mingw-gcc" tabindex="-1"><a class="header-anchor" href="#安装-mingw-gcc" aria-hidden="true">#</a> 安装 mingw （ gcc ）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下载：  mingw
    https://github.com/niXman/mingw-builds-binaries/releases
    版本: x86_64-12.2.0-release-posix-seh-rt_v10-rev1.7z


解压：D:\\c\\mingw64

配置到path
    D:\\c\\mingw64\\bin

cmd验证
   gcc --version 


配置 clion
    file-&gt;setting-&gt;build-&gt;toolchains-&gt; +
    添加


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装cmake" tabindex="-1"><a class="header-anchor" href="#安装cmake" aria-hidden="true">#</a> 安装cmake</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤 1：下载官方安装包
打开 CMake 官方下载页面：https://cmake.org/download/

安装


cmd 验证
    cmake --version


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="msys2-集成环境" tabindex="-1"><a class="header-anchor" href="#msys2-集成环境" aria-hidden="true">#</a> MSYS2 集成环境</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
下载：https://www.msys2.org/

安装

初始化
pacman -S mingw-w64-x86_64-gcc

pacman -Syu

pacman -Su

pacman -S --need base-devel mingw-w64-x86_64-toolchain

pacman -S mingw-w64-x86_64-ffmpeg --noconfirm


配置path
D:\\c\\msys64\\mingw64\\bin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[a];function c(v,r){return i(),e("div",null,l)}const t=n(d,[["render",c],["__file","01.环境搭建.html.vue"]]);export{t as default};
