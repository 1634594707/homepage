"use client"

import { Calendar, Clock, MapPin } from 'lucide-react'
import { ActivityItemType } from '@/config/projects'
import Link from 'next/link'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col h-full w-full rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-muted-foreground/30 overflow-hidden bg-card">
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-muted-foreground/10 bg-muted/30">
          <div className='flex items-center gap-3'>
            <Calendar size={20} className="flex-shrink-0 text-muted-foreground/60" />
            <Component className="text-lg font-serif leading-tight">
              {activity.name}
            </Component>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-6 py-5">
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {activity.description}
          </p>
        </div>

        {/* Footer Section */}
        <div className="px-6 py-4 bg-muted/20">
          <div className='flex flex-wrap items-center gap-4 text-xs text-muted-foreground/70'>
            <div className="flex items-center gap-1.5">
              <Clock size={14} /> 
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} /> 
              <span>{activity.location}</span>
            </div>
          </div>
        </div>
      </div>
      {activity.link && (
        <Link
          href={activity.link}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'
        />
      )}
    </li>
  )
}
