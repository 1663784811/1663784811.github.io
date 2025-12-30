import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c as t,b as e,d as a,e as r,a as l}from"./app-IvGY8YdW.js";const c="/assets/img-2Q9uuFVq.png",o={},u={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://kubesphere.io/zh/",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="服务架构图" tabindex="-1"><a class="header-anchor" href="#服务架构图" aria-hidden="true">#</a> 服务架构图</h2><p><img src="'+c+`" alt=""></p><h3 id="k8s-组件" tabindex="-1"><a class="header-anchor" href="#k8s-组件" aria-hidden="true">#</a> k8s 组件</h3><h4 id="master-组件" tabindex="-1"><a class="header-anchor" href="#master-组件" aria-hidden="true">#</a> Master 组件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
kube-apiserver: 提供了 Kubernetes API 接口，是集群的主要控制中心，处理所有的 REST 操作，维护集群的状态和配置。

etcd: 高可用的键值存储系统，用于保存和管理 Kubernetes 集群的所有数据和配置。

kube-scheduler: 负责将 Pod 调度到适当的节点上。它根据资源需求、优先级、节点约束等因素来决定 Pod 的运行位置。

kube-controller-manager: 运行控制循环，负责管理集群中的各种控制器（例如副本控制器、节点控制器等），确保集群状态与期望状态一致。

cloud-controller-manager: 负责与云服务提供商的 API 交互，处理云特定的操作（如管理负载均衡器、动态供应存储等）。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-组件" tabindex="-1"><a class="header-anchor" href="#node-组件" aria-hidden="true">#</a> Node 组件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
kubelet: 运行在每个节点上，负责管理本节点上的 Pod 和容器，确保 Pod 的容器在节点上运行。


kube-proxy: 维护网络规则，负责实现 Kubernetes 服务的负载均衡功能，确保服务能够正确地路由到相应的 Pod。

容器运行时（Container Runtime）: 实际执行容器的环境，例如 Docker、containerd 或 CRI-O。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(h,_){const n=i("ExternalLinkIcon");return d(),t("div",null,[e("p",null,[e("a",u,[a("kubernetes 官网"),r(n)])]),e("p",null,[e("a",v,[a("kubesphere 官网"),r(n)])]),m])}const x=s(o,[["render",b],["__file","01.k8s简介.html.vue"]]);export{x as default};
