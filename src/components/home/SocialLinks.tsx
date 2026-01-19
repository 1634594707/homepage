"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Copy, Check, QrCode } from 'lucide-react'
import { WeChatQRModal } from './WeChatQRModal'
import { createPortal } from 'react-dom'

export default function SocialLinks({ className }: { className?: string }) {
    const [showEmail, setShowEmail] = useState(false)
    const [copied, setCopied] = useState(false)
    const [showQR, setShowQR] = useState(false)
    const [mounted, setMounted] = useState(false)

    // 确保只在客户端渲染 portal
    useState(() => {
        setMounted(true)
    })

    return (
        <div className={cn("mt-6", className)}>
            <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={`${link.href}?utm_source=${utm_source}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    >
                        <CustomIcon name={link.icon} />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
                
                {/* Email Toggle Button */}
                <button
                    onClick={() => setShowEmail(!showEmail)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    title="显示邮箱"
                >
                    <CustomIcon name='email' />
                </button>

                {/* WeChat QR Code Button */}
                <button
                    onClick={() => setShowQR(!showQR)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    title="微信二维码"
                >
                    <QrCode size={18} />
                </button>
            </div>
            
            {/* Email Display with Copy (shown when clicked) */}
            {showEmail && (
                <div className="mt-4 text-center animate-in fade-in slide-in-from-top-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                        <span className="text-muted-foreground">{email}</span>
                        <button
                            onClick={copyEmail}
                            className="inline-flex items-center justify-center hover:text-primary transition-colors"
                            title="复制邮箱"
                        >
                            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>
            )}
            
            {/* Copy Success Message */}
            {copied && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-2 text-center animate-in fade-in">
                    ✓ 已复制
                </p>
            )}

            {/* WeChat QR Code Modal - 使用 Portal 渲染到 body */}
            {mounted && typeof document !== 'undefined' && createPortal(
                <WeChatQRModal 
                    isOpen={showQR} 
                    onClose={() => setShowQR(false)}
                    qrCodeUrl="/1.png"
                />,
                document.body
            )}
        </div>
    )

    function copyEmail() {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
}
