import { type Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { type BlogType, getAllBlogs } from '@/lib/blogs'
import { blogHeadLine, blogIntro } from '@/config/infoConfig'
import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

export const metadata: Metadata = {
  title: 'Blogs',
  description: blogIntro
}

export default async function BlogsIndex() {
  let blogs = await getAllBlogs()

  return (
    <Container className="mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto mb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-serif mb-4">{blogHeadLine}</h1>
          <div className="w-16 h-px bg-muted-foreground/20 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{blogIntro}</p>
        </div>

        {/* Blog List */}
        <div className="space-y-0">
          {blogs.map((blog: BlogType, index) => (
            <ScrollReveal key={blog.slug} delay={index * 50}>
              <Link 
              href={`/blogs/${blog.slug}`}
              className="block group py-6 border-b border-muted-foreground/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-baseline justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-medium group-hover:text-primary transition-colors mb-2">
                    {blog.title}
                  </h2>
                  {blog.description && (
                    <p className="text-sm text-muted-foreground/70 line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                </div>
                <time 
                  dateTime={blog.date}
                  className="text-sm text-muted-foreground/60 flex-shrink-0 font-mono tabular-nums"
                  suppressHydrationWarning
                >
                  {new Date(blog.date).toLocaleDateString('zh-CN', { 
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).replace(/\//g, '.')}
                </time>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-16 text-muted-foreground/60">
            <p className="text-sm">暂无博客文章</p>
          </div>
        )}
      </div>
    </Container>
  )
}
