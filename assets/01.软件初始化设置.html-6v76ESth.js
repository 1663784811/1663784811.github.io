import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app-dBsuoIky.js";const i={},l=a(`<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git ssh生成</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span>  user.name <span class="token string">&quot;这里换上你的用户名&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;这里换上你的邮箱&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&#39;********@***.com&#39;</span>


C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>why<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>config

Host github.com
Hostname ssh.github.com
Port <span class="token number">443</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#更换镜像源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://npm.aliyun.com/
<span class="token comment"># 腾讯:http://mirrors.cloud.tencent.com/npm/</span>
<span class="token comment"># 华为：https://mirrors.huaweicloud.com/repository/npm/</span>
<span class="token comment"># 中科大镜像:https://registry.npmjs.org/</span>
<span class="token comment"># 淘宝镜像：https://registry.npmmirror.com</span>


<span class="token comment">#禁用 SSL 严格模式</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> strict-ssl <span class="token boolean">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
插件
===================================== 开发软件 
ID 插件
Lombok
代码补全
GenerateAllSetter
代码预览
CodeGlance
接口
RestfulToolkit
日志打印
Grep Console
Maven 包冲突
Dependency Analyzer
类关系图
Diagrams

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function d(t,r){return s(),e("div",null,c)}const v=n(i,[["render",d],["__file","01.软件初始化设置.html.vue"]]);export{v as default};
