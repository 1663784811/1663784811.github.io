import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as t,b as n,d as e,e as d,a as o}from"./app-oh0rSG-9.js";const c={},r=n("h2",{id:"下载源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载源码","aria-hidden":"true"},"#"),e(" 下载源码")],-1),v={href:"https://docs.u-boot.org/en/latest/build/index.html",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>已发布的版本可用作使用以下命名方案的标签：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v&lt;year&gt;.&lt;month&gt;
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uboot-目录结构" tabindex="-1"><a class="header-anchor" href="#uboot-目录结构" aria-hidden="true">#</a> uboot 目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(b,m){const s=a("ExternalLinkIcon");return l(),t("div",null,[r,n("p",null,[n("a",v,[e("U-Boot官网"),d(s)])]),u])}const f=i(c,[["render",p],["__file","03.uboot简介.html.vue"]]);export{f as default};
