import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as s}from"./app-kZKJw7q_.js";const d={},a=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 继承 QWidget 类
2. 重写     void paintEvent(QPaintEvent *event) override; 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QPainter painter(this);

// 保存画笔状态
painter.save();
// 把原点移动到 x,y 点
painter.translate(x, y); 
// 重置原点
painter.restore();









</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// 画点
painter.drawPoint(const QPoint &amp;p);
// 画线
painter.drawLine(const QPoint &amp;p1, const QPoint &amp;p2);





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[a];function v(r,t){return n(),i("div",null,l)}const u=e(d,[["render",v],["__file","05.QT多线程.html.vue"]]);export{u as default};
