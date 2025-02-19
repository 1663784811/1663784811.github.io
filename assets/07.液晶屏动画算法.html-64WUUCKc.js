import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-925tRyXi.js";const p="/assets/img-04EN6fV8.png",e="/assets/img_1-xZ7M4EgJ.png",o={},c=t(`<h3 id="显示屏必须知道的值" tabindex="-1"><a class="header-anchor" href="#显示屏必须知道的值" aria-hidden="true">#</a> 显示屏必须知道的值</h3><p>宽度： 高度：</p><h3 id="丝滑移动位置" tabindex="-1"><a class="header-anchor" href="#丝滑移动位置" aria-hidden="true">#</a> 丝滑移动位置</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/*
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h3><p><img src="`+p+'" alt="img.png"></p><p>第一步:初始化计算中心点 x, y <br> 第二步:添加icon的时候的确实icon的顺序 <br> 第三步:确定光标位置 <br> 第四步:确定每一个icon相对显示的位置 <br> 第五点:缩放icon <br></p><h3 id="在地图上放文字" tabindex="-1"><a class="header-anchor" href="#在地图上放文字" aria-hidden="true">#</a> 在地图上放文字</h3><p><img src="'+e+`" alt="img_1.png"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一个大地图</span>
    <span class="token keyword">int</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 地图宽度</span>
    <span class="token keyword">int</span> mapWidth <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token comment">// 地图上有一个Logo;</span>
    <span class="token keyword">int</span> logoData<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>logoData<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// logo 宽为2  高为    logoData/宽</span>
    <span class="token keyword">int</span> logoWidth <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

    <span class="token comment">// 放二十个logo, 超过则换行, 光标从（0,0）开始</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">+</span> logoWidth<span class="token punctuation">)</span> <span class="token operator">&gt;</span> mapWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 判断是否要换行</span>
            y <span class="token operator">+=</span> <span class="token punctuation">(</span>logoData<span class="token punctuation">.</span>length <span class="token operator">/</span> logoWidth<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 将 logo 放置 地图 x,y 坐标上</span>
        <span class="token keyword">int</span> tempX <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">int</span> tempY <span class="token operator">=</span> y<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> logoData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> logoWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> logoWidth <span class="token operator">&amp;&amp;</span> logoData<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> indexMap <span class="token operator">=</span> mapWidth <span class="token operator">*</span> tempY <span class="token operator">+</span> tempX <span class="token operator">+</span> j<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mapWidth <span class="token operator">*</span> <span class="token punctuation">(</span>tempY <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> indexMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    map<span class="token punctuation">[</span>indexMap<span class="token punctuation">]</span> <span class="token operator">=</span> logoData<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 换一行</span>
            tempY<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        x <span class="token operator">+=</span> logoWidth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 打印地图</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> mapWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> mapWidth<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[c];function l(u,r){return s(),a("div",null,i)}const m=n(o,[["render",l],["__file","07.液晶屏动画算法.html.vue"]]);export{m as default};
