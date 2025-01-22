import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as d,b as n,d as s,e as v,a as c}from"./app-fpcHT6LC.js";const t={},r=n("h2",{id:"下载源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载源码","aria-hidden":"true"},"#"),s(" 下载源码")],-1),o={href:"https://docs.u-boot.org/en/latest/build/index.html",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>已发布的版本可用作使用以下命名方案的标签：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v&lt;year&gt;.&lt;month&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>候选版本名称如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v&lt;year&gt;.&lt;month&gt;-rc&lt;number&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-gcc-进行构建" tabindex="-1"><a class="header-anchor" href="#使用-gcc-进行构建" aria-hidden="true">#</a> 使用 GCC 进行构建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc gcc-aarch64-linux-gnu <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">bc</span> bison build-essential coccinelle <span class="token punctuation">\\</span>
  device-tree-compiler dfu-util efitools flex gdisk graphviz imagemagick <span class="token punctuation">\\</span>
  liblz4-tool libgnutls28-dev libguestfs-tools libncurses-dev <span class="token punctuation">\\</span>
  libpython3-dev libsdl2-dev libssl-dev lz4 lzma lzma-alone openssl <span class="token punctuation">\\</span>
  pkg-config python3 python3-asteval python3-coverage python3-filelock <span class="token punctuation">\\</span>
  python3-pkg-resources python3-pycryptodome python3-pyelftools <span class="token punctuation">\\</span>
  python3-pytest python3-pytest-xdist python3-sphinxcontrib.apidoc <span class="token punctuation">\\</span>
  python3-sphinx-rtd-theme python3-subunit python3-testtools <span class="token punctuation">\\</span>
  python3-virtualenv swig uuid-dev <span class="token parameter variable">-y</span>


<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc-arm-linux-gnueabihf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uboot-目录结构" tabindex="-1"><a class="header-anchor" href="#uboot-目录结构" aria-hidden="true">#</a> uboot 目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
arch          包含与处理器架构相关的代码。arm/、x86/、powerpc/ 等
board         存放不同硬件平台（开发板、系统模块等）的初始化代码
cmd           包含 U-Boot 命令行接口（CLI）的命令实现。
common        包含 U-Boot 的通用代码，例如启动顺序、主循环、环境变量处理等核心功能的实现。
configs       包含不同硬件平台的配置文件（.config） 每个配置文件定义了对应平台的编译选项和启动设置。
doc           U-Boot 的文档目录，包含了项目的文档文件、开发指南和其他相关说明文档。
drivers       包含 U-Boot 的设备驱动程序，如串口、网卡、I2C、SPI、USB 等。
dts           存放设备树（Device Tree Source，DTS）文件，这些文件描述了硬件的配置和连接关系 DTS 文件用于配置和初始化硬件设备
env           处理 U-Boot 环境变量的代码，包括环境变量的存储、加载、保存等操作。
fs            文件系统支持代码，U-Boot 支持多种文件系统，如 FAT、EXT、UBIFS 等。
include       头文件目录，包含 U-Boot 项目中的所有公共头文件。
lib           各架构的通用库代码，不同架构有对应的子目录（如 lib_arm/、lib_generic/）
net           网络相关代码，包括网络协议栈、TFTP、DHCP 等实现。支持的网络设备驱动也在此目录中实现
scripts       存放编译过程中使用的脚本和工具，包括 Makefile 脚本、配置脚本等。
tools         包含了一些工具程序，这些工具用于生成 U-Boot 镜像、处理二进制文件、环境变量工具等

Kconfig       配置选项文件，使用 menuconfig 工具来配置 U-Boot 的编译选项。
Makefile      U-Boot 的顶层 Makefile，定义了编译规则和流程。

api           包含 U-Boot 提供给外部应用程序或操作系统的 API 接口。
boot          包含与系统引导（booting）相关的代码。 管理引导加载过程中的不同阶段，包括加载内核、初始化硬件、以及启动操作系统等。
disk          处理与磁盘（disk）相关的操作，包括分区管理、磁盘格式化、以及文件系统操作等。提供对物理磁盘和分区表的支持。


test
examples

Kbuild

MAINTAINERS
post
config.mk

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="u-boot-编译" tabindex="-1"><a class="header-anchor" href="#u-boot-编译" aria-hidden="true">#</a> U-BOOT 编译</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 清除已经编译文件</span>
<span class="token function">make</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm <span class="token assign-left variable">CROSS_COMPILE</span><span class="token operator">=</span>arm-linux-gnueabihf- distclean

<span class="token comment">## 生成配置文件  orangepi_pc_defconfig配置文件</span>
<span class="token function">make</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm <span class="token assign-left variable">CROSS_COMPILE</span><span class="token operator">=</span>arm-linux-gnueabihf- orangepi_pc_defconfig

<span class="token comment">## 编译</span>
<span class="token function">make</span> <span class="token assign-left variable">V</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm <span class="token assign-left variable">CROSS_COMPILE</span><span class="token operator">=</span>arm-linux-gnueabihf- <span class="token parameter variable">-j12</span>


<span class="token comment">## 编译后的文件 </span>
u-boot*
u-boot.bin
.u-boot.bin.cmd
u-boot.cfg
.u-boot.cmd
u-boot.dtb
u-boot-dtb.bin
.u-boot-dtb.bin.cmd
u-boot-dtb.img
.u-boot-dtb.img.cmd
u-boot.dtb.out
u-boot.img
.u-boot.img.cmd
u-boot.lds
.u-boot.lds.cmd
u-boot.map
u-boot-nodtb.bin*
.u-boot-nodtb.bin.cmd
u-boot.srec*
.u-boot.srec.cmd
u-boot-sunxi-with-spl.bin
u-boot-sunxi-with-spl.map
u-boot.sym
.u-boot.sym.cmd


<span class="token comment">## 烧录到开发板</span>
<span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>u-boot-sunxi-with-spl.bin <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">seek</span><span class="token operator">=</span><span class="token number">8</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="u-boot-命令" tabindex="-1"><a class="header-anchor" href="#u-boot-命令" aria-hidden="true">#</a> U-BOOT 命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## 帮助信息
help

## 查看命令帮助信息 
? 命令名

# 打印板子信息
print
bdinfo 

# 设置环境变量
setenv  

# 保存环境变量
saveenv

# 显示内存值
md [.b,.w,.l] address [length]

# 指定数据填充一段内存
mw [.b,.w,.l] address value [count]

# 复制一段内存一到另一段内存
cp [.b,.w,.l] source target count

# cmp 比较两段内存的数据是否相等
cmp [.b, .w, .l] address address count

# ping 命令
ping 192.168.0.1

# 设置网络
setenv ipaddr 192.168.0.100
setenv ethaddr 00:04:9f:04:d2:35
setenv gatewayip 192.168.0.1
setenv netmask 255.255.255.0
setenv serverip 192.168.1.250
saveenv

# nfs 
nfs 80800000 192.168.101:/home/why/linux/fns/zImage


# tftp

# emc sd 
mmc list

# 查看版本
version

# 查看分区信息
fatinfo mmc 0:1 

# 查看分区格式
fstype mmc 0:1

# 将指定的文件读取到DRAM 
fatload mmc 1:1 8080000 zImage

# 将DRAM中的数据写入到MMC设备中
fatwrite  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(m,p){const e=a("ExternalLinkIcon");return l(),d("div",null,[r,n("p",null,[n("a",o,[s("U-Boot官网"),v(e)])]),u])}const f=i(t,[["render",b],["__file","03.uboot简介.html.vue"]]);export{f as default};
