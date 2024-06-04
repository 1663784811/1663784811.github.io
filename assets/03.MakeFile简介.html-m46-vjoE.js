import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-BHjOcXcM.js";const d={},s=n(`<h3 id="makefile简介" tabindex="-1"><a class="header-anchor" href="#makefile简介" aria-hidden="true">#</a> Makefile简介</h3><p>官网文档: https://www.gnu.org/software/make/manual/make.html</p><h3 id="安装make工具" tabindex="-1"><a class="header-anchor" href="#安装make工具" aria-hidden="true">#</a> 安装Make工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=============== windows 
官网下载地址:
https://www.gnu.org/software/make/
安装
默认安装路径 C:\\Program Files (x86)\\GnuWin32
配置环境变量: C:\\Program Files (x86)\\GnuWin32\\bin
验证是否安装成功: make -v

=============== linux
yum install make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写第一个makefile" tabindex="-1"><a class="header-anchor" href="#编写第一个makefile" aria-hidden="true">#</a> 编写第一个Makefile</h3><h4 id="_1-编写一个c源文件" tabindex="-1"><a class="header-anchor" href="#_1-编写一个c源文件" aria-hidden="true">#</a> 1.编写一个C源文件</h4><p>aa.c</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>#include &lt;stdio.h&gt;
int main()
{
  printf(&quot;CC\\r\\n&quot;);
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-编写makefile文件" tabindex="-1"><a class="header-anchor" href="#_2-编写makefile文件" aria-hidden="true">#</a> 2.编写Makefile文件</h4><div class="language-Makefile line-numbers-mode" data-ext="Makefile"><pre class="language-Makefile"><code>main :
	gcc aa.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-执行编译" tabindex="-1"><a class="header-anchor" href="#_3-执行编译" aria-hidden="true">#</a> 3.执行编译</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),l=[s];function r(c,t){return a(),i("div",null,l)}const v=e(d,[["render",r],["__file","03.MakeFile简介.html.vue"]]);export{v as default};
