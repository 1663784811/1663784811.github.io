import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as l}from"./app-o3AK3oAz.js";const d={},s=l(`<hr><h2 id="article-falsetitle-17-c-内联函数" tabindex="-1"><a class="header-anchor" href="#article-falsetitle-17-c-内联函数" aria-hidden="true">#</a> article: false title: 17.C++内联函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>定义
在普通函数前加 inline

inline void A( int b , int c){
    cout &lt;&lt; b &lt;&lt; c&lt;&lt; endl;
}

调用
void main(void){
    A(1,2);
}

本质
void main(void){
    {
        cout &lt;&lt; b &lt;&lt; c&lt;&lt; endl;
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[s];function t(c,v){return e(),n("div",null,a)}const u=i(d,[["render",t],["__file","17.C__内联函数.html.vue"]]);export{u as default};
