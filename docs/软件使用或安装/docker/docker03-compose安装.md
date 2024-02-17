---
article: false
title: 03. Docker-compose 安装
---
什么是docker compose

Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

地址
https://github.com/docker/compose/releases/

### 安装
第一种方法
```shell
curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

```
第二种方法：
1. 直接下载docker-compose 放置 /usr/local/bin/docker-compose
2. 改权限：e
   文件
   docker-compose.yml
```yaml
version: '3'
services:
   nexus:
   restart: always
   image: sonatype/nexus3
   container_name: nexus3
   ports:
    - 8081:8081
      volumes:
    - /usr/local/docker/nexus/nexus-data:/nexus-data
```

### 启动
```shell
docker-compose up -d
```
### 关闭
```shell
docker-compose down 
```



###  nexus
```yaml
version: '3'
services:
   nexus:
      restart: always
      image: sonatype/nexus3
      container_name: nexus3
      ports:
         - 8081:8081
      volumes:
         - ./data:/nexus-data
```

### mysql
```yaml
version: '3.1'
services:
  db:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - ./data:/var/lib/mysql
      - ./config:/etc/my.cnf
```

### rabbitmq
```yaml
version: '3.8'
services:
  rabbitmq:
    image: rabbitmq:3.9-management
    container_name: rabbitmq3.9
    restart: always
    environment:
      - RABBITMQ_DEFAULT_PASS=rabbitmq
      - RABBITMQ_DEFAULT_USER=rabbitmq
    ports:
      - 5672:5672
      - 15672:15672
    volumes:
      - ./data:/var/lib/rabbitmq3
      - ./rabbitmq.conf:/etc/rabbitmq/rabbitmq.conf
```











