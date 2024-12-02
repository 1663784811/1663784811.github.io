import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-B-6dHbJZ.js";const l={},d=s(`<h2 id="_1-安装nginx-rtmp推流服务器" tabindex="-1"><a class="header-anchor" href="#_1-安装nginx-rtmp推流服务器" aria-hidden="true">#</a> 1.安装nginx_rtmp推流服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装依赖
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ <span class="token function">make</span> pcre-devel zlib-devel openssl-devel

<span class="token comment"># 上传安装包并解压</span>
    nginx-1.24.0
    nginx-1.24.0.tar.gz
    nginx-rtmp-module
    nginx-rtmp-module.zip

安装nginx
    <span class="token builtin class-name">cd</span> nginx-1.24.0
    ./configure --add-module<span class="token operator">=</span><span class="token punctuation">..</span>/rtmp-module
    <span class="token function">make</span> <span class="token operator">&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

启动服务
   <span class="token builtin class-name">cd</span> /usr/local/nginx/sbin
   ./nginx
   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改nginx配置" tabindex="-1"><a class="header-anchor" href="#修改nginx配置" aria-hidden="true">#</a> 修改nginx配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#user  nobody;
worker_processes  1;
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}

rtmp_auto_push on;

rtmp {
    server {
        listen 1935; # RTMP 推流监听端口

        # 配置 RTMP 推流应用
        application live {
            live on; # 开启实时推流
            hls on; # 开启 HLS 推流
            hls_path /usr/local/nginx/html/hls; # HLS 推流路径，存储推流生成的 m3u8 文件和 ts 片段
            hls_fragment_naming system; # 开启索引文件生成
            hls_fragment 1s; # HLS 片段时长
            hls_playlist_length 5s; # HLS 列表时长
            hls_cleanup off; # 自动清理过期的 HLS 片段

            # 配置推流密钥，如需添加密钥限制，请取消以下注释
            # deny publish all;
            # allow publish from 127.0.0.1;
            # allow publish from 192.168.1.0/24;
            # deny publish;

            # 配置拉流密钥，如需添加密钥限制，请取消以下注释
            # deny play all;
            # allow play from 127.0.0.1;
            # allow play from 192.168.1.0/24;
            # deny play;
        }
    }
}

http{
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        # 开启 HTTP 监听端口，用于 HLS 推流
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

        # 配置 HLS 推流
        # 注意：需要将推流的 hls_path 指定为 Nginx 的 html 目录下的子目录，以便访问
        location /hls {
            # 开启 HLS 功能
            add_header Cache-Control no-cache;

            # HLS 推流路径，存储推流生成的 m3u8 文件和 ts 片段
            # 注意：这里的路径必须与推流端的 hls_path 参数一致
            alias /usr/local/nginx/html/hls;

            # 开启索引文件生成，必须与推流端的 hls_fragment_naming 参数一致
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            default_type video/mp2t;

            # 开启 CORS 支持，解决跨域访问问题
            add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
            add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;
            add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&#39;;

            # 开启 gzip 压缩，减少带宽占用
            gzip on;
            gzip_types text/plain application/xml text/css application/javascript;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function v(r,c){return i(),e("div",null,a)}const t=n(l,[["render",v],["__file","01.rtmp服务器搭建.html.vue"]]);export{t as default};
