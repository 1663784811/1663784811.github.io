import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-46rmjwfB.js";const l="/assets/img-WMsscG4t.png",d="/assets/img1-1A6O6Aqn.png",a="/assets/img2-o6c6Nte9.png",c="/assets/img3-POcjErOe.png",r="/assets/img4-gumYQVa2.png",t={},v=s(`<p>文档: https://blog.csdn.net/djstavaV/article/details/125383444</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>环境
    widnows 10
    clion 2022.1.1
    mingw 8.1.0
    opencv 4.5.5


MinGW
    https://sourceforge.net/projects/mingw-w64/files/Toolchains targetting Win64/
    
    解压，然后将其中的 bin 目录加入到系统环境变量中
    新开一个命令行，输入命令 gcc -v 来验证一下

cmake
    同样也是来到官网，https://cmake.org/download/，
    将其也加入到系统环境变量中
    
opencv
    来到官网 https://opencv.org/releases/，下载 windows 对应的版本，现在最新的版本是 4.5.5






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="第二种方法" tabindex="-1"><a class="header-anchor" href="#第二种方法" aria-hidden="true">#</a> 第二种方法</h2><p>教程： https://docs.opencv.org/4.x/d3/d52/tutorial_windows_install.html</p><ol><li><p>下载安装包:</p><p>https://sourceforge.net/projects/opencvlibrary/files/4.6.0/</p><p>解压到 D:/c</p><ol><li>配置环境变量</li></ol><p>OPENCV_DIR D:\\c\\opencv\\build\\x64\\vc15</p><p>path %OPENCV_DIR%\\bin</p></li><li><p>新建项目</p><p><img src="`+l+'" alt="img.png"></p></li><li><p>设置包含目录</p><p><img src="'+d+'" alt="img.png"></p></li><li><p>设置库目录</p><p><img src="'+a+'" alt="img.png"></p></li><li><p>配置连接器 <img src="'+c+'" alt="img.png"></p></li><li><p>修配 <img src="'+r+`" alt="img.png"></p></li></ol><p>7.编写代码</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;opencv2/opencv.hpp&gt;
#include &lt;iostream&gt;

using namespace cv;
using namespace std;

int main(int argc, char* argv[])
{
	Mat src = imread(&quot;D:/a.jpg&quot;);
	imshow(&quot;input&quot;, src);
	waitKey(0);
	destroyAllWindows();
	return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=[v];function p(o,u){return n(),e("div",null,m)}const _=i(t,[["render",p],["__file","01.opencv开发环境搭建.html.vue"]]);export{_ as default};
