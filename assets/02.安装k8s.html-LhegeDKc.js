import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app-fpcHT6LC.js";const i={},l=a(`<h2 id="k8s-docker-对应版本" tabindex="-1"><a class="header-anchor" href="#k8s-docker-对应版本" aria-hidden="true">#</a> k8s docker 对应版本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Kubernetes 版本	    Docker 版本
1.20        	        19.03, 19.03.12
1.21	                20.10, 20.10.7
1.22	                20.10, 20.10.7
1.23	                20.10, 20.10.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s 1.24 以上不默认支持 docker 需要安装容器运行时</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.0.50        node50        master
192.168.0.51        node51        master
192.168.0.52        node52        master
192.168.0.53        node53        node
192.168.0.54        node54        node
192.168.0.55        node55        node

k8s     1.23    
docker  最新

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h2><h3 id="第一步-所有机器安装docker" tabindex="-1"><a class="header-anchor" href="#第一步-所有机器安装docker" aria-hidden="true">#</a> 第一步: 所有机器安装Docker</h3><p>安装方法: <a href="../docker/docker01-%E5%8C%85%E5%AE%89%E8%A3%85">Docker包安装</a></p><h3 id="第二步-设置主机名与时区" tabindex="-1"><a class="header-anchor" href="#第二步-设置主机名与时区" aria-hidden="true">#</a> 第二步: 设置主机名与时区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl set-timezone Asia/Shanghai <span class="token comment">#  都要执行</span>
hostnamectl set-hostname node50       <span class="token comment">#  0.50</span>
hostnamectl set-hostname node51       <span class="token comment">#  0.51</span>
hostnamectl set-hostname node52       <span class="token comment">#  0.52</span>
hostnamectl set-hostname node53       <span class="token comment">#  0.53</span>
hostnamectl set-hostname node54       <span class="token comment">#  0.54</span>
hostnamectl set-hostname node55       <span class="token comment">#  0.55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-添加hosts网络主机配置-方便寻找主机" tabindex="-1"><a class="header-anchor" href="#第三步-添加hosts网络主机配置-方便寻找主机" aria-hidden="true">#</a> 第三步: 添加hosts网络主机配置,方便寻找主机</h3><p>vi /etc/hosts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.0.50  node50
<span class="token number">192.168</span>.0.51  node51
<span class="token number">192.168</span>.0.52  node52
<span class="token number">192.168</span>.0.53  node53
<span class="token number">192.168</span>.0.54  node54
<span class="token number">192.168</span>.0.55  node55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四步-关闭防火墙-这一步操作是为了防止在学习阶段由于防火墙造成的各种网络问题-生产环境跳过这一步" tabindex="-1"><a class="header-anchor" href="#第四步-关闭防火墙-这一步操作是为了防止在学习阶段由于防火墙造成的各种网络问题-生产环境跳过这一步" aria-hidden="true">#</a> 第四步: 关闭防火墙，这一步操作是为了防止在学习阶段由于防火墙造成的各种网络问题，生产环境跳过这一步，</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五步-关闭selinux" tabindex="-1"><a class="header-anchor" href="#第五步-关闭selinux" aria-hidden="true">#</a> 第五步: 关闭selinux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config  <span class="token comment"># 永久</span>
setenforce <span class="token number">0</span>  <span class="token comment"># 临时</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第六步-关闭交换区" tabindex="-1"><a class="header-anchor" href="#第六步-关闭交换区" aria-hidden="true">#</a> 第六步: 关闭交换区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span>
<span class="token function">vi</span> /etc/fstab
<span class="token comment">#swap一行注释</span>
<span class="token comment">#/dev/mapper/centos-swap swap swap defaults 0 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第七步-允许-iptables-检查桥接流量" tabindex="-1"><a class="header-anchor" href="#第七步-允许-iptables-检查桥接流量" aria-hidden="true">#</a> 第七步: 允许 iptables 检查桥接流量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第八步-ipset-ipvsadm-ipvsadm配置" tabindex="-1"><a class="header-anchor" href="#第八步-ipset-ipvsadm-ipvsadm配置" aria-hidden="true">#</a> 第八步: ipset ipvsadm ipvsadm配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#########</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ipset ipvsadm
<span class="token comment">#########</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysconfig/modules/ipvs.modules <span class="token operator">&lt;&lt;</span><span class="token string">EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF</span>
<span class="token comment">########</span>
<span class="token function">chmod</span> <span class="token number">755</span> /etc/sysconfig/modules/ipvs.modules
<span class="token function">bash</span> /etc/sysconfig/modules/ipvs.modules 
lsmod <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> ip_vs <span class="token parameter variable">-e</span> nf_conntrack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装容器运行时-k8s-1-24-忽略" tabindex="-1"><a class="header-anchor" href="#安装容器运行时-k8s-1-24-忽略" aria-hidden="true">#</a> 安装容器运行时 k8s &lt; 1.24 忽略</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/Mirantis/cri-dockerd
下载: 0.3.2 rpm
开机自启
systemctl enable cri-docker

