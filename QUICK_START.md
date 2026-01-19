# 快速开始指南

## 🎯 已完成的更新

### 1. 头像动画 ✨
参考 homepage-main 的设计，头像现在具有：
- 光环脉冲效果
- 浮动动画
- 鼠标跟随
- 悬停缩放和旋转

### 2. 微信二维码弹窗 🎴
创建了堆叠卡片效果的弹窗：
- 三层卡片堆叠
- 悬停旋转动画
- 弹簧进入/退出效果

## 🚀 如何使用

### 查看效果

1. **启动开发服务器**
```bash
cd MP1-main/MP1-main
npm run dev
```

2. **访问主页**
打开浏览器访问 `http://localhost:3000`

3. **测试功能**
- 查看头像动画效果
- 移动鼠标到头像上查看跟随效果
- 点击社交链接区域的二维码图标查看弹窗

### 自定义二维码图片

将你的微信二维码图片放到 `public` 目录：
```
public/
  └── 1.png  ← 你的微信二维码
```

或者修改 `SocialLinks.tsx` 中的路径：
```tsx
<WeChatQRModal 
  isOpen={showQR} 
  onClose={() => setShowQR(false)}
  qrCodeUrl="/your-qr-code.jpg"  // 修改这里
/>
```

## 📁 文件结构

```
MP1-main/MP1-main/
├── src/
│   └── components/
│       └── home/
│           ├── AnimatedAvatar.tsx      ← 增强的头像组件
│           ├── WeChatQRModal.tsx       ← 新增：微信弹窗
│           └── SocialLinks.tsx         ← 已更新：集成弹窗
├── public/
│   └── 1.png                           ← 你的二维码图片
├── AVATAR_ANIMATION_GUIDE.md           ← 头像动画说明
├── WECHAT_QR_MODAL_GUIDE.md            ← 弹窗组件说明
├── UPDATES_SUMMARY.md                  ← 更新总结
└── QUICK_START.md                      ← 本文件
```

## 🎨 效果预览

### 头像动画
- ✅ 页面加载时淡入并旋转
- ✅ 持续的上下浮动
- ✅ 蓝色光环脉冲
- ✅ 鼠标移动时头像跟随
- ✅ 悬停时放大和旋转

### 微信弹窗
- ✅ 点击二维码图标打开
- ✅ 三层卡片堆叠效果
- ✅ 悬停时整体旋转 5°
- ✅ 背景卡片动态调整
- ✅ 点击遮罩或关闭按钮关闭

## 🔧 自定义选项

### 修改头像动画速度
编辑 `AnimatedAvatar.tsx`:
```tsx
// 浮动速度
transition={{
  duration: 3,  // 改为 2 或 4
  repeat: Infinity,
  ease: "easeInOut"
}}

// 光环脉冲速度
transition={{
  duration: 2,  // 改为 1.5 或 3
  repeat: Infinity,
  ease: "easeInOut"
}}
```

### 修改弹窗样式
编辑 `WeChatQRModal.tsx`:
```tsx
// 修改卡片宽度
style={{ width: '60%', maxWidth: '450px' }}

// 修改旋转角度
className="... hover:rotate-[8deg]"

// 修改背景卡片角度
style={{ transform: 'translateY(-2%) rotate(-8deg)' }}
```

## 📚 详细文档

- **头像动画**: 查看 `AVATAR_ANIMATION_GUIDE.md`
- **微信弹窗**: 查看 `WECHAT_QR_MODAL_GUIDE.md`
- **完整更新**: 查看 `UPDATES_SUMMARY.md`

## ⚠️ 注意事项

1. **二维码图片**: 确保 `public/1.png` 存在
2. **依赖项**: framer-motion 已安装 (v12.27.0)
3. **浏览器**: 需要现代浏览器支持
4. **性能**: 在低端设备上可能需要优化动画

## 🐛 常见问题

### Q: 二维码不显示？
A: 检查 `public/1.png` 是否存在，或修改 `qrCodeUrl` 路径

### Q: 动画卡顿？
A: 尝试减少动画复杂度或降低动画频率

### Q: 暗色模式下样式异常？
A: 检查 Tailwind 的 `dark:` 类是否正确应用

## 🎉 完成！

现在你的主页已经具有：
- ✨ 炫酷的头像动画
- 🎴 精美的微信二维码弹窗
- 🎨 流畅的用户体验

享受你的新主页吧！
