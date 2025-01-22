import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-fpcHT6LC.js";const a="/assets/img_6-RoDyya7F.png",r="/assets/img_7-fYavT-KG.png",l="/assets/img_8-Q4WazBIB.png",d={},t=s(`<h2 id="硬件要求" tabindex="-1"><a class="header-anchor" href="#硬件要求" aria-hidden="true">#</a> 硬件要求</h2><p>https://docs.lvgl.io/master/intro/introduction.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>16, 32 or 64 bit microcontroller or processor

16 MHz clock speed is recommended

Flash/ROM: &gt; 64 kB for the very essential components (&gt; 180 kB is recommended)

RAM: &gt; 48 kB

C99 or newer compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第一步-下载lvgl-和-准备一个可用的stm32-工程" tabindex="-1"><a class="header-anchor" href="#第一步-下载lvgl-和-准备一个可用的stm32-工程" aria-hidden="true">#</a> 第一步: 下载LVGL 和 准备一个可用的stm32 工程</h2><p>https://github.com/lvgl/lvgl/tree/release/v8.4</p><h2 id="第二步-把-lvgl-的src目录复制到工程-添加-文件到工程" tabindex="-1"><a class="header-anchor" href="#第二步-把-lvgl-的src目录复制到工程-添加-文件到工程" aria-hidden="true">#</a> 第二步： 把 LVGL 的src目录复制到工程 添加 文件到工程</h2><p>lvgl 源码只保留 三个文件夹两个文件</p><p><img src="`+a+'" alt="img_6.png"></p><p>把 lv_conf_template.h修改为 lv_conf.h</p><p><img src="'+r+'" alt="img_7.png"></p><p>删除examples文件夹里不需要的文件, 只保留porting</p><p><img src="'+l+`" alt="img_8.png"></p><p>把lvgl 文件夹复制到项目工程</p><h2 id="第三步-修改配置" tabindex="-1"><a class="header-anchor" href="#第三步-修改配置" aria-hidden="true">#</a> 第三步 修改配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl_config
lvgl_porting







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三步-修改配置-1" tabindex="-1"><a class="header-anchor" href="#第三步-修改配置-1" aria-hidden="true">#</a> 第三步 修改配置</h2><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3>`,17),c=[t];function o(v,m){return i(),n("div",null,c)}const g=e(d,[["render",o],["__file","02LVGL移植.html.vue"]]);export{g as default};