vi /usr/lib/systemd/system/cri-docker.service  # 修改如下
ExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.9 --container-runtime-endpoint fd://

systemctl start cri-docker &amp;&amp; systemctl enable cri-docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第十步-修改-kubernetes源" tabindex="-1"><a class="header-anchor" href="#第十步-修改-kubernetes源" aria-hidden="true">#</a> 第十步: 修改 kubernetes源：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第十一步-装kubeadm-和-kubelet" tabindex="-1"><a class="header-anchor" href="#第十一步-装kubeadm-和-kubelet" aria-hidden="true">#</a> 第十一步: 装kubeadm 和 kubelet</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.23.16-0 kubeadm-1.23.16-0 kubectl-1.23.16-0
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取docker-镜像" tabindex="-1"><a class="header-anchor" href="#拉取docker-镜像" aria-hidden="true">#</a> 拉取docker 镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看初始化所需的镜像</span>
kubeadm config images list
<span class="token comment"># </span>
registry.k8s.io/kube-apiserver:v1.23.17
registry.k8s.io/kube-controller-manager:v1.23.17
registry.k8s.io/kube-scheduler:v1.23.17
registry.k8s.io/kube-proxy:v1.23.17
registry.k8s.io/pause:3.6
registry.k8s.io/etcd:3.5.6-0
registry.k8s.io/coredns/coredns:v1.8.6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#编辑文件</span>
pull_images.sh

<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">images</span><span class="token operator">=</span><span class="token punctuation">(</span>
registry.aliyuncs.com/google_containers/kube-apiserver:v1.23.17
registry.aliyuncs.com/google_containers/kube-controller-manager:v1.23.17
registry.aliyuncs.com/google_containers/kube-scheduler:v1.23.17
registry.aliyuncs.com/google_containers/kube-proxy:v1.23.17
registry.aliyuncs.com/google_containers/pause:3.6
registry.aliyuncs.com/google_containers/etcd:3.5.6-0
registry.aliyuncs.com/google_containers/coredns:v1.8.6
<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">pullimageName</span> <span class="token keyword">in</span> <span class="token variable">\${images<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token function">docker</span> pull <span class="token variable">$pullimageName</span>
<span class="token keyword">done</span>

<span class="token comment"># 执行脚本拉取镜像</span>
<span class="token function">sh</span> pull_images.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化master节点" tabindex="-1"><a class="header-anchor" href="#初始化master节点" aria-hidden="true">#</a> 初始化Master节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ===========================================================================================================</span>
<span class="token comment"># 初始化之后，会输出一个join命令，先复制出来，node节点加入master会使用。</span>
<span class="token comment"># --image-repository registry.aliyuncs.com/google_containers 镜像仓库，离线安装需要把相关镜像先拉取下来</span>
<span class="token comment"># --apiserver-advertise-address 集群通告地址</span>
<span class="token comment"># --image-repository 由于默认拉取镜像地址k8s.gcr.io国内无法访问，这里指定阿里云镜像仓库地址</span>
<span class="token comment"># --kubernetes-version K8s版本，与上面安装的一致</span>
<span class="token comment"># --service-cidr 集群内部虚拟网络，Pod统一访问入口</span>
<span class="token comment"># --pod-network-cidr Pod网络，与下面部署的CNI网络组件yaml中保持一致</span>
<span class="token comment"># ===========================================================================================================</span>
kubeadm init <span class="token punctuation">\\</span>
  --apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.0.50 <span class="token punctuation">\\</span>
  --image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
  --kubernetes-version v1.23.17 <span class="token punctuation">\\</span>
  --service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 <span class="token punctuation">\\</span>
  --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16 <span class="token punctuation">\\</span>
  --ignore-preflight-errors<span class="token operator">=</span>all

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作节点加入集群-工作节点-在-53、54、55" tabindex="-1"><a class="header-anchor" href="#工作节点加入集群-工作节点-在-53、54、55" aria-hidden="true">#</a> 工作节点加入集群 ( 工作节点 在 53、54、55 )</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#默认token有效期为24小时，当过期之后，该token就不可用了。这时就需要重新创建token，可以直接使用命令快捷生成：</span>
kubeadm token create --print-join-command


