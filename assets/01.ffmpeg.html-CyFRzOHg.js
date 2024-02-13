import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-JJyzVm-D.js";const s="/assets/20210415092849383-kWTeDuE2.png",d={},l=a(`<h3 id="学习环境搭建" tabindex="-1"><a class="header-anchor" href="#学习环境搭建" aria-hidden="true">#</a> 学习环境搭建</h3><h3 id="windows-ffmpeg编译" tabindex="-1"><a class="header-anchor" href="#windows-ffmpeg编译" aria-hidden="true">#</a> windows ffmpeg编译</h3><h3 id="下载源码和软件" tabindex="-1"><a class="header-anchor" href="#下载源码和软件" aria-hidden="true">#</a> 下载源码和软件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载ffmpeg源码
https://ffmpeg.org/download.html
# 下载msys2
https://www.msys2.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="msys2" tabindex="-1"><a class="header-anchor" href="#msys2" aria-hidden="true">#</a> msys2</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开 MSYS2 MINGW64

msys2 的 pacman（Package Manager）是一个包管理工具。相当于centos的 yum
pacman -Sl：搜索有哪些包可以安装
pacman -S：安装
pacman -R：卸载

#################

# 编译工具链
pacman -S mingw-w64-x86_64-toolchain
pacman -S mingw-w64-x86_64-yasm
pacman -S mingw-w64-x86_64-SDL2
pacman -S mingw-w64-x86_64-fdk-aac
pacman -S mingw-w64-x86_64-x264
pacman -S mingw-w64-x86_64-x265

# 需要单独安装make
pacman -S make

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译windows执行程序-要编译android需要的-so文件则请在linux下编译" tabindex="-1"><a class="header-anchor" href="#编译windows执行程序-要编译android需要的-so文件则请在linux下编译" aria-hidden="true">#</a> 编译windows执行程序 ( 要编译android需要的.so文件则请在linux下编译 )</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --prefix=/usr/local/ffmpeg --enable-shared --disable-static --enable-gpl  --enable-nonfree --enable-libfdk-aac --enable-libx264 --enable-libx265

make -j8 &amp;&amp; make install

## 编译后的目录结构
在目录/usr/local/ffmpeg下
├─bin
├─include
│  ├─libavcodec
│  ├─libavdevice
│  ├─libavfilter
│  ├─libavformat
│  ├─libavutil
│  ├─libpostproc
│  ├─libswresample
│  └─libswscale
├─lib
│  └─pkgconfig
└─share
    ├─ffmpeg
    │  └─examples
    └─man
        ├─man1
        └─man3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解码流程图" tabindex="-1"><a class="header-anchor" href="#解码流程图" aria-hidden="true">#</a> 解码流程图</h3><p><img src="`+s+'" alt="20210415092849383.png"></p>',11),r=[l];function c(v,m){return n(),i("div",null,r)}const b=e(d,[["render",c],["__file","01.ffmpeg.html.vue"]]);export{b as default};
