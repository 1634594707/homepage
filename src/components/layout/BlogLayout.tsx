'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { Prose } from '@/components/shared/Prose'
import { type BlogType } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'
import { ArrowLeft } from 'lucide-react'

export function BlogLayout({
  blog,
  children,
}: {
  blog: BlogType
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 sm:mt-24">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        {previousPathname && (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="返回"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>返回</span>
          </button>
        )}

        {/* Article Header */}
        <article>
          <header className="mb-12 text-center">
            <time
              dateTime={blog.date}
              className="text-sm text-muted-foreground/60 font-mono mb-4 block"
            >
              {formatDate(blog.date)}
            </time>
            
            <h1 className="text-3xl sm:text-4xl font-serif mb-4 leading-tight">
              {blog.title}
            </h1>

            {blog.description && (
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {blog.description}
              </p>
            )}

            <div className="w-16 h-px bg-muted-foreground/20 mx-auto mt-8"></div>
          </header>

          {/* Article Content */}
          <Prose className="prose-lg" data-mdx-content>
            {children}
          </Prose>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-muted-foreground/10">
            <div className="text-center text-sm text-muted-foreground">
              {blog.author && (
                <p>作者：{blog.author}</p>
              )}
              <p className="mt-2">
                发布于 {new Date(blog.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </footer>
        </article>
      </div>
    </Container>
  )
}
