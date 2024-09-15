import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-_8NupADL.js";const a={},s=d(`<h2 id="自定义view" tabindex="-1"><a class="header-anchor" href="#自定义view" aria-hidden="true">#</a> 自定义View</h2><p>View的绘制流程 ( 时序 )</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>构造函数
    属性初始化阶段

onMeasure(int widthMeasureSpec, int heightMeasureSpec) 用来测量视图的宽度和高度的
    desiredWidth 和 desiredHeight 定义了期望的尺寸。
    1.通过 MeasureSpec.getMode 获取测量模式，并通过 MeasureSpec.getSize 获取测量尺寸。
    2.根据不同的测量模式，计算最终的宽度和高度。
    3.调用 setMeasuredDimension 方法设置测量后的尺寸。
    MeasureSpec 的模式：
         *  1. UNSPECIFIED：父视图对子视图没有任何约束，子视图可以是任意大小。
         *  2. EXACTLY：父视图已经确定了子视图的精确大小，子视图应该正好使用这个大小。
         *  3. AT_MOST：子视图可以是指定大小内的任意大小，但不能超过这个大小。

onLayout(boolean changed, int left, int top, int right, int bottom)  计算View的位置并布局
    changed：boolean 类型。当此参数为 true 时，表示布局的位置或大小发生了变化。
    left：int 类型。父视图相对于其父视图的左边缘的左坐标。
    top：int 类型。父视图相对于其父视图的顶边缘的顶部坐标。
    right：int 类型。父视图相对于其父视图的左边缘的右坐标。
    bottom：int 类型。父视图相对于其父视图的顶边缘的底部坐标。

onSizeChanged(int w, int h, int oldw, int oldh)    大小变化通知


onDraw(Canvas canvas)  绘制View


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>布局
绘制
触摸反馈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组合view" tabindex="-1"><a class="header-anchor" href="#自定义组合view" aria-hidden="true">#</a> 自定义组合View</h2><h2 id="继承系统控件或布局" tabindex="-1"><a class="header-anchor" href="#继承系统控件或布局" aria-hidden="true">#</a> 继承系统控件或布局</h2><h2 id="直接继承view-viewgroup" tabindex="-1"><a class="header-anchor" href="#直接继承view-viewgroup" aria-hidden="true">#</a> 直接继承View/ViewGroup</h2><h3 id="重写绘制方法-ondraw" tabindex="-1"><a class="header-anchor" href="#重写绘制方法-ondraw" aria-hidden="true">#</a> 重写绘制方法 onDraw()</h3><h3 id="canvas-的使用" tabindex="-1"><a class="header-anchor" href="#canvas-的使用" aria-hidden="true">#</a> Canvas 的使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Canvas 的绘制类方法： drawXXX() （关键参数：Paint）
Canvas 的辅助类方法：范围裁切和几何变换
















</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[s];function r(v,c){return i(),n("div",null,l)}const m=e(a,[["render",r],["__file","07.自定义View.html.vue"]]);export{m as default};