<span class="token comment">## sudo kubeadm join &lt;master-ip&gt;:&lt;master-port&gt; --token &lt;token&gt; --discovery-token-ca-cert-hash &lt;ca-cert-hash&gt;</span>
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.0.50:6443 <span class="token parameter variable">--token</span> o7zvmu.683tkg2wpuyau0k8 <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:b287cec0ee3d2d02ac4e2ce91954e8e41f66f1db7b1993b19d6773ae77295c9a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看节点" tabindex="-1"><a class="header-anchor" href="#查看节点" aria-hidden="true">#</a> 查看节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get nodes

<span class="token comment"># NAME     STATUS     ROLES                  AGE     VERSION</span>
<span class="token comment"># node50   NotReady   control-plane,master   3m54s   v1.23.16</span>
<span class="token comment"># node53   NotReady   &lt;none&gt;                 32s     v1.23.16</span>
<span class="token comment"># node54   NotReady   &lt;none&gt;                 22s     v1.23.16</span>
<span class="token comment"># node55   NotReady   &lt;none&gt;                 13s     v1.23.16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-master-节点" tabindex="-1"><a class="header-anchor" href="#添加-master-节点" aria-hidden="true">#</a> 添加 master 节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步: master节点操作、生成token</span>
<span class="token comment"># &lt;token&gt;</span>
kubeadm token create
<span class="token comment"># &lt;ca-cert-hash&gt;</span>
openssl x509 <span class="token parameter variable">-pubkey</span> <span class="token parameter variable">-in</span> /etc/kubernetes/pki/ca.crt <span class="token operator">|</span> openssl rsa <span class="token parameter variable">-pubin</span> <span class="token parameter variable">-outform</span> der <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hex</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^.* //&#39;</span>
<span class="token comment"># 第二步: node 节点操作 加入集群的</span>
<span class="token comment"># sudo kubeadm join &lt;master-ip&gt;:&lt;master-port&gt; --token &lt;token&gt; --discovery-token-ca-cert-hash &lt;ca-cert-hash&gt; --control-plane</span>
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.0.50:6443 <span class="token parameter variable">--token</span> ux829p.ot568ije6p2o3a8f <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:bfd1b422edfae85561938364155d831f1f1045b59b5657ef6174335981cc4ad8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署容器网络-master执行-calico-官网" tabindex="-1"><a class="header-anchor" href="#部署容器网络-master执行-calico-官网" aria-hidden="true">#</a> 部署容器网络 （master执行） calico 官网</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看pod 网段</span>
<span class="token function">cat</span> /etc/kubernetes/manifests/kube-controller-manager.yaml <span class="token operator">|</span> <span class="token function">grep</span> cluster-cidr<span class="token operator">=</span>

<span class="token comment">## 文件在   https://github.com/1663784811/1663784811.github.io/tree/main/docs/%E8%BD%AF%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%88%96%E5%AE%89%E8%A3%85/k8s</span>
kubectl create <span class="token parameter variable">-f</span>  tigera-operator.yaml
kubectl create <span class="token parameter variable">-f</span>  custom-resources.yaml

<span class="token comment"># 查看是否 在running 状态</span>
kubectl get pods <span class="token parameter variable">-A</span>
<span class="token comment"># 查看node</span>
kubectl get nodes <span class="token parameter variable">-o</span> wide
kubectl get nodes,svc <span class="token parameter variable">-o</span> wide

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载-或-安装错误重置" tabindex="-1"><a class="header-anchor" href="#卸载-或-安装错误重置" aria-hidden="true">#</a> 卸载 或 安装错误重置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装错误重置</span>
kubeadm reset

<span class="token comment">## 卸载 (安装错误 不用执行以下操作 )</span>
yum remove <span class="token parameter variable">-y</span> kubelet* kubeadm* kubectl* docker* 
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/kubernetes/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/etcd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),d=[l];function r(c,t){return s(),e("div",null,d)}const v=n(i,[["render",r],["__file","02.安装k8s.html.vue"]]);export{v as default};
