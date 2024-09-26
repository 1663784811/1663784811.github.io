import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-df0ehMoG.js";const i={},c=e(`<h3 id="安装nfs" tabindex="-1"><a class="header-anchor" href="#安装nfs" aria-hidden="true">#</a> 安装NFS</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 服务端</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nfs-kernel-server



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置NFS</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/exports
<span class="token comment"># 添加nfs 目录到最后</span>
/home/why/linux/nfs *<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
<span class="token comment"># 重启NFS</span>
<span class="token function">sudo</span> /etc/init.d/nfs-kernel-server restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装交叉编译器" tabindex="-1"><a class="header-anchor" href="#安装交叉编译器" aria-hidden="true">#</a> 安装交叉编译器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc-arm-linux-gnueabihf

<span class="token comment"># 验证</span>
arm-linux-gnueabihf-gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[c];function d(t,r){return s(),a("div",null,l)}const p=n(i,[["render",d],["__file","00.Linux开发环境搭建.html.vue"]]);export{p as default};
