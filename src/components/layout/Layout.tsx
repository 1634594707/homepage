'use client'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { usePathname } from 'next/navigation'

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      <div className="relative flex w-full flex-col">
        {!isHomePage && <Header />}
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
