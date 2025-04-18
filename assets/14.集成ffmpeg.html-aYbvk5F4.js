import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-ZNz1llaj.js";const i={},l=e(`<h2 id="在linux下编译android需要的-so文件" tabindex="-1"><a class="header-anchor" href="#在linux下编译android需要的-so文件" aria-hidden="true">#</a> 在linux下编译android需要的.so文件</h2><h3 id="安装ndk" tabindex="-1"><a class="header-anchor" href="#安装ndk" aria-hidden="true">#</a> 安装ndk</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://dl.google.com/android/repository/android-ndk-r26b-linux.zip?hl<span class="token operator">=</span>zh-cn
<span class="token comment"># 解压</span>
<span class="token function">unzip</span> android-ndk-r26b-linux.zip
<span class="token comment"># 配置ndk环境变量</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载ffmpeg并解压" tabindex="-1"><a class="header-anchor" href="#下载ffmpeg并解压" aria-hidden="true">#</a> 下载ffmpeg并解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> --no-check-certificate http://ffmpeg.org/releases/ffmpeg-6.1.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ffmpeg-6.1.tar.gz
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ffmpeg-6.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译ffmpeg-编写编译脚本并执行" tabindex="-1"><a class="header-anchor" href="#编译ffmpeg-编写编译脚本并执行" aria-hidden="true">#</a> 编译ffmpeg 编写编译脚本并执行</h3><h3 id="编写shell脚本armv8-a-build-sh" tabindex="-1"><a class="header-anchor" href="#编写shell脚本armv8-a-build-sh" aria-hidden="true">#</a> 编写shell脚本armv8-a build.sh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#Ffmpeg源码路径</span>
<span class="token assign-left variable">SRC_DIR</span><span class="token operator">=</span>/root/ndk/ffmpeg-6.1
<span class="token comment">#编译后文件安装位置</span>
<span class="token assign-left variable">DST_DIR</span><span class="token operator">=</span>/root/ndk/ffmpeg_out/armv8-a
<span class="token comment">#NDK路径</span>
<span class="token assign-left variable">NDK_PATH</span><span class="token operator">=</span>/root/ndk/android-ndk-r26b/toolchains/llvm/prebuilt/linux-x86_64
<span class="token builtin class-name">cd</span> <span class="token variable">$SRC_DIR</span>
<span class="token comment">##########################################################################</span>
<span class="token comment">##########################################################################</span>
<span class="token comment">##########################################################################</span>
<span class="token comment">##########################################################################</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt; =============  开始编译, CPU: <span class="token variable">$CPU</span>  请等待几分钟...&quot;</span>
./configure <span class="token punctuation">\\</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token variable">$DST_DIR</span> <span class="token punctuation">\\</span>
    --enable-neon  <span class="token punctuation">\\</span>
    --enable-hwaccels  <span class="token punctuation">\\</span>
    --enable-gpl   <span class="token punctuation">\\</span>
    --disable-postproc <span class="token punctuation">\\</span>
    --disable-debug <span class="token punctuation">\\</span>
    --enable-small <span class="token punctuation">\\</span>
    --enable-jni <span class="token punctuation">\\</span>
    --enable-mediacodec <span class="token punctuation">\\</span>
    --enable-decoder<span class="token operator">=</span>h264_mediacodec <span class="token punctuation">\\</span>
    --enable-static <span class="token punctuation">\\</span>
    --enable-shared <span class="token punctuation">\\</span>
    --disable-doc <span class="token punctuation">\\</span>
    --enable-ffmpeg <span class="token punctuation">\\</span>
    --disable-ffplay <span class="token punctuation">\\</span>
    --disable-ffprobe <span class="token punctuation">\\</span>
    --disable-avdevice <span class="token punctuation">\\</span>
    --disable-doc <span class="token punctuation">\\</span>
    --disable-symver <span class="token punctuation">\\</span>
    --cross-prefix<span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/aarch64-linux-android- <span class="token punctuation">\\</span>
    --target-os<span class="token operator">=</span>android <span class="token punctuation">\\</span>
    <span class="token parameter variable">--arch</span><span class="token operator">=</span>arm64 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--cpu</span><span class="token operator">=</span>armv8-a <span class="token punctuation">\\</span>
    <span class="token parameter variable">--cc</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/aarch64-linux-android21-clang <span class="token punctuation">\\</span>
    <span class="token parameter variable">--cxx</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/aarch64-linux-android21-clang++ <span class="token punctuation">\\</span>
    <span class="token parameter variable">--nm</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-nm <span class="token punctuation">\\</span>
    <span class="token parameter variable">--ar</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-ar <span class="token punctuation">\\</span>
    <span class="token parameter variable">--ranlib</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-ranlib    <span class="token punctuation">\\</span>
    <span class="token parameter variable">--strip</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-strip  <span class="token punctuation">\\</span>
    --pkg-config<span class="token operator">=</span>/usr/bin/pkg-config  <span class="token punctuation">\\</span>
    --enable-cross-compile <span class="token punctuation">\\</span>
    <span class="token parameter variable">--sysroot</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/sysroot <span class="token punctuation">\\</span>
    --extra-cflags<span class="token operator">=</span><span class="token string">&quot;-march=armv8-a&quot;</span> <span class="token punctuation">\\</span>
    --extra-ldflags<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ADDI_LDFLAGS</span>&quot;</span>
