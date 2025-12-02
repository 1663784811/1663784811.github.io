import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-t2ugctAo.js";const s={},d=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.继承QWidget 类
2.重写方法 void paintEvent(QPaintEvent *event) override;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qpainter-画家" tabindex="-1"><a class="header-anchor" href="#qpainter-画家" aria-hidden="true">#</a> QPainter 画家</h3><p>分为两步：第一步设置画笔，第二步 画</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
    QPainter painter(this);
    painter.setPen(Qt::blue);   // 设置画笔颜色为蓝色
    painter.setBrush(Qt::yellow);  // 设置画刷颜色为黄色





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[d];function r(l,c){return n(),i("div",null,t)}const o=e(s,[["render",r],["__file","40.QT绘画.html.vue"]]);export{o as default};
