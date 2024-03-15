import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app-tYO02Yji.js";const i={},t=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 编译
cmake .
cmake ..



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个cmakelists-txt" tabindex="-1"><a class="header-anchor" href="#多个cmakelists-txt" aria-hidden="true">#</a> 多个CMakeLists.txt</h2><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment">## 包含子目录CMakeLists.txt</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>目录<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>./aaa<span class="token punctuation">)</span>


<span class="token comment"># 包含子目录相关头文件，这样才能在主库中使用相关的函数</span>
<span class="token keyword">include_directories</span><span class="token punctuation">(</span>test/include<span class="token punctuation">)</span>

<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>
    
    <span class="token comment"># 这里可以直接用子目录生成的这个库</span>
    test
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function d(l,r){return s(),e("div",null,c)}const v=n(i,[["render",d],["__file","08.CMake命令.html.vue"]]);export{v as default};
