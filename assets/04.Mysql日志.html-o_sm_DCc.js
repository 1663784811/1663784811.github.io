import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as d}from"./app-aYIhXeuB.js";const n={},l=d(`<h2 id="错误日志、" tabindex="-1"><a class="header-anchor" href="#错误日志、" aria-hidden="true">#</a> 错误日志、</h2><p>my.cnf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
log-error = /var/log/mysql/mysql_error.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询日志、" tabindex="-1"><a class="header-anchor" href="#查询日志、" aria-hidden="true">#</a> 查询日志、</h2><p>MySQL 查询日志记录所有客户端发送给数据库服务器的 SQL 语句，用于调试和审计。查询日志可以在 MySQL 的配置文件中启用和配置</p><h2 id="慢查询日志" tabindex="-1"><a class="header-anchor" href="#慢查询日志" aria-hidden="true">#</a> 慢查询日志</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
slow_query_log = 1
slow_query_log_file = /var/log/mysql/mysql_slow_query.log
long_query_time = 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二进制日志-bin-log" tabindex="-1"><a class="header-anchor" href="#二进制日志-bin-log" aria-hidden="true">#</a> 二进制日志 BIN log</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MySQL 的二进制日志 (Binary Log) 是记录所有更改数据的 SQL 语句及其上下文信息的日志文件。
这些日志文件主要用于复制 (replication) 和数据恢复 (recovery)\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重做日志-redo-log" tabindex="-1"><a class="header-anchor" href="#重做日志-redo-log" aria-hidden="true">#</a> 重做日志（Redo Log）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用：保证事务持久性，崩溃恢复
记录：数据页的物理修改

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回滚日志-undo-log" tabindex="-1"><a class="header-anchor" href="#回滚日志-undo-log" aria-hidden="true">#</a> 回滚日志（Undo Log）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>记录：数据修改前的旧版本
作用：
    事务回滚
    MVCC 快照读（不加锁读）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[l];function r(t,c){return a(),i("div",null,s)}const u=e(n,[["render",r],["__file","04.Mysql日志.html.vue"]]);export{u as default};
