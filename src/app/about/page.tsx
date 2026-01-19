import { type Metadata } from 'next'
import { aboutMeHeadline, aboutParagraphs, techIcons } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { projects, awards, awardsHeadLine, workExperience, workHeadLine, activities, activitiesHeadLine } from '@/config/projects'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import IconCloud from "@/components/ui/icon-cloud"

export const metadata: Metadata = {
  title: 'About',
  description: '关于我 - 江皓铖的个人简介、项目经验、工作经历和教育背景',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      {/* 个人简介和技术栈 - 并排布局 */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左侧：个人简介 */}
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-serif italic mb-4">{aboutMeHeadline}</h1>
                <div className="w-16 h-px bg-primary"></div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base font-light">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 右侧：技术栈 */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-serif italic mb-4">技术栈</h2>
                <div className="w-16 h-px bg-primary"></div>
              </div>
              <div className="relative flex items-center justify-center w-full h-[400px]">
                <IconCloud iconSlugs={techIcons} />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 工作经历和教育背景 */}
      <ScrollReveal delay={100}>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-serif italic mb-4">工作经历</h2>
              <div className="w-16 h-px bg-primary"></div>
            </div>
            <Career />
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-serif italic mb-4">教育背景</h2>
              <div className="w-16 h-px bg-primary"></div>
            </div>
            <Education />
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* 获奖荣誉 */}
      <ScrollReveal delay={200}>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-serif italic mb-4">{awardsHeadLine}</h2>
          <div className="w-16 h-px bg-primary"></div>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <ActivityCard key={award.name} activity={award} titleAs='h3'/>
          ))}
        </ul>
      </div>
      </ScrollReveal>

      {/* 实习经历 */}
      <ScrollReveal delay={300}>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-serif italic mb-4">{workHeadLine}</h2>
          <div className="w-16 h-px bg-primary"></div>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workExperience.map((work) => (
            <ActivityCard key={work.name} activity={work} titleAs='h3'/>
          ))}
        </ul>
      </div>
      </ScrollReveal>

      {/* 项目经验 */}
      <ScrollReveal delay={400}>
      <div id="projects" className="max-w-7xl mx-auto mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-serif italic mb-4">项目经验</h2>
          <div className="w-16 h-px bg-primary"></div>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} titleAs='h3'/>
          ))}
        </ul>
      </div>
      </ScrollReveal>

      {/* 兴趣爱好 */}
      <ScrollReveal delay={500}>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-serif italic mb-4">{activitiesHeadLine}</h2>
          <div className="w-16 h-px bg-primary"></div>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} titleAs='h3'/>
          ))}
        </ul>
      </div>
      </ScrollReveal>
    </Container>
  )
}
