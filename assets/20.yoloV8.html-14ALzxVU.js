import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-LWWWdjBV.js";const t={},i=e(`<h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><p>YOLOv8基于深度学习和计算机视觉的前沿进展， 提供了无与伦比的速度和准确性表现。 它的精简设计使其适用于各种应用， 并且可以轻松适应不同的硬件平台，从边缘设备到云API</p><h4 id="python-环境" tabindex="-1"><a class="header-anchor" href="#python-环境" aria-hidden="true">#</a> python 环境</h4><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install ultralytics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="命令使用以下语法" tabindex="-1"><a class="header-anchor" href="#命令使用以下语法" aria-hidden="true">#</a> 命令使用以下语法：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yolo 任务 模式 参数

其中   任务（可选）是[detect, segment, classify]中的一个
        模式（必需）是[train, val, predict, export, track]中的一个
        参数（可选）是任意数量的自定义“arg=value”对，如“imgsz=320”，可覆盖默认值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="官网代码示例" tabindex="-1"><a class="header-anchor" href="#官网代码示例" aria-hidden="true">#</a> 官网代码示例</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> ultralytics <span class="token keyword">import</span> YOLO

<span class="token comment"># 从头开始创建一个新的YOLO模型</span>
model <span class="token operator">=</span> YOLO<span class="token punctuation">(</span><span class="token string">&#39;yolov8n.yaml&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 加载预训练的YOLO模型（推荐用于训练）</span>
model <span class="token operator">=</span> YOLO<span class="token punctuation">(</span><span class="token string">&#39;yolov8n.pt&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 使用“coco128.yaml”数据集训练模型3个周期</span>
results <span class="token operator">=</span> model<span class="token punctuation">.</span>train<span class="token punctuation">(</span>data<span class="token operator">=</span><span class="token string">&#39;coco128.yaml&#39;</span><span class="token punctuation">,</span> epochs<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># 评估模型在验证集上的性能</span>
results <span class="token operator">=</span> model<span class="token punctuation">.</span>val<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 使用模型对图片进行目标检测</span>
results <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token string">&#39;https://ultralytics.com/images/bus.jpg&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 将模型导出为ONNX格式</span>
success <span class="token operator">=</span> model<span class="token punctuation">.</span>export<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;onnx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[i];function o(c,p){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","20.yoloV8.html.vue"]]);export{u as default};
