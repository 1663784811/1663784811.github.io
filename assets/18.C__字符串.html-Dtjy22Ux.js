import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as s,a as e}from"./app-ycMh-tgS.js";const l={},t=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>char site[] = &quot;ABCD&quot;;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-中-cstring" tabindex="-1"><a class="header-anchor" href="#c-中-cstring" aria-hidden="true">#</a> C++ 中 cstring</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;cstring&gt;
 
using namespace std;
 
int main ()
{
   char str1[13] = &quot;abbbccc&quot;;
   char str2[13] = &quot;defghijk&quot;;
   char str3[13];
   int  len ;
 
   // 复制 str1 到 str3
   strcpy( str3, str1);
   cout &lt;&lt; &quot;strcpy( str3, str1) : &quot; &lt;&lt; str3 &lt;&lt; endl;
 
   // 连接 str1 和 str2
   strcat( str1, str2);
   cout &lt;&lt; &quot;strcat( str1, str2): &quot; &lt;&lt; str1 &lt;&lt; endl;
 
   // 连接后，str1 的总长度
   len = strlen(str1);
   cout &lt;&lt; &quot;strlen(str1) : &quot; &lt;&lt; len &lt;&lt; endl;
 
   // 如果 s1 和 s2 是相同的，则返回 0；如果 s1&lt;s2 则返回值小于 0；如果 s1&gt;s2 则返回值大于 0。
   strcmp(str1, str2);
 
   // 返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置
   strchr(str1, &#39;a&#39;);
   
   
   
   
   return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-中-string-类" tabindex="-1"><a class="header-anchor" href="#c-中-string-类" aria-hidden="true">#</a> C++ 中 String 类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
 
using namespace std;
 
int main ()
{
   string str1 = &quot;aaaaaaa&quot;;
   string str2 = &quot;bbbb&quot;;
   string str3;
   int  len ;
 
   // 复制 str1 到 str3
   str3 = str1;
   cout &lt;&lt; &quot;str3 : &quot; &lt;&lt; str3 &lt;&lt; endl;
 
   // 连接 str1 和 str2
   str3 = str1 + str2;
   cout &lt;&lt; &quot;str1 + str2 : &quot; &lt;&lt; str3 &lt;&lt; endl;
 
   // 连接后，str3 的总长度
   len = str3.size();
   cout &lt;&lt; &quot;str3.size() :  &quot; &lt;&lt; len &lt;&lt; endl;
 
   return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[t];function r(a,v){return i(),s("div",null,d)}const m=n(l,[["render",r],["__file","18.C__字符串.html.vue"]]);export{m as default};
