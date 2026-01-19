# Spline 3D 组件集成文档

## 已完成的工作

### 1. 安装依赖
- ✅ `@splinetool/runtime`
- ✅ `@splinetool/react-spline`
- ✅ `framer-motion` (已存在)

### 2. 创建的组件

#### UI 组件 (`src/components/ui/`)
- **splite.tsx** - Spline 场景包装器，支持懒加载
- **card.tsx** - shadcn Card 组件
- **spotlight.tsx** - 静态聚光灯效果组件
- **spotlight-interactive.tsx** - 交互式聚光灯效果组件

#### 主页组件 (`src/components/home/`)
- **SplineSceneBasic.tsx** - 3D 交互式展示组件，包含：
  - 左侧：标题和描述文本
  - 右侧：3D Spline 场景
  - 背景：聚光灯动画效果

### 3. 样式配置

#### Tailwind 配置 (`tailwind.config.ts`)
添加了 spotlight 动画：
```typescript
animation: {
  spotlight: "spotlight 2s ease .75s 1 forwards",
}
```

#### 全局样式 (`src/styles/tailwind.css`)
添加了 loader 加载动画样式

### 4. 主页集成 (`src/app/page.tsx`)

页面结构：
1. **Hero Section** - 个人名片（头像、姓名、位置、社交链接）
2. **3D Interactive Section** - SplineSceneBasic 组件
3. **个人简介** - 文本介绍
4. **最新博客** - 博客列表

## 使用方法

### 更换 3D 场景
编辑 `src/components/home/SplineSceneBasic.tsx`，修改 scene URL：
```tsx
<SplineScene 
  scene="你的 Spline 场景 URL"
  className="w-full h-full"
/>
```

### 自定义样式
- 修改容器高度：`h-[500px]`
- 修改背景色：`bg-black/[0.96]`
- 调整聚光灯位置：`className="-top-40 left-0 md:left-60 md:-top-20"`

### 创建新的 Spline 组件
```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

## 注意事项

1. Spline 场景使用懒加载，首次加载可能需要时间
2. 加载时显示旋转的 loader 动画
3. 组件已优化为客户端渲染 (`'use client'`)
4. 支持响应式设计，移动端和桌面端自适应

## 下一步

- 可以在 Spline 官网创建自己的 3D 场景
- 导出场景并获取 URL
- 替换到组件中即可使用
