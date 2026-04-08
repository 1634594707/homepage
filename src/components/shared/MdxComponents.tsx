import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  if (href?.startsWith('#')) {
    return (
      <a
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
      className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
    />
  )
}

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => (
    <Image {...props} className="my-6 rounded-3xl" />
  ),
  a: CustomLink,
  h1: (props: any) => (
    <h1
      className="my-6 text-3xl font-medium tracking-tight sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-12 mb-4 text-2xl font-medium tracking-tight sm:text-[30px]"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mt-8 mb-3 text-xl font-medium tracking-tight sm:text-2xl"
      {...props}
    />
  ),
  p: (props: any) => <p className="my-4 text-[15px] leading-8 opacity-85" {...props} />,
  ul: (props: any) => (
    <ul
      className="my-5 list-inside list-disc space-y-1.5 text-[15px] opacity-85"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="my-5 list-inside list-decimal space-y-1.5 text-[15px] opacity-85"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-8 rounded-r-xl border-l-4 border-primary/60 bg-primary/5 px-5 py-3 italic dark:border-primary/50 dark:bg-primary/10"
      {...props}
    />
  ),
  code: (props: any) => (
    <code className="rounded-md border border-muted-foreground/20 bg-muted/40 px-1.5 py-0.5 text-[0.92em]" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="my-7 overflow-x-auto rounded-xl border border-muted-foreground/15 bg-muted/60 p-4 text-[13px] tracking-tight text-muted-foreground"
      {...props}
    />
  ),
}
