'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface WeChatQRModalProps {
  isOpen: boolean
  onClose: () => void
  qrCodeUrl?: string
}

export function WeChatQRModal({ isOpen, onClose, qrCodeUrl = '/wechat-qr.jpg' }: WeChatQRModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* 模态框内容 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-sm"
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="关闭"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 标题 */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif mb-2">微信联系我</h3>
                <p className="text-sm text-muted-foreground">扫描二维码添加好友</p>
              </div>

              {/* 二维码图片 */}
              <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={qrCodeUrl}
                  alt="微信二维码"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
