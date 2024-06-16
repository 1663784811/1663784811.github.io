import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-su-36lDQ.js";const s={},l=d(`<p>#服务器备份</p><h3 id="备份到-另一台主机、硬盘" tabindex="-1"><a class="header-anchor" href="#备份到-另一台主机、硬盘" aria-hidden="true">#</a> 备份到 另一台主机、硬盘</h3><h2 id="系统重要目录" tabindex="-1"><a class="header-anchor" href="#系统重要目录" aria-hidden="true">#</a> 系统重要目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /boot
    /etc
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全量备份、增量备份、差异备份" tabindex="-1"><a class="header-anchor" href="#全量备份、增量备份、差异备份" aria-hidden="true">#</a> 全量备份、增量备份、差异备份</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>备份
dump
    -level          备份级别【0-9】
                0   全量
                1   增量
                
    -f 文件名        指定备份之后的文件名
    -u              备份成功之后，把时间记录在/etc/dumpdates文件
    -v              显示备份过程
    -j              调用bzlib库压缩备份文件
    -W              显示允许被dump的分区备份等级及备份时间
    
    dump -0uj -f xxxxxxxx.bak.bz2

恢复
restore
    -C              比较备份数据与实际数据的变化
    -i              手工选择要恢复的备份文件
    -t              查看备份文件有哪些数据
    -r              数据还原

    -f              指定的备份文件
    
    restore -C -f xxxxxxxx.bak.bz2
    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
1.每周一凌晨3点全量备份一次
2.每天凌晨3点差异备份一次
3.当天进行全量备份,就不进行差异备份
4.保留三个月的所有备份文件
5.三个月以前的只保留当月的第一个备份文件

备份目录设置 

/data/年/月/2023-03-03_all_备份目录.tar       全量备份
/data/年/月/2023-03-03_df_备份目录.tar        增量备份


定时器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[l];function v(r,c){return i(),n("div",null,a)}const t=e(s,[["render",v],["__file","06.备份.html.vue"]]);export{t as default};
