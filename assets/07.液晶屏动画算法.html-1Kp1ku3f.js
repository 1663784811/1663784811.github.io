import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a}from"./app-MV9YW8i7.js";const s="/assets/img-04EN6fV8.png",t={},d=a(`<h3 id="显示屏必须知道的值" tabindex="-1"><a class="header-anchor" href="#显示屏必须知道的值" aria-hidden="true">#</a> 显示屏必须知道的值</h3><p>宽度： 高度：</p><h3 id="丝滑移动位置" tabindex="-1"><a class="header-anchor" href="#丝滑移动位置" aria-hidden="true">#</a> 丝滑移动位置</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/*
丝滑移动位置
a 当前值
a_trg 期待值
b 速度
*/
void ui_run(int* a, int* a_trg, int b){
	if(*a &lt; *a_trg){ // 当前小于期待
		*a+=b;				 // 当前加一小步(b)
		if(*a &gt; *a_trg){// 如果当前值大于期待值则等于期待值
			*a = *a_trg;
		}
	} else if(*a &gt; *a_trg){ // 与第一步类似
		*a-=b;
		if(*a &lt; *a_trg){
			*a = *a_trg;
		}
	} else {
		*a = *a_trg;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h3><p><img src="`+s+'" alt="img.png"></p><p>第一步:初始化计算中心点 x, y <br> 第二步:添加icon的时候的确实icon的顺序 <br> 第三步:确定光标位置 <br> 第四步:确定每一个icon相对显示的位置 <br> 第五点:缩放icon <br></p>',7),r=[d];function l(c,v){return n(),e("div",null,r)}const m=i(t,[["render",l],["__file","07.液晶屏动画算法.html.vue"]]);export{m as default};
