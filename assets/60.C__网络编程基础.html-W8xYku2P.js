import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-2JEAsQOb.js";const a={},s=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法	      类型	            适用场景	                优缺点
accept	 阻塞式	            单个连接	                ✅ 简单易用，适合小型服务器❌ 只能处理单个连接，性能差
select	I/O 多路复用	        少量连接（几十到几百）	    ✅ 兼容性好，适用于小规模并发❌ 每次检查都遍历整个 fd_set，效率低
poll	I/O 多路复用	        中等规模连接（几百到上千）	✅ 不受 FD_SETSIZE 限制，支持更多连接❌ 仍然需要遍历整个 pollfd 数组，性能一般
epoll	I/O 多路复用（高效）	大规模连接（上万）	        ✅ 适合高并发，使用事件驱动方式❌ 仅适用于 Linux，跨平台性较差
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络模型osi" tabindex="-1"><a class="header-anchor" href="#网络模型osi" aria-hidden="true">#</a> 网络模型OSI</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>物理层（Physical Layer）：负责传输数据的物理媒介和比特流，例如电缆、光纤、无线信号等。

数据链路层（Data Link Layer）：提供对物理层传输的比特流进行分帧和差错校验，确保可靠的数据传输，例如以太网协议。
    以太网（Ethernet）：是最常用的局域网技术，定义了数据链路层的帧格式和MAC地址的使用规则。
    PPP（Point-to-Point Protocol）：用于在点对点连接上建立和维护数据链路连接，例如拨号连接或串行链路。
    HDLC（High-Level Data Link Control）：一种数据链路层协议，用于在点对点或点对多点的通信链路上提供可靠的数据传输。
    SLIP（Serial Line Internet Protocol）：一种简单的数据链路层协议，通常用于串行线路上的IP数据传输。
    PPPoE（Point-to-Point Protocol over Ethernet）：在以太网上运行的一种协议，将PPP封装在以太网帧中，用于在宽带接入网络中建立和维护连接。
    Wi-Fi（Wireless Fidelity）：无线局域网技术，定义了无线数据链路层的帧格式和协议，如IEEE 802.11系列标准。
网络层（Network Layer）：处理分组的路由和转发，实现不同网络之间的数据传输，例如IP协议。

传输层（Transport Layer）：提供端到端的可靠数据传输，包括分段、流量控制和错误恢复，例如TCP协议和UDP协议。

会话层（Session Layer）：建立、管理和终止会话（连接）中的通信会话，例如会话控制协议。

表示层（Presentation Layer）：处理数据的表示格式，包括数据加密、压缩和格式转换，例如加密协议和压缩协议。

应用层（Application Layer）：提供网络应用服务和用户接口，例如HTTP协议、FTP协议、SMTP协议等。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的网络协议" tabindex="-1"><a class="header-anchor" href="#常用的网络协议" aria-hidden="true">#</a> 常用的网络协议</h2><h3 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> ARP</h3><h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> IP</h3><h3 id="icmp" tabindex="-1"><a class="header-anchor" href="#icmp" aria-hidden="true">#</a> ICMP</h3><h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h3><p>三次握手</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四次挥手</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>过程


半关闭状态

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2MSL ( TIME_WAIT 状态 )</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 TCP 连接关闭的过程中，主动关闭方 在发送 FIN 后，
会进入 TIME_WAIT 状态，
并保持 2MSL（Maximum Segment Lifetime，最大报文生存时间） 的时长。

如何优化 TIME_WAIT
1.开启端口快速回收(推荐)
echo 1 &gt; /proc/sys/net/ipv4/tcp_tw_reuse
2.减少 MSL 时间
echo 30 &gt; /proc/sys/net/ipv4/tcp_fin_timeout
3.使用 SO_LINGER 立即关闭连接
    struct linger so_linger;
    so_linger.l_onoff = 1;
    so_linger.l_linger = 0;
    setsockopt(sockfd, SOL_SOCKET, SO_LINGER, &amp;so_linger, sizeof(so_linger));
4.使用 SO_REUSEADDR 复用端口
    int reuse = 1;
    setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &amp;reuse, sizeof(reuse));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滑动窗口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>滑动窗口是一种流量控制机制，用于 TCP 传输中优化数据传输效率，防止网络拥塞。它允许发送方在无需等待 ACK 的情况下连续发送多个数据包，提高吞吐量

发送窗口（Send Window）：发送方可以发送但未确认的数据。
接收窗口（Receive Window）：接收方可以接收的数据范围。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h3><h2 id="网络字节序" tabindex="-1"><a class="header-anchor" href="#网络字节序" aria-hidden="true">#</a> 网络字节序</h2><h3 id="大端序列-和-小端序列" tabindex="-1"><a class="header-anchor" href="#大端序列-和-小端序列" aria-hidden="true">#</a> 大端序列 和 小端序列</h3><p>网络传输用的是大端序列, 主机用的是小端序列</p><p>大端与小端转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>htonl --&gt; 本地--》网络 （IP）
htons --&gt; 本地--》网络 (port) 
ntohl --&gt; 网络--》 本地（IP） 
ntohs --&gt; 网络--》 本地（Port）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[s];function r(t,v){return i(),n("div",null,l)}const o=e(a,[["render",r],["__file","60.C__网络编程基础.html.vue"]]);export{o as default};
