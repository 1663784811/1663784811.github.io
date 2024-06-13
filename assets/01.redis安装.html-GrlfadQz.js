import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as n}from"./app-hA4l8Hf5.js";const i={},l=n(`<h2 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下载源文件</span>
<span class="token function">wget</span> https://download.redis.io/redis-stable.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> redis-stable.tar.gz
<span class="token builtin class-name">cd</span> redis-stable

<span class="token comment">## 编译</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ kernel-devel  libjemalloc-dev tcl openssl-devel
<span class="token function">make</span>

<span class="token comment">## 安装</span>
<span class="token function">make</span> <span class="token assign-left variable">BUILD_TLS</span><span class="token operator">=</span>yes <span class="token function">install</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./redis-server <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.1.100 <span class="token parameter variable">-p</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),d=[l];function r(c,t){return s(),e("div",null,d)}const v=a(i,[["render",r],["__file","01.redis安装.html.vue"]]);export{v as default};
