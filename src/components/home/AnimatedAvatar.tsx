'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { name } from '@/config/infoConfig'

// 头像动画变体
const avatarVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
    }
  }
}

export function AnimatedAvatar() {
  // 鼠标跟随效果
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (clientX - left - width / 2) / 10
    const y = (clientY - top - height / 2) / 10
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div 
      className="relative group inline-block"
      variants={avatarVariants}
      initial="hidden"
      animate="visible"
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-24 h-24 relative">
        {/* 头像光环脉冲效果 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.3)",
              "0 0 0 20px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0.3)",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* 浮动动画 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-muted-foreground/10 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 cursor-pointer">
            <Image
              src="/2.jpg"
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
            {/* 悬停渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
