import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as r,b as s,d as n,e,a as l}from"./app-SNqnN-Pf.js";const c="/assets/img-FcW0VIH1.png",p="/assets/img_2-FZ2stMat.png",d={},u=s("h3",{id:"动态命名和配置服务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#动态命名和配置服务","aria-hidden":"true"},"#"),n(" 动态命名和配置服务")],-1),m={href:"https://nacos.io/download/nacos-server/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},b={href:"https://nacos.io/docs/latest/quickstart/quick-start/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://nacos.io/zh-cn/docs/v2/guide/user/auth.html",target:"_blank",rel:"noopener noreferrer"},k=l('<h3 id="第一步-导入sql到数据库" tabindex="-1"><a class="header-anchor" href="#第一步-导入sql到数据库" aria-hidden="true">#</a> 第一步: 导入sql到数据库</h3><p><img src="'+c+`" alt=""></p><h3 id="第二步-修改配置" tabindex="-1"><a class="header-anchor" href="#第二步-修改配置" aria-hidden="true">#</a> 第二步：修改配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#*************** Config Module Related Configurations ***************#</span>
<span class="token comment">### If use MySQL as datasource:</span>
<span class="token comment">### Deprecated configuration property, it is recommended to use \`spring.sql.init.platform\` replaced.</span>
<span class="token assign-left variable">spring.datasource.platform</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">spring.sql.init.platform</span><span class="token operator">=</span>mysql

<span class="token comment">### Count of DB:</span>
<span class="token assign-left variable">db.num</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">### Connect URL of DB:</span>
<span class="token assign-left variable">db.url.0</span><span class="token operator">=</span>jdbc:mysql://192.168.0.158:3306/nacos?characterEncoding<span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">connectTimeout</span><span class="token operator">=</span><span class="token number">1000</span><span class="token operator">&amp;</span><span class="token assign-left variable">socketTimeout</span><span class="token operator">=</span><span class="token number">3000</span><span class="token operator">&amp;</span><span class="token assign-left variable">autoReconnect</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useUnicode</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>false<span class="token operator">&amp;</span><span class="token assign-left variable">serverTimezone</span><span class="token operator">=</span>UTC
<span class="token assign-left variable">db.user.0</span><span class="token operator">=</span>root
<span class="token assign-left variable">db.password.0</span><span class="token operator">=</span><span class="token number">123456</span>

<span class="token comment">### Connection pool configuration: hikariCP</span>
<span class="token assign-left variable">db.pool.config.connectionTimeout</span><span class="token operator">=</span><span class="token number">30000</span>
<span class="token assign-left variable">db.pool.config.validationTimeout</span><span class="token operator">=</span><span class="token number">10000</span>
<span class="token assign-left variable">db.pool.config.maximumPoolSize</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">db.pool.config.minimumIdle</span><span class="token operator">=</span><span class="token number">2</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><p>单机启动 <code>startup.cmd -m standalone</code></p><h3 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h3><p>http://127.0.0.1:8848/nacos/index.html</p><h3 id="开启鉴权" tabindex="-1"><a class="header-anchor" href="#开启鉴权" aria-hidden="true">#</a> 开启鉴权</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">### The auth system to use, currently only &#39;nacos&#39; and &#39;ldap&#39; is supported:</span>
<span class="token assign-left variable">nacos.core.auth.system.type</span><span class="token operator">=</span>nacos

<span class="token comment">### If turn on auth system:   是否开启鉴权功能</span>
<span class="token assign-left variable">nacos.core.auth.enabled</span><span class="token operator">=</span>true

<span class="token comment">### Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay.</span>
<span class="token assign-left variable">nacos.core.auth.caching.enabled</span><span class="token operator">=</span>true

<span class="token comment">### Since 1.4.1, Turn on/off white auth for user-agent: nacos-server, only for upgrade from old version.</span>
<span class="token assign-left variable">nacos.core.auth.enable.userAgentAuthWhite</span><span class="token operator">=</span>false

<span class="token comment">### Since 1.4.1, worked when nacos.core.auth.enabled=true and nacos.core.auth.enable.userAgentAuthWhite=false.</span>
<span class="token comment">### The two properties is the white list for auth and used by identity the request from other server.</span>
<span class="token assign-left variable">nacos.core.auth.server.identity.key</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">nacos.core.auth.server.identity.value</span><span class="token operator">=</span>nacos

<span class="token comment">### worked when nacos.core.auth.system.type=nacos</span>
<span class="token comment">### The token expiration in seconds:</span>
<span class="token assign-left variable">nacos.core.auth.plugin.nacos.token.cache.enable</span><span class="token operator">=</span>false
<span class="token assign-left variable">nacos.core.auth.plugin.nacos.token.expire.seconds</span><span class="token operator">=</span><span class="token number">18000</span>
<span class="token comment">### The default token (Base64 String):</span>
<span class="token assign-left variable">nacos.core.auth.plugin.nacos.token.secret.key</span><span class="token operator">=</span>SecretKey012345678901234567890123456789012345678901234567890123456789


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function f(g,_){const a=t("ExternalLinkIcon");return i(),r("div",null,[u,s("p",null,[s("a",m,[n("官网下载地址"),e(a)])]),s("p",null,[s("a",v,[n("gitHub下载地址"),e(a)])]),s("p",null,[s("a",b,[n("官方文档"),e(a)]),s("a",h,[n("官方文档"),e(a)])]),k])}const T=o(d,[["render",f],["__file","01.nacos安装.html.vue"]]);export{T as default};
