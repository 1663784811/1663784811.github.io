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
                text: "安卓",
                icon: "chrome",
                link: "安卓/01.环境搭建.md",
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
                link: "硬件/STM32/01.STM32简介.md",
            },
            {
                text: "ESP",
                icon: "chrome",
                link: "硬件/ESP/01.ESP简介.md",
            },
            {
                text: "通信协议",
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
                link: "硬件/lvgl/lvgl.md",
            },
            {
                text: "Cmake",
                icon: "chrome",
                link: "硬件/cmake/01.cmaker简介.md",
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
                text: "数学/物理",
                icon: "chrome",
                link: "科学基础知识/数学物理/01.电路基础",
            },
            {
                text: "生物/化学",
                icon: "chrome",
                link: "科学基础知识/生物化学",
            },
            {
                text: "英语",
                icon: "chrome",
                link: "科学基础知识/英语",
            },
        ],
    },
    // {
    //     text: "工具",
    //     icon: "tool",
    //     link: "/tool",
    // }
]);
