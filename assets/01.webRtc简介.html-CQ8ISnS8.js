import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as n}from"./app-PoU5pAeB.js";const d={},s=n(`<p>WebRTC（Web Real-Time Communication）是一种开源技术，允许浏览器和移动应用通过简单的API实现实时音视频通信和数据传输， 而无需安装插件或第三方软件。它由Google主导开发，现已成为W3C和IETF的标准。</p><h2 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能" aria-hidden="true">#</a> 核心功能</h2><h3 id="音视频通信" tabindex="-1"><a class="header-anchor" href="#音视频通信" aria-hidden="true">#</a> 音视频通信</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>支持高质量的实时音视频通话，包括降噪、回声消除、动态码率调整等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p连接" tabindex="-1"><a class="header-anchor" href="#p2p连接" aria-hidden="true">#</a> P2P连接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过ICE/STUN/TURN技术穿透NAT和防火墙，建立直接点对点连接（若失败则通过中继服务器）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据传输" tabindex="-1"><a class="header-anchor" href="#数据传输" aria-hidden="true">#</a> 数据传输</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过RTCDataChannel传输任意数据（如文件、游戏状态等），延迟低，类似WebSocket但无需服务器中转。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="webrtc-的通信流程" tabindex="-1"><a class="header-anchor" href="#webrtc-的通信流程" aria-hidden="true">#</a> WebRTC 的通信流程</h2><p>信令协商、NAT/防火墙穿透 、建立P2P连接 、 媒体/数据传输</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>信令协商:
    交换双方的网络和媒体信息（通过第三方信令服务器中转，WebRTC 本身不定义信令协议）
        


NAT/防火墙穿透（ICE）
    建立直接 P2P 连接或通过中继服务器转发。


建立P2P连接
    成功时：直接通过 UDP 传输音视频（SRTP）或数据（SCTP）。
    失败时：回退到 TURN 服务器中继（TCP/UDP）。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[s];function l(t,c){return a(),i("div",null,r)}const m=e(d,[["render",l],["__file","01.webRtc简介.html.vue"]]);export{m as default};
