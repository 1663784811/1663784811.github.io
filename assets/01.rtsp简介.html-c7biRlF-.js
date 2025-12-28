import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-DfdOvKvb.js";const d={},a=s(`<p>RTSP：负责控制指令交互（播放、暂停、停止、快进），端口默认 554</p><p>RTP：负责传输编码后的音视频裸流（H.264/AAC），端口随机或自定义</p><p>RTCP：负责传输控制（同步、丢包统计、带宽反馈），一般比 RTP 端口大 1</p><p>✅ 核心逻辑：RTSP 指挥，RTP 传数据，RTCP 保质量，三者缺一不可</p><h3 id="阶段-1-建立连接-tcp-三次握手-基础前提" tabindex="-1"><a class="header-anchor" href="#阶段-1-建立连接-tcp-三次握手-基础前提" aria-hidden="true">#</a> 阶段 1：建立连接（TCP 三次握手，基础前提）</h3><p>RTSP 基于 TCP 传输（可靠传输，保证控制指令不丢失），先完成 TCP 三次握手，客户端主动连接服务端 554 端口，建立控制通道。</p><h3 id="阶段-2-options-查询服务端能力-第一步必发" tabindex="-1"><a class="header-anchor" href="#阶段-2-options-查询服务端能力-第一步必发" aria-hidden="true">#</a> 阶段 2：OPTIONS - 查询服务端能力（第一步必发）</h3><p>客户端→服务端：查询服务端支持的 RTSP 方法（如 PLAY/PAUSE/SETUP）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>核心报文（精简版，可直接参考）：
plaintext
OPTIONS rtsp://192.168.1.100:554/stream1 RTSP/1.0
CSeq: 1  # 序列号，必须递增，匹配请求和响应
User-Agent: Client/1.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端→客户端：返回支持的方法列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
RTSP/1.0 200 OK
CSeq: 1  # 序列号必须和请求一致
Public: OPTIONS, DESCRIBE, SETUP, PLAY, PAUSE, TEARDOWN  # 支持的控制方法

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阶段-3-describe-获取流媒体描述-协商参数核心" tabindex="-1"><a class="header-anchor" href="#阶段-3-describe-获取流媒体描述-协商参数核心" aria-hidden="true">#</a> 阶段 3：DESCRIBE - 获取流媒体描述（协商参数核心）</h3><p>客户端→服务端：请求获取音视频流的编码格式、分辨率、采样率等关键参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>核心报文：
plaintext
DESCRIBE rtsp://192.168.1.100:554/stream1 RTSP/1.0
CSeq: 2
Accept: application/sdp  # 要求返回SDP格式（必选，参数都在SDP里）
User-Agent: Client/1.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端→客户端：返回 SDP（会话描述协议），核心是告诉客户端「流的具体参数」，嵌入式开发必解析这里的参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
RTSP/1.0 200 OK
CSeq: 2
Content-Type: application/sdp
Content-Length: xxx

v=0  # SDP版本
o=- 0 0 IN IP4 192.168.1.100  # 会话信息
s=stream1  # 流名称
t=0 0  # 会话时间（永久）
m=video 0 RTP/AVP 96  # 视频流：负载类型96（自定义，对应H.264）
a=rtpmap:96 H264/90000  # 负载96对应H.264，时钟频率90000（视频必用）
a=fmtp:96 profile-level-id=640028;sprop-parameter-sets=xxx  # H.264的SPS/PPS（解码必用）
m=audio 0 RTP/AVP 97  # 音频流：负载类型97
a=rtpmap:97 MPEG4-GENERIC/44100/2  # 对应AAC，采样率44100，双声道

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键：嵌入式端解码时，必须从 SDP 中提取H.264 的 SPS/PPS，否则无法解码。</p><h3 id="阶段-4-setup-建立流传输通道-核心步骤" tabindex="-1"><a class="header-anchor" href="#阶段-4-setup-建立流传输通道-核心步骤" aria-hidden="true">#</a> 阶段 4：SETUP - 建立流传输通道（核心步骤）</h3><p>客户端→服务端：协商 RTP/RTCP 的传输方式（UDP/TCP）、端口号，建立数据通道 核心报文（2 种传输方式，按需选） ✔️ 方式 1：UDP 传输（默认，延迟低，适合网络好的场景）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
SETUP rtsp://192.168.1.100:554/stream1/track1 RTSP/1.0  # track1=视频流，track2=音频流
CSeq: 3
Transport: RTP/AVP;unicast;client_port=6000-6001  # 客户端RTP端口6000，RTCP6001
User-Agent: Client/1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✔️ 方式 2：TCP 传输（RTSP Interleaved，适合网络差 / 防火墙场景，嵌入式常用）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
SETUP rtsp://192.168.1.100:554/stream1/track1 RTSP/1.0
CSeq: 3
Transport: RTP/AVP/TCP;interleaved=0-1  # 0=RTP，1=RTCP，复用RTSP的TCP通道
User-Agent: Client/1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端→客户端：确认传输方式和端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
RTSP/1.0 200 OK
CSeq: 3
Transport: RTP/AVP/TCP;interleaved=0-1;server_port=8000-8001
Session: 12345678  # 会话ID，后续指令必须携带，唯一标识连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阶段-5-play-开始传输流-真正传数据" tabindex="-1"><a class="header-anchor" href="#阶段-5-play-开始传输流-真正传数据" aria-hidden="true">#</a> 阶段 5：PLAY - 开始传输流（真正传数据）</h3><p>客户端→服务端：发送播放指令，服务端收到后开始用 RTP 传输音视频流</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>核心报文（可指定播放范围，默认从头播）
plaintext
PLAY rtsp://192.168.1.100:554/stream1 RTSP/1.0
CSeq: 5
Session: 12345678  # 必须和SETUP返回的会话ID一致
Range: npt=0.000-  # 播放范围：从0秒开始，一直播
User-Agent: Client/1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端→客户端：确认播放，同时开始推送 RTP 流</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
RTSP/1.0 200 OK
CSeq: 5
Session: 12345678
RTP-Info: url=rtsp://192.168.1.100:554/stream1/track1;seq=1000;rtptime=12345678  # RTP起始序列号和时间戳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阶段-6-teardown-断开连接-收尾" tabindex="-1"><a class="header-anchor" href="#阶段-6-teardown-断开连接-收尾" aria-hidden="true">#</a> 阶段 6：TEARDOWN - 断开连接（收尾）</h3><p>客户端→服务端：发送停止指令，断开控制通道和数据通道</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>核心报文
plaintext
TEARDOWN rtsp://192.168.1.100:554/stream1 RTSP/1.0
CSeq: 6
Session: 12345678
User-Agent: Client/1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端→客户端：确认断开</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plaintext
RTSP/1.0 200 OK
CSeq: 6
Session: 12345678
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[a];function r(t,v){return i(),n("div",null,l)}const m=e(d,[["render",r],["__file","01.rtsp简介.html.vue"]]);export{m as default};
