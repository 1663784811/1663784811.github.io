import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

// @ts-ignore
const __dirname = getDirname(import.meta.url);
export default hopeTheme({
  // 主题选项：https://theme-hope.vuejs.press/zh/config/theme/layout.html
  hostname: "https://xxxxxxx.xxx",
  iconAssets: "iconfont",
  author: {
    name: "鱼头",
    url: "https://xxxxxxx.xxx",
  },
  logo: "/logo.svg",
  // 是否全局启用路径导航
  breadcrumb: false,
  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: true,

  // 深色模式配置
  darkmode: "switch",
  // 全屏按钮
  fullscreen: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "1663784811/mynote",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 文档存放路径
  docsDir: "docs",

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,
  // 侧边栏排序规则
  sidebarSorter: ['readme', 'order', 'title'],

  // 页脚，支持使用 HTMLString 以显示备案信息等
  footer: `Copyright © 2024-present <span>鱼头笔记</span>`,
  displayFooter: true,
  // copyright 默认为 Copyright © <作者>，设置为禁用以自定义设置页脚
  copyright: false,

  // 页面布局 Frontmatter 配置：https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

  // 隐藏打印按钮
  // print: false,

  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,
});
