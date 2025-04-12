import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as s}from"./app-dBsuoIky.js";const i={},r=s(`<h2 id="桥接网络-bridge-network" tabindex="-1"><a class="header-anchor" href="#桥接网络-bridge-network" aria-hidden="true">#</a> 桥接网络（Bridge Network）：</h2><p>桥接网络是 Docker 默认使用的网络模式。每个容器都分配一个独立的 IP 地址， 并且可以通过<strong>容器名称</strong>进行通信。默认情况下， Docker 在主机上创建一个名为 docker0 的虚拟以太网桥接口，并将容器连接到这个网络上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个桥接网络</span>
<span class="token function">docker</span> network create my-bridge-network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主机网络-host-network" tabindex="-1"><a class="header-anchor" href="#主机网络-host-network" aria-hidden="true">#</a> 主机网络（Host Network）</h2><p>主机网络模式让容器直接使用主机的网络命名空间。 容器将与主机共享同一个 IP 地址，因此容器可以直接使用主机的网络配置。 这种模式下容器的网络性能可能更好，但容器与主机之间的网络隔离性较差。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用主机网络模式运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span><span class="token operator">=</span>host my-container-image

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无网络-none-network" tabindex="-1"><a class="header-anchor" href="#无网络-none-network" aria-hidden="true">#</a> 无网络（None Network）</h2><p>在无网络模式下，Docker 容器不会连接到任何网络，即不分配 IP 地址。 这种模式适用于完全隔离容器的情况，例如只希望通过数据卷与容器进行通信或者进行一些特定的测试。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用无网络模式运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span><span class="token operator">=</span>none my-container-image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义-docker-网络" tabindex="-1"><a class="header-anchor" href="#自定义-docker-网络" aria-hidden="true">#</a> 自定义 Docker 网络</h2><h3 id="创建自定义网络" tabindex="-1"><a class="header-anchor" href="#创建自定义网络" aria-hidden="true">#</a> 创建自定义网络</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create my-custom-network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="连接容器到自定义网络" tabindex="-1"><a class="header-anchor" href="#连接容器到自定义网络" aria-hidden="true">#</a> 连接容器到自定义网络</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--network</span><span class="token operator">=</span>my-custom-network my-container-image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="网络驱动程序-network-drivers" tabindex="-1"><a class="header-anchor" href="#网络驱动程序-network-drivers" aria-hidden="true">#</a> 网络驱动程序（Network Drivers）：</h3><p>Docker 支持多种网络驱动程序，例如 Overlay、Macvlan、IPvlan 等，用于在不同的场景下提供更高级的网络功能和配置。</p><h2 id="docker-compose配置网络" tabindex="-1"><a class="header-anchor" href="#docker-compose配置网络" aria-hidden="true">#</a> docker-compose配置网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
version: <span class="token string">&#39;3.8&#39;</span>

services:
  webapp:
    image: nginx:latest
    ports:
      - <span class="token string">&quot;8080:80&quot;</span>
    networks:
      my-network:  <span class="token comment"># 网络</span>
        aliases:
          - nginx <span class="token comment"># 别名</span>
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
    networks:
      my-network:
        aliases:
          - mysql <span class="token comment"># 别名</span>
          

networks:
  my-network:
    driver: bridge  <span class="token comment"># 驱动</span>
    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[r];function l(c,o){return n(),a("div",null,d)}const m=e(i,[["render",l],["__file","docker07-网络.html.vue"]]);export{m as default};