<span class="token function">make</span> clean
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;&lt; =================  编译完成   &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写shell脚本armv7-a-build-sh" tabindex="-1"><a class="header-anchor" href="#编写shell脚本armv7-a-build-sh" aria-hidden="true">#</a> 编写shell脚本armv7-a build.sh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#Ffmpeg源码路径</span>
<span class="token assign-left variable">SRC_DIR</span><span class="token operator">=</span>/root/ndk/ffmpeg-6.1
<span class="token comment">#编译后文件安装位置</span>
<span class="token assign-left variable">DST_DIR</span><span class="token operator">=</span>/root/ndk/ffmpeg_out/armv7-a
<span class="token comment">#NDK路径</span>
<span class="token assign-left variable">NDK_PATH</span><span class="token operator">=</span>/root/ndk/android-ndk-r26b/toolchains/llvm/prebuilt/linux-x86_64
<span class="token builtin class-name">cd</span> <span class="token variable">$SRC_DIR</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt; =============  开始编译, CPU: <span class="token variable">$CPU</span>  请等待几分钟...&quot;</span>
./configure <span class="token punctuation">\\</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token variable">$DST_DIR</span> <span class="token punctuation">\\</span>
--enable-neon  <span class="token punctuation">\\</span>
--enable-hwaccels  <span class="token punctuation">\\</span>
--enable-gpl   <span class="token punctuation">\\</span>
--disable-postproc <span class="token punctuation">\\</span>
--disable-debug <span class="token punctuation">\\</span>
--enable-small <span class="token punctuation">\\</span>
--enable-jni <span class="token punctuation">\\</span>
--enable-mediacodec <span class="token punctuation">\\</span>
--enable-decoder<span class="token operator">=</span>h264_mediacodec <span class="token punctuation">\\</span>
--enable-static <span class="token punctuation">\\</span>
--enable-shared <span class="token punctuation">\\</span>
--disable-doc <span class="token punctuation">\\</span>
--enable-ffmpeg <span class="token punctuation">\\</span>
--disable-ffplay <span class="token punctuation">\\</span>
--disable-ffprobe <span class="token punctuation">\\</span>
--disable-avdevice <span class="token punctuation">\\</span>
--disable-doc <span class="token punctuation">\\</span>
--disable-symver <span class="token punctuation">\\</span>
--cross-prefix<span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/arm-linux-androideabi- <span class="token punctuation">\\</span>
--target-os<span class="token operator">=</span>android <span class="token punctuation">\\</span>
<span class="token parameter variable">--arch</span><span class="token operator">=</span>arm <span class="token punctuation">\\</span>
<span class="token parameter variable">--cpu</span><span class="token operator">=</span>armv7-a <span class="token punctuation">\\</span>
<span class="token parameter variable">--cc</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/armv7a-linux-androideabi21-clang <span class="token punctuation">\\</span>
<span class="token parameter variable">--cxx</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/armv7a-linux-androideabi21-clang++ <span class="token punctuation">\\</span>
<span class="token parameter variable">--nm</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-nm <span class="token punctuation">\\</span>
<span class="token parameter variable">--ar</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-ar <span class="token punctuation">\\</span>
<span class="token parameter variable">--ranlib</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-ranlib    <span class="token punctuation">\\</span>
<span class="token parameter variable">--strip</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/bin/llvm-strip  <span class="token punctuation">\\</span>
--pkg-config<span class="token operator">=</span>/usr/bin/pkg-config  <span class="token punctuation">\\</span>
--enable-cross-compile <span class="token punctuation">\\</span>
<span class="token parameter variable">--sysroot</span><span class="token operator">=</span><span class="token variable">$NDK_PATH</span>/sysroot <span class="token punctuation">\\</span>
--extra-cflags<span class="token operator">=</span><span class="token string">&quot;-Os -fpic -mfloat-abi=softfp -mfpu=vfp -marm -march=armv7-a &quot;</span> <span class="token punctuation">\\</span>
--extra-ldflags<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ADDI_LDFLAGS</span>&quot;</span>

