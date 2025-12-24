import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-2JEAsQOb.js";const d={},l=n(`<h3 id="_1-基本格式" tabindex="-1"><a class="header-anchor" href="#_1-基本格式" aria-hidden="true">#</a> 1.基本格式</h3><div class="language-Makefile line-numbers-mode" data-ext="Makefile"><pre class="language-Makefile"><code>targets : prerequisties
[tab键] command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>target：目标文件，可以是 OjectFile，也可以是执行文件，还可以是一个标签（Label），对于标签这种特性，在后续的“伪目标”章节中会有叙述。
prerequisite：要生成那个 target 所需要的文件或是目标。
command：是 make 需要执行的命令，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-makefile-规则" tabindex="-1"><a class="header-anchor" href="#_2-makefile-规则" aria-hidden="true">#</a> 2.Makefile 规则</h3><ol><li>make 会在当前目录下找到一个名字叫 Makefile 或 makefile 的文件</li><li>如果找到，它会找文件中第一个目标文件（target），并把这个文件作为最终的目标文件</li><li>如果 target 文件不存在，或是 target 文件依赖的 .o 文件(prerequities)的文件修改时间要比 target 这个文件新，就会执行后面所定义的命令 command 来生成 target 这个文件</li><li>如果 target 依赖的 .o 文件（prerequisties）也存在，make 会在当前文件中找到 target 为 .o 文件的依赖性，如果找到，再根据那个规则生成 .o 文件</li></ol><h3 id="_3-伪目标" tabindex="-1"><a class="header-anchor" href="#_3-伪目标" aria-hidden="true">#</a> 3.伪目标</h3><p>为了避免 target 和 Makefile 同级目录下 文件/文件夹 重名的这种情况，我们可以使用一个特殊的标记 .PHONY 来显式地指明一个目标是 &quot;伪目标&quot;，向 make 说明，不管是否有这个文件/文件夹，这个目标就是 &quot;伪目标&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.PHONY : clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-makefile-的变量" tabindex="-1"><a class="header-anchor" href="#_4-makefile-的变量" aria-hidden="true">#</a> 4.Makefile 的变量</h3><p>变量在声明时需要给予初值，而在使用时，需要给在变量名前加上 $ 符号，并用小括号 () 把变量给包括起来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cpp := src/main.cpp 
obj := objs/main.o

$(obj) : \${cpp}
	@g++ -c $(cpp) -o $(obj)

compile : $(obj)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-预定义变量" tabindex="-1"><a class="header-anchor" href="#_5-预定义变量" aria-hidden="true">#</a> 5.预定义变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$@: 目标(target)的完整名称
$&lt;: 第一个依赖文件（prerequisties）的名称
$^: 所有的依赖文件（prerequisties），以空格分开，不包含重复的依赖文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[l];function s(t,c){return a(),i("div",null,r)}const m=e(d,[["render",s],["__file","04.MakeFile基本操作.html.vue"]]);export{m as default};
