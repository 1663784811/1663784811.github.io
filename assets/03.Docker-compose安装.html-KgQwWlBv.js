import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-yWZ-w_HS.js";const t={},l=e(`<p>什么是docker compose</p><p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。</p><p>地址 https://github.com/docker/compose/releases/</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>第一种方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.25.4/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种方法：</p><ol><li>直接下载docker-compose 放置 /usr/local/bin/docker-compose</li><li>改权限：e 文件 docker-compose.yml</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
   <span class="token key atrule">nexus</span><span class="token punctuation">:</span>
   <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
   <span class="token key atrule">image</span><span class="token punctuation">:</span> sonatype/nexus3
   <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nexus3
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 8081<span class="token punctuation">:</span><span class="token number">8081</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /usr/local/docker/nexus/nexus<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/nexus<span class="token punctuation">-</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nexus" tabindex="-1"><a class="header-anchor" href="#nexus" aria-hidden="true">#</a> nexus</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
   <span class="token key atrule">nexus</span><span class="token punctuation">:</span>
      <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
      <span class="token key atrule">image</span><span class="token punctuation">:</span> sonatype/nexus3
      <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nexus3
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
         <span class="token punctuation">-</span> 8081<span class="token punctuation">:</span><span class="token number">8081</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
         <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/nexus<span class="token punctuation">-</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
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
      <span class="token punctuation">-</span> ./config<span class="token punctuation">:</span>/etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> rabbitmq</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>3.9<span class="token punctuation">-</span>management
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> rabbitmq3.9
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=rabbitmq
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=rabbitmq
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/rabbitmq3
      <span class="token punctuation">-</span> ./rabbitmq.conf<span class="token punctuation">:</span>/etc/rabbitmq/rabbitmq.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","03.Docker-compose安装.html.vue"]]);export{d as default};
