import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-JXXVuIpY.js";const d={},r=n(`<h2 id="自定义view" tabindex="-1"><a class="header-anchor" href="#自定义view" aria-hidden="true">#</a> 自定义View</h2><p>View的绘制流程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
onMeasure: 测量View的宽高

onLayout: 计算View的位置并布局

onDraw: 绘制View

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>布局
绘制
触摸反馈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组合view" tabindex="-1"><a class="header-anchor" href="#自定义组合view" aria-hidden="true">#</a> 自定义组合View</h2><h2 id="继承系统控件或布局" tabindex="-1"><a class="header-anchor" href="#继承系统控件或布局" aria-hidden="true">#</a> 继承系统控件或布局</h2><h2 id="直接继承view-viewgroup" tabindex="-1"><a class="header-anchor" href="#直接继承view-viewgroup" aria-hidden="true">#</a> 直接继承View/ViewGroup</h2><h3 id="重写绘制方法-ondraw" tabindex="-1"><a class="header-anchor" href="#重写绘制方法-ondraw" aria-hidden="true">#</a> 重写绘制方法 onDraw()</h3><h3 id="canvas-的使用" tabindex="-1"><a class="header-anchor" href="#canvas-的使用" aria-hidden="true">#</a> Canvas 的使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Canvas 的绘制类方法： drawXXX() （关键参数：Paint）
Canvas 的辅助类方法：范围裁切和几何变换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),s=[r];function t(l,c){return a(),i("div",null,s)}const o=e(d,[["render",t],["__file","07.自定义View.html.vue"]]);export{o as default};
