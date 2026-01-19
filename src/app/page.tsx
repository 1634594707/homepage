import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { name, headline } from '@/config/infoConfig'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { AnimatedAvatar } from '@/components/home/AnimatedAvatar'
import { SplineSceneBasic } from '@/components/home/SplineSceneBasic'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 6)

  return (
    <>
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section - 极简居中设计 */}
      <section className="min-h-screen flex items-center justify-center py-16 relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Avatar with floating animation */}
              <ScrollReveal>
                <div className="relative group">
                  <AnimatedAvatar />
                </div>
              </ScrollReveal>

              {/* Name and Title */}
              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-serif italic tracking-wide text-foreground">
                    {name}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                    {headline}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    📍 杭州 · 中国
                  </p>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={200}>
                <SocialLinks className="mt-4" />
              </ScrollReveal>

              {/* Quick Navigation */}
              <ScrollReveal delay={300}>
                <div className="flex items-center gap-6 pt-8">
                  <Link
                    href="/about"
                    className="group flex flex-col items-center gap-2 p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span className="text-xs font-light tracking-wide">关于</span>
                  </Link>
                  <Link
                    href="/blogs"
                    className="group flex flex-col items-center gap-2 p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span className="text-xs font-light tracking-wide">博客</span>
                  </Link>
                  <Link
                    href="/projects"
                    className="group flex flex-col items-center gap-2 p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                    </svg>
                    <span className="text-xs font-light tracking-wide">项目</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3D Interactive Section with About */}
      <section className="py-16 border-t border-muted-foreground/10">
        <Container>
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <SplineSceneBasic />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-24 border-t border-muted-foreground/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif italic tracking-wide mb-4">
                  最新博客
                </h2>
                <p className="text-muted-foreground font-light tracking-wide">
                  分享我在后端开发和技术学习中的思考
                </p>
              </div>
            </ScrollReveal>

            {/* Blog List */}
            <div className="space-y-0">
              {blogList.map((blog: BlogType, index) => (
                <ScrollReveal key={blog.slug} delay={index * 50}>
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="block group py-6 border-b border-muted-foreground/10 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors mb-2">
                          {blog.title}
                        </h3>
                        {blog.description && (
                          <p className="text-sm text-muted-foreground/70 line-clamp-2 font-light">
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

            {/* Empty State */}
            {blogList.length === 0 && (
              <ScrollReveal>
                <div className="text-center py-16 text-muted-foreground/60">
                  <p className="text-sm font-light">暂无博客文章</p>
                </div>
              </ScrollReveal>
            )}

            {/* View All Link */}
            {blogList.length > 0 && (
              <ScrollReveal delay={100}>
                <div className="text-center mt-12">
                  <Link 
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground/20 hover:border-primary pb-1 font-light tracking-wide"
                  >
                    <span>查看全部博客</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