<span class="token function">make</span> clean
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;&lt; =================  编译完成   &quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行编译-完成后目录结构" tabindex="-1"><a class="header-anchor" href="#执行编译-完成后目录结构" aria-hidden="true">#</a> 执行编译,完成后目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对我们最重要的是include和lib。include用于存放头文件，lib用于存放静态库.a，或动态库.so。
FFmpeg 有六个常用的功能模块：
libavformat：多媒体文件或协议的封装和解封装库；
libavcodec：音视频编解码库；
libavfilter：音视频、字幕滤镜库；
libswscale：图像格式转换库；
libswresample：音频重采样库；
libavutil：工具库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="各个参数的含义" tabindex="-1"><a class="header-anchor" href="#各个参数的含义" aria-hidden="true">#</a> 各个参数的含义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这里面最核心的就是编译这步，由于网上资料不全，在这里卡了好久，各种报错。
最核心的几个参数：
--cross-prefix=
--cc=
--cxx=
--nm=
--ar=
--ranlib=
--strip=
--pkg-config=
少了上面那几个参数，编译都编译不过去，
--cross-prefix用于指明交叉编译工具前缀，如v7下是：arm-linux-androideabi- ，而v8下是：aarch64-linux-android- ，这个可以通过查找ndk找到。
--cc用于配置 C 编译器，在这里我们是clang，
--cxx用于配置c++编译器，在这里我们是clang++。
--nm、--ar、--ranlib、--strip这几个选项由于ndk-r26中已经被替换成：llvm-nm、llvm-ar、llvm-ranlib、llvm-strip，所以我们编译时也要把这几个参数替换掉。
--pkg-config用于检查和获取库和头文件信息的工具，我们需要显示指明他的安装路径，不然编译或者make会报错，我们可以通过 “which pkg-config” 命令查找到路径，如果没安装的话，我们可以先通过 “apt-get update &amp;&amp; apt-get install -y pkg-config” 安装。

然后是与我们最终生成lib库相关的几个重要参数：
--prefix= ：用于指明我们最终生成文件的保存路径，注意需要提前创建目标文件夹并赋予写的权限。
--arch=   ：如果我们需要生成的是32位，填arm，若是64位，则填arm64。
--cpu=    ：如果我们需要生成的是32位，填armv7-a，若是64位，则填armv8-a。
--cc=     ：如果我们需要生成的是32位，填armv7a-linux-androideabi21-clang，若是64位，则填aarch64-linux-android21-clang。android21代表最低支持android21版本，我们还可以根据需求用aarch64-linux-android34-clang。
--cxx=    ：与--cc类似，不过他用的是clang++，比如：armv7a-linux-androideabi21-clang++
--extra-cflags=    ：配置编译的架构信息，如果我们需要生成的是32位，填&quot;-Os -fpic -mfloat-abi=softfp -mfpu=vfp -marm -march=armv7-a &quot;，若是64位，则填&quot;-march=armv8-a&quot;。

然后其他参数是配置ffmpeg启用/禁用什么东西，比如：
--enable-shared  ：代表生成动态库
--enable-static  ：代表生成静态库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[l];function c(t,r){return a(),s("div",null,p)}const v=n(i,[["render",c],["__file","14.集成ffmpeg.html.vue"]]);export{v as default};
