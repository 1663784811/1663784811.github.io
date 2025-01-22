import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as l,b as n,d,e as c,a as r}from"./app-fpcHT6LC.js";const t={},v={href:"https://www.kernel.org/",target:"_blank",rel:"noopener noreferrer"},o=r(`<h3 id="文件夹结构" tabindex="-1"><a class="header-anchor" href="#文件夹结构" aria-hidden="true">#</a> 文件夹结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. arch/用途: 包含与特定架构（如 x86、ARM、MIPS 等）相关的代码。每个架构都有一个子目录，比如 x86/、arm/ 等。
示例: arch/x86/ 存放 x86 架构的启动代码、汇编代码和架构特定的实现。

2. block/用途: 包含与块设备（如硬盘、SSD）相关的代码，包括块层的实现和块设备驱动。
示例: 处理 I/O 请求调度、块设备管理等。

3. crypto/ 用途: 包含加密算法和框架的实现代码，如 AES、SHA 等。这些代码被内核的加密子系统、文件系统加密、网络安全协议等使用。
示例: crypto/aes.c 实现了 AES 加密算法。

4. Documentation/ 用途: 包含内核的文档，涵盖了内核配置、API 文档、内核开发指南等。这个目录对于开发者和用户理解内核非常有用。
示例: Documentation/filesystems/ 介绍了不同文件系统的工作原理和使用方法。

5. drivers/ 用途: 包含所有设备驱动程序的代码，按设备类型分类。常见子目录包括 usb/（USB 设备驱动）、net/（网络设备驱动）、gpu/（图形处理单元驱动）等。
示例: drivers/net/ 目录下是网络驱动程序的代码。

6. fs/用途: 包含文件系统的实现代码。每种文件系统（如 ext4、NTFS、XFS）都有自己的子目录。
示例: fs/ext4/ 包含 ext4 文件系统的代码。

7. include/用途: 包含内核的全局头文件，这些文件定义了内核 API、数据结构、常量等。
示例: include/linux/ 是最重要的子目录，包含了大部分 Linux 内核使用的头文件，如 include/linux/kernel.h。

8. init/用途: 包含内核启动时的初始化代码。这里的代码负责在内核启动时初始化各个子系统和模块。
示例: init/main.c 是内核启动的主入口。

9. ipc/用途: 包含进程间通信（IPC）的实现代码，包括信号量、共享内存、消息队列等。
示例: ipc/msg.c 处理消息队列的实现。

10. kernel/用途: 包含核心内核代码，涉及进程调度、信号处理、内核同步机制等。
示例: kernel/sched/ 包含调度器的代码。

11. lib/用途: 包含通用库代码，供内核其他部分使用。这些库提供了常见的数据结构和算法实现，如链表、哈希表、压缩算法等。
示例: lib/string.c 提供了字符串处理的基本函数。

12. mm/用途: 包含内存管理相关的代码，处理物理内存、虚拟内存、分页、内存分配等。
示例: mm/slab.c 处理 slab 分配器的实现。

13. net/用途: 包含网络子系统的代码，处理协议栈（如 TCP/IP）、网络接口和相关网络功能。
示例: net/ipv4/ 包含 IPv4 协议的实现代码。

14. scripts/用途: 包含辅助编译和内核开发的脚本。这些脚本用于自动生成代码、配置内核、打补丁等。
示例: scripts/kconfig/ 包含内核配置系统的脚本。

15. security/用途: 包含与内核安全相关的代码，包括 SELinux、AppArmor 等安全模块的实现。
示例: security/selinux/ 包含 SELinux 的实现代码。

16. sound/用途: 包含与音频子系统相关的代码，包括声卡驱动、音频处理等。
示例: sound/usb/ 包含 USB 声卡驱动的代码。

17. tools/用途: 包含一些与内核开发相关的工具和调试工具，比如 perf 性能分析工具。
示例: tools/perf/ 包含了 perf 工具的代码。

18. usr/用途: 包含生成嵌入式 initramfs（初始内存文件系统）的代码。内核启动时可以将该文件系统加载到内存中，以便引导系统。
示例: usr/initramfs_data.cpio 是一个常见的 initramfs 文件。

19. virt/用途: 包含虚拟化相关的代码，例如 KVM（Kernel-based Virtual Machine）的实现。
示例: virt/kvm/ 包含 KVM 的核心代码。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内核编译" tabindex="-1"><a class="header-anchor" href="#内核编译" aria-hidden="true">#</a> 内核编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 使用默认配置</span>
<span class="token function">make</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm defconfig

<span class="token comment">## 配置</span>
<span class="token function">make</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm menuconfig

<span class="token comment">## 编译</span>
<span class="token function">make</span> <span class="token parameter variable">-j12</span>

<span class="token comment">## 将编译好的模块安装到指定目录</span>
<span class="token function">make</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>arm <span class="token assign-left variable">CROSS_COMPILE</span><span class="token operator">=</span>arm-none-eabi- modules_install <span class="token assign-left variable">INSTALL_MOD_PATH</span><span class="token operator">=</span>output/modules

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根文件系统" tabindex="-1"><a class="header-anchor" href="#根文件系统" aria-hidden="true">#</a> 根文件系统</h3><p>选择合适的根文件系统</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**BusyBox：**轻量级的嵌入式 Linux 根文件系统。

**Buildroot：**可生成定制化的嵌入式 Linux 系统。

**Yocto Project：**用于创建自定义 Linux 发行版的开源项目。

**现成的发行版：**如 Debian、Ubuntu 的 ARM 版本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载并编译 BusyBox</span>
<span class="token function">wget</span> https://busybox.net/downloads/busybox-1.33.1.tar.bz2
<span class="token function">tar</span> <span class="token parameter variable">-xjf</span> busybox-1.33.1.tar.bz2
<span class="token builtin class-name">cd</span> busybox-1.33.1
<span class="token function">make</span> defconfig
<span class="token function">make</span> <span class="token assign-left variable">CROSS_COMPILE</span><span class="token operator">=</span>arm-none-eabi- <span class="token function">install</span>

<span class="token comment"># 创建根文件系统目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> rootfs/<span class="token punctuation">{</span>dev,etc,proc,sys,usr/bin,usr/sbin<span class="token punctuation">}</span>

<span class="token comment"># 将 BusyBox 安装到根文件系统</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> _install/* rootfs/

<span class="token comment"># 创建必要的设备节点</span>
<span class="token function">sudo</span> <span class="token function">mknod</span> <span class="token parameter variable">-m</span> <span class="token number">666</span> rootfs/dev/console c <span class="token number">5</span> <span class="token number">1</span>
<span class="token function">sudo</span> <span class="token function">mknod</span> <span class="token parameter variable">-m</span> <span class="token number">666</span> rootfs/dev/null c <span class="token number">1</span> <span class="token number">3</span>

<span class="token comment"># 配置初始化脚本等</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;::sysinit:/etc/init.d/rcS&quot;</span> <span class="token operator">&gt;</span> rootfs/etc/inittab

<span class="token comment"># 打包根文件系统</span>
<span class="token builtin class-name">cd</span> rootfs
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> cpio <span class="token parameter variable">-o</span> <span class="token parameter variable">--format</span><span class="token operator">=</span>newc <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token punctuation">..</span>/rootfs.cpio.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function u(m,p){const s=a("ExternalLinkIcon");return i(),l("div",null,[n("p",null,[n("a",v,[d("Linux内核官网"),c(s)])]),o])}const f=e(t,[["render",u],["__file","04.Linux内核.html.vue"]]);export{f as default};
