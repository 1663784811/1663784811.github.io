import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-xICttKkM.js";const l={},t=e(`<h2 id="mysql5-7安装之yum安装" tabindex="-1"><a class="header-anchor" href="#mysql5-7安装之yum安装" aria-hidden="true">#</a> MySQL5.7安装之yum安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 Repository 包</span>
<span class="token function">wget</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
<span class="token comment">#安装用的Yum Repository</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql57-community-release-el7-10.noarch.rpm
<span class="token comment"># yum安装MySQL</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql-community-server
<span class="token comment"># 首先启动MySQL</span>
systemctl start  mysqld.service
<span class="token comment"># 查看MySQL运行状态</span>
systemctl status mysqld.service

<span class="token comment"># 找出此时root用户的密码</span>
<span class="token function">grep</span> <span class="token string">&quot;password&quot;</span> /var/log/mysqld.log

<span class="token comment"># 进入数据库</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>     <span class="token comment"># 回车后会提示输入密码</span>

<span class="token comment"># MySQL默认必须修改密码之后才能操作数据库</span>
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># MySQL完整的初始密码规则</span>
mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;validate_password%&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 修改密码为规范复杂的密码</span>
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#密码规则改</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-8-0" tabindex="-1"><a class="header-anchor" href="#mysql-8-0" aria-hidden="true">#</a> Mysql:8.0</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-2.noarch.rpm

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql80-community-release-el7-2.noarch.rpm

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql-community-server

systemctl start  mysqld.service

systemctl status mysqld.service

<span class="token function">service</span> mysqld restart  <span class="token comment">#重新启动Mysql</span>
systemctl stop mysqld.service   <span class="token comment">#停止Mysql</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用docker-compose-安装" tabindex="-1"><a class="header-anchor" href="#使用docker-compose-安装" aria-hidden="true">#</a> 使用docker-compose 安装</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> library/mysql<span class="token punctuation">:</span>8.0.39
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
      <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8mb4
      <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8mb4_general_ci
      <span class="token punctuation">-</span><span class="token punctuation">-</span>explicit_defaults_for_timestamp=true
      <span class="token punctuation">-</span><span class="token punctuation">-</span>lower_case_table_names=1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> ./config/my.cnf<span class="token punctuation">:</span>/etc/my.cnf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[t];function c(p,o){return n(),a("div",null,i)}const d=s(l,[["render",c],["__file","01.mysql安装.html.vue"]]);export{d as default};
