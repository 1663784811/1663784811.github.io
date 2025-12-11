import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-sOVZqPqZ.js";const i={},l=e(`<h3 id="安装nfs" tabindex="-1"><a class="header-anchor" href="#安装nfs" aria-hidden="true">#</a> 安装NFS</h3><p>NFS（Network File System，网络文件系统）是一种分布式文件系统协议，允许不同计算机通过局域网或广域网共享文件资源。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 服务端</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nfs-kernel-server



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置NFS</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/exports
<span class="token comment"># 添加nfs 目录到最后</span>
/home/why/linux/nfs *<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
<span class="token comment"># 重启NFS</span>
<span class="token function">sudo</span> /etc/init.d/nfs-kernel-server restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc gcc-aarch64-linux-gnu <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">bc</span> bison build-essential coccinelle <span class="token punctuation">\\</span>
  device-tree-compiler dfu-util efitools flex gdisk graphviz imagemagick <span class="token punctuation">\\</span>
  liblz4-tool libgnutls28-dev libguestfs-tools libncurses-dev <span class="token punctuation">\\</span>
  libpython3-dev libsdl2-dev libssl-dev lz4 lzma lzma-alone openssl <span class="token punctuation">\\</span>
  pkg-config python3 python3-asteval python3-coverage python3-filelock <span class="token punctuation">\\</span>
  python3-pkg-resources python3-pycryptodome python3-pyelftools <span class="token punctuation">\\</span>
  python3-pytest python3-pytest-xdist python3-sphinxcontrib.apidoc <span class="token punctuation">\\</span>
  python3-sphinx-rtd-theme python3-subunit python3-testtools <span class="token punctuation">\\</span>
  python3-virtualenv swig uuid-dev <span class="token parameter variable">-y</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装交叉编译器" tabindex="-1"><a class="header-anchor" href="#安装交叉编译器" aria-hidden="true">#</a> 安装交叉编译器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc-arm-linux-gnueabihf

<span class="token comment"># 验证</span>
arm-linux-gnueabihf-gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[l];function c(o,d){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","00.Linux开发环境搭建.html.vue"]]);export{r as default};
