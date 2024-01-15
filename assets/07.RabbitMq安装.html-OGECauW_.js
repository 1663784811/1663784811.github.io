import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-JtypSb_8.js";const s={},d=a(`<h2 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包" aria-hidden="true">#</a> 下载安装包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>======== 下载地址
https://github.com/rabbitmq/erlang-rpm/releases
https://github.com/rabbitmq/rabbitmq-server/releases/

======== 文件
-rw-r--r--. 1 root root 23555760 Jan 15 00:12 erlang-26.2.1-1.el7.x86_64.rpm
-rw-r--r--. 1 root root 18556432 Jan 14 16:08 rabbitmq-server-3.13.0.rc.4-1.el8.noarch.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-erlang" tabindex="-1"><a class="header-anchor" href="#安装-erlang" aria-hidden="true">#</a> 安装 erlang</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -ivh  erlang-26.2.1-1.el7.x86_64.rpm
erl -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#安装rabbitmq" aria-hidden="true">#</a> 安装RabbitMq</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -ivh rabbitmq-server-3.13.0.rc.4-1.el8.noarch.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置rabbitmq开机自启动服务" tabindex="-1"><a class="header-anchor" href="#配置rabbitmq开机自启动服务" aria-hidden="true">#</a> 配置RabbitMQ开机自启动服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 开机自启动服务
systemctl enable rabbitmq-server

# 启动rabbitmq服务
systemctl start rabbitmq-server

# 查看rabbitmq启动状态
systemctl status rabbitmq-server

# 重启rabbitmq服务
systemctl restart rabbitmq-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看mq进程" tabindex="-1"><a class="header-anchor" href="#查看mq进程" aria-hidden="true">#</a> 查看MQ进程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -ef | grep rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看mq占用的端口" tabindex="-1"><a class="header-anchor" href="#查看mq占用的端口" aria-hidden="true">#</a> 查看mq占用的端口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsof -i | grep rabbit
# 或者
netstat -tunlp | grep rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建用户操作" tabindex="-1"><a class="header-anchor" href="#创建用户操作" aria-hidden="true">#</a> 创建用户操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看用户列表
rabbitmqctl list_users

#第一步：添加 admin 用户并设置密码
rabbitmqctl add_user admin 123456

#第二步：添加 admin 用户为administrator角色
rabbitmqctl set_user_tags admin  administrator

#第三步：设置 admin 用户的权限，指定允许访问的vhost以及write/read
rabbitmqctl set_permissions -p &quot;/&quot; admin &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;

#第四步：查看vhost（/）允许哪些用户访问
rabbitmqctl list_permissions -p /

#查看用户列表
rabbitmqctl list_users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启mqtt-web管理界面等插件" tabindex="-1"><a class="header-anchor" href="#开启mqtt-web管理界面等插件" aria-hidden="true">#</a> 开启MQTT,web管理界面等插件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看插件 
rabbitmq-plugins list

# 网页管理控制台
rabbitmq-plugins enable rabbitmq_management

# 默认账号 ： guest，默认密码：guest
# admin账号 ： admin ，默认密码：123456
http://192.168.118.8:15672/


# 启用MQTT插件,默认端口mqtt是:1883 mqtt://192.168.118.8:1883
rabbitmq-plugins enable rabbitmq_mqtt

#启用MQTT的websocket插件,默认端口websocket是:15675 ws://127.0.0.1:15675/ws 
rabbitmq-plugins enable rabbitmq_web_mqtt

#查看启动的端口
netstat -tpnl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq过期策略" tabindex="-1"><a class="header-anchor" href="#rabbitmq过期策略" aria-hidden="true">#</a> RabbitMQ过期策略</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#TTL政策将删除指定的时间到期后未使用的队列30分钟. beam.smp high cpu load
rabbitmqctl set_policy expiry &quot;.*&quot; &#39;{&quot;expires&quot;:1800000}&#39; --apply-to queues

#从队列维度设置消息超时时间 60秒:
rabbitmqctl set_policy TTL &quot;.*&quot; &#39;{&quot;message-ttl&quot;:60000}&#39; --apply-to queues


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),r=[d];function l(t,v){return i(),n("div",null,r)}const c=e(s,[["render",l],["__file","07.RabbitMq安装.html.vue"]]);export{c as default};
