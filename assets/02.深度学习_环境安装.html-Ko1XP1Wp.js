import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as i}from"./app-kZKJw7q_.js";const e={},l=i(`<p>准备一台ubuntu机器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3


<span class="token comment">######### 安装 miniconda3</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh <span class="token parameter variable">-O</span> ~/miniconda3/miniconda.sh
<span class="token function">bash</span> ~/miniconda3/miniconda.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">rm</span> ~/miniconda3/miniconda.sh


<span class="token comment">########</span>
<span class="token builtin class-name">source</span> ~/miniconda3/bin/activate
conda init <span class="token parameter variable">--all</span>

<span class="token comment">#######</span>
pip <span class="token function">install</span> jupyter 
pip <span class="token function">install</span> d2l 
pip <span class="token function">install</span> torch 
pip <span class="token function">install</span> torchvision

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(o,d){return s(),a("div",null,c)}const u=n(e,[["render",t],["__file","02.深度学习_环境安装.html.vue"]]);export{u as default};
