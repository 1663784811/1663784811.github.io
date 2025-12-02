import {navbar} from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
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
                text: "C/C++",
                icon: "chrome",
                link: "c/01.环境搭建.md",
            },
            {
                text: "java",
                icon: "chrome",
                link: "java/01.环境搭建.md",
            },
            {
                text: "python",
                icon: "chrome",
                link: "python/01.环境搭建.md",
            },
            // {
            //     text: "汇编",
            //     icon: "chrome",
            //     link: "汇编/01.环境搭建.md",
            // },
            {
                text: "安卓",
                icon: "chrome",
                link: "安卓/01.环境搭建.md",
            },
            {
                text: "linux",
                icon: "chrome",
                link: "linux/01.分区.md",
            },
        ]
    },
    {
        text: "硬件",
        icon: "blog",
        children: [
            {
                text: "电路图设计",
                icon: "chrome",
                link: "硬件/电路图设计/01.AltiumDesigner简介.md",
            },
            {
                text: "STM32",
                icon: "chrome",
                link: "硬件/STM32/01.STM32简介.md",
            },
            {
                text: "ESP",
                icon: "chrome",
                link: "硬件/ESP/01.ESP简介.md",
            },
            {
                text: "通信协议与电子元件",
                icon: "chrome",
                link: "硬件/通信协议/通信协议.md",
            },
            {
                text: "freertos",
                icon: "chrome",
                link: "硬件/freertos/01.freertos环境搭建.md",
            },
            {
                text: "lvgl",
                icon: "chrome",
                link: "硬件/lvgl/01LVGL.md",
            },
            {
                text: "u8g2",
                icon: "chrome",
                link: "硬件/u8g2/1.u8g2环境搭建.md",
            },
            {
                text: "编译器",
                icon: "chrome",
                link: "硬件/cmake/01.gcc简介.md",
            },
            {
                text: "FOC",
                icon: "chrome",
                link: "硬件/FOC/01.foc原理.md",
            },
            {
                text: "嵌入式Linux",
                icon: "chrome",
                link: "硬件/linux/01.Linux系统启动过程.md",
            },
            {
                text: "嵌入式QT应用",
                icon: "chrome",
                link: "硬件/QT/01.qt环境搭建.md",
            }
        ]
    },
    {
        text: "数据结构和算法",
        icon: "blog",
        link: "/数据结构和算法/01.排序算法"
    },
    {
        text: "科学基础知识",
        icon: "app",
        prefix: "/",
        children: [
            {
                text: "数学",
                icon: "chrome",
                link: "科学基础知识/数学物理/数学/01.初中数学.md",
            },
            {
                text: "数学/物理",
                icon: "chrome",
                link: "科学基础知识/数学物理/物理/01.电路基础.md",
            },
            {
                text: "生物/化学",
                icon: "chrome",
                link: "科学基础知识/生物化学",
            },
            // {
            //     text: "英语",
            //     icon: "chrome",
            //     link: "科学基础知识/英语",
            // },
            {
                text: "人工智能",
                icon: "chrome",
                link: "科学基础知识/人工智能/01.机器学习.md",
            },
        ],
    },
    {
        text: "基本示例",
        icon: "tool",
        link: "/示例/SpringBoot集成WebSocket.md",
    },
    {
        text: "软件使用或安装",
        icon: "tool",
        link: "/软件使用或安装/01.软件初始化设置.md",
    },
    {
        text: "UI设计",
        icon: "tool",
        link: "/UI设计/01.UI设计规范.md",
    },
    {
        text: "项目案例",
        icon: "tool",
        link: "/项目案例/点餐系统/01.客户需求.md",
    }
]);
