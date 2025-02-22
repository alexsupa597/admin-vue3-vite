# admin-vue3-vite

一个功能偏基础的后台管理模板架子，基于最新的 Vue 前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, ElementPlus 和 UnoCSS。A clean admin template, based on Vue3, Vite5, TypeScript, Pinia, ElementPlus and UnoCSS.

包含了 通用的基础封装，比如 http 请求...等等,模版中不会包含特别多预定义的页面，但是会提供一些组件，比如：

- 通用的基础封装，比如 http 请求，缓存，...等等
- 通用的基础组件，比如：按钮，输入框，表格...等等
- 通用的基础布局，比如：侧边栏，顶部栏，底部栏...等等
- 通用的基础工具函数，比如：日期格式化，金额格式化，上传，下载，二维码...等等
- 通用的基础 hooks，比如：useRequest，useTable，useForm...等等
- 通用的基础配置，比如：路由，菜单，权限...等等
- eslint\prettier\husky

待开发（router, authRouter, layout），会持续增加功能；敬请期待；

如果对您有帮助的话，请帮忙给个小 star⭐️。另外，可关注公众号“到我啦”，会分享一些前端和比较生活的一些消息。

指不定能看到什么，因为我也没想到写什么好。哈哈哈。Have a nice day!

## 使用

**环境准备**

确保你的环境满足以下要求：

- **git**: 你需要 git 来克隆和管理项目版本。
- **NodeJS**: >=18.12.0，推荐 18.19.0 或更高。
- **pnpm**: >= 8.7.0，推荐 8.14.0 或更高。

**克隆项目**

```bash
git clone https://github.com/alexsupa597/admin-vue3-vite.git
```

**安装依赖**

```bash
pnpm i
```

> 由于本项目采用了 pnpm monorepo 的管理方式，因此请不要使用 npm 或 yarn 来安装依赖。

**启动项目**

```bash
pnpm dev
```

**构建项目**

```bash
pnpm build
```

## 如何贡献

我们热烈欢迎并感谢所有形式的贡献。欢迎通过提交 [pull requests](https://github.com/alexsupa597/admin-vue3-vite/pulls) 或创建 GitHub [issue](https://github.com/alexsupa597/admin-vue3-vite/issues) 来分享。特别鸣谢开源作者：soybean

## Git 提交规范

本项目后续会内置 `commit` 命令，您可以通过执行 `pnpm commit` 来生成符合 [Conventional Commits](<[conventionalcommits](https://www.conventionalcommits.org/)>) 规范的提交信息。在手动提交 PR 时，请务必提交标准的 commit 信息，以确保信息的规范性。

## 浏览器支持

推荐使用最新版的 Chrome 浏览器进行开发，以获得更好的体验。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
