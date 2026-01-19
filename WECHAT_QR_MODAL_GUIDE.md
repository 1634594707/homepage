# 微信二维码弹窗组件说明

## 概述
创建了一个带有堆叠卡片效果的微信二维码弹窗组件，参考了 Uiverse.io 的堆叠卡片设计。

## 组件特性

### 1. 堆叠卡片效果
- **三层卡片**: 主卡片 + 两层背景卡片
- **旋转角度**: 
  - 背景卡片1: -6° (悬停时 -4°)
  - 背景卡片2: +6° (悬停时 +4°)
- **垂直偏移**: 
  - 背景卡片1: -2%
  - 背景卡片2: +2%

### 2. 悬停动画
- **主卡片旋转**: 悬停时整体旋转 5°
- **背景卡片调整**: 悬停时背景卡片角度减小，营造"展开"效果
- **过渡时间**: 250ms (主容器), 150ms (卡片)
- **缓动函数**: ease-in-out

### 3. 弹窗动画
- **进入动画**:
  - 缩放: 0.8 → 1.0
  - 透明度: 0 → 1
  - 旋转: -10° → 0°
- **退出动画**:
  - 缩放: 1.0 → 0.8
  - 透明度: 1 → 0
  - 旋转: 0° → 10°
- **弹簧效果**: damping: 25, stiffness: 300

### 4. 布局设计
- **宽高比**: 3:2 (卡片整体)
- **二维码区域**: 1:1 (正方形)
- **响应式宽度**: 55% (最大 400px)
- **内边距**: 5% (上左右), 15% (下)

### 5. 视觉效果
- **边框**: 4px 实线边框
- **圆角**: 2xl (1rem)
- **背景模糊**: backdrop-blur-sm
- **阴影**: shadow-2xl
- **背景遮罩**: 黑色 60% 透明度

## 使用方法

### 基础用法
```tsx
import { WeChatQRModal } from '@/components/home/WeChatQRModal'

function MyComponent() {
  const [showQR, setShowQR] = useState(false)

  return (
    <>
      <button onClick={() => setShowQR(true)}>
        显示微信二维码
      </button>
      
      <WeChatQRModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)}
        qrCodeUrl="/wechat-qr.jpg"
      />
    </>
  )
}
```

### Props 说明
- `isOpen`: boolean - 控制弹窗显示/隐藏
- `onClose`: () => void - 关闭弹窗的回调函数
- `qrCodeUrl`: string (可选) - 二维码图片路径，默认 '/wechat-qr.jpg'

### 集成到 SocialLinks
已经集成到 `SocialLinks` 组件中：
- 点击二维码图标 (QrCode) 触发弹窗
- 自动使用 `/1.png` 作为二维码图片

## 技术实现

### 使用的技术
- **framer-motion**: 动画效果
  - `AnimatePresence`: 进入/退出动画
  - `motion.div`: 动画容器
- **Next.js Image**: 图片优化
- **Lucide React**: 图标 (X 关闭按钮)
- **Tailwind CSS**: 样式

### 核心 CSS 技巧
```css
/* 堆叠效果 */
.card-main {
  position: relative;
  z-index: 1;
}

/* 背景卡片 */
.card-main::before,
.card-main::after {
  position: absolute;
  z-index: -1;
  transform-origin: center center;
}

/* 悬停时调整背景卡片 */
.stack-wrapper:hover .card-main::before {
  transform: translateY(-2%) rotate(-4deg);
}
```

## 设计参考

### 原始 CSS 样式
参考了 Uiverse.io 的堆叠卡片设计：
- 3:2 宽高比
- 三层卡片堆叠
- 旋转和偏移效果
- 悬停时的动态调整

### 改进点
1. **添加了 Framer Motion 动画**: 更流畅的进入/退出效果
2. **响应式设计**: 适配移动端
3. **暗色模式支持**: 自动适配主题
4. **关闭按钮**: 更好的用户体验
5. **背景模糊**: 更现代的视觉效果

## 浏览器兼容性

- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 需要支持 CSS `aspect-ratio` 属性
- 需要支持 CSS transforms 和 transitions
- 需要支持 backdrop-filter (背景模糊)

## 文件位置

- **组件**: `src/components/home/WeChatQRModal.tsx`
- **使用位置**: `src/components/home/SocialLinks.tsx`
- **二维码图片**: `public/1.png` (可自定义)

## 自定义建议

### 修改卡片尺寸
```tsx
// 在组件中修改
style={{ width: '60%', maxWidth: '450px' }}
```

### 修改旋转角度
```tsx
// 修改悬停旋转
className="... hover:rotate-[8deg]"

// 修改背景卡片角度
style={{ transform: 'translateY(-2%) rotate(-8deg)' }}
```

### 修改动画速度
```tsx
// 修改过渡时间
className="transition-transform duration-[300ms]"

// 修改弹簧效果
transition={{ type: 'spring', damping: 20, stiffness: 250 }}
```

### 添加更多层
可以添加第三、第四层背景卡片，只需：
1. 复制背景卡片 div
2. 调整 z-index (-30, -40...)
3. 调整旋转角度和偏移量
