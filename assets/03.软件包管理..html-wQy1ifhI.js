import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as r,c as t,b as n,d as o}from"./app-RaS7ap-Q.js";const p={},m=n("h2",{id:"软件包管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#软件包管理","aria-hidden":"true"},"#"),o(" 软件包管理")],-1),s=n("p",null,"1.二进制包",-1),c=n("pre",null,[n("code",null,`1.1 rpm包安装
    依赖问题
        树依赖、循环依赖、模块依赖
    搜索依赖: https://www.rpmfind.net/
    安装命令:  rpm -ivh xxxxx.rpm
            -i  安装
            -v  显示详细信息
            -h  显示进度
            --nodeps   不检测依赖性
            -e  卸载     rpm -e  包名
            -q  查询
            -a  所有
    rpm查询
        rpm -q 包名       查询是否安装 
        rpm -qa 包名      查询是否安装 
        rpm -qi 包名      查询软件信息
        rpm -qpi 包全名    查询未安装包信息
        rpm -ql 包名      查询安装文件列表
        rpm -qf 系统文件名 查询某文件属于哪个rpm 
        rpm -qR 包全名    查询软件包的依赖性
        rpm -qRp 包全名    查询未安装包信息

    rpm 校验  ( 校验是否有非法程序修改 )
        rpm -V 包名
            
    rpm 文件提取 ( 误删恢复 )
        rpm2cpio xxxxx.rpm | cpio -idv ./xxxx



1.2 yum在线安装
        yum list            查询所有可安装的软件包
        yum search 关键字    查询软件包
        yum -y install 包名  安装软件
        yum -y update 包名   升级
        yum -y remove 包名   卸载
        yum grouplist       列出所有软件组列表   
        yum groupinstall 组名
        yum groupremove 组名


1.3 yum文件镜像安装
       第一步：挂载光盘
       第二步：让yum文件失效
            /etc/yum.repos.d/CentOS-Base.repo
            /etc/yum.repos.d/CentOS-Debuginfo.repo
            /etc/yum.repos.d/CentOS-Vault.repo
       第三步：修改  /etc/yum.repos.d/CentOS-Media.repo
`)],-1),u=n("p",null,"2.源码包",-1),i=n("pre",null,[n("code",null,`rpm服务安装位置
    /etc/rc.d/init.d

安装位置不同

安装gcc 

./configure
`)],-1),_=[m,s,c,u,i];function d(l,a){return r(),t("div",null,_)}const y=e(p,[["render",d],["__file","03.软件包管理..html.vue"]]);export{y as default};
