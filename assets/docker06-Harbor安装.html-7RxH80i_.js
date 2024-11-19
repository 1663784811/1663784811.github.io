import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,a as s}from"./app-JdTw3qzn.js";const r={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
第一步：下载安装包
    wget https://github.com/goharbor/harbor/releases/download/v2.4.3/harbor-offline-installer-v2.4.3.tgz

第二步：解压
    tar xf harbor-offline-installer-v2.4.3.tgz -C /usr/local/

第三步：cd 到目录
    cd /usr/local/harbor/ &amp;&amp; ls
    
第四步：把配置文件模板拷贝一份出来
    cp harbor.yml.tmpl harbor.yml

第五步：查看当前主机的主机名全称
    vi harbor.yml
    修改：
        //这里的主机名换成本机的主机名或IP地址
        hostname: 192.168.11.8
        //把https这行及子行都注释掉，因为没有弄ssl证书加密
        #https:
          # https port for harbor, default is 443
          #port: 443
          # The path of cert and key files for nginx
          #certificate: /your/certificate/path
          #private_key: /your/private/key/path

        harbor_admin_password: Harbor12345

每六步：启动harbor
    ./install.sh

第七步：
    docker ps
        CONTAINER ID   IMAGE                                COMMAND                  CREATED              STATUS                    PORTS                                   NAMES
        1602065b6558   goharbor/nginx-photon:v2.4.3         &quot;nginx -g &#39;daemon of…&quot;   About a minute ago   Up 51 seconds (healthy)   0.0.0.0:80-&gt;8080/tcp, :::80-&gt;8080/tcp   nginx
        807abe81e1e8   goharbor/harbor-jobservice:v2.4.3    &quot;/harbor/entrypoint.…&quot;   About a minute ago   Up 52 seconds (healthy)                                           harbor-jobservice
        525886fff9b0   goharbor/harbor-core:v2.4.3          &quot;/harbor/entrypoint.…&quot;   About a minute ago   Up 53 seconds (healthy)                                           harbor-core
        9d40e1cf4131   goharbor/harbor-db:v2.4.3            &quot;/docker-entrypoint.…&quot;   About a minute ago   Up 54 seconds (healthy)                                           harbor-db
        e7405e5ba6b1   goharbor/registry-photon:v2.4.3      &quot;/home/harbor/entryp…&quot;   About a minute ago   Up 54 seconds (healthy)                                           registry
        a86ae3d1848e   goharbor/redis-photon:v2.4.3         &quot;redis-server /etc/r…&quot;   About a minute ago   Up 54 seconds (healthy)                                           redis
        814e2bfc178e   goharbor/harbor-registryctl:v2.4.3   &quot;/home/harbor/start.…&quot;   About a minute ago   Up 54 seconds (healthy)                                           registryctl
        340de1da037f   goharbor/harbor-portal:v2.4.3        &quot;nginx -g &#39;daemon of…&quot;   About a minute ago   Up 54 seconds (healthy)                                           harbor-portal
        c3eceadcb92b   goharbor/harbor-log:v2.4.3           &quot;/bin/sh -c /usr/loc…&quot;   About a minute ago   Up 59 seconds (healthy)   127.0.0.1:1514-&gt;10514/tcp               harbor-log

第八步: 查看启用的端口
    ss -anlt
    State       Recv-Q       Send-Q             Local Address:Port             Peer Address:Port      Process
    LISTEN      0            128                    127.0.0.1:1514                  0.0.0.0:*
    LISTEN      0            128                      0.0.0.0:80                    0.0.0.0:*
    LISTEN      0            128                      0.0.0.0:22                    0.0.0.0:*
    LISTEN      0            128                         [::]:80                       [::]:*
    LISTEN      0            128                         [::]:22                       [::]:*



第八步：
    192.168.118.8
        admin/admin
        

启动、停止：
    docker-compose start
    docker-compose stop
    docker-compose down




sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://mjana484.mirror.aliyuncs.com&quot;],
  &quot;insecure-registries&quot;: [&quot;192.168.118.8:8082&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[d];function a(o,v){return e(),i("div",null,l)}const u=n(r,[["render",a],["__file","docker06-Harbor安装.html.vue"]]);export{u as default};
