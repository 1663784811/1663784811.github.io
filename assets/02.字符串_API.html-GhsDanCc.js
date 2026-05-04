import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as r}from"./app-aYIhXeuB.js";const d={},a=r(`<p>字符串: String 、StringBuffer 、StringBuilder</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 类是不可变的，一旦创建就不能被修改。每次对 String 进行操作（连接、拼接、修改等），都会创建一个新的 String 对象。

String 对象在 Java 字符串常量池中，因此具有相同内容的 String 对象可能会共享相同的内存。

由于 String 对象的不可变性，适用于在不需要修改字符串的情况下进行字符串操作，例如常量字符串、字符串比较等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stringbuffer" tabindex="-1"><a class="header-anchor" href="#stringbuffer" aria-hidden="true">#</a> StringBuffer</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StringBuffer 是可变的，可以通过 append()、insert()、delete()、replace() 等方法来修改字符串内容，而不会创建新的对象。

StringBuffer 是线程安全的，所有的方法都是同步的（即使用了 synchronized 关键字）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuilder" aria-hidden="true">#</a> StringBuilder</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StringBuilder 与 StringBuffer 类似，也是可变的，可以进行字符串的修改操作，但是它不是线程安全的。

StringBuilder 的方法不是同步的，因此在单线程环境下性能更好，一般推荐在单线程环境下使用。

StringBuilder 在 Java 5 中引入，相比 StringBuffer，其性能更好。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[a];function s(l,c){return i(),n("div",null,t)}const g=e(d,[["render",s],["__file","02.字符串_API.html.vue"]]);export{g as default};
