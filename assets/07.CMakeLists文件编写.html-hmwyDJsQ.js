import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-M9P2o3O-.js";const p={},t=e(`<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 指定Cmake 版本号</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.15</span><span class="token punctuation">)</span>

<span class="token comment"># 设置项目名   project(项目名 语言)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>projectName C<span class="token punctuation">)</span>


<span class="token comment"># 设置C编译版本</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_C_STANDARD</span> <span class="token number">11</span><span class="token punctuation">)</span>

<span class="token comment"># 生成执行文件  add_executable(执行文件 源文件)</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>test main.c<span class="token punctuation">)</span>


<span class="token comment"># 添加头文件</span>
<span class="token keyword">include_directories</span><span class="token punctuation">(</span>../include<span class="token punctuation">)</span>

<span class="token comment"># 添加源文件</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token property">SOURCES</span> aaaa.cpp  bbb.cpp ccc.cpp<span class="token punctuation">)</span>
<span class="token function">FILE</span><span class="token punctuation">(</span>GLOB SRCS <span class="token string">&quot;*.cpp&quot;</span> <span class="token string">&quot;*.h&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 生成一个库</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>
    srt-lib
    SRCS

    aaaa.cpp
<span class="token punctuation">)</span>

<span class="token comment"># 搜索一个库</span>
<span class="token keyword">find_library</span><span class="token punctuation">(</span>
    log-lib
    log
<span class="token punctuation">)</span>

<span class="token comment"># 导入预构建库</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>ssl aa SRCS<span class="token punctuation">)</span>
<span class="token keyword">set_target_properties</span><span class="token punctuation">(</span>srt sss ssss.a sss.so<span class="token punctuation">)</span>

<span class="token comment"># 连接库</span>
<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>
    test
    log-lib
<span class="token punctuation">)</span>


<span class="token comment"># 设置库的输出目录</span>
<span class="token keyword">set_target_properties</span><span class="token punctuation">(</span>test sss bbb abcc<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 设置变量</span>
<span class="token keyword">set</span><span class="token punctuation">(</span>BT <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span>TEST <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
<span class="token comment">##################   if 判断</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">\${</span>BT<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;if BT is true&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elseif</span><span class="token punctuation">(</span><span class="token punctuation">\${</span>TEST<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;if TEST is true&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;else else else&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endif</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>array_list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">)</span>

<span class="token comment">############# 第一种</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span>i <span class="token punctuation">\${</span>array_list<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;i = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">i</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endforeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">############# 第二种</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span>i IN LISTS array_list<span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;i = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">i</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endforeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">############# 第三种</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span>i RANGE <span class="token number">1</span> <span class="token number">10</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;i = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">i</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endforeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">############# 第四种</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span>i RANGE <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;i = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">i</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endforeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">############# 第五种</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span>i <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;i = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">i</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endforeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">NOT</span> a <span class="token operator">STREQUAL</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">set</span><span class="token punctuation">(</span>a <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">a</span><span class="token punctuation">}</span></span>x&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; a = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">a</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">endwhile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function i(o,l){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","07.CMakeLists文件编写.html.vue"]]);export{r as default};
