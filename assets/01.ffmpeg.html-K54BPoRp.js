import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-vuEwZFPt.js";const i="/assets/20210415092849383-kWTeDuE2.png",l="/assets/02img-FAeCp9Wr.png",d="/assets/03img-XAblXosC.png",c="/assets/04img-T5CirFDD.png",r="/assets/05img-iaRyRfeX.png",t="/assets/06img-584HHq-5.png",p={},o=e('<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3><p>libavcodec : 编/解码 <br> libavfilter : 帧级操作（如添加滤镜）<br> libavformat : 文件 I/O 和 封装/解封装 <br> libavdevice : 设备视频文件的封装/解封装 <br> libavutil : 通用工具集合<br> libswresample : 音频重采样、格式处理、混音等<br> libpostproc : 预处理<br> libswscale : 色彩处理和缩放<br></p><h3 id="解码流程图" tabindex="-1"><a class="header-anchor" href="#解码流程图" aria-hidden="true">#</a> 解码流程图</h3><p><img src="'+i+`" alt="20210415092849383.png"></p><h3 id="学习环境搭建" tabindex="-1"><a class="header-anchor" href="#学习环境搭建" aria-hidden="true">#</a> 学习环境搭建</h3><h3 id="windows-ffmpeg编译" tabindex="-1"><a class="header-anchor" href="#windows-ffmpeg编译" aria-hidden="true">#</a> windows ffmpeg编译</h3><h3 id="下载源码和软件" tabindex="-1"><a class="header-anchor" href="#下载源码和软件" aria-hidden="true">#</a> 下载源码和软件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载ffmpeg源码
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建vs-c-空项目" tabindex="-1"><a class="header-anchor" href="#新建vs-c-空项目" aria-hidden="true">#</a> 新建VS C++ 空项目</h3><p><img src="`+l+'" alt="img.png"></p><h3 id="添加入口文件" tabindex="-1"><a class="header-anchor" href="#添加入口文件" aria-hidden="true">#</a> 添加入口文件</h3><p><img src="'+d+`" alt="img.png"></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;libavcodec\\avcodec.h&gt;</span></span>

<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">comment</span><span class="token punctuation">(</span>lib<span class="token punctuation">,</span> </span><span class="token string">&quot;avcodec.lib&quot;</span><span class="token expression"><span class="token punctuation">)</span></span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">avcodec_configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置include目录" tabindex="-1"><a class="header-anchor" href="#配置include目录" aria-hidden="true">#</a> 配置include目录</h3><p><img src="`+c+'" alt="img.png"></p><h3 id="配置lib库目录" tabindex="-1"><a class="header-anchor" href="#配置lib库目录" aria-hidden="true">#</a> 配置lib库目录</h3><p><img src="'+r+'" alt="img.png"></p><h3 id="可能能会找不到dll文件" tabindex="-1"><a class="header-anchor" href="#可能能会找不到dll文件" aria-hidden="true">#</a> 可能能会找不到DLL文件</h3><p>在Path中添加dll目录 <img src="'+t+'" alt="img.png"></p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3>',24),v=[o];function m(u,b){return a(),s("div",null,v)}const f=n(p,[["render",m],["__file","01.ffmpeg.html.vue"]]);export{f as default};
