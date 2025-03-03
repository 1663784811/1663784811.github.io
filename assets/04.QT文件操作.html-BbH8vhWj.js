import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-JwWGHoxs.js";const p={},e=t(`<h3 id="读取和写入" tabindex="-1"><a class="header-anchor" href="#读取和写入" aria-hidden="true">#</a> 读取和写入</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QFile&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QTextStream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>filename<span class="token punctuation">,</span> <span class="token keyword">const</span> QString <span class="token operator">&amp;</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 打开文件进行写入（创建文件，如果文件不存在）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>QIODevice<span class="token double-colon punctuation">::</span>WriteOnly <span class="token operator">|</span> QIODevice<span class="token double-colon punctuation">::</span>Text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Could not open file for writing&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    QTextStream <span class="token function">out</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    out <span class="token operator">&lt;&lt;</span> content<span class="token punctuation">;</span>  <span class="token comment">// 写入内容</span>

    file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 关闭文件</span>
<span class="token punctuation">}</span>

QString <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 打开文件进行读取</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>QIODevice<span class="token double-colon punctuation">::</span>ReadOnly <span class="token operator">|</span> QIODevice<span class="token double-colon punctuation">::</span>Text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Could not open file for reading&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">QString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    QTextStream <span class="token function">in</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString content <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 读取文件内容</span>

    file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QString filename <span class="token operator">=</span> <span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">;</span>
    <span class="token function">writeFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;Hello, Qt!\\nThis is a test.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    QString content <span class="token operator">=</span> <span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;File content:&quot;</span> <span class="token operator">&lt;&lt;</span> content<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qfile-检查文件是否存在" tabindex="-1"><a class="header-anchor" href="#qfile-检查文件是否存在" aria-hidden="true">#</a> QFile 检查文件是否存在</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QFile&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>

<span class="token keyword">bool</span> <span class="token function">fileExists</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 检查文件是否存在</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QString filename <span class="token operator">=</span> <span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fileExists</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;File exists!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;File does not exist!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制和删除文件" tabindex="-1"><a class="header-anchor" href="#复制和删除文件" aria-hidden="true">#</a> 复制和删除文件</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QFile&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDebug&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">copyFile</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>source<span class="token punctuation">,</span> <span class="token keyword">const</span> QString <span class="token operator">&amp;</span>destination<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>destination<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;File copied successfully!&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Failed to copy file!&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Source file does not exist!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">deleteFile</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;File deleted successfully!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Failed to delete file!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    QString source <span class="token operator">=</span> <span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">;</span>
    QString destination <span class="token operator">=</span> <span class="token string">&quot;example_copy.txt&quot;</span><span class="token punctuation">;</span>

    <span class="token function">copyFile</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">deleteFile</span><span class="token punctuation">(</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","04.QT文件操作.html.vue"]]);export{r as default};
