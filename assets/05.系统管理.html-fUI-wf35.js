import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as l}from"./app-_5rfG-fE.js";const s={},d=l(`<h2 id="_1-进程管理" tabindex="-1"><a class="header-anchor" href="#_1-进程管理" aria-hidden="true">#</a> 1. 进程管理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    ps 命令 查询所有进程
        ps aux      查看系统中所有进程，使用BSD操作系统格式
        ps -le      查看系统中所有进程，使用linux 标准命令格式
        
    top 命令 检查健康
        top
    
    pstree     查看进程树
    
    kill 终止进程
        kill -9 pid
    
    killall 
        killall -9 进程名
        killall -9 pid
    
    pkill 
        pkill -9 进程名
        pkill -9 -t 终端号       终止终端
    w
        w      查看登录终端
        
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-后台运行" tabindex="-1"><a class="header-anchor" href="#_2-后台运行" aria-hidden="true">#</a> 2.后台运行</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    1. 命令后加 &amp;      在后台运行
    2. ctrl + z      在后台暂停
    3. jobs          查看后台运行任务
    4. fg %工作号      恢复到前台
    5. bg %工作号      

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-系统资源" tabindex="-1"><a class="header-anchor" href="#_3-系统资源" aria-hidden="true">#</a> 3.系统资源</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    vmstat   监控系统资源
        vmstat 1 3    监控系统资源 延时1秒 刷新3次
    
    dmesg    开机时内核检测信息
    
    free     查看内存使用状态
        free -b     以字节单位显示
        free -k     以kb单位显示 
        free -m     以MB单位显示 
        free -g     以GB单位显示
    
    uname       查看系统与内核相关信息
        uname -a      查看系统所有相关信息
        uname -r      查看内核版本号
        uname -s      查看内核名称 
    
    file /bin/ls      查看可执行文件位数
    
    lsb_release -a    查看发行版本
    
    lsof    列出进程调用的文件
        lsof -c  字符串
        lsof -u  用户名
        lsof -u  用户名
        lsof -p  pid
    
    
             
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#系统定时任务</p>`,7),a=[d];function v(r,c){return e(),n("div",null,a)}const b=i(s,[["render",v],["__file","05.系统管理.html.vue"]]);export{b as default};
