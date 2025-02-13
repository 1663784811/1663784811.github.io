import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as i}from"./app-hgcy2IeK.js";const d={},r=i(`<h3 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h3><p>静态代理是在编译时就已经确定代理类的结构，需要手动编写代理类。 代理类和被代理类实现相同的接口或继承相同的父类， 代理类中包含对被代理对象的引用， 通过调用被代理对象的方法来间接实现目标操作。 静态代理的缺点是每个被代理对象都需要编写一个代理类，代码重复且不灵活。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h3><p>动态代理是在运行时动态生成代理类，不需要手动编写代理类。</p><p>Java 中的动态代理主要依靠 java.lang.reflect.Proxy 类 和 java.lang.reflect.InvocationHandler 接口实现。</p><p>通过 Proxy.newProxyInstance() 方法创建代理对象， 并传入一个实现了 InvocationHandler 接口的处理器对象，</p><p>处理器对象负责在代理对象上调用方法时执行额外的操作。</p><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cglib" tabindex="-1"><a class="header-anchor" href="#cglib" aria-hidden="true">#</a> cglib</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[r];function l(c,v){return e(),n("div",null,s)}const u=a(d,[["render",l],["__file","08.代理.html.vue"]]);export{u as default};
