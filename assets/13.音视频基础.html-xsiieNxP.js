import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-TdGDaay9.js";const s={},l=d(`<h2 id="常见视频格式" tabindex="-1"><a class="header-anchor" href="#常见视频格式" aria-hidden="true">#</a> 常见视频格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>H264 H265
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见音频格式" tabindex="-1"><a class="header-anchor" href="#常见音频格式" aria-hidden="true">#</a> 常见音频格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ACC
mp3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>视频通话过程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=====  采集
    第一步.采集视频、音频
        格式:
            YUV 格式
                YUV420 (I420/YV12)：一种常见的格式，Y 分量（亮度）独立存储，U 和 V 分量（色度）分别以 2x2 的子采样率存储。I420 和 YV12 的区别在于 U 和 V 分量的存储顺序不同。
                YUV422 (YUY2/YUYV/UYVY)：每两个像素共享一个 U 和一个 V 分量。常用于视频采集和传输，能够在保持较好图像质量的同时减少数据量。
                YUV444：每个像素都有独立的 Y、U 和 V 分量，通常用于高质量图像处理，但数据量较大。
            RGB 格式
                RGB24：每个像素用 24 位表示，分别是 8 位的红色、绿色和蓝色。数据量较大，但没有色度抽样，图像质量高。
                ARGB/RGBA：每个像素用 32 位表示，除了 RGB 之外，还包含一个 8 位的 Alpha 通道。
                
    第二步.压缩视频、音频 ( 编码 )
        视频: H.264 、 H.265  
        音频: acc 、 mp3
        字幕: 
    
    第三步.封装成包, 将视频、音频、字幕打一个数据包
        格式: mp4、 avi 、.....




=====  网络传输
    底层协议: udp tcp
    应用层协议: rtmp rtsp webrtc 








=====  播放
    1.拆包
    2.解压（解码）
    3.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function v(r,c){return i(),n("div",null,a)}const t=e(s,[["render",v],["__file","13.音视频基础.html.vue"]]);export{t as default};
