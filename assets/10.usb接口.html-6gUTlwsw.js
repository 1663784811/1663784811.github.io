import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as s}from"./app-7pIbjhuS.js";const d={},l=s(`<p>USB 2.0：4根线（VCC、GND、D+、D-）。</p><p>USB 3.0/3.1：9根线（VCC、GND、D+、D-、TX+、TX-、RX+、RX-，以及屏蔽层）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. VCC (Power)：提供电源，通常为**+5V**。

2. GND (Ground)：接地线，所有的电气设备共享一个公共地。

3. D+ (Data Positive)：差分信号中的正极数据线，用于传输数据。

4. D- (Data Negative)：差分信号中的负极数据线，用于传输数据

5. SuperSpeed TX+ (Transmit Positive)

6. SuperSpeed TX- (Transmit Negative)
    这两根线用于发送数据，采用差分信号传输。

7. SuperSpeed RX+ (Receive Positive)

8. SuperSpeed RX- (Receive Negative)
    这两根线用于接收数据，采用差分信号传输。

9. 以及屏蔽层

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设备的识别" tabindex="-1"><a class="header-anchor" href="#设备的识别" aria-hidden="true">#</a> 设备的识别</h2><p>USB（Universal Serial Bus）设备的识别是通过一系列标准的协议步骤完成的。在设备连接到主机（如电脑、手机等）时，USB主机会进行设备检测、识别和初始化。以下是USB识别设备的基本流程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 电气连接检测
    当USB设备插入时，**VCC（电源线）和GND（接地线）提供电力，设备开始工作。USB主机会通过数据线（D+和D-）**上的电压变化检测到有设备插入。
    USB设备插入后，主机会根据上拉电阻检测设备类型：
    D+线上的上拉电阻表示设备是全速/高速（USB 1.1/2.0）设备。
    D-线上的上拉电阻表示设备是低速（USB 1.1）设备。
2. 设备复位（Reset）
    检测到设备后，USB主机会对设备执行复位操作。主机通过拉低D+和D-线一段时间来复位设备。
    设备通过复位进入默认状态，等待进一步的初始化。
3. 设备速度协商
    在USB 3.0及以上的版本中，还涉及到设备传输速度的协商。USB 3.0设备使用独立的SuperSpeed信号线进行高性能传输。
    在识别过程中，设备会告知主机它支持的最高传输速度（如低速、全速、高速、SuperSpeed）。
4. 分配地址
    设备复位后，USB主机会为设备分配一个唯一地址。USB设备通过发送描述符告知主机其设备类型、功能和能力。
    主机使用SET_ADDRESS命令为设备分配一个7位地址，这个地址用于之后所有的通信。
5. 设备描述符（Device Descriptor）请求
    主机发送请求（通过控制传输）来获取设备的设备描述符，其中包含关于设备的基本信息，包括设备类型、厂商ID、产品ID、设备版本号等。
    典型的设备描述符内容包括：
    设备类型（如存储设备、音频设备等）。
    厂商ID（Vendor ID, VID）。
    产品ID（Product ID, PID）。
    设备类代码（Device Class, 如大容量存储、HID等）。
6. 配置描述符（Configuration Descriptor）请求
    主机通过控制传输进一步请求设备的配置描述符，该描述符提供有关设备功能的详细信息，包括设备所需的电流、接口（interface）和端点（endpoint）配置等。
    配置描述符通常包含：
    接口描述符：定义设备的每个接口。
    端点描述符：定义设备通信的端点，如输入、输出端点。
7. 驱动程序加载
    主机系统根据获取的设备描述符信息，查找和加载合适的驱动程序。
    驱动程序根据设备的类信息选择。比如：
    存储设备：加载大容量存储驱动程序（Mass Storage Class Driver）。
    键盘、鼠标：加载HID（Human Interface Device）驱动程序。
    如果设备是一个不常见的或自定义设备，系统可能会根据设备的**厂商ID（VID）和产品ID（PID）**加载专门的驱动程序，或提示用户安装驱动。
8. 设备初始化
    主机成功加载设备驱动程序后，会初始化设备，并使设备进入工作状态。
    设备开始按其功能进行通信，比如传输数据、接收命令等
9. 设备的后续通信
    一旦识别完成，设备和主机之间可以通过不同的端点进行通信。每个端点负责处理特定的数据传输类型，如控制、批量传输、同步传输和中断传输。
    通过这些端点，设备执行其功能。例如，USB键盘通过中断端点定期发送按键信息，USB存储设备通过批量传输端点发送文件数据。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[l];function a(r,c){return i(),n("div",null,v)}const b=e(d,[["render",a],["__file","10.usb接口.html.vue"]]);export{b as default};
