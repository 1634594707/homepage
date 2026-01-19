# 江皓铖的个人主页

> 一个现代化、极简优雅的个人主页，采用 Next.js 14 + TypeScript + Tailwind CSS 构建

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ 特性

- 🎨 **极简设计** - 受 homepage-main 启发的优雅单列布局
- 🤖 **3D 交互** - 集成 Spline 3D 机器人展示
- 🌓 **主题切换** - 支持亮色/暗色模式自动切换
- 📱 **响应式** - 完美适配桌面端和移动端
- 📝 **博客系统** - 基于 MDX 的博客文章管理
- 🎯 **项目展示** - 展示个人项目和技术栈
- ⚡ **性能优化** - 使用 Next.js 14 App Router 和服务端渲染
- 🎭 **动画效果** - Framer Motion 驱动的流畅动画

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 pnpm

### 安装

```bash
# 克隆仓库
git clone git@github.com:1634594707/homepage.git
cd homepage

# 安装依赖
npm install
# 或使用 pnpm
pnpm install
```

### 开发

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建

```bash
# 生产构建
npm run build

# 启动生产服务器
npm start
```

## � 项目结构

```
MP1-main/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── page.tsx           # 主页
│   │   ├── about/             # 关于页面
│   │   ├── blogs/             # 博客页面
│   │   └── projects/          # 项目页面
│   ├── components/            # React 组件
│   │   ├── home/              # 主页组件
│   │   ├── layout/            # 布局组件
│   │   ├── shared/            # 共享组件
│   │   └── ui/                # UI 组件库
│   ├── config/                # 配置文件
│   │   ├── infoConfig.ts      # 个人信息配置
│   │   ├── projects.ts        # 项目配置
│   │   └── siteConfig.ts      # 网站配置
│   ├── content/               # 内容文件
│   │   └── blog/              # 博客文章 (MDX)
│   ├── lib/                   # 工具函数
│   └── styles/                # 样式文件
├── public/                    # 静态资源
└── package.json
```

## 🎨 技术栈

### 核心框架
- **Next.js 14** - React 框架，支持 App Router
- **React 18** - UI 库
- **TypeScript** - 类型安全

### 样式
- **Tailwind CSS** - 原子化 CSS 框架
- **shadcn/ui** - 高质量 UI 组件
- **Framer Motion** - 动画库

### 3D 渲染
- **Spline** - 3D 场景渲染
- **@splinetool/react-spline** - React 集成

### 内容管理
- **MDX** - Markdown + JSX
- **gray-matter** - Front matter 解析
- **rehype-prism** - 代码高亮

### 其他
- **next-themes** - 主题管理
- **lucide-react** - 图标库
- **react-icon-cloud** - 技术栈图标云

## ⚙️ 配置

### 个人信息配置

编辑 `src/config/infoConfig.ts` 文件：

```typescript
export const name = '你的名字'
export const headline = '你的职位'
export const introduction = '你的简介'
export const email = 'your@email.com'
export const githubUsername = 'your-github-username'

export const aboutParagraphs = [
  "第一段个人简介",
  "第二段个人简介",
  "第三段个人简介",
]

export const techIcons = [
  'java', 'spring', 'mysql', 'redis', // 你的技术栈
]
```

### 项目配置

编辑 `src/config/projects.ts` 文件添加你的项目、工作经历、教育背景等。

### 博客文章

在 `src/content/blog/` 目录下创建 `.mdx` 文件：

```mdx
---
title: "文章标题"
date: "2025-01-19"
description: "文章描述"
---

文章内容...
```

## 🎯 主要功能

### 主页
- 极简居中设计
- 头像展示
- 社交链接
- 快速导航（关于、博客、项目）
- 主题切换按钮

### 3D 交互区域
- Spline 3D 机器人展示
- 个人简介文字
- 支持主题自动切换

### 关于页面
- 个人简介与技术栈并排展示
- 工作经历和教育背景
- 获奖荣誉
- 实习经历
- 项目经验
- 兴趣爱好

### 博客系统
- MDX 支持
- 代码高亮
- 响应式排版
- 文章列表和详情页

### 项目展示
- 项目卡片展示
- 技术标签
- 项目链接

## 🎨 自定义

### 更换 3D 场景

1. 在 [Spline](https://spline.design/) 创建你的 3D 场景
2. 导出并获取场景 URL
3. 编辑 `src/components/home/SplineSceneBasic.tsx`：

```tsx
<SplineScene 
  scene="你的 Spline 场景 URL"
  className="w-full h-full"
/>
```

### 修改主题色

编辑 `src/styles/tailwind.css` 中的 CSS 变量：

```css
:root {
  --primary: 171 70% 40%;  /* 主题色 */
  /* 其他颜色变量 */
}
```

## 📝 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/1634594707/homepage)

1. Fork 本仓库
2. 在 Vercel 导入项目
3. 自动部署完成

### 其他平台

支持部署到任何支持 Next.js 的平台：
- Netlify
- Railway
- AWS Amplify
- 自托管服务器

## 📄 License

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 设计灵感来自 [homepage-main](https://github.com/example/homepage-main)
- UI 组件基于 [shadcn/ui](https://ui.shadcn.com/)
- 3D 渲染使用 [Spline](https://spline.design/)

## 📧 联系方式

- Email: 1634594707@qq.com
- GitHub: [@1634594707](https://github.com/1634594707)

---

⭐ 如果这个项目对你有帮助，欢迎 Star！
