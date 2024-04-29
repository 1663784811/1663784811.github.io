import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-X9DILhSX.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
常量：
    #define URl &quot;http://xxxxx.xxx&quot;
    const long aa = 111L;

    
宏定义：



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-98-03关键字共63个" tabindex="-1"><a class="header-anchor" href="#c-98-03关键字共63个" aria-hidden="true">#</a> C++98/03关键字共63个</h3><h4 id="asm" tabindex="-1"><a class="header-anchor" href="#asm" aria-hidden="true">#</a> asm</h4><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>基本语法：
asm(&quot;assembly code&quot;);
指定操作数：
asm(&quot;assembly code&quot; : output : input : clobber);
扩展asm
asm(&quot;assembly code&quot; : output : input : clobber : options);
嵌入汇编中的变量：
asm(&quot;assembly code&quot; : : &quot;r&quot;(variable));
汇编模板：
asm volatile(&quot;assembly code&quot; : : : &quot;memory&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typedef-使用-typedef-为一个已有的类型取一个新的名字" tabindex="-1"><a class="header-anchor" href="#typedef-使用-typedef-为一个已有的类型取一个新的名字" aria-hidden="true">#</a> typedef 使用 typedef 为一个已有的类型取一个新的名字</h4><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>1.定义新的类型别名：
typedef int Integer;
typedef float RealNumber;

2.结构体类型的简化：
typedef struct {
    int x;
    int y;
} Point;

3.指针类型的别名：
typedef char* String;

4.枚举类型的简化：
typedef enum {
    MON,
    TUE,
    WED,
    THU,
    FRI
} Weekday;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*  do
*  if
*  return                          
auto
*  double
*  inline
*  short
typeid
*  bool
dynamic_cast
*  int
*  signed
typename
break
*  else
*  long                                  
*  sizeof                                sizeof(变量名) 查询变量所占用的内存
union
*  case
enum
mutable
*  static
*  unsigned
*  catch
explicit
namespace
static_cast
*  using
*  char
export
*  new
*  struct
virtual
*  class
*  extern
operator
switch
*  void
*  const
*  false
private
template
volatile
const_cast
*  float
protected
*  this
wchar_t
continue
*  for
*  public
*  throw
*  while
*  default
friend
register
*  true
*  delete
*  goto
reinterpret_cast
*  try
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-11-关键字共73个-新增10个关键字" tabindex="-1"><a class="header-anchor" href="#c-11-关键字共73个-新增10个关键字" aria-hidden="true">#</a> C++11 关键字共73个 新增10个关键字：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alignas
alignof
char16_t
char32_t
constexpr
decltype
noexcept
nullptr
static_assert
thread_local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[l];function v(r,c){return i(),n("div",null,a)}const m=e(d,[["render",v],["__file","03.基本关键字.html.vue"]]);export{m as default};
