export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '江皓铖'
export const headline = '后端开发（AI方向） · 2026届 · 杭州'
export const introduction =
  "聚焦后端与 AI 工程实践，熟悉 RAG、Agent Loop、多模型接入与工程化落地。具备独立模块开发能力，重视代码质量、可维护性与系统可观测性，期待在真实业务场景中持续打磨工程能力。"
export const email = '1634594707@qq.com'
export const githubUsername = '1634594707'

// about page
export const aboutMeHeadline = '关于我'
export const aboutParagraphs = [
  "我是江皓铖，温州大学人工智能专业 2026 届本科生，求职方向为后端开发（AI 方向），期望城市杭州。",
  '技术栈覆盖 FastAPI / Spring Boot / NestJS，具备 PostgreSQL（pgvector）/ Neo4j / Redis 的落地经验，能够独立完成模块设计、开发与优化。',
  "在实习与项目中持续实践 RAG、SSE 流式推送、工具白名单、双库一致与缓存治理，注重稳定性、可追溯性和团队协作效率。",
]

// blog
export const blogHeadLine = "技术博客"
export const blogIntro =
  "记录后端开发、AI 系统设计与工程实践中的思考。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/1634594707',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'python',
  'java',
  'typescript',
  'spring',
  'springboot',
  'fastapi',
  'nestjs',
  'redis',
  'postgresql',
  'neo4j',
  'openai',
  'docker',
  'git',
  'github',
  'linux',
  'jwt',
]
