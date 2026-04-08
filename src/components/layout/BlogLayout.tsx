'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
      <div className="max-w-2xl mx-auto">
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
          <header className="mb-10 text-center">
            <time
              dateTime={blog.date}
              className="text-xs text-muted-foreground/60 font-mono mb-4 block tracking-wide"
            >
              {formatDate(blog.date)}
            </time>

            {blog.tags && blog.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-muted-foreground/20 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="blog-reading-font text-[30px] sm:text-[34px] font-medium mb-3 leading-tight tracking-tight">
              {blog.title}
            </h1>

            {blog.description && (
              <p className="blog-reading-font text-sm text-muted-foreground/85 leading-7 max-w-xl mx-auto">
                {blog.description}
              </p>
            )}

            {blog.coverImage && (
              <div className="relative mt-8 overflow-hidden rounded-xl border border-muted-foreground/10">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={1200}
                  height={630}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            )}

            <div className="w-full h-px bg-muted-foreground/15 mt-8"></div>
          </header>

          {/* Article Content */}
          <Prose className="prose-zinc blog-reading-font dark:prose-invert" data-mdx-content>
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
