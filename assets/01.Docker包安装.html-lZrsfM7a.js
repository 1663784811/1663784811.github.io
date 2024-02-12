import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,a}from"./app-64Wgvq_G.js";const n={},s=a(`<h2 id="离线安装docker系统" tabindex="-1"><a class="header-anchor" href="#离线安装docker系统" aria-hidden="true">#</a> 离线安装Docker系统</h2><h3 id="第一步-下载docker离线包" tabindex="-1"><a class="header-anchor" href="#第一步-下载docker离线包" aria-hidden="true">#</a> 第一步：下载docker离线包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
https://download.docker.com/linux/static/stable/x86_64/docker-20.10.6.tgz

补充，也可以从https://download.docker.com/linux/static/stable/网址下载指定版本

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-下载离线安装工具" tabindex="-1"><a class="header-anchor" href="#第二步-下载离线安装工具" aria-hidden="true">#</a> 第二步：下载离线安装工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    https://github.com/Jrohy/docker-install/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三步-将下载好的资源放在一个目录" tabindex="-1"><a class="header-anchor" href="#第三步-将下载好的资源放在一个目录" aria-hidden="true">#</a> 第三步：将下载好的资源放在一个目录</h3><h3 id="第四步" tabindex="-1"><a class="header-anchor" href="#第四步" aria-hidden="true">#</a> 第四步:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在linux环境下，创建/root/setup/docker目录，然后拷贝下载好的资源到此目录
（可通过MobaXterm工具直接上传到linux目录）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五步-执行安装操作" tabindex="-1"><a class="header-anchor" href="#第五步-执行安装操作" aria-hidden="true">#</a> 第五步：执行安装操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.进入/root/setup/docker 文件夹
    指令：
        cd /root/setup/docker
2.为 install.sh添加执行权限
    指令：
        chmod +x install.sh
3.安装
    ./install.sh -f docker-20.10.6.tgz

4.安装成功后,会出现如下信息:
    Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.docker 20.10.6 install success!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第六步-安装成功以后-检查安装状态" tabindex="-1"><a class="header-anchor" href="#第六步-安装成功以后-检查安装状态" aria-hidden="true">#</a> 第六步：安装成功以后，检查安装状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>指令：
    docker info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[s];function t(l,c){return d(),i("div",null,r)}const v=e(n,[["render",t],["__file","01.Docker包安装.html.vue"]]);export{v as default};
