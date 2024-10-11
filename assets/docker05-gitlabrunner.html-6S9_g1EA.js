import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-ysuF1LJn.js";const i={},l=e(`<p>一、安装并配置必要的依赖项</p><p>a)在centos7的系统防火墙中打http和ssh访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#sudo  yum install -y curl policycoreutils-python openssh-server</span>
<span class="token comment">#sudo  systemctl enable sshd</span>
<span class="token comment">#sudo  systemctl start sshd</span>
<span class="token comment">#sudo  firewall-cmd --permanent --add-service=http</span>
<span class="token comment">#sudo  systemctl reload firewalld</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b)安装postfix以发送通知邮件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#sudo yum install postfix</span>
<span class="token comment">#sudo systemctl enable postfix</span>
<span class="token comment">#sudo systemctl start postfix</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c) iptables规则</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#iptables -I INPUT -p tcp --dport &lt;端口号&gt;  -j  ACCEPT</span>
<span class="token comment">#service iptables save</span>
<span class="token comment">#service iptables restart</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、添加gitlab镜像源，并安装</p><p>a) 添加GitLab包存储库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#curl  https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="或者清华镜像源" tabindex="-1"><a class="header-anchor" href="#或者清华镜像源" aria-hidden="true">#</a> 或者清华镜像源</h1><p>[gitlab-ce]name=gitlab-ce baseurl=http://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7 repo_gpgcheck=0 gpgcheck=0 enabled=1 gpgkey=https://packages.gitlab.com/gpg.key</p><p>b) 设置域名访问地址并安装gitlab</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#sudo EXTERNAL_URL=&quot;https://gitlab.example.com&quot; yum install -y gitlab-ce</span>
EXTERNAL_URL也可配置为EXTERNAL_URL<span class="token operator">=</span>http://IP:端口
<span class="token comment">##### 三、配置邮箱（例qq企业邮箱）</span>


编辑配置文件/etc/gitlab/ gitlab.rb
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;你的邮箱&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;你的密码&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;你的邮箱&#39;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_display_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Gitlab&#39;</span>

重启服务<span class="token comment">#gitlab-ctl reconfigure</span>

发送测试邮件
<span class="token comment">#gitlab-rails console</span>
<span class="token comment">#Notify.test_email(&#39;接收邮件的邮箱&#39;,&#39;1234&#39;,&#39;5678&#39;).deliver_now</span>


<span class="token comment">##### 四、安装gitlab-runner</span>

<span class="token comment">##### docker-compose 安装gitlab-runner</span>
https://www.jianshu.com/p/5810760049ac

<span class="token comment">###### 1、    添加镜像源</span>
在/etc/yum.repos.d目录下新建文件gitlab-runner.repo填写如下 
<span class="token punctuation">[</span>gitlab-runner<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>gitlab-runner
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el7/
<span class="token assign-left variable">repo_gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://packages.gitlab.com/gpg.key

<span class="token comment">###### 2、 安装gitlab-runner</span>

<span class="token comment">#yum clean all</span>
yum makecache
yum <span class="token function">install</span> gitlab-runner <span class="token parameter variable">-y</span>
<span class="token comment">###### 3、注册gitlab-runner</span>

说明gitlab-runner有两种，
 共享型Runner分为
 共享型（Shared Runner）：使用gitlab的root用户下的token注册
 特享型（Specific Runner）：使用gitlab项目相关人员下的token注册

查看token及url方式如下图
<span class="token operator">!</span><span class="token punctuation">[</span>31142c9f8f131fee23ecbb7e013ce48d.png<span class="token punctuation">]</span><span class="token punctuation">(</span>en-resource://database/624:2<span class="token punctuation">)</span>


执行job方式后来选择为shell。图片为docker
<span class="token operator">!</span><span class="token punctuation">[</span>41cc45bdbbff89f358b6d13490e188f1.png<span class="token punctuation">]</span><span class="token punctuation">(</span>en-resource://database/625:1<span class="token punctuation">)</span>


注册成功后gitlab会有相应显示

l  私有型登陆gitlab查看某项目的url和token  
<span class="token comment">#每个项目的token都不一样注意例如：</span>

<span class="token number">1</span>.     查看token单击设置 ---》  ci/cd  à  runner  如下图所示url和token


<span class="token number">2</span>.     注册runner
　　登陆gitlab-runner执行命令注册
  　　<span class="token comment">#gitlab-ci-multi-runner  register     </span>
      　<span class="token comment">#注册runner 如下图所示依次输入</span>
        ＃gitlab-ci-multi-runner  start  runner-name

<span class="token operator">!</span><span class="token punctuation">[</span>5b7521065b9dc028b240e14e9f3c71db.png<span class="token punctuation">]</span><span class="token punctuation">(</span>en-resource://database/626:1<span class="token punctuation">)</span>

<span class="token number">3</span>.     配置文件（忽略）  配置文件在  /etc/gitlab-runner/config.toml


<span class="token comment">#### 五、.gitlab-ci.yml简介</span>

<span class="token comment">###### 关键字介绍</span>

shell
script 由Runner执行的Shell脚本。
image 使用docker镜像， image：name
<span class="token function">service</span> 使用docker services镜像, services：name
before_script 执行作业前运行的脚本
after_script 作业完成后运行的脚本
stages 定义管道中的步骤，依次运行
stage 定义管道中步骤的作业段
only 指定作业限制only:refs，only:kubernetes，only:variables，和only:changes
tags 指定执行作业的runner
allow_failure 允许job失败
when 什么时候开始工作，
 on_success 只有当前一个阶段的所有工作都成功时（或者因为它们被标记而被认为是成功的allow_failure）才执行工作 。这是默认值。
 on_failure 仅当前一阶段的至少一个作业失败时才执行作业。
 always 无论先前阶段的工作状态如何，都可以执行工作。
 manual 手动执行作业
 delayed 延迟作业。后面跟start_in,start_in 30minutes<span class="token punctuation">(</span>延迟30分钟<span class="token punctuation">)</span>，不加单位，默认为秒。最长可延迟1小时。environment 作业部署到的环境名称 <span class="token comment">#暂未搞清</span>
cache 
 key：<span class="token string">&quot;<span class="token variable">$CI_JOB_STAGE</span>-<span class="token variable">$CI_COMMIT_REF_SLUG</span>&quot;</span> <span class="token comment">#为每分支，每步骤启用缓存</span>
artifacts job成功时附加到作业的文件或目录
dependencies 此job依赖其他jobz,主要作用于作业优先级
converage 给定作业代码覆盖率设置 
retry 在发生故障时，可以自动重试作业的次数。
parallel 应该并行运行多少个作业实例
trigger 定义下游管道触发器
include 允许此作业包含外部YAML
extends 此作业将继承的配置项
pages 上传作业结果用于gitlab pages
variables 作业级别定义作业变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单使用案例 runner的执行方式为shell的简单示例。</p>`,15),t=[l];function c(p,r){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","docker05-gitlabrunner.html.vue"]]);export{u as default};
