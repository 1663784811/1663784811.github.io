import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as n}from"./app-XUhMUaul.js";const l={},i=n(`<p>##master 节点操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 查污点</span>
kubectl describe <span class="token function">node</span> master <span class="token operator">|</span> <span class="token function">grep</span> Taints
<span class="token comment">## 删除污点</span>
kubectl taint nodes master node-role.kubernetes.io/master:NoSchedule-
<span class="token comment">## 添加污点</span>
kubectl taint nodes master node-role.kubernetes.io/master:NoSchedule


kubectl apply <span class="token parameter variable">-f</span> storageClass.yaml

<span class="token comment"># 安装 openebs</span>
kubectl apply <span class="token parameter variable">-f</span> openebs-operator.yaml

<span class="token comment"># 安装</span>
kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml
kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml

<span class="token comment"># 查看日志</span>
kubectl logs <span class="token parameter variable">-n</span> kubesphere-system <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-n</span> kubesphere-system <span class="token parameter variable">-l</span> <span class="token string">&#39;app in (ks-install, ks-installer)&#39;</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.items[0].metadata.name}&#39;</span><span class="token variable">)</span></span> <span class="token parameter variable">-f</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://192.168.0.50:30880
Account: admin
Password: P@88w0rd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function t(c,d){return s(),a("div",null,r)}const m=e(l,[["render",t],["__file","04.kubesphere安装.html.vue"]]);export{m as default};
