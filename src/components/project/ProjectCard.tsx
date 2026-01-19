"use client"

import { ArrowRightIcon, HashIcon, Calendar } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer";

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const utmLink = `https://${project.link.href}?utm_source=${utm_source}`
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col h-full w-full rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-muted-foreground/30 overflow-hidden bg-card">
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-muted-foreground/10 bg-muted/30">
          <div className='flex items-start justify-between gap-3'>
            <div className='flex-1'>
              <Component className="text-lg font-serif mb-2 leading-tight">
                {project.name}
              </Component>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                <Calendar size={14} />
                <span>{project.link.label}</span>
              </div>
            </div>
            <ArrowUpRight size={20} weight="duotone" className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-6 py-5">
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="px-6 py-4 bg-muted/20">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-full bg-background/50 border border-muted-foreground/10 text-xs text-muted-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link
          href={utmLink}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'
        />
      </div>
    </li>
  )
}
