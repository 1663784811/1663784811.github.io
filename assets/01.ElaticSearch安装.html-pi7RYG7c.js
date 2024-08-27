import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as l,b as n,d as s,e as c,a as o}from"./app-y5p-Qx3e.js";const d={},r=n("h3",{id:"第一步-下载elaticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一步-下载elaticsearch","aria-hidden":"true"},"#"),s(" 第一步: 下载ElaticSearch")],-1),m={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},p=o(`<h3 id="新的用户" tabindex="-1"><a class="header-anchor" href="#新的用户" aria-hidden="true">#</a> 新的用户</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加用户</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> elk
<span class="token comment"># 设置密码</span>
<span class="token function">sudo</span> <span class="token function">passwd</span> elk

<span class="token comment"># 改变所有者</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> elk:elk ./elasticsearch-8.14.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><p>elasticsearch.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ======================== Elasticsearch Configuration =========================</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE: Elasticsearch comes with reasonable defaults for most settings.</span>
<span class="token comment">#       Before you set out to tweak and tune the configuration, make sure you</span>
<span class="token comment">#       understand what are you trying to accomplish and the consequences.</span>
<span class="token comment">#</span>
<span class="token comment"># The primary way of configuring a node is via this file. This template lists</span>
<span class="token comment"># the most important settings you may want to configure for a production cluster.</span>
<span class="token comment">#</span>
<span class="token comment"># Please consult the documentation for further information on configuration options:</span>
<span class="token comment"># https://www.elastic.co/guide/en/elasticsearch/reference/index.html</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Cluster  集群 -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Use a descriptive name for your cluster:</span>
<span class="token comment">#</span>
<span class="token comment">#cluster.name: my-application</span>
<span class="token comment">#</span>
<span class="token comment"># ------------------------------------ Node  节点  ------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Use a descriptive name for the node:</span>
<span class="token comment">#</span>
<span class="token comment">#node.name: node-1</span>
<span class="token comment">#</span>
<span class="token comment"># Add custom attributes to the node:</span>
<span class="token comment">#</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#</span>
<span class="token comment"># ----------------------------------- Paths   路径  ------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Path to directory where to store the data (separate multiple locations by comma):</span>
<span class="token comment">#</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> ./data
<span class="token comment">#</span>
<span class="token comment"># Path to log files:</span>
<span class="token comment">#</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> ./logs
<span class="token comment">#</span>
<span class="token comment"># ----------------------------------- Memory -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Lock the memory on startup:</span>
<span class="token comment">#</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#</span>
<span class="token comment"># Make sure that the heap size is set to about half the memory available</span>
<span class="token comment"># on the system and that the owner of the process is allowed to use this</span>
<span class="token comment"># limit.</span>
<span class="token comment">#</span>
<span class="token comment"># Elasticsearch performs poorly when the system is swapping the memory.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Network -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># By default Elasticsearch is only accessible on localhost. Set a different</span>
<span class="token comment"># address here to expose this node on the network:</span>
<span class="token comment">#</span>
<span class="token comment">#network.host: 0.0.0.0</span>
<span class="token comment">#</span>
<span class="token comment"># By default Elasticsearch listens for HTTP traffic on the first free port it</span>
<span class="token comment"># finds starting at 9200. Set a specific HTTP port here:</span>
<span class="token comment"># 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the network module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># --------------------------------- Discovery ----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Pass an initial list of hosts to perform discovery when this node is started:</span>
<span class="token comment"># The default list of hosts is [&quot;127.0.0.1&quot;, &quot;[::1]&quot;]</span>
<span class="token comment">#</span>
<span class="token comment">#discovery.seed_hosts: [&quot;host1&quot;, &quot;host2&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># Bootstrap the cluster using an initial set of master-eligible nodes:</span>
<span class="token comment">#</span>
<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the discovery and cluster formation module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Various -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Allow wildcard deletion of indices:</span>
<span class="token comment">#</span>
<span class="token comment">#action.destructive_requires_name: false</span>

<span class="token comment">#----------------------- BEGIN SECURITY AUTO CONFIGURATION -----------------------</span>
<span class="token comment">#</span>
<span class="token comment"># The following settings, TLS certificates, and keys have been automatically</span>
<span class="token comment"># generated to configure Elasticsearch security features on 22-07-2024 06:21:44</span>
<span class="token comment">#</span>
<span class="token comment"># --------------------------------------------------------------------------------</span>

<span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># enrollment （ 注册 ）</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># 为HTTP API客户端连接（如Kibana、Logstash和Agent）启用加密</span>
<span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12

<span class="token comment"># 启用群集节点之间的加密和相互身份验证</span>
<span class="token comment"># Enable encryption and mutual authentication between cluster nodes</span>
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/transport.p12
  <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> certs/transport.p12
<span class="token comment"># Create a new cluster with the current node only</span>
<span class="token comment"># Additional nodes can still join the cluster later</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;MiWiFi-RA81-srv&quot;</span> <span class="token punctuation">]</span>

<span class="token comment"># Allow HTTP API connections from anywhere</span>
<span class="token comment"># Connections are encrypted and require user authentication</span>
<span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0

<span class="token comment"># Allow other nodes to join the cluster from anywhere</span>
<span class="token comment"># Connections are encrypted and mutually authenticated</span>
<span class="token comment">#transport.host: 0.0.0.0</span>

<span class="token comment">#----------------------- END SECURITY AUTO CONFIGURATION -------------------------</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h3><p>./elasticsearch-setup-passwords interactive</p><h3 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h3><p>./elasticsearch-reset-password -u elastic</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>elk@MiWiFi-RA81-srv bin<span class="token punctuation">]</span>$ ./elasticsearch-reset-password <span class="token parameter variable">-u</span> elastic
This tool will reset the password of the <span class="token punctuation">[</span>elastic<span class="token punctuation">]</span> user to an autogenerated value.
The password will be printed <span class="token keyword">in</span> the console.
Please confirm that you would like to <span class="token builtin class-name">continue</span> <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>y

Password <span class="token keyword">for</span> the <span class="token punctuation">[</span>elastic<span class="token punctuation">]</span> user successfully reset.
<span class="token comment">###  密码</span>
New value: Sy_*lqEciee7N-a*NB0p

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elasticsearch-内置用户" tabindex="-1"><a class="header-anchor" href="#elasticsearch-内置用户" aria-hidden="true">#</a> elasticsearch 内置用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>elastic
    角色: superuser
    描述: 拥有Elasticsearch集群的全部权限，包括管理权限。通常用于管理和配置Elasticsearch。

kibana_system
    角色: kibana_system
    描述: 用于Kibana与Elasticsearch之间的交互和通信。这个用户有权访问Kibana所需的资源。

logstash_system
    角色: logstash_system
    描述: 用于Logstash与Elasticsearch之间的交互和通信。这个用户有权访问Logstash所需的资源。

beats_system
    角色: beats_system
    描述: 用于Beats与Elasticsearch之间的交互和通信。这个用户有权访问Beats所需的资源。

remote_monitoring_user
    角色: remote_monitoring_collector, remote_monitoring_agent
    描述: 用于X-Pack监控功能，允许收集和存储监控信息。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function u(v,b){const e=i("ExternalLinkIcon");return t(),l("div",null,[r,n("p",null,[n("a",m,[s("官网下载地址"),c(e)])]),p])}const f=a(d,[["render",u],["__file","01.ElaticSearch安装.html.vue"]]);export{f as default};
