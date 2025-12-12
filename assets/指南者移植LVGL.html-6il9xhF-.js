import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as r,b as e,d as i,e as s,a as t}from"./app-9bsADgkM.js";const c="/assets/img_9-zWAdek6s.png",v="/assets/img_10-vXHR1UrU.png",g="/assets/img_11-TTl9wI76.png",m="/assets/img_12-M9ON1_jM.png",u="/assets/img_13-deSxB10I.png",o={},p={href:"https://github.com/1663784811/1663784811.github.io/tree/main/file",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"第一步-下载lvgl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第一步-下载lvgl","aria-hidden":"true"},"#"),i(" 第一步：下载LVGL")],-1),h={href:"https://github.com/lvgl/lvgl/releases/tag/v8.2.0",target:"_blank",rel:"noopener noreferrer"},x=t('<h3 id="第二步-删除不必要的文件" tabindex="-1"><a class="header-anchor" href="#第二步-删除不必要的文件" aria-hidden="true">#</a> 第二步: 删除不必要的文件</h3><p>修改lv_conf_template.h 为 lv_conf.h <br> 保留下面文件 <br><img src="'+c+'" alt="img_9.png"> examples 目录下只保留 porting 文件</p><p><img src="'+v+`" alt="img_10.png"></p><h3 id="第三步-添加组" tabindex="-1"><a class="header-anchor" href="#第三步-添加组" aria-hidden="true">#</a> 第三步: 添加组</h3><p>新建目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Middlewares
 └─LVGL
    ├─GUI
    │  └─lvgl        lvgl 源码存放目录
    └─GUI_APP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Middlewares/lvgl/examples/porting
Middlewares/lvgl/src/core
Middlewares/lvgl/src/draw
Middlewares/lvgl/src/extra
Middlewares/lvgl/src/font
Middlewares/lvgl/src/gpu
Middlewares/lvgl/src/hal
Middlewares/lvgl/src/misc
Middlewares/lvgl/src/widgets
Middlewares/LVGL/GUI_APP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt="img_11.png"></p><h3 id="第三步-添加-c文件到组" tabindex="-1"><a class="header-anchor" href="#第三步-添加-c文件到组" aria-hidden="true">#</a> 第三步: 添加.c文件到组</h3><p>Middlewares/lvgl/examples/porting</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/examples/porting 目录
    lv_port_disp_template.c
    lv_port_indev_template.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/core</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/core 目录所有文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/draw</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/draw 目录所有文件
 注：除了以下文件夹的文件
    nxp_pxp
    nxp_vglite
    sdl
    stm32_dma2d
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/extra</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/extra 目录所有文件
 注：除了以下文件夹的文件
    libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/font</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/font 目录所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/gpu</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl\\src\\draw\\sdl  所有文件
lvgl\\src\\draw\\stm32_dma2d  所有文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/hal</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/hal  所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/misc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/misc  所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Middlewares/lvgl/src/widgets</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lvgl/src/widgets  所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第四步-添加-h-文件目录" tabindex="-1"><a class="header-anchor" href="#第四步-添加-h-文件目录" aria-hidden="true">#</a> 第四步: 添加.h 文件目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>..\\..\\Middlewares\\LVGL\\GUI
..\\..\\Middlewares\\LVGL\\GUI\\lvgl
..\\..\\Middlewares\\LVGL\\GUI\\lvgl\\src
..\\..\\Middlewares\\LVGL\\GUI\\lvgl\\examples\\porting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="img_12.png"></p><h3 id="第五步-修改代码并编译-无报错说明添加没问题" tabindex="-1"><a class="header-anchor" href="#第五步-修改代码并编译-无报错说明添加没问题" aria-hidden="true">#</a> 第五步: 修改代码并编译,无报错说明添加没问题</h3><p><img src="'+u+'" alt="img_13.png"></p><h3 id="第六步-初始化触摸屏和lcd驱动" tabindex="-1"><a class="header-anchor" href="#第六步-初始化触摸屏和lcd驱动" aria-hidden="true">#</a> 第六步： 初始化触摸屏和LCD驱动</h3>',34);function _(w,M){const l=a("ExternalLinkIcon");return n(),r("div",null,[e("p",null,[e("a",p,[i("实验代码"),s(l)])]),b,e("p",null,[e("a",h,[i("GitHub下载地址"),s(l)])]),x])}const G=d(o,[["render",_],["__file","指南者移植LVGL.html.vue"]]);export{G as default};
