import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a}from"./app--d_SyiCc.js";const i={},l=a(`<h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看节点</span>
    kubectl get nodes
    <span class="token comment"># 详细</span>
    kubectl get nodes <span class="token parameter variable">-o</span> wide

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes -o wide</span>
NAME     STATUS   ROLES                  AGE    VERSION    INTERNAL-IP      EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION           CONTAINER-RUNTIME
master   Ready    control-plane,master   119d   v1.23.16   <span class="token number">192.168</span>.118.9    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        CentOS Linux <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>   <span class="token number">3.10</span>.0-1160.el7.x86_64   docker://20.10.7
<span class="token function">node</span>     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 20h    v1.23.16   <span class="token number">192.168</span>.118.11   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        CentOS Linux <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>   <span class="token number">3.10</span>.0-1160.el7.x86_64   docker://20.10.7
node13   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 118d   v1.23.16   <span class="token number">192.168</span>.118.13   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        CentOS Linux <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>   <span class="token number">3.10</span>.0-1160.el7.x86_64   docker://20.10.7

name: 名称
STATUS: 
    Ready（就绪）：节点被认为是“Ready”（就绪）时，它可以运行工作负载。这意味着所有必要的服务（例如Kubelet和容器运行时）正在运行，并且可以接受新的Pod以进行调度。
    NotReady（不可用）：当节点不可用以进行Pod调度时，它处于“NotReady”（不可用）状态。这可能是由于各种原因，例如网络问题、资源限制或节点的其他问题。
    OutOfDisk（磁盘空间不足）：这个状态表示节点的可用磁盘空间已经用完。当节点处于“OutOfDisk”状态时，它将无法调度新的Pod，直到释放更多的磁盘空间。
    MemoryPressure（内存不足）：这个状态表示节点的内存不足，即内存资源紧张。Kubernetes可能会尝试驱逐节点上的Pod以减轻内存压力。
    DiskPressure（磁盘资源紧张）：节点处于“DiskPressure”状态时，表示节点的磁盘空间不足。Kubernetes可能会尝试驱逐Pod或采取其他措施来释放磁盘空间。
    NetworkUnavailable（网络不可用）：当节点处于“NetworkUnavailable”状态时，表示存在网络问题，阻止它与集群的其余部分进行通信。这可能会影响该节点上Pod的调度和运行。
    NodeNotReady（节点不可用）：这个状态是一个更一般的指示，表示节点不处于就绪状态。它可以包括各种阻止节点可用性的问题。
    SchedulingDisabled（禁用调度）：这个状态可能表示节点已被手动标记为不可调度，通常由管理员执行。在更改状态之前，不会在具有此状态的节点上调度Pod。
    Unknown（未知）：通常情况下，“Unknown”（未知）状态表示无法确定节点的状态。这可能是由于各种原因，包括节点与控制平面之间的通信问题。
ROLES
    Master（主节点）：主节点是Kubernetes控制平面的一部分，它负责集群管理和控制。主节点通常运行诸如API服务器、控制器管理器、调度器等核心Kubernetes组件。在一个典型的生产集群中，主节点通常是一个高可用性的集群，以确保集群的可用性。
    Worker（工作节点）：工作节点是集群中负责运行容器和工作负载的节点。它们接受来自主节点的任务调度，并运行Pod中的容器。工作节点通常运行Kubelet、容器运行时（如Docker或Containerd）等组件。
    Control Plane（控制平面节点）：控制平面节点是主节点的子集，负责运行核心控制平面组件，如API服务器、调度器、控制器管理器等。在某些集群中，这些组件可能会运行在主节点之外的专用节点上，以提高可用性和安全性。
    Etcd（etcd节点）：etcd是Kubernetes的分布式键值存储数据库，用于存储集群状态和配置信息。etcd节点负责运行etcd集群，确保其高可用性和数据的一致性。etcd通常与主节点分开部署，以隔离控制平面和数据存储。
    Ingress Controller（入口控制器节点）：入口控制器节点通常运行Ingress控制器，用于管理集群中的入口流量和路由。它们负责将外部流量引导到适当的服务和Pod。
    Storage Node（存储节点）：存储节点通常运行分布式存储系统或卷插件，用于提供持久性存储支持。这些节点可能托管诸如GlusterFS、Ceph、NFS等存储解决方案的服务。
    Custom Roles（自定义角色）：有时，集群管理员可能会根据特定的集群需求创建自定义角色或节点类型。这些自定义角色可以根据需要运行不同的服务和工作负载。
EXTERNAL-IP <span class="token punctuation">(</span>外部IP<span class="token punctuation">)</span>
    Cluster内部服务：对于集群内部的服务，<span class="token string">&quot;EXTERNAL-IP&quot;</span>通常会显示为<span class="token string">&quot;None&quot;</span>，这意味着服务仅在集群内部可访问，而无法从集群外部访问。这些服务通常用于内部通信和微服务之间的交互。
    NodePort服务：在某些情况下，NodePort服务可能会具有外部IP地址。NodePort服务会在每个节点上公开相同的端口，这意味着你可以使用任何节点的IP地址和NodePort来访问该服务。这种情况下，<span class="token string">&quot;EXTERNAL-IP&quot;</span>字段通常显示节点的IP地址。
    LoadBalancer服务：当你创建一个LoadBalancer类型的服务时，云服务提供商（如AWS、GCP、Azure等）通常会自动分配一个外部IP地址，并将它分配给负载均衡器，以便将流量路由到Kubernetes集群中的服务。<span class="token string">&quot;EXTERNAL-IP&quot;</span>字段将显示分配给负载均衡器的外部IP地址。
    Ingress Controllers：Ingress控制器通常用于管理外部流量的路由和访问，它们可以与具有外部IP地址的Ingress资源一起使用，以将流量路由到不同的服务。<span class="token string">&quot;EXTERNAL-IP&quot;</span>字段可能会显示分配给Ingress控制器的外部IP地址。
    Service类型和网络环境：<span class="token string">&quot;EXTERNAL-IP&quot;</span>字段的值还取决于服务的类型和所在的网络环境。在本地开发环境中，你可能需要手动配置<span class="token string">&quot;EXTERNAL-IP&quot;</span>来使服务在本地主机上可访问。在云环境中，云服务提供商通常会自动分配和管理外部IP地址。
CONTAINER-RUNTIME <span class="token punctuation">(</span>容器运行时<span class="token punctuation">)</span>



<span class="token comment">#删除节点为</span>
kubectl delete <span class="token function">node</span>  <span class="token operator">&lt;</span>nodeName<span class="token operator">&gt;</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="证书" tabindex="-1"><a class="header-anchor" href="#证书" aria-hidden="true">#</a> 证书</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看密钥列表
    kubectl get secret -n kube-system

# 查看密钥详情
    kubectl get secret -n kube-system &lt;密钥名&gt;  -oyaml
    过期字段：  expiration
    
# base64 解码
    echo &quot;编码的字符串&quot; | base64 --decode




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有</span>
kubectl get namespaces

<span class="token comment"># 查看定义文件</span>
kubectl get namespace <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span> <span class="token parameter variable">-o</span> yaml

<span class="token comment"># 删除</span>
kubectl delete namespace <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>




<span class="token comment">#================= 创建</span>
apiVersion: v1
kind: Namespace
metadata:
  name: <span class="token operator">&lt;</span>my-namespace<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pod" tabindex="-1"><a class="header-anchor" href="#pod" aria-hidden="true">#</a> pod</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">####################   查看</span>
<span class="token comment"># 查看所有pod</span>
    kubectl get pods <span class="token parameter variable">-A</span> <span class="token parameter variable">-o</span> wide
<span class="token comment"># 查看nodes    </span>
    kubectl get nodes <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span>****
<span class="token comment"># 查看日志</span>
    kubectl logs <span class="token operator">&lt;</span>podsName<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span>
<span class="token comment"># 查看详情</span>
    kubectl describe pod <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span>
<span class="token comment"># 删除 pod</span>
    kubectl delete pod <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span>
    强制删除
    kubectl delete pod <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span> --grace-period<span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">--force</span>


<span class="token comment">######## 创建</span>
<span class="token number">1</span>. 
kubectl run mynginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx

<span class="token number">2</span>.
apiVersion: v1
kind: Pod
metadata:
  labels:
    <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>: <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>: <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>
  name: <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span>
  namespace: <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>
spec:
  containers:
  - image: <span class="token operator">&lt;</span>image<span class="token operator">&gt;</span>
    name: <span class="token operator">&lt;</span>containers-name<span class="token operator">&gt;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h3><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><p>kubectl create deployment mytomcat --image=tomcat:8.5.68 --replicas=3</p><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h3><h3 id="clusterip" tabindex="-1"><a class="header-anchor" href="#clusterip" aria-hidden="true">#</a> ClusterIP</h3><h3 id="nodeport" tabindex="-1"><a class="header-anchor" href="#nodeport" aria-hidden="true">#</a> NodePort</h3><h3 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h3><pre><code>1. 启用网关
2. 配置应用路由
</code></pre><h3 id="存储抽象" tabindex="-1"><a class="header-anchor" href="#存储抽象" aria-hidden="true">#</a> 存储抽象</h3><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看事件</span>
kubectl get events <span class="token parameter variable">-A</span>

kubectl get events <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespaceName<span class="token operator">&gt;</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[l];function r(d,o){return e(),s("div",null,t)}const v=n(i,[["render",r],["__file","03.基础知识和常用命令.html.vue"]]);export{v as default};
