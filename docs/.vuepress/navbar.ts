import {navbar} from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
//专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
    {
        text: "首页",
        icon: "tool",
        link: "",
    },
    {
        text: "编程语言",
        icon: "blog",
        prefix: "编程语言",
        children: [
            {
                text: "个人理解",
                icon: "chrome",
                link: "个人理解/个人理解",
            },
            {
                text: "C",
                icon: "chrome",
                link: "c/1.环境搭建",
            },
            {
                text: "C++",
                icon: "chrome",
                link: "c++",
            },
            {
                text: "java",
                icon: "chrome",
                link: "java",
            },
        ]
    },
    {
        text: "硬件",
        icon: "blog",
        children: [
            {
                text: "STM32",
                icon: "chrome",
                link: "apps/Chrome",
            },
            {
                text: "ESP",
                icon: "chrome",
                link: "apps/Chrome",
            },
            {
                text: "通信协议",
                icon: "chrome",
                link: "apps/Chrome",
            },
        ]
    },
    {
        text: "数据结构和算法",
        icon: "blog",
        link: "/数据结构和算法"
    },
    {
        text: "科学基础知识",
        icon: "app",
        prefix: "/",
        children: [
            {
                text: "数学/物理",
                icon: "chrome",
                link: "apps/Chrome",
            },
            {
                text: "生物/化学",
                icon: "chrome",
                link: "apps/Chrome",
            },
            {
                text: "英语",
                icon: "chrome",
                link: "apps/Chrome",
            },
        ],
    },
    {
        text: "工具",
        icon: "tool",
        link: "/tool",
    }
]);
